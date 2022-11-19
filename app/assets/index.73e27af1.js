var $d=Object.defineProperty;var Kd=(c,t,e)=>t in c?$d(c,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[t]=e;var Me=(c,t,e)=>(Kd(c,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const h of a.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="146",_i={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Zd=0,Xa=1,Jd=2,wc=1,yc=2,dr=3,Vi=0,qe=1,Vn=2,Un=0,Oi=1,Ya=2,$a=3,Ka=4,Qd=5,Ni=100,tp=101,ep=102,Za=103,Ja=104,np=200,ip=201,rp=202,sp=203,Mc=204,Sc=205,op=206,ap=207,lp=208,cp=209,up=210,hp=0,dp=1,pp=2,Mo=3,fp=4,mp=5,gp=6,vp=7,Cc=0,_p=1,xp=2,wn=0,bp=1,wp=2,yp=3,Mp=4,Sp=5,Ec=300,Ui=301,zi=302,So=303,Co=304,is=306,Eo=1e3,Je=1001,Po=1002,Re=1003,Qa=1004,tl=1005,He=1006,Cp=1007,rs=1008,ni=1009,Ep=1010,Pp=1011,Pc=1012,Tp=1013,Zn=1014,Jn=1015,gr=1016,Ap=1017,Lp=1018,Fi=1020,Dp=1021,Rp=1022,Qe=1023,Ip=1024,Np=1025,ti=1026,Bi=1027,kp=1028,Op=1029,Fp=1030,Vp=1031,Up=1033,Fs=33776,Vs=33777,Us=33778,zs=33779,el=35840,nl=35841,il=35842,rl=35843,zp=36196,sl=37492,ol=37496,al=37808,ll=37809,cl=37810,ul=37811,hl=37812,dl=37813,pl=37814,fl=37815,ml=37816,gl=37817,vl=37818,_l=37819,xl=37820,bl=37821,wl=36492,ii=3e3,se=3001,Bp=3200,Gp=3201,Tc=0,Hp=1,xn="srgb",Qn="srgb-linear",Bs=7680,Wp=519,yl=35044,Ml="300 es",To=1035;class ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let a=0,h=s.length;a<h;a++)s[a].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gs=Math.PI/180,Sl=180/Math.PI;function _r(){const c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Se[c&255]+Se[c>>8&255]+Se[c>>16&255]+Se[c>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]).toLowerCase()}function xe(c,t,e){return Math.max(t,Math.min(e,c))}function qp(c,t){return(c%t+t)%t}function Hs(c,t,e){return(1-e)*c+e*t}function Cl(c){return(c&c-1)===0&&c!==0}function Ao(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}function Rr(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return c/65535;case Uint8Array:return c/255;case Int16Array:return Math.max(c/32767,-1);case Int8Array:return Math.max(c/127,-1);default:throw new Error("Invalid component type.")}}function Ne(c,t){switch(t.constructor){case Float32Array:return c;case Uint16Array:return Math.round(c*65535);case Uint8Array:return Math.round(c*255);case Int16Array:return Math.round(c*32767);case Int8Array:return Math.round(c*127);default:throw new Error("Invalid component type.")}}class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),a=this.x-t.x,h=this.y-t.y;return this.x=a*i-h*s+t.x,this.y=a*s+h*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,i,s,a,h,l,d,p){const f=this.elements;return f[0]=t,f[1]=s,f[2]=l,f[3]=e,f[4]=a,f[5]=d,f[6]=i,f[7]=h,f[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,h=i[0],l=i[3],d=i[6],p=i[1],f=i[4],m=i[7],v=i[2],b=i[5],w=i[8],x=s[0],g=s[3],y=s[6],L=s[1],C=s[4],T=s[7],E=s[2],k=s[5],z=s[8];return a[0]=h*x+l*L+d*E,a[3]=h*g+l*C+d*k,a[6]=h*y+l*T+d*z,a[1]=p*x+f*L+m*E,a[4]=p*g+f*C+m*k,a[7]=p*y+f*T+m*z,a[2]=v*x+b*L+w*E,a[5]=v*g+b*C+w*k,a[8]=v*y+b*T+w*z,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],h=t[4],l=t[5],d=t[6],p=t[7],f=t[8];return e*h*f-e*l*p-i*a*f+i*l*d+s*a*p-s*h*d}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],h=t[4],l=t[5],d=t[6],p=t[7],f=t[8],m=f*h-l*p,v=l*d-f*a,b=p*a-h*d,w=e*m+i*v+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/w;return t[0]=m*x,t[1]=(s*p-f*i)*x,t[2]=(l*i-s*h)*x,t[3]=v*x,t[4]=(f*e-s*d)*x,t[5]=(s*a-l*e)*x,t[6]=b*x,t[7]=(i*d-p*e)*x,t[8]=(h*e-i*a)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,a,h,l){const d=Math.cos(a),p=Math.sin(a);return this.set(i*d,i*p,-i*(d*h+p*l)+h+t,-s*p,s*d,-s*(-p*h+d*l)+l+e,0,0,1),this}scale(t,e){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=e,i[4]*=e,i[7]*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),s=this.elements,a=s[0],h=s[3],l=s[6],d=s[1],p=s[4],f=s[7];return s[0]=e*a+i*d,s[3]=e*h+i*p,s[6]=e*l+i*f,s[1]=-i*a+e*d,s[4]=-i*h+e*p,s[7]=-i*l+e*f,this}translate(t,e){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=e*i[2],i[4]+=e*i[5],i[7]+=e*i[8],this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function Ac(c){for(let t=c.length-1;t>=0;--t)if(c[t]>=65535)return!0;return!1}function vr(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function ei(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function es(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}const Ws={[xn]:{[Qn]:ei},[Qn]:{[xn]:es}},Ye={legacyMode:!0,get workingColorSpace(){return Qn},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,t,e){if(this.legacyMode||t===e||!t||!e)return c;if(Ws[t]&&Ws[t][e]!==void 0){const i=Ws[t][e];return c.r=i(c.r),c.g=i(c.g),c.b=i(c.b),c}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(c,t){return this.convert(c,this.workingColorSpace,t)},toWorkingColorSpace:function(c,t){return this.convert(c,t,this.workingColorSpace)}},Lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pe={r:0,g:0,b:0},$e={h:0,s:0,l:0},Ir={h:0,s:0,l:0};function qs(c,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?c+(t-c)*6*e:e<1/2?t:e<2/3?c+(t-c)*6*(2/3-e):c}function Nr(c,t){return t.r=c.r,t.g=c.g,t.b=c.b,t}class Zt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&i===void 0?this.set(t):this.setRGB(t,e,i)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ye.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Qn){return this.r=t,this.g=e,this.b=i,Ye.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Qn){if(t=qp(t,1),e=xe(e,0,1),i=xe(i,0,1),e===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+e):i+e-i*e,h=2*i-a;this.r=qs(h,a,t+1/3),this.g=qs(h,a,t),this.b=qs(h,a,t-1/3)}return Ye.toWorkingColorSpace(this,s),this}setStyle(t,e=xn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let a;const h=s[1],l=s[2];switch(h){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(a[1],10))/255,this.g=Math.min(255,parseInt(a[2],10))/255,this.b=Math.min(255,parseInt(a[3],10))/255,Ye.toWorkingColorSpace(this,e),i(a[4]),this;if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(a[1],10))/100,this.g=Math.min(100,parseInt(a[2],10))/100,this.b=Math.min(100,parseInt(a[3],10))/100,Ye.toWorkingColorSpace(this,e),i(a[4]),this;break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const d=parseFloat(a[1])/360,p=parseFloat(a[2])/100,f=parseFloat(a[3])/100;return i(a[4]),this.setHSL(d,p,f,e)}break}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],h=a.length;if(h===3)return this.r=parseInt(a.charAt(0)+a.charAt(0),16)/255,this.g=parseInt(a.charAt(1)+a.charAt(1),16)/255,this.b=parseInt(a.charAt(2)+a.charAt(2),16)/255,Ye.toWorkingColorSpace(this,e),this;if(h===6)return this.r=parseInt(a.charAt(0)+a.charAt(1),16)/255,this.g=parseInt(a.charAt(2)+a.charAt(3),16)/255,this.b=parseInt(a.charAt(4)+a.charAt(5),16)/255,Ye.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=xn){const i=Lc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xn){return Ye.fromWorkingColorSpace(Nr(this,pe),t),xe(pe.r*255,0,255)<<16^xe(pe.g*255,0,255)<<8^xe(pe.b*255,0,255)<<0}getHexString(t=xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qn){Ye.fromWorkingColorSpace(Nr(this,pe),e);const i=pe.r,s=pe.g,a=pe.b,h=Math.max(i,s,a),l=Math.min(i,s,a);let d,p;const f=(l+h)/2;if(l===h)d=0,p=0;else{const m=h-l;switch(p=f<=.5?m/(h+l):m/(2-h-l),h){case i:d=(s-a)/m+(s<a?6:0);break;case s:d=(a-i)/m+2;break;case a:d=(i-s)/m+4;break}d/=6}return t.h=d,t.s=p,t.l=f,t}getRGB(t,e=Qn){return Ye.fromWorkingColorSpace(Nr(this,pe),e),t.r=pe.r,t.g=pe.g,t.b=pe.b,t}getStyle(t=xn){return Ye.fromWorkingColorSpace(Nr(this,pe),t),t!==xn?`color(${t} ${pe.r} ${pe.g} ${pe.b})`:`rgb(${pe.r*255|0},${pe.g*255|0},${pe.b*255|0})`}offsetHSL(t,e,i){return this.getHSL($e),$e.h+=t,$e.s+=e,$e.l+=i,this.setHSL($e.h,$e.s,$e.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL($e),t.getHSL(Ir);const i=Hs($e.h,Ir.h,e),s=Hs($e.s,Ir.s,e),a=Hs($e.l,Ir.l,e);return this.setHSL(i,s,a),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Zt.NAMES=Lc;let bi;class Dc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=vr("canvas")),bi.width=t.width,bi.height=t.height;const i=bi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),a=s.data;for(let h=0;h<a.length;h++)a[h]=ei(a[h]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ei(e[i]/255)*255):e[i]=ei(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Rc{constructor(t=null){this.isSource=!0,this.uuid=_r(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let h=0,l=s.length;h<l;h++)s[h].isDataTexture?a.push(js(s[h].image)):a.push(js(s[h]))}else a=js(s);i.url=a}return e||(t.images[this.uuid]=i),i}}function js(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?Dc.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jp=0;class je extends ai{constructor(t=je.DEFAULT_IMAGE,e=je.DEFAULT_MAPPING,i=Je,s=Je,a=He,h=rs,l=Qe,d=ni,p=1,f=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=_r(),this.name="",this.source=new Rc(t),this.mipmaps=[],this.mapping=e,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=h,this.anisotropy=p,this.format=l,this.internalFormat=null,this.type=d,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ec)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Eo:t.x=t.x-Math.floor(t.x);break;case Je:t.x=t.x<0?0:1;break;case Po:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Eo:t.y=t.y-Math.floor(t.y);break;case Je:t.y=t.y<0?0:1;break;case Po:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Ec;class ee{constructor(t=0,e=0,i=0,s=1){ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=this.w,h=t.elements;return this.x=h[0]*e+h[4]*i+h[8]*s+h[12]*a,this.y=h[1]*e+h[5]*i+h[9]*s+h[13]*a,this.z=h[2]*e+h[6]*i+h[10]*s+h[14]*a,this.w=h[3]*e+h[7]*i+h[11]*s+h[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,a;const d=t.elements,p=d[0],f=d[4],m=d[8],v=d[1],b=d[5],w=d[9],x=d[2],g=d[6],y=d[10];if(Math.abs(f-v)<.01&&Math.abs(m-x)<.01&&Math.abs(w-g)<.01){if(Math.abs(f+v)<.1&&Math.abs(m+x)<.1&&Math.abs(w+g)<.1&&Math.abs(p+b+y-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const C=(p+1)/2,T=(b+1)/2,E=(y+1)/2,k=(f+v)/4,z=(m+x)/4,M=(w+g)/4;return C>T&&C>E?C<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(C),s=k/i,a=z/i):T>E?T<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(T),i=k/s,a=M/s):E<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(E),i=z/a,s=M/a),this.set(i,s,a,e),this}let L=Math.sqrt((g-w)*(g-w)+(m-x)*(m-x)+(v-f)*(v-f));return Math.abs(L)<.001&&(L=1),this.x=(g-w)/L,this.y=(m-x)/L,this.z=(v-f)/L,this.w=Math.acos((p+b+y-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ri extends ai{constructor(t=1,e=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ee(0,0,t,e),this.scissorTest=!1,this.viewport=new ee(0,0,t,e);const s={width:t,height:e,depth:1};this.texture=new je(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:He,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Rc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ic extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xp extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Re,this.minFilter=Re,this.wrapR=Je,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,a,h,l){let d=i[s+0],p=i[s+1],f=i[s+2],m=i[s+3];const v=a[h+0],b=a[h+1],w=a[h+2],x=a[h+3];if(l===0){t[e+0]=d,t[e+1]=p,t[e+2]=f,t[e+3]=m;return}if(l===1){t[e+0]=v,t[e+1]=b,t[e+2]=w,t[e+3]=x;return}if(m!==x||d!==v||p!==b||f!==w){let g=1-l;const y=d*v+p*b+f*w+m*x,L=y>=0?1:-1,C=1-y*y;if(C>Number.EPSILON){const E=Math.sqrt(C),k=Math.atan2(E,y*L);g=Math.sin(g*k)/E,l=Math.sin(l*k)/E}const T=l*L;if(d=d*g+v*T,p=p*g+b*T,f=f*g+w*T,m=m*g+x*T,g===1-l){const E=1/Math.sqrt(d*d+p*p+f*f+m*m);d*=E,p*=E,f*=E,m*=E}}t[e]=d,t[e+1]=p,t[e+2]=f,t[e+3]=m}static multiplyQuaternionsFlat(t,e,i,s,a,h){const l=i[s],d=i[s+1],p=i[s+2],f=i[s+3],m=a[h],v=a[h+1],b=a[h+2],w=a[h+3];return t[e]=l*w+f*m+d*b-p*v,t[e+1]=d*w+f*v+p*m-l*b,t[e+2]=p*w+f*b+l*v-d*m,t[e+3]=f*w-l*m-d*v-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,s=t._y,a=t._z,h=t._order,l=Math.cos,d=Math.sin,p=l(i/2),f=l(s/2),m=l(a/2),v=d(i/2),b=d(s/2),w=d(a/2);switch(h){case"XYZ":this._x=v*f*m+p*b*w,this._y=p*b*m-v*f*w,this._z=p*f*w+v*b*m,this._w=p*f*m-v*b*w;break;case"YXZ":this._x=v*f*m+p*b*w,this._y=p*b*m-v*f*w,this._z=p*f*w-v*b*m,this._w=p*f*m+v*b*w;break;case"ZXY":this._x=v*f*m-p*b*w,this._y=p*b*m+v*f*w,this._z=p*f*w+v*b*m,this._w=p*f*m-v*b*w;break;case"ZYX":this._x=v*f*m-p*b*w,this._y=p*b*m+v*f*w,this._z=p*f*w-v*b*m,this._w=p*f*m+v*b*w;break;case"YZX":this._x=v*f*m+p*b*w,this._y=p*b*m+v*f*w,this._z=p*f*w-v*b*m,this._w=p*f*m-v*b*w;break;case"XZY":this._x=v*f*m-p*b*w,this._y=p*b*m-v*f*w,this._z=p*f*w+v*b*m,this._w=p*f*m+v*b*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],a=e[8],h=e[1],l=e[5],d=e[9],p=e[2],f=e[6],m=e[10],v=i+l+m;if(v>0){const b=.5/Math.sqrt(v+1);this._w=.25/b,this._x=(f-d)*b,this._y=(a-p)*b,this._z=(h-s)*b}else if(i>l&&i>m){const b=2*Math.sqrt(1+i-l-m);this._w=(f-d)/b,this._x=.25*b,this._y=(s+h)/b,this._z=(a+p)/b}else if(l>m){const b=2*Math.sqrt(1+l-i-m);this._w=(a-p)/b,this._x=(s+h)/b,this._y=.25*b,this._z=(d+f)/b}else{const b=2*Math.sqrt(1+m-i-l);this._w=(h-s)/b,this._x=(a+p)/b,this._y=(d+f)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,a=t._z,h=t._w,l=e._x,d=e._y,p=e._z,f=e._w;return this._x=i*f+h*l+s*p-a*d,this._y=s*f+h*d+a*l-i*p,this._z=a*f+h*p+i*d-s*l,this._w=h*f-i*l-s*d-a*p,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,a=this._z,h=this._w;let l=h*t._w+i*t._x+s*t._y+a*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=h,this._x=i,this._y=s,this._z=a,this;const d=1-l*l;if(d<=Number.EPSILON){const b=1-e;return this._w=b*h+e*this._w,this._x=b*i+e*this._x,this._y=b*s+e*this._y,this._z=b*a+e*this._z,this.normalize(),this._onChangeCallback(),this}const p=Math.sqrt(d),f=Math.atan2(p,l),m=Math.sin((1-e)*f)/p,v=Math.sin(e*f)/p;return this._w=h*m+this._w*v,this._x=i*m+this._x*v,this._y=s*m+this._y*v,this._z=a*m+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(a),i*Math.cos(a),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6]*s,this.y=a[1]*e+a[4]*i+a[7]*s,this.z=a[2]*e+a[5]*i+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,a=t.elements,h=1/(a[3]*e+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*i+a[8]*s+a[12])*h,this.y=(a[1]*e+a[5]*i+a[9]*s+a[13])*h,this.z=(a[2]*e+a[6]*i+a[10]*s+a[14])*h,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,a=t.x,h=t.y,l=t.z,d=t.w,p=d*e+h*s-l*i,f=d*i+l*e-a*s,m=d*s+a*i-h*e,v=-a*e-h*i-l*s;return this.x=p*d+v*-a+f*-l-m*-h,this.y=f*d+v*-h+m*-a-p*-l,this.z=m*d+v*-l+p*-h-f*-a,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s,this.y=a[1]*e+a[5]*i+a[9]*s,this.z=a[2]*e+a[6]*i+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,a=t.z,h=e.x,l=e.y,d=e.z;return this.x=s*d-a*l,this.y=a*h-i*d,this.z=i*l-s*h,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xs.copy(this).projectOnVector(t),this.sub(Xs)}reflect(t){return this.sub(Xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(xe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xs=new N,El=new si;class xr{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,i=1/0,s=1/0,a=-1/0,h=-1/0,l=-1/0;for(let d=0,p=t.length;d<p;d+=3){const f=t[d],m=t[d+1],v=t[d+2];f<e&&(e=f),m<i&&(i=m),v<s&&(s=v),f>a&&(a=f),m>h&&(h=m),v>l&&(l=v)}return this.min.set(e,i,s),this.max.set(a,h,l),this}setFromBufferAttribute(t){let e=1/0,i=1/0,s=1/0,a=-1/0,h=-1/0,l=-1/0;for(let d=0,p=t.count;d<p;d++){const f=t.getX(d),m=t.getY(d),v=t.getZ(d);f<e&&(e=f),m<i&&(i=m),v<s&&(s=v),f>a&&(a=f),m>h&&(h=m),v>l&&(l=v)}return this.min.set(e,i,s),this.max.set(a,h,l),this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0)if(e&&i.attributes!=null&&i.attributes.position!==void 0){const a=i.attributes.position;for(let h=0,l=a.count;h<l;h++)qn.fromBufferAttribute(a,h).applyMatrix4(t.matrixWorld),this.expandByPoint(qn)}else i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox),Ys.applyMatrix4(t.matrixWorld),this.union(Ys);const s=t.children;for(let a=0,h=s.length;a<h;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,qn),qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(or),kr.subVectors(this.max,or),wi.subVectors(t.a,or),yi.subVectors(t.b,or),Mi.subVectors(t.c,or),Dn.subVectors(yi,wi),Rn.subVectors(Mi,yi),jn.subVectors(wi,Mi);let e=[0,-Dn.z,Dn.y,0,-Rn.z,Rn.y,0,-jn.z,jn.y,Dn.z,0,-Dn.x,Rn.z,0,-Rn.x,jn.z,0,-jn.x,-Dn.y,Dn.x,0,-Rn.y,Rn.x,0,-jn.y,jn.x,0];return!$s(e,wi,yi,Mi,kr)||(e=[1,0,0,0,1,0,0,0,1],!$s(e,wi,yi,Mi,kr))?!1:(Or.crossVectors(Dn,Rn),e=[Or.x,Or.y,Or.z],$s(e,wi,yi,Mi,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return qn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(qn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new N,new N,new N,new N,new N,new N,new N,new N],qn=new N,Ys=new xr,wi=new N,yi=new N,Mi=new N,Dn=new N,Rn=new N,jn=new N,or=new N,kr=new N,Or=new N,Xn=new N;function $s(c,t,e,i,s){for(let a=0,h=c.length-3;a<=h;a+=3){Xn.fromArray(c,a);const l=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),d=t.dot(Xn),p=e.dot(Xn),f=i.dot(Xn);if(Math.max(-Math.max(d,p,f),Math.min(d,p,f))>l)return!1}return!0}const Yp=new xr,ar=new N,Ks=new N;class ss{constructor(t=new N,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Yp.setFromPoints(t).getCenter(i);let s=0;for(let a=0,h=t.length;a<h;a++)s=Math.max(s,i.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ar.subVectors(t,this.center);const e=ar.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ar,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ks.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ar.copy(t.center).add(Ks)),this.expandByPoint(ar.copy(t.center).sub(Ks))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new N,Zs=new N,Fr=new N,In=new N,Js=new N,Vr=new N,Qs=new N;class Nc{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.direction).multiplyScalar(e).add(this.origin),mn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Zs.copy(t).add(e).multiplyScalar(.5),Fr.copy(e).sub(t).normalize(),In.copy(this.origin).sub(Zs);const a=t.distanceTo(e)*.5,h=-this.direction.dot(Fr),l=In.dot(this.direction),d=-In.dot(Fr),p=In.lengthSq(),f=Math.abs(1-h*h);let m,v,b,w;if(f>0)if(m=h*d-l,v=h*l-d,w=a*f,m>=0)if(v>=-w)if(v<=w){const x=1/f;m*=x,v*=x,b=m*(m+h*v+2*l)+v*(h*m+v+2*d)+p}else v=a,m=Math.max(0,-(h*v+l)),b=-m*m+v*(v+2*d)+p;else v=-a,m=Math.max(0,-(h*v+l)),b=-m*m+v*(v+2*d)+p;else v<=-w?(m=Math.max(0,-(-h*a+l)),v=m>0?-a:Math.min(Math.max(-a,-d),a),b=-m*m+v*(v+2*d)+p):v<=w?(m=0,v=Math.min(Math.max(-a,-d),a),b=v*(v+2*d)+p):(m=Math.max(0,-(h*a+l)),v=m>0?a:Math.min(Math.max(-a,-d),a),b=-m*m+v*(v+2*d)+p);else v=h>0?-a:a,m=Math.max(0,-(h*v+l)),b=-m*m+v*(v+2*d)+p;return i&&i.copy(this.direction).multiplyScalar(m).add(this.origin),s&&s.copy(Fr).multiplyScalar(v).add(Zs),b}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const i=mn.dot(this.direction),s=mn.dot(mn)-i*i,a=t.radius*t.radius;if(s>a)return null;const h=Math.sqrt(a-s),l=i-h,d=i+h;return l<0&&d<0?null:l<0?this.at(d,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,a,h,l,d;const p=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,v=this.origin;return p>=0?(i=(t.min.x-v.x)*p,s=(t.max.x-v.x)*p):(i=(t.max.x-v.x)*p,s=(t.min.x-v.x)*p),f>=0?(a=(t.min.y-v.y)*f,h=(t.max.y-v.y)*f):(a=(t.max.y-v.y)*f,h=(t.min.y-v.y)*f),i>h||a>s||((a>i||isNaN(i))&&(i=a),(h<s||isNaN(s))&&(s=h),m>=0?(l=(t.min.z-v.z)*m,d=(t.max.z-v.z)*m):(l=(t.max.z-v.z)*m,d=(t.min.z-v.z)*m),i>d||l>s)||((l>i||i!==i)&&(i=l),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,i,s,a){Js.subVectors(e,t),Vr.subVectors(i,t),Qs.crossVectors(Js,Vr);let h=this.direction.dot(Qs),l;if(h>0){if(s)return null;l=1}else if(h<0)l=-1,h=-h;else return null;In.subVectors(this.origin,t);const d=l*this.direction.dot(Vr.crossVectors(In,Vr));if(d<0)return null;const p=l*this.direction.dot(Js.cross(In));if(p<0||d+p>h)return null;const f=-l*In.dot(Qs);return f<0?null:this.at(f/h,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,i,s,a,h,l,d,p,f,m,v,b,w,x,g){const y=this.elements;return y[0]=t,y[4]=e,y[8]=i,y[12]=s,y[1]=a,y[5]=h,y[9]=l,y[13]=d,y[2]=p,y[6]=f,y[10]=m,y[14]=v,y[3]=b,y[7]=w,y[11]=x,y[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),a=1/Si.setFromMatrixColumn(t,1).length(),h=1/Si.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*a,e[5]=i[5]*a,e[6]=i[6]*a,e[7]=0,e[8]=i[8]*h,e[9]=i[9]*h,e[10]=i[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,a=t.z,h=Math.cos(i),l=Math.sin(i),d=Math.cos(s),p=Math.sin(s),f=Math.cos(a),m=Math.sin(a);if(t.order==="XYZ"){const v=h*f,b=h*m,w=l*f,x=l*m;e[0]=d*f,e[4]=-d*m,e[8]=p,e[1]=b+w*p,e[5]=v-x*p,e[9]=-l*d,e[2]=x-v*p,e[6]=w+b*p,e[10]=h*d}else if(t.order==="YXZ"){const v=d*f,b=d*m,w=p*f,x=p*m;e[0]=v+x*l,e[4]=w*l-b,e[8]=h*p,e[1]=h*m,e[5]=h*f,e[9]=-l,e[2]=b*l-w,e[6]=x+v*l,e[10]=h*d}else if(t.order==="ZXY"){const v=d*f,b=d*m,w=p*f,x=p*m;e[0]=v-x*l,e[4]=-h*m,e[8]=w+b*l,e[1]=b+w*l,e[5]=h*f,e[9]=x-v*l,e[2]=-h*p,e[6]=l,e[10]=h*d}else if(t.order==="ZYX"){const v=h*f,b=h*m,w=l*f,x=l*m;e[0]=d*f,e[4]=w*p-b,e[8]=v*p+x,e[1]=d*m,e[5]=x*p+v,e[9]=b*p-w,e[2]=-p,e[6]=l*d,e[10]=h*d}else if(t.order==="YZX"){const v=h*d,b=h*p,w=l*d,x=l*p;e[0]=d*f,e[4]=x-v*m,e[8]=w*m+b,e[1]=m,e[5]=h*f,e[9]=-l*f,e[2]=-p*f,e[6]=b*m+w,e[10]=v-x*m}else if(t.order==="XZY"){const v=h*d,b=h*p,w=l*d,x=l*p;e[0]=d*f,e[4]=-m,e[8]=p*f,e[1]=v*m+x,e[5]=h*f,e[9]=b*m-w,e[2]=w*m-b,e[6]=l*f,e[10]=x*m+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($p,t,Kp)}lookAt(t,e,i){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),Nn.crossVectors(i,ke),Nn.lengthSq()===0&&(Math.abs(i.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),Nn.crossVectors(i,ke)),Nn.normalize(),Ur.crossVectors(ke,Nn),s[0]=Nn.x,s[4]=Ur.x,s[8]=ke.x,s[1]=Nn.y,s[5]=Ur.y,s[9]=ke.y,s[2]=Nn.z,s[6]=Ur.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,a=this.elements,h=i[0],l=i[4],d=i[8],p=i[12],f=i[1],m=i[5],v=i[9],b=i[13],w=i[2],x=i[6],g=i[10],y=i[14],L=i[3],C=i[7],T=i[11],E=i[15],k=s[0],z=s[4],M=s[8],I=s[12],W=s[1],it=s[5],vt=s[9],j=s[13],B=s[2],et=s[6],nt=s[10],X=s[14],J=s[3],G=s[7],q=s[11],st=s[15];return a[0]=h*k+l*W+d*B+p*J,a[4]=h*z+l*it+d*et+p*G,a[8]=h*M+l*vt+d*nt+p*q,a[12]=h*I+l*j+d*X+p*st,a[1]=f*k+m*W+v*B+b*J,a[5]=f*z+m*it+v*et+b*G,a[9]=f*M+m*vt+v*nt+b*q,a[13]=f*I+m*j+v*X+b*st,a[2]=w*k+x*W+g*B+y*J,a[6]=w*z+x*it+g*et+y*G,a[10]=w*M+x*vt+g*nt+y*q,a[14]=w*I+x*j+g*X+y*st,a[3]=L*k+C*W+T*B+E*J,a[7]=L*z+C*it+T*et+E*G,a[11]=L*M+C*vt+T*nt+E*q,a[15]=L*I+C*j+T*X+E*st,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],a=t[12],h=t[1],l=t[5],d=t[9],p=t[13],f=t[2],m=t[6],v=t[10],b=t[14],w=t[3],x=t[7],g=t[11],y=t[15];return w*(+a*d*m-s*p*m-a*l*v+i*p*v+s*l*b-i*d*b)+x*(+e*d*b-e*p*v+a*h*v-s*h*b+s*p*f-a*d*f)+g*(+e*p*m-e*l*b-a*h*m+i*h*b+a*l*f-i*p*f)+y*(-s*l*f-e*d*m+e*l*v+s*h*m-i*h*v+i*d*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],a=t[3],h=t[4],l=t[5],d=t[6],p=t[7],f=t[8],m=t[9],v=t[10],b=t[11],w=t[12],x=t[13],g=t[14],y=t[15],L=m*g*p-x*v*p+x*d*b-l*g*b-m*d*y+l*v*y,C=w*v*p-f*g*p-w*d*b+h*g*b+f*d*y-h*v*y,T=f*x*p-w*m*p+w*l*b-h*x*b-f*l*y+h*m*y,E=w*m*d-f*x*d-w*l*v+h*x*v+f*l*g-h*m*g,k=e*L+i*C+s*T+a*E;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return t[0]=L*z,t[1]=(x*v*a-m*g*a-x*s*b+i*g*b+m*s*y-i*v*y)*z,t[2]=(l*g*a-x*d*a+x*s*p-i*g*p-l*s*y+i*d*y)*z,t[3]=(m*d*a-l*v*a-m*s*p+i*v*p+l*s*b-i*d*b)*z,t[4]=C*z,t[5]=(f*g*a-w*v*a+w*s*b-e*g*b-f*s*y+e*v*y)*z,t[6]=(w*d*a-h*g*a-w*s*p+e*g*p+h*s*y-e*d*y)*z,t[7]=(h*v*a-f*d*a+f*s*p-e*v*p-h*s*b+e*d*b)*z,t[8]=T*z,t[9]=(w*m*a-f*x*a-w*i*b+e*x*b+f*i*y-e*m*y)*z,t[10]=(h*x*a-w*l*a+w*i*p-e*x*p-h*i*y+e*l*y)*z,t[11]=(f*l*a-h*m*a-f*i*p+e*m*p+h*i*b-e*l*b)*z,t[12]=E*z,t[13]=(f*x*s-w*m*s+w*i*v-e*x*v-f*i*g+e*m*g)*z,t[14]=(w*l*s-h*x*s-w*i*d+e*x*d+h*i*g-e*l*g)*z,t[15]=(h*m*s-f*l*s+f*i*d-e*m*d-h*i*v+e*l*v)*z,this}scale(t){const e=this.elements,i=t.x,s=t.y,a=t.z;return e[0]*=i,e[4]*=s,e[8]*=a,e[1]*=i,e[5]*=s,e[9]*=a,e[2]*=i,e[6]*=s,e[10]*=a,e[3]*=i,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),a=1-i,h=t.x,l=t.y,d=t.z,p=a*h,f=a*l;return this.set(p*h+i,p*l-s*d,p*d+s*l,0,p*l+s*d,f*l+i,f*d-s*h,0,p*d-s*l,f*d+s*h,a*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,a,h){return this.set(1,i,a,0,t,1,h,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,a=e._x,h=e._y,l=e._z,d=e._w,p=a+a,f=h+h,m=l+l,v=a*p,b=a*f,w=a*m,x=h*f,g=h*m,y=l*m,L=d*p,C=d*f,T=d*m,E=i.x,k=i.y,z=i.z;return s[0]=(1-(x+y))*E,s[1]=(b+T)*E,s[2]=(w-C)*E,s[3]=0,s[4]=(b-T)*k,s[5]=(1-(v+y))*k,s[6]=(g+L)*k,s[7]=0,s[8]=(w+C)*z,s[9]=(g-L)*z,s[10]=(1-(v+x))*z,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let a=Si.set(s[0],s[1],s[2]).length();const h=Si.set(s[4],s[5],s[6]).length(),l=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);const p=1/a,f=1/h,m=1/l;return Ke.elements[0]*=p,Ke.elements[1]*=p,Ke.elements[2]*=p,Ke.elements[4]*=f,Ke.elements[5]*=f,Ke.elements[6]*=f,Ke.elements[8]*=m,Ke.elements[9]*=m,Ke.elements[10]*=m,e.setFromRotationMatrix(Ke),i.x=a,i.y=h,i.z=l,this}makePerspective(t,e,i,s,a,h){const l=this.elements,d=2*a/(e-t),p=2*a/(i-s),f=(e+t)/(e-t),m=(i+s)/(i-s),v=-(h+a)/(h-a),b=-2*h*a/(h-a);return l[0]=d,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=p,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,a,h){const l=this.elements,d=1/(e-t),p=1/(i-s),f=1/(h-a),m=(e+t)*d,v=(i+s)*p,b=(h+a)*f;return l[0]=2*d,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*p,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=-2*f,l[14]=-b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Si=new N,Ke=new oe,$p=new N(0,0,0),Kp=new N(1,1,1),Nn=new N,Ur=new N,ke=new N,Pl=new oe,Tl=new si;class br{constructor(t=0,e=0,i=0,s=br.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,a=s[0],h=s[4],l=s[8],d=s[1],p=s[5],f=s[9],m=s[2],v=s[6],b=s[10];switch(e){case"XYZ":this._y=Math.asin(xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,b),this._z=Math.atan2(-h,a)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,b),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-m,a),this._z=0);break;case"ZXY":this._x=Math.asin(xe(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-m,b),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-xe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(v,b),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-f,p),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(l,b));break;case"XZY":this._z=Math.asin(-xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-f,b),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Pl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Pl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Tl.setFromEuler(this),this.setFromQuaternion(Tl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}br.DefaultOrder="XYZ";br.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class kc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zp=0;const Al=new N,Ci=new si,gn=new oe,zr=new N,lr=new N,Jp=new N,Qp=new si,Ll=new N(1,0,0),Dl=new N(0,1,0),Rl=new N(0,0,1),tf={type:"added"},Il={type:"removed"};class Ce extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=_r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DefaultUp.clone();const t=new N,e=new br,i=new si,s=new N(1,1,1);function a(){i.setFromEuler(e,!1)}function h(){e.setFromQuaternion(i,void 0,!1)}e._onChange(a),i._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new We}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ce.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ce.DefaultMatrixWorldAutoUpdate,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(Ll,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(Rl,t)}translateOnAxis(t,e){return Al.copy(t).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ll,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(Rl,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?zr.copy(t):zr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(lr,zr,this.up):gn.lookAt(zr,lr,this.up),this.quaternion.setFromRotationMatrix(gn),s&&(gn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(gn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(tf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Il)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Il)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const h=this.children[i].getObjectByProperty(t,e);if(h!==void 0)return h}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,t,Jp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Qp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const a=e[i];(a.matrixWorldAutoUpdate===!0||t===!0)&&a.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let a=0,h=s.length;a<h;a++){const l=s[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function a(l,d){return l[d.uuid]===void 0&&(l[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const d=l.shapes;if(Array.isArray(d))for(let p=0,f=d.length;p<f;p++){const m=d[p];a(t.shapes,m)}else a(t.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let d=0,p=this.material.length;d<p;d++)l.push(a(t.materials,this.material[d]));s.material=l}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const d=this.animations[l];s.animations.push(a(t.animations,d))}}if(e){const l=h(t.geometries),d=h(t.materials),p=h(t.textures),f=h(t.images),m=h(t.shapes),v=h(t.skeletons),b=h(t.animations),w=h(t.nodes);l.length>0&&(i.geometries=l),d.length>0&&(i.materials=d),p.length>0&&(i.textures=p),f.length>0&&(i.images=f),m.length>0&&(i.shapes=m),v.length>0&&(i.skeletons=v),b.length>0&&(i.animations=b),w.length>0&&(i.nodes=w)}return i.object=s,i;function h(l){const d=[];for(const p in l){const f=l[p];delete f.metadata,d.push(f)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ce.DefaultUp=new N(0,1,0);Ce.DefaultMatrixAutoUpdate=!0;Ce.DefaultMatrixWorldAutoUpdate=!0;const Ze=new N,vn=new N,to=new N,_n=new N,Ei=new N,Pi=new N,Nl=new N,eo=new N,no=new N,io=new N;class bn{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ze.subVectors(t,e),s.cross(Ze);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,i,s,a){Ze.subVectors(s,e),vn.subVectors(i,e),to.subVectors(t,e);const h=Ze.dot(Ze),l=Ze.dot(vn),d=Ze.dot(to),p=vn.dot(vn),f=vn.dot(to),m=h*p-l*l;if(m===0)return a.set(-2,-1,-1);const v=1/m,b=(p*d-l*f)*v,w=(h*f-l*d)*v;return a.set(1-b-w,w,b)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,_n),_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getUV(t,e,i,s,a,h,l,d){return this.getBarycoord(t,e,i,s,_n),d.set(0,0),d.addScaledVector(a,_n.x),d.addScaledVector(h,_n.y),d.addScaledVector(l,_n.z),d}static isFrontFacing(t,e,i,s){return Ze.subVectors(i,e),vn.subVectors(t,e),Ze.cross(vn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ze.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Ze.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return bn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,a){return bn.getUV(t,this.a,this.b,this.c,e,i,s,a)}containsPoint(t){return bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,a=this.c;let h,l;Ei.subVectors(s,i),Pi.subVectors(a,i),eo.subVectors(t,i);const d=Ei.dot(eo),p=Pi.dot(eo);if(d<=0&&p<=0)return e.copy(i);no.subVectors(t,s);const f=Ei.dot(no),m=Pi.dot(no);if(f>=0&&m<=f)return e.copy(s);const v=d*m-f*p;if(v<=0&&d>=0&&f<=0)return h=d/(d-f),e.copy(i).addScaledVector(Ei,h);io.subVectors(t,a);const b=Ei.dot(io),w=Pi.dot(io);if(w>=0&&b<=w)return e.copy(a);const x=b*p-d*w;if(x<=0&&p>=0&&w<=0)return l=p/(p-w),e.copy(i).addScaledVector(Pi,l);const g=f*w-b*m;if(g<=0&&m-f>=0&&b-w>=0)return Nl.subVectors(a,s),l=(m-f)/(m-f+(b-w)),e.copy(s).addScaledVector(Nl,l);const y=1/(g+x+v);return h=x*y,l=v*y,e.copy(i).addScaledVector(Ei,h).addScaledVector(Pi,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let ef=0;class Hi extends ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=_r(),this.name="",this.type="Material",this.blending=Oi,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Mo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bs,this.stencilZFail=Bs,this.stencilZPass=Bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const s=this[e];if(s===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Oi&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData);function s(a){const h=[];for(const l in a){const d=a[l];delete d.metadata,h.push(d)}return h}if(e){const a=s(t.textures),h=s(t.images);a.length>0&&(i.textures=a),h.length>0&&(i.images=h)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=e[a].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Io extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ue=new N,Br=new _t;class on{constructor(t,e,i){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i===!0,this.usage=yl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Br.fromBufferAttribute(this,e),Br.applyMatrix3(t),this.setXY(e,Br.x,Br.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,a){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),i=Ne(i,this.array),s=Ne(s,this.array),a=Ne(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Oc extends on{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Fc extends on{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class be extends on{constructor(t,e,i){super(new Float32Array(t),e,i)}}let nf=0;const Be=new oe,ro=new Ce,Ti=new N,Oe=new xr,cr=new xr,ge=new N;class en extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=_r(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ac(t)?Fc:Oc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new We().getNormalMatrix(t);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,i){return Be.makeTranslation(t,e,i),this.applyMatrix4(Be),this}scale(t,e,i){return Be.makeScale(t,e,i),this.applyMatrix4(Be),this}lookAt(t){return ro.lookAt(t),ro.updateMatrix(),this.applyMatrix4(ro.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const a=t[i];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new be(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const a=e[i];Oe.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Oe.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Oe.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Oe.min),this.boundingBox.expandByPoint(Oe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(Oe.setFromBufferAttribute(t),e)for(let a=0,h=e.length;a<h;a++){const l=e[a];cr.setFromBufferAttribute(l),this.morphTargetsRelative?(ge.addVectors(Oe.min,cr.min),Oe.expandByPoint(ge),ge.addVectors(Oe.max,cr.max),Oe.expandByPoint(ge)):(Oe.expandByPoint(cr.min),Oe.expandByPoint(cr.max))}Oe.getCenter(i);let s=0;for(let a=0,h=t.count;a<h;a++)ge.fromBufferAttribute(t,a),s=Math.max(s,i.distanceToSquared(ge));if(e)for(let a=0,h=e.length;a<h;a++){const l=e[a],d=this.morphTargetsRelative;for(let p=0,f=l.count;p<f;p++)ge.fromBufferAttribute(l,p),d&&(Ti.fromBufferAttribute(t,p),ge.add(Ti)),s=Math.max(s,i.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,a=e.normal.array,h=e.uv.array,l=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*l),4));const d=this.getAttribute("tangent").array,p=[],f=[];for(let W=0;W<l;W++)p[W]=new N,f[W]=new N;const m=new N,v=new N,b=new N,w=new _t,x=new _t,g=new _t,y=new N,L=new N;function C(W,it,vt){m.fromArray(s,W*3),v.fromArray(s,it*3),b.fromArray(s,vt*3),w.fromArray(h,W*2),x.fromArray(h,it*2),g.fromArray(h,vt*2),v.sub(m),b.sub(m),x.sub(w),g.sub(w);const j=1/(x.x*g.y-g.x*x.y);!isFinite(j)||(y.copy(v).multiplyScalar(g.y).addScaledVector(b,-x.y).multiplyScalar(j),L.copy(b).multiplyScalar(x.x).addScaledVector(v,-g.x).multiplyScalar(j),p[W].add(y),p[it].add(y),p[vt].add(y),f[W].add(L),f[it].add(L),f[vt].add(L))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let W=0,it=T.length;W<it;++W){const vt=T[W],j=vt.start,B=vt.count;for(let et=j,nt=j+B;et<nt;et+=3)C(i[et+0],i[et+1],i[et+2])}const E=new N,k=new N,z=new N,M=new N;function I(W){z.fromArray(a,W*3),M.copy(z);const it=p[W];E.copy(it),E.sub(z.multiplyScalar(z.dot(it))).normalize(),k.crossVectors(M,it);const j=k.dot(f[W])<0?-1:1;d[W*4]=E.x,d[W*4+1]=E.y,d[W*4+2]=E.z,d[W*4+3]=j}for(let W=0,it=T.length;W<it;++W){const vt=T[W],j=vt.start,B=vt.count;for(let et=j,nt=j+B;et<nt;et+=3)I(i[et+0]),I(i[et+1]),I(i[et+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,b=i.count;v<b;v++)i.setXYZ(v,0,0,0);const s=new N,a=new N,h=new N,l=new N,d=new N,p=new N,f=new N,m=new N;if(t)for(let v=0,b=t.count;v<b;v+=3){const w=t.getX(v+0),x=t.getX(v+1),g=t.getX(v+2);s.fromBufferAttribute(e,w),a.fromBufferAttribute(e,x),h.fromBufferAttribute(e,g),f.subVectors(h,a),m.subVectors(s,a),f.cross(m),l.fromBufferAttribute(i,w),d.fromBufferAttribute(i,x),p.fromBufferAttribute(i,g),l.add(f),d.add(f),p.add(f),i.setXYZ(w,l.x,l.y,l.z),i.setXYZ(x,d.x,d.y,d.z),i.setXYZ(g,p.x,p.y,p.z)}else for(let v=0,b=e.count;v<b;v+=3)s.fromBufferAttribute(e,v+0),a.fromBufferAttribute(e,v+1),h.fromBufferAttribute(e,v+2),f.subVectors(h,a),m.subVectors(s,a),f.cross(m),i.setXYZ(v+0,f.x,f.y,f.z),i.setXYZ(v+1,f.x,f.y,f.z),i.setXYZ(v+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(l,d){const p=l.array,f=l.itemSize,m=l.normalized,v=new p.constructor(d.length*f);let b=0,w=0;for(let x=0,g=d.length;x<g;x++){l.isInterleavedBufferAttribute?b=d[x]*l.data.stride+l.offset:b=d[x]*f;for(let y=0;y<f;y++)v[w++]=p[b++]}return new on(v,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new en,i=this.index.array,s=this.attributes;for(const l in s){const d=s[l],p=t(d,i);e.setAttribute(l,p)}const a=this.morphAttributes;for(const l in a){const d=[],p=a[l];for(let f=0,m=p.length;f<m;f++){const v=p[f],b=t(v,i);d.push(b)}e.morphAttributes[l]=d}e.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let l=0,d=h.length;l<d;l++){const p=h[l];e.addGroup(p.start,p.count,p.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(t[p]=d[p]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const p=i[d];t.data.attributes[d]=p.toJSON(t.data)}const s={};let a=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],f=[];for(let m=0,v=p.length;m<v;m++){const b=p[m];f.push(b.toJSON(t.data))}f.length>0&&(s[d]=f,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const p in s){const f=s[p];this.setAttribute(p,f.clone(e))}const a=t.morphAttributes;for(const p in a){const f=[],m=a[p];for(let v=0,b=m.length;v<b;v++)f.push(m[v].clone(e));this.morphAttributes[p]=f}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,f=h.length;p<f;p++){const m=h[p];this.addGroup(m.start,m.count,m.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const kl=new oe,Ai=new Nc,so=new ss,kn=new N,On=new N,Fn=new N,oo=new N,ao=new N,lo=new N,Gr=new N,Hr=new N,Wr=new N,qr=new _t,jr=new _t,Xr=new _t,co=new N,Yr=new N;class tn extends Ce{constructor(t=new en,e=new Io){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=s.length;a<h;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}raycast(t,e){const i=this.geometry,s=this.material,a=this.matrixWorld;if(s===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),so.copy(i.boundingSphere),so.applyMatrix4(a),t.ray.intersectsSphere(so)===!1)||(kl.copy(a).invert(),Ai.copy(t.ray).applyMatrix4(kl),i.boundingBox!==null&&Ai.intersectsBox(i.boundingBox)===!1))return;let h;const l=i.index,d=i.attributes.position,p=i.morphAttributes.position,f=i.morphTargetsRelative,m=i.attributes.uv,v=i.attributes.uv2,b=i.groups,w=i.drawRange;if(l!==null)if(Array.isArray(s))for(let x=0,g=b.length;x<g;x++){const y=b[x],L=s[y.materialIndex],C=Math.max(y.start,w.start),T=Math.min(l.count,Math.min(y.start+y.count,w.start+w.count));for(let E=C,k=T;E<k;E+=3){const z=l.getX(E),M=l.getX(E+1),I=l.getX(E+2);h=$r(this,L,t,Ai,d,p,f,m,v,z,M,I),h&&(h.faceIndex=Math.floor(E/3),h.face.materialIndex=y.materialIndex,e.push(h))}}else{const x=Math.max(0,w.start),g=Math.min(l.count,w.start+w.count);for(let y=x,L=g;y<L;y+=3){const C=l.getX(y),T=l.getX(y+1),E=l.getX(y+2);h=$r(this,s,t,Ai,d,p,f,m,v,C,T,E),h&&(h.faceIndex=Math.floor(y/3),e.push(h))}}else if(d!==void 0)if(Array.isArray(s))for(let x=0,g=b.length;x<g;x++){const y=b[x],L=s[y.materialIndex],C=Math.max(y.start,w.start),T=Math.min(d.count,Math.min(y.start+y.count,w.start+w.count));for(let E=C,k=T;E<k;E+=3){const z=E,M=E+1,I=E+2;h=$r(this,L,t,Ai,d,p,f,m,v,z,M,I),h&&(h.faceIndex=Math.floor(E/3),h.face.materialIndex=y.materialIndex,e.push(h))}}else{const x=Math.max(0,w.start),g=Math.min(d.count,w.start+w.count);for(let y=x,L=g;y<L;y+=3){const C=y,T=y+1,E=y+2;h=$r(this,s,t,Ai,d,p,f,m,v,C,T,E),h&&(h.faceIndex=Math.floor(y/3),e.push(h))}}}}function rf(c,t,e,i,s,a,h,l){let d;if(t.side===qe?d=i.intersectTriangle(h,a,s,!0,l):d=i.intersectTriangle(s,a,h,t.side!==Vn,l),d===null)return null;Yr.copy(l),Yr.applyMatrix4(c.matrixWorld);const p=e.ray.origin.distanceTo(Yr);return p<e.near||p>e.far?null:{distance:p,point:Yr.clone(),object:c}}function $r(c,t,e,i,s,a,h,l,d,p,f,m){kn.fromBufferAttribute(s,p),On.fromBufferAttribute(s,f),Fn.fromBufferAttribute(s,m);const v=c.morphTargetInfluences;if(a&&v){Gr.set(0,0,0),Hr.set(0,0,0),Wr.set(0,0,0);for(let w=0,x=a.length;w<x;w++){const g=v[w],y=a[w];g!==0&&(oo.fromBufferAttribute(y,p),ao.fromBufferAttribute(y,f),lo.fromBufferAttribute(y,m),h?(Gr.addScaledVector(oo,g),Hr.addScaledVector(ao,g),Wr.addScaledVector(lo,g)):(Gr.addScaledVector(oo.sub(kn),g),Hr.addScaledVector(ao.sub(On),g),Wr.addScaledVector(lo.sub(Fn),g)))}kn.add(Gr),On.add(Hr),Fn.add(Wr)}c.isSkinnedMesh&&(c.boneTransform(p,kn),c.boneTransform(f,On),c.boneTransform(m,Fn));const b=rf(c,t,e,i,kn,On,Fn,co);if(b){l&&(qr.fromBufferAttribute(l,p),jr.fromBufferAttribute(l,f),Xr.fromBufferAttribute(l,m),b.uv=bn.getUV(co,kn,On,Fn,qr,jr,Xr,new _t)),d&&(qr.fromBufferAttribute(d,p),jr.fromBufferAttribute(d,f),Xr.fromBufferAttribute(d,m),b.uv2=bn.getUV(co,kn,On,Fn,qr,jr,Xr,new _t));const w={a:p,b:f,c:m,normal:new N,materialIndex:0};bn.getNormal(kn,On,Fn,w.normal),b.face=w}return b}class Wi extends en{constructor(t=1,e=1,i=1,s=1,a=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:a,depthSegments:h};const l=this;s=Math.floor(s),a=Math.floor(a),h=Math.floor(h);const d=[],p=[],f=[],m=[];let v=0,b=0;w("z","y","x",-1,-1,i,e,t,h,a,0),w("z","y","x",1,-1,i,e,-t,h,a,1),w("x","z","y",1,1,t,i,e,s,h,2),w("x","z","y",1,-1,t,i,-e,s,h,3),w("x","y","z",1,-1,t,e,i,s,a,4),w("x","y","z",-1,-1,t,e,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new be(p,3)),this.setAttribute("normal",new be(f,3)),this.setAttribute("uv",new be(m,2));function w(x,g,y,L,C,T,E,k,z,M,I){const W=T/z,it=E/M,vt=T/2,j=E/2,B=k/2,et=z+1,nt=M+1;let X=0,J=0;const G=new N;for(let q=0;q<nt;q++){const st=q*it-j;for(let at=0;at<et;at++){const Q=at*W-vt;G[x]=Q*L,G[g]=st*C,G[y]=B,p.push(G.x,G.y,G.z),G[x]=0,G[g]=0,G[y]=k>0?1:-1,f.push(G.x,G.y,G.z),m.push(at/z),m.push(1-q/M),X+=1}}for(let q=0;q<M;q++)for(let st=0;st<z;st++){const at=v+st+et*q,Q=v+st+et*(q+1),ut=v+(st+1)+et*(q+1),At=v+(st+1)+et*q;d.push(at,Q,At),d.push(Q,ut,At),J+=6}l.addGroup(b,J,I),b+=J,v+=X}}static fromJSON(t){return new Wi(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Gi(c){const t={};for(const e in c){t[e]={};for(const i in c[e]){const s=c[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Le(c){const t={};for(let e=0;e<c.length;e++){const i=Gi(c[e]);for(const s in i)t[s]=i[s]}return t}function sf(c){const t=[];for(let e=0;e<c.length;e++)t.push(c[e].clone());return t}const of={clone:Gi,merge:Le};var af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const h=this.uniforms[s].value;h&&h.isTexture?e.uniforms[s]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[s]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[s]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[s]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[s]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[s]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[s]={type:"m4",value:h.toArray()}:e.uniforms[s]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Vc extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends Vc{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sl*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,a,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,a=-.5*s;const h=this.view;if(this.view!==null&&this.view.enabled){const d=h.fullWidth,p=h.fullHeight;a+=h.offsetX*s/d,e-=h.offsetY*i/p,s*=h.width/d,i*=h.height/p}const l=this.filmOffset;l!==0&&(a+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-i,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=90,Di=1;class cf extends Ce{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i;const s=new Fe(Li,Di,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new N(1,0,0)),this.add(s);const a=new Fe(Li,Di,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new N(-1,0,0)),this.add(a);const h=new Fe(Li,Di,t,e);h.layers=this.layers,h.up.set(0,0,1),h.lookAt(new N(0,1,0)),this.add(h);const l=new Fe(Li,Di,t,e);l.layers=this.layers,l.up.set(0,0,-1),l.lookAt(new N(0,-1,0)),this.add(l);const d=new Fe(Li,Di,t,e);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new N(0,0,1)),this.add(d);const p=new Fe(Li,Di,t,e);p.layers=this.layers,p.up.set(0,-1,0),p.lookAt(new N(0,0,-1)),this.add(p)}update(t,e){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[s,a,h,l,d,p]=this.children,f=t.getRenderTarget(),m=t.toneMapping,v=t.xr.enabled;t.toneMapping=wn,t.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0),t.render(e,s),t.setRenderTarget(i,1),t.render(e,a),t.setRenderTarget(i,2),t.render(e,h),t.setRenderTarget(i,3),t.render(e,l),t.setRenderTarget(i,4),t.render(e,d),i.texture.generateMipmaps=b,t.setRenderTarget(i,5),t.render(e,p),t.setRenderTarget(f),t.toneMapping=m,t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Uc extends je{constructor(t,e,i,s,a,h,l,d,p,f){t=t!==void 0?t:[],e=e!==void 0?e:Ui,super(t,e,i,s,a,h,l,d,p,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uf extends ri{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Uc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Wi(5,5,5),a=new oi({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qe,blending:Un});a.uniforms.tEquirect.value=e;const h=new tn(s,a),l=e.minFilter;return e.minFilter===rs&&(e.minFilter=He),new cf(1,10,this).update(t,h),e.minFilter=l,h.geometry.dispose(),h.material.dispose(),this}clear(t,e,i,s){const a=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,i,s);t.setRenderTarget(a)}}const uo=new N,hf=new N,df=new We;class Yn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=uo.subVectors(i,e).cross(hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const i=t.delta(uo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(i).multiplyScalar(a).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||df.getNormalMatrix(t),s=this.coplanarPoint(uo).applyMatrix4(t),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ri=new ss,Kr=new N;class No{constructor(t=new Yn,e=new Yn,i=new Yn,s=new Yn,a=new Yn,h=new Yn){this.planes=[t,e,i,s,a,h]}set(t,e,i,s,a,h){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(a),l[5].copy(h),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t){const e=this.planes,i=t.elements,s=i[0],a=i[1],h=i[2],l=i[3],d=i[4],p=i[5],f=i[6],m=i[7],v=i[8],b=i[9],w=i[10],x=i[11],g=i[12],y=i[13],L=i[14],C=i[15];return e[0].setComponents(l-s,m-d,x-v,C-g).normalize(),e[1].setComponents(l+s,m+d,x+v,C+g).normalize(),e[2].setComponents(l+a,m+p,x+b,C+y).normalize(),e[3].setComponents(l-a,m-p,x-b,C-y).normalize(),e[4].setComponents(l-h,m-f,x-w,C-L).normalize(),e[5].setComponents(l+h,m+f,x+w,C+L).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSprite(t){return Ri.center.set(0,0,0),Ri.radius=.7071067811865476,Ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Kr.x=s.normal.x>0?t.max.x:t.min.x,Kr.y=s.normal.y>0?t.max.y:t.min.y,Kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function zc(){let c=null,t=!1,e=null,i=null;function s(a,h){e(a,h),i=c.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=c.requestAnimationFrame(s),t=!0)},stop:function(){c.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){c=a}}}function pf(c,t){const e=t.isWebGL2,i=new WeakMap;function s(p,f){const m=p.array,v=p.usage,b=c.createBuffer();c.bindBuffer(f,b),c.bufferData(f,m,v),p.onUploadCallback();let w;if(m instanceof Float32Array)w=5126;else if(m instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(e)w=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=5123;else if(m instanceof Int16Array)w=5122;else if(m instanceof Uint32Array)w=5125;else if(m instanceof Int32Array)w=5124;else if(m instanceof Int8Array)w=5120;else if(m instanceof Uint8Array)w=5121;else if(m instanceof Uint8ClampedArray)w=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:b,type:w,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version}}function a(p,f,m){const v=f.array,b=f.updateRange;c.bindBuffer(m,p),b.count===-1?c.bufferSubData(m,0,v):(e?c.bufferSubData(m,b.offset*v.BYTES_PER_ELEMENT,v,b.offset,b.count):c.bufferSubData(m,b.offset*v.BYTES_PER_ELEMENT,v.subarray(b.offset,b.offset+b.count)),b.count=-1)}function h(p){return p.isInterleavedBufferAttribute&&(p=p.data),i.get(p)}function l(p){p.isInterleavedBufferAttribute&&(p=p.data);const f=i.get(p);f&&(c.deleteBuffer(f.buffer),i.delete(p))}function d(p,f){if(p.isGLBufferAttribute){const v=i.get(p);(!v||v.version<p.version)&&i.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const m=i.get(p);m===void 0?i.set(p,s(p,f)):m.version<p.version&&(a(m.buffer,p,f),m.version=p.version)}return{get:h,remove:l,update:d}}class ko extends en{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const a=t/2,h=e/2,l=Math.floor(i),d=Math.floor(s),p=l+1,f=d+1,m=t/l,v=e/d,b=[],w=[],x=[],g=[];for(let y=0;y<f;y++){const L=y*v-h;for(let C=0;C<p;C++){const T=C*m-a;w.push(T,-L,0),x.push(0,0,1),g.push(C/l),g.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<l;L++){const C=L+p*y,T=L+p*(y+1),E=L+1+p*(y+1),k=L+1+p*y;b.push(C,T,k),b.push(T,E,k)}this.setIndex(b),this.setAttribute("position",new be(w,3)),this.setAttribute("normal",new be(x,3)),this.setAttribute("uv",new be(g,2))}static fromJSON(t){return new ko(t.width,t.height,t.widthSegments,t.heightSegments)}}var ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bf="vec3 transformed = vec3( position );",wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Mf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,If=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,kf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Qf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,em=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,nm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,im=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,rm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,cm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,um=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,pm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,gm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ym=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Cm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Em=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Pm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Tm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Im=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Nm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,km=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Um=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xm=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Ym=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$m=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Km=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ng=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,rg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,sg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,og=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,ag=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,lg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,cg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,ug=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_g=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ig=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ng=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ug=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gg=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Wg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ft={alphamap_fragment:ff,alphamap_pars_fragment:mf,alphatest_fragment:gf,alphatest_pars_fragment:vf,aomap_fragment:_f,aomap_pars_fragment:xf,begin_vertex:bf,beginnormal_vertex:wf,bsdfs:yf,iridescence_fragment:Mf,bumpmap_pars_fragment:Sf,clipping_planes_fragment:Cf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:Tf,color_fragment:Af,color_pars_fragment:Lf,color_pars_vertex:Df,color_vertex:Rf,common:If,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:kf,displacementmap_pars_vertex:Of,displacementmap_vertex:Ff,emissivemap_fragment:Vf,emissivemap_pars_fragment:Uf,encodings_fragment:zf,encodings_pars_fragment:Bf,envmap_fragment:Gf,envmap_common_pars_fragment:Hf,envmap_pars_fragment:Wf,envmap_pars_vertex:qf,envmap_physical_pars_fragment:im,envmap_vertex:jf,fog_vertex:Xf,fog_pars_vertex:Yf,fog_fragment:$f,fog_pars_fragment:Kf,gradientmap_pars_fragment:Zf,lightmap_fragment:Jf,lightmap_pars_fragment:Qf,lights_lambert_fragment:tm,lights_lambert_pars_fragment:em,lights_pars_begin:nm,lights_toon_fragment:rm,lights_toon_pars_fragment:sm,lights_phong_fragment:om,lights_phong_pars_fragment:am,lights_physical_fragment:lm,lights_physical_pars_fragment:cm,lights_fragment_begin:um,lights_fragment_maps:hm,lights_fragment_end:dm,logdepthbuf_fragment:pm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:mm,logdepthbuf_vertex:gm,map_fragment:vm,map_pars_fragment:_m,map_particle_fragment:xm,map_particle_pars_fragment:bm,metalnessmap_fragment:wm,metalnessmap_pars_fragment:ym,morphcolor_vertex:Mm,morphnormal_vertex:Sm,morphtarget_pars_vertex:Cm,morphtarget_vertex:Em,normal_fragment_begin:Pm,normal_fragment_maps:Tm,normal_pars_fragment:Am,normal_pars_vertex:Lm,normal_vertex:Dm,normalmap_pars_fragment:Rm,clearcoat_normal_fragment_begin:Im,clearcoat_normal_fragment_maps:Nm,clearcoat_pars_fragment:km,iridescence_pars_fragment:Om,output_fragment:Fm,packing:Vm,premultiplied_alpha_fragment:Um,project_vertex:zm,dithering_fragment:Bm,dithering_pars_fragment:Gm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:Wm,shadowmap_pars_fragment:qm,shadowmap_pars_vertex:jm,shadowmap_vertex:Xm,shadowmask_pars_fragment:Ym,skinbase_vertex:$m,skinning_pars_vertex:Km,skinning_vertex:Zm,skinnormal_vertex:Jm,specularmap_fragment:Qm,specularmap_pars_fragment:tg,tonemapping_fragment:eg,tonemapping_pars_fragment:ng,transmission_fragment:ig,transmission_pars_fragment:rg,uv_pars_fragment:sg,uv_pars_vertex:og,uv_vertex:ag,uv2_pars_fragment:lg,uv2_pars_vertex:cg,uv2_vertex:ug,worldpos_vertex:hg,background_vert:dg,background_frag:pg,backgroundCube_vert:fg,backgroundCube_frag:mg,cube_vert:gg,cube_frag:vg,depth_vert:_g,depth_frag:xg,distanceRGBA_vert:bg,distanceRGBA_frag:wg,equirect_vert:yg,equirect_frag:Mg,linedashed_vert:Sg,linedashed_frag:Cg,meshbasic_vert:Eg,meshbasic_frag:Pg,meshlambert_vert:Tg,meshlambert_frag:Ag,meshmatcap_vert:Lg,meshmatcap_frag:Dg,meshnormal_vert:Rg,meshnormal_frag:Ig,meshphong_vert:Ng,meshphong_frag:kg,meshphysical_vert:Og,meshphysical_frag:Fg,meshtoon_vert:Vg,meshtoon_frag:Ug,points_vert:zg,points_frag:Bg,shadow_vert:Gg,shadow_frag:Hg,sprite_vert:Wg,sprite_frag:qg},dt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new We},uv2Transform:{value:new We},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new We}}},sn={basic:{uniforms:Le([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:Le([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:Le([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:Le([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:Le([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:Le([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:Le([dt.points,dt.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:Le([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:Le([dt.common,dt.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:Le([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:Le([dt.sprite,dt.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:Ft.backgroundCube_vert,fragmentShader:Ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:Le([dt.common,dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:Le([dt.lights,dt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};sn.physical={uniforms:Le([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _t(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};function jg(c,t,e,i,s,a,h){const l=new Zt(0);let d=a===!0?0:1,p,f,m=null,v=0,b=null;function w(g,y){let L=!1,C=y.isScene===!0?y.background:null;C&&C.isTexture&&(C=(y.backgroundBlurriness>0?e:t).get(C));const T=c.xr,E=T.getSession&&T.getSession();E&&E.environmentBlendMode==="additive"&&(C=null),C===null?x(l,d):C&&C.isColor&&(x(C,1),L=!0),(c.autoClear||L)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),C&&(C.isCubeTexture||C.mapping===is)?(f===void 0&&(f=new tn(new Wi(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Gi(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(k,z,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),f.material.uniforms.envMap.value=C,f.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,(m!==C||v!==C.version||b!==c.toneMapping)&&(f.material.needsUpdate=!0,m=C,v=C.version,b=c.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(p===void 0&&(p=new tn(new ko(2,2),new oi({name:"BackgroundMaterial",uniforms:Gi(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(p)),p.material.uniforms.t2D.value=C,C.matrixAutoUpdate===!0&&C.updateMatrix(),p.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||v!==C.version||b!==c.toneMapping)&&(p.material.needsUpdate=!0,m=C,v=C.version,b=c.toneMapping),p.layers.enableAll(),g.unshift(p,p.geometry,p.material,0,0,null))}function x(g,y){i.buffers.color.setClear(g.r,g.g,g.b,y,h)}return{getClearColor:function(){return l},setClearColor:function(g,y=1){l.set(g),d=y,x(l,d)},getClearAlpha:function(){return d},setClearAlpha:function(g){d=g,x(l,d)},render:w}}function Xg(c,t,e,i){const s=c.getParameter(34921),a=i.isWebGL2?null:t.get("OES_vertex_array_object"),h=i.isWebGL2||a!==null,l={},d=g(null);let p=d,f=!1;function m(B,et,nt,X,J){let G=!1;if(h){const q=x(X,nt,et);p!==q&&(p=q,b(p.object)),G=y(B,X,nt,J),G&&L(B,X,nt,J)}else{const q=et.wireframe===!0;(p.geometry!==X.id||p.program!==nt.id||p.wireframe!==q)&&(p.geometry=X.id,p.program=nt.id,p.wireframe=q,G=!0)}J!==null&&e.update(J,34963),(G||f)&&(f=!1,M(B,et,nt,X),J!==null&&c.bindBuffer(34963,e.get(J).buffer))}function v(){return i.isWebGL2?c.createVertexArray():a.createVertexArrayOES()}function b(B){return i.isWebGL2?c.bindVertexArray(B):a.bindVertexArrayOES(B)}function w(B){return i.isWebGL2?c.deleteVertexArray(B):a.deleteVertexArrayOES(B)}function x(B,et,nt){const X=nt.wireframe===!0;let J=l[B.id];J===void 0&&(J={},l[B.id]=J);let G=J[et.id];G===void 0&&(G={},J[et.id]=G);let q=G[X];return q===void 0&&(q=g(v()),G[X]=q),q}function g(B){const et=[],nt=[],X=[];for(let J=0;J<s;J++)et[J]=0,nt[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:et,enabledAttributes:nt,attributeDivisors:X,object:B,attributes:{},index:null}}function y(B,et,nt,X){const J=p.attributes,G=et.attributes;let q=0;const st=nt.getAttributes();for(const at in st)if(st[at].location>=0){const ut=J[at];let At=G[at];if(At===void 0&&(at==="instanceMatrix"&&B.instanceMatrix&&(At=B.instanceMatrix),at==="instanceColor"&&B.instanceColor&&(At=B.instanceColor)),ut===void 0||ut.attribute!==At||At&&ut.data!==At.data)return!0;q++}return p.attributesNum!==q||p.index!==X}function L(B,et,nt,X){const J={},G=et.attributes;let q=0;const st=nt.getAttributes();for(const at in st)if(st[at].location>=0){let ut=G[at];ut===void 0&&(at==="instanceMatrix"&&B.instanceMatrix&&(ut=B.instanceMatrix),at==="instanceColor"&&B.instanceColor&&(ut=B.instanceColor));const At={};At.attribute=ut,ut&&ut.data&&(At.data=ut.data),J[at]=At,q++}p.attributes=J,p.attributesNum=q,p.index=X}function C(){const B=p.newAttributes;for(let et=0,nt=B.length;et<nt;et++)B[et]=0}function T(B){E(B,0)}function E(B,et){const nt=p.newAttributes,X=p.enabledAttributes,J=p.attributeDivisors;nt[B]=1,X[B]===0&&(c.enableVertexAttribArray(B),X[B]=1),J[B]!==et&&((i.isWebGL2?c:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,et),J[B]=et)}function k(){const B=p.newAttributes,et=p.enabledAttributes;for(let nt=0,X=et.length;nt<X;nt++)et[nt]!==B[nt]&&(c.disableVertexAttribArray(nt),et[nt]=0)}function z(B,et,nt,X,J,G){i.isWebGL2===!0&&(nt===5124||nt===5125)?c.vertexAttribIPointer(B,et,nt,J,G):c.vertexAttribPointer(B,et,nt,X,J,G)}function M(B,et,nt,X){if(i.isWebGL2===!1&&(B.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;C();const J=X.attributes,G=nt.getAttributes(),q=et.defaultAttributeValues;for(const st in G){const at=G[st];if(at.location>=0){let Q=J[st];if(Q===void 0&&(st==="instanceMatrix"&&B.instanceMatrix&&(Q=B.instanceMatrix),st==="instanceColor"&&B.instanceColor&&(Q=B.instanceColor)),Q!==void 0){const ut=Q.normalized,At=Q.itemSize,tt=e.get(Q);if(tt===void 0)continue;const Wt=tt.buffer,Pt=tt.type,Et=tt.bytesPerElement;if(Q.isInterleavedBufferAttribute){const pt=Q.data,Ht=pt.stride,It=Q.offset;if(pt.isInstancedInterleavedBuffer){for(let St=0;St<at.locationSize;St++)E(at.location+St,pt.meshPerAttribute);B.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let St=0;St<at.locationSize;St++)T(at.location+St);c.bindBuffer(34962,Wt);for(let St=0;St<at.locationSize;St++)z(at.location+St,At/at.locationSize,Pt,ut,Ht*Et,(It+At/at.locationSize*St)*Et)}else{if(Q.isInstancedBufferAttribute){for(let pt=0;pt<at.locationSize;pt++)E(at.location+pt,Q.meshPerAttribute);B.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let pt=0;pt<at.locationSize;pt++)T(at.location+pt);c.bindBuffer(34962,Wt);for(let pt=0;pt<at.locationSize;pt++)z(at.location+pt,At/at.locationSize,Pt,ut,At*Et,At/at.locationSize*pt*Et)}}else if(q!==void 0){const ut=q[st];if(ut!==void 0)switch(ut.length){case 2:c.vertexAttrib2fv(at.location,ut);break;case 3:c.vertexAttrib3fv(at.location,ut);break;case 4:c.vertexAttrib4fv(at.location,ut);break;default:c.vertexAttrib1fv(at.location,ut)}}}}k()}function I(){vt();for(const B in l){const et=l[B];for(const nt in et){const X=et[nt];for(const J in X)w(X[J].object),delete X[J];delete et[nt]}delete l[B]}}function W(B){if(l[B.id]===void 0)return;const et=l[B.id];for(const nt in et){const X=et[nt];for(const J in X)w(X[J].object),delete X[J];delete et[nt]}delete l[B.id]}function it(B){for(const et in l){const nt=l[et];if(nt[B.id]===void 0)continue;const X=nt[B.id];for(const J in X)w(X[J].object),delete X[J];delete nt[B.id]}}function vt(){j(),f=!0,p!==d&&(p=d,b(p.object))}function j(){d.geometry=null,d.program=null,d.wireframe=!1}return{setup:m,reset:vt,resetDefaultState:j,dispose:I,releaseStatesOfGeometry:W,releaseStatesOfProgram:it,initAttributes:C,enableAttribute:T,disableUnusedAttributes:k}}function Yg(c,t,e,i){const s=i.isWebGL2;let a;function h(p){a=p}function l(p,f){c.drawArrays(a,p,f),e.update(f,a,1)}function d(p,f,m){if(m===0)return;let v,b;if(s)v=c,b="drawArraysInstanced";else if(v=t.get("ANGLE_instanced_arrays"),b="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[b](a,p,f,m),e.update(f,a,m)}this.setMode=h,this.render=l,this.renderInstances=d}function $g(c,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");i=c.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(z){if(z==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const h=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&c instanceof WebGL2ComputeRenderingContext;let l=e.precision!==void 0?e.precision:"highp";const d=a(l);d!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",d,"instead."),l=d);const p=h||t.has("WEBGL_draw_buffers"),f=e.logarithmicDepthBuffer===!0,m=c.getParameter(34930),v=c.getParameter(35660),b=c.getParameter(3379),w=c.getParameter(34076),x=c.getParameter(34921),g=c.getParameter(36347),y=c.getParameter(36348),L=c.getParameter(36349),C=v>0,T=h||t.has("OES_texture_float"),E=C&&T,k=h?c.getParameter(36183):0;return{isWebGL2:h,drawBuffers:p,getMaxAnisotropy:s,getMaxPrecision:a,precision:l,logarithmicDepthBuffer:f,maxTextures:m,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:w,maxAttributes:x,maxVertexUniforms:g,maxVaryings:y,maxFragmentUniforms:L,vertexTextures:C,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:k}}function Kg(c){const t=this;let e=null,i=0,s=!1,a=!1;const h=new Yn,l=new We,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(m,v,b){const w=m.length!==0||v||i!==0||s;return s=v,e=f(m,b,0),i=m.length,w},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1,p()},this.setState=function(m,v,b){const w=m.clippingPlanes,x=m.clipIntersection,g=m.clipShadows,y=c.get(m);if(!s||w===null||w.length===0||a&&!g)a?f(null):p();else{const L=a?0:i,C=L*4;let T=y.clippingState||null;d.value=T,T=f(w,v,C,b);for(let E=0;E!==C;++E)T[E]=e[E];y.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=L}};function p(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(m,v,b,w){const x=m!==null?m.length:0;let g=null;if(x!==0){if(g=d.value,w!==!0||g===null){const y=b+x*4,L=v.matrixWorldInverse;l.getNormalMatrix(L),(g===null||g.length<y)&&(g=new Float32Array(y));for(let C=0,T=b;C!==x;++C,T+=4)h.copy(m[C]).applyMatrix4(L,l),h.normal.toArray(g,T),g[T+3]=h.constant}d.value=g,d.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Zg(c){let t=new WeakMap;function e(h,l){return l===So?h.mapping=Ui:l===Co&&(h.mapping=zi),h}function i(h){if(h&&h.isTexture&&h.isRenderTargetTexture===!1){const l=h.mapping;if(l===So||l===Co)if(t.has(h)){const d=t.get(h).texture;return e(d,h.mapping)}else{const d=h.image;if(d&&d.height>0){const p=new uf(d.height/2);return p.fromEquirectangularTexture(c,h),t.set(h,p),h.addEventListener("dispose",s),e(p.texture,h.mapping)}else return null}}return h}function s(h){const l=h.target;l.removeEventListener("dispose",s);const d=t.get(l);d!==void 0&&(t.delete(l),d.dispose())}function a(){t=new WeakMap}return{get:i,dispose:a}}class Jg extends Vc{constructor(t=-1,e=1,i=1,s=-1,a=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=a,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,a,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-t,h=i+t,l=s+e,d=s-e;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=p*this.view.offsetX,h=a+p*this.view.width,l-=f*this.view.offsetY,d=l-f*this.view.height}this.projectionMatrix.makeOrthographic(a,h,l,d,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,Ol=[.125,.215,.35,.446,.526,.582],Kn=20,ho=new Jg,Fl=new Zt;let po=null;const $n=(1+Math.sqrt(5))/2,Ii=1/$n,Vl=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,$n,Ii),new N(0,$n,-Ii),new N(Ii,0,$n),new N(-Ii,0,$n),new N($n,Ii,0),new N(-$n,Ii,0)];class Ul{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){po=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,i,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(po),t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ui||t.mapping===zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),po=this._renderer.getRenderTarget();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:He,minFilter:He,generateMipmaps:!1,type:gr,format:Qe,encoding:ii,depthBuffer:!1},s=zl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zl(t,e,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qg(a)),this._blurMaterial=tv(a,t,e)}return s}_compileMaterial(t){const e=new tn(this._lodPlanes[0],t);this._renderer.compile(e,ho)}_sceneToCubeUV(t,e,i,s){const l=new Fe(90,1,e,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,v=f.toneMapping;f.getClearColor(Fl),f.toneMapping=wn,f.autoClear=!1;const b=new Io({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),w=new tn(new Wi,b);let x=!1;const g=t.background;g?g.isColor&&(b.color.copy(g),t.background=null,x=!0):(b.color.copy(Fl),x=!0);for(let y=0;y<6;y++){const L=y%3;L===0?(l.up.set(0,d[y],0),l.lookAt(p[y],0,0)):L===1?(l.up.set(0,0,d[y]),l.lookAt(0,p[y],0)):(l.up.set(0,d[y],0),l.lookAt(0,0,p[y]));const C=this._cubeSize;Zr(s,L*C,y>2?C:0,C,C),f.setRenderTarget(s),x&&f.render(w,l),f.render(t,l)}w.geometry.dispose(),w.material.dispose(),f.toneMapping=v,f.autoClear=m,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Ui||t.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const a=s?this._cubemapMaterial:this._equirectMaterial,h=new tn(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=t;const d=this._cubeSize;Zr(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(h,ho)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),h=Vl[(s-1)%Vl.length];this._blur(t,s-1,s,a,h)}e.autoClear=i}_blur(t,e,i,s,a){const h=this._pingPongRenderTarget;this._halfBlur(t,h,e,i,s,"latitudinal",a),this._halfBlur(h,t,i,i,s,"longitudinal",a)}_halfBlur(t,e,i,s,a,h,l){const d=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,m=new tn(this._lodPlanes[s],p),v=p.uniforms,b=this._sizeLods[i]-1,w=isFinite(a)?Math.PI/(2*b):2*Math.PI/(2*Kn-1),x=a/w,g=isFinite(a)?1+Math.floor(f*x):Kn;g>Kn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Kn}`);const y=[];let L=0;for(let z=0;z<Kn;++z){const M=z/x,I=Math.exp(-M*M/2);y.push(I),z===0?L+=I:z<g&&(L+=2*I)}for(let z=0;z<y.length;z++)y[z]=y[z]/L;v.envMap.value=t.texture,v.samples.value=g,v.weights.value=y,v.latitudinal.value=h==="latitudinal",l&&(v.poleAxis.value=l);const{_lodMax:C}=this;v.dTheta.value=w,v.mipInt.value=C-i;const T=this._sizeLods[s],E=3*T*(s>C-ki?s-C+ki:0),k=4*(this._cubeSize-T);Zr(e,E,k,3*T,2*T),d.setRenderTarget(e),d.render(m,ho)}}function Qg(c){const t=[],e=[],i=[];let s=c;const a=c-ki+1+Ol.length;for(let h=0;h<a;h++){const l=Math.pow(2,s);e.push(l);let d=1/l;h>c-ki?d=Ol[h-c+ki-1]:h===0&&(d=0),i.push(d);const p=1/(l-2),f=-p,m=1+p,v=[f,f,m,f,m,m,f,f,m,m,f,m],b=6,w=6,x=3,g=2,y=1,L=new Float32Array(x*w*b),C=new Float32Array(g*w*b),T=new Float32Array(y*w*b);for(let k=0;k<b;k++){const z=k%3*2/3-1,M=k>2?0:-1,I=[z,M,0,z+2/3,M,0,z+2/3,M+1,0,z,M,0,z+2/3,M+1,0,z,M+1,0];L.set(I,x*w*k),C.set(v,g*w*k);const W=[k,k,k,k,k,k];T.set(W,y*w*k)}const E=new en;E.setAttribute("position",new on(L,x)),E.setAttribute("uv",new on(C,g)),E.setAttribute("faceIndex",new on(T,y)),t.push(E),s>ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function zl(c,t,e){const i=new ri(c,t,e);return i.texture.mapping=is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Zr(c,t,e,i,s){c.viewport.set(t,e,i,s),c.scissor.set(t,e,i,s)}function tv(c,t,e){const i=new Float32Array(Kn),s=new N(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Bl(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Gl(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Oo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ev(c){let t=new WeakMap,e=null;function i(l){if(l&&l.isTexture){const d=l.mapping,p=d===So||d===Co,f=d===Ui||d===zi;if(p||f)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let m=t.get(l);return e===null&&(e=new Ul(c)),m=p?e.fromEquirectangular(l,m):e.fromCubemap(l,m),t.set(l,m),m.texture}else{if(t.has(l))return t.get(l).texture;{const m=l.image;if(p&&m&&m.height>0||f&&m&&s(m)){e===null&&(e=new Ul(c));const v=p?e.fromEquirectangular(l):e.fromCubemap(l);return t.set(l,v),l.addEventListener("dispose",a),v.texture}else return null}}}return l}function s(l){let d=0;const p=6;for(let f=0;f<p;f++)l[f]!==void 0&&d++;return d===p}function a(l){const d=l.target;d.removeEventListener("dispose",a);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:h}}function nv(c){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=c.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function iv(c,t,e,i){const s={},a=new WeakMap;function h(m){const v=m.target;v.index!==null&&t.remove(v.index);for(const w in v.attributes)t.remove(v.attributes[w]);v.removeEventListener("dispose",h),delete s[v.id];const b=a.get(v);b&&(t.remove(b),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function l(m,v){return s[v.id]===!0||(v.addEventListener("dispose",h),s[v.id]=!0,e.memory.geometries++),v}function d(m){const v=m.attributes;for(const w in v)t.update(v[w],34962);const b=m.morphAttributes;for(const w in b){const x=b[w];for(let g=0,y=x.length;g<y;g++)t.update(x[g],34962)}}function p(m){const v=[],b=m.index,w=m.attributes.position;let x=0;if(b!==null){const L=b.array;x=b.version;for(let C=0,T=L.length;C<T;C+=3){const E=L[C+0],k=L[C+1],z=L[C+2];v.push(E,k,k,z,z,E)}}else{const L=w.array;x=w.version;for(let C=0,T=L.length/3-1;C<T;C+=3){const E=C+0,k=C+1,z=C+2;v.push(E,k,k,z,z,E)}}const g=new(Ac(v)?Fc:Oc)(v,1);g.version=x;const y=a.get(m);y&&t.remove(y),a.set(m,g)}function f(m){const v=a.get(m);if(v){const b=m.index;b!==null&&v.version<b.version&&p(m)}else p(m);return a.get(m)}return{get:l,update:d,getWireframeAttribute:f}}function rv(c,t,e,i){const s=i.isWebGL2;let a;function h(v){a=v}let l,d;function p(v){l=v.type,d=v.bytesPerElement}function f(v,b){c.drawElements(a,b,l,v*d),e.update(b,a,1)}function m(v,b,w){if(w===0)return;let x,g;if(s)x=c,g="drawElementsInstanced";else if(x=t.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](a,b,l,v*d,w),e.update(b,a,w)}this.setMode=h,this.setIndex=p,this.render=f,this.renderInstances=m}function sv(c){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,h,l){switch(e.calls++,h){case 4:e.triangles+=l*(a/3);break;case 1:e.lines+=l*(a/2);break;case 3:e.lines+=l*(a-1);break;case 2:e.lines+=l*a;break;case 0:e.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function s(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ov(c,t){return c[0]-t[0]}function av(c,t){return Math.abs(t[1])-Math.abs(c[1])}function lv(c,t,e){const i={},s=new Float32Array(8),a=new WeakMap,h=new ee,l=[];for(let p=0;p<8;p++)l[p]=[p,0];function d(p,f,m,v){const b=p.morphTargetInfluences;if(t.isWebGL2===!0){const x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=x!==void 0?x.length:0;let y=a.get(f);if(y===void 0||y.count!==g){let nt=function(){B.dispose(),a.delete(f),f.removeEventListener("dispose",nt)};var w=nt;y!==void 0&&y.texture.dispose();const T=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,k=f.morphAttributes.color!==void 0,z=f.morphAttributes.position||[],M=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let W=0;T===!0&&(W=1),E===!0&&(W=2),k===!0&&(W=3);let it=f.attributes.position.count*W,vt=1;it>t.maxTextureSize&&(vt=Math.ceil(it/t.maxTextureSize),it=t.maxTextureSize);const j=new Float32Array(it*vt*4*g),B=new Ic(j,it,vt,g);B.type=Jn,B.needsUpdate=!0;const et=W*4;for(let X=0;X<g;X++){const J=z[X],G=M[X],q=I[X],st=it*vt*4*X;for(let at=0;at<J.count;at++){const Q=at*et;T===!0&&(h.fromBufferAttribute(J,at),j[st+Q+0]=h.x,j[st+Q+1]=h.y,j[st+Q+2]=h.z,j[st+Q+3]=0),E===!0&&(h.fromBufferAttribute(G,at),j[st+Q+4]=h.x,j[st+Q+5]=h.y,j[st+Q+6]=h.z,j[st+Q+7]=0),k===!0&&(h.fromBufferAttribute(q,at),j[st+Q+8]=h.x,j[st+Q+9]=h.y,j[st+Q+10]=h.z,j[st+Q+11]=q.itemSize===4?h.w:1)}}y={count:g,texture:B,size:new _t(it,vt)},a.set(f,y),f.addEventListener("dispose",nt)}let L=0;for(let T=0;T<b.length;T++)L+=b[T];const C=f.morphTargetsRelative?1:1-L;v.getUniforms().setValue(c,"morphTargetBaseInfluence",C),v.getUniforms().setValue(c,"morphTargetInfluences",b),v.getUniforms().setValue(c,"morphTargetsTexture",y.texture,e),v.getUniforms().setValue(c,"morphTargetsTextureSize",y.size)}else{const x=b===void 0?0:b.length;let g=i[f.id];if(g===void 0||g.length!==x){g=[];for(let E=0;E<x;E++)g[E]=[E,0];i[f.id]=g}for(let E=0;E<x;E++){const k=g[E];k[0]=E,k[1]=b[E]}g.sort(av);for(let E=0;E<8;E++)E<x&&g[E][1]?(l[E][0]=g[E][0],l[E][1]=g[E][1]):(l[E][0]=Number.MAX_SAFE_INTEGER,l[E][1]=0);l.sort(ov);const y=f.morphAttributes.position,L=f.morphAttributes.normal;let C=0;for(let E=0;E<8;E++){const k=l[E],z=k[0],M=k[1];z!==Number.MAX_SAFE_INTEGER&&M?(y&&f.getAttribute("morphTarget"+E)!==y[z]&&f.setAttribute("morphTarget"+E,y[z]),L&&f.getAttribute("morphNormal"+E)!==L[z]&&f.setAttribute("morphNormal"+E,L[z]),s[E]=M,C+=M):(y&&f.hasAttribute("morphTarget"+E)===!0&&f.deleteAttribute("morphTarget"+E),L&&f.hasAttribute("morphNormal"+E)===!0&&f.deleteAttribute("morphNormal"+E),s[E]=0)}const T=f.morphTargetsRelative?1:1-C;v.getUniforms().setValue(c,"morphTargetBaseInfluence",T),v.getUniforms().setValue(c,"morphTargetInfluences",s)}}return{update:d}}function cv(c,t,e,i){let s=new WeakMap;function a(d){const p=i.render.frame,f=d.geometry,m=t.get(d,f);return s.get(m)!==p&&(t.update(m),s.set(m,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",l)===!1&&d.addEventListener("dispose",l),e.update(d.instanceMatrix,34962),d.instanceColor!==null&&e.update(d.instanceColor,34962)),m}function h(){s=new WeakMap}function l(d){const p=d.target;p.removeEventListener("dispose",l),e.remove(p.instanceMatrix),p.instanceColor!==null&&e.remove(p.instanceColor)}return{update:a,dispose:h}}const Bc=new je,Gc=new Ic,Hc=new Xp,Wc=new Uc,Hl=[],Wl=[],ql=new Float32Array(16),jl=new Float32Array(9),Xl=new Float32Array(4);function qi(c,t,e){const i=c[0];if(i<=0||i>0)return c;const s=t*e;let a=Hl[s];if(a===void 0&&(a=new Float32Array(s),Hl[s]=a),t!==0){i.toArray(a,0);for(let h=1,l=0;h!==t;++h)l+=e,c[h].toArray(a,l)}return a}function fe(c,t){if(c.length!==t.length)return!1;for(let e=0,i=c.length;e<i;e++)if(c[e]!==t[e])return!1;return!0}function me(c,t){for(let e=0,i=t.length;e<i;e++)c[e]=t[e]}function os(c,t){let e=Wl[t];e===void 0&&(e=new Int32Array(t),Wl[t]=e);for(let i=0;i!==t;++i)e[i]=c.allocateTextureUnit();return e}function uv(c,t){const e=this.cache;e[0]!==t&&(c.uniform1f(this.addr,t),e[0]=t)}function hv(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;c.uniform2fv(this.addr,t),me(e,t)}}function dv(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;c.uniform3fv(this.addr,t),me(e,t)}}function pv(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;c.uniform4fv(this.addr,t),me(e,t)}}function fv(c,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;c.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(fe(e,i))return;Xl.set(i),c.uniformMatrix2fv(this.addr,!1,Xl),me(e,i)}}function mv(c,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;c.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(fe(e,i))return;jl.set(i),c.uniformMatrix3fv(this.addr,!1,jl),me(e,i)}}function gv(c,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;c.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(fe(e,i))return;ql.set(i),c.uniformMatrix4fv(this.addr,!1,ql),me(e,i)}}function vv(c,t){const e=this.cache;e[0]!==t&&(c.uniform1i(this.addr,t),e[0]=t)}function _v(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;c.uniform2iv(this.addr,t),me(e,t)}}function xv(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;c.uniform3iv(this.addr,t),me(e,t)}}function bv(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;c.uniform4iv(this.addr,t),me(e,t)}}function wv(c,t){const e=this.cache;e[0]!==t&&(c.uniform1ui(this.addr,t),e[0]=t)}function yv(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;c.uniform2uiv(this.addr,t),me(e,t)}}function Mv(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;c.uniform3uiv(this.addr,t),me(e,t)}}function Sv(c,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;c.uniform4uiv(this.addr,t),me(e,t)}}function Cv(c,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(c.uniform1i(this.addr,s),i[0]=s),e.setTexture2D(t||Bc,s)}function Ev(c,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(c.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Hc,s)}function Pv(c,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(c.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Wc,s)}function Tv(c,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(c.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Gc,s)}function Av(c){switch(c){case 5126:return uv;case 35664:return hv;case 35665:return dv;case 35666:return pv;case 35674:return fv;case 35675:return mv;case 35676:return gv;case 5124:case 35670:return vv;case 35667:case 35671:return _v;case 35668:case 35672:return xv;case 35669:case 35673:return bv;case 5125:return wv;case 36294:return yv;case 36295:return Mv;case 36296:return Sv;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Ev;case 35680:case 36300:case 36308:case 36293:return Pv;case 36289:case 36303:case 36311:case 36292:return Tv}}function Lv(c,t){c.uniform1fv(this.addr,t)}function Dv(c,t){const e=qi(t,this.size,2);c.uniform2fv(this.addr,e)}function Rv(c,t){const e=qi(t,this.size,3);c.uniform3fv(this.addr,e)}function Iv(c,t){const e=qi(t,this.size,4);c.uniform4fv(this.addr,e)}function Nv(c,t){const e=qi(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,e)}function kv(c,t){const e=qi(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,e)}function Ov(c,t){const e=qi(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,e)}function Fv(c,t){c.uniform1iv(this.addr,t)}function Vv(c,t){c.uniform2iv(this.addr,t)}function Uv(c,t){c.uniform3iv(this.addr,t)}function zv(c,t){c.uniform4iv(this.addr,t)}function Bv(c,t){c.uniform1uiv(this.addr,t)}function Gv(c,t){c.uniform2uiv(this.addr,t)}function Hv(c,t){c.uniform3uiv(this.addr,t)}function Wv(c,t){c.uniform4uiv(this.addr,t)}function qv(c,t,e){const i=this.cache,s=t.length,a=os(e,s);fe(i,a)||(c.uniform1iv(this.addr,a),me(i,a));for(let h=0;h!==s;++h)e.setTexture2D(t[h]||Bc,a[h])}function jv(c,t,e){const i=this.cache,s=t.length,a=os(e,s);fe(i,a)||(c.uniform1iv(this.addr,a),me(i,a));for(let h=0;h!==s;++h)e.setTexture3D(t[h]||Hc,a[h])}function Xv(c,t,e){const i=this.cache,s=t.length,a=os(e,s);fe(i,a)||(c.uniform1iv(this.addr,a),me(i,a));for(let h=0;h!==s;++h)e.setTextureCube(t[h]||Wc,a[h])}function Yv(c,t,e){const i=this.cache,s=t.length,a=os(e,s);fe(i,a)||(c.uniform1iv(this.addr,a),me(i,a));for(let h=0;h!==s;++h)e.setTexture2DArray(t[h]||Gc,a[h])}function $v(c){switch(c){case 5126:return Lv;case 35664:return Dv;case 35665:return Rv;case 35666:return Iv;case 35674:return Nv;case 35675:return kv;case 35676:return Ov;case 5124:case 35670:return Fv;case 35667:case 35671:return Vv;case 35668:case 35672:return Uv;case 35669:case 35673:return zv;case 5125:return Bv;case 36294:return Gv;case 36295:return Hv;case 36296:return Wv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Xv;case 36289:case 36303:case 36311:case 36292:return Yv}}class Kv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=Av(e.type)}}class Zv{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=$v(e.type)}}class Jv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let a=0,h=s.length;a!==h;++a){const l=s[a];l.setValue(t,e[l.id],i)}}}const fo=/(\w+)(\])?(\[|\.)?/g;function Yl(c,t){c.seq.push(t),c.map[t.id]=t}function Qv(c,t,e){const i=c.name,s=i.length;for(fo.lastIndex=0;;){const a=fo.exec(i),h=fo.lastIndex;let l=a[1];const d=a[2]==="]",p=a[3];if(d&&(l=l|0),p===void 0||p==="["&&h+2===s){Yl(e,p===void 0?new Kv(l,c,t):new Zv(l,c,t));break}else{let m=e.map[l];m===void 0&&(m=new Jv(l),Yl(e,m)),e=m}}}class ns{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,35718);for(let s=0;s<i;++s){const a=t.getActiveUniform(e,s),h=t.getUniformLocation(e,a.name);Qv(a,h,this)}}setValue(t,e,i,s){const a=this.map[e];a!==void 0&&a.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let a=0,h=e.length;a!==h;++a){const l=e[a],d=i[l.id];d.needsUpdate!==!1&&l.setValue(t,d.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,a=t.length;s!==a;++s){const h=t[s];h.id in e&&i.push(h)}return i}}function $l(c,t,e){const i=c.createShader(t);return c.shaderSource(i,e),c.compileShader(i),i}let t_=0;function e_(c,t){const e=c.split(`
`),i=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let h=s;h<a;h++){const l=h+1;i.push(`${l===t?">":" "} ${l}: ${e[h]}`)}return i.join(`
`)}function n_(c){switch(c){case ii:return["Linear","( value )"];case se:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function Kl(c,t,e){const i=c.getShaderParameter(t,35713),s=c.getShaderInfoLog(t).trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const h=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+e_(c.getShaderSource(t),h)}else return s}function i_(c,t){const e=n_(t);return"vec4 "+c+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function r_(c,t){let e;switch(t){case bp:e="Linear";break;case wp:e="Reinhard";break;case yp:e="OptimizedCineon";break;case Mp:e="ACESFilmic";break;case Sp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+c+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function s_(c){return[c.extensionDerivatives||!!c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pr).join(`
`)}function o_(c){const t=[];for(const e in c){const i=c[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function a_(c,t){const e={},i=c.getProgramParameter(t,35721);for(let s=0;s<i;s++){const a=c.getActiveAttrib(t,s),h=a.name;let l=1;a.type===35674&&(l=2),a.type===35675&&(l=3),a.type===35676&&(l=4),e[h]={type:a.type,location:c.getAttribLocation(t,h),locationSize:l}}return e}function pr(c){return c!==""}function Zl(c,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jl(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(c){return c.replace(l_,c_)}function c_(c,t){const e=Ft[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Lo(e)}const u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ql(c){return c.replace(u_,h_)}function h_(c,t,e,i){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function tc(c){let t="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function d_(c){let t="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===wc?t="SHADOWMAP_TYPE_PCF":c.shadowMapType===yc?t="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===dr&&(t="SHADOWMAP_TYPE_VSM"),t}function p_(c){let t="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case Ui:case zi:t="ENVMAP_TYPE_CUBE";break;case is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f_(c){let t="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case zi:t="ENVMAP_MODE_REFRACTION";break}return t}function m_(c){let t="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case Cc:t="ENVMAP_BLENDING_MULTIPLY";break;case _p:t="ENVMAP_BLENDING_MIX";break;case xp:t="ENVMAP_BLENDING_ADD";break}return t}function g_(c){const t=c.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function v_(c,t,e,i){const s=c.getContext(),a=e.defines;let h=e.vertexShader,l=e.fragmentShader;const d=d_(e),p=p_(e),f=f_(e),m=m_(e),v=g_(e),b=e.isWebGL2?"":s_(e),w=o_(a),x=s.createProgram();let g,y,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=[w].filter(pr).join(`
`),g.length>0&&(g+=`
`),y=[b,w].filter(pr).join(`
`),y.length>0&&(y+=`
`)):(g=[tc(e),"#define SHADER_NAME "+e.shaderName,w,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pr).join(`
`),y=[b,tc(e),"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==wn?r_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.encodings_pars_fragment,i_("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pr).join(`
`)),h=Lo(h),h=Zl(h,e),h=Jl(h,e),l=Lo(l),l=Zl(l,e),l=Jl(l,e),h=Ql(h),l=Ql(l),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,y=["#define varying in",e.glslVersion===Ml?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ml?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const C=L+g+h,T=L+y+l,E=$l(s,35633,C),k=$l(s,35632,T);if(s.attachShader(x,E),s.attachShader(x,k),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x),c.debug.checkShaderErrors){const I=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(E).trim(),it=s.getShaderInfoLog(k).trim();let vt=!0,j=!0;if(s.getProgramParameter(x,35714)===!1){vt=!1;const B=Kl(s,E,"vertex"),et=Kl(s,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,35715)+`

Program Info Log: `+I+`
`+B+`
`+et)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(W===""||it==="")&&(j=!1);j&&(this.diagnostics={runnable:vt,programLog:I,vertexShader:{log:W,prefix:g},fragmentShader:{log:it,prefix:y}})}s.deleteShader(E),s.deleteShader(k);let z;this.getUniforms=function(){return z===void 0&&(z=new ns(s,x)),z};let M;return this.getAttributes=function(){return M===void 0&&(M=a_(s,x)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.name=e.shaderName,this.id=t_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=k,this}let __=0;class x_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(i),h=this._getShaderCacheForMaterial(t);return h.has(s)===!1&&(h.add(s),s.usedTimes++),h.has(a)===!1&&(h.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new b_(t),e.set(t,i)),i}}class b_{constructor(t){this.id=__++,this.code=t,this.usedTimes=0}}function w_(c,t,e,i,s,a,h){const l=new kc,d=new x_,p=[],f=s.isWebGL2,m=s.logarithmicDepthBuffer,v=s.vertexTextures;let b=s.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M,I,W,it,vt){const j=it.fog,B=vt.geometry,et=M.isMeshStandardMaterial?it.environment:null,nt=(M.isMeshStandardMaterial?e:t).get(M.envMap||et),X=!!nt&&nt.mapping===is?nt.image.height:null,J=w[M.type];M.precision!==null&&(b=s.getMaxPrecision(M.precision),b!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",b,"instead."));const G=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,q=G!==void 0?G.length:0;let st=0;B.morphAttributes.position!==void 0&&(st=1),B.morphAttributes.normal!==void 0&&(st=2),B.morphAttributes.color!==void 0&&(st=3);let at,Q,ut,At;if(J){const Ht=sn[J];at=Ht.vertexShader,Q=Ht.fragmentShader}else at=M.vertexShader,Q=M.fragmentShader,d.update(M),ut=d.getVertexShaderID(M),At=d.getFragmentShaderID(M);const tt=c.getRenderTarget(),Wt=M.alphaTest>0,Pt=M.clearcoat>0,Et=M.iridescence>0;return{isWebGL2:f,shaderID:J,shaderName:M.type,vertexShader:at,fragmentShader:Q,defines:M.defines,customVertexShaderID:ut,customFragmentShaderID:At,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:b,instancing:vt.isInstancedMesh===!0,instancingColor:vt.isInstancedMesh===!0&&vt.instanceColor!==null,supportsVertexTextures:v,outputEncoding:tt===null?c.outputEncoding:tt.isXRRenderTarget===!0?tt.texture.encoding:ii,map:!!M.map,matcap:!!M.matcap,envMap:!!nt,envMapMode:nt&&nt.mapping,envMapCubeUVHeight:X,lightMap:!!M.lightMap,aoMap:!!M.aoMap,emissiveMap:!!M.emissiveMap,bumpMap:!!M.bumpMap,normalMap:!!M.normalMap,objectSpaceNormalMap:M.normalMapType===Hp,tangentSpaceNormalMap:M.normalMapType===Tc,decodeVideoTexture:!!M.map&&M.map.isVideoTexture===!0&&M.map.encoding===se,clearcoat:Pt,clearcoatMap:Pt&&!!M.clearcoatMap,clearcoatRoughnessMap:Pt&&!!M.clearcoatRoughnessMap,clearcoatNormalMap:Pt&&!!M.clearcoatNormalMap,iridescence:Et,iridescenceMap:Et&&!!M.iridescenceMap,iridescenceThicknessMap:Et&&!!M.iridescenceThicknessMap,displacementMap:!!M.displacementMap,roughnessMap:!!M.roughnessMap,metalnessMap:!!M.metalnessMap,specularMap:!!M.specularMap,specularIntensityMap:!!M.specularIntensityMap,specularColorMap:!!M.specularColorMap,opaque:M.transparent===!1&&M.blending===Oi,alphaMap:!!M.alphaMap,alphaTest:Wt,gradientMap:!!M.gradientMap,sheen:M.sheen>0,sheenColorMap:!!M.sheenColorMap,sheenRoughnessMap:!!M.sheenRoughnessMap,transmission:M.transmission>0,transmissionMap:!!M.transmissionMap,thicknessMap:!!M.thicknessMap,combine:M.combine,vertexTangents:!!M.normalMap&&!!B.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUvs:!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatMap||!!M.clearcoatRoughnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||!!M.displacementMap||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||!!M.sheenColorMap||!!M.sheenRoughnessMap,uvsVertexOnly:!(!!M.map||!!M.bumpMap||!!M.normalMap||!!M.specularMap||!!M.alphaMap||!!M.emissiveMap||!!M.roughnessMap||!!M.metalnessMap||!!M.clearcoatNormalMap||!!M.iridescenceMap||!!M.iridescenceThicknessMap||M.transmission>0||!!M.transmissionMap||!!M.thicknessMap||!!M.specularIntensityMap||!!M.specularColorMap||M.sheen>0||!!M.sheenColorMap||!!M.sheenRoughnessMap)&&!!M.displacementMap,fog:!!j,useFog:M.fog===!0,fogExp2:j&&j.isFogExp2,flatShading:!!M.flatShading,sizeAttenuation:M.sizeAttenuation,logarithmicDepthBuffer:m,skinning:vt.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:st,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:M.dithering,shadowMapEnabled:c.shadowMap.enabled&&W.length>0,shadowMapType:c.shadowMap.type,toneMapping:M.toneMapped?c.toneMapping:wn,physicallyCorrectLights:c.physicallyCorrectLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Vn,flipSided:M.side===qe,useDepthPacking:!!M.depthPacking,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:M.extensions&&M.extensions.derivatives,extensionFragDepth:M.extensions&&M.extensions.fragDepth,extensionDrawBuffers:M.extensions&&M.extensions.drawBuffers,extensionShaderTextureLOD:M.extensions&&M.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function g(M){const I=[];if(M.shaderID?I.push(M.shaderID):(I.push(M.customVertexShaderID),I.push(M.customFragmentShaderID)),M.defines!==void 0)for(const W in M.defines)I.push(W),I.push(M.defines[W]);return M.isRawShaderMaterial===!1&&(y(I,M),L(I,M),I.push(c.outputEncoding)),I.push(M.customProgramCacheKey),I.join()}function y(M,I){M.push(I.precision),M.push(I.outputEncoding),M.push(I.envMapMode),M.push(I.envMapCubeUVHeight),M.push(I.combine),M.push(I.vertexUvs),M.push(I.fogExp2),M.push(I.sizeAttenuation),M.push(I.morphTargetsCount),M.push(I.morphAttributeCount),M.push(I.numDirLights),M.push(I.numPointLights),M.push(I.numSpotLights),M.push(I.numSpotLightMaps),M.push(I.numHemiLights),M.push(I.numRectAreaLights),M.push(I.numDirLightShadows),M.push(I.numPointLightShadows),M.push(I.numSpotLightShadows),M.push(I.numSpotLightShadowsWithMaps),M.push(I.shadowMapType),M.push(I.toneMapping),M.push(I.numClippingPlanes),M.push(I.numClipIntersection),M.push(I.depthPacking)}function L(M,I){l.disableAll(),I.isWebGL2&&l.enable(0),I.supportsVertexTextures&&l.enable(1),I.instancing&&l.enable(2),I.instancingColor&&l.enable(3),I.map&&l.enable(4),I.matcap&&l.enable(5),I.envMap&&l.enable(6),I.lightMap&&l.enable(7),I.aoMap&&l.enable(8),I.emissiveMap&&l.enable(9),I.bumpMap&&l.enable(10),I.normalMap&&l.enable(11),I.objectSpaceNormalMap&&l.enable(12),I.tangentSpaceNormalMap&&l.enable(13),I.clearcoat&&l.enable(14),I.clearcoatMap&&l.enable(15),I.clearcoatRoughnessMap&&l.enable(16),I.clearcoatNormalMap&&l.enable(17),I.iridescence&&l.enable(18),I.iridescenceMap&&l.enable(19),I.iridescenceThicknessMap&&l.enable(20),I.displacementMap&&l.enable(21),I.specularMap&&l.enable(22),I.roughnessMap&&l.enable(23),I.metalnessMap&&l.enable(24),I.gradientMap&&l.enable(25),I.alphaMap&&l.enable(26),I.alphaTest&&l.enable(27),I.vertexColors&&l.enable(28),I.vertexAlphas&&l.enable(29),I.vertexUvs&&l.enable(30),I.vertexTangents&&l.enable(31),I.uvsVertexOnly&&l.enable(32),M.push(l.mask),l.disableAll(),I.fog&&l.enable(0),I.useFog&&l.enable(1),I.flatShading&&l.enable(2),I.logarithmicDepthBuffer&&l.enable(3),I.skinning&&l.enable(4),I.morphTargets&&l.enable(5),I.morphNormals&&l.enable(6),I.morphColors&&l.enable(7),I.premultipliedAlpha&&l.enable(8),I.shadowMapEnabled&&l.enable(9),I.physicallyCorrectLights&&l.enable(10),I.doubleSided&&l.enable(11),I.flipSided&&l.enable(12),I.useDepthPacking&&l.enable(13),I.dithering&&l.enable(14),I.specularIntensityMap&&l.enable(15),I.specularColorMap&&l.enable(16),I.transmission&&l.enable(17),I.transmissionMap&&l.enable(18),I.thicknessMap&&l.enable(19),I.sheen&&l.enable(20),I.sheenColorMap&&l.enable(21),I.sheenRoughnessMap&&l.enable(22),I.decodeVideoTexture&&l.enable(23),I.opaque&&l.enable(24),M.push(l.mask)}function C(M){const I=w[M.type];let W;if(I){const it=sn[I];W=of.clone(it.uniforms)}else W=M.uniforms;return W}function T(M,I){let W;for(let it=0,vt=p.length;it<vt;it++){const j=p[it];if(j.cacheKey===I){W=j,++W.usedTimes;break}}return W===void 0&&(W=new v_(c,I,M,a),p.push(W)),W}function E(M){if(--M.usedTimes===0){const I=p.indexOf(M);p[I]=p[p.length-1],p.pop(),M.destroy()}}function k(M){d.remove(M)}function z(){d.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:C,acquireProgram:T,releaseProgram:E,releaseShaderCache:k,programs:p,dispose:z}}function y_(){let c=new WeakMap;function t(a){let h=c.get(a);return h===void 0&&(h={},c.set(a,h)),h}function e(a){c.delete(a)}function i(a,h,l){c.get(a)[h]=l}function s(){c=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function M_(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function ec(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function nc(){const c=[];let t=0;const e=[],i=[],s=[];function a(){t=0,e.length=0,i.length=0,s.length=0}function h(m,v,b,w,x,g){let y=c[t];return y===void 0?(y={id:m.id,object:m,geometry:v,material:b,groupOrder:w,renderOrder:m.renderOrder,z:x,group:g},c[t]=y):(y.id=m.id,y.object=m,y.geometry=v,y.material=b,y.groupOrder=w,y.renderOrder=m.renderOrder,y.z=x,y.group=g),t++,y}function l(m,v,b,w,x,g){const y=h(m,v,b,w,x,g);b.transmission>0?i.push(y):b.transparent===!0?s.push(y):e.push(y)}function d(m,v,b,w,x,g){const y=h(m,v,b,w,x,g);b.transmission>0?i.unshift(y):b.transparent===!0?s.unshift(y):e.unshift(y)}function p(m,v){e.length>1&&e.sort(m||M_),i.length>1&&i.sort(v||ec),s.length>1&&s.sort(v||ec)}function f(){for(let m=t,v=c.length;m<v;m++){const b=c[m];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:e,transmissive:i,transparent:s,init:a,push:l,unshift:d,finish:f,sort:p}}function S_(){let c=new WeakMap;function t(i,s){const a=c.get(i);let h;return a===void 0?(h=new nc,c.set(i,[h])):s>=a.length?(h=new nc,a.push(h)):h=a[s],h}function e(){c=new WeakMap}return{get:t,dispose:e}}function C_(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Zt};break;case"SpotLight":e={position:new N,direction:new N,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new N,halfWidth:new N,halfHeight:new N};break}return c[t.id]=e,e}}}function E_(){const c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=e,e}}}let P_=0;function T_(c,t){return(t.castShadow?2:0)-(c.castShadow?2:0)+(t.map?1:0)-(c.map?1:0)}function A_(c,t){const e=new C_,i=E_(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)s.probe.push(new N);const a=new N,h=new oe,l=new oe;function d(f,m){let v=0,b=0,w=0;for(let it=0;it<9;it++)s.probe[it].set(0,0,0);let x=0,g=0,y=0,L=0,C=0,T=0,E=0,k=0,z=0,M=0;f.sort(T_);const I=m!==!0?Math.PI:1;for(let it=0,vt=f.length;it<vt;it++){const j=f[it],B=j.color,et=j.intensity,nt=j.distance,X=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)v+=B.r*et*I,b+=B.g*et*I,w+=B.b*et*I;else if(j.isLightProbe)for(let J=0;J<9;J++)s.probe[J].addScaledVector(j.sh.coefficients[J],et);else if(j.isDirectionalLight){const J=e.get(j);if(J.color.copy(j.color).multiplyScalar(j.intensity*I),j.castShadow){const G=j.shadow,q=i.get(j);q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,s.directionalShadow[x]=q,s.directionalShadowMap[x]=X,s.directionalShadowMatrix[x]=j.shadow.matrix,T++}s.directional[x]=J,x++}else if(j.isSpotLight){const J=e.get(j);J.position.setFromMatrixPosition(j.matrixWorld),J.color.copy(B).multiplyScalar(et*I),J.distance=nt,J.coneCos=Math.cos(j.angle),J.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),J.decay=j.decay,s.spot[y]=J;const G=j.shadow;if(j.map&&(s.spotLightMap[z]=j.map,z++,G.updateMatrices(j),j.castShadow&&M++),s.spotLightMatrix[y]=G.matrix,j.castShadow){const q=i.get(j);q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,s.spotShadow[y]=q,s.spotShadowMap[y]=X,k++}y++}else if(j.isRectAreaLight){const J=e.get(j);J.color.copy(B).multiplyScalar(et),J.halfWidth.set(j.width*.5,0,0),J.halfHeight.set(0,j.height*.5,0),s.rectArea[L]=J,L++}else if(j.isPointLight){const J=e.get(j);if(J.color.copy(j.color).multiplyScalar(j.intensity*I),J.distance=j.distance,J.decay=j.decay,j.castShadow){const G=j.shadow,q=i.get(j);q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,s.pointShadow[g]=q,s.pointShadowMap[g]=X,s.pointShadowMatrix[g]=j.shadow.matrix,E++}s.point[g]=J,g++}else if(j.isHemisphereLight){const J=e.get(j);J.skyColor.copy(j.color).multiplyScalar(et*I),J.groundColor.copy(j.groundColor).multiplyScalar(et*I),s.hemi[C]=J,C++}}L>0&&(t.isWebGL2||c.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_FLOAT_1,s.rectAreaLTC2=dt.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=dt.LTC_HALF_1,s.rectAreaLTC2=dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=v,s.ambient[1]=b,s.ambient[2]=w;const W=s.hash;(W.directionalLength!==x||W.pointLength!==g||W.spotLength!==y||W.rectAreaLength!==L||W.hemiLength!==C||W.numDirectionalShadows!==T||W.numPointShadows!==E||W.numSpotShadows!==k||W.numSpotMaps!==z)&&(s.directional.length=x,s.spot.length=y,s.rectArea.length=L,s.point.length=g,s.hemi.length=C,s.directionalShadow.length=T,s.directionalShadowMap.length=T,s.pointShadow.length=E,s.pointShadowMap.length=E,s.spotShadow.length=k,s.spotShadowMap.length=k,s.directionalShadowMatrix.length=T,s.pointShadowMatrix.length=E,s.spotLightMatrix.length=k+z-M,s.spotLightMap.length=z,s.numSpotLightShadowsWithMaps=M,W.directionalLength=x,W.pointLength=g,W.spotLength=y,W.rectAreaLength=L,W.hemiLength=C,W.numDirectionalShadows=T,W.numPointShadows=E,W.numSpotShadows=k,W.numSpotMaps=z,s.version=P_++)}function p(f,m){let v=0,b=0,w=0,x=0,g=0;const y=m.matrixWorldInverse;for(let L=0,C=f.length;L<C;L++){const T=f[L];if(T.isDirectionalLight){const E=s.directional[v];E.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(y),v++}else if(T.isSpotLight){const E=s.spot[w];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(y),E.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(a),E.direction.transformDirection(y),w++}else if(T.isRectAreaLight){const E=s.rectArea[x];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(y),l.identity(),h.copy(T.matrixWorld),h.premultiply(y),l.extractRotation(h),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(l),E.halfHeight.applyMatrix4(l),x++}else if(T.isPointLight){const E=s.point[b];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(y),b++}else if(T.isHemisphereLight){const E=s.hemi[g];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(y),g++}}}return{setup:d,setupView:p,state:s}}function ic(c,t){const e=new A_(c,t),i=[],s=[];function a(){i.length=0,s.length=0}function h(m){i.push(m)}function l(m){s.push(m)}function d(m){e.setup(i,m)}function p(m){e.setupView(i,m)}return{init:a,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:d,setupLightsView:p,pushLight:h,pushShadow:l}}function L_(c,t){let e=new WeakMap;function i(a,h=0){const l=e.get(a);let d;return l===void 0?(d=new ic(c,t),e.set(a,[d])):h>=l.length?(d=new ic(c,t),l.push(d)):d=l[h],d}function s(){e=new WeakMap}return{get:i,dispose:s}}class D_ extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R_ extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new N,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const I_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k_(c,t,e){let i=new No;const s=new _t,a=new _t,h=new ee,l=new D_({depthPacking:Gp}),d=new R_,p={},f=e.maxTextureSize,m={0:qe,1:Vi,2:Vn},v=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:I_,fragmentShader:N_}),b=v.clone();b.defines.HORIZONTAL_PASS=1;const w=new en;w.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new tn(w,v),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc,this.render=function(T,E,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const z=c.getRenderTarget(),M=c.getActiveCubeFace(),I=c.getActiveMipmapLevel(),W=c.state;W.setBlending(Un),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);for(let it=0,vt=T.length;it<vt;it++){const j=T[it],B=j.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const et=B.getFrameExtents();if(s.multiply(et),a.copy(B.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(a.x=Math.floor(f/et.x),s.x=a.x*et.x,B.mapSize.x=a.x),s.y>f&&(a.y=Math.floor(f/et.y),s.y=a.y*et.y,B.mapSize.y=a.y)),B.map===null){const X=this.type!==dr?{minFilter:Re,magFilter:Re}:{};B.map=new ri(s.x,s.y,X),B.map.texture.name=j.name+".shadowMap",B.camera.updateProjectionMatrix()}c.setRenderTarget(B.map),c.clear();const nt=B.getViewportCount();for(let X=0;X<nt;X++){const J=B.getViewport(X);h.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),W.viewport(h),B.updateMatrices(j,X),i=B.getFrustum(),C(E,k,B.camera,j,this.type)}B.isPointLightShadow!==!0&&this.type===dr&&y(B,k),B.needsUpdate=!1}g.needsUpdate=!1,c.setRenderTarget(z,M,I)};function y(T,E){const k=t.update(x);v.defines.VSM_SAMPLES!==T.blurSamples&&(v.defines.VSM_SAMPLES=T.blurSamples,b.defines.VSM_SAMPLES=T.blurSamples,v.needsUpdate=!0,b.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ri(s.x,s.y)),v.uniforms.shadow_pass.value=T.map.texture,v.uniforms.resolution.value=T.mapSize,v.uniforms.radius.value=T.radius,c.setRenderTarget(T.mapPass),c.clear(),c.renderBufferDirect(E,null,k,v,x,null),b.uniforms.shadow_pass.value=T.mapPass.texture,b.uniforms.resolution.value=T.mapSize,b.uniforms.radius.value=T.radius,c.setRenderTarget(T.map),c.clear(),c.renderBufferDirect(E,null,k,b,x,null)}function L(T,E,k,z,M,I){let W=null;const it=k.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(it!==void 0?W=it:W=k.isPointLight===!0?d:l,c.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0){const vt=W.uuid,j=E.uuid;let B=p[vt];B===void 0&&(B={},p[vt]=B);let et=B[j];et===void 0&&(et=W.clone(),B[j]=et),W=et}return W.visible=E.visible,W.wireframe=E.wireframe,I===dr?W.side=E.shadowSide!==null?E.shadowSide:E.side:W.side=E.shadowSide!==null?E.shadowSide:m[E.side],W.alphaMap=E.alphaMap,W.alphaTest=E.alphaTest,W.clipShadows=E.clipShadows,W.clippingPlanes=E.clippingPlanes,W.clipIntersection=E.clipIntersection,W.displacementMap=E.displacementMap,W.displacementScale=E.displacementScale,W.displacementBias=E.displacementBias,W.wireframeLinewidth=E.wireframeLinewidth,W.linewidth=E.linewidth,k.isPointLight===!0&&W.isMeshDistanceMaterial===!0&&(W.referencePosition.setFromMatrixPosition(k.matrixWorld),W.nearDistance=z,W.farDistance=M),W}function C(T,E,k,z,M){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===dr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,T.matrixWorld);const it=t.update(T),vt=T.material;if(Array.isArray(vt)){const j=it.groups;for(let B=0,et=j.length;B<et;B++){const nt=j[B],X=vt[nt.materialIndex];if(X&&X.visible){const J=L(T,X,z,k.near,k.far,M);c.renderBufferDirect(k,null,it,J,T,nt)}}}else if(vt.visible){const j=L(T,vt,z,k.near,k.far,M);c.renderBufferDirect(k,null,it,j,T,null)}}const W=T.children;for(let it=0,vt=W.length;it<vt;it++)C(W[it],E,k,z,M)}}function O_(c,t,e){const i=e.isWebGL2;function s(){let O=!1;const $=new ee;let ot=null;const ht=new ee(0,0,0,0);return{setMask:function(yt){ot!==yt&&!O&&(c.colorMask(yt,yt,yt,yt),ot=yt)},setLocked:function(yt){O=yt},setClear:function(yt,kt,ce,ie,nn){nn===!0&&(yt*=ie,kt*=ie,ce*=ie),$.set(yt,kt,ce,ie),ht.equals($)===!1&&(c.clearColor(yt,kt,ce,ie),ht.copy($))},reset:function(){O=!1,ot=null,ht.set(-1,0,0,0)}}}function a(){let O=!1,$=null,ot=null,ht=null;return{setTest:function(yt){yt?Wt(2929):Pt(2929)},setMask:function(yt){$!==yt&&!O&&(c.depthMask(yt),$=yt)},setFunc:function(yt){if(ot!==yt){switch(yt){case hp:c.depthFunc(512);break;case dp:c.depthFunc(519);break;case pp:c.depthFunc(513);break;case Mo:c.depthFunc(515);break;case fp:c.depthFunc(514);break;case mp:c.depthFunc(518);break;case gp:c.depthFunc(516);break;case vp:c.depthFunc(517);break;default:c.depthFunc(515)}ot=yt}},setLocked:function(yt){O=yt},setClear:function(yt){ht!==yt&&(c.clearDepth(yt),ht=yt)},reset:function(){O=!1,$=null,ot=null,ht=null}}}function h(){let O=!1,$=null,ot=null,ht=null,yt=null,kt=null,ce=null,ie=null,nn=null;return{setTest:function(Kt){O||(Kt?Wt(2960):Pt(2960))},setMask:function(Kt){$!==Kt&&!O&&(c.stencilMask(Kt),$=Kt)},setFunc:function(Kt,Ie,we){(ot!==Kt||ht!==Ie||yt!==we)&&(c.stencilFunc(Kt,Ie,we),ot=Kt,ht=Ie,yt=we)},setOp:function(Kt,Ie,we){(kt!==Kt||ce!==Ie||ie!==we)&&(c.stencilOp(Kt,Ie,we),kt=Kt,ce=Ie,ie=we)},setLocked:function(Kt){O=Kt},setClear:function(Kt){nn!==Kt&&(c.clearStencil(Kt),nn=Kt)},reset:function(){O=!1,$=null,ot=null,ht=null,yt=null,kt=null,ce=null,ie=null,nn=null}}}const l=new s,d=new a,p=new h,f=new WeakMap,m=new WeakMap;let v={},b={},w=new WeakMap,x=[],g=null,y=!1,L=null,C=null,T=null,E=null,k=null,z=null,M=null,I=!1,W=null,it=null,vt=null,j=null,B=null;const et=c.getParameter(35661);let nt=!1,X=0;const J=c.getParameter(7938);J.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(J)[1]),nt=X>=1):J.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),nt=X>=2);let G=null,q={};const st=c.getParameter(3088),at=c.getParameter(2978),Q=new ee().fromArray(st),ut=new ee().fromArray(at);function At(O,$,ot){const ht=new Uint8Array(4),yt=c.createTexture();c.bindTexture(O,yt),c.texParameteri(O,10241,9728),c.texParameteri(O,10240,9728);for(let kt=0;kt<ot;kt++)c.texImage2D($+kt,0,6408,1,1,0,6408,5121,ht);return yt}const tt={};tt[3553]=At(3553,3553,1),tt[34067]=At(34067,34069,6),l.setClear(0,0,0,1),d.setClear(1),p.setClear(0),Wt(2929),d.setFunc(Mo),ae(!1),Ee(Xa),Wt(2884),ne(Un);function Wt(O){v[O]!==!0&&(c.enable(O),v[O]=!0)}function Pt(O){v[O]!==!1&&(c.disable(O),v[O]=!1)}function Et(O,$){return b[O]!==$?(c.bindFramebuffer(O,$),b[O]=$,i&&(O===36009&&(b[36160]=$),O===36160&&(b[36009]=$)),!0):!1}function pt(O,$){let ot=x,ht=!1;if(O)if(ot=w.get($),ot===void 0&&(ot=[],w.set($,ot)),O.isWebGLMultipleRenderTargets){const yt=O.texture;if(ot.length!==yt.length||ot[0]!==36064){for(let kt=0,ce=yt.length;kt<ce;kt++)ot[kt]=36064+kt;ot.length=yt.length,ht=!0}}else ot[0]!==36064&&(ot[0]=36064,ht=!0);else ot[0]!==1029&&(ot[0]=1029,ht=!0);ht&&(e.isWebGL2?c.drawBuffers(ot):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ot))}function Ht(O){return g!==O?(c.useProgram(O),g=O,!0):!1}const It={[Ni]:32774,[tp]:32778,[ep]:32779};if(i)It[Za]=32775,It[Ja]=32776;else{const O=t.get("EXT_blend_minmax");O!==null&&(It[Za]=O.MIN_EXT,It[Ja]=O.MAX_EXT)}const St={[np]:0,[ip]:1,[rp]:768,[Mc]:770,[up]:776,[lp]:774,[op]:772,[sp]:769,[Sc]:771,[cp]:775,[ap]:773};function ne(O,$,ot,ht,yt,kt,ce,ie){if(O===Un){y===!0&&(Pt(3042),y=!1);return}if(y===!1&&(Wt(3042),y=!0),O!==Qd){if(O!==L||ie!==I){if((C!==Ni||k!==Ni)&&(c.blendEquation(32774),C=Ni,k=Ni),ie)switch(O){case Oi:c.blendFuncSeparate(1,771,1,771);break;case Ya:c.blendFunc(1,1);break;case $a:c.blendFuncSeparate(0,769,0,1);break;case Ka:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Oi:c.blendFuncSeparate(770,771,1,771);break;case Ya:c.blendFunc(770,1);break;case $a:c.blendFuncSeparate(0,769,0,1);break;case Ka:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,E=null,z=null,M=null,L=O,I=ie}return}yt=yt||$,kt=kt||ot,ce=ce||ht,($!==C||yt!==k)&&(c.blendEquationSeparate(It[$],It[yt]),C=$,k=yt),(ot!==T||ht!==E||kt!==z||ce!==M)&&(c.blendFuncSeparate(St[ot],St[ht],St[kt],St[ce]),T=ot,E=ht,z=kt,M=ce),L=O,I=null}function le(O,$){O.side===Vn?Pt(2884):Wt(2884);let ot=O.side===qe;$&&(ot=!ot),ae(ot),O.blending===Oi&&O.transparent===!1?ne(Un):ne(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),d.setFunc(O.depthFunc),d.setTest(O.depthTest),d.setMask(O.depthWrite),l.setMask(O.colorWrite);const ht=O.stencilWrite;p.setTest(ht),ht&&(p.setMask(O.stencilWriteMask),p.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),p.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),jt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Wt(32926):Pt(32926)}function ae(O){W!==O&&(O?c.frontFace(2304):c.frontFace(2305),W=O)}function Ee(O){O!==Zd?(Wt(2884),O!==it&&(O===Xa?c.cullFace(1029):O===Jd?c.cullFace(1028):c.cullFace(1032))):Pt(2884),it=O}function Qt(O){O!==vt&&(nt&&c.lineWidth(O),vt=O)}function jt(O,$,ot){O?(Wt(32823),(j!==$||B!==ot)&&(c.polygonOffset($,ot),j=$,B=ot)):Pt(32823)}function Pe(O){O?Wt(3089):Pt(3089)}function Te(O){O===void 0&&(O=33984+et-1),G!==O&&(c.activeTexture(O),G=O)}function A(O,$,ot){ot===void 0&&(G===null?ot=33984+et-1:ot=G);let ht=q[ot];ht===void 0&&(ht={type:void 0,texture:void 0},q[ot]=ht),(ht.type!==O||ht.texture!==$)&&(G!==ot&&(c.activeTexture(ot),G=ot),c.bindTexture(O,$||tt[O]),ht.type=O,ht.texture=$)}function S(){const O=q[G];O!==void 0&&O.type!==void 0&&(c.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Y(){try{c.compressedTexImage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{c.compressedTexImage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{c.texSubImage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ft(){try{c.texSubImage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function R(){try{c.compressedTexSubImage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function V(){try{c.texStorage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{c.texStorage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xt(){try{c.texImage2D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{c.texImage3D.apply(c,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(O){Q.equals(O)===!1&&(c.scissor(O.x,O.y,O.z,O.w),Q.copy(O))}function bt(O){ut.equals(O)===!1&&(c.viewport(O.x,O.y,O.z,O.w),ut.copy(O))}function Vt(O,$){let ot=m.get($);ot===void 0&&(ot=new WeakMap,m.set($,ot));let ht=ot.get(O);ht===void 0&&(ht=c.getUniformBlockIndex($,O.name),ot.set(O,ht))}function zt(O,$){const ht=m.get($).get(O);f.get(O)!==ht&&(c.uniformBlockBinding($,ht,O.__bindingPointIndex),f.set(O,ht))}function $t(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),i===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),v={},G=null,q={},b={},w=new WeakMap,x=[],g=null,y=!1,L=null,C=null,T=null,E=null,k=null,z=null,M=null,I=!1,W=null,it=null,vt=null,j=null,B=null,Q.set(0,0,c.canvas.width,c.canvas.height),ut.set(0,0,c.canvas.width,c.canvas.height),l.reset(),d.reset(),p.reset()}return{buffers:{color:l,depth:d,stencil:p},enable:Wt,disable:Pt,bindFramebuffer:Et,drawBuffers:pt,useProgram:Ht,setBlending:ne,setMaterial:le,setFlipSided:ae,setCullFace:Ee,setLineWidth:Qt,setPolygonOffset:jt,setScissorTest:Pe,activeTexture:Te,bindTexture:A,unbindTexture:S,compressedTexImage2D:Y,compressedTexImage3D:lt,texImage2D:xt,texImage3D:gt,updateUBOMapping:Vt,uniformBlockBinding:zt,texStorage2D:V,texStorage3D:mt,texSubImage2D:ct,texSubImage3D:ft,compressedTexSubImage2D:Tt,compressedTexSubImage3D:R,scissor:wt,viewport:bt,reset:$t}}function F_(c,t,e,i,s,a,h){const l=s.isWebGL2,d=s.maxTextures,p=s.maxCubemapSize,f=s.maxTextureSize,m=s.maxSamples,v=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,b=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),w=new WeakMap;let x;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function L(A,S){return y?new OffscreenCanvas(A,S):vr("canvas")}function C(A,S,Y,lt){let ct=1;if((A.width>lt||A.height>lt)&&(ct=lt/Math.max(A.width,A.height)),ct<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ft=S?Ao:Math.floor,Tt=ft(ct*A.width),R=ft(ct*A.height);x===void 0&&(x=L(Tt,R));const V=Y?L(Tt,R):x;return V.width=Tt,V.height=R,V.getContext("2d").drawImage(A,0,0,Tt,R),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Tt+"x"+R+")."),V}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function T(A){return Cl(A.width)&&Cl(A.height)}function E(A){return l?!1:A.wrapS!==Je||A.wrapT!==Je||A.minFilter!==Re&&A.minFilter!==He}function k(A,S){return A.generateMipmaps&&S&&A.minFilter!==Re&&A.minFilter!==He}function z(A){c.generateMipmap(A)}function M(A,S,Y,lt,ct=!1){if(l===!1)return S;if(A!==null){if(c[A]!==void 0)return c[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ft=S;return S===6403&&(Y===5126&&(ft=33326),Y===5131&&(ft=33325),Y===5121&&(ft=33321)),S===33319&&(Y===5126&&(ft=33328),Y===5131&&(ft=33327),Y===5121&&(ft=33323)),S===6408&&(Y===5126&&(ft=34836),Y===5131&&(ft=34842),Y===5121&&(ft=lt===se&&ct===!1?35907:32856),Y===32819&&(ft=32854),Y===32820&&(ft=32855)),(ft===33325||ft===33326||ft===33327||ft===33328||ft===34842||ft===34836)&&t.get("EXT_color_buffer_float"),ft}function I(A,S,Y){return k(A,Y)===!0||A.isFramebufferTexture&&A.minFilter!==Re&&A.minFilter!==He?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function W(A){return A===Re||A===Qa||A===tl?9728:9729}function it(A){const S=A.target;S.removeEventListener("dispose",it),j(S),S.isVideoTexture&&w.delete(S)}function vt(A){const S=A.target;S.removeEventListener("dispose",vt),et(S)}function j(A){const S=i.get(A);if(S.__webglInit===void 0)return;const Y=A.source,lt=g.get(Y);if(lt){const ct=lt[S.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&B(A),Object.keys(lt).length===0&&g.delete(Y)}i.remove(A)}function B(A){const S=i.get(A);c.deleteTexture(S.__webglTexture);const Y=A.source,lt=g.get(Y);delete lt[S.__cacheKey],h.memory.textures--}function et(A){const S=A.texture,Y=i.get(A),lt=i.get(S);if(lt.__webglTexture!==void 0&&(c.deleteTexture(lt.__webglTexture),h.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++)c.deleteFramebuffer(Y.__webglFramebuffer[ct]),Y.__webglDepthbuffer&&c.deleteRenderbuffer(Y.__webglDepthbuffer[ct]);else{if(c.deleteFramebuffer(Y.__webglFramebuffer),Y.__webglDepthbuffer&&c.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&c.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let ct=0;ct<Y.__webglColorRenderbuffer.length;ct++)Y.__webglColorRenderbuffer[ct]&&c.deleteRenderbuffer(Y.__webglColorRenderbuffer[ct]);Y.__webglDepthRenderbuffer&&c.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ct=0,ft=S.length;ct<ft;ct++){const Tt=i.get(S[ct]);Tt.__webglTexture&&(c.deleteTexture(Tt.__webglTexture),h.memory.textures--),i.remove(S[ct])}i.remove(S),i.remove(A)}let nt=0;function X(){nt=0}function J(){const A=nt;return A>=d&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+d),nt+=1,A}function G(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function q(A,S){const Y=i.get(A);if(A.isVideoTexture&&Pe(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){const lt=A.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pt(Y,A,S);return}}e.bindTexture(3553,Y.__webglTexture,33984+S)}function st(A,S){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){Pt(Y,A,S);return}e.bindTexture(35866,Y.__webglTexture,33984+S)}function at(A,S){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){Pt(Y,A,S);return}e.bindTexture(32879,Y.__webglTexture,33984+S)}function Q(A,S){const Y=i.get(A);if(A.version>0&&Y.__version!==A.version){Et(Y,A,S);return}e.bindTexture(34067,Y.__webglTexture,33984+S)}const ut={[Eo]:10497,[Je]:33071,[Po]:33648},At={[Re]:9728,[Qa]:9984,[tl]:9986,[He]:9729,[Cp]:9985,[rs]:9987};function tt(A,S,Y){if(Y?(c.texParameteri(A,10242,ut[S.wrapS]),c.texParameteri(A,10243,ut[S.wrapT]),(A===32879||A===35866)&&c.texParameteri(A,32882,ut[S.wrapR]),c.texParameteri(A,10240,At[S.magFilter]),c.texParameteri(A,10241,At[S.minFilter])):(c.texParameteri(A,10242,33071),c.texParameteri(A,10243,33071),(A===32879||A===35866)&&c.texParameteri(A,32882,33071),(S.wrapS!==Je||S.wrapT!==Je)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(A,10240,W(S.magFilter)),c.texParameteri(A,10241,W(S.minFilter)),S.minFilter!==Re&&S.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const lt=t.get("EXT_texture_filter_anisotropic");if(S.type===Jn&&t.has("OES_texture_float_linear")===!1||l===!1&&S.type===gr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(c.texParameterf(A,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Wt(A,S){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",it));const lt=S.source;let ct=g.get(lt);ct===void 0&&(ct={},g.set(lt,ct));const ft=G(S);if(ft!==A.__cacheKey){ct[ft]===void 0&&(ct[ft]={texture:c.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),ct[ft].usedTimes++;const Tt=ct[A.__cacheKey];Tt!==void 0&&(ct[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&B(S)),A.__cacheKey=ft,A.__webglTexture=ct[ft].texture}return Y}function Pt(A,S,Y){let lt=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(lt=35866),S.isData3DTexture&&(lt=32879);const ct=Wt(A,S),ft=S.source;e.bindTexture(lt,A.__webglTexture,33984+Y);const Tt=i.get(ft);if(ft.version!==Tt.__version||ct===!0){e.activeTexture(33984+Y),c.pixelStorei(37440,S.flipY),c.pixelStorei(37441,S.premultiplyAlpha),c.pixelStorei(3317,S.unpackAlignment),c.pixelStorei(37443,0);const R=E(S)&&T(S.image)===!1;let V=C(S.image,R,!1,f);V=Te(S,V);const mt=T(V)||l,xt=a.convert(S.format,S.encoding);let gt=a.convert(S.type),wt=M(S.internalFormat,xt,gt,S.encoding,S.isVideoTexture);tt(lt,S,mt);let bt;const Vt=S.mipmaps,zt=l&&S.isVideoTexture!==!0,$t=Tt.__version===void 0||ct===!0,O=I(S,V,mt);if(S.isDepthTexture)wt=6402,l?S.type===Jn?wt=36012:S.type===Zn?wt=33190:S.type===Fi?wt=35056:wt=33189:S.type===Jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===ti&&wt===6402&&S.type!==Pc&&S.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Zn,gt=a.convert(S.type)),S.format===Bi&&wt===6402&&(wt=34041,S.type!==Fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Fi,gt=a.convert(S.type))),$t&&(zt?e.texStorage2D(3553,1,wt,V.width,V.height):e.texImage2D(3553,0,wt,V.width,V.height,0,xt,gt,null));else if(S.isDataTexture)if(Vt.length>0&&mt){zt&&$t&&e.texStorage2D(3553,O,wt,Vt[0].width,Vt[0].height);for(let $=0,ot=Vt.length;$<ot;$++)bt=Vt[$],zt?e.texSubImage2D(3553,$,0,0,bt.width,bt.height,xt,gt,bt.data):e.texImage2D(3553,$,wt,bt.width,bt.height,0,xt,gt,bt.data);S.generateMipmaps=!1}else zt?($t&&e.texStorage2D(3553,O,wt,V.width,V.height),e.texSubImage2D(3553,0,0,0,V.width,V.height,xt,gt,V.data)):e.texImage2D(3553,0,wt,V.width,V.height,0,xt,gt,V.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){zt&&$t&&e.texStorage3D(35866,O,wt,Vt[0].width,Vt[0].height,V.depth);for(let $=0,ot=Vt.length;$<ot;$++)bt=Vt[$],S.format!==Qe?xt!==null?zt?e.compressedTexSubImage3D(35866,$,0,0,0,bt.width,bt.height,V.depth,xt,bt.data,0,0):e.compressedTexImage3D(35866,$,wt,bt.width,bt.height,V.depth,0,bt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?e.texSubImage3D(35866,$,0,0,0,bt.width,bt.height,V.depth,xt,gt,bt.data):e.texImage3D(35866,$,wt,bt.width,bt.height,V.depth,0,xt,gt,bt.data)}else{zt&&$t&&e.texStorage2D(3553,O,wt,Vt[0].width,Vt[0].height);for(let $=0,ot=Vt.length;$<ot;$++)bt=Vt[$],S.format!==Qe?xt!==null?zt?e.compressedTexSubImage2D(3553,$,0,0,bt.width,bt.height,xt,bt.data):e.compressedTexImage2D(3553,$,wt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?e.texSubImage2D(3553,$,0,0,bt.width,bt.height,xt,gt,bt.data):e.texImage2D(3553,$,wt,bt.width,bt.height,0,xt,gt,bt.data)}else if(S.isDataArrayTexture)zt?($t&&e.texStorage3D(35866,O,wt,V.width,V.height,V.depth),e.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,xt,gt,V.data)):e.texImage3D(35866,0,wt,V.width,V.height,V.depth,0,xt,gt,V.data);else if(S.isData3DTexture)zt?($t&&e.texStorage3D(32879,O,wt,V.width,V.height,V.depth),e.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,xt,gt,V.data)):e.texImage3D(32879,0,wt,V.width,V.height,V.depth,0,xt,gt,V.data);else if(S.isFramebufferTexture){if($t)if(zt)e.texStorage2D(3553,O,wt,V.width,V.height);else{let $=V.width,ot=V.height;for(let ht=0;ht<O;ht++)e.texImage2D(3553,ht,wt,$,ot,0,xt,gt,null),$>>=1,ot>>=1}}else if(Vt.length>0&&mt){zt&&$t&&e.texStorage2D(3553,O,wt,Vt[0].width,Vt[0].height);for(let $=0,ot=Vt.length;$<ot;$++)bt=Vt[$],zt?e.texSubImage2D(3553,$,0,0,xt,gt,bt):e.texImage2D(3553,$,wt,xt,gt,bt);S.generateMipmaps=!1}else zt?($t&&e.texStorage2D(3553,O,wt,V.width,V.height),e.texSubImage2D(3553,0,0,0,xt,gt,V)):e.texImage2D(3553,0,wt,xt,gt,V);k(S,mt)&&z(lt),Tt.__version=ft.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Et(A,S,Y){if(S.image.length!==6)return;const lt=Wt(A,S),ct=S.source;e.bindTexture(34067,A.__webglTexture,33984+Y);const ft=i.get(ct);if(ct.version!==ft.__version||lt===!0){e.activeTexture(33984+Y),c.pixelStorei(37440,S.flipY),c.pixelStorei(37441,S.premultiplyAlpha),c.pixelStorei(3317,S.unpackAlignment),c.pixelStorei(37443,0);const Tt=S.isCompressedTexture||S.image[0].isCompressedTexture,R=S.image[0]&&S.image[0].isDataTexture,V=[];for(let $=0;$<6;$++)!Tt&&!R?V[$]=C(S.image[$],!1,!0,p):V[$]=R?S.image[$].image:S.image[$],V[$]=Te(S,V[$]);const mt=V[0],xt=T(mt)||l,gt=a.convert(S.format,S.encoding),wt=a.convert(S.type),bt=M(S.internalFormat,gt,wt,S.encoding),Vt=l&&S.isVideoTexture!==!0,zt=ft.__version===void 0||lt===!0;let $t=I(S,mt,xt);tt(34067,S,xt);let O;if(Tt){Vt&&zt&&e.texStorage2D(34067,$t,bt,mt.width,mt.height);for(let $=0;$<6;$++){O=V[$].mipmaps;for(let ot=0;ot<O.length;ot++){const ht=O[ot];S.format!==Qe?gt!==null?Vt?e.compressedTexSubImage2D(34069+$,ot,0,0,ht.width,ht.height,gt,ht.data):e.compressedTexImage2D(34069+$,ot,bt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(34069+$,ot,0,0,ht.width,ht.height,gt,wt,ht.data):e.texImage2D(34069+$,ot,bt,ht.width,ht.height,0,gt,wt,ht.data)}}}else{O=S.mipmaps,Vt&&zt&&(O.length>0&&$t++,e.texStorage2D(34067,$t,bt,V[0].width,V[0].height));for(let $=0;$<6;$++)if(R){Vt?e.texSubImage2D(34069+$,0,0,0,V[$].width,V[$].height,gt,wt,V[$].data):e.texImage2D(34069+$,0,bt,V[$].width,V[$].height,0,gt,wt,V[$].data);for(let ot=0;ot<O.length;ot++){const yt=O[ot].image[$].image;Vt?e.texSubImage2D(34069+$,ot+1,0,0,yt.width,yt.height,gt,wt,yt.data):e.texImage2D(34069+$,ot+1,bt,yt.width,yt.height,0,gt,wt,yt.data)}}else{Vt?e.texSubImage2D(34069+$,0,0,0,gt,wt,V[$]):e.texImage2D(34069+$,0,bt,gt,wt,V[$]);for(let ot=0;ot<O.length;ot++){const ht=O[ot];Vt?e.texSubImage2D(34069+$,ot+1,0,0,gt,wt,ht.image[$]):e.texImage2D(34069+$,ot+1,bt,gt,wt,ht.image[$])}}}k(S,xt)&&z(34067),ft.__version=ct.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function pt(A,S,Y,lt,ct){const ft=a.convert(Y.format,Y.encoding),Tt=a.convert(Y.type),R=M(Y.internalFormat,ft,Tt,Y.encoding);i.get(S).__hasExternalTextures||(ct===32879||ct===35866?e.texImage3D(ct,0,R,S.width,S.height,S.depth,0,ft,Tt,null):e.texImage2D(ct,0,R,S.width,S.height,0,ft,Tt,null)),e.bindFramebuffer(36160,A),jt(S)?v.framebufferTexture2DMultisampleEXT(36160,lt,ct,i.get(Y).__webglTexture,0,Qt(S)):(ct===3553||ct>=34069&&ct<=34074)&&c.framebufferTexture2D(36160,lt,ct,i.get(Y).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ht(A,S,Y){if(c.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let lt=33189;if(Y||jt(S)){const ct=S.depthTexture;ct&&ct.isDepthTexture&&(ct.type===Jn?lt=36012:ct.type===Zn&&(lt=33190));const ft=Qt(S);jt(S)?v.renderbufferStorageMultisampleEXT(36161,ft,lt,S.width,S.height):c.renderbufferStorageMultisample(36161,ft,lt,S.width,S.height)}else c.renderbufferStorage(36161,lt,S.width,S.height);c.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const lt=Qt(S);Y&&jt(S)===!1?c.renderbufferStorageMultisample(36161,lt,35056,S.width,S.height):jt(S)?v.renderbufferStorageMultisampleEXT(36161,lt,35056,S.width,S.height):c.renderbufferStorage(36161,34041,S.width,S.height),c.framebufferRenderbuffer(36160,33306,36161,A)}else{const lt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ct=0;ct<lt.length;ct++){const ft=lt[ct],Tt=a.convert(ft.format,ft.encoding),R=a.convert(ft.type),V=M(ft.internalFormat,Tt,R,ft.encoding),mt=Qt(S);Y&&jt(S)===!1?c.renderbufferStorageMultisample(36161,mt,V,S.width,S.height):jt(S)?v.renderbufferStorageMultisampleEXT(36161,mt,V,S.width,S.height):c.renderbufferStorage(36161,V,S.width,S.height)}}c.bindRenderbuffer(36161,null)}function It(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const lt=i.get(S.depthTexture).__webglTexture,ct=Qt(S);if(S.depthTexture.format===ti)jt(S)?v.framebufferTexture2DMultisampleEXT(36160,36096,3553,lt,0,ct):c.framebufferTexture2D(36160,36096,3553,lt,0);else if(S.depthTexture.format===Bi)jt(S)?v.framebufferTexture2DMultisampleEXT(36160,33306,3553,lt,0,ct):c.framebufferTexture2D(36160,33306,3553,lt,0);else throw new Error("Unknown depthTexture format")}function St(A){const S=i.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");It(S.__webglFramebuffer,A)}else if(Y){S.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(36160,S.__webglFramebuffer[lt]),S.__webglDepthbuffer[lt]=c.createRenderbuffer(),Ht(S.__webglDepthbuffer[lt],A,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=c.createRenderbuffer(),Ht(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(36160,null)}function ne(A,S,Y){const lt=i.get(A);S!==void 0&&pt(lt.__webglFramebuffer,A,A.texture,36064,3553),Y!==void 0&&St(A)}function le(A){const S=A.texture,Y=i.get(A),lt=i.get(S);A.addEventListener("dispose",vt),A.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=c.createTexture()),lt.__version=S.version,h.memory.textures++);const ct=A.isWebGLCubeRenderTarget===!0,ft=A.isWebGLMultipleRenderTargets===!0,Tt=T(A)||l;if(ct){Y.__webglFramebuffer=[];for(let R=0;R<6;R++)Y.__webglFramebuffer[R]=c.createFramebuffer()}else{if(Y.__webglFramebuffer=c.createFramebuffer(),ft)if(s.drawBuffers){const R=A.texture;for(let V=0,mt=R.length;V<mt;V++){const xt=i.get(R[V]);xt.__webglTexture===void 0&&(xt.__webglTexture=c.createTexture(),h.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&A.samples>0&&jt(A)===!1){const R=ft?S:[S];Y.__webglMultisampledFramebuffer=c.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,Y.__webglMultisampledFramebuffer);for(let V=0;V<R.length;V++){const mt=R[V];Y.__webglColorRenderbuffer[V]=c.createRenderbuffer(),c.bindRenderbuffer(36161,Y.__webglColorRenderbuffer[V]);const xt=a.convert(mt.format,mt.encoding),gt=a.convert(mt.type),wt=M(mt.internalFormat,xt,gt,mt.encoding,A.isXRRenderTarget===!0),bt=Qt(A);c.renderbufferStorageMultisample(36161,bt,wt,A.width,A.height),c.framebufferRenderbuffer(36160,36064+V,36161,Y.__webglColorRenderbuffer[V])}c.bindRenderbuffer(36161,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=c.createRenderbuffer(),Ht(Y.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(36160,null)}}if(ct){e.bindTexture(34067,lt.__webglTexture),tt(34067,S,Tt);for(let R=0;R<6;R++)pt(Y.__webglFramebuffer[R],A,S,36064,34069+R);k(S,Tt)&&z(34067),e.unbindTexture()}else if(ft){const R=A.texture;for(let V=0,mt=R.length;V<mt;V++){const xt=R[V],gt=i.get(xt);e.bindTexture(3553,gt.__webglTexture),tt(3553,xt,Tt),pt(Y.__webglFramebuffer,A,xt,36064+V,3553),k(xt,Tt)&&z(3553)}e.unbindTexture()}else{let R=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(l?R=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(R,lt.__webglTexture),tt(R,S,Tt),pt(Y.__webglFramebuffer,A,S,36064,R),k(S,Tt)&&z(R),e.unbindTexture()}A.depthBuffer&&St(A)}function ae(A){const S=T(A)||l,Y=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let lt=0,ct=Y.length;lt<ct;lt++){const ft=Y[lt];if(k(ft,S)){const Tt=A.isWebGLCubeRenderTarget?34067:3553,R=i.get(ft).__webglTexture;e.bindTexture(Tt,R),z(Tt),e.unbindTexture()}}}function Ee(A){if(l&&A.samples>0&&jt(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],Y=A.width,lt=A.height;let ct=16384;const ft=[],Tt=A.stencilBuffer?33306:36096,R=i.get(A),V=A.isWebGLMultipleRenderTargets===!0;if(V)for(let mt=0;mt<S.length;mt++)e.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+mt,36161,null),e.bindFramebuffer(36160,R.__webglFramebuffer),c.framebufferTexture2D(36009,36064+mt,3553,null,0);e.bindFramebuffer(36008,R.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,R.__webglFramebuffer);for(let mt=0;mt<S.length;mt++){ft.push(36064+mt),A.depthBuffer&&ft.push(Tt);const xt=R.__ignoreDepthValues!==void 0?R.__ignoreDepthValues:!1;if(xt===!1&&(A.depthBuffer&&(ct|=256),A.stencilBuffer&&(ct|=1024)),V&&c.framebufferRenderbuffer(36008,36064,36161,R.__webglColorRenderbuffer[mt]),xt===!0&&(c.invalidateFramebuffer(36008,[Tt]),c.invalidateFramebuffer(36009,[Tt])),V){const gt=i.get(S[mt]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,gt,0)}c.blitFramebuffer(0,0,Y,lt,0,0,Y,lt,ct,9728),b&&c.invalidateFramebuffer(36008,ft)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),V)for(let mt=0;mt<S.length;mt++){e.bindFramebuffer(36160,R.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+mt,36161,R.__webglColorRenderbuffer[mt]);const xt=i.get(S[mt]).__webglTexture;e.bindFramebuffer(36160,R.__webglFramebuffer),c.framebufferTexture2D(36009,36064+mt,3553,xt,0)}e.bindFramebuffer(36009,R.__webglMultisampledFramebuffer)}}function Qt(A){return Math.min(m,A.samples)}function jt(A){const S=i.get(A);return l&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Pe(A){const S=h.render.frame;w.get(A)!==S&&(w.set(A,S),A.update())}function Te(A,S){const Y=A.encoding,lt=A.format,ct=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===To||Y!==ii&&(Y===se?l===!1?t.has("EXT_sRGB")===!0&&lt===Qe?(A.format=To,A.minFilter=He,A.generateMipmaps=!1):S=Dc.sRGBToLinear(S):(lt!==Qe||ct!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Y)),S}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.setTexture2D=q,this.setTexture2DArray=st,this.setTexture3D=at,this.setTextureCube=Q,this.rebindTextures=ne,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=jt}function V_(c,t,e){const i=e.isWebGL2;function s(a,h=null){let l;if(a===ni)return 5121;if(a===Ap)return 32819;if(a===Lp)return 32820;if(a===Ep)return 5120;if(a===Pp)return 5122;if(a===Pc)return 5123;if(a===Tp)return 5124;if(a===Zn)return 5125;if(a===Jn)return 5126;if(a===gr)return i?5131:(l=t.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(a===Dp)return 6406;if(a===Qe)return 6408;if(a===Ip)return 6409;if(a===Np)return 6410;if(a===ti)return 6402;if(a===Bi)return 34041;if(a===kp)return 6403;if(a===Rp)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(a===To)return l=t.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(a===Op)return 36244;if(a===Fp)return 33319;if(a===Vp)return 33320;if(a===Up)return 36249;if(a===Fs||a===Vs||a===Us||a===zs)if(h===se)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Fs)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Vs)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Us)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===zs)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Fs)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Vs)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Us)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===zs)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===el||a===nl||a===il||a===rl)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===el)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===nl)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===il)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===rl)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===zp)return l=t.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===sl||a===ol)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===sl)return h===se?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===ol)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===al||a===ll||a===cl||a===ul||a===hl||a===dl||a===pl||a===fl||a===ml||a===gl||a===vl||a===_l||a===xl||a===bl)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===al)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===ll)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===cl)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===ul)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===hl)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===dl)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===pl)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===fl)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===ml)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===gl)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===vl)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===_l)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===xl)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===bl)return h===se?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===wl)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===wl)return h===se?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return a===Fi?i?34042:(l=t.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):c[a]!==void 0?c[a]:null}return{convert:s}}class U_ extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Jr extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z_={type:"move"};class mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,a=null,h=null;const l=this._targetRay,d=this._grip,p=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,i);if(p.joints[x.jointName]===void 0){const L=new Jr;L.matrixAutoUpdate=!1,L.visible=!1,p.joints[x.jointName]=L,p.add(L)}const y=p.joints[x.jointName];g!==null&&(y.matrix.fromArray(g.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.jointRadius=g.radius),y.visible=g!==null}const f=p.joints["index-finger-tip"],m=p.joints["thumb-tip"],v=f.position.distanceTo(m.position),b=.02,w=.005;p.inputState.pinching&&v>b+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=b-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(z_)))}return l!==null&&(l.visible=s!==null),d!==null&&(d.visible=a!==null),p!==null&&(p.visible=h!==null),this}}class B_ extends je{constructor(t,e,i,s,a,h,l,d,p,f){if(f=f!==void 0?f:ti,f!==ti&&f!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ti&&(i=Zn),i===void 0&&f===Bi&&(i=Fi),super(null,s,a,h,l,d,f,i,p),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:Re,this.minFilter=d!==void 0?d:Re,this.flipY=!1,this.generateMipmaps=!1}}class G_ extends ai{constructor(t,e){super();const i=this;let s=null,a=1,h=null,l="local-floor",d=null,p=null,f=null,m=null,v=null,b=null;const w=e.getContextAttributes();let x=null,g=null;const y=[],L=[],C=new Fe;C.layers.enable(1),C.viewport=new ee;const T=new Fe;T.layers.enable(2),T.viewport=new ee;const E=[C,T],k=new U_;k.layers.enable(1),k.layers.enable(2);let z=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let q=y[G];return q===void 0&&(q=new mo,y[G]=q),q.getTargetRaySpace()},this.getControllerGrip=function(G){let q=y[G];return q===void 0&&(q=new mo,y[G]=q),q.getGripSpace()},this.getHand=function(G){let q=y[G];return q===void 0&&(q=new mo,y[G]=q),q.getHandSpace()};function I(G){const q=L.indexOf(G.inputSource);if(q===-1)return;const st=y[q];st!==void 0&&st.dispatchEvent({type:G.type,data:G.inputSource})}function W(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",it);for(let G=0;G<y.length;G++){const q=L[G];q!==null&&(L[G]=null,y[G].disconnect(q))}z=null,M=null,t.setRenderTarget(x),v=null,m=null,f=null,s=null,g=null,J.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){l=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(G){d=G},this.getBaseLayer=function(){return m!==null?m:v},this.getBinding=function(){return f},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",W),s.addEventListener("inputsourceschange",it),w.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const q={antialias:s.renderState.layers===void 0?w.antialias:!0,alpha:w.alpha,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:v}),g=new ri(v.framebufferWidth,v.framebufferHeight,{format:Qe,type:ni,encoding:t.outputEncoding,stencilBuffer:w.stencil})}else{let q=null,st=null,at=null;w.depth&&(at=w.stencil?35056:33190,q=w.stencil?Bi:ti,st=w.stencil?Fi:Zn);const Q={colorFormat:32856,depthFormat:at,scaleFactor:a};f=new XRWebGLBinding(s,e),m=f.createProjectionLayer(Q),s.updateRenderState({layers:[m]}),g=new ri(m.textureWidth,m.textureHeight,{format:Qe,type:ni,depthTexture:new B_(m.textureWidth,m.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:w.stencil,encoding:t.outputEncoding,samples:w.antialias?4:0});const ut=t.properties.get(g);ut.__ignoreDepthValues=m.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),d=null,h=await s.requestReferenceSpace(l),J.setContext(s),J.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function it(G){for(let q=0;q<G.removed.length;q++){const st=G.removed[q],at=L.indexOf(st);at>=0&&(L[at]=null,y[at].dispatchEvent({type:"disconnected",data:st}))}for(let q=0;q<G.added.length;q++){const st=G.added[q];let at=L.indexOf(st);if(at===-1){for(let ut=0;ut<y.length;ut++)if(ut>=L.length){L.push(st),at=ut;break}else if(L[ut]===null){L[ut]=st,at=ut;break}if(at===-1)break}const Q=y[at];Q&&Q.dispatchEvent({type:"connected",data:st})}}const vt=new N,j=new N;function B(G,q,st){vt.setFromMatrixPosition(q.matrixWorld),j.setFromMatrixPosition(st.matrixWorld);const at=vt.distanceTo(j),Q=q.projectionMatrix.elements,ut=st.projectionMatrix.elements,At=Q[14]/(Q[10]-1),tt=Q[14]/(Q[10]+1),Wt=(Q[9]+1)/Q[5],Pt=(Q[9]-1)/Q[5],Et=(Q[8]-1)/Q[0],pt=(ut[8]+1)/ut[0],Ht=At*Et,It=At*pt,St=at/(-Et+pt),ne=St*-Et;q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ne),G.translateZ(St),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const le=At+St,ae=tt+St,Ee=Ht-ne,Qt=It+(at-ne),jt=Wt*tt/ae*le,Pe=Pt*tt/ae*le;G.projectionMatrix.makePerspective(Ee,Qt,jt,Pe,le,ae)}function et(G,q){q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;k.near=T.near=C.near=G.near,k.far=T.far=C.far=G.far,(z!==k.near||M!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),z=k.near,M=k.far);const q=G.parent,st=k.cameras;et(k,q);for(let Q=0;Q<st.length;Q++)et(st[Q],q);k.matrixWorld.decompose(k.position,k.quaternion,k.scale),G.matrix.copy(k.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale);const at=G.children;for(let Q=0,ut=at.length;Q<ut;Q++)at[Q].updateMatrixWorld(!0);st.length===2?B(k,C,T):k.projectionMatrix.copy(C.projectionMatrix)},this.getCamera=function(){return k},this.getFoveation=function(){if(m!==null)return m.fixedFoveation;if(v!==null)return v.fixedFoveation},this.setFoveation=function(G){m!==null&&(m.fixedFoveation=G),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=G)};let nt=null;function X(G,q){if(p=q.getViewerPose(d||h),b=q,p!==null){const st=p.views;v!==null&&(t.setRenderTargetFramebuffer(g,v.framebuffer),t.setRenderTarget(g));let at=!1;st.length!==k.cameras.length&&(k.cameras.length=0,at=!0);for(let Q=0;Q<st.length;Q++){const ut=st[Q];let At=null;if(v!==null)At=v.getViewport(ut);else{const Wt=f.getViewSubImage(m,ut);At=Wt.viewport,Q===0&&(t.setRenderTargetTextures(g,Wt.colorTexture,m.ignoreDepthValues?void 0:Wt.depthStencilTexture),t.setRenderTarget(g))}let tt=E[Q];tt===void 0&&(tt=new Fe,tt.layers.enable(Q),tt.viewport=new ee,E[Q]=tt),tt.matrix.fromArray(ut.transform.matrix),tt.projectionMatrix.fromArray(ut.projectionMatrix),tt.viewport.set(At.x,At.y,At.width,At.height),Q===0&&k.matrix.copy(tt.matrix),at===!0&&k.cameras.push(tt)}}for(let st=0;st<y.length;st++){const at=L[st],Q=y[st];at!==null&&Q!==void 0&&Q.update(at,q,d||h)}nt&&nt(G,q),b=null}const J=new zc;J.setAnimationLoop(X),this.setAnimationLoop=function(G){nt=G},this.dispose=function(){}}}function H_(c,t){function e(x,g){x.fogColor.value.copy(g.color),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function i(x,g,y,L,C){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(x,g):g.isMeshToonMaterial?(s(x,g),f(x,g)):g.isMeshPhongMaterial?(s(x,g),p(x,g)):g.isMeshStandardMaterial?(s(x,g),m(x,g),g.isMeshPhysicalMaterial&&v(x,g,C)):g.isMeshMatcapMaterial?(s(x,g),b(x,g)):g.isMeshDepthMaterial?s(x,g):g.isMeshDistanceMaterial?(s(x,g),w(x,g)):g.isMeshNormalMaterial?s(x,g):g.isLineBasicMaterial?(a(x,g),g.isLineDashedMaterial&&h(x,g)):g.isPointsMaterial?l(x,g,y,L):g.isSpriteMaterial?d(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map),g.alphaMap&&(x.alphaMap.value=g.alphaMap),g.bumpMap&&(x.bumpMap.value=g.bumpMap,x.bumpScale.value=g.bumpScale,g.side===qe&&(x.bumpScale.value*=-1)),g.displacementMap&&(x.displacementMap.value=g.displacementMap,x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap),g.normalMap&&(x.normalMap.value=g.normalMap,x.normalScale.value.copy(g.normalScale),g.side===qe&&x.normalScale.value.negate()),g.specularMap&&(x.specularMap.value=g.specularMap),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);const y=t.get(g).envMap;if(y&&(x.envMap.value=y,x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap){x.lightMap.value=g.lightMap;const T=c.physicallyCorrectLights!==!0?Math.PI:1;x.lightMapIntensity.value=g.lightMapIntensity*T}g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity);let L;g.map?L=g.map:g.specularMap?L=g.specularMap:g.displacementMap?L=g.displacementMap:g.normalMap?L=g.normalMap:g.bumpMap?L=g.bumpMap:g.roughnessMap?L=g.roughnessMap:g.metalnessMap?L=g.metalnessMap:g.alphaMap?L=g.alphaMap:g.emissiveMap?L=g.emissiveMap:g.clearcoatMap?L=g.clearcoatMap:g.clearcoatNormalMap?L=g.clearcoatNormalMap:g.clearcoatRoughnessMap?L=g.clearcoatRoughnessMap:g.iridescenceMap?L=g.iridescenceMap:g.iridescenceThicknessMap?L=g.iridescenceThicknessMap:g.specularIntensityMap?L=g.specularIntensityMap:g.specularColorMap?L=g.specularColorMap:g.transmissionMap?L=g.transmissionMap:g.thicknessMap?L=g.thicknessMap:g.sheenColorMap?L=g.sheenColorMap:g.sheenRoughnessMap&&(L=g.sheenRoughnessMap),L!==void 0&&(L.isWebGLRenderTarget&&(L=L.texture),L.matrixAutoUpdate===!0&&L.updateMatrix(),x.uvTransform.value.copy(L.matrix));let C;g.aoMap?C=g.aoMap:g.lightMap&&(C=g.lightMap),C!==void 0&&(C.isWebGLRenderTarget&&(C=C.texture),C.matrixAutoUpdate===!0&&C.updateMatrix(),x.uv2Transform.value.copy(C.matrix))}function a(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity}function h(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function l(x,g,y,L){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*y,x.scale.value=L*.5,g.map&&(x.map.value=g.map),g.alphaMap&&(x.alphaMap.value=g.alphaMap),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let C;g.map?C=g.map:g.alphaMap&&(C=g.alphaMap),C!==void 0&&(C.matrixAutoUpdate===!0&&C.updateMatrix(),x.uvTransform.value.copy(C.matrix))}function d(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map),g.alphaMap&&(x.alphaMap.value=g.alphaMap),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let y;g.map?y=g.map:g.alphaMap&&(y=g.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),x.uvTransform.value.copy(y.matrix))}function p(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function f(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function m(x,g){x.roughness.value=g.roughness,x.metalness.value=g.metalness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap),g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap),t.get(g).envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function v(x,g,y){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap)),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap),g.clearcoatNormalMap&&(x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),x.clearcoatNormalMap.value=g.clearcoatNormalMap,g.side===qe&&x.clearcoatNormalScale.value.negate())),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap)),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap)}function b(x,g){g.matcap&&(x.matcap.value=g.matcap)}function w(x,g){x.referencePosition.value.copy(g.referencePosition),x.nearDistance.value=g.nearDistance,x.farDistance.value=g.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:i}}function W_(c,t,e,i){let s={},a={},h=[];const l=e.isWebGL2?c.getParameter(35375):0;function d(L,C){const T=C.program;i.uniformBlockBinding(L,T)}function p(L,C){let T=s[L.id];T===void 0&&(w(L),T=f(L),s[L.id]=T,L.addEventListener("dispose",g));const E=C.program;i.updateUBOMapping(L,E);const k=t.render.frame;a[L.id]!==k&&(v(L),a[L.id]=k)}function f(L){const C=m();L.__bindingPointIndex=C;const T=c.createBuffer(),E=L.__size,k=L.usage;return c.bindBuffer(35345,T),c.bufferData(35345,E,k),c.bindBuffer(35345,null),c.bindBufferBase(35345,C,T),T}function m(){for(let L=0;L<l;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(L){const C=s[L.id],T=L.uniforms,E=L.__cache;c.bindBuffer(35345,C);for(let k=0,z=T.length;k<z;k++){const M=T[k];if(b(M,k,E)===!0){const I=M.value,W=M.__offset;typeof I=="number"?(M.__data[0]=I,c.bufferSubData(35345,W,M.__data)):(M.value.isMatrix3?(M.__data[0]=M.value.elements[0],M.__data[1]=M.value.elements[1],M.__data[2]=M.value.elements[2],M.__data[3]=M.value.elements[0],M.__data[4]=M.value.elements[3],M.__data[5]=M.value.elements[4],M.__data[6]=M.value.elements[5],M.__data[7]=M.value.elements[0],M.__data[8]=M.value.elements[6],M.__data[9]=M.value.elements[7],M.__data[10]=M.value.elements[8],M.__data[11]=M.value.elements[0]):I.toArray(M.__data),c.bufferSubData(35345,W,M.__data))}}c.bindBuffer(35345,null)}function b(L,C,T){const E=L.value;if(T[C]===void 0)return typeof E=="number"?T[C]=E:T[C]=E.clone(),!0;if(typeof E=="number"){if(T[C]!==E)return T[C]=E,!0}else{const k=T[C];if(k.equals(E)===!1)return k.copy(E),!0}return!1}function w(L){const C=L.uniforms;let T=0;const E=16;let k=0;for(let z=0,M=C.length;z<M;z++){const I=C[z],W=x(I);if(I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,z>0){k=T%E;const it=E-k;k!==0&&it-W.boundary<0&&(T+=E-k,I.__offset=T)}T+=W.storage}return k=T%E,k>0&&(T+=E-k),L.__size=T,L.__cache={},this}function x(L){const C=L.value,T={boundary:0,storage:0};return typeof C=="number"?(T.boundary=4,T.storage=4):C.isVector2?(T.boundary=8,T.storage=8):C.isVector3||C.isColor?(T.boundary=16,T.storage=12):C.isVector4?(T.boundary=16,T.storage=16):C.isMatrix3?(T.boundary=48,T.storage=48):C.isMatrix4?(T.boundary=64,T.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),T}function g(L){const C=L.target;C.removeEventListener("dispose",g);const T=h.indexOf(C.__bindingPointIndex);h.splice(T,1),c.deleteBuffer(s[C.id]),delete s[C.id],delete a[C.id]}function y(){for(const L in s)c.deleteBuffer(s[L]);h=[],s={},a={}}return{bind:d,update:p,dispose:y}}function q_(){const c=vr("canvas");return c.style.display="block",c}function qc(c={}){this.isWebGLRenderer=!0;const t=c.canvas!==void 0?c.canvas:q_(),e=c.context!==void 0?c.context:null,i=c.depth!==void 0?c.depth:!0,s=c.stencil!==void 0?c.stencil:!0,a=c.antialias!==void 0?c.antialias:!1,h=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,l=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,d=c.powerPreference!==void 0?c.powerPreference:"default",p=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1;let f;e!==null?f=e.getContextAttributes().alpha:f=c.alpha!==void 0?c.alpha:!1;let m=null,v=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ii,this.physicallyCorrectLights=!1,this.toneMapping=wn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const x=this;let g=!1,y=0,L=0,C=null,T=-1,E=null;const k=new ee,z=new ee;let M=null,I=t.width,W=t.height,it=1,vt=null,j=null;const B=new ee(0,0,I,W),et=new ee(0,0,I,W);let nt=!1;const X=new No;let J=!1,G=!1,q=null;const st=new oe,at=new _t,Q=new N,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function At(){return C===null?it:1}let tt=e;function Wt(P,H){for(let K=0;K<P.length;K++){const U=P[K],Z=t.getContext(U,H);if(Z!==null)return Z}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",bt,!1),t.addEventListener("webglcontextcreationerror",Vt,!1),tt===null){const H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),tt=Wt(H,P),tt===null)throw Wt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}tt.getShaderPrecisionFormat===void 0&&(tt.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Pt,Et,pt,Ht,It,St,ne,le,ae,Ee,Qt,jt,Pe,Te,A,S,Y,lt,ct,ft,Tt,R,V,mt;function xt(){Pt=new nv(tt),Et=new $g(tt,Pt,c),Pt.init(Et),R=new V_(tt,Pt,Et),pt=new O_(tt,Pt,Et),Ht=new sv,It=new y_,St=new F_(tt,Pt,pt,It,Et,R,Ht),ne=new Zg(x),le=new ev(x),ae=new pf(tt,Et),V=new Xg(tt,Pt,ae,Et),Ee=new iv(tt,ae,Ht,V),Qt=new cv(tt,Ee,ae,Ht),ct=new lv(tt,Et,St),S=new Kg(It),jt=new w_(x,ne,le,Pt,Et,V,S),Pe=new H_(x,It),Te=new S_,A=new L_(Pt,Et),lt=new jg(x,ne,le,pt,Qt,f,h),Y=new k_(x,Qt,Et),mt=new W_(tt,Ht,Et,pt),ft=new Yg(tt,Pt,Ht,Et),Tt=new rv(tt,Pt,Ht,Et),Ht.programs=jt.programs,x.capabilities=Et,x.extensions=Pt,x.properties=It,x.renderLists=Te,x.shadowMap=Y,x.state=pt,x.info=Ht}xt();const gt=new G_(x,tt);this.xr=gt,this.getContext=function(){return tt},this.getContextAttributes=function(){return tt.getContextAttributes()},this.forceContextLoss=function(){const P=Pt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Pt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(P){P!==void 0&&(it=P,this.setSize(I,W,!1))},this.getSize=function(P){return P.set(I,W)},this.setSize=function(P,H,K){if(gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=P,W=H,t.width=Math.floor(P*it),t.height=Math.floor(H*it),K!==!1&&(t.style.width=P+"px",t.style.height=H+"px"),this.setViewport(0,0,P,H)},this.getDrawingBufferSize=function(P){return P.set(I*it,W*it).floor()},this.setDrawingBufferSize=function(P,H,K){I=P,W=H,it=K,t.width=Math.floor(P*K),t.height=Math.floor(H*K),this.setViewport(0,0,P,H)},this.getCurrentViewport=function(P){return P.copy(k)},this.getViewport=function(P){return P.copy(B)},this.setViewport=function(P,H,K,U){P.isVector4?B.set(P.x,P.y,P.z,P.w):B.set(P,H,K,U),pt.viewport(k.copy(B).multiplyScalar(it).floor())},this.getScissor=function(P){return P.copy(et)},this.setScissor=function(P,H,K,U){P.isVector4?et.set(P.x,P.y,P.z,P.w):et.set(P,H,K,U),pt.scissor(z.copy(et).multiplyScalar(it).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(P){pt.setScissorTest(nt=P)},this.setOpaqueSort=function(P){vt=P},this.setTransparentSort=function(P){j=P},this.getClearColor=function(P){return P.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(P=!0,H=!0,K=!0){let U=0;P&&(U|=16384),H&&(U|=256),K&&(U|=1024),tt.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",bt,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),Te.dispose(),A.dispose(),It.dispose(),ne.dispose(),le.dispose(),Qt.dispose(),V.dispose(),mt.dispose(),jt.dispose(),gt.dispose(),gt.removeEventListener("sessionstart",ht),gt.removeEventListener("sessionend",yt),q&&(q.dispose(),q=null),kt.stop()};function wt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),g=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),g=!1;const P=Ht.autoReset,H=Y.enabled,K=Y.autoUpdate,U=Y.needsUpdate,Z=Y.type;xt(),Ht.autoReset=P,Y.enabled=H,Y.autoUpdate=K,Y.needsUpdate=U,Y.type=Z}function Vt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function zt(P){const H=P.target;H.removeEventListener("dispose",zt),$t(H)}function $t(P){O(P),It.remove(P)}function O(P){const H=It.get(P).programs;H!==void 0&&(H.forEach(function(K){jt.releaseProgram(K)}),P.isShaderMaterial&&jt.releaseShaderCache(P))}this.renderBufferDirect=function(P,H,K,U,Z,Ct){H===null&&(H=ut);const Lt=Z.isMesh&&Z.matrixWorld.determinant()<0,Nt=as(P,H,K,U,Z);pt.setMaterial(U,Lt);let Dt=K.index;const qt=K.attributes.position;if(Dt===null){if(qt===void 0||qt.count===0)return}else if(Dt.count===0)return;let Ot=1;U.wireframe===!0&&(Dt=Ee.getWireframeAttribute(K),Ot=2),V.setup(Z,U,Nt,K,Dt);let Gt,Jt=ft;Dt!==null&&(Gt=ae.get(Dt),Jt=Tt,Jt.setIndex(Gt));const ln=Dt!==null?Dt.count:qt.count,yn=K.drawRange.start*Ot,cn=K.drawRange.count*Ot,he=Ct!==null?Ct.start*Ot:0,Bt=Ct!==null?Ct.count*Ot:1/0,Mn=Math.max(yn,he),re=Math.min(ln,yn+cn,he+Bt)-1,Ae=Math.max(0,re-Mn+1);if(Ae!==0){if(Z.isMesh)U.wireframe===!0?(pt.setLineWidth(U.wireframeLinewidth*At()),Jt.setMode(1)):Jt.setMode(4);else if(Z.isLine){let Xe=U.linewidth;Xe===void 0&&(Xe=1),pt.setLineWidth(Xe*At()),Z.isLineSegments?Jt.setMode(1):Z.isLineLoop?Jt.setMode(2):Jt.setMode(3)}else Z.isPoints?Jt.setMode(0):Z.isSprite&&Jt.setMode(4);if(Z.isInstancedMesh)Jt.renderInstances(Mn,Ae,Z.count);else if(K.isInstancedBufferGeometry){const Xe=Math.min(K.instanceCount,K._maxInstanceCount);Jt.renderInstances(Mn,Ae,Xe)}else Jt.render(Mn,Ae)}},this.compile=function(P,H){function K(U,Z,Ct){U.transparent===!0&&U.side===Vn?(U.side=qe,U.needsUpdate=!0,we(U,Z,Ct),U.side=Vi,U.needsUpdate=!0,we(U,Z,Ct),U.side=Vn):we(U,Z,Ct)}v=A.get(P),v.init(),w.push(v),P.traverseVisible(function(U){U.isLight&&U.layers.test(H.layers)&&(v.pushLight(U),U.castShadow&&v.pushShadow(U))}),v.setupLights(x.physicallyCorrectLights),P.traverse(function(U){const Z=U.material;if(Z)if(Array.isArray(Z))for(let Ct=0;Ct<Z.length;Ct++){const Lt=Z[Ct];K(Lt,P,U)}else K(Z,P,U)}),w.pop(),v=null};let $=null;function ot(P){$&&$(P)}function ht(){kt.stop()}function yt(){kt.start()}const kt=new zc;kt.setAnimationLoop(ot),typeof self<"u"&&kt.setContext(self),this.setAnimationLoop=function(P){$=P,gt.setAnimationLoop(P),P===null?kt.stop():kt.start()},gt.addEventListener("sessionstart",ht),gt.addEventListener("sessionend",yt),this.render=function(P,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(g===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),gt.enabled===!0&&gt.isPresenting===!0&&(gt.cameraAutoUpdate===!0&&gt.updateCamera(H),H=gt.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,H,C),v=A.get(P,w.length),v.init(),w.push(v),st.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),X.setFromProjectionMatrix(st),G=this.localClippingEnabled,J=S.init(this.clippingPlanes,G,H),m=Te.get(P,b.length),m.init(),b.push(m),ce(P,H,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(vt,j),J===!0&&S.beginShadows();const K=v.state.shadowsArray;if(Y.render(K,P,H),J===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),lt.render(m,P),v.setupLights(x.physicallyCorrectLights),H.isArrayCamera){const U=H.cameras;for(let Z=0,Ct=U.length;Z<Ct;Z++){const Lt=U[Z];ie(m,P,Lt,Lt.viewport)}}else ie(m,P,H);C!==null&&(St.updateMultisampleRenderTarget(C),St.updateRenderTargetMipmap(C)),P.isScene===!0&&P.onAfterRender(x,P,H),V.resetDefaultState(),T=-1,E=null,w.pop(),w.length>0?v=w[w.length-1]:v=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function ce(P,H,K,U){if(P.visible===!1)return;if(P.layers.test(H.layers)){if(P.isGroup)K=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(H);else if(P.isLight)v.pushLight(P),P.castShadow&&v.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||X.intersectsSprite(P)){U&&Q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(st);const Lt=Qt.update(P),Nt=P.material;Nt.visible&&m.push(P,Lt,Nt,K,Q.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==Ht.render.frame&&(P.skeleton.update(),P.skeleton.frame=Ht.render.frame),!P.frustumCulled||X.intersectsObject(P))){U&&Q.setFromMatrixPosition(P.matrixWorld).applyMatrix4(st);const Lt=Qt.update(P),Nt=P.material;if(Array.isArray(Nt)){const Dt=Lt.groups;for(let qt=0,Ot=Dt.length;qt<Ot;qt++){const Gt=Dt[qt],Jt=Nt[Gt.materialIndex];Jt&&Jt.visible&&m.push(P,Lt,Jt,K,Q.z,Gt)}}else Nt.visible&&m.push(P,Lt,Nt,K,Q.z,null)}}const Ct=P.children;for(let Lt=0,Nt=Ct.length;Lt<Nt;Lt++)ce(Ct[Lt],H,K,U)}function ie(P,H,K,U){const Z=P.opaque,Ct=P.transmissive,Lt=P.transparent;v.setupLightsView(K),Ct.length>0&&nn(Z,H,K),U&&pt.viewport(k.copy(U)),Z.length>0&&Kt(Z,H,K),Ct.length>0&&Kt(Ct,H,K),Lt.length>0&&Kt(Lt,H,K),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function nn(P,H,K){const U=Et.isWebGL2;q===null&&(q=new ri(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")?gr:ni,minFilter:rs,samples:U&&a===!0?4:0})),x.getDrawingBufferSize(at),U?q.setSize(at.x,at.y):q.setSize(Ao(at.x),Ao(at.y));const Z=x.getRenderTarget();x.setRenderTarget(q),x.clear();const Ct=x.toneMapping;x.toneMapping=wn,Kt(P,H,K),x.toneMapping=Ct,St.updateMultisampleRenderTarget(q),St.updateRenderTargetMipmap(q),x.setRenderTarget(Z)}function Kt(P,H,K){const U=H.isScene===!0?H.overrideMaterial:null;for(let Z=0,Ct=P.length;Z<Ct;Z++){const Lt=P[Z],Nt=Lt.object,Dt=Lt.geometry,qt=U===null?Lt.material:U,Ot=Lt.group;Nt.layers.test(K.layers)&&Ie(Nt,H,K,Dt,qt,Ot)}}function Ie(P,H,K,U,Z,Ct){P.onBeforeRender(x,H,K,U,Z,Ct),P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),Z.onBeforeRender(x,H,K,U,P,Ct),Z.transparent===!0&&Z.side===Vn?(Z.side=qe,Z.needsUpdate=!0,x.renderBufferDirect(K,H,U,Z,P,Ct),Z.side=Vi,Z.needsUpdate=!0,x.renderBufferDirect(K,H,U,Z,P,Ct),Z.side=Vn):x.renderBufferDirect(K,H,U,Z,P,Ct),P.onAfterRender(x,H,K,U,Z,Ct)}function we(P,H,K){H.isScene!==!0&&(H=ut);const U=It.get(P),Z=v.state.lights,Ct=v.state.shadowsArray,Lt=Z.state.version,Nt=jt.getParameters(P,Z.state,Ct,H,K),Dt=jt.getProgramCacheKey(Nt);let qt=U.programs;U.environment=P.isMeshStandardMaterial?H.environment:null,U.fog=H.fog,U.envMap=(P.isMeshStandardMaterial?le:ne).get(P.envMap||U.environment),qt===void 0&&(P.addEventListener("dispose",zt),qt=new Map,U.programs=qt);let Ot=qt.get(Dt);if(Ot!==void 0){if(U.currentProgram===Ot&&U.lightsStateVersion===Lt)return wr(P,Nt),Ot}else Nt.uniforms=jt.getUniforms(P),P.onBuild(K,Nt,x),P.onBeforeCompile(Nt,x),Ot=jt.acquireProgram(Nt,Dt),qt.set(Dt,Ot),U.uniforms=Nt.uniforms;const Gt=U.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Gt.clippingPlanes=S.uniform),wr(P,Nt),U.needsLights=cs(P),U.lightsStateVersion=Lt,U.needsLights&&(Gt.ambientLightColor.value=Z.state.ambient,Gt.lightProbe.value=Z.state.probe,Gt.directionalLights.value=Z.state.directional,Gt.directionalLightShadows.value=Z.state.directionalShadow,Gt.spotLights.value=Z.state.spot,Gt.spotLightShadows.value=Z.state.spotShadow,Gt.rectAreaLights.value=Z.state.rectArea,Gt.ltc_1.value=Z.state.rectAreaLTC1,Gt.ltc_2.value=Z.state.rectAreaLTC2,Gt.pointLights.value=Z.state.point,Gt.pointLightShadows.value=Z.state.pointShadow,Gt.hemisphereLights.value=Z.state.hemi,Gt.directionalShadowMap.value=Z.state.directionalShadowMap,Gt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Gt.spotShadowMap.value=Z.state.spotShadowMap,Gt.spotLightMatrix.value=Z.state.spotLightMatrix,Gt.spotLightMap.value=Z.state.spotLightMap,Gt.pointShadowMap.value=Z.state.pointShadowMap,Gt.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Jt=Ot.getUniforms(),ln=ns.seqWithValue(Jt.seq,Gt);return U.currentProgram=Ot,U.uniformsList=ln,Ot}function wr(P,H){const K=It.get(P);K.outputEncoding=H.outputEncoding,K.instancing=H.instancing,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function as(P,H,K,U,Z){H.isScene!==!0&&(H=ut),St.resetTextureUnits();const Ct=H.fog,Lt=U.isMeshStandardMaterial?H.environment:null,Nt=C===null?x.outputEncoding:C.isXRRenderTarget===!0?C.texture.encoding:ii,Dt=(U.isMeshStandardMaterial?le:ne).get(U.envMap||Lt),qt=U.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ot=!!U.normalMap&&!!K.attributes.tangent,Gt=!!K.morphAttributes.position,Jt=!!K.morphAttributes.normal,ln=!!K.morphAttributes.color,yn=U.toneMapped?x.toneMapping:wn,cn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,he=cn!==void 0?cn.length:0,Bt=It.get(U),Mn=v.state.lights;if(J===!0&&(G===!0||P!==E)){const ye=P===E&&U.id===T;S.setState(U,P,ye)}let re=!1;U.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Mn.state.version||Bt.outputEncoding!==Nt||Z.isInstancedMesh&&Bt.instancing===!1||!Z.isInstancedMesh&&Bt.instancing===!0||Z.isSkinnedMesh&&Bt.skinning===!1||!Z.isSkinnedMesh&&Bt.skinning===!0||Bt.envMap!==Dt||U.fog===!0&&Bt.fog!==Ct||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==S.numPlanes||Bt.numIntersection!==S.numIntersection)||Bt.vertexAlphas!==qt||Bt.vertexTangents!==Ot||Bt.morphTargets!==Gt||Bt.morphNormals!==Jt||Bt.morphColors!==ln||Bt.toneMapping!==yn||Et.isWebGL2===!0&&Bt.morphTargetsCount!==he)&&(re=!0):(re=!0,Bt.__version=U.version);let Ae=Bt.currentProgram;re===!0&&(Ae=we(U,H,Z));let Xe=!1,Sn=!1,li=!1;const ve=Ae.getUniforms(),Ve=Bt.uniforms;if(pt.useProgram(Ae.program)&&(Xe=!0,Sn=!0,li=!0),U.id!==T&&(T=U.id,Sn=!0),Xe||E!==P){if(ve.setValue(tt,"projectionMatrix",P.projectionMatrix),Et.logarithmicDepthBuffer&&ve.setValue(tt,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),E!==P&&(E=P,Sn=!0,li=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const ye=ve.map.cameraPosition;ye!==void 0&&ye.setValue(tt,Q.setFromMatrixPosition(P.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ve.setValue(tt,"isOrthographic",P.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||Z.isSkinnedMesh)&&ve.setValue(tt,"viewMatrix",P.matrixWorldInverse)}if(Z.isSkinnedMesh){ve.setOptional(tt,Z,"bindMatrix"),ve.setOptional(tt,Z,"bindMatrixInverse");const ye=Z.skeleton;ye&&(Et.floatVertexTextures?(ye.boneTexture===null&&ye.computeBoneTexture(),ve.setValue(tt,"boneTexture",ye.boneTexture,St),ve.setValue(tt,"boneTextureSize",ye.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ji=K.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0&&Et.isWebGL2===!0)&&ct.update(Z,K,U,Ae),(Sn||Bt.receiveShadow!==Z.receiveShadow)&&(Bt.receiveShadow=Z.receiveShadow,ve.setValue(tt,"receiveShadow",Z.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Ve.envMap.value=Dt,Ve.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),Sn&&(ve.setValue(tt,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&ls(Ve,li),Ct&&U.fog===!0&&Pe.refreshFogUniforms(Ve,Ct),Pe.refreshMaterialUniforms(Ve,U,it,W,q),ns.upload(tt,Bt.uniformsList,Ve,St)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ns.upload(tt,Bt.uniformsList,Ve,St),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ve.setValue(tt,"center",Z.center),ve.setValue(tt,"modelViewMatrix",Z.modelViewMatrix),ve.setValue(tt,"normalMatrix",Z.normalMatrix),ve.setValue(tt,"modelMatrix",Z.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const ye=U.uniformsGroups;for(let ci=0,us=ye.length;ci<us;ci++)if(Et.isWebGL2){const yr=ye[ci];mt.update(yr,Ae),mt.bind(yr,Ae)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ae}function ls(P,H){P.ambientLightColor.needsUpdate=H,P.lightProbe.needsUpdate=H,P.directionalLights.needsUpdate=H,P.directionalLightShadows.needsUpdate=H,P.pointLights.needsUpdate=H,P.pointLightShadows.needsUpdate=H,P.spotLights.needsUpdate=H,P.spotLightShadows.needsUpdate=H,P.rectAreaLights.needsUpdate=H,P.hemisphereLights.needsUpdate=H}function cs(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(P,H,K){It.get(P.texture).__webglTexture=H,It.get(P.depthTexture).__webglTexture=K;const U=It.get(P);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=K===void 0,U.__autoAllocateDepthBuffer||Pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,H){const K=It.get(P);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(P,H=0,K=0){C=P,y=H,L=K;let U=!0,Z=null,Ct=!1,Lt=!1;if(P){const Dt=It.get(P);Dt.__useDefaultFramebuffer!==void 0?(pt.bindFramebuffer(36160,null),U=!1):Dt.__webglFramebuffer===void 0?St.setupRenderTarget(P):Dt.__hasExternalTextures&&St.rebindTextures(P,It.get(P.texture).__webglTexture,It.get(P.depthTexture).__webglTexture);const qt=P.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Lt=!0);const Ot=It.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Z=Ot[H],Ct=!0):Et.isWebGL2&&P.samples>0&&St.useMultisampledRTT(P)===!1?Z=It.get(P).__webglMultisampledFramebuffer:Z=Ot,k.copy(P.viewport),z.copy(P.scissor),M=P.scissorTest}else k.copy(B).multiplyScalar(it).floor(),z.copy(et).multiplyScalar(it).floor(),M=nt;if(pt.bindFramebuffer(36160,Z)&&Et.drawBuffers&&U&&pt.drawBuffers(P,Z),pt.viewport(k),pt.scissor(z),pt.setScissorTest(M),Ct){const Dt=It.get(P.texture);tt.framebufferTexture2D(36160,36064,34069+H,Dt.__webglTexture,K)}else if(Lt){const Dt=It.get(P.texture),qt=H||0;tt.framebufferTextureLayer(36160,36064,Dt.__webglTexture,K||0,qt)}T=-1},this.readRenderTargetPixels=function(P,H,K,U,Z,Ct,Lt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=It.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){pt.bindFramebuffer(36160,Nt);try{const Dt=P.texture,qt=Dt.format,Ot=Dt.type;if(qt!==Qe&&R.convert(qt)!==tt.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Gt=Ot===gr&&(Pt.has("EXT_color_buffer_half_float")||Et.isWebGL2&&Pt.has("EXT_color_buffer_float"));if(Ot!==ni&&R.convert(Ot)!==tt.getParameter(35738)&&!(Ot===Jn&&(Et.isWebGL2||Pt.has("OES_texture_float")||Pt.has("WEBGL_color_buffer_float")))&&!Gt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=P.width-U&&K>=0&&K<=P.height-Z&&tt.readPixels(H,K,U,Z,R.convert(qt),R.convert(Ot),Ct)}finally{const Dt=C!==null?It.get(C).__webglFramebuffer:null;pt.bindFramebuffer(36160,Dt)}}},this.copyFramebufferToTexture=function(P,H,K=0){const U=Math.pow(2,-K),Z=Math.floor(H.image.width*U),Ct=Math.floor(H.image.height*U);St.setTexture2D(H,0),tt.copyTexSubImage2D(3553,K,0,0,P.x,P.y,Z,Ct),pt.unbindTexture()},this.copyTextureToTexture=function(P,H,K,U=0){const Z=H.image.width,Ct=H.image.height,Lt=R.convert(K.format),Nt=R.convert(K.type);St.setTexture2D(K,0),tt.pixelStorei(37440,K.flipY),tt.pixelStorei(37441,K.premultiplyAlpha),tt.pixelStorei(3317,K.unpackAlignment),H.isDataTexture?tt.texSubImage2D(3553,U,P.x,P.y,Z,Ct,Lt,Nt,H.image.data):H.isCompressedTexture?tt.compressedTexSubImage2D(3553,U,P.x,P.y,H.mipmaps[0].width,H.mipmaps[0].height,Lt,H.mipmaps[0].data):tt.texSubImage2D(3553,U,P.x,P.y,Lt,Nt,H.image),U===0&&K.generateMipmaps&&tt.generateMipmap(3553),pt.unbindTexture()},this.copyTextureToTexture3D=function(P,H,K,U,Z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ct=P.max.x-P.min.x+1,Lt=P.max.y-P.min.y+1,Nt=P.max.z-P.min.z+1,Dt=R.convert(U.format),qt=R.convert(U.type);let Ot;if(U.isData3DTexture)St.setTexture3D(U,0),Ot=32879;else if(U.isDataArrayTexture)St.setTexture2DArray(U,0),Ot=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}tt.pixelStorei(37440,U.flipY),tt.pixelStorei(37441,U.premultiplyAlpha),tt.pixelStorei(3317,U.unpackAlignment);const Gt=tt.getParameter(3314),Jt=tt.getParameter(32878),ln=tt.getParameter(3316),yn=tt.getParameter(3315),cn=tt.getParameter(32877),he=K.isCompressedTexture?K.mipmaps[0]:K.image;tt.pixelStorei(3314,he.width),tt.pixelStorei(32878,he.height),tt.pixelStorei(3316,P.min.x),tt.pixelStorei(3315,P.min.y),tt.pixelStorei(32877,P.min.z),K.isDataTexture||K.isData3DTexture?tt.texSubImage3D(Ot,Z,H.x,H.y,H.z,Ct,Lt,Nt,Dt,qt,he.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),tt.compressedTexSubImage3D(Ot,Z,H.x,H.y,H.z,Ct,Lt,Nt,Dt,he.data)):tt.texSubImage3D(Ot,Z,H.x,H.y,H.z,Ct,Lt,Nt,Dt,qt,he),tt.pixelStorei(3314,Gt),tt.pixelStorei(32878,Jt),tt.pixelStorei(3316,ln),tt.pixelStorei(3315,yn),tt.pixelStorei(32877,cn),Z===0&&U.generateMipmaps&&tt.generateMipmap(Ot),pt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?St.setTextureCube(P,0):P.isData3DTexture?St.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?St.setTexture2DArray(P,0):St.setTexture2D(P,0),pt.unbindTexture()},this.resetState=function(){y=0,L=0,C=null,pt.reset(),V.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class j_ extends qc{}j_.prototype.isWebGL1Renderer=!0;class rc extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.backgroundBlurriness=this.backgroundBlurriness),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class jc extends Hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const sc=new N,oc=new N,ac=new oe,go=new Nc,Qr=new ss;class X_ extends Ce{constructor(t=new en,e=new jc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,a=e.count;s<a;s++)sc.fromBufferAttribute(e,s-1),oc.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=sc.distanceTo(oc);t.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,a=t.params.Line.threshold,h=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=a,t.ray.intersectsSphere(Qr)===!1)return;ac.copy(s).invert(),go.copy(t.ray).applyMatrix4(ac);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=l*l,p=new N,f=new N,m=new N,v=new N,b=this.isLineSegments?2:1,w=i.index,g=i.attributes.position;if(w!==null){const y=Math.max(0,h.start),L=Math.min(w.count,h.start+h.count);for(let C=y,T=L-1;C<T;C+=b){const E=w.getX(C),k=w.getX(C+1);if(p.fromBufferAttribute(g,E),f.fromBufferAttribute(g,k),go.distanceSqToSegment(p,f,v,m)>d)continue;v.applyMatrix4(this.matrixWorld);const M=t.ray.origin.distanceTo(v);M<t.near||M>t.far||e.push({distance:M,point:m.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}else{const y=Math.max(0,h.start),L=Math.min(g.count,h.start+h.count);for(let C=y,T=L-1;C<T;C+=b){if(p.fromBufferAttribute(g,C),f.fromBufferAttribute(g,C+1),go.distanceSqToSegment(p,f,v,m)>d)continue;v.applyMatrix4(this.matrixWorld);const k=t.ray.origin.distanceTo(v);k<t.near||k>t.far||e.push({distance:k,point:m.clone().applyMatrix4(this.matrixWorld),index:C,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,h=s.length;a<h;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}const lc=new N,cc=new N;class Y_ extends X_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,a=e.count;s<a;s+=2)lc.fromBufferAttribute(e,s),cc.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+lc.distanceTo(cc);t.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class an{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),a=0;e.push(0);for(let h=1;h<=t;h++)i=this.getPoint(h/t),a+=i.distanceTo(s),e.push(a),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let s=0;const a=i.length;let h;e?h=e:h=t*i[a-1];let l=0,d=a-1,p;for(;l<=d;)if(s=Math.floor(l+(d-l)/2),p=i[s]-h,p<0)l=s+1;else if(p>0)d=s-1;else{d=s;break}if(s=d,i[s]===h)return s/(a-1);const f=i[s],v=i[s+1]-f,b=(h-f)/v;return(s+b)/(a-1)}getTangent(t,e){let s=t-1e-4,a=t+1e-4;s<0&&(s=0),a>1&&(a=1);const h=this.getPoint(s),l=this.getPoint(a),d=e||(h.isVector2?new _t:new N);return d.copy(l).sub(h).normalize(),d}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new N,s=[],a=[],h=[],l=new N,d=new oe;for(let b=0;b<=t;b++){const w=b/t;s[b]=this.getTangentAt(w,new N)}a[0]=new N,h[0]=new N;let p=Number.MAX_VALUE;const f=Math.abs(s[0].x),m=Math.abs(s[0].y),v=Math.abs(s[0].z);f<=p&&(p=f,i.set(1,0,0)),m<=p&&(p=m,i.set(0,1,0)),v<=p&&i.set(0,0,1),l.crossVectors(s[0],i).normalize(),a[0].crossVectors(s[0],l),h[0].crossVectors(s[0],a[0]);for(let b=1;b<=t;b++){if(a[b]=a[b-1].clone(),h[b]=h[b-1].clone(),l.crossVectors(s[b-1],s[b]),l.length()>Number.EPSILON){l.normalize();const w=Math.acos(xe(s[b-1].dot(s[b]),-1,1));a[b].applyMatrix4(d.makeRotationAxis(l,w))}h[b].crossVectors(s[b],a[b])}if(e===!0){let b=Math.acos(xe(a[0].dot(a[t]),-1,1));b/=t,s[0].dot(l.crossVectors(a[0],a[t]))>0&&(b=-b);for(let w=1;w<=t;w++)a[w].applyMatrix4(d.makeRotationAxis(s[w],b*w)),h[w].crossVectors(s[w],a[w])}return{tangents:s,normals:a,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Fo extends an{constructor(t=0,e=0,i=1,s=1,a=0,h=Math.PI*2,l=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=a,this.aEndAngle=h,this.aClockwise=l,this.aRotation=d}getPoint(t,e){const i=e||new _t,s=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const h=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=s;for(;a>s;)a-=s;a<Number.EPSILON&&(h?a=0:a=s),this.aClockwise===!0&&!h&&(a===s?a=-s:a=a-s);const l=this.aStartAngle+t*a;let d=this.aX+this.xRadius*Math.cos(l),p=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const f=Math.cos(this.aRotation),m=Math.sin(this.aRotation),v=d-this.aX,b=p-this.aY;d=v*f-b*m+this.aX,p=v*m+b*f+this.aY}return i.set(d,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class $_ extends Fo{constructor(t,e,i,s,a,h){super(t,e,i,i,s,a,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Vo(){let c=0,t=0,e=0,i=0;function s(a,h,l,d){c=a,t=l,e=-3*a+3*h-2*l-d,i=2*a-2*h+l+d}return{initCatmullRom:function(a,h,l,d,p){s(h,l,p*(l-a),p*(d-h))},initNonuniformCatmullRom:function(a,h,l,d,p,f,m){let v=(h-a)/p-(l-a)/(p+f)+(l-h)/f,b=(l-h)/f-(d-h)/(f+m)+(d-l)/m;v*=f,b*=f,s(h,l,v,b)},calc:function(a){const h=a*a,l=h*a;return c+t*a+e*h+i*l}}}const ts=new N,vo=new Vo,_o=new Vo,xo=new Vo;class K_ extends an{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new N){const i=e,s=this.points,a=s.length,h=(a-(this.closed?0:1))*t;let l=Math.floor(h),d=h-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/a)+1)*a:d===0&&l===a-1&&(l=a-2,d=1);let p,f;this.closed||l>0?p=s[(l-1)%a]:(ts.subVectors(s[0],s[1]).add(s[0]),p=ts);const m=s[l%a],v=s[(l+1)%a];if(this.closed||l+2<a?f=s[(l+2)%a]:(ts.subVectors(s[a-1],s[a-2]).add(s[a-1]),f=ts),this.curveType==="centripetal"||this.curveType==="chordal"){const b=this.curveType==="chordal"?.5:.25;let w=Math.pow(p.distanceToSquared(m),b),x=Math.pow(m.distanceToSquared(v),b),g=Math.pow(v.distanceToSquared(f),b);x<1e-4&&(x=1),w<1e-4&&(w=x),g<1e-4&&(g=x),vo.initNonuniformCatmullRom(p.x,m.x,v.x,f.x,w,x,g),_o.initNonuniformCatmullRom(p.y,m.y,v.y,f.y,w,x,g),xo.initNonuniformCatmullRom(p.z,m.z,v.z,f.z,w,x,g)}else this.curveType==="catmullrom"&&(vo.initCatmullRom(p.x,m.x,v.x,f.x,this.tension),_o.initCatmullRom(p.y,m.y,v.y,f.y,this.tension),xo.initCatmullRom(p.z,m.z,v.z,f.z,this.tension));return i.set(vo.calc(d),_o.calc(d),xo.calc(d)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function uc(c,t,e,i,s){const a=(i-t)*.5,h=(s-e)*.5,l=c*c,d=c*l;return(2*e-2*i+a+h)*d+(-3*e+3*i-2*a-h)*l+a*c+e}function Z_(c,t){const e=1-c;return e*e*t}function J_(c,t){return 2*(1-c)*c*t}function Q_(c,t){return c*c*t}function fr(c,t,e,i){return Z_(c,t)+J_(c,e)+Q_(c,i)}function t0(c,t){const e=1-c;return e*e*e*t}function e0(c,t){const e=1-c;return 3*e*e*c*t}function n0(c,t){return 3*(1-c)*c*c*t}function i0(c,t){return c*c*c*t}function mr(c,t,e,i,s){return t0(c,t)+e0(c,e)+n0(c,i)+i0(c,s)}class Xc extends an{constructor(t=new _t,e=new _t,i=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new _t){const i=e,s=this.v0,a=this.v1,h=this.v2,l=this.v3;return i.set(mr(t,s.x,a.x,h.x,l.x),mr(t,s.y,a.y,h.y,l.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class r0 extends an{constructor(t=new N,e=new N,i=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new N){const i=e,s=this.v0,a=this.v1,h=this.v2,l=this.v3;return i.set(mr(t,s.x,a.x,h.x,l.x),mr(t,s.y,a.y,h.y,l.y),mr(t,s.z,a.z,h.z,l.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Uo extends an{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const i=e||new _t;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class s0 extends an{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Yc extends an{constructor(t=new _t,e=new _t,i=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new _t){const i=e,s=this.v0,a=this.v1,h=this.v2;return i.set(fr(t,s.x,a.x,h.x),fr(t,s.y,a.y,h.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class o0 extends an{constructor(t=new N,e=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new N){const i=e,s=this.v0,a=this.v1,h=this.v2;return i.set(fr(t,s.x,a.x,h.x),fr(t,s.y,a.y,h.y),fr(t,s.z,a.z,h.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $c extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const i=e,s=this.points,a=(s.length-1)*t,h=Math.floor(a),l=a-h,d=s[h===0?h:h-1],p=s[h],f=s[h>s.length-2?s.length-1:h+1],m=s[h>s.length-3?s.length-1:h+2];return i.set(uc(l,d.x,p.x,f.x,m.x),uc(l,d.y,p.y,f.y,m.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var a0=Object.freeze({__proto__:null,ArcCurve:$_,CatmullRomCurve3:K_,CubicBezierCurve:Xc,CubicBezierCurve3:r0,EllipseCurve:Fo,LineCurve:Uo,LineCurve3:s0,QuadraticBezierCurve:Yc,QuadraticBezierCurve3:o0,SplineCurve:$c});class l0 extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Uo(e,t))}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let a=0;for(;a<s.length;){if(s[a]>=i){const h=s[a]-i,l=this.curves[a],d=l.getLength(),p=d===0?0:1-h/d;return l.getPointAt(p,e)}a++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,a=this.curves;s<a.length;s++){const h=a[s],l=h.isEllipseCurve?t*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?t*h.points.length:t,d=h.getPoints(l);for(let p=0;p<d.length;p++){const f=d[p];i&&i.equals(f)||(e.push(f),i=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new a0[s.type]().fromJSON(s))}return this}}class c0 extends l0{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new Uo(this.currentPoint.clone(),new _t(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const a=new Yc(this.currentPoint.clone(),new _t(t,e),new _t(i,s));return this.curves.push(a),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,a,h){const l=new Xc(this.currentPoint.clone(),new _t(t,e),new _t(i,s),new _t(a,h));return this.curves.push(l),this.currentPoint.set(a,h),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new $c(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,a,h){const l=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(t+l,e+d,i,s,a,h),this}absarc(t,e,i,s,a,h){return this.absellipse(t,e,i,i,s,a,h),this}ellipse(t,e,i,s,a,h,l,d){const p=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+p,e+f,i,s,a,h,l,d),this}absellipse(t,e,i,s,a,h,l,d){const p=new Fo(t,e,i,s,a,h,l,d);if(this.curves.length>0){const m=p.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(p);const f=p.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class zo extends en{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=xe(s,0,Math.PI*2);const a=[],h=[],l=[],d=[],p=[],f=1/e,m=new N,v=new _t,b=new N,w=new N,x=new N;let g=0,y=0;for(let L=0;L<=t.length-1;L++)switch(L){case 0:g=t[L+1].x-t[L].x,y=t[L+1].y-t[L].y,b.x=y*1,b.y=-g,b.z=y*0,x.copy(b),b.normalize(),d.push(b.x,b.y,b.z);break;case t.length-1:d.push(x.x,x.y,x.z);break;default:g=t[L+1].x-t[L].x,y=t[L+1].y-t[L].y,b.x=y*1,b.y=-g,b.z=y*0,w.copy(b),b.x+=x.x,b.y+=x.y,b.z+=x.z,b.normalize(),d.push(b.x,b.y,b.z),x.copy(w)}for(let L=0;L<=e;L++){const C=i+L*f*s,T=Math.sin(C),E=Math.cos(C);for(let k=0;k<=t.length-1;k++){m.x=t[k].x*T,m.y=t[k].y,m.z=t[k].x*E,h.push(m.x,m.y,m.z),v.x=L/e,v.y=k/(t.length-1),l.push(v.x,v.y);const z=d[3*k+0]*T,M=d[3*k+1],I=d[3*k+0]*E;p.push(z,M,I)}}for(let L=0;L<e;L++)for(let C=0;C<t.length-1;C++){const T=C+L*t.length,E=T,k=T+t.length,z=T+t.length+1,M=T+1;a.push(E,k,M),a.push(z,M,k)}this.setIndex(a),this.setAttribute("position",new be(h,3)),this.setAttribute("uv",new be(l,2)),this.setAttribute("normal",new be(p,3))}static fromJSON(t){return new zo(t.points,t.segments,t.phiStart,t.phiLength)}}class Bo extends zo{constructor(t=1,e=1,i=4,s=8){const a=new c0;a.absarc(0,-e/2,t,Math.PI*1.5,0),a.absarc(0,e/2,t,0,Math.PI*.5),super(a.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s}}static fromJSON(t){return new Bo(t.radius,t.length,t.capSegments,t.radialSegments)}}class Go extends en{constructor(t=1,e=8,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const a=[],h=[],l=[],d=[],p=new N,f=new _t;h.push(0,0,0),l.push(0,0,1),d.push(.5,.5);for(let m=0,v=3;m<=e;m++,v+=3){const b=i+m/e*s;p.x=t*Math.cos(b),p.y=t*Math.sin(b),h.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(h[v]/t+1)/2,f.y=(h[v+1]/t+1)/2,d.push(f.x,f.y)}for(let m=1;m<=e;m++)a.push(m,m+1,0);this.setIndex(a),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(l,3)),this.setAttribute("uv",new be(d,2))}static fromJSON(t){return new Go(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class u0 extends Hi{constructor(t){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Zt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tc,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this.fog=t.fog,this}}const hc={enabled:!1,files:{},add:function(c,t){this.enabled!==!1&&(this.files[c]=t)},get:function(c){if(this.enabled!==!1)return this.files[c]},remove:function(c){delete this.files[c]},clear:function(){this.files={}}};class h0{constructor(t,e,i){const s=this;let a=!1,h=0,l=0,d;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(f){l++,a===!1&&s.onStart!==void 0&&s.onStart(f,h,l),a=!0},this.itemEnd=function(f){h++,s.onProgress!==void 0&&s.onProgress(f,h,l),h===l&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(f){s.onError!==void 0&&s.onError(f)},this.resolveURL=function(f){return d?d(f):f},this.setURLModifier=function(f){return d=f,this},this.addHandler=function(f,m){return p.push(f,m),this},this.removeHandler=function(f){const m=p.indexOf(f);return m!==-1&&p.splice(m,2),this},this.getHandler=function(f){for(let m=0,v=p.length;m<v;m+=2){const b=p[m],w=p[m+1];if(b.global&&(b.lastIndex=0),b.test(f))return w}return null}}}const d0=new h0;class Kc{constructor(t){this.manager=t!==void 0?t:d0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(s,a){i.load(t,s,e,a)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class p0 extends Kc{constructor(t){super(t)}load(t,e,i,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const a=this,h=hc.get(t);if(h!==void 0)return a.manager.itemStart(t),setTimeout(function(){e&&e(h),a.manager.itemEnd(t)},0),h;const l=vr("img");function d(){f(),hc.add(t,this),e&&e(this),a.manager.itemEnd(t)}function p(m){f(),s&&s(m),a.manager.itemError(t),a.manager.itemEnd(t)}function f(){l.removeEventListener("load",d,!1),l.removeEventListener("error",p,!1)}return l.addEventListener("load",d,!1),l.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),a.manager.itemStart(t),l.src=t,l}}class dc extends Kc{constructor(t){super(t)}load(t,e,i,s){const a=new je,h=new p0(this.manager);return h.setCrossOrigin(this.crossOrigin),h.setPath(this.path),h.load(t,function(l){a.image=l,a.needsUpdate=!0,e!==void 0&&e(a)},i,s),a}}class Zc extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class f0 extends Zc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DefaultUp),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const bo=new oe,pc=new N,fc=new N;class m0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new No,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(pc),fc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fc),e.updateMatrixWorld(),bo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const mc=new oe,ur=new N,wo=new N;class g0 extends m0{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new ee(2,1,1,1),new ee(0,1,1,1),new ee(3,1,1,1),new ee(1,1,1,1),new ee(3,0,1,1),new ee(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,a=t.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ur.setFromMatrixPosition(t.matrixWorld),i.position.copy(ur),wo.copy(i.position),wo.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(wo),i.updateMatrixWorld(),s.makeTranslation(-ur.x,-ur.y,-ur.z),mc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc)}}class v0 extends Zc{constructor(t,e,i=0,s=1){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new g0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=gc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function gc(){return(typeof performance>"u"?Date:performance).now()}class vc{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(xe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class x0 extends Y_{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new en;s.setAttribute("position",new be(e,3)),s.setAttribute("color",new be(i,3));const a=new jc({vertexColors:!0,toneMapped:!1});super(s,a),this.type="AxesHelper"}setColors(t,e,i){const s=new Zt,a=this.geometry.attributes.color.array;return s.set(t),s.toArray(a,0),s.toArray(a,3),s.set(e),s.toArray(a,6),s.toArray(a,9),s.set(i),s.toArray(a,12),s.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);const hr=new N;function Ge(c,t,e,i,s,a){const h=2*Math.PI*s/4,l=Math.max(a-2*s,0),d=Math.PI/4;hr.copy(t),hr[i]=0,hr.normalize();const p=.5*h/(h+l),f=1-hr.angleTo(c)/d;return Math.sign(hr[e])===1?f*p:l/(h+l)+p+p*(1-f)}class b0 extends Wi{constructor(t=1,e=1,i=1,s=2,a=.1){if(s=s*2+1,a=Math.min(t/2,e/2,i/2,a),super(1,1,1,s,s,s),s===1)return;const h=this.toNonIndexed();this.index=null,this.attributes.position=h.attributes.position,this.attributes.normal=h.attributes.normal,this.attributes.uv=h.attributes.uv;const l=new N,d=new N,p=new N(t,e,i).divideScalar(2).subScalar(a),f=this.attributes.position.array,m=this.attributes.normal.array,v=this.attributes.uv.array,b=f.length/6,w=new N,x=.5/s;for(let g=0,y=0;g<f.length;g+=3,y+=2)switch(l.fromArray(f,g),d.copy(l),d.x-=Math.sign(d.x)*x,d.y-=Math.sign(d.y)*x,d.z-=Math.sign(d.z)*x,d.normalize(),f[g+0]=p.x*Math.sign(l.x)+d.x*a,f[g+1]=p.y*Math.sign(l.y)+d.y*a,f[g+2]=p.z*Math.sign(l.z)+d.z*a,m[g+0]=d.x,m[g+1]=d.y,m[g+2]=d.z,Math.floor(g/b)){case 0:w.set(1,0,0),v[y+0]=Ge(w,d,"z","y",a,i),v[y+1]=1-Ge(w,d,"y","z",a,e);break;case 1:w.set(-1,0,0),v[y+0]=1-Ge(w,d,"z","y",a,i),v[y+1]=1-Ge(w,d,"y","z",a,e);break;case 2:w.set(0,1,0),v[y+0]=1-Ge(w,d,"x","z",a,t),v[y+1]=Ge(w,d,"z","x",a,i);break;case 3:w.set(0,-1,0),v[y+0]=1-Ge(w,d,"x","z",a,t),v[y+1]=1-Ge(w,d,"z","x",a,i);break;case 4:w.set(0,0,1),v[y+0]=1-Ge(w,d,"x","y",a,t),v[y+1]=1-Ge(w,d,"y","x",a,e);break;case 5:w.set(0,0,-1),v[y+0]=Ge(w,d,"x","y",a,t),v[y+1]=1-Ge(w,d,"y","x",a,e);break}}}const _c={type:"change"},yo={type:"start"},xc={type:"end"};class w0 extends ai{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:_i.ROTATE,MIDDLE:_i.DOLLY,RIGHT:_i.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Te),this._domElementKeyEvents=R},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(_c),i.update(),a=s.NONE},this.update=function(){const R=new N,V=new si().setFromUnitVectors(t.up,new N(0,1,0)),mt=V.clone().invert(),xt=new N,gt=new si,wt=2*Math.PI;return function(){const Vt=i.object.position;R.copy(Vt).sub(i.target),R.applyQuaternion(V),l.setFromVector3(R),i.autoRotate&&a===s.NONE&&I(z()),i.enableDamping?(l.theta+=d.theta*i.dampingFactor,l.phi+=d.phi*i.dampingFactor):(l.theta+=d.theta,l.phi+=d.phi);let zt=i.minAzimuthAngle,$t=i.maxAzimuthAngle;return isFinite(zt)&&isFinite($t)&&(zt<-Math.PI?zt+=wt:zt>Math.PI&&(zt-=wt),$t<-Math.PI?$t+=wt:$t>Math.PI&&($t-=wt),zt<=$t?l.theta=Math.max(zt,Math.min($t,l.theta)):l.theta=l.theta>(zt+$t)/2?Math.max(zt,l.theta):Math.min($t,l.theta)),l.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=p,l.radius=Math.max(i.minDistance,Math.min(i.maxDistance,l.radius)),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),R.setFromSpherical(l),R.applyQuaternion(mt),Vt.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(d.theta*=1-i.dampingFactor,d.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(d.set(0,0,0),f.set(0,0,0)),p=1,m||xt.distanceToSquared(i.object.position)>h||8*(1-gt.dot(i.object.quaternion))>h?(i.dispatchEvent(_c),xt.copy(i.object.position),gt.copy(i.object.quaternion),m=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Y),i.domElement.removeEventListener("pointerdown",ne),i.domElement.removeEventListener("pointercancel",Ee),i.domElement.removeEventListener("wheel",Pe),i.domElement.removeEventListener("pointermove",le),i.domElement.removeEventListener("pointerup",ae),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Te)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=s.NONE;const h=1e-6,l=new vc,d=new vc;let p=1;const f=new N;let m=!1;const v=new _t,b=new _t,w=new _t,x=new _t,g=new _t,y=new _t,L=new _t,C=new _t,T=new _t,E=[],k={};function z(){return 2*Math.PI/60/60*i.autoRotateSpeed}function M(){return Math.pow(.95,i.zoomSpeed)}function I(R){d.theta-=R}function W(R){d.phi-=R}const it=function(){const R=new N;return function(mt,xt){R.setFromMatrixColumn(xt,0),R.multiplyScalar(-mt),f.add(R)}}(),vt=function(){const R=new N;return function(mt,xt){i.screenSpacePanning===!0?R.setFromMatrixColumn(xt,1):(R.setFromMatrixColumn(xt,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(mt),f.add(R)}}(),j=function(){const R=new N;return function(mt,xt){const gt=i.domElement;if(i.object.isPerspectiveCamera){const wt=i.object.position;R.copy(wt).sub(i.target);let bt=R.length();bt*=Math.tan(i.object.fov/2*Math.PI/180),it(2*mt*bt/gt.clientHeight,i.object.matrix),vt(2*xt*bt/gt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(it(mt*(i.object.right-i.object.left)/i.object.zoom/gt.clientWidth,i.object.matrix),vt(xt*(i.object.top-i.object.bottom)/i.object.zoom/gt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function B(R){i.object.isPerspectiveCamera?p/=R:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*R)),i.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function et(R){i.object.isPerspectiveCamera?p*=R:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/R)),i.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function nt(R){v.set(R.clientX,R.clientY)}function X(R){L.set(R.clientX,R.clientY)}function J(R){x.set(R.clientX,R.clientY)}function G(R){b.set(R.clientX,R.clientY),w.subVectors(b,v).multiplyScalar(i.rotateSpeed);const V=i.domElement;I(2*Math.PI*w.x/V.clientHeight),W(2*Math.PI*w.y/V.clientHeight),v.copy(b),i.update()}function q(R){C.set(R.clientX,R.clientY),T.subVectors(C,L),T.y>0?B(M()):T.y<0&&et(M()),L.copy(C),i.update()}function st(R){g.set(R.clientX,R.clientY),y.subVectors(g,x).multiplyScalar(i.panSpeed),j(y.x,y.y),x.copy(g),i.update()}function at(R){R.deltaY<0?et(M()):R.deltaY>0&&B(M()),i.update()}function Q(R){let V=!1;switch(R.code){case i.keys.UP:j(0,i.keyPanSpeed),V=!0;break;case i.keys.BOTTOM:j(0,-i.keyPanSpeed),V=!0;break;case i.keys.LEFT:j(i.keyPanSpeed,0),V=!0;break;case i.keys.RIGHT:j(-i.keyPanSpeed,0),V=!0;break}V&&(R.preventDefault(),i.update())}function ut(){if(E.length===1)v.set(E[0].pageX,E[0].pageY);else{const R=.5*(E[0].pageX+E[1].pageX),V=.5*(E[0].pageY+E[1].pageY);v.set(R,V)}}function At(){if(E.length===1)x.set(E[0].pageX,E[0].pageY);else{const R=.5*(E[0].pageX+E[1].pageX),V=.5*(E[0].pageY+E[1].pageY);x.set(R,V)}}function tt(){const R=E[0].pageX-E[1].pageX,V=E[0].pageY-E[1].pageY,mt=Math.sqrt(R*R+V*V);L.set(0,mt)}function Wt(){i.enableZoom&&tt(),i.enablePan&&At()}function Pt(){i.enableZoom&&tt(),i.enableRotate&&ut()}function Et(R){if(E.length==1)b.set(R.pageX,R.pageY);else{const mt=Tt(R),xt=.5*(R.pageX+mt.x),gt=.5*(R.pageY+mt.y);b.set(xt,gt)}w.subVectors(b,v).multiplyScalar(i.rotateSpeed);const V=i.domElement;I(2*Math.PI*w.x/V.clientHeight),W(2*Math.PI*w.y/V.clientHeight),v.copy(b)}function pt(R){if(E.length===1)g.set(R.pageX,R.pageY);else{const V=Tt(R),mt=.5*(R.pageX+V.x),xt=.5*(R.pageY+V.y);g.set(mt,xt)}y.subVectors(g,x).multiplyScalar(i.panSpeed),j(y.x,y.y),x.copy(g)}function Ht(R){const V=Tt(R),mt=R.pageX-V.x,xt=R.pageY-V.y,gt=Math.sqrt(mt*mt+xt*xt);C.set(0,gt),T.set(0,Math.pow(C.y/L.y,i.zoomSpeed)),B(T.y),L.copy(C)}function It(R){i.enableZoom&&Ht(R),i.enablePan&&pt(R)}function St(R){i.enableZoom&&Ht(R),i.enableRotate&&Et(R)}function ne(R){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",le),i.domElement.addEventListener("pointerup",ae)),lt(R),R.pointerType==="touch"?A(R):Qt(R))}function le(R){i.enabled!==!1&&(R.pointerType==="touch"?S(R):jt(R))}function ae(R){ct(R),E.length===0&&(i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",le),i.domElement.removeEventListener("pointerup",ae)),i.dispatchEvent(xc),a=s.NONE}function Ee(R){ct(R)}function Qt(R){let V;switch(R.button){case 0:V=i.mouseButtons.LEFT;break;case 1:V=i.mouseButtons.MIDDLE;break;case 2:V=i.mouseButtons.RIGHT;break;default:V=-1}switch(V){case _i.DOLLY:if(i.enableZoom===!1)return;X(R),a=s.DOLLY;break;case _i.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;J(R),a=s.PAN}else{if(i.enableRotate===!1)return;nt(R),a=s.ROTATE}break;case _i.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;nt(R),a=s.ROTATE}else{if(i.enablePan===!1)return;J(R),a=s.PAN}break;default:a=s.NONE}a!==s.NONE&&i.dispatchEvent(yo)}function jt(R){switch(a){case s.ROTATE:if(i.enableRotate===!1)return;G(R);break;case s.DOLLY:if(i.enableZoom===!1)return;q(R);break;case s.PAN:if(i.enablePan===!1)return;st(R);break}}function Pe(R){i.enabled===!1||i.enableZoom===!1||a!==s.NONE||(R.preventDefault(),i.dispatchEvent(yo),at(R),i.dispatchEvent(xc))}function Te(R){i.enabled===!1||i.enablePan===!1||Q(R)}function A(R){switch(ft(R),E.length){case 1:switch(i.touches.ONE){case xi.ROTATE:if(i.enableRotate===!1)return;ut(),a=s.TOUCH_ROTATE;break;case xi.PAN:if(i.enablePan===!1)return;At(),a=s.TOUCH_PAN;break;default:a=s.NONE}break;case 2:switch(i.touches.TWO){case xi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Wt(),a=s.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Pt(),a=s.TOUCH_DOLLY_ROTATE;break;default:a=s.NONE}break;default:a=s.NONE}a!==s.NONE&&i.dispatchEvent(yo)}function S(R){switch(ft(R),a){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;Et(R),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;pt(R),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;It(R),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;St(R),i.update();break;default:a=s.NONE}}function Y(R){i.enabled!==!1&&R.preventDefault()}function lt(R){E.push(R)}function ct(R){delete k[R.pointerId];for(let V=0;V<E.length;V++)if(E[V].pointerId==R.pointerId){E.splice(V,1);return}}function ft(R){let V=k[R.pointerId];V===void 0&&(V=new _t,k[R.pointerId]=V),V.set(R.pageX,R.pageY)}function Tt(R){const V=R.pointerId===E[0].pointerId?E[1]:E[0];return k[V.pointerId]}i.domElement.addEventListener("contextmenu",Y),i.domElement.addEventListener("pointerdown",ne),i.domElement.addEventListener("pointercancel",Ee),i.domElement.addEventListener("wheel",Pe,{passive:!1}),this.update()}}class y0{constructor({camera:t,canvas:e}){Me(this,"controls");this.controls=new w0(t,e),this.init()}init(){this.controls.target.set(0,0,0),this.controls.rotateSpeed=.9,this.controls.enableZoom=!1,this.controls.enableDamping=!0,this.controls.dampingFactor=.02,this.update()}update(){this.controls.update()}}class M0{constructor({scene:t,uid:e}){Me(this,"c_mes");this.geometry(t,e)}geometry(t,e){const s=new Io,a=new Bo(.02,.5+Math.random(),5,16);this.c_mes=new tn(a,s),this.c_mes.position.y=-Math.random()*(1/2)+Math.random()*(1/2),this.c_mes.position.x=-Math.sin(e*.3)*Math.PI,this.c_mes.position.z=-Math.cos(e*.3)*Math.PI,t.add(this.c_mes)}}const bc={matcap:"https://images.unsplash.com/photo-1626908013943-df94de54984c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2673&q=80",skin:"https://images.unsplash.com/photo-1560780552-ba54683cb263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",env:"https://images.unsplash.com/photo-1536566482680-fca31930a0bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"};class S0{constructor({name:t,canvas:e,params:i}){Me(this,"name");Me(this,"canvas");Me(this,"renderer");Me(this,"clock");Me(this,"scene");Me(this,"camera");Me(this,"control");Me(this,"axeHelper");Me(this,"h_light");Me(this,"p_light");Me(this,"c_mes");Me(this,"o_mes");Me(this,"params");this.name=t!=null?t:"",this.canvas=e!=null?e:null,this.params=i!=null?i:{scene:{speed:.2},object:{speed:0}},this.main()}main(){this.renderer=new qc({canvas:this.canvas,antialias:!0,alpha:!0}),this.clock=new _0,this.scene=new rc,this.camera=new Fe(35),this.camera.position.set(0,-1.7,5),this.scene.background=new Zt(2571),this.control=new y0({camera:this.camera,canvas:this.canvas}),this.axeHelper=new x0(2),this.axeHelper.position.y=-1.5,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=yc,this.init()}init(){this.lights(),this.capsule(),this.object(),this.render(),this.loop(),this.resize()}lights(){this.h_light=new f0(16777215,11184844,1),this.p_light=new v0(16777215,.2),this.p_light.castShadow=!0,this.p_light.position.set(1,5,1),this.scene&&this.scene.add(this.h_light,this.p_light)}capsule(){var t;for(let e=0;e<20;e++)new M0({scene:(t=this.scene)!=null?t:new rc,uid:e})}object(){var s;const t=new b0(1,1,1,5,.05),e=new Go(5,5),i=new u0({color:16777215,matcap:new dc().load(bc.matcap),map:new dc().load(bc.env)});this.c_mes=new tn(e,i),this.o_mes=new tn(t,i),this.c_mes.rotateX(Math.PI/2),this.c_mes.position.y=-1,(s=this.scene)==null||s.add(this.o_mes)}resize(){var t,e;this.camera&&(this.camera.aspect=window.innerWidth/window.innerHeight),(t=this.camera)==null||t.updateProjectionMatrix(),(e=this.renderer)==null||e.setSize(window.innerWidth,window.innerHeight)}render(){this.o_mes&&this.clock&&(this.scene&&(this.scene.rotation.y=this.clock.getElapsedTime()*this.params.scene.speed),this.o_mes.rotation.y=-this.clock.getElapsedTime()*this.params.object.speed,this.o_mes.rotation.z=this.clock.getElapsedTime()*this.params.object.speed,this.o_mes.rotation.x=this.clock.getElapsedTime()*this.params.object.speed,this.o_mes.position.y=Math.sin(this.clock.getElapsedTime()*this.params.object.speed*.2)),this.camera&&this.scene&&this.renderer&&(this.camera.lookAt(this.scene.position),this.camera.updateMatrixWorld(),this.renderer.render(this.scene,this.camera))}loop(){this.render(),requestAnimationFrame(this.loop.bind(this))}}var C0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Do={exports:{}};/*! Tweakpane 3.1.0 (c) 2016 cocopon, licensed under the MIT license. */(function(c,t){(function(e,i){i(t)})(C0,function(e){class i{constructor(n){const[r,u]=n.split("-"),_=r.split(".");this.major=parseInt(_[0],10),this.minor=parseInt(_[1],10),this.patch=parseInt(_[2],10),this.prerelease=u!=null?u:null}toString(){const n=[this.major,this.minor,this.patch].join(".");return this.prerelease!==null?[n,this.prerelease].join("-"):n}}class s{constructor(n){this.controller_=n}get element(){return this.controller_.view.element}get disabled(){return this.controller_.viewProps.get("disabled")}set disabled(n){this.controller_.viewProps.set("disabled",n)}get hidden(){return this.controller_.viewProps.get("hidden")}set hidden(n){this.controller_.viewProps.set("hidden",n)}dispose(){this.controller_.viewProps.set("disposed",!0)}}class a{constructor(n){this.target=n}}class h extends a{constructor(n,r,u,_){super(n),this.value=r,this.presetKey=u,this.last=_!=null?_:!0}}class l extends a{constructor(n,r,u){super(n),this.value=r,this.presetKey=u}}class d extends a{constructor(n,r){super(n),this.expanded=r}}class p extends a{constructor(n,r){super(n),this.index=r}}function f(o){return o}function m(o){return o==null}function v(o,n){if(o.length!==n.length)return!1;for(let r=0;r<o.length;r++)if(o[r]!==n[r])return!1;return!0}const b={alreadydisposed:()=>"View has been already disposed",invalidparams:o=>`Invalid parameters for '${o.name}'`,nomatchingcontroller:o=>`No matching controller for '${o.key}'`,nomatchingview:o=>`No matching view for '${JSON.stringify(o.params)}'`,notbindable:()=>"Value is not bindable",propertynotfound:o=>`Property '${o.name}' not found`,shouldneverhappen:()=>"This error should never happen"};class w{constructor(n){var r;this.message=(r=b[n.type](n.context))!==null&&r!==void 0?r:"Unexpected error",this.name=this.constructor.name,this.stack=new Error(this.message).stack,this.type=n.type}static alreadyDisposed(){return new w({type:"alreadydisposed"})}static notBindable(){return new w({type:"notbindable"})}static propertyNotFound(n){return new w({type:"propertynotfound",context:{name:n}})}static shouldNeverHappen(){return new w({type:"shouldneverhappen"})}}class x{constructor(n,r,u){this.obj_=n,this.key_=r,this.presetKey_=u!=null?u:r}static isBindable(n){return!(n===null||typeof n!="object")}get key(){return this.key_}get presetKey(){return this.presetKey_}read(){return this.obj_[this.key_]}write(n){this.obj_[this.key_]=n}writeProperty(n,r){const u=this.read();if(!x.isBindable(u))throw w.notBindable();if(!(n in u))throw w.propertyNotFound(n);u[n]=r}}class g extends s{get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get title(){var n;return(n=this.controller_.valueController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.valueController.props.set("title",n)}on(n,r){const u=r.bind(this);return this.controller_.valueController.emitter.on(n,()=>{u(new a(this))}),this}}class y{constructor(){this.observers_={}}on(n,r){let u=this.observers_[n];return u||(u=this.observers_[n]=[]),u.push({handler:r}),this}off(n,r){const u=this.observers_[n];return u&&(this.observers_[n]=u.filter(_=>_.handler!==r)),this}emit(n,r){const u=this.observers_[n];!u||u.forEach(_=>{_.handler(r)})}}const L="tp";function C(o){return(r,u)=>[L,"-",o,"v",r?`_${r}`:"",u?`-${u}`:""].join("")}function T(o,n){return r=>n(o(r))}function E(o){return o.rawValue}function k(o,n){o.emitter.on("change",T(E,n)),n(o.rawValue)}function z(o,n,r){k(o.value(n),r)}function M(o,n,r){r?o.classList.add(n):o.classList.remove(n)}function I(o,n){return r=>{M(o,n,r)}}function W(o,n){k(o,r=>{n.textContent=r!=null?r:""})}const it=C("btn");class vt{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(it()),r.viewProps.bindClassModifiers(this.element);const u=n.createElement("button");u.classList.add(it("b")),r.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u;const _=n.createElement("div");_.classList.add(it("t")),W(r.props.value("title"),_),this.buttonElement.appendChild(_)}}class j{constructor(n,r){this.emitter=new y,this.onClick_=this.onClick_.bind(this),this.props=r.props,this.viewProps=r.viewProps,this.view=new vt(n,{props:this.props,viewProps:this.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class B{constructor(n,r){var u;this.constraint_=r==null?void 0:r.constraint,this.equals_=(u=r==null?void 0:r.equals)!==null&&u!==void 0?u:(_,D)=>_===D,this.emitter=new y,this.rawValue_=n}get constraint(){return this.constraint_}get rawValue(){return this.rawValue_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,r){const u=r!=null?r:{forceEmit:!1,last:!0},_=this.constraint_?this.constraint_.constrain(n):n;!!this.equals_(this.rawValue_,_)&&!u.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.rawValue_=_,this.emitter.emit("change",{options:u,rawValue:_,sender:this}))}}class et{constructor(n){this.emitter=new y,this.value_=n}get rawValue(){return this.value_}set rawValue(n){this.setRawValue(n,{forceEmit:!1,last:!0})}setRawValue(n,r){const u=r!=null?r:{forceEmit:!1,last:!0};this.value_===n&&!u.forceEmit||(this.emitter.emit("beforechange",{sender:this}),this.value_=n,this.emitter.emit("change",{options:u,rawValue:this.value_,sender:this}))}}function nt(o,n){const r=n==null?void 0:n.constraint,u=n==null?void 0:n.equals;return!r&&!u?new et(o):new B(o,n)}class X{constructor(n){this.emitter=new y,this.valMap_=n;for(const r in this.valMap_)this.valMap_[r].emitter.on("change",()=>{this.emitter.emit("change",{key:r,sender:this})})}static createCore(n){return Object.keys(n).reduce((u,_)=>Object.assign(u,{[_]:nt(n[_])}),{})}static fromObject(n){const r=this.createCore(n);return new X(r)}get(n){return this.valMap_[n].rawValue}set(n,r){this.valMap_[n].rawValue=r}value(n){return this.valMap_[n]}}function J(o,n){const u=Object.keys(n).reduce((_,D)=>{if(_===void 0)return;const F=n[D],rt=F(o[D]);return rt.succeeded?Object.assign(Object.assign({},_),{[D]:rt.value}):void 0},{});return u}function G(o,n){return o.reduce((r,u)=>{if(r===void 0)return;const _=n(u);if(!(!_.succeeded||_.value===void 0))return[...r,_.value]},[])}function q(o){return o===null?!1:typeof o=="object"}function st(o){return n=>r=>{if(!n&&r===void 0)return{succeeded:!1,value:void 0};if(n&&r===void 0)return{succeeded:!0,value:void 0};const u=o(r);return u!==void 0?{succeeded:!0,value:u}:{succeeded:!1,value:void 0}}}function at(o){return{custom:n=>st(n)(o),boolean:st(n=>typeof n=="boolean"?n:void 0)(o),number:st(n=>typeof n=="number"?n:void 0)(o),string:st(n=>typeof n=="string"?n:void 0)(o),function:st(n=>typeof n=="function"?n:void 0)(o),constant:n=>st(r=>r===n?n:void 0)(o),raw:st(n=>n)(o),object:n=>st(r=>{if(!!q(r))return J(r,n)})(o),array:n=>st(r=>{if(!!Array.isArray(r))return G(r,n)})(o)}}const Q={optional:at(!0),required:at(!1)};function ut(o,n){const r=Q.required.object(n)(o);return r.succeeded?r.value:void 0}function At(o){return o&&o.parentElement&&o.parentElement.removeChild(o),null}function tt(){return["veryfirst","first","last","verylast"]}const Wt=C(""),Pt={veryfirst:"vfst",first:"fst",last:"lst",verylast:"vlst"};class Et{constructor(n){this.parent_=null,this.blade=n.blade,this.view=n.view,this.viewProps=n.viewProps;const r=this.view.element;this.blade.value("positions").emitter.on("change",()=>{tt().forEach(u=>{r.classList.remove(Wt(void 0,Pt[u]))}),this.blade.get("positions").forEach(u=>{r.classList.add(Wt(void 0,Pt[u]))})}),this.viewProps.handleDispose(()=>{At(r)})}get parent(){return this.parent_}}const pt="http://www.w3.org/2000/svg";function Ht(o){o.offsetHeight}function It(o,n){const r=o.style.transition;o.style.transition="none",n(),o.style.transition=r}function St(o){return o.ontouchstart!==void 0}function ne(){return new Function("return this")()}function le(){return ne().document}function ae(o){const n=o.ownerDocument.defaultView;return n&&"document"in n?o.getContext("2d"):null}const Ee={check:'<path d="M2 8l4 4l8 -8"/>',dropdown:'<path d="M5 7h6l-3 3 z"/>',p2dpad:'<path d="M8 4v8"/><path d="M4 8h8"/><circle cx="12" cy="12" r="1.2"/>'};function Qt(o,n){const r=o.createElementNS(pt,"svg");return r.innerHTML=Ee[n],r}function jt(o,n,r){o.insertBefore(n,o.children[r])}function Pe(o){o.parentElement&&o.parentElement.removeChild(o)}function Te(o){for(;o.children.length>0;)o.removeChild(o.children[0])}function A(o){for(;o.childNodes.length>0;)o.removeChild(o.childNodes[0])}function S(o){return o.relatedTarget?o.relatedTarget:"explicitOriginalTarget"in o?o.explicitOriginalTarget:null}const Y=C("lbl");function lt(o,n){const r=o.createDocumentFragment();return n.split(`
`).map(_=>o.createTextNode(_)).forEach((_,D)=>{D>0&&r.appendChild(o.createElement("br")),r.appendChild(_)}),r}class ct{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Y()),r.viewProps.bindClassModifiers(this.element);const u=n.createElement("div");u.classList.add(Y("l")),z(r.props,"label",D=>{m(D)?this.element.classList.add(Y(void 0,"nol")):(this.element.classList.remove(Y(void 0,"nol")),A(u),u.appendChild(lt(n,D)))}),this.element.appendChild(u),this.labelElement=u;const _=n.createElement("div");_.classList.add(Y("v")),this.element.appendChild(_),this.valueElement=_}}class ft extends Et{constructor(n,r){const u=r.valueController.viewProps;super(Object.assign(Object.assign({},r),{view:new ct(n,{props:r.props,viewProps:u}),viewProps:u})),this.props=r.props,this.valueController=r.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}const Tt={id:"button",type:"blade",accept(o){const n=Q,r=ut(o,{title:n.required.string,view:n.required.constant("button"),label:n.optional.string});return r?{params:r}:null},controller(o){return new ft(o.document,{blade:o.blade,props:X.fromObject({label:o.params.label}),valueController:new j(o.document,{props:X.fromObject({title:o.params.title}),viewProps:o.viewProps})})},api(o){return!(o.controller instanceof ft)||!(o.controller.valueController instanceof j)?null:new g(o.controller)}};class R extends Et{constructor(n){super(n),this.value=n.value}}function V(){return new X({positions:nt([],{equals:v})})}class mt extends X{constructor(n){super(n)}static create(n){const r={completed:!0,expanded:n,expandedHeight:null,shouldFixHeight:!1,temporaryExpanded:null},u=X.createCore(r);return new mt(u)}get styleExpanded(){var n;return(n=this.get("temporaryExpanded"))!==null&&n!==void 0?n:this.get("expanded")}get styleHeight(){if(!this.styleExpanded)return"0";const n=this.get("expandedHeight");return this.get("shouldFixHeight")&&!m(n)?`${n}px`:"auto"}bindExpandedClass(n,r){const u=()=>{this.styleExpanded?n.classList.add(r):n.classList.remove(r)};z(this,"expanded",u),z(this,"temporaryExpanded",u)}cleanUpTransition(){this.set("shouldFixHeight",!1),this.set("expandedHeight",null),this.set("completed",!0)}}function xt(o,n){let r=0;return It(n,()=>{o.set("expandedHeight",null),o.set("temporaryExpanded",!0),Ht(n),r=n.clientHeight,o.set("temporaryExpanded",null),Ht(n)}),r}function gt(o,n){n.style.height=o.styleHeight}function wt(o,n){o.value("expanded").emitter.on("beforechange",()=>{o.set("completed",!1),m(o.get("expandedHeight"))&&o.set("expandedHeight",xt(o,n)),o.set("shouldFixHeight",!0),Ht(n)}),o.emitter.on("change",()=>{gt(o,n)}),gt(o,n),n.addEventListener("transitionend",r=>{r.propertyName==="height"&&o.cleanUpTransition()})}class bt extends s{constructor(n,r){super(n),this.rackApi_=r}}function Vt(o,n){return o.addBlade(Object.assign(Object.assign({},n),{view:"button"}))}function zt(o,n){return o.addBlade(Object.assign(Object.assign({},n),{view:"folder"}))}function $t(o,n){const r=n!=null?n:{};return o.addBlade(Object.assign(Object.assign({},r),{view:"separator"}))}function O(o,n){return o.addBlade(Object.assign(Object.assign({},n),{view:"tab"}))}class ${constructor(n){this.emitter=new y,this.items_=[],this.cache_=new Set,this.onSubListAdd_=this.onSubListAdd_.bind(this),this.onSubListRemove_=this.onSubListRemove_.bind(this),this.extract_=n}get items(){return this.items_}allItems(){return Array.from(this.cache_)}find(n){for(const r of this.allItems())if(n(r))return r;return null}includes(n){return this.cache_.has(n)}add(n,r){if(this.includes(n))throw w.shouldNeverHappen();const u=r!==void 0?r:this.items_.length;this.items_.splice(u,0,n),this.cache_.add(n);const _=this.extract_(n);_&&(_.emitter.on("add",this.onSubListAdd_),_.emitter.on("remove",this.onSubListRemove_),_.allItems().forEach(D=>{this.cache_.add(D)})),this.emitter.emit("add",{index:u,item:n,root:this,target:this})}remove(n){const r=this.items_.indexOf(n);if(r<0)return;this.items_.splice(r,1),this.cache_.delete(n);const u=this.extract_(n);u&&(u.emitter.off("add",this.onSubListAdd_),u.emitter.off("remove",this.onSubListRemove_)),this.emitter.emit("remove",{index:r,item:n,root:this,target:this})}onSubListAdd_(n){this.cache_.add(n.item),this.emitter.emit("add",{index:n.index,item:n.item,root:this,target:n.target})}onSubListRemove_(n){this.cache_.delete(n.item),this.emitter.emit("remove",{index:n.index,item:n.item,root:this,target:n.target})}}class ot extends s{constructor(n){super(n),this.onBindingChange_=this.onBindingChange_.bind(this),this.emitter_=new y,this.controller_.binding.emitter.on("change",this.onBindingChange_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,r){const u=r.bind(this);return this.emitter_.on(n,_=>{u(_.event)}),this}refresh(){this.controller_.binding.read()}onBindingChange_(n){const r=n.sender.target.read();this.emitter_.emit("change",{event:new h(this,r,this.controller_.binding.target.presetKey,n.options.last)})}}class ht extends ft{constructor(n,r){super(n,r),this.binding=r.binding}}class yt extends s{constructor(n){super(n),this.onBindingUpdate_=this.onBindingUpdate_.bind(this),this.emitter_=new y,this.controller_.binding.emitter.on("update",this.onBindingUpdate_)}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}on(n,r){const u=r.bind(this);return this.emitter_.on(n,_=>{u(_.event)}),this}refresh(){this.controller_.binding.read()}onBindingUpdate_(n){const r=n.sender.target.read();this.emitter_.emit("update",{event:new l(this,r,this.controller_.binding.target.presetKey)})}}class kt extends ft{constructor(n,r){super(n,r),this.binding=r.binding,this.viewProps.bindDisabled(this.binding.ticker),this.viewProps.handleDispose(()=>{this.binding.dispose()})}}function ce(o){return o instanceof Kt?o.apiSet_:o instanceof bt?o.rackApi_.apiSet_:null}function ie(o,n){const r=o.find(u=>u.controller_===n);if(!r)throw w.shouldNeverHappen();return r}function nn(o,n,r){if(!x.isBindable(o))throw w.notBindable();return new x(o,n,r)}class Kt extends s{constructor(n,r){super(n),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this),this.onRackInputChange_=this.onRackInputChange_.bind(this),this.onRackMonitorUpdate_=this.onRackMonitorUpdate_.bind(this),this.emitter_=new y,this.apiSet_=new $(ce),this.pool_=r;const u=this.controller_.rack;u.emitter.on("add",this.onRackAdd_),u.emitter.on("remove",this.onRackRemove_),u.emitter.on("inputchange",this.onRackInputChange_),u.emitter.on("monitorupdate",this.onRackMonitorUpdate_),u.children.forEach(_=>{this.setUpApi_(_)})}get children(){return this.controller_.rack.children.map(n=>ie(this.apiSet_,n))}addInput(n,r,u){const _=u!=null?u:{},D=this.controller_.view.element.ownerDocument,F=this.pool_.createInput(D,nn(n,r,_.presetKey),_),rt=new ot(F);return this.add(rt,_.index)}addMonitor(n,r,u){const _=u!=null?u:{},D=this.controller_.view.element.ownerDocument,F=this.pool_.createMonitor(D,nn(n,r),_),rt=new yt(F);return this.add(rt,_.index)}addFolder(n){return zt(this,n)}addButton(n){return Vt(this,n)}addSeparator(n){return $t(this,n)}addTab(n){return O(this,n)}add(n,r){this.controller_.rack.add(n.controller_,r);const u=this.apiSet_.find(_=>_.controller_===n.controller_);return u&&this.apiSet_.remove(u),this.apiSet_.add(n),n}remove(n){this.controller_.rack.remove(n.controller_)}addBlade(n){const r=this.controller_.view.element.ownerDocument,u=this.pool_.createBlade(r,n),_=this.pool_.createBladeApi(u);return this.add(_,n.index)}on(n,r){const u=r.bind(this);return this.emitter_.on(n,_=>{u(_.event)}),this}setUpApi_(n){this.apiSet_.find(u=>u.controller_===n)||this.apiSet_.add(this.pool_.createBladeApi(n))}onRackAdd_(n){this.setUpApi_(n.bladeController)}onRackRemove_(n){if(n.isRoot){const r=ie(this.apiSet_,n.bladeController);this.apiSet_.remove(r)}}onRackInputChange_(n){const r=n.bladeController;if(r instanceof ht){const u=ie(this.apiSet_,r),_=r.binding;this.emitter_.emit("change",{event:new h(u,_.target.read(),_.target.presetKey,n.options.last)})}else if(r instanceof R){const u=ie(this.apiSet_,r);this.emitter_.emit("change",{event:new h(u,r.value.rawValue,void 0,n.options.last)})}}onRackMonitorUpdate_(n){if(!(n.bladeController instanceof kt))throw w.shouldNeverHappen();const r=ie(this.apiSet_,n.bladeController),u=n.bladeController.binding;this.emitter_.emit("update",{event:new l(r,u.target.read(),u.target.presetKey)})}}class Ie extends bt{constructor(n,r){super(n,new Kt(n.rackController,r)),this.emitter_=new y,this.controller_.foldable.value("expanded").emitter.on("change",u=>{this.emitter_.emit("fold",{event:new d(this,u.sender.rawValue)})}),this.rackApi_.on("change",u=>{this.emitter_.emit("change",{event:u})}),this.rackApi_.on("update",u=>{this.emitter_.emit("update",{event:u})})}get expanded(){return this.controller_.foldable.get("expanded")}set expanded(n){this.controller_.foldable.set("expanded",n)}get title(){return this.controller_.props.get("title")}set title(n){this.controller_.props.set("title",n)}get children(){return this.rackApi_.children}addInput(n,r,u){return this.rackApi_.addInput(n,r,u)}addMonitor(n,r,u){return this.rackApi_.addMonitor(n,r,u)}addFolder(n){return this.rackApi_.addFolder(n)}addButton(n){return this.rackApi_.addButton(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,r){return this.rackApi_.add(n,r)}remove(n){this.rackApi_.remove(n)}addBlade(n){return this.rackApi_.addBlade(n)}on(n,r){const u=r.bind(this);return this.emitter_.on(n,_=>{u(_.event)}),this}}class we extends Et{constructor(n){super({blade:n.blade,view:n.view,viewProps:n.rackController.viewProps}),this.rackController=n.rackController}}class wr{constructor(n,r){const u=C(r.viewName);this.element=n.createElement("div"),this.element.classList.add(u()),r.viewProps.bindClassModifiers(this.element)}}function as(o,n){for(let r=0;r<o.length;r++){const u=o[r];if(u instanceof ht&&u.binding===n)return u}return null}function ls(o,n){for(let r=0;r<o.length;r++){const u=o[r];if(u instanceof kt&&u.binding===n)return u}return null}function cs(o,n){for(let r=0;r<o.length;r++){const u=o[r];if(u instanceof R&&u.value===n)return u}return null}function P(o){return o instanceof U?o.rack:o instanceof we?o.rackController.rack:null}function H(o){const n=P(o);return n?n.bcSet_:null}class K{constructor(n){var r;this.onBladePositionsChange_=this.onBladePositionsChange_.bind(this),this.onSetAdd_=this.onSetAdd_.bind(this),this.onSetRemove_=this.onSetRemove_.bind(this),this.onChildDispose_=this.onChildDispose_.bind(this),this.onChildPositionsChange_=this.onChildPositionsChange_.bind(this),this.onChildInputChange_=this.onChildInputChange_.bind(this),this.onChildMonitorUpdate_=this.onChildMonitorUpdate_.bind(this),this.onChildValueChange_=this.onChildValueChange_.bind(this),this.onChildViewPropsChange_=this.onChildViewPropsChange_.bind(this),this.onDescendantLayout_=this.onDescendantLayout_.bind(this),this.onDescendantInputChange_=this.onDescendantInputChange_.bind(this),this.onDescendantMonitorUpdate_=this.onDescendantMonitorUpdate_.bind(this),this.emitter=new y,this.blade_=n!=null?n:null,(r=this.blade_)===null||r===void 0||r.value("positions").emitter.on("change",this.onBladePositionsChange_),this.bcSet_=new $(H),this.bcSet_.emitter.on("add",this.onSetAdd_),this.bcSet_.emitter.on("remove",this.onSetRemove_)}get children(){return this.bcSet_.items}add(n,r){n.parent&&n.parent.remove(n),n.parent_=this,this.bcSet_.add(n,r)}remove(n){n.parent_=null,this.bcSet_.remove(n)}find(n){return this.bcSet_.allItems().filter(r=>r instanceof n)}onSetAdd_(n){this.updatePositions_();const r=n.target===n.root;if(this.emitter.emit("add",{bladeController:n.item,index:n.index,isRoot:r,sender:this}),!r)return;const u=n.item;if(u.viewProps.emitter.on("change",this.onChildViewPropsChange_),u.blade.value("positions").emitter.on("change",this.onChildPositionsChange_),u.viewProps.handleDispose(this.onChildDispose_),u instanceof ht)u.binding.emitter.on("change",this.onChildInputChange_);else if(u instanceof kt)u.binding.emitter.on("update",this.onChildMonitorUpdate_);else if(u instanceof R)u.value.emitter.on("change",this.onChildValueChange_);else{const _=P(u);if(_){const D=_.emitter;D.on("layout",this.onDescendantLayout_),D.on("inputchange",this.onDescendantInputChange_),D.on("monitorupdate",this.onDescendantMonitorUpdate_)}}}onSetRemove_(n){this.updatePositions_();const r=n.target===n.root;if(this.emitter.emit("remove",{bladeController:n.item,isRoot:r,sender:this}),!r)return;const u=n.item;if(u instanceof ht)u.binding.emitter.off("change",this.onChildInputChange_);else if(u instanceof kt)u.binding.emitter.off("update",this.onChildMonitorUpdate_);else if(u instanceof R)u.value.emitter.off("change",this.onChildValueChange_);else{const _=P(u);if(_){const D=_.emitter;D.off("layout",this.onDescendantLayout_),D.off("inputchange",this.onDescendantInputChange_),D.off("monitorupdate",this.onDescendantMonitorUpdate_)}}}updatePositions_(){const n=this.bcSet_.items.filter(_=>!_.viewProps.get("hidden")),r=n[0],u=n[n.length-1];this.bcSet_.items.forEach(_=>{const D=[];_===r&&(D.push("first"),(!this.blade_||this.blade_.get("positions").includes("veryfirst"))&&D.push("veryfirst")),_===u&&(D.push("last"),(!this.blade_||this.blade_.get("positions").includes("verylast"))&&D.push("verylast")),_.blade.set("positions",D)})}onChildPositionsChange_(){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildViewPropsChange_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onChildDispose_(){this.bcSet_.items.filter(r=>r.viewProps.get("disposed")).forEach(r=>{this.bcSet_.remove(r)})}onChildInputChange_(n){const r=as(this.find(ht),n.sender);if(!r)throw w.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:r,options:n.options,sender:this})}onChildMonitorUpdate_(n){const r=ls(this.find(kt),n.sender);if(!r)throw w.shouldNeverHappen();this.emitter.emit("monitorupdate",{bladeController:r,sender:this})}onChildValueChange_(n){const r=cs(this.find(R),n.sender);if(!r)throw w.shouldNeverHappen();this.emitter.emit("inputchange",{bladeController:r,options:n.options,sender:this})}onDescendantLayout_(n){this.updatePositions_(),this.emitter.emit("layout",{sender:this})}onDescendantInputChange_(n){this.emitter.emit("inputchange",{bladeController:n.bladeController,options:n.options,sender:this})}onDescendantMonitorUpdate_(n){this.emitter.emit("monitorupdate",{bladeController:n.bladeController,sender:this})}onBladePositionsChange_(){this.updatePositions_()}}class U extends Et{constructor(n,r){super(Object.assign(Object.assign({},r),{view:new wr(n,{viewName:"brk",viewProps:r.viewProps})})),this.onRackAdd_=this.onRackAdd_.bind(this),this.onRackRemove_=this.onRackRemove_.bind(this);const u=new K(r.root?void 0:r.blade);u.emitter.on("add",this.onRackAdd_),u.emitter.on("remove",this.onRackRemove_),this.rack=u,this.viewProps.handleDispose(()=>{for(let _=this.rack.children.length-1;_>=0;_--)this.rack.children[_].viewProps.set("disposed",!0)})}onRackAdd_(n){!n.isRoot||jt(this.view.element,n.bladeController.view.element,n.index)}onRackRemove_(n){!n.isRoot||Pe(n.bladeController.view.element)}}const Z=C("cnt");class Ct{constructor(n,r){var u;this.className_=C((u=r.viewName)!==null&&u!==void 0?u:"fld"),this.element=n.createElement("div"),this.element.classList.add(this.className_(),Z()),r.viewProps.bindClassModifiers(this.element),this.foldable_=r.foldable,this.foldable_.bindExpandedClass(this.element,this.className_(void 0,"expanded")),z(this.foldable_,"completed",I(this.element,this.className_(void 0,"cpl")));const _=n.createElement("button");_.classList.add(this.className_("b")),z(r.props,"title",Mt=>{m(Mt)?this.element.classList.add(this.className_(void 0,"not")):this.element.classList.remove(this.className_(void 0,"not"))}),r.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_;const D=n.createElement("div");D.classList.add(this.className_("t")),W(r.props.value("title"),D),this.buttonElement.appendChild(D),this.titleElement=D;const F=n.createElement("div");F.classList.add(this.className_("m")),this.buttonElement.appendChild(F);const rt=r.containerElement;rt.classList.add(this.className_("c")),this.element.appendChild(rt),this.containerElement=rt}}class Lt extends we{constructor(n,r){var u;const _=mt.create((u=r.expanded)!==null&&u!==void 0?u:!0),D=new U(n,{blade:r.blade,root:r.root,viewProps:r.viewProps});super(Object.assign(Object.assign({},r),{rackController:D,view:new Ct(n,{containerElement:D.view.element,foldable:_,props:r.props,viewName:r.root?"rot":void 0,viewProps:r.viewProps})})),this.onTitleClick_=this.onTitleClick_.bind(this),this.props=r.props,this.foldable=_,wt(this.foldable,this.view.containerElement),this.rackController.rack.emitter.on("add",()=>{this.foldable.cleanUpTransition()}),this.rackController.rack.emitter.on("remove",()=>{this.foldable.cleanUpTransition()}),this.view.buttonElement.addEventListener("click",this.onTitleClick_)}get document(){return this.view.element.ownerDocument}onTitleClick_(){this.foldable.set("expanded",!this.foldable.get("expanded"))}}const Nt={id:"folder",type:"blade",accept(o){const n=Q,r=ut(o,{title:n.required.string,view:n.required.constant("folder"),expanded:n.optional.boolean});return r?{params:r}:null},controller(o){return new Lt(o.document,{blade:o.blade,expanded:o.params.expanded,props:X.fromObject({title:o.params.title}),viewProps:o.viewProps})},api(o){return o.controller instanceof Lt?new Ie(o.controller,o.pool):null}};class Dt extends R{constructor(n,r){const u=r.valueController.viewProps;super(Object.assign(Object.assign({},r),{value:r.valueController.value,view:new ct(n,{props:r.props,viewProps:u}),viewProps:u})),this.props=r.props,this.valueController=r.valueController,this.view.valueElement.appendChild(this.valueController.view.element)}}class qt extends s{}const Ot=C("spr");class Gt{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Ot()),r.viewProps.bindClassModifiers(this.element);const u=n.createElement("hr");u.classList.add(Ot("r")),this.element.appendChild(u)}}class Jt extends Et{constructor(n,r){super(Object.assign(Object.assign({},r),{view:new Gt(n,{viewProps:r.viewProps})}))}}const ln={id:"separator",type:"blade",accept(o){const r=ut(o,{view:Q.required.constant("separator")});return r?{params:r}:null},controller(o){return new Jt(o.document,{blade:o.blade,viewProps:o.viewProps})},api(o){return o.controller instanceof Jt?new qt(o.controller):null}},yn=C("");function cn(o,n){return I(o,yn(void 0,n))}class he extends X{constructor(n){super(n)}static create(n){var r,u;const _=n!=null?n:{},D={disabled:(r=_.disabled)!==null&&r!==void 0?r:!1,disposed:!1,hidden:(u=_.hidden)!==null&&u!==void 0?u:!1},F=X.createCore(D);return new he(F)}bindClassModifiers(n){z(this,"disabled",cn(n,"disabled")),z(this,"hidden",cn(n,"hidden"))}bindDisabled(n){z(this,"disabled",r=>{n.disabled=r})}bindTabIndex(n){z(this,"disabled",r=>{n.tabIndex=r?-1:0})}handleDispose(n){this.value("disposed").emitter.on("change",r=>{r&&n()})}}const Bt=C("tbi");class Mn{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Bt()),r.viewProps.bindClassModifiers(this.element),z(r.props,"selected",D=>{D?this.element.classList.add(Bt(void 0,"sel")):this.element.classList.remove(Bt(void 0,"sel"))});const u=n.createElement("button");u.classList.add(Bt("b")),r.viewProps.bindDisabled(u),this.element.appendChild(u),this.buttonElement=u;const _=n.createElement("div");_.classList.add(Bt("t")),W(r.props.value("title"),_),this.buttonElement.appendChild(_),this.titleElement=_}}class re{constructor(n,r){this.emitter=new y,this.onClick_=this.onClick_.bind(this),this.props=r.props,this.viewProps=r.viewProps,this.view=new Mn(n,{props:r.props,viewProps:r.viewProps}),this.view.buttonElement.addEventListener("click",this.onClick_)}onClick_(){this.emitter.emit("click",{sender:this})}}class Ae{constructor(n,r){this.onItemClick_=this.onItemClick_.bind(this),this.ic_=new re(n,{props:r.itemProps,viewProps:he.create()}),this.ic_.emitter.on("click",this.onItemClick_),this.cc_=new U(n,{blade:V(),viewProps:he.create()}),this.props=r.props,z(this.props,"selected",u=>{this.itemController.props.set("selected",u),this.contentController.viewProps.set("hidden",!u)})}get itemController(){return this.ic_}get contentController(){return this.cc_}onItemClick_(){this.props.set("selected",!0)}}class Xe{constructor(n,r){this.controller_=n,this.rackApi_=r}get title(){var n;return(n=this.controller_.itemController.props.get("title"))!==null&&n!==void 0?n:""}set title(n){this.controller_.itemController.props.set("title",n)}get selected(){return this.controller_.props.get("selected")}set selected(n){this.controller_.props.set("selected",n)}get children(){return this.rackApi_.children}addButton(n){return this.rackApi_.addButton(n)}addFolder(n){return this.rackApi_.addFolder(n)}addSeparator(n){return this.rackApi_.addSeparator(n)}addTab(n){return this.rackApi_.addTab(n)}add(n,r){this.rackApi_.add(n,r)}remove(n){this.rackApi_.remove(n)}addInput(n,r,u){return this.rackApi_.addInput(n,r,u)}addMonitor(n,r,u){return this.rackApi_.addMonitor(n,r,u)}addBlade(n){return this.rackApi_.addBlade(n)}}class Sn extends bt{constructor(n,r){super(n,new Kt(n.rackController,r)),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.onSelect_=this.onSelect_.bind(this),this.emitter_=new y,this.pageApiMap_=new Map,this.rackApi_.on("change",u=>{this.emitter_.emit("change",{event:u})}),this.rackApi_.on("update",u=>{this.emitter_.emit("update",{event:u})}),this.controller_.tab.selectedIndex.emitter.on("change",this.onSelect_),this.controller_.pageSet.emitter.on("add",this.onPageAdd_),this.controller_.pageSet.emitter.on("remove",this.onPageRemove_),this.controller_.pageSet.items.forEach(u=>{this.setUpPageApi_(u)})}get pages(){return this.controller_.pageSet.items.map(n=>{const r=this.pageApiMap_.get(n);if(!r)throw w.shouldNeverHappen();return r})}addPage(n){const r=this.controller_.view.element.ownerDocument,u=new Ae(r,{itemProps:X.fromObject({selected:!1,title:n.title}),props:X.fromObject({selected:!1})});this.controller_.add(u,n.index);const _=this.pageApiMap_.get(u);if(!_)throw w.shouldNeverHappen();return _}removePage(n){this.controller_.remove(n)}on(n,r){const u=r.bind(this);return this.emitter_.on(n,_=>{u(_.event)}),this}setUpPageApi_(n){const r=this.rackApi_.apiSet_.find(_=>_.controller_===n.contentController);if(!r)throw w.shouldNeverHappen();const u=new Xe(n,r);this.pageApiMap_.set(n,u)}onPageAdd_(n){this.setUpPageApi_(n.item)}onPageRemove_(n){if(!this.pageApiMap_.get(n.item))throw w.shouldNeverHappen();this.pageApiMap_.delete(n.item)}onSelect_(n){this.emitter_.emit("select",{event:new p(this,n.rawValue)})}}const li=-1;class ve{constructor(){this.onItemSelectedChange_=this.onItemSelectedChange_.bind(this),this.empty=nt(!0),this.selectedIndex=nt(li),this.items_=[]}add(n,r){const u=r!=null?r:this.items_.length;this.items_.splice(u,0,n),n.emitter.on("change",this.onItemSelectedChange_),this.keepSelection_()}remove(n){const r=this.items_.indexOf(n);r<0||(this.items_.splice(r,1),n.emitter.off("change",this.onItemSelectedChange_),this.keepSelection_())}keepSelection_(){if(this.items_.length===0){this.selectedIndex.rawValue=li,this.empty.rawValue=!0;return}const n=this.items_.findIndex(r=>r.rawValue);n<0?(this.items_.forEach((r,u)=>{r.rawValue=u===0}),this.selectedIndex.rawValue=0):(this.items_.forEach((r,u)=>{r.rawValue=u===n}),this.selectedIndex.rawValue=n),this.empty.rawValue=!1}onItemSelectedChange_(n){if(n.rawValue){const r=this.items_.findIndex(u=>u===n.sender);this.items_.forEach((u,_)=>{u.rawValue=_===r}),this.selectedIndex.rawValue=r}else this.keepSelection_()}}const Ve=C("tab");class ji{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Ve(),Z()),r.viewProps.bindClassModifiers(this.element),k(r.empty,I(this.element,Ve(void 0,"nop")));const u=n.createElement("div");u.classList.add(Ve("i")),this.element.appendChild(u),this.itemsElement=u;const _=r.contentsElement;_.classList.add(Ve("c")),this.element.appendChild(_),this.contentsElement=_}}class ye extends we{constructor(n,r){const u=new U(n,{blade:r.blade,viewProps:r.viewProps}),_=new ve;super({blade:r.blade,rackController:u,view:new ji(n,{contentsElement:u.view.element,empty:_.empty,viewProps:r.viewProps})}),this.onPageAdd_=this.onPageAdd_.bind(this),this.onPageRemove_=this.onPageRemove_.bind(this),this.pageSet_=new $(()=>null),this.pageSet_.emitter.on("add",this.onPageAdd_),this.pageSet_.emitter.on("remove",this.onPageRemove_),this.tab=_}get pageSet(){return this.pageSet_}add(n,r){this.pageSet_.add(n,r)}remove(n){this.pageSet_.remove(this.pageSet_.items[n])}onPageAdd_(n){const r=n.item;jt(this.view.itemsElement,r.itemController.view.element,n.index),this.rackController.rack.add(r.contentController,n.index),this.tab.add(r.props.value("selected"))}onPageRemove_(n){const r=n.item;Pe(r.itemController.view.element),this.rackController.rack.remove(r.contentController),this.tab.remove(r.props.value("selected"))}}const ci={id:"tab",type:"blade",accept(o){const n=Q,r=ut(o,{pages:n.required.array(n.required.object({title:n.required.string})),view:n.required.constant("tab")});return!r||r.pages.length===0?null:{params:r}},controller(o){const n=new ye(o.document,{blade:o.blade,viewProps:o.viewProps});return o.params.pages.forEach(r=>{const u=new Ae(o.document,{itemProps:X.fromObject({selected:!1,title:r.title}),props:X.fromObject({selected:!1})});n.add(u)}),n},api(o){return o.controller instanceof ye?new Sn(o.controller,o.pool):null}};function us(o,n){const r=o.accept(n.params);if(!r)return null;const u=Q.optional.boolean(n.params.disabled).value,_=Q.optional.boolean(n.params.hidden).value;return o.controller({blade:V(),document:n.document,params:Object.assign(Object.assign({},r.params),{disabled:u,hidden:_}),viewProps:he.create({disabled:u,hidden:_})})}class yr{constructor(){this.disabled=!1,this.emitter=new y}dispose(){}tick(){this.disabled||this.emitter.emit("tick",{sender:this})}}class Qc{constructor(n,r){this.disabled_=!1,this.timerId_=null,this.onTick_=this.onTick_.bind(this),this.doc_=n,this.emitter=new y,this.interval_=r,this.setTimer_()}get disabled(){return this.disabled_}set disabled(n){this.disabled_=n,this.disabled_?this.clearTimer_():this.setTimer_()}dispose(){this.clearTimer_()}clearTimer_(){if(this.timerId_===null)return;const n=this.doc_.defaultView;n&&n.clearInterval(this.timerId_),this.timerId_=null}setTimer_(){if(this.clearTimer_(),this.interval_<=0)return;const n=this.doc_.defaultView;n&&(this.timerId_=n.setInterval(this.onTick_,this.interval_))}onTick_(){this.disabled_||this.emitter.emit("tick",{sender:this})}}class Xi{constructor(n){this.constraints=n}constrain(n){return this.constraints.reduce((r,u)=>u.constrain(r),n)}}function rn(o,n){if(o instanceof n)return o;if(o instanceof Xi){const r=o.constraints.reduce((u,_)=>u||(_ instanceof n?_:null),null);if(r)return r}return null}class Yi{constructor(n){this.options=n}constrain(n){const r=this.options;return r.length===0||r.filter(_=>_.value===n).length>0?n:r[0].value}}class ui{constructor(n){this.maxValue=n.max,this.minValue=n.min}constrain(n){let r=n;return m(this.minValue)||(r=Math.max(r,this.minValue)),m(this.maxValue)||(r=Math.min(r,this.maxValue)),r}}class Mr{constructor(n,r=0){this.step=n,this.origin=r}constrain(n){const r=this.origin%this.step,u=Math.round((n-r)/this.step);return r+u*this.step}}const hs=C("lst");class tu{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.props_=r.props,this.element=n.createElement("div"),this.element.classList.add(hs()),r.viewProps.bindClassModifiers(this.element);const u=n.createElement("select");u.classList.add(hs("s")),z(this.props_,"options",D=>{Te(u),D.forEach((F,rt)=>{const Mt=n.createElement("option");Mt.dataset.index=String(rt),Mt.textContent=F.text,Mt.value=String(F.value),u.appendChild(Mt)})}),r.viewProps.bindDisabled(u),this.element.appendChild(u),this.selectElement=u;const _=n.createElement("div");_.classList.add(hs("m")),_.appendChild(Qt(n,"dropdown")),this.element.appendChild(_),r.value.emitter.on("change",this.onValueChange_),this.value_=r.value,this.update_()}update_(){this.selectElement.value=String(this.value_.rawValue)}onValueChange_(){this.update_()}}class $i{constructor(n,r){this.onSelectChange_=this.onSelectChange_.bind(this),this.props=r.props,this.value=r.value,this.viewProps=r.viewProps,this.view=new tu(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.view.selectElement.addEventListener("change",this.onSelectChange_)}onSelectChange_(n){const u=n.currentTarget.selectedOptions.item(0);if(!u)return;const _=Number(u.dataset.index);this.value.rawValue=this.props.get("options")[_].value}}const Wo=C("pop");class eu{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Wo()),r.viewProps.bindClassModifiers(this.element),k(r.shows,I(this.element,Wo(void 0,"v")))}}class qo{constructor(n,r){this.shows=nt(!1),this.viewProps=r.viewProps,this.view=new eu(n,{shows:this.shows,viewProps:this.viewProps})}}const jo=C("txt");class nu{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(jo()),r.viewProps.bindClassModifiers(this.element),this.props_=r.props,this.props_.emitter.on("change",this.onChange_);const u=n.createElement("input");u.classList.add(jo("i")),u.type="text",r.viewProps.bindDisabled(u),this.element.appendChild(u),this.inputElement=u,r.value.emitter.on("change",this.onChange_),this.value_=r.value,this.refresh()}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value_.rawValue)}onChange_(){this.refresh()}}class Sr{constructor(n,r){this.onInputChange_=this.onInputChange_.bind(this),this.parser_=r.parser,this.props=r.props,this.value=r.value,this.viewProps=r.viewProps,this.view=new nu(n,{props:r.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const u=n.currentTarget.value,_=this.parser_(u);m(_)||(this.value.rawValue=_),this.view.refresh()}}function iu(o){return String(o)}function Xo(o){return o==="false"?!1:!!o}function Yo(o){return iu(o)}class ru{constructor(n){this.text=n}evaluate(){return Number(this.text)}toString(){return this.text}}const su={"**":(o,n)=>Math.pow(o,n),"*":(o,n)=>o*n,"/":(o,n)=>o/n,"%":(o,n)=>o%n,"+":(o,n)=>o+n,"-":(o,n)=>o-n,"<<":(o,n)=>o<<n,">>":(o,n)=>o>>n,">>>":(o,n)=>o>>>n,"&":(o,n)=>o&n,"^":(o,n)=>o^n,"|":(o,n)=>o|n};class ou{constructor(n,r,u){this.left=r,this.operator=n,this.right=u}evaluate(){const n=su[this.operator];if(!n)throw new Error(`unexpected binary operator: '${this.operator}`);return n(this.left.evaluate(),this.right.evaluate())}toString(){return["b(",this.left.toString(),this.operator,this.right.toString(),")"].join(" ")}}const au={"+":o=>o,"-":o=>-o,"~":o=>~o};class lu{constructor(n,r){this.operator=n,this.expression=r}evaluate(){const n=au[this.operator];if(!n)throw new Error(`unexpected unary operator: '${this.operator}`);return n(this.expression.evaluate())}toString(){return["u(",this.operator,this.expression.toString(),")"].join(" ")}}function ds(o){return(n,r)=>{for(let u=0;u<o.length;u++){const _=o[u](n,r);if(_!=="")return _}return""}}function Ki(o,n){var r;const u=o.substr(n).match(/^\s+/);return(r=u&&u[0])!==null&&r!==void 0?r:""}function cu(o,n){const r=o.substr(n,1);return r.match(/^[1-9]$/)?r:""}function Zi(o,n){var r;const u=o.substr(n).match(/^[0-9]+/);return(r=u&&u[0])!==null&&r!==void 0?r:""}function uu(o,n){const r=Zi(o,n);if(r!=="")return r;const u=o.substr(n,1);if(n+=1,u!=="-"&&u!=="+")return"";const _=Zi(o,n);return _===""?"":u+_}function ps(o,n){const r=o.substr(n,1);if(n+=1,r.toLowerCase()!=="e")return"";const u=uu(o,n);return u===""?"":r+u}function $o(o,n){const r=o.substr(n,1);if(r==="0")return r;const u=cu(o,n);return n+=u.length,u===""?"":u+Zi(o,n)}function hu(o,n){const r=$o(o,n);if(n+=r.length,r==="")return"";const u=o.substr(n,1);if(n+=u.length,u!==".")return"";const _=Zi(o,n);return n+=_.length,r+u+_+ps(o,n)}function du(o,n){const r=o.substr(n,1);if(n+=r.length,r!==".")return"";const u=Zi(o,n);return n+=u.length,u===""?"":r+u+ps(o,n)}function pu(o,n){const r=$o(o,n);return n+=r.length,r===""?"":r+ps(o,n)}const fu=ds([hu,du,pu]);function mu(o,n){var r;const u=o.substr(n).match(/^[01]+/);return(r=u&&u[0])!==null&&r!==void 0?r:""}function gu(o,n){const r=o.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0b")return"";const u=mu(o,n);return u===""?"":r+u}function vu(o,n){var r;const u=o.substr(n).match(/^[0-7]+/);return(r=u&&u[0])!==null&&r!==void 0?r:""}function _u(o,n){const r=o.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0o")return"";const u=vu(o,n);return u===""?"":r+u}function xu(o,n){var r;const u=o.substr(n).match(/^[0-9a-f]+/i);return(r=u&&u[0])!==null&&r!==void 0?r:""}function bu(o,n){const r=o.substr(n,2);if(n+=r.length,r.toLowerCase()!=="0x")return"";const u=xu(o,n);return u===""?"":r+u}const wu=ds([gu,_u,bu]),yu=ds([wu,fu]);function Mu(o,n){const r=yu(o,n);return n+=r.length,r===""?null:{evaluable:new ru(r),cursor:n}}function Su(o,n){const r=o.substr(n,1);if(n+=r.length,r!=="(")return null;const u=Zo(o,n);if(!u)return null;n=u.cursor,n+=Ki(o,n).length;const _=o.substr(n,1);return n+=_.length,_!==")"?null:{evaluable:u.evaluable,cursor:n}}function Cu(o,n){var r;return(r=Mu(o,n))!==null&&r!==void 0?r:Su(o,n)}function Ko(o,n){const r=Cu(o,n);if(r)return r;const u=o.substr(n,1);if(n+=u.length,u!=="+"&&u!=="-"&&u!=="~")return null;const _=Ko(o,n);return _?(n=_.cursor,{cursor:n,evaluable:new lu(u,_.evaluable)}):null}function Eu(o,n,r){r+=Ki(n,r).length;const u=o.filter(_=>n.startsWith(_,r))[0];return u?(r+=u.length,r+=Ki(n,r).length,{cursor:r,operator:u}):null}function Pu(o,n){return(r,u)=>{const _=o(r,u);if(!_)return null;u=_.cursor;let D=_.evaluable;for(;;){const F=Eu(n,r,u);if(!F)break;u=F.cursor;const rt=o(r,u);if(!rt)return null;u=rt.cursor,D=new ou(F.operator,D,rt.evaluable)}return D?{cursor:u,evaluable:D}:null}}const Tu=[["**"],["*","/","%"],["+","-"],["<<",">>>",">>"],["&"],["^"],["|"]].reduce((o,n)=>Pu(o,n),Ko);function Zo(o,n){return n+=Ki(o,n).length,Tu(o,n)}function Au(o){const n=Zo(o,0);return!n||n.cursor+Ki(o,n.cursor).length!==o.length?null:n.evaluable}function un(o){var n;const r=Au(o);return(n=r==null?void 0:r.evaluate())!==null&&n!==void 0?n:null}function Jo(o){if(typeof o=="number")return o;if(typeof o=="string"){const n=un(o);if(!m(n))return n}return 0}function Lu(o){return String(o)}function _e(o){return n=>n.toFixed(Math.max(Math.min(o,20),0))}const Du=_e(0);function Cr(o){return Du(o)+"%"}function Qo(o){return String(o)}function fs(o){return o}function ta(o,n){for(;o.length<n;)o.push(void 0)}function Ru(o){const n=[];return ta(n,o),nt(n)}function Iu(o){const n=o.indexOf(void 0);return n<0?o:o.slice(0,n)}function Nu(o,n){const r=[...Iu(o),n];return r.length>o.length?r.splice(0,r.length-o.length):ta(r,o.length),r}function Ji({primary:o,secondary:n,forward:r,backward:u}){let _=!1;function D(F){_||(_=!0,F(),_=!1)}o.emitter.on("change",F=>{D(()=>{n.setRawValue(r(o,n),F.options)})}),n.emitter.on("change",F=>{D(()=>{o.setRawValue(u(o,n),F.options)}),D(()=>{n.setRawValue(r(o,n),F.options)})}),D(()=>{n.setRawValue(r(o,n),{forceEmit:!1,last:!0})})}function De(o,n){const r=o*(n.altKey?.1:1)*(n.shiftKey?10:1);return n.upKey?+r:n.downKey?-r:0}function Qi(o){return{altKey:o.altKey,downKey:o.key==="ArrowDown",shiftKey:o.shiftKey,upKey:o.key==="ArrowUp"}}function hn(o){return{altKey:o.altKey,downKey:o.key==="ArrowLeft",shiftKey:o.shiftKey,upKey:o.key==="ArrowRight"}}function ku(o){return o==="ArrowUp"||o==="ArrowDown"}function ea(o){return ku(o)||o==="ArrowLeft"||o==="ArrowRight"}function ms(o,n){var r,u;const _=n.ownerDocument.defaultView,D=n.getBoundingClientRect();return{x:o.pageX-(((r=_&&_.scrollX)!==null&&r!==void 0?r:0)+D.left),y:o.pageY-(((u=_&&_.scrollY)!==null&&u!==void 0?u:0)+D.top)}}class zn{constructor(n){this.lastTouch_=null,this.onDocumentMouseMove_=this.onDocumentMouseMove_.bind(this),this.onDocumentMouseUp_=this.onDocumentMouseUp_.bind(this),this.onMouseDown_=this.onMouseDown_.bind(this),this.onTouchEnd_=this.onTouchEnd_.bind(this),this.onTouchMove_=this.onTouchMove_.bind(this),this.onTouchStart_=this.onTouchStart_.bind(this),this.elem_=n,this.emitter=new y,n.addEventListener("touchstart",this.onTouchStart_,{passive:!1}),n.addEventListener("touchmove",this.onTouchMove_,{passive:!0}),n.addEventListener("touchend",this.onTouchEnd_),n.addEventListener("mousedown",this.onMouseDown_)}computePosition_(n){const r=this.elem_.getBoundingClientRect();return{bounds:{width:r.width,height:r.height},point:n?{x:n.x,y:n.y}:null}}onMouseDown_(n){var r;n.preventDefault(),(r=n.currentTarget)===null||r===void 0||r.focus();const u=this.elem_.ownerDocument;u.addEventListener("mousemove",this.onDocumentMouseMove_),u.addEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(ms(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseMove_(n){this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(ms(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onDocumentMouseUp_(n){const r=this.elem_.ownerDocument;r.removeEventListener("mousemove",this.onDocumentMouseMove_),r.removeEventListener("mouseup",this.onDocumentMouseUp_),this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(ms(n,this.elem_)),sender:this,shiftKey:n.shiftKey})}onTouchStart_(n){n.preventDefault();const r=n.targetTouches.item(0),u=this.elem_.getBoundingClientRect();this.emitter.emit("down",{altKey:n.altKey,data:this.computePosition_(r?{x:r.clientX-u.left,y:r.clientY-u.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=r}onTouchMove_(n){const r=n.targetTouches.item(0),u=this.elem_.getBoundingClientRect();this.emitter.emit("move",{altKey:n.altKey,data:this.computePosition_(r?{x:r.clientX-u.left,y:r.clientY-u.top}:void 0),sender:this,shiftKey:n.shiftKey}),this.lastTouch_=r}onTouchEnd_(n){var r;const u=(r=n.targetTouches.item(0))!==null&&r!==void 0?r:this.lastTouch_,_=this.elem_.getBoundingClientRect();this.emitter.emit("up",{altKey:n.altKey,data:this.computePosition_(u?{x:u.clientX-_.left,y:u.clientY-_.top}:void 0),sender:this,shiftKey:n.shiftKey})}}function te(o,n,r,u,_){const D=(o-n)/(r-n);return u+D*(_-u)}function na(o){return String(o.toFixed(10)).split(".")[1].replace(/0+$/,"").length}function de(o,n,r){return Math.min(Math.max(o,n),r)}function ia(o,n){return(o%n+n)%n}const Ue=C("txt");class Ou{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.props_=r.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(Ue(),Ue(void 0,"num")),r.arrayPosition&&this.element.classList.add(Ue(void 0,r.arrayPosition)),r.viewProps.bindClassModifiers(this.element);const u=n.createElement("input");u.classList.add(Ue("i")),u.type="text",r.viewProps.bindDisabled(u),this.element.appendChild(u),this.inputElement=u,this.onDraggingChange_=this.onDraggingChange_.bind(this),this.dragging_=r.dragging,this.dragging_.emitter.on("change",this.onDraggingChange_),this.element.classList.add(Ue()),this.inputElement.classList.add(Ue("i"));const _=n.createElement("div");_.classList.add(Ue("k")),this.element.appendChild(_),this.knobElement=_;const D=n.createElementNS(pt,"svg");D.classList.add(Ue("g")),this.knobElement.appendChild(D);const F=n.createElementNS(pt,"path");F.classList.add(Ue("gb")),D.appendChild(F),this.guideBodyElem_=F;const rt=n.createElementNS(pt,"path");rt.classList.add(Ue("gh")),D.appendChild(rt),this.guideHeadElem_=rt;const Mt=n.createElement("div");Mt.classList.add(C("tt")()),this.knobElement.appendChild(Mt),this.tooltipElem_=Mt,r.value.emitter.on("change",this.onChange_),this.value=r.value,this.refresh()}onDraggingChange_(n){if(n.rawValue===null){this.element.classList.remove(Ue(void 0,"drg"));return}this.element.classList.add(Ue(void 0,"drg"));const r=n.rawValue/this.props_.get("draggingScale"),u=r+(r>0?-1:r<0?1:0),_=de(-u,-4,4);this.guideHeadElem_.setAttributeNS(null,"d",[`M ${u+_},0 L${u},4 L${u+_},8`,`M ${r},-1 L${r},9`].join(" ")),this.guideBodyElem_.setAttributeNS(null,"d",`M 0,4 L${r},4`);const D=this.props_.get("formatter");this.tooltipElem_.textContent=D(this.value.rawValue),this.tooltipElem_.style.left=`${r}px`}refresh(){const n=this.props_.get("formatter");this.inputElement.value=n(this.value.rawValue)}onChange_(){this.refresh()}}class tr{constructor(n,r){var u;this.originRawValue_=0,this.onInputChange_=this.onInputChange_.bind(this),this.onInputKeyDown_=this.onInputKeyDown_.bind(this),this.onInputKeyUp_=this.onInputKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.parser_=r.parser,this.props=r.props,this.sliderProps_=(u=r.sliderProps)!==null&&u!==void 0?u:null,this.value=r.value,this.viewProps=r.viewProps,this.dragging_=nt(null),this.view=new Ou(n,{arrayPosition:r.arrayPosition,dragging:this.dragging_,props:this.props,value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_),this.view.inputElement.addEventListener("keydown",this.onInputKeyDown_),this.view.inputElement.addEventListener("keyup",this.onInputKeyUp_);const _=new zn(this.view.knobElement);_.emitter.on("down",this.onPointerDown_),_.emitter.on("move",this.onPointerMove_),_.emitter.on("up",this.onPointerUp_)}constrainValue_(n){var r,u;const _=(r=this.sliderProps_)===null||r===void 0?void 0:r.get("minValue"),D=(u=this.sliderProps_)===null||u===void 0?void 0:u.get("maxValue");let F=n;return _!==void 0&&(F=Math.max(F,_)),D!==void 0&&(F=Math.min(F,D)),F}onInputChange_(n){const u=n.currentTarget.value,_=this.parser_(u);m(_)||(this.value.rawValue=this.constrainValue_(_)),this.view.refresh()}onInputKeyDown_(n){const r=De(this.baseStep_,Qi(n));r!==0&&this.value.setRawValue(this.constrainValue_(this.value.rawValue+r),{forceEmit:!1,last:!1})}onInputKeyUp_(n){De(this.baseStep_,Qi(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}onPointerDown_(){this.originRawValue_=this.value.rawValue,this.dragging_.rawValue=0}computeDraggingValue_(n){if(!n.point)return null;const r=n.point.x-n.bounds.width/2;return this.constrainValue_(this.originRawValue_+r*this.props.get("draggingScale"))}onPointerMove_(n){const r=this.computeDraggingValue_(n.data);r!==null&&(this.value.setRawValue(r,{forceEmit:!1,last:!1}),this.dragging_.rawValue=this.value.rawValue-this.originRawValue_)}onPointerUp_(n){const r=this.computeDraggingValue_(n.data);r!==null&&(this.value.setRawValue(r,{forceEmit:!0,last:!0}),this.dragging_.rawValue=null)}}const gs=C("sld");class Fu{constructor(n,r){this.onChange_=this.onChange_.bind(this),this.props_=r.props,this.props_.emitter.on("change",this.onChange_),this.element=n.createElement("div"),this.element.classList.add(gs()),r.viewProps.bindClassModifiers(this.element);const u=n.createElement("div");u.classList.add(gs("t")),r.viewProps.bindTabIndex(u),this.element.appendChild(u),this.trackElement=u;const _=n.createElement("div");_.classList.add(gs("k")),this.trackElement.appendChild(_),this.knobElement=_,r.value.emitter.on("change",this.onChange_),this.value=r.value,this.update_()}update_(){const n=de(te(this.value.rawValue,this.props_.get("minValue"),this.props_.get("maxValue"),0,100),0,100);this.knobElement.style.width=`${n}%`}onChange_(){this.update_()}}class Vu{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDownOrMove_=this.onPointerDownOrMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.baseStep_=r.baseStep,this.value=r.value,this.viewProps=r.viewProps,this.props=r.props,this.view=new Fu(n,{props:this.props,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new zn(this.view.trackElement),this.ptHandler_.emitter.on("down",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("move",this.onPointerDownOrMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.trackElement.addEventListener("keydown",this.onKeyDown_),this.view.trackElement.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){!n.point||this.value.setRawValue(te(de(n.point.x,0,n.bounds.width),0,n.bounds.width,this.props.get("minValue"),this.props.get("maxValue")),r)}onPointerDownOrMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=De(this.baseStep_,hn(n));r!==0&&this.value.setRawValue(this.value.rawValue+r,{forceEmit:!1,last:!1})}onKeyUp_(n){De(this.baseStep_,hn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const vs=C("sldtxt");class Uu{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(vs());const u=n.createElement("div");u.classList.add(vs("s")),this.sliderView_=r.sliderView,u.appendChild(this.sliderView_.element),this.element.appendChild(u);const _=n.createElement("div");_.classList.add(vs("t")),this.textView_=r.textView,_.appendChild(this.textView_.element),this.element.appendChild(_)}}class _s{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.sliderC_=new Vu(n,{baseStep:r.baseStep,props:r.sliderProps,value:r.value,viewProps:this.viewProps}),this.textC_=new tr(n,{baseStep:r.baseStep,parser:r.parser,props:r.textProps,sliderProps:r.sliderProps,value:r.value,viewProps:r.viewProps}),this.view=new Uu(n,{sliderView:this.sliderC_.view,textView:this.textC_.view})}get sliderController(){return this.sliderC_}get textController(){return this.textC_}}function er(o,n){o.write(n)}function Er(o){const n=Q;if(Array.isArray(o))return n.required.array(n.required.object({text:n.required.string,value:n.required.raw}))(o).value;if(typeof o=="object")return n.required.raw(o).value}function ra(o){if(o==="inline"||o==="popup")return o}function Cn(o){const n=Q;return n.required.object({max:n.optional.number,min:n.optional.number,step:n.optional.number})(o).value}function sa(o){if(Array.isArray(o))return o;const n=[];return Object.keys(o).forEach(r=>{n.push({text:r,value:o[r]})}),n}function xs(o){return m(o)?null:new Yi(sa(o))}function bs(o){const n=o?rn(o,Yi):null;return n?n.options:null}function zu(o){const n=o?rn(o,Mr):null;return n?n.step:null}function Pr(o,n){const r=o&&rn(o,Mr);return r?na(r.step):Math.max(na(n),2)}function hi(o){const n=zu(o);return n!=null?n:1}function di(o,n){var r;const u=o&&rn(o,Mr),_=Math.abs((r=u==null?void 0:u.step)!==null&&r!==void 0?r:n);return _===0?.1:Math.pow(10,Math.floor(Math.log10(_))-1)}const Tr=C("ckb");class Bu{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Tr()),r.viewProps.bindClassModifiers(this.element);const u=n.createElement("label");u.classList.add(Tr("l")),this.element.appendChild(u);const _=n.createElement("input");_.classList.add(Tr("i")),_.type="checkbox",u.appendChild(_),this.inputElement=_,r.viewProps.bindDisabled(this.inputElement);const D=n.createElement("div");D.classList.add(Tr("w")),u.appendChild(D);const F=Qt(n,"check");D.appendChild(F),r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.update_()}update_(){this.inputElement.checked=this.value.rawValue}onValueChange_(){this.update_()}}class Gu{constructor(n,r){this.onInputChange_=this.onInputChange_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new Bu(n,{value:this.value,viewProps:this.viewProps}),this.view.inputElement.addEventListener("change",this.onInputChange_)}onInputChange_(n){const r=n.currentTarget;this.value.rawValue=r.checked}}function Hu(o){const n=[],r=xs(o.options);return r&&n.push(r),new Xi(n)}const Wu={id:"input-bool",type:"input",accept:(o,n)=>{if(typeof o!="boolean")return null;const u=ut(n,{options:Q.optional.custom(Er)});return u?{initialValue:o,params:u}:null},binding:{reader:o=>Xo,constraint:o=>Hu(o.params),writer:o=>er},controller:o=>{var n;const r=o.document,u=o.value,_=o.constraint;return _&&rn(_,Yi)?new $i(r,{props:X.fromObject({options:(n=bs(_))!==null&&n!==void 0?n:[]}),value:u,viewProps:o.viewProps}):new Gu(r,{value:u,viewProps:o.viewProps})}},Bn=C("col");class qu{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(Bn()),r.foldable.bindExpandedClass(this.element,Bn(void 0,"expanded")),z(r.foldable,"completed",I(this.element,Bn(void 0,"cpl")));const u=n.createElement("div");u.classList.add(Bn("h")),this.element.appendChild(u);const _=n.createElement("div");_.classList.add(Bn("s")),u.appendChild(_),this.swatchElement=_;const D=n.createElement("div");if(D.classList.add(Bn("t")),u.appendChild(D),this.textElement=D,r.pickerLayout==="inline"){const F=n.createElement("div");F.classList.add(Bn("p")),this.element.appendChild(F),this.pickerElement=F}else this.pickerElement=null}}function ju(o,n,r){const u=de(o/255,0,1),_=de(n/255,0,1),D=de(r/255,0,1),F=Math.max(u,_,D),rt=Math.min(u,_,D),Mt=F-rt;let Rt=0,Xt=0;const Yt=(rt+F)/2;return Mt!==0&&(Xt=Mt/(1-Math.abs(F+rt-1)),u===F?Rt=(_-D)/Mt:_===F?Rt=2+(D-u)/Mt:Rt=4+(u-_)/Mt,Rt=Rt/6+(Rt<0?1:0)),[Rt*360,Xt*100,Yt*100]}function Xu(o,n,r){const u=(o%360+360)%360,_=de(n/100,0,1),D=de(r/100,0,1),F=(1-Math.abs(2*D-1))*_,rt=F*(1-Math.abs(u/60%2-1)),Mt=D-F/2;let Rt,Xt,Yt;return u>=0&&u<60?[Rt,Xt,Yt]=[F,rt,0]:u>=60&&u<120?[Rt,Xt,Yt]=[rt,F,0]:u>=120&&u<180?[Rt,Xt,Yt]=[0,F,rt]:u>=180&&u<240?[Rt,Xt,Yt]=[0,rt,F]:u>=240&&u<300?[Rt,Xt,Yt]=[rt,0,F]:[Rt,Xt,Yt]=[F,0,rt],[(Rt+Mt)*255,(Xt+Mt)*255,(Yt+Mt)*255]}function Yu(o,n,r){const u=de(o/255,0,1),_=de(n/255,0,1),D=de(r/255,0,1),F=Math.max(u,_,D),rt=Math.min(u,_,D),Mt=F-rt;let Rt;Mt===0?Rt=0:F===u?Rt=60*(((_-D)/Mt%6+6)%6):F===_?Rt=60*((D-u)/Mt+2):Rt=60*((u-_)/Mt+4);const Xt=F===0?0:Mt/F,Yt=F;return[Rt,Xt*100,Yt*100]}function oa(o,n,r){const u=ia(o,360),_=de(n/100,0,1),D=de(r/100,0,1),F=D*_,rt=F*(1-Math.abs(u/60%2-1)),Mt=D-F;let Rt,Xt,Yt;return u>=0&&u<60?[Rt,Xt,Yt]=[F,rt,0]:u>=60&&u<120?[Rt,Xt,Yt]=[rt,F,0]:u>=120&&u<180?[Rt,Xt,Yt]=[0,F,rt]:u>=180&&u<240?[Rt,Xt,Yt]=[0,rt,F]:u>=240&&u<300?[Rt,Xt,Yt]=[rt,0,F]:[Rt,Xt,Yt]=[F,0,rt],[(Rt+Mt)*255,(Xt+Mt)*255,(Yt+Mt)*255]}function $u(o,n,r){const u=r+n*(100-Math.abs(2*r-100))/200;return[o,u!==0?n*(100-Math.abs(2*r-100))/u:0,r+n*(100-Math.abs(2*r-100))/(2*100)]}function Ku(o,n,r){const u=100-Math.abs(r*(200-n)/100-100);return[o,u!==0?n*r/u:0,r*(200-n)/(2*100)]}function Gn(o){return[o[0],o[1],o[2]]}function aa(o,n){return[o[0],o[1],o[2],n]}const Zu={hsl:{hsl:(o,n,r)=>[o,n,r],hsv:$u,rgb:Xu},hsv:{hsl:Ku,hsv:(o,n,r)=>[o,n,r],rgb:oa},rgb:{hsl:ju,hsv:Yu,rgb:(o,n,r)=>[o,n,r]}};function Ar(o,n){return[n==="float"?1:o==="rgb"?255:360,n==="float"?1:o==="rgb"?255:100,n==="float"?1:o==="rgb"?255:100]}function Ju(o,n,r){var u;const _=Ar(n,r);return[n==="rgb"?de(o[0],0,_[0]):ia(o[0],_[0]),de(o[1],0,_[1]),de(o[2],0,_[2]),de((u=o[3])!==null&&u!==void 0?u:1,0,1)]}function la(o,n,r,u){const _=Ar(n,r),D=Ar(n,u);return o.map((F,rt)=>F/_[rt]*D[rt])}function Qu(o,n,r){const u=la(o,n.mode,n.type,"int"),_=Zu[n.mode][r.mode](...u);return la(_,r.mode,"int",r.type)}function Lr(o,n){return typeof o!="object"||m(o)?!1:n in o&&typeof o[n]=="number"}class Ut{constructor(n,r,u="int"){this.mode=r,this.type=u,this.comps_=Ju(n,r,u)}static black(n="int"){return new Ut([0,0,0],"rgb",n)}static fromObject(n,r="int"){const u="a"in n?[n.r,n.g,n.b,n.a]:[n.r,n.g,n.b];return new Ut(u,"rgb",r)}static toRgbaObject(n,r="int"){return n.toRgbaObject(r)}static isRgbColorObject(n){return Lr(n,"r")&&Lr(n,"g")&&Lr(n,"b")}static isRgbaColorObject(n){return this.isRgbColorObject(n)&&Lr(n,"a")}static isColorObject(n){return this.isRgbColorObject(n)}static equals(n,r){if(n.mode!==r.mode)return!1;const u=n.comps_,_=r.comps_;for(let D=0;D<u.length;D++)if(u[D]!==_[D])return!1;return!0}getComponents(n,r="int"){return aa(Qu(Gn(this.comps_),{mode:this.mode,type:this.type},{mode:n!=null?n:this.mode,type:r}),this.comps_[3])}toRgbaObject(n="int"){const r=this.getComponents("rgb",n);return{r:r[0],g:r[1],b:r[2],a:r[3]}}}const En=C("colp");class th{constructor(n,r){this.alphaViews_=null,this.element=n.createElement("div"),this.element.classList.add(En());const u=n.createElement("div");u.classList.add(En("hsv"));const _=n.createElement("div");_.classList.add(En("sv")),this.svPaletteView_=r.svPaletteView,_.appendChild(this.svPaletteView_.element),u.appendChild(_);const D=n.createElement("div");D.classList.add(En("h")),this.hPaletteView_=r.hPaletteView,D.appendChild(this.hPaletteView_.element),u.appendChild(D),this.element.appendChild(u);const F=n.createElement("div");if(F.classList.add(En("rgb")),this.textView_=r.textView,F.appendChild(this.textView_.element),this.element.appendChild(F),r.alphaViews){this.alphaViews_={palette:r.alphaViews.palette,text:r.alphaViews.text};const rt=n.createElement("div");rt.classList.add(En("a"));const Mt=n.createElement("div");Mt.classList.add(En("ap")),Mt.appendChild(this.alphaViews_.palette.element),rt.appendChild(Mt);const Rt=n.createElement("div");Rt.classList.add(En("at")),Rt.appendChild(this.alphaViews_.text.element),rt.appendChild(Rt),this.element.appendChild(rt)}}get allFocusableElements(){const n=[this.svPaletteView_.element,this.hPaletteView_.element,this.textView_.modeSelectElement,...this.textView_.textViews.map(r=>r.inputElement)];return this.alphaViews_&&n.push(this.alphaViews_.palette.element,this.alphaViews_.text.inputElement),n}}function eh(o){return o==="int"?"int":o==="float"?"float":void 0}function ws(o){const n=Q;return ut(o,{alpha:n.optional.boolean,color:n.optional.object({alpha:n.optional.boolean,type:n.optional.custom(eh)}),expanded:n.optional.boolean,picker:n.optional.custom(ra)})}function Hn(o){return o?.1:1}function Wn(o){var n;return(n=o.color)===null||n===void 0?void 0:n.type}function nh(o,n){return o.alpha===n.alpha&&o.mode===n.mode&&o.notation===n.notation&&o.type===n.type}function ze(o,n){const r=o.match(/^(.+)%$/);return Math.min(r?parseFloat(r[1])*.01*n:parseFloat(o),n)}const ih={deg:o=>o,grad:o=>o*360/400,rad:o=>o*360/(2*Math.PI),turn:o=>o*360};function ca(o){const n=o.match(/^([0-9.]+?)(deg|grad|rad|turn)$/);if(!n)return parseFloat(o);const r=parseFloat(n[1]),u=n[2];return ih[u](r)}function ua(o){const n=o.match(/^rgb\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[ze(n[1],255),ze(n[2],255),ze(n[3],255)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function ha(o){return n=>{const r=ua(n);return r?new Ut(r,"rgb",o):null}}function da(o){const n=o.match(/^rgba\(\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[ze(n[1],255),ze(n[2],255),ze(n[3],255),ze(n[4],1)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function pa(o){return n=>{const r=da(n);return r?new Ut(r,"rgb",o):null}}function fa(o){const n=o.match(/^hsl\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[ca(n[1]),ze(n[2],100),ze(n[3],100)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function ma(o){return n=>{const r=fa(n);return r?new Ut(r,"hsl",o):null}}function ga(o){const n=o.match(/^hsla\(\s*([0-9A-Fa-f.]+(?:deg|grad|rad|turn)?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*,\s*([0-9A-Fa-f.]+%?)\s*\)$/);if(!n)return null;const r=[ca(n[1]),ze(n[2],100),ze(n[3],100),ze(n[4],1)];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function va(o){return n=>{const r=ga(n);return r?new Ut(r,"hsl",o):null}}function _a(o){const n=o.match(/^#([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16)];const r=o.match(/^(?:#|0x)([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]:null}function rh(o){const n=_a(o);return n?new Ut(n,"rgb","int"):null}function xa(o){const n=o.match(/^#?([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])([0-9A-Fa-f])$/);if(n)return[parseInt(n[1]+n[1],16),parseInt(n[2]+n[2],16),parseInt(n[3]+n[3],16),te(parseInt(n[4]+n[4],16),0,255,0,1)];const r=o.match(/^(?:#|0x)?([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})([0-9A-Fa-f]{2})$/);return r?[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16),te(parseInt(r[4],16),0,255,0,1)]:null}function sh(o){const n=xa(o);return n?new Ut(n,"rgb","int"):null}function ba(o){const n=o.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const r=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3])];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])?null:r}function wa(o){return n=>{const r=ba(n);return r?new Ut(r,"rgb",o):null}}function ya(o){const n=o.match(/^\{\s*r\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*g\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*b\s*:\s*([0-9A-Fa-f.]+%?)\s*,\s*a\s*:\s*([0-9A-Fa-f.]+%?)\s*\}$/);if(!n)return null;const r=[parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3]),parseFloat(n[4])];return isNaN(r[0])||isNaN(r[1])||isNaN(r[2])||isNaN(r[3])?null:r}function Ma(o){return n=>{const r=ya(n);return r?new Ut(r,"rgb",o):null}}const oh=[{parser:_a,result:{alpha:!1,mode:"rgb",notation:"hex"}},{parser:xa,result:{alpha:!0,mode:"rgb",notation:"hex"}},{parser:ua,result:{alpha:!1,mode:"rgb",notation:"func"}},{parser:da,result:{alpha:!0,mode:"rgb",notation:"func"}},{parser:fa,result:{alpha:!1,mode:"hsl",notation:"func"}},{parser:ga,result:{alpha:!0,mode:"hsl",notation:"func"}},{parser:ba,result:{alpha:!1,mode:"rgb",notation:"object"}},{parser:ya,result:{alpha:!0,mode:"rgb",notation:"object"}}];function ah(o){return oh.reduce((n,{parser:r,result:u})=>n||(r(o)?u:null),null)}function ys(o,n="int"){const r=ah(o);return r?r.notation==="hex"&&n!=="float"?Object.assign(Object.assign({},r),{type:"int"}):r.notation==="func"?Object.assign(Object.assign({},r),{type:n}):null:null}const Sa={int:[rh,sh,ha("int"),pa("int"),ma("int"),va("int"),wa("int"),Ma("int")],float:[ha("float"),pa("float"),ma("float"),va("float"),wa("float"),Ma("float")]};function lh(o){const n=Sa[o];return r=>{if(typeof r!="string")return Ut.black(o);const u=n.reduce((_,D)=>_||D(r),null);return u!=null?u:Ut.black(o)}}function Ms(o){const n=Sa[o];return r=>n.reduce((u,_)=>u||_(r),null)}function Ca(o){const n=de(Math.floor(o),0,255).toString(16);return n.length===1?`0${n}`:n}function Ea(o,n="#"){const r=Gn(o.getComponents("rgb")).map(Ca).join("");return`${n}${r}`}function Ss(o,n="#"){const r=o.getComponents("rgb"),u=[r[0],r[1],r[2],r[3]*255].map(Ca).join("");return`${n}${u}`}function Pa(o,n){const r=_e(n==="float"?2:0);return`rgb(${Gn(o.getComponents("rgb",n)).map(_=>r(_)).join(", ")})`}function ch(o){return n=>Pa(n,o)}function Dr(o,n){const r=_e(2),u=_e(n==="float"?2:0);return`rgba(${o.getComponents("rgb",n).map((D,F)=>(F===3?r:u)(D)).join(", ")})`}function uh(o){return n=>Dr(n,o)}function hh(o){const n=[_e(0),Cr,Cr];return`hsl(${Gn(o.getComponents("hsl")).map((u,_)=>n[_](u)).join(", ")})`}function dh(o){const n=[_e(0),Cr,Cr,_e(2)];return`hsla(${o.getComponents("hsl").map((u,_)=>n[_](u)).join(", ")})`}function Ta(o,n){const r=_e(n==="float"?2:0),u=["r","g","b"];return`{${Gn(o.getComponents("rgb",n)).map((D,F)=>`${u[F]}: ${r(D)}`).join(", ")}}`}function ph(o){return n=>Ta(n,o)}function Aa(o,n){const r=_e(2),u=_e(n==="float"?2:0),_=["r","g","b","a"];return`{${o.getComponents("rgb",n).map((F,rt)=>{const Mt=rt===3?r:u;return`${_[rt]}: ${Mt(F)}`}).join(", ")}}`}function fh(o){return n=>Aa(n,o)}const mh=[{format:{alpha:!1,mode:"rgb",notation:"hex",type:"int"},stringifier:Ea},{format:{alpha:!0,mode:"rgb",notation:"hex",type:"int"},stringifier:Ss},{format:{alpha:!1,mode:"hsl",notation:"func",type:"int"},stringifier:hh},{format:{alpha:!0,mode:"hsl",notation:"func",type:"int"},stringifier:dh},...["int","float"].reduce((o,n)=>[...o,{format:{alpha:!1,mode:"rgb",notation:"func",type:n},stringifier:ch(n)},{format:{alpha:!0,mode:"rgb",notation:"func",type:n},stringifier:uh(n)},{format:{alpha:!1,mode:"rgb",notation:"object",type:n},stringifier:ph(n)},{format:{alpha:!0,mode:"rgb",notation:"object",type:n},stringifier:fh(n)}],[])];function Cs(o){return mh.reduce((n,r)=>n||(nh(r.format,o)?r.stringifier:null),null)}const nr=C("apl");class gh{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(nr()),r.viewProps.bindTabIndex(this.element);const u=n.createElement("div");u.classList.add(nr("b")),this.element.appendChild(u);const _=n.createElement("div");_.classList.add(nr("c")),u.appendChild(_),this.colorElem_=_;const D=n.createElement("div");D.classList.add(nr("m")),this.element.appendChild(D),this.markerElem_=D;const F=n.createElement("div");F.classList.add(nr("p")),this.markerElem_.appendChild(F),this.previewElem_=F,this.update_()}update_(){const n=this.value.rawValue,r=n.getComponents("rgb"),u=new Ut([r[0],r[1],r[2],0],"rgb"),_=new Ut([r[0],r[1],r[2],255],"rgb"),D=["to right",Dr(u),Dr(_)];this.colorElem_.style.background=`linear-gradient(${D.join(",")})`,this.previewElem_.style.backgroundColor=Dr(n);const F=te(r[3],0,1,0,100);this.markerElem_.style.left=`${F}%`}onValueChange_(){this.update_()}}class vh{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new gh(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new zn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const u=n.point.x/n.bounds.width,_=this.value.rawValue,[D,F,rt]=_.getComponents("hsv");this.value.setRawValue(new Ut([D,F,rt,u],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=De(Hn(!0),hn(n));if(r===0)return;const u=this.value.rawValue,[_,D,F,rt]=u.getComponents("hsv");this.value.setRawValue(new Ut([_,D,F,rt+r],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){De(Hn(!0),hn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const pi=C("coltxt");function _h(o){const n=o.createElement("select"),r=[{text:"RGB",value:"rgb"},{text:"HSL",value:"hsl"},{text:"HSV",value:"hsv"}];return n.appendChild(r.reduce((u,_)=>{const D=o.createElement("option");return D.textContent=_.text,D.value=_.value,u.appendChild(D),u},o.createDocumentFragment())),n}class xh{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(pi());const u=n.createElement("div");u.classList.add(pi("m")),this.modeElem_=_h(n),this.modeElem_.classList.add(pi("ms")),u.appendChild(this.modeSelectElement);const _=n.createElement("div");_.classList.add(pi("mm")),_.appendChild(Qt(n,"dropdown")),u.appendChild(_),this.element.appendChild(u);const D=n.createElement("div");D.classList.add(pi("w")),this.element.appendChild(D),this.textsElem_=D,this.textViews_=r.textViews,this.applyTextViews_(),k(r.colorMode,F=>{this.modeElem_.value=F})}get modeSelectElement(){return this.modeElem_}get textViews(){return this.textViews_}set textViews(n){this.textViews_=n,this.applyTextViews_()}applyTextViews_(){Te(this.textsElem_);const n=this.element.ownerDocument;this.textViews_.forEach(r=>{const u=n.createElement("div");u.classList.add(pi("c")),u.appendChild(r.element),this.textsElem_.appendChild(u)})}}function bh(o){return _e(o==="float"?2:0)}function wh(o,n,r){const u=Ar(o,n)[r];return new ui({min:0,max:u})}function Es(o,n,r){return new tr(o,{arrayPosition:r===0?"fst":r===3-1?"lst":"mid",baseStep:Hn(!1),parser:n.parser,props:X.fromObject({draggingScale:n.colorType==="float"?.01:1,formatter:bh(n.colorType)}),value:nt(0,{constraint:wh(n.colorMode,n.colorType,r)}),viewProps:n.viewProps})}class yh{constructor(n,r){this.onModeSelectChange_=this.onModeSelectChange_.bind(this),this.colorType_=r.colorType,this.parser_=r.parser,this.value=r.value,this.viewProps=r.viewProps,this.colorMode=nt(this.value.rawValue.mode),this.ccs_=this.createComponentControllers_(n),this.view=new xh(n,{colorMode:this.colorMode,textViews:[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}),this.view.modeSelectElement.addEventListener("change",this.onModeSelectChange_)}createComponentControllers_(n){const r={colorMode:this.colorMode.rawValue,colorType:this.colorType_,parser:this.parser_,viewProps:this.viewProps},u=[Es(n,r,0),Es(n,r,1),Es(n,r,2)];return u.forEach((_,D)=>{Ji({primary:this.value,secondary:_.value,forward:F=>F.rawValue.getComponents(this.colorMode.rawValue,this.colorType_)[D],backward:(F,rt)=>{const Mt=this.colorMode.rawValue,Rt=F.rawValue.getComponents(Mt,this.colorType_);return Rt[D]=rt.rawValue,new Ut(aa(Gn(Rt),Rt[3]),Mt,this.colorType_)}})}),u}onModeSelectChange_(n){const r=n.currentTarget;this.colorMode.rawValue=r.value,this.ccs_=this.createComponentControllers_(this.view.element.ownerDocument),this.view.textViews=[this.ccs_[0].view,this.ccs_[1].view,this.ccs_[2].view]}}const Ps=C("hpl");class Mh{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Ps()),r.viewProps.bindTabIndex(this.element);const u=n.createElement("div");u.classList.add(Ps("c")),this.element.appendChild(u);const _=n.createElement("div");_.classList.add(Ps("m")),this.element.appendChild(_),this.markerElem_=_,this.update_()}update_(){const n=this.value.rawValue,[r]=n.getComponents("hsv");this.markerElem_.style.backgroundColor=Pa(new Ut([r,100,100],"hsv"));const u=te(r,0,360,0,100);this.markerElem_.style.left=`${u}%`}onValueChange_(){this.update_()}}class Sh{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new Mh(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new zn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const u=te(de(n.point.x,0,n.bounds.width),0,n.bounds.width,0,359),_=this.value.rawValue,[,D,F,rt]=_.getComponents("hsv");this.value.setRawValue(new Ut([u,D,F,rt],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){const r=De(Hn(!1),hn(n));if(r===0)return;const u=this.value.rawValue,[_,D,F,rt]=u.getComponents("hsv");this.value.setRawValue(new Ut([_+r,D,F,rt],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){De(Hn(!1),hn(n))!==0&&this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}const Ts=C("svp"),La=64;class Ch{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),this.value=r.value,this.value.emitter.on("change",this.onValueChange_),this.element=n.createElement("div"),this.element.classList.add(Ts()),r.viewProps.bindTabIndex(this.element);const u=n.createElement("canvas");u.height=La,u.width=La,u.classList.add(Ts("c")),this.element.appendChild(u),this.canvasElement=u;const _=n.createElement("div");_.classList.add(Ts("m")),this.element.appendChild(_),this.markerElem_=_,this.update_()}update_(){const n=ae(this.canvasElement);if(!n)return;const u=this.value.rawValue.getComponents("hsv"),_=this.canvasElement.width,D=this.canvasElement.height,F=n.getImageData(0,0,_,D),rt=F.data;for(let Xt=0;Xt<D;Xt++)for(let Yt=0;Yt<_;Yt++){const pn=te(Yt,0,_,0,100),rr=te(Xt,0,D,100,0),sr=oa(u[0],pn,rr),vi=(Xt*_+Yt)*4;rt[vi]=sr[0],rt[vi+1]=sr[1],rt[vi+2]=sr[2],rt[vi+3]=255}n.putImageData(F,0,0);const Mt=te(u[1],0,100,0,100);this.markerElem_.style.left=`${Mt}%`;const Rt=te(u[2],0,100,100,0);this.markerElem_.style.top=`${Rt}%`}onValueChange_(){this.update_()}}class Eh{constructor(n,r){this.onKeyDown_=this.onKeyDown_.bind(this),this.onKeyUp_=this.onKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.view=new Ch(n,{value:this.value,viewProps:this.viewProps}),this.ptHandler_=new zn(this.view.element),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.element.addEventListener("keydown",this.onKeyDown_),this.view.element.addEventListener("keyup",this.onKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const u=te(n.point.x,0,n.bounds.width,0,100),_=te(n.point.y,0,n.bounds.height,100,0),[D,,,F]=this.value.rawValue.getComponents("hsv");this.value.setRawValue(new Ut([D,u,_,F],"hsv"),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onKeyDown_(n){ea(n.key)&&n.preventDefault();const[r,u,_,D]=this.value.rawValue.getComponents("hsv"),F=Hn(!1),rt=De(F,hn(n)),Mt=De(F,Qi(n));rt===0&&Mt===0||this.value.setRawValue(new Ut([r,u+rt,_+Mt,D],"hsv"),{forceEmit:!1,last:!1})}onKeyUp_(n){const r=Hn(!1),u=De(r,hn(n)),_=De(r,Qi(n));u===0&&_===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class Ph{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.hPaletteC_=new Sh(n,{value:this.value,viewProps:this.viewProps}),this.svPaletteC_=new Eh(n,{value:this.value,viewProps:this.viewProps}),this.alphaIcs_=r.supportsAlpha?{palette:new vh(n,{value:this.value,viewProps:this.viewProps}),text:new tr(n,{parser:un,baseStep:.1,props:X.fromObject({draggingScale:.01,formatter:_e(2)}),value:nt(0,{constraint:new ui({min:0,max:1})}),viewProps:this.viewProps})}:null,this.alphaIcs_&&Ji({primary:this.value,secondary:this.alphaIcs_.text.value,forward:u=>u.rawValue.getComponents()[3],backward:(u,_)=>{const D=u.rawValue.getComponents();return D[3]=_.rawValue,new Ut(D,u.rawValue.mode)}}),this.textC_=new yh(n,{colorType:r.colorType,parser:un,value:this.value,viewProps:this.viewProps}),this.view=new th(n,{alphaViews:this.alphaIcs_?{palette:this.alphaIcs_.palette.view,text:this.alphaIcs_.text.view}:null,hPaletteView:this.hPaletteC_.view,supportsAlpha:r.supportsAlpha,svPaletteView:this.svPaletteC_.view,textView:this.textC_.view})}get textController(){return this.textC_}}const As=C("colsw");class Th{constructor(n,r){this.onValueChange_=this.onValueChange_.bind(this),r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.element=n.createElement("div"),this.element.classList.add(As()),r.viewProps.bindClassModifiers(this.element);const u=n.createElement("div");u.classList.add(As("sw")),this.element.appendChild(u),this.swatchElem_=u;const _=n.createElement("button");_.classList.add(As("b")),r.viewProps.bindDisabled(_),this.element.appendChild(_),this.buttonElement=_,this.update_()}update_(){const n=this.value.rawValue;this.swatchElem_.style.backgroundColor=Ss(n)}onValueChange_(){this.update_()}}class Ah{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new Th(n,{value:this.value,viewProps:this.viewProps})}}class Ls{constructor(n,r){this.onButtonBlur_=this.onButtonBlur_.bind(this),this.onButtonClick_=this.onButtonClick_.bind(this),this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=mt.create(r.expanded),this.swatchC_=new Ah(n,{value:this.value,viewProps:this.viewProps});const u=this.swatchC_.view.buttonElement;u.addEventListener("blur",this.onButtonBlur_),u.addEventListener("click",this.onButtonClick_),this.textC_=new Sr(n,{parser:r.parser,props:X.fromObject({formatter:r.formatter}),value:this.value,viewProps:this.viewProps}),this.view=new qu(n,{foldable:this.foldable_,pickerLayout:r.pickerLayout}),this.view.swatchElement.appendChild(this.swatchC_.view.element),this.view.textElement.appendChild(this.textC_.view.element),this.popC_=r.pickerLayout==="popup"?new qo(n,{viewProps:this.viewProps}):null;const _=new Ph(n,{colorType:r.colorType,supportsAlpha:r.supportsAlpha,value:this.value,viewProps:this.viewProps});_.view.allFocusableElements.forEach(D=>{D.addEventListener("blur",this.onPopupChildBlur_),D.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=_,this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(_.view.element),Ji({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:D=>D.rawValue,backward:(D,F)=>F.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),wt(this.foldable_,this.view.pickerElement))}get textController(){return this.textC_}onButtonBlur_(n){if(!this.popC_)return;const r=this.view.element,u=n.relatedTarget;(!u||!r.contains(u))&&(this.popC_.shows.rawValue=!1)}onButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const r=this.popC_.view.element,u=S(n);u&&r.contains(u)||u&&u===this.swatchC_.view.buttonElement&&!St(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.swatchC_.view.buttonElement.focus()}}function Lh(o,n){return Ut.isColorObject(o)?Ut.fromObject(o,n):Ut.black(n)}function Dh(o){return Gn(o.getComponents("rgb")).reduce((n,r)=>n<<8|Math.floor(r)&255,0)}function Rh(o){return o.getComponents("rgb").reduce((n,r,u)=>{const _=Math.floor(u===3?r*255:r)&255;return n<<8|_},0)>>>0}function Ih(o){return new Ut([o>>16&255,o>>8&255,o&255],"rgb")}function Nh(o){return new Ut([o>>24&255,o>>16&255,o>>8&255,te(o&255,0,255,0,1)],"rgb")}function kh(o){return typeof o!="number"?Ut.black():Ih(o)}function Oh(o){return typeof o!="number"?Ut.black():Nh(o)}function Fh(o){const n=Cs(o);return n?(r,u)=>{er(r,n(u))}:null}function Vh(o){const n=o?Rh:Dh;return(r,u)=>{er(r,n(u))}}function Uh(o,n,r){const u=n.toRgbaObject(r);o.writeProperty("r",u.r),o.writeProperty("g",u.g),o.writeProperty("b",u.b),o.writeProperty("a",u.a)}function zh(o,n,r){const u=n.toRgbaObject(r);o.writeProperty("r",u.r),o.writeProperty("g",u.g),o.writeProperty("b",u.b)}function Bh(o,n){return(r,u)=>{o?Uh(r,u,n):zh(r,u,n)}}function Ds(o){var n;return!!((o==null?void 0:o.alpha)||((n=o==null?void 0:o.color)===null||n===void 0?void 0:n.alpha))}function Gh(o){return o?n=>Ss(n,"0x"):n=>Ea(n,"0x")}function Hh(o){return"color"in o||"view"in o&&o.view==="color"}const Wh={id:"input-color-number",type:"input",accept:(o,n)=>{if(typeof o!="number"||!Hh(n))return null;const r=ws(n);return r?{initialValue:o,params:r}:null},binding:{reader:o=>Ds(o.params)?Oh:kh,equals:Ut.equals,writer:o=>Vh(Ds(o.params))},controller:o=>{const n=Ds(o.params),r="expanded"in o.params?o.params.expanded:void 0,u="picker"in o.params?o.params.picker:void 0;return new Ls(o.document,{colorType:"int",expanded:r!=null?r:!1,formatter:Gh(n),parser:Ms("int"),pickerLayout:u!=null?u:"popup",supportsAlpha:n,value:o.value,viewProps:o.viewProps})}};function qh(o){return Ut.isRgbaColorObject(o)}function jh(o){return n=>Lh(n,o)}function Xh(o,n){return r=>o?Aa(r,n):Ta(r,n)}const Yh={id:"input-color-object",type:"input",accept:(o,n)=>{if(!Ut.isColorObject(o))return null;const r=ws(n);return r?{initialValue:o,params:r}:null},binding:{reader:o=>jh(Wn(o.params)),equals:Ut.equals,writer:o=>Bh(qh(o.initialValue),Wn(o.params))},controller:o=>{var n;const r=Ut.isRgbaColorObject(o.initialValue),u="expanded"in o.params?o.params.expanded:void 0,_="picker"in o.params?o.params.picker:void 0,D=(n=Wn(o.params))!==null&&n!==void 0?n:"int";return new Ls(o.document,{colorType:D,expanded:u!=null?u:!1,formatter:Xh(r,D),parser:Ms(D),pickerLayout:_!=null?_:"popup",supportsAlpha:r,value:o.value,viewProps:o.viewProps})}},$h={id:"input-color-string",type:"input",accept:(o,n)=>{if(typeof o!="string"||"view"in n&&n.view==="text")return null;const r=ys(o,Wn(n));if(!r||!Cs(r))return null;const _=ws(n);return _?{initialValue:o,params:_}:null},binding:{reader:o=>{var n;return lh((n=Wn(o.params))!==null&&n!==void 0?n:"int")},equals:Ut.equals,writer:o=>{const n=ys(o.initialValue,Wn(o.params));if(!n)throw w.shouldNeverHappen();const r=Fh(n);if(!r)throw w.notBindable();return r}},controller:o=>{const n=ys(o.initialValue,Wn(o.params));if(!n)throw w.shouldNeverHappen();const r=Cs(n);if(!r)throw w.shouldNeverHappen();const u="expanded"in o.params?o.params.expanded:void 0,_="picker"in o.params?o.params.picker:void 0;return new Ls(o.document,{colorType:n.type,expanded:u!=null?u:!1,formatter:r,parser:Ms(n.type),pickerLayout:_!=null?_:"popup",supportsAlpha:n.alpha,value:o.value,viewProps:o.viewProps})}};class Pn{constructor(n){this.components=n.components,this.asm_=n.assembly}constrain(n){const r=this.asm_.toComponents(n).map((u,_)=>{var D,F;return(F=(D=this.components[_])===null||D===void 0?void 0:D.constrain(u))!==null&&F!==void 0?F:u});return this.asm_.fromComponents(r)}}const Da=C("pndtxt");class Kh{constructor(n,r){this.textViews=r.textViews,this.element=n.createElement("div"),this.element.classList.add(Da()),this.textViews.forEach(u=>{const _=n.createElement("div");_.classList.add(Da("a")),_.appendChild(u.element),this.element.appendChild(_)})}}function Zh(o,n,r){return new tr(o,{arrayPosition:r===0?"fst":r===n.axes.length-1?"lst":"mid",baseStep:n.axes[r].baseStep,parser:n.parser,props:n.axes[r].textProps,value:nt(0,{constraint:n.axes[r].constraint}),viewProps:n.viewProps})}class Rs{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.acs_=r.axes.map((u,_)=>Zh(n,r,_)),this.acs_.forEach((u,_)=>{Ji({primary:this.value,secondary:u.value,forward:D=>r.assembly.toComponents(D.rawValue)[_],backward:(D,F)=>{const rt=r.assembly.toComponents(D.rawValue);return rt[_]=F.rawValue,r.assembly.fromComponents(rt)}})}),this.view=new Kh(n,{textViews:this.acs_.map(u=>u.view)})}}function Ra(o,n){return"step"in o&&!m(o.step)?new Mr(o.step,n):null}function Ia(o){return"max"in o&&!m(o.max)||"min"in o&&!m(o.min)?new ui({max:o.max,min:o.min}):null}function Jh(o,n){const r=[],u=Ra(o,n);u&&r.push(u);const _=Ia(o);_&&r.push(_);const D=xs(o.options);return D&&r.push(D),new Xi(r)}function Qh(o){const n=o?rn(o,ui):null;return n?[n.minValue,n.maxValue]:[void 0,void 0]}function td(o){const[n,r]=Qh(o);return[n!=null?n:0,r!=null?r:100]}const ed={id:"input-number",type:"input",accept:(o,n)=>{if(typeof o!="number")return null;const r=Q,u=ut(n,{format:r.optional.function,max:r.optional.number,min:r.optional.number,options:r.optional.custom(Er),step:r.optional.number});return u?{initialValue:o,params:u}:null},binding:{reader:o=>Jo,constraint:o=>Jh(o.params,o.initialValue),writer:o=>er},controller:o=>{var n,r;const u=o.value,_=o.constraint;if(_&&rn(_,Yi))return new $i(o.document,{props:X.fromObject({options:(n=bs(_))!==null&&n!==void 0?n:[]}),value:u,viewProps:o.viewProps});const D=(r="format"in o.params?o.params.format:void 0)!==null&&r!==void 0?r:_e(Pr(_,u.rawValue));if(_&&rn(_,ui)){const[F,rt]=td(_);return new _s(o.document,{baseStep:hi(_),parser:un,sliderProps:X.fromObject({maxValue:rt,minValue:F}),textProps:X.fromObject({draggingScale:di(_,u.rawValue),formatter:D}),value:u,viewProps:o.viewProps})}return new tr(o.document,{baseStep:hi(_),parser:un,props:X.fromObject({draggingScale:di(_,u.rawValue),formatter:D}),value:u,viewProps:o.viewProps})}};class Tn{constructor(n=0,r=0){this.x=n,this.y=r}getComponents(){return[this.x,this.y]}static isObject(n){if(m(n))return!1;const r=n.x,u=n.y;return!(typeof r!="number"||typeof u!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y}toObject(){return{x:this.x,y:this.y}}}const Na={toComponents:o=>o.getComponents(),fromComponents:o=>new Tn(...o)},fi=C("p2d");class nd{constructor(n,r){this.element=n.createElement("div"),this.element.classList.add(fi()),r.viewProps.bindClassModifiers(this.element),k(r.expanded,I(this.element,fi(void 0,"expanded")));const u=n.createElement("div");u.classList.add(fi("h")),this.element.appendChild(u);const _=n.createElement("button");_.classList.add(fi("b")),_.appendChild(Qt(n,"p2dpad")),r.viewProps.bindDisabled(_),u.appendChild(_),this.buttonElement=_;const D=n.createElement("div");if(D.classList.add(fi("t")),u.appendChild(D),this.textElement=D,r.pickerLayout==="inline"){const F=n.createElement("div");F.classList.add(fi("p")),this.element.appendChild(F),this.pickerElement=F}else this.pickerElement=null}}const An=C("p2dp");class id{constructor(n,r){this.onFoldableChange_=this.onFoldableChange_.bind(this),this.onValueChange_=this.onValueChange_.bind(this),this.invertsY_=r.invertsY,this.maxValue_=r.maxValue,this.element=n.createElement("div"),this.element.classList.add(An()),r.layout==="popup"&&this.element.classList.add(An(void 0,"p"));const u=n.createElement("div");u.classList.add(An("p")),r.viewProps.bindTabIndex(u),this.element.appendChild(u),this.padElement=u;const _=n.createElementNS(pt,"svg");_.classList.add(An("g")),this.padElement.appendChild(_),this.svgElem_=_;const D=n.createElementNS(pt,"line");D.classList.add(An("ax")),D.setAttributeNS(null,"x1","0"),D.setAttributeNS(null,"y1","50%"),D.setAttributeNS(null,"x2","100%"),D.setAttributeNS(null,"y2","50%"),this.svgElem_.appendChild(D);const F=n.createElementNS(pt,"line");F.classList.add(An("ax")),F.setAttributeNS(null,"x1","50%"),F.setAttributeNS(null,"y1","0"),F.setAttributeNS(null,"x2","50%"),F.setAttributeNS(null,"y2","100%"),this.svgElem_.appendChild(F);const rt=n.createElementNS(pt,"line");rt.classList.add(An("l")),rt.setAttributeNS(null,"x1","50%"),rt.setAttributeNS(null,"y1","50%"),this.svgElem_.appendChild(rt),this.lineElem_=rt;const Mt=n.createElement("div");Mt.classList.add(An("m")),this.padElement.appendChild(Mt),this.markerElem_=Mt,r.value.emitter.on("change",this.onValueChange_),this.value=r.value,this.update_()}get allFocusableElements(){return[this.padElement]}update_(){const[n,r]=this.value.rawValue.getComponents(),u=this.maxValue_,_=te(n,-u,+u,0,100),D=te(r,-u,+u,0,100),F=this.invertsY_?100-D:D;this.lineElem_.setAttributeNS(null,"x2",`${_}%`),this.lineElem_.setAttributeNS(null,"y2",`${F}%`),this.markerElem_.style.left=`${_}%`,this.markerElem_.style.top=`${F}%`}onValueChange_(){this.update_()}onFoldableChange_(){this.update_()}}function ka(o,n,r){return[De(n[0],hn(o)),De(n[1],Qi(o))*(r?1:-1)]}class rd{constructor(n,r){this.onPadKeyDown_=this.onPadKeyDown_.bind(this),this.onPadKeyUp_=this.onPadKeyUp_.bind(this),this.onPointerDown_=this.onPointerDown_.bind(this),this.onPointerMove_=this.onPointerMove_.bind(this),this.onPointerUp_=this.onPointerUp_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.baseSteps_=r.baseSteps,this.maxValue_=r.maxValue,this.invertsY_=r.invertsY,this.view=new id(n,{invertsY:this.invertsY_,layout:r.layout,maxValue:this.maxValue_,value:this.value,viewProps:this.viewProps}),this.ptHandler_=new zn(this.view.padElement),this.ptHandler_.emitter.on("down",this.onPointerDown_),this.ptHandler_.emitter.on("move",this.onPointerMove_),this.ptHandler_.emitter.on("up",this.onPointerUp_),this.view.padElement.addEventListener("keydown",this.onPadKeyDown_),this.view.padElement.addEventListener("keyup",this.onPadKeyUp_)}handlePointerEvent_(n,r){if(!n.point)return;const u=this.maxValue_,_=te(n.point.x,0,n.bounds.width,-u,+u),D=te(this.invertsY_?n.bounds.height-n.point.y:n.point.y,0,n.bounds.height,-u,+u);this.value.setRawValue(new Tn(_,D),r)}onPointerDown_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerMove_(n){this.handlePointerEvent_(n.data,{forceEmit:!1,last:!1})}onPointerUp_(n){this.handlePointerEvent_(n.data,{forceEmit:!0,last:!0})}onPadKeyDown_(n){ea(n.key)&&n.preventDefault();const[r,u]=ka(n,this.baseSteps_,this.invertsY_);r===0&&u===0||this.value.setRawValue(new Tn(this.value.rawValue.x+r,this.value.rawValue.y+u),{forceEmit:!1,last:!1})}onPadKeyUp_(n){const[r,u]=ka(n,this.baseSteps_,this.invertsY_);r===0&&u===0||this.value.setRawValue(this.value.rawValue,{forceEmit:!0,last:!0})}}class sd{constructor(n,r){var u,_;this.onPopupChildBlur_=this.onPopupChildBlur_.bind(this),this.onPopupChildKeydown_=this.onPopupChildKeydown_.bind(this),this.onPadButtonBlur_=this.onPadButtonBlur_.bind(this),this.onPadButtonClick_=this.onPadButtonClick_.bind(this),this.value=r.value,this.viewProps=r.viewProps,this.foldable_=mt.create(r.expanded),this.popC_=r.pickerLayout==="popup"?new qo(n,{viewProps:this.viewProps}):null;const D=new rd(n,{baseSteps:[r.axes[0].baseStep,r.axes[1].baseStep],invertsY:r.invertsY,layout:r.pickerLayout,maxValue:r.maxValue,value:this.value,viewProps:this.viewProps});D.view.allFocusableElements.forEach(F=>{F.addEventListener("blur",this.onPopupChildBlur_),F.addEventListener("keydown",this.onPopupChildKeydown_)}),this.pickerC_=D,this.textC_=new Rs(n,{assembly:Na,axes:r.axes,parser:r.parser,value:this.value,viewProps:this.viewProps}),this.view=new nd(n,{expanded:this.foldable_.value("expanded"),pickerLayout:r.pickerLayout,viewProps:this.viewProps}),this.view.textElement.appendChild(this.textC_.view.element),(u=this.view.buttonElement)===null||u===void 0||u.addEventListener("blur",this.onPadButtonBlur_),(_=this.view.buttonElement)===null||_===void 0||_.addEventListener("click",this.onPadButtonClick_),this.popC_?(this.view.element.appendChild(this.popC_.view.element),this.popC_.view.element.appendChild(this.pickerC_.view.element),Ji({primary:this.foldable_.value("expanded"),secondary:this.popC_.shows,forward:F=>F.rawValue,backward:(F,rt)=>rt.rawValue})):this.view.pickerElement&&(this.view.pickerElement.appendChild(this.pickerC_.view.element),wt(this.foldable_,this.view.pickerElement))}onPadButtonBlur_(n){if(!this.popC_)return;const r=this.view.element,u=n.relatedTarget;(!u||!r.contains(u))&&(this.popC_.shows.rawValue=!1)}onPadButtonClick_(){this.foldable_.set("expanded",!this.foldable_.get("expanded")),this.foldable_.get("expanded")&&this.pickerC_.view.allFocusableElements[0].focus()}onPopupChildBlur_(n){if(!this.popC_)return;const r=this.popC_.view.element,u=S(n);u&&r.contains(u)||u&&u===this.view.buttonElement&&!St(r.ownerDocument)||(this.popC_.shows.rawValue=!1)}onPopupChildKeydown_(n){this.popC_?n.key==="Escape"&&(this.popC_.shows.rawValue=!1):this.view.pickerElement&&n.key==="Escape"&&this.view.buttonElement.focus()}}function od(o){return Tn.isObject(o)?new Tn(o.x,o.y):new Tn}function ad(o,n){o.writeProperty("x",n.x),o.writeProperty("y",n.y)}function dn(o,n){if(!o)return;const r=[],u=Ra(o,n);u&&r.push(u);const _=Ia(o);return _&&r.push(_),new Xi(r)}function ld(o,n){return new Pn({assembly:Na,components:[dn("x"in o?o.x:void 0,n.x),dn("y"in o?o.y:void 0,n.y)]})}function Oa(o,n){var r,u;const _=o&&rn(o,ui);if(_)return Math.max(Math.abs((r=_.minValue)!==null&&r!==void 0?r:0),Math.abs((u=_.maxValue)!==null&&u!==void 0?u:0));const D=hi(o);return Math.max(Math.abs(D)*10,Math.abs(n)*10)}function cd(o,n){const r=n instanceof Pn?n.components[0]:void 0,u=n instanceof Pn?n.components[1]:void 0,_=Oa(r,o.x),D=Oa(u,o.y);return Math.max(_,D)}function Fa(o,n){return{baseStep:hi(n),constraint:n,textProps:X.fromObject({draggingScale:di(n,o),formatter:_e(Pr(n,o))})}}function ud(o){if(!("y"in o))return!1;const n=o.y;return n&&"inverted"in n?!!n.inverted:!1}const hd={id:"input-point2d",type:"input",accept:(o,n)=>{if(!Tn.isObject(o))return null;const r=Q,u=ut(n,{expanded:r.optional.boolean,picker:r.optional.custom(ra),x:r.optional.custom(Cn),y:r.optional.object({inverted:r.optional.boolean,max:r.optional.number,min:r.optional.number,step:r.optional.number})});return u?{initialValue:o,params:u}:null},binding:{reader:o=>od,constraint:o=>ld(o.params,o.initialValue),equals:Tn.equals,writer:o=>ad},controller:o=>{const n=o.document,r=o.value,u=o.constraint;if(!(u instanceof Pn))throw w.shouldNeverHappen();const _="expanded"in o.params?o.params.expanded:void 0,D="picker"in o.params?o.params.picker:void 0;return new sd(n,{axes:[Fa(r.rawValue.x,u.components[0]),Fa(r.rawValue.y,u.components[1])],expanded:_!=null?_:!1,invertsY:ud(o.params),maxValue:cd(r.rawValue,u),parser:un,pickerLayout:D!=null?D:"popup",value:r,viewProps:o.viewProps})}};class mi{constructor(n=0,r=0,u=0){this.x=n,this.y=r,this.z=u}getComponents(){return[this.x,this.y,this.z]}static isObject(n){if(m(n))return!1;const r=n.x,u=n.y,_=n.z;return!(typeof r!="number"||typeof u!="number"||typeof _!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y&&n.z===r.z}toObject(){return{x:this.x,y:this.y,z:this.z}}}const Va={toComponents:o=>o.getComponents(),fromComponents:o=>new mi(...o)};function dd(o){return mi.isObject(o)?new mi(o.x,o.y,o.z):new mi}function pd(o,n){o.writeProperty("x",n.x),o.writeProperty("y",n.y),o.writeProperty("z",n.z)}function fd(o,n){return new Pn({assembly:Va,components:[dn("x"in o?o.x:void 0,n.x),dn("y"in o?o.y:void 0,n.y),dn("z"in o?o.z:void 0,n.z)]})}function Is(o,n){return{baseStep:hi(n),constraint:n,textProps:X.fromObject({draggingScale:di(n,o),formatter:_e(Pr(n,o))})}}const md={id:"input-point3d",type:"input",accept:(o,n)=>{if(!mi.isObject(o))return null;const r=Q,u=ut(n,{x:r.optional.custom(Cn),y:r.optional.custom(Cn),z:r.optional.custom(Cn)});return u?{initialValue:o,params:u}:null},binding:{reader:o=>dd,constraint:o=>fd(o.params,o.initialValue),equals:mi.equals,writer:o=>pd},controller:o=>{const n=o.value,r=o.constraint;if(!(r instanceof Pn))throw w.shouldNeverHappen();return new Rs(o.document,{assembly:Va,axes:[Is(n.rawValue.x,r.components[0]),Is(n.rawValue.y,r.components[1]),Is(n.rawValue.z,r.components[2])],parser:un,value:n,viewProps:o.viewProps})}};class gi{constructor(n=0,r=0,u=0,_=0){this.x=n,this.y=r,this.z=u,this.w=_}getComponents(){return[this.x,this.y,this.z,this.w]}static isObject(n){if(m(n))return!1;const r=n.x,u=n.y,_=n.z,D=n.w;return!(typeof r!="number"||typeof u!="number"||typeof _!="number"||typeof D!="number")}static equals(n,r){return n.x===r.x&&n.y===r.y&&n.z===r.z&&n.w===r.w}toObject(){return{x:this.x,y:this.y,z:this.z,w:this.w}}}const Ua={toComponents:o=>o.getComponents(),fromComponents:o=>new gi(...o)};function gd(o){return gi.isObject(o)?new gi(o.x,o.y,o.z,o.w):new gi}function vd(o,n){o.writeProperty("x",n.x),o.writeProperty("y",n.y),o.writeProperty("z",n.z),o.writeProperty("w",n.w)}function _d(o,n){return new Pn({assembly:Ua,components:[dn("x"in o?o.x:void 0,n.x),dn("y"in o?o.y:void 0,n.y),dn("z"in o?o.z:void 0,n.z),dn("w"in o?o.w:void 0,n.w)]})}function xd(o,n){return{baseStep:hi(n),constraint:n,textProps:X.fromObject({draggingScale:di(n,o),formatter:_e(Pr(n,o))})}}const bd={id:"input-point4d",type:"input",accept:(o,n)=>{if(!gi.isObject(o))return null;const r=Q,u=ut(n,{x:r.optional.custom(Cn),y:r.optional.custom(Cn),z:r.optional.custom(Cn),w:r.optional.custom(Cn)});return u?{initialValue:o,params:u}:null},binding:{reader:o=>gd,constraint:o=>_d(o.params,o.initialValue),equals:gi.equals,writer:o=>vd},controller:o=>{const n=o.value,r=o.constraint;if(!(r instanceof Pn))throw w.shouldNeverHappen();return new Rs(o.document,{assembly:Ua,axes:n.rawValue.getComponents().map((u,_)=>xd(u,r.components[_])),parser:un,value:n,viewProps:o.viewProps})}};function wd(o){const n=[],r=xs(o.options);return r&&n.push(r),new Xi(n)}const yd={id:"input-string",type:"input",accept:(o,n)=>{if(typeof o!="string")return null;const u=ut(n,{options:Q.optional.custom(Er)});return u?{initialValue:o,params:u}:null},binding:{reader:o=>Qo,constraint:o=>wd(o.params),writer:o=>er},controller:o=>{var n;const r=o.document,u=o.value,_=o.constraint;return _&&rn(_,Yi)?new $i(r,{props:X.fromObject({options:(n=bs(_))!==null&&n!==void 0?n:[]}),value:u,viewProps:o.viewProps}):new Sr(r,{parser:D=>D,props:X.fromObject({formatter:fs}),value:u,viewProps:o.viewProps})}},ir={monitor:{defaultInterval:200,defaultLineCount:3}},za=C("mll");class Md{constructor(n,r){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=r.formatter,this.element=n.createElement("div"),this.element.classList.add(za()),r.viewProps.bindClassModifiers(this.element);const u=n.createElement("textarea");u.classList.add(za("i")),u.style.height=`calc(var(--bld-us) * ${r.lineCount})`,u.readOnly=!0,r.viewProps.bindDisabled(u),this.element.appendChild(u),this.textareaElem_=u,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}update_(){const n=this.textareaElem_,r=n.scrollTop===n.scrollHeight-n.clientHeight,u=[];this.value.rawValue.forEach(_=>{_!==void 0&&u.push(this.formatter_(_))}),n.textContent=u.join(`
`),r&&(n.scrollTop=n.scrollHeight)}onValueUpdate_(){this.update_()}}class Ns{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new Md(n,{formatter:r.formatter,lineCount:r.lineCount,value:this.value,viewProps:this.viewProps})}}const Ba=C("sgl");class Sd{constructor(n,r){this.onValueUpdate_=this.onValueUpdate_.bind(this),this.formatter_=r.formatter,this.element=n.createElement("div"),this.element.classList.add(Ba()),r.viewProps.bindClassModifiers(this.element);const u=n.createElement("input");u.classList.add(Ba("i")),u.readOnly=!0,u.type="text",r.viewProps.bindDisabled(u),this.element.appendChild(u),this.inputElement=u,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}update_(){const n=this.value.rawValue,r=n[n.length-1];this.inputElement.value=r!==void 0?this.formatter_(r):""}onValueUpdate_(){this.update_()}}class ks{constructor(n,r){this.value=r.value,this.viewProps=r.viewProps,this.view=new Sd(n,{formatter:r.formatter,value:this.value,viewProps:this.viewProps})}}const Cd={id:"monitor-bool",type:"monitor",accept:(o,n)=>{if(typeof o!="boolean")return null;const u=ut(n,{lineCount:Q.optional.number});return u?{initialValue:o,params:u}:null},binding:{reader:o=>Xo},controller:o=>{var n;return o.value.rawValue.length===1?new ks(o.document,{formatter:Yo,value:o.value,viewProps:o.viewProps}):new Ns(o.document,{formatter:Yo,lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:ir.monitor.defaultLineCount,value:o.value,viewProps:o.viewProps})}},Ln=C("grl");class Ed{constructor(n,r){this.onCursorChange_=this.onCursorChange_.bind(this),this.onValueUpdate_=this.onValueUpdate_.bind(this),this.element=n.createElement("div"),this.element.classList.add(Ln()),r.viewProps.bindClassModifiers(this.element),this.formatter_=r.formatter,this.props_=r.props,this.cursor_=r.cursor,this.cursor_.emitter.on("change",this.onCursorChange_);const u=n.createElementNS(pt,"svg");u.classList.add(Ln("g")),u.style.height=`calc(var(--bld-us) * ${r.lineCount})`,this.element.appendChild(u),this.svgElem_=u;const _=n.createElementNS(pt,"polyline");this.svgElem_.appendChild(_),this.lineElem_=_;const D=n.createElement("div");D.classList.add(Ln("t"),C("tt")()),this.element.appendChild(D),this.tooltipElem_=D,r.value.emitter.on("change",this.onValueUpdate_),this.value=r.value,this.update_()}get graphElement(){return this.svgElem_}update_(){const n=this.svgElem_.getBoundingClientRect(),r=this.value.rawValue.length-1,u=this.props_.get("minValue"),_=this.props_.get("maxValue"),D=[];this.value.rawValue.forEach((Xt,Yt)=>{if(Xt===void 0)return;const pn=te(Yt,0,r,0,n.width),rr=te(Xt,u,_,n.height,0);D.push([pn,rr].join(","))}),this.lineElem_.setAttributeNS(null,"points",D.join(" "));const F=this.tooltipElem_,rt=this.value.rawValue[this.cursor_.rawValue];if(rt===void 0){F.classList.remove(Ln("t","a"));return}const Mt=te(this.cursor_.rawValue,0,r,0,n.width),Rt=te(rt,u,_,n.height,0);F.style.left=`${Mt}px`,F.style.top=`${Rt}px`,F.textContent=`${this.formatter_(rt)}`,F.classList.contains(Ln("t","a"))||(F.classList.add(Ln("t","a"),Ln("t","in")),Ht(F),F.classList.remove(Ln("t","in")))}onValueUpdate_(){this.update_()}onCursorChange_(){this.update_()}}class Pd{constructor(n,r){if(this.onGraphMouseMove_=this.onGraphMouseMove_.bind(this),this.onGraphMouseLeave_=this.onGraphMouseLeave_.bind(this),this.onGraphPointerDown_=this.onGraphPointerDown_.bind(this),this.onGraphPointerMove_=this.onGraphPointerMove_.bind(this),this.onGraphPointerUp_=this.onGraphPointerUp_.bind(this),this.props_=r.props,this.value=r.value,this.viewProps=r.viewProps,this.cursor_=nt(-1),this.view=new Ed(n,{cursor:this.cursor_,formatter:r.formatter,lineCount:r.lineCount,props:this.props_,value:this.value,viewProps:this.viewProps}),!St(n))this.view.element.addEventListener("mousemove",this.onGraphMouseMove_),this.view.element.addEventListener("mouseleave",this.onGraphMouseLeave_);else{const u=new zn(this.view.element);u.emitter.on("down",this.onGraphPointerDown_),u.emitter.on("move",this.onGraphPointerMove_),u.emitter.on("up",this.onGraphPointerUp_)}}onGraphMouseLeave_(){this.cursor_.rawValue=-1}onGraphMouseMove_(n){const r=this.view.element.getBoundingClientRect();this.cursor_.rawValue=Math.floor(te(n.offsetX,0,r.width,0,this.value.rawValue.length))}onGraphPointerDown_(n){this.onGraphPointerMove_(n)}onGraphPointerMove_(n){if(!n.data.point){this.cursor_.rawValue=-1;return}this.cursor_.rawValue=Math.floor(te(n.data.point.x,0,n.data.bounds.width,0,this.value.rawValue.length))}onGraphPointerUp_(){this.cursor_.rawValue=-1}}function Os(o){return"format"in o&&!m(o.format)?o.format:_e(2)}function Td(o){var n;return o.value.rawValue.length===1?new ks(o.document,{formatter:Os(o.params),value:o.value,viewProps:o.viewProps}):new Ns(o.document,{formatter:Os(o.params),lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:ir.monitor.defaultLineCount,value:o.value,viewProps:o.viewProps})}function Ad(o){var n,r,u;return new Pd(o.document,{formatter:Os(o.params),lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:ir.monitor.defaultLineCount,props:X.fromObject({maxValue:(r="max"in o.params?o.params.max:null)!==null&&r!==void 0?r:100,minValue:(u="min"in o.params?o.params.min:null)!==null&&u!==void 0?u:0}),value:o.value,viewProps:o.viewProps})}function Ga(o){return"view"in o&&o.view==="graph"}const Ld={id:"monitor-number",type:"monitor",accept:(o,n)=>{if(typeof o!="number")return null;const r=Q,u=ut(n,{format:r.optional.function,lineCount:r.optional.number,max:r.optional.number,min:r.optional.number,view:r.optional.string});return u?{initialValue:o,params:u}:null},binding:{defaultBufferSize:o=>Ga(o)?64:1,reader:o=>Jo},controller:o=>Ga(o.params)?Ad(o):Td(o)},Dd={id:"monitor-string",type:"monitor",accept:(o,n)=>{if(typeof o!="string")return null;const r=Q,u=ut(n,{lineCount:r.optional.number,multiline:r.optional.boolean});return u?{initialValue:o,params:u}:null},binding:{reader:o=>Qo},controller:o=>{var n;const r=o.value;return r.rawValue.length>1||"multiline"in o.params&&o.params.multiline?new Ns(o.document,{formatter:fs,lineCount:(n=o.params.lineCount)!==null&&n!==void 0?n:ir.monitor.defaultLineCount,value:r,viewProps:o.viewProps}):new ks(o.document,{formatter:fs,value:r,viewProps:o.viewProps})}};class Rd{constructor(n){this.onValueChange_=this.onValueChange_.bind(this),this.reader=n.reader,this.writer=n.writer,this.emitter=new y,this.value=n.value,this.value.emitter.on("change",this.onValueChange_),this.target=n.target,this.read()}read(){const n=this.target.read();n!==void 0&&(this.value.rawValue=this.reader(n))}write_(n){this.writer(this.target,n)}onValueChange_(n){this.write_(n.rawValue),this.emitter.emit("change",{options:n.options,rawValue:n.rawValue,sender:this})}}function Id(o,n){const r=o.accept(n.target.read(),n.params);if(m(r))return null;const u=Q,_={target:n.target,initialValue:r.initialValue,params:r.params},D=o.binding.reader(_),F=o.binding.constraint?o.binding.constraint(_):void 0,rt=nt(D(r.initialValue),{constraint:F,equals:o.binding.equals}),Mt=new Rd({reader:D,target:n.target,value:rt,writer:o.binding.writer(_)}),Rt=u.optional.boolean(n.params.disabled).value,Xt=u.optional.boolean(n.params.hidden).value,Yt=o.controller({constraint:F,document:n.document,initialValue:r.initialValue,params:r.params,value:Mt.value,viewProps:he.create({disabled:Rt,hidden:Xt})}),pn=u.optional.string(n.params.label).value;return new ht(n.document,{binding:Mt,blade:V(),props:X.fromObject({label:pn!=null?pn:n.target.key}),valueController:Yt})}class Nd{constructor(n){this.onTick_=this.onTick_.bind(this),this.reader_=n.reader,this.target=n.target,this.emitter=new y,this.value=n.value,this.ticker=n.ticker,this.ticker.emitter.on("tick",this.onTick_),this.read()}dispose(){this.ticker.dispose()}read(){const n=this.target.read();if(n===void 0)return;const r=this.value.rawValue,u=this.reader_(n);this.value.rawValue=Nu(r,u),this.emitter.emit("update",{rawValue:u,sender:this})}onTick_(n){this.read()}}function kd(o,n){return n===0?new yr:new Qc(o,n!=null?n:ir.monitor.defaultInterval)}function Od(o,n){var r,u,_;const D=Q,F=o.accept(n.target.read(),n.params);if(m(F))return null;const rt={target:n.target,initialValue:F.initialValue,params:F.params},Mt=o.binding.reader(rt),Rt=(u=(r=D.optional.number(n.params.bufferSize).value)!==null&&r!==void 0?r:o.binding.defaultBufferSize&&o.binding.defaultBufferSize(F.params))!==null&&u!==void 0?u:1,Xt=D.optional.number(n.params.interval).value,Yt=new Nd({reader:Mt,target:n.target,ticker:kd(n.document,Xt),value:Ru(Rt)}),pn=D.optional.boolean(n.params.disabled).value,rr=D.optional.boolean(n.params.hidden).value,sr=o.controller({document:n.document,params:F.params,value:Yt.value,viewProps:he.create({disabled:pn,hidden:rr})}),vi=(_=D.optional.string(n.params.label).value)!==null&&_!==void 0?_:n.target.key;return new kt(n.document,{binding:Yt,blade:V(),props:X.fromObject({label:vi}),valueController:sr})}class Fd{constructor(){this.pluginsMap_={blades:[],inputs:[],monitors:[]}}getAll(){return[...this.pluginsMap_.blades,...this.pluginsMap_.inputs,...this.pluginsMap_.monitors]}register(n){n.type==="blade"?this.pluginsMap_.blades.unshift(n):n.type==="input"?this.pluginsMap_.inputs.unshift(n):n.type==="monitor"&&this.pluginsMap_.monitors.unshift(n)}createInput(n,r,u){const _=r.read();if(m(_))throw new w({context:{key:r.key},type:"nomatchingcontroller"});const D=this.pluginsMap_.inputs.reduce((F,rt)=>F!=null?F:Id(rt,{document:n,target:r,params:u}),null);if(D)return D;throw new w({context:{key:r.key},type:"nomatchingcontroller"})}createMonitor(n,r,u){const _=this.pluginsMap_.monitors.reduce((D,F)=>D!=null?D:Od(F,{document:n,params:u,target:r}),null);if(_)return _;throw new w({context:{key:r.key},type:"nomatchingcontroller"})}createBlade(n,r){const u=this.pluginsMap_.blades.reduce((_,D)=>_!=null?_:us(D,{document:n,params:r}),null);if(!u)throw new w({type:"nomatchingview",context:{params:r}});return u}createBladeApi(n){if(n instanceof ht)return new ot(n);if(n instanceof kt)return new yt(n);if(n instanceof U)return new Kt(n,this);const r=this.pluginsMap_.blades.reduce((u,_)=>u!=null?u:_.api({controller:n,pool:this}),null);if(!r)throw w.shouldNeverHappen();return r}}function Vd(){const o=new Fd;return[hd,md,bd,yd,ed,$h,Yh,Wh,Wu,Cd,Dd,Ld,Tt,Nt,ln,ci].forEach(n=>{o.register(n)}),o}class Ha extends s{constructor(n){super(n),this.emitter_=new y,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get options(){return this.controller_.valueController.props.get("options")}set options(n){this.controller_.valueController.props.set("options",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const u=r.bind(this);return this.emitter_.on(n,_=>{u(_.event)}),this}}class Wa extends s{constructor(n){super(n),this.emitter_=new y,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get maxValue(){return this.controller_.valueController.sliderController.props.get("maxValue")}set maxValue(n){this.controller_.valueController.sliderController.props.set("maxValue",n)}get minValue(){return this.controller_.valueController.sliderController.props.get("minValue")}set minValue(n){this.controller_.valueController.sliderController.props.set("minValue",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const u=r.bind(this);return this.emitter_.on(n,_=>{u(_.event)}),this}}class qa extends s{constructor(n){super(n),this.emitter_=new y,this.controller_.valueController.value.emitter.on("change",r=>{this.emitter_.emit("change",{event:new h(this,r.rawValue)})})}get label(){return this.controller_.props.get("label")}set label(n){this.controller_.props.set("label",n)}get formatter(){return this.controller_.valueController.props.get("formatter")}set formatter(n){this.controller_.valueController.props.set("formatter",n)}get value(){return this.controller_.valueController.value.rawValue}set value(n){this.controller_.valueController.value.rawValue=n}on(n,r){const u=r.bind(this);return this.emitter_.on(n,_=>{u(_.event)}),this}}const Ud=function(){return{id:"list",type:"blade",accept(o){const n=Q,r=ut(o,{options:n.required.custom(Er),value:n.required.raw,view:n.required.constant("list"),label:n.optional.string});return r?{params:r}:null},controller(o){const n=new $i(o.document,{props:X.fromObject({options:sa(o.params.options)}),value:nt(o.params.value),viewProps:o.viewProps});return new Dt(o.document,{blade:o.blade,props:X.fromObject({label:o.params.label}),valueController:n})},api(o){return!(o.controller instanceof Dt)||!(o.controller.valueController instanceof $i)?null:new Ha(o.controller)}}}();function zd(o){return o.reduce((n,r)=>Object.assign(n,{[r.presetKey]:r.read()}),{})}function Bd(o,n){o.forEach(r=>{const u=n[r.presetKey];u!==void 0&&r.write(u)})}class Gd extends Ie{constructor(n,r){super(n,r)}get element(){return this.controller_.view.element}importPreset(n){const r=this.controller_.rackController.rack.find(ht).map(u=>u.binding.target);Bd(r,n),this.refresh()}exportPreset(){const n=this.controller_.rackController.rack.find(ht).map(r=>r.binding.target);return zd(n)}refresh(){this.controller_.rackController.rack.find(ht).forEach(n=>{n.binding.read()}),this.controller_.rackController.rack.find(kt).forEach(n=>{n.binding.read()})}}class Hd extends Lt{constructor(n,r){super(n,{expanded:r.expanded,blade:r.blade,props:r.props,root:!0,viewProps:r.viewProps})}}const Wd={id:"slider",type:"blade",accept(o){const n=Q,r=ut(o,{max:n.required.number,min:n.required.number,view:n.required.constant("slider"),format:n.optional.function,label:n.optional.string,value:n.optional.number});return r?{params:r}:null},controller(o){var n,r;const u=(n=o.params.value)!==null&&n!==void 0?n:0,_=new _s(o.document,{baseStep:1,parser:un,sliderProps:X.fromObject({maxValue:o.params.max,minValue:o.params.min}),textProps:X.fromObject({draggingScale:di(void 0,u),formatter:(r=o.params.format)!==null&&r!==void 0?r:Lu}),value:nt(u),viewProps:o.viewProps});return new Dt(o.document,{blade:o.blade,props:X.fromObject({label:o.params.label}),valueController:_})},api(o){return!(o.controller instanceof Dt)||!(o.controller.valueController instanceof _s)?null:new Wa(o.controller)}},qd=function(){return{id:"text",type:"blade",accept(o){const n=Q,r=ut(o,{parse:n.required.function,value:n.required.raw,view:n.required.constant("text"),format:n.optional.function,label:n.optional.string});return r?{params:r}:null},controller(o){var n;const r=new Sr(o.document,{parser:o.params.parse,props:X.fromObject({formatter:(n=o.params.format)!==null&&n!==void 0?n:u=>String(u)}),value:nt(o.params.value),viewProps:o.viewProps});return new Dt(o.document,{blade:o.blade,props:X.fromObject({label:o.params.label}),valueController:r})},api(o){return!(o.controller instanceof Dt)||!(o.controller.valueController instanceof Sr)?null:new qa(o.controller)}}}();function jd(o){const n=o.createElement("div");return n.classList.add(C("dfw")()),o.body&&o.body.appendChild(n),n}function ja(o,n,r){if(o.querySelector(`style[data-tp-style=${n}]`))return;const u=o.createElement("style");u.dataset.tpStyle=n,u.textContent=r,o.head.appendChild(u)}class Xd extends Gd{constructor(n){var r,u;const _=n!=null?n:{},D=(r=_.document)!==null&&r!==void 0?r:le(),F=Vd(),rt=new Hd(D,{expanded:_.expanded,blade:V(),props:X.fromObject({title:_.title}),viewProps:he.create()});super(rt,F),this.pool_=F,this.containerElem_=(u=_.container)!==null&&u!==void 0?u:jd(D),this.containerElem_.appendChild(this.element),this.doc_=D,this.usesDefaultWrapper_=!_.container,this.setUpDefaultPlugins_()}get document(){if(!this.doc_)throw w.alreadyDisposed();return this.doc_}dispose(){const n=this.containerElem_;if(!n)throw w.alreadyDisposed();if(this.usesDefaultWrapper_){const r=n.parentElement;r&&r.removeChild(n)}this.containerElem_=null,this.doc_=null,super.dispose()}registerPlugin(n){("plugin"in n?[n.plugin]:"plugins"in n?n.plugins:[]).forEach(u=>{this.pool_.register(u),this.embedPluginStyle_(u)})}embedPluginStyle_(n){n.css&&ja(this.document,`plugin-${n.id}`,n.css)}setUpDefaultPlugins_(){ja(this.document,"default",'.tp-tbiv_b,.tp-coltxtv_ms,.tp-ckbv_i,.tp-rotv_b,.tp-fldv_b,.tp-mllv_i,.tp-sglv_i,.tp-grlv_g,.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw,.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;outline:none;padding:0}.tp-p2dv_b,.tp-btnv_b,.tp-lstv_s{background-color:var(--btn-bg);border-radius:var(--elm-br);color:var(--btn-fg);cursor:pointer;display:block;font-weight:bold;height:var(--bld-us);line-height:var(--bld-us);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.tp-p2dv_b:hover,.tp-btnv_b:hover,.tp-lstv_s:hover{background-color:var(--btn-bg-h)}.tp-p2dv_b:focus,.tp-btnv_b:focus,.tp-lstv_s:focus{background-color:var(--btn-bg-f)}.tp-p2dv_b:active,.tp-btnv_b:active,.tp-lstv_s:active{background-color:var(--btn-bg-a)}.tp-p2dv_b:disabled,.tp-btnv_b:disabled,.tp-lstv_s:disabled{opacity:.5}.tp-txtv_i,.tp-p2dpv_p,.tp-colswv_sw{background-color:var(--in-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--in-fg);font-family:inherit;height:var(--bld-us);line-height:var(--bld-us);min-width:0;width:100%}.tp-txtv_i:hover,.tp-p2dpv_p:hover,.tp-colswv_sw:hover{background-color:var(--in-bg-h)}.tp-txtv_i:focus,.tp-p2dpv_p:focus,.tp-colswv_sw:focus{background-color:var(--in-bg-f)}.tp-txtv_i:active,.tp-p2dpv_p:active,.tp-colswv_sw:active{background-color:var(--in-bg-a)}.tp-txtv_i:disabled,.tp-p2dpv_p:disabled,.tp-colswv_sw:disabled{opacity:.5}.tp-mllv_i,.tp-sglv_i,.tp-grlv_g{background-color:var(--mo-bg);border-radius:var(--elm-br);box-sizing:border-box;color:var(--mo-fg);height:var(--bld-us);scrollbar-color:currentColor transparent;scrollbar-width:thin;width:100%}.tp-mllv_i::-webkit-scrollbar,.tp-sglv_i::-webkit-scrollbar,.tp-grlv_g::-webkit-scrollbar{height:8px;width:8px}.tp-mllv_i::-webkit-scrollbar-corner,.tp-sglv_i::-webkit-scrollbar-corner,.tp-grlv_g::-webkit-scrollbar-corner{background-color:transparent}.tp-mllv_i::-webkit-scrollbar-thumb,.tp-sglv_i::-webkit-scrollbar-thumb,.tp-grlv_g::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:currentColor;border:transparent solid 2px;border-radius:4px}.tp-rotv{--font-family: var(--tp-font-family, Roboto Mono, Source Code Pro, Menlo, Courier, monospace);--bs-br: var(--tp-base-border-radius, 6px);--cnt-h-p: var(--tp-container-horizontal-padding, 4px);--cnt-v-p: var(--tp-container-vertical-padding, 4px);--elm-br: var(--tp-element-border-radius, 2px);--bld-s: var(--tp-blade-spacing, 4px);--bld-us: var(--tp-blade-unit-size, 20px);--bs-bg: var(--tp-base-background-color, #28292e);--bs-sh: var(--tp-base-shadow-color, rgba(0, 0, 0, 0.2));--btn-bg: var(--tp-button-background-color, #adafb8);--btn-bg-a: var(--tp-button-background-color-active, #d6d7db);--btn-bg-f: var(--tp-button-background-color-focus, #c8cad0);--btn-bg-h: var(--tp-button-background-color-hover, #bbbcc4);--btn-fg: var(--tp-button-foreground-color, #28292e);--cnt-bg: var(--tp-container-background-color, rgba(187, 188, 196, 0.1));--cnt-bg-a: var(--tp-container-background-color-active, rgba(187, 188, 196, 0.25));--cnt-bg-f: var(--tp-container-background-color-focus, rgba(187, 188, 196, 0.2));--cnt-bg-h: var(--tp-container-background-color-hover, rgba(187, 188, 196, 0.15));--cnt-fg: var(--tp-container-foreground-color, #bbbcc4);--in-bg: var(--tp-input-background-color, rgba(187, 188, 196, 0.1));--in-bg-a: var(--tp-input-background-color-active, rgba(187, 188, 196, 0.25));--in-bg-f: var(--tp-input-background-color-focus, rgba(187, 188, 196, 0.2));--in-bg-h: var(--tp-input-background-color-hover, rgba(187, 188, 196, 0.15));--in-fg: var(--tp-input-foreground-color, #bbbcc4);--lbl-fg: var(--tp-label-foreground-color, rgba(187, 188, 196, 0.7));--mo-bg: var(--tp-monitor-background-color, rgba(0, 0, 0, 0.2));--mo-fg: var(--tp-monitor-foreground-color, rgba(187, 188, 196, 0.7));--grv-fg: var(--tp-groove-foreground-color, rgba(187, 188, 196, 0.1))}.tp-rotv_c>.tp-cntv.tp-v-lst,.tp-tabv_c .tp-brkv>.tp-cntv.tp-v-lst,.tp-fldv_c>.tp-cntv.tp-v-lst{margin-bottom:calc(-1*var(--cnt-v-p))}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_c,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_c{border-bottom-left-radius:0}.tp-rotv_c>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-tabv_c .tp-brkv>.tp-fldv.tp-v-lst .tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-v-lst .tp-fldv_b{border-bottom-left-radius:0}.tp-rotv_c>*:not(.tp-v-fst),.tp-tabv_c .tp-brkv>*:not(.tp-v-fst),.tp-fldv_c>*:not(.tp-v-fst){margin-top:var(--bld-s)}.tp-rotv_c>.tp-sprv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-fst),.tp-fldv_c>.tp-sprv:not(.tp-v-fst),.tp-rotv_c>.tp-cntv:not(.tp-v-fst),.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-fst),.tp-fldv_c>.tp-cntv:not(.tp-v-fst){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-sprv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-sprv+*:not(.tp-v-hidden),.tp-rotv_c>.tp-cntv+*:not(.tp-v-hidden),.tp-tabv_c .tp-brkv>.tp-cntv+*:not(.tp-v-hidden),.tp-fldv_c>.tp-cntv+*:not(.tp-v-hidden){margin-top:var(--cnt-v-p)}.tp-rotv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-tabv_c .tp-brkv>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-fldv_c>.tp-sprv:not(.tp-v-hidden)+.tp-sprv,.tp-rotv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-tabv_c .tp-brkv>.tp-cntv:not(.tp-v-hidden)+.tp-cntv,.tp-fldv_c>.tp-cntv:not(.tp-v-hidden)+.tp-cntv{margin-top:0}.tp-tabv_c .tp-brkv>.tp-cntv,.tp-fldv_c>.tp-cntv{margin-left:4px}.tp-tabv_c .tp-brkv>.tp-fldv>.tp-fldv_b,.tp-fldv_c>.tp-fldv>.tp-fldv_b{border-top-left-radius:var(--elm-br);border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-fldv.tp-fldv-expanded>.tp-fldv_b,.tp-fldv_c>.tp-fldv.tp-fldv-expanded>.tp-fldv_b{border-bottom-left-radius:0}.tp-tabv_c .tp-brkv .tp-fldv>.tp-fldv_c,.tp-fldv_c .tp-fldv>.tp-fldv_c{border-bottom-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv>.tp-tabv>.tp-tabv_i,.tp-fldv_c>.tp-tabv>.tp-tabv_i{border-top-left-radius:var(--elm-br)}.tp-tabv_c .tp-brkv .tp-tabv>.tp-tabv_c,.tp-fldv_c .tp-tabv>.tp-tabv_c{border-bottom-left-radius:var(--elm-br)}.tp-rotv_b,.tp-fldv_b{background-color:var(--cnt-bg);color:var(--cnt-fg);cursor:pointer;display:block;height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);overflow:hidden;padding-left:var(--cnt-h-p);padding-right:calc(4px + var(--bld-us) + var(--cnt-h-p));position:relative;text-align:left;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:border-radius .2s ease-in-out .2s}.tp-rotv_b:hover,.tp-fldv_b:hover{background-color:var(--cnt-bg-h)}.tp-rotv_b:focus,.tp-fldv_b:focus{background-color:var(--cnt-bg-f)}.tp-rotv_b:active,.tp-fldv_b:active{background-color:var(--cnt-bg-a)}.tp-rotv_b:disabled,.tp-fldv_b:disabled{opacity:.5}.tp-rotv_m,.tp-fldv_m{background:linear-gradient(to left, var(--cnt-fg), var(--cnt-fg) 2px, transparent 2px, transparent 4px, var(--cnt-fg) 4px);border-radius:2px;bottom:0;content:"";display:block;height:6px;right:calc(var(--cnt-h-p) + (var(--bld-us) + 4px - 6px)/2 - 2px);margin:auto;opacity:.5;position:absolute;top:0;transform:rotate(90deg);transition:transform .2s ease-in-out;width:6px}.tp-rotv.tp-rotv-expanded .tp-rotv_m,.tp-fldv.tp-fldv-expanded>.tp-fldv_b>.tp-fldv_m{transform:none}.tp-rotv_c,.tp-fldv_c{box-sizing:border-box;height:0;opacity:0;overflow:hidden;padding-bottom:0;padding-top:0;position:relative;transition:height .2s ease-in-out,opacity .2s linear,padding .2s ease-in-out}.tp-rotv.tp-rotv-cpl:not(.tp-rotv-expanded) .tp-rotv_c,.tp-fldv.tp-fldv-cpl:not(.tp-fldv-expanded)>.tp-fldv_c{display:none}.tp-rotv.tp-rotv-expanded .tp-rotv_c,.tp-fldv.tp-fldv-expanded>.tp-fldv_c{opacity:1;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p);transform:none;overflow:visible;transition:height .2s ease-in-out,opacity .2s linear .2s,padding .2s ease-in-out}.tp-lstv,.tp-coltxtv_m{position:relative}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m,.tp-coltxtv_mm{bottom:0;margin:auto;pointer-events:none;position:absolute;right:2px;top:0}.tp-lstv_m svg,.tp-coltxtv_mm svg{bottom:0;height:16px;margin:auto;position:absolute;right:0;top:0;width:16px}.tp-lstv_m svg path,.tp-coltxtv_mm svg path{fill:currentColor}.tp-pndtxtv,.tp-coltxtv_w{display:flex}.tp-pndtxtv_a,.tp-coltxtv_c{width:100%}.tp-pndtxtv_a+.tp-pndtxtv_a,.tp-coltxtv_c+.tp-pndtxtv_a,.tp-pndtxtv_a+.tp-coltxtv_c,.tp-coltxtv_c+.tp-coltxtv_c{margin-left:2px}.tp-btnv_b{width:100%}.tp-btnv_t{text-align:center}.tp-ckbv_l{display:block;position:relative}.tp-ckbv_i{left:0;opacity:0;position:absolute;top:0}.tp-ckbv_w{background-color:var(--in-bg);border-radius:var(--elm-br);cursor:pointer;display:block;height:var(--bld-us);position:relative;width:var(--bld-us)}.tp-ckbv_w svg{bottom:0;display:block;height:16px;left:0;margin:auto;opacity:0;position:absolute;right:0;top:0;width:16px}.tp-ckbv_w svg path{fill:none;stroke:var(--in-fg);stroke-width:2}.tp-ckbv_i:hover+.tp-ckbv_w{background-color:var(--in-bg-h)}.tp-ckbv_i:focus+.tp-ckbv_w{background-color:var(--in-bg-f)}.tp-ckbv_i:active+.tp-ckbv_w{background-color:var(--in-bg-a)}.tp-ckbv_i:checked+.tp-ckbv_w svg{opacity:1}.tp-ckbv.tp-v-disabled .tp-ckbv_w{opacity:.5}.tp-colv{position:relative}.tp-colv_h{display:flex}.tp-colv_s{flex-grow:0;flex-shrink:0;width:var(--bld-us)}.tp-colv_t{flex:1;margin-left:4px}.tp-colv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-colv.tp-colv-cpl .tp-colv_p{overflow:visible}.tp-colv.tp-colv-expanded .tp-colv_p{margin-top:var(--bld-s);opacity:1}.tp-colv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-colpv_h,.tp-colpv_ap{margin-left:6px;margin-right:6px}.tp-colpv_h{margin-top:var(--bld-s)}.tp-colpv_rgb{display:flex;margin-top:var(--bld-s);width:100%}.tp-colpv_a{display:flex;margin-top:var(--cnt-v-p);padding-top:calc(var(--cnt-v-p) + 2px);position:relative}.tp-colpv_a:before{background-color:var(--grv-fg);content:"";height:2px;left:calc(-1*var(--cnt-h-p));position:absolute;right:calc(-1*var(--cnt-h-p));top:0}.tp-colpv_ap{align-items:center;display:flex;flex:3}.tp-colpv_at{flex:1;margin-left:4px}.tp-svpv{border-radius:var(--elm-br);outline:none;overflow:hidden;position:relative}.tp-svpv_c{cursor:crosshair;display:block;height:calc(var(--bld-us)*4);width:100%}.tp-svpv_m{border-radius:100%;border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.3));height:12px;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;width:12px}.tp-svpv:focus .tp-svpv_m{border-color:#fff}.tp-hplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative}.tp-hplv_c{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAABCAYAAABubagXAAAAQ0lEQVQoU2P8z8Dwn0GCgQEDi2OK/RBgYHjBgIpfovFh8j8YBIgzFGQxuqEgPhaDOT5gOhPkdCxOZeBg+IDFZZiGAgCaSSMYtcRHLgAAAABJRU5ErkJggg==);background-position:left top;background-repeat:no-repeat;background-size:100% 100%;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;position:absolute;top:50%;width:100%}.tp-hplv_m{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-shadow:0 0 2px rgba(0,0,0,.1);box-sizing:border-box;height:12px;left:50%;margin-left:-6px;margin-top:-6px;pointer-events:none;position:absolute;top:50%;width:12px}.tp-hplv:focus .tp-hplv_m{border-color:#fff}.tp-aplv{cursor:pointer;height:var(--bld-us);outline:none;position:relative;width:100%}.tp-aplv_b{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:4px 4px;background-position:0 0,2px 2px;border-radius:2px;display:block;height:4px;left:0;margin-top:-2px;overflow:hidden;position:absolute;top:50%;width:100%}.tp-aplv_c{bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv_m{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:12px 12px;background-position:0 0,6px 6px;border-radius:var(--elm-br);box-shadow:0 0 2px rgba(0,0,0,.1);height:12px;left:50%;margin-left:-6px;margin-top:-6px;overflow:hidden;pointer-events:none;position:absolute;top:50%;width:12px}.tp-aplv_p{border-radius:var(--elm-br);border:rgba(255,255,255,.75) solid 2px;box-sizing:border-box;bottom:0;left:0;position:absolute;right:0;top:0}.tp-aplv:focus .tp-aplv_p{border-color:#fff}.tp-colswv{background-color:#fff;background-image:linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%),linear-gradient(to top right, #ddd 25%, transparent 25%, transparent 75%, #ddd 75%);background-size:10px 10px;background-position:0 0,5px 5px;border-radius:var(--elm-br);overflow:hidden}.tp-colswv.tp-v-disabled{opacity:.5}.tp-colswv_sw{border-radius:0}.tp-colswv_b{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border-width:0;cursor:pointer;display:block;height:var(--bld-us);left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:var(--bld-us)}.tp-colswv_b:focus::after{border:rgba(255,255,255,.75) solid 2px;border-radius:var(--elm-br);bottom:0;content:"";display:block;left:0;position:absolute;right:0;top:0}.tp-coltxtv{display:flex;width:100%}.tp-coltxtv_m{margin-right:4px}.tp-coltxtv_ms{border-radius:var(--elm-br);color:var(--lbl-fg);cursor:pointer;height:var(--bld-us);line-height:var(--bld-us);padding:0 18px 0 4px}.tp-coltxtv_ms:hover{background-color:var(--in-bg-h)}.tp-coltxtv_ms:focus{background-color:var(--in-bg-f)}.tp-coltxtv_ms:active{background-color:var(--in-bg-a)}.tp-coltxtv_mm{color:var(--lbl-fg)}.tp-coltxtv_w{flex:1}.tp-dfwv{position:absolute;top:8px;right:8px;width:256px}.tp-fldv.tp-fldv-not .tp-fldv_b{display:none}.tp-fldv_t{padding-left:4px}.tp-fldv_c{border-left:var(--cnt-bg) solid 4px}.tp-fldv_b:hover+.tp-fldv_c{border-left-color:var(--cnt-bg-h)}.tp-fldv_b:focus+.tp-fldv_c{border-left-color:var(--cnt-bg-f)}.tp-fldv_b:active+.tp-fldv_c{border-left-color:var(--cnt-bg-a)}.tp-grlv{position:relative}.tp-grlv_g{display:block;height:calc(var(--bld-us)*3)}.tp-grlv_g polyline{fill:none;stroke:var(--mo-fg);stroke-linejoin:round}.tp-grlv_t{margin-top:-4px;transition:left .05s,top .05s;visibility:hidden}.tp-grlv_t.tp-grlv_t-a{visibility:visible}.tp-grlv_t.tp-grlv_t-in{transition:none}.tp-grlv.tp-v-disabled .tp-grlv_g{opacity:.5}.tp-grlv .tp-ttv{background-color:var(--mo-fg)}.tp-grlv .tp-ttv::before{border-top-color:var(--mo-fg)}.tp-lblv{align-items:center;display:flex;line-height:1.3;padding-left:var(--cnt-h-p);padding-right:var(--cnt-h-p)}.tp-lblv.tp-lblv-nol{display:block}.tp-lblv_l{color:var(--lbl-fg);flex:1;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto;overflow:hidden;padding-left:4px;padding-right:16px}.tp-lblv.tp-v-disabled .tp-lblv_l{opacity:.5}.tp-lblv.tp-lblv-nol .tp-lblv_l{display:none}.tp-lblv_v{align-self:flex-start;flex-grow:0;flex-shrink:0;width:160px}.tp-lblv.tp-lblv-nol .tp-lblv_v{width:100%}.tp-lstv_s{padding:0 20px 0 4px;width:100%}.tp-lstv_m{color:var(--btn-fg)}.tp-sglv_i{padding:0 4px}.tp-sglv.tp-v-disabled .tp-sglv_i{opacity:.5}.tp-mllv_i{display:block;height:calc(var(--bld-us)*3);line-height:var(--bld-us);padding:0 4px;resize:none;white-space:pre}.tp-mllv.tp-v-disabled .tp-mllv_i{opacity:.5}.tp-p2dv{position:relative}.tp-p2dv_h{display:flex}.tp-p2dv_b{height:var(--bld-us);margin-right:4px;position:relative;width:var(--bld-us)}.tp-p2dv_b svg{display:block;height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.tp-p2dv_b svg path{stroke:currentColor;stroke-width:2}.tp-p2dv_b svg circle{fill:currentColor}.tp-p2dv_t{flex:1}.tp-p2dv_p{height:0;margin-top:0;opacity:0;overflow:hidden;transition:height .2s ease-in-out,opacity .2s linear,margin .2s ease-in-out}.tp-p2dv.tp-p2dv-expanded .tp-p2dv_p{margin-top:var(--bld-s);opacity:1}.tp-p2dv .tp-popv{left:calc(-1*var(--cnt-h-p));right:calc(-1*var(--cnt-h-p));top:var(--bld-us)}.tp-p2dpv{padding-left:calc(var(--bld-us) + 4px)}.tp-p2dpv_p{cursor:crosshair;height:0;overflow:hidden;padding-bottom:100%;position:relative}.tp-p2dpv_g{display:block;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.tp-p2dpv_ax{opacity:.1;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_l{opacity:.5;stroke:var(--in-fg);stroke-dasharray:1}.tp-p2dpv_m{border:var(--in-fg) solid 1px;border-radius:50%;box-sizing:border-box;height:4px;margin-left:-2px;margin-top:-2px;position:absolute;width:4px}.tp-p2dpv_p:focus .tp-p2dpv_m{background-color:var(--in-fg);border-width:0}.tp-popv{background-color:var(--bs-bg);border-radius:6px;box-shadow:0 2px 4px var(--bs-sh);display:none;max-width:168px;padding:var(--cnt-v-p) var(--cnt-h-p);position:absolute;visibility:hidden;z-index:1000}.tp-popv.tp-popv-v{display:block;visibility:visible}.tp-sprv_r{background-color:var(--grv-fg);border-width:0;display:block;height:2px;margin:0;width:100%}.tp-sldv.tp-v-disabled{opacity:.5}.tp-sldv_t{box-sizing:border-box;cursor:pointer;height:var(--bld-us);margin:0 6px;outline:none;position:relative}.tp-sldv_t::before{background-color:var(--in-bg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin:auto;position:absolute;right:0;top:0}.tp-sldv_k{height:100%;left:0;position:absolute;top:0}.tp-sldv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";display:block;height:2px;left:0;margin-bottom:auto;margin-top:auto;position:absolute;right:0;top:0}.tp-sldv_k::after{background-color:var(--btn-bg);border-radius:var(--elm-br);bottom:0;content:"";display:block;height:12px;margin-bottom:auto;margin-top:auto;position:absolute;right:-6px;top:0;width:12px}.tp-sldv_t:hover .tp-sldv_k::after{background-color:var(--btn-bg-h)}.tp-sldv_t:focus .tp-sldv_k::after{background-color:var(--btn-bg-f)}.tp-sldv_t:active .tp-sldv_k::after{background-color:var(--btn-bg-a)}.tp-sldtxtv{display:flex}.tp-sldtxtv_s{flex:2}.tp-sldtxtv_t{flex:1;margin-left:4px}.tp-tabv.tp-v-disabled{opacity:.5}.tp-tabv_i{align-items:flex-end;display:flex;overflow:hidden}.tp-tabv.tp-tabv-nop .tp-tabv_i{height:calc(var(--bld-us) + 4px);position:relative}.tp-tabv.tp-tabv-nop .tp-tabv_i::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:0;position:absolute;right:0}.tp-tabv_c{border-left:var(--cnt-bg) solid 4px;padding-bottom:var(--cnt-v-p);padding-top:var(--cnt-v-p)}.tp-tbiv{flex:1;min-width:0;position:relative}.tp-tbiv+.tp-tbiv{margin-left:2px}.tp-tbiv+.tp-tbiv::before{background-color:var(--cnt-bg);bottom:0;content:"";height:2px;left:-2px;position:absolute;width:2px}.tp-tbiv_b{background-color:var(--cnt-bg);display:block;padding-left:calc(var(--cnt-h-p) + 4px);padding-right:calc(var(--cnt-h-p) + 4px);width:100%}.tp-tbiv_b:hover{background-color:var(--cnt-bg-h)}.tp-tbiv_b:focus{background-color:var(--cnt-bg-f)}.tp-tbiv_b:active{background-color:var(--cnt-bg-a)}.tp-tbiv_b:disabled{opacity:.5}.tp-tbiv_t{color:var(--cnt-fg);height:calc(var(--bld-us) + 4px);line-height:calc(var(--bld-us) + 4px);opacity:.5;overflow:hidden;text-overflow:ellipsis}.tp-tbiv.tp-tbiv-sel .tp-tbiv_t{opacity:1}.tp-txtv{position:relative}.tp-txtv_i{padding:0 4px}.tp-txtv.tp-txtv-fst .tp-txtv_i{border-bottom-right-radius:0;border-top-right-radius:0}.tp-txtv.tp-txtv-mid .tp-txtv_i{border-radius:0}.tp-txtv.tp-txtv-lst .tp-txtv_i{border-bottom-left-radius:0;border-top-left-radius:0}.tp-txtv.tp-txtv-num .tp-txtv_i{text-align:right}.tp-txtv.tp-txtv-drg .tp-txtv_i{opacity:.3}.tp-txtv_k{cursor:pointer;height:100%;left:-3px;position:absolute;top:0;width:12px}.tp-txtv_k::before{background-color:var(--in-fg);border-radius:1px;bottom:0;content:"";height:calc(var(--bld-us) - 4px);left:50%;margin-bottom:auto;margin-left:-1px;margin-top:auto;opacity:.1;position:absolute;top:0;transition:border-radius .1s,height .1s,transform .1s,width .1s;width:2px}.tp-txtv_k:hover::before,.tp-txtv.tp-txtv-drg .tp-txtv_k::before{opacity:1}.tp-txtv.tp-txtv-drg .tp-txtv_k::before{border-radius:50%;height:4px;transform:translateX(-1px);width:4px}.tp-txtv_g{bottom:0;display:block;height:8px;left:50%;margin:auto;overflow:visible;pointer-events:none;position:absolute;top:0;visibility:hidden;width:100%}.tp-txtv.tp-txtv-drg .tp-txtv_g{visibility:visible}.tp-txtv_gb{fill:none;stroke:var(--in-fg);stroke-dasharray:1}.tp-txtv_gh{fill:none;stroke:var(--in-fg)}.tp-txtv .tp-ttv{margin-left:6px;visibility:hidden}.tp-txtv.tp-txtv-drg .tp-ttv{visibility:visible}.tp-ttv{background-color:var(--in-fg);border-radius:var(--elm-br);color:var(--bs-bg);padding:2px 4px;pointer-events:none;position:absolute;transform:translate(-50%, -100%)}.tp-ttv::before{border-color:var(--in-fg) transparent transparent transparent;border-style:solid;border-width:2px;box-sizing:border-box;content:"";font-size:.9em;height:4px;left:50%;margin-left:-2px;position:absolute;top:100%;width:4px}.tp-rotv{background-color:var(--bs-bg);border-radius:var(--bs-br);box-shadow:0 2px 4px var(--bs-sh);font-family:var(--font-family);font-size:11px;font-weight:500;line-height:1;text-align:left}.tp-rotv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br);border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br);padding-left:calc(4px + var(--bld-us) + var(--cnt-h-p));text-align:center}.tp-rotv.tp-rotv-expanded .tp-rotv_b{border-bottom-left-radius:0;border-bottom-right-radius:0}.tp-rotv.tp-rotv-not .tp-rotv_b{display:none}.tp-rotv_c>.tp-fldv.tp-v-lst>.tp-fldv_c,.tp-rotv_c>.tp-tabv.tp-v-lst>.tp-tabv_c{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c>.tp-fldv.tp-v-lst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-left-radius:var(--bs-br);border-bottom-right-radius:var(--bs-br)}.tp-rotv_c .tp-fldv.tp-v-vlst:not(.tp-fldv-expanded)>.tp-fldv_b{border-bottom-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-fldv.tp-v-fst>.tp-fldv_b{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst{margin-top:calc(-1*var(--cnt-v-p))}.tp-rotv.tp-rotv-not .tp-rotv_c>.tp-tabv.tp-v-fst>.tp-tabv_i{border-top-left-radius:var(--bs-br);border-top-right-radius:var(--bs-br)}.tp-rotv.tp-v-disabled,.tp-rotv .tp-v-disabled{pointer-events:none}.tp-rotv.tp-v-hidden,.tp-rotv .tp-v-hidden{display:none}'),this.pool_.getAll().forEach(n=>{this.embedPluginStyle_(n)}),this.registerPlugin({plugins:[Wd,Ud,ci,qd]})}}const Yd=new i("3.1.0");e.BladeApi=s,e.ButtonApi=g,e.FolderApi=Ie,e.InputBindingApi=ot,e.ListApi=Ha,e.MonitorBindingApi=yt,e.Pane=Xd,e.SeparatorApi=qt,e.SliderApi=Wa,e.TabApi=Sn,e.TabPageApi=Xe,e.TextApi=qa,e.TpChangeEvent=h,e.VERSION=Yd,Object.defineProperty(e,"__esModule",{value:!0})})})(Do,Do.exports);class E0{constructor(t){this.config=t;const e=new Do.exports.Pane({title:"Panel"});e.addFolder({title:"Scene"}).addInput(this.config.scene,"speed",{min:0,max:1,label:"Speed"}),e.addFolder({title:"Object"}).addInput(this.config.object,"speed",{min:0,max:1,label:"Speed"})}}const Jc={scene:{speed:.2},object:{speed:0}},Ho=new S0({canvas:document.getElementById("c"),name:"wrld",params:Jc});new E0(Jc);window.addEventListener("resize",()=>Ho.resize());window.addEventListener("load",()=>Ho.resize());Ho.resize();
