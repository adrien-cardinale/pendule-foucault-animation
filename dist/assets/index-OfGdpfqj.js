(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ga="183",mi={ROTATE:0,DOLLY:1,PAN:2},di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kl=0,Wa=1,jl=2,Ar=1,$l=2,Ui=3,Ln=0,Dt=1,tn=2,gn=0,_i=1,Xa=2,qa=3,Ya=4,Zl=5,Vn=100,Jl=101,Ql=102,ec=103,tc=104,nc=200,ic=201,rc=202,sc=203,As=204,ws=205,ac=206,oc=207,lc=208,cc=209,hc=210,uc=211,fc=212,dc=213,pc=214,Rs=0,Cs=1,Ps=2,xi=3,Ds=4,Ls=5,Is=6,Us=7,va=0,mc=1,_c=2,sn=0,il=1,rl=2,sl=3,al=4,ol=5,ll=6,cl=7,hl=300,Yn=301,Mi=302,wr=303,Yr=304,Or=306,Ns=1e3,Yt=1001,Fs=1002,Mt=1003,gc=1004,nr=1005,ut=1006,Kr=1007,_n=1008,Ft=1009,ul=1010,fl=1011,Hi=1012,xa=1013,ln=1014,nn=1015,xn=1016,Ma=1017,Sa=1018,Gi=1020,dl=35902,pl=35899,ml=1021,_l=1022,Kt=1023,Mn=1026,Xn=1027,gl=1028,Ea=1029,Si=1030,ya=1031,ba=1033,Rr=33776,Cr=33777,Pr=33778,Dr=33779,Os=35840,Bs=35841,zs=35842,Hs=35843,Gs=36196,ks=37492,Vs=37496,Ws=37488,Xs=37489,qs=37490,Ys=37491,Ks=37808,js=37809,$s=37810,Zs=37811,Js=37812,Qs=37813,ea=37814,ta=37815,na=37816,ia=37817,ra=37818,sa=37819,aa=37820,oa=37821,la=36492,ca=36494,ha=36495,ua=36283,fa=36284,da=36285,pa=36286,vc=3200,Ta=0,xc=1,Pn="",Pt="srgb",Ei="srgb-linear",Ir="linear",it="srgb",Zn=7680,Ka=519,Mc=512,Sc=513,Ec=514,Aa=515,yc=516,bc=517,wa=518,Tc=519,ja=35044,$a="300 es",rn=2e3,ki=2001;function Ac(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Vi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function wc(){const i=Vi("canvas");return i.style.display="block",i}const Za={};function Ja(...i){const e="THREE."+i.shift();console.log(e,...i)}function vl(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function He(...i){i=vl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function tt(...i){i=vl(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ur(...i){const e=i.join(" ");e in Za||(Za[e]=!0,He(...i))}function Rc(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Cc={[Rs]:Cs,[Ps]:Is,[Ds]:Us,[xi]:Ls,[Cs]:Rs,[Is]:Ps,[Us]:Ds,[Ls]:xi};class Kn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qa=1234567;const Fi=Math.PI/180,Wi=180/Math.PI;function bi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Ra(i,e){return(i%e+e)%e}function Pc(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function Dc(i,e,t){return i!==e?(t-i)/(e-i):0}function Oi(i,e,t){return(1-t)*i+t*e}function Lc(i,e,t,n){return Oi(i,e,1-Math.exp(-t*n))}function Ic(i,e=1){return e-Math.abs(Ra(i,e*2)-e)}function Uc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Nc(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Fc(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Oc(i,e){return i+Math.random()*(e-i)}function Bc(i){return i*(.5-Math.random())}function zc(i){i!==void 0&&(Qa=i);let e=Qa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hc(i){return i*Fi}function Gc(i){return i*Wi}function kc(i){return(i&i-1)===0&&i!==0}function Vc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Wc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xc(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),f=a(t/2),l=s((e+n)/2),p=a((e+n)/2),d=s((e-n)/2),c=a((e-n)/2),m=s((n-e)/2),S=a((n-e)/2);switch(r){case"XYX":i.set(o*p,f*d,f*c,o*l);break;case"YZY":i.set(f*c,o*p,f*d,o*l);break;case"ZXZ":i.set(f*d,f*c,o*p,o*l);break;case"XZX":i.set(o*p,f*S,f*m,o*l);break;case"YXY":i.set(f*m,o*p,f*S,o*l);break;case"ZYZ":i.set(f*S,f*m,o*p,o*l);break;default:He("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Nr={DEG2RAD:Fi,RAD2DEG:Wi,generateUUID:bi,clamp:$e,euclideanModulo:Ra,mapLinear:Pc,inverseLerp:Dc,lerp:Oi,damp:Lc,pingpong:Ic,smoothstep:Uc,smootherstep:Nc,randInt:Fc,randFloat:Oc,randFloatSpread:Bc,seededRandom:zc,degToRad:Hc,radToDeg:Gc,isPowerOfTwo:kc,ceilPowerOfTwo:Vc,floorPowerOfTwo:Wc,setQuaternionFromProperEuler:Xc,normalize:At,denormalize:fi};class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class In{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let f=n[r+0],l=n[r+1],p=n[r+2],d=n[r+3],c=s[a+0],m=s[a+1],S=s[a+2],v=s[a+3];if(d!==v||f!==c||l!==m||p!==S){let u=f*c+l*m+p*S+d*v;u<0&&(c=-c,m=-m,S=-S,v=-v,u=-u);let h=1-o;if(u<.9995){const g=Math.acos(u),A=Math.sin(g);h=Math.sin(h*g)/A,o=Math.sin(o*g)/A,f=f*h+c*o,l=l*h+m*o,p=p*h+S*o,d=d*h+v*o}else{f=f*h+c*o,l=l*h+m*o,p=p*h+S*o,d=d*h+v*o;const g=1/Math.sqrt(f*f+l*l+p*p+d*d);f*=g,l*=g,p*=g,d*=g}}e[t]=f,e[t+1]=l,e[t+2]=p,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],f=n[r+1],l=n[r+2],p=n[r+3],d=s[a],c=s[a+1],m=s[a+2],S=s[a+3];return e[t]=o*S+p*d+f*m-l*c,e[t+1]=f*S+p*c+l*d-o*m,e[t+2]=l*S+p*m+o*c-f*d,e[t+3]=p*S-o*d-f*c-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,f=Math.sin,l=o(n/2),p=o(r/2),d=o(s/2),c=f(n/2),m=f(r/2),S=f(s/2);switch(a){case"XYZ":this._x=c*p*d+l*m*S,this._y=l*m*d-c*p*S,this._z=l*p*S+c*m*d,this._w=l*p*d-c*m*S;break;case"YXZ":this._x=c*p*d+l*m*S,this._y=l*m*d-c*p*S,this._z=l*p*S-c*m*d,this._w=l*p*d+c*m*S;break;case"ZXY":this._x=c*p*d-l*m*S,this._y=l*m*d+c*p*S,this._z=l*p*S+c*m*d,this._w=l*p*d-c*m*S;break;case"ZYX":this._x=c*p*d-l*m*S,this._y=l*m*d+c*p*S,this._z=l*p*S-c*m*d,this._w=l*p*d+c*m*S;break;case"YZX":this._x=c*p*d+l*m*S,this._y=l*m*d+c*p*S,this._z=l*p*S-c*m*d,this._w=l*p*d-c*m*S;break;case"XZY":this._x=c*p*d-l*m*S,this._y=l*m*d-c*p*S,this._z=l*p*S+c*m*d,this._w=l*p*d+c*m*S;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],f=t[9],l=t[2],p=t[6],d=t[10],c=n+o+d;if(c>0){const m=.5/Math.sqrt(c+1);this._w=.25/m,this._x=(p-f)*m,this._y=(s-l)*m,this._z=(a-r)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(p-f)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(s-l)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(f+p)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-r)/m,this._x=(s+l)/m,this._y=(f+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,f=t._y,l=t._z,p=t._w;return this._x=n*p+a*o+r*l-s*f,this._y=r*p+a*f+s*o-n*l,this._z=s*p+a*l+n*f-r*o,this._w=a*p-n*o-r*f-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let f=1-t;if(o<.9995){const l=Math.acos(o),p=Math.sin(l);f=Math.sin(f*l)/p,t=Math.sin(t*l)/p,this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+s*t,this._w=this._w*f+a*t,this._onChangeCallback()}else this._x=this._x*f+n*t,this._y=this._y*f+r*t,this._z=this._z*f+s*t,this._w=this._w*f+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,n=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,f=e.w,l=2*(a*r-o*n),p=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+f*l+a*d-o*p,this.y=n+f*p+o*l-s*d,this.z=r+f*d+s*p-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,f=t.z;return this.x=r*f-s*o,this.y=s*a-n*f,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jr.copy(this).projectOnVector(e),this.sub(jr)}reflect(e){return this.sub(jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new K,eo=new In;class qe{constructor(e,t,n,r,s,a,o,f,l){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,f,l)}set(e,t,n,r,s,a,o,f,l){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=t,p[4]=s,p[5]=f,p[6]=n,p[7]=a,p[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],f=n[6],l=n[1],p=n[4],d=n[7],c=n[2],m=n[5],S=n[8],v=r[0],u=r[3],h=r[6],g=r[1],A=r[4],E=r[7],y=r[2],x=r[5],b=r[8];return s[0]=a*v+o*g+f*y,s[3]=a*u+o*A+f*x,s[6]=a*h+o*E+f*b,s[1]=l*v+p*g+d*y,s[4]=l*u+p*A+d*x,s[7]=l*h+p*E+d*b,s[2]=c*v+m*g+S*y,s[5]=c*u+m*A+S*x,s[8]=c*h+m*E+S*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],f=e[6],l=e[7],p=e[8];return t*a*p-t*o*l-n*s*p+n*o*f+r*s*l-r*a*f}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],f=e[6],l=e[7],p=e[8],d=p*a-o*l,c=o*f-p*s,m=l*s-a*f,S=t*d+n*c+r*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/S;return e[0]=d*v,e[1]=(r*l-p*n)*v,e[2]=(o*n-r*a)*v,e[3]=c*v,e[4]=(p*t-r*f)*v,e[5]=(r*s-o*t)*v,e[6]=m*v,e[7]=(n*f-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const f=Math.cos(s),l=Math.sin(s);return this.set(n*f,n*l,-n*(f*a+l*o)+a+e,-r*l,r*f,-r*(-l*a+f*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($r.makeScale(e,t)),this}rotate(e){return this.premultiply($r.makeRotation(-e)),this}translate(e,t){return this.premultiply($r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $r=new qe,to=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),no=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qc(){const i={enabled:!0,workingColorSpace:Ei,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=vn(r.r),r.g=vn(r.g),r.b=vn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=gi(r.r),r.g=gi(r.g),r.b=gi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pn?Ir:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ur("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ur("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ei]:{primaries:e,whitePoint:n,transfer:Ir,toXYZ:to,fromXYZ:no,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:to,fromXYZ:no,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}const Je=qc();function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function gi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class Yc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jn===void 0&&(Jn=Vi("canvas")),Jn.width=e.width,Jn.height=e.height;const r=Jn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Jn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kc=0;class Ca{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Zr(r[a].image)):s.push(Zr(r[a]))}else s=Zr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Zr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Yc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}let jc=0;const Jr=new K;class bt extends Kn{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Yt,r=Yt,s=ut,a=_n,o=Kt,f=Ft,l=bt.DEFAULT_ANISOTROPY,p=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jc++}),this.uuid=bi(),this.name="",this.source=new Ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=f,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jr).x}get height(){return this.source.getSize(Jr).y}get depth(){return this.source.getSize(Jr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ns:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Fs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ns:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Fs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=hl;bt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const f=e.elements,l=f[0],p=f[4],d=f[8],c=f[1],m=f[5],S=f[9],v=f[2],u=f[6],h=f[10];if(Math.abs(p-c)<.01&&Math.abs(d-v)<.01&&Math.abs(S-u)<.01){if(Math.abs(p+c)<.1&&Math.abs(d+v)<.1&&Math.abs(S+u)<.1&&Math.abs(l+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(l+1)/2,E=(m+1)/2,y=(h+1)/2,x=(p+c)/4,b=(d+v)/4,_=(S+u)/4;return A>E&&A>y?A<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(A),r=x/n,s=b/n):E>y?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=x/r,s=_/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=b/s,r=_/s),this.set(n,r,s,t),this}let g=Math.sqrt((u-S)*(u-S)+(d-v)*(d-v)+(c-p)*(c-p));return Math.abs(g)<.001&&(g=1),this.x=(u-S)/g,this.y=(d-v)/g,this.z=(c-p)/g,this.w=Math.acos((l+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $c extends Kn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new bt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Ca(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class an extends $c{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class xl extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Zc extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mt,this.minFilter=Mt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lt{constructor(e,t,n,r,s,a,o,f,l,p,d,c,m,S,v,u){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,f,l,p,d,c,m,S,v,u)}set(e,t,n,r,s,a,o,f,l,p,d,c,m,S,v,u){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=f,h[2]=l,h[6]=p,h[10]=d,h[14]=c,h[3]=m,h[7]=S,h[11]=v,h[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Qn.setFromMatrixColumn(e,0).length(),s=1/Qn.setFromMatrixColumn(e,1).length(),a=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),f=Math.cos(r),l=Math.sin(r),p=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const c=a*p,m=a*d,S=o*p,v=o*d;t[0]=f*p,t[4]=-f*d,t[8]=l,t[1]=m+S*l,t[5]=c-v*l,t[9]=-o*f,t[2]=v-c*l,t[6]=S+m*l,t[10]=a*f}else if(e.order==="YXZ"){const c=f*p,m=f*d,S=l*p,v=l*d;t[0]=c+v*o,t[4]=S*o-m,t[8]=a*l,t[1]=a*d,t[5]=a*p,t[9]=-o,t[2]=m*o-S,t[6]=v+c*o,t[10]=a*f}else if(e.order==="ZXY"){const c=f*p,m=f*d,S=l*p,v=l*d;t[0]=c-v*o,t[4]=-a*d,t[8]=S+m*o,t[1]=m+S*o,t[5]=a*p,t[9]=v-c*o,t[2]=-a*l,t[6]=o,t[10]=a*f}else if(e.order==="ZYX"){const c=a*p,m=a*d,S=o*p,v=o*d;t[0]=f*p,t[4]=S*l-m,t[8]=c*l+v,t[1]=f*d,t[5]=v*l+c,t[9]=m*l-S,t[2]=-l,t[6]=o*f,t[10]=a*f}else if(e.order==="YZX"){const c=a*f,m=a*l,S=o*f,v=o*l;t[0]=f*p,t[4]=v-c*d,t[8]=S*d+m,t[1]=d,t[5]=a*p,t[9]=-o*p,t[2]=-l*p,t[6]=m*d+S,t[10]=c-v*d}else if(e.order==="XZY"){const c=a*f,m=a*l,S=o*f,v=o*l;t[0]=f*p,t[4]=-d,t[8]=l*p,t[1]=c*d+v,t[5]=a*p,t[9]=m*d-S,t[2]=S*d-m,t[6]=o*p,t[10]=v*d+c}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jc,e,Qc)}lookAt(e,t,n){const r=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),yn.crossVectors(n,Ut),yn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),yn.crossVectors(n,Ut)),yn.normalize(),ir.crossVectors(Ut,yn),r[0]=yn.x,r[4]=ir.x,r[8]=Ut.x,r[1]=yn.y,r[5]=ir.y,r[9]=Ut.y,r[2]=yn.z,r[6]=ir.z,r[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],f=n[8],l=n[12],p=n[1],d=n[5],c=n[9],m=n[13],S=n[2],v=n[6],u=n[10],h=n[14],g=n[3],A=n[7],E=n[11],y=n[15],x=r[0],b=r[4],_=r[8],M=r[12],D=r[1],R=r[5],C=r[9],P=r[13],I=r[2],B=r[6],z=r[10],H=r[14],U=r[3],N=r[7],F=r[11],V=r[15];return s[0]=a*x+o*D+f*I+l*U,s[4]=a*b+o*R+f*B+l*N,s[8]=a*_+o*C+f*z+l*F,s[12]=a*M+o*P+f*H+l*V,s[1]=p*x+d*D+c*I+m*U,s[5]=p*b+d*R+c*B+m*N,s[9]=p*_+d*C+c*z+m*F,s[13]=p*M+d*P+c*H+m*V,s[2]=S*x+v*D+u*I+h*U,s[6]=S*b+v*R+u*B+h*N,s[10]=S*_+v*C+u*z+h*F,s[14]=S*M+v*P+u*H+h*V,s[3]=g*x+A*D+E*I+y*U,s[7]=g*b+A*R+E*B+y*N,s[11]=g*_+A*C+E*z+y*F,s[15]=g*M+A*P+E*H+y*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],f=e[9],l=e[13],p=e[2],d=e[6],c=e[10],m=e[14],S=e[3],v=e[7],u=e[11],h=e[15],g=f*m-l*c,A=o*m-l*d,E=o*c-f*d,y=a*m-l*p,x=a*c-f*p,b=a*d-o*p;return t*(v*g-u*A+h*E)-n*(S*g-u*y+h*x)+r*(S*A-v*y+h*b)-s*(S*E-v*x+u*b)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],f=e[6],l=e[7],p=e[8],d=e[9],c=e[10],m=e[11],S=e[12],v=e[13],u=e[14],h=e[15],g=t*o-n*a,A=t*f-r*a,E=t*l-s*a,y=n*f-r*o,x=n*l-s*o,b=r*l-s*f,_=p*v-d*S,M=p*u-c*S,D=p*h-m*S,R=d*u-c*v,C=d*h-m*v,P=c*h-m*u,I=g*P-A*C+E*R+y*D-x*M+b*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/I;return e[0]=(o*P-f*C+l*R)*B,e[1]=(r*C-n*P-s*R)*B,e[2]=(v*b-u*x+h*y)*B,e[3]=(c*x-d*b-m*y)*B,e[4]=(f*D-a*P-l*M)*B,e[5]=(t*P-r*D+s*M)*B,e[6]=(u*E-S*b-h*A)*B,e[7]=(p*b-c*E+m*A)*B,e[8]=(a*C-o*D+l*_)*B,e[9]=(n*D-t*C-s*_)*B,e[10]=(S*x-v*E+h*g)*B,e[11]=(d*E-p*x-m*g)*B,e[12]=(o*M-a*R-f*_)*B,e[13]=(t*R-n*M+r*_)*B,e[14]=(v*A-S*y-u*g)*B,e[15]=(p*y-d*A+c*g)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,f=e.z,l=s*a,p=s*o;return this.set(l*a+n,l*o-r*f,l*f+r*o,0,l*o+r*f,p*o+n,p*f-r*a,0,l*f-r*o,p*f+r*a,s*f*f+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,f=t._w,l=s+s,p=a+a,d=o+o,c=s*l,m=s*p,S=s*d,v=a*p,u=a*d,h=o*d,g=f*l,A=f*p,E=f*d,y=n.x,x=n.y,b=n.z;return r[0]=(1-(v+h))*y,r[1]=(m+E)*y,r[2]=(S-A)*y,r[3]=0,r[4]=(m-E)*x,r[5]=(1-(c+h))*x,r[6]=(u+g)*x,r[7]=0,r[8]=(S+A)*b,r[9]=(u-g)*b,r[10]=(1-(c+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Qn.set(r[0],r[1],r[2]).length();const o=Qn.set(r[4],r[5],r[6]).length(),f=Qn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kt.copy(this);const l=1/a,p=1/o,d=1/f;return kt.elements[0]*=l,kt.elements[1]*=l,kt.elements[2]*=l,kt.elements[4]*=p,kt.elements[5]*=p,kt.elements[6]*=p,kt.elements[8]*=d,kt.elements[9]*=d,kt.elements[10]*=d,t.setFromRotationMatrix(kt),n.x=a,n.y=o,n.z=f,this}makePerspective(e,t,n,r,s,a,o=rn,f=!1){const l=this.elements,p=2*s/(t-e),d=2*s/(n-r),c=(t+e)/(t-e),m=(n+r)/(n-r);let S,v;if(f)S=s/(a-s),v=a*s/(a-s);else if(o===rn)S=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ki)S=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=p,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=d,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=S,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=rn,f=!1){const l=this.elements,p=2/(t-e),d=2/(n-r),c=-(t+e)/(t-e),m=-(n+r)/(n-r);let S,v;if(f)S=1/(a-s),v=a/(a-s);else if(o===rn)S=-2/(a-s),v=-(a+s)/(a-s);else if(o===ki)S=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=p,l[4]=0,l[8]=0,l[12]=c,l[1]=0,l[5]=d,l[9]=0,l[13]=m,l[2]=0,l[6]=0,l[10]=S,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qn=new K,kt=new lt,Jc=new K(0,0,0),Qc=new K(1,1,1),yn=new K,ir=new K,Ut=new K,io=new lt,ro=new In;class jt{constructor(e=0,t=0,n=0,r=jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],f=r[1],l=r[5],p=r[9],d=r[2],c=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(f,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(f,s));break;case"ZYX":this._y=Math.asin(-$e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,m),this._z=Math.atan2(f,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-p,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return io.makeRotationFromQuaternion(e),this.setFromRotationMatrix(io,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ro.setFromEuler(this),this.setFromQuaternion(ro,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jt.DEFAULT_ORDER="XYZ";class Ml{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eh=0;const so=new K,ei=new In,hn=new lt,rr=new K,Ri=new K,th=new K,nh=new In,ao=new K(1,0,0),oo=new K(0,1,0),lo=new K(0,0,1),co={type:"added"},ih={type:"removed"},ti={type:"childadded",child:null},Qr={type:"childremoved",child:null};class Tt extends Kn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tt.DEFAULT_UP.clone();const e=new K,t=new jt,n=new In,r=new K(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new qe}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Tt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ml,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(ao,e)}rotateY(e){return this.rotateOnAxis(oo,e)}rotateZ(e){return this.rotateOnAxis(lo,e)}translateOnAxis(e,t){return so.copy(e).applyQuaternion(this.quaternion),this.position.add(so.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ao,e)}translateY(e){return this.translateOnAxis(oo,e)}translateZ(e){return this.translateOnAxis(lo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ri.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Ri,rr,this.up):hn.lookAt(rr,Ri,this.up),this.quaternion.setFromRotationMatrix(hn),r&&(hn.extractRotation(r.matrixWorld),ei.setFromRotationMatrix(hn),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(co),ti.child=e,this.dispatchEvent(ti),ti.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ih),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(co),ti.child=e,this.dispatchEvent(ti),ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,e,th),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ri,nh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,f){return o[f.uuid]===void 0&&(o[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const f=o.shapes;if(Array.isArray(f))for(let l=0,p=f.length;l<p;l++){const d=f[l];s(e.shapes,d)}else s(e.shapes,f)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let f=0,l=this.material.length;f<l;f++)o.push(s(e.materials,this.material[f]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const f=this.animations[o];r.animations.push(s(e.animations,f))}}if(t){const o=a(e.geometries),f=a(e.materials),l=a(e.textures),p=a(e.images),d=a(e.shapes),c=a(e.skeletons),m=a(e.animations),S=a(e.nodes);o.length>0&&(n.geometries=o),f.length>0&&(n.materials=f),l.length>0&&(n.textures=l),p.length>0&&(n.images=p),d.length>0&&(n.shapes=d),c.length>0&&(n.skeletons=c),m.length>0&&(n.animations=m),S.length>0&&(n.nodes=S)}return n.object=r,n;function a(o){const f=[];for(const l in o){const p=o[l];delete p.metadata,f.push(p)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Tt.DEFAULT_UP=new K(0,1,0);Tt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class pi extends Tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rh={type:"move"};class es{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,f=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const u=t.getJointPose(v,n),h=this._getHandJoint(l,v);u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=u.radius),h.visible=u!==null}const p=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],c=p.position.distanceTo(d.position),m=.02,S=.005;l.inputState.pinching&&c>m+S?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&c<=m-S&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(rh)))}return o!==null&&(o.visible=r!==null),f!==null&&(f.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new pi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Sl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function ts(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ze{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=Ra(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=ts(a,s,e+1/3),this.g=ts(a,s,e),this.b=ts(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Pt){function n(s){s!==void 0&&parseFloat(s)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){const n=Sl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=gi(e.r),this.g=gi(e.g),this.b=gi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Je.workingToColorSpace(yt.copy(this),e),Math.round($e(yt.r*255,0,255))*65536+Math.round($e(yt.g*255,0,255))*256+Math.round($e(yt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(yt.copy(this),t);const n=yt.r,r=yt.g,s=yt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let f,l;const p=(o+a)/2;if(o===a)f=0,l=0;else{const d=a-o;switch(l=p<=.5?d/(a+o):d/(2-a-o),a){case n:f=(r-s)/d+(r<s?6:0);break;case r:f=(s-n)/d+2;break;case s:f=(n-r)/d+4;break}f/=6}return e.h=f,e.s=l,e.l=p,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=Pt){Je.workingToColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,r=yt.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(sr);const n=Oi(bn.h,sr.h,t),r=Oi(bn.s,sr.s,t),s=Oi(bn.l,sr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Ze;Ze.NAMES=Sl;class sh extends Tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jt,this.environmentIntensity=1,this.environmentRotation=new jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Vt=new K,un=new K,ns=new K,fn=new K,ni=new K,ii=new K,ho=new K,is=new K,rs=new K,ss=new K,as=new ht,os=new ht,ls=new ht;class qt{constructor(e=new K,t=new K,n=new K){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Vt.subVectors(e,t),r.cross(Vt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Vt.subVectors(r,t),un.subVectors(n,t),ns.subVectors(e,t);const a=Vt.dot(Vt),o=Vt.dot(un),f=Vt.dot(ns),l=un.dot(un),p=un.dot(ns),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const c=1/d,m=(l*f-o*p)*c,S=(a*p-o*f)*c;return s.set(1-m-S,S,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,r,s,a,o,f){return this.getBarycoord(e,t,n,r,fn)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(s,fn.x),f.addScaledVector(a,fn.y),f.addScaledVector(o,fn.z),f)}static getInterpolatedAttribute(e,t,n,r,s,a){return as.setScalar(0),os.setScalar(0),ls.setScalar(0),as.fromBufferAttribute(e,t),os.fromBufferAttribute(e,n),ls.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(as,s.x),a.addScaledVector(os,s.y),a.addScaledVector(ls,s.z),a}static isFrontFacing(e,t,n,r){return Vt.subVectors(n,t),un.subVectors(e,t),Vt.cross(un).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Vt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ni.subVectors(r,n),ii.subVectors(s,n),is.subVectors(e,n);const f=ni.dot(is),l=ii.dot(is);if(f<=0&&l<=0)return t.copy(n);rs.subVectors(e,r);const p=ni.dot(rs),d=ii.dot(rs);if(p>=0&&d<=p)return t.copy(r);const c=f*d-p*l;if(c<=0&&f>=0&&p<=0)return a=f/(f-p),t.copy(n).addScaledVector(ni,a);ss.subVectors(e,s);const m=ni.dot(ss),S=ii.dot(ss);if(S>=0&&m<=S)return t.copy(s);const v=m*l-f*S;if(v<=0&&l>=0&&S<=0)return o=l/(l-S),t.copy(n).addScaledVector(ii,o);const u=p*S-m*d;if(u<=0&&d-p>=0&&m-S>=0)return ho.subVectors(s,r),o=(d-p)/(d-p+(m-S)),t.copy(r).addScaledVector(ho,o);const h=1/(u+v+c);return a=v*h,o=c*h,t.copy(n).addScaledVector(ni,a).addScaledVector(ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ji{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wt):Wt.fromBufferAttribute(s,a),Wt.applyMatrix4(e.matrixWorld),this.expandByPoint(Wt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(e.matrixWorld),this.union(ar)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ci),or.subVectors(this.max,Ci),ri.subVectors(e.a,Ci),si.subVectors(e.b,Ci),ai.subVectors(e.c,Ci),Tn.subVectors(si,ri),An.subVectors(ai,si),Fn.subVectors(ri,ai);let t=[0,-Tn.z,Tn.y,0,-An.z,An.y,0,-Fn.z,Fn.y,Tn.z,0,-Tn.x,An.z,0,-An.x,Fn.z,0,-Fn.x,-Tn.y,Tn.x,0,-An.y,An.x,0,-Fn.y,Fn.x,0];return!cs(t,ri,si,ai,or)||(t=[1,0,0,0,1,0,0,0,1],!cs(t,ri,si,ai,or))?!1:(lr.crossVectors(Tn,An),t=[lr.x,lr.y,lr.z],cs(t,ri,si,ai,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dn=[new K,new K,new K,new K,new K,new K,new K,new K],Wt=new K,ar=new ji,ri=new K,si=new K,ai=new K,Tn=new K,An=new K,Fn=new K,Ci=new K,or=new K,lr=new K,On=new K;function cs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){On.fromArray(i,s);const o=r.x*Math.abs(On.x)+r.y*Math.abs(On.y)+r.z*Math.abs(On.z),f=e.dot(On),l=t.dot(On),p=n.dot(On);if(Math.max(-Math.max(f,l,p),Math.min(f,l,p))>o)return!1}return!0}const dt=new K,cr=new ke;let ah=0;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ah++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ja,this.updateRanges=[],this.gpuType=nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ja&&(e.usage=this.usage),e}}class El extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class yl extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Rt extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}const oh=new ji,Pi=new K,hs=new K;class Pa{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):oh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pi.subVectors(e,this.center);const t=Pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Pi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pi.copy(e.center).add(hs)),this.expandByPoint(Pi.copy(e.center).sub(hs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lh=0;const zt=new lt,us=new Tt,oi=new K,Nt=new ji,Di=new ji,vt=new K;class $t extends Kn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ac(e)?yl:El)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return us.lookAt(e),us.updateMatrix(),this.applyMatrix4(us.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Rt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Nt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const n=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Di.setFromBufferAttribute(o),this.morphTargetsRelative?(vt.addVectors(Nt.min,Di.min),Nt.expandByPoint(vt),vt.addVectors(Nt.max,Di.max),Nt.expandByPoint(vt)):(Nt.expandByPoint(Di.min),Nt.expandByPoint(Di.max))}Nt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],f=this.morphTargetsRelative;for(let l=0,p=o.count;l<p;l++)vt.fromBufferAttribute(o,l),f&&(oi.fromBufferAttribute(e,l),vt.add(oi)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],f=[];for(let _=0;_<n.count;_++)o[_]=new K,f[_]=new K;const l=new K,p=new K,d=new K,c=new ke,m=new ke,S=new ke,v=new K,u=new K;function h(_,M,D){l.fromBufferAttribute(n,_),p.fromBufferAttribute(n,M),d.fromBufferAttribute(n,D),c.fromBufferAttribute(s,_),m.fromBufferAttribute(s,M),S.fromBufferAttribute(s,D),p.sub(l),d.sub(l),m.sub(c),S.sub(c);const R=1/(m.x*S.y-S.x*m.y);isFinite(R)&&(v.copy(p).multiplyScalar(S.y).addScaledVector(d,-m.y).multiplyScalar(R),u.copy(d).multiplyScalar(m.x).addScaledVector(p,-S.x).multiplyScalar(R),o[_].add(v),o[M].add(v),o[D].add(v),f[_].add(u),f[M].add(u),f[D].add(u))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let _=0,M=g.length;_<M;++_){const D=g[_],R=D.start,C=D.count;for(let P=R,I=R+C;P<I;P+=3)h(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const A=new K,E=new K,y=new K,x=new K;function b(_){y.fromBufferAttribute(r,_),x.copy(y);const M=o[_];A.copy(M),A.sub(y.multiplyScalar(y.dot(M))).normalize(),E.crossVectors(x,M);const R=E.dot(f[_])<0?-1:1;a.setXYZW(_,A.x,A.y,A.z,R)}for(let _=0,M=g.length;_<M;++_){const D=g[_],R=D.start,C=D.count;for(let P=R,I=R+C;P<I;P+=3)b(e.getX(P+0)),b(e.getX(P+1)),b(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let c=0,m=n.count;c<m;c++)n.setXYZ(c,0,0,0);const r=new K,s=new K,a=new K,o=new K,f=new K,l=new K,p=new K,d=new K;if(e)for(let c=0,m=e.count;c<m;c+=3){const S=e.getX(c+0),v=e.getX(c+1),u=e.getX(c+2);r.fromBufferAttribute(t,S),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,u),p.subVectors(a,s),d.subVectors(r,s),p.cross(d),o.fromBufferAttribute(n,S),f.fromBufferAttribute(n,v),l.fromBufferAttribute(n,u),o.add(p),f.add(p),l.add(p),n.setXYZ(S,o.x,o.y,o.z),n.setXYZ(v,f.x,f.y,f.z),n.setXYZ(u,l.x,l.y,l.z)}else for(let c=0,m=t.count;c<m;c+=3)r.fromBufferAttribute(t,c+0),s.fromBufferAttribute(t,c+1),a.fromBufferAttribute(t,c+2),p.subVectors(a,s),d.subVectors(r,s),p.cross(d),n.setXYZ(c+0,p.x,p.y,p.z),n.setXYZ(c+1,p.x,p.y,p.z),n.setXYZ(c+2,p.x,p.y,p.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(o,f){const l=o.array,p=o.itemSize,d=o.normalized,c=new l.constructor(f.length*p);let m=0,S=0;for(let v=0,u=f.length;v<u;v++){o.isInterleavedBufferAttribute?m=f[v]*o.data.stride+o.offset:m=f[v]*p;for(let h=0;h<p;h++)c[S++]=l[m++]}return new on(c,p,d)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,r=this.attributes;for(const o in r){const f=r[o],l=e(f,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const f=[],l=s[o];for(let p=0,d=l.length;p<d;p++){const c=l[p],m=e(c,n);f.push(m)}t.morphAttributes[o]=f}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,f=a.length;o<f;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const l in f)f[l]!==void 0&&(e[l]=f[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const f in n){const l=n[f];e.data.attributes[f]=l.toJSON(e.data)}const r={};let s=!1;for(const f in this.morphAttributes){const l=this.morphAttributes[f],p=[];for(let d=0,c=l.length;d<c;d++){const m=l[d];p.push(m.toJSON(e.data))}p.length>0&&(r[f]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const p=r[l];this.setAttribute(l,p.clone(t))}const s=e.morphAttributes;for(const l in s){const p=[],d=s[l];for(let c=0,m=d.length;c<m;c++)p.push(d[c].clone(t));this.morphAttributes[l]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,p=a.length;l<p;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ch=0;class Ti extends Kn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=_i,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=As,this.blendDst=ws,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_i&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==As&&(n.blendSrc=this.blendSrc),this.blendDst!==ws&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const f=s[o];delete f.metadata,a.push(f)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pn=new K,fs=new K,hr=new K,wn=new K,ds=new K,ur=new K,ps=new K;class bl{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){fs.copy(e).add(t).multiplyScalar(.5),hr.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(fs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(hr),o=wn.dot(this.direction),f=-wn.dot(hr),l=wn.lengthSq(),p=Math.abs(1-a*a);let d,c,m,S;if(p>0)if(d=a*f-o,c=a*o-f,S=s*p,d>=0)if(c>=-S)if(c<=S){const v=1/p;d*=v,c*=v,m=d*(d+a*c+2*o)+c*(a*d+c+2*f)+l}else c=s,d=Math.max(0,-(a*c+o)),m=-d*d+c*(c+2*f)+l;else c=-s,d=Math.max(0,-(a*c+o)),m=-d*d+c*(c+2*f)+l;else c<=-S?(d=Math.max(0,-(-a*s+o)),c=d>0?-s:Math.min(Math.max(-s,-f),s),m=-d*d+c*(c+2*f)+l):c<=S?(d=0,c=Math.min(Math.max(-s,-f),s),m=c*(c+2*f)+l):(d=Math.max(0,-(a*s+o)),c=d>0?s:Math.min(Math.max(-s,-f),s),m=-d*d+c*(c+2*f)+l);else c=a>0?-s:s,d=Math.max(0,-(a*c+o)),m=-d*d+c*(c+2*f)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(fs).addScaledVector(hr,c),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),r=pn.dot(pn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,f=n+a;return f<0?null:o<0?this.at(f,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,f;const l=1/this.direction.x,p=1/this.direction.y,d=1/this.direction.z,c=this.origin;return l>=0?(n=(e.min.x-c.x)*l,r=(e.max.x-c.x)*l):(n=(e.max.x-c.x)*l,r=(e.min.x-c.x)*l),p>=0?(s=(e.min.y-c.y)*p,a=(e.max.y-c.y)*p):(s=(e.max.y-c.y)*p,a=(e.min.y-c.y)*p),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-c.z)*d,f=(e.max.z-c.z)*d):(o=(e.max.z-c.z)*d,f=(e.min.z-c.z)*d),n>f||o>r)||((o>n||n!==n)&&(n=o),(f<r||r!==r)&&(r=f),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,r,s){ds.subVectors(t,e),ur.subVectors(n,e),ps.crossVectors(ds,ur);let a=this.direction.dot(ps),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const f=o*this.direction.dot(ur.crossVectors(wn,ur));if(f<0)return null;const l=o*this.direction.dot(ds.cross(wn));if(l<0||f+l>a)return null;const p=-o*wn.dot(ps);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Br extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=va,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const uo=new lt,Bn=new bl,fr=new Pa,fo=new K,dr=new K,pr=new K,mr=new K,ms=new K,_r=new K,po=new K,gr=new K;class Lt extends Tt{constructor(e=new $t,t=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){_r.set(0,0,0);for(let f=0,l=s.length;f<l;f++){const p=o[f],d=s[f];p!==0&&(ms.fromBufferAttribute(d,e),a?_r.addScaledVector(ms,p):_r.addScaledVector(ms.sub(t),p))}t.add(_r)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),Bn.copy(e.ray).recast(e.near),!(fr.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(fr,fo)===null||Bn.origin.distanceToSquared(fo)>(e.far-e.near)**2))&&(uo.copy(s).invert(),Bn.copy(e.ray).applyMatrix4(uo),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,f=s.attributes.position,l=s.attributes.uv,p=s.attributes.uv1,d=s.attributes.normal,c=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let S=0,v=c.length;S<v;S++){const u=c[S],h=a[u.materialIndex],g=Math.max(u.start,m.start),A=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let E=g,y=A;E<y;E+=3){const x=o.getX(E),b=o.getX(E+1),_=o.getX(E+2);r=vr(this,h,e,n,l,p,d,x,b,_),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const S=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let u=S,h=v;u<h;u+=3){const g=o.getX(u),A=o.getX(u+1),E=o.getX(u+2);r=vr(this,a,e,n,l,p,d,g,A,E),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}else if(f!==void 0)if(Array.isArray(a))for(let S=0,v=c.length;S<v;S++){const u=c[S],h=a[u.materialIndex],g=Math.max(u.start,m.start),A=Math.min(f.count,Math.min(u.start+u.count,m.start+m.count));for(let E=g,y=A;E<y;E+=3){const x=E,b=E+1,_=E+2;r=vr(this,h,e,n,l,p,d,x,b,_),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=u.materialIndex,t.push(r))}}else{const S=Math.max(0,m.start),v=Math.min(f.count,m.start+m.count);for(let u=S,h=v;u<h;u+=3){const g=u,A=u+1,E=u+2;r=vr(this,a,e,n,l,p,d,g,A,E),r&&(r.faceIndex=Math.floor(u/3),t.push(r))}}}}function hh(i,e,t,n,r,s,a,o){let f;if(e.side===Dt?f=n.intersectTriangle(a,s,r,!0,o):f=n.intersectTriangle(r,s,a,e.side===Ln,o),f===null)return null;gr.copy(o),gr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(gr);return l<t.near||l>t.far?null:{distance:l,point:gr.clone(),object:i}}function vr(i,e,t,n,r,s,a,o,f,l){i.getVertexPosition(o,dr),i.getVertexPosition(f,pr),i.getVertexPosition(l,mr);const p=hh(i,e,t,n,dr,pr,mr,po);if(p){const d=new K;qt.getBarycoord(po,dr,pr,mr,d),r&&(p.uv=qt.getInterpolatedAttribute(r,o,f,l,d,new ke)),s&&(p.uv1=qt.getInterpolatedAttribute(s,o,f,l,d,new ke)),a&&(p.normal=qt.getInterpolatedAttribute(a,o,f,l,d,new K),p.normal.dot(n.direction)>0&&p.normal.multiplyScalar(-1));const c={a:o,b:f,c:l,normal:new K,materialIndex:0};qt.getNormal(dr,pr,mr,c.normal),p.face=c,p.barycoord=d}return p}class Tl extends bt{constructor(e=null,t=1,n=1,r,s,a,o,f,l=Mt,p=Mt,d,c){super(null,a,o,f,l,p,r,s,d,c),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _s=new K,uh=new K,fh=new qe;class Cn{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_s.subVectors(n,t).cross(uh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_s),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fh.getNormalMatrix(e),r=this.coplanarPoint(_s).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zn=new Pa,dh=new ke(.5,.5),xr=new K;class Da{constructor(e=new Cn,t=new Cn,n=new Cn,r=new Cn,s=new Cn,a=new Cn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=rn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],f=s[2],l=s[3],p=s[4],d=s[5],c=s[6],m=s[7],S=s[8],v=s[9],u=s[10],h=s[11],g=s[12],A=s[13],E=s[14],y=s[15];if(r[0].setComponents(l-a,m-p,h-S,y-g).normalize(),r[1].setComponents(l+a,m+p,h+S,y+g).normalize(),r[2].setComponents(l+o,m+d,h+v,y+A).normalize(),r[3].setComponents(l-o,m-d,h-v,y-A).normalize(),n)r[4].setComponents(f,c,u,E).normalize(),r[5].setComponents(l-f,m-c,h-u,y-E).normalize();else if(r[4].setComponents(l-f,m-c,h-u,y-E).normalize(),t===rn)r[5].setComponents(l+f,m+c,h+u,y+E).normalize();else if(t===ki)r[5].setComponents(f,c,u,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(e){zn.center.set(0,0,0);const t=dh.distanceTo(e.center);return zn.radius=.7071067811865476+t,zn.applyMatrix4(e.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(xr.x=r.normal.x>0?e.max.x:e.min.x,xr.y=r.normal.y>0?e.max.y:e.min.y,xr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Al extends bt{constructor(e=[],t=Yn,n,r,s,a,o,f,l,p){super(e,t,n,r,s,a,o,f,l,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xi extends bt{constructor(e,t,n=ln,r,s,a,o=Mt,f=Mt,l,p=Mn,d=1){if(p!==Mn&&p!==Xn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const c={width:e,height:t,depth:d};super(c,r,s,a,o,f,p,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ca(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ph extends Xi{constructor(e,t=ln,n=Yn,r,s,a=Mt,o=Mt,f,l=Mn){const p={width:e,height:e,depth:1},d=[p,p,p,p,p,p];super(e,e,t,n,r,s,a,o,f,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wl extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $i extends $t{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const f=[],l=[],p=[],d=[];let c=0,m=0;S("z","y","x",-1,-1,n,t,e,a,s,0),S("z","y","x",1,-1,n,t,-e,a,s,1),S("x","z","y",1,1,e,n,t,r,a,2),S("x","z","y",1,-1,e,n,-t,r,a,3),S("x","y","z",1,-1,e,t,n,r,s,4),S("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(f),this.setAttribute("position",new Rt(l,3)),this.setAttribute("normal",new Rt(p,3)),this.setAttribute("uv",new Rt(d,2));function S(v,u,h,g,A,E,y,x,b,_,M){const D=E/b,R=y/_,C=E/2,P=y/2,I=x/2,B=b+1,z=_+1;let H=0,U=0;const N=new K;for(let F=0;F<z;F++){const V=F*R-P;for(let k=0;k<B;k++){const se=k*D-C;N[v]=se*g,N[u]=V*A,N[h]=I,l.push(N.x,N.y,N.z),N[v]=0,N[u]=0,N[h]=x>0?1:-1,p.push(N.x,N.y,N.z),d.push(k/b),d.push(1-F/_),H+=1}}for(let F=0;F<_;F++)for(let V=0;V<b;V++){const k=c+V+B*F,se=c+V+B*(F+1),he=c+(V+1)+B*(F+1),oe=c+(V+1)+B*F;f.push(k,se,oe),f.push(se,he,oe),U+=6}o.addGroup(m,U,M),m+=U,c+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class La extends $t{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:f};const l=this;r=Math.floor(r),s=Math.floor(s);const p=[],d=[],c=[],m=[];let S=0;const v=[],u=n/2;let h=0;g(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(p),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(m,2));function g(){const E=new K,y=new K;let x=0;const b=(t-e)/n;for(let _=0;_<=s;_++){const M=[],D=_/s,R=D*(t-e)+e;for(let C=0;C<=r;C++){const P=C/r,I=P*f+o,B=Math.sin(I),z=Math.cos(I);y.x=R*B,y.y=-D*n+u,y.z=R*z,d.push(y.x,y.y,y.z),E.set(B,b,z).normalize(),c.push(E.x,E.y,E.z),m.push(P,1-D),M.push(S++)}v.push(M)}for(let _=0;_<r;_++)for(let M=0;M<s;M++){const D=v[M][_],R=v[M+1][_],C=v[M+1][_+1],P=v[M][_+1];(e>0||M!==0)&&(p.push(D,R,P),x+=3),(t>0||M!==s-1)&&(p.push(R,C,P),x+=3)}l.addGroup(h,x,0),h+=x}function A(E){const y=S,x=new ke,b=new K;let _=0;const M=E===!0?e:t,D=E===!0?1:-1;for(let C=1;C<=r;C++)d.push(0,u*D,0),c.push(0,D,0),m.push(.5,.5),S++;const R=S;for(let C=0;C<=r;C++){const I=C/r*f+o,B=Math.cos(I),z=Math.sin(I);b.x=M*z,b.y=u*D,b.z=M*B,d.push(b.x,b.y,b.z),c.push(0,D,0),x.x=B*.5+.5,x.y=z*.5*D+.5,m.push(x.x,x.y),S++}for(let C=0;C<r;C++){const P=y+C,I=R+C;E===!0?p.push(I,I+1,P):p.push(I+1,I,P),_+=3}l.addGroup(h,_,E===!0?1:2),h+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zi extends $t{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),f=Math.floor(r),l=o+1,p=f+1,d=e/o,c=t/f,m=[],S=[],v=[],u=[];for(let h=0;h<p;h++){const g=h*c-a;for(let A=0;A<l;A++){const E=A*d-s;S.push(E,-g,0),v.push(0,0,1),u.push(A/o),u.push(1-h/f)}}for(let h=0;h<f;h++)for(let g=0;g<o;g++){const A=g+l*h,E=g+l*(h+1),y=g+1+l*(h+1),x=g+1+l*h;m.push(A,E,x),m.push(E,y,x)}this.setIndex(m),this.setAttribute("position",new Rt(S,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.width,e.height,e.widthSegments,e.heightSegments)}}class qi extends $t{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const f=Math.min(a+o,Math.PI);let l=0;const p=[],d=new K,c=new K,m=[],S=[],v=[],u=[];for(let h=0;h<=n;h++){const g=[],A=h/n;let E=0;h===0&&a===0?E=.5/t:h===n&&f===Math.PI&&(E=-.5/t);for(let y=0;y<=t;y++){const x=y/t;d.x=-e*Math.cos(r+x*s)*Math.sin(a+A*o),d.y=e*Math.cos(a+A*o),d.z=e*Math.sin(r+x*s)*Math.sin(a+A*o),S.push(d.x,d.y,d.z),c.copy(d).normalize(),v.push(c.x,c.y,c.z),u.push(x+E,1-A),g.push(l++)}p.push(g)}for(let h=0;h<n;h++)for(let g=0;g<t;g++){const A=p[h][g+1],E=p[h][g],y=p[h+1][g],x=p[h+1][g+1];(h!==0||a>0)&&m.push(A,E,x),(h!==n-1||f<Math.PI)&&m.push(E,y,x)}this.setIndex(m),this.setAttribute("position",new Rt(S,3)),this.setAttribute("normal",new Rt(v,3)),this.setAttribute("uv",new Rt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function yi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const n=yi(i[t]);for(const r in n)e[r]=n[r]}return e}function mh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const _h={clone:yi,merge:wt};var gh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gh,this.fragmentShader=vh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=mh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xh extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mo extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mh extends Ti{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ta,this.normalScale=new ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jt,this.combine=va,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sh extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eh extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(_o(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!_o(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function _o(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class yh{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,f;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(p){o++,s===!1&&r.onStart!==void 0&&r.onStart(p,a,o),s=!0},this.itemEnd=function(p){a++,r.onProgress!==void 0&&r.onProgress(p,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(p){r.onError!==void 0&&r.onError(p)},this.resolveURL=function(p){return f?f(p):p},this.setURLModifier=function(p){return f=p,this},this.addHandler=function(p,d){return l.push(p,d),this},this.removeHandler=function(p){const d=l.indexOf(p);return d!==-1&&l.splice(d,2),this},this.getHandler=function(p){for(let d=0,c=l.length;d<c;d+=2){const m=l[d],S=l[d+1];if(m.global&&(m.lastIndex=0),m.test(p))return S}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const bh=new yh;class Ji{constructor(e){this.manager=e!==void 0?e:bh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const mn={};class Th extends Error{constructor(e,t){super(e),this.response=t}}class Ah extends Ji{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(mn[e]!==void 0){mn[e].push({onLoad:t,onProgress:n,onError:r});return}mn[e]=[],mn[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,f=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&He("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const p=mn[e],d=l.body.getReader(),c=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=c?parseInt(c):0,S=m!==0;let v=0;const u=new ReadableStream({start(h){g();function g(){d.read().then(({done:A,value:E})=>{if(A)h.close();else{v+=E.byteLength;const y=new ProgressEvent("progress",{lengthComputable:S,loaded:v,total:m});for(let x=0,b=p.length;x<b;x++){const _=p[x];_.onProgress&&_.onProgress(y)}h.enqueue(E),g()}},A=>{h.error(A)})}}});return new Response(u)}else throw new Th(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(f){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(p=>new DOMParser().parseFromString(p,o));case"json":return l.json();default:if(o==="")return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),c=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(c);return l.arrayBuffer().then(S=>m.decode(S))}}}).then(l=>{Bi.add(`file:${e}`,l);const p=mn[e];delete mn[e];for(let d=0,c=p.length;d<c;d++){const m=p[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{const p=mn[e];if(p===void 0)throw this.manager.itemError(e),l;delete mn[e];for(let d=0,c=p.length;d<c;d++){const m=p[d];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const li=new WeakMap;class wh extends Ji{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Bi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=li.get(a);d===void 0&&(d=[],li.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=Vi("img");function f(){p(),t&&t(this);const d=li.get(this)||[];for(let c=0;c<d.length;c++){const m=d[c];m.onLoad&&m.onLoad(this)}li.delete(this),s.manager.itemEnd(e)}function l(d){p(),r&&r(d),Bi.remove(`image:${e}`);const c=li.get(this)||[];for(let m=0;m<c.length;m++){const S=c[m];S.onError&&S.onError(d)}li.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function p(){o.removeEventListener("load",f,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",f,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Bi.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Rh extends Ji{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Tl,o=new Ah(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(f){let l;try{l=s.parse(f)}catch(p){if(r!==void 0)r(p);else{p(p);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Yt,a.wrapT=l.wrapT!==void 0?l.wrapT:Yt,a.magFilter=l.magFilter!==void 0?l.magFilter:ut,a.minFilter=l.minFilter!==void 0?l.minFilter:ut,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=_n),l.mipmapCount===1&&(a.minFilter=ut),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,r),a}}class Ch extends Ji{constructor(e){super(e)}load(e,t,n,r){const s=new bt,a=new wh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Cl extends Tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const gs=new lt,go=new K,vo=new K;class Ph{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ke(512,512),this.mapType=Ft,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new ke(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;go.setFromMatrixPosition(e.matrixWorld),t.position.copy(go),vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vo),t.updateMatrixWorld(),gs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gs,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ki||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mr=new K,Sr=new In,Jt=new K;class Pl extends Tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mr,Sr,Jt),Jt.x===1&&Jt.y===1&&Jt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mr,Sr,Jt.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Mr,Sr,Jt),Jt.x===1&&Jt.y===1&&Jt.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mr,Sr,Jt.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new K,xo=new ke,Mo=new ke;class Ht extends Pl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,xo,Mo),t.subVectors(Mo,xo)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const f=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/f,t-=a.offsetY*n/l,r*=a.width/f,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ia extends Pl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,f=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=p*this.view.offsetY,f=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Dh extends Ph{constructor(){super(new Ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lh extends Cl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tt.DEFAULT_UP),this.updateMatrix(),this.target=new Tt,this.shadow=new Dh}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ih extends Cl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ci=-90,hi=1;class Uh extends Tt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ht(ci,hi,e,t);r.layers=this.layers,this.add(r);const s=new Ht(ci,hi,e,t);s.layers=this.layers,this.add(s);const a=new Ht(ci,hi,e,t);a.layers=this.layers,this.add(a);const o=new Ht(ci,hi,e,t);o.layers=this.layers,this.add(o);const f=new Ht(ci,hi,e,t);f.layers=this.layers,this.add(f);const l=new Ht(ci,hi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,f]=t;for(const l of t)this.remove(l);if(e===rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===ki)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,f,l,p]=this.children,d=e.getRenderTarget(),c=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let u=!1;e.isWebGLRenderer===!0?u=e.state.buffers.depth.getReversed():u=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(n,4,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(d,c,m),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class Nh extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Fh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,He("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class So{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=$e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos($e(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Oh extends Kn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){He("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Eo(i,e,t,n){const r=Bh(n);switch(t){case ml:return i*e;case gl:return i*e/r.components*r.byteLength;case Ea:return i*e/r.components*r.byteLength;case Si:return i*e*2/r.components*r.byteLength;case ya:return i*e*2/r.components*r.byteLength;case _l:return i*e*3/r.components*r.byteLength;case Kt:return i*e*4/r.components*r.byteLength;case ba:return i*e*4/r.components*r.byteLength;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Pr:case Dr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bs:case Hs:return Math.max(i,16)*Math.max(e,8)/4;case Os:case zs:return Math.max(i,8)*Math.max(e,8)/2;case Gs:case ks:case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Vs:case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case js:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $s:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Js:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case la:case ca:case ha:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ua:case fa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case da:case pa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Bh(i){switch(i){case Ft:case ul:return{byteLength:1,components:1};case Hi:case fl:case xn:return{byteLength:2,components:1};case Ma:case Sa:return{byteLength:2,components:4};case ln:case xa:case nn:return{byteLength:4,components:1};case dl:case pl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ga}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ga);function Dl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function zh(i){const e=new WeakMap;function t(o,f){const l=o.array,p=o.usage,d=l.byteLength,c=i.createBuffer();i.bindBuffer(f,c),i.bufferData(f,l,p),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)m=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:c,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,f,l){const p=f.array,d=f.updateRanges;if(i.bindBuffer(l,o),d.length===0)i.bufferSubData(l,0,p);else{d.sort((m,S)=>m.start-S.start);let c=0;for(let m=1;m<d.length;m++){const S=d[c],v=d[m];v.start<=S.start+S.count+1?S.count=Math.max(S.count,v.start+v.count-S.start):(++c,d[c]=v)}d.length=c+1;for(let m=0,S=d.length;m<S;m++){const v=d[m];i.bufferSubData(l,v.start*p.BYTES_PER_ELEMENT,p,v.start,v.count)}f.clearUpdateRanges()}f.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const f=e.get(o);f&&(i.deleteBuffer(f.buffer),e.delete(o))}function a(o,f){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,f));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,f),l.version=o.version}}return{get:r,remove:s,update:a}}var Hh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Vh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Zh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qh=`#ifdef USE_IRIDESCENCE
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
#endif`,eu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,tu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,nu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,su=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,au=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ou=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cu=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,uu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,du=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_u="gl_FragColor = linearToOutputTexel( gl_FragColor );",gu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vu=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mu=`#ifdef USE_ENVMAP
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
#endif`,Su=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Eu=`#ifdef USE_ENVMAP
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
#endif`,yu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Au=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wu=`#ifdef USE_GRADIENTMAP
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
}`,Ru=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Du=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Lu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Iu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ou=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Bu=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gu=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ku=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xu=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ku=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ju=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$u=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ju=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ff=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ef=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Af=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cf=`#ifdef USE_SKINNING
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
#endif`,Pf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,If=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Nf=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ff=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Yf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,jf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ed=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,td=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,id=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,sd=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ad=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,od=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ld=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,cd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ud=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,md=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_d=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,xd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Hh,alphahash_pars_fragment:Gh,alphamap_fragment:kh,alphamap_pars_fragment:Vh,alphatest_fragment:Wh,alphatest_pars_fragment:Xh,aomap_fragment:qh,aomap_pars_fragment:Yh,batching_pars_vertex:Kh,batching_vertex:jh,begin_vertex:$h,beginnormal_vertex:Zh,bsdfs:Jh,iridescence_fragment:Qh,bumpmap_pars_fragment:eu,clipping_planes_fragment:tu,clipping_planes_pars_fragment:nu,clipping_planes_pars_vertex:iu,clipping_planes_vertex:ru,color_fragment:su,color_pars_fragment:au,color_pars_vertex:ou,color_vertex:lu,common:cu,cube_uv_reflection_fragment:hu,defaultnormal_vertex:uu,displacementmap_pars_vertex:fu,displacementmap_vertex:du,emissivemap_fragment:pu,emissivemap_pars_fragment:mu,colorspace_fragment:_u,colorspace_pars_fragment:gu,envmap_fragment:vu,envmap_common_pars_fragment:xu,envmap_pars_fragment:Mu,envmap_pars_vertex:Su,envmap_physical_pars_fragment:Lu,envmap_vertex:Eu,fog_vertex:yu,fog_pars_vertex:bu,fog_fragment:Tu,fog_pars_fragment:Au,gradientmap_pars_fragment:wu,lightmap_pars_fragment:Ru,lights_lambert_fragment:Cu,lights_lambert_pars_fragment:Pu,lights_pars_begin:Du,lights_toon_fragment:Iu,lights_toon_pars_fragment:Uu,lights_phong_fragment:Nu,lights_phong_pars_fragment:Fu,lights_physical_fragment:Ou,lights_physical_pars_fragment:Bu,lights_fragment_begin:zu,lights_fragment_maps:Hu,lights_fragment_end:Gu,logdepthbuf_fragment:ku,logdepthbuf_pars_fragment:Vu,logdepthbuf_pars_vertex:Wu,logdepthbuf_vertex:Xu,map_fragment:qu,map_pars_fragment:Yu,map_particle_fragment:Ku,map_particle_pars_fragment:ju,metalnessmap_fragment:$u,metalnessmap_pars_fragment:Zu,morphinstance_vertex:Ju,morphcolor_vertex:Qu,morphnormal_vertex:ef,morphtarget_pars_vertex:tf,morphtarget_vertex:nf,normal_fragment_begin:rf,normal_fragment_maps:sf,normal_pars_fragment:af,normal_pars_vertex:of,normal_vertex:lf,normalmap_pars_fragment:cf,clearcoat_normal_fragment_begin:hf,clearcoat_normal_fragment_maps:uf,clearcoat_pars_fragment:ff,iridescence_pars_fragment:df,opaque_fragment:pf,packing:mf,premultiplied_alpha_fragment:_f,project_vertex:gf,dithering_fragment:vf,dithering_pars_fragment:xf,roughnessmap_fragment:Mf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:Ef,shadowmap_pars_vertex:yf,shadowmap_vertex:bf,shadowmask_pars_fragment:Tf,skinbase_vertex:Af,skinning_pars_vertex:wf,skinning_vertex:Rf,skinnormal_vertex:Cf,specularmap_fragment:Pf,specularmap_pars_fragment:Df,tonemapping_fragment:Lf,tonemapping_pars_fragment:If,transmission_fragment:Uf,transmission_pars_fragment:Nf,uv_pars_fragment:Ff,uv_pars_vertex:Of,uv_vertex:Bf,worldpos_vertex:zf,background_vert:Hf,background_frag:Gf,backgroundCube_vert:kf,backgroundCube_frag:Vf,cube_vert:Wf,cube_frag:Xf,depth_vert:qf,depth_frag:Yf,distance_vert:Kf,distance_frag:jf,equirect_vert:$f,equirect_frag:Zf,linedashed_vert:Jf,linedashed_frag:Qf,meshbasic_vert:ed,meshbasic_frag:td,meshlambert_vert:nd,meshlambert_frag:id,meshmatcap_vert:rd,meshmatcap_frag:sd,meshnormal_vert:ad,meshnormal_frag:od,meshphong_vert:ld,meshphong_frag:cd,meshphysical_vert:hd,meshphysical_frag:ud,meshtoon_vert:fd,meshtoon_frag:dd,points_vert:pd,points_frag:md,shadow_vert:_d,shadow_frag:gd,sprite_vert:vd,sprite_frag:xd},we={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},en={basic:{uniforms:wt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:wt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:wt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:wt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:wt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:wt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:wt([we.points,we.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:wt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:wt([we.common,we.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:wt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:wt([we.sprite,we.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:wt([we.common,we.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:wt([we.lights,we.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};en.physical={uniforms:wt([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Er={r:0,b:0,g:0},Hn=new jt,Md=new lt;function Sd(i,e,t,n,r,s){const a=new Ze(0);let o=r===!0?0:1,f,l,p=null,d=0,c=null;function m(g){let A=g.isScene===!0?g.background:null;if(A&&A.isTexture){const E=g.backgroundBlurriness>0;A=e.get(A,E)}return A}function S(g){let A=!1;const E=m(g);E===null?u(a,o):E&&E.isColor&&(u(E,1),A=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(g,A){const E=m(A);E&&(E.isCubeTexture||E.mapping===Or)?(l===void 0&&(l=new Lt(new $i(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:yi(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,x,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),Hn.copy(A.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),l.material.uniforms.envMap.value=E,l.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Md.makeRotationFromEuler(Hn)),l.material.toneMapped=Je.getTransfer(E.colorSpace)!==it,(p!==E||d!==E.version||c!==i.toneMapping)&&(l.material.needsUpdate=!0,p=E,d=E.version,c=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null)):E&&E.isTexture&&(f===void 0&&(f=new Lt(new Zi(2,2),new cn({name:"BackgroundMaterial",uniforms:yi(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(f)),f.material.uniforms.t2D.value=E,f.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,f.material.toneMapped=Je.getTransfer(E.colorSpace)!==it,E.matrixAutoUpdate===!0&&E.updateMatrix(),f.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||d!==E.version||c!==i.toneMapping)&&(f.material.needsUpdate=!0,p=E,d=E.version,c=i.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null))}function u(g,A){g.getRGB(Er,Rl(i)),t.buffers.color.setClear(Er.r,Er.g,Er.b,A,s)}function h(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,A=1){a.set(g),o=A,u(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,u(a,o)},render:S,addToRenderList:v,dispose:h}}function Ed(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null);let s=r,a=!1;function o(R,C,P,I,B){let z=!1;const H=d(R,I,P,C);s!==H&&(s=H,l(s.object)),z=m(R,I,P,B),z&&S(R,I,P,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,E(R,C,P,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function f(){return i.createVertexArray()}function l(R){return i.bindVertexArray(R)}function p(R){return i.deleteVertexArray(R)}function d(R,C,P,I){const B=I.wireframe===!0;let z=n[C.id];z===void 0&&(z={},n[C.id]=z);const H=R.isInstancedMesh===!0?R.id:0;let U=z[H];U===void 0&&(U={},z[H]=U);let N=U[P.id];N===void 0&&(N={},U[P.id]=N);let F=N[B];return F===void 0&&(F=c(f()),N[B]=F),F}function c(R){const C=[],P=[],I=[];for(let B=0;B<t;B++)C[B]=0,P[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:P,attributeDivisors:I,object:R,attributes:{},index:null}}function m(R,C,P,I){const B=s.attributes,z=C.attributes;let H=0;const U=P.getAttributes();for(const N in U)if(U[N].location>=0){const V=B[N];let k=z[N];if(k===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),V===void 0||V.attribute!==k||k&&V.data!==k.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function S(R,C,P,I){const B={},z=C.attributes;let H=0;const U=P.getAttributes();for(const N in U)if(U[N].location>=0){let V=z[N];V===void 0&&(N==="instanceMatrix"&&R.instanceMatrix&&(V=R.instanceMatrix),N==="instanceColor"&&R.instanceColor&&(V=R.instanceColor));const k={};k.attribute=V,V&&V.data&&(k.data=V.data),B[N]=k,H++}s.attributes=B,s.attributesNum=H,s.index=I}function v(){const R=s.newAttributes;for(let C=0,P=R.length;C<P;C++)R[C]=0}function u(R){h(R,0)}function h(R,C){const P=s.newAttributes,I=s.enabledAttributes,B=s.attributeDivisors;P[R]=1,I[R]===0&&(i.enableVertexAttribArray(R),I[R]=1),B[R]!==C&&(i.vertexAttribDivisor(R,C),B[R]=C)}function g(){const R=s.newAttributes,C=s.enabledAttributes;for(let P=0,I=C.length;P<I;P++)C[P]!==R[P]&&(i.disableVertexAttribArray(P),C[P]=0)}function A(R,C,P,I,B,z,H){H===!0?i.vertexAttribIPointer(R,C,P,B,z):i.vertexAttribPointer(R,C,P,I,B,z)}function E(R,C,P,I){v();const B=I.attributes,z=P.getAttributes(),H=C.defaultAttributeValues;for(const U in z){const N=z[U];if(N.location>=0){let F=B[U];if(F===void 0&&(U==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),U==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),F!==void 0){const V=F.normalized,k=F.itemSize,se=e.get(F);if(se===void 0)continue;const he=se.buffer,oe=se.type,G=se.bytesPerElement,X=oe===i.INT||oe===i.UNSIGNED_INT||F.gpuType===xa;if(F.isInterleavedBufferAttribute){const ee=F.data,Me=ee.stride,le=F.offset;if(ee.isInstancedInterleavedBuffer){for(let _e=0;_e<N.locationSize;_e++)h(N.location+_e,ee.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let _e=0;_e<N.locationSize;_e++)u(N.location+_e);i.bindBuffer(i.ARRAY_BUFFER,he);for(let _e=0;_e<N.locationSize;_e++)A(N.location+_e,k/N.locationSize,oe,V,Me*G,(le+k/N.locationSize*_e)*G,X)}else{if(F.isInstancedBufferAttribute){for(let ee=0;ee<N.locationSize;ee++)h(N.location+ee,F.meshPerAttribute);R.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ee=0;ee<N.locationSize;ee++)u(N.location+ee);i.bindBuffer(i.ARRAY_BUFFER,he);for(let ee=0;ee<N.locationSize;ee++)A(N.location+ee,k/N.locationSize,oe,V,k*G,k/N.locationSize*ee*G,X)}}else if(H!==void 0){const V=H[U];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(N.location,V);break;case 3:i.vertexAttrib3fv(N.location,V);break;case 4:i.vertexAttrib4fv(N.location,V);break;default:i.vertexAttrib1fv(N.location,V)}}}}g()}function y(){M();for(const R in n){const C=n[R];for(const P in C){const I=C[P];for(const B in I){const z=I[B];for(const H in z)p(z[H].object),delete z[H];delete I[B]}}delete n[R]}}function x(R){if(n[R.id]===void 0)return;const C=n[R.id];for(const P in C){const I=C[P];for(const B in I){const z=I[B];for(const H in z)p(z[H].object),delete z[H];delete I[B]}}delete n[R.id]}function b(R){for(const C in n){const P=n[C];for(const I in P){const B=P[I];if(B[R.id]===void 0)continue;const z=B[R.id];for(const H in z)p(z[H].object),delete z[H];delete B[R.id]}}}function _(R){for(const C in n){const P=n[C],I=R.isInstancedMesh===!0?R.id:0,B=P[I];if(B!==void 0){for(const z in B){const H=B[z];for(const U in H)p(H[U].object),delete H[U];delete B[z]}delete P[I],Object.keys(P).length===0&&delete n[C]}}}function M(){D(),a=!0,s!==r&&(s=r,l(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:M,resetDefaultState:D,dispose:y,releaseStatesOfGeometry:x,releaseStatesOfObject:_,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:u,disableUnusedAttributes:g}}function yd(i,e,t){let n;function r(l){n=l}function s(l,p){i.drawArrays(n,l,p),t.update(p,n,1)}function a(l,p,d){d!==0&&(i.drawArraysInstanced(n,l,p,d),t.update(p,n,d))}function o(l,p,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,p,0,d);let m=0;for(let S=0;S<d;S++)m+=p[S];t.update(m,n,1)}function f(l,p,d,c){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let S=0;S<l.length;S++)a(l[S],p[S],c[S]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,p,0,c,0,d);let S=0;for(let v=0;v<d;v++)S+=p[v]*c[v];t.update(S,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=f}function bd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==Kt&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const _=b===xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Ft&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==nn&&!_)}function f(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const p=f(l);p!==l&&(He("WebGLRenderer:",l,"not supported, using",p,"instead."),l=p);const d=t.logarithmicDepthBuffer===!0,c=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),x=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:f,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:m,maxVertexTextures:S,maxTextureSize:v,maxCubemapSize:u,maxAttributes:h,maxVertexUniforms:g,maxVaryings:A,maxFragmentUniforms:E,maxSamples:y,samples:x}}function Td(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Cn,o=new qe,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){const m=d.length!==0||c||n!==0||r;return r=c,n=d.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,c){t=p(d,c,0)},this.setState=function(d,c,m){const S=d.clippingPlanes,v=d.clipIntersection,u=d.clipShadows,h=i.get(d);if(!r||S===null||S.length===0||s&&!u)s?p(null):l();else{const g=s?0:n,A=g*4;let E=h.clippingState||null;f.value=E,E=p(S,c,A,m);for(let y=0;y!==A;++y)E[y]=t[y];h.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function l(){f.value!==t&&(f.value=t,f.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function p(d,c,m,S){const v=d!==null?d.length:0;let u=null;if(v!==0){if(u=f.value,S!==!0||u===null){const h=m+v*4,g=c.matrixWorldInverse;o.getNormalMatrix(g),(u===null||u.length<h)&&(u=new Float32Array(h));for(let A=0,E=m;A!==v;++A,E+=4)a.copy(d[A]).applyMatrix4(g,o),a.normal.toArray(u,E),u[E+3]=a.constant}f.value=u,f.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,u}}const Dn=4,yo=[.125,.215,.35,.446,.526,.582],Wn=20,Ad=256,Li=new Ia,bo=new Ze;let vs=null,xs=0,Ms=0,Ss=!1;const wd=new K;class To{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=wd}=s;vs=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,n,r,f,o),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ro(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vs,xs,Ms),this._renderer.xr.enabled=Ss,e.scissorTest=!1,ui(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yn||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vs=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Ms=this._renderer.getActiveMipmapLevel(),Ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:xn,format:Kt,colorSpace:Ei,depthBuffer:!1},r=Ao(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ao(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Rd(s)),this._blurMaterial=Pd(s,e,t),this._ggxMaterial=Cd(s,e,t)}return r}_compileMaterial(e){const t=new Lt(new $t,e);this._renderer.compile(t,Li)}_sceneToCubeUV(e,t,n,r,s){const f=new Ht(90,1,t,n),l=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],d=this._renderer,c=d.autoClear,m=d.toneMapping;d.getClearColor(bo),d.toneMapping=sn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Lt(new $i,new Br({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,u=v.material;let h=!1;const g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,h=!0):(u.color.copy(bo),h=!0);for(let A=0;A<6;A++){const E=A%3;E===0?(f.up.set(0,l[A],0),f.position.set(s.x,s.y,s.z),f.lookAt(s.x+p[A],s.y,s.z)):E===1?(f.up.set(0,0,l[A]),f.position.set(s.x,s.y,s.z),f.lookAt(s.x,s.y+p[A],s.z)):(f.up.set(0,l[A],0),f.position.set(s.x,s.y,s.z),f.lookAt(s.x,s.y,s.z+p[A]));const y=this._cubeSize;ui(r,E*y,A>2?y:0,y,y),d.setRenderTarget(r),h&&d.render(v,f),d.render(e,f)}d.toneMapping=m,d.autoClear=c,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Yn||e.mapping===Mi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ro()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const f=this._cubeSize;ui(t,0,0,3*f,2*f),n.setRenderTarget(t),n.render(a,Li)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const f=a.uniforms,l=n/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-p*p),c=0+l*1.25,m=d*c,{_lodMax:S}=this,v=this._sizeLods[n],u=3*v*(n>S-Dn?n-S+Dn:0),h=4*(this._cubeSize-v);f.envMap.value=e.texture,f.roughness.value=m,f.mipInt.value=S-t,ui(s,u,h,3*v,2*v),r.setRenderTarget(s),r.render(o,Li),f.envMap.value=s.texture,f.roughness.value=0,f.mipInt.value=S-n,ui(e,u,h,3*v,2*v),r.setRenderTarget(e),r.render(o,Li)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const f=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&tt("blur direction must be either latitudinal or longitudinal!");const p=3,d=this._lodMeshes[r];d.material=l;const c=l.uniforms,m=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Wn-1),v=s/S,u=isFinite(s)?1+Math.floor(p*v):Wn;u>Wn&&He(`sigmaRadians, ${s}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Wn}`);const h=[];let g=0;for(let b=0;b<Wn;++b){const _=b/v,M=Math.exp(-_*_/2);h.push(M),b===0?g+=M:b<u&&(g+=2*M)}for(let b=0;b<h.length;b++)h[b]=h[b]/g;c.envMap.value=e.texture,c.samples.value=u,c.weights.value=h,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:A}=this;c.dTheta.value=S,c.mipInt.value=A-n;const E=this._sizeLods[r],y=3*E*(r>A-Dn?r-A+Dn:0),x=4*(this._cubeSize-E);ui(t,y,x,3*E,2*E),f.setRenderTarget(t),f.render(d,Li)}}function Rd(i){const e=[],t=[],n=[];let r=i;const s=i-Dn+1+yo.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let f=1/o;a>i-Dn?f=yo[a-i+Dn-1]:a===0&&(f=0),t.push(f);const l=1/(o-2),p=-l,d=1+l,c=[p,p,d,p,d,d,p,p,d,d,p,d],m=6,S=6,v=3,u=2,h=1,g=new Float32Array(v*S*m),A=new Float32Array(u*S*m),E=new Float32Array(h*S*m);for(let x=0;x<m;x++){const b=x%3*2/3-1,_=x>2?0:-1,M=[b,_,0,b+2/3,_,0,b+2/3,_+1,0,b,_,0,b+2/3,_+1,0,b,_+1,0];g.set(M,v*S*x),A.set(c,u*S*x);const D=[x,x,x,x,x,x];E.set(D,h*S*x)}const y=new $t;y.setAttribute("position",new on(g,v)),y.setAttribute("uv",new on(A,u)),y.setAttribute("faceIndex",new on(E,h)),n.push(new Lt(y,null)),r>Dn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ao(i,e,t){const n=new an(i,e,t);return n.texture.mapping=Or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ui(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Cd(i,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ad,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Pd(i,e,t){const n=new Float32Array(Wn),r=new K(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zr(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function wo(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zr(),fragmentShader:`

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
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ro(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function zr(){return`

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
	`}class Ll extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Al(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $i(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:gn});s.uniforms.tEquirect.value=t;const a=new Lt(r,s),o=t.minFilter;return t.minFilter===_n&&(t.minFilter=ut),new Uh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Dd(i){let e=new WeakMap,t=new WeakMap,n=null;function r(c,m=!1){return c==null?null:m?a(c):s(c)}function s(c){if(c&&c.isTexture){const m=c.mapping;if(m===wr||m===Yr)if(e.has(c)){const S=e.get(c).texture;return o(S,c.mapping)}else{const S=c.image;if(S&&S.height>0){const v=new Ll(S.height);return v.fromEquirectangularTexture(i,c),e.set(c,v),c.addEventListener("dispose",l),o(v.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){const m=c.mapping,S=m===wr||m===Yr,v=m===Yn||m===Mi;if(S||v){let u=t.get(c);const h=u!==void 0?u.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==h)return n===null&&(n=new To(i)),u=S?n.fromEquirectangular(c,u):n.fromCubemap(c,u),u.texture.pmremVersion=c.pmremVersion,t.set(c,u),u.texture;if(u!==void 0)return u.texture;{const g=c.image;return S&&g&&g.height>0||v&&g&&f(g)?(n===null&&(n=new To(i)),u=S?n.fromEquirectangular(c):n.fromCubemap(c),u.texture.pmremVersion=c.pmremVersion,t.set(c,u),c.addEventListener("dispose",p),u.texture):null}}}return c}function o(c,m){return m===wr?c.mapping=Yn:m===Yr&&(c.mapping=Mi),c}function f(c){let m=0;const S=6;for(let v=0;v<S;v++)c[v]!==void 0&&m++;return m===S}function l(c){const m=c.target;m.removeEventListener("dispose",l);const S=e.get(m);S!==void 0&&(e.delete(m),S.dispose())}function p(c){const m=c.target;m.removeEventListener("dispose",p);const S=t.get(m);S!==void 0&&(t.delete(m),S.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Ld(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Ur("WebGLRenderer: "+n+" extension not supported."),r}}}function Id(i,e,t,n){const r={},s=new WeakMap;function a(d){const c=d.target;c.index!==null&&e.remove(c.index);for(const S in c.attributes)e.remove(c.attributes[S]);c.removeEventListener("dispose",a),delete r[c.id];const m=s.get(c);m&&(e.remove(m),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,t.memory.geometries--}function o(d,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,t.memory.geometries++),c}function f(d){const c=d.attributes;for(const m in c)e.update(c[m],i.ARRAY_BUFFER)}function l(d){const c=[],m=d.index,S=d.attributes.position;let v=0;if(S===void 0)return;if(m!==null){const g=m.array;v=m.version;for(let A=0,E=g.length;A<E;A+=3){const y=g[A+0],x=g[A+1],b=g[A+2];c.push(y,x,x,b,b,y)}}else{const g=S.array;v=S.version;for(let A=0,E=g.length/3-1;A<E;A+=3){const y=A+0,x=A+1,b=A+2;c.push(y,x,x,b,b,y)}}const u=new(S.count>=65535?yl:El)(c,1);u.version=v;const h=s.get(d);h&&e.remove(h),s.set(d,u)}function p(d){const c=s.get(d);if(c){const m=d.index;m!==null&&c.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:f,getWireframeAttribute:p}}function Ud(i,e,t){let n;function r(c){n=c}let s,a;function o(c){s=c.type,a=c.bytesPerElement}function f(c,m){i.drawElements(n,m,s,c*a),t.update(m,n,1)}function l(c,m,S){S!==0&&(i.drawElementsInstanced(n,m,s,c*a,S),t.update(m,n,S))}function p(c,m,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,c,0,S);let u=0;for(let h=0;h<S;h++)u+=m[h];t.update(u,n,1)}function d(c,m,S,v){if(S===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let h=0;h<c.length;h++)l(c[h]/a,m[h],v[h]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,s,c,0,v,0,S);let h=0;for(let g=0;g<S;g++)h+=m[g]*v[g];t.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=f,this.renderInstances=l,this.renderMultiDraw=p,this.renderMultiDrawInstances=d}function Nd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Fd(i,e,t){const n=new WeakMap,r=new ht;function s(a,o,f){const l=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=p!==void 0?p.length:0;let c=n.get(o);if(c===void 0||c.count!==d){let M=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",M)};c!==void 0&&c.texture.dispose();const m=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],g=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),S===!0&&(A=2),v===!0&&(A=3);let E=o.attributes.position.count*A,y=1;E>e.maxTextureSize&&(y=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const x=new Float32Array(E*y*4*d),b=new xl(x,E,y,d);b.type=nn,b.needsUpdate=!0;const _=A*4;for(let D=0;D<d;D++){const R=u[D],C=h[D],P=g[D],I=E*y*4*D;for(let B=0;B<R.count;B++){const z=B*_;m===!0&&(r.fromBufferAttribute(R,B),x[I+z+0]=r.x,x[I+z+1]=r.y,x[I+z+2]=r.z,x[I+z+3]=0),S===!0&&(r.fromBufferAttribute(C,B),x[I+z+4]=r.x,x[I+z+5]=r.y,x[I+z+6]=r.z,x[I+z+7]=0),v===!0&&(r.fromBufferAttribute(P,B),x[I+z+8]=r.x,x[I+z+9]=r.y,x[I+z+10]=r.z,x[I+z+11]=P.itemSize===4?r.w:1)}}c={count:d,texture:b,size:new ke(E,y)},n.set(o,c),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const S=o.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",l)}f.getUniforms().setValue(i,"morphTargetsTexture",c.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:s}}function Od(i,e,t,n,r){let s=new WeakMap;function a(l){const p=r.render.frame,d=l.geometry,c=e.get(l,d);if(s.get(c)!==p&&(e.update(c),s.set(c,p)),l.isInstancedMesh&&(l.hasEventListener("dispose",f)===!1&&l.addEventListener("dispose",f),s.get(l)!==p&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,p))),l.isSkinnedMesh){const m=l.skeleton;s.get(m)!==p&&(m.update(),s.set(m,p))}return c}function o(){s=new WeakMap}function f(l){const p=l.target;p.removeEventListener("dispose",f),n.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:a,dispose:o}}const Bd={[il]:"LINEAR_TONE_MAPPING",[rl]:"REINHARD_TONE_MAPPING",[sl]:"CINEON_TONE_MAPPING",[al]:"ACES_FILMIC_TONE_MAPPING",[ll]:"AGX_TONE_MAPPING",[cl]:"NEUTRAL_TONE_MAPPING",[ol]:"CUSTOM_TONE_MAPPING"};function zd(i,e,t,n,r){const s=new an(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),a=new an(e,t,{type:xn,depthBuffer:!1,stencilBuffer:!1}),o=new $t;o.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Rt([0,2,0,0,2,0],2));const f=new xh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Lt(o,f),p=new Ia(-1,1,1,-1,0,1);let d=null,c=null,m=!1,S,v=null,u=[],h=!1;this.setSize=function(g,A){s.setSize(g,A),a.setSize(g,A);for(let E=0;E<u.length;E++){const y=u[E];y.setSize&&y.setSize(g,A)}},this.setEffects=function(g){u=g,h=u.length>0&&u[0].isRenderPass===!0;const A=s.width,E=s.height;for(let y=0;y<u.length;y++){const x=u[y];x.setSize&&x.setSize(A,E)}},this.begin=function(g,A){if(m||g.toneMapping===sn&&u.length===0)return!1;if(v=A,A!==null){const E=A.width,y=A.height;(s.width!==E||s.height!==y)&&this.setSize(E,y)}return h===!1&&g.setRenderTarget(s),S=g.toneMapping,g.toneMapping=sn,!0},this.hasRenderPass=function(){return h},this.end=function(g,A){g.toneMapping=S,m=!0;let E=s,y=a;for(let x=0;x<u.length;x++){const b=u[x];if(b.enabled!==!1&&(b.render(g,y,E,A),b.needsSwap!==!1)){const _=E;E=y,y=_}}if(d!==g.outputColorSpace||c!==g.toneMapping){d=g.outputColorSpace,c=g.toneMapping,f.defines={},Je.getTransfer(d)===it&&(f.defines.SRGB_TRANSFER="");const x=Bd[c];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=E.texture,g.setRenderTarget(v),g.render(l,p),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),f.dispose()}}const Il=new bt,ma=new Xi(1,1),Ul=new xl,Nl=new Zc,Fl=new Al,Co=[],Po=[],Do=new Float32Array(16),Lo=new Float32Array(9),Io=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Co[r];if(s===void 0&&(s=new Float32Array(r),Co[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hr(i,e){let t=Po[e];t===void 0&&(t=new Int32Array(e),Po[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Hd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Gd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Vd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function Wd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;Io.set(n),i.uniformMatrix2fv(this.addr,!1,Io),_t(t,n)}}function Xd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;Lo.set(n),i.uniformMatrix3fv(this.addr,!1,Lo),_t(t,n)}}function qd(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;Do.set(n),i.uniformMatrix4fv(this.addr,!1,Do),_t(t,n)}}function Yd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Kd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function $d(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function Zd(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function Qd(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function ep(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function tp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ma.compareFunction=t.isReversedDepthBuffer()?wa:Aa,s=ma):s=Il,t.setTexture2D(e||s,r)}function np(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Nl,r)}function ip(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Fl,r)}function rp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ul,r)}function sp(i){switch(i){case 5126:return Hd;case 35664:return Gd;case 35665:return kd;case 35666:return Vd;case 35674:return Wd;case 35675:return Xd;case 35676:return qd;case 5124:case 35670:return Yd;case 35667:case 35671:return Kd;case 35668:case 35672:return jd;case 35669:case 35673:return $d;case 5125:return Zd;case 36294:return Jd;case 36295:return Qd;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return tp;case 35679:case 36299:case 36307:return np;case 35680:case 36300:case 36308:case 36293:return ip;case 36289:case 36303:case 36311:case 36292:return rp}}function ap(i,e){i.uniform1fv(this.addr,e)}function op(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function lp(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function cp(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function hp(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function up(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function fp(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function dp(i,e){i.uniform1iv(this.addr,e)}function pp(i,e){i.uniform2iv(this.addr,e)}function mp(i,e){i.uniform3iv(this.addr,e)}function _p(i,e){i.uniform4iv(this.addr,e)}function gp(i,e){i.uniform1uiv(this.addr,e)}function vp(i,e){i.uniform2uiv(this.addr,e)}function xp(i,e){i.uniform3uiv(this.addr,e)}function Mp(i,e){i.uniform4uiv(this.addr,e)}function Sp(i,e,t){const n=this.cache,r=e.length,s=Hr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=ma:a=Il;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Ep(i,e,t){const n=this.cache,r=e.length,s=Hr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Nl,s[a])}function yp(i,e,t){const n=this.cache,r=e.length,s=Hr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Fl,s[a])}function bp(i,e,t){const n=this.cache,r=e.length,s=Hr(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ul,s[a])}function Tp(i){switch(i){case 5126:return ap;case 35664:return op;case 35665:return lp;case 35666:return cp;case 35674:return hp;case 35675:return up;case 35676:return fp;case 5124:case 35670:return dp;case 35667:case 35671:return pp;case 35668:case 35672:return mp;case 35669:case 35673:return _p;case 5125:return gp;case 36294:return vp;case 36295:return xp;case 36296:return Mp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return yp;case 36289:case 36303:case 36311:case 36292:return bp}}class Ap{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sp(t.type)}}class wp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Tp(t.type)}}class Rp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Es=/(\w+)(\])?(\[|\.)?/g;function Uo(i,e){i.seq.push(e),i.map[e.id]=e}function Cp(i,e,t){const n=i.name,r=n.length;for(Es.lastIndex=0;;){const s=Es.exec(n),a=Es.lastIndex;let o=s[1];const f=s[2]==="]",l=s[3];if(f&&(o=o|0),l===void 0||l==="["&&a+2===r){Uo(t,l===void 0?new Ap(o,i,e):new wp(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Rp(o),Uo(t,d)),t=d}}}class Lr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),f=e.getUniformLocation(t,o.name);Cp(o,f,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],f=n[o.id];f.needsUpdate!==!1&&o.setValue(e,f.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function No(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Pp=37297;let Dp=0;function Lp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Fo=new qe;function Ip(i){Je._getMatrix(Fo,Je.workingColorSpace,i);const e=`mat3( ${Fo.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Ir:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Oo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Lp(i.getShaderSource(e),o)}else return s}function Up(i,e){const t=Ip(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Np={[il]:"Linear",[rl]:"Reinhard",[sl]:"Cineon",[al]:"ACESFilmic",[ll]:"AgX",[cl]:"Neutral",[ol]:"Custom"};function Fp(i,e){const t=Np[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const yr=new K;function Op(){Je.getLuminanceCoefficients(yr);const i=yr.x.toFixed(4),e=yr.y.toFixed(4),t=yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ni).join(`
`)}function zp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Hp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ni(i){return i!==""}function Bo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gp=/^[ \t]*#include +<([\w\d./]+)>/gm;function _a(i){return i.replace(Gp,Vp)}const kp=new Map;function Vp(i,e){let t=Ke[e];if(t===void 0){const n=kp.get(e);if(n!==void 0)t=Ke[n],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return _a(t)}const Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ho(i){return i.replace(Wp,Xp)}function Xp(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Go(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const qp={[Ar]:"SHADOWMAP_TYPE_PCF",[Ui]:"SHADOWMAP_TYPE_VSM"};function Yp(i){return qp[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Kp={[Yn]:"ENVMAP_TYPE_CUBE",[Mi]:"ENVMAP_TYPE_CUBE",[Or]:"ENVMAP_TYPE_CUBE_UV"};function jp(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Kp[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const $p={[Mi]:"ENVMAP_MODE_REFRACTION"};function Zp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$p[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jp={[va]:"ENVMAP_BLENDING_MULTIPLY",[mc]:"ENVMAP_BLENDING_MIX",[_c]:"ENVMAP_BLENDING_ADD"};function Qp(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Jp[i.combine]||"ENVMAP_BLENDING_NONE"}function e0(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function t0(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const f=Yp(t),l=jp(t),p=Zp(t),d=Qp(t),c=e0(t),m=Bp(t),S=zp(s),v=r.createProgram();let u,h,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ni).join(`
`),u.length>0&&(u+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(Ni).join(`
`),h.length>0&&(h+=`
`)):(u=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ni).join(`
`),h=[Go(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+p:"",t.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sn?"#define TONE_MAPPING":"",t.toneMapping!==sn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==sn?Fp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Up("linearToOutputTexel",t.outputColorSpace),Op(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ni).join(`
`)),a=_a(a),a=Bo(a,t),a=zo(a,t),o=_a(o),o=Bo(o,t),o=zo(o,t),a=Ho(a),o=Ho(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,h=["#define varying in",t.glslVersion===$a?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const A=g+u+a,E=g+h+o,y=No(r,r.VERTEX_SHADER,A),x=No(r,r.FRAGMENT_SHADER,E);r.attachShader(v,y),r.attachShader(v,x),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(R){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(v)||"",P=r.getShaderInfoLog(y)||"",I=r.getShaderInfoLog(x)||"",B=C.trim(),z=P.trim(),H=I.trim();let U=!0,N=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,y,x);else{const F=Oo(r,y,"vertex"),V=Oo(r,x,"fragment");tt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+F+`
`+V)}else B!==""?He("WebGLProgram: Program Info Log:",B):(z===""||H==="")&&(N=!1);N&&(R.diagnostics={runnable:U,programLog:B,vertexShader:{log:z,prefix:u},fragmentShader:{log:H,prefix:h}})}r.deleteShader(y),r.deleteShader(x),_=new Lr(r,v),M=Hp(r,v)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(v,Pp)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Dp++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=x,this}let n0=0;class i0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new r0(e),t.set(e,n)),n}}class r0{constructor(e){this.id=n0++,this.code=e,this.usedTimes=0}}function s0(i,e,t,n,r,s){const a=new Ml,o=new i0,f=new Set,l=[],p=new Map,d=n.logarithmicDepthBuffer;let c=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(_){return f.add(_),_===0?"uv":`uv${_}`}function v(_,M,D,R,C){const P=R.fog,I=C.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||B,z),U=H&&H.mapping===Or?H.image.height:null,N=m[_.type];_.precision!==null&&(c=n.getMaxPrecision(_.precision),c!==_.precision&&He("WebGLProgram.getParameters:",_.precision,"not supported, using",c,"instead."));const F=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,V=F!==void 0?F.length:0;let k=0;I.morphAttributes.position!==void 0&&(k=1),I.morphAttributes.normal!==void 0&&(k=2),I.morphAttributes.color!==void 0&&(k=3);let se,he,oe,G;if(N){const Qe=en[N];se=Qe.vertexShader,he=Qe.fragmentShader}else se=_.vertexShader,he=_.fragmentShader,o.update(_),oe=o.getVertexShaderID(_),G=o.getFragmentShaderID(_);const X=i.getRenderTarget(),ee=i.state.buffers.depth.getReversed(),Me=C.isInstancedMesh===!0,le=C.isBatchedMesh===!0,_e=!!_.map,Fe=!!_.matcap,ye=!!H,Te=!!_.aoMap,Ee=!!_.lightMap,fe=!!_.bumpMap,be=!!_.normalMap,O=!!_.displacementMap,We=!!_.emissiveMap,ze=!!_.metalnessMap,Ye=!!_.roughnessMap,de=_.anisotropy>0,L=_.clearcoat>0,T=_.dispersion>0,W=_.iridescence>0,ie=_.sheen>0,Z=_.transmission>0,j=de&&!!_.anisotropyMap,pe=L&&!!_.clearcoatMap,ue=L&&!!_.clearcoatNormalMap,ve=L&&!!_.clearcoatRoughnessMap,Ae=W&&!!_.iridescenceMap,ae=W&&!!_.iridescenceThicknessMap,re=ie&&!!_.sheenColorMap,Se=ie&&!!_.sheenRoughnessMap,Pe=!!_.specularMap,xe=!!_.specularColorMap,Ve=!!_.specularIntensityMap,q=Z&&!!_.transmissionMap,ge=Z&&!!_.thicknessMap,me=!!_.gradientMap,De=!!_.alphaMap,ce=_.alphaTest>0,ne=!!_.alphaHash,Ie=!!_.extensions;let Ge=sn;_.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const nt={shaderID:N,shaderType:_.type,shaderName:_.name,vertexShader:se,fragmentShader:he,defines:_.defines,customVertexShaderID:oe,customFragmentShaderID:G,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:c,batching:le,batchingColor:le&&C._colorsTexture!==null,instancing:Me,instancingColor:Me&&C.instanceColor!==null,instancingMorph:Me&&C.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ei,alphaToCoverage:!!_.alphaToCoverage,map:_e,matcap:Fe,envMap:ye,envMapMode:ye&&H.mapping,envMapCubeUVHeight:U,aoMap:Te,lightMap:Ee,bumpMap:fe,normalMap:be,displacementMap:O,emissiveMap:We,normalMapObjectSpace:be&&_.normalMapType===xc,normalMapTangentSpace:be&&_.normalMapType===Ta,metalnessMap:ze,roughnessMap:Ye,anisotropy:de,anisotropyMap:j,clearcoat:L,clearcoatMap:pe,clearcoatNormalMap:ue,clearcoatRoughnessMap:ve,dispersion:T,iridescence:W,iridescenceMap:Ae,iridescenceThicknessMap:ae,sheen:ie,sheenColorMap:re,sheenRoughnessMap:Se,specularMap:Pe,specularColorMap:xe,specularIntensityMap:Ve,transmission:Z,transmissionMap:q,thicknessMap:ge,gradientMap:me,opaque:_.transparent===!1&&_.blending===_i&&_.alphaToCoverage===!1,alphaMap:De,alphaTest:ce,alphaHash:ne,combine:_.combine,mapUv:_e&&S(_.map.channel),aoMapUv:Te&&S(_.aoMap.channel),lightMapUv:Ee&&S(_.lightMap.channel),bumpMapUv:fe&&S(_.bumpMap.channel),normalMapUv:be&&S(_.normalMap.channel),displacementMapUv:O&&S(_.displacementMap.channel),emissiveMapUv:We&&S(_.emissiveMap.channel),metalnessMapUv:ze&&S(_.metalnessMap.channel),roughnessMapUv:Ye&&S(_.roughnessMap.channel),anisotropyMapUv:j&&S(_.anisotropyMap.channel),clearcoatMapUv:pe&&S(_.clearcoatMap.channel),clearcoatNormalMapUv:ue&&S(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&S(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&S(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&S(_.iridescenceThicknessMap.channel),sheenColorMapUv:re&&S(_.sheenColorMap.channel),sheenRoughnessMapUv:Se&&S(_.sheenRoughnessMap.channel),specularMapUv:Pe&&S(_.specularMap.channel),specularColorMapUv:xe&&S(_.specularColorMap.channel),specularIntensityMapUv:Ve&&S(_.specularIntensityMap.channel),transmissionMapUv:q&&S(_.transmissionMap.channel),thicknessMapUv:ge&&S(_.thicknessMap.channel),alphaMapUv:De&&S(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(be||de),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!I.attributes.uv&&(_e||De),fog:!!P,useFog:_.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&be===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:C.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:k,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:_e&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:We&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===tn,flipSided:_.side===Dt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ie&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&_.extensions.multiDraw===!0||le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return nt.vertexUv1s=f.has(1),nt.vertexUv2s=f.has(2),nt.vertexUv3s=f.has(3),f.clear(),nt}function u(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const D in _.defines)M.push(D),M.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(h(M,_),g(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function h(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function g(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),_.push(a.mask)}function A(_){const M=m[_.type];let D;if(M){const R=en[M];D=_h.clone(R.uniforms)}else D=_.uniforms;return D}function E(_,M){let D=p.get(M);return D!==void 0?++D.usedTimes:(D=new t0(i,M,_,r),l.push(D),p.set(M,D)),D}function y(_){if(--_.usedTimes===0){const M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),p.delete(_.cacheKey),_.destroy()}}function x(_){o.remove(_)}function b(){o.dispose()}return{getParameters:v,getProgramCacheKey:u,getUniforms:A,acquireProgram:E,releaseProgram:y,releaseShaderCache:x,programs:l,dispose:b}}function a0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,f){i.get(a)[o]=f}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function o0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ko(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(c){let m=0;return c.isInstancedMesh&&(m+=2),c.isSkinnedMesh&&(m+=1),m}function o(c,m,S,v,u,h){let g=i[e];return g===void 0?(g={id:c.id,object:c,geometry:m,material:S,materialVariant:a(c),groupOrder:v,renderOrder:c.renderOrder,z:u,group:h},i[e]=g):(g.id=c.id,g.object=c,g.geometry=m,g.material=S,g.materialVariant=a(c),g.groupOrder=v,g.renderOrder=c.renderOrder,g.z=u,g.group=h),e++,g}function f(c,m,S,v,u,h){const g=o(c,m,S,v,u,h);S.transmission>0?n.push(g):S.transparent===!0?r.push(g):t.push(g)}function l(c,m,S,v,u,h){const g=o(c,m,S,v,u,h);S.transmission>0?n.unshift(g):S.transparent===!0?r.unshift(g):t.unshift(g)}function p(c,m){t.length>1&&t.sort(c||o0),n.length>1&&n.sort(m||ko),r.length>1&&r.sort(m||ko)}function d(){for(let c=e,m=i.length;c<m;c++){const S=i[c];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:f,unshift:l,finish:d,sort:p}}function l0(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Vo,i.set(n,[a])):r>=s.length?(a=new Vo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function c0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Ze};break;case"SpotLight":t={position:new K,direction:new K,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new K,halfWidth:new K,halfHeight:new K};break}return i[e.id]=t,t}}}function h0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let u0=0;function f0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function d0(i){const e=new c0,t=h0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new K);const r=new K,s=new lt,a=new lt;function o(l){let p=0,d=0,c=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let m=0,S=0,v=0,u=0,h=0,g=0,A=0,E=0,y=0,x=0,b=0;l.sort(f0);for(let M=0,D=l.length;M<D;M++){const R=l[M],C=R.color,P=R.intensity,I=R.distance;let B=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Si?B=R.shadow.map.texture:B=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)p+=C.r*P,d+=C.g*P,c+=C.b*P;else if(R.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(R.sh.coefficients[z],P);b++}else if(R.isDirectionalLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const H=R.shadow,U=t.get(R);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,n.directionalShadow[m]=U,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=R.shadow.matrix,g++}n.directional[m]=z,m++}else if(R.isSpotLight){const z=e.get(R);z.position.setFromMatrixPosition(R.matrixWorld),z.color.copy(C).multiplyScalar(P),z.distance=I,z.coneCos=Math.cos(R.angle),z.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),z.decay=R.decay,n.spot[v]=z;const H=R.shadow;if(R.map&&(n.spotLightMap[y]=R.map,y++,H.updateMatrices(R),R.castShadow&&x++),n.spotLightMatrix[v]=H.matrix,R.castShadow){const U=t.get(R);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,n.spotShadow[v]=U,n.spotShadowMap[v]=B,E++}v++}else if(R.isRectAreaLight){const z=e.get(R);z.color.copy(C).multiplyScalar(P),z.halfWidth.set(R.width*.5,0,0),z.halfHeight.set(0,R.height*.5,0),n.rectArea[u]=z,u++}else if(R.isPointLight){const z=e.get(R);if(z.color.copy(R.color).multiplyScalar(R.intensity),z.distance=R.distance,z.decay=R.decay,R.castShadow){const H=R.shadow,U=t.get(R);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,U.shadowCameraNear=H.camera.near,U.shadowCameraFar=H.camera.far,n.pointShadow[S]=U,n.pointShadowMap[S]=B,n.pointShadowMatrix[S]=R.shadow.matrix,A++}n.point[S]=z,S++}else if(R.isHemisphereLight){const z=e.get(R);z.skyColor.copy(R.color).multiplyScalar(P),z.groundColor.copy(R.groundColor).multiplyScalar(P),n.hemi[h]=z,h++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=p,n.ambient[1]=d,n.ambient[2]=c;const _=n.hash;(_.directionalLength!==m||_.pointLength!==S||_.spotLength!==v||_.rectAreaLength!==u||_.hemiLength!==h||_.numDirectionalShadows!==g||_.numPointShadows!==A||_.numSpotShadows!==E||_.numSpotMaps!==y||_.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=u,n.point.length=S,n.hemi.length=h,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=A,n.pointShadowMap.length=A,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=A,n.spotLightMatrix.length=E+y-x,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=b,_.directionalLength=m,_.pointLength=S,_.spotLength=v,_.rectAreaLength=u,_.hemiLength=h,_.numDirectionalShadows=g,_.numPointShadows=A,_.numSpotShadows=E,_.numSpotMaps=y,_.numLightProbes=b,n.version=u0++)}function f(l,p){let d=0,c=0,m=0,S=0,v=0;const u=p.matrixWorldInverse;for(let h=0,g=l.length;h<g;h++){const A=l[h];if(A.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),d++}else if(A.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(u),m++}else if(A.isRectAreaLight){const E=n.rectArea[S];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(u),a.identity(),s.copy(A.matrixWorld),s.premultiply(u),a.extractRotation(s),E.halfWidth.set(A.width*.5,0,0),E.halfHeight.set(0,A.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),S++}else if(A.isPointLight){const E=n.point[c];E.position.setFromMatrixPosition(A.matrixWorld),E.position.applyMatrix4(u),c++}else if(A.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(A.matrixWorld),E.direction.transformDirection(u),v++}}}return{setup:o,setupView:f,state:n}}function Wo(i){const e=new d0(i),t=[],n=[];function r(p){l.camera=p,t.length=0,n.length=0}function s(p){t.push(p)}function a(p){n.push(p)}function o(){e.setup(t)}function f(p){e.setupView(t,p)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:f,pushLight:s,pushShadow:a}}function p0(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Wo(i),e.set(r,[o])):s>=a.length?(o=new Wo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const m0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,g0=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],v0=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Xo=new lt,Ii=new K,ys=new K;function x0(i,e,t){let n=new Da;const r=new ke,s=new ke,a=new ht,o=new Sh,f=new Eh,l={},p=t.maxTextureSize,d={[Ln]:Dt,[Dt]:Ln,[tn]:tn},c=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:m0,fragmentShader:_0}),m=c.clone();m.defines.HORIZONTAL_PASS=1;const S=new $t;S.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Lt(S,c),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ar;let h=this.type;this.render=function(x,b,_){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||x.length===0)return;this.type===$l&&(He("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ar);const M=i.getRenderTarget(),D=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),C=i.state;C.setBlending(gn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const P=h!==this.type;P&&b.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(B=>B.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,B=x.length;I<B;I++){const z=x[I],H=z.shadow;if(H===void 0){He("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const U=H.getFrameExtents();r.multiply(U),s.copy(H.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/U.x),r.x=s.x*U.x,H.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/U.y),r.y=s.y*U.y,H.mapSize.y=s.y));const N=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=N,H.map===null||P===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ui){if(z.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new an(r.x,r.y,{format:Si,type:xn,minFilter:ut,magFilter:ut,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Xi(r.x,r.y,nn),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Mn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Mt,H.map.depthTexture.magFilter=Mt}else z.isPointLight?(H.map=new Ll(r.x),H.map.depthTexture=new ph(r.x,ln)):(H.map=new an(r.x,r.y),H.map.depthTexture=new Xi(r.x,r.y,ln)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Mn,this.type===Ar?(H.map.depthTexture.compareFunction=N?wa:Aa,H.map.depthTexture.minFilter=ut,H.map.depthTexture.magFilter=ut):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Mt,H.map.depthTexture.magFilter=Mt);H.camera.updateProjectionMatrix()}const F=H.map.isWebGLCubeRenderTarget?6:1;for(let V=0;V<F;V++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,V),i.clear();else{V===0&&(i.setRenderTarget(H.map),i.clear());const k=H.getViewport(V);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),C.viewport(a)}if(z.isPointLight){const k=H.camera,se=H.matrix,he=z.distance||k.far;he!==k.far&&(k.far=he,k.updateProjectionMatrix()),Ii.setFromMatrixPosition(z.matrixWorld),k.position.copy(Ii),ys.copy(k.position),ys.add(g0[V]),k.up.copy(v0[V]),k.lookAt(ys),k.updateMatrixWorld(),se.makeTranslation(-Ii.x,-Ii.y,-Ii.z),Xo.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Xo,k.coordinateSystem,k.reversedDepth)}else H.updateMatrices(z);n=H.getFrustum(),E(b,_,H.camera,z,this.type)}H.isPointLightShadow!==!0&&this.type===Ui&&g(H,_),H.needsUpdate=!1}h=this.type,u.needsUpdate=!1,i.setRenderTarget(M,D,R)};function g(x,b){const _=e.update(v);c.defines.VSM_SAMPLES!==x.blurSamples&&(c.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,c.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new an(r.x,r.y,{format:Si,type:xn})),c.uniforms.shadow_pass.value=x.map.depthTexture,c.uniforms.resolution.value=x.mapSize,c.uniforms.radius.value=x.radius,i.setRenderTarget(x.mapPass),i.clear(),i.renderBufferDirect(b,null,_,c,v,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,i.setRenderTarget(x.map),i.clear(),i.renderBufferDirect(b,null,_,m,v,null)}function A(x,b,_,M){let D=null;const R=_.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(R!==void 0)D=R;else if(D=_.isPointLight===!0?f:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const C=D.uuid,P=b.uuid;let I=l[C];I===void 0&&(I={},l[C]=I);let B=I[P];B===void 0&&(B=D.clone(),I[P]=B,b.addEventListener("dispose",y)),D=B}if(D.visible=b.visible,D.wireframe=b.wireframe,M===Ui?D.side=b.shadowSide!==null?b.shadowSide:b.side:D.side=b.shadowSide!==null?b.shadowSide:d[b.side],D.alphaMap=b.alphaMap,D.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,D.map=b.map,D.clipShadows=b.clipShadows,D.clippingPlanes=b.clippingPlanes,D.clipIntersection=b.clipIntersection,D.displacementMap=b.displacementMap,D.displacementScale=b.displacementScale,D.displacementBias=b.displacementBias,D.wireframeLinewidth=b.wireframeLinewidth,D.linewidth=b.linewidth,_.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const C=i.properties.get(D);C.light=_}return D}function E(x,b,_,M,D){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&D===Ui)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,x.matrixWorld);const P=e.update(x),I=x.material;if(Array.isArray(I)){const B=P.groups;for(let z=0,H=B.length;z<H;z++){const U=B[z],N=I[U.materialIndex];if(N&&N.visible){const F=A(x,N,M,D);x.onBeforeShadow(i,x,b,_,P,F,U),i.renderBufferDirect(_,null,P,F,x,U),x.onAfterShadow(i,x,b,_,P,F,U)}}}else if(I.visible){const B=A(x,I,M,D);x.onBeforeShadow(i,x,b,_,P,B,null),i.renderBufferDirect(_,null,P,B,x,null),x.onAfterShadow(i,x,b,_,P,B,null)}}const C=x.children;for(let P=0,I=C.length;P<I;P++)E(C[P],b,_,M,D)}function y(x){x.target.removeEventListener("dispose",y);for(const _ in l){const M=l[_],D=x.target.uuid;D in M&&(M[D].dispose(),delete M[D])}}}function M0(i,e){function t(){let q=!1;const ge=new ht;let me=null;const De=new ht(0,0,0,0);return{setMask:function(ce){me!==ce&&!q&&(i.colorMask(ce,ce,ce,ce),me=ce)},setLocked:function(ce){q=ce},setClear:function(ce,ne,Ie,Ge,nt){nt===!0&&(ce*=Ge,ne*=Ge,Ie*=Ge),ge.set(ce,ne,Ie,Ge),De.equals(ge)===!1&&(i.clearColor(ce,ne,Ie,Ge),De.copy(ge))},reset:function(){q=!1,me=null,De.set(-1,0,0,0)}}}function n(){let q=!1,ge=!1,me=null,De=null,ce=null;return{setReversed:function(ne){if(ge!==ne){const Ie=e.get("EXT_clip_control");ne?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),ge=ne;const Ge=ce;ce=null,this.setClear(Ge)}},getReversed:function(){return ge},setTest:function(ne){ne?X(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(ne){me!==ne&&!q&&(i.depthMask(ne),me=ne)},setFunc:function(ne){if(ge&&(ne=Cc[ne]),De!==ne){switch(ne){case Rs:i.depthFunc(i.NEVER);break;case Cs:i.depthFunc(i.ALWAYS);break;case Ps:i.depthFunc(i.LESS);break;case xi:i.depthFunc(i.LEQUAL);break;case Ds:i.depthFunc(i.EQUAL);break;case Ls:i.depthFunc(i.GEQUAL);break;case Is:i.depthFunc(i.GREATER);break;case Us:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=ne}},setLocked:function(ne){q=ne},setClear:function(ne){ce!==ne&&(ce=ne,ge&&(ne=1-ne),i.clearDepth(ne))},reset:function(){q=!1,me=null,De=null,ce=null,ge=!1}}}function r(){let q=!1,ge=null,me=null,De=null,ce=null,ne=null,Ie=null,Ge=null,nt=null;return{setTest:function(Qe){q||(Qe?X(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(Qe){ge!==Qe&&!q&&(i.stencilMask(Qe),ge=Qe)},setFunc:function(Qe,Ot,Bt){(me!==Qe||De!==Ot||ce!==Bt)&&(i.stencilFunc(Qe,Ot,Bt),me=Qe,De=Ot,ce=Bt)},setOp:function(Qe,Ot,Bt){(ne!==Qe||Ie!==Ot||Ge!==Bt)&&(i.stencilOp(Qe,Ot,Bt),ne=Qe,Ie=Ot,Ge=Bt)},setLocked:function(Qe){q=Qe},setClear:function(Qe){nt!==Qe&&(i.clearStencil(Qe),nt=Qe)},reset:function(){q=!1,ge=null,me=null,De=null,ce=null,ne=null,Ie=null,Ge=null,nt=null}}}const s=new t,a=new n,o=new r,f=new WeakMap,l=new WeakMap;let p={},d={},c=new WeakMap,m=[],S=null,v=!1,u=null,h=null,g=null,A=null,E=null,y=null,x=null,b=new Ze(0,0,0),_=0,M=!1,D=null,R=null,C=null,P=null,I=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,H=0;const U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),z=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),z=H>=2);let N=null,F={};const V=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),se=new ht().fromArray(V),he=new ht().fromArray(k);function oe(q,ge,me,De){const ce=new Uint8Array(4),ne=i.createTexture();i.bindTexture(q,ne),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ie=0;Ie<me;Ie++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(ge+Ie,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return ne}const G={};G[i.TEXTURE_2D]=oe(i.TEXTURE_2D,i.TEXTURE_2D,1),G[i.TEXTURE_CUBE_MAP]=oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[i.TEXTURE_2D_ARRAY]=oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),G[i.TEXTURE_3D]=oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(i.DEPTH_TEST),a.setFunc(xi),fe(!1),be(Wa),X(i.CULL_FACE),Te(gn);function X(q){p[q]!==!0&&(i.enable(q),p[q]=!0)}function ee(q){p[q]!==!1&&(i.disable(q),p[q]=!1)}function Me(q,ge){return d[q]!==ge?(i.bindFramebuffer(q,ge),d[q]=ge,q===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ge),q===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function le(q,ge){let me=m,De=!1;if(q){me=c.get(ge),me===void 0&&(me=[],c.set(ge,me));const ce=q.textures;if(me.length!==ce.length||me[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ie=ce.length;ne<Ie;ne++)me[ne]=i.COLOR_ATTACHMENT0+ne;me.length=ce.length,De=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,De=!0);De&&i.drawBuffers(me)}function _e(q){return S!==q?(i.useProgram(q),S=q,!0):!1}const Fe={[Vn]:i.FUNC_ADD,[Jl]:i.FUNC_SUBTRACT,[Ql]:i.FUNC_REVERSE_SUBTRACT};Fe[ec]=i.MIN,Fe[tc]=i.MAX;const ye={[nc]:i.ZERO,[ic]:i.ONE,[rc]:i.SRC_COLOR,[As]:i.SRC_ALPHA,[hc]:i.SRC_ALPHA_SATURATE,[lc]:i.DST_COLOR,[ac]:i.DST_ALPHA,[sc]:i.ONE_MINUS_SRC_COLOR,[ws]:i.ONE_MINUS_SRC_ALPHA,[cc]:i.ONE_MINUS_DST_COLOR,[oc]:i.ONE_MINUS_DST_ALPHA,[uc]:i.CONSTANT_COLOR,[fc]:i.ONE_MINUS_CONSTANT_COLOR,[dc]:i.CONSTANT_ALPHA,[pc]:i.ONE_MINUS_CONSTANT_ALPHA};function Te(q,ge,me,De,ce,ne,Ie,Ge,nt,Qe){if(q===gn){v===!0&&(ee(i.BLEND),v=!1);return}if(v===!1&&(X(i.BLEND),v=!0),q!==Zl){if(q!==u||Qe!==M){if((h!==Vn||E!==Vn)&&(i.blendEquation(i.FUNC_ADD),h=Vn,E=Vn),Qe)switch(q){case _i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFunc(i.ONE,i.ONE);break;case qa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ya:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:tt("WebGLState: Invalid blending: ",q);break}else switch(q){case _i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xa:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qa:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ya:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",q);break}g=null,A=null,y=null,x=null,b.set(0,0,0),_=0,u=q,M=Qe}return}ce=ce||ge,ne=ne||me,Ie=Ie||De,(ge!==h||ce!==E)&&(i.blendEquationSeparate(Fe[ge],Fe[ce]),h=ge,E=ce),(me!==g||De!==A||ne!==y||Ie!==x)&&(i.blendFuncSeparate(ye[me],ye[De],ye[ne],ye[Ie]),g=me,A=De,y=ne,x=Ie),(Ge.equals(b)===!1||nt!==_)&&(i.blendColor(Ge.r,Ge.g,Ge.b,nt),b.copy(Ge),_=nt),u=q,M=!1}function Ee(q,ge){q.side===tn?ee(i.CULL_FACE):X(i.CULL_FACE);let me=q.side===Dt;ge&&(me=!me),fe(me),q.blending===_i&&q.transparent===!1?Te(gn):Te(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),a.setFunc(q.depthFunc),a.setTest(q.depthTest),a.setMask(q.depthWrite),s.setMask(q.colorWrite);const De=q.stencilWrite;o.setTest(De),De&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),We(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function fe(q){D!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),D=q)}function be(q){q!==Kl?(X(i.CULL_FACE),q!==R&&(q===Wa?i.cullFace(i.BACK):q===jl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),R=q}function O(q){q!==C&&(z&&i.lineWidth(q),C=q)}function We(q,ge,me){q?(X(i.POLYGON_OFFSET_FILL),(P!==ge||I!==me)&&(P=ge,I=me,a.getReversed()&&(ge=-ge),i.polygonOffset(ge,me))):ee(i.POLYGON_OFFSET_FILL)}function ze(q){q?X(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function Ye(q){q===void 0&&(q=i.TEXTURE0+B-1),N!==q&&(i.activeTexture(q),N=q)}function de(q,ge,me){me===void 0&&(N===null?me=i.TEXTURE0+B-1:me=N);let De=F[me];De===void 0&&(De={type:void 0,texture:void 0},F[me]=De),(De.type!==q||De.texture!==ge)&&(N!==me&&(i.activeTexture(me),N=me),i.bindTexture(q,ge||G[q]),De.type=q,De.texture=ge)}function L(){const q=F[N];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function W(){try{i.compressedTexImage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function ie(){try{i.texSubImage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function Z(){try{i.texSubImage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function pe(){try{i.compressedTexSubImage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function ue(){try{i.texStorage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function ve(){try{i.texStorage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function Ae(){try{i.texImage2D(...arguments)}catch(q){tt("WebGLState:",q)}}function ae(){try{i.texImage3D(...arguments)}catch(q){tt("WebGLState:",q)}}function re(q){se.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),se.copy(q))}function Se(q){he.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),he.copy(q))}function Pe(q,ge){let me=l.get(ge);me===void 0&&(me=new WeakMap,l.set(ge,me));let De=me.get(q);De===void 0&&(De=i.getUniformBlockIndex(ge,q.name),me.set(q,De))}function xe(q,ge){const De=l.get(ge).get(q);f.get(ge)!==De&&(i.uniformBlockBinding(ge,De,q.__bindingPointIndex),f.set(ge,De))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},N=null,F={},d={},c=new WeakMap,m=[],S=null,v=!1,u=null,h=null,g=null,A=null,E=null,y=null,x=null,b=new Ze(0,0,0),_=0,M=!1,D=null,R=null,C=null,P=null,I=null,se.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:X,disable:ee,bindFramebuffer:Me,drawBuffers:le,useProgram:_e,setBlending:Te,setMaterial:Ee,setFlipSided:fe,setCullFace:be,setLineWidth:O,setPolygonOffset:We,setScissorTest:ze,activeTexture:Ye,bindTexture:de,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:W,texImage2D:Ae,texImage3D:ae,updateUBOMapping:Pe,uniformBlockBinding:xe,texStorage2D:ue,texStorage3D:ve,texSubImage2D:ie,texSubImage3D:Z,compressedTexSubImage2D:j,compressedTexSubImage3D:pe,scissor:re,viewport:Se,reset:Ve}}function S0(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,p=new WeakMap;let d;const c=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(L,T){return m?new OffscreenCanvas(L,T):Vi("canvas")}function v(L,T,W){let ie=1;const Z=de(L);if((Z.width>W||Z.height>W)&&(ie=W/Math.max(Z.width,Z.height)),ie<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const j=Math.floor(ie*Z.width),pe=Math.floor(ie*Z.height);d===void 0&&(d=S(j,pe));const ue=T?S(j,pe):d;return ue.width=j,ue.height=pe,ue.getContext("2d").drawImage(L,0,0,j,pe),He("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+j+"x"+pe+")."),ue}else return"data"in L&&He("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),L;return L}function u(L){return L.generateMipmaps}function h(L){i.generateMipmap(L)}function g(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(L,T,W,ie,Z=!1){if(L!==null){if(i[L]!==void 0)return i[L];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let j=T;if(T===i.RED&&(W===i.FLOAT&&(j=i.R32F),W===i.HALF_FLOAT&&(j=i.R16F),W===i.UNSIGNED_BYTE&&(j=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.R8UI),W===i.UNSIGNED_SHORT&&(j=i.R16UI),W===i.UNSIGNED_INT&&(j=i.R32UI),W===i.BYTE&&(j=i.R8I),W===i.SHORT&&(j=i.R16I),W===i.INT&&(j=i.R32I)),T===i.RG&&(W===i.FLOAT&&(j=i.RG32F),W===i.HALF_FLOAT&&(j=i.RG16F),W===i.UNSIGNED_BYTE&&(j=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RG8UI),W===i.UNSIGNED_SHORT&&(j=i.RG16UI),W===i.UNSIGNED_INT&&(j=i.RG32UI),W===i.BYTE&&(j=i.RG8I),W===i.SHORT&&(j=i.RG16I),W===i.INT&&(j=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGB8UI),W===i.UNSIGNED_SHORT&&(j=i.RGB16UI),W===i.UNSIGNED_INT&&(j=i.RGB32UI),W===i.BYTE&&(j=i.RGB8I),W===i.SHORT&&(j=i.RGB16I),W===i.INT&&(j=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),W===i.UNSIGNED_INT&&(j=i.RGBA32UI),W===i.BYTE&&(j=i.RGBA8I),W===i.SHORT&&(j=i.RGBA16I),W===i.INT&&(j=i.RGBA32I)),T===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),T===i.RGBA){const pe=Z?Ir:Je.getTransfer(ie);W===i.FLOAT&&(j=i.RGBA32F),W===i.HALF_FLOAT&&(j=i.RGBA16F),W===i.UNSIGNED_BYTE&&(j=pe===it?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function E(L,T){let W;return L?T===null||T===ln||T===Gi?W=i.DEPTH24_STENCIL8:T===nn?W=i.DEPTH32F_STENCIL8:T===Hi&&(W=i.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ln||T===Gi?W=i.DEPTH_COMPONENT24:T===nn?W=i.DEPTH_COMPONENT32F:T===Hi&&(W=i.DEPTH_COMPONENT16),W}function y(L,T){return u(L)===!0||L.isFramebufferTexture&&L.minFilter!==Mt&&L.minFilter!==ut?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function x(L){const T=L.target;T.removeEventListener("dispose",x),_(T),T.isVideoTexture&&p.delete(T)}function b(L){const T=L.target;T.removeEventListener("dispose",b),D(T)}function _(L){const T=n.get(L);if(T.__webglInit===void 0)return;const W=L.source,ie=c.get(W);if(ie){const Z=ie[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&M(L),Object.keys(ie).length===0&&c.delete(W)}n.remove(L)}function M(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const W=L.source,ie=c.get(W);delete ie[T.__cacheKey],a.memory.textures--}function D(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(T.__webglFramebuffer[ie]))for(let Z=0;Z<T.__webglFramebuffer[ie].length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[ie][Z]);else i.deleteFramebuffer(T.__webglFramebuffer[ie]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[ie])}else{if(Array.isArray(T.__webglFramebuffer))for(let ie=0;ie<T.__webglFramebuffer.length;ie++)i.deleteFramebuffer(T.__webglFramebuffer[ie]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ie=0;ie<T.__webglColorRenderbuffer.length;ie++)T.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[ie]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const W=L.textures;for(let ie=0,Z=W.length;ie<Z;ie++){const j=n.get(W[ie]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(W[ie])}n.remove(L)}let R=0;function C(){R=0}function P(){const L=R;return L>=r.maxTextures&&He("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),R+=1,L}function I(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function B(L,T){const W=n.get(L);if(L.isVideoTexture&&ze(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const ie=L.image;if(ie===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{G(W,L,T);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}function z(L,T){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){G(W,L,T);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T)}function H(L,T){const W=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){G(W,L,T);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)}function U(L,T){const W=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){X(W,L,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)}const N={[Ns]:i.REPEAT,[Yt]:i.CLAMP_TO_EDGE,[Fs]:i.MIRRORED_REPEAT},F={[Mt]:i.NEAREST,[gc]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[ut]:i.LINEAR,[Kr]:i.LINEAR_MIPMAP_NEAREST,[_n]:i.LINEAR_MIPMAP_LINEAR},V={[Mc]:i.NEVER,[Tc]:i.ALWAYS,[Sc]:i.LESS,[Aa]:i.LEQUAL,[Ec]:i.EQUAL,[wa]:i.GEQUAL,[yc]:i.GREATER,[bc]:i.NOTEQUAL};function k(L,T){if(T.type===nn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ut||T.magFilter===Kr||T.magFilter===nr||T.magFilter===_n||T.minFilter===ut||T.minFilter===Kr||T.minFilter===nr||T.minFilter===_n)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,N[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,N[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,N[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,F[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,F[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,V[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Mt||T.minFilter!==nr&&T.minFilter!==_n||T.type===nn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function se(L,T){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",x));const ie=T.source;let Z=c.get(ie);Z===void 0&&(Z={},c.set(ie,Z));const j=I(T);if(j!==L.__cacheKey){Z[j]===void 0&&(Z[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),Z[j].usedTimes++;const pe=Z[L.__cacheKey];pe!==void 0&&(Z[L.__cacheKey].usedTimes--,pe.usedTimes===0&&M(T)),L.__cacheKey=j,L.__webglTexture=Z[j].texture}return W}function he(L,T,W){return Math.floor(Math.floor(L/W)/T)}function oe(L,T,W,ie){const j=L.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,W,ie,T.data);else{j.sort((ae,re)=>ae.start-re.start);let pe=0;for(let ae=1;ae<j.length;ae++){const re=j[pe],Se=j[ae],Pe=re.start+re.count,xe=he(Se.start,T.width,4),Ve=he(re.start,T.width,4);Se.start<=Pe+1&&xe===Ve&&he(Se.start+Se.count-1,T.width,4)===xe?re.count=Math.max(re.count,Se.start+Se.count-re.start):(++pe,j[pe]=Se)}j.length=pe+1;const ue=i.getParameter(i.UNPACK_ROW_LENGTH),ve=i.getParameter(i.UNPACK_SKIP_PIXELS),Ae=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let ae=0,re=j.length;ae<re;ae++){const Se=j[ae],Pe=Math.floor(Se.start/4),xe=Math.ceil(Se.count/4),Ve=Pe%T.width,q=Math.floor(Pe/T.width),ge=xe,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,q),t.texSubImage2D(i.TEXTURE_2D,0,Ve,q,ge,me,W,ie,T.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function G(L,T,W){let ie=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ie=i.TEXTURE_3D);const Z=se(L,T),j=T.source;t.bindTexture(ie,L.__webglTexture,i.TEXTURE0+W);const pe=n.get(j);if(j.version!==pe.__version||Z===!0){t.activeTexture(i.TEXTURE0+W);const ue=Je.getPrimaries(Je.workingColorSpace),ve=T.colorSpace===Pn?null:Je.getPrimaries(T.colorSpace),Ae=T.colorSpace===Pn||ue===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ae=v(T.image,!1,r.maxTextureSize);ae=Ye(T,ae);const re=s.convert(T.format,T.colorSpace),Se=s.convert(T.type);let Pe=A(T.internalFormat,re,Se,T.colorSpace,T.isVideoTexture);k(ie,T);let xe;const Ve=T.mipmaps,q=T.isVideoTexture!==!0,ge=pe.__version===void 0||Z===!0,me=j.dataReady,De=y(T,ae);if(T.isDepthTexture)Pe=E(T.format===Xn,T.type),ge&&(q?t.texStorage2D(i.TEXTURE_2D,1,Pe,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ae.width,ae.height,0,re,Se,null));else if(T.isDataTexture)if(Ve.length>0){q&&ge&&t.texStorage2D(i.TEXTURE_2D,De,Pe,Ve[0].width,Ve[0].height);for(let ce=0,ne=Ve.length;ce<ne;ce++)xe=Ve[ce],q?me&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,xe.width,xe.height,re,Se,xe.data):t.texImage2D(i.TEXTURE_2D,ce,Pe,xe.width,xe.height,0,re,Se,xe.data);T.generateMipmaps=!1}else q?(ge&&t.texStorage2D(i.TEXTURE_2D,De,Pe,ae.width,ae.height),me&&oe(T,ae,re,Se)):t.texImage2D(i.TEXTURE_2D,0,Pe,ae.width,ae.height,0,re,Se,ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){q&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Pe,Ve[0].width,Ve[0].height,ae.depth);for(let ce=0,ne=Ve.length;ce<ne;ce++)if(xe=Ve[ce],T.format!==Kt)if(re!==null)if(q){if(me)if(T.layerUpdates.size>0){const Ie=Eo(xe.width,xe.height,T.format,T.type);for(const Ge of T.layerUpdates){const nt=xe.data.subarray(Ge*Ie/xe.data.BYTES_PER_ELEMENT,(Ge+1)*Ie/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Ge,xe.width,xe.height,1,re,nt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,xe.width,xe.height,ae.depth,re,xe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Pe,xe.width,xe.height,ae.depth,0,xe.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,xe.width,xe.height,ae.depth,re,Se,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Pe,xe.width,xe.height,ae.depth,0,re,Se,xe.data)}else{q&&ge&&t.texStorage2D(i.TEXTURE_2D,De,Pe,Ve[0].width,Ve[0].height);for(let ce=0,ne=Ve.length;ce<ne;ce++)xe=Ve[ce],T.format!==Kt?re!==null?q?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,xe.width,xe.height,re,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Pe,xe.width,xe.height,0,xe.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?me&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,xe.width,xe.height,re,Se,xe.data):t.texImage2D(i.TEXTURE_2D,ce,Pe,xe.width,xe.height,0,re,Se,xe.data)}else if(T.isDataArrayTexture)if(q){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,Pe,ae.width,ae.height,ae.depth),me)if(T.layerUpdates.size>0){const ce=Eo(ae.width,ae.height,T.format,T.type);for(const ne of T.layerUpdates){const Ie=ae.data.subarray(ne*ce/ae.data.BYTES_PER_ELEMENT,(ne+1)*ce/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,ae.width,ae.height,1,re,Se,Ie)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,re,Se,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ae.width,ae.height,ae.depth,0,re,Se,ae.data);else if(T.isData3DTexture)q?(ge&&t.texStorage3D(i.TEXTURE_3D,De,Pe,ae.width,ae.height,ae.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,re,Se,ae.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ae.width,ae.height,ae.depth,0,re,Se,ae.data);else if(T.isFramebufferTexture){if(ge)if(q)t.texStorage2D(i.TEXTURE_2D,De,Pe,ae.width,ae.height);else{let ce=ae.width,ne=ae.height;for(let Ie=0;Ie<De;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Pe,ce,ne,0,re,Se,null),ce>>=1,ne>>=1}}else if(Ve.length>0){if(q&&ge){const ce=de(Ve[0]);t.texStorage2D(i.TEXTURE_2D,De,Pe,ce.width,ce.height)}for(let ce=0,ne=Ve.length;ce<ne;ce++)xe=Ve[ce],q?me&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,re,Se,xe):t.texImage2D(i.TEXTURE_2D,ce,Pe,re,Se,xe);T.generateMipmaps=!1}else if(q){if(ge){const ce=de(ae);t.texStorage2D(i.TEXTURE_2D,De,Pe,ce.width,ce.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,re,Se,ae)}else t.texImage2D(i.TEXTURE_2D,0,Pe,re,Se,ae);u(T)&&h(ie),pe.__version=j.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function X(L,T,W){if(T.image.length!==6)return;const ie=se(L,T),Z=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+W);const j=n.get(Z);if(Z.version!==j.__version||ie===!0){t.activeTexture(i.TEXTURE0+W);const pe=Je.getPrimaries(Je.workingColorSpace),ue=T.colorSpace===Pn?null:Je.getPrimaries(T.colorSpace),ve=T.colorSpace===Pn||pe===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ae=T.isCompressedTexture||T.image[0].isCompressedTexture,ae=T.image[0]&&T.image[0].isDataTexture,re=[];for(let ne=0;ne<6;ne++)!Ae&&!ae?re[ne]=v(T.image[ne],!0,r.maxCubemapSize):re[ne]=ae?T.image[ne].image:T.image[ne],re[ne]=Ye(T,re[ne]);const Se=re[0],Pe=s.convert(T.format,T.colorSpace),xe=s.convert(T.type),Ve=A(T.internalFormat,Pe,xe,T.colorSpace),q=T.isVideoTexture!==!0,ge=j.__version===void 0||ie===!0,me=Z.dataReady;let De=y(T,Se);k(i.TEXTURE_CUBE_MAP,T);let ce;if(Ae){q&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Ve,Se.width,Se.height);for(let ne=0;ne<6;ne++){ce=re[ne].mipmaps;for(let Ie=0;Ie<ce.length;Ie++){const Ge=ce[Ie];T.format!==Kt?Pe!==null?q?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,0,0,Ge.width,Ge.height,Pe,Ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,Ve,Ge.width,Ge.height,0,Ge.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,0,0,Ge.width,Ge.height,Pe,xe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie,Ve,Ge.width,Ge.height,0,Pe,xe,Ge.data)}}}else{if(ce=T.mipmaps,q&&ge){ce.length>0&&De++;const ne=de(re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,Ve,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ae){q?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,re[ne].width,re[ne].height,Pe,xe,re[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,re[ne].width,re[ne].height,0,Pe,xe,re[ne].data);for(let Ie=0;Ie<ce.length;Ie++){const nt=ce[Ie].image[ne].image;q?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,0,0,nt.width,nt.height,Pe,xe,nt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,Ve,nt.width,nt.height,0,Pe,xe,nt.data)}}else{q?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Pe,xe,re[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ve,Pe,xe,re[ne]);for(let Ie=0;Ie<ce.length;Ie++){const Ge=ce[Ie];q?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,0,0,Pe,xe,Ge.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ie+1,Ve,Pe,xe,Ge.image[ne])}}}u(T)&&h(i.TEXTURE_CUBE_MAP),j.__version=Z.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ee(L,T,W,ie,Z,j){const pe=s.convert(W.format,W.colorSpace),ue=s.convert(W.type),ve=A(W.internalFormat,pe,ue,W.colorSpace),Ae=n.get(T),ae=n.get(W);if(ae.__renderTarget=T,!Ae.__hasExternalTextures){const re=Math.max(1,T.width>>j),Se=Math.max(1,T.height>>j);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,j,ve,re,Se,T.depth,0,pe,ue,null):t.texImage2D(Z,j,ve,re,Se,0,pe,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,L),We(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,Z,ae.__webglTexture,0,O(T)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,Z,ae.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(L,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const ie=T.depthTexture,Z=ie&&ie.isDepthTexture?ie.type:null,j=E(T.stencilBuffer,Z),pe=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(T),j,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(T),j,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,j,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,L)}else{const ie=T.textures;for(let Z=0;Z<ie.length;Z++){const j=ie[Z],pe=s.convert(j.format,j.colorSpace),ue=s.convert(j.type),ve=A(j.internalFormat,pe,ue,j.colorSpace);We(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(T),ve,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(T),ve,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ve,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(L,T,W){const ie=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(T.depthTexture);if(Z.__renderTarget=T,(!Z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ie){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,T.depthTexture.addEventListener("dispose",x)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),k(i.TEXTURE_CUBE_MAP,T.depthTexture);const Ae=s.convert(T.depthTexture.format),ae=s.convert(T.depthTexture.type);let re;T.depthTexture.format===Mn?re=i.DEPTH_COMPONENT24:T.depthTexture.format===Xn&&(re=i.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,re,T.width,T.height,0,Ae,ae,null)}}else B(T.depthTexture,0);const j=Z.__webglTexture,pe=O(T),ue=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ve=T.depthTexture.format===Xn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(T.depthTexture.format===Mn)We(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ue,j,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ue,j,0);else if(T.depthTexture.format===Xn)We(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,ue,j,0,pe):i.framebufferTexture2D(i.FRAMEBUFFER,ve,ue,j,0);else throw new Error("Unknown depthTexture format")}function _e(L){const T=n.get(L),W=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ie=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ie){const Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ie.removeEventListener("dispose",Z)};ie.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=ie}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let ie=0;ie<6;ie++)le(T.__webglFramebuffer[ie],L,ie);else{const ie=L.texture.mipmaps;ie&&ie.length>0?le(T.__webglFramebuffer[0],L,0):le(T.__webglFramebuffer,L,0)}else if(W){T.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ie]),T.__webglDepthbuffer[ie]===void 0)T.__webglDepthbuffer[ie]=i.createRenderbuffer(),Me(T.__webglDepthbuffer[ie],L,!1);else{const Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}}else{const ie=L.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Me(T.__webglDepthbuffer,L,!1);else{const Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(L,T,W){const ie=n.get(L);T!==void 0&&ee(ie.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&_e(L)}function ye(L){const T=L.texture,W=n.get(L),ie=n.get(T);L.addEventListener("dispose",b);const Z=L.textures,j=L.isWebGLCubeRenderTarget===!0,pe=Z.length>1;if(pe||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=T.version,a.memory.textures++),j){W.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[ue]=[];for(let ve=0;ve<T.mipmaps.length;ve++)W.__webglFramebuffer[ue][ve]=i.createFramebuffer()}else W.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)W.__webglFramebuffer[ue]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(pe)for(let ue=0,ve=Z.length;ue<ve;ue++){const Ae=n.get(Z[ue]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(L.samples>0&&We(L)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const ve=Z[ue];W.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ue]);const Ae=s.convert(ve.format,ve.colorSpace),ae=s.convert(ve.type),re=A(ve.internalFormat,Ae,ae,ve.colorSpace,L.isXRRenderTarget===!0),Se=O(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,re,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,W.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(W.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),k(i.TEXTURE_CUBE_MAP,T);for(let ue=0;ue<6;ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)ee(W.__webglFramebuffer[ue][ve],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve);else ee(W.__webglFramebuffer[ue],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);u(T)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let ue=0,ve=Z.length;ue<ve;ue++){const Ae=Z[ue],ae=n.get(Ae);let re=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(re=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,ae.__webglTexture),k(re,Ae),ee(W.__webglFramebuffer,L,Ae,i.COLOR_ATTACHMENT0+ue,re,0),u(Ae)&&h(re)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ue=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,ie.__webglTexture),k(ue,T),T.mipmaps&&T.mipmaps.length>0)for(let ve=0;ve<T.mipmaps.length;ve++)ee(W.__webglFramebuffer[ve],L,T,i.COLOR_ATTACHMENT0,ue,ve);else ee(W.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,ue,0);u(T)&&h(ue),t.unbindTexture()}L.depthBuffer&&_e(L)}function Te(L){const T=L.textures;for(let W=0,ie=T.length;W<ie;W++){const Z=T[W];if(u(Z)){const j=g(L),pe=n.get(Z).__webglTexture;t.bindTexture(j,pe),h(j),t.unbindTexture()}}}const Ee=[],fe=[];function be(L){if(L.samples>0){if(We(L)===!1){const T=L.textures,W=L.width,ie=L.height;let Z=i.COLOR_BUFFER_BIT;const j=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=n.get(L),ue=T.length>1;if(ue)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer);const ve=L.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ae]);const ae=n.get(T[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ae,0)}i.blitFramebuffer(0,0,W,ie,0,0,W,ie,Z,i.NEAREST),f===!0&&(Ee.length=0,fe.length=0,Ee.push(i.COLOR_ATTACHMENT0+Ae),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ee.push(j),fe.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,pe.__webglColorRenderbuffer[Ae]);const ae=n.get(T[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&f){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function O(L){return Math.min(r.maxSamples,L.samples)}function We(L){const T=n.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ze(L){const T=a.render.frame;p.get(L)!==T&&(p.set(L,T),L.update())}function Ye(L,T){const W=L.colorSpace,ie=L.format,Z=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Ei&&W!==Pn&&(Je.getTransfer(W)===it?(ie!==Kt||Z!==Ft)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",W)),T}function de(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=C,this.setTexture2D=B,this.setTexture2DArray=z,this.setTexture3D=H,this.setTextureCube=U,this.rebindTextures=Fe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=_e,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function E0(i,e){function t(n,r=Pn){let s;const a=Je.getTransfer(r);if(n===Ft)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ul)return i.BYTE;if(n===fl)return i.SHORT;if(n===Hi)return i.UNSIGNED_SHORT;if(n===xa)return i.INT;if(n===ln)return i.UNSIGNED_INT;if(n===nn)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===ml)return i.ALPHA;if(n===_l)return i.RGB;if(n===Kt)return i.RGBA;if(n===Mn)return i.DEPTH_COMPONENT;if(n===Xn)return i.DEPTH_STENCIL;if(n===gl)return i.RED;if(n===Ea)return i.RED_INTEGER;if(n===Si)return i.RG;if(n===ya)return i.RG_INTEGER;if(n===ba)return i.RGBA_INTEGER;if(n===Rr||n===Cr||n===Pr||n===Dr)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Rr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Rr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Dr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Os||n===Bs||n===zs||n===Hs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Os)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gs||n===ks||n===Vs||n===Ws||n===Xs||n===qs||n===Ys)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Gs||n===ks)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Vs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ws)return s.COMPRESSED_R11_EAC;if(n===Xs)return s.COMPRESSED_SIGNED_R11_EAC;if(n===qs)return s.COMPRESSED_RG11_EAC;if(n===Ys)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ks||n===js||n===$s||n===Zs||n===Js||n===Qs||n===ea||n===ta||n===na||n===ia||n===ra||n===sa||n===aa||n===oa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ks)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===js)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$s)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Js)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qs)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ra)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===sa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===la||n===ca||n===ha)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===la)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ca)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ha)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ua||n===fa||n===da||n===pa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ua)return s.COMPRESSED_RED_RGTC1_EXT;if(n===fa)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===da)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,b0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class T0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cn({vertexShader:y0,fragmentShader:b0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Lt(new Zi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A0 extends Kn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",f=1,l=null,p=null,d=null,c=null,m=null,S=null;const v=typeof XRWebGLBinding<"u",u=new T0,h={},g=t.getContextAttributes();let A=null,E=null;const y=[],x=[],b=new ke;let _=null;const M=new Ht;M.viewport=new ht;const D=new Ht;D.viewport=new ht;const R=[M,D],C=new Nh;let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let X=y[G];return X===void 0&&(X=new es,y[G]=X),X.getTargetRaySpace()},this.getControllerGrip=function(G){let X=y[G];return X===void 0&&(X=new es,y[G]=X),X.getGripSpace()},this.getHand=function(G){let X=y[G];return X===void 0&&(X=new es,y[G]=X),X.getHandSpace()};function B(G){const X=x.indexOf(G.inputSource);if(X===-1)return;const ee=y[X];ee!==void 0&&(ee.update(G.inputSource,G.frame,l||a),ee.dispatchEvent({type:G.type,data:G.inputSource}))}function z(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let G=0;G<y.length;G++){const X=x[G];X!==null&&(x[G]=null,y[G].disconnect(X))}P=null,I=null,u.reset();for(const G in h)delete h[G];e.setRenderTarget(A),m=null,c=null,d=null,r=null,E=null,oe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,n.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return c!==null?c:m},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),g.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(b),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ee=null,Me=null,le=null;g.depth&&(le=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?Xn:Mn,Me=g.stencil?Gi:ln);const _e={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};d=this.getBinding(),c=d.createProjectionLayer(_e),r.updateRenderState({layers:[c]}),e.setPixelRatio(1),e.setSize(c.textureWidth,c.textureHeight,!1),E=new an(c.textureWidth,c.textureHeight,{format:Kt,type:Ft,depthTexture:new Xi(c.textureWidth,c.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1})}else{const ee={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new an(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(f),l=null,a=await r.requestReferenceSpace(o),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function H(G){for(let X=0;X<G.removed.length;X++){const ee=G.removed[X],Me=x.indexOf(ee);Me>=0&&(x[Me]=null,y[Me].disconnect(ee))}for(let X=0;X<G.added.length;X++){const ee=G.added[X];let Me=x.indexOf(ee);if(Me===-1){for(let _e=0;_e<y.length;_e++)if(_e>=x.length){x.push(ee),Me=_e;break}else if(x[_e]===null){x[_e]=ee,Me=_e;break}if(Me===-1)break}const le=y[Me];le&&le.connect(ee)}}const U=new K,N=new K;function F(G,X,ee){U.setFromMatrixPosition(X.matrixWorld),N.setFromMatrixPosition(ee.matrixWorld);const Me=U.distanceTo(N),le=X.projectionMatrix.elements,_e=ee.projectionMatrix.elements,Fe=le[14]/(le[10]-1),ye=le[14]/(le[10]+1),Te=(le[9]+1)/le[5],Ee=(le[9]-1)/le[5],fe=(le[8]-1)/le[0],be=(_e[8]+1)/_e[0],O=Fe*fe,We=Fe*be,ze=Me/(-fe+be),Ye=ze*-fe;if(X.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ye),G.translateZ(ze),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),le[10]===-1)G.projectionMatrix.copy(X.projectionMatrix),G.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const de=Fe+ze,L=ye+ze,T=O-Ye,W=We+(Me-Ye),ie=Te*ye/L*de,Z=Ee*ye/L*de;G.projectionMatrix.makePerspective(T,W,ie,Z,de,L),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function V(G,X){X===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(X.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let X=G.near,ee=G.far;u.texture!==null&&(u.depthNear>0&&(X=u.depthNear),u.depthFar>0&&(ee=u.depthFar)),C.near=D.near=M.near=X,C.far=D.far=M.far=ee,(P!==C.near||I!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),P=C.near,I=C.far),C.layers.mask=G.layers.mask|6,M.layers.mask=C.layers.mask&-5,D.layers.mask=C.layers.mask&-3;const Me=G.parent,le=C.cameras;V(C,Me);for(let _e=0;_e<le.length;_e++)V(le[_e],Me);le.length===2?F(C,M,D):C.projectionMatrix.copy(M.projectionMatrix),k(G,C,Me)};function k(G,X,ee){ee===null?G.matrix.copy(X.matrixWorld):(G.matrix.copy(ee.matrixWorld),G.matrix.invert(),G.matrix.multiply(X.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(X.projectionMatrix),G.projectionMatrixInverse.copy(X.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Wi*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(c===null&&m===null))return f},this.setFoveation=function(G){f=G,c!==null&&(c.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(C)},this.getCameraTexture=function(G){return h[G]};let se=null;function he(G,X){if(p=X.getViewerPose(l||a),S=X,p!==null){const ee=p.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let Me=!1;ee.length!==C.cameras.length&&(C.cameras.length=0,Me=!0);for(let ye=0;ye<ee.length;ye++){const Te=ee[ye];let Ee=null;if(m!==null)Ee=m.getViewport(Te);else{const be=d.getViewSubImage(c,Te);Ee=be.viewport,ye===0&&(e.setRenderTargetTextures(E,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(E))}let fe=R[ye];fe===void 0&&(fe=new Ht,fe.layers.enable(ye),fe.viewport=new ht,R[ye]=fe),fe.matrix.fromArray(Te.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(Te.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ye===0&&(C.matrix.copy(fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Me===!0&&C.cameras.push(fe)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=n.getBinding();const ye=d.getDepthInformation(ee[0]);ye&&ye.isValid&&ye.texture&&u.init(ye,r.renderState)}if(le&&le.includes("camera-access")&&v){e.state.unbindTexture(),d=n.getBinding();for(let ye=0;ye<ee.length;ye++){const Te=ee[ye].camera;if(Te){let Ee=h[Te];Ee||(Ee=new wl,h[Te]=Ee);const fe=d.getCameraImage(Te);Ee.sourceTexture=fe}}}}for(let ee=0;ee<y.length;ee++){const Me=x[ee],le=y[ee];Me!==null&&le!==void 0&&le.update(Me,X,l||a)}se&&se(G,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),S=null}const oe=new Dl;oe.setAnimationLoop(he),this.setAnimationLoop=function(G){se=G},this.dispose=function(){}}}const Gn=new jt,w0=new lt;function R0(i,e){function t(u,h){u.matrixAutoUpdate===!0&&u.updateMatrix(),h.value.copy(u.matrix)}function n(u,h){h.color.getRGB(u.fogColor.value,Rl(i)),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function r(u,h,g,A,E){h.isMeshBasicMaterial?s(u,h):h.isMeshLambertMaterial?(s(u,h),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(u,h),d(u,h)):h.isMeshPhongMaterial?(s(u,h),p(u,h),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(u,h),c(u,h),h.isMeshPhysicalMaterial&&m(u,h,E)):h.isMeshMatcapMaterial?(s(u,h),S(u,h)):h.isMeshDepthMaterial?s(u,h):h.isMeshDistanceMaterial?(s(u,h),v(u,h)):h.isMeshNormalMaterial?s(u,h):h.isLineBasicMaterial?(a(u,h),h.isLineDashedMaterial&&o(u,h)):h.isPointsMaterial?f(u,h,g,A):h.isSpriteMaterial?l(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.bumpMap&&(u.bumpMap.value=h.bumpMap,t(h.bumpMap,u.bumpMapTransform),u.bumpScale.value=h.bumpScale,h.side===Dt&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,t(h.normalMap,u.normalMapTransform),u.normalScale.value.copy(h.normalScale),h.side===Dt&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,t(h.displacementMap,u.displacementMapTransform),u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,u.emissiveMapTransform)),h.specularMap&&(u.specularMap.value=h.specularMap,t(h.specularMap,u.specularMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);const g=e.get(h),A=g.envMap,E=g.envMapRotation;A&&(u.envMap.value=A,Gn.copy(E),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),u.envMapRotation.value.setFromMatrix4(w0.makeRotationFromEuler(Gn)),u.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap&&(u.lightMap.value=h.lightMap,u.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,u.lightMapTransform)),h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,u.aoMapTransform))}function a(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform))}function o(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function f(u,h,g,A){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*g,u.scale.value=A*.5,h.map&&(u.map.value=h.map,t(h.map,u.uvTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function l(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function p(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4)}function d(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap)}function c(u,h){u.metalness.value=h.metalness,h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,u.metalnessMapTransform)),u.roughness.value=h.roughness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,u.roughnessMapTransform)),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function m(u,h,g){u.ior.value=h.ior,h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,u.sheenColorMapTransform)),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,u.sheenRoughnessMapTransform))),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,u.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(u.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Dt&&u.clearcoatNormalScale.value.negate())),h.dispersion>0&&(u.dispersion.value=h.dispersion),h.iridescence>0&&(u.iridescence.value=h.iridescence,u.iridescenceIOR.value=h.iridescenceIOR,u.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(u.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,u.iridescenceMapTransform)),h.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=g.texture,u.transmissionSamplerSize.value.set(g.width,g.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,u.transmissionMapTransform)),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(u.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(u.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,u.specularColorMapTransform)),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,u.specularIntensityMapTransform))}function S(u,h){h.matcap&&(u.matcap.value=h.matcap)}function v(u,h){const g=e.get(h).light;u.referencePosition.value.setFromMatrixPosition(g.matrixWorld),u.nearDistance.value=g.shadow.camera.near,u.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function C0(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(g,A){const E=A.program;n.uniformBlockBinding(g,E)}function l(g,A){let E=r[g.id];E===void 0&&(S(g),E=p(g),r[g.id]=E,g.addEventListener("dispose",u));const y=A.program;n.updateUBOMapping(g,y);const x=e.render.frame;s[g.id]!==x&&(c(g),s[g.id]=x)}function p(g){const A=d();g.__bindingPointIndex=A;const E=i.createBuffer(),y=g.__size,x=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,y,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,A,E),E}function d(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(g){const A=r[g.id],E=g.uniforms,y=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let x=0,b=E.length;x<b;x++){const _=Array.isArray(E[x])?E[x]:[E[x]];for(let M=0,D=_.length;M<D;M++){const R=_[M];if(m(R,x,M,y)===!0){const C=R.__offset,P=Array.isArray(R.value)?R.value:[R.value];let I=0;for(let B=0;B<P.length;B++){const z=P[B],H=v(z);typeof z=="number"||typeof z=="boolean"?(R.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,C+I,R.__data)):z.isMatrix3?(R.__data[0]=z.elements[0],R.__data[1]=z.elements[1],R.__data[2]=z.elements[2],R.__data[3]=0,R.__data[4]=z.elements[3],R.__data[5]=z.elements[4],R.__data[6]=z.elements[5],R.__data[7]=0,R.__data[8]=z.elements[6],R.__data[9]=z.elements[7],R.__data[10]=z.elements[8],R.__data[11]=0):(z.toArray(R.__data,I),I+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(g,A,E,y){const x=g.value,b=A+"_"+E;if(y[b]===void 0)return typeof x=="number"||typeof x=="boolean"?y[b]=x:y[b]=x.clone(),!0;{const _=y[b];if(typeof x=="number"||typeof x=="boolean"){if(_!==x)return y[b]=x,!0}else if(_.equals(x)===!1)return _.copy(x),!0}return!1}function S(g){const A=g.uniforms;let E=0;const y=16;for(let b=0,_=A.length;b<_;b++){const M=Array.isArray(A[b])?A[b]:[A[b]];for(let D=0,R=M.length;D<R;D++){const C=M[D],P=Array.isArray(C.value)?C.value:[C.value];for(let I=0,B=P.length;I<B;I++){const z=P[I],H=v(z),U=E%y,N=U%H.boundary,F=U+N;E+=N,F!==0&&y-F<H.storage&&(E+=y-F),C.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=E,E+=H.storage}}}const x=E%y;return x>0&&(E+=y-x),g.__size=E,g.__cache={},this}function v(g){const A={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(A.boundary=4,A.storage=4):g.isVector2?(A.boundary=8,A.storage=8):g.isVector3||g.isColor?(A.boundary=16,A.storage=12):g.isVector4?(A.boundary=16,A.storage=16):g.isMatrix3?(A.boundary=48,A.storage=48):g.isMatrix4?(A.boundary=64,A.storage=64):g.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):He("WebGLRenderer: Unsupported uniform value type.",g),A}function u(g){const A=g.target;A.removeEventListener("dispose",u);const E=a.indexOf(A.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function h(){for(const g in r)i.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:f,update:l,dispose:h}}const P0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qt=null;function D0(){return Qt===null&&(Qt=new Tl(P0,16,16,Si,xn),Qt.name="DFG_LUT",Qt.minFilter=ut,Qt.magFilter=ut,Qt.wrapS=Yt,Qt.wrapT=Yt,Qt.generateMipmaps=!1,Qt.needsUpdate=!0),Qt}class L0{constructor(e={}){const{canvas:t=wc(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:l=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:c=!1,outputBufferType:m=Ft}=e;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=a;const v=m,u=new Set([ba,ya,Ea]),h=new Set([Ft,ln,Hi,Gi,Ma,Sa]),g=new Uint32Array(4),A=new Int32Array(4);let E=null,y=null;const x=[],b=[];let _=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let D=!1;this._outputColorSpace=Pt;let R=0,C=0,P=null,I=-1,B=null;const z=new ht,H=new ht;let U=null;const N=new Ze(0);let F=0,V=t.width,k=t.height,se=1,he=null,oe=null;const G=new ht(0,0,V,k),X=new ht(0,0,V,k);let ee=!1;const Me=new Da;let le=!1,_e=!1;const Fe=new lt,ye=new K,Te=new ht,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function be(){return P===null?se:1}let O=n;function We(w,Y){return t.getContext(w,Y)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:f,preserveDrawingBuffer:l,powerPreference:p,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ga}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",Ge,!1),t.addEventListener("webglcontextcreationerror",nt,!1),O===null){const Y="webgl2";if(O=We(Y,w),O===null)throw We(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw tt("WebGLRenderer: "+w.message),w}let ze,Ye,de,L,T,W,ie,Z,j,pe,ue,ve,Ae,ae,re,Se,Pe,xe,Ve,q,ge,me,De;function ce(){ze=new Ld(O),ze.init(),ge=new E0(O,ze),Ye=new bd(O,ze,e,ge),de=new M0(O,ze),Ye.reversedDepthBuffer&&c&&de.buffers.depth.setReversed(!0),L=new Nd(O),T=new a0,W=new S0(O,ze,de,T,Ye,ge,L),ie=new Dd(M),Z=new zh(O),me=new Ed(O,Z),j=new Id(O,Z,L,me),pe=new Od(O,j,Z,me,L),xe=new Fd(O,Ye,W),re=new Td(T),ue=new s0(M,ie,ze,Ye,me,re),ve=new R0(M,T),Ae=new l0,ae=new p0(ze),Pe=new Sd(M,ie,de,pe,S,f),Se=new x0(M,pe,Ye),De=new C0(O,L,Ye,de),Ve=new yd(O,ze,L),q=new Ud(O,ze,L),L.programs=ue.programs,M.capabilities=Ye,M.extensions=ze,M.properties=T,M.renderLists=Ae,M.shadowMap=Se,M.state=de,M.info=L}ce(),v!==Ft&&(_=new zd(v,t.width,t.height,r,s));const ne=new A0(M,O);this.xr=ne,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=ze.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ze.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(w){w!==void 0&&(se=w,this.setSize(V,k,!1))},this.getSize=function(w){return w.set(V,k)},this.setSize=function(w,Y,te=!0){if(ne.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,k=Y,t.width=Math.floor(w*se),t.height=Math.floor(Y*se),te===!0&&(t.style.width=w+"px",t.style.height=Y+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(V*se,k*se).floor()},this.setDrawingBufferSize=function(w,Y,te){V=w,k=Y,se=te,t.width=Math.floor(w*te),t.height=Math.floor(Y*te),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(v===Ft){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(G)},this.setViewport=function(w,Y,te,Q){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,Y,te,Q),de.viewport(z.copy(G).multiplyScalar(se).round())},this.getScissor=function(w){return w.copy(X)},this.setScissor=function(w,Y,te,Q){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,Y,te,Q),de.scissor(H.copy(X).multiplyScalar(se).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(w){de.setScissorTest(ee=w)},this.setOpaqueSort=function(w){he=w},this.setTransparentSort=function(w){oe=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,te=!0){let Q=0;if(w){let J=!1;if(P!==null){const Re=P.texture.format;J=u.has(Re)}if(J){const Re=P.texture.type,Le=h.has(Re),Ce=Pe.getClearColor(),Ue=Pe.getClearAlpha(),Oe=Ce.r,Xe=Ce.g,je=Ce.b;Le?(g[0]=Oe,g[1]=Xe,g[2]=je,g[3]=Ue,O.clearBufferuiv(O.COLOR,0,g)):(A[0]=Oe,A[1]=Xe,A[2]=je,A[3]=Ue,O.clearBufferiv(O.COLOR,0,A))}else Q|=O.COLOR_BUFFER_BIT}Y&&(Q|=O.DEPTH_BUFFER_BIT),te&&(Q|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&O.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",Ge,!1),t.removeEventListener("webglcontextcreationerror",nt,!1),Pe.dispose(),Ae.dispose(),ae.dispose(),T.dispose(),ie.dispose(),pe.dispose(),me.dispose(),De.dispose(),ue.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Fa),ne.removeEventListener("sessionend",Oa),Un.stop()};function Ie(w){w.preventDefault(),Ja("WebGLRenderer: Context Lost."),D=!0}function Ge(){Ja("WebGLRenderer: Context Restored."),D=!1;const w=L.autoReset,Y=Se.enabled,te=Se.autoUpdate,Q=Se.needsUpdate,J=Se.type;ce(),L.autoReset=w,Se.enabled=Y,Se.autoUpdate=te,Se.needsUpdate=Q,Se.type=J}function nt(w){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Qe(w){const Y=w.target;Y.removeEventListener("dispose",Qe),Ot(Y)}function Ot(w){Bt(w),T.remove(w)}function Bt(w){const Y=T.get(w).programs;Y!==void 0&&(Y.forEach(function(te){ue.releaseProgram(te)}),w.isShaderMaterial&&ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,te,Q,J,Re){Y===null&&(Y=Ee);const Le=J.isMesh&&J.matrixWorld.determinant()<0,Ce=kl(w,Y,te,Q,J);de.setMaterial(Q,Le);let Ue=te.index,Oe=1;if(Q.wireframe===!0){if(Ue=j.getWireframeAttribute(te),Ue===void 0)return;Oe=2}const Xe=te.drawRange,je=te.attributes.position;let Be=Xe.start*Oe,rt=(Xe.start+Xe.count)*Oe;Re!==null&&(Be=Math.max(Be,Re.start*Oe),rt=Math.min(rt,(Re.start+Re.count)*Oe)),Ue!==null?(Be=Math.max(Be,0),rt=Math.min(rt,Ue.count)):je!=null&&(Be=Math.max(Be,0),rt=Math.min(rt,je.count));const ft=rt-Be;if(ft<0||ft===1/0)return;me.setup(J,Q,Ce,te,Ue);let ct,st=Ve;if(Ue!==null&&(ct=Z.get(Ue),st=q,st.setIndex(ct)),J.isMesh)Q.wireframe===!0?(de.setLineWidth(Q.wireframeLinewidth*be()),st.setMode(O.LINES)):st.setMode(O.TRIANGLES);else if(J.isLine){let St=Q.linewidth;St===void 0&&(St=1),de.setLineWidth(St*be()),J.isLineSegments?st.setMode(O.LINES):J.isLineLoop?st.setMode(O.LINE_LOOP):st.setMode(O.LINE_STRIP)}else J.isPoints?st.setMode(O.POINTS):J.isSprite&&st.setMode(O.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)Ur("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(ze.get("WEBGL_multi_draw"))st.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const St=J._multiDrawStarts,Ne=J._multiDrawCounts,It=J._multiDrawCount,et=Ue?Z.get(Ue).bytesPerElement:1,Gt=T.get(Q).currentProgram.getUniforms();for(let Zt=0;Zt<It;Zt++)Gt.setValue(O,"_gl_DrawID",Zt),st.render(St[Zt]/et,Ne[Zt])}else if(J.isInstancedMesh)st.renderInstances(Be,ft,J.count);else if(te.isInstancedBufferGeometry){const St=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ne=Math.min(te.instanceCount,St);st.renderInstances(Be,ft,Ne)}else st.render(Be,ft)};function wi(w,Y,te){w.transparent===!0&&w.side===tn&&w.forceSinglePass===!1?(w.side=Dt,w.needsUpdate=!0,tr(w,Y,te),w.side=Ln,w.needsUpdate=!0,tr(w,Y,te),w.side=tn):tr(w,Y,te)}this.compile=function(w,Y,te=null){te===null&&(te=w),y=ae.get(te),y.init(Y),b.push(y),te.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),w!==te&&w.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(y.pushLight(J),J.castShadow&&y.pushShadow(J))}),y.setupLights();const Q=new Set;return w.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Re=J.material;if(Re)if(Array.isArray(Re))for(let Le=0;Le<Re.length;Le++){const Ce=Re[Le];wi(Ce,te,J),Q.add(Ce)}else wi(Re,te,J),Q.add(Re)}),y=b.pop(),Q},this.compileAsync=function(w,Y,te=null){const Q=this.compile(w,Y,te);return new Promise(J=>{function Re(){if(Q.forEach(function(Le){T.get(Le).currentProgram.isReady()&&Q.delete(Le)}),Q.size===0){J(w);return}setTimeout(Re,10)}ze.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Xr=null;function Gl(w){Xr&&Xr(w)}function Fa(){Un.stop()}function Oa(){Un.start()}const Un=new Dl;Un.setAnimationLoop(Gl),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(w){Xr=w,ne.setAnimationLoop(w),w===null?Un.stop():Un.start()},ne.addEventListener("sessionstart",Fa),ne.addEventListener("sessionend",Oa),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const te=ne.enabled===!0&&ne.isPresenting===!0,Q=_!==null&&(P===null||te)&&_.begin(M,P);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(Y),Y=ne.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,Y,P),y=ae.get(w,b.length),y.init(Y),b.push(y),Fe.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Me.setFromProjectionMatrix(Fe,rn,Y.reversedDepth),_e=this.localClippingEnabled,le=re.init(this.clippingPlanes,_e),E=Ae.get(w,x.length),E.init(),x.push(E),ne.enabled===!0&&ne.isPresenting===!0){const Le=M.xr.getDepthSensingMesh();Le!==null&&qr(Le,Y,-1/0,M.sortObjects)}qr(w,Y,0,M.sortObjects),E.finish(),M.sortObjects===!0&&E.sort(he,oe),fe=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,fe&&Pe.addToRenderList(E,w),this.info.render.frame++,le===!0&&re.beginShadows();const J=y.state.shadowsArray;if(Se.render(J,w,Y),le===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&_.hasRenderPass())===!1){const Le=E.opaque,Ce=E.transmissive;if(y.setupLights(),Y.isArrayCamera){const Ue=Y.cameras;if(Ce.length>0)for(let Oe=0,Xe=Ue.length;Oe<Xe;Oe++){const je=Ue[Oe];za(Le,Ce,w,je)}fe&&Pe.render(w);for(let Oe=0,Xe=Ue.length;Oe<Xe;Oe++){const je=Ue[Oe];Ba(E,w,je,je.viewport)}}else Ce.length>0&&za(Le,Ce,w,Y),fe&&Pe.render(w),Ba(E,w,Y)}P!==null&&C===0&&(W.updateMultisampleRenderTarget(P),W.updateRenderTargetMipmap(P)),Q&&_.end(M),w.isScene===!0&&w.onAfterRender(M,w,Y),me.resetDefaultState(),I=-1,B=null,b.pop(),b.length>0?(y=b[b.length-1],le===!0&&re.setGlobalState(M.clippingPlanes,y.state.camera)):y=null,x.pop(),x.length>0?E=x[x.length-1]:E=null};function qr(w,Y,te,Q){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Me.intersectsSprite(w)){Q&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Fe);const Le=pe.update(w),Ce=w.material;Ce.visible&&E.push(w,Le,Ce,te,Te.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Me.intersectsObject(w))){const Le=pe.update(w),Ce=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Te.copy(Le.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(Fe)),Array.isArray(Ce)){const Ue=Le.groups;for(let Oe=0,Xe=Ue.length;Oe<Xe;Oe++){const je=Ue[Oe],Be=Ce[je.materialIndex];Be&&Be.visible&&E.push(w,Le,Be,te,Te.z,je)}}else Ce.visible&&E.push(w,Le,Ce,te,Te.z,null)}}const Re=w.children;for(let Le=0,Ce=Re.length;Le<Ce;Le++)qr(Re[Le],Y,te,Q)}function Ba(w,Y,te,Q){const{opaque:J,transmissive:Re,transparent:Le}=w;y.setupLightsView(te),le===!0&&re.setGlobalState(M.clippingPlanes,te),Q&&de.viewport(z.copy(Q)),J.length>0&&er(J,Y,te),Re.length>0&&er(Re,Y,te),Le.length>0&&er(Le,Y,te),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function za(w,Y,te,Q){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[Q.id]===void 0){const Be=ze.has("EXT_color_buffer_half_float")||ze.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[Q.id]=new an(1,1,{generateMipmaps:!0,type:Be?xn:Ft,minFilter:_n,samples:Math.max(4,Ye.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const Re=y.state.transmissionRenderTarget[Q.id],Le=Q.viewport||z;Re.setSize(Le.z*M.transmissionResolutionScale,Le.w*M.transmissionResolutionScale);const Ce=M.getRenderTarget(),Ue=M.getActiveCubeFace(),Oe=M.getActiveMipmapLevel();M.setRenderTarget(Re),M.getClearColor(N),F=M.getClearAlpha(),F<1&&M.setClearColor(16777215,.5),M.clear(),fe&&Pe.render(te);const Xe=M.toneMapping;M.toneMapping=sn;const je=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),y.setupLightsView(Q),le===!0&&re.setGlobalState(M.clippingPlanes,Q),er(w,te,Q),W.updateMultisampleRenderTarget(Re),W.updateRenderTargetMipmap(Re),ze.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let rt=0,ft=Y.length;rt<ft;rt++){const ct=Y[rt],{object:st,geometry:St,material:Ne,group:It}=ct;if(Ne.side===tn&&st.layers.test(Q.layers)){const et=Ne.side;Ne.side=Dt,Ne.needsUpdate=!0,Ha(st,te,Q,St,Ne,It),Ne.side=et,Ne.needsUpdate=!0,Be=!0}}Be===!0&&(W.updateMultisampleRenderTarget(Re),W.updateRenderTargetMipmap(Re))}M.setRenderTarget(Ce,Ue,Oe),M.setClearColor(N,F),je!==void 0&&(Q.viewport=je),M.toneMapping=Xe}function er(w,Y,te){const Q=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Re=w.length;J<Re;J++){const Le=w[J],{object:Ce,geometry:Ue,group:Oe}=Le;let Xe=Le.material;Xe.allowOverride===!0&&Q!==null&&(Xe=Q),Ce.layers.test(te.layers)&&Ha(Ce,Y,te,Ue,Xe,Oe)}}function Ha(w,Y,te,Q,J,Re){w.onBeforeRender(M,Y,te,Q,J,Re),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),J.onBeforeRender(M,Y,te,Q,w,Re),J.transparent===!0&&J.side===tn&&J.forceSinglePass===!1?(J.side=Dt,J.needsUpdate=!0,M.renderBufferDirect(te,Y,Q,J,w,Re),J.side=Ln,J.needsUpdate=!0,M.renderBufferDirect(te,Y,Q,J,w,Re),J.side=tn):M.renderBufferDirect(te,Y,Q,J,w,Re),w.onAfterRender(M,Y,te,Q,J,Re)}function tr(w,Y,te){Y.isScene!==!0&&(Y=Ee);const Q=T.get(w),J=y.state.lights,Re=y.state.shadowsArray,Le=J.state.version,Ce=ue.getParameters(w,J.state,Re,Y,te),Ue=ue.getProgramCacheKey(Ce);let Oe=Q.programs;Q.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Y.environment:null,Q.fog=Y.fog;const Xe=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Q.envMap=ie.get(w.envMap||Q.environment,Xe),Q.envMapRotation=Q.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",Qe),Oe=new Map,Q.programs=Oe);let je=Oe.get(Ue);if(je!==void 0){if(Q.currentProgram===je&&Q.lightsStateVersion===Le)return ka(w,Ce),je}else Ce.uniforms=ue.getUniforms(w),w.onBeforeCompile(Ce,M),je=ue.acquireProgram(Ce,Ue),Oe.set(Ue,je),Q.uniforms=Ce.uniforms;const Be=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Be.clippingPlanes=re.uniform),ka(w,Ce),Q.needsLights=Wl(w),Q.lightsStateVersion=Le,Q.needsLights&&(Be.ambientLightColor.value=J.state.ambient,Be.lightProbe.value=J.state.probe,Be.directionalLights.value=J.state.directional,Be.directionalLightShadows.value=J.state.directionalShadow,Be.spotLights.value=J.state.spot,Be.spotLightShadows.value=J.state.spotShadow,Be.rectAreaLights.value=J.state.rectArea,Be.ltc_1.value=J.state.rectAreaLTC1,Be.ltc_2.value=J.state.rectAreaLTC2,Be.pointLights.value=J.state.point,Be.pointLightShadows.value=J.state.pointShadow,Be.hemisphereLights.value=J.state.hemi,Be.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Be.spotLightMatrix.value=J.state.spotLightMatrix,Be.spotLightMap.value=J.state.spotLightMap,Be.pointShadowMatrix.value=J.state.pointShadowMatrix),Q.currentProgram=je,Q.uniformsList=null,je}function Ga(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=Lr.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function ka(w,Y){const te=T.get(w);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.batchingColor=Y.batchingColor,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function kl(w,Y,te,Q,J){Y.isScene!==!0&&(Y=Ee),W.resetTextureUnits();const Re=Y.fog,Le=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Y.environment:null,Ce=P===null?M.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ei,Ue=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Oe=ie.get(Q.envMap||Le,Ue),Xe=Q.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,je=!!te.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Be=!!te.morphAttributes.position,rt=!!te.morphAttributes.normal,ft=!!te.morphAttributes.color;let ct=sn;Q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ct=M.toneMapping);const st=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,St=st!==void 0?st.length:0,Ne=T.get(Q),It=y.state.lights;if(le===!0&&(_e===!0||w!==B)){const gt=w===B&&Q.id===I;re.setState(Q,w,gt)}let et=!1;Q.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==It.state.version||Ne.outputColorSpace!==Ce||J.isBatchedMesh&&Ne.batching===!1||!J.isBatchedMesh&&Ne.batching===!0||J.isBatchedMesh&&Ne.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Ne.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Ne.instancing===!1||!J.isInstancedMesh&&Ne.instancing===!0||J.isSkinnedMesh&&Ne.skinning===!1||!J.isSkinnedMesh&&Ne.skinning===!0||J.isInstancedMesh&&Ne.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Ne.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Ne.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Ne.instancingMorph===!1&&J.morphTexture!==null||Ne.envMap!==Oe||Q.fog===!0&&Ne.fog!==Re||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==re.numPlanes||Ne.numIntersection!==re.numIntersection)||Ne.vertexAlphas!==Xe||Ne.vertexTangents!==je||Ne.morphTargets!==Be||Ne.morphNormals!==rt||Ne.morphColors!==ft||Ne.toneMapping!==ct||Ne.morphTargetsCount!==St)&&(et=!0):(et=!0,Ne.__version=Q.version);let Gt=Ne.currentProgram;et===!0&&(Gt=tr(Q,Y,J));let Zt=!1,Nn=!1,jn=!1;const ot=Gt.getUniforms(),xt=Ne.uniforms;if(de.useProgram(Gt.program)&&(Zt=!0,Nn=!0,jn=!0),Q.id!==I&&(I=Q.id,Nn=!0),Zt||B!==w){de.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ot.setValue(O,"projectionMatrix",w.projectionMatrix),ot.setValue(O,"viewMatrix",w.matrixWorldInverse);const En=ot.map.cameraPosition;En!==void 0&&En.setValue(O,ye.setFromMatrixPosition(w.matrixWorld)),Ye.logarithmicDepthBuffer&&ot.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&ot.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),B!==w&&(B=w,Nn=!0,jn=!0)}if(Ne.needsLights&&(It.state.directionalShadowMap.length>0&&ot.setValue(O,"directionalShadowMap",It.state.directionalShadowMap,W),It.state.spotShadowMap.length>0&&ot.setValue(O,"spotShadowMap",It.state.spotShadowMap,W),It.state.pointShadowMap.length>0&&ot.setValue(O,"pointShadowMap",It.state.pointShadowMap,W)),J.isSkinnedMesh){ot.setOptional(O,J,"bindMatrix"),ot.setOptional(O,J,"bindMatrixInverse");const gt=J.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),ot.setValue(O,"boneTexture",gt.boneTexture,W))}J.isBatchedMesh&&(ot.setOptional(O,J,"batchingTexture"),ot.setValue(O,"batchingTexture",J._matricesTexture,W),ot.setOptional(O,J,"batchingIdTexture"),ot.setValue(O,"batchingIdTexture",J._indirectTexture,W),ot.setOptional(O,J,"batchingColorTexture"),J._colorsTexture!==null&&ot.setValue(O,"batchingColorTexture",J._colorsTexture,W));const Sn=te.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&xe.update(J,te,Gt),(Nn||Ne.receiveShadow!==J.receiveShadow)&&(Ne.receiveShadow=J.receiveShadow,ot.setValue(O,"receiveShadow",J.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Y.environment!==null&&(xt.envMapIntensity.value=Y.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=D0()),Nn&&(ot.setValue(O,"toneMappingExposure",M.toneMappingExposure),Ne.needsLights&&Vl(xt,jn),Re&&Q.fog===!0&&ve.refreshFogUniforms(xt,Re),ve.refreshMaterialUniforms(xt,Q,se,k,y.state.transmissionRenderTarget[w.id]),Lr.upload(O,Ga(Ne),xt,W)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Lr.upload(O,Ga(Ne),xt,W),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&ot.setValue(O,"center",J.center),ot.setValue(O,"modelViewMatrix",J.modelViewMatrix),ot.setValue(O,"normalMatrix",J.normalMatrix),ot.setValue(O,"modelMatrix",J.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const gt=Q.uniformsGroups;for(let En=0,$n=gt.length;En<$n;En++){const Va=gt[En];De.update(Va,Gt),De.bind(Va,Gt)}}return Gt}function Vl(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function Wl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,Y,te){const Q=T.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),T.get(w.texture).__webglTexture=Y,T.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:te,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const te=T.get(w);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0};const Xl=O.createFramebuffer();this.setRenderTarget=function(w,Y=0,te=0){P=w,R=Y,C=te;let Q=null,J=!1,Re=!1;if(w){const Ce=T.get(w);if(Ce.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(O.FRAMEBUFFER,Ce.__webglFramebuffer),z.copy(w.viewport),H.copy(w.scissor),U=w.scissorTest,de.viewport(z),de.scissor(H),de.setScissorTest(U),I=-1;return}else if(Ce.__webglFramebuffer===void 0)W.setupRenderTarget(w);else if(Ce.__hasExternalTextures)W.rebindTextures(w,T.get(w.texture).__webglTexture,T.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Xe=w.depthTexture;if(Ce.__boundDepthTexture!==Xe){if(Xe!==null&&T.has(Xe)&&(w.width!==Xe.image.width||w.height!==Xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Re=!0);const Oe=T.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[Y])?Q=Oe[Y][te]:Q=Oe[Y],J=!0):w.samples>0&&W.useMultisampledRTT(w)===!1?Q=T.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?Q=Oe[te]:Q=Oe,z.copy(w.viewport),H.copy(w.scissor),U=w.scissorTest}else z.copy(G).multiplyScalar(se).floor(),H.copy(X).multiplyScalar(se).floor(),U=ee;if(te!==0&&(Q=Xl),de.bindFramebuffer(O.FRAMEBUFFER,Q)&&de.drawBuffers(w,Q),de.viewport(z),de.scissor(H),de.setScissorTest(U),J){const Ce=T.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce.__webglTexture,te)}else if(Re){const Ce=Y;for(let Ue=0;Ue<w.textures.length;Ue++){const Oe=T.get(w.textures[Ue]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Ue,Oe.__webglTexture,te,Ce)}}else if(w!==null&&te!==0){const Ce=T.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ce.__webglTexture,te)}I=-1},this.readRenderTargetPixels=function(w,Y,te,Q,J,Re,Le,Ce=0){if(!(w&&w.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue){de.bindFramebuffer(O.FRAMEBUFFER,Ue);try{const Oe=w.textures[Ce],Xe=Oe.format,je=Oe.type;if(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ce),!Ye.textureFormatReadable(Xe)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(je)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-Q&&te>=0&&te<=w.height-J&&O.readPixels(Y,te,Q,J,ge.convert(Xe),ge.convert(je),Re)}finally{const Oe=P!==null?T.get(P).__webglFramebuffer:null;de.bindFramebuffer(O.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,Y,te,Q,J,Re,Le,Ce=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=T.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Le!==void 0&&(Ue=Ue[Le]),Ue)if(Y>=0&&Y<=w.width-Q&&te>=0&&te<=w.height-J){de.bindFramebuffer(O.FRAMEBUFFER,Ue);const Oe=w.textures[Ce],Xe=Oe.format,je=Oe.type;if(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ce),!Ye.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Be),O.bufferData(O.PIXEL_PACK_BUFFER,Re.byteLength,O.STREAM_READ),O.readPixels(Y,te,Q,J,ge.convert(Xe),ge.convert(je),0);const rt=P!==null?T.get(P).__webglFramebuffer:null;de.bindFramebuffer(O.FRAMEBUFFER,rt);const ft=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Rc(O,ft,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Be),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Re),O.deleteBuffer(Be),O.deleteSync(ft),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,te=0){const Q=Math.pow(2,-te),J=Math.floor(w.image.width*Q),Re=Math.floor(w.image.height*Q),Le=Y!==null?Y.x:0,Ce=Y!==null?Y.y:0;W.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,te,0,0,Le,Ce,J,Re),de.unbindTexture()};const ql=O.createFramebuffer(),Yl=O.createFramebuffer();this.copyTextureToTexture=function(w,Y,te=null,Q=null,J=0,Re=0){let Le,Ce,Ue,Oe,Xe,je,Be,rt,ft;const ct=w.isCompressedTexture?w.mipmaps[Re]:w.image;if(te!==null)Le=te.max.x-te.min.x,Ce=te.max.y-te.min.y,Ue=te.isBox3?te.max.z-te.min.z:1,Oe=te.min.x,Xe=te.min.y,je=te.isBox3?te.min.z:0;else{const xt=Math.pow(2,-J);Le=Math.floor(ct.width*xt),Ce=Math.floor(ct.height*xt),w.isDataArrayTexture?Ue=ct.depth:w.isData3DTexture?Ue=Math.floor(ct.depth*xt):Ue=1,Oe=0,Xe=0,je=0}Q!==null?(Be=Q.x,rt=Q.y,ft=Q.z):(Be=0,rt=0,ft=0);const st=ge.convert(Y.format),St=ge.convert(Y.type);let Ne;Y.isData3DTexture?(W.setTexture3D(Y,0),Ne=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Ne=O.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Ne=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const It=O.getParameter(O.UNPACK_ROW_LENGTH),et=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Gt=O.getParameter(O.UNPACK_SKIP_PIXELS),Zt=O.getParameter(O.UNPACK_SKIP_ROWS),Nn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ct.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Oe),O.pixelStorei(O.UNPACK_SKIP_ROWS,Xe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,je);const jn=w.isDataArrayTexture||w.isData3DTexture,ot=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const xt=T.get(w),Sn=T.get(Y),gt=T.get(xt.__renderTarget),En=T.get(Sn.__renderTarget);de.bindFramebuffer(O.READ_FRAMEBUFFER,gt.__webglFramebuffer),de.bindFramebuffer(O.DRAW_FRAMEBUFFER,En.__webglFramebuffer);for(let $n=0;$n<Ue;$n++)jn&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,T.get(w).__webglTexture,J,je+$n),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,T.get(Y).__webglTexture,Re,ft+$n)),O.blitFramebuffer(Oe,Xe,Le,Ce,Be,rt,Le,Ce,O.DEPTH_BUFFER_BIT,O.NEAREST);de.bindFramebuffer(O.READ_FRAMEBUFFER,null),de.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(J!==0||w.isRenderTargetTexture||T.has(w)){const xt=T.get(w),Sn=T.get(Y);de.bindFramebuffer(O.READ_FRAMEBUFFER,ql),de.bindFramebuffer(O.DRAW_FRAMEBUFFER,Yl);for(let gt=0;gt<Ue;gt++)jn?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,xt.__webglTexture,J,je+gt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xt.__webglTexture,J),ot?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Sn.__webglTexture,Re,ft+gt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Sn.__webglTexture,Re),J!==0?O.blitFramebuffer(Oe,Xe,Le,Ce,Be,rt,Le,Ce,O.COLOR_BUFFER_BIT,O.NEAREST):ot?O.copyTexSubImage3D(Ne,Re,Be,rt,ft+gt,Oe,Xe,Le,Ce):O.copyTexSubImage2D(Ne,Re,Be,rt,Oe,Xe,Le,Ce);de.bindFramebuffer(O.READ_FRAMEBUFFER,null),de.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ot?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Ne,Re,Be,rt,ft,Le,Ce,Ue,st,St,ct.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Ne,Re,Be,rt,ft,Le,Ce,Ue,st,ct.data):O.texSubImage3D(Ne,Re,Be,rt,ft,Le,Ce,Ue,st,St,ct):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Re,Be,rt,Le,Ce,st,St,ct.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Re,Be,rt,ct.width,ct.height,st,ct.data):O.texSubImage2D(O.TEXTURE_2D,Re,Be,rt,Le,Ce,st,St,ct);O.pixelStorei(O.UNPACK_ROW_LENGTH,It),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,et),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Gt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Zt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Nn),Re===0&&Y.generateMipmaps&&O.generateMipmap(Ne),de.unbindTexture()},this.initRenderTarget=function(w){T.get(w).__webglFramebuffer===void 0&&W.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?W.setTextureCube(w,0):w.isData3DTexture?W.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?W.setTexture2DArray(w,0):W.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){R=0,C=0,P=null,de.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}const qo={type:"change"},Ua={type:"start"},Ol={type:"end"},br=new bl,Yo=new Cn,I0=Math.cos(70*Nr.DEG2RAD),pt=new K,Ct=2*Math.PI,at={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bs=1e-6;class U0 extends Oh{constructor(e,t=null){super(e,t),this.state=at.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mi.ROTATE,MIDDLE:mi.DOLLY,RIGHT:mi.PAN},this.touches={ONE:di.ROTATE,TWO:di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new In,this._lastTargetPosition=new K,this._quat=new In().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new So,this._sphericalDelta=new So,this._scale=1,this._panOffset=new K,this._rotateStart=new ke,this._rotateEnd=new ke,this._rotateDelta=new ke,this._panStart=new ke,this._panEnd=new ke,this._panDelta=new ke,this._dollyStart=new ke,this._dollyEnd=new ke,this._dollyDelta=new ke,this._dollyDirection=new K,this._mouse=new ke,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=F0.bind(this),this._onPointerDown=N0.bind(this),this._onPointerUp=O0.bind(this),this._onContextMenu=W0.bind(this),this._onMouseWheel=H0.bind(this),this._onKeyDown=G0.bind(this),this._onTouchStart=k0.bind(this),this._onTouchMove=V0.bind(this),this._onMouseDown=B0.bind(this),this._onMouseMove=z0.bind(this),this._interceptControlDown=X0.bind(this),this._interceptControlUp=q0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qo),this.update(),this.state=at.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;pt.copy(t).sub(this.target),pt.applyQuaternion(this._quat),this._spherical.setFromVector3(pt),this.autoRotate&&this.state===at.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ct:n>Math.PI&&(n-=Ct),r<-Math.PI?r+=Ct:r>Math.PI&&(r-=Ct),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(pt.setFromSpherical(this._spherical),pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=pt.length();a=this._clampDistance(o*this._scale);const f=o-a;this.object.position.addScaledVector(this._dollyDirection,f),this.object.updateMatrixWorld(),s=!!f}else if(this.object.isOrthographicCamera){const o=new K(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=f!==this.object.zoom;const l=new K(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(br.origin.copy(this.object.position),br.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(br.direction))<I0?this.object.lookAt(this.target):(Yo.setFromNormalAndCoplanarPoint(this.object.up,this.target),br.intersectPlane(Yo,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>bs||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bs||this._lastTargetPosition.distanceToSquared(this.target)>bs?(this.dispatchEvent(qo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ct/60*this.autoRotateSpeed*e:Ct/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pt.setFromMatrixColumn(t,0),pt.multiplyScalar(-e),this._panOffset.add(pt)}_panUp(e,t){this.screenSpacePanning===!0?pt.setFromMatrixColumn(t,1):(pt.setFromMatrixColumn(t,0),pt.crossVectors(this.object.up,pt)),pt.multiplyScalar(e),this._panOffset.add(pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;pt.copy(r).sub(this.target);let s=pt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/n.clientHeight,this.object.matrix),this._panUp(2*t*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=e-n.left,s=t-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Ct*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panStart.set(n,r)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),r=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,r=e.pageY-t.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ke,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function N0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function F0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function O0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ol),this.state=at.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function B0(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=at.DOLLY;break;case mi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}break;case mi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=at.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=at.PAN}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Ua)}function z0(i){switch(this.state){case at.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case at.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case at.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function H0(i){this.enabled===!1||this.enableZoom===!1||this.state!==at.NONE||(i.preventDefault(),this.dispatchEvent(Ua),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Ol))}function G0(i){this.enabled!==!1&&this._handleKeyDown(i)}function k0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case di.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=at.TOUCH_ROTATE;break;case di.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=at.TOUCH_PAN;break;default:this.state=at.NONE}break;case 2:switch(this.touches.TWO){case di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=at.TOUCH_DOLLY_PAN;break;case di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=at.TOUCH_DOLLY_ROTATE;break;default:this.state=at.NONE}break;default:this.state=at.NONE}this.state!==at.NONE&&this.dispatchEvent(Ua)}function V0(i){switch(this._trackPointer(i),this.state){case at.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case at.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case at.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case at.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=at.NONE}}function W0(i){this.enabled!==!1&&i.preventDefault()}function X0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function q0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Y0(){const i=new sh;i.background=new Ze(329487);const e=new Ht(45,window.innerWidth/window.innerHeight,.1,1e3);e.position.set(0,8,16);const t=new L0({antialias:!0});t.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(t.domElement);const n=new U0(e,t.domElement);n.enableDamping=!0,n.target.set(0,0,0);const r=new Ih(16777215,.45);i.add(r);const s=new Lh(16777215,8);return s.position.set(10,6,8),i.add(s),{scene:i,camera:e,renderer:t,controls:n}}function K0(i,e){window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),e.setSize(window.innerWidth,window.innerHeight)})}function j0(i=6){const e=new Ch,t=new URL("/pendule-foucault-animation/assets/earth_daymap-CP4X_OT0.jpg",import.meta.url).href,n=new URL("/pendule-foucault-animation/assets/earth_normal-lOoBq62v.png",import.meta.url).href,r=e.load(t);r.colorSpace=Pt;const s=e.load(n),a=new Lt(new qi(i,64,64),new Mh({map:r,normalMap:s,normalScale:new ke(.85,.85),shininess:25})),o=new Lt(new qi(.02,16,16),new Br({color:16733525}));return o.position.set(0,i,0),{earth:a,northPoleMarker:o,earthRadius:i}}function $0(i,e=3){const t=new pi;t.position.set(0,i,0);const n=new pi,r=new Lt(new Zi(2.4,e+.8),new Br({color:10078463,transparent:!0,opacity:.22,side:tn,depthWrite:!1}));r.position.y=-(e+.8)/2;const s=new Lt(new La(.02,.02,e,12),new mo({color:11184810,metalness:.6,roughness:.35}));s.position.y=-e/2;const a=new Lt(new qi(.18,24,24),new mo({color:13421772,metalness:.8,roughness:.25}));return a.position.y=-e,t.add(r),n.add(s),n.add(a),t.add(n),{pendulumRoot:t,pendulumPivot:n}}function Z0({clock:i,earth:e,pendulumPivot:t,maxAngle:n,oscillationSpeed:r,earthSpinSpeed:s,shouldLockCamera:a,shouldFollowEarthRotation:o,onLockedCameraUpdate:f,onFrame:l,controls:p,renderer:d,scene:c,camera:m}){const S=new K(0,1,0);function v(){requestAnimationFrame(v);const u=i.getElapsedTime();e.rotation.y+=s,l&&l(u),t.rotation.z=Math.sin(u*r)*n;const h=a?.();o?.()&&!h&&(m.position.applyAxisAngle(S,s),m.up.applyAxisAngle(S,s),p.target.applyAxisAngle(S,s),m.lookAt(p.target)),h&&(f?f():(m.position.applyAxisAngle(S,s),m.up.applyAxisAngle(S,s),m.lookAt(0,0,0))),p.enabled&&p.update(),d.render(c,m)}v()}var $={};(function(){var i=(function(){function r(s){this.message="JPEG error: "+s}return r.prototype=new Error,r.prototype.name="JpegError",r.constructor=r,r})(),e=(function(){var r=new Uint8Array([0,1,8,16,9,2,3,10,17,24,32,25,18,11,4,5,12,19,26,33,40,48,41,34,27,20,13,6,7,14,21,28,35,42,49,56,57,50,43,36,29,22,15,23,30,37,44,51,58,59,52,45,38,31,39,46,53,60,61,54,47,55,62,63]),s=4017,a=799,o=3406,f=2276,l=1567,p=3784,d=5793,c=2896;function m(E){E==null&&(E={}),E.w==null&&(E.w=-1),this.V=E.n,this.N=E.w}function S(E,y){for(var x=0,b=[],_,M,D=16,R;D>0&&!E[D-1];)D--;b.push({children:[],index:0});var C=b[0];for(_=0;_<D;_++){for(M=0;M<E[_];M++){for(C=b.pop(),C.children[C.index]=y[x];C.index>0;)C=b.pop();for(C.index++,b.push(C);b.length<=_;)b.push(R={children:[],index:0}),C.children[C.index]=R.children,C=R;x++}_+1<D&&(b.push(R={children:[],index:0}),C.children[C.index]=R.children,C=R)}return b[0].children}function v(E,y,x){return 64*((E.P+1)*y+x)}function u(E,y,x,b,_,M,D,R,C,P){P==null&&(P=!1);var I=x.m,B=x.Z,z=y,H=0,U=0,N=0,F=0,V,k=0,se,he,oe,G,X,ee,Me=0,le,_e,Fe,ye;function Te(){if(U>0)return U--,H>>U&1;if(H=E[y++],H===255){var Z=E[y++];if(Z){if(Z===220&&P){y+=2;var j=t(E,y);if(y+=2,j>0&&j!==x.s)throw new DNLMarkerError("Found DNL marker (0xFFDC) while parsing scan data",j)}else if(Z===217){if(P){var pe=k*8;if(pe>0&&pe<x.s/10)throw new DNLMarkerError("Found EOI marker (0xFFD9) while parsing scan data, possibly caused by incorrect `scanLines` parameter",pe)}throw new EOIMarkerError("Found EOI marker (0xFFD9) while parsing scan data")}throw new i("unexpected marker")}}return U=7,H>>>7}function Ee(Z){for(var j=Z;;){switch(j=j[Te()],typeof j){case"number":return j;case"object":continue}throw new i("invalid huffman sequence")}}function fe(Z){for(var j=0;Z>0;)j=j<<1|Te(),Z--;return j}function be(Z){if(Z===1)return Te()===1?1:-1;var j=fe(Z);return j>=1<<Z-1?j:j+(-1<<Z)+1}function O(Z,j){var pe=Ee(Z.J),ue=pe===0?0:be(pe),ve=1;for(Z.D[j]=Z.Q+=ue;ve<64;){var Ae=Ee(Z.i),ae=Ae&15,re=Ae>>4;if(ae===0){if(re<15)break;ve+=16;continue}ve+=re;var Se=r[ve];Z.D[j+Se]=be(ae),ve++}}function We(Z,j){var pe=Ee(Z.J),ue=pe===0?0:be(pe)<<C;Z.D[j]=Z.Q+=ue}function ze(Z,j){Z.D[j]|=Te()<<C}function Ye(Z,j){if(N>0){N--;return}for(var pe=M,ue=D;pe<=ue;){var ve=Ee(Z.i),Ae=ve&15,ae=ve>>4;if(Ae===0){if(ae<15){N=fe(ae)+(1<<ae)-1;break}pe+=16;continue}pe+=ae;var re=r[pe];Z.D[j+re]=be(Ae)*(1<<C),pe++}}function de(Z,j){for(var pe=M,ue=D,ve=0,Ae,ae;pe<=ue;){var re=j+r[pe],Se=Z.D[re]<0?-1:1;switch(F){case 0:if(ae=Ee(Z.i),Ae=ae&15,ve=ae>>4,Ae===0)ve<15?(N=fe(ve)+(1<<ve),F=4):(ve=16,F=1);else{if(Ae!==1)throw new i("invalid ACn encoding");V=be(Ae),F=ve?2:3}continue;case 1:case 2:Z.D[re]?Z.D[re]+=Se*(Te()<<C):(ve--,ve===0&&(F=F===2?3:0));break;case 3:Z.D[re]?Z.D[re]+=Se*(Te()<<C):(Z.D[re]=V<<C,F=0);break;case 4:Z.D[re]&&(Z.D[re]+=Se*(Te()<<C));break}pe++}F===4&&(N--,N===0&&(F=0))}function L(Z,j,pe,ue,ve){var Ae=pe/I|0,ae=pe%I;k=Ae*Z.A+ue;var re=ae*Z.h+ve,Se=v(Z,k,re);j(Z,Se)}function T(Z,j,pe){k=pe/Z.P|0;var ue=pe%Z.P,ve=v(Z,k,ue);j(Z,ve)}var W=b.length;for(B?M===0?ee=R===0?We:ze:ee=R===0?Ye:de:ee=O,W===1?_e=b[0].P*b[0].c:_e=I*x.R;Me<=_e;){var ie=_?Math.min(_e-Me,_):_e;if(ie>0){for(he=0;he<W;he++)b[he].Q=0;if(N=0,W===1)for(se=b[0],X=0;X<ie;X++)T(se,ee,Me),Me++;else for(X=0;X<ie;X++){for(he=0;he<W;he++)for(se=b[he],Fe=se.h,ye=se.A,oe=0;oe<ye;oe++)for(G=0;G<Fe;G++)L(se,ee,Me,oe,G);Me++}}if(U=0,le=A(E,y),!le)break;if(le.u&&(y=le.offset),le.M>=65488&&le.M<=65495)y+=2;else break}return y-z}function h(E,y,x){var b=E.$,_=E.D,M,D,R,C,P,I,B,z,H,U,N,F,V,k,se,he,oe;if(!b)throw new i("missing required Quantization Table.");for(var G=0;G<64;G+=8){if(H=_[y+G],U=_[y+G+1],N=_[y+G+2],F=_[y+G+3],V=_[y+G+4],k=_[y+G+5],se=_[y+G+6],he=_[y+G+7],H*=b[G],(U|N|F|V|k|se|he)===0){oe=d*H+512>>10,x[G]=oe,x[G+1]=oe,x[G+2]=oe,x[G+3]=oe,x[G+4]=oe,x[G+5]=oe,x[G+6]=oe,x[G+7]=oe;continue}U*=b[G+1],N*=b[G+2],F*=b[G+3],V*=b[G+4],k*=b[G+5],se*=b[G+6],he*=b[G+7],M=d*H+128>>8,D=d*V+128>>8,R=N,C=se,P=c*(U-he)+128>>8,z=c*(U+he)+128>>8,I=F<<4,B=k<<4,M=M+D+1>>1,D=M-D,oe=R*p+C*l+128>>8,R=R*l-C*p+128>>8,C=oe,P=P+B+1>>1,B=P-B,z=z+I+1>>1,I=z-I,M=M+C+1>>1,C=M-C,D=D+R+1>>1,R=D-R,oe=P*f+z*o+2048>>12,P=P*o-z*f+2048>>12,z=oe,oe=I*a+B*s+2048>>12,I=I*s-B*a+2048>>12,B=oe,x[G]=M+z,x[G+7]=M-z,x[G+1]=D+B,x[G+6]=D-B,x[G+2]=R+I,x[G+5]=R-I,x[G+3]=C+P,x[G+4]=C-P}for(var X=0;X<8;++X){if(H=x[X],U=x[X+8],N=x[X+16],F=x[X+24],V=x[X+32],k=x[X+40],se=x[X+48],he=x[X+56],(U|N|F|V|k|se|he)===0){oe=d*H+8192>>14,oe<-2040?oe=0:oe>=2024?oe=255:oe=oe+2056>>4,_[y+X]=oe,_[y+X+8]=oe,_[y+X+16]=oe,_[y+X+24]=oe,_[y+X+32]=oe,_[y+X+40]=oe,_[y+X+48]=oe,_[y+X+56]=oe;continue}M=d*H+2048>>12,D=d*V+2048>>12,R=N,C=se,P=c*(U-he)+2048>>12,z=c*(U+he)+2048>>12,I=F,B=k,M=(M+D+1>>1)+4112,D=M-D,oe=R*p+C*l+2048>>12,R=R*l-C*p+2048>>12,C=oe,P=P+B+1>>1,B=P-B,z=z+I+1>>1,I=z-I,M=M+C+1>>1,C=M-C,D=D+R+1>>1,R=D-R,oe=P*f+z*o+2048>>12,P=P*o-z*f+2048>>12,z=oe,oe=I*a+B*s+2048>>12,I=I*s-B*a+2048>>12,B=oe,H=M+z,he=M-z,U=D+B,se=D-B,N=R+I,k=R-I,F=C+P,V=C-P,H<16?H=0:H>=4080?H=255:H>>=4,U<16?U=0:U>=4080?U=255:U>>=4,N<16?N=0:N>=4080?N=255:N>>=4,F<16?F=0:F>=4080?F=255:F>>=4,V<16?V=0:V>=4080?V=255:V>>=4,k<16?k=0:k>=4080?k=255:k>>=4,se<16?se=0:se>=4080?se=255:se>>=4,he<16?he=0:he>=4080?he=255:he>>=4,_[y+X]=H,_[y+X+8]=U,_[y+X+16]=N,_[y+X+24]=F,_[y+X+32]=V,_[y+X+40]=k,_[y+X+48]=se,_[y+X+56]=he}}function g(E,y){for(var x=y.P,b=y.c,_=new Int16Array(64),M=0;M<b;M++)for(var D=0;D<x;D++){var R=v(y,M,D);h(y,R,_)}return y.D}function A(E,y,x){x==null&&(x=y);var b=E.length-1,_=x<y?x:y;if(y>=b)return null;var M=t(E,y);if(M>=65472&&M<=65534)return{u:null,M,offset:y};for(var D=t(E,_);!(D>=65472&&D<=65534);){if(++_>=b)return null;D=t(E,_)}return{u:M.toString(16),M:D,offset:_}}return m.prototype={parse(E,y){y==null&&(y={});var x=y.F,b=0,_=null,M=null,D,R,C=0;function P(){var re=t(E,b);b+=2;var Se=b+re-2,Pe=A(E,Se,b);Pe&&Pe.u&&(Se=Pe.offset);var xe=E.subarray(b,Se);return b+=xe.length,xe}function I(re){for(var Se=Math.ceil(re.o/8/re.X),Pe=Math.ceil(re.s/8/re.B),xe=0;xe<re.W.length;xe++){de=re.W[xe];var Ve=Math.ceil(Math.ceil(re.o/8)*de.h/re.X),q=Math.ceil(Math.ceil(re.s/8)*de.A/re.B),ge=Se*de.h,me=Pe*de.A,De=64*me*(ge+1);de.D=new Int16Array(De),de.P=Ve,de.c=q}re.m=Se,re.R=Pe}var B=[],z=[],H=[],U=t(E,b);if(b+=2,U!==65496)throw new i("SOI not found");U=t(E,b),b+=2;e:for(;U!==65497;){var N,F,V;switch(U){case 65504:case 65505:case 65506:case 65507:case 65508:case 65509:case 65510:case 65511:case 65512:case 65513:case 65514:case 65515:case 65516:case 65517:case 65518:case 65519:case 65534:var k=P();U===65504&&k[0]===74&&k[1]===70&&k[2]===73&&k[3]===70&&k[4]===0&&(_={version:{d:k[5],T:k[6]},K:k[7],j:k[8]<<8|k[9],H:k[10]<<8|k[11],S:k[12],I:k[13],C:k.subarray(14,14+3*k[12]*k[13])}),U===65518&&k[0]===65&&k[1]===100&&k[2]===111&&k[3]===98&&k[4]===101&&(M={version:k[5]<<8|k[6],k:k[7]<<8|k[8],q:k[9]<<8|k[10],a:k[11]});break;case 65499:var se=t(E,b),he;b+=2;for(var oe=se+b-2;b<oe;){var G=E[b++],X=new Uint16Array(64);if(G>>4===0)for(F=0;F<64;F++)he=r[F],X[he]=E[b++];else if(G>>4===1)for(F=0;F<64;F++)he=r[F],X[he]=t(E,b),b+=2;else throw new i("DQT - invalid table spec");B[G&15]=X}break;case 65472:case 65473:case 65474:if(D)throw new i("Only single frame JPEGs supported");b+=2,D={},D.G=U===65473,D.Z=U===65474,D.precision=E[b++];var ee=t(E,b),Me,le=0,_e=0;b+=2,D.s=x||ee,D.o=t(E,b),b+=2,D.W=[],D._={};var Fe=E[b++];for(N=0;N<Fe;N++){Me=E[b];var ye=E[b+1]>>4,Te=E[b+1]&15;le<ye&&(le=ye),_e<Te&&(_e=Te);var Ee=E[b+2];V=D.W.push({h:ye,A:Te,L:Ee,$:null}),D._[Me]=V-1,b+=3}D.X=le,D.B=_e,I(D);break;case 65476:var fe=t(E,b);for(b+=2,N=2;N<fe;){var be=E[b++],O=new Uint8Array(16),We=0;for(F=0;F<16;F++,b++)We+=O[F]=E[b];var ze=new Uint8Array(We);for(F=0;F<We;F++,b++)ze[F]=E[b];N+=17+We,(be>>4===0?H:z)[be&15]=S(O,ze)}break;case 65501:b+=2,R=t(E,b),b+=2;break;case 65498:var Ye=++C===1&&!x,de;b+=2;var L=E[b++],T=[];for(N=0;N<L;N++){var W=E[b++],ie=D._[W];de=D.W[ie],de.index=W;var Z=E[b++];de.J=H[Z>>4],de.i=z[Z&15],T.push(de)}var j=E[b++],pe=E[b++],ue=E[b++];try{var ve=u(E,b,D,T,R,j,pe,ue>>4,ue&15,Ye);b+=ve}catch(re){if(re instanceof DNLMarkerError)return this.parse(E,{F:re.s});if(re instanceof EOIMarkerError)break e;throw re}break;case 65500:b+=4;break;case 65535:E[b]!==255&&b--;break;default:var Ae=A(E,b-2,b-3);if(Ae&&Ae.u){b=Ae.offset;break}if(b>=E.length-1)break e;throw new i("JpegImage.parse - unknown marker: "+U.toString(16))}U=t(E,b),b+=2}for(this.width=D.o,this.height=D.s,this.g=_,this.b=M,this.W=[],N=0;N<D.W.length;N++){de=D.W[N];var ae=B[de.L];ae&&(de.$=ae),this.W.push({index:de.index,e:g(D,de),l:de.h/D.X,t:de.A/D.B,P:de.P,c:de.c})}this.p=this.W.length},Y(E,y,x){x==null&&(x=!1);var b=this.width/E,_=this.height/y,M,D,R,C,P,I,B,z,H,U,N=0,F,V=this.W.length,k=E*y*V,se=new Uint8ClampedArray(k),he=new Uint32Array(E),oe=4294967288,G;for(B=0;B<V;B++){if(M=this.W[B],D=M.l*b,R=M.t*_,N=B,F=M.e,C=M.P+1<<3,D!==G){for(P=0;P<E;P++)z=0|P*D,he[P]=(z&oe)<<3|z&7;G=D}for(I=0;I<y;I++)for(z=0|I*R,U=C*(z&oe)|(z&7)<<3,P=0;P<E;P++)se[N]=F[U+he[P]],N+=V}var X=this.V;if(!x&&V===4&&!X&&(X=new Int32Array([-256,255,-256,255,-256,255,-256,255])),X)for(B=0;B<k;)for(z=0,H=0;z<V;z++,B++,H+=2)se[B]=(se[B]*X[H]>>8)+X[H+1];return se},get f(){return this.b?!!this.b.a:this.p===3?this.N===0?!1:!(this.W[0].index===82&&this.W[1].index===71&&this.W[2].index===66):this.N===1},z:function(y){for(var x,b,_,M=0,D=y.length;M<D;M+=3)x=y[M],b=y[M+1],_=y[M+2],y[M]=x-179.456+1.402*_,y[M+1]=x+135.459-.344*b-.714*_,y[M+2]=x-226.816+1.772*b;return y},O:function(y){for(var x,b,_,M,D=0,R=0,C=y.length;R<C;R+=4)x=y[R],b=y[R+1],_=y[R+2],M=y[R+3],y[D++]=-122.67195406894+b*(-660635669420364e-19*b+.000437130475926232*_-54080610064599e-18*x+.00048449797120281*M-.154362151871126)+_*(-.000957964378445773*_+.000817076911346625*x-.00477271405408747*M+1.53380253221734)+x*(.000961250184130688*x-.00266257332283933*M+.48357088451265)+M*(-.000336197177618394*M+.484791561490776),y[D++]=107.268039397724+b*(219927104525741e-19*b-.000640992018297945*_+.000659397001245577*x+.000426105652938837*M-.176491792462875)+_*(-.000778269941513683*_+.00130872261408275*x+.000770482631801132*M-.151051492775562)+x*(.00126935368114843*x-.00265090189010898*M+.25802910206845)+M*(-.000318913117588328*M-.213742400323665),y[D++]=-20.810012546947+b*(-.000570115196973677*b-263409051004589e-19*_+.0020741088115012*x-.00288260236853442*M+.814272968359295)+_*(-153496057440975e-19*_-.000132689043961446*x+.000560833691242812*M-.195152027534049)+x*(.00174418132927582*x-.00255243321439347*M+.116935020465145)+M*(-.000343531996510555*M+.24165260232407);return y.subarray(0,D)},r:function(y){for(var x,b,_,M=0,D=y.length;M<D;M+=4)x=y[M],b=y[M+1],_=y[M+2],y[M]=434.456-x-1.402*_,y[M+1]=119.541-x+.344*b+.714*_,y[M+2]=481.816-x-1.772*b;return y},U:function(y){for(var x,b,_,M,D=0,R=0,C=y.length;R<C;R+=4)x=y[R],b=y[R+1],_=y[R+2],M=y[R+3],y[D++]=255+x*(-6747147073602441e-20*x+.0008379262121013727*b+.0002894718188643294*_+.003264231057537806*M-1.1185611867203937)+b*(26374107616089405e-21*b-8626949158638572e-20*_-.0002748769067499491*M-.02155688794978967)+_*(-3878099212869363e-20*_-.0003267808279485286*M+.0686742238595345)-M*(.0003361971776183937*M+.7430659151342254),y[D++]=255+x*(.00013596372813588848*x+.000924537132573585*b+.00010567359618683593*_+.0004791864687436512*M-.3109689587515875)+b*(-.00023545346108370344*b+.0002702845253534714*_+.0020200308977307156*M-.7488052167015494)+_*(6834815998235662e-20*_+.00015168452363460973*M-.09751927774728933)-M*(.0003189131175883281*M+.7364883807733168),y[D++]=255+x*(13598650411385307e-21*x+.00012423956175490851*b+.0004751985097583589*_-36729317476630422e-22*M-.05562186980264034)+b*(.00016141380598724676*b+.0009692239130725186*_+.0007782692450036253*M-.44015232367526463)+_*(5068882914068769e-22*_+.0017778369011375071*M-.7591454649749609)-M*(.0003435319965105553*M+.7063770186160144);return y.subarray(0,D)},getData:function(E){var y=E.width,x=E.height,b=E.forceRGB,_=E.isSourcePDF;if(this.p>4)throw new i("Unsupported color mode");var M=this.Y(y,x,_);if(this.p===1&&b){for(var D=M.length,R=new Uint8ClampedArray(D*3),C=0,P=0;P<D;P++){var I=M[P];R[C++]=I,R[C++]=I,R[C++]=I}return R}else{if(this.p===3&&this.f)return this.z(M);if(this.p===4){if(this.f)return b?this.O(M):this.r(M);if(b)return this.U(M)}}return M}},m})();function t(n,r){return n[r]<<8|n[r+1]}$.JpegDecoder=e})();$.encodeImage=function(i,e,t,n){var r={t256:[e],t257:[t],t258:[8,8,8,8],t259:[1],t262:[2],t273:[1e3],t277:[4],t278:[t],t279:[e*t*4],t282:[[72,1]],t283:[[72,1]],t284:[1],t286:[[0,1]],t287:[[0,1]],t296:[1],t305:["Photopea (UTIF.js)"],t338:[1]};if(n)for(var s in n)r[s]=n[s];for(var a=new Uint8Array($.encode([r])),o=new Uint8Array(i),f=new Uint8Array(1e3+e*t*4),s=0;s<a.length;s++)f[s]=a[s];for(var s=0;s<o.length;s++)f[1e3+s]=o[s];return f.buffer};$.encode=function(i){var e=new Uint8Array(2e4),t=4,n=$._binBE;e[0]=e[1]=77,n.writeUshort(e,2,42);var r=8;n.writeUint(e,t,r),t+=4;for(var s=0;s<i.length;s++){var a=$._writeIFD(n,$._types.basic,e,r,i[s]);r=a[1],s<i.length-1&&((r&3)!=0&&(r+=4-(r&3)),n.writeUint(e,a[0],r))}return e.slice(0,r).buffer};$.decode=function(i,e){e==null&&(e={parseMN:!0,debug:!1});var t=new Uint8Array(i),n=0,r=$._binBE.readASCII(t,n,2);n+=2;var s=r=="II"?$._binLE:$._binBE;s.readUshort(t,n),n+=2;var a=s.readUint(t,n);n+=4;for(var o=[];;){var f=s.readUshort(t,a),l=s.readUshort(t,a+4);if(f!=0&&(l<1||13<l)){log("error in TIFF");break}if($._readIFD(s,t,a,o,0,e),a=s.readUint(t,a+2+f*12),a==0)break}return o};$.decodeImage=function(i,e,t){if(!e.data){var n=new Uint8Array(i),r=$._binBE.readASCII(n,0,2);if(e.t256!=null){e.isLE=r=="II",e.width=e.t256[0],e.height=e.t257[0];var s=e.t259?e.t259[0]:1,a=e.t266?e.t266[0]:1;e.t284&&e.t284[0]==2&&log("PlanarConfiguration 2 should not be used!"),s==7&&e.t258&&e.t258.length>3&&(e.t258=e.t258.slice(0,3));var o=e.t277?e.t277[0]:1,f=e.t258?e.t258[0]:1,l=f*o;s==1&&e.t279!=null&&e.t278&&e.t262[0]==32803&&(l=Math.round(e.t279[0]*8/(e.width*e.t278[0]))),e.t50885&&e.t50885[0]==4&&(l=e.t258[0]*3);var p=Math.ceil(e.width*l/8)*8,d=e.t273;(d==null||e.t322)&&(d=e.t324);var c=e.t279;s==1&&d.length==1&&(c=[e.height*(p>>>3)]),(c==null||e.t322)&&(c=e.t325);var m=new Uint8Array(e.height*(p>>>3)),S=0;if(e.t322!=null){var v=e.t322[0],u=e.t323[0],h=Math.floor((e.width+v-1)/v),g=Math.floor((e.height+u-1)/u),A=new Uint8Array(Math.ceil(v*u*l/8)|0);console.log("====",h,g);for(var E=0;E<g;E++)for(var y=0;y<h;y++){var x=E*h+y;A.fill(0),$.decode._decompress(e,t,n,d[x],c[x],s,A,0,a,v,u),s==6?m=A:$._copyTile(A,Math.ceil(v*l/8)|0,u,m,Math.ceil(e.width*l/8)|0,e.height,Math.ceil(y*v*l/8)|0,E*u)}S=m.length*8}else{if(d==null)return;var b=e.t278?e.t278[0]:e.height;b=Math.min(b,e.height);for(var x=0;x<d.length;x++)$.decode._decompress(e,t,n,d[x],c[x],s,m,Math.ceil(S/8)|0,a,e.width,b),S+=p*b;S=Math.min(S,m.length*8)}e.data=new Uint8Array(m.buffer,0,Math.ceil(S/8)|0)}}};$.decode._decompress=function(i,e,t,n,r,s,a,o,f,l,p){if(i.t271&&i.t271[0]=="Panasonic"&&i.t45&&i.t45[0]==6&&(s=34316),s==1)for(var d=0;d<r;d++)a[o+d]=t[n+d];else if(s==2)$.decode._decodeG2(t,n,r,a,o,l,f);else if(s==3)$.decode._decodeG3(t,n,r,a,o,l,f,i.t292?(i.t292[0]&1)==1:!1);else if(s==4)$.decode._decodeG4(t,n,r,a,o,l,f);else if(s==5)$.decode._decodeLZW(t,n,r,a,o,8);else if(s==6)$.decode._decodeOldJPEG(i,t,n,r,a,o);else if(s==7||s==34892)$.decode._decodeNewJPEG(i,t,n,r,a,o);else if(s==8||s==32946){var c=new Uint8Array(t.buffer,n+2,r-6),m=$._inflateRaw(c);o+m.length<=a.length&&a.set(m,o)}else s==9?$.decode._decodeVC5(t,n,r,a,o,i.t33422):s==32767?$.decode._decodeARW(i,t,n,r,a,o):s==32773?$.decode._decodePackBits(t,n,r,a,o):s==32809?$.decode._decodeThunder(t,n,r,a,o):s==34316?$.decode._decodePanasonic(i,t,n,r,a,o):s==34713?$.decode._decodeNikon(i,e,t,n,r,a,o):s==34676?$.decode._decodeLogLuv32(i,t,n,r,a,o):log("Unknown compression",s);var S=i.t258?Math.min(32,i.t258[0]):1,v=i.t277?i.t277[0]:1,u=S*v>>>3,h=Math.ceil(S*v*l/8);if(S==16&&!i.isLE&&i.t33422==null)for(var g=0;g<p;g++)for(var A=o+g*h,E=1;E<h;E+=2){var y=a[A+E];a[A+E]=a[A+E-1],a[A+E-1]=y}if(i.t317&&i.t317[0]==2)for(var g=0;g<p;g++){var x=o+g*h;if(S==16)for(var d=u;d<h;d+=2){var b=(a[x+d+1]<<8|a[x+d])+(a[x+d-u+1]<<8|a[x+d-u]);a[x+d]=b&255,a[x+d+1]=b>>>8&255}else if(v==3)for(var d=3;d<h;d+=3)a[x+d]=a[x+d]+a[x+d-3]&255,a[x+d+1]=a[x+d+1]+a[x+d-2]&255,a[x+d+2]=a[x+d+2]+a[x+d-1]&255;else for(var d=u;d<h;d++)a[x+d]=a[x+d]+a[x+d-u]&255}};$.decode._decodePanasonic=function(i,e,t,n,r,s){var a=e.buffer,o=i.t2[0],f=i.t3[0],l=i.t10[0],p=i.t45[0],d=0,c=0,m=0,S=0,v=p==6?new Uint32Array(18):new Uint8Array(16),u,h,g,A=[0,0],E=[0,0],y,x=0,b,_,M,D,R=new Uint8Array(16384),C=new Uint16Array(r.buffer);function P(Te){if(m==0){var Ee=new Uint8Array(a,t+c+8184,8200),fe=new Uint8Array(a,t+c,8184);R.set(Ee),R.set(fe,Ee.length),c+=16384}if(p==5)for(u=0;u<16;u++)v[u]=R[m++],m&=16383;else return m=m-Te&131071,S=m>>3^16368,(R[S]|R[S+1]<<8)>>(m&7)&~(-1<<Te)}function I(Te){return R[m+15-Te]}function B(){v[0]=I(0)<<6|I(1)>>2,v[1]=((I(1)&3)<<12|I(2)<<4|I(3)>>4)&16383,v[2]=I(3)>>2&3,v[3]=(I(3)&3)<<8|I(4),v[4]=I(5)<<2|I(6)>>6,v[5]=(I(6)&63)<<4|I(7)>>4,v[6]=I(7)>>2&3,v[7]=(I(7)&3)<<8|I(8),v[8]=I(9)<<2&1020|I(10)>>6,v[9]=(I(10)<<4|I(11)>>4)&1023,v[10]=I(11)>>2&3,v[11]=(I(11)&3)<<8|I(12),v[12]=(I(13)<<2&1020|I(14)>>6)&1023,v[13]=(I(14)<<4|I(15)>>4)&1023,m+=16,S=0}function z(){v[0]=I(0)<<4|I(1)>>4,v[1]=((I(1)&15)<<8|I(2))&4095,v[2]=I(3)>>6&3,v[3]=(I(3)&63)<<2|I(4)>>6,v[4]=(I(4)&63)<<2|I(5)>>6,v[5]=(I(5)&63)<<2|I(6)>>6,v[6]=I(6)>>4&3,v[7]=(I(6)&15)<<4|I(7)>>4,v[8]=(I(7)&15)<<4|I(8)>>4,v[9]=(I(8)&15)<<4|I(9)>>4,v[10]=I(9)>>2&3,v[11]=(I(9)&3)<<6|I(10)>>2,v[12]=(I(10)&3)<<6|I(11)>>2,v[13]=(I(11)&3)<<6|I(12)>>2,v[14]=I(12)&3,v[15]=I(13),v[16]=I(14),v[17]=I(15),m+=16,S=0}function H(){A[0]=0,A[1]=0,E[0]=0,E[1]=0}if(p==7)throw p;if(p==6){var U=l==12,N=U?z:B,F=U?14:11,V=U?128:512,k=U?2048:8192,se=U?16383:65535,he=U?4095:16383,oe=o/F,G=oe*16,X=U?18:14;for(_=0;_<f-15;_+=16){var ee=Math.min(16,f-_),Me=G*ee;for(R=new Uint8Array(a,t+d,Me),m=0,d+=Me,D=0,M=0;D<ee;D++,M=0){x=(_+D)*o;for(var le=0;le<oe;le++)for(N(),H(),g=0,b=0,u=0;u<F;u++){if(y=u&1,u%3==2){var _e=S<X?v[S++]:0;_e==3&&(_e=4),b=V<<_e,g=1<<_e}var Fe=S<X?v[S++]:0;A[y]?(Fe*=g,b<k&&E[y]>b&&(Fe+=E[y]-b),E[y]=Fe):(A[y]=Fe,Fe?E[y]=Fe:Fe=E[y]),C[x+M++]=Fe-15<=se?Fe-15&se:Fe+2147483633>>31&he}}}}else if(p==5){var ye=l==12?10:9;for(_=0;_<f;_++)for(M=0;M<o;M+=ye)P(0),l==12?(C[x++]=((v[1]&15)<<8)+v[0],C[x++]=16*v[2]+(v[1]>>4),C[x++]=((v[4]&15)<<8)+v[3],C[x++]=16*v[5]+(v[4]>>4),C[x++]=((v[7]&15)<<8)+v[6],C[x++]=16*v[8]+(v[7]>>4),C[x++]=((v[10]&15)<<8)+v[9],C[x++]=16*v[11]+(v[10]>>4),C[x++]=((v[13]&15)<<8)+v[12],C[x++]=16*v[14]+(v[13]>>4)):l==14&&(C[x++]=v[0]+((v[1]&63)<<8),C[x++]=(v[1]>>6)+4*v[2]+((v[3]&15)<<10),C[x++]=(v[3]>>4)+16*v[4]+((v[5]&3)<<12),C[x++]=((v[5]&252)>>2)+(v[6]<<6),C[x++]=v[7]+((v[8]&63)<<8),C[x++]=(v[8]>>6)+4*v[9]+((v[10]&15)<<10),C[x++]=(v[10]>>4)+16*v[11]+((v[12]&3)<<12),C[x++]=((v[12]&252)>>2)+(v[13]<<6),C[x++]=v[14]+((v[15]&63)<<8))}else if(p==4)for(_=0;_<f;_++)for(M=0;M<o;M++)u=M%14,y=u&1,u==0&&H(),u%3==2&&(g=4>>3-P(2)),E[y]?(h=P(8),h!=0&&(A[y]-=128<<g,(A[y]<0||g==4)&&(A[y]&=~(-1<<g)),A[y]+=h<<g)):(E[y]=P(8),(E[y]||u>11)&&(A[y]=E[y]<<4|P(4))),C[x++]=A[M&1];else throw p};$.decode._decodeVC5=(function(){var i=[1,0,1,0,2,2,1,1,3,7,1,2,5,25,1,3,6,48,1,4,6,54,1,5,7,111,1,8,7,99,1,6,7,105,12,0,7,107,1,7,8,209,20,0,8,212,1,9,8,220,1,10,9,393,1,11,9,394,32,0,9,416,1,12,9,427,1,13,10,887,1,18,10,784,1,14,10,790,1,15,10,835,60,0,10,852,1,16,10,885,1,17,11,1571,1,19,11,1668,1,20,11,1669,100,0,11,1707,1,21,11,1772,1,22,12,3547,1,29,12,3164,1,24,12,3166,1,25,12,3140,1,23,12,3413,1,26,12,3537,1,27,12,3539,1,28,13,7093,1,35,13,6283,1,30,13,6331,1,31,13,6335,180,0,13,6824,1,32,13,7072,1,33,13,7077,320,0,13,7076,1,34,14,12565,1,36,14,12661,1,37,14,12669,1,38,14,13651,1,39,14,14184,1,40,15,28295,1,46,15,28371,1,47,15,25320,1,42,15,25336,1,43,15,25128,1,41,15,27300,1,44,15,28293,1,45,16,50259,1,48,16,50643,1,49,16,50675,1,50,16,56740,1,53,16,56584,1,51,16,56588,1,52,17,113483,1,61,17,113482,1,60,17,101285,1,55,17,101349,1,56,17,109205,1,57,17,109207,1,58,17,100516,1,54,17,113171,1,59,18,202568,1,62,18,202696,1,63,18,218408,1,64,18,218412,1,65,18,226340,1,66,18,226356,1,67,18,226358,1,68,19,402068,1,69,19,405138,1,70,19,405394,1,71,19,436818,1,72,19,436826,1,73,19,452714,1,75,19,452718,1,76,19,452682,1,74,20,804138,1,77,20,810279,1,78,20,810790,1,79,20,873638,1,80,20,873654,1,81,20,905366,1,82,20,905430,1,83,20,905438,1,84,21,1608278,1,85,21,1620557,1,86,21,1621582,1,87,21,1621583,1,88,21,1747310,1,89,21,1810734,1,90,21,1810735,1,91,21,1810863,1,92,21,1810879,1,93,22,3621725,1,99,22,3621757,1,100,22,3241112,1,94,22,3494556,1,95,22,3494557,1,96,22,3494622,1,97,22,3494623,1,98,23,6482227,1,102,23,6433117,1,101,23,6989117,1,103,23,6989119,1,105,23,6989118,1,104,23,7243449,1,106,23,7243512,1,107,24,13978233,1,111,24,12964453,1,109,24,12866232,1,108,24,14486897,1,113,24,13978232,1,110,24,14486896,1,112,24,14487026,1,114,24,14487027,1,115,25,25732598,1,225,25,25732597,1,189,25,25732596,1,188,25,25732595,1,203,25,25732594,1,202,25,25732593,1,197,25,25732592,1,207,25,25732591,1,169,25,25732590,1,223,25,25732589,1,159,25,25732522,1,235,25,25732579,1,152,25,25732575,1,192,25,25732489,1,179,25,25732573,1,201,25,25732472,1,172,25,25732576,1,149,25,25732488,1,178,25,25732566,1,120,25,25732571,1,219,25,25732577,1,150,25,25732487,1,127,25,25732506,1,211,25,25732548,1,125,25,25732588,1,158,25,25732486,1,247,25,25732467,1,238,25,25732508,1,163,25,25732552,1,228,25,25732603,1,183,25,25732513,1,217,25,25732587,1,168,25,25732520,1,122,25,25732484,1,128,25,25732562,1,249,25,25732505,1,187,25,25732504,1,186,25,25732483,1,136,25,25928905,1,181,25,25732560,1,255,25,25732500,1,230,25,25732482,1,135,25,25732555,1,233,25,25732568,1,222,25,25732583,1,145,25,25732481,1,134,25,25732586,1,167,25,25732521,1,248,25,25732518,1,209,25,25732480,1,243,25,25732512,1,216,25,25732509,1,164,25,25732547,1,140,25,25732479,1,157,25,25732544,1,239,25,25732574,1,191,25,25732564,1,251,25,25732478,1,156,25,25732546,1,139,25,25732498,1,242,25,25732557,1,133,25,25732477,1,162,25,25732515,1,213,25,25732584,1,165,25,25732514,1,212,25,25732476,1,227,25,25732494,1,198,25,25732531,1,236,25,25732530,1,234,25,25732529,1,117,25,25732528,1,215,25,25732527,1,124,25,25732526,1,123,25,25732525,1,254,25,25732524,1,253,25,25732523,1,148,25,25732570,1,218,25,25732580,1,146,25,25732581,1,147,25,25732569,1,224,25,25732533,1,143,25,25732540,1,184,25,25732541,1,185,25,25732585,1,166,25,25732556,1,132,25,25732485,1,129,25,25732563,1,250,25,25732578,1,151,25,25732501,1,119,25,25732502,1,193,25,25732536,1,176,25,25732496,1,245,25,25732553,1,229,25,25732516,1,206,25,25732582,1,144,25,25732517,1,208,25,25732558,1,137,25,25732543,1,241,25,25732466,1,237,25,25732507,1,190,25,25732542,1,240,25,25732551,1,131,25,25732554,1,232,25,25732565,1,252,25,25732475,1,171,25,25732493,1,205,25,25732492,1,204,25,25732491,1,118,25,25732490,1,214,25,25928904,1,180,25,25732549,1,126,25,25732602,1,182,25,25732539,1,175,25,25732545,1,141,25,25732559,1,138,25,25732537,1,177,25,25732534,1,153,25,25732503,1,194,25,25732606,1,160,25,25732567,1,121,25,25732538,1,174,25,25732497,1,246,25,25732550,1,130,25,25732572,1,200,25,25732474,1,170,25,25732511,1,221,25,25732601,1,196,25,25732532,1,142,25,25732519,1,210,25,25732495,1,199,25,25732605,1,155,25,25732535,1,154,25,25732499,1,244,25,25732510,1,220,25,25732600,1,195,25,25732607,1,161,25,25732604,1,231,25,25732473,1,173,25,25732599,1,226,26,51465122,1,116,26,51465123,0,1],e,t,n,r=[3,3,3,3,2,2,2,1,1,1],s=24576,a=16384,o=8192,f=a|o;function l(g){var A=g[1],E=g[0][A>>>3]>>>7-(A&7)&1;return g[1]++,E}function p(g,A){if(e==null){e={};for(var E=0;E<i.length;E+=4)e[i[E+1]]=i.slice(E,E+4)}for(var y=l(g),x=e[y];x==null;)y=y<<1|l(g),x=e[y];var b=x[3];b!=0&&(b=l(g)==0?b:-b),A[0]=x[2],A[1]=b}function d(g,A){for(var E=0;E<A;E++)(g&1)==1&&g++,g=g>>>1;return g}function c(g,A){return g>>A}function m(g,A,E,y,x,b){A[E]=c(c(11*g[x]-4*g[x+b]+g[x+b+b]+4,3)+g[y],1),A[E+b]=c(c(5*g[x]+4*g[x+b]-g[x+b+b]+4,3)-g[y],1)}function S(g,A,E,y,x,b){var _=g[x-b]-g[x+b],M=g[x],D=g[y];A[E]=c(c(_+4,3)+M+D,1),A[E+b]=c(c(-_+4,3)+M-D,1)}function v(g,A,E,y,x,b){A[E]=c(c(5*g[x]+4*g[x-b]-g[x-b-b]+4,3)+g[y],1),A[E+b]=c(c(11*g[x]-4*g[x-b]+g[x-b-b]+4,3)-g[y],1)}function u(g){return g=g<0?0:g>4095?4095:g,g=n[g]>>>2,g}function h(g,A,E,y,x,b){y=new Uint16Array(y.buffer);var _=Date.now(),M=$._binBE,D=A+E,R,C,P,I,B,z,H,U,N,F;A+=4;for(var V=b[0]==1;A<D;){var k=M.readShort(g,A),se=M.readUshort(g,A+2);if(A+=4,k==12)R=se;else if(k==20)C=se;else if(k==21)P=se;else if(k==48)I=se;else if(k==53)B=se;else if(k!=35){if(k==62)z=se;else if(k!=101){if(k==109)H=se;else if(k!=84){if(k!=106){if(k!=107){if(k!=108){if(k!=102){if(k==104)U=se;else if(k!=105){var he=k<0?-k:k,oe=he&65280,G=0;if(he&f&&(he&o?(G=se&65535,G+=(he&255)<<16):G=se&65535),(he&s)==s){if(N==null){N=[];for(var X=0;X<4;X++)N[X]=new Int16Array((C>>>1)*(P>>>1));F=new Int16Array((C>>>1)*(P>>>1)),t=new Int16Array(1024);for(var X=0;X<1024;X++){var ee=X-512,Me=Math.abs(ee),R=Math.floor(768*Me*Me*Me/(65025*255))+Me;t[X]=Math.sign(ee)*R}n=new Uint16Array(4096);for(var le=65535,X=0;X<4096;X++){var _e=X,Fe=le*(Math.pow(113,_e/4095)-1)/112;n[X]=Math.min(Fe,le)}}var ye=N[z],Te=d(C,1+r[I]),Ee=d(P,1+r[I]);if(I==0)for(var fe=0;fe<Ee;fe++)for(var be=0;be<Te;be++){var O=A+(fe*Te+be)*2;ye[fe*(C>>>1)+be]=g[O]<<8|g[O+1]}else{for(var We=[g,A*8],ze=[],Ye=0,de=Te*Ee,L=[0,0],T=0,se=0;Ye<de;)for(p(We,L),T=L[0],se=L[1];T>0;)ze[Ye++]=se,T--;for(var W=(I-1)%3,ie=W!=1?Te:0,Z=W!=0?Ee:0,fe=0;fe<Ee;fe++)for(var j=(fe+Z)*(C>>>1)+ie,pe=fe*Te,be=0;be<Te;be++)ye[j+be]=t[ze[pe+be]+512]*B;if(W==2){for(var U=C>>>1,ue=Te*2,ve=Ee*2,fe=0;fe<Ee;fe++)for(var be=0;be<ue;be++){var X=fe*2*U+be,Ae=fe*U+be,ae=Ee*U+Ae;fe==0?m(ye,F,X,ae,Ae,U):fe==Ee-1?v(ye,F,X,ae,Ae,U):S(ye,F,X,ae,Ae,U)}var re=ye;ye=F,F=re;for(var fe=0;fe<ve;fe++)for(var be=0;be<Te;be++){var X=fe*U+2*be,Ae=fe*U+be,ae=Te+Ae;be==0?m(ye,F,X,ae,Ae,1):be==Te-1?v(ye,F,X,ae,Ae,1):S(ye,F,X,ae,Ae,1)}var re=ye;ye=F,F=re;for(var Se=[],Pe=2-~~((I-1)/3),xe=0;xe<3;xe++)Se[xe]=H>>14-xe*2&3;var Ve=Se[Pe];if(Ve!=0)for(var fe=0;fe<ve;fe++)for(var be=0;be<ue;be++){var X=fe*U+be;ye[X]=ye[X]<<Ve}}}if(I==9&&z==3)for(var q=N[0],ge=N[1],me=N[2],De=N[3],fe=0;fe<P;fe+=2)for(var be=0;be<C;be+=2){var ce=fe*C+be,O=(fe>>>1)*(C>>>1)+(be>>>1),ne=q[O],Ie=ge[O]-2048,Ge=me[O]-2048,nt=De[O]-2048,Qe=(Ie<<1)+ne,Ot=(Ge<<1)+ne,Bt=ne+nt,wi=ne-nt;V?(y[ce]=u(Bt),y[ce+1]=u(Ot),y[ce+C]=u(Qe),y[ce+C+1]=u(wi)):(y[ce]=u(Qe),y[ce+1]=u(Bt),y[ce+C]=u(wi),y[ce+C+1]=u(Ot))}A+=G*4}else if(he==16388)A+=G*4;else if(!(oe==8192||oe==8448||oe==9216))throw he.toString(16)}}}}}}}}}console.log(Date.now()-_)}return h})();$.decode._decodeLogLuv32=function(i,e,t,n,r,s){for(var a=i.width,o=a*4,f=0,l=new Uint8Array(o);f<n;){for(var p=0;p<o;){var d=e[t+f];if(f++,d<128){for(var c=0;c<d;c++)l[p+c]=e[t+f+c];p+=d,f+=d}else{d=d-126;for(var c=0;c<d;c++)l[p+c]=e[t+f];p+=d,f++}}for(var m=0;m<a;m++)r[s+0]=l[m],r[s+1]=l[m+a],r[s+2]=l[m+a*2],r[s+4]=l[m+a*3],s+=6}};$.decode._ljpeg_diff=function(i,e,t){var n=$.decode._getbithuff,r,s;return r=n(i,e,t[0],t),s=n(i,e,r,0),(s&1<<r-1)==0&&(s-=(1<<r)-1),s};$.decode._decodeARW=function(i,e,t,n,r,s){var a=i.t256[0],o=i.t257[0],f=i.t258[0],l=i.isLE?$._binLE:$._binBE,p=a*o==n||a*o*1.5==n;if(!p){o+=8;var d=[t,0,0,0],c=new Uint16Array(32770),m=[3857,3856,3599,3342,3085,2828,2571,2314,2057,1800,1543,1286,1029,772,771,768,514,513],H,S,v,M,_,u=0,h=$.decode._ljpeg_diff;for(c[0]=15,v=H=0;H<18;H++)for(var g=32768>>>(m[H]>>>8),S=0;S<g;S++)c[++v]=m[H];for(M=a;M--;)for(_=0;_<o+1;_+=2)if(_==o&&(_=1),u+=h(e,d,c),_<o){var A=u&4095;$.decode._putsF(r,(_*a+M)*f,A<<16-f)}return}if(a*o*1.5==n){for(var H=0;H<n;H+=3){var E=e[t+H+0],y=e[t+H+1],x=e[t+H+2];r[s+H]=y<<4|E>>>4,r[s+H+1]=E<<4|x>>>4,r[s+H+2]=x<<4|y>>>4}return}var b=new Uint16Array(16),_,M,D,R,C,P,I,B,z,H,U,N=new Uint8Array(a+1);for(_=0;_<o;_++){for(var F=0;F<a;F++)N[F]=e[t++];for(U=0,M=0;M<a-30;U+=16){for(R=2047&(D=l.readUint(N,U)),C=2047&D>>>11,P=15&D>>>22,I=15&D>>>26,B=0;B<4&&128<<B<=R-C;B++);for(z=30,H=0;H<16;H++)H==P?b[H]=R:H==I?b[H]=C:(b[H]=((l.readUshort(N,U+(z>>3))>>>(z&7)&127)<<B)+C,b[H]>2047&&(b[H]=2047),z+=7);for(H=0;H<16;H++,M+=2){var A=b[H]<<1;$.decode._putsF(r,(_*a+M)*f,A<<16-f)}M-=M&1?1:31}}};$.decode._decodeNikon=function(i,e,t,n,r,s,a){var o=[[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,5,4,3,6,2,7,1,0,8,9,11,10,12],[0,0,1,5,1,1,1,1,1,1,2,0,0,0,0,0,0,57,90,56,39,22,5,4,3,2,1,0,11,12,12],[0,0,1,4,2,3,1,2,0,0,0,0,0,0,0,0,0,5,4,6,3,7,2,8,1,9,0,10,11,12],[0,0,1,4,3,1,1,1,1,1,2,0,0,0,0,0,0,5,6,4,7,8,3,9,2,1,0,10,11,12,13,14],[0,0,1,5,1,1,1,1,1,1,1,2,0,0,0,0,0,8,92,75,58,41,7,6,5,4,3,2,1,0,13,14],[0,0,1,4,2,2,3,1,2,0,0,0,0,0,0,0,0,7,6,8,5,9,4,10,3,11,12,2,0,1,13,14]],f=i.t256[0],l=i.t257[0],p=i.t258[0],d=0,c=0,m=$.decode._make_decoder,S=$.decode._getbithuff,v=e[0].exifIFD.makerNote,u=v.t150?v.t150:v.t140,h=0,g=u[h++],A=u[h++];(g==73||A==88)&&(h+=2110),g==70&&(d=2),p==14&&(d+=3);for(var E=[[0,0],[0,0]],y=i.isLE?$._binLE:$._binBE,D=0;D<2;D++)for(var x=0;x<2;x++)E[D][x]=y.readShort(u,h),h+=2;var b=1<<p&32767,_=0,M=y.readShort(u,h);h+=2,M>1&&(_=Math.floor(b/(M-1))),g==68&&A==32&&_>0&&(c=y.readShort(u,562));var D,R,C,P,I,B,z=[0,0],H=m(o[d]),U=[n,0,0,0];for(R=0;R<l;R++)for(c&&R==c&&(H=m(o[d+1])),C=0;C<f;C++){D=S(t,U,H[0],H),P=D&15,I=D>>>4,B=(S(t,U,P-I,0)<<1)+1<<I>>>1,(B&1<<P-1)==0&&(B-=(1<<P)-(I==0?1:0)),C<2?z[C]=E[R&1][C]+=B:z[C&1]+=B;var N=Math.min(Math.max(z[C&1],0),(1<<p)-1),F=(R*f+C)*p;$.decode._putsF(s,F,N<<16-p)}};$.decode._putsF=function(i,e,t){t=t<<8-(e&7);var n=e>>>3;i[n]|=t>>>16,i[n+1]|=t>>>8,i[n+2]|=t};$.decode._getbithuff=function(i,e,t,n){var r=0;$.decode._get_byte;var s,a=e[0],o=e[1],f=e[2],l=e[3];if(t==0||f<0)return 0;for(;!l&&f<t&&(s=i[a++])!=-1&&!(l=r);)o=(o<<8)+s,f+=8;if(s=o<<32-f>>>32-t,n?(f-=n[s+1]>>>8,s=n[s+1]&255):f-=t,f<0)throw"e";return e[0]=a,e[1]=o,e[2]=f,e[3]=l,s};$.decode._make_decoder=function(i){var e,t,n,r,s,a=[];for(e=16;e!=0&&!i[e];e--);var o=17;for(a[0]=e,n=t=1;t<=e;t++)for(r=0;r<i[t];r++,++o)for(s=0;s<1<<e-t;s++)n<=1<<e&&(a[n++]=t<<8|i[o]);return a};$.decode._decodeNewJPEG=function(i,e,t,n,r,s){n=Math.min(n,e.length-t);var a=i.t347,o=a?a.length:0,f=new Uint8Array(o+n);if(a){for(var l=216,p=217,d=0,c=0;c<o-1&&!(a[c]==255&&a[c+1]==p);c++)f[d++]=a[c];var m=e[t],S=e[t+1];(m!=255||S!=l)&&(f[d++]=m,f[d++]=S);for(var c=2;c<n;c++)f[d++]=e[t+c]}else for(var c=0;c<n;c++)f[c]=e[t+c];if(i.t262[0]==32803||i.t259[0]==7&&i.t262[0]==34892){var v=i.t258[0],u=$.LosslessJpegDecode(f),h=u.length;if(v==16)if(i.isLE)for(var c=0;c<h;c++)r[s+(c<<1)]=u[c]&255,r[s+(c<<1)+1]=u[c]>>>8;else for(var c=0;c<h;c++)r[s+(c<<1)]=u[c]>>>8,r[s+(c<<1)+1]=u[c]&255;else if(v==14||v==12||v==10)for(var g=16-v,c=0;c<h;c++)$.decode._putsF(r,c*v,u[c]<<g);else if(v==8)for(var c=0;c<h;c++)r[s+c]=u[c];else throw new Error("unsupported bit depth "+v)}else{var A=new $.JpegDecoder;A.parse(f);for(var E=A.getData({width:A.width,height:A.height,forceRGB:!0,isSourcePDF:!1}),c=0;c<E.length;c++)r[s+c]=E[c]}i.t262[0]==6&&(i.t262[0]=2)};$.decode._decodeOldJPEGInit=function(i,e,t,n){var r=216,s=219,a=196,o=221,f=192,l=218,p=0,d=0,c,m,S=!1,v,u,h,g=i.t513,A=g?g[0]:0,E=i.t514,y=E?E[0]:0,x=i.t324||i.t273||g,b=i.t530,_=0,M=0,D=i.t277?i.t277[0]:1,R=i.t515;if(x&&(d=x[0],S=x.length>1),!S){if(e[t]==255&&e[t+1]==r)return{jpegOffset:t};if(g!=null&&(e[t+A]==255&&e[t+A+1]==r?p=t+A:log("JPEGInterchangeFormat does not point to SOI"),E==null?log("JPEGInterchangeFormatLength field is missing"):(A>=d||A+y<=d)&&log("JPEGInterchangeFormatLength field value is invalid"),p!=null))return{jpegOffset:p}}if(b!=null&&(_=b[0],M=b[1]),g!=null&&E!=null)if(y>=2&&A+y<=d){for(e[t+A+y-2]==255&&e[t+A+y-1]==r?c=new Uint8Array(y-2):c=new Uint8Array(y),v=0;v<c.length;v++)c[v]=e[t+A+v];log("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables")}else log("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");if(c==null){var C=0,P=[];P[C++]=255,P[C++]=r;var I=i.t519;if(I==null)throw new Error("JPEGQTables tag is missing");for(v=0;v<I.length;v++)for(P[C++]=255,P[C++]=s,P[C++]=0,P[C++]=67,P[C++]=v,u=0;u<64;u++)P[C++]=e[t+I[v]+u];for(h=0;h<2;h++){var B=i[h==0?"t520":"t521"];if(B==null)throw new Error((h==0?"JPEGDCTables":"JPEGACTables")+" tag is missing");for(v=0;v<B.length;v++){P[C++]=255,P[C++]=a;var z=19;for(u=0;u<16;u++)z+=e[t+B[v]+u];for(P[C++]=z>>>8,P[C++]=z&255,P[C++]=v|h<<4,u=0;u<16;u++)P[C++]=e[t+B[v]+u];for(u=0;u<z;u++)P[C++]=e[t+B[v]+16+u]}}if(P[C++]=255,P[C++]=f,P[C++]=0,P[C++]=8+3*D,P[C++]=8,P[C++]=i.height>>>8&255,P[C++]=i.height&255,P[C++]=i.width>>>8&255,P[C++]=i.width&255,P[C++]=D,D==1)P[C++]=1,P[C++]=17,P[C++]=0;else for(v=0;v<3;v++)P[C++]=v+1,P[C++]=v!=0?17:(_&15)<<4|M&15,P[C++]=v;R!=null&&R[0]!=0&&(P[C++]=255,P[C++]=o,P[C++]=0,P[C++]=4,P[C++]=R[0]>>>8&255,P[C++]=R[0]&255),c=new Uint8Array(P)}var H=-1;for(v=0;v<c.length-1;){if(c[v]==255&&c[v+1]==f){H=v;break}v++}if(H==-1){var U=new Uint8Array(c.length+10+3*D);U.set(c);var N=c.length;if(H=c.length,c=U,c[N++]=255,c[N++]=f,c[N++]=0,c[N++]=8+3*D,c[N++]=8,c[N++]=i.height>>>8&255,c[N++]=i.height&255,c[N++]=i.width>>>8&255,c[N++]=i.width&255,c[N++]=D,D==1)c[N++]=1,c[N++]=17,c[N++]=0;else for(v=0;v<3;v++)c[N++]=v+1,c[N++]=v!=0?17:(_&15)<<4|M&15,c[N++]=v}if(e[d]==255&&e[d+1]==l){var F=e[d+2]<<8|e[d+3];for(m=new Uint8Array(F+2),m[0]=e[d],m[1]=e[d+1],m[2]=e[d+2],m[3]=e[d+3],v=0;v<F-2;v++)m[v+4]=e[d+v+4]}else{m=new Uint8Array(8+2*D);var V=0;if(m[V++]=255,m[V++]=l,m[V++]=0,m[V++]=6+2*D,m[V++]=D,D==1)m[V++]=1,m[V++]=0;else for(v=0;v<3;v++)m[V++]=v+1,m[V++]=v<<4|v;m[V++]=0,m[V++]=63,m[V++]=0}return{jpegOffset:t,tables:c,sosMarker:m,sofPosition:H}};$.decode._decodeOldJPEG=function(i,e,t,n,r,s){var a,o,f,l,p,d=$.decode._decodeOldJPEGInit(i,e,t,n);if(d.jpegOffset!=null)for(o=t+n-d.jpegOffset,l=new Uint8Array(o),a=0;a<o;a++)l[a]=e[d.jpegOffset+a];else{for(f=d.tables.length,l=new Uint8Array(f+d.sosMarker.length+n+2),l.set(d.tables),p=f,l[d.sofPosition+5]=i.height>>>8&255,l[d.sofPosition+6]=i.height&255,l[d.sofPosition+7]=i.width>>>8&255,l[d.sofPosition+8]=i.width&255,(e[t]!=255||e[t+1]!=SOS)&&(l.set(d.sosMarker,p),p+=sosMarker.length),a=0;a<n;a++)l[p++]=e[t+a];l[p++]=255,l[p++]=EOI}var c=new $.JpegDecoder;c.parse(l);for(var m=c.getData({width:c.width,height:c.height,forceRGB:!0,isSourcePDF:!1}),a=0;a<m.length;a++)r[s+a]=m[a];i.t262&&i.t262[0]==6&&(i.t262[0]=2)};$.decode._decodePackBits=function(i,e,t,n,r){for(var s=new Int8Array(i.buffer),a=new Int8Array(n.buffer),o=e+t;e<o;){var f=s[e];if(e++,f>=0&&f<128)for(var l=0;l<f+1;l++)a[r]=s[e],r++,e++;if(f>=-127&&f<0){for(var l=0;l<-f+1;l++)a[r]=s[e],r++;e++}}return r};$.decode._decodeThunder=function(i,e,t,n,r){for(var s=[0,1,0,-1],a=[0,1,2,3,0,-3,-2,-1],o=e+t,f=r*2,l=0;e<o;){var p=i[e],d=p>>>6,c=p&63;if(e++,d==3&&(l=c&15,n[f>>>1]|=l<<4*(1-f&1),f++),d==0)for(var m=0;m<c;m++)n[f>>>1]|=l<<4*(1-f&1),f++;if(d==2)for(var m=0;m<2;m++){var S=c>>>3*(1-m)&7;S!=4&&(l+=a[S],n[f>>>1]|=l<<4*(1-f&1),f++)}if(d==1)for(var m=0;m<3;m++){var S=c>>>2*(2-m)&3;S!=2&&(l+=s[S],n[f>>>1]|=l<<4*(1-f&1),f++)}}};$.decode._dmap={1:0,"011":1,"000011":2,"0000011":3,"010":-1,"000010":-2,"0000010":-3};$.decode._lens=(function(){var i=function(f,l,p,d){for(var c=0;c<l.length;c++)f[l[c]]=p+c*d},e="00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100",t="0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111",n="11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011",r="0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101",s="00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";e=e.split(","),t=t.split(","),n=n.split(","),r=r.split(","),s=s.split(",");var a={},o={};return i(a,e,0,1),i(a,n,64,64),i(a,s,1792,64),i(o,t,0,1),i(o,r,64,64),i(o,s,1792,64),[a,o]})();$.decode._decodeG4=function(i,e,t,n,r,s,a){for(var o=$.decode,f=e<<3,l=0,p="",d=[],c=[],m=0;m<s;m++)c.push(0);c=o._makeDiff(c);for(var S=0,v=0,u=0,h=0,g=0,A=0,E="",y=0,x=Math.ceil(s/8)*8;f>>>3<e+t;){u=o._findDiff(c,S+(S==0?0:1),1-g),h=o._findDiff(c,u,g);var b=0;if(a==1&&(b=i[f>>>3]>>>7-(f&7)&1),a==2&&(b=i[f>>>3]>>>(f&7)&1),f++,p+=b,E=="H"){if(o._lens[g][p]!=null){var _=o._lens[g][p];p="",l+=_,_<64&&(o._addNtimes(d,l,g),S+=l,g=1-g,l=0,y--,y==0&&(E=""))}}else p=="0001"&&(p="",o._addNtimes(d,h-S,g),S=h),p=="001"&&(p="",E="H",y=2),o._dmap[p]!=null&&(v=u+o._dmap[p],o._addNtimes(d,v-S,g),S=v,p="",g=1-g);d.length==s&&E==""&&(o._writeBits(d,n,r*8+A*x),g=0,A++,S=0,c=o._makeDiff(d),d=[])}};$.decode._findDiff=function(i,e,t){for(var n=0;n<i.length;n+=2)if(i[n]>=e&&i[n+1]==t)return i[n]};$.decode._makeDiff=function(i){var e=[];i[0]==1&&e.push(0,1);for(var t=1;t<i.length;t++)i[t-1]!=i[t]&&e.push(t,i[t]);return e.push(i.length,0,i.length,1),e};$.decode._decodeG2=function(i,e,t,n,r,s,a){for(var o=$.decode,f=e<<3,l=0,p="",d=[],c=0,m=0,S=Math.ceil(s/8)*8;f>>>3<e+t;){var v=0;a==1&&(v=i[f>>>3]>>>7-(f&7)&1),a==2&&(v=i[f>>>3]>>>(f&7)&1),f++,p+=v,l=o._lens[c][p],l!=null&&(o._addNtimes(d,l,c),p="",l<64&&(c=1-c),d.length==s&&(o._writeBits(d,n,r*8+m*S),d=[],m++,c=0,(f&7)!=0&&(f+=8-(f&7)),l>=64&&(f+=8)))}};$.decode._decodeG3=function(i,e,t,n,r,s,a,o){for(var f=$.decode,l=e<<3,p=0,d="",c=[],m=[],S=0;S<s;S++)c.push(0);for(var v=0,u=0,h=0,g=0,A=0,E=-1,y="",x=0,b=!0,_=Math.ceil(s/8)*8;l>>>3<e+t;){h=f._findDiff(m,v+(v==0?0:1),1-A),g=f._findDiff(m,h,A);var M=0;if(a==1&&(M=i[l>>>3]>>>7-(l&7)&1),a==2&&(M=i[l>>>3]>>>(l&7)&1),l++,d+=M,b){if(f._lens[A][d]!=null){var D=f._lens[A][d];d="",p+=D,D<64&&(f._addNtimes(c,p,A),A=1-A,p=0)}}else if(y=="H"){if(f._lens[A][d]!=null){var D=f._lens[A][d];d="",p+=D,D<64&&(f._addNtimes(c,p,A),v+=p,A=1-A,p=0,x--,x==0&&(y=""))}}else d=="0001"&&(d="",f._addNtimes(c,g-v,A),v=g),d=="001"&&(d="",y="H",x=2),f._dmap[d]!=null&&(u=h+f._dmap[d],f._addNtimes(c,u-v,A),v=u,d="",A=1-A);d.endsWith("000000000001")&&(E>=0&&f._writeBits(c,n,r*8+E*_),o&&(a==1&&(b=(i[l>>>3]>>>7-(l&7)&1)==1),a==2&&(b=(i[l>>>3]>>>(l&7)&1)==1),l++),d="",A=0,E++,v=0,m=f._makeDiff(c),c=[])}c.length==s&&f._writeBits(c,n,r*8+E*_)};$.decode._addNtimes=function(i,e,t){for(var n=0;n<e;n++)i.push(t)};$.decode._writeBits=function(i,e,t){for(var n=0;n<i.length;n++)e[t+n>>>3]|=i[n]<<7-(t+n&7)};$.decode._decodeLZW=$.decode._decodeLZW=(function(){var i,e,t,n,r=0,s=0,a=0,o=0,f=function(){var u=i>>>3,h=e[u]<<16|e[u+1]<<8|e[u+2],g=h>>>24-(i&7)-s&(1<<s)-1;return i+=s,g},l=new Uint32Array(4096*4),p=0,d=function(u){if(u!=p){p=u,a=1<<u,o=a+1;for(var h=0;h<o+1;h++)l[4*h]=l[4*h+3]=h,l[4*h+1]=65535,l[4*h+2]=1}},c=function(u){s=u+1,r=o+1},m=function(u){for(var h=u<<2,g=l[h+2],A=n+g-1;h!=65535;)t[A--]=l[h],h=l[h+1];n+=g},S=function(u,h){var g=r<<2,A=u<<2;l[g]=l[(h<<2)+3],l[g+1]=A,l[g+2]=l[A+2]+1,l[g+3]=l[A+3],r++,r+1==1<<s&&s!=12&&s++},v=function(u,h,g,A,E,y){i=h<<3,e=u,t=A,n=E;var x=h+g<<3,b=0,_=0;for(d(y),c(y);i<x&&(b=f())!=o;){if(b==a){if(c(y),b=f(),b==o)break;m(b)}else b<r?(m(b),S(_,b)):(S(_,_),m(r-1));_=b}return n};return v})();$.tags={};$._types=(function(){var i=new Array(250);i.fill(0),i=i.concat([0,0,0,0,4,3,3,3,3,3,0,0,3,0,0,0,3,0,0,2,2,2,2,4,3,0,0,3,4,4,3,3,5,5,3,2,5,5,0,0,0,0,4,4,0,0,3,3,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,2,2,3,5,5,3,0,3,3,4,4,4,3,4,0,0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,3,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);var e={33432:2,33434:5,33437:5,34665:4,34850:3,34853:4,34855:3,34864:3,34866:4,36864:7,36867:2,36868:2,37121:7,37377:10,37378:5,37380:10,37381:5,37383:3,37384:3,37385:3,37386:5,37510:7,37520:2,37521:2,37522:2,40960:7,40961:3,40962:4,40963:4,40965:4,41486:5,41487:5,41488:3,41985:3,41986:3,41987:3,41988:5,41989:3,41990:3,41993:3,41994:3,41995:7,41996:3,42032:2,42033:2,42034:5,42036:2,42037:2,59932:7};return{basic:{main:i,rest:e},gps:{main:[1,2,5,2,5,1,5,5,0,9],rest:{18:2,29:2}}}})();$._readIFD=function(i,e,t,n,r,s){var a=i.readUshort(e,t);t+=2;var o={};s.debug&&log("   ".repeat(r),n.length-1,">>>----------------");for(var f=0;f<a;f++){var l=i.readUshort(e,t);t+=2;var p=i.readUshort(e,t);t+=2;var d=i.readUint(e,t);t+=4;var c=i.readUint(e,t);t+=4;var m=[];if(p==1||p==7){var S=d<5?t-4:c;S+d>e.buffer.byteLength&&(d=e.buffer.byteLength-S),m=new Uint8Array(e.buffer,S,d)}if(p==2){var v=d<5?t-4:c,u=e[v],h=Math.max(0,Math.min(d-1,e.length-v));u<128||h==0?m.push(i.readASCII(e,v,h)):m=new Uint8Array(e.buffer,v,h)}if(p==3)for(var g=0;g<d;g++)m.push(i.readUshort(e,(d<3?t-4:c)+2*g));if(p==4||p==13)for(var g=0;g<d;g++)m.push(i.readUint(e,(d<2?t-4:c)+4*g));if(p==5||p==10)for(var A=p==5?i.readUint:i.readInt,g=0;g<d;g++)m.push([A(e,c+g*8),A(e,c+g*8+4)]);if(p==8)for(var g=0;g<d;g++)m.push(i.readShort(e,(d<3?t-4:c)+2*g));if(p==9)for(var g=0;g<d;g++)m.push(i.readInt(e,(d<2?t-4:c)+4*g));if(p==11)for(var g=0;g<d;g++)m.push(i.readFloat(e,c+g*4));if(p==12)for(var g=0;g<d;g++)m.push(i.readDouble(e,c+g*8));if(d!=0&&m.length==0){if(log(l,"unknown TIFF tag type: ",p,"num:",d),f==0)return;continue}if(s.debug&&log("   ".repeat(r),l,p,$.tags[l],m),o["t"+l]=m,!(l==330&&o.t272&&o.t272[0]=="DSLR-A100")){if(l==330||l==34665||l==34853||l==50740&&i.readUshort(e,i.readUint(m,0))<300||l==61440){for(var E=l==50740?[i.readUint(m,0)]:m,y=[],g=0;g<E.length;g++)$._readIFD(i,e,E[g],y,r+1,s);l==330&&(o.subIFD=y),l==34665&&(o.exifIFD=y[0]),l==34853&&(o.gpsiIFD=y[0]),l==50740&&(o.dngPrvt=y[0]),l==61440&&(o.fujiIFD=y[0])}}if(l==37500&&s.parseMN){var x=m;if(i.readASCII(x,0,5)=="Nikon")o.makerNote=$.decode(x.slice(10).buffer)[0];else if(i.readASCII(x,0,5)=="OLYMP"||i.readASCII(x,0,9)=="OM SYSTEM"){var b=[8208,8224,8240,8256,8272],_=[];$._readIFD(i,x,x[1]==77?16:x[5]==85?12:8,_,r+1,s);for(var M=o.makerNote=_.pop(),g=0;g<b.length;g++){var D="t"+b[g];M[D]!=null&&($._readIFD(i,x,M[D][0],_,r+1,s),M[D]=_.pop())}M.t12288&&($._readIFD(i,M.t12288,0,_,r+1,s),M.t12288=_.pop())}else if(i.readUshort(e,c)<300&&i.readUshort(e,c+4)<=12){var _=[];$._readIFD(i,e,c,_,r+1,s),o.makerNote=_[0]}}}return n.push(o),s.debug&&log("   ".repeat(r),"<<<---------------"),t};$._writeIFD=function(i,e,t,n,r){var s=Object.keys(r),a=s.length;r.exifIFD&&a--,r.gpsiIFD&&a--,i.writeUshort(t,n,a),n+=2;for(var o=n+a*12+4,f=0;f<s.length;f++){var l=s[f];if(!(l=="t34665"||l=="t34853")){l=="exifIFD"&&(l="t34665"),l=="gpsiIFD"&&(l="t34853");var p=parseInt(l.slice(1)),d=e.main[p];if(d==null&&(d=e.rest[p]),d==null||d==0)throw new Error("unknown type of tag: "+p);var c=r[l];if(p==34665){var m=$._writeIFD(i,e,t,o,r.exifIFD);c=[o],o=m[1]}if(p==34853){var m=$._writeIFD(i,$._types.gps,t,o,r.gpsiIFD);c=[o],o=m[1]}d==2&&(c=c[0]+"\0");var S=c.length;i.writeUshort(t,n,p),n+=2,i.writeUshort(t,n,d),n+=2,i.writeUint(t,n,S),n+=4;var v=[-1,1,1,2,4,8,0,1,0,4,8,0,8][d]*S,u=n;if(v>4&&(i.writeUint(t,n,o),u=o),d==1||d==7)for(var h=0;h<S;h++)t[u+h]=c[h];else if(d==2)i.writeASCII(t,u,c);else if(d==3)for(var h=0;h<S;h++)i.writeUshort(t,u+2*h,c[h]);else if(d==4)for(var h=0;h<S;h++)i.writeUint(t,u+4*h,c[h]);else if(d==5||d==10)for(var g=d==5?i.writeUint:i.writeInt,h=0;h<S;h++){var A=c[h],E=A[0],y=A[1];if(E==null)throw"e";g(t,u+8*h,E),g(t,u+8*h+4,y)}else if(d==9)for(var h=0;h<S;h++)i.writeInt(t,u+4*h,c[h]);else if(d==12)for(var h=0;h<S;h++)i.writeDouble(t,u+8*h,c[h]);else throw d;v>4&&(v+=v&1,o+=v),n+=4}}return[n,o]};$.toRGBA8=function(i,e){function t(ze){return ze<.0031308?12.92*ze:1.055*Math.pow(ze,1/2.4)-.055}var n=i.width,r=i.height,s=n*r,a=i.data,o=new Uint8Array(s*4),f=i.t262?i.t262[0]:2,l=i.t258?Math.min(32,i.t258[0]):1;i.t262==null&&l==1&&(f=0);var p=i.t277?i.t277[0]:i.t258?i.t258.length:[1,1,3,1,1,4,3][f],d=i.t339?i.t339[0]:null;if(f==1&&l==32&&d!=3)throw"e";var c=Math.ceil(p*l*n/8);if(f==0){e=1/256;for(var m=0;m<r;m++){var S=m*c,v=m*n;if(l==1)for(var u=0;u<n;u++){var h=v+u<<2,g=a[S+(u>>3)]>>7-(u&7)&1;o[h]=o[h+1]=o[h+2]=(1-g)*255,o[h+3]=255}if(l==4)for(var u=0;u<n;u++){var h=v+u<<2,g=a[S+(u>>1)]>>4-4*(u&1)&15;o[h]=o[h+1]=o[h+2]=(15-g)*17,o[h+3]=255}if(l==8)for(var u=0;u<n;u++){var h=v+u<<2,g=a[S+u];o[h]=o[h+1]=o[h+2]=255-g,o[h+3]=255}if(l==16)for(var u=0;u<n;u++){var h=v+u<<2,A=S+2*u,g=a[A+1]<<8|a[A];o[h]=o[h+1]=o[h+2]=Math.min(255,255-~~(g*e)),o[h+3]=255}}}else if(f==1){e==null&&(e=1/256);for(var E=(a.length&3)==0?new Float32Array(a.buffer):null,m=0;m<r;m++){var S=m*c,v=m*n;if(l==1)for(var u=0;u<n;u++){var h=v+u<<2,g=a[S+(u>>3)]>>7-(u&7)&1;o[h]=o[h+1]=o[h+2]=g*255,o[h+3]=255}if(l==2)for(var u=0;u<n;u++){var h=v+u<<2,g=a[S+(u>>2)]>>6-2*(u&3)&3;o[h]=o[h+1]=o[h+2]=g*85,o[h+3]=255}if(l==8)for(var u=0;u<n;u++){var h=v+u<<2,g=a[S+u*p];o[h]=o[h+1]=o[h+2]=g,o[h+3]=255}if(l==16)for(var u=0;u<n;u++){var h=v+u<<2,A=S+2*u,g=a[A+1]<<8|a[A];o[h]=o[h+1]=o[h+2]=Math.min(255,~~(g*e)),o[h+3]=255}if(l==32)for(var u=0;u<n;u++){var h=v+u<<2,A=(S>>>2)+u,g=E[A];o[h]=o[h+1]=o[h+2]=~~(.5+255*g),o[h+3]=255}}}else if(f==2)if(l==8){if(p==1)for(var u=0;u<s;u++)o[4*u]=o[4*u+1]=o[4*u+2]=a[u],o[4*u+3]=255;if(p==3)for(var u=0;u<s;u++){var h=u<<2,y=u*3;o[h]=a[y],o[h+1]=a[y+1],o[h+2]=a[y+2],o[h+3]=255}if(p>=4)for(var u=0;u<s;u++){var h=u<<2,y=u*p;o[h]=a[y],o[h+1]=a[y+1],o[h+2]=a[y+2],o[h+3]=a[y+3]}}else if(l==16){if(p==4)for(var u=0;u<s;u++){var h=u<<2,y=u*8+1;o[h]=a[y],o[h+1]=a[y+2],o[h+2]=a[y+4],o[h+3]=a[y+6]}if(p==3)for(var u=0;u<s;u++){var h=u<<2,y=u*6+1;o[h]=a[y],o[h+1]=a[y+2],o[h+2]=a[y+4],o[h+3]=255}}else if(l==32){for(var x=new Float32Array(a.buffer),b=0,u=0;u<x.length;u++)b=Math.min(b,x[u]);if(b<0)for(var u=0;u<a.length;u+=4){var _=a[u];a[u]=a[u+3],a[u+3]=_,_=a[u+1],a[u+1]=a[u+2],a[u+2]=_}for(var M=[],u=0;u<65536;u++)M.push(t(u/65535));for(var u=0;u<x.length;u++){var D=Math.max(0,Math.min(1,x[u]));x[u]=M[~~(.5+D*65535)]}if(p==3)for(var u=0;u<s;u++){var h=u<<2,y=u*3;o[h]=~~(.5+x[y]*255),o[h+1]=~~(.5+x[y+1]*255),o[h+2]=~~(.5+x[y+2]*255),o[h+3]=255}else if(p==4)for(var u=0;u<s;u++){var h=u<<2,y=u*4;o[h]=~~(.5+x[y]*255),o[h+1]=~~(.5+x[y+1]*255),o[h+2]=~~(.5+x[y+2]*255),o[h+3]=~~(.5+x[y+3]*255)}else throw p}else throw l;else if(f==3)for(var R=i.t320,C=1<<l,P=l==8&&p>1&&i.t338&&i.t338[0]!=0,m=0;m<r;m++)for(var I=0;I<n;I++){var u=m*n+I,h=u<<2,B=0,z=m*c;if(l==1)B=a[z+(I>>>3)]>>>7-(I&7)&1;else if(l==2)B=a[z+(I>>>2)]>>>6-2*(I&3)&3;else if(l==4)B=a[z+(I>>>1)]>>>4-4*(I&1)&15;else if(l==8)B=a[z+I*p];else throw l;o[h]=R[B]>>8,o[h+1]=R[C+B]>>8,o[h+2]=R[C+C+B]>>8,o[h+3]=P?a[z+I*p+1]:255}else if(f==5)for(var H=p>4?1:0,u=0;u<s;u++){var h=u<<2,U=u*p;if(window.UDOC){var N=a[U],F=a[U+1],V=a[U+2],k=a[U+3],se=UDOC.C.cmykToRgb([N*(1/255),F*(1/255),V*(1/255),k*(1/255)]);o[h]=~~(.5+255*se[0]),o[h+1]=~~(.5+255*se[1]),o[h+2]=~~(.5+255*se[2])}else{var N=255-a[U],F=255-a[U+1],V=255-a[U+2],k=(255-a[U+3])*(1/255);o[h]=~~(N*k+.5),o[h+1]=~~(F*k+.5),o[h+2]=~~(V*k+.5)}o[h+3]=255*(1-H)+a[U+4]*H}else if(f==6&&i.t278)for(var he=i.t278[0],m=0;m<r;m+=he)for(var u=m*n,oe=he*n,G=0;G<oe;G++){var h=4*(u+G),U=3*u+4*(G>>>1),V=a[U+(G&1)],X=a[U+2]-128,ee=a[U+3]-128,Me=V+((ee>>2)+(ee>>3)+(ee>>5)),le=V-((X>>2)+(X>>4)+(X>>5))-((ee>>1)+(ee>>3)+(ee>>4)+(ee>>5)),_e=V+(X+(X>>1)+(X>>2)+(X>>6));o[h]=Math.max(0,Math.min(255,Me)),o[h+1]=Math.max(0,Math.min(255,le)),o[h+2]=Math.max(0,Math.min(255,_e)),o[h+3]=255}else if(f==32845)for(var m=0;m<r;m++)for(var I=0;I<n;I++){var U=(m*n+I)*6,h=(m*n+I)*4,Fe=a[U+1]<<8|a[U],Fe=Math.pow(2,(Fe+.5)/256-64),ye=(a[U+3]+.5)/410,Te=(a[U+5]+.5)/410,Ee=9*ye/(6*ye-16*Te+12),fe=4*Te/(6*ye-16*Te+12),be=Fe,O=Ee*be/fe,V=be,We=(1-Ee-fe)*be/fe,Me=2.69*O-1.276*V-.414*We,le=-1.022*O+1.978*V+.044*We,_e=.061*O-.224*V+1.163*We;o[h]=t(Math.min(Me,1))*255,o[h+1]=t(Math.min(le,1))*255,o[h+2]=t(Math.min(_e,1))*255,o[h+3]=255}else log("Unknown Photometric interpretation: "+f);return o};$.replaceIMG=function(i){i==null&&(i=document.getElementsByTagName("img"));for(var e=["tif","tiff","dng","cr2","nef"],t=0;t<i.length;t++){var n=i[t],r=n.getAttribute("src");if(r!=null){var s=r.split(".").pop().toLowerCase();if(e.indexOf(s)!=-1){var a=new XMLHttpRequest;$._xhrs.push(a),$._imgs.push(n),a.open("GET",r),a.responseType="arraybuffer",a.onload=$._imgLoaded,a.send()}}}};$._xhrs=[];$._imgs=[];$._imgLoaded=function(i){var e=$._xhrs.indexOf(i.target),t=$._imgs[e];$._xhrs.splice(e,1),$._imgs.splice(e,1),t.setAttribute("src",$.bufferToURI(i.target.response))};$.bufferToURI=function(i){var e=$.decode(i),t=e,n=0,r=t[0];e[0].subIFD&&(t=t.concat(e[0].subIFD));for(var s=0;s<t.length;s++){var a=t[s];if(!(a.t258==null||a.t258.length<3)){var o=a.t256*a.t257;o>n&&(n=o,r=a)}}$.decodeImage(i,r,e);var f=$.toRGBA8(r),l=r.width,p=r.height,d=document.createElement("canvas");d.width=l,d.height=p;var c=d.getContext("2d"),m=new ImageData(new Uint8ClampedArray(f.buffer),l,p);return c.putImageData(m,0,0),d.toDataURL()};$._binBE={nextZero:function(i,e){for(;i[e]!=0;)e++;return e},readUshort:function(i,e){return i[e]<<8|i[e+1]},readShort:function(i,e){var t=$._binBE.ui8;return t[0]=i[e+1],t[1]=i[e+0],$._binBE.i16[0]},readInt:function(i,e){var t=$._binBE.ui8;return t[0]=i[e+3],t[1]=i[e+2],t[2]=i[e+1],t[3]=i[e+0],$._binBE.i32[0]},readUint:function(i,e){var t=$._binBE.ui8;return t[0]=i[e+3],t[1]=i[e+2],t[2]=i[e+1],t[3]=i[e+0],$._binBE.ui32[0]},readASCII:function(i,e,t){for(var n="",r=0;r<t;r++)n+=String.fromCharCode(i[e+r]);return n},readFloat:function(i,e){for(var t=$._binBE.ui8,n=0;n<4;n++)t[n]=i[e+3-n];return $._binBE.fl32[0]},readDouble:function(i,e){for(var t=$._binBE.ui8,n=0;n<8;n++)t[n]=i[e+7-n];return $._binBE.fl64[0]},writeUshort:function(i,e,t){i[e]=t>>8&255,i[e+1]=t&255},writeInt:function(i,e,t){var n=$._binBE.ui8;$._binBE.i32[0]=t,i[e+3]=n[0],i[e+2]=n[1],i[e+1]=n[2],i[e+0]=n[3]},writeUint:function(i,e,t){i[e]=t>>24&255,i[e+1]=t>>16&255,i[e+2]=t>>8&255,i[e+3]=t>>0&255},writeASCII:function(i,e,t){for(var n=0;n<t.length;n++)i[e+n]=t.charCodeAt(n)},writeDouble:function(i,e,t){$._binBE.fl64[0]=t;for(var n=0;n<8;n++)i[e+n]=$._binBE.ui8[7-n]}};$._binBE.ui8=new Uint8Array(8);$._binBE.i16=new Int16Array($._binBE.ui8.buffer);$._binBE.i32=new Int32Array($._binBE.ui8.buffer);$._binBE.ui32=new Uint32Array($._binBE.ui8.buffer);$._binBE.fl32=new Float32Array($._binBE.ui8.buffer);$._binBE.fl64=new Float64Array($._binBE.ui8.buffer);$._binLE={nextZero:$._binBE.nextZero,readUshort:function(i,e){return i[e+1]<<8|i[e]},readShort:function(i,e){var t=$._binBE.ui8;return t[0]=i[e+0],t[1]=i[e+1],$._binBE.i16[0]},readInt:function(i,e){var t=$._binBE.ui8;return t[0]=i[e+0],t[1]=i[e+1],t[2]=i[e+2],t[3]=i[e+3],$._binBE.i32[0]},readUint:function(i,e){var t=$._binBE.ui8;return t[0]=i[e+0],t[1]=i[e+1],t[2]=i[e+2],t[3]=i[e+3],$._binBE.ui32[0]},readASCII:$._binBE.readASCII,readFloat:function(i,e){for(var t=$._binBE.ui8,n=0;n<4;n++)t[n]=i[e+n];return $._binBE.fl32[0]},readDouble:function(i,e){for(var t=$._binBE.ui8,n=0;n<8;n++)t[n]=i[e+n];return $._binBE.fl64[0]},writeUshort:function(i,e,t){i[e]=t&255,i[e+1]=t>>8&255},writeInt:function(i,e,t){var n=$._binBE.ui8;$._binBE.i32[0]=t,i[e+0]=n[0],i[e+1]=n[1],i[e+2]=n[2],i[e+3]=n[3]},writeUint:function(i,e,t){i[e]=t>>>0&255,i[e+1]=t>>>8&255,i[e+2]=t>>>16&255,i[e+3]=t>>>24&255},writeASCII:$._binBE.writeASCII};$._copyTile=function(i,e,t,n,r,s,a,o){for(var f=Math.min(e,r-a),l=Math.min(t,s-o),p=0;p<l;p++)for(var d=(o+p)*r+a,c=p*e,m=0;m<f;m++)n[d+m]=i[c+m]};$._inflateRaw=(function(){var i={};return i.H={},i.H.N=function(e,t){var n=Uint8Array,r=0,s=0,a=0,o=0,f=0,l=0,p=0,d=0,c=0,m,S;if(e[0]==3&&e[1]==0)return t||new n(0);var v=i.H,u=v.b,h=v.e,g=v.R,A=v.n,E=v.A,y=v.Z,x=v.m,b=t==null;for(b&&(t=new n(e.length>>>2<<5));r==0;){if(r=u(e,c,1),s=u(e,c+1,2),c+=3,s==0){(c&7)!=0&&(c+=8-(c&7));var _=(c>>>3)+4,M=e[_-4]|e[_-3]<<8;b&&(t=i.H.W(t,d+M)),t.set(new n(e.buffer,e.byteOffset+_,M),d),c=_+M<<3,d+=M;continue}if(b&&(t=i.H.W(t,d+(1<<17))),s==1&&(m=x.J,S=x.h,l=511,p=31),s==2){a=h(e,c,5)+257,o=h(e,c+5,5)+1,f=h(e,c+10,4)+4,c+=14;for(var D=1,R=0;R<38;R+=2)x.Q[R]=0,x.Q[R+1]=0;for(var R=0;R<f;R++){var C=h(e,c+R*3,3);x.Q[(x.X[R]<<1)+1]=C,C>D&&(D=C)}c+=3*f,A(x.Q,D),E(x.Q,D,x.u),m=x.w,S=x.d,c=g(x.u,(1<<D)-1,a+o,e,c,x.v);var P=v.V(x.v,0,a,x.C);l=(1<<P)-1;var I=v.V(x.v,a,o,x.D);p=(1<<I)-1,A(x.C,P),E(x.C,P,m),A(x.D,I),E(x.D,I,S)}for(;;){var B=m[y(e,c)&l];c+=B&15;var z=B>>>4;if(!(z>>>8))t[d++]=z;else{if(z==256)break;var H=d+z-254;if(z>264){var U=x.q[z-257];H=d+(U>>>3)+h(e,c,U&7),c+=U&7}var N=S[y(e,c)&p];c+=N&15;var F=N>>>4,V=x.c[F],k=(V>>>4)+u(e,c,V&15);for(c+=V&15;d<H;)t[d]=t[d++-k],t[d]=t[d++-k],t[d]=t[d++-k],t[d]=t[d++-k];d=H}}}return t.length==d?t:t.slice(0,d)},i.H.W=function(e,t){var n=e.length;if(t<=n)return e;var r=new Uint8Array(n<<1);return r.set(e,0),r},i.H.R=function(e,t,n,r,s,a){for(var o=i.H.e,f=i.H.Z,l=0;l<n;){var p=e[f(r,s)&t];s+=p&15;var d=p>>>4;if(d<=15)a[l]=d,l++;else{var c=0,m=0;d==16?(m=3+o(r,s,2),s+=2,c=a[l-1]):d==17?(m=3+o(r,s,3),s+=3):d==18&&(m=11+o(r,s,7),s+=7);for(var S=l+m;l<S;)a[l]=c,l++}}return s},i.H.V=function(e,t,n,r){for(var s=0,a=0,o=r.length>>>1;a<n;){var f=e[a+t];r[a<<1]=0,r[(a<<1)+1]=f,f>s&&(s=f),a++}for(;a<o;)r[a<<1]=0,r[(a<<1)+1]=0,a++;return s},i.H.n=function(e,t){for(var n=i.H.m,r=e.length,s,a,o,f,l,p=n.j,f=0;f<=t;f++)p[f]=0;for(f=1;f<r;f+=2)p[e[f]]++;var d=n.K;for(s=0,p[0]=0,a=1;a<=t;a++)s=s+p[a-1]<<1,d[a]=s;for(o=0;o<r;o+=2)l=e[o+1],l!=0&&(e[o]=d[l],d[l]++)},i.H.A=function(e,t,n){for(var r=e.length,s=i.H.m,a=s.r,o=0;o<r;o+=2)if(e[o+1]!=0)for(var f=o>>1,l=e[o+1],p=f<<4|l,d=t-l,c=e[o]<<d,m=c+(1<<d);c!=m;){var S=a[c]>>>15-t;n[S]=p,c++}},i.H.l=function(e,t){for(var n=i.H.m.r,r=15-t,s=0;s<e.length;s+=2){var a=e[s]<<t-e[s+1];e[s]=n[a]>>>r}},i.H.M=function(e,t,n){n=n<<(t&7);var r=t>>>3;e[r]|=n,e[r+1]|=n>>>8},i.H.I=function(e,t,n){n=n<<(t&7);var r=t>>>3;e[r]|=n,e[r+1]|=n>>>8,e[r+2]|=n>>>16},i.H.e=function(e,t,n){return(e[t>>>3]|e[(t>>>3)+1]<<8)>>>(t&7)&(1<<n)-1},i.H.b=function(e,t,n){return(e[t>>>3]|e[(t>>>3)+1]<<8|e[(t>>>3)+2]<<16)>>>(t&7)&(1<<n)-1},i.H.Z=function(e,t){return(e[t>>>3]|e[(t>>>3)+1]<<8|e[(t>>>3)+2]<<16)>>>(t&7)},i.H.i=function(e,t){return(e[t>>>3]|e[(t>>>3)+1]<<8|e[(t>>>3)+2]<<16|e[(t>>>3)+3]<<24)>>>(t&7)},i.H.m=(function(){var e=Uint16Array,t=Uint32Array;return{K:new e(16),j:new e(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new e(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new t(32),J:new e(512),_:[],h:new e(32),$:[],w:new e(32768),C:[],v:[],d:new e(32768),D:[],u:new e(512),Q:[],r:new e(32768),s:new t(286),Y:new t(30),a:new t(19),t:new t(15e3),k:new e(65536),g:new e(32768)}})(),(function(){for(var e=i.H.m,t=32768,n=0;n<t;n++){var r=n;r=(r&2863311530)>>>1|(r&1431655765)<<1,r=(r&3435973836)>>>2|(r&858993459)<<2,r=(r&4042322160)>>>4|(r&252645135)<<4,r=(r&4278255360)>>>8|(r&16711935)<<8,e.r[n]=(r>>>16|r<<16)>>>17}function s(a,o,f){for(;o--!=0;)a.push(0,f)}for(var n=0;n<32;n++)e.q[n]=e.S[n]<<3|e.T[n],e.c[n]=e.p[n]<<4|e.z[n];s(e._,144,8),s(e._,112,9),s(e._,24,7),s(e._,8,8),i.H.n(e._,9),i.H.A(e._,9,e.J),i.H.l(e._,9),s(e.$,32,5),i.H.n(e.$,5),i.H.A(e.$,5,e.h),i.H.l(e.$,5),s(e.Q,19,0),s(e.C,286,0),s(e.D,30,0),s(e.v,320,0)})(),i.H.N})();$.LosslessJpegDecode=(function(){var i,e;function t(){return i[e++]}function n(){return i[e++]<<8|i[e++]}function r(u){for(var h=t(),g=[0,0,0,255],A=[],E=8,y=0;y<16;y++)A[y]=t();for(var y=0;y<16;y++)for(var x=0;x<A[y];x++){var b=s(g,0,y+1,1);g[b+3]=t()}var _=new Uint8Array(1<<E);u[h]=[new Uint8Array(g),_];for(var y=0;y<1<<E;y++){for(var M=E,D=y,R=0,C=0;g[R+3]==255&&M!=0;)C=D>>--M&1,R=g[R+C];_[y]=R}}function s(u,h,g,A){if(u[h+3]!=255)return 0;if(g==0)return h;for(var E=0;E<2;E++){u[h+E]==0&&(u[h+E]=u.length,u.push(0,0,A,255));var y=s(u,u[h+E],g-1,A+1);if(y!=0)return y}return 0}function a(u){for(var h=u.b,g=u.f;h<25&&u.a<u.d;){var A=u.data[u.a++];A==255&&!u.c&&u.a++,g=g<<8|A,h+=8}if(h<0)throw"e";u.b=h,u.f=g}function o(u,h){return h.b<u&&a(h),h.f>>(h.b-=u)&65535>>16-u}function f(u,h){var g=u[0],A=0,E=255,y=0;h.b<16&&a(h);var x=h.f>>h.b-8&255;for(A=u[1][x],E=g[A+3],h.b-=g[A+2];E==255;)y=h.f>>--h.b&1,A=g[A+y],E=g[A+3];return E}function l(u,h){return u<32768>>16-h&&(u+=-(1<<h)+1),u}function p(u,h){var g=f(u,h);if(g==0)return 0;if(g==16)return-32768;var A=o(g,h);return l(A,g)}function d(u,h,g,A,E,y){for(var x=0,b=0;b<y;b++){for(var _=b*h,M=0;M<h;M+=E){x++;for(var D=0;D<E;D++)u[_+M+D]=p(A[D],g)}if(g.e!=0&&x%g.e==0&&b!=0){for(var R=g.a,C=g.data;C[R]!=255||!(208<=C[R+1]&&C[R+1]<=215);)R--;g.a=R+2,g.f=0,g.b=0}}}function c(u,h){return l(o(u,h),u)}function m(u,h,g,A,E){for(var y=i.length-e,x=0;x<y;x+=4){var b=i[e+x];i[e+x]=i[e+x+3],i[e+x+3]=b;var b=i[e+x+1];i[e+x+1]=i[e+x+2],i[e+x+2]=b}for(var _=0;_<E;_++)for(var M=32768,D=32768,R=0;R<h;R+=2){var C=f(A,g),P=f(A,g);C!=0&&(M+=c(C,g)),P!=0&&(D+=c(P,g)),u[_*h+R]=M&65535,u[_*h+R+1]=D&65535}}function S(u){if(i=u,e=0,n()!=65496)throw"e";for(var h=[],g=0,A=0,E=0,y=[],x=[],b=[],_=0,M=0,D=0;;){var R=n();if(R==65535){e--;continue}var C=n();if(R==65475){A=t(),M=n(),D=n(),_=t();for(var P=0;P<_;P++){var I=t(),B=t(),z=t();if(z!=0)throw"e";h[I]=[P,B>>4,B&15]}}else if(R==65476)for(var H=e+C-2;e<H;)r(x);else if(R==65498){e++;for(var P=0;P<_;P++){var U=t(),N=h[U];b[N[0]]=x[t()>>>4],y[N[0]]=N.slice(1)}g=t(),e+=2;break}else R==65501?E=n():e+=C-2}var F=A>8?Uint16Array:Uint8Array,V=new F(M*D*_),k={b:0,f:0,c:g==8,a:e,data:i,d:i.length,e:E};if(k.c)m(V,D*_,k,b[0],M);else{for(var se=[],he=0,oe=0,P=0;P<_;P++){var G=y[P],X=G[0],ee=G[1];X>he&&(he=X),ee>oe&&(oe=ee),se.push(X*ee)}if(he!=1||oe!=1){if(_!=3||se[1]!=1||se[2]!=1||he!=2||oe!=1&&oe!=2)throw"e";for(var Me=[],le=0,P=0;P<_;P++){for(var _e=0;_e<se[P];_e++)Me.push(b[P]);le+=se[P]}var Fe=D/he,ye=M/oe,Te=Fe*ye;d(V,Fe*le,k,Me,le,ye),v(V,g,Fe,ye,le-2,le,le,A);var Ee=new Uint16Array(Te*se[0]);if(he==2&&oe==2){for(var P=0;P<Te;P++)Ee[4*P]=V[6*P],Ee[4*P+1]=V[6*P+1],Ee[4*P+2]=V[6*P+2],Ee[4*P+3]=V[6*P+3];v(Ee,g,Fe*4,ye,0,1,1,A);for(var P=0;P<Te;P++)V[6*P]=Ee[4*P],V[6*P+1]=Ee[4*P+1],V[6*P+2]=Ee[4*P+2],V[6*P+3]=Ee[4*P+3]}if(he==2&&oe==1){for(var P=0;P<Te;P++)Ee[2*P]=V[4*P],Ee[2*P+1]=V[4*P+1];v(Ee,g,Fe*2,ye,0,1,1,A);for(var P=0;P<Te;P++)V[4*P]=Ee[2*P],V[4*P+1]=Ee[2*P+1]}for(var fe=V.slice(0),ee=0;ee<M;ee++)if(oe==2)for(var X=0;X<D;X++){var be=(ee*D+X)*_,O=((ee>>>1)*Fe+(X>>>1))*le,We=(ee&1)*2+(X&1);V[be]=fe[O+We],V[be+1]=fe[O+4],V[be+2]=fe[O+5]}else for(var X=0;X<D;X++){var be=(ee*D+X)*_,O=(ee*Fe+(X>>>1))*le,We=X&1;V[be]=fe[O+We],V[be+1]=fe[O+2],V[be+2]=fe[O+3]}}else if(d(V,D*_,k,b,_,M),E==0)v(V,g,D,M,0,_,_,A);else for(var ze=Math.floor(E/D),ee=0;ee<M;ee+=ze){var Ye=V.slice(ee*D*_,(ee+ze)*D*_);v(Ye,g,D,ze,0,_,_,A),V.set(Ye,ee*D*_)}}return V}function v(u,h,g,A,E,y,x,b){for(var _=g*x,M=E;M<y;M++)u[M]+=1<<b-1;for(var D=x;D<_;D+=x)for(var M=E;M<y;M++)u[D+M]+=u[D+M-x];for(var R=1;R<A;R++){for(var C=R*_,M=E;M<y;M++)u[C+M]+=u[C+M-_];for(var D=x;D<_;D+=x)for(var M=E;M<y;M++){var P=C+D+M,I=P-_,B=u[P-x],z=0;if(h==0)z=0;else if(h==1)z=B;else if(h==2)z=u[I];else if(h==3)z=u[I-x];else if(h==4)z=B+(u[I]-u[I-x]);else if(h==5)z=B+(u[I]-u[I-x]>>>1);else if(h==6)z=u[I]+(B-u[I-x]>>>1);else if(h==7)z=B+u[I]>>>1;else throw h;u[P]+=z}}}return S})();(function(){var i=0,e=1,t=2,n=3,r=4,s=5,a=6,o=7,f=8,l=9,p=10,d=11,c=12,m=13,S=14,v=15,u=16,h=17,g=18;function A(U){var N=$._binBE.readUshort,F={b:N(U,0),i:U[2],C:U[3],u:U[4],q:N(U,5),k:N(U,7),e:N(U,9),l:N(U,11),s:U[13],d:N(U,14)};if(F.b!=18771||F.i>1||F.q<6||F.q%6||F.e<768||F.e%24||F.l!=768||F.k<F.l||F.k%F.l||F.k-F.e>=F.l||F.s>16||F.s!=F.k/F.l||F.s!=Math.ceil(F.e/F.l)||F.d!=F.q/6||F.u!=12&&F.u!=14&&F.u!=16||F.C!=16&&F.C!=0)throw"Invalid data";if(F.i==0)throw"Not implemented. We need this file!";return F.h=F.C==16,F.m=(F.h?F.l*2/3:F.l>>>1)|0,F.A=F.m+2,F.f=64,F.g=(1<<F.u)-1,F.n=4*F.u,F}function E(U,N){var F=new Array(N.s),V=4*N.s,k=16+V;V&12&&(k+=16-(V&12));for(var se=0,he=16;se<N.s;he+=4){var oe=$._binBE.readUint(U,he);F[se]=U.slice(k,k+oe),F[se].j=0,F[se].a=0,k+=oe,se++}if(k!=U.length)throw"Invalid data";return F}function y(U,N){for(var F=-N[4],V=0;F<=N[4];V++,F++)U[V]=F<=-276?-4:F<=-67?-3:F<=-18?-2:F<-0?-1:F<=N[0]?0:F<N[1]?1:F<N[2]?2:F<N[3]?3:4}function x(U,N,F){var V=[N,3*N+18,5*N+67,7*N+276,F];U.o=N,U.w=(V[4]+2*N)/(2*N+1)+1|0,U.v=Math.ceil(Math.log2(U.w)),U.t=9,y(U.c,V)}function b(U){var N={c:new Int8Array(2<<U.u)};return x(N,0,U.g),N}function _(U){for(var N=[[],[],[]],F=Math.max(2,U.w+32>>>6),V=0;V<3;V++)for(var k=0;k<41;k++)N[V][k]=[F,1];return N}function M(U){for(var N=-1,F=0;!F;N++)F=U[U.j]>>>7-U.a&1,U.a++,U.a&=7,U.a||U.j++;return N}function D(U,N){var F=0,V=8-U.a;if(U.j,U.a,N){if(N>=V)do F<<=V,N-=V,F|=U[U.j]&(1<<V)-1,U.j++,V=8;while(N>=8);N&&(F<<=N,V-=N,F|=U[U.j]>>>V&(1<<N)-1),U.a=8-V}return F}function R(U,N){var F=0;if(N<U)for(;F<=14&&N<<++F<U;);return F}function C(U,N,F,V,k,se,he,oe){oe==null&&(oe=0);var G=se+1,X=G%2,ee=0,Me,le,_e=V[k],Fe=V[k-1],ye=V[k-2][G],Te=Fe[G-1],Ee=Fe[G],fe=Fe[G+1],be=_e[G-1],O=_e[G+1],We=Math.abs,ze,Ye,de,L;if(X&&(ze=We(fe-Ee),Ye=We(ye-Ee),de=We(Te-Ee)),X){if(L=ze>de&&Ye<ze?ye+Te:ze<de&&Ye<de?ye+fe:fe+Te,L=L+2*Ee>>>2,oe){_e[G]=L;return}Me=N.t*N.c[U.g+Ee-ye]+N.c[U.g+Te-Ee]}else L=Ee>Te&&Ee>fe||Ee<Te&&Ee<fe?O+be+2*Ee>>>2:be+O>>>1,Me=N.t*N.c[U.g+Ee-Te]+N.c[U.g+Te-be];le=We(Me);var T=M(F);if(T<U.n-N.v-1){var W=R(he[le][0],he[le][1]);ee=D(F,W)+(T<<W)}else ee=D(F,N.v)+1;ee=ee&1?-1-(ee>>>1):ee>>>1,he[le][0]+=We(ee),he[le][1]==U.f&&(he[le][0]>>>=1,he[le][1]>>>=1),he[le][1]++,L=Me<0?L-ee:L+ee,U.i&&(L<0?L+=N.w:L>U.g&&(L-=N.w)),_e[G]=L>=0?Math.min(L,U.g):0}function P(U,N,F){for(var V=U[0].length,k=N;k<=F;k++)U[k][0]=U[k-1][1],U[k][V-1]=U[k-1][V-2]}function I(U){P(U,o,c),P(U,t,r),P(U,v,h)}function B(U,N,F,V,k,se,he,oe,G,X,ee,Me,le){for(var _e=0,Fe=1,ye=k<m&&k>r;Fe<U.m;)_e<U.m&&(C(U,N,F,V,k,_e,he[G],U.h&&(ye&&X||!ye&&(ee||(_e&Me)==le))),C(U,N,F,V,se,_e,he[G],U.h&&(!ye&&X||ye&&(ee||(_e&Me)==le))),_e+=2),_e>8&&(C(U,N,F,V,k,Fe,oe[G]),C(U,N,F,V,se,Fe,oe[G]),Fe+=2);I(V)}function z(U,N,F,V,k,se){B(U,N,F,V,t,o,k,se,0,0,1,0,8),B(U,N,F,V,f,v,k,se,1,0,1,0,8),B(U,N,F,V,n,l,k,se,2,1,0,3,0),B(U,N,F,V,p,u,k,se,0,0,0,3,2),B(U,N,F,V,r,d,k,se,1,0,0,3,2),B(U,N,F,V,c,h,k,se,2,1,0,3,0)}function H(U,N,F,V,k,se){var he=se.length,oe=U.l;k+1==U.s&&(oe=U.e-k*U.l);for(var G=6*U.e*V+k*U.l,X=0;X<6;X++){for(var ee=0;ee<oe;ee++){var Me=se[X%he][ee%he],le;Me==0?le=t+(X>>>1):Me==2?le=v+(X>>>1):le=o+X;var _e=U.h?(ee*2/3&2147483646|ee%3&1)+(ee%3>>>1):ee>>>1;N[G+ee]=F[le][_e+1]}G+=U.e}}$._decompressRAF=function(U,N){var F=A(U),V=E(U,F),k=b(F),se=new Int16Array(F.e*F.q);N==null&&(N=F.h?[[1,1,0,1,1,2],[1,1,2,1,1,0],[2,0,1,0,2,1],[1,1,2,1,1,0],[1,1,0,1,1,2],[0,2,1,2,0,1]]:[[0,1],[3,2]]);for(var he=[[i,n],[e,r],[s,d],[a,c],[m,u],[S,h]],oe=[],G=0;G<g;G++)oe[G]=new Uint16Array(F.A);for(var X=0;X<F.s;X++){for(var ee=_(k),Me=_(k),G=0;G<g;G++)for(var le=0;le<F.A;le++)oe[G][le]=0;for(var _e=0;_e<F.d;_e++){z(F,k,V[X],oe,ee,Me);for(var G=0;G<6;G++)for(var le=0;le<F.A;le++)oe[he[G][0]][le]=oe[he[G][1]][le];H(F,se,oe,_e,X,N);for(var G=t;G<g;G++)if([s,a,m,S].indexOf(G)==-1)for(var le=0;le<F.A;le++)oe[G][le]=0;I(oe)}}return se}})();class J0 extends Rh{constructor(e){super(e)}parse(e){const t=$.decode(e);$.decodeImage(e,t[0]);const n=$.toRGBA8(t[0]);return{width:t[0].width,height:t[0].height,data:n,flipY:!0,magFilter:ut,minFilter:_n}}}function Q0(i){const e=new URL("/pendule-foucault-animation/assets/eso0932a-Dg9OSlK6.tif",import.meta.url).href,t=new J0;i.background=new Ze(329487),t.load(e,n=>{n.colorSpace=Pt,n.mapping=wr,n.minFilter=ut,n.magFilter=ut,n.generateMipmaps=!1,n.flipY=!0,n.needsUpdate=!0,i.background=n},void 0,n=>{console.error("Impossible de charger la texture de fond TIFF:",n),i.background=new Ze(329487)})}const{scene:Qi,camera:zi,renderer:Bl,controls:Gr}=Y0();Q0(Qi);const{earth:Na,northPoleMarker:zl,earthRadius:Ko}=j0(6);Qi.add(Na);Qi.add(zl);const Yi=document.getElementById("latitude-slider"),jo=document.getElementById("latitude-value"),Ki=document.getElementById("longitude-slider"),$o=document.getElementById("longitude-value"),Zo=document.getElementById("reset-yverdon-button"),em=document.querySelectorAll('input[name="camera-mode"]'),tm=46.7785,nm=6.6412,Hl=3,im=Hl+.4,{pendulumRoot:qn,pendulumPivot:rm}=$0(0,Hl);Qi.add(qn);const sm=new Fh,am=Nr.degToRad(14),om=1.4,lm=.0015;let vi="free",kr=Number(Yi?.value??47),Vr=Number(Ki?.value??0);const cm=new K(0,1,0),Jo=new K(0,0,1),Qo=new K(1,0,0),el=new K,Xt=new K,kn=new K,Fr=new K,tl=new lt,Ts=new K,nl=new K,Tr=new K,hm=5,um=0,fm=.5;function Wr(){jo&&(jo.textContent=`${kr.toFixed(2)}°`),$o&&($o.textContent=`${Vr.toFixed(2)}°`)}function dm(i,e){kr=i,Vr=e,Yi&&(Yi.value=String(i)),Ki&&(Ki.value=String(e)),Wr()}Yi&&Yi.addEventListener("input",i=>{kr=Number(i.target.value),Wr()});Ki&&Ki.addEventListener("input",i=>{Vr=Number(i.target.value),Wr()});em.forEach(i=>{i.checked&&(vi=i.value),i.addEventListener("change",e=>{e.target.checked&&(vi=e.target.value,Gr.enabled=vi!=="pendulum")})});Zo&&Zo.addEventListener("click",()=>{dm(tm,nm)});Gr.enabled=vi!=="pendulum";Wr();function pm(){const i=Nr.degToRad(kr),e=Nr.degToRad(-Vr),t=Math.cos(i);el.set(t*Math.cos(e),Math.sin(i),t*Math.sin(e)),Xt.copy(el).applyAxisAngle(cm,Na.rotation.y).normalize();const n=Ko+im;qn.position.copy(Xt).multiplyScalar(n),kn.copy(Qo).addScaledVector(Xt,-Qo.dot(Xt)),kn.lengthSq()<1e-8&&kn.copy(Jo).addScaledVector(Xt,-Jo.dot(Xt)),kn.normalize(),Fr.crossVectors(kn,Xt).normalize(),tl.makeBasis(kn,Xt,Fr),qn.quaternion.setFromRotationMatrix(tl),zl.position.copy(Xt).multiplyScalar(Ko)}function mm(){Ts.copy(qn.position).addScaledVector(Xt,hm).addScaledVector(kn,um).addScaledVector(Fr,fm),zi.position.copy(Ts),nl.copy(qn.position).sub(Ts).normalize(),Tr.copy(Xt),Math.abs(nl.dot(Tr))>.95&&Tr.copy(Fr),zi.up.copy(Tr).normalize(),zi.lookAt(qn.position),Gr.target.copy(qn.position)}K0(zi,Bl);Z0({clock:sm,earth:Na,pendulumPivot:rm,maxAngle:am,oscillationSpeed:om,earthSpinSpeed:lm,shouldLockCamera:()=>vi==="pendulum",shouldFollowEarthRotation:()=>vi==="earth",onLockedCameraUpdate:mm,onFrame:pm,controls:Gr,renderer:Bl,scene:Qi,camera:zi});
