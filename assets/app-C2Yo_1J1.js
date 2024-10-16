/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bl(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Ce={},gn=[],it=()=>{},fp=()=>!1,Er=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),yl=e=>e.startsWith("onUpdate:"),Re=Object.assign,Dl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},vp=Object.prototype.hasOwnProperty,Ee=(e,t)=>vp.call(e,t),ee=Array.isArray,Un=e=>ia(e)==="[object Map]",mp=e=>ia(e)==="[object Set]",ae=e=>typeof e=="function",le=e=>typeof e=="string",la=e=>typeof e=="symbol",Te=e=>e!==null&&typeof e=="object",Go=e=>(Te(e)||ae(e))&&ae(e.then)&&ae(e.catch),_p=Object.prototype.toString,ia=e=>_p.call(e),Ap=e=>ia(e).slice(8,-1),gp=e=>ia(e)==="[object Object]",Ll=e=>le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Jn=Bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},bp=/-(\w)/g,pt=oa(e=>e.replace(bp,(t,n)=>n?n.toUpperCase():"")),Bp=/\B([A-Z])/g,Vn=oa(e=>e.replace(Bp,"-$1").toLowerCase()),dr=oa(e=>e.charAt(0).toUpperCase()+e.slice(1)),Pa=oa(e=>e?`on${dr(e)}`:""),Qt=(e,t)=>!Object.is(e,t),Ca=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Jr=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},yp=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Dp=e=>{const t=le(e)?Number(e):NaN;return isNaN(t)?e:t};let Ai;const Uo=()=>Ai||(Ai=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Pl(e){if(ee(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=le(r)?wp(r):Pl(r);if(a)for(const l in a)t[l]=a[l]}return t}else if(le(e)||Te(e))return e}const Lp=/;(?![^(]*\))/g,Pp=/:([^]+)/,Cp=/\/\*[^]*?\*\//g;function wp(e){const t={};return e.replace(Cp,"").split(Lp).forEach(n=>{if(n){const r=n.split(Pp);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Cl(e){let t="";if(le(e))t=e;else if(ee(e))for(let n=0;n<e.length;n++){const r=Cl(e[n]);r&&(t+=r+" ")}else if(Te(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Tp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kp=Bl(Tp);function Jo(e){return!!e||e===""}/**
* @vue/reactivity v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xe;class Ip{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Xe,!t&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Xe;try{return Xe=this,t()}finally{Xe=n}}}on(){Xe=this}off(){Xe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Op(e,t=Xe){t&&t.active&&t.effects.push(e)}function Wo(){return Xe}function Fp(e){Xe&&Xe.cleanups.push(e)}let sn;class wl{constructor(t,n,r,a){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=2,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Op(this,a)}get dirty(){if(this._dirtyLevel===1){un();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Rp(n.computed),this._dirtyLevel>=2))break}this._dirtyLevel<2&&(this._dirtyLevel=0),pn()}return this._dirtyLevel>=2}set dirty(t){this._dirtyLevel=t?2:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=Wt,n=sn;try{return Wt=!0,sn=this,this._runnings++,gi(this),this.fn()}finally{bi(this),this._runnings--,sn=n,Wt=t}}stop(){var t;this.active&&(gi(this),bi(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function Rp(e){return e.value}function gi(e){e._trackId++,e._depsLength=0}function bi(e){if(e.deps&&e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Ko(e.deps[t],e);e.deps.length=e._depsLength}}function Ko(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let Wt=!0,Xa=0;const Qo=[];function un(){Qo.push(Wt),Wt=!1}function pn(){const e=Qo.pop();Wt=e===void 0?!0:e}function Tl(){Xa++}function kl(){for(Xa--;!Xa&&Za.length;)Za.shift()()}function Yo(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Ko(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const Za=[];function Xo(e,t,n){Tl();for(const r of e.keys())if(r._dirtyLevel<t&&e.get(r)===r._trackId){const a=r._dirtyLevel;r._dirtyLevel=t,a===0&&(r._shouldSchedule=!0,r.trigger())}Zo(e),kl()}function Zo(e){for(const t of e.keys())t.scheduler&&t._shouldSchedule&&(!t._runnings||t.allowRecurse)&&e.get(t)===t._trackId&&(t._shouldSchedule=!1,Za.push(t.scheduler))}const es=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},Wr=new WeakMap,cn=Symbol(""),el=Symbol("");function Ke(e,t,n){if(Wt&&sn){let r=Wr.get(e);r||Wr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=es(()=>r.delete(n))),Yo(sn,a)}}function Ft(e,t,n,r,a,l){const i=Wr.get(e);if(!i)return;let s=[];if(t==="clear")s=[...i.values()];else if(n==="length"&&ee(e)){const u=Number(r);i.forEach((p,E)=>{(E==="length"||!la(E)&&E>=u)&&s.push(p)})}else switch(n!==void 0&&s.push(i.get(n)),t){case"add":ee(e)?Ll(n)&&s.push(i.get("length")):(s.push(i.get(cn)),Un(e)&&s.push(i.get(el)));break;case"delete":ee(e)||(s.push(i.get(cn)),Un(e)&&s.push(i.get(el)));break;case"set":Un(e)&&s.push(i.get(cn));break}Tl();for(const u of s)u&&Xo(u,2);kl()}function Vp(e,t){var n;return(n=Wr.get(e))==null?void 0:n.get(t)}const Sp=Bl("__proto__,__v_isRef,__isVue"),ts=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(la)),Bi=xp();function xp(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=se(this);for(let l=0,i=this.length;l<i;l++)Ke(r,"get",l+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(se)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){un(),Tl();const r=se(this)[t].apply(this,n);return kl(),pn(),r}}),e}function Mp(e){const t=se(this);return Ke(t,"has",e),t.hasOwnProperty(e)}class ns{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,l=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return l;if(n==="__v_raw")return r===(a?l?Yp:is:l?ls:as).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const i=ee(t);if(!a){if(i&&Ee(Bi,n))return Reflect.get(Bi,n,r);if(n==="hasOwnProperty")return Mp}const s=Reflect.get(t,n,r);return(la(n)?ts.has(n):Sp(n))||(a||Ke(t,"get",n),l)?s:$e(s)?i&&Ll(n)?s:s.value:Te(s)?a?Vt(s):hr(s):s}}class rs extends ns{constructor(t=!1){super(!1,t)}set(t,n,r,a){let l=t[n];if(!this._shallow){const u=Cn(l);if(!Kr(r)&&!Cn(r)&&(l=se(l),r=se(r)),!ee(t)&&$e(l)&&!$e(r))return u?!1:(l.value=r,!0)}const i=ee(t)&&Ll(n)?Number(n)<t.length:Ee(t,n),s=Reflect.set(t,n,r,a);return t===se(a)&&(i?Qt(r,l)&&Ft(t,"set",n,r):Ft(t,"add",n,r)),s}deleteProperty(t,n){const r=Ee(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Ft(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!la(n)||!ts.has(n))&&Ke(t,"has",n),r}ownKeys(t){return Ke(t,"iterate",ee(t)?"length":cn),Reflect.ownKeys(t)}}class zp extends ns{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const $p=new rs,Np=new zp,jp=new rs(!0),Il=e=>e,sa=e=>Reflect.getPrototypeOf(e);function kr(e,t,n=!1,r=!1){e=e.__v_raw;const a=se(e),l=se(t);n||(Qt(t,l)&&Ke(a,"get",t),Ke(a,"get",l));const{has:i}=sa(a),s=r?Il:n?Rl:nr;if(i.call(a,t))return s(e.get(t));if(i.call(a,l))return s(e.get(l));e!==a&&e.get(t)}function Ir(e,t=!1){const n=this.__v_raw,r=se(n),a=se(e);return t||(Qt(e,a)&&Ke(r,"has",e),Ke(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function Or(e,t=!1){return e=e.__v_raw,!t&&Ke(se(e),"iterate",cn),Reflect.get(e,"size",e)}function yi(e){e=se(e);const t=se(this);return sa(t).has.call(t,e)||(t.add(e),Ft(t,"add",e,e)),this}function Di(e,t){t=se(t);const n=se(this),{has:r,get:a}=sa(n);let l=r.call(n,e);l||(e=se(e),l=r.call(n,e));const i=a.call(n,e);return n.set(e,t),l?Qt(t,i)&&Ft(n,"set",e,t):Ft(n,"add",e,t),this}function Li(e){const t=se(this),{has:n,get:r}=sa(t);let a=n.call(t,e);a||(e=se(e),a=n.call(t,e)),r&&r.call(t,e);const l=t.delete(e);return a&&Ft(t,"delete",e,void 0),l}function Pi(){const e=se(this),t=e.size!==0,n=e.clear();return t&&Ft(e,"clear",void 0,void 0),n}function Fr(e,t){return function(r,a){const l=this,i=l.__v_raw,s=se(i),u=t?Il:e?Rl:nr;return!e&&Ke(s,"iterate",cn),i.forEach((p,E)=>r.call(a,u(p),u(E),l))}}function Rr(e,t,n){return function(...r){const a=this.__v_raw,l=se(a),i=Un(l),s=e==="entries"||e===Symbol.iterator&&i,u=e==="keys"&&i,p=a[e](...r),E=n?Il:t?Rl:nr;return!t&&Ke(l,"iterate",u?el:cn),{next(){const{value:d,done:h}=p.next();return h?{value:d,done:h}:{value:s?[E(d[0]),E(d[1])]:E(d),done:h}},[Symbol.iterator](){return this}}}}function Mt(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Hp(){const e={get(l){return kr(this,l)},get size(){return Or(this)},has:Ir,add:yi,set:Di,delete:Li,clear:Pi,forEach:Fr(!1,!1)},t={get(l){return kr(this,l,!1,!0)},get size(){return Or(this)},has:Ir,add:yi,set:Di,delete:Li,clear:Pi,forEach:Fr(!1,!0)},n={get(l){return kr(this,l,!0)},get size(){return Or(this,!0)},has(l){return Ir.call(this,l,!0)},add:Mt("add"),set:Mt("set"),delete:Mt("delete"),clear:Mt("clear"),forEach:Fr(!0,!1)},r={get(l){return kr(this,l,!0,!0)},get size(){return Or(this,!0)},has(l){return Ir.call(this,l,!0)},add:Mt("add"),set:Mt("set"),delete:Mt("delete"),clear:Mt("clear"),forEach:Fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(l=>{e[l]=Rr(l,!1,!1),n[l]=Rr(l,!0,!1),t[l]=Rr(l,!1,!0),r[l]=Rr(l,!0,!0)}),[e,n,t,r]}const[qp,Gp,Up,Jp]=Hp();function Ol(e,t){const n=t?e?Jp:Up:e?Gp:qp;return(r,a,l)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(Ee(n,a)&&a in r?n:r,a,l)}const Wp={get:Ol(!1,!1)},Kp={get:Ol(!1,!0)},Qp={get:Ol(!0,!1)},as=new WeakMap,ls=new WeakMap,is=new WeakMap,Yp=new WeakMap;function Xp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zp(e){return e.__v_skip||!Object.isExtensible(e)?0:Xp(Ap(e))}function hr(e){return Cn(e)?e:Fl(e,!1,$p,Wp,as)}function os(e){return Fl(e,!1,jp,Kp,ls)}function Vt(e){return Fl(e,!0,Np,Qp,is)}function Fl(e,t,n,r,a){if(!Te(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const l=a.get(e);if(l)return l;const i=Zp(e);if(i===0)return e;const s=new Proxy(e,i===2?r:n);return a.set(e,s),s}function bn(e){return Cn(e)?bn(e.__v_raw):!!(e&&e.__v_isReactive)}function Cn(e){return!!(e&&e.__v_isReadonly)}function Kr(e){return!!(e&&e.__v_isShallow)}function ss(e){return bn(e)||Cn(e)}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function cs(e){return Jr(e,"__v_skip",!0),e}const nr=e=>Te(e)?hr(e):e,Rl=e=>Te(e)?Vt(e):e;class us{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new wl(()=>t(this._value),()=>Wn(this,1),()=>this.dep&&Zo(this.dep)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=se(this);return(!t._cacheable||t.effect.dirty)&&Qt(t._value,t._value=t.effect.run())&&Wn(t,2),Vl(t),t.effect._dirtyLevel>=1&&Wn(t,1),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function e8(e,t,n=!1){let r,a;const l=ae(e);return l?(r=e,a=it):(r=e.get,a=e.set),new us(r,a,l||!a,n)}function Vl(e){Wt&&sn&&(e=se(e),Yo(sn,e.dep||(e.dep=es(()=>e.dep=void 0,e instanceof us?e:void 0))))}function Wn(e,t=2,n){e=se(e);const r=e.dep;r&&Xo(r,t)}function $e(e){return!!(e&&e.__v_isRef===!0)}function X(e){return ps(e,!1)}function Ve(e){return ps(e,!0)}function ps(e,t){return $e(e)?e:new t8(e,t)}class t8{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:se(t),this._value=n?t:nr(t)}get value(){return Vl(this),this._value}set value(t){const n=this.__v_isShallow||Kr(t)||Cn(t);t=n?t:se(t),Qt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:nr(t),Wn(this,2))}}function ft(e){return $e(e)?e.value:e}const n8={get:(e,t,n)=>ft(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return $e(a)&&!$e(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Es(e){return bn(e)?e:new Proxy(e,n8)}class r8{constructor(t){this.dep=void 0,this.__v_isRef=!0;const{get:n,set:r}=t(()=>Vl(this),()=>Wn(this));this._get=n,this._set=r}get value(){return this._get()}set value(t){this._set(t)}}function ds(e){return new r8(e)}class a8{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Vp(se(this._object),this._key)}}class l8{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Sn(e,t,n){return $e(e)?e:ae(e)?new l8(e):Te(e)&&arguments.length>1?i8(e,t,n):X(e)}function i8(e,t,n){const r=e[t];return $e(r)?r:new a8(e,t,n)}/**
* @vue/runtime-core v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kt(e,t,n,r){let a;try{a=r?e(...r):e()}catch(l){fr(l,t,n)}return a}function st(e,t,n,r){if(ae(e)){const l=Kt(e,t,n,r);return l&&Go(l)&&l.catch(i=>{fr(i,t,n)}),l}const a=[];for(let l=0;l<e.length;l++)a.push(st(e[l],t,n,r));return a}function fr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let l=t.parent;const i=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const p=l.ec;if(p){for(let E=0;E<p.length;E++)if(p[E](e,i,s)===!1)return}l=l.parent}const u=t.appContext.config.errorHandler;if(u){Kt(u,null,10,[e,i,s]);return}}o8(e,n,a,r)}function o8(e,t,n,r=!0){console.error(e)}let rr=!1,tl=!1;const Ne=[];let Dt=0;const Bn=[];let Ht=null,an=0;const hs=Promise.resolve();let Sl=null;function En(e){const t=Sl||hs;return e?t.then(this?e.bind(this):e):t}function s8(e){let t=Dt+1,n=Ne.length;for(;t<n;){const r=t+n>>>1,a=Ne[r],l=ar(a);l<e||l===e&&a.pre?t=r+1:n=r}return t}function ca(e){(!Ne.length||!Ne.includes(e,rr&&e.allowRecurse?Dt+1:Dt))&&(e.id==null?Ne.push(e):Ne.splice(s8(e.id),0,e),fs())}function fs(){!rr&&!tl&&(tl=!0,Sl=hs.then(vs))}function c8(e){const t=Ne.indexOf(e);t>Dt&&Ne.splice(t,1)}function u8(e){ee(e)?Bn.push(...e):(!Ht||!Ht.includes(e,e.allowRecurse?an+1:an))&&Bn.push(e),fs()}function Ci(e,t,n=rr?Dt+1:0){for(;n<Ne.length;n++){const r=Ne[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Ne.splice(n,1),n--,r()}}}function Qr(e){if(Bn.length){const t=[...new Set(Bn)].sort((n,r)=>ar(n)-ar(r));if(Bn.length=0,Ht){Ht.push(...t);return}for(Ht=t,an=0;an<Ht.length;an++)Ht[an]();Ht=null,an=0}}const ar=e=>e.id==null?1/0:e.id,p8=(e,t)=>{const n=ar(e)-ar(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function vs(e){tl=!1,rr=!0,Ne.sort(p8);try{for(Dt=0;Dt<Ne.length;Dt++){const t=Ne[Dt];t&&t.active!==!1&&Kt(t,null,14)}}finally{Dt=0,Ne.length=0,Qr(),rr=!1,Sl=null,(Ne.length||Bn.length)&&vs()}}function E8(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Ce;let a=n;const l=t.startsWith("update:"),i=l&&t.slice(7);if(i&&i in r){const E=`${i==="modelValue"?"model":i}Modifiers`,{number:d,trim:h}=r[E]||Ce;h&&(a=n.map(v=>le(v)?v.trim():v)),d&&(a=n.map(yp))}let s,u=r[s=Pa(t)]||r[s=Pa(pt(t))];!u&&l&&(u=r[s=Pa(Vn(t))]),u&&st(u,e,6,a);const p=r[s+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,st(p,e,6,a)}}function ms(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const l=e.emits;let i={},s=!1;if(!ae(e)){const u=p=>{const E=ms(p,t,!0);E&&(s=!0,Re(i,E))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!l&&!s?(Te(e)&&r.set(e,null),null):(ee(l)?l.forEach(u=>i[u]=null):Re(i,l),Te(e)&&r.set(e,i),i)}function ua(e,t){return!e||!Er(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ee(e,t[0].toLowerCase()+t.slice(1))||Ee(e,Vn(t))||Ee(e,t))}let ot=null,_s=null;function Yr(e){const t=ot;return ot=e,_s=e&&e.type.__scopeId||null,t}function d8(e,t=ot,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&zi(-1);const l=Yr(t);let i;try{i=e(...a)}finally{Yr(l),r._d&&zi(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function wa(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:l,propsOptions:[i],slots:s,attrs:u,emit:p,render:E,renderCache:d,data:h,setupState:v,ctx:A,inheritAttrs:y}=e;let B,b;const C=Yr(e);try{if(n.shapeFlag&4){const w=a||r,x=w;B=ht(E.call(x,w,d,l,v,h,A)),b=u}else{const w=t;B=ht(w.length>1?w(l,{attrs:u,slots:s,emit:p}):w(l,null)),b=t.props?u:h8(u)}}catch(w){Xn.length=0,fr(w,e,1),B=ke(ut)}let g=B;if(b&&y!==!1){const w=Object.keys(b),{shapeFlag:x}=g;w.length&&x&7&&(i&&w.some(yl)&&(b=f8(b,i)),g=Yt(g,b))}return n.dirs&&(g=Yt(g),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&(g.transition=n.transition),B=g,Yr(C),B}const h8=e=>{let t;for(const n in e)(n==="class"||n==="style"||Er(n))&&((t||(t={}))[n]=e[n]);return t},f8=(e,t)=>{const n={};for(const r in e)(!yl(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function v8(e,t,n){const{props:r,children:a,component:l}=e,{props:i,children:s,patchFlag:u}=t,p=l.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return r?wi(r,i,p):!!i;if(u&8){const E=t.dynamicProps;for(let d=0;d<E.length;d++){const h=E[d];if(i[h]!==r[h]&&!ua(p,h))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===i?!1:r?i?wi(r,i,p):!0:!!i;return!1}function wi(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const l=r[a];if(t[l]!==e[l]&&!ua(n,l))return!0}return!1}function m8({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const As="components";function ct(e,t){return A8(As,e,!0,t)||e}const _8=Symbol.for("v-ndc");function A8(e,t,n=!0,r=!1){const a=ot||ze;if(a){const l=a.type;if(e===As){const s=hE(l,!1);if(s&&(s===t||s===pt(t)||s===dr(pt(t))))return l}const i=Ti(a[e]||l[e],t)||Ti(a.appContext[e],t);return!i&&r?l:i}}function Ti(e,t){return e&&(e[t]||e[pt(t)]||e[dr(pt(t))])}const g8=e=>e.__isSuspense;function gs(e,t){t&&t.pendingBranch?ee(e)?t.effects.push(...e):t.effects.push(e):u8(e)}const b8=Symbol.for("v-scx"),B8=()=>fe(b8);function xl(e,t){return Ml(e,null,t)}const Vr={};function he(e,t,n){return Ml(e,t,n)}function Ml(e,t,{immediate:n,deep:r,flush:a,once:l,onTrack:i,onTrigger:s}=Ce){if(t&&l){const P=t;t=(...S)=>{P(...S),x()}}const u=ze,p=P=>r===!0?P:mn(P,r===!1?1:void 0);let E,d=!1,h=!1;if($e(e)?(E=()=>e.value,d=Kr(e)):bn(e)?(E=()=>p(e),d=!0):ee(e)?(h=!0,d=e.some(P=>bn(P)||Kr(P)),E=()=>e.map(P=>{if($e(P))return P.value;if(bn(P))return p(P);if(ae(P))return Kt(P,u,2)})):ae(e)?t?E=()=>Kt(e,u,2):E=()=>(v&&v(),st(e,u,3,[A])):E=it,t&&r){const P=E;E=()=>mn(P())}let v,A=P=>{v=g.onStop=()=>{Kt(P,u,4),v=g.onStop=void 0}},y;if(Ar)if(A=it,t?n&&st(t,u,3,[E(),h?[]:void 0,A]):E(),a==="sync"){const P=B8();y=P.__watcherHandles||(P.__watcherHandles=[])}else return it;let B=h?new Array(e.length).fill(Vr):Vr;const b=()=>{if(!(!g.active||!g.dirty))if(t){const P=g.run();(r||d||(h?P.some((S,F)=>Qt(S,B[F])):Qt(P,B)))&&(v&&v(),st(t,u,3,[P,B===Vr?void 0:h&&B[0]===Vr?[]:B,A]),B=P)}else g.run()};b.allowRecurse=!!t;let C;a==="sync"?C=b:a==="post"?C=()=>Je(b,u&&u.suspense):(b.pre=!0,u&&(b.id=u.uid),C=()=>ca(b));const g=new wl(E,it,C),w=Wo(),x=()=>{g.stop(),w&&Dl(w.effects,g)};return t?n?b():B=g.run():a==="post"?Je(g.run.bind(g),u&&u.suspense):g.run(),y&&y.push(x),x}function y8(e,t,n){const r=this.proxy,a=le(e)?e.includes(".")?bs(r,e):()=>r[e]:e.bind(r,r);let l;ae(t)?l=t:(l=t.handler,n=t);const i=_r(this),s=Ml(a,l.bind(r),n);return i(),s}function bs(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function mn(e,t,n=0,r){if(!Te(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),$e(e))mn(e.value,t,n,r);else if(ee(e))for(let a=0;a<e.length;a++)mn(e[a],t,n,r);else if(mp(e)||Un(e))e.forEach(a=>{mn(a,t,n,r)});else if(gp(e))for(const a in e)mn(e[a],t,n,r);return e}function yt(e,t,n,r){const a=e.dirs,l=t&&t.dirs;for(let i=0;i<a.length;i++){const s=a[i];l&&(s.oldValue=l[i].value);let u=s.dir[r];u&&(un(),st(u,n,8,[e.el,s,e,t]),pn())}}const qt=Symbol("_leaveCb"),Sr=Symbol("_enterCb");function Bs(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ge(()=>{e.isMounted=!0}),$l(()=>{e.isUnmounting=!0}),e}const rt=[Function,Array],ys={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:rt,onEnter:rt,onAfterEnter:rt,onEnterCancelled:rt,onBeforeLeave:rt,onLeave:rt,onAfterLeave:rt,onLeaveCancelled:rt,onBeforeAppear:rt,onAppear:rt,onAfterAppear:rt,onAppearCancelled:rt},D8={name:"BaseTransition",props:ys,setup(e,{slots:t}){const n=xn(),r=Bs();let a;return()=>{const l=t.default&&zl(t.default(),!0);if(!l||!l.length)return;let i=l[0];if(l.length>1){for(const y of l)if(y.type!==ut){i=y;break}}const s=se(e),{mode:u}=s;if(r.isLeaving)return Ta(i);const p=ki(i);if(!p)return Ta(i);const E=lr(p,s,r,n);ir(p,E);const d=n.subTree,h=d&&ki(d);let v=!1;const{getTransitionKey:A}=p.type;if(A){const y=A();a===void 0?a=y:y!==a&&(a=y,v=!0)}if(h&&h.type!==ut&&(!ln(p,h)||v)){const y=lr(h,s,r,n);if(ir(h,y),u==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ta(i);u==="in-out"&&p.type!==ut&&(y.delayLeave=(B,b,C)=>{const g=Ds(r,h);g[String(h.key)]=h,B[qt]=()=>{b(),B[qt]=void 0,delete E.delayedLeave},E.delayedLeave=C})}return i}}},L8=D8;function Ds(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function lr(e,t,n,r){const{appear:a,mode:l,persisted:i=!1,onBeforeEnter:s,onEnter:u,onAfterEnter:p,onEnterCancelled:E,onBeforeLeave:d,onLeave:h,onAfterLeave:v,onLeaveCancelled:A,onBeforeAppear:y,onAppear:B,onAfterAppear:b,onAppearCancelled:C}=t,g=String(e.key),w=Ds(n,e),x=(F,R)=>{F&&st(F,r,9,R)},P=(F,R)=>{const N=R[1];x(F,R),ee(F)?F.every(Q=>Q.length<=1)&&N():F.length<=1&&N()},S={mode:l,persisted:i,beforeEnter(F){let R=s;if(!n.isMounted)if(a)R=y||s;else return;F[qt]&&F[qt](!0);const N=w[g];N&&ln(e,N)&&N.el[qt]&&N.el[qt](),x(R,[F])},enter(F){let R=u,N=p,Q=E;if(!n.isMounted)if(a)R=B||u,N=b||p,Q=C||E;else return;let j=!1;const te=F[Sr]=we=>{j||(j=!0,we?x(Q,[F]):x(N,[F]),S.delayedLeave&&S.delayedLeave(),F[Sr]=void 0)};R?P(R,[F,te]):te()},leave(F,R){const N=String(e.key);if(F[Sr]&&F[Sr](!0),n.isUnmounting)return R();x(d,[F]);let Q=!1;const j=F[qt]=te=>{Q||(Q=!0,R(),te?x(A,[F]):x(v,[F]),F[qt]=void 0,w[N]===e&&delete w[N])};w[N]=e,h?P(h,[F,j]):j()},clone(F){return lr(F,t,n,r)}};return S}function Ta(e){if(vr(e))return e=Yt(e),e.children=null,e}function ki(e){return vr(e)?e.children?e.children[0]:void 0:e}function ir(e,t){e.shapeFlag&6&&e.component?ir(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function zl(e,t=!1,n){let r=[],a=0;for(let l=0;l<e.length;l++){let i=e[l];const s=n==null?i.key:String(n)+String(i.key!=null?i.key:l);i.type===Ze?(i.patchFlag&128&&a++,r=r.concat(zl(i.children,t,s))):(t||i.type!==ut)&&r.push(s!=null?Yt(i,{key:s}):i)}if(a>1)for(let l=0;l<r.length;l++)r[l].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function z(e,t){return ae(e)?Re({name:e.name},t,{setup:e}):e}const Kn=e=>!!e.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function f(e){ae(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:a=200,timeout:l,suspensible:i=!0,onError:s}=e;let u=null,p,E=0;const d=()=>(E++,u=null,h()),h=()=>{let v;return u||(v=u=t().catch(A=>{if(A=A instanceof Error?A:new Error(String(A)),s)return new Promise((y,B)=>{s(A,()=>y(d()),()=>B(A),E+1)});throw A}).then(A=>v!==u&&u?u:(A&&(A.__esModule||A[Symbol.toStringTag]==="Module")&&(A=A.default),p=A,A)))};return z({name:"AsyncComponentWrapper",__asyncLoader:h,get __asyncResolved(){return p},setup(){const v=ze;if(p)return()=>ka(p,v);const A=C=>{u=null,fr(C,v,13,!r)};if(i&&v.suspense||Ar)return h().then(C=>()=>ka(C,v)).catch(C=>(A(C),()=>r?ke(r,{error:C}):null));const y=X(!1),B=X(),b=X(!!a);return a&&setTimeout(()=>{b.value=!1},a),l!=null&&setTimeout(()=>{if(!y.value&&!B.value){const C=new Error(`Async component timed out after ${l}ms.`);A(C),B.value=C}},l),h().then(()=>{y.value=!0,v.parent&&vr(v.parent.vnode)&&(v.parent.effect.dirty=!0,ca(v.parent.update))}).catch(C=>{A(C),B.value=C}),()=>{if(y.value&&p)return ka(p,v);if(B.value&&r)return ke(r,{error:B.value});if(n&&!b.value)return ke(n)}}})}function ka(e,t){const{ref:n,props:r,children:a,ce:l}=t.vnode,i=ke(e,r,a);return i.ref=n,i.ce=l,delete t.vnode.ce,i}const vr=e=>e.type.__isKeepAlive;function P8(e,t){Ls(e,"a",t)}function C8(e,t){Ls(e,"da",t)}function Ls(e,t,n=ze){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(pa(t,r,n),n){let a=n.parent;for(;a&&a.parent;)vr(a.parent.vnode)&&w8(r,t,n,a),a=a.parent}}function w8(e,t,n,r){const a=pa(t,e,r,!0);mr(()=>{Dl(r[t],a)},n)}function pa(e,t,n=ze,r=!1){if(n){const a=n[e]||(n[e]=[]),l=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;un();const s=_r(n),u=st(t,n,e,i);return s(),pn(),u});return r?a.unshift(l):a.push(l),l}}const St=e=>(t,n=ze)=>(!Ar||e==="sp")&&pa(e,(...r)=>t(...r),n),T8=St("bm"),ge=St("m"),k8=St("bu"),Ps=St("u"),$l=St("bum"),mr=St("um"),I8=St("sp"),O8=St("rtg"),F8=St("rtc");function R8(e,t=ze){pa("ec",e,t)}const nl=e=>e?Ns(e)?ql(e)||e.proxy:nl(e.parent):null,Qn=Re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>nl(e.parent),$root:e=>nl(e.root),$emit:e=>e.emit,$options:e=>Nl(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,ca(e.update)}),$nextTick:e=>e.n||(e.n=En.bind(e.proxy)),$watch:e=>y8.bind(e)}),Ia=(e,t)=>e!==Ce&&!e.__isScriptSetup&&Ee(e,t),V8={get({_:e},t){const{ctx:n,setupState:r,data:a,props:l,accessCache:i,type:s,appContext:u}=e;let p;if(t[0]!=="$"){const v=i[t];if(v!==void 0)switch(v){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return l[t]}else{if(Ia(r,t))return i[t]=1,r[t];if(a!==Ce&&Ee(a,t))return i[t]=2,a[t];if((p=e.propsOptions[0])&&Ee(p,t))return i[t]=3,l[t];if(n!==Ce&&Ee(n,t))return i[t]=4,n[t];rl&&(i[t]=0)}}const E=Qn[t];let d,h;if(E)return t==="$attrs"&&Ke(e,"get",t),E(e);if((d=s.__cssModules)&&(d=d[t]))return d;if(n!==Ce&&Ee(n,t))return i[t]=4,n[t];if(h=u.config.globalProperties,Ee(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:l}=e;return Ia(a,t)?(a[t]=n,!0):r!==Ce&&Ee(r,t)?(r[t]=n,!0):Ee(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(l[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:l}},i){let s;return!!n[i]||e!==Ce&&Ee(e,i)||Ia(t,i)||(s=l[0])&&Ee(s,i)||Ee(r,i)||Ee(Qn,i)||Ee(a.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Ee(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ii(e){return ee(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let rl=!0;function S8(e){const t=Nl(e),n=e.proxy,r=e.ctx;rl=!1,t.beforeCreate&&Oi(t.beforeCreate,e,"bc");const{data:a,computed:l,methods:i,watch:s,provide:u,inject:p,created:E,beforeMount:d,mounted:h,beforeUpdate:v,updated:A,activated:y,deactivated:B,beforeDestroy:b,beforeUnmount:C,destroyed:g,unmounted:w,render:x,renderTracked:P,renderTriggered:S,errorCaptured:F,serverPrefetch:R,expose:N,inheritAttrs:Q,components:j,directives:te,filters:we}=t;if(p&&x8(p,r,null),i)for(const ne in i){const W=i[ne];ae(W)&&(r[ne]=W.bind(n))}if(a){const ne=a.call(n,n);Te(ne)&&(e.data=hr(ne))}if(rl=!0,l)for(const ne in l){const W=l[ne],Oe=ae(W)?W.bind(n,n):ae(W.get)?W.get.bind(n,n):it,gt=!ae(W)&&ae(W.set)?W.set.bind(n):it,nt=D({get:Oe,set:gt});Object.defineProperty(r,ne,{enumerable:!0,configurable:!0,get:()=>nt.value,set:xe=>nt.value=xe})}if(s)for(const ne in s)Cs(s[ne],r,n,ne);if(u){const ne=ae(u)?u.call(n):u;Reflect.ownKeys(ne).forEach(W=>{mt(W,ne[W])})}E&&Oi(E,e,"c");function J(ne,W){ee(W)?W.forEach(Oe=>ne(Oe.bind(n))):W&&ne(W.bind(n))}if(J(T8,d),J(ge,h),J(k8,v),J(Ps,A),J(P8,y),J(C8,B),J(R8,F),J(F8,P),J(O8,S),J($l,C),J(mr,w),J(I8,R),ee(N))if(N.length){const ne=e.exposed||(e.exposed={});N.forEach(W=>{Object.defineProperty(ne,W,{get:()=>n[W],set:Oe=>n[W]=Oe})})}else e.exposed||(e.exposed={});x&&e.render===it&&(e.render=x),Q!=null&&(e.inheritAttrs=Q),j&&(e.components=j),te&&(e.directives=te)}function x8(e,t,n=it){ee(e)&&(e=al(e));for(const r in e){const a=e[r];let l;Te(a)?"default"in a?l=fe(a.from||r,a.default,!0):l=fe(a.from||r):l=fe(a),$e(l)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:i=>l.value=i}):t[r]=l}}function Oi(e,t,n){st(ee(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Cs(e,t,n,r){const a=r.includes(".")?bs(n,r):()=>n[r];if(le(e)){const l=t[e];ae(l)&&he(a,l)}else if(ae(e))he(a,e.bind(n));else if(Te(e))if(ee(e))e.forEach(l=>Cs(l,t,n,r));else{const l=ae(e.handler)?e.handler.bind(n):t[e.handler];ae(l)&&he(a,l,e)}}function Nl(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:l,config:{optionMergeStrategies:i}}=e.appContext,s=l.get(t);let u;return s?u=s:!a.length&&!n&&!r?u=t:(u={},a.length&&a.forEach(p=>Xr(u,p,i,!0)),Xr(u,t,i)),Te(t)&&l.set(t,u),u}function Xr(e,t,n,r=!1){const{mixins:a,extends:l}=t;l&&Xr(e,l,n,!0),a&&a.forEach(i=>Xr(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const s=M8[i]||n&&n[i];e[i]=s?s(e[i],t[i]):t[i]}return e}const M8={data:Fi,props:Ri,emits:Ri,methods:Gn,computed:Gn,beforeCreate:qe,created:qe,beforeMount:qe,mounted:qe,beforeUpdate:qe,updated:qe,beforeDestroy:qe,beforeUnmount:qe,destroyed:qe,unmounted:qe,activated:qe,deactivated:qe,errorCaptured:qe,serverPrefetch:qe,components:Gn,directives:Gn,watch:$8,provide:Fi,inject:z8};function Fi(e,t){return t?e?function(){return Re(ae(e)?e.call(this,this):e,ae(t)?t.call(this,this):t)}:t:e}function z8(e,t){return Gn(al(e),al(t))}function al(e){if(ee(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function qe(e,t){return e?[...new Set([].concat(e,t))]:t}function Gn(e,t){return e?Re(Object.create(null),e,t):t}function Ri(e,t){return e?ee(e)&&ee(t)?[...new Set([...e,...t])]:Re(Object.create(null),Ii(e),Ii(t??{})):t}function $8(e,t){if(!e)return t;if(!t)return e;const n=Re(Object.create(null),e);for(const r in t)n[r]=qe(e[r],t[r]);return n}function ws(){return{app:null,config:{isNativeTag:fp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let N8=0;function j8(e,t){return function(r,a=null){ae(r)||(r=Re({},r)),a!=null&&!Te(a)&&(a=null);const l=ws(),i=new WeakSet;let s=!1;const u=l.app={_uid:N8++,_component:r,_props:a,_container:null,_context:l,_instance:null,version:vE,get config(){return l.config},set config(p){},use(p,...E){return i.has(p)||(p&&ae(p.install)?(i.add(p),p.install(u,...E)):ae(p)&&(i.add(p),p(u,...E))),u},mixin(p){return l.mixins.includes(p)||l.mixins.push(p),u},component(p,E){return E?(l.components[p]=E,u):l.components[p]},directive(p,E){return E?(l.directives[p]=E,u):l.directives[p]},mount(p,E,d){if(!s){const h=ke(r,a);return h.appContext=l,d===!0?d="svg":d===!1&&(d=void 0),E&&t?t(h,p):e(h,p,d),s=!0,u._container=p,p.__vue_app__=u,ql(h.component)||h.component.proxy}},unmount(){s&&(e(null,u._container),delete u._container.__vue_app__)},provide(p,E){return l.provides[p]=E,u},runWithContext(p){Zr=u;try{return p()}finally{Zr=null}}};return u}}let Zr=null;function mt(e,t){if(ze){let n=ze.provides;const r=ze.parent&&ze.parent.provides;r===n&&(n=ze.provides=Object.create(r)),n[e]=t}}function fe(e,t,n=!1){const r=ze||ot;if(r||Zr){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Zr._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&ae(t)?t.call(r&&r.proxy):t}}function H8(e,t,n,r=!1){const a={},l={};Jr(l,Ea,1),e.propsDefaults=Object.create(null),Ts(e,t,a,l);for(const i in e.propsOptions[0])i in a||(a[i]=void 0);n?e.props=r?a:os(a):e.type.props?e.props=a:e.props=l,e.attrs=l}function q8(e,t,n,r){const{props:a,attrs:l,vnode:{patchFlag:i}}=e,s=se(a),[u]=e.propsOptions;let p=!1;if((r||i>0)&&!(i&16)){if(i&8){const E=e.vnode.dynamicProps;for(let d=0;d<E.length;d++){let h=E[d];if(ua(e.emitsOptions,h))continue;const v=t[h];if(u)if(Ee(l,h))v!==l[h]&&(l[h]=v,p=!0);else{const A=pt(h);a[A]=ll(u,s,A,v,e,!1)}else v!==l[h]&&(l[h]=v,p=!0)}}}else{Ts(e,t,a,l)&&(p=!0);let E;for(const d in s)(!t||!Ee(t,d)&&((E=Vn(d))===d||!Ee(t,E)))&&(u?n&&(n[d]!==void 0||n[E]!==void 0)&&(a[d]=ll(u,s,d,void 0,e,!0)):delete a[d]);if(l!==s)for(const d in l)(!t||!Ee(t,d))&&(delete l[d],p=!0)}p&&Ft(e,"set","$attrs")}function Ts(e,t,n,r){const[a,l]=e.propsOptions;let i=!1,s;if(t)for(let u in t){if(Jn(u))continue;const p=t[u];let E;a&&Ee(a,E=pt(u))?!l||!l.includes(E)?n[E]=p:(s||(s={}))[E]=p:ua(e.emitsOptions,u)||(!(u in r)||p!==r[u])&&(r[u]=p,i=!0)}if(l){const u=se(n),p=s||Ce;for(let E=0;E<l.length;E++){const d=l[E];n[d]=ll(a,u,d,p[d],e,!Ee(p,d))}}return i}function ll(e,t,n,r,a,l){const i=e[n];if(i!=null){const s=Ee(i,"default");if(s&&r===void 0){const u=i.default;if(i.type!==Function&&!i.skipFactory&&ae(u)){const{propsDefaults:p}=a;if(n in p)r=p[n];else{const E=_r(a);r=p[n]=u.call(null,t),E()}}else r=u}i[0]&&(l&&!s?r=!1:i[1]&&(r===""||r===Vn(n))&&(r=!0))}return r}function ks(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const l=e.props,i={},s=[];let u=!1;if(!ae(e)){const E=d=>{u=!0;const[h,v]=ks(d,t,!0);Re(i,h),v&&s.push(...v)};!n&&t.mixins.length&&t.mixins.forEach(E),e.extends&&E(e.extends),e.mixins&&e.mixins.forEach(E)}if(!l&&!u)return Te(e)&&r.set(e,gn),gn;if(ee(l))for(let E=0;E<l.length;E++){const d=pt(l[E]);Vi(d)&&(i[d]=Ce)}else if(l)for(const E in l){const d=pt(E);if(Vi(d)){const h=l[E],v=i[d]=ee(h)||ae(h)?{type:h}:Re({},h);if(v){const A=Mi(Boolean,v.type),y=Mi(String,v.type);v[0]=A>-1,v[1]=y<0||A<y,(A>-1||Ee(v,"default"))&&s.push(d)}}}const p=[i,s];return Te(e)&&r.set(e,p),p}function Vi(e){return e[0]!=="$"}function Si(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function xi(e,t){return Si(e)===Si(t)}function Mi(e,t){return ee(t)?t.findIndex(n=>xi(n,e)):ae(t)&&xi(t,e)?0:-1}const Is=e=>e[0]==="_"||e==="$stable",jl=e=>ee(e)?e.map(ht):[ht(e)],G8=(e,t,n)=>{if(t._n)return t;const r=d8((...a)=>jl(t(...a)),n);return r._c=!1,r},Os=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Is(a))continue;const l=e[a];if(ae(l))t[a]=G8(a,l,r);else if(l!=null){const i=jl(l);t[a]=()=>i}}},Fs=(e,t)=>{const n=jl(t);e.slots.default=()=>n},U8=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=se(t),Jr(t,"_",n)):Os(t,e.slots={})}else e.slots={},t&&Fs(e,t);Jr(e.slots,Ea,1)},J8=(e,t,n)=>{const{vnode:r,slots:a}=e;let l=!0,i=Ce;if(r.shapeFlag&32){const s=t._;s?n&&s===1?l=!1:(Re(a,t),!n&&s===1&&delete a._):(l=!t.$stable,Os(t,a)),i=t}else t&&(Fs(e,t),i={default:1});if(l)for(const s in a)!Is(s)&&i[s]==null&&delete a[s]};function ea(e,t,n,r,a=!1){if(ee(e)){e.forEach((h,v)=>ea(h,t&&(ee(t)?t[v]:t),n,r,a));return}if(Kn(r)&&!a)return;const l=r.shapeFlag&4?ql(r.component)||r.component.proxy:r.el,i=a?null:l,{i:s,r:u}=e,p=t&&t.r,E=s.refs===Ce?s.refs={}:s.refs,d=s.setupState;if(p!=null&&p!==u&&(le(p)?(E[p]=null,Ee(d,p)&&(d[p]=null)):$e(p)&&(p.value=null)),ae(u))Kt(u,s,12,[i,E]);else{const h=le(u),v=$e(u),A=e.f;if(h||v){const y=()=>{if(A){const B=h?Ee(d,u)?d[u]:E[u]:u.value;a?ee(B)&&Dl(B,l):ee(B)?B.includes(l)||B.push(l):h?(E[u]=[l],Ee(d,u)&&(d[u]=E[u])):(u.value=[l],e.k&&(E[e.k]=u.value))}else h?(E[u]=i,Ee(d,u)&&(d[u]=i)):v&&(u.value=i,e.k&&(E[e.k]=i))};a||A?y():(y.id=-1,Je(y,n))}}}let zt=!1;const W8=e=>e.namespaceURI.includes("svg")&&e.tagName!=="foreignObject",K8=e=>e.namespaceURI.includes("MathML"),xr=e=>{if(W8(e))return"svg";if(K8(e))return"mathml"},Mr=e=>e.nodeType===8;function Q8(e){const{mt:t,p:n,o:{patchProp:r,createText:a,nextSibling:l,parentNode:i,remove:s,insert:u,createComment:p}}=e,E=(g,w)=>{if(!w.hasChildNodes()){n(null,g,w),Qr(),w._vnode=g;return}zt=!1,d(w.firstChild,g,null,null,null),Qr(),w._vnode=g,zt&&console.error("Hydration completed but contains mismatches.")},d=(g,w,x,P,S,F=!1)=>{const R=Mr(g)&&g.data==="[",N=()=>y(g,w,x,P,S,R),{type:Q,ref:j,shapeFlag:te,patchFlag:we}=w;let Le=g.nodeType;w.el=g,we===-2&&(F=!1,w.dynamicChildren=null);let J=null;switch(Q){case wn:Le!==3?w.children===""?(u(w.el=a(""),i(g),g),J=g):J=N():(g.data!==w.children&&(zt=!0,g.data=w.children),J=l(g));break;case ut:C(g)?(J=l(g),b(w.el=g.content.firstChild,g,x)):Le!==8||R?J=N():J=l(g);break;case Yn:if(R&&(g=l(g),Le=g.nodeType),Le===1||Le===3){J=g;const ne=!w.children.length;for(let W=0;W<w.staticCount;W++)ne&&(w.children+=J.nodeType===1?J.outerHTML:J.data),W===w.staticCount-1&&(w.anchor=J),J=l(J);return R?l(J):J}else N();break;case Ze:R?J=A(g,w,x,P,S,F):J=N();break;default:if(te&1)(Le!==1||w.type.toLowerCase()!==g.tagName.toLowerCase())&&!C(g)?J=N():J=h(g,w,x,P,S,F);else if(te&6){w.slotScopeIds=S;const ne=i(g);if(R?J=B(g):Mr(g)&&g.data==="teleport start"?J=B(g,g.data,"teleport end"):J=l(g),t(w,ne,null,x,P,xr(ne),F),Kn(w)){let W;R?(W=ke(Ze),W.anchor=J?J.previousSibling:ne.lastChild):W=g.nodeType===3?$s(""):ke("div"),W.el=g,w.component.subTree=W}}else te&64?Le!==8?J=N():J=w.type.hydrate(g,w,x,P,S,F,e,v):te&128&&(J=w.type.hydrate(g,w,x,P,xr(i(g)),S,F,e,d))}return j!=null&&ea(j,null,P,w),J},h=(g,w,x,P,S,F)=>{F=F||!!w.dynamicChildren;const{type:R,props:N,patchFlag:Q,shapeFlag:j,dirs:te,transition:we}=w,Le=R==="input"||R==="option";if(Le||Q!==-1){te&&yt(w,null,x,"created");let J=!1;if(C(g)){J=Rs(P,we)&&x&&x.vnode.props&&x.vnode.props.appear;const W=g.content.firstChild;J&&we.beforeEnter(W),b(W,g,x),w.el=g=W}if(j&16&&!(N&&(N.innerHTML||N.textContent))){let W=v(g.firstChild,w,g,x,P,S,F);for(;W;){zt=!0;const Oe=W;W=W.nextSibling,s(Oe)}}else j&8&&g.textContent!==w.children&&(zt=!0,g.textContent=w.children);if(N)if(Le||!F||Q&48)for(const W in N)(Le&&(W.endsWith("value")||W==="indeterminate")||Er(W)&&!Jn(W)||W[0]===".")&&r(g,W,null,N[W],void 0,void 0,x);else N.onClick&&r(g,"onClick",null,N.onClick,void 0,void 0,x);let ne;(ne=N&&N.onVnodeBeforeMount)&&at(ne,x,w),te&&yt(w,null,x,"beforeMount"),((ne=N&&N.onVnodeMounted)||te||J)&&gs(()=>{ne&&at(ne,x,w),J&&we.enter(g),te&&yt(w,null,x,"mounted")},P)}return g.nextSibling},v=(g,w,x,P,S,F,R)=>{R=R||!!w.dynamicChildren;const N=w.children,Q=N.length;for(let j=0;j<Q;j++){const te=R?N[j]:N[j]=ht(N[j]);if(g)g=d(g,te,P,S,F,R);else{if(te.type===wn&&!te.children)continue;zt=!0,n(null,te,x,null,P,S,xr(x),F)}}return g},A=(g,w,x,P,S,F)=>{const{slotScopeIds:R}=w;R&&(S=S?S.concat(R):R);const N=i(g),Q=v(l(g),w,N,x,P,S,F);return Q&&Mr(Q)&&Q.data==="]"?l(w.anchor=Q):(zt=!0,u(w.anchor=p("]"),N,Q),Q)},y=(g,w,x,P,S,F)=>{if(zt=!0,w.el=null,F){const Q=B(g);for(;;){const j=l(g);if(j&&j!==Q)s(j);else break}}const R=l(g),N=i(g);return s(g),n(null,w,N,R,x,P,xr(N),S),R},B=(g,w="[",x="]")=>{let P=0;for(;g;)if(g=l(g),g&&Mr(g)&&(g.data===w&&P++,g.data===x)){if(P===0)return l(g);P--}return g},b=(g,w,x)=>{const P=w.parentNode;P&&P.replaceChild(g,w);let S=x;for(;S;)S.vnode.el===w&&(S.vnode.el=S.subTree.el=g),S=S.parent},C=g=>g.nodeType===1&&g.tagName.toLowerCase()==="template";return[E,d]}const Je=gs;function Y8(e){return X8(e,Q8)}function X8(e,t){const n=Uo();n.__VUE__=!0;const{insert:r,remove:a,patchProp:l,createElement:i,createText:s,createComment:u,setText:p,setElementText:E,parentNode:d,nextSibling:h,setScopeId:v=it,insertStaticContent:A}=e,y=(m,_,L,I=null,k=null,M=null,q=void 0,V=null,$=!!_.dynamicChildren)=>{if(m===_)return;m&&!ln(m,_)&&(I=T(m),xe(m,k,M,!0),m=null),_.patchFlag===-2&&($=!1,_.dynamicChildren=null);const{type:O,ref:U,shapeFlag:Z}=_;switch(O){case wn:B(m,_,L,I);break;case ut:b(m,_,L,I);break;case Yn:m==null&&C(_,L,I,q);break;case Ze:j(m,_,L,I,k,M,q,V,$);break;default:Z&1?x(m,_,L,I,k,M,q,V,$):Z&6?te(m,_,L,I,k,M,q,V,$):(Z&64||Z&128)&&O.process(m,_,L,I,k,M,q,V,$,K)}U!=null&&k&&ea(U,m&&m.ref,M,_||m,!_)},B=(m,_,L,I)=>{if(m==null)r(_.el=s(_.children),L,I);else{const k=_.el=m.el;_.children!==m.children&&p(k,_.children)}},b=(m,_,L,I)=>{m==null?r(_.el=u(_.children||""),L,I):_.el=m.el},C=(m,_,L,I)=>{[m.el,m.anchor]=A(m.children,_,L,I,m.el,m.anchor)},g=({el:m,anchor:_},L,I)=>{let k;for(;m&&m!==_;)k=h(m),r(m,L,I),m=k;r(_,L,I)},w=({el:m,anchor:_})=>{let L;for(;m&&m!==_;)L=h(m),a(m),m=L;a(_)},x=(m,_,L,I,k,M,q,V,$)=>{_.type==="svg"?q="svg":_.type==="math"&&(q="mathml"),m==null?P(_,L,I,k,M,q,V,$):R(m,_,k,M,q,V,$)},P=(m,_,L,I,k,M,q,V)=>{let $,O;const{props:U,shapeFlag:Z,transition:Y,dirs:re}=m;if($=m.el=i(m.type,M,U&&U.is,U),Z&8?E($,m.children):Z&16&&F(m.children,$,null,I,k,Oa(m,M),q,V),re&&yt(m,null,I,"created"),S($,m,m.scopeId,q,I),U){for(const _e in U)_e!=="value"&&!Jn(_e)&&l($,_e,null,U[_e],M,m.children,I,k,Fe);"value"in U&&l($,"value",null,U.value,M),(O=U.onVnodeBeforeMount)&&at(O,I,m)}re&&yt(m,null,I,"beforeMount");const ie=Rs(k,Y);ie&&Y.beforeEnter($),r($,_,L),((O=U&&U.onVnodeMounted)||ie||re)&&Je(()=>{O&&at(O,I,m),ie&&Y.enter($),re&&yt(m,null,I,"mounted")},k)},S=(m,_,L,I,k)=>{if(L&&v(m,L),I)for(let M=0;M<I.length;M++)v(m,I[M]);if(k){let M=k.subTree;if(_===M){const q=k.vnode;S(m,q,q.scopeId,q.slotScopeIds,k.parent)}}},F=(m,_,L,I,k,M,q,V,$=0)=>{for(let O=$;O<m.length;O++){const U=m[O]=V?Gt(m[O]):ht(m[O]);y(null,U,_,L,I,k,M,q,V)}},R=(m,_,L,I,k,M,q)=>{const V=_.el=m.el;let{patchFlag:$,dynamicChildren:O,dirs:U}=_;$|=m.patchFlag&16;const Z=m.props||Ce,Y=_.props||Ce;let re;if(L&&nn(L,!1),(re=Y.onVnodeBeforeUpdate)&&at(re,L,_,m),U&&yt(_,m,L,"beforeUpdate"),L&&nn(L,!0),O?N(m.dynamicChildren,O,V,L,I,Oa(_,k),M):q||W(m,_,V,null,L,I,Oa(_,k),M,!1),$>0){if($&16)Q(V,_,Z,Y,L,I,k);else if($&2&&Z.class!==Y.class&&l(V,"class",null,Y.class,k),$&4&&l(V,"style",Z.style,Y.style,k),$&8){const ie=_.dynamicProps;for(let _e=0;_e<ie.length;_e++){const Pe=ie[_e],Me=Z[Pe],Et=Y[Pe];(Et!==Me||Pe==="value")&&l(V,Pe,Me,Et,k,m.children,L,I,Fe)}}$&1&&m.children!==_.children&&E(V,_.children)}else!q&&O==null&&Q(V,_,Z,Y,L,I,k);((re=Y.onVnodeUpdated)||U)&&Je(()=>{re&&at(re,L,_,m),U&&yt(_,m,L,"updated")},I)},N=(m,_,L,I,k,M,q)=>{for(let V=0;V<_.length;V++){const $=m[V],O=_[V],U=$.el&&($.type===Ze||!ln($,O)||$.shapeFlag&70)?d($.el):L;y($,O,U,null,I,k,M,q,!0)}},Q=(m,_,L,I,k,M,q)=>{if(L!==I){if(L!==Ce)for(const V in L)!Jn(V)&&!(V in I)&&l(m,V,L[V],null,q,_.children,k,M,Fe);for(const V in I){if(Jn(V))continue;const $=I[V],O=L[V];$!==O&&V!=="value"&&l(m,V,O,$,q,_.children,k,M,Fe)}"value"in I&&l(m,"value",L.value,I.value,q)}},j=(m,_,L,I,k,M,q,V,$)=>{const O=_.el=m?m.el:s(""),U=_.anchor=m?m.anchor:s("");let{patchFlag:Z,dynamicChildren:Y,slotScopeIds:re}=_;re&&(V=V?V.concat(re):re),m==null?(r(O,L,I),r(U,L,I),F(_.children||[],L,U,k,M,q,V,$)):Z>0&&Z&64&&Y&&m.dynamicChildren?(N(m.dynamicChildren,Y,L,k,M,q,V),(_.key!=null||k&&_===k.subTree)&&Vs(m,_,!0)):W(m,_,L,U,k,M,q,V,$)},te=(m,_,L,I,k,M,q,V,$)=>{_.slotScopeIds=V,m==null?_.shapeFlag&512?k.ctx.activate(_,L,I,q,$):we(_,L,I,k,M,q,$):Le(m,_,$)},we=(m,_,L,I,k,M,q)=>{const V=m.component=cE(m,I,k);if(vr(m)&&(V.ctx.renderer=K),uE(V),V.asyncDep){if(k&&k.registerDep(V,J),!m.el){const $=V.subTree=ke(ut);b(null,$,_,L)}}else J(V,m,_,L,k,M,q)},Le=(m,_,L)=>{const I=_.component=m.component;if(v8(m,_,L))if(I.asyncDep&&!I.asyncResolved){ne(I,_,L);return}else I.next=_,c8(I.update),I.effect.dirty=!0,I.update();else _.el=m.el,I.vnode=_},J=(m,_,L,I,k,M,q)=>{const V=()=>{if(m.isMounted){let{next:U,bu:Z,u:Y,parent:re,vnode:ie}=m;{const fn=Ss(m);if(fn){U&&(U.el=ie.el,ne(m,U,q)),fn.asyncDep.then(()=>{m.isUnmounted||V()});return}}let _e=U,Pe;nn(m,!1),U?(U.el=ie.el,ne(m,U,q)):U=ie,Z&&Ca(Z),(Pe=U.props&&U.props.onVnodeBeforeUpdate)&&at(Pe,re,U,ie),nn(m,!0);const Me=wa(m),Et=m.subTree;m.subTree=Me,y(Et,Me,d(Et.el),T(Et),m,k,M),U.el=Me.el,_e===null&&m8(m,Me.el),Y&&Je(Y,k),(Pe=U.props&&U.props.onVnodeUpdated)&&Je(()=>at(Pe,re,U,ie),k)}else{let U;const{el:Z,props:Y}=_,{bm:re,m:ie,parent:_e}=m,Pe=Kn(_);if(nn(m,!1),re&&Ca(re),!Pe&&(U=Y&&Y.onVnodeBeforeMount)&&at(U,_e,_),nn(m,!0),Z&&be){const Me=()=>{m.subTree=wa(m),be(Z,m.subTree,m,k,null)};Pe?_.type.__asyncLoader().then(()=>!m.isUnmounted&&Me()):Me()}else{const Me=m.subTree=wa(m);y(null,Me,L,I,m,k,M),_.el=Me.el}if(ie&&Je(ie,k),!Pe&&(U=Y&&Y.onVnodeMounted)){const Me=_;Je(()=>at(U,_e,Me),k)}(_.shapeFlag&256||_e&&Kn(_e.vnode)&&_e.vnode.shapeFlag&256)&&m.a&&Je(m.a,k),m.isMounted=!0,_=L=I=null}},$=m.effect=new wl(V,it,()=>ca(O),m.scope),O=m.update=()=>{$.dirty&&$.run()};O.id=m.uid,nn(m,!0),O()},ne=(m,_,L)=>{_.component=m;const I=m.vnode.props;m.vnode=_,m.next=null,q8(m,_.props,I,L),J8(m,_.children,L),un(),Ci(m),pn()},W=(m,_,L,I,k,M,q,V,$=!1)=>{const O=m&&m.children,U=m?m.shapeFlag:0,Z=_.children,{patchFlag:Y,shapeFlag:re}=_;if(Y>0){if(Y&128){gt(O,Z,L,I,k,M,q,V,$);return}else if(Y&256){Oe(O,Z,L,I,k,M,q,V,$);return}}re&8?(U&16&&Fe(O,k,M),Z!==O&&E(L,Z)):U&16?re&16?gt(O,Z,L,I,k,M,q,V,$):Fe(O,k,M,!0):(U&8&&E(L,""),re&16&&F(Z,L,I,k,M,q,V,$))},Oe=(m,_,L,I,k,M,q,V,$)=>{m=m||gn,_=_||gn;const O=m.length,U=_.length,Z=Math.min(O,U);let Y;for(Y=0;Y<Z;Y++){const re=_[Y]=$?Gt(_[Y]):ht(_[Y]);y(m[Y],re,L,null,k,M,q,V,$)}O>U?Fe(m,k,M,!0,!1,Z):F(_,L,I,k,M,q,V,$,Z)},gt=(m,_,L,I,k,M,q,V,$)=>{let O=0;const U=_.length;let Z=m.length-1,Y=U-1;for(;O<=Z&&O<=Y;){const re=m[O],ie=_[O]=$?Gt(_[O]):ht(_[O]);if(ln(re,ie))y(re,ie,L,null,k,M,q,V,$);else break;O++}for(;O<=Z&&O<=Y;){const re=m[Z],ie=_[Y]=$?Gt(_[Y]):ht(_[Y]);if(ln(re,ie))y(re,ie,L,null,k,M,q,V,$);else break;Z--,Y--}if(O>Z){if(O<=Y){const re=Y+1,ie=re<U?_[re].el:I;for(;O<=Y;)y(null,_[O]=$?Gt(_[O]):ht(_[O]),L,ie,k,M,q,V,$),O++}}else if(O>Y)for(;O<=Z;)xe(m[O],k,M,!0),O++;else{const re=O,ie=O,_e=new Map;for(O=ie;O<=Y;O++){const Ye=_[O]=$?Gt(_[O]):ht(_[O]);Ye.key!=null&&_e.set(Ye.key,O)}let Pe,Me=0;const Et=Y-ie+1;let fn=!1,vi=0;const Nn=new Array(Et);for(O=0;O<Et;O++)Nn[O]=0;for(O=re;O<=Z;O++){const Ye=m[O];if(Me>=Et){xe(Ye,k,M,!0);continue}let Bt;if(Ye.key!=null)Bt=_e.get(Ye.key);else for(Pe=ie;Pe<=Y;Pe++)if(Nn[Pe-ie]===0&&ln(Ye,_[Pe])){Bt=Pe;break}Bt===void 0?xe(Ye,k,M,!0):(Nn[Bt-ie]=O+1,Bt>=vi?vi=Bt:fn=!0,y(Ye,_[Bt],L,null,k,M,q,V,$),Me++)}const mi=fn?Z8(Nn):gn;for(Pe=mi.length-1,O=Et-1;O>=0;O--){const Ye=ie+O,Bt=_[Ye],_i=Ye+1<U?_[Ye+1].el:I;Nn[O]===0?y(null,Bt,L,_i,k,M,q,V,$):fn&&(Pe<0||O!==mi[Pe]?nt(Bt,L,_i,2):Pe--)}}},nt=(m,_,L,I,k=null)=>{const{el:M,type:q,transition:V,children:$,shapeFlag:O}=m;if(O&6){nt(m.component.subTree,_,L,I);return}if(O&128){m.suspense.move(_,L,I);return}if(O&64){q.move(m,_,L,K);return}if(q===Ze){r(M,_,L);for(let Z=0;Z<$.length;Z++)nt($[Z],_,L,I);r(m.anchor,_,L);return}if(q===Yn){g(m,_,L);return}if(I!==2&&O&1&&V)if(I===0)V.beforeEnter(M),r(M,_,L),Je(()=>V.enter(M),k);else{const{leave:Z,delayLeave:Y,afterLeave:re}=V,ie=()=>r(M,_,L),_e=()=>{Z(M,()=>{ie(),re&&re()})};Y?Y(M,ie,_e):_e()}else r(M,_,L)},xe=(m,_,L,I=!1,k=!1)=>{const{type:M,props:q,ref:V,children:$,dynamicChildren:O,shapeFlag:U,patchFlag:Z,dirs:Y}=m;if(V!=null&&ea(V,null,L,m,!0),U&256){_.ctx.deactivate(m);return}const re=U&1&&Y,ie=!Kn(m);let _e;if(ie&&(_e=q&&q.onVnodeBeforeUnmount)&&at(_e,_,m),U&6)bt(m.component,L,I);else{if(U&128){m.suspense.unmount(L,I);return}re&&yt(m,null,_,"beforeUnmount"),U&64?m.type.remove(m,_,L,k,K,I):O&&(M!==Ze||Z>0&&Z&64)?Fe(O,_,L,!1,!0):(M===Ze&&Z&384||!k&&U&16)&&Fe($,_,L),I&&Qe(m)}(ie&&(_e=q&&q.onVnodeUnmounted)||re)&&Je(()=>{_e&&at(_e,_,m),re&&yt(m,null,_,"unmounted")},L)},Qe=m=>{const{type:_,el:L,anchor:I,transition:k}=m;if(_===Ze){Ct(L,I);return}if(_===Yn){w(m);return}const M=()=>{a(L),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(m.shapeFlag&1&&k&&!k.persisted){const{leave:q,delayLeave:V}=k,$=()=>q(L,M);V?V(m.el,M,$):$()}else M()},Ct=(m,_)=>{let L;for(;m!==_;)L=h(m),a(m),m=L;a(_)},bt=(m,_,L)=>{const{bum:I,scope:k,update:M,subTree:q,um:V}=m;I&&Ca(I),k.stop(),M&&(M.active=!1,xe(q,m,_,L)),V&&Je(V,_),Je(()=>{m.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&m.asyncDep&&!m.asyncResolved&&m.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Fe=(m,_,L,I=!1,k=!1,M=0)=>{for(let q=M;q<m.length;q++)xe(m[q],_,L,I,k)},T=m=>m.shapeFlag&6?T(m.component.subTree):m.shapeFlag&128?m.suspense.next():h(m.anchor||m.el);let G=!1;const H=(m,_,L)=>{m==null?_._vnode&&xe(_._vnode,null,null,!0):y(_._vnode||null,m,_,null,null,null,L),G||(G=!0,Ci(),Qr(),G=!1),_._vnode=m},K={p:y,um:xe,m:nt,r:Qe,mt:we,mc:F,pc:W,pbc:N,n:T,o:e};let ue,be;return t&&([ue,be]=t(K)),{render:H,hydrate:ue,createApp:j8(H,ue)}}function Oa({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function nn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Rs(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Vs(e,t,n=!1){const r=e.children,a=t.children;if(ee(r)&&ee(a))for(let l=0;l<r.length;l++){const i=r[l];let s=a[l];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[l]=Gt(a[l]),s.el=i.el),n||Vs(i,s)),s.type===wn&&(s.el=i.el)}}function Z8(e){const t=e.slice(),n=[0];let r,a,l,i,s;const u=e.length;for(r=0;r<u;r++){const p=e[r];if(p!==0){if(a=n[n.length-1],e[a]<p){t[r]=a,n.push(r);continue}for(l=0,i=n.length-1;l<i;)s=l+i>>1,e[n[s]]<p?l=s+1:i=s;p<e[n[l]]&&(l>0&&(t[r]=n[l-1]),n[l]=r)}}for(l=n.length,i=n[l-1];l-- >0;)n[l]=i,i=t[i];return n}function Ss(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ss(t)}const eE=e=>e.__isTeleport,Ze=Symbol.for("v-fgt"),wn=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),Yn=Symbol.for("v-stc"),Xn=[];let vt=null;function tE(e=!1){Xn.push(vt=e?null:[])}function nE(){Xn.pop(),vt=Xn[Xn.length-1]||null}let or=1;function zi(e){or+=e}function xs(e){return e.dynamicChildren=or>0?vt||gn:null,nE(),or>0&&vt&&vt.push(e),e}function ev(e,t,n,r,a,l){return xs(zs(e,t,n,r,a,l,!0))}function rE(e,t,n,r,a){return xs(ke(e,t,n,r,a,!0))}function il(e){return e?e.__v_isVNode===!0:!1}function ln(e,t){return e.type===t.type&&e.key===t.key}const Ea="__vInternal",Ms=({key:e})=>e??null,Ur=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?le(e)||$e(e)||ae(e)?{i:ot,r:e,k:t,f:!!n}:e:null);function zs(e,t=null,n=null,r=0,a=null,l=e===Ze?0:1,i=!1,s=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ms(t),ref:t&&Ur(t),scopeId:_s,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:l,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ot};return s?(Hl(u,n),l&128&&e.normalize(u)):n&&(u.shapeFlag|=le(n)?8:16),or>0&&!i&&vt&&(u.patchFlag>0||l&6)&&u.patchFlag!==32&&vt.push(u),u}const ke=aE;function aE(e,t=null,n=null,r=0,a=null,l=!1){if((!e||e===_8)&&(e=ut),il(e)){const s=Yt(e,t,!0);return n&&Hl(s,n),or>0&&!l&&vt&&(s.shapeFlag&6?vt[vt.indexOf(e)]=s:vt.push(s)),s.patchFlag|=-2,s}if(fE(e)&&(e=e.__vccOpts),t){t=lE(t);let{class:s,style:u}=t;s&&!le(s)&&(t.class=Cl(s)),Te(u)&&(ss(u)&&!ee(u)&&(u=Re({},u)),t.style=Pl(u))}const i=le(e)?1:g8(e)?128:eE(e)?64:Te(e)?4:ae(e)?2:0;return zs(e,t,n,r,a,i,l,!0)}function lE(e){return e?ss(e)||Ea in e?Re({},e):e:null}function Yt(e,t,n=!1){const{props:r,ref:a,patchFlag:l,children:i}=e,s=t?iE(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ms(s),ref:t&&t.ref?n&&a?ee(a)?a.concat(Ur(t)):[a,Ur(t)]:Ur(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ze?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Yt(e.ssContent),ssFallback:e.ssFallback&&Yt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function $s(e=" ",t=0){return ke(wn,null,e,t)}function tv(e,t){const n=ke(Yn,null,e);return n.staticCount=t,n}function nv(e="",t=!1){return t?(tE(),rE(ut,null,e)):ke(ut,null,e)}function ht(e){return e==null||typeof e=="boolean"?ke(ut):ee(e)?ke(Ze,null,e.slice()):typeof e=="object"?Gt(e):ke(wn,null,String(e))}function Gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Yt(e)}function Hl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ee(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),Hl(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Ea in t)?t._ctx=ot:a===3&&ot&&(ot.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ae(t)?(t={default:t,_ctx:ot},n=32):(t=String(t),r&64?(n=16,t=[$s(t)]):n=8);e.children=t,e.shapeFlag|=n}function iE(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Cl([t.class,r.class]));else if(a==="style")t.style=Pl([t.style,r.style]);else if(Er(a)){const l=t[a],i=r[a];i&&l!==i&&!(ee(l)&&l.includes(i))&&(t[a]=l?[].concat(l,i):i)}else a!==""&&(t[a]=r[a])}return t}function at(e,t,n,r=null){st(e,t,7,[n,r])}const oE=ws();let sE=0;function cE(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||oE,l={uid:sE++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ip(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ks(r,a),emitsOptions:ms(r,a),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return l.ctx={_:l},l.root=t?t.root:l,l.emit=E8.bind(null,l),e.ce&&e.ce(l),l}let ze=null;const xn=()=>ze||ot;let ta,ol;{const e=Uo(),t=(n,r)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(r),l=>{a.length>1?a.forEach(i=>i(l)):a[0](l)}};ta=t("__VUE_INSTANCE_SETTERS__",n=>ze=n),ol=t("__VUE_SSR_SETTERS__",n=>Ar=n)}const _r=e=>{const t=ze;return ta(e),e.scope.on(),()=>{e.scope.off(),ta(t)}},$i=()=>{ze&&ze.scope.off(),ta(null)};function Ns(e){return e.vnode.shapeFlag&4}let Ar=!1;function uE(e,t=!1){t&&ol(t);const{props:n,children:r}=e.vnode,a=Ns(e);H8(e,n,a,t),U8(e,r);const l=a?pE(e,t):void 0;return t&&ol(!1),l}function pE(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=cs(new Proxy(e.ctx,V8));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?dE(e):null,l=_r(e);un();const i=Kt(r,e,0,[e.props,a]);if(pn(),l(),Go(i)){if(i.then($i,$i),t)return i.then(s=>{Ni(e,s,t)}).catch(s=>{fr(s,e,0)});e.asyncDep=i}else Ni(e,i,t)}else js(e,t)}function Ni(e,t,n){ae(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Te(t)&&(e.setupState=Es(t)),js(e,n)}let ji;function js(e,t,n){const r=e.type;if(!e.render){if(!t&&ji&&!r.render){const a=r.template||Nl(e).template;if(a){const{isCustomElement:l,compilerOptions:i}=e.appContext.config,{delimiters:s,compilerOptions:u}=r,p=Re(Re({isCustomElement:l,delimiters:s},i),u);r.render=ji(a,p)}}e.render=r.render||it}{const a=_r(e);un();try{S8(e)}finally{pn(),a()}}}function EE(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ke(e,"get","$attrs"),t[n]}}))}function dE(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return EE(e)},slots:e.slots,emit:e.emit,expose:t}}function ql(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Es(cs(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Qn)return Qn[n](e)},has(t,n){return n in t||n in Qn}}))}function hE(e,t=!0){return ae(e)?e.displayName||e.name:e.name||t&&e.__name}function fE(e){return ae(e)&&"__vccOpts"in e}const D=(e,t)=>e8(e,t,Ar);function o(e,t,n){const r=arguments.length;return r===2?Te(t)&&!ee(t)?il(t)?ke(e,null,[t]):ke(e,t):ke(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&il(n)&&(n=[n]),ke(e,t,n))}const vE="3.4.15";/**
* @vue/runtime-dom v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mE="http://www.w3.org/2000/svg",_E="http://www.w3.org/1998/Math/MathML",Ut=typeof document<"u"?document:null,Hi=Ut&&Ut.createElement("template"),AE={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t==="svg"?Ut.createElementNS(mE,e):t==="mathml"?Ut.createElementNS(_E,e):Ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>Ut.createTextNode(e),createComment:e=>Ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,l){const i=n?n.previousSibling:t.lastChild;if(a&&(a===l||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===l||!(a=a.nextSibling)););else{Hi.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const s=Hi.content;if(r==="svg"||r==="mathml"){const u=s.firstChild;for(;u.firstChild;)s.appendChild(u.firstChild);s.removeChild(u)}t.insertBefore(s,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},$t="transition",jn="animation",Tn=Symbol("_vtc"),Xt=(e,{slots:t})=>o(L8,qs(e),t);Xt.displayName="Transition";const Hs={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},gE=Xt.props=Re({},ys,Hs),rn=(e,t=[])=>{ee(e)?e.forEach(n=>n(...t)):e&&e(...t)},qi=e=>e?ee(e)?e.some(t=>t.length>1):e.length>1:!1;function qs(e){const t={};for(const j in e)j in Hs||(t[j]=e[j]);if(e.css===!1)return t;const{name:n="v",type:r,duration:a,enterFromClass:l=`${n}-enter-from`,enterActiveClass:i=`${n}-enter-active`,enterToClass:s=`${n}-enter-to`,appearFromClass:u=l,appearActiveClass:p=i,appearToClass:E=s,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:v=`${n}-leave-to`}=e,A=bE(a),y=A&&A[0],B=A&&A[1],{onBeforeEnter:b,onEnter:C,onEnterCancelled:g,onLeave:w,onLeaveCancelled:x,onBeforeAppear:P=b,onAppear:S=C,onAppearCancelled:F=g}=t,R=(j,te,we)=>{jt(j,te?E:s),jt(j,te?p:i),we&&we()},N=(j,te)=>{j._isLeaving=!1,jt(j,d),jt(j,v),jt(j,h),te&&te()},Q=j=>(te,we)=>{const Le=j?S:C,J=()=>R(te,j,we);rn(Le,[te,J]),Gi(()=>{jt(te,j?u:l),Tt(te,j?E:s),qi(Le)||Ui(te,r,y,J)})};return Re(t,{onBeforeEnter(j){rn(b,[j]),Tt(j,l),Tt(j,i)},onBeforeAppear(j){rn(P,[j]),Tt(j,u),Tt(j,p)},onEnter:Q(!1),onAppear:Q(!0),onLeave(j,te){j._isLeaving=!0;const we=()=>N(j,te);Tt(j,d),Us(),Tt(j,h),Gi(()=>{j._isLeaving&&(jt(j,d),Tt(j,v),qi(w)||Ui(j,r,B,we))}),rn(w,[j,we])},onEnterCancelled(j){R(j,!1),rn(g,[j])},onAppearCancelled(j){R(j,!0),rn(F,[j])},onLeaveCancelled(j){N(j),rn(x,[j])}})}function bE(e){if(e==null)return null;if(Te(e))return[Fa(e.enter),Fa(e.leave)];{const t=Fa(e);return[t,t]}}function Fa(e){return Dp(e)}function Tt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Tn]||(e[Tn]=new Set)).add(t)}function jt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[Tn];n&&(n.delete(t),n.size||(e[Tn]=void 0))}function Gi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let BE=0;function Ui(e,t,n,r){const a=e._endId=++BE,l=()=>{a===e._endId&&r()};if(n)return setTimeout(l,n);const{type:i,timeout:s,propCount:u}=Gs(e,t);if(!i)return r();const p=i+"end";let E=0;const d=()=>{e.removeEventListener(p,h),l()},h=v=>{v.target===e&&++E>=u&&d()};setTimeout(()=>{E<u&&d()},s+1),e.addEventListener(p,h)}function Gs(e,t){const n=window.getComputedStyle(e),r=A=>(n[A]||"").split(", "),a=r(`${$t}Delay`),l=r(`${$t}Duration`),i=Ji(a,l),s=r(`${jn}Delay`),u=r(`${jn}Duration`),p=Ji(s,u);let E=null,d=0,h=0;t===$t?i>0&&(E=$t,d=i,h=l.length):t===jn?p>0&&(E=jn,d=p,h=u.length):(d=Math.max(i,p),E=d>0?i>p?$t:jn:null,h=E?E===$t?l.length:u.length:0);const v=E===$t&&/\b(transform|all)(,|$)/.test(r(`${$t}Property`).toString());return{type:E,timeout:d,propCount:h,hasTransform:v}}function Ji(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Wi(n)+Wi(e[r])))}function Wi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Us(){return document.body.offsetHeight}function yE(e,t,n){const r=e[Tn];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const DE=Symbol("_vod"),LE=Symbol("");function PE(e,t,n){const r=e.style,a=r.display,l=le(n);if(n&&!l){if(t&&!le(t))for(const i in t)n[i]==null&&sl(r,i,"");for(const i in n)sl(r,i,n[i])}else if(l){if(t!==n){const i=r[LE];i&&(n+=";"+i),r.cssText=n}}else t&&e.removeAttribute("style");DE in e&&(r.display=a)}const Ki=/\s*!important$/;function sl(e,t,n){if(ee(n))n.forEach(r=>sl(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=CE(e,t);Ki.test(n)?e.setProperty(Vn(r),n.replace(Ki,""),"important"):e[r]=n}}const Qi=["Webkit","Moz","ms"],Ra={};function CE(e,t){const n=Ra[t];if(n)return n;let r=pt(t);if(r!=="filter"&&r in e)return Ra[t]=r;r=dr(r);for(let a=0;a<Qi.length;a++){const l=Qi[a]+r;if(l in e)return Ra[t]=l}return t}const Yi="http://www.w3.org/1999/xlink";function wE(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Yi,t.slice(6,t.length)):e.setAttributeNS(Yi,t,n);else{const l=kp(t);n==null||l&&!Jo(n)?e.removeAttribute(t):e.setAttribute(t,l?"":n)}}function TE(e,t,n,r,a,l,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,a,l),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const p=s==="OPTION"?e.getAttribute("value"):e.value,E=n??"";p!==E&&(e.value=E),n==null&&e.removeAttribute(t);return}let u=!1;if(n===""||n==null){const p=typeof e[t];p==="boolean"?n=Jo(n):n==null&&p==="string"?(n="",u=!0):p==="number"&&(n=0,u=!0)}try{e[t]=n}catch{}u&&e.removeAttribute(t)}function kE(e,t,n,r){e.addEventListener(t,n,r)}function IE(e,t,n,r){e.removeEventListener(t,n,r)}const Xi=Symbol("_vei");function OE(e,t,n,r,a=null){const l=e[Xi]||(e[Xi]={}),i=l[t];if(r&&i)i.value=r;else{const[s,u]=FE(t);if(r){const p=l[t]=SE(r,a);kE(e,s,p,u)}else i&&(IE(e,s,i,u),l[t]=void 0)}}const Zi=/(?:Once|Passive|Capture)$/;function FE(e){let t;if(Zi.test(e)){t={};let r;for(;r=e.match(Zi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Vn(e.slice(2)),t]}let Va=0;const RE=Promise.resolve(),VE=()=>Va||(RE.then(()=>Va=0),Va=Date.now());function SE(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;st(xE(r,n.value),t,5,[r])};return n.value=e,n.attached=VE(),n}function xE(e,t){if(ee(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const eo=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ME=(e,t,n,r,a,l,i,s,u)=>{const p=a==="svg";t==="class"?yE(e,r,p):t==="style"?PE(e,n,r):Er(t)?yl(t)||OE(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zE(e,t,r,p))?TE(e,t,r,l,i,s,u):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),wE(e,t,r,p))};function zE(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&eo(t)&&ae(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return eo(t)&&le(n)?!1:t in e}const Js=new WeakMap,Ws=new WeakMap,na=Symbol("_moveCb"),to=Symbol("_enterCb"),Ks={name:"TransitionGroup",props:Re({},gE,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=xn(),r=Bs();let a,l;return Ps(()=>{if(!a.length)return;const i=e.moveClass||`${e.name||"v"}-move`;if(!GE(a[0].el,n.vnode.el,i))return;a.forEach(jE),a.forEach(HE);const s=a.filter(qE);Us(),s.forEach(u=>{const p=u.el,E=p.style;Tt(p,i),E.transform=E.webkitTransform=E.transitionDuration="";const d=p[na]=h=>{h&&h.target!==p||(!h||/transform$/.test(h.propertyName))&&(p.removeEventListener("transitionend",d),p[na]=null,jt(p,i))};p.addEventListener("transitionend",d)})}),()=>{const i=se(e),s=qs(i);let u=i.tag||Ze;a=l,l=t.default?zl(t.default()):[];for(let p=0;p<l.length;p++){const E=l[p];E.key!=null&&ir(E,lr(E,s,r,n))}if(a)for(let p=0;p<a.length;p++){const E=a[p];ir(E,lr(E,s,r,n)),Js.set(E,E.el.getBoundingClientRect())}return ke(u,null,l)}}},$E=e=>delete e.mode;Ks.props;const NE=Ks;function jE(e){const t=e.el;t[na]&&t[na](),t[to]&&t[to]()}function HE(e){Ws.set(e,e.el.getBoundingClientRect())}function qE(e){const t=Js.get(e),n=Ws.get(e),r=t.left-n.left,a=t.top-n.top;if(r||a){const l=e.el.style;return l.transform=l.webkitTransform=`translate(${r}px,${a}px)`,l.transitionDuration="0s",e}}function GE(e,t,n){const r=e.cloneNode(),a=e[Tn];a&&a.forEach(s=>{s.split(/\s+/).forEach(u=>u&&r.classList.remove(u))}),n.split(/\s+/).forEach(s=>s&&r.classList.add(s)),r.style.display="none";const l=t.nodeType===1?t:t.parentNode;l.appendChild(r);const{hasTransform:i}=Gs(r);return l.removeChild(r),i}const UE=Re({patchProp:ME},AE);let Sa,no=!1;function JE(){return Sa=no?Sa:Y8(UE),no=!0,Sa}const WE=(...e)=>{const t=JE().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=QE(r);if(a)return n(a,!0,KE(a))},t};function KE(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function QE(e){return le(e)?document.querySelector(e):e}const YE="modulepreload",XE=function(e){return"/blog/"+e},ro={},c=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0){const l=document.getElementsByTagName("link");a=Promise.all(n.map(i=>{if(i=XE(i),i in ro)return;ro[i]=!0;const s=i.endsWith(".css"),u=s?'[rel="stylesheet"]':"";if(!!r)for(let d=l.length-1;d>=0;d--){const h=l[d];if(h.href===i&&(!s||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${u}`))return;const E=document.createElement("link");if(E.rel=s?"stylesheet":YE,s||(E.as="script",E.crossOrigin=""),E.href=i,document.head.appendChild(E),s)return new Promise((d,h)=>{E.addEventListener("load",d),E.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})}))}return a.then(()=>t()).catch(l=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l})},ZE={"v-8daa1a0e":()=>c(()=>import("./index.html-o2x5mGnx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-184f4da6":()=>c(()=>import("./intro.html-E6FIGQFr.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1473bf53":()=>c(()=>import("./index.html-8pZ41A_w.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e1e3da16":()=>c(()=>import("./index.html-8vDps7xa.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2d0ad528":()=>c(()=>import("./index.html-mPVCKh30.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-858cfdd6":()=>c(()=>import("./intro.html-3kAZxSDz.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-05573b46":()=>c(()=>import("./langchain.html-zKUtrlMr.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e5984c6a":()=>c(()=>import("./langchain_source_code.html-hLzF0c4R.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-349fb87b":()=>c(()=>import("./llama.html-k3uDI0u6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2f55967c":()=>c(()=>import("./llm_summary.html-cvktnuJX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-50c8db59":()=>c(()=>import("./streamlit.html-XtEIoTAQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1c829e52":()=>c(()=>import("./transformer.html-tE9tDwxy.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7b933308":()=>c(()=>import("./commen_mistakes.html-_jhy0L8H.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ae572218":()=>c(()=>import("./grammar.html-hfRgEa8V.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-77a572f4":()=>c(()=>import("./pronunciation.html-RS82m_Pt.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-165c2f30":()=>c(()=>import("./sentence_pattern_and_expression.html-rhLnJ2Nk.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-512e4fee":()=>c(()=>import("./01_python_environment.html-5fJs1XZK.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-53e80eee":()=>c(()=>import("./02_python_data_type.html-HK52Z0IM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-26e6dd20":()=>c(()=>import("./03_python_operator.html-9_6xioiS.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1066d072":()=>c(()=>import("./04_python_method.html-IrOHK25K.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-dbd695ec":()=>c(()=>import("./05_python_builtin_module.html-XlhXg8tm.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1610ea61":()=>c(()=>import("./06_python_popular_package.html-6--ZbeB9.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6022697a":()=>c(()=>import("./GraphQL.html-O1wzTf3j.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3ff02593":()=>c(()=>import("./算法提升.html-b17LYC_6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0b2a4422":()=>c(()=>import("./经典题汇总（每个细分类限定10题以内）.html-2epTizat.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-155b3612":()=>c(()=>import("./CSAPP.html-caCUq4Wx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6985d781":()=>c(()=>import("./Netty.html-Oz1qW0ZX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7813ca44":()=>c(()=>import("./RPC.html-xwcEmo3i.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-798c95fd":()=>c(()=>import("./操作系统.html-8LYtOBFC.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4e69f864":()=>c(()=>import("./浏览器技能.html-duku__ah.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a0eafd0a":()=>c(()=>import("./网络.html-7QqcLmnW.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-be73916a":()=>c(()=>import("./计算机技能.html-Z_-uuT7k.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1df908df":()=>c(()=>import("./Docker.html-Dow058BU.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-b93f1926":()=>c(()=>import("./K8S.html-yHFXsgZv.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-be2c9ec8":()=>c(()=>import("./AntDesign.html-5PfjzB_z.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4d328dde":()=>c(()=>import("./CSS.html-l3ZrUzrf.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2206dc02":()=>c(()=>import("./Expo.html-_FVslFQ3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5499a5df":()=>c(()=>import("./Frontend.html-tmlM0lsS.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ce284ff4":()=>c(()=>import("./HTML.html-aL_Fj0zT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-106d4d44":()=>c(()=>import("./JavaScript.html-7bM0XeMe.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5d634456":()=>c(()=>import("./Practice.html-B8z3MUlw.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3a7c55e2":()=>c(()=>import("./React.html-aNpo2Zgc.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2b106454":()=>c(()=>import("./npm.html-oHyXTcSA.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-b4e3bf38":()=>c(()=>import("./Java8学习笔记.html-_ipBhgD8.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-02738b09":()=>c(()=>import("./基础.html-amPi-5zf.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3e231f51":()=>c(()=>import("./集合.html-y2IL9MDl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a5db72e6":()=>c(()=>import("./juc.html-abIQaGek.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-12cc15fb":()=>c(()=>import("./jvm.html-Cfjq1_VZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5abb1155":()=>c(()=>import("./linux.html-r3AVlz9v.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2fd44fde":()=>c(()=>import("./MicroService.html-Eu1Fvk3a.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-081d7c76":()=>c(()=>import("./MybatisPlus.html-Eg4cQFvp.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0b37b602":()=>c(()=>import("./mq.html-3xDzIF9t.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-521f5626":()=>c(()=>import("./SQL.html-mx8QuI9z.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-f648540e":()=>c(()=>import("./mysql.html-WUtbJU20.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-f7fb7aca":()=>c(()=>import("./01_ai_concept.html-1dsmjxhQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-06f975a7":()=>c(()=>import("./02_neural_net_train.html-MX0ksQLN.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1aae202e":()=>c(()=>import("./03_pytorch_operation.html-eCRdWA85.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-584324ea":()=>c(()=>import("./04_pytorch_practice_nn.html-k-oRm6yz.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d9c466b0":()=>c(()=>import("./05_linear_nn.html-m_m1sUSe.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-271e5cf6":()=>c(()=>import("./06_heterogeneous_graph.html-QSneYC4l.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-280b4b72":()=>c(()=>import("./redis.html-yVRzIwKo.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1c08519f":()=>c(()=>import("./spring.html-bEwYSqT0.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-fcc6a446":()=>c(()=>import("./IDEA_Keymap.html-BwX_B9Jx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5fdc317f":()=>c(()=>import("./IDEA_Problem_and_plugin.html-KZ9yhaY6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-cdac0a3e":()=>c(()=>import("./Markdown.html-NnT4vcL7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c3bdf33c":()=>c(()=>import("./Maven--java包管理工具.html-iUXq_KBa.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-68b4c8f8":()=>c(()=>import("./Poetry--python包管理工具.html-cSVkQJI7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2b64e284":()=>c(()=>import("./index.html-f_nlM_7J.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-564155e4":()=>c(()=>import("./index.html-hmVVnWmM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-08107cad":()=>c(()=>import("./careers.html-lZsc8QBG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a821f576":()=>c(()=>import("./common.html-wD0nrFN5.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6b0e2128":()=>c(()=>import("./communication.html-Wep2_1e4.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6b49d44a":()=>c(()=>import("./computers.html-CqTRdI3H.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-df36f7a6":()=>c(()=>import("./describing_something.html-RKDWI-W9.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3bba3d80":()=>c(()=>import("./dreams.html-_H4BwmXw.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-849acaf0":()=>c(()=>import("./graduating.html--Xu0kr2M.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-28b506e8":()=>c(()=>import("./greetings.html-un-FGGFO.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4179d052":()=>c(()=>import("./hobbies.html-covrw9Eb.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0f9cca50":()=>c(()=>import("./immigration.html-J06_02fQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-543d335a":()=>c(()=>import("./introducing_someone.html-W1xWLt9_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-bbae0c58":()=>c(()=>import("./phone.html-ubcni0tc.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3e3c9404":()=>c(()=>import("./routine.html-2WRtBwz9.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5ad3f4b6":()=>c(()=>import("./time_and_weather.html-Wkew_s_3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2b6e996a":()=>c(()=>import("./traits.html-WJ6u02eV.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-660b1242":()=>c(()=>import("./0.时空复杂度.html-zS9_aGY6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-8f4323a6":()=>c(()=>import("./1.分治思想_递归实现.html-SsO92Kch.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1ce5ffde":()=>c(()=>import("./2.二进制_位运算.html-KAxvj-kl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-30e253e2":()=>c(()=>import("./3.排序.html-nPIQAGYk.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-52cd1778":()=>c(()=>import("./4.二分查找.html-7TXhYnZi.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7c18e3be":()=>c(()=>import("./5.动态规划_贪心.html-j13r00hr.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7354118a":()=>c(()=>import("./6.字符串.html-Pq1boBTv.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4094a976":()=>c(()=>import("./7.数学.html-zC31Vn42.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-67569e35":()=>c(()=>import("./8.算法技巧.html-5z4lhmS-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9da72a26":()=>c(()=>import("./1.数组.html-2y0DideM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4ecbd87c":()=>c(()=>import("./2.链表.html-vgPJdqBr.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-53ba0e11":()=>c(()=>import("./3.栈.html-cx5vlGVd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-510ee6af":()=>c(()=>import("./4.队列.html-u7zbxP2V.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9a7ab73a":()=>c(()=>import("./5.堆（优先队列）.html-CjbVnLwZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2163f696":()=>c(()=>import("./6.树.html-5dfB_wOH.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-77fd1436":()=>c(()=>import("./7.图.html-s6KIeU__.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6393b21c":()=>c(()=>import("./8.哈希表（散列表）.html-fg74Yfac.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-f2a786dc":()=>c(()=>import("./Java语言基础.html-4C0zJasn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-dfa4da02":()=>c(()=>import("./python算法刷题语法快速恢复.html-KsD6q6S4.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6d0c678c":()=>c(()=>import("./langchain.html-SCmjtC1i.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-fbcadf0c":()=>c(()=>import("./langchain_source_code.html-z5i49H-V.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5bcfad2a":()=>c(()=>import("./llama.html-46p_1T-q.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d0356272":()=>c(()=>import("./llama_advanced.html-USnTZr0M.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ddbde82a":()=>c(()=>import("./llm_summary.html-3pu0Iumg.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7efe3ef0":()=>c(()=>import("./streamlit.html-iUfqazN1.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-538a2646":()=>c(()=>import("./transformer.html-YfxXjngT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9d52c426":()=>c(()=>import("./commen_mistakes.html-M7eJ4pjv.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ff10b136":()=>c(()=>import("./grammar.html-GzMeNNSK.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-67b2b392":()=>c(()=>import("./pronunciation.html-nys6_AQJ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-41ad36be":()=>c(()=>import("./sentence_pattern_and_expression.html-0w5S_cZP.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7b27ee69":()=>c(()=>import("./GraphQL.html-K8k-VuTj.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-de6cc37c":()=>c(()=>import("./算法提升.html-LyNrH5XB.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-44fdf740":()=>c(()=>import("./经典题汇总（每个细分类限定10题以内）.html-Tq4Bc2KD.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-35db20fa":()=>c(()=>import("./CSAPP.html-XCPIQFI_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-393d10f2":()=>c(()=>import("./Netty.html-bpclXHO6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-eb4206e2":()=>c(()=>import("./RPC.html-y40lbZE-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4e7a6e6c":()=>c(()=>import("./操作系统.html-fdoIjk4l.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-21c8383f":()=>c(()=>import("./浏览器技能.html-W0PPfjLT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-75fde7aa":()=>c(()=>import("./网络.html-GW_F2guW.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2c792888":()=>c(()=>import("./计算机技能.html-6Zgk3peN.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e49de3e4":()=>c(()=>import("./Docker.html-2xsom4Hx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-622f149e":()=>c(()=>import("./K8S.html-z4S8aZjF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-370085d6":()=>c(()=>import("./Java8学习笔记.html-0HvzaaFM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0cb3bd10":()=>c(()=>import("./基础.html-5mRc_pjw.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3555b5c0":()=>c(()=>import("./集合.html-lpoX7RRo.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1ca090cd":()=>c(()=>import("./AntDesign.html-GLhtWUuS.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-da44b262":()=>c(()=>import("./CSS.html-RqvSpBln.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5eb4972e":()=>c(()=>import("./Expo.html-2U9L0AQk.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-715d7b8e":()=>c(()=>import("./Frontend.html-FLmPKiKQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-08a3dd35":()=>c(()=>import("./HTML.html-0Osl7Xyl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0b927333":()=>c(()=>import("./JavaScript.html--PP9GZd3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7a271a05":()=>c(()=>import("./Practice.html-MypK6veH.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7c7612da":()=>c(()=>import("./React.html-3PNC5gSD.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3022e6c7":()=>c(()=>import("./npm.html-g8T3v4n-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9874ca08":()=>c(()=>import("./juc.html-t9igWgk1.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-197f6a6a":()=>c(()=>import("./jvm.html-jZ6rgu49.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-72f36506":()=>c(()=>import("./langchain.html-FbfsAYMZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-06df26f4":()=>c(()=>import("./langchain_source_code.html-sSt61vXD.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-733043fc":()=>c(()=>import("./streamlit.html-0-9h9_Ms.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-75c09644":()=>c(()=>import("./linux.html-LLUpYb5c.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-507721e2":()=>c(()=>import("./MicroService.html-LvzmprCY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-05f799b6":()=>c(()=>import("./MybatisPlus.html-yzsNRGWZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d5206da4":()=>c(()=>import("./mq.html-fzF12an6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-03bf6cc8":()=>c(()=>import("./SQL.html-M_3lFyvH.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c03d4a30":()=>c(()=>import("./mysql.html-CRsV9VhB.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-027521cc":()=>c(()=>import("./01_python_environment.html-6W1uTEtk.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ce1d9382":()=>c(()=>import("./02_python_data_type.html-m1bRXT1E.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-11ee8802":()=>c(()=>import("./03_python_operator.html-ZpTatogN.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-21ba52c1":()=>c(()=>import("./04_python_method.html-RoP1I2kq.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-21e47859":()=>c(()=>import("./05_python_builtin_module.html-H8OsYbTz.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ff8cde1c":()=>c(()=>import("./06_python_popular_package.html-D_hwoRQE.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4a75a8ca":()=>c(()=>import("./01_ai_concept.html-sQ3f7eMA.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5d0d3c96":()=>c(()=>import("./02_neural_net_train.html-ANQdT1B0.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5f0e06da":()=>c(()=>import("./03_pytorch_operation.html-YMujwhKY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-894ce788":()=>c(()=>import("./04_pytorch_practice_nn.html-QQ109Ack.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-06c536ce":()=>c(()=>import("./05_linear_nn.html-vHRH7ymp.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-58281f94":()=>c(()=>import("./06_heterogeneous_graph.html-50Tvq9Km.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-fa68fb56":()=>c(()=>import("./AI_evolution.html-nIIsP2zZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-06ffdf36":()=>c(()=>import("./redis.html-oWw-6n8U.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e87f5264":()=>c(()=>import("./spring.html-TTO0HfnC.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c33ef8e8":()=>c(()=>import("./IDEA_Keymap.html-7fe8foul.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-ffcc0ea4":()=>c(()=>import("./IDEA_Problem_and_plugin.html-5HaYpy0K.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-20729b92":()=>c(()=>import("./Markdown.html-Dti27ODp.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-23cd2113":()=>c(()=>import("./Maven--java包管理工具.html-sm8vtnGB.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-00aa36b2":()=>c(()=>import("./Poetry--python包管理工具.html-o75Z5S4W.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0179d9c8":()=>c(()=>import("./careers.html-wndvCINM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-982f3614":()=>c(()=>import("./common.html-VZxkd4Fs.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2a9292ca":()=>c(()=>import("./communication.html-VKgjieMN.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-60308af9":()=>c(()=>import("./computers.html-uuqzx4CL.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3dc01a1e":()=>c(()=>import("./describing_something.html-71-cx6u5.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-43b39d31":()=>c(()=>import("./dreams.html-WLakl2ku.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-65a2b9b9":()=>c(()=>import("./graduating.html-PxYJSPhK.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1d9bbd97":()=>c(()=>import("./greetings.html-v_iv75BJ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-38ac66c1":()=>c(()=>import("./hobbies.html-RsKET4gy.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4e4561c7":()=>c(()=>import("./immigration.html-aiJFYlCn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7a9a637c":()=>c(()=>import("./introducing_someone.html-oHpeH0ZX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-689c6003":()=>c(()=>import("./phone.html-EA6pOD4I.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4fd76726":()=>c(()=>import("./routine.html-AGNwyPdc.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-50022b27":()=>c(()=>import("./time_and_weather.html-ZkldqwIW.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1b7bda08":()=>c(()=>import("./traits.html-ib-62McM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2891a61a":()=>c(()=>import("./0.时空复杂度.html-Gdu29ZGf.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1d06f544":()=>c(()=>import("./1.分治思想_递归实现.html-bcmJJBkA.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7c803182":()=>c(()=>import("./2.二进制_位运算.html-0LoX2s8f.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-573f8404":()=>c(()=>import("./3.排序.html-Y0OqexWj.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-20905e73":()=>c(()=>import("./4.二分查找.html-gpUjlLRM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-070c152f":()=>c(()=>import("./5.动态规划_贪心.html-LgndByTu.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0291b30a":()=>c(()=>import("./6.字符串.html--XSWZuqm.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2d661165":()=>c(()=>import("./7.数学.html-cfRYdk0j.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9d64ef38":()=>c(()=>import("./8.算法技巧.html-_ByXuBHY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-79f9a05e":()=>c(()=>import("./1.数组.html-DxQv-k-i.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-17990ded":()=>c(()=>import("./2.链表.html-mElEk1Ts.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5ba2c580":()=>c(()=>import("./3.栈.html-r1y4beX3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-19dc1c20":()=>c(()=>import("./4.队列.html-XXUl7vDD.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1da5dadc":()=>c(()=>import("./5.堆（优先队列）.html-F9AZHa6R.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-294cae05":()=>c(()=>import("./6.树.html-PJ23LgIs.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-682ba558":()=>c(()=>import("./7.图.html-k0LT50AP.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2480c8cd":()=>c(()=>import("./8.哈希表（散列表）.html-BIuGG6fD.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7b929843":()=>c(()=>import("./Java语言基础.html-_qcAOqyM.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-35a127b0":()=>c(()=>import("./python算法刷题语法快速恢复.html-fTE2-ZdP.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3706649a":()=>c(()=>import("./404.html-_gRo7Dcd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-63554377":()=>c(()=>import("./index.html-UxATL_0T.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-46e16862":()=>c(()=>import("./index.html-9jE6T-th.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-bc4bbbc4":()=>c(()=>import("./index.html-Mv3ej2IF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-635f59ca":()=>c(()=>import("./index.html-3E_dLaKv.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-08a78e0d":()=>c(()=>import("./index.html-8j_WAP1Y.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-76d18eaa":()=>c(()=>import("./index.html-dlPe2fNZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9c50150c":()=>c(()=>import("./index.html-mnSV_NGO.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7c94a508":()=>c(()=>import("./index.html-U3IrTpme.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-09041878":()=>c(()=>import("./index.html--5IhHMug.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6363832c":()=>c(()=>import("./index.html-5tbV6YNe.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-63638823":()=>c(()=>import("./index.html-eI16XtJo.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1b5614f0":()=>c(()=>import("./index.html-Fwwwqp-h.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-152ca16a":()=>c(()=>import("./index.html-pSNxDHD1.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-76d1b3f6":()=>c(()=>import("./index.html-cFsR_u6W.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1dee9b02":()=>c(()=>import("./index.html-YIKC_vUm.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-d418c61e":()=>c(()=>import("./index.html-hZU6eHY7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-25561149":()=>c(()=>import("./index.html-wP5VmFeG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-644641a6":()=>c(()=>import("./index.html-BDKqkhcX.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2951b8e9":()=>c(()=>import("./index.html-ngaA3_6t.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-648510e9":()=>c(()=>import("./index.html-i7O-h4sl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a15e0926":()=>c(()=>import("./index.html-5Ae5IURI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0a474f24":()=>c(()=>import("./index.html-NFmG7FgJ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4232c86a":()=>c(()=>import("./index.html-JqDYFigU.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-083f76e6":()=>c(()=>import("./index.html-kJ320kxl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2e6dfb5a":()=>c(()=>import("./index.html-Gj4wTBQ2.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-08498d39":()=>c(()=>import("./index.html-_vULKGYi.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0103c87e":()=>c(()=>import("./index.html-p9R_Uerc.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c5a89d4a":()=>c(()=>import("./index.html-ha_rbW5Q.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-040f57ab":()=>c(()=>import("./index.html-E7TsYr5e.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-016052e9":()=>c(()=>import("./index.html-zgOFMQWn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1e7c3ef9":()=>c(()=>import("./index.html-k09hdHYQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-084db69b":()=>c(()=>import("./index.html-etb4QXpZ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-084dbb92":()=>c(()=>import("./index.html-qmiL59cH.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c9a39c40":()=>c(()=>import("./index.html-y5ULhrV3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2e81289f":()=>c(()=>import("./index.html-AyQ3qBja.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3c5c9619":()=>c(()=>import("./index.html-PxHodeXV.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c5a852b2":()=>c(()=>import("./index.html-gtehruKl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3119aeb1":()=>c(()=>import("./index.html-8s-pUUqd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-de4e2722":()=>c(()=>import("./index.html-PCaJfeIo.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-eaaefe40":()=>c(()=>import("./index.html-EqHBUaBn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-388124f8":()=>c(()=>import("./index.html-62STyGQ_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2014415e":()=>c(()=>import("./index.html-XqiaoGM3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3c7ccc98":()=>c(()=>import("./index.html-RK2wSSdH.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-7f8a95d8":()=>c(()=>import("./index.html-jaz96byO.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6e1f9c9e":()=>c(()=>import("./index.html-uaE3_maq.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6c12c493":()=>c(()=>import("./index.html-6EUHuj8s.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6962bd19":()=>c(()=>import("./index.html-8pxfmYY_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5bc93818":()=>c(()=>import("./index.html-VOr9nBXB.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-744d024e":()=>c(()=>import("./index.html-lMZf9nw6.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e52c881c":()=>c(()=>import("./index.html-8E67PwBh.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-154dc4c4":()=>c(()=>import("./index.html-qostYW_M.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-01560935":()=>c(()=>import("./index.html-T-uPJpYq.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-65f226fa":()=>c(()=>import("./index.html-VpAiyB26.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-b30c33a0":()=>c(()=>import("./index.html-67j3W8G7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-54d7ff21":()=>c(()=>import("./index.html-bys25b8k.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2c3ee7f5":()=>c(()=>import("./index.html-NSZidhQD.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-27b02be6":()=>c(()=>import("./index.html-sh1juioO.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-494b3a18":()=>c(()=>import("./index.html-JL1gciO0.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4c399930":()=>c(()=>import("./index.html-vsXgMrRQ.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-78cbe7bb":()=>c(()=>import("./index.html-ZDxccGry.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-da453c94":()=>c(()=>import("./index.html-Art2juNF.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-bdd621d8":()=>c(()=>import("./index.html-Kzol0OIK.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-83049d70":()=>c(()=>import("./index.html-WX6DtUUn.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-fbb94a6e":()=>c(()=>import("./index.html-4rWeg-rw.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-04391248":()=>c(()=>import("./index.html-SI0FR4IV.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-8facedaa":()=>c(()=>import("./index.html-SVlXYkho.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-245f5676":()=>c(()=>import("./index.html-m34kEvDY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1340303a":()=>c(()=>import("./index.html-cPUqKudh.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-66c3b96c":()=>c(()=>import("./index.html-m0dv9t6y.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-13d78bea":()=>c(()=>import("./index.html-gikpHa9b.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e6c5fb30":()=>c(()=>import("./index.html-jaXbB8x3.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-677dd0c5":()=>c(()=>import("./index.html-yX1j37_q.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-2cae7d96":()=>c(()=>import("./index.html-DieVdrlA.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-084b0ce7":()=>c(()=>import("./index.html-4ElzRzE8.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4f072b45":()=>c(()=>import("./index.html-9RZW5X7H.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-143a738c":()=>c(()=>import("./index.html-8_YHw5uc.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-23ce7695":()=>c(()=>import("./index.html-EJ97IfYI.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5e25924e":()=>c(()=>import("./index.html-qMHUUTQx.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-55c05ce3":()=>c(()=>import("./index.html-t7TjHgRN.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5d23f08d":()=>c(()=>import("./index.html-8KQ4BxcT.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-fcd998da":()=>c(()=>import("./index.html-90NprSWm.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-5ac057c7":()=>c(()=>import("./index.html-wPAK7YS_.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-689f2654":()=>c(()=>import("./index.html-eDS_as9V.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-e54ce78e":()=>c(()=>import("./index.html-DyUDigOs.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-29324574":()=>c(()=>import("./index.html-KQ4sk8Wi.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-9727c2c8":()=>c(()=>import("./index.html-GNbQUM-f.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-540234fd":()=>c(()=>import("./index.html-dxLqYysi.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-6de8295f":()=>c(()=>import("./index.html--IEIJJE7.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-73698ddf":()=>c(()=>import("./index.html-O6lgEUSh.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-b3ef1536":()=>c(()=>import("./index.html-j3rTu7DG.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-759df492":()=>c(()=>import("./index.html-Wd6-vRx1.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0dc06e12":()=>c(()=>import("./index.html-xr7GbTIc.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-33a6e194":()=>c(()=>import("./index.html-YVQ3Gxv8.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-406d920e":()=>c(()=>import("./index.html-qnPGVL8b.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c06fd3d2":()=>c(()=>import("./index.html-4hq2wOCU.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-250ab807":()=>c(()=>import("./index.html-wF3aIigl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-0efe6156":()=>c(()=>import("./index.html-D6k8_d5P.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-43bc0f34":()=>c(()=>import("./index.html-ihrNzxIN.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-c8f9d786":()=>c(()=>import("./index.html-radn2SSc.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-3ed3fb84":()=>c(()=>import("./index.html-wtuHtd2M.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-72d4d0ca":()=>c(()=>import("./index.html-kMNUEaCd.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4a7540d2":()=>c(()=>import("./index.html-5rEQZ3AV.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-704f043c":()=>c(()=>import("./index.html-Ms3P9Spo.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1c9ed7c2":()=>c(()=>import("./index.html-CDzPUOF4.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-21293978":()=>c(()=>import("./index.html-Ov7Eaedv.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-1a3f3cf6":()=>c(()=>import("./index.html-p6SUSMDY.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-bef6c030":()=>c(()=>import("./index.html-pXNGHoBl.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-4f8c6825":()=>c(()=>import("./index.html-zaVhHhV-.js"),__vite__mapDeps([])).then(({data:e})=>e),"v-a66f4de6":()=>c(()=>import("./index.html-YAiVL-Rv.js"),__vite__mapDeps([])).then(({data:e})=>e)},ed=JSON.parse('{"base":"/blog/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"icon","herf":"/blogger.png"}],["link",{"rel":"icon","href":"/blog/blogger.png"}]],"locales":{"/":{"title":"Liz","description":"Follow your heart","lang":"en-US"},"/zh/":{"title":"莉芝","description":"趁早把生活折腾成你想要的样子","lang":"zh-CN"}}}');var td=([e,t,n])=>e==="meta"&&t.name?`${e}.${t.name}`:["title","base"].includes(e)?e:e==="template"&&t.id?`${e}.${t.id}`:JSON.stringify([e,t,n]),nd=e=>{const t=new Set,n=[];return e.forEach(r=>{const a=td(r);t.has(a)||(t.add(a),n.push(r))}),n},rd=e=>e[0]==="/"?e:`/${e}`,Gl=e=>e[e.length-1]==="/"||e.endsWith(".html")?e:`${e}/`,dn=e=>/^(https?:)?\/\//.test(e),ad=/.md((\?|#).*)?$/,sr=(e,t="/")=>!!(dn(e)||e.startsWith("/")&&!e.startsWith(t)&&!ad.test(e)),Qs=e=>/^[a-z][a-z0-9+.-]*:/.test(e),da=e=>Object.prototype.toString.call(e)==="[object Object]",Ul=e=>e[e.length-1]==="/"?e.slice(0,-1):e,Ys=e=>e[0]==="/"?e.slice(1):e,ld=(e,t)=>{const n=Object.keys(e).sort((r,a)=>{const l=a.split("/").length-r.split("/").length;return l!==0?l:a.length-r.length});for(const r of n)if(t.startsWith(r))return r;return"/"};const Xs={"v-8daa1a0e":f(()=>c(()=>import("./index.html-KP3Nhwvm.js"),__vite__mapDeps([0,1]))),"v-184f4da6":f(()=>c(()=>import("./intro.html-ZAk8GTGA.js"),__vite__mapDeps([2,1]))),"v-1473bf53":f(()=>c(()=>import("./index.html-AvyRNOve.js"),__vite__mapDeps([3,1]))),"v-e1e3da16":f(()=>c(()=>import("./index.html-wQOb7UJg.js"),__vite__mapDeps([4,1]))),"v-2d0ad528":f(()=>c(()=>import("./index.html--ePJ8j1q.js"),__vite__mapDeps([5,1]))),"v-858cfdd6":f(()=>c(()=>import("./intro.html-BqLWcbMS.js"),__vite__mapDeps([6,1]))),"v-05573b46":f(()=>c(()=>import("./langchain.html-ZWehPOnH.js"),__vite__mapDeps([7,1]))),"v-e5984c6a":f(()=>c(()=>import("./langchain_source_code.html-TceCWIOy.js"),__vite__mapDeps([8,1]))),"v-349fb87b":f(()=>c(()=>import("./llama.html-X6uNo2ra.js"),__vite__mapDeps([9,1]))),"v-2f55967c":f(()=>c(()=>import("./llm_summary.html-9VaamIID.js"),__vite__mapDeps([10,1]))),"v-50c8db59":f(()=>c(()=>import("./streamlit.html-rgJth-7G.js"),__vite__mapDeps([11,1]))),"v-1c829e52":f(()=>c(()=>import("./transformer.html-3VIzg4_z.js"),__vite__mapDeps([12,1]))),"v-7b933308":f(()=>c(()=>import("./commen_mistakes.html-MSLAMRwu.js"),__vite__mapDeps([13,1]))),"v-ae572218":f(()=>c(()=>import("./grammar.html-RvLOBsLt.js"),__vite__mapDeps([14,1]))),"v-77a572f4":f(()=>c(()=>import("./pronunciation.html-uihjXDHV.js"),__vite__mapDeps([15,1]))),"v-165c2f30":f(()=>c(()=>import("./sentence_pattern_and_expression.html-npuHnD0T.js"),__vite__mapDeps([16,1]))),"v-512e4fee":f(()=>c(()=>import("./01_python_environment.html-K6Pr2cjA.js"),__vite__mapDeps([17,1]))),"v-53e80eee":f(()=>c(()=>import("./02_python_data_type.html-Tg1AMcbk.js"),__vite__mapDeps([18,1]))),"v-26e6dd20":f(()=>c(()=>import("./03_python_operator.html-Ivd8pJ-I.js"),__vite__mapDeps([19,1]))),"v-1066d072":f(()=>c(()=>import("./04_python_method.html-9w57UYBW.js"),__vite__mapDeps([20,1]))),"v-dbd695ec":f(()=>c(()=>import("./05_python_builtin_module.html-uKTEtJx_.js"),__vite__mapDeps([21,1]))),"v-1610ea61":f(()=>c(()=>import("./06_python_popular_package.html-4E8UMLOD.js"),__vite__mapDeps([22,1]))),"v-6022697a":f(()=>c(()=>import("./GraphQL.html-HDNGRDOT.js"),__vite__mapDeps([23,1]))),"v-3ff02593":f(()=>c(()=>import("./算法提升.html-xjIbGpss.js"),__vite__mapDeps([24,1]))),"v-0b2a4422":f(()=>c(()=>import("./经典题汇总（每个细分类限定10题以内）.html-kLMPnAXy.js"),__vite__mapDeps([25,1]))),"v-155b3612":f(()=>c(()=>import("./CSAPP.html-nrl-NpjF.js"),__vite__mapDeps([26,1]))),"v-6985d781":f(()=>c(()=>import("./Netty.html-d_D4MoBM.js"),__vite__mapDeps([27,1]))),"v-7813ca44":f(()=>c(()=>import("./RPC.html-tPJ7iYJ1.js"),__vite__mapDeps([28,1]))),"v-798c95fd":f(()=>c(()=>import("./操作系统.html-HCtQS7lu.js"),__vite__mapDeps([29,1]))),"v-4e69f864":f(()=>c(()=>import("./浏览器技能.html-wxqxH6R8.js"),__vite__mapDeps([30,1]))),"v-a0eafd0a":f(()=>c(()=>import("./网络.html-sr-va6lw.js"),__vite__mapDeps([31,1]))),"v-be73916a":f(()=>c(()=>import("./计算机技能.html-fkuHdajH.js"),__vite__mapDeps([32,1]))),"v-1df908df":f(()=>c(()=>import("./Docker.html-swJN_-ea.js"),__vite__mapDeps([33,1]))),"v-b93f1926":f(()=>c(()=>import("./K8S.html-pEP50Dts.js"),__vite__mapDeps([34,1]))),"v-be2c9ec8":f(()=>c(()=>import("./AntDesign.html-iF3nuoRS.js"),__vite__mapDeps([35,1]))),"v-4d328dde":f(()=>c(()=>import("./CSS.html-GQdjrEsD.js"),__vite__mapDeps([36,1]))),"v-2206dc02":f(()=>c(()=>import("./Expo.html-Qy_xBjnq.js"),__vite__mapDeps([37,1]))),"v-5499a5df":f(()=>c(()=>import("./Frontend.html-mS4Y4o1w.js"),__vite__mapDeps([38,1]))),"v-ce284ff4":f(()=>c(()=>import("./HTML.html-NPta3FF8.js"),__vite__mapDeps([39,1]))),"v-106d4d44":f(()=>c(()=>import("./JavaScript.html-YFce6KAG.js"),__vite__mapDeps([40,1]))),"v-5d634456":f(()=>c(()=>import("./Practice.html-xwPK6OEI.js"),__vite__mapDeps([41,1]))),"v-3a7c55e2":f(()=>c(()=>import("./React.html-KYLOblY-.js"),__vite__mapDeps([42,1]))),"v-2b106454":f(()=>c(()=>import("./npm.html-uxGzmTbA.js"),__vite__mapDeps([43,1]))),"v-b4e3bf38":f(()=>c(()=>import("./Java8学习笔记.html-0ZMGNWh9.js"),__vite__mapDeps([44,1]))),"v-02738b09":f(()=>c(()=>import("./基础.html-Kv2Vui69.js"),__vite__mapDeps([45,1]))),"v-3e231f51":f(()=>c(()=>import("./集合.html-Ii57ZSDu.js"),__vite__mapDeps([46,1]))),"v-a5db72e6":f(()=>c(()=>import("./juc.html-uoA6MJWg.js"),__vite__mapDeps([47,1]))),"v-12cc15fb":f(()=>c(()=>import("./jvm.html-4l8WCoF3.js"),__vite__mapDeps([48,1]))),"v-5abb1155":f(()=>c(()=>import("./linux.html-4dY6LuxG.js"),__vite__mapDeps([49,1]))),"v-2fd44fde":f(()=>c(()=>import("./MicroService.html-bWu-TV2p.js"),__vite__mapDeps([50,1]))),"v-081d7c76":f(()=>c(()=>import("./MybatisPlus.html-KKJQzrIf.js"),__vite__mapDeps([51,1]))),"v-0b37b602":f(()=>c(()=>import("./mq.html-75UZwoSF.js"),__vite__mapDeps([52,1]))),"v-521f5626":f(()=>c(()=>import("./SQL.html-Tbeuu3Fy.js"),__vite__mapDeps([53,1]))),"v-f648540e":f(()=>c(()=>import("./mysql.html-S5sF__rc.js"),__vite__mapDeps([54,1]))),"v-f7fb7aca":f(()=>c(()=>import("./01_ai_concept.html-RRctnSLc.js"),__vite__mapDeps([55,1]))),"v-06f975a7":f(()=>c(()=>import("./02_neural_net_train.html-Fd76CqEM.js"),__vite__mapDeps([56,1]))),"v-1aae202e":f(()=>c(()=>import("./03_pytorch_operation.html-lhtuyV94.js"),__vite__mapDeps([57,1]))),"v-584324ea":f(()=>c(()=>import("./04_pytorch_practice_nn.html-G7xOCb7e.js"),__vite__mapDeps([58,1]))),"v-d9c466b0":f(()=>c(()=>import("./05_linear_nn.html-jopNBTck.js"),__vite__mapDeps([59,1]))),"v-271e5cf6":f(()=>c(()=>import("./06_heterogeneous_graph.html-Q-X4LMoJ.js"),__vite__mapDeps([60,1]))),"v-280b4b72":f(()=>c(()=>import("./redis.html-Ae4nZ3Ek.js"),__vite__mapDeps([61,1]))),"v-1c08519f":f(()=>c(()=>import("./spring.html-EplXiXIb.js"),__vite__mapDeps([62,1]))),"v-fcc6a446":f(()=>c(()=>import("./IDEA_Keymap.html-__2uzry1.js"),__vite__mapDeps([63,1]))),"v-5fdc317f":f(()=>c(()=>import("./IDEA_Problem_and_plugin.html-eZoaW5FP.js"),__vite__mapDeps([64,1]))),"v-cdac0a3e":f(()=>c(()=>import("./Markdown.html-5niWgdwD.js"),__vite__mapDeps([65,1]))),"v-c3bdf33c":f(()=>c(()=>import("./Maven--java包管理工具.html-rCLacUt-.js"),__vite__mapDeps([66,1]))),"v-68b4c8f8":f(()=>c(()=>import("./Poetry--python包管理工具.html-_IZGO8y2.js"),__vite__mapDeps([67,1]))),"v-2b64e284":f(()=>c(()=>import("./index.html-WvZq75b-.js"),__vite__mapDeps([68,1]))),"v-564155e4":f(()=>c(()=>import("./index.html-UGt1UrQW.js"),__vite__mapDeps([69,1]))),"v-08107cad":f(()=>c(()=>import("./careers.html-bNc7bZTH.js"),__vite__mapDeps([70,1]))),"v-a821f576":f(()=>c(()=>import("./common.html-o9A9EUoI.js"),__vite__mapDeps([71,1]))),"v-6b0e2128":f(()=>c(()=>import("./communication.html-Irq_EMFH.js"),__vite__mapDeps([72,1]))),"v-6b49d44a":f(()=>c(()=>import("./computers.html-8ak2wIfu.js"),__vite__mapDeps([73,1]))),"v-df36f7a6":f(()=>c(()=>import("./describing_something.html-W5IZV2KJ.js"),__vite__mapDeps([74,1]))),"v-3bba3d80":f(()=>c(()=>import("./dreams.html-IiBIY7x9.js"),__vite__mapDeps([75,1]))),"v-849acaf0":f(()=>c(()=>import("./graduating.html-KEJ2PNXf.js"),__vite__mapDeps([76,1]))),"v-28b506e8":f(()=>c(()=>import("./greetings.html-wgTU00do.js"),__vite__mapDeps([77,1]))),"v-4179d052":f(()=>c(()=>import("./hobbies.html-UWQCGpnR.js"),__vite__mapDeps([78,1]))),"v-0f9cca50":f(()=>c(()=>import("./immigration.html-Vl0ZWbXm.js"),__vite__mapDeps([79,1]))),"v-543d335a":f(()=>c(()=>import("./introducing_someone.html-zx_5RWdi.js"),__vite__mapDeps([80,1]))),"v-bbae0c58":f(()=>c(()=>import("./phone.html-jIxOcQ8n.js"),__vite__mapDeps([81,1]))),"v-3e3c9404":f(()=>c(()=>import("./routine.html-ehVtSfuj.js"),__vite__mapDeps([82,1]))),"v-5ad3f4b6":f(()=>c(()=>import("./time_and_weather.html-BazI0HtA.js"),__vite__mapDeps([83,1]))),"v-2b6e996a":f(()=>c(()=>import("./traits.html--qr6cvwo.js"),__vite__mapDeps([84,1]))),"v-660b1242":f(()=>c(()=>import("./0.时空复杂度.html-bBB0KoI6.js"),__vite__mapDeps([85,1]))),"v-8f4323a6":f(()=>c(()=>import("./1.分治思想_递归实现.html-1gFg7UeK.js"),__vite__mapDeps([86,1]))),"v-1ce5ffde":f(()=>c(()=>import("./2.二进制_位运算.html-C6bKKwXg.js"),__vite__mapDeps([87,1]))),"v-30e253e2":f(()=>c(()=>import("./3.排序.html-P5cgymzC.js"),__vite__mapDeps([88,1]))),"v-52cd1778":f(()=>c(()=>import("./4.二分查找.html-Hnca59Xx.js"),__vite__mapDeps([89,1]))),"v-7c18e3be":f(()=>c(()=>import("./5.动态规划_贪心.html-mDlRtByl.js"),__vite__mapDeps([90,1]))),"v-7354118a":f(()=>c(()=>import("./6.字符串.html-spc1ttj7.js"),__vite__mapDeps([91,1]))),"v-4094a976":f(()=>c(()=>import("./7.数学.html-Ffu-vV_a.js"),__vite__mapDeps([92,1]))),"v-67569e35":f(()=>c(()=>import("./8.算法技巧.html-J8cIbRW0.js"),__vite__mapDeps([93,1]))),"v-9da72a26":f(()=>c(()=>import("./1.数组.html-ItwuScgA.js"),__vite__mapDeps([94,1]))),"v-4ecbd87c":f(()=>c(()=>import("./2.链表.html-I5R2ycd-.js"),__vite__mapDeps([95,1]))),"v-53ba0e11":f(()=>c(()=>import("./3.栈.html-F4pnJRF4.js"),__vite__mapDeps([96,1]))),"v-510ee6af":f(()=>c(()=>import("./4.队列.html--_rpWBec.js"),__vite__mapDeps([97,1]))),"v-9a7ab73a":f(()=>c(()=>import("./5.堆（优先队列）.html-tWfVJmcH.js"),__vite__mapDeps([98,1]))),"v-2163f696":f(()=>c(()=>import("./6.树.html-lDB9HNfl.js"),__vite__mapDeps([99,1]))),"v-77fd1436":f(()=>c(()=>import("./7.图.html-PuR6bgah.js"),__vite__mapDeps([100,1]))),"v-6393b21c":f(()=>c(()=>import("./8.哈希表（散列表）.html-M4tUFlyS.js"),__vite__mapDeps([101,1]))),"v-f2a786dc":f(()=>c(()=>import("./Java语言基础.html-6bww4M-X.js"),__vite__mapDeps([102,1]))),"v-dfa4da02":f(()=>c(()=>import("./python算法刷题语法快速恢复.html-sI8mS6ok.js"),__vite__mapDeps([103,1]))),"v-6d0c678c":f(()=>c(()=>import("./langchain.html-iCb9V2JS.js"),__vite__mapDeps([104,1]))),"v-fbcadf0c":f(()=>c(()=>import("./langchain_source_code.html-opNDH4tv.js"),__vite__mapDeps([105,1]))),"v-5bcfad2a":f(()=>c(()=>import("./llama.html-zvbnKkom.js"),__vite__mapDeps([106,1]))),"v-d0356272":f(()=>c(()=>import("./llama_advanced.html-KFjF5i6Z.js"),__vite__mapDeps([107,1]))),"v-ddbde82a":f(()=>c(()=>import("./llm_summary.html-oB0oG5Te.js"),__vite__mapDeps([108,1]))),"v-7efe3ef0":f(()=>c(()=>import("./streamlit.html-DtBAbcup.js"),__vite__mapDeps([109,1]))),"v-538a2646":f(()=>c(()=>import("./transformer.html-pQMLBpSl.js"),__vite__mapDeps([110,1]))),"v-9d52c426":f(()=>c(()=>import("./commen_mistakes.html-8IF3Ipvm.js"),__vite__mapDeps([111,1]))),"v-ff10b136":f(()=>c(()=>import("./grammar.html-iM7hsYBy.js"),__vite__mapDeps([112,1]))),"v-67b2b392":f(()=>c(()=>import("./pronunciation.html-wAVvvr2R.js"),__vite__mapDeps([113,1]))),"v-41ad36be":f(()=>c(()=>import("./sentence_pattern_and_expression.html-RLVJ3msA.js"),__vite__mapDeps([114,1]))),"v-7b27ee69":f(()=>c(()=>import("./GraphQL.html-3Y6-lPGt.js"),__vite__mapDeps([115,1]))),"v-de6cc37c":f(()=>c(()=>import("./算法提升.html-qt-Fqxoi.js"),__vite__mapDeps([116,1]))),"v-44fdf740":f(()=>c(()=>import("./经典题汇总（每个细分类限定10题以内）.html-_a9yoU5w.js"),__vite__mapDeps([117,1]))),"v-35db20fa":f(()=>c(()=>import("./CSAPP.html-NSXogoid.js"),__vite__mapDeps([118,1]))),"v-393d10f2":f(()=>c(()=>import("./Netty.html-TJdA23cu.js"),__vite__mapDeps([119,1]))),"v-eb4206e2":f(()=>c(()=>import("./RPC.html-yA6R_PN0.js"),__vite__mapDeps([120,1]))),"v-4e7a6e6c":f(()=>c(()=>import("./操作系统.html-BoovfzHh.js"),__vite__mapDeps([121,1]))),"v-21c8383f":f(()=>c(()=>import("./浏览器技能.html-3WHHyW_e.js"),__vite__mapDeps([122,1]))),"v-75fde7aa":f(()=>c(()=>import("./网络.html-CV3E7NCR.js"),__vite__mapDeps([123,1]))),"v-2c792888":f(()=>c(()=>import("./计算机技能.html-tsSKrt-G.js"),__vite__mapDeps([124,1]))),"v-e49de3e4":f(()=>c(()=>import("./Docker.html-w0DhF4Ot.js"),__vite__mapDeps([125,1]))),"v-622f149e":f(()=>c(()=>import("./K8S.html-cAxRpRvb.js"),__vite__mapDeps([126,1]))),"v-370085d6":f(()=>c(()=>import("./Java8学习笔记.html-VLJ9RROP.js"),__vite__mapDeps([127,1]))),"v-0cb3bd10":f(()=>c(()=>import("./基础.html-YzsVYCHe.js"),__vite__mapDeps([128,1]))),"v-3555b5c0":f(()=>c(()=>import("./集合.html-sLVuFHOf.js"),__vite__mapDeps([129,1]))),"v-1ca090cd":f(()=>c(()=>import("./AntDesign.html-DAaPDWwm.js"),__vite__mapDeps([130,1]))),"v-da44b262":f(()=>c(()=>import("./CSS.html-pYJZ7pMv.js"),__vite__mapDeps([131,1]))),"v-5eb4972e":f(()=>c(()=>import("./Expo.html-7gW71gi4.js"),__vite__mapDeps([132,1]))),"v-715d7b8e":f(()=>c(()=>import("./Frontend.html-odsakoEC.js"),__vite__mapDeps([133,1]))),"v-08a3dd35":f(()=>c(()=>import("./HTML.html-SgmJHRd8.js"),__vite__mapDeps([134,1]))),"v-0b927333":f(()=>c(()=>import("./JavaScript.html-kw11PEWu.js"),__vite__mapDeps([135,1]))),"v-7a271a05":f(()=>c(()=>import("./Practice.html-wHFT7AxT.js"),__vite__mapDeps([136,1]))),"v-7c7612da":f(()=>c(()=>import("./React.html-x4ZSPH1q.js"),__vite__mapDeps([137,1]))),"v-3022e6c7":f(()=>c(()=>import("./npm.html-_UNYSiiZ.js"),__vite__mapDeps([138,1]))),"v-9874ca08":f(()=>c(()=>import("./juc.html-lndZzNUQ.js"),__vite__mapDeps([139,1]))),"v-197f6a6a":f(()=>c(()=>import("./jvm.html-cCrvyYF1.js"),__vite__mapDeps([140,1]))),"v-72f36506":f(()=>c(()=>import("./langchain.html-J1l_CBZU.js"),__vite__mapDeps([141,1]))),"v-06df26f4":f(()=>c(()=>import("./langchain_source_code.html-vKmMRsDj.js"),__vite__mapDeps([142,1]))),"v-733043fc":f(()=>c(()=>import("./streamlit.html-G2auisuq.js"),__vite__mapDeps([143,1]))),"v-75c09644":f(()=>c(()=>import("./linux.html-zo0yqRFD.js"),__vite__mapDeps([144,1]))),"v-507721e2":f(()=>c(()=>import("./MicroService.html-apZ28wAy.js"),__vite__mapDeps([145,1]))),"v-05f799b6":f(()=>c(()=>import("./MybatisPlus.html-Kzq0ljyO.js"),__vite__mapDeps([146,1]))),"v-d5206da4":f(()=>c(()=>import("./mq.html-OZ0xAZXN.js"),__vite__mapDeps([147,1]))),"v-03bf6cc8":f(()=>c(()=>import("./SQL.html-G9STxyV0.js"),__vite__mapDeps([148,1]))),"v-c03d4a30":f(()=>c(()=>import("./mysql.html-3RhophA0.js"),__vite__mapDeps([149,1]))),"v-027521cc":f(()=>c(()=>import("./01_python_environment.html-vKkN4YFF.js"),__vite__mapDeps([150,1]))),"v-ce1d9382":f(()=>c(()=>import("./02_python_data_type.html-vfjKkymO.js"),__vite__mapDeps([151,1]))),"v-11ee8802":f(()=>c(()=>import("./03_python_operator.html-Ql2moYSw.js"),__vite__mapDeps([152,1]))),"v-21ba52c1":f(()=>c(()=>import("./04_python_method.html-ldCD9bTH.js"),__vite__mapDeps([153,1]))),"v-21e47859":f(()=>c(()=>import("./05_python_builtin_module.html-gyXt34Fd.js"),__vite__mapDeps([154,1]))),"v-ff8cde1c":f(()=>c(()=>import("./06_python_popular_package.html-qqpAcEe0.js"),__vite__mapDeps([155,1]))),"v-4a75a8ca":f(()=>c(()=>import("./01_ai_concept.html-fgbncfGK.js"),__vite__mapDeps([156,1]))),"v-5d0d3c96":f(()=>c(()=>import("./02_neural_net_train.html-sXNuLe3j.js"),__vite__mapDeps([157,1]))),"v-5f0e06da":f(()=>c(()=>import("./03_pytorch_operation.html-YpSKRs6B.js"),__vite__mapDeps([158,1]))),"v-894ce788":f(()=>c(()=>import("./04_pytorch_practice_nn.html-Fowb8vx-.js"),__vite__mapDeps([159,1]))),"v-06c536ce":f(()=>c(()=>import("./05_linear_nn.html-vaWMswje.js"),__vite__mapDeps([160,1]))),"v-58281f94":f(()=>c(()=>import("./06_heterogeneous_graph.html-vq9OwT5Z.js"),__vite__mapDeps([161,1]))),"v-fa68fb56":f(()=>c(()=>import("./AI_evolution.html-R6uIuqKW.js"),__vite__mapDeps([162,1]))),"v-06ffdf36":f(()=>c(()=>import("./redis.html-l5hLyy-c.js"),__vite__mapDeps([163,1]))),"v-e87f5264":f(()=>c(()=>import("./spring.html-4Q7A3eUG.js"),__vite__mapDeps([164,1]))),"v-c33ef8e8":f(()=>c(()=>import("./IDEA_Keymap.html-nz-0YGCa.js"),__vite__mapDeps([165,1]))),"v-ffcc0ea4":f(()=>c(()=>import("./IDEA_Problem_and_plugin.html-p62DFOCX.js"),__vite__mapDeps([166,1]))),"v-20729b92":f(()=>c(()=>import("./Markdown.html-HK9M6btB.js"),__vite__mapDeps([167,1]))),"v-23cd2113":f(()=>c(()=>import("./Maven--java包管理工具.html-WNzF86-7.js"),__vite__mapDeps([168,1]))),"v-00aa36b2":f(()=>c(()=>import("./Poetry--python包管理工具.html-TpUmw-OB.js"),__vite__mapDeps([169,1]))),"v-0179d9c8":f(()=>c(()=>import("./careers.html-rKRNtK0N.js"),__vite__mapDeps([170,1]))),"v-982f3614":f(()=>c(()=>import("./common.html-5wRR3Wk-.js"),__vite__mapDeps([171,1]))),"v-2a9292ca":f(()=>c(()=>import("./communication.html-Cwd1VTDo.js"),__vite__mapDeps([172,1]))),"v-60308af9":f(()=>c(()=>import("./computers.html-Xj4o4vfH.js"),__vite__mapDeps([173,1]))),"v-3dc01a1e":f(()=>c(()=>import("./describing_something.html-O9sPIZYS.js"),__vite__mapDeps([174,1]))),"v-43b39d31":f(()=>c(()=>import("./dreams.html-AggOsb--.js"),__vite__mapDeps([175,1]))),"v-65a2b9b9":f(()=>c(()=>import("./graduating.html-AZZVqwyn.js"),__vite__mapDeps([176,1]))),"v-1d9bbd97":f(()=>c(()=>import("./greetings.html-zZf8m_By.js"),__vite__mapDeps([177,1]))),"v-38ac66c1":f(()=>c(()=>import("./hobbies.html-IkZLAkBS.js"),__vite__mapDeps([178,1]))),"v-4e4561c7":f(()=>c(()=>import("./immigration.html-BjFXuVI5.js"),__vite__mapDeps([179,1]))),"v-7a9a637c":f(()=>c(()=>import("./introducing_someone.html-9zM5Sv_e.js"),__vite__mapDeps([180,1]))),"v-689c6003":f(()=>c(()=>import("./phone.html-hcQ6c6d3.js"),__vite__mapDeps([181,1]))),"v-4fd76726":f(()=>c(()=>import("./routine.html-wR88D0Ah.js"),__vite__mapDeps([182,1]))),"v-50022b27":f(()=>c(()=>import("./time_and_weather.html-cdhyEQU4.js"),__vite__mapDeps([183,1]))),"v-1b7bda08":f(()=>c(()=>import("./traits.html-ldp1L4cg.js"),__vite__mapDeps([184,1]))),"v-2891a61a":f(()=>c(()=>import("./0.时空复杂度.html-VgOfmdce.js"),__vite__mapDeps([185,1]))),"v-1d06f544":f(()=>c(()=>import("./1.分治思想_递归实现.html-xrNFxD3i.js"),__vite__mapDeps([186,1]))),"v-7c803182":f(()=>c(()=>import("./2.二进制_位运算.html-c7ZhThQc.js"),__vite__mapDeps([187,1]))),"v-573f8404":f(()=>c(()=>import("./3.排序.html-2609tx3z.js"),__vite__mapDeps([188,1]))),"v-20905e73":f(()=>c(()=>import("./4.二分查找.html-sxq3H8Qm.js"),__vite__mapDeps([189,1]))),"v-070c152f":f(()=>c(()=>import("./5.动态规划_贪心.html-JEfnZn9H.js"),__vite__mapDeps([190,1]))),"v-0291b30a":f(()=>c(()=>import("./6.字符串.html-9laxOOFS.js"),__vite__mapDeps([191,1]))),"v-2d661165":f(()=>c(()=>import("./7.数学.html-R1lMXiJD.js"),__vite__mapDeps([192,1]))),"v-9d64ef38":f(()=>c(()=>import("./8.算法技巧.html-c2Fgzh2q.js"),__vite__mapDeps([193,1]))),"v-79f9a05e":f(()=>c(()=>import("./1.数组.html-2kXDJvUO.js"),__vite__mapDeps([194,1]))),"v-17990ded":f(()=>c(()=>import("./2.链表.html-fcDwZEVJ.js"),__vite__mapDeps([195,1]))),"v-5ba2c580":f(()=>c(()=>import("./3.栈.html-RdhRGDzT.js"),__vite__mapDeps([196,1]))),"v-19dc1c20":f(()=>c(()=>import("./4.队列.html-POG1LizY.js"),__vite__mapDeps([197,1]))),"v-1da5dadc":f(()=>c(()=>import("./5.堆（优先队列）.html-mrn_Cs4Y.js"),__vite__mapDeps([198,1]))),"v-294cae05":f(()=>c(()=>import("./6.树.html-3eBJUXFu.js"),__vite__mapDeps([199,1]))),"v-682ba558":f(()=>c(()=>import("./7.图.html-jUz63SfW.js"),__vite__mapDeps([200,1]))),"v-2480c8cd":f(()=>c(()=>import("./8.哈希表（散列表）.html-CHR98Exf.js"),__vite__mapDeps([201,1]))),"v-7b929843":f(()=>c(()=>import("./Java语言基础.html-h6kTvliv.js"),__vite__mapDeps([202,1]))),"v-35a127b0":f(()=>c(()=>import("./python算法刷题语法快速恢复.html-t6X3EaML.js"),__vite__mapDeps([203,1]))),"v-3706649a":f(()=>c(()=>import("./404.html-rOHXGR4I.js"),__vite__mapDeps([204,1]))),"v-63554377":f(()=>c(()=>import("./index.html-qcii__N9.js"),__vite__mapDeps([205,1]))),"v-46e16862":f(()=>c(()=>import("./index.html-LZtuyW6a.js"),__vite__mapDeps([206,1]))),"v-bc4bbbc4":f(()=>c(()=>import("./index.html-tv5K203c.js"),__vite__mapDeps([207,1]))),"v-635f59ca":f(()=>c(()=>import("./index.html-d5SOKgjM.js"),__vite__mapDeps([208,1]))),"v-08a78e0d":f(()=>c(()=>import("./index.html-IKlMoWMr.js"),__vite__mapDeps([209,1]))),"v-76d18eaa":f(()=>c(()=>import("./index.html-iTgmscjZ.js"),__vite__mapDeps([210,1]))),"v-9c50150c":f(()=>c(()=>import("./index.html-Ty6Ho1L0.js"),__vite__mapDeps([211,1]))),"v-7c94a508":f(()=>c(()=>import("./index.html-RD4v8IRN.js"),__vite__mapDeps([212,1]))),"v-09041878":f(()=>c(()=>import("./index.html-0H75k_fd.js"),__vite__mapDeps([213,1]))),"v-6363832c":f(()=>c(()=>import("./index.html-XgiV2ub-.js"),__vite__mapDeps([214,1]))),"v-63638823":f(()=>c(()=>import("./index.html-CIqPG6m8.js"),__vite__mapDeps([215,1]))),"v-1b5614f0":f(()=>c(()=>import("./index.html-TRzr-eeP.js"),__vite__mapDeps([216,1]))),"v-152ca16a":f(()=>c(()=>import("./index.html-tBiqxUGU.js"),__vite__mapDeps([217,1]))),"v-76d1b3f6":f(()=>c(()=>import("./index.html-YWb2EiDn.js"),__vite__mapDeps([218,1]))),"v-1dee9b02":f(()=>c(()=>import("./index.html-CGx_uKxa.js"),__vite__mapDeps([219,1]))),"v-d418c61e":f(()=>c(()=>import("./index.html-NWN9cvvi.js"),__vite__mapDeps([220,1]))),"v-25561149":f(()=>c(()=>import("./index.html-pdZbtG7R.js"),__vite__mapDeps([221,1]))),"v-644641a6":f(()=>c(()=>import("./index.html-8E50WBdG.js"),__vite__mapDeps([222,1]))),"v-2951b8e9":f(()=>c(()=>import("./index.html-iiC8pvUo.js"),__vite__mapDeps([223,1]))),"v-648510e9":f(()=>c(()=>import("./index.html-3arpiOSa.js"),__vite__mapDeps([224,1]))),"v-a15e0926":f(()=>c(()=>import("./index.html-uyyxzKYy.js"),__vite__mapDeps([225,1]))),"v-0a474f24":f(()=>c(()=>import("./index.html-9rWS1rqO.js"),__vite__mapDeps([226,1]))),"v-4232c86a":f(()=>c(()=>import("./index.html-yUfHSbv6.js"),__vite__mapDeps([227,1]))),"v-083f76e6":f(()=>c(()=>import("./index.html-1xwGOBOt.js"),__vite__mapDeps([228,1]))),"v-2e6dfb5a":f(()=>c(()=>import("./index.html-k2z9ROWI.js"),__vite__mapDeps([229,1]))),"v-08498d39":f(()=>c(()=>import("./index.html-ahLmlEYY.js"),__vite__mapDeps([230,1]))),"v-0103c87e":f(()=>c(()=>import("./index.html-1K3OgKhC.js"),__vite__mapDeps([231,1]))),"v-c5a89d4a":f(()=>c(()=>import("./index.html-jvbG1TyM.js"),__vite__mapDeps([232,1]))),"v-040f57ab":f(()=>c(()=>import("./index.html-90Ry0M9n.js"),__vite__mapDeps([233,1]))),"v-016052e9":f(()=>c(()=>import("./index.html-coXrALJp.js"),__vite__mapDeps([234,1]))),"v-1e7c3ef9":f(()=>c(()=>import("./index.html-RwtvECtJ.js"),__vite__mapDeps([235,1]))),"v-084db69b":f(()=>c(()=>import("./index.html-aVkn1tL5.js"),__vite__mapDeps([236,1]))),"v-084dbb92":f(()=>c(()=>import("./index.html-t5MWxJBG.js"),__vite__mapDeps([237,1]))),"v-c9a39c40":f(()=>c(()=>import("./index.html-WWRz_DTN.js"),__vite__mapDeps([238,1]))),"v-2e81289f":f(()=>c(()=>import("./index.html-eDIGCcVA.js"),__vite__mapDeps([239,1]))),"v-3c5c9619":f(()=>c(()=>import("./index.html-geWhGMX1.js"),__vite__mapDeps([240,1]))),"v-c5a852b2":f(()=>c(()=>import("./index.html-qsCsL7Ru.js"),__vite__mapDeps([241,1]))),"v-3119aeb1":f(()=>c(()=>import("./index.html-dKOmoJYf.js"),__vite__mapDeps([242,1]))),"v-de4e2722":f(()=>c(()=>import("./index.html-f3L9w_5o.js"),__vite__mapDeps([243,1]))),"v-eaaefe40":f(()=>c(()=>import("./index.html-MQki_pDu.js"),__vite__mapDeps([244,1]))),"v-388124f8":f(()=>c(()=>import("./index.html-9ONyJcLq.js"),__vite__mapDeps([245,1]))),"v-2014415e":f(()=>c(()=>import("./index.html-zxtM_2wi.js"),__vite__mapDeps([246,1]))),"v-3c7ccc98":f(()=>c(()=>import("./index.html-PFnVWAPy.js"),__vite__mapDeps([247,1]))),"v-7f8a95d8":f(()=>c(()=>import("./index.html-1whSkpAE.js"),__vite__mapDeps([248,1]))),"v-6e1f9c9e":f(()=>c(()=>import("./index.html-kLR5Kihg.js"),__vite__mapDeps([249,1]))),"v-6c12c493":f(()=>c(()=>import("./index.html-pQRr4ltI.js"),__vite__mapDeps([250,1]))),"v-6962bd19":f(()=>c(()=>import("./index.html-LqUFt9tW.js"),__vite__mapDeps([251,1]))),"v-5bc93818":f(()=>c(()=>import("./index.html-pYvek_4C.js"),__vite__mapDeps([252,1]))),"v-744d024e":f(()=>c(()=>import("./index.html-IJsrrOdK.js"),__vite__mapDeps([253,1]))),"v-e52c881c":f(()=>c(()=>import("./index.html-Xrs1GPOW.js"),__vite__mapDeps([254,1]))),"v-154dc4c4":f(()=>c(()=>import("./index.html-FwkXUxYF.js"),__vite__mapDeps([255,1]))),"v-01560935":f(()=>c(()=>import("./index.html-Iow68ZSV.js"),__vite__mapDeps([256,1]))),"v-65f226fa":f(()=>c(()=>import("./index.html-v-LpSGYd.js"),__vite__mapDeps([257,1]))),"v-b30c33a0":f(()=>c(()=>import("./index.html-HIvHzwqi.js"),__vite__mapDeps([258,1]))),"v-54d7ff21":f(()=>c(()=>import("./index.html-uBvxBxPQ.js"),__vite__mapDeps([259,1]))),"v-2c3ee7f5":f(()=>c(()=>import("./index.html-QQ1EbEmm.js"),__vite__mapDeps([260,1]))),"v-27b02be6":f(()=>c(()=>import("./index.html-yXATMGYL.js"),__vite__mapDeps([261,1]))),"v-494b3a18":f(()=>c(()=>import("./index.html-ThY2wMQV.js"),__vite__mapDeps([262,1]))),"v-4c399930":f(()=>c(()=>import("./index.html-7MZ4tZkP.js"),__vite__mapDeps([263,1]))),"v-78cbe7bb":f(()=>c(()=>import("./index.html-1ag-M5EN.js"),__vite__mapDeps([264,1]))),"v-da453c94":f(()=>c(()=>import("./index.html-aSFdZYie.js"),__vite__mapDeps([265,1]))),"v-bdd621d8":f(()=>c(()=>import("./index.html-EvsFgWLR.js"),__vite__mapDeps([266,1]))),"v-83049d70":f(()=>c(()=>import("./index.html-0-v-HEqL.js"),__vite__mapDeps([267,1]))),"v-fbb94a6e":f(()=>c(()=>import("./index.html-0A0lQn7t.js"),__vite__mapDeps([268,1]))),"v-04391248":f(()=>c(()=>import("./index.html-GpbQvslw.js"),__vite__mapDeps([269,1]))),"v-8facedaa":f(()=>c(()=>import("./index.html-C5dqdPp6.js"),__vite__mapDeps([270,1]))),"v-245f5676":f(()=>c(()=>import("./index.html-e82O_aRW.js"),__vite__mapDeps([271,1]))),"v-1340303a":f(()=>c(()=>import("./index.html-1AvS51wa.js"),__vite__mapDeps([272,1]))),"v-66c3b96c":f(()=>c(()=>import("./index.html-3-2ognqK.js"),__vite__mapDeps([273,1]))),"v-13d78bea":f(()=>c(()=>import("./index.html-0TIvNDdB.js"),__vite__mapDeps([274,1]))),"v-e6c5fb30":f(()=>c(()=>import("./index.html-v8UjiB92.js"),__vite__mapDeps([275,1]))),"v-677dd0c5":f(()=>c(()=>import("./index.html-wLOj1NXM.js"),__vite__mapDeps([276,1]))),"v-2cae7d96":f(()=>c(()=>import("./index.html-Wjtrd9UJ.js"),__vite__mapDeps([277,1]))),"v-084b0ce7":f(()=>c(()=>import("./index.html-5cwjHXKU.js"),__vite__mapDeps([278,1]))),"v-4f072b45":f(()=>c(()=>import("./index.html-nt8SrnsG.js"),__vite__mapDeps([279,1]))),"v-143a738c":f(()=>c(()=>import("./index.html--Y4_gCLh.js"),__vite__mapDeps([280,1]))),"v-23ce7695":f(()=>c(()=>import("./index.html-1kvrqnuQ.js"),__vite__mapDeps([281,1]))),"v-5e25924e":f(()=>c(()=>import("./index.html-gGuimI4B.js"),__vite__mapDeps([282,1]))),"v-55c05ce3":f(()=>c(()=>import("./index.html-QF-Cbjp8.js"),__vite__mapDeps([283,1]))),"v-5d23f08d":f(()=>c(()=>import("./index.html-iTlOj6IJ.js"),__vite__mapDeps([284,1]))),"v-fcd998da":f(()=>c(()=>import("./index.html-F4YTA8xp.js"),__vite__mapDeps([285,1]))),"v-5ac057c7":f(()=>c(()=>import("./index.html-gJLEKdow.js"),__vite__mapDeps([286,1]))),"v-689f2654":f(()=>c(()=>import("./index.html-zIzGvvFW.js"),__vite__mapDeps([287,1]))),"v-e54ce78e":f(()=>c(()=>import("./index.html-w_pn0tK1.js"),__vite__mapDeps([288,1]))),"v-29324574":f(()=>c(()=>import("./index.html-6BE4kWnD.js"),__vite__mapDeps([289,1]))),"v-9727c2c8":f(()=>c(()=>import("./index.html-kiUmI141.js"),__vite__mapDeps([290,1]))),"v-540234fd":f(()=>c(()=>import("./index.html-RXlPqgN5.js"),__vite__mapDeps([291,1]))),"v-6de8295f":f(()=>c(()=>import("./index.html-OLy_B4Gm.js"),__vite__mapDeps([292,1]))),"v-73698ddf":f(()=>c(()=>import("./index.html-Tka6Uy5i.js"),__vite__mapDeps([293,1]))),"v-b3ef1536":f(()=>c(()=>import("./index.html-XIs_Swn2.js"),__vite__mapDeps([294,1]))),"v-759df492":f(()=>c(()=>import("./index.html-j7LE1HVT.js"),__vite__mapDeps([295,1]))),"v-0dc06e12":f(()=>c(()=>import("./index.html-ZXRTYXGV.js"),__vite__mapDeps([296,1]))),"v-33a6e194":f(()=>c(()=>import("./index.html-B4ERcwhE.js"),__vite__mapDeps([297,1]))),"v-406d920e":f(()=>c(()=>import("./index.html-QSYAgBZU.js"),__vite__mapDeps([298,1]))),"v-c06fd3d2":f(()=>c(()=>import("./index.html-5zBrxHvk.js"),__vite__mapDeps([299,1]))),"v-250ab807":f(()=>c(()=>import("./index.html-6icPMUjm.js"),__vite__mapDeps([300,1]))),"v-0efe6156":f(()=>c(()=>import("./index.html-C53CPM1B.js"),__vite__mapDeps([301,1]))),"v-43bc0f34":f(()=>c(()=>import("./index.html-wxkI92HI.js"),__vite__mapDeps([302,1]))),"v-c8f9d786":f(()=>c(()=>import("./index.html-tARJ3ZQM.js"),__vite__mapDeps([303,1]))),"v-3ed3fb84":f(()=>c(()=>import("./index.html-hNH6L70F.js"),__vite__mapDeps([304,1]))),"v-72d4d0ca":f(()=>c(()=>import("./index.html-wfiXNLYo.js"),__vite__mapDeps([305,1]))),"v-4a7540d2":f(()=>c(()=>import("./index.html-A0PHnPH1.js"),__vite__mapDeps([306,1]))),"v-704f043c":f(()=>c(()=>import("./index.html-7URhB9oq.js"),__vite__mapDeps([307,1]))),"v-1c9ed7c2":f(()=>c(()=>import("./index.html-swZzQYK-.js"),__vite__mapDeps([308,1]))),"v-21293978":f(()=>c(()=>import("./index.html-7BVYKfRJ.js"),__vite__mapDeps([309,1]))),"v-1a3f3cf6":f(()=>c(()=>import("./index.html--H5SAMJd.js"),__vite__mapDeps([310,1]))),"v-bef6c030":f(()=>c(()=>import("./index.html-jGi6a0pF.js"),__vite__mapDeps([311,1]))),"v-4f8c6825":f(()=>c(()=>import("./index.html-BVcCW4M7.js"),__vite__mapDeps([312,1]))),"v-a66f4de6":f(()=>c(()=>import("./index.html-01c89sRX.js"),__vite__mapDeps([313,1])))};var id=Symbol(""),Zs=Symbol(""),od=Vt({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),me=()=>{const e=fe(Zs);if(!e)throw new Error("pageData() is called without provider.");return e},ec=Symbol(""),Be=()=>{const e=fe(ec);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},tc=Symbol(""),sd=()=>{const e=fe(tc);if(!e)throw new Error("usePageHead() is called without provider.");return e},cd=Symbol(""),nc=Symbol(""),rc=()=>{const e=fe(nc);if(!e)throw new Error("usePageLang() is called without provider.");return e},ac=Symbol(""),ud=()=>{const e=fe(ac);if(!e)throw new Error("usePageLayout() is called without provider.");return e},pd=X(ZE),Jl=Symbol(""),Lt=()=>{const e=fe(Jl);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},_n=X(ed),lc=()=>_n,ic=Symbol(""),Mn=()=>{const e=fe(ic);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},Ed=Symbol(""),dd="Layout",hd="NotFound",kt=hr({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageData:async e=>{const t=pd.value[e];return await(t==null?void 0:t())??od},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,t,n)=>{const r=le(t.description)?t.description:n.description,a=[...ee(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:r}]];return nd(a)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(n=>!!n).join(" | "),resolvePageLang:(e,t)=>e.lang||t.lang||"en-US",resolvePageLayout:(e,t)=>{let n;if(e.path){const r=e.frontmatter.layout;le(r)?n=r:n=dd}else n=hd;return t[n]},resolveRouteLocale:(e,t)=>ld(e,t),resolveSiteLocaleData:(e,t)=>({...e,...e.locales[t]})}),ha=z({name:"ClientOnly",setup(e,t){const n=X(!1);return ge(()=>{n.value=!0}),()=>{var r,a;return n.value?(a=(r=t.slots).default)==null?void 0:a.call(r):null}}}),oc=z({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const t=me(),n=D(()=>Xs[e.pageKey||t.value.key]);return()=>n.value?o(n.value):o("div","404 Not Found")}}),Pt=(e={})=>e,ye=e=>dn(e)?e:`/blog/${Ys(e)}`;const fd={};/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const vn=typeof window<"u";function vd(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const ve=Object.assign;function xa(e,t){const n={};for(const r in t){const a=t[r];n[r]=_t(a)?a.map(e):e(a)}return n}const Zn=()=>{},_t=Array.isArray,md=/\/$/,_d=e=>e.replace(md,"");function Ma(e,t,n="/"){let r,a={},l="",i="";const s=t.indexOf("#");let u=t.indexOf("?");return s<u&&s>=0&&(u=-1),u>-1&&(r=t.slice(0,u),l=t.slice(u+1,s>-1?s:t.length),a=e(l)),s>-1&&(r=r||t.slice(0,s),i=t.slice(s,t.length)),r=Bd(r??t,n),{fullPath:r+(l&&"?")+l+i,path:r,query:a,hash:i}}function Ad(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function ao(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function gd(e,t,n){const r=t.matched.length-1,a=n.matched.length-1;return r>-1&&r===a&&kn(t.matched[r],n.matched[a])&&sc(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function kn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function sc(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!bd(e[n],t[n]))return!1;return!0}function bd(e,t){return _t(e)?lo(e,t):_t(t)?lo(t,e):e===t}function lo(e,t){return _t(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Bd(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),a=r[r.length-1];(a===".."||a===".")&&r.push("");let l=n.length-1,i,s;for(i=0;i<r.length;i++)if(s=r[i],s!==".")if(s==="..")l>1&&l--;else break;return n.slice(0,l).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var cr;(function(e){e.pop="pop",e.push="push"})(cr||(cr={}));var er;(function(e){e.back="back",e.forward="forward",e.unknown=""})(er||(er={}));function yd(e){if(!e)if(vn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),_d(e)}const Dd=/^[^#]+#/;function Ld(e,t){return e.replace(Dd,"#")+t}function Pd(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const fa=()=>({left:window.pageXOffset,top:window.pageYOffset});function Cd(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;t=Pd(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function io(e,t){return(history.state?history.state.position-t:-1)+e}const cl=new Map;function wd(e,t){cl.set(e,t)}function Td(e){const t=cl.get(e);return cl.delete(e),t}let kd=()=>location.protocol+"//"+location.host;function cc(e,t){const{pathname:n,search:r,hash:a}=t,l=e.indexOf("#");if(l>-1){let s=a.includes(e.slice(l))?e.slice(l).length:1,u=a.slice(s);return u[0]!=="/"&&(u="/"+u),ao(u,"")}return ao(n,e)+r+a}function Id(e,t,n,r){let a=[],l=[],i=null;const s=({state:h})=>{const v=cc(e,location),A=n.value,y=t.value;let B=0;if(h){if(n.value=v,t.value=h,i&&i===A){i=null;return}B=y?h.position-y.position:0}else r(v);a.forEach(b=>{b(n.value,A,{delta:B,type:cr.pop,direction:B?B>0?er.forward:er.back:er.unknown})})};function u(){i=n.value}function p(h){a.push(h);const v=()=>{const A=a.indexOf(h);A>-1&&a.splice(A,1)};return l.push(v),v}function E(){const{history:h}=window;h.state&&h.replaceState(ve({},h.state,{scroll:fa()}),"")}function d(){for(const h of l)h();l=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",E)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",E,{passive:!0}),{pauseListeners:u,listen:p,destroy:d}}function oo(e,t,n,r=!1,a=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:a?fa():null}}function Od(e){const{history:t,location:n}=window,r={value:cc(e,n)},a={value:t.state};a.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(u,p,E){const d=e.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?e:e.slice(d))+u:kd()+e+u;try{t[E?"replaceState":"pushState"](p,"",h),a.value=p}catch(v){console.error(v),n[E?"replace":"assign"](h)}}function i(u,p){const E=ve({},t.state,oo(a.value.back,u,a.value.forward,!0),p,{position:a.value.position});l(u,E,!0),r.value=u}function s(u,p){const E=ve({},a.value,t.state,{forward:u,scroll:fa()});l(E.current,E,!0);const d=ve({},oo(r.value,u,null),{position:E.position+1},p);l(u,d,!1),r.value=u}return{location:r,state:a,push:s,replace:i}}function Fd(e){e=yd(e);const t=Od(e),n=Id(e,t.state,t.location,t.replace);function r(l,i=!0){i||n.pauseListeners(),history.go(l)}const a=ve({location:"",base:e,go:r,createHref:Ld.bind(null,e)},t,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Rd(e){return typeof e=="string"||e&&typeof e=="object"}function uc(e){return typeof e=="string"||typeof e=="symbol"}const It={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},pc=Symbol("");var so;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(so||(so={}));function In(e,t){return ve(new Error,{type:e,[pc]:!0},t)}function wt(e,t){return e instanceof Error&&pc in e&&(t==null||!!(e.type&t))}const co="[^/]+?",Vd={sensitive:!1,strict:!1,start:!0,end:!0},Sd=/[.+*?^${}()[\]/\\]/g;function xd(e,t){const n=ve({},Vd,t),r=[];let a=n.start?"^":"";const l=[];for(const p of e){const E=p.length?[]:[90];n.strict&&!p.length&&(a+="/");for(let d=0;d<p.length;d++){const h=p[d];let v=40+(n.sensitive?.25:0);if(h.type===0)d||(a+="/"),a+=h.value.replace(Sd,"\\$&"),v+=40;else if(h.type===1){const{value:A,repeatable:y,optional:B,regexp:b}=h;l.push({name:A,repeatable:y,optional:B});const C=b||co;if(C!==co){v+=10;try{new RegExp(`(${C})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${A}" (${C}): `+w.message)}}let g=y?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;d||(g=B&&p.length<2?`(?:/${g})`:"/"+g),B&&(g+="?"),a+=g,v+=20,B&&(v+=-8),y&&(v+=-20),C===".*"&&(v+=-50)}E.push(v)}r.push(E)}if(n.strict&&n.end){const p=r.length-1;r[p][r[p].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const i=new RegExp(a,n.sensitive?"":"i");function s(p){const E=p.match(i),d={};if(!E)return null;for(let h=1;h<E.length;h++){const v=E[h]||"",A=l[h-1];d[A.name]=v&&A.repeatable?v.split("/"):v}return d}function u(p){let E="",d=!1;for(const h of e){(!d||!E.endsWith("/"))&&(E+="/"),d=!1;for(const v of h)if(v.type===0)E+=v.value;else if(v.type===1){const{value:A,repeatable:y,optional:B}=v,b=A in p?p[A]:"";if(_t(b)&&!y)throw new Error(`Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`);const C=_t(b)?b.join("/"):b;if(!C)if(B)h.length<2&&(E.endsWith("/")?E=E.slice(0,-1):d=!0);else throw new Error(`Missing required param "${A}"`);E+=C}}return E||"/"}return{re:i,score:r,keys:l,parse:s,stringify:u}}function Md(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===80?-1:1:e.length>t.length?t.length===1&&t[0]===80?1:-1:0}function zd(e,t){let n=0;const r=e.score,a=t.score;for(;n<r.length&&n<a.length;){const l=Md(r[n],a[n]);if(l)return l;n++}if(Math.abs(a.length-r.length)===1){if(uo(r))return 1;if(uo(a))return-1}return a.length-r.length}function uo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const $d={type:0,value:""},Nd=/[a-zA-Z0-9_]/;function jd(e){if(!e)return[[]];if(e==="/")return[[$d]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(v){throw new Error(`ERR (${n})/"${p}": ${v}`)}let n=0,r=n;const a=[];let l;function i(){l&&a.push(l),l=[]}let s=0,u,p="",E="";function d(){p&&(n===0?l.push({type:0,value:p}):n===1||n===2||n===3?(l.length>1&&(u==="*"||u==="+")&&t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:p,regexp:E,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):t("Invalid state to consume buffer"),p="")}function h(){p+=u}for(;s<e.length;){if(u=e[s++],u==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:u==="/"?(p&&d(),i()):u===":"?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:u==="("?n=2:Nd.test(u)?h():(d(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&s--);break;case 2:u===")"?E[E.length-1]=="\\"?E=E.slice(0,-1)+u:n=3:E+=u;break;case 3:d(),n=0,u!=="*"&&u!=="?"&&u!=="+"&&s--,E="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${p}"`),d(),i(),a}function Hd(e,t,n){const r=xd(jd(e.path),n),a=ve(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function qd(e,t){const n=[],r=new Map;t=ho({strict:!1,end:!0,sensitive:!1},t);function a(E){return r.get(E)}function l(E,d,h){const v=!h,A=Gd(E);A.aliasOf=h&&h.record;const y=ho(t,E),B=[A];if("alias"in E){const g=typeof E.alias=="string"?[E.alias]:E.alias;for(const w of g)B.push(ve({},A,{components:h?h.record.components:A.components,path:w,aliasOf:h?h.record:A}))}let b,C;for(const g of B){const{path:w}=g;if(d&&w[0]!=="/"){const x=d.record.path,P=x[x.length-1]==="/"?"":"/";g.path=d.record.path+(w&&P+w)}if(b=Hd(g,d,y),h?h.alias.push(b):(C=C||b,C!==b&&C.alias.push(b),v&&E.name&&!Eo(b)&&i(E.name)),A.children){const x=A.children;for(let P=0;P<x.length;P++)l(x[P],b,h&&h.children[P])}h=h||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&u(b)}return C?()=>{i(C)}:Zn}function i(E){if(uc(E)){const d=r.get(E);d&&(r.delete(E),n.splice(n.indexOf(d),1),d.children.forEach(i),d.alias.forEach(i))}else{const d=n.indexOf(E);d>-1&&(n.splice(d,1),E.record.name&&r.delete(E.record.name),E.children.forEach(i),E.alias.forEach(i))}}function s(){return n}function u(E){let d=0;for(;d<n.length&&zd(E,n[d])>=0&&(E.record.path!==n[d].record.path||!Ec(E,n[d]));)d++;n.splice(d,0,E),E.record.name&&!Eo(E)&&r.set(E.record.name,E)}function p(E,d){let h,v={},A,y;if("name"in E&&E.name){if(h=r.get(E.name),!h)throw In(1,{location:E});y=h.record.name,v=ve(po(d.params,h.keys.filter(C=>!C.optional).map(C=>C.name)),E.params&&po(E.params,h.keys.map(C=>C.name))),A=h.stringify(v)}else if("path"in E)A=E.path,h=n.find(C=>C.re.test(A)),h&&(v=h.parse(A),y=h.record.name);else{if(h=d.name?r.get(d.name):n.find(C=>C.re.test(d.path)),!h)throw In(1,{location:E,currentLocation:d});y=h.record.name,v=ve({},d.params,E.params),A=h.stringify(v)}const B=[];let b=h;for(;b;)B.unshift(b.record),b=b.parent;return{name:y,path:A,params:v,matched:B,meta:Jd(B)}}return e.forEach(E=>l(E)),{addRoute:l,resolve:p,removeRoute:i,getRoutes:s,getRecordMatcher:a}}function po(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Gd(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ud(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Ud(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Eo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Jd(e){return e.reduce((t,n)=>ve(t,n.meta),{})}function ho(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ec(e,t){return t.children.some(n=>n===e||Ec(e,n))}const dc=/#/g,Wd=/&/g,Kd=/\//g,Qd=/=/g,Yd=/\?/g,hc=/\+/g,Xd=/%5B/g,Zd=/%5D/g,fc=/%5E/g,e0=/%60/g,vc=/%7B/g,t0=/%7C/g,mc=/%7D/g,n0=/%20/g;function Wl(e){return encodeURI(""+e).replace(t0,"|").replace(Xd,"[").replace(Zd,"]")}function r0(e){return Wl(e).replace(vc,"{").replace(mc,"}").replace(fc,"^")}function ul(e){return Wl(e).replace(hc,"%2B").replace(n0,"+").replace(dc,"%23").replace(Wd,"%26").replace(e0,"`").replace(vc,"{").replace(mc,"}").replace(fc,"^")}function a0(e){return ul(e).replace(Qd,"%3D")}function l0(e){return Wl(e).replace(dc,"%23").replace(Yd,"%3F")}function i0(e){return e==null?"":l0(e).replace(Kd,"%2F")}function ra(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function o0(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<r.length;++a){const l=r[a].replace(hc," "),i=l.indexOf("="),s=ra(i<0?l:l.slice(0,i)),u=i<0?null:ra(l.slice(i+1));if(s in t){let p=t[s];_t(p)||(p=t[s]=[p]),p.push(u)}else t[s]=u}return t}function fo(e){let t="";for(let n in e){const r=e[n];if(n=a0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(_t(r)?r.map(l=>l&&ul(l)):[r&&ul(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function s0(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=_t(r)?r.map(a=>a==null?null:""+a):r==null?r:""+r)}return t}const c0=Symbol(""),vo=Symbol(""),va=Symbol(""),Kl=Symbol(""),pl=Symbol("");function Hn(){let e=[];function t(r){return e.push(r),()=>{const a=e.indexOf(r);a>-1&&e.splice(a,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Jt(e,t,n,r,a){const l=r&&(r.enterCallbacks[a]=r.enterCallbacks[a]||[]);return()=>new Promise((i,s)=>{const u=d=>{d===!1?s(In(4,{from:n,to:t})):d instanceof Error?s(d):Rd(d)?s(In(2,{from:t,to:d})):(l&&r.enterCallbacks[a]===l&&typeof d=="function"&&l.push(d),i())},p=e.call(r&&r.instances[a],t,n,u);let E=Promise.resolve(p);e.length<3&&(E=E.then(u)),E.catch(d=>s(d))})}function za(e,t,n,r){const a=[];for(const l of e)for(const i in l.components){let s=l.components[i];if(!(t!=="beforeRouteEnter"&&!l.instances[i]))if(u0(s)){const p=(s.__vccOpts||s)[t];p&&a.push(Jt(p,n,r,l,i))}else{let u=s();a.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${l.path}"`));const E=vd(p)?p.default:p;l.components[i]=E;const h=(E.__vccOpts||E)[t];return h&&Jt(h,n,r,l,i)()}))}}return a}function u0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function El(e){const t=fe(va),n=fe(Kl),r=D(()=>t.resolve(ft(e.to))),a=D(()=>{const{matched:u}=r.value,{length:p}=u,E=u[p-1],d=n.matched;if(!E||!d.length)return-1;const h=d.findIndex(kn.bind(null,E));if(h>-1)return h;const v=mo(u[p-2]);return p>1&&mo(E)===v&&d[d.length-1].path!==v?d.findIndex(kn.bind(null,u[p-2])):h}),l=D(()=>a.value>-1&&h0(n.params,r.value.params)),i=D(()=>a.value>-1&&a.value===n.matched.length-1&&sc(n.params,r.value.params));function s(u={}){return d0(u)?t[ft(e.replace)?"replace":"push"](ft(e.to)).catch(Zn):Promise.resolve()}return{route:r,href:D(()=>r.value.href),isActive:l,isExactActive:i,navigate:s}}const p0=z({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:El,setup(e,{slots:t}){const n=hr(El(e)),{options:r}=fe(va),a=D(()=>({[_o(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[_o(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:o("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},l)}}}),E0=p0;function d0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function h0(e,t){for(const n in t){const r=t[n],a=e[n];if(typeof r=="string"){if(r!==a)return!1}else if(!_t(a)||a.length!==r.length||r.some((l,i)=>l!==a[i]))return!1}return!0}function mo(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const _o=(e,t,n)=>e??t??n,f0=z({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=fe(pl),a=D(()=>e.route||r.value),l=fe(vo,0),i=D(()=>{let p=ft(l);const{matched:E}=a.value;let d;for(;(d=E[p])&&!d.components;)p++;return p}),s=D(()=>a.value.matched[i.value]);mt(vo,D(()=>i.value+1)),mt(c0,s),mt(pl,a);const u=X();return he(()=>[u.value,s.value,e.name],([p,E,d],[h,v,A])=>{E&&(E.instances[d]=p,v&&v!==E&&p&&p===h&&(E.leaveGuards.size||(E.leaveGuards=v.leaveGuards),E.updateGuards.size||(E.updateGuards=v.updateGuards))),p&&E&&(!v||!kn(E,v)||!h)&&(E.enterCallbacks[d]||[]).forEach(y=>y(p))},{flush:"post"}),()=>{const p=a.value,E=e.name,d=s.value,h=d&&d.components[E];if(!h)return Ao(n.default,{Component:h,route:p});const v=d.props[E],A=v?v===!0?p.params:typeof v=="function"?v(p):v:null,B=o(h,ve({},A,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(d.instances[E]=null)},ref:u}));return Ao(n.default,{Component:B,route:p})||B}}});function Ao(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const _c=f0;function v0(e){const t=qd(e.routes,e),n=e.parseQuery||o0,r=e.stringifyQuery||fo,a=e.history,l=Hn(),i=Hn(),s=Hn(),u=Ve(It);let p=It;vn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const E=xa.bind(null,T=>""+T),d=xa.bind(null,i0),h=xa.bind(null,ra);function v(T,G){let H,K;return uc(T)?(H=t.getRecordMatcher(T),K=G):K=T,t.addRoute(K,H)}function A(T){const G=t.getRecordMatcher(T);G&&t.removeRoute(G)}function y(){return t.getRoutes().map(T=>T.record)}function B(T){return!!t.getRecordMatcher(T)}function b(T,G){if(G=ve({},G||u.value),typeof T=="string"){const _=Ma(n,T,G.path),L=t.resolve({path:_.path},G),I=a.createHref(_.fullPath);return ve(_,L,{params:h(L.params),hash:ra(_.hash),redirectedFrom:void 0,href:I})}let H;if("path"in T)H=ve({},T,{path:Ma(n,T.path,G.path).path});else{const _=ve({},T.params);for(const L in _)_[L]==null&&delete _[L];H=ve({},T,{params:d(_)}),G.params=d(G.params)}const K=t.resolve(H,G),ue=T.hash||"";K.params=E(h(K.params));const be=Ad(r,ve({},T,{hash:r0(ue),path:K.path})),m=a.createHref(be);return ve({fullPath:be,hash:ue,query:r===fo?s0(T.query):T.query||{}},K,{redirectedFrom:void 0,href:m})}function C(T){return typeof T=="string"?Ma(n,T,u.value.path):ve({},T)}function g(T,G){if(p!==T)return In(8,{from:G,to:T})}function w(T){return S(T)}function x(T){return w(ve(C(T),{replace:!0}))}function P(T){const G=T.matched[T.matched.length-1];if(G&&G.redirect){const{redirect:H}=G;let K=typeof H=="function"?H(T):H;return typeof K=="string"&&(K=K.includes("?")||K.includes("#")?K=C(K):{path:K},K.params={}),ve({query:T.query,hash:T.hash,params:"path"in K?{}:T.params},K)}}function S(T,G){const H=p=b(T),K=u.value,ue=T.state,be=T.force,m=T.replace===!0,_=P(H);if(_)return S(ve(C(_),{state:typeof _=="object"?ve({},ue,_.state):ue,force:be,replace:m}),G||H);const L=H;L.redirectedFrom=G;let I;return!be&&gd(r,K,H)&&(I=In(16,{to:L,from:K}),nt(K,K,!0,!1)),(I?Promise.resolve(I):N(L,K)).catch(k=>wt(k)?wt(k,2)?k:gt(k):W(k,L,K)).then(k=>{if(k){if(wt(k,2))return S(ve({replace:m},C(k.to),{state:typeof k.to=="object"?ve({},ue,k.to.state):ue,force:be}),G||L)}else k=j(L,K,!0,m,ue);return Q(L,K,k),k})}function F(T,G){const H=g(T,G);return H?Promise.reject(H):Promise.resolve()}function R(T){const G=Ct.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(T):T()}function N(T,G){let H;const[K,ue,be]=m0(T,G);H=za(K.reverse(),"beforeRouteLeave",T,G);for(const _ of K)_.leaveGuards.forEach(L=>{H.push(Jt(L,T,G))});const m=F.bind(null,T,G);return H.push(m),Fe(H).then(()=>{H=[];for(const _ of l.list())H.push(Jt(_,T,G));return H.push(m),Fe(H)}).then(()=>{H=za(ue,"beforeRouteUpdate",T,G);for(const _ of ue)_.updateGuards.forEach(L=>{H.push(Jt(L,T,G))});return H.push(m),Fe(H)}).then(()=>{H=[];for(const _ of be)if(_.beforeEnter)if(_t(_.beforeEnter))for(const L of _.beforeEnter)H.push(Jt(L,T,G));else H.push(Jt(_.beforeEnter,T,G));return H.push(m),Fe(H)}).then(()=>(T.matched.forEach(_=>_.enterCallbacks={}),H=za(be,"beforeRouteEnter",T,G),H.push(m),Fe(H))).then(()=>{H=[];for(const _ of i.list())H.push(Jt(_,T,G));return H.push(m),Fe(H)}).catch(_=>wt(_,8)?_:Promise.reject(_))}function Q(T,G,H){s.list().forEach(K=>R(()=>K(T,G,H)))}function j(T,G,H,K,ue){const be=g(T,G);if(be)return be;const m=G===It,_=vn?history.state:{};H&&(K||m?a.replace(T.fullPath,ve({scroll:m&&_&&_.scroll},ue)):a.push(T.fullPath,ue)),u.value=T,nt(T,G,H,m),gt()}let te;function we(){te||(te=a.listen((T,G,H)=>{if(!bt.listening)return;const K=b(T),ue=P(K);if(ue){S(ve(ue,{replace:!0}),K).catch(Zn);return}p=K;const be=u.value;vn&&wd(io(be.fullPath,H.delta),fa()),N(K,be).catch(m=>wt(m,12)?m:wt(m,2)?(S(m.to,K).then(_=>{wt(_,20)&&!H.delta&&H.type===cr.pop&&a.go(-1,!1)}).catch(Zn),Promise.reject()):(H.delta&&a.go(-H.delta,!1),W(m,K,be))).then(m=>{m=m||j(K,be,!1),m&&(H.delta&&!wt(m,8)?a.go(-H.delta,!1):H.type===cr.pop&&wt(m,20)&&a.go(-1,!1)),Q(K,be,m)}).catch(Zn)}))}let Le=Hn(),J=Hn(),ne;function W(T,G,H){gt(T);const K=J.list();return K.length?K.forEach(ue=>ue(T,G,H)):console.error(T),Promise.reject(T)}function Oe(){return ne&&u.value!==It?Promise.resolve():new Promise((T,G)=>{Le.add([T,G])})}function gt(T){return ne||(ne=!T,we(),Le.list().forEach(([G,H])=>T?H(T):G()),Le.reset()),T}function nt(T,G,H,K){const{scrollBehavior:ue}=e;if(!vn||!ue)return Promise.resolve();const be=!H&&Td(io(T.fullPath,0))||(K||!H)&&history.state&&history.state.scroll||null;return En().then(()=>ue(T,G,be)).then(m=>m&&Cd(m)).catch(m=>W(m,T,G))}const xe=T=>a.go(T);let Qe;const Ct=new Set,bt={currentRoute:u,listening:!0,addRoute:v,removeRoute:A,hasRoute:B,getRoutes:y,resolve:b,options:e,push:w,replace:x,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:l.add,beforeResolve:i.add,afterEach:s.add,onError:J.add,isReady:Oe,install(T){const G=this;T.component("RouterLink",E0),T.component("RouterView",_c),T.config.globalProperties.$router=G,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>ft(u)}),vn&&!Qe&&u.value===It&&(Qe=!0,w(a.location).catch(ue=>{}));const H={};for(const ue in It)Object.defineProperty(H,ue,{get:()=>u.value[ue],enumerable:!0});T.provide(va,G),T.provide(Kl,os(H)),T.provide(pl,u);const K=T.unmount;Ct.add(T),T.unmount=function(){Ct.delete(T),Ct.size<1&&(p=It,te&&te(),te=null,u.value=It,Qe=!1,ne=!1),K()}}};function Fe(T){return T.reduce((G,H)=>G.then(()=>R(H)),Promise.resolve())}return bt}function m0(e,t){const n=[],r=[],a=[],l=Math.max(t.matched.length,e.matched.length);for(let i=0;i<l;i++){const s=t.matched[i];s&&(e.matched.find(p=>kn(p,s))?r.push(s):n.push(s));const u=e.matched[i];u&&(t.matched.find(p=>kn(p,u))||a.push(u))}return[n,r,a]}function He(){return fe(va)}function At(){return fe(Kl)}var Ge=Uint8Array,An=Uint16Array,_0=Int32Array,Ac=new Ge([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),gc=new Ge([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),A0=new Ge([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),bc=function(e,t){for(var n=new An(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var a=new _0(n[30]),r=1;r<30;++r)for(var l=n[r];l<n[r+1];++l)a[l]=l-n[r]<<5|r;return{b:n,r:a}},Bc=bc(Ac,2),yc=Bc.b,g0=Bc.r;yc[28]=258,g0[258]=28;var b0=bc(gc,0),B0=b0.b,dl=new An(32768);for(var De=0;De<32768;++De){var Nt=(De&43690)>>1|(De&21845)<<1;Nt=(Nt&52428)>>2|(Nt&13107)<<2,Nt=(Nt&61680)>>4|(Nt&3855)<<4,dl[De]=((Nt&65280)>>8|(Nt&255)<<8)>>1}var tr=function(e,t,n){for(var r=e.length,a=0,l=new An(t);a<r;++a)e[a]&&++l[e[a]-1];var i=new An(t);for(a=1;a<t;++a)i[a]=i[a-1]+l[a-1]<<1;var s;if(n){s=new An(1<<t);var u=15-t;for(a=0;a<r;++a)if(e[a])for(var p=a<<4|e[a],E=t-e[a],d=i[e[a]-1]++<<E,h=d|(1<<E)-1;d<=h;++d)s[dl[d]>>u]=p}else for(s=new An(r),a=0;a<r;++a)e[a]&&(s[a]=dl[i[e[a]-1]++]>>15-e[a]);return s},gr=new Ge(288);for(var De=0;De<144;++De)gr[De]=8;for(var De=144;De<256;++De)gr[De]=9;for(var De=256;De<280;++De)gr[De]=7;for(var De=280;De<288;++De)gr[De]=8;var Dc=new Ge(32);for(var De=0;De<32;++De)Dc[De]=5;var y0=tr(gr,9,1),D0=tr(Dc,5,1),$a=function(e){for(var t=e[0],n=1;n<e.length;++n)e[n]>t&&(t=e[n]);return t},dt=function(e,t,n){var r=t/8|0;return(e[r]|e[r+1]<<8)>>(t&7)&n},Na=function(e,t){var n=t/8|0;return(e[n]|e[n+1]<<8|e[n+2]<<16)>>(t&7)},L0=function(e){return(e+7)/8|0},Ql=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new Ge(e.subarray(t,n))},P0=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],lt=function(e,t,n){var r=new Error(t||P0[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,lt),!n)throw r;return r},C0=function(e,t,n,r){var a=e.length,l=r?r.length:0;if(!a||t.f&&!t.l)return n||new Ge(0);var i=!n,s=i||t.i!=2,u=t.i;i&&(n=new Ge(a*3));var p=function(ue){var be=n.length;if(ue>be){var m=new Ge(Math.max(be*2,ue));m.set(n),n=m}},E=t.f||0,d=t.p||0,h=t.b||0,v=t.l,A=t.d,y=t.m,B=t.n,b=a*8;do{if(!v){E=dt(e,d,1);var C=dt(e,d+1,3);if(d+=3,C)if(C==1)v=y0,A=D0,y=9,B=5;else if(C==2){var P=dt(e,d,31)+257,S=dt(e,d+10,15)+4,F=P+dt(e,d+5,31)+1;d+=14;for(var R=new Ge(F),N=new Ge(19),Q=0;Q<S;++Q)N[A0[Q]]=dt(e,d+Q*3,7);d+=S*3;for(var j=$a(N),te=(1<<j)-1,we=tr(N,j,1),Q=0;Q<F;){var Le=we[dt(e,d,te)];d+=Le&15;var g=Le>>4;if(g<16)R[Q++]=g;else{var J=0,ne=0;for(g==16?(ne=3+dt(e,d,3),d+=2,J=R[Q-1]):g==17?(ne=3+dt(e,d,7),d+=3):g==18&&(ne=11+dt(e,d,127),d+=7);ne--;)R[Q++]=J}}var W=R.subarray(0,P),Oe=R.subarray(P);y=$a(W),B=$a(Oe),v=tr(W,y,1),A=tr(Oe,B,1)}else lt(1);else{var g=L0(d)+4,w=e[g-4]|e[g-3]<<8,x=g+w;if(x>a){u&&lt(0);break}s&&p(h+w),n.set(e.subarray(g,x),h),t.b=h+=w,t.p=d=x*8,t.f=E;continue}if(d>b){u&&lt(0);break}}s&&p(h+131072);for(var gt=(1<<y)-1,nt=(1<<B)-1,xe=d;;xe=d){var J=v[Na(e,d)&gt],Qe=J>>4;if(d+=J&15,d>b){u&&lt(0);break}if(J||lt(2),Qe<256)n[h++]=Qe;else if(Qe==256){xe=d,v=null;break}else{var Ct=Qe-254;if(Qe>264){var Q=Qe-257,bt=Ac[Q];Ct=dt(e,d,(1<<bt)-1)+yc[Q],d+=bt}var Fe=A[Na(e,d)&nt],T=Fe>>4;Fe||lt(3),d+=Fe&15;var Oe=B0[T];if(T>3){var bt=gc[T];Oe+=Na(e,d)&(1<<bt)-1,d+=bt}if(d>b){u&&lt(0);break}s&&p(h+131072);var G=h+Ct;if(h<Oe){var H=l-Oe,K=Math.min(Oe,G);for(H+h<0&&lt(3);h<K;++h)n[h]=r[H+h]}for(;h<G;++h)n[h]=n[h-Oe]}}t.l=v,t.p=xe,t.b=h,t.f=E,v&&(E=1,t.m=y,t.d=A,t.n=B)}while(!E);return h!=n.length&&i?Ql(n,0,h):n.subarray(0,h)},w0=new Ge(0),T0=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&lt(6,"invalid zlib data"),(e[1]>>5&1)==+!t&&lt(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function k0(e,t){return C0(e.subarray(T0(e,t&&t.dictionary),-4),{i:2},t&&t.out,t&&t.dictionary)}var go=typeof TextEncoder<"u"&&new TextEncoder,hl=typeof TextDecoder<"u"&&new TextDecoder,I0=0;try{hl.decode(w0,{stream:!0}),I0=1}catch{}var O0=function(e){for(var t="",n=0;;){var r=e[n++],a=(r>127)+(r>223)+(r>239);if(n+a>e.length)return{s:t,r:Ql(e,n-1)};a?a==3?(r=((r&15)<<18|(e[n++]&63)<<12|(e[n++]&63)<<6|e[n++]&63)-65536,t+=String.fromCharCode(55296|r>>10,56320|r&1023)):a&1?t+=String.fromCharCode((r&31)<<6|e[n++]&63):t+=String.fromCharCode((r&15)<<12|(e[n++]&63)<<6|e[n++]&63):t+=String.fromCharCode(r)}};function F0(e,t){if(t){for(var n=new Ge(e.length),r=0;r<e.length;++r)n[r]=e.charCodeAt(r);return n}if(go)return go.encode(e);for(var a=e.length,l=new Ge(e.length+(e.length>>1)),i=0,s=function(E){l[i++]=E},r=0;r<a;++r){if(i+5>l.length){var u=new Ge(i+8+(a-r<<1));u.set(l),l=u}var p=e.charCodeAt(r);p<128||t?s(p):p<2048?(s(192|p>>6),s(128|p&63)):p>55295&&p<57344?(p=65536+(p&1047552)|e.charCodeAt(++r)&1023,s(240|p>>18),s(128|p>>12&63),s(128|p>>6&63),s(128|p&63)):(s(224|p>>12),s(128|p>>6&63),s(128|p&63))}return Ql(l,0,i)}function R0(e,t){if(t){for(var n="",r=0;r<e.length;r+=16384)n+=String.fromCharCode.apply(null,e.subarray(r,r+16384));return n}else{if(hl)return hl.decode(e);var a=O0(e),l=a.s,n=a.r;return n.length&&lt(8),l}}const ce=({name:e="",color:t="currentColor"},{slots:n})=>{var r;return o("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${e}-icon`],viewBox:"0 0 1024 1024",fill:t,"aria-label":`${e} icon`},(r=n.default)==null?void 0:r.call(n))};ce.displayName="IconBase";const Lc=({size:e=48,stroke:t=4,wrapper:n=!0,height:r=2*e})=>{const a=o("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:e,preserveAspectRatio:"xMidYMid",viewBox:"25 25 50 50"},[o("animateTransform",{attributeName:"transform",type:"rotate",dur:"2s",keyTimes:"0;1",repeatCount:"indefinite",values:"0;360"}),o("circle",{cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":t,"stroke-linecap":"round"},[o("animate",{attributeName:"stroke-dasharray",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"1,200;90,200;1,200"}),o("animate",{attributeName:"stroke-dashoffset",dur:"1.5s",keyTimes:"0;0.5;1",repeatCount:"indefinite",values:"0;-35px;-125px"})])]);return n?o("div",{class:"loading-icon-wrapper",style:`display:flex;align-items:center;justify-content:center;height:${r}px`},a):a};Lc.displayName="LoadingIcon";const Pc=(e,{slots:t})=>{var n;return(n=t.default)==null?void 0:n.call(t)},V0=e=>/\b(?:Android|iPhone)/i.test(e),S0=e=>/version\/([\w.]+) .*(mobile ?safari|safari)/i.test(e),x0=e=>[/\((ipad);[-\w),; ]+apple/i,/applecoremedia\/[\w.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i].some(t=>t.test(e)),Yl=(e="")=>{if(e){if(typeof e=="number")return new Date(e);const t=Date.parse(e.toString());if(!Number.isNaN(t))return new Date(t)}return null},ma=(e,t)=>{let n=1;for(let r=0;r<e.length;r++)n+=e.charCodeAt(r),n+=n<<10,n^=n>>6;return n+=n<<3,n^=n>>11,n%t};/**
* @vue/shared v3.4.15
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Cc=Array.isArray,M0=e=>typeof e=="function",z0=e=>typeof e=="string";var Xl=e=>/^(https?:)?\/\//.test(e),$0=/.md((\?|#).*)?$/,N0=(e,t="/")=>!!(Xl(e)||e.startsWith("/")&&!e.startsWith(t)&&!$0.test(e)),wc=e=>Object.prototype.toString.call(e)==="[object Object]";function j0(){const e=X(!1);return xn()&&ge(()=>{e.value=!0}),e}function H0(e){return j0(),D(()=>!!e())}const ja=e=>typeof e=="number",Rt=e=>typeof e=="string",On=(e,t)=>Rt(e)&&e.startsWith(t),zr=(e,t)=>Rt(e)&&e.endsWith(t),en=Object.entries,q0=Object.fromEntries,tt=Object.keys,G0=e=>(e.endsWith(".md")&&(e=`${e.slice(0,-3)}.html`),!e.endsWith("/")&&!e.endsWith(".html")&&(e=`${e}.html`),e=e.replace(/(^|\/)(?:README|index).html$/i,"$1"),e),Tc=e=>{const[t,n=""]=e.split("#");return t?`${G0(t)}${n?`#${n}`:""}`:e},bo=e=>wc(e)&&Rt(e.name),ur=(e,t=!1)=>e?Cc(e)?e.map(n=>Rt(n)?{name:n}:bo(n)?n:null).filter(n=>n!==null):Rt(e)?[{name:e}]:bo(e)?[e]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${t?"":"| false"} | undefined\`, but got`,e),[]):[],kc=(e,t)=>{if(e){if(Cc(e)&&e.every(Rt))return e;if(Rt(e))return[e];console.error(`Expect ${t||"value"} to be \`string[] | string | undefined\`, but got`,e)}return[]},Ic=e=>kc(e,"category"),Oc=e=>kc(e,"tag"),_a=e=>On(e,"/");let U0=class{constructor(){this.messageElements={};const t="message-container",n=document.getElementById(t);n?this.containerElement=n:(this.containerElement=document.createElement("div"),this.containerElement.id=t,document.body.appendChild(this.containerElement))}pop(t,n=2e3){const r=document.createElement("div"),a=Date.now();return r.className="message move-in",r.innerHTML=t,this.containerElement.appendChild(r),this.messageElements[a]=r,n>0&&setTimeout(()=>{this.close(a)},n),a}close(t){if(t){const n=this.messageElements[t];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.messageElements[t]})}else tt(this.messageElements).forEach(n=>this.close(Number(n)))}destroy(){document.body.removeChild(this.containerElement)}};const Fc=/#.*$/u,J0=e=>{const t=Fc.exec(e);return t?t[0]:""},Bo=e=>decodeURI(e).replace(Fc,"").replace(/(index)?\.html$/i,"").replace(/(README|index)?\.md$/i,""),Rc=(e,t)=>{if(t===void 0)return!1;const n=Bo(e.path),r=Bo(t),a=J0(t);return a?a===e.hash&&(!r||n===r):n===r},yo=e=>{const t=atob(e);return R0(k0(F0(t,!0)))},W0=e=>Xl(e)?e:`https://github.com/${e}`,Vc=e=>!Xl(e)||/github\.com/.test(e)?"GitHub":/bitbucket\.org/.test(e)?"Bitbucket":/gitlab\.com/.test(e)?"GitLab":/gitee\.com/.test(e)?"Gitee":null,Fn=(e,...t)=>{const n=e.resolve(...t),r=n.matched[n.matched.length-1];if(!(r!=null&&r.redirect))return n;const{redirect:a}=r,l=M0(a)?a(n):a,i=z0(l)?{path:l}:l;return Fn(e,{hash:n.hash,query:n.query,params:n.params,...i})},K0=e=>{var t;if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)&&!(e.currentTarget&&((t=e.currentTarget.getAttribute("target"))!=null&&t.match(/\b_blank\b/i))))return e.preventDefault(),!0},Ie=({to:e="",class:t="",...n},{slots:r})=>{var s;const a=He(),l=Tc(e),i=(u={})=>K0(u)?a.push(e).catch():Promise.resolve();return o("a",{...n,class:["vp-link",t],href:On(l,"/")?ye(l):l,onClick:i},(s=r.default)==null?void 0:s.call(r))};Ie.displayName="VPLink";const Sc=()=>o(ce,{name:"github"},()=>o("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));Sc.displayName="GitHubIcon";const xc=()=>o(ce,{name:"gitlab"},()=>o("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));xc.displayName="GitLabIcon";const Mc=()=>o(ce,{name:"gitee"},()=>o("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));Mc.displayName="GiteeIcon";const zc=()=>o(ce,{name:"bitbucket"},()=>o("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));zc.displayName="BitbucketIcon";const $c=()=>o(ce,{name:"source"},()=>o("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));$c.displayName="SourceIcon";const et=(e,t)=>{var r;const n=(r=(t==null?void 0:t._instance)||xn())==null?void 0:r.appContext.components;return n?e in n||pt(e)in n||dr(pt(e))in n:!1},Q0=()=>H0(()=>typeof window<"u"&&window.navigator&&"userAgent"in window.navigator),Y0=()=>{const e=Q0();return D(()=>e.value&&/\b(?:Android|iPhone)/i.test(navigator.userAgent))},zn=e=>{const t=Lt();return D(()=>e[t.value])};function Do(e,t){var n;const r=Ve();return xl(()=>{r.value=e()},{...t,flush:(n=t==null?void 0:t.flush)!=null?n:"sync"}),Vt(r)}function Aa(e,t){let n,r,a;const l=X(!0),i=()=>{l.value=!0,a()};he(e,i,{flush:"sync"});const s=typeof t=="function"?t:t.get,u=typeof t=="function"?void 0:t.set,p=ds((E,d)=>(r=E,a=d,{get(){return l.value&&(n=s(),l.value=!1),r(),n},set(h){u==null||u(h)}}));return Object.isExtensible(p)&&(p.trigger=i),p}function $n(e){return Wo()?(Fp(e),!0):!1}function Ue(e){return typeof e=="function"?e():ft(e)}const br=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const X0=Object.prototype.toString,Z0=e=>X0.call(e)==="[object Object]",pr=()=>{},Lo=eh();function eh(){var e,t;return br&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function Nc(e,t){function n(...r){return new Promise((a,l)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(a).catch(l)})}return n}const jc=e=>e();function th(e,t=!0,n=!0,r=!1){let a=0,l,i=!0,s=pr,u;const p=()=>{l&&(clearTimeout(l),l=void 0,s(),s=pr)};return d=>{const h=Ue(e),v=Date.now()-a,A=()=>u=d();return p(),h<=0?(a=Date.now(),A()):(v>h&&(n||!i)?(a=Date.now(),A()):t&&(u=new Promise((y,B)=>{s=r?B:y,l=setTimeout(()=>{a=Date.now(),i=!0,y(A()),p()},Math.max(0,h-v))})),!n&&!l&&(l=setTimeout(()=>i=!0,h)),i=!1,u)}}function nh(e=jc){const t=X(!0);function n(){t.value=!1}function r(){t.value=!0}const a=(...l)=>{t.value&&e(...l)};return{isActive:Vt(t),pause:n,resume:r,eventFilter:a}}function rh(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const r=t;t=void 0,r&&await r},n}function Hc(e){return e||xn()}function ah(...e){if(e.length!==1)return Sn(...e);const t=e[0];return typeof t=="function"?Vt(ds(()=>({get:t,set:pr}))):X(t)}function lh(e,t=200,n=!1,r=!0,a=!1){return Nc(th(t,n,r,a),e)}function ih(e,t,n={}){const{eventFilter:r=jc,...a}=n;return he(e,Nc(r,t),a)}function oh(e,t,n={}){const{eventFilter:r,...a}=n,{eventFilter:l,pause:i,resume:s,isActive:u}=nh(r);return{stop:ih(e,t,{...a,eventFilter:l}),pause:i,resume:s,isActive:u}}function ga(e,t=!0,n){Hc()?ge(e,n):t?e():En(e)}function sh(e,t){Hc(t)&&mr(e,t)}function ch(e,t,n={}){const{immediate:r=!0}=n,a=X(!1);let l=null;function i(){l&&(clearTimeout(l),l=null)}function s(){a.value=!1,i()}function u(...p){i(),a.value=!0,l=setTimeout(()=>{a.value=!1,l=null,e(...p)},Ue(t))}return r&&(a.value=!0,br&&u()),$n(s),{isPending:Vt(a),start:u,stop:s}}function aa(e=!1,t={}){const{truthyValue:n=!0,falsyValue:r=!1}=t,a=$e(e),l=X(e);function i(s){if(arguments.length)return l.value=s,l.value;{const u=Ue(n);return l.value=l.value===u?Ue(r):u,l.value}}return a?i:[l,i]}function Ot(e){var t;const n=Ue(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Zt=br?window:void 0,qc=br?window.document:void 0,Gc=br?window.navigator:void 0;function Se(...e){let t,n,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,a]=e,t=Zt):[t,n,r,a]=e,!t)return pr;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const l=[],i=()=>{l.forEach(E=>E()),l.length=0},s=(E,d,h,v)=>(E.addEventListener(d,h,v),()=>E.removeEventListener(d,h,v)),u=he(()=>[Ot(t),Ue(a)],([E,d])=>{if(i(),!E)return;const h=Z0(d)?{...d}:d;l.push(...n.flatMap(v=>r.map(A=>s(E,v,A,h))))},{immediate:!0,flush:"post"}),p=()=>{u(),i()};return $n(p),p}function uh(){const e=X(!1);return xn()&&ge(()=>{e.value=!0}),e}function Br(e){const t=uh();return D(()=>(t.value,!!e()))}function Uc(e,t={}){const{window:n=Zt}=t,r=Br(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const l=X(!1),i=p=>{l.value=p.matches},s=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",i):a.removeListener(i))},u=xl(()=>{r.value&&(s(),a=n.matchMedia(Ue(e)),"addEventListener"in a?a.addEventListener("change",i):a.addListener(i),l.value=a.matches)});return $n(()=>{u(),s(),a=void 0}),l}function Po(e,t={}){const{controls:n=!1,navigator:r=Gc}=t,a=Br(()=>r&&"permissions"in r);let l;const i=typeof e=="string"?{name:e}:e,s=X(),u=()=>{l&&(s.value=l.state)},p=rh(async()=>{if(a.value){if(!l)try{l=await r.permissions.query(i),Se(l,"change",u),u()}catch{s.value="prompt"}return l}});return p(),n?{state:s,isSupported:a,query:p}:s}function ph(e={}){const{navigator:t=Gc,read:n=!1,source:r,copiedDuring:a=1500,legacy:l=!1}=e,i=Br(()=>t&&"clipboard"in t),s=Po("clipboard-read"),u=Po("clipboard-write"),p=D(()=>i.value||l),E=X(""),d=X(!1),h=ch(()=>d.value=!1,a);function v(){i.value&&s.value!=="denied"?t.clipboard.readText().then(b=>{E.value=b}):E.value=B()}p.value&&n&&Se(["copy","cut"],v);async function A(b=Ue(r)){p.value&&b!=null&&(i.value&&u.value!=="denied"?await t.clipboard.writeText(b):y(b),E.value=b,d.value=!0,h.start())}function y(b){const C=document.createElement("textarea");C.value=b??"",C.style.position="absolute",C.style.opacity="0",document.body.appendChild(C),C.select(),document.execCommand("copy"),C.remove()}function B(){var b,C,g;return(g=(C=(b=document==null?void 0:document.getSelection)==null?void 0:b.call(document))==null?void 0:C.toString())!=null?g:""}return{isSupported:p,text:E,copied:d,copy:A}}const $r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Nr="__vueuse_ssr_handlers__",Eh=dh();function dh(){return Nr in $r||($r[Nr]=$r[Nr]||{}),$r[Nr]}function hh(e,t){return Eh[e]||t}function fh(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const vh={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},Co="vueuse-storage";function Zl(e,t,n,r={}){var a;const{flush:l="pre",deep:i=!0,listenToStorageChanges:s=!0,writeDefaults:u=!0,mergeDefaults:p=!1,shallow:E,window:d=Zt,eventFilter:h,onError:v=R=>{console.error(R)},initOnMounted:A}=r,y=(E?Ve:X)(typeof t=="function"?t():t);if(!n)try{n=hh("getDefaultStorage",()=>{var R;return(R=Zt)==null?void 0:R.localStorage})()}catch(R){v(R)}if(!n)return y;const B=Ue(t),b=fh(B),C=(a=r.serializer)!=null?a:vh[b],{pause:g,resume:w}=oh(y,()=>x(y.value),{flush:l,deep:i,eventFilter:h});return d&&s&&ga(()=>{Se(d,"storage",F),Se(d,Co,S),A&&F()}),A||F(),y;function x(R){try{if(R==null)n.removeItem(e);else{const N=C.write(R),Q=n.getItem(e);Q!==N&&(n.setItem(e,N),d&&d.dispatchEvent(new CustomEvent(Co,{detail:{key:e,oldValue:Q,newValue:N,storageArea:n}})))}}catch(N){v(N)}}function P(R){const N=R?R.newValue:n.getItem(e);if(N==null)return u&&B!=null&&n.setItem(e,C.write(B)),B;if(!R&&p){const Q=C.read(N);return typeof p=="function"?p(Q,B):b==="object"&&!Array.isArray(Q)?{...B,...Q}:Q}else return typeof N!="string"?N:C.read(N)}function S(R){F(R.detail)}function F(R){if(!(R&&R.storageArea!==n)){if(R&&R.key==null){y.value=B;return}if(!(R&&R.key!==e)){g();try{(R==null?void 0:R.newValue)!==C.write(y.value)&&(y.value=P(R))}catch(N){v(N)}finally{R?En(w):w()}}}}}function mh(e){return Uc("(prefers-color-scheme: dark)",e)}function _h(e,t,n={}){const{window:r=Zt,...a}=n;let l;const i=Br(()=>r&&"ResizeObserver"in r),s=()=>{l&&(l.disconnect(),l=void 0)},u=D(()=>Array.isArray(e)?e.map(d=>Ot(d)):[Ot(e)]),p=he(u,d=>{if(s(),i.value&&r){l=new ResizeObserver(t);for(const h of d)h&&l.observe(h,a)}},{immediate:!0,flush:"post",deep:!0}),E=()=>{s(),p()};return $n(E),{isSupported:i,stop:E}}function Ah(e,t={width:0,height:0},n={}){const{window:r=Zt,box:a="content-box"}=n,l=D(()=>{var d,h;return(h=(d=Ot(e))==null?void 0:d.namespaceURI)==null?void 0:h.includes("svg")}),i=X(t.width),s=X(t.height),{stop:u}=_h(e,([d])=>{const h=a==="border-box"?d.borderBoxSize:a==="content-box"?d.contentBoxSize:d.devicePixelContentBoxSize;if(r&&l.value){const v=Ot(e);if(v){const A=r.getComputedStyle(v);i.value=Number.parseFloat(A.width),s.value=Number.parseFloat(A.height)}}else if(h){const v=Array.isArray(h)?h:[h];i.value=v.reduce((A,{inlineSize:y})=>A+y,0),s.value=v.reduce((A,{blockSize:y})=>A+y,0)}else i.value=d.contentRect.width,s.value=d.contentRect.height},n);ga(()=>{const d=Ot(e);d&&(i.value="offsetWidth"in d?d.offsetWidth:t.width,s.value="offsetHeight"in d?d.offsetHeight:t.height)});const p=he(()=>Ot(e),d=>{i.value=d?t.width:0,s.value=d?t.height:0});function E(){u(),p()}return{width:i,height:s,stop:E}}const wo=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function ei(e,t={}){const{document:n=qc,autoExit:r=!1}=t,a=D(()=>{var b;return(b=Ot(e))!=null?b:n==null?void 0:n.querySelector("html")}),l=X(!1),i=D(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(b=>n&&b in n||a.value&&b in a.value)),s=D(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(b=>n&&b in n||a.value&&b in a.value)),u=D(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(b=>n&&b in n||a.value&&b in a.value)),p=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(b=>n&&b in n),E=Br(()=>a.value&&n&&i.value!==void 0&&s.value!==void 0&&u.value!==void 0),d=()=>p?(n==null?void 0:n[p])===a.value:!1,h=()=>{if(u.value){if(n&&n[u.value]!=null)return n[u.value];{const b=a.value;if((b==null?void 0:b[u.value])!=null)return!!b[u.value]}}return!1};async function v(){if(!(!E.value||!l.value)){if(s.value)if((n==null?void 0:n[s.value])!=null)await n[s.value]();else{const b=a.value;(b==null?void 0:b[s.value])!=null&&await b[s.value]()}l.value=!1}}async function A(){if(!E.value||l.value)return;h()&&await v();const b=a.value;i.value&&(b==null?void 0:b[i.value])!=null&&(await b[i.value](),l.value=!0)}async function y(){await(l.value?v():A())}const B=()=>{const b=h();(!b||b&&d())&&(l.value=b)};return Se(n,wo,B,!1),Se(()=>Ot(a),wo,B,!1),r&&$n(v),{isSupported:E,isFullscreen:l,enter:A,exit:v,toggle:y}}function Ha(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}function qa(e,t=pr,n={}){const{immediate:r=!0,manual:a=!1,type:l="text/javascript",async:i=!0,crossOrigin:s,referrerPolicy:u,noModule:p,defer:E,document:d=qc,attrs:h={}}=n,v=X(null);let A=null;const y=C=>new Promise((g,w)=>{const x=F=>(v.value=F,g(F),F);if(!d){g(!1);return}let P=!1,S=d.querySelector(`script[src="${Ue(e)}"]`);S?S.hasAttribute("data-loaded")&&x(S):(S=d.createElement("script"),S.type=l,S.async=i,S.src=Ue(e),E&&(S.defer=E),s&&(S.crossOrigin=s),p&&(S.noModule=p),u&&(S.referrerPolicy=u),Object.entries(h).forEach(([F,R])=>S==null?void 0:S.setAttribute(F,R)),P=!0),S.addEventListener("error",F=>w(F)),S.addEventListener("abort",F=>w(F)),S.addEventListener("load",()=>{S.setAttribute("data-loaded","true"),t(S),x(S)}),P&&(S=d.head.appendChild(S)),C||x(S)}),B=(C=!0)=>(A||(A=y(C)),A),b=()=>{if(!d)return;A=null,v.value&&(v.value=null);const C=d.querySelector(`script[src="${Ue(e)}"]`);C&&d.head.removeChild(C)};return r&&!a&&ga(B),a||sh(b),{scriptTag:v,load:B,unload:b}}function Jc(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:Jc(n)}}function gh(e){const t=e||window.event,n=t.target;return Jc(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const jr=new WeakMap;function Wc(e,t=!1){const n=X(t);let r=null,a;he(ah(e),s=>{const u=Ha(Ue(s));if(u){const p=u;jr.get(p)||jr.set(p,a),n.value&&(p.style.overflow="hidden")}},{immediate:!0});const l=()=>{const s=Ha(Ue(e));!s||n.value||(Lo&&(r=Se(s,"touchmove",u=>{gh(u)},{passive:!1})),s.style.overflow="hidden",n.value=!0)},i=()=>{var s;const u=Ha(Ue(e));!u||!n.value||(Lo&&(r==null||r()),u.style.overflow=(s=jr.get(u))!=null?s:"",jr.delete(u),n.value=!1)};return $n(i),D({get(){return n.value},set(s){s?l():i()}})}function bh(e={}){const{window:t=Zt,behavior:n="auto"}=e;if(!t)return{x:X(0),y:X(0)};const r=X(t.scrollX),a=X(t.scrollY),l=D({get(){return r.value},set(s){scrollTo({left:s,behavior:n})}}),i=D({get(){return a.value},set(s){scrollTo({top:s,behavior:n})}});return Se(t,"scroll",()=>{r.value=t.scrollX,a.value=t.scrollY},{capture:!1,passive:!0}),{x:l,y:i}}function Bh(e={}){const{window:t=Zt,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:r=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:l=!0}=e,i=X(n),s=X(r),u=()=>{t&&(l?(i.value=t.innerWidth,s.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};if(u(),ga(u),Se("resize",u,{passive:!0}),a){const p=Uc("(orientation: portrait)");he(p,()=>u())}return{width:i,height:s}}var yh=z({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(e){const t=D(()=>{const r=["font-icon icon"],a=`fas fa-${e.icon}`;return r.push("fa-fw fa-sm"),r.push(e.icon.includes(" ")?e.icon:a),r}),n=D(()=>{const r={};return e.color&&(r.color=e.color),e.size&&(r["font-size"]=Number.isNaN(Number(e.size))?e.size:`${e.size}px`),tt(r).length?r:null});return()=>e.icon?o("span",{key:e.icon,class:t.value,style:n.value}):null}});const Kc=({type:e="info",text:t="",vertical:n,color:r},{slots:a})=>{var l;return o("span",{class:["vp-badge",e,{diy:r}],style:{verticalAlign:n??!1,backgroundColor:r??!1}},((l=a.default)==null?void 0:l.call(a))||t)};Kc.displayName="Badge";const Qc=({title:e,desc:t="",logo:n,background:r,color:a,link:l})=>{const i=[n?o("img",{class:"vp-card-logo",src:ye(n),loading:"lazy","no-view":""}):null,o("div",{class:"vp-card-content"},[o("div",{class:"vp-card-title",innerHTML:e}),o("hr"),o("div",{class:"vp-card-desc",innerHTML:t})])],s={};return r&&(s.background=r),a&&(s.color=a),l?sr(l)?o("a",{class:"vp-card",href:l,target:"_blank",style:s},i):o(Ie,{to:l,class:"vp-card",style:s},()=>i):o("div",{class:"vp-card",style:s},i)};Qc.displayName="VPCard";const To=e=>le(e)?e:`${e}px`,Dh=(e,t=0)=>{const n=Ve(),r=D(()=>To(ft(e.width)||"100%")),a=X("auto"),l=u=>{if(le(u)){const[p,E]=u.split(":"),d=Number(p)/Number(E);if(!Number.isNaN(d))return d}return typeof u=="number"?u:16/9},i=u=>{const p=ft(e.height),E=l(ft(e.ratio));return p?To(p):`${Number(u)/E+ft(t)}px`},s=()=>{n.value&&(a.value=i(n.value.clientWidth))};return ge(()=>{s(),$e(t)&&he(t,s),Se("orientationchange",s),Se("resize",s)}),{el:n,width:r,height:a,resize:s}},Lh=e=>dn(e)?e:ye(e);var Ph={"/zh/":{hint:"<p>此浏览器不支持嵌入式 PDF。请下载 PDF 查看：<a href='[url]' target='_blank'>下载 PDF</a></p>"},"/":{hint:"<p>This browser does not support embedding PDFs. Please download the PDF to view it: <a href='[url]' target='_blank'>Download PDF</a></p>"}};const Ga=e=>{console.error("[PDF]: "+e)},Ch=e=>{for(;e.firstChild;)e.removeChild(e.firstChild)},wh=e=>e==="string"?document.querySelector(e):e instanceof HTMLElement?e:document.body,Th=e=>{let t="";return e&&(t+=en(e).map(([n,r])=>n==="noToolbar"?`toolbar=${r?0:1}`:`${encodeURIComponent(n)}=${encodeURIComponent(r)}`).join("&"),t&&(t=`#${t.slice(0,t.length-1)}`)),t},kh=(e,t,n,r,a)=>{Ch(t);const l=`${e==="pdfjs"?`${Gl(ye(null))}web/viewer.html?file=${encodeURIComponent(n)}`:n}${Th(r)}`,i=e==="pdfjs"||e==="iframe"?"iframe":"embed",s=document.createElement(i);return s.className="pdf-viewer",s.type="application/pdf",s.title=a,s.src=l,s instanceof HTMLIFrameElement&&(s.allow="fullscreen"),t.classList.add("pdf-viewer-container"),t.appendChild(s),t.getElementsByTagName(i)[0]},Ih=(e,t=null,{title:n,hint:r,options:a={}})=>{var A,y;if(typeof window>"u"||!((A=window==null?void 0:window.navigator)!=null&&A.userAgent))return null;const{navigator:l}=window,{userAgent:i}=l,s=window.Promise!==void 0,u=x0(i)||V0(i),p=!u&&S0(i),E=!u&&/firefox/i.test(i)&&i.split("rv:").length>1?parseInt(i.split("rv:")[1].split(".")[0],10)>18:!1,d=!u&&(s||E);if(!le(e))return Ga("URL is not valid"),null;const h=wh(t);if(!h)return Ga("Target element cannot be determined"),null;const v=n||((y=/\/([^/]+).pdf/.exec(e))==null?void 0:y[1])||"PDF Viewer";return d||!u?kh(p?"iframe":"embed",h,e,a,v):(h.innerHTML=r.replace(/\[url\]/g,e),Ga("This browser does not support embedded PDFs"),null)};var Oh=z({name:"PDF",props:{url:{type:String,required:!0},title:{type:String,default:""},width:{type:[String,Number],default:"100%"},height:{type:[String,Number],default:void 0},ratio:{type:[String,Number],default:16/9},page:{type:[String,Number],default:1},noToolbar:Boolean,zoom:{type:[String,Number],default:100}},setup(e){const{el:t,width:n,height:r,resize:a}=Dh(e),l=zn(Ph);return ge(()=>{Ih(Lh(e.url),t.value,{title:e.title,hint:l.value.hint,options:{page:e.page,noToolbar:e.noToolbar,zoom:e.zoom}}),a()}),()=>o("div",{class:"pdf-viewer-wrapper",ref:t,style:{width:n.value,height:r.value}})}});const Yc=()=>o(ce,{name:"back-to-top"},()=>[o("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),o("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);Yc.displayName="BackToTopIcon";var Fh={"/zh/":{backToTop:"返回顶部"},"/":{backToTop:"Back to top"}},Rh=z({name:"BackToTop",props:{threshold:{type:Number,default:100},noProgress:Boolean},setup(e){const t=Be(),n=zn(Fh),r=Ve(),{height:a}=Ah(r),{height:l}=Bh(),{y:i}=bh(),s=D(()=>t.value.backToTop!==!1&&i.value>e.threshold),u=D(()=>i.value/(a.value-l.value)*100);return ge(()=>{r.value=document.body}),()=>o(Xt,{name:"fade"},()=>s.value?o("button",{type:"button",class:"vp-back-to-top-button","aria-label":n.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[e.noProgress?null:o("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":u.value},o("svg",o("circle",{cx:"50%",cy:"50%",style:{"stroke-dasharray":`calc(${Math.PI*u.value}% - ${4*Math.PI}px) calc(${Math.PI*100}% - ${4*Math.PI}px)`}}))),o(Yc)]):null)}});const Vh=Pt({enhance:({app:e})=>{et("FontIcon")||e.component("FontIcon",yh),et("Badge")||e.component("Badge",Kc),et("VPCard")||e.component("VPCard",Qc),et("PDF")||e.component("PDF",Oh)},setup:()=>{qa("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),qa("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}}),qa("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js",()=>{},{attrs:{"data-auto-replace-svg":"nest"}})},rootComponents:[()=>o(Rh,{})]});function Sh(e,t,n){var r,a,l;t===void 0&&(t=50),n===void 0&&(n={});var i=(r=n.isImmediate)!=null&&r,s=(a=n.callback)!=null&&a,u=n.maxWait,p=Date.now(),E=[];function d(){if(u!==void 0){var v=Date.now()-p;if(v+t>=u)return u-v}return t}var h=function(){var v=[].slice.call(arguments),A=this;return new Promise(function(y,B){var b=i&&l===void 0;if(l!==void 0&&clearTimeout(l),l=setTimeout(function(){if(l=void 0,p=Date.now(),!i){var g=e.apply(A,v);s&&s(g),E.forEach(function(w){return(0,w.resolve)(g)}),E=[]}},d()),b){var C=e.apply(A,v);return s&&s(C),y(C)}E.push({resolve:y,reject:B})})};return h.cancel=function(v){l!==void 0&&clearTimeout(l),E.forEach(function(A){return(0,A.reject)(v)}),E=[]},h}const xh=({headerLinkSelector:e,headerAnchorSelector:t,delay:n,offset:r=5})=>{const a=He(),i=Sh(()=>{var y,B;const s=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(s-0)<r){ko(a,"");return}const p=window.innerHeight+s,E=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),d=Math.abs(E-p)<r,h=Array.from(document.querySelectorAll(e)),A=Array.from(document.querySelectorAll(t)).filter(b=>h.some(C=>C.hash===b.hash));for(let b=0;b<A.length;b++){const C=A[b],g=A[b+1],w=s>=(((y=C.parentElement)==null?void 0:y.offsetTop)??0)-r,x=!g||s<(((B=g.parentElement)==null?void 0:B.offsetTop)??0)-r;if(!(w&&x))continue;const S=decodeURIComponent(a.currentRoute.value.hash),F=decodeURIComponent(C.hash);if(S===F)return;if(d){for(let R=b+1;R<A.length;R++)if(S===decodeURIComponent(A[R].hash))return}ko(a,F);return}},n);ge(()=>{window.addEventListener("scroll",i)}),$l(()=>{window.removeEventListener("scroll",i)})},ko=async(e,t)=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=void 0,await e.replace({query:e.currentRoute.value.query,hash:t}).finally(()=>e.options.scrollBehavior=n)},Mh=".vp-sidebar-link, .toc-link",zh=".header-anchor",$h=200,Nh=5,jh=Pt({setup(){xh({headerLinkSelector:Mh,headerAnchorSelector:zh,delay:$h,offset:Nh})}});let Xc=e=>le(e.title)?{title:e.title}:null;const Zc=Symbol(""),Hh=e=>{Xc=e},qh=()=>fe(Zc),Gh=e=>{e.provide(Zc,Xc)};var Uh={"/zh/":{title:"目录",empty:"暂无目录"},"/":{title:"Catalog",empty:"No catalog"}},Jh=z({name:"AutoCatalog",props:{base:{type:String,default:""},level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(e){const t=qh(),n=zn(Uh),r=me(),a=He(),l=lc(),i=Ve(a.getRoutes().filter(({path:u})=>zr(u,".html")&&!zr(u,"/index.html")||zr(u,"/")).map(({meta:u,path:p})=>{const E=t(u);if(!E)return null;const d=p.split("/").length;return{level:zr(p,"/")?d-2:d-1,base:p.replace(/\/[^/]+\/?$/,"/"),path:p,...E}}).filter(u=>wc(u)&&le(u.title))),s=D(()=>{const u=e.base?rd(Gl(e.base)):r.value.path.replace(/\/[^/]+$/,"/"),p=u.split("/").length-2,E=[];return i.value.filter(({level:d,path:h})=>{if(!On(h,u)||h===u)return!1;if(u==="/"){const v=tt(l.value.locales).filter(A=>A!=="/");if(h==="/404.html"||v.some(A=>On(h,A)))return!1}return d-p<=e.level}).sort(({title:d,level:h,order:v},{title:A,level:y,order:B})=>h-y||(ja(v)?ja(B)?v>0?B>0?v-B:-1:B<0?v-B:1:v:ja(B)?B:d.localeCompare(A))).forEach(d=>{var A;const{base:h,level:v}=d;switch(v-p){case 1:{E.push(d);break}case 2:{const y=E.find(B=>B.path===h);y&&(y.children??(y.children=[])).push(d);break}default:{const y=E.find(B=>B.path===h.replace(/\/[^/]+\/$/,"/"));if(y){const B=(A=y.children)==null?void 0:A.find(b=>b.path===h);B&&(B.children??(B.children=[])).push(d)}}}}),E});return()=>{const u=s.value.some(p=>p.children);return o("div",{class:["vp-catalog-wrapper",{index:e.index}]},[e.hideHeading?null:o("h2",{class:"vp-catalog-main-title"},n.value.title),s.value.length?o(e.index?"ol":"ul",{class:["vp-catalogs",{deep:u}]},s.value.map(({children:p=[],title:E,path:d,content:h})=>{const v=o(Ie,{class:"vp-catalog-title",to:d},()=>h?o(h):E);return o("li",{class:"vp-catalog"},u?[o("h3",{id:E,class:["vp-catalog-child-title",{"has-children":p.length}]},[o("a",{href:`#${E}`,class:"header-anchor","aria-hidden":!0},"#"),v]),p.length?o(e.index?"ol":"ul",{class:"vp-child-catalogs"},p.map(({children:A=[],content:y,path:B,title:b})=>o("li",{class:"vp-child-catalog"},[o("div",{class:["vp-catalog-sub-title",{"has-children":A.length}]},[o("a",{href:`#${b}`,class:"header-anchor"},"#"),o(Ie,{class:"vp-catalog-title",to:B},()=>y?o(y):b)]),A.length?o(e.index?"ol":"div",{class:e.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},A.map(({content:C,path:g,title:w})=>e.index?o("li",{class:"vp-sub-catalog"},o(Ie,{to:g},()=>C?o(C):w)):o(Ie,{class:"vp-sub-catalog-link",to:g},()=>C?o(C):w))):null]))):null]:o("div",{class:"vp-catalog-child-title"},v))})):o("p",{class:"vp-empty-catalog"},n.value.empty)])}}}),Wh=Pt({enhance:({app:e})=>{Gh(e),et("AutoCatalog",e)||e.component("AutoCatalog",Jh)}});const Kh=o("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[o("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),o("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),eu=z({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const t=Lt(),n=D(()=>e.locales[t.value]??{openInNewWindow:"open in new window"});return()=>o("span",[Kh,o("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}});var Qh={};const Yh=Qh,Xh=Pt({enhance({app:e}){e.component("ExternalLinkIcon",o(eu,{locales:Yh}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const pe={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const t=pe.isStarted();e=Ua(e,pe.settings.minimum,1),pe.status=e===1?null:e;const n=pe.render(!t),r=n.querySelector(pe.settings.barSelector),a=pe.settings.speed,l=pe.settings.easing;return n.offsetWidth,Zh(i=>{Hr(r,{transform:"translate3d("+Io(e)+"%,0,0)",transition:"all "+a+"ms "+l}),e===1?(Hr(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){Hr(n,{transition:"all "+a+"ms linear",opacity:"0"}),setTimeout(function(){pe.remove(),i()},a)},a)):setTimeout(()=>i(),a)}),pe},isStarted:()=>typeof pe.status=="number",start:()=>{pe.status||pe.set(0);const e=()=>{setTimeout(()=>{pe.status&&(pe.trickle(),e())},pe.settings.trickleSpeed)};return pe.settings.trickle&&e(),pe},done:e=>!e&&!pe.status?pe:pe.inc(.3+.5*Math.random()).set(1),inc:e=>{let t=pe.status;return t?(typeof e!="number"&&(e=(1-t)*Ua(Math.random()*t,.1,.95)),t=Ua(t+e,0,.994),pe.set(t)):pe.start()},trickle:()=>pe.inc(Math.random()*pe.settings.trickleRate),render:e=>{if(pe.isRendered())return document.getElementById("nprogress");Oo(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=pe.settings.template;const n=t.querySelector(pe.settings.barSelector),r=e?"-100":Io(pe.status||0),a=document.querySelector(pe.settings.parent);return Hr(n,{transition:"all 0 linear",transform:"translate3d("+r+"%,0,0)"}),a!==document.body&&Oo(a,"nprogress-custom-parent"),a==null||a.appendChild(t),t},remove:()=>{Fo(document.documentElement,"nprogress-busy"),Fo(document.querySelector(pe.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&e1(e)},isRendered:()=>!!document.getElementById("nprogress")},Ua=(e,t,n)=>e<t?t:e>n?n:e,Io=e=>(-1+e)*100,Zh=function(){const e=[];function t(){const n=e.shift();n&&n(t)}return function(n){e.push(n),e.length===1&&t()}}(),Hr=function(){const e=["Webkit","O","Moz","ms"],t={};function n(i){return i.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(s,u){return u.toUpperCase()})}function r(i){const s=document.body.style;if(i in s)return i;let u=e.length;const p=i.charAt(0).toUpperCase()+i.slice(1);let E;for(;u--;)if(E=e[u]+p,E in s)return E;return i}function a(i){return i=n(i),t[i]??(t[i]=r(i))}function l(i,s,u){s=a(s),i.style[s]=u}return function(i,s){for(const u in s){const p=s[u];p!==void 0&&Object.prototype.hasOwnProperty.call(s,u)&&l(i,u,p)}}}(),tu=(e,t)=>(typeof e=="string"?e:ti(e)).indexOf(" "+t+" ")>=0,Oo=(e,t)=>{const n=ti(e),r=n+t;tu(n,t)||(e.className=r.substring(1))},Fo=(e,t)=>{const n=ti(e);if(!tu(e,t))return;const r=n.replace(" "+t+" "," ");e.className=r.substring(1,r.length-1)},ti=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),e1=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)},t1=()=>{ge(()=>{const e=He(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||pe.start()}),e.afterEach(n=>{t.add(n.path),pe.done()})})},n1=Pt({setup(){t1()}}),r1=JSON.parse(`{"encrypt":{},"author":{"name":"Liz","url":"https://github.com/liz-starfield"},"logo":"/blogger.png","repo":"https://github.com/liz-starfield","docsDir":"src","blog":{"medias":{"GitHub":"https://github.com/liz-starfield"}},"displayFooter":false,"editLink":false,"lastUpdated":false,"contributors":false,"locales":{"/zh/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"sidebar":{"/zh/":["","intro",{"text":"博客","icon":"book","prefix":"posts/","collapsible":true,"children":[{"text":"LLM","collapsible":true,"link":"LLM/","prefix":"LLM/","children":"structure"},{"text":"LangChain","collapsible":true,"link":"langchain/","prefix":"langchain/","children":"structure"},{"text":"RAG","collapsible":true,"link":"rag/","prefix":"rag/","children":"structure"},{"text":"Python","collapsible":true,"link":"python/","prefix":"python/","children":"structure"},{"text":"Pytorch","collapsible":true,"link":"pytorch/","prefix":"pytorch/","children":"structure"},{"text":"MySQL","collapsible":true,"link":"mysql/","prefix":"mysql/","children":"structure"},{"text":"Redis","collapsible":true,"link":"redis/","prefix":"redis/","children":"structure"},{"text":"MQ","collapsible":true,"link":"mq/","prefix":"mq/","children":"structure"},{"text":"Spring","collapsible":true,"link":"spring/","prefix":"spring/","children":"structure"},{"text":"Java","collapsible":true,"link":"java/","prefix":"java/","children":"structure"},{"text":"JVM","collapsible":true,"link":"jvm/","prefix":"jvm/","children":"structure"},{"text":"JUC","collapsible":true,"link":"juc/","prefix":"juc/","children":"structure"},{"text":"Frontend","collapsible":true,"link":"frontend/","prefix":"frontend/","children":"structure"},{"text":"Linux","collapsible":true,"link":"linux/","prefix":"linux/","children":"structure"},{"text":"Docker","collapsible":true,"link":"docker/","prefix":"docker/","children":"structure"},{"text":"API","collapsible":true,"link":"api/","prefix":"api/","children":"structure"},{"text":"Code","collapsible":true,"link":"code/","prefix":"code/","children":"structure"},{"text":"CS","collapsible":true,"link":"cs/","prefix":"cs/","children":"structure"},{"text":"MicroService","collapsible":true,"link":"micro_service/","prefix":"micro_service/","children":"structure"},{"text":"Tools","collapsible":true,"link":"tools/","prefix":"tools/","children":"structure"},{"text":"Language","collapsible":true,"link":"Language/","prefix":"Language/","children":"structure"}]}]},"navbar":["/zh/","/zh/posts/","/zh/demo/"],"blog":{"description":"","intro":"/zh/intro.html"}},"/":{"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page on GitHub","print":"Print"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star","empty":"No $text"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"routeLocales":{"skipToContent":"Skip to main content","notFoundTitle":"Page not found","notFoundMsg":["There’s nothing here.","How did we get here?","That’s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"sidebar":{"/":["","intro",{"text":"Blog","icon":"book","prefix":"posts/","collapsible":true,"children":[{"text":"LLM","collapsible":true,"link":"LLM/","prefix":"LLM/","children":"structure"},{"text":"Python","collapsible":true,"link":"Python/","prefix":"Python/","children":"structure"},{"text":"Pytorch","collapsible":true,"link":"pytorch/","prefix":"pytorch/","children":"structure"},{"text":"MySQL","collapsible":true,"link":"mysql/","prefix":"mysql/","children":"structure"},{"text":"Redis","collapsible":true,"link":"redis/","prefix":"redis/","children":"structure"},{"text":"MQ","collapsible":true,"link":"mq/","prefix":"mq/","children":"structure"},{"text":"Spring","collapsible":true,"link":"spring/","prefix":"spring/","children":"structure"},{"text":"Java","collapsible":true,"link":"java/","prefix":"java/","children":"structure"},{"text":"JVM","collapsible":true,"link":"jvm/","prefix":"jvm/","children":"structure"},{"text":"JUC","collapsible":true,"link":"juc/","prefix":"juc/","children":"structure"},{"text":"Frontend","collapsible":true,"link":"frontend/","prefix":"frontend/","children":"structure"},{"text":"Linux","collapsible":true,"link":"linux/","prefix":"linux/","children":"structure"},{"text":"Docker","collapsible":true,"link":"docker/","prefix":"docker/","children":"structure"},{"text":"API","collapsible":true,"link":"api/","prefix":"api/","children":"structure"},{"text":"Code","collapsible":true,"link":"code/","prefix":"code/","children":"structure"},{"text":"CS","collapsible":true,"link":"cs/","prefix":"cs/","children":"structure"},{"text":"MicroService","collapsible":true,"link":"micro_service/","prefix":"micro_service/","children":"structure"},{"text":"Tools","collapsible":true,"link":"tools/","prefix":"tools/","children":"structure"},{"text":"Language","collapsible":true,"link":"Language/","prefix":"Language/","children":"structure"}]}]},"navbar":["/","/posts/","/demo/"],"blog":{"description":"","intro":"/intro.html"}}}}`),a1=X(r1),nu=()=>a1,ru=Symbol(""),l1=()=>{const e=fe(ru);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},i1=(e,t)=>{const{locales:n,...r}=e;return{...r,...n==null?void 0:n[t]}},o1=Pt({enhance({app:e}){const t=nu(),n=e._context.provides[Jl],r=D(()=>i1(t.value,n.value));e.provide(ru,r),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return r.value}}})}});var s1={"/zh/":{copy:"复制代码",copied:"已复制",hint:"复制成功"},"/":{copy:"Copy code",copied:"Copied",hint:"Copied successfully"}},c1=['.theme-hope-content div[class*="language-"] pre'];const u1=800,p1=2e3,E1=s1,d1=c1,Ro=!1,Ja=new Map,h1=()=>{const{copy:e}=ph({legacy:!0}),t=zn(E1),n=me(),r=Y0(),a=s=>{if(!s.hasAttribute("copy-code-registered")){const u=document.createElement("button");u.type="button",u.classList.add("copy-code-button"),u.innerHTML='<div class="copy-icon" />',u.setAttribute("aria-label",t.value.copy),u.setAttribute("data-copied",t.value.copied),s.parentElement&&s.parentElement.insertBefore(u,s),s.setAttribute("copy-code-registered","")}},l=()=>{En().then(()=>setTimeout(()=>{d1.forEach(s=>{document.querySelectorAll(s).forEach(a)})},u1))},i=(s,u,p)=>{let{innerText:E=""}=u;/language-(shellscript|shell|bash|sh|zsh)/.test(s.classList.toString())&&(E=E.replace(/^ *(\$|>) /gm,"")),e(E).then(()=>{p.classList.add("copied"),clearTimeout(Ja.get(p));const d=setTimeout(()=>{p.classList.remove("copied"),p.blur(),Ja.delete(p)},p1);Ja.set(p,d)})};ge(()=>{(!r.value||Ro)&&l(),Se("click",s=>{const u=s.target;if(u.matches('div[class*="language-"] > button.copy')){const p=u.parentElement,E=u.nextElementSibling;E&&i(p,E,u)}else if(u.matches('div[class*="language-"] div.copy-icon')){const p=u.parentElement,E=p.parentElement,d=p.nextElementSibling;d&&i(E,d,p)}}),he(()=>n.value.path,()=>{(!r.value||Ro)&&l()})})};var f1=Pt({setup:()=>{h1()}});const qr=Zl("VUEPRESS_CODE_TAB_STORE",{});var v1=z({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const n=X(e.active),r=Ve([]),a=()=>{e.tabId&&(qr.value[e.tabId]=e.data[n.value].id)},l=(p=n.value)=>{n.value=p<r.value.length-1?p+1:0,r.value[n.value].focus()},i=(p=n.value)=>{n.value=p>0?p-1:r.value.length-1,r.value[n.value].focus()},s=(p,E)=>{p.key===" "||p.key==="Enter"?(p.preventDefault(),n.value=E):p.key==="ArrowRight"?(p.preventDefault(),l()):p.key==="ArrowLeft"&&(p.preventDefault(),i()),e.tabId&&(qr.value[e.tabId]=e.data[n.value].id)},u=()=>{if(e.tabId){const p=e.data.findIndex(({id:E})=>qr.value[e.tabId]===E);if(p!==-1)return p}return e.active};return ge(()=>{n.value=u(),he(()=>qr.value[e.tabId],(p,E)=>{if(e.tabId&&p!==E){const d=e.data.findIndex(({id:h})=>h===p);d!==-1&&(n.value=d)}})}),()=>e.data.length?o("div",{class:"vp-code-tabs"},[o("div",{class:"vp-code-tabs-nav",role:"tablist"},e.data.map(({id:p},E)=>{const d=E===n.value;return o("button",{type:"button",ref:h=>{h&&(r.value[E]=h)},class:["vp-code-tab-nav",{active:d}],role:"tab","aria-controls":`codetab-${e.id}-${E}`,"aria-selected":d,onClick:()=>{n.value=E,a()},onKeydown:h=>s(h,E)},t[`title${E}`]({value:p,isActive:d}))})),e.data.map(({id:p},E)=>{const d=E===n.value;return o("div",{class:["vp-code-tab",{active:d}],id:`codetab-${e.id}-${E}`,role:"tabpanel","aria-expanded":d},[o("div",{class:"vp-code-tab-title"},t[`title${E}`]({value:p,isActive:d})),t[`tab${E}`]({value:p,isActive:d})])})]):null}});const au=({active:e=!1},{slots:t})=>{var n;return o("div",{class:["code-group-item",{active:e}],"aria-selected":e},(n=t.default)==null?void 0:n.call(t))};au.displayName="CodeGroupItem";const m1=z({name:"CodeGroup",slots:Object,setup(e,{slots:t}){const n=X(-1),r=Ve([]),a=(s=n.value)=>{n.value=s<r.value.length-1?s+1:0,r.value[n.value].focus()},l=(s=n.value)=>{n.value=s>0?s-1:r.value.length-1,r.value[n.value].focus()},i=(s,u)=>{s.key===" "||s.key==="Enter"?(s.preventDefault(),n.value=u):s.key==="ArrowRight"?(s.preventDefault(),a(u)):s.key==="ArrowLeft"&&(s.preventDefault(),l(u))};return()=>{var u;const s=(((u=t.default)==null?void 0:u.call(t))||[]).filter(p=>p.type.name==="CodeGroupItem").map(p=>(p.props===null&&(p.props={}),p));return s.length===0?null:(n.value<0||n.value>s.length-1?(n.value=s.findIndex(p=>"active"in p.props),n.value===-1&&(n.value=0)):s.forEach((p,E)=>{p.props.active=E===n.value}),o("div",{class:"code-group"},[o("div",{class:"code-group-nav"},s.map((p,E)=>{const d=E===n.value;return o("button",{type:"button",ref:h=>{h&&(r.value[E]=h)},class:["code-group-nav-tab",{active:d}],"aria-pressed":d,"aria-expanded":d,onClick:()=>{n.value=E},onKeydown:h=>i(h,E)},p.props.title)})),s]))}}}),_1='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',A1='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>';var g1={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const Wa=g1,Vo={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},b1=(e,t,n)=>{const r=document.createElement(e);return da(t)&&tt(t).forEach(a=>{if(a.indexOf("data"))r[a]=t[a];else{const l=a.replace("data","");r.dataset[l]=t[a]}}),n&&n.forEach(a=>{r.appendChild(a)}),r},ni=e=>({...Wa,...e,jsLib:Array.from(new Set([...Wa.jsLib||[],...e.jsLib||[]])),cssLib:Array.from(new Set([...Wa.cssLib||[],...e.cssLib||[]]))}),yn=(e,t)=>{if(e[t]!==void 0)return e[t];const n=new Promise(r=>{var l;const a=document.createElement("script");a.src=t,(l=document.querySelector("body"))==null||l.appendChild(a),a.onload=()=>{r()}});return e[t]=n,n},B1=(e,t)=>{if(t.css&&Array.from(e.childNodes).every(n=>n.nodeName!=="STYLE")){const n=b1("style",{innerHTML:t.css});e.appendChild(n)}},y1=(e,t,n)=>{const r=n.getScript();if(r&&Array.from(t.childNodes).every(a=>a.nodeName!=="SCRIPT")){const a=document.createElement("script");a.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e} .vp-code-demo-display').shadowRoot;
${r}}`)),t.appendChild(a)}},D1=e=>{const t=tt(e),n={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(r=>{const a=t.filter(l=>Vo[r].types.includes(l));if(a.length){const l=a[0];n[r]=[e[l].replace(/^\n|\n$/g,""),Vo[r].map[l]||l]}}),n.isLegal=(!n.html.length||n.html[1]==="none")&&(!n.js.length||n.js[1]==="none")&&(!n.css.length||n.css[1]==="none"),n},lu=e=>e.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),iu=e=>`<div id="app">
${lu(e)}
</div>`,L1=e=>`${e.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,P1=e=>e.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),ou=e=>`(function(exports){var module={};module.exports=exports;${e};return module.exports.__esModule?module.exports.default:module.exports;})({})`,C1=(e,t)=>{const n=ni(t),r=e.js[0]||"";return{...n,html:lu(e.html[0]||""),js:r,css:e.css[0]||"",isLegal:e.isLegal,getScript:()=>{var a;return n.useBabel?((a=window.Babel.transform(r,{presets:["es2015"]}))==null?void 0:a.code)||"":r}}},w1=/<template>([\s\S]+)<\/template>/u,T1=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,k1=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,I1=(e,t)=>{const n=ni(t),r=e.html[0]||"",a=w1.exec(r),l=T1.exec(r),i=k1.exec(r),s=a?a[1].replace(/^\n|\n$/g,""):"",[u="",p=""]=l?[l[4].replace(/^\n|\n$/g,""),l[3]]:[],[E="",d=""]=i?[i[4].replace(/^\n|\n$/g,""),i[3]]:[],h=p===""&&(d===""||d==="css");return{...n,html:iu(s),js:P1(u),css:E,isLegal:h,jsLib:[n.vue,...n.jsLib],getScript:()=>{var A,y;const v=t.useBabel?((y=(A=window.Babel)==null?void 0:A.transform(u,{presets:["es2015"]}))==null?void 0:y.code)||"":u.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${ou(v)};appOptions.template=\`${s.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},O1=(e,t)=>{const n=ni(t);return{...n,html:iu(""),js:L1(e.js[0]||""),css:e.css[0]||(e.js[0]?e.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:e.isLegal,jsLib:[n.react,n.reactDOM,...n.jsLib],jsx:!0,getScript:()=>{var a,l;const r=((l=(a=window.Babel)==null?void 0:a.transform(e.js[0]||"",{presets:["es2015","react"]}))==null?void 0:l.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${ou(r)}))`}}},Dn={},F1=e=>Promise.all([yn(Dn,e.babel),yn(Dn,e.react),yn(Dn,e.reactDOM)]),R1=e=>{const t=[yn(Dn,e.vue)];return e.useBabel&&t.push(yn(Dn,e.babel)),Promise.all(t)},V1=e=>e.useBabel?yn(Dn,e.babel):Promise.resolve();var S1=z({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const[n,r]=aa(!1),a=Ve(),l=Ve(),i=X("0"),s=X(!1),u=D(()=>JSON.parse(e.config?yo(e.config):"{}")),p=D(()=>{const A=JSON.parse(yo(e.code));return D1(A)}),E=D(()=>e.type==="react"?O1(p.value,u.value):e.type==="vue"?I1(p.value,u.value):C1(p.value,u.value)),d=D(()=>E.value.isLegal),h=(A=!1)=>{const y=a.value.attachShadow({mode:"open"}),B=document.createElement("div");B.classList.add("code-demo-app"),y.appendChild(B),d.value?(A&&(B.innerHTML=E.value.html),B1(y,E.value),y1(e.id,y,E.value),i.value="0"):i.value="auto",s.value=!0},v=()=>{switch(e.type){case"react":return F1(E.value).then(()=>h());case"vue":return R1(E.value).then(()=>h());default:return V1(E.value).then(()=>h(!0))}};return Se("beforeprint",()=>{r(!0)}),ge(()=>{setTimeout(()=>{v()},800)}),()=>{var A;return o("div",{class:"vp-code-demo",id:e.id},[o("div",{class:"vp-code-demo-header"},[E.value.isLegal?o("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-code-demo-toggle-button",n.value?"down":"end"],onClick:()=>{i.value=n.value?"0":`${l.value.clientHeight+13.8}px`,r()}}):null,e.title?o("span",{class:"vp-code-demo-title"},decodeURIComponent(e.title)):null,E.value.isLegal&&E.value.jsfiddle!==!1?o("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[o("input",{type:"hidden",name:"html",value:E.value.html}),o("input",{type:"hidden",name:"js",value:E.value.js}),o("input",{type:"hidden",name:"css",value:E.value.css}),o("input",{type:"hidden",name:"wrap",value:"1"}),o("input",{type:"hidden",name:"panel_js",value:"3"}),o("input",{type:"hidden",name:"resources",value:[...E.value.cssLib,...E.value.jsLib].join(",")}),o("button",{type:"submit",class:"jsfiddle-button",innerHTML:A1,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!E.value.isLegal||E.value.codepen!==!1?o("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[o("input",{type:"hidden",name:"data",value:JSON.stringify({html:E.value.html,js:E.value.js,css:E.value.css,js_external:E.value.jsLib.join(";"),css_external:E.value.cssLib.join(";"),layout:E.value.codepenLayout,html_pre_processor:p.value?p.value.html[1]:"none",js_pre_processor:p.value?p.value.js[1]:E.value.jsx?"babel":"none",css_pre_processor:p.value?p.value.css[1]:"none",editors:E.value.codepenEditors})}),o("button",{type:"submit",innerHTML:_1,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),s.value?null:o(Lc,{class:"vp-code-demo-loading"}),o("div",{ref:a,class:"vp-code-demo-display",style:{display:d.value&&s.value?"block":"none"}}),o("div",{class:"vp-code-demo-code-wrapper",style:{height:i.value}},o("div",{ref:l,class:"vp-code-demo-codes"},(A=t.default)==null?void 0:A.call(t)))])}}}),x1=z({name:"MdDemo",props:{id:{type:String,required:!0},title:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const[n,r]=aa(!1),a=Ve(),l=X("0");return Se("beforeprint",()=>{r(!0)}),()=>{var i,s;return o("div",{class:"vp-md-demo",id:e.id},[o("div",{class:"vp-md-demo-header"},[o("button",{type:"button",title:"toggle","aria-hidden":!0,class:["vp-md-demo-toggle-button",n.value?"down":"end"],onClick:()=>{l.value=n.value?"0":`${a.value.clientHeight+13.8}px`,r()}}),e.title?decodeURIComponent(e.title):null]),o("div",{class:"vp-md-demo-display"},(i=t.default)==null?void 0:i.call(t)),o("div",{class:"vp-md-demo-code-wrapper",style:{height:l.value}},o("div",{ref:a,class:"vp-md-demo-codes"},(s=t.code)==null?void 0:s.call(t)))])}}});const M1=()=>{Se("beforeprint",()=>{document.querySelectorAll("details").forEach(e=>{e.open=!0})})},Ka=Zl("VUEPRESS_TAB_STORE",{});var z1=z({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},slots:Object,setup(e,{slots:t}){const n=X(e.active),r=Ve([]),a=()=>{e.tabId&&(Ka.value[e.tabId]=e.data[n.value].id)},l=(p=n.value)=>{n.value=p<r.value.length-1?p+1:0,r.value[n.value].focus()},i=(p=n.value)=>{n.value=p>0?p-1:r.value.length-1,r.value[n.value].focus()},s=(p,E)=>{p.key===" "||p.key==="Enter"?(p.preventDefault(),n.value=E):p.key==="ArrowRight"?(p.preventDefault(),l()):p.key==="ArrowLeft"&&(p.preventDefault(),i()),a()},u=()=>{if(e.tabId){const p=e.data.findIndex(({id:E})=>Ka.value[e.tabId]===E);if(p!==-1)return p}return e.active};return ge(()=>{n.value=u(),he(()=>Ka.value[e.tabId],(p,E)=>{if(e.tabId&&p!==E){const d=e.data.findIndex(({id:h})=>h===p);d!==-1&&(n.value=d)}})}),()=>e.data.length?o("div",{class:"vp-tabs"},[o("div",{class:"vp-tabs-nav",role:"tablist"},e.data.map(({id:p},E)=>{const d=E===n.value;return o("button",{type:"button",ref:h=>{h&&(r.value[E]=h)},class:["vp-tab-nav",{active:d}],role:"tab","aria-controls":`tab-${e.id}-${E}`,"aria-selected":d,onClick:()=>{n.value=E,a()},onKeydown:h=>s(h,E)},t[`title${E}`]({value:p,isActive:d}))})),e.data.map(({id:p},E)=>{const d=E===n.value;return o("div",{class:["vp-tab",{active:d}],id:`tab-${e.id}-${E}`,role:"tabpanel","aria-expanded":d},[o("div",{class:"vp-tab-title"},t[`title${E}`]({value:p,isActive:d})),t[`tab${E}`]({value:p,isActive:d})])})]):null}});const $1=Pt({enhance:({app:e})=>{e.component("CodeTabs",v1),et("CodeGroup",e)||e.component("CodeGroup",m1),et("CodeGroupItem",e)||e.component("CodeGroupItem",au),e.component("CodeDemo",S1),e.component("MdDemo",x1),e.component("Tabs",z1)},setup:()=>{M1()}});let N1={};const su=Symbol(""),j1=()=>fe(su),H1=e=>{e.provide(su,N1)};var q1={"/zh/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"},"/":{closeTitle:"Close",downloadTitle:"Download Image",fullscreenTitle:"Switch to full screen",zoomTitle:"Zoom in/out",arrowPrevTitle:"Prev (Arrow Left)",arrowNextTitle:"Next (Arrow Right)"}};const G1=".theme-hope-content :not(a) > img:not([no-view])",U1=q1,J1=800,W1='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',K1=e=>le(e)?Array.from(document.querySelectorAll(e)):e.map(t=>Array.from(document.querySelectorAll(t))).flat(),cu=e=>new Promise((t,n)=>{e.complete?t({type:"image",element:e,src:e.src,width:e.naturalWidth,height:e.naturalHeight,alt:e.alt,msrc:e.src}):(e.onload=()=>t(cu(e)),e.onerror=r=>n(r))}),Q1=()=>{const e=zn(U1),t=Be(),n=me(),{isSupported:r,toggle:a}=ei(),l=j1();let i;const s=D(()=>t.value.photoSwipe===!1?!1:t.value.photoSwipe||G1),u=E=>{E.on("uiRegister",()=>{r&&E.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{a()}}),E.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(d,h)=>{d.setAttribute("download",""),d.setAttribute("target","_blank"),d.setAttribute("rel","noopener"),h.on("change",()=>{d.setAttribute("href",h.currSlide.data.src)})}}),E.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:(d,h)=>{const v=[];let A=-1;for(let y=0;y<h.getNumItems();y++){const B=document.createElement("div");B.className="photo-swipe-bullet",B.onclick=b=>{h.goTo(v.indexOf(b.target))},v.push(B),d.appendChild(B)}h.on("change",()=>{A>=0&&v[A].classList.remove("active"),v[h.currIndex].classList.add("active"),A=h.currIndex})}})})},p=async()=>{if(s.value)return Promise.all([c(()=>import("./photoswipe.esm-08_zHRDQ.js"),__vite__mapDeps([])),En().then(()=>new Promise(E=>setTimeout(E,J1)).then(()=>K1(s.value)))]).then(([{default:E},d])=>{const h=d.map(v=>({html:W1,element:v,msrc:v.src}));d.forEach((v,A)=>{const y=()=>{i=new E({preloaderDelay:0,showHideAnimationType:"zoom",...e.value,...l,dataSource:h,index:A,closeOnVerticalDrag:!0,wheelToZoom:!1}),u(i),i.addFilter("thumbEl",()=>v),i.addFilter("placeholderSrc",()=>v.src),i.init()};v.style.cursor="zoom-in",v.addEventListener("click",()=>{y()}),v.addEventListener("keypress",({key:B})=>{B==="Enter"&&y()})}),d.forEach((v,A)=>{cu(v).then(y=>{h.splice(A,1,y),i==null||i.refreshSlideContent(A)})})})};ge(()=>{Se("wheel",()=>{i==null||i.close()}),he(()=>n.value.path,p,{immediate:!0})})};var Y1=Pt({enhance:({app:e})=>{H1(e)},setup:()=>{Q1()}}),So={"/zh/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"},"/":{word:"About $word words",less1Minute:"Less than 1 minute",time:"About $time min"}};const uu=()=>{const e=me();return D(()=>e.value.readingTime??null)},fl=typeof So>"u"?null:So,pu=(e,t)=>{const{minutes:n,words:r}=e,{less1Minute:a,word:l,time:i}=t;return{time:n<1?a:i.replace("$time",Math.round(n).toString()),words:l.replace("$word",r.toString())}},xo={words:"",time:""},Eu=()=>fl?zn(fl):D(()=>null),X1=()=>{if(typeof fl>"u")return D(()=>xo);const e=uu(),t=Eu();return D(()=>e.value&&t.value?pu(e.value,t.value):xo)},xt=()=>nu(),oe=()=>l1(),hn=()=>{const e=xt();return D(()=>!!e.value.pure)};var Mo=z({name:"EmptyComponent",setup:()=>()=>null});const Z1="719px",ef="1440px",tf="false",ri={mobileBreakPoint:Z1,pcBreakPoint:ef,enableThemeColor:tf},ai={"/zh/posts/LLM/":["langchain","langchain_source_code","streamlit","transformer","llama","llama_advanced","llm_summary"],"/zh/posts/langchain/":["langchain","langchain_source_code","streamlit"],"/zh/posts/rag/":[],"/zh/posts/python/":["01_python_environment","02_python_data_type","03_python_operator","04_python_method","05_python_builtin_module","06_python_popular_package"],"/zh/posts/pytorch/":["01_ai_concept","02_neural_net_train","03_pytorch_operation","04_pytorch_practice_nn","05_linear_nn","AI_evolution","06_heterogeneous_graph"],"/zh/posts/mysql/":["mysql","SQL"],"/zh/posts/redis/":["redis"],"/zh/posts/mq/":["mq"],"/zh/posts/spring/":["spring"],"/zh/posts/java/":["Java8学习笔记","基础","集合"],"/zh/posts/jvm/":["jvm"],"/zh/posts/juc/":["juc"],"/zh/posts/frontend/":["AntDesign","CSS","Expo","Frontend","HTML","JavaScript","npm","Practice","React"],"/zh/posts/linux/":["linux"],"/zh/posts/docker/":["Docker","K8S"],"/zh/posts/api/":["GraphQL"],"/zh/posts/code/":[{text:"Algorithm",prefix:"algorithm/",collapsible:!0,children:["0.时空复杂度","/zh/posts/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3_%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html","/zh/posts/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6_%E4%BD%8D%E8%BF%90%E7%AE%97.html","3.排序","4.二分查找","/zh/posts/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92_%E8%B4%AA%E5%BF%83.html","6.字符串","7.数学","8.算法技巧"]},{text:"Data Structure",prefix:"data_structure/",collapsible:!0,children:["1.数组","2.链表","3.栈","4.队列","5.堆（优先队列）","6.树","7.图","8.哈希表（散列表）"]},{text:"Language",prefix:"language/",collapsible:!0,children:["Java语言基础","python算法刷题语法快速恢复"]},"算法提升","经典题汇总（每个细分类限定10题以内）"],"/zh/posts/cs/":["CSAPP","Netty","RPC","操作系统","浏览器技能","网络","计算机技能"],"/zh/posts/micro_service/":["MicroService","MybatisPlus"],"/zh/posts/tools/":["IDEA_Keymap","IDEA_Problem_and_plugin","Markdown","Maven--java包管理工具","Poetry--python包管理工具"],"/zh/posts/Language/":["commen_mistakes","grammar","pronunciation","sentence_pattern_and_expression",{text:"Topics",prefix:"topics/",collapsible:!0,children:["careers","common","communication","computers","describing_something","dreams","graduating","greetings","hobbies","immigration","introducing_someone","phone","routine","time_and_weather","traits"]}],"/posts/LLM/":["langchain","langchain_source_code","streamlit","transformer","llama","llm_summary"],"/posts/Python/":["01_python_environment","02_python_data_type","03_python_operator","04_python_method","05_python_builtin_module","06_python_popular_package"],"/posts/pytorch/":["01_ai_concept","02_neural_net_train","03_pytorch_operation","04_pytorch_practice_nn","05_linear_nn","06_heterogeneous_graph"],"/posts/mysql/":["mysql","SQL"],"/posts/redis/":["redis"],"/posts/mq/":["mq"],"/posts/spring/":["spring"],"/posts/java/":["Java8学习笔记","基础","集合"],"/posts/jvm/":["jvm"],"/posts/juc/":["juc"],"/posts/frontend/":["AntDesign","CSS","Expo","Frontend","HTML","JavaScript","npm","Practice","React"],"/posts/linux/":["linux"],"/posts/docker/":["Docker","K8S"],"/posts/api/":["GraphQL"],"/posts/code/":[{text:"Algorithm",prefix:"algorithm/",collapsible:!0,children:["0.时空复杂度","/posts/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3_%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html","/posts/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6_%E4%BD%8D%E8%BF%90%E7%AE%97.html","3.排序","4.二分查找","/posts/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92_%E8%B4%AA%E5%BF%83.html","6.字符串","7.数学","8.算法技巧"]},{text:"Data Structure",prefix:"data_structure/",collapsible:!0,children:["1.数组","2.链表","3.栈","4.队列","5.堆（优先队列）","6.树","7.图","8.哈希表（散列表）"]},{text:"Language",prefix:"language/",collapsible:!0,children:["Java语言基础","python算法刷题语法快速恢复"]},"算法提升","经典题汇总（每个细分类限定10题以内）"],"/posts/cs/":["CSAPP","Netty","RPC","操作系统","浏览器技能","网络","计算机技能"],"/posts/micro_service/":["MicroService","MybatisPlus"],"/posts/tools/":["IDEA_Keymap","IDEA_Problem_and_plugin","Markdown","Maven--java包管理工具","Poetry--python包管理工具"],"/posts/Language/":["commen_mistakes","grammar","pronunciation","sentence_pattern_and_expression",{text:"Topics",prefix:"topics/",collapsible:!0,children:["careers","common","communication","computers","describing_something","dreams","graduating","greetings","hobbies","immigration","introducing_someone","phone","routine","time_and_weather","traits"]}]},du=e=>{const{icon:t="",color:n,size:r}=e,a=n||r?{}:null;return n&&(a.color=n),r&&(a.height=Number.isNaN(Number(r))?r:`${r}px`),dn(t)?o("img",{class:"icon",src:t,alt:"","no-view":"",style:a}):_a(t)?o("img",{class:"icon",src:ye(t),alt:"","aria-hidden":"","no-view":"",style:a}):o(ct("FontIcon"),e)};du.displayName="HopeIcon";var je=du;const yr=()=>{const e=He(),t=At();return n=>{if(n)if(_a(n))t.path!==n&&e.push(n);else if(Qs(n))window&&window.open(n);else{const r=t.path.slice(0,t.path.lastIndexOf("/"));e.push(`${r}/${encodeURI(n)}`)}}},hu=()=>{const e=oe(),t=Be();return D(()=>{const{author:n}=t.value;return n?ur(n):n===!1?[]:ur(e.value.author,!1)})},nf=()=>{const e=Be(),t=fe(Symbol.for("categoryMap"));return D(()=>Ic(e.value.category).map(n=>{var r;return{name:n,path:((r=t==null?void 0:t.value.map[n])==null?void 0:r.path)||""}}))},rf=()=>{const e=Be(),t=fe(Symbol.for("tagMap"));return D(()=>Oc(e.value.tag).map(n=>{var r;return{name:n,path:((r=t==null?void 0:t.value.map[n])==null?void 0:r.path)||""}}))},af=()=>{const e=Be(),t=me();return D(()=>{const n=Yl(e.value.date);if(n)return n;const{createdTime:r}=t.value.git||{};return r?new Date(r):null})},lf=()=>{const e=oe(),t=me(),n=Be(),r=hu(),a=nf(),l=rf(),i=af(),s=uu(),u=X1(),p=D(()=>({author:r.value,category:a.value,date:i.value,localizedDate:t.value.localizedDate,tag:l.value,isOriginal:n.value.isOriginal||!1,readingTime:s.value,readingTimeLocale:u.value,pageview:"pageview"in n.value?n.value.pageview:!0})),E=D(()=>"pageInfo"in n.value?n.value.pageInfo:"pageInfo"in e.value?e.value.pageInfo:null);return{info:p,items:E}},{mobileBreakPoint:of,pcBreakPoint:sf}=ri,zo=e=>e.endsWith("px")?Number(e.slice(0,-2)):null,Dr=()=>{const e=X(!1),t=X(!1),n=()=>{e.value=window.innerWidth<=(zo(of)??719),t.value=window.innerWidth>=(zo(sf)??1440)};return ge(()=>{n(),Se("resize",n,!1),Se("orientationchange",n,!1)}),{isMobile:e,isPC:t}},fu=Symbol(""),Lr=()=>{const e=fe(fu);if(!e)throw new Error("useDarkmode() is called without provider.");return e},cf=e=>{const t=xt(),n=mh(),r=D(()=>t.value.darkmode||"switch"),a=Zl("vuepress-theme-hope-scheme","auto"),l=D(()=>{const s=r.value;return s==="disable"?!1:s==="enable"?!0:s==="auto"?n.value:s==="toggle"?a.value==="dark":a.value==="dark"||a.value==="auto"&&n.value}),i=D(()=>{const s=r.value;return s==="switch"||s==="toggle"});e.provide(fu,{canToggle:i,config:r,isDarkmode:l,status:a}),Object.defineProperties(e.config.globalProperties,{$isDarkmode:{get:()=>l.value}})},uf=()=>{const{config:e,isDarkmode:t,status:n}=Lr();xl(()=>{e.value==="disable"?n.value="light":e.value==="enable"&&(n.value="dark")}),ge(()=>{he(t,r=>document.documentElement.setAttribute("data-theme",r?"dark":"light"),{immediate:!0})})};var We=z({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:["focusout"],slots:Object,setup(e,{attrs:t,emit:n,slots:r}){const a=At(),l=lc(),i=Sn(e,"config"),s=D(()=>dn(i.value.link)),u=D(()=>!s.value&&Qs(i.value.link)),p=D(()=>i.value.target||(s.value?"_blank":void 0)),E=D(()=>p.value==="_blank"),d=D(()=>!s.value&&!u.value&&!E.value),h=D(()=>i.value.rel||(E.value?"noopener noreferrer":void 0)),v=D(()=>i.value.ariaLabel||i.value.text),A=D(()=>{if(e.exact)return!1;const B=tt(l.value.locales);return B.length?B.every(b=>b!==i.value.link):i.value.link!=="/"}),y=D(()=>d.value?i.value.activeMatch?new RegExp(i.value.activeMatch).test(a.path):A.value?On(a.path,i.value.link):a.path===i.value.link:!1);return()=>{const{before:B,after:b,default:C}=r,{text:g,icon:w,link:x}=i.value;return d.value?o(Ie,{to:x,"aria-label":v.value,...t,class:["nav-link",{active:y.value},t.class],onFocusout:()=>n("focusout")},()=>C?C():[B?B():o(je,{icon:w}),g,b==null?void 0:b()]):o("a",{href:x,rel:h.value,target:p.value,"aria-label":v.value,...t,class:["nav-link",t.class],onFocusout:()=>n("focusout")},C?C():[B?B():o(je,{icon:w}),g,e.noExternalLinkIcon?null:o(eu),b==null?void 0:b()])}}});const Rn=(e,t,n=!1)=>"activeMatch"in t?new RegExp(t.activeMatch).test(e.path):Rc(e,t.link)?!0:t.children&&!n?t.children.some(r=>Rn(e,r)):!1,vu=(e,t)=>t.type==="group"?t.children.some(n=>n.type==="group"?vu(e,n):n.type==="page"&&Rn(e,n,!0))||"prefix"in t&&Rc(e,t.prefix):!1,mu=(e,t)=>le(e.link)?o(We,{...t,config:e}):o("p",t,[o(je,{icon:e.icon}),e.text]),_u=e=>{const t=At();return e?o("ul",{class:"vp-sidebar-sub-headers"},e.map(n=>o("li",{class:"vp-sidebar-sub-header"},[mu(n,{class:["vp-sidebar-link","vp-heading",{active:Rn(t,n,!0)}]}),_u(n.children)]))):null};var Ae=(e=>(e.type="y",e.title="t",e.shortTitle="s",e.icon="i",e.author="a",e.date="d",e.localizedDate="l",e.category="c",e.tag="g",e.isEncrypted="n",e.isOriginal="o",e.readingTime="r",e.excerpt="e",e.sticky="u",e.cover="v",e.index="I",e.order="O",e))(Ae||{}),Au=(e=>(e.article="a",e.home="h",e.slide="s",e.page="p",e))(Au||{});const on=(e="",t="")=>_a(t)?t:`${Gl(e)}${t}`,Ln=(e,t,n=!1)=>{let r=Fn(e,Tc(encodeURI(t)));r.name==="404"&&(r=Fn(e,t));const{fullPath:a,meta:l,name:i}=r;return{text:!n&&l[Ae.shortTitle]?l[Ae.shortTitle]:l[Ae.title]||t,link:i==="404"?t:a,...l[Ae.icon]?{icon:l[Ae.icon]}:{}}},ba=(e,t,n)=>n>0?t.map(r=>({type:"heading",text:r.title,link:`${e.path}#${r.slug}`,children:ba(e,r.children,n-1)})):[],vl=({config:e,router:t,page:n,headerDepth:r,prefix:a=""})=>{const l=(i,s=a)=>{var p;const u=le(i)?Ln(t,on(s,i)):i.link?{...i,...sr(i.link)?{}:{link:Ln(t,on(s,i.link)).link}}:i;if("children"in u){const E=on(s,u.prefix),d=u.children==="structure"?ai[E]:u.children;return{type:"group",...u,prefix:E,children:d.map(h=>l(h,E))}}return{type:"page",...u,children:u.link===n.path?ba(n,((p=n.headers[0])==null?void 0:p.level)===1?n.headers[0].children:n.headers,r):[]}};return e.map(i=>l(i))},pf=({config:e,router:t,page:n,headerDepth:r})=>{const a=tt(e).sort((l,i)=>i.length-l.length);for(const l of a)if(On(decodeURI(n.path),l)){const i=e[l];return i?vl({config:i==="structure"?ai[l]:i==="heading"?ba(n,n.headers,r):i,router:t,page:n,headerDepth:r,prefix:l}):[]}return console.warn(`${n.path} is missing sidebar config.`),[]},Ef=({config:e,router:t,routeLocale:n,page:r,headerDepth:a})=>e==="heading"?ba(r,r.headers,a):e==="structure"?vl({config:ai[n],router:t,page:r,headerDepth:a,prefix:n}):ee(e)?vl({config:e,router:t,page:r,headerDepth:a}):da(e)?pf({config:e,router:t,page:r,headerDepth:a}):[],gu=Symbol(""),df=()=>{const e=Be(),t=oe(),n=me(),r=Lt(),a=He(),l=D(()=>e.value.home?!1:e.value.sidebar??t.value.sidebar??"structure"),i=D(()=>e.value.headerDepth??t.value.headerDepth??2),s=Aa(()=>[l.value,i.value,n.value.path,null],()=>Ef({config:l.value,router:a,routeLocale:r.value,page:n.value,headerDepth:i.value}));mt(gu,s)},li=()=>{const e=fe(gu);if(!e)throw new Error("useSidebarItems() is called without provider.");return e};var hf=z({name:"PageFooter",setup(){const e=xt(),t=oe(),n=Be(),r=hu(),a=D(()=>{const{copyright:p,footer:E}=n.value;return E!==!1&&!!(p||E||t.value.displayFooter)}),l=D(()=>{const{footer:p}=n.value;return p===!1?!1:le(p)?p:t.value.footer||""}),i=D(()=>r.value.map(({name:p})=>p).join(", ")),s=p=>`Copyright © ${new Date().getFullYear()} ${i.value} ${p?`${p} Licensed`:""}`,u=D(()=>{const{copyright:p,license:E=""}=n.value,{license:d}=e.value,{copyright:h}=t.value;return p??(E?s(E):le(h)?h:i.value||d?s(d):!1)});return()=>a.value?o("footer",{class:"vp-footer-wrapper"},[l.value?o("div",{class:"vp-footer",innerHTML:l.value}):null,u.value?o("div",{class:"vp-copyright",innerHTML:u.value}):null]):null}}),bu=z({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},slots:Object,setup(e,{slots:t}){const n=me(),r=Sn(e,"config"),a=D(()=>r.value.ariaLabel||r.value.text),l=X(!1);he(()=>n.value.path,()=>{l.value=!1});const i=s=>{s.detail===0&&(l.value=!l.value)};return()=>{var s;return o("div",{class:["dropdown-wrapper",{open:l.value}]},[o("button",{type:"button",class:"dropdown-title","aria-label":a.value,onClick:i},[((s=t.title)==null?void 0:s.call(t))||o("span",{class:"title"},[o(je,{icon:r.value.icon}),e.config.text]),o("span",{class:"arrow"}),o("ul",{class:"nav-dropdown"},r.value.children.map((u,p)=>{const E=p===r.value.children.length-1;return o("li",{class:"dropdown-item"},"children"in u?[o("h4",{class:"dropdown-subtitle"},u.link?o(We,{config:u,onFocusout:()=>{u.children.length===0&&E&&(l.value=!1)}}):o("span",u.text)),o("ul",{class:"dropdown-subitem-wrapper"},u.children.map((d,h)=>o("li",{class:"dropdown-subitem"},o(We,{config:d,onFocusout:()=>{h===u.children.length-1&&E&&(l.value=!1)}}))))]:o(We,{config:u,onFocusout:()=>{E&&(l.value=!1)}}))}))])])}}});const Bu=()=>o(ce,{name:"i18n"},()=>[o("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);Bu.displayName="I18nIcon";const yu=(e,t,n="")=>le(t)?Ln(e,on(n,t)):"children"in t?{...t,...t.link&&!sr(t.link)?Ln(e,on(n,t.link)):{},children:t.children.map(r=>yu(e,r,on(n,t.prefix)))}:{...t,link:sr(t.link)?t.link:Ln(e,on(n,t.link)).link},Du=()=>{const e=oe(),t=He(),n=()=>(e.value.navbar||[]).map(r=>yu(t,r));return Aa(()=>e.value.navbar,()=>n())},ff=()=>{const e=He(),t=At(),n=Lt(),r=Mn(),a=xt(),l=oe();return Aa(()=>t.path,()=>{const i=tt(r.value.locales),s=en(a.value.extraLocales??{});if(i.length<2&&!s.length)return null;const{path:u,fullPath:p}=t,{navbarLocales:E}=l.value;return{text:"",ariaLabel:E==null?void 0:E.selectLangAriaLabel,children:[...i.map(d=>{var b,C,g;const h=((b=r.value.locales)==null?void 0:b[d])??{},v=((C=a.value.locales)==null?void 0:C[d])??{},A=h.lang||"",y=((g=v.navbarLocales)==null?void 0:g.langName)??A;let B;if(A===r.value.lang)B=u;else{const w=u.replace(n.value,d);B=e.getRoutes().some(x=>x.path===w)?p.replace(u,w):v.home??d}return{text:y,link:B}}),...s.map(([d,h])=>({text:d,link:h.replace(":route",t.path.replace(n.value,""))}))]}})},vf=()=>{const e=oe(),t=D(()=>e.value.repo||null),n=D(()=>t.value?W0(t.value):null),r=D(()=>t.value?Vc(t.value):null),a=D(()=>n.value?e.value.repoLabel??(r.value===null?"Source":r.value):null);return D(()=>!n.value||!a.value||e.value.repoDisplay===!1?null:{type:r.value||"Source",label:a.value,link:n.value})};var mf=z({name:"LanguageDropdown",setup(){const e=ff();return()=>e.value?o("div",{class:"nav-item"},o(bu,{class:"i18n-dropdown",config:e.value},{title:()=>{var t;return o(Bu,{"aria-label":(t=e.value)==null?void 0:t.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}})):null}}),_f=z({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(e){const t=me(),n=Sn(e,"config"),r=D(()=>n.value.ariaLabel||n.value.text),a=X(!1);he(()=>t.value.path,()=>{a.value=!1});const l=(i,s)=>s[s.length-1]===i;return()=>[o("button",{type:"button",class:["nav-screen-dropdown-title",{active:a.value}],"aria-label":r.value,onClick:()=>{a.value=!a.value}},[o("span",{class:"title"},[o(je,{icon:n.value.icon}),e.config.text]),o("span",{class:["arrow",a.value?"down":"end"]})]),o("ul",{class:["nav-screen-dropdown",{hide:!a.value}]},n.value.children.map(i=>o("li",{class:"dropdown-item"},"children"in i?[o("h4",{class:"dropdown-subtitle"},i.link?o(We,{config:i,onFocusout:()=>{l(i,n.value.children)&&i.children.length===0&&(a.value=!1)}}):o("span",i.text)),o("ul",{class:"dropdown-subitem-wrapper"},i.children.map(s=>o("li",{class:"dropdown-subitem"},o(We,{config:s,onFocusout:()=>{l(s,i.children)&&l(i,n.value.children)&&(a.value=!1)}}))))]:o(We,{config:i,onFocusout:()=>{l(i,n.value.children)&&(a.value=!1)}}))))]}}),Af=z({name:"NavScreenLinks",setup(){const e=Du();return()=>e.value.length?o("nav",{class:"nav-screen-links"},e.value.map(t=>o("div",{class:"navbar-links-item"},"children"in t?o(_f,{config:t}):o(We,{config:t})))):null}});const Lu=()=>o(ce,{name:"dark"},()=>o("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Lu.displayName="DarkIcon";const Pu=()=>o(ce,{name:"light"},()=>o("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));Pu.displayName="LightIcon";const Cu=()=>o(ce,{name:"auto"},()=>o("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Cu.displayName="AutoIcon";const wu=()=>o(ce,{name:"enter-fullscreen"},()=>o("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));wu.displayName="EnterFullScreenIcon";const Tu=()=>o(ce,{name:"cancel-fullscreen"},()=>o("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Tu.displayName="CancelFullScreenIcon";const ku=()=>o(ce,{name:"outlook"},()=>[o("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);ku.displayName="OutlookIcon";var Iu=z({name:"AppearanceSwitch",setup(){const{config:e,isDarkmode:t,status:n}=Lr(),r=hn(),a=()=>{e.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"},l=async i=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!r.value)||!i){a();return}const s=i.clientX,u=i.clientY,p=Math.hypot(Math.max(s,innerWidth-s),Math.max(u,innerHeight-u)),E=t.value;await document.startViewTransition(async()=>{a(),await En()}).ready,t.value!==E&&document.documentElement.animate({clipPath:t.value?[`circle(${p}px at ${s}px ${u}px)`,`circle(0px at ${s}px ${u}px)`]:[`circle(0px at ${s}px ${u}px)`,`circle(${p}px at ${s}px ${u}px)`]},{duration:400,pseudoElement:t.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>o("button",{type:"button",id:"appearance-switch",onClick:l},[o(Cu,{style:{display:n.value==="auto"?"block":"none"}}),o(Lu,{style:{display:n.value==="dark"?"block":"none"}}),o(Pu,{style:{display:n.value==="light"?"block":"none"}})])}}),gf=z({name:"AppearanceMode",setup(){const e=oe(),{canToggle:t}=Lr(),n=D(()=>e.value.outlookLocales.darkmode);return()=>t.value?o("div",{class:"appearance-wrapper"},[o("label",{class:"appearance-title",for:"appearance-switch"},n.value),o(Iu)]):null}});const Qa="VUEPRESS_THEME_COLOR";var bf=z({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(e){const t=(n="")=>{const r=document.documentElement.classList,a=tt(e.themeColor);if(!n){localStorage.removeItem(Qa),r.remove(...a);return}r.remove(...a.filter(l=>l!==n)),r.add(n),localStorage.setItem(Qa,n)};return ge(()=>{const n=localStorage.getItem(Qa);n&&t(n)}),()=>o("ul",{id:"theme-color-picker"},[o("li",o("span",{class:"theme-color",onClick:()=>t()})),en(e.themeColor).map(([n,r])=>o("li",o("span",{style:{background:r},onClick:()=>t(n)})))])}});const Pn=ri.enableThemeColor==="true",Bf=Pn?q0(en(ri).filter(([e])=>e.startsWith("theme-"))):{};var yf=z({name:"ThemeColor",setup(){const e=oe(),t=D(()=>e.value.outlookLocales.themeColor);return()=>Pn?o("div",{class:"theme-color-wrapper"},[o("label",{class:"theme-color-title",for:"theme-color-picker"},t.value),o(bf,{themeColor:Bf})]):null}}),Ou=z({name:"ToggleFullScreenButton",setup(){const e=oe(),{isSupported:t,isFullscreen:n,toggle:r}=ei(),a=D(()=>e.value.outlookLocales.fullscreen);return()=>t?o("div",{class:"full-screen-wrapper"},[o("label",{class:"full-screen-title",for:"full-screen-switch"},a.value),o("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:n.value,onClick:()=>r()},n.value?o(Tu):o(wu))]):null}}),Fu=z({name:"OutlookSettings",setup(){const e=xt(),t=hn(),n=D(()=>!t.value&&e.value.fullscreen);return()=>o(ha,()=>[Pn?o(yf):null,o(gf),n.value?o(Ou):null])}}),Df=z({name:"NavScreen",props:{show:Boolean},emits:["close"],slots:Object,setup(e,{emit:t,slots:n}){const r=me(),{isMobile:a}=Dr(),l=Ve(),i=Wc(l);return ge(()=>{l.value=document.body,he(a,s=>{!s&&e.show&&(i.value=!1,t("close"))}),he(()=>r.value.path,()=>{i.value=!1,t("close")})}),mr(()=>{i.value=!1}),()=>o(Xt,{name:"fade",onEnter:()=>{i.value=!0},onAfterLeave:()=>{i.value=!1}},()=>{var s,u;return e.show?o("div",{id:"nav-screen"},o("div",{class:"vp-nav-screen-container"},[(s=n.before)==null?void 0:s.call(n),o(Af),o("div",{class:"vp-outlook-wrapper"},o(Fu)),(u=n.after)==null?void 0:u.call(n)])):null})}}),Lf=z({name:"NavbarBrand",setup(){const e=Lt(),t=Mn(),n=oe(),r=D(()=>n.value.home||e.value),a=D(()=>t.value.title),l=D(()=>n.value.navTitle??a.value),i=D(()=>n.value.logo?ye(n.value.logo):null),s=D(()=>n.value.logoDark?ye(n.value.logoDark):null);return()=>o(Ie,{to:r.value,class:"vp-brand"},()=>[i.value?o("img",{class:["vp-nav-logo",{light:!!s.value}],src:i.value,alt:""}):null,s.value?o("img",{class:["vp-nav-logo dark"],src:s.value,alt:""}):null,l.value?o("span",{class:["vp-site-name",{"hide-in-pad":i.value&&n.value.hideSiteNameOnMobile!==!1}]},l.value):null])}}),Pf=z({name:"NavbarLinks",setup(){const e=Du();return()=>e.value.length?o("nav",{class:"vp-nav-links"},e.value.map(t=>o("div",{class:"nav-item hide-in-mobile"},"children"in t?o(bu,{config:t}):o(We,{config:t})))):null}}),Cf=z({name:"RepoLink",components:{BitbucketIcon:zc,GiteeIcon:Mc,GitHubIcon:Sc,GitLabIcon:xc,SourceIcon:$c},setup(){const e=vf();return()=>e.value?o("div",{class:"nav-item vp-repo"},o("a",{class:"vp-repo-link",href:e.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":e.value.label},o(ct(`${e.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const Ru=({active:e=!1},{emit:t})=>o("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":e}],"aria-label":"Toggle Navbar","aria-expanded":e,"aria-controls":"nav-screen",onClick:()=>t("toggle")},o("span",[o("span",{class:"vp-top"}),o("span",{class:"vp-middle"}),o("span",{class:"vp-bottom"})]));Ru.displayName="ToggleNavbarButton";var wf=Ru;const ml=(e,{emit:t})=>o("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>t("toggle")},o("span",{class:"icon"}));ml.displayName="ToggleSidebarButton",ml.emits=["toggle"];var Tf=ml,kf=z({name:"OutlookButton",setup(){const{isSupported:e}=ei(),t=xt(),n=hn(),r=me(),{canToggle:a}=Lr(),l=X(!1),i=D(()=>!n.value&&t.value.fullscreen&&e);return he(()=>r.value.path,()=>{l.value=!1}),()=>a.value||i.value||Pn?o("div",{class:"nav-item hide-in-mobile"},a.value&&!i.value&&!Pn?o(Iu):i.value&&!a.value&&!Pn?o(Ou):o("button",{type:"button",class:["outlook-button",{open:l.value}],tabindex:"-1","aria-hidden":!0},[o(ku),o("div",{class:"outlook-dropdown"},o(Fu))])):null}}),If=z({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(e,{emit:t,slots:n}){const r=oe(),{isMobile:a}=Dr(),l=X(!1),i=D(()=>{const{navbarAutoHide:E="mobile"}=r.value;return E!=="none"&&(E==="always"||a.value)}),s=D(()=>r.value.navbarLayout||{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),u={Brand:Lf,Language:mf,Links:Pf,Repo:Cf,Outlook:kf,Search:et("Docsearch")?ct("Docsearch"):et("SearchBox")?ct("SearchBox"):Mo},p=E=>u[E]??(et(E)?ct(E):Mo);return()=>{var E,d,h,v,A,y;return[o("header",{id:"navbar",class:["vp-navbar",{"auto-hide":i.value,"hide-icon":r.value.navbarIcon===!1}]},[o("div",{class:"vp-navbar-start"},[o(Tf,{onToggle:()=>{l.value&&(l.value=!1),t("toggleSidebar")}}),(E=n.startBefore)==null?void 0:E.call(n),(s.value.start||[]).map(B=>o(p(B))),(d=n.startAfter)==null?void 0:d.call(n)]),o("div",{class:"vp-navbar-center"},[(h=n.centerBefore)==null?void 0:h.call(n),(s.value.center||[]).map(B=>o(p(B))),(v=n.centerAfter)==null?void 0:v.call(n)]),o("div",{class:"vp-navbar-end"},[(A=n.endBefore)==null?void 0:A.call(n),(s.value.end||[]).map(B=>o(p(B))),(y=n.endAfter)==null?void 0:y.call(n),o(wf,{active:l.value,onToggle:()=>{l.value=!l.value}})])]),o(Df,{show:l.value,onClose:()=>{l.value=!1}},{before:()=>{var B;return(B=n.screenTop)==null?void 0:B.call(n)},after:()=>{var B;return(B=n.screenBottom)==null?void 0:B.call(n)}})]}}}),Of=z({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(e){const t=At();return()=>[mu(e.config,{class:["vp-sidebar-link",`vp-sidebar-${e.config.type}`,{active:Rn(t,e.config,!0)}],exact:!0}),_u(e.config.children)]}}),Ff=z({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(e,{emit:t}){const n=At(),r=D(()=>Rn(n,e.config)),a=D(()=>Rn(n,e.config,!0));return()=>{const{collapsible:l,children:i=[],icon:s,prefix:u,link:p,text:E}=e.config;return o("section",{class:"vp-sidebar-group"},[o(l?"button":"p",{class:["vp-sidebar-heading",{clickable:l||p,exact:a.value,active:r.value}],...l?{type:"button",onClick:()=>t("toggle"),onKeydown:d=>{d.key==="Enter"&&t("toggle")}}:{}},[o(je,{icon:s}),p?o(We,{class:"vp-sidebar-title",config:{text:E,link:p},noExternalLinkIcon:!0}):o("span",{class:"vp-sidebar-title"},E),l?o("span",{class:["vp-arrow",e.open?"down":"end"]}):null]),e.open||!l?o(Vu,{key:u,config:i}):null])}}}),Vu=z({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(e){const t=At(),n=X(-1),r=a=>{n.value=a===n.value?-1:a};return he(()=>t.path,()=>{const a=e.config.findIndex(l=>vu(t,l));n.value=a},{immediate:!0,flush:"post"}),()=>o("ul",{class:"vp-sidebar-links"},e.config.map((a,l)=>o("li",a.type==="group"?o(Ff,{config:a,open:l===n.value,onToggle:()=>r(l)}):o(Of,{config:a}))))}}),Rf=z({name:"SideBar",slots:Object,setup(e,{slots:t}){const n=At(),r=oe(),a=li(),l=Ve();return ge(()=>{he(()=>n.hash,i=>{const s=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${i}"]`);if(!s)return;const{top:u,height:p}=l.value.getBoundingClientRect(),{top:E,height:d}=s.getBoundingClientRect();E<u?s.scrollIntoView(!0):E+d>u+p&&s.scrollIntoView(!1)},{immediate:!0})}),()=>{var i,s,u;return o("aside",{ref:l,id:"sidebar",class:["vp-sidebar",{"hide-icon":r.value.sidebarIcon===!1}]},[(i=t.top)==null?void 0:i.call(t),((s=t.default)==null?void 0:s.call(t))||o(Vu,{config:a.value}),(u=t.bottom)==null?void 0:u.call(t)])}}}),ii=z({name:"CommonWrapper",props:{containerClass:{type:String,default:""},noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(e,{slots:t}){const n=He(),r=me(),a=Be(),l=oe(),{isMobile:i,isPC:s}=Dr(),[u,p]=aa(!1),[E,d]=aa(!1),h=li(),v=X(!1),A=D(()=>e.noNavbar||a.value.navbar===!1||l.value.navbar===!1?!1:!!(r.value.title||l.value.logo||l.value.repo||l.value.navbar)),y=D(()=>e.noSidebar?!1:a.value.sidebar!==!1&&h.value.length!==0&&!a.value.home),B=D(()=>e.noToc||a.value.home?!1:a.value.toc||l.value.toc!==!1&&a.value.toc!==!1),b={x:0,y:0},C=P=>{b.x=P.changedTouches[0].clientX,b.y=P.changedTouches[0].clientY},g=P=>{const S=P.changedTouches[0].clientX-b.x,F=P.changedTouches[0].clientY-b.y;Math.abs(S)>Math.abs(F)*1.5&&Math.abs(S)>40&&(S>0&&b.x<=80?p(!0):p(!1))},w=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let x=0;return Se("scroll",lh(()=>{const P=w();P<=58||P<x?v.value=!1:x+200<P&&!u.value&&(v.value=!0),x=P},300,!0)),he(i,P=>{P||p(!1)}),ge(()=>{const P=Wc(document.body);he(u,F=>{P.value=F});const S=n.afterEach(()=>{p(!1)});mr(()=>{P.value=!1,S()})}),()=>o(et("GlobalEncrypt")?ct("GlobalEncrypt"):Pc,()=>o("div",{class:["theme-container",{"no-navbar":!A.value,"no-sidebar":!y.value&&!(t.sidebar||t.sidebarTop||t.sidebarBottom),"has-toc":B.value,"hide-navbar":v.value,"sidebar-collapsed":!i.value&&!s.value&&E.value,"sidebar-open":i.value&&u.value},e.containerClass,a.value.containerClass||""],onTouchStart:C,onTouchEnd:g},[A.value?o(If,{onToggleSidebar:()=>p()},{startBefore:()=>{var P;return(P=t.navbarStartBefore)==null?void 0:P.call(t)},startAfter:()=>{var P;return(P=t.navbarStartAfter)==null?void 0:P.call(t)},centerBefore:()=>{var P;return(P=t.navbarCenterBefore)==null?void 0:P.call(t)},centerAfter:()=>{var P;return(P=t.navbarCenterAfter)==null?void 0:P.call(t)},endBefore:()=>{var P;return(P=t.navbarEndBefore)==null?void 0:P.call(t)},endAfter:()=>{var P;return(P=t.navbarEndAfter)==null?void 0:P.call(t)},screenTop:()=>{var P;return(P=t.navScreenTop)==null?void 0:P.call(t)},screenBottom:()=>{var P;return(P=t.navScreenBottom)==null?void 0:P.call(t)}}):null,o(Xt,{name:"fade"},()=>u.value?o("div",{class:"vp-sidebar-mask",onClick:()=>p(!1)}):null),o(Xt,{name:"fade"},()=>i.value?null:o("div",{class:"toggle-sidebar-wrapper",onClick:()=>d()},o("span",{class:["arrow",E.value?"end":"start"]}))),o(Rf,{},{...t.sidebar?{default:()=>t.sidebar()}:{},top:()=>{var P;return(P=t.sidebarTop)==null?void 0:P.call(t)},bottom:()=>{var P;return(P=t.sidebarBottom)==null?void 0:P.call(t)}}),t.default(),o(hf)]))}}),de=z({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},slots:Object,setup(e,{slots:t}){const n=a=>{a.style.transition=`transform ${e.duration}s ease-in-out ${e.delay}s, opacity ${e.duration}s ease-in-out ${e.delay}s`,a.style.transform="translateY(-20px)",a.style.opacity="0"},r=a=>{a.style.transform="translateY(0)",a.style.opacity="1"};return()=>o(e.type==="single"?Xt:NE,{name:"drop",appear:e.appear,onAppear:n,onAfterAppear:r,onEnter:n,onAfterEnter:r,onBeforeLeave:n},()=>t.default())}});const _l=({custom:e})=>o(oc,{class:["theme-hope-content",{custom:e}]});_l.displayName="MarkdownContent",_l.props={custom:Boolean};var oi=_l;const Su=()=>o(ce,{name:"author"},()=>o("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));Su.displayName="AuthorIcon";const xu=()=>o(ce,{name:"calendar"},()=>o("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));xu.displayName="CalendarIcon";const Mu=()=>o(ce,{name:"category"},()=>o("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Mu.displayName="CategoryIcon";const zu=()=>o(ce,{name:"print"},()=>o("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));zu.displayName="PrintIcon";const $u=()=>o(ce,{name:"tag"},()=>o("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));$u.displayName="TagIcon";const Nu=()=>o(ce,{name:"timer"},()=>o("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Nu.displayName="TimerIcon";const ju=()=>o(ce,{name:"word"},()=>[o("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),o("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);ju.displayName="WordIcon";const tn=()=>{const e=oe();return D(()=>e.value.metaLocales)};var Vf=z({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(e){const t=tn();return()=>e.author.length?o("span",{class:"page-author-info","aria-label":`${t.value.author}${e.pure?"":"🖊"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Su),o("span",e.author.map(n=>n.url?o("a",{class:"page-author-item",href:n.url,target:"_blank",rel:"noopener noreferrer"},n.name):o("span",{class:"page-author-item"},n.name))),o("span",{property:"author",content:e.author.map(n=>n.name).join(", ")})]):null}}),Sf=z({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(e){const t=He(),n=me(),r=tn(),a=(l,i="")=>{i&&n.value.path!==i&&(l.preventDefault(),t.push(i))};return()=>e.category.length?o("span",{class:"page-category-info","aria-label":`${r.value.category}${e.pure?"":"🌈"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Mu),e.category.map(({name:l,path:i})=>o("span",{class:["page-category-item",{[`category${ma(l,9)}`]:!e.pure,clickable:i}],role:i?"navigation":"",onClick:s=>a(s,i)},l)),o("meta",{property:"articleSection",content:e.category.map(({name:l})=>l).join(",")})]):null}}),xf=z({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(e){const t=rc(),n=tn();return()=>e.date?o("span",{class:"page-date-info","aria-label":`${n.value.date}${e.pure?"":"📅"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(xu),o("span",o(ha,()=>e.localizedDate||e.date.toLocaleDateString(t.value))),o("meta",{property:"datePublished",content:e.date.toISOString()||""})]):null}}),Mf=z({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(e){const t=tn();return()=>e.isOriginal?o("span",{class:"page-original-info"},t.value.origin):null}}),zf=z({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=tn(),n=D(()=>{if(!e.readingTime)return null;const{minutes:r}=e.readingTime;return r<1?"PT1M":`PT${Math.round(r)}M`});return()=>{var r,a;return(r=e.readingTimeLocale)!=null&&r.time?o("span",{class:"page-reading-time-info","aria-label":`${t.value.readingTime}${e.pure?"":"⌛"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(Nu),o("span",(a=e.readingTimeLocale)==null?void 0:a.time),o("meta",{property:"timeRequired",content:n.value})]):null}}}),$f=z({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(e){const t=He(),n=me(),r=tn(),a=(l,i="")=>{i&&n.value.path!==i&&(l.preventDefault(),t.push(i))};return()=>e.tag.length?o("span",{class:"page-tag-info","aria-label":`${r.value.tag}${e.pure?"":"🏷"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o($u),e.tag.map(({name:l,path:i})=>o("span",{class:["page-tag-item",{[`tag${ma(l,9)}`]:!e.pure,clickable:i}],role:i?"navigation":"",onClick:s=>a(s,i)},l)),o("meta",{property:"keywords",content:e.tag.map(({name:l})=>l).join(",")})]):null}}),Nf=z({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},readingTimeLocale:{type:Object,default:()=>null},pure:Boolean},setup(e){const t=tn();return()=>{var n,r,a;return(n=e.readingTimeLocale)!=null&&n.words?o("span",{class:"page-word-info","aria-label":`${t.value.words}${e.pure?"":"🔠"}`,...e.pure?{}:{"data-balloon-pos":"down"}},[o(ju),o("span",(r=e.readingTimeLocale)==null?void 0:r.words),o("meta",{property:"wordCount",content:(a=e.readingTime)==null?void 0:a.words})]):null}}}),Hu=z({name:"PageInfo",components:{AuthorInfo:Vf,CategoryInfo:Sf,DateInfo:xf,OriginalInfo:Mf,PageViewInfo:()=>null,ReadingTimeInfo:zf,TagInfo:$f,WordInfo:Nf},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","PageView","ReadingTime","Category","Tag"]},info:{type:Object,required:!0}},setup(e){const t=hn();return()=>e.items?o("div",{class:"page-info"},e.items.map(n=>o(ct(`${n}Info`),{...e.info,pure:t.value}))):null}}),jf=z({name:"PrintButton",setup(){const e=xt(),t=oe();return()=>e.value.print===!1?null:o("button",{type:"button",class:"print-button",title:t.value.metaLocales.print,onClick:()=>{window.print()}},o(zu))}});const Hf=({title:e,level:t,slug:n})=>o(Ie,{to:`#${n}`,class:["toc-link",`level${t}`]},()=>e),Al=(e,t)=>{const n=At();return e.length&&t>0?o("ul",{class:"toc-list"},e.map(r=>{const a=Al(r.children,t-1);return[o("li",{class:["toc-item",{active:n.hash===`#${r.slug}`}]},Hf(r)),a?o("li",a):null]})):null};var qu=z({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},slots:Object,setup(e,{slots:t}){const n=At(),r=me(),a=tn(),l=Ve(),i=X("-1.7rem"),s=p=>{var E;(E=l.value)==null||E.scrollTo({top:p,behavior:"smooth"})},u=()=>{if(l.value){const p=document.querySelector(".toc-item.active");p?i.value=`${p.getBoundingClientRect().top-l.value.getBoundingClientRect().top+l.value.scrollTop}px`:i.value="-1.7rem"}else i.value="-1.7rem"};return ge(()=>{he(()=>n.hash,p=>{if(l.value){const E=document.querySelector(`#toc a.toc-link[href$="${p}"]`);if(!E)return;const{top:d,height:h}=l.value.getBoundingClientRect(),{top:v,height:A}=E.getBoundingClientRect();v<d?s(l.value.scrollTop+v-d):v+A>d+h&&s(l.value.scrollTop+v+A-d-h)}}),he(()=>n.fullPath,u,{flush:"post",immediate:!0})}),()=>{var E,d;const p=e.items.length?Al(e.items,e.headerDepth):r.value.headers?Al(r.value.headers,e.headerDepth):null;return p?o("div",{class:"toc-place-holder"},[o("aside",{id:"toc"},[(E=t.before)==null?void 0:E.call(t),o("div",{class:"toc-header"},[a.value.toc,o(jf)]),o("div",{class:"toc-wrapper",ref:l},[p,o("div",{class:"toc-marker",style:{top:i.value}})]),(d=t.after)==null?void 0:d.call(t)])]):null}}}),si=z({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(e){const t=me(),n=oe(),r=Ve(),a=({target:l})=>{const i=document.querySelector(l.hash);if(i){const s=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",s)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",s),i.focus(),window.scrollTo(0,0)}};return ge(()=>{he(()=>t.value.path,()=>r.value.focus())}),()=>[o("span",{ref:r,tabindex:"-1"}),o("a",{href:`#${e.content}`,class:"vp-skip-link sr-only",onClick:a},n.value.routeLocales.skipToContent)]}});let Ya=null,qn=null;const qf={wait:()=>Ya,pending:()=>{Ya=new Promise(e=>qn=e)},resolve:()=>{qn==null||qn(),Ya=null,qn=null}},Gu=()=>qf;var Gf=z({name:"FadeSlideY",slots:Object,setup(e,{slots:t}){const{resolve:n,pending:r}=Gu();return()=>o(Xt,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:n,onBeforeLeave:r},()=>{var a;return(a=t.default)==null?void 0:a.call(t)})}});const Uf=(e,t)=>{const n=e.replace(t,"/").split("/"),r=[];let a=Ul(t);return n.forEach((l,i)=>{i!==n.length-1?(a+=`${l}/`,r.push({link:a,name:l||"Home"})):l!==""&&(a+=l,r.push({link:a,name:l}))}),r},Uu=(e,{slots:t})=>{var d,h;const{bgImage:n,bgImageDark:r,bgImageStyle:a,color:l,description:i,image:s,imageDark:u,header:p,features:E=[]}=e;return o("div",{class:"vp-feature-wrapper"},[n?o("div",{class:["vp-feature-bg",{light:r}],style:[{"background-image":`url(${n})`},a]}):null,r?o("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${r})`},a]}):null,o("div",{class:"vp-feature",style:l?{color:l}:{}},[((d=t.image)==null?void 0:d.call(t,e))||[s?o("img",{class:["vp-feature-image",{light:u}],src:ye(s),alt:""}):null,u?o("img",{class:"vp-feature-image dark",src:ye(u),alt:""}):null],((h=t.info)==null?void 0:h.call(t,e))||[p?o("h2",{class:"vp-feature-header"},p):null,i?o("p",{class:"vp-feature-description",innerHTML:i}):null],E.length?o("div",{class:"vp-features"},E.map(({icon:v,title:A,details:y,link:B})=>{const b=[o("h3",{class:"vp-feature-title"},[o(je,{icon:v}),o("span",{innerHTML:A})]),o("p",{class:"vp-feature-details",innerHTML:y})];return B?sr(B)?o("a",{class:"vp-feature-item link",href:B,"aria-label":A,target:"_blank"},b):o(Ie,{class:"vp-feature-item link",to:B,"aria-label":A},()=>b):o("div",{class:"vp-feature-item"},b)})):null])])};Uu.displayName="FeaturePanel";var $o=Uu,Jf=z({name:"HeroInfo",slots:Object,setup(e,{slots:t}){const n=Be(),r=Mn(),a=D(()=>n.value.heroFullScreen??!1),l=D(()=>{const{heroText:p,tagline:E}=n.value;return{text:p??r.value.title??"Hello",tagline:E??r.value.description??"",isFullScreen:a.value}}),i=D(()=>{const{heroText:p,heroImage:E,heroImageDark:d,heroAlt:h,heroImageStyle:v}=n.value;return{image:E?ye(E):null,imageDark:d?ye(d):null,heroStyle:v,alt:h||p||"",isFullScreen:a.value}}),s=D(()=>{const{bgImage:p,bgImageDark:E,bgImageStyle:d}=n.value;return{image:Rt(p)?ye(p):null,imageDark:Rt(E)?ye(E):null,bgStyle:d,isFullScreen:a.value}}),u=D(()=>n.value.actions??[]);return()=>{var p,E,d;return o("header",{class:["vp-hero-info-wrapper",{fullscreen:a.value}]},[((p=t.heroBg)==null?void 0:p.call(t,s.value))||[s.value.image?o("div",{class:["vp-hero-mask",{light:s.value.imageDark}],style:[{"background-image":`url(${s.value.image})`},s.value.bgStyle]}):null,s.value.imageDark?o("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${s.value.imageDark})`},s.value.bgStyle]}):null],o("div",{class:"vp-hero-info"},[((E=t.heroImage)==null?void 0:E.call(t,i.value))||o(de,{appear:!0,type:"group"},()=>[i.value.image?o("img",{key:"light",class:["vp-hero-image",{light:i.value.imageDark}],style:i.value.heroStyle,src:i.value.image,alt:i.value.alt}):null,i.value.imageDark?o("img",{key:"dark",class:"vp-hero-image dark",style:i.value.heroStyle,src:i.value.imageDark,alt:i.value.alt}):null]),((d=t.heroInfo)==null?void 0:d.call(t,l.value))??o("div",{class:"vp-hero-infos"},[l.value.text?o(de,{appear:!0,delay:.04},()=>o("h1",{id:"main-title"},l.value.text)):null,l.value.tagline?o(de,{appear:!0,delay:.08},()=>o("p",{id:"main-description",innerHTML:l.value.tagline})):null,u.value.length?o(de,{appear:!0,delay:.12},()=>o("p",{class:"vp-hero-actions"},u.value.map(h=>o(We,{class:["vp-hero-action",h.type||"default"],config:h,noExternalLinkIcon:!0},h.icon?{before:()=>o(je,{icon:h.icon})}:{})))):null])])])}}});const Ju=(e,{slots:t})=>{var h,v,A;const{bgImage:n,bgImageDark:r,bgImageStyle:a,color:l,description:i,image:s,imageDark:u,header:p,highlights:E=[],type:d="un-order"}=e;return o("div",{class:"vp-highlight-wrapper",style:l?{color:l}:{}},[n?o("div",{class:["vp-highlight-bg",{light:r}],style:[{"background-image":`url(${n})`},a]}):null,r?o("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${r})`},a]}):null,o("div",{class:"vp-highlight"},[((h=t.image)==null?void 0:h.call(t,e))||[s?o("img",{class:["vp-highlight-image",{light:u}],src:ye(s),alt:""}):null,u?o("img",{class:"vp-highlight-image dark",src:ye(u),alt:""}):null],((v=t.info)==null?void 0:v.call(t,e))||[o("div",{class:"vp-highlight-info-wrapper"},o("div",{class:"vp-highlight-info"},[p?o("h2",{class:"vp-highlight-header",innerHTML:p}):null,i?o("p",{class:"vp-highlight-description",innerHTML:i}):null,((A=t.highlights)==null?void 0:A.call(t,E))||o(d==="order"?"ol":d==="no-order"?"dl":"ul",{class:"vp-highlights"},E.map(({icon:y,title:B,details:b,link:C})=>{const g=[o(d==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[y?o(je,{class:"vp-highlight-icon",icon:y}):null,o("span",{innerHTML:B})]),b?o(d==="no-order"?"dd":"p",{class:"vp-highlight-details",innerHTML:b}):null];return o(d==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:C}]},C?N0(C)?o("a",{class:"vp-highlight-item link",href:C,"aria-label":B,target:"_blank"},g):o(Ie,{class:"vp-highlight-item link",to:C,"aria-label":B},()=>g):o("div",{class:"vp-highlight-item"},g))}))]))]])])};Ju.displayName="HighlightPanel";var Wf=Ju,Kf=z({name:"HomePage",slots:Object,setup(e,{slots:t}){const n=hn(),r=Be(),a=D(()=>{const{features:i}=r.value;return ee(i)?i:null}),l=D(()=>{const{highlights:i}=r.value;return ee(i)?i:null});return()=>{var i,s,u,p;return o("main",{id:"main-content",class:["vp-project-home ",{pure:n.value}],"aria-labelledby":r.value.heroText===null?"":"main-title"},[(i=t.top)==null?void 0:i.call(t),o(Jf),((s=l.value)==null?void 0:s.map(E=>"features"in E?o($o,E):o(Wf,E)))||(a.value?o(de,{appear:!0,delay:.24},()=>o($o,{features:a.value})):null),(u=t.center)==null?void 0:u.call(t),o(de,{appear:!0,delay:.32},()=>o(oi)),(p=t.bottom)==null?void 0:p.call(t)])}}}),Qf=z({name:"BreadCrumb",setup(){const e=He(),t=me(),n=Lt(),r=Be(),a=oe(),l=Ve([]),i=D(()=>(r.value.breadcrumb||r.value.breadcrumb!==!1&&a.value.breadcrumb!==!1)&&l.value.length>1),s=D(()=>r.value.breadcrumbIcon||r.value.breadcrumbIcon!==!1&&a.value.breadcrumbIcon!==!1),u=()=>{const p=e.getRoutes(),E=Uf(t.value.path,n.value).map(({link:d,name:h})=>{const v=p.find(A=>A.path===d);if(v){const{meta:A,path:y}=Fn(e,v.path);return{title:A[Ae.shortTitle]||A[Ae.title]||h,icon:A[Ae.icon],path:y}}return null}).filter(d=>d!==null);E.length>1&&(l.value=E)};return ge(()=>{he(()=>t.value.path,u,{immediate:!0})}),()=>o("nav",{class:["vp-breadcrumb",{disable:!i.value}]},i.value?o("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},l.value.map((p,E)=>o("li",{class:{"is-active":l.value.length-1===E},property:"itemListElement",typeof:"ListItem"},[o(Ie,{to:p.path,property:"item",typeof:"WebPage"},()=>[s.value?o(je,{icon:p.icon}):null,o("span",{property:"name"},p.title||"Unknown")]),o("meta",{property:"position",content:E+1})]))):[])}});const No=(e,t)=>t===!1?!1:le(t)?Ln(e,t,!0):da(t)?t:null,gl=(e,t,n)=>{const r=e.findIndex(a=>a.link===t);if(r!==-1){const a=e[r+n];return a!=null&&a.link?a:null}for(const a of e)if(a.children){const l=gl(a.children,t,n);if(l)return l}return null};var Yf=z({name:"PageNav",setup(){const e=oe(),t=Be(),n=li(),r=me(),a=He(),l=yr(),i=D(()=>{const u=No(a,t.value.prev);return u===!1?null:u||(e.value.prevLink===!1?null:gl(n.value,r.value.path,-1))}),s=D(()=>{const u=No(a,t.value.next);return u===!1?null:u||(e.value.nextLink===!1?null:gl(n.value,r.value.path,1))});return Se("keydown",u=>{u.altKey&&(u.key==="ArrowRight"?s.value&&(l(s.value.link),u.preventDefault()):u.key==="ArrowLeft"&&i.value&&(l(i.value.link),u.preventDefault()))}),()=>i.value||s.value?o("nav",{class:"vp-page-nav"},[i.value?o(We,{class:"prev",config:i.value},()=>{var u,p;return[o("div",{class:"hint"},[o("span",{class:"arrow start"}),e.value.metaLocales.prev]),o("div",{class:"link"},[o(je,{icon:(u=i.value)==null?void 0:u.icon}),(p=i.value)==null?void 0:p.text])]}):null,s.value?o(We,{class:"next",config:s.value},()=>{var u,p;return[o("div",{class:"hint"},[e.value.metaLocales.next,o("span",{class:"arrow end"})]),o("div",{class:"link"},[(u=s.value)==null?void 0:u.text,o(je,{icon:(p=s.value)==null?void 0:p.icon})])]}):null]):null}});const Xf={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},Zf=({docsRepo:e,docsBranch:t,docsDir:n,filePathRelative:r,editLinkPattern:a})=>{if(!r)return null;const l=Vc(e);let i;return a?i=a:l!==null&&(i=Xf[l]),i?i.replace(/:repo/,dn(e)?e:`https://github.com/${e}`).replace(/:branch/,t).replace(/:path/,Ys(`${Ul(n)}/${r}`)):null},e5=()=>{const e=oe(),t=me(),n=Be();return D(()=>{const{repo:r,docsRepo:a=r,docsBranch:l="main",docsDir:i="",editLink:s,editLinkPattern:u=""}=e.value;if(!(n.value.editLink??s??!0)||!a)return null;const p=Zf({docsRepo:a,docsBranch:l,docsDir:i,editLinkPattern:u,filePathRelative:t.value.filePathRelative});return p?{text:e.value.metaLocales.editLink,link:p}:null})},t5=()=>{const e=Mn(),t=oe(),n=me(),r=Be();return D(()=>{var a,l;return!(r.value.lastUpdated??t.value.lastUpdated??!0)||!((a=n.value.git)!=null&&a.updatedTime)?null:new Date((l=n.value.git)==null?void 0:l.updatedTime).toLocaleString(e.value.lang)})},n5=()=>{const e=oe(),t=me(),n=Be();return D(()=>{var r;return n.value.contributors??e.value.contributors??!0?((r=t.value.git)==null?void 0:r.contributors)??null:null})};var r5=z({name:"PageTitle",setup(){const e=me(),t=Be(),n=oe(),{info:r,items:a}=lf();return()=>o("div",{class:"vp-page-title"},[o("h1",[n.value.titleIcon===!1?null:o(je,{icon:t.value.icon}),e.value.title]),o(Hu,{info:r.value,...a.value===null?{}:{items:a.value}}),o("hr")])}});const Wu=()=>o(ce,{name:"edit"},()=>[o("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),o("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);Wu.displayName="EditIcon";var a5=z({name:"PageMeta",setup(){const e=oe(),t=e5(),n=t5(),r=n5();return()=>{const{metaLocales:a}=e.value;return o("footer",{class:"page-meta"},[t.value?o("div",{class:"meta-item edit-link"},o(We,{class:"label",config:t.value},{before:()=>o(Wu)})):null,o("div",{class:"meta-item git-info"},[n.value?o("div",{class:"update-time"},[o("span",{class:"label"},`${a.lastUpdated}: `),o(ha,()=>o("span",{class:"info"},n.value))]):null,r.value&&r.value.length?o("div",{class:"contributors"},[o("span",{class:"label"},`${a.contributors}: `),r.value.map(({email:l,name:i},s)=>[o("span",{class:"contributor",title:`email: ${l}`},i),s!==r.value.length-1?",":""])]):null])])}}}),l5=z({name:"NormalPage",slots:Object,setup(e,{slots:t}){const n=Be(),{isDarkmode:r}=Lr(),a=oe(),l=D(()=>n.value.toc||n.value.toc!==!1&&a.value.toc!==!1);return()=>o("main",{id:"main-content",class:"vp-page"},o(et("LocalEncrypt")?ct("LocalEncrypt"):Pc,()=>{var i,s,u,p;return[(i=t.top)==null?void 0:i.call(t),n.value.cover?o("div",{class:"page-cover"},o("img",{src:ye(n.value.cover),alt:"","no-view":""})):null,o(Qf),o(r5),l.value?o(qu,{headerDepth:n.value.headerDepth??a.value.headerDepth??2},{before:()=>{var E;return(E=t.tocBefore)==null?void 0:E.call(t)},after:()=>{var E;return(E=t.tocAfter)==null?void 0:E.call(t)}}):null,(s=t.contentBefore)==null?void 0:s.call(t),o(oi),(u=t.contentAfter)==null?void 0:u.call(t),o(a5),o(Yf),et("CommentService")?o(ct("CommentService"),{darkmode:r.value}):null,(p=t.bottom)==null?void 0:p.call(t)]}))}}),i5=z({name:"Layout",slots:Object,setup(e,{slots:t}){const n=xt(),r=oe(),a=me(),l=Be(),{isMobile:i}=Dr(),s=D(()=>{var u,p;return((u=r.value.blog)==null?void 0:u.sidebarDisplay)||((p=n.value.blog)==null?void 0:p.sidebarDisplay)||"mobile"});return()=>[o(si),o(ii,{},{default:()=>{var u;return((u=t.default)==null?void 0:u.call(t))||(l.value.home?o(Kf):o(Gf,()=>o(l5,{key:a.value.path},{top:()=>{var p;return(p=t.top)==null?void 0:p.call(t)},bottom:()=>{var p;return(p=t.bottom)==null?void 0:p.call(t)},contentBefore:()=>{var p;return(p=t.contentBefore)==null?void 0:p.call(t)},contentAfter:()=>{var p;return(p=t.contentAfter)==null?void 0:p.call(t)},tocBefore:()=>{var p;return(p=t.tocBefore)==null?void 0:p.call(t)},tocAfter:()=>{var p;return(p=t.tocAfter)==null?void 0:p.call(t)}})))},...s.value!=="none"?{navScreenBottom:()=>o(ct("BloggerInfo"))}:{},...!i.value&&s.value==="always"?{sidebar:()=>o(ct("BloggerInfo"))}:{}})]}}),o5=z({name:"NotFoundHint",setup(){const e=oe(),t=()=>{const n=e.value.routeLocales.notFoundMsg;return n[Math.floor(Math.random()*n.length)]};return()=>o("div",{class:"not-found-hint"},[o("p",{class:"error-code"},"404"),o("h1",{class:"error-title"},e.value.routeLocales.notFoundTitle),o("p",{class:"error-hint"},t())])}}),s5=z({name:"NotFound",slots:Object,setup(e,{slots:t}){const n=Lt(),r=oe(),{navigate:a}=El({to:r.value.home??n.value});return()=>[o(si),o(ii,{noSidebar:!0},()=>{var l;return o("main",{id:"main-content",class:"vp-page not-found"},((l=t.default)==null?void 0:l.call(t))||[o(o5),o("div",{class:"actions"},[o("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},r.value.routeLocales.back),o("button",{type:"button",class:"action-button",onClick:()=>a()},r.value.routeLocales.home)])])})]}});const c5={GitHub:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>'},u5={category:{"/":{path:"/category/",map:{LLM:{path:"/category/llm/",keys:["v-2f55967c","v-349fb87b","v-1c829e52","v-e5984c6a","v-05573b46","v-50c8db59"]},Conversation:{path:"/category/conversation/",keys:["v-7b933308","v-ae572218","v-77a572f4","v-165c2f30","v-08107cad","v-a821f576","v-6b0e2128","v-6b49d44a","v-df36f7a6","v-3bba3d80","v-849acaf0","v-28b506e8","v-4179d052","v-0f9cca50","v-543d335a","v-bbae0c58","v-3e3c9404","v-5ad3f4b6","v-2b6e996a"]},Python:{path:"/category/python/",keys:["v-1610ea61","v-dbd695ec","v-1066d072","v-26e6dd20","v-53e80eee","v-512e4fee"]},Pytorch:{path:"/category/pytorch/",keys:["v-271e5cf6","v-d9c466b0","v-584324ea","v-1aae202e","v-06f975a7","v-f7fb7aca"]}}},"/zh/":{path:"/zh/category/",map:{LLM:{path:"/zh/category/llm/",keys:["v-ddbde82a","v-5bcfad2a","v-d0356272","v-538a2646","v-fbcadf0c","v-06df26f4","v-6d0c678c","v-72f36506","v-7efe3ef0","v-733043fc","v-fa68fb56"]},Conversation:{path:"/zh/category/conversation/",keys:["v-9d52c426","v-ff10b136","v-67b2b392","v-41ad36be","v-0179d9c8","v-982f3614","v-2a9292ca","v-60308af9","v-3dc01a1e","v-43b39d31","v-65a2b9b9","v-1d9bbd97","v-38ac66c1","v-4e4561c7","v-7a9a637c","v-689c6003","v-4fd76726","v-50022b27","v-1b7bda08"]},Python:{path:"/zh/category/python/",keys:["v-ff8cde1c","v-21e47859","v-21ba52c1","v-11ee8802","v-ce1d9382","v-027521cc"]},Pytorch:{path:"/zh/category/pytorch/",keys:["v-58281f94","v-06c536ce","v-894ce788","v-5f0e06da","v-5d0d3c96","v-4a75a8ca"]}}}},tag:{"/":{path:"/tag/",map:{LLM:{path:"/tag/llm/",keys:["v-2f55967c","v-349fb87b","v-1c829e52","v-e5984c6a","v-05573b46","v-50c8db59"]},"Commen Mistakes":{path:"/tag/commen-mistakes/",keys:["v-7b933308"]},Grammar:{path:"/tag/grammar/",keys:["v-ae572218"]},Pronunciation:{path:"/tag/pronunciation/",keys:["v-77a572f4"]},"Sentence Pattern and Expression":{path:"/tag/sentence-pattern-and-expression/",keys:["v-165c2f30"]},Python:{path:"/tag/python/",keys:["v-1610ea61","v-dbd695ec","v-1066d072","v-26e6dd20","v-53e80eee","v-512e4fee"]},Pytorch:{path:"/tag/pytorch/",keys:["v-271e5cf6","v-d9c466b0","v-584324ea","v-1aae202e","v-06f975a7","v-f7fb7aca"]},Careers:{path:"/tag/careers/",keys:["v-08107cad"]},Common:{path:"/tag/common/",keys:["v-a821f576"]},Communication:{path:"/tag/communication/",keys:["v-6b0e2128"]},Computers:{path:"/tag/computers/",keys:["v-6b49d44a"]},"Describing something":{path:"/tag/describing-something/",keys:["v-df36f7a6"]},"Dreams and Wishes":{path:"/tag/dreams-and-wishes/",keys:["v-3bba3d80"]},Graduating:{path:"/tag/graduating/",keys:["v-849acaf0"]},Greetings:{path:"/tag/greetings/",keys:["v-28b506e8"]},Hobbies:{path:"/tag/hobbies/",keys:["v-4179d052"]},Immigration:{path:"/tag/immigration/",keys:["v-0f9cca50"]},Introduction:{path:"/tag/introduction/",keys:["v-543d335a"]},"Phone and email":{path:"/tag/phone-and-email/",keys:["v-bbae0c58"]},Routine:{path:"/tag/routine/",keys:["v-3e3c9404"]},Time:{path:"/tag/time/",keys:["v-5ad3f4b6"]},Traits:{path:"/tag/traits/",keys:["v-2b6e996a"]}}},"/zh/":{path:"/zh/tag/",map:{LLM:{path:"/zh/tag/llm/",keys:["v-ddbde82a","v-5bcfad2a","v-d0356272","v-538a2646","v-fbcadf0c","v-06df26f4","v-6d0c678c","v-72f36506","v-7efe3ef0","v-733043fc","v-fa68fb56"]},"Commen Mistakes":{path:"/zh/tag/commen-mistakes/",keys:["v-9d52c426"]},Grammar:{path:"/zh/tag/grammar/",keys:["v-ff10b136"]},Pronunciation:{path:"/zh/tag/pronunciation/",keys:["v-67b2b392"]},"Sentence Pattern and Expression":{path:"/zh/tag/sentence-pattern-and-expression/",keys:["v-41ad36be"]},Python:{path:"/zh/tag/python/",keys:["v-ff8cde1c","v-21e47859","v-21ba52c1","v-11ee8802","v-ce1d9382","v-027521cc"]},Pytorch:{path:"/zh/tag/pytorch/",keys:["v-58281f94","v-06c536ce","v-894ce788","v-5f0e06da","v-5d0d3c96","v-4a75a8ca"]},Careers:{path:"/zh/tag/careers/",keys:["v-0179d9c8"]},Common:{path:"/zh/tag/common/",keys:["v-982f3614"]},Communication:{path:"/zh/tag/communication/",keys:["v-2a9292ca"]},Computers:{path:"/zh/tag/computers/",keys:["v-60308af9"]},"Describing something":{path:"/zh/tag/describing-something/",keys:["v-3dc01a1e"]},"Dreams and Wishes":{path:"/zh/tag/dreams-and-wishes/",keys:["v-43b39d31"]},Graduating:{path:"/zh/tag/graduating/",keys:["v-65a2b9b9"]},Greetings:{path:"/zh/tag/greetings/",keys:["v-1d9bbd97"]},Hobbies:{path:"/zh/tag/hobbies/",keys:["v-38ac66c1"]},Immigration:{path:"/zh/tag/immigration/",keys:["v-4e4561c7"]},Introduction:{path:"/zh/tag/introduction/",keys:["v-7a9a637c"]},"Phone and email":{path:"/zh/tag/phone-and-email/",keys:["v-689c6003"]},Routine:{path:"/zh/tag/routine/",keys:["v-4fd76726"]},Time:{path:"/zh/tag/time/",keys:["v-50022b27"]},Traits:{path:"/zh/tag/traits/",keys:["v-1b7bda08"]}}}}},p5={article:{"/":{path:"/article/",keys:["v-2f55967c","v-349fb87b","v-1c829e52","v-e5984c6a","v-05573b46","v-6022697a","v-3ff02593","v-0b2a4422","v-155b3612","v-6985d781","v-7813ca44","v-798c95fd","v-4e69f864","v-a0eafd0a","v-be73916a","v-1df908df","v-b93f1926","v-be2c9ec8","v-4d328dde","v-2206dc02","v-5499a5df","v-ce284ff4","v-106d4d44","v-5d634456","v-3a7c55e2","v-2b106454","v-b4e3bf38","v-02738b09","v-3e231f51","v-a5db72e6","v-12cc15fb","v-5abb1155","v-2fd44fde","v-081d7c76","v-0b37b602","v-521f5626","v-f648540e","v-280b4b72","v-1c08519f","v-fcc6a446","v-5fdc317f","v-cdac0a3e","v-c3bdf33c","v-68b4c8f8","v-660b1242","v-8f4323a6","v-1ce5ffde","v-30e253e2","v-52cd1778","v-7c18e3be","v-7354118a","v-4094a976","v-67569e35","v-9da72a26","v-4ecbd87c","v-53ba0e11","v-510ee6af","v-9a7ab73a","v-2163f696","v-77fd1436","v-6393b21c","v-f2a786dc","v-dfa4da02","v-271e5cf6","v-50c8db59","v-d9c466b0","v-584324ea","v-1aae202e","v-06f975a7","v-7b933308","v-ae572218","v-77a572f4","v-165c2f30","v-08107cad","v-a821f576","v-6b0e2128","v-6b49d44a","v-df36f7a6","v-3bba3d80","v-849acaf0","v-28b506e8","v-4179d052","v-0f9cca50","v-543d335a","v-bbae0c58","v-3e3c9404","v-5ad3f4b6","v-2b6e996a","v-f7fb7aca","v-1610ea61","v-dbd695ec","v-1066d072","v-26e6dd20","v-53e80eee","v-512e4fee"]},"/zh/":{path:"/zh/article/",keys:["v-ddbde82a","v-5bcfad2a","v-d0356272","v-538a2646","v-fbcadf0c","v-06df26f4","v-6d0c678c","v-72f36506","v-7b27ee69","v-de6cc37c","v-44fdf740","v-35db20fa","v-393d10f2","v-eb4206e2","v-4e7a6e6c","v-21c8383f","v-75fde7aa","v-2c792888","v-e49de3e4","v-622f149e","v-370085d6","v-0cb3bd10","v-3555b5c0","v-1ca090cd","v-da44b262","v-5eb4972e","v-715d7b8e","v-08a3dd35","v-0b927333","v-7a271a05","v-7c7612da","v-3022e6c7","v-9874ca08","v-197f6a6a","v-75c09644","v-507721e2","v-05f799b6","v-d5206da4","v-03bf6cc8","v-c03d4a30","v-06ffdf36","v-e87f5264","v-c33ef8e8","v-ffcc0ea4","v-20729b92","v-23cd2113","v-00aa36b2","v-2891a61a","v-1d06f544","v-7c803182","v-573f8404","v-20905e73","v-070c152f","v-0291b30a","v-2d661165","v-9d64ef38","v-79f9a05e","v-17990ded","v-5ba2c580","v-19dc1c20","v-1da5dadc","v-294cae05","v-682ba558","v-2480c8cd","v-7b929843","v-35a127b0","v-58281f94","v-7efe3ef0","v-733043fc","v-fa68fb56","v-06c536ce","v-894ce788","v-5f0e06da","v-5d0d3c96","v-9d52c426","v-ff10b136","v-67b2b392","v-41ad36be","v-0179d9c8","v-982f3614","v-2a9292ca","v-60308af9","v-3dc01a1e","v-43b39d31","v-65a2b9b9","v-1d9bbd97","v-38ac66c1","v-4e4561c7","v-7a9a637c","v-689c6003","v-4fd76726","v-50022b27","v-1b7bda08","v-4a75a8ca","v-ff8cde1c","v-21e47859","v-21ba52c1","v-11ee8802","v-ce1d9382","v-027521cc"]}},star:{"/":{path:"/star/",keys:["v-2f55967c","v-349fb87b","v-1c829e52","v-e5984c6a","v-05573b46"]},"/zh/":{path:"/zh/star/",keys:["v-ddbde82a","v-5bcfad2a","v-d0356272","v-538a2646","v-fbcadf0c","v-06df26f4","v-6d0c678c","v-72f36506"]}},timeline:{"/":{path:"/timeline/",keys:["v-6022697a","v-3ff02593","v-0b2a4422","v-155b3612","v-6985d781","v-7813ca44","v-798c95fd","v-4e69f864","v-a0eafd0a","v-be73916a","v-1df908df","v-b93f1926","v-be2c9ec8","v-4d328dde","v-2206dc02","v-5499a5df","v-ce284ff4","v-106d4d44","v-5d634456","v-3a7c55e2","v-2b106454","v-b4e3bf38","v-02738b09","v-3e231f51","v-a5db72e6","v-12cc15fb","v-5abb1155","v-2fd44fde","v-081d7c76","v-0b37b602","v-521f5626","v-f648540e","v-280b4b72","v-1c08519f","v-fcc6a446","v-5fdc317f","v-cdac0a3e","v-c3bdf33c","v-68b4c8f8","v-660b1242","v-8f4323a6","v-1ce5ffde","v-30e253e2","v-52cd1778","v-7c18e3be","v-7354118a","v-4094a976","v-67569e35","v-9da72a26","v-4ecbd87c","v-53ba0e11","v-510ee6af","v-9a7ab73a","v-2163f696","v-77fd1436","v-6393b21c","v-f2a786dc","v-dfa4da02","v-2f55967c","v-349fb87b","v-1c829e52","v-271e5cf6","v-50c8db59","v-e5984c6a","v-05573b46","v-d9c466b0","v-584324ea","v-1aae202e","v-06f975a7","v-7b933308","v-ae572218","v-77a572f4","v-165c2f30","v-08107cad","v-a821f576","v-6b0e2128","v-6b49d44a","v-df36f7a6","v-3bba3d80","v-849acaf0","v-28b506e8","v-4179d052","v-0f9cca50","v-543d335a","v-bbae0c58","v-3e3c9404","v-5ad3f4b6","v-2b6e996a","v-f7fb7aca","v-1610ea61","v-dbd695ec","v-1066d072","v-26e6dd20","v-53e80eee","v-512e4fee"]},"/zh/":{path:"/zh/timeline/",keys:["v-7b27ee69","v-de6cc37c","v-44fdf740","v-35db20fa","v-393d10f2","v-eb4206e2","v-4e7a6e6c","v-21c8383f","v-75fde7aa","v-2c792888","v-e49de3e4","v-622f149e","v-370085d6","v-0cb3bd10","v-3555b5c0","v-1ca090cd","v-da44b262","v-5eb4972e","v-715d7b8e","v-08a3dd35","v-0b927333","v-7a271a05","v-7c7612da","v-3022e6c7","v-9874ca08","v-197f6a6a","v-75c09644","v-507721e2","v-05f799b6","v-d5206da4","v-03bf6cc8","v-c03d4a30","v-06ffdf36","v-e87f5264","v-c33ef8e8","v-ffcc0ea4","v-20729b92","v-23cd2113","v-00aa36b2","v-2891a61a","v-1d06f544","v-7c803182","v-573f8404","v-20905e73","v-070c152f","v-0291b30a","v-2d661165","v-9d64ef38","v-79f9a05e","v-17990ded","v-5ba2c580","v-19dc1c20","v-1da5dadc","v-294cae05","v-682ba558","v-2480c8cd","v-7b929843","v-35a127b0","v-ddbde82a","v-5bcfad2a","v-d0356272","v-538a2646","v-58281f94","v-7efe3ef0","v-733043fc","v-fa68fb56","v-fbcadf0c","v-06df26f4","v-6d0c678c","v-72f36506","v-06c536ce","v-894ce788","v-5f0e06da","v-5d0d3c96","v-9d52c426","v-ff10b136","v-67b2b392","v-41ad36be","v-0179d9c8","v-982f3614","v-2a9292ca","v-60308af9","v-3dc01a1e","v-43b39d31","v-65a2b9b9","v-1d9bbd97","v-38ac66c1","v-4e4561c7","v-7a9a637c","v-689c6003","v-4fd76726","v-50022b27","v-1b7bda08","v-4a75a8ca","v-ff8cde1c","v-21e47859","v-21ba52c1","v-11ee8802","v-ce1d9382","v-027521cc"]}}},E5=Ve(u5),jo=Vt(E5),Ku=e=>{const t=me(),n=Be(),r=He(),a=Lt();return D(()=>{var p;const l=e??((p=n.value.blog)==null?void 0:p.key)??"";if(!l)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const i=r.getRoutes();if(!jo.value[l])throw new Error(`useBlogCategory: key ${l} is invalid`);const s=jo.value[l][a.value],u={path:s.path,map:{}};for(const E in s.map){const d=s.map[E];u.map[E]={path:d.path,items:[]};for(const h of d.keys){const v=i.find(({name:A})=>A===h);if(v){const A=Fn(r,v.path);u.map[E].items.push({path:A.path,info:A.meta})}}t.value.path===d.path&&(u.currentItems=u.map[E].items)}return u})},d5=Ve(p5),Ho=Vt(d5),Ba=e=>{const t=Be(),n=He(),r=Lt();return D(()=>{var u;const a=e??((u=t.value.blog)==null?void 0:u.key)??"";if(!a)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!Ho.value[a])throw new Error(`useBlogType: key ${e} is invalid`);const l=n.getRoutes(),i=Ho.value[a][r.value],s={path:i.path,items:[]};for(const p of i.keys){const E=l.find(({name:d})=>d===p);if(E){const d=Fn(n,E.path);s.items.push({path:d.path,info:d.meta})}}return s})},Qu=()=>o(ce,{name:"lock"},()=>o("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Qu.displayName="LockIcon";var h5=[];const Yu=Symbol.for("categoryMap"),Pr=()=>{const e=fe(Yu);if(!e)throw new Error("useCategoryMap() is called without provider.");return e},f5=()=>{const e=Ku("category");mt(Yu,e)},Cr=()=>{const e=xt(),t=oe();return D(()=>({...e.value.blog,...t.value.blog}))},Xu=Symbol.for("tagMap"),wr=()=>{const e=fe(Xu);if(!e)throw new Error("useTagMap() is called without provider.");return e},v5=()=>{const e=Ku("tag");mt(Xu,e)},m5=e=>{const t=oe();return D(()=>{const{[Ae.author]:n}=e.value;return n?ur(n):n===!1?[]:ur(t.value.author,!1)})},_5=e=>{const t=Pr();return D(()=>Ic(e.value[Ae.category]).map(n=>({name:n,path:t.value.map[n].path})))},A5=e=>{const t=wr();return D(()=>Oc(e.value[Ae.tag]).map(n=>({name:n,path:t.value.map[n].path})))},g5=e=>D(()=>{const{[Ae.date]:t}=e.value;return Yl(t)}),b5=e=>{const t=Sn(e,"info"),n=Cr(),r=m5(t),a=_5(t),l=A5(t),i=g5(t),s=Eu(),u=D(()=>({author:r.value,category:a.value,date:i.value,localizedDate:t.value[Ae.localizedDate]||"",tag:l.value,isOriginal:t.value[Ae.isOriginal]||!1,readingTime:t.value[Ae.readingTime]||null,readingTimeLocale:t.value[Ae.readingTime]&&s.value?pu(t.value[Ae.readingTime],s.value):null,pageview:e.path})),p=D(()=>n.value.articleInfo);return{info:u,items:p}},Zu=Symbol(""),Tr=()=>{const e=fe(Zu);if(!e)throw new Error("useArticles() is called without provider.");return e},B5=()=>{const e=Ba("article");mt(Zu,e)},ep=Symbol(""),ci=()=>{const e=fe(ep);if(!e)throw new Error("useStars() is called without provider.");return e},y5=()=>{const e=Ba("star");mt(ep,e)},tp=Symbol(""),ui=()=>{const e=fe(tp);if(!e)throw new Error("useTimelines() is called without provider.");return e},D5=()=>{const e=Ba("timeline"),t=D(()=>{const n=[];return e.value.items.forEach(({info:r,path:a})=>{const l=Yl(r[Ae.date]),i=l==null?void 0:l.getFullYear(),s=l?l.getMonth()+1:null,u=l==null?void 0:l.getDate();i&&s&&u&&((!n[0]||n[0].year!==i)&&n.unshift({year:i,items:[]}),n[0].items.push({date:`${s}/${u}`,info:r,path:a}))}),{...e.value,config:n.reverse()}});mt(tp,t)},L5=()=>{B5(),f5(),y5(),v5(),D5()};var P5=z({name:"SocialMedia",setup(){const e=Cr(),t=hn(),n=D(()=>{const r=e.value.medias;return r?en(r).map(([a,l])=>({name:a,icon:c5[a],url:l})):[]});return()=>n.value.length?o("div",{class:"vp-social-medias"},n.value.map(({name:r,icon:a,url:l})=>o("a",{class:"vp-social-media",href:l,rel:"noopener noreferrer",target:"_blank","aria-label":r,...t.value?{}:{"data-balloon-pos":"up"},innerHTML:a}))):null}}),pi=z({name:"BloggerInfo",setup(){const e=Cr(),t=Mn(),n=oe(),r=Tr(),a=Pr(),l=wr(),i=ui(),s=yr(),u=D(()=>{var h;return e.value.name||((h=ur(n.value.author)[0])==null?void 0:h.name)||t.value.title}),p=D(()=>e.value.avatar||n.value.logo),E=D(()=>n.value.blogLocales),d=D(()=>e.value.intro);return()=>{const{article:h,category:v,tag:A,timeline:y}=E.value,B=[[r.value.path,r.value.items.length,h],[a.value.path,tt(a.value.map).length,v],[l.value.path,tt(l.value.map).length,A],[i.value.path,i.value.items.length,y]];return o("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},[o("div",{class:"vp-blogger",...d.value?{style:{cursor:"pointer"},"aria-label":E.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>s(d.value)}:{}},[p.value?o("img",{class:["vp-blogger-avatar",{round:e.value.roundAvatar}],src:ye(p.value),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,u.value?o("div",{class:"vp-blogger-name",property:"name"},u.value):null,e.value.description?o("div",{class:"vp-blogger-description",innerHTML:e.value.description}):null,d.value?o("meta",{property:"url",content:ye(d.value)}):null]),o("div",{class:"vp-blog-counts"},B.map(([b,C,g])=>o(Ie,{class:"vp-blog-count",to:b},()=>[o("div",{class:"count"},C),o("div",g)]))),o(P5)])}}});const Ei=()=>o(ce,{name:"category"},()=>o("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Ei.displayName="CategoryIcon";const di=()=>o(ce,{name:"tag"},()=>o("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));di.displayName="TagIcon";const hi=()=>o(ce,{name:"timeline"},()=>o("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));hi.displayName="TimelineIcon";const np=()=>o(ce,{name:"slides"},()=>o("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));np.displayName="SlideIcon";const rp=()=>o(ce,{name:"sticky"},()=>[o("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);rp.displayName="StickyIcon";const ya=()=>o(ce,{name:"article"},()=>o("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));ya.displayName="ArticleIcon";const ap=()=>o(ce,{name:"book"},()=>o("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));ap.displayName="BookIcon";const lp=()=>o(ce,{name:"link"},()=>o("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));lp.displayName="LinkIcon";const ip=()=>o(ce,{name:"project"},()=>o("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));ip.displayName="ProjectIcon";const op=()=>o(ce,{name:"friend"},()=>o("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));op.displayName="FriendIcon";const bl=()=>o(ce,{name:"slide-down"},()=>o("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));bl.displayName="SlideDownIcon";const sp=()=>o("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});sp.displayName="EmptyIcon";var C5=z({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(e,{slots:t}){const n=Sn(e,"info"),{info:r,items:a}=b5(e);return()=>{var h,v,A;const{[Ae.title]:l,[Ae.type]:i,[Ae.isEncrypted]:s=!1,[Ae.cover]:u,[Ae.excerpt]:p,[Ae.sticky]:E}=n.value,d=r.value;return o("div",{class:"vp-article-wrapper"},o("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[((h=t.cover)==null?void 0:h.call(t,{cover:u}))||(u?[o("img",{class:"vp-article-cover",src:ye(u),loading:"lazy"}),o("meta",{property:"image",content:ye(u)})]:[]),E?o(rp):null,o(Ie,{to:e.path},()=>{var y;return((y=t.title)==null?void 0:y.call(t,{title:l,isEncrypted:s,type:i}))||o("header",{class:"vp-article-title"},[s?o(Qu):null,i===Au.slide?o(np):null,o("span",{property:"headline"},l)])}),((v=t.excerpt)==null?void 0:v.call(t,{excerpt:p}))||(p?o("div",{class:"vp-article-excerpt",innerHTML:p}):null),o("hr",{class:"vp-article-hr"}),((A=t.info)==null?void 0:A.call(t,{info:d}))||o(Hu,{info:d,...a.value?{items:a.value}:{}})]))}}}),w5=z({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(e,{emit:t}){let n;const r=oe(),a=X(""),l=D(()=>r.value.paginationLocales),i=D(()=>Math.ceil(e.total/e.perPage)),s=D(()=>!!i.value&&i.value!==1),u=D(()=>i.value<7?!1:e.current>4),p=D(()=>i.value<7?!1:e.current<i.value-3),E=D(()=>{const{current:v}=e;let A=1,y=i.value;const B=[];i.value>=7&&(v<=4&&v<i.value-3?(A=1,y=5):v>4&&v>=i.value-3?(y=i.value,A=i.value-4):i.value>7&&(A=v-2,y=v+2));for(let b=A;b<=y;b++)B.push(b);return B}),d=v=>t("updateCurrentPage",v),h=v=>{const A=parseInt(v);A<=i.value&&A>0?d(A):n.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${l.value.errorText.replace(/\$page/g,i.value.toString())}`)};return ge(()=>{n=new U0}),()=>o("div",{class:"vp-pagination"},s.value?o("nav",{class:"vp-pagination-list"},[o("div",{class:"vp-pagination-number "},[e.current>1?o("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>d(e.current-1)},l.value.prev):null,u.value?[o("div",{role:"navigation",onClick:()=>d(1)},1),o("div",{class:"ellipsis"},"...")]:null,E.value.map(v=>o("div",{key:v,class:{active:e.current===v},role:"navigation",onClick:()=>d(v)},v)),p.value?[o("div",{class:"ellipsis"},"..."),o("div",{role:"navigation",onClick:()=>d(i.value)},i.value)]:null,e.current<i.value?o("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>d(e.current+1)},l.value.next):null]),o("div",{class:"vp-pagination-nav"},[o("label",{for:"navigation-text"},`${l.value.navigate}: `),o("input",{id:"navigation-text",value:a.value,onInput:({target:v})=>{a.value=v.value},onKeydown:v=>{v.key==="Enter"&&(v.preventDefault(),h(a.value))}}),o("button",{class:"vp-pagination-button",role:"navigation",title:l.value.action,onClick:()=>h(a.value)},l.value.action)])]):[])}}),fi=z({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(e){const t=At(),n=He(),r=Cr(),a=X(1),l=D(()=>r.value.articlePerPage||10),i=D(()=>e.items.slice((a.value-1)*l.value,a.value*l.value)),s=async u=>{a.value=u;const p={...t.query};!(p.page===u.toString()||u===1&&!p.page)&&(u===1?delete p.page:p.page=u.toString(),await n.push({path:t.path,query:p}))};return ge(()=>{const{page:u}=t.query;s(u?Number(u):1),he(a,()=>{const p=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,p)},100)})}),()=>o("div",{id:"article-list",class:"vp-article-list",role:"feed"},i.value.length?[...i.value.map(({info:u,path:p},E)=>o(de,{appear:!0,delay:E*.04},()=>o(C5,{key:p,info:u,path:p}))),o(w5,{current:a.value,perPage:l.value,total:e.items.length,onUpdateCurrentPage:s})]:o(sp))}}),cp=z({name:"CategoryList",setup(){const e=me(),t=Pr();return()=>o("ul",{class:"vp-category-list"},en(t.value.map).sort(([,n],[,r])=>r.items.length-n.items.length).map(([n,{path:r,items:a}])=>o("li",{class:["vp-category",`vp-category${ma(n,9)}`,{active:r===e.value.path}]},o(Ie,{to:r},()=>[n,o("span",{class:"count"},a.length)]))))}}),up=z({name:"TagList",setup(){const e=Be(),t=wr(),n=r=>{var a;return r===((a=e.value.blog)==null?void 0:a.name)};return()=>o("ul",{class:"tag-list-wrapper"},en(t.value.map).sort(([,r],[,a])=>a.items.length-r.items.length).map(([r,{path:a,items:l}])=>o("li",{class:["tag",`tag${ma(r,9)}`,{active:n(r)}]},o(Ie,{to:a},()=>[r,o("span",{class:"tag-num"},l.length)]))))}}),T5=z({name:"TimelineList",setup(){const e=oe(),t=ui(),n=yr(),r=D(()=>e.value.blogLocales.timeline);return()=>o("div",{class:"timeline-list-wrapper"},[o("div",{class:"timeline-list-title",onClick:()=>n(t.value.path)},[o(hi),o("span",{class:"num"},t.value.items.length),r.value]),o("hr"),o("div",{class:"timeline-content"},o("ul",{class:"timeline-list"},t.value.config.map(({year:a,items:l},i)=>o(de,{appear:!0,delay:.08*(i+1)},()=>o("li",[o("h3",{class:"timeline-year"},a),o("ul",{class:"timeline-year-wrapper"},l.map(({date:s,info:u,path:p})=>o("li",{class:"timeline-item"},[o("span",{class:"timeline-date"},s),o(Ie,{class:"timeline-title",to:p},()=>u[Ae.title])])))])))))])}});const k5={article:ya,category:Ei,tag:di,timeline:hi};var pp=z({name:"InfoList",setup(){const e=oe(),t=Tr(),n=Pr(),r=D(()=>tt(n.value.map).length),a=ci(),l=wr(),i=D(()=>tt(l.value.map).length),s=yr(),u=X("article"),p=D(()=>e.value.blogLocales);return()=>o("div",{class:"vp-blog-infos"},[o("div",{class:"vp-blog-type-switcher"},en(k5).map(([E,d])=>o("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{u.value=E}},o("div",{class:["icon-wrapper",{active:u.value===E}],"aria-label":p.value[E],"data-balloon-pos":"up"},o(d))))),o(de,()=>u.value==="article"?o("div",{class:"vp-star-article-wrapper"},[o("div",{class:"title",onClick:()=>s(t.value.path)},[o(ya),o("span",{class:"num"},t.value.items.length),p.value.article]),o("hr"),a.value.items.length?o("ul",{class:"vp-star-articles"},a.value.items.map(({info:E,path:d},h)=>o(de,{appear:!0,delay:.08*(h+1)},()=>o("li",{class:"vp-star-article"},o(Ie,{to:d},()=>E[Ae.title]))))):o("div",{class:"vp-star-article-empty"},p.value.empty.replace("$text",p.value.star))]):u.value==="category"?o("div",{class:"vp-category-wrapper"},[r.value?[o("div",{class:"title",onClick:()=>s(n.value.path)},[o(Ei),o("span",{class:"num"},r.value),p.value.category]),o("hr"),o(de,{delay:.04},()=>o(cp))]:o("div",{class:"vp-category-empty"},p.value.empty.replace("$text",p.value.category))]):u.value==="tag"?o("div",{class:"vp-tag-wrapper"},[i.value?[o("div",{class:"title",onClick:()=>s(l.value.path)},[o(di),o("span",{class:"num"},i.value),p.value.tag]),o("hr"),o(de,{delay:.04},()=>o(up))]:o("div",{class:"vp-tag-empty"},p.value.empty.replace("$text",p.value.tag))]):o(de,()=>o(T5)))])}}),Da=z({name:"BlogWrapper",slots:Object,setup(e,{slots:t}){const{isMobile:n}=Dr();return()=>[o(si),o(ii,{noSidebar:!0,noToc:!0},{default:()=>t.default(),navScreenBottom:()=>o(pi),...n.value?{sidebar:()=>o(pp)}:{}})]}});const Ep=()=>o("aside",{class:"vp-blog-info-wrapper"},[o(de,()=>o(pi)),o(de,{delay:.04},()=>o(pp))]);Ep.displayName="InfoPanel";var La=Ep,I5=z({name:"BlogPage",setup(){const e=me(),t=Be(),n=Pr(),r=wr();return()=>{const{key:a="",name:l=""}=t.value.blog||{},i=l?a==="category"?n.value.map[l].items:a==="tag"?r.value.map[l].items:[]:[];return o(Da,()=>o("div",{class:"vp-page vp-blog"},o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(de,()=>a==="category"?o(cp):a==="tag"?o(up):null),l?o(de,{appear:!0,delay:.24},()=>o(fi,{key:e.value.path,items:i})):null]),o(de,{delay:.16},()=>o(La,{key:"blog"}))])))}}});const O5="//theme-hope-assets.vuejs.press/hero/default.jpg";var F5=z({name:"BlogHero",slots:Object,setup(e,{slots:t}){const n=Be(),r=Mn(),a=Ve(),l=D(()=>n.value.heroFullScreen??!1),i=D(()=>{const{heroText:u,heroImage:p,heroImageDark:E,heroAlt:d,heroImageStyle:h,tagline:v}=n.value;return{text:u??r.value.title??"Hello",image:p?ye(p):null,imageDark:E?ye(E):null,heroStyle:h,alt:d||u||"",tagline:v??"",isFullScreen:l.value}}),s=D(()=>{const{bgImage:u,bgImageDark:p,bgImageStyle:E}=n.value;return{image:le(u)?ye(u):u===!1?null:O5,imageDark:le(p)?ye(p):null,bgStyle:E,isFullScreen:l.value}});return()=>{var u,p;return n.value.hero===!1?null:o("div",{ref:a,class:["vp-blog-hero",{fullscreen:l.value,"no-bg":!s.value.image}]},[((u=t.heroBg)==null?void 0:u.call(t,s.value))||[s.value.image?o("div",{class:["vp-blog-mask",{light:s.value.imageDark}],style:[{background:`url(${s.value.image}) center/cover no-repeat`},s.value.bgStyle]}):null,s.value.imageDark?o("div",{class:"vp-blog-mask dark",style:[{background:`url(${s.value.imageDark}) center/cover no-repeat`},s.value.bgStyle]}):null],((p=t.heroInfo)==null?void 0:p.call(t,i.value))||[o(de,{appear:!0,type:"group",delay:.04},()=>[i.value.image?o("img",{key:"light",class:["vp-blog-hero-image",{light:i.value.imageDark}],style:i.value.heroStyle,src:i.value.image,alt:i.value.alt}):null,i.value.imageDark?o("img",{key:"dark",class:"vp-blog-hero-image dark",style:i.value.heroStyle,src:i.value.imageDark,alt:i.value.alt}):null]),o(de,{appear:!0,delay:.08},()=>i.value.text?o("h1",{class:"vp-blog-hero-title"},i.value.text):null),o(de,{appear:!0,delay:.12},()=>i.value.tagline?o("p",{class:"vp-blog-hero-description",innerHTML:i.value.tagline}):null)],i.value.isFullScreen?o("button",{type:"button",class:"slide-down-button",onClick:()=>{window.scrollTo({top:a.value.clientHeight,behavior:"smooth"})}},[o(bl),o(bl)]):null])}}});const R5=["link","article","book","project","friend"];var V5=z({name:"ProjectPanel",components:{ArticleIcon:ya,BookIcon:ap,FriendIcon:op,LinkIcon:lp,ProjectIcon:ip},props:{items:{type:Array,required:!0}},setup(e){const t=hn(),n=yr(),r=(a="",l="icon")=>R5.includes(a)?o(ct(`${a}-icon`)):dn(a)?o("img",{class:"vp-project-image",src:a,alt:l}):_a(a)?o("img",{class:"vp-project-image",src:ye(a),alt:l}):o(je,{icon:a});return()=>o("div",{class:"vp-project-panel"},e.items.map(({icon:a,link:l,name:i,desc:s},u)=>o("div",{class:["vp-project-card",{[`project${u%9}`]:!t.value}],onClick:()=>n(l)},[r(a,i),o("div",{class:"vp-project-name"},i),o("div",{class:"vp-project-desc"},s)])))}}),S5=z({name:"BlogHome",setup(){const e=Tr(),t=Be(),n=D(()=>t.value.projects??[]);return()=>o("div",{class:"vp-page vp-blog"},[o(F5),o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[n.value.length?o(de,{appear:!0,delay:.16},()=>o(V5,{items:n.value})):null,o(de,{appear:!0,delay:.24},()=>o(fi,{items:e.value.items}))]),o(de,{appear:!0,delay:.16},()=>o(La,{key:"blog"}))]),o(de,{appear:!0,delay:.28},()=>o(oi))])}});const dp=()=>o(Da,()=>o(S5));dp.displayName="BlogHomeLayout";var x5=dp,M5=z({name:"ArticleType",setup(){const e=me(),t=Lt(),n=oe(),r=Tr(),a=ci(),l=D(()=>{const i=n.value.blogLocales;return[{text:i.all,path:r.value.path},{text:i.star,path:a.value.path},...h5.map(({key:s,path:u})=>({text:i[s],path:u.replace(/^\//,t.value)}))]});return()=>o("ul",{class:"vp-article-type-wrapper"},l.value.map(i=>o("li",{class:["vp-article-type",{active:i.path===e.value.path}]},o(Ie,{to:i.path},()=>i.text))))}}),z5=z({name:"BlogPage",setup(){const e=Ba(),t=Be(),n=me(),r=Tr(),a=ci(),l=D(()=>{const{key:i="",type:s}=t.value.blog||{};return i==="star"?a.value.items:s==="type"&&i?e.value.items:r.value.items});return()=>o(Da,()=>o("div",{class:"vp-page vp-blog"},o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(de,()=>o(M5)),o(de,{appear:!0,delay:.24},()=>o(fi,{key:n.value.path,items:l.value}))]),o(de,{delay:.16},()=>o(La,{key:"blog"}))])))}}),$5=z({name:"TimelineItems",setup(){const e=Cr(),t=oe(),n=ui(),r=D(()=>e.value.timeline||t.value.blogLocales.timelineTitle),a=D(()=>n.value.config.map(({year:l})=>({title:l.toString(),level:2,slug:l.toString(),children:[]})));return()=>o("div",{class:"timeline-wrapper"},o("ul",{class:"timeline-content"},[o(de,()=>o("li",{class:"motto"},r.value)),o(qu,{items:a.value}),n.value.config.map(({year:l,items:i},s)=>o(de,{appear:!0,delay:.08*(s+1),type:"group"},()=>[o("h3",{key:"title",id:l,class:"timeline-year-title"},o("span",l)),o("li",{key:"content",class:"timeline-year-list"},[o("ul",{class:"timeline-year-wrapper"},i.map(({date:u,info:p,path:E})=>o("li",{class:"timeline-item"},[o("span",{class:"timeline-date"},u),o(Ie,{class:"timeline-title",to:E},()=>p[Ae.title])])))])]))]))}});const hp=()=>o(Da,()=>o("div",{class:"vp-page vp-blog"},o("div",{class:"blog-page-wrapper"},[o("main",{id:"main-content",class:"vp-blog-main"},[o(de,{appear:!0,delay:.24},()=>o($5))]),o(de,{delay:.16},()=>o(La,{key:"blog"}))])));hp.displayName="Timeline";var N5=hp;Hh(e=>{const t=e.t,n=e.I!==!1,r=e.i;return n?{title:t,content:r?()=>[o(je,{icon:r}),t]:null,order:e.O,index:e.I}:null});const j5=Pt({enhance:({app:e,router:t})=>{const{scrollBehavior:n}=t.options;t.options.scrollBehavior=async(...r)=>(await Gu().wait(),n(...r)),cf(e),e.component("HopeIcon",je),e.component("VPLink",Ie),e.component("BloggerInfo",pi)},setup:()=>{uf(),df(),L5()},layouts:{Layout:i5,NotFound:s5,BlogCategory:I5,BlogHome:x5,BlogType:z5,Timeline:N5}}),Gr=[fd,Vh,jh,Wh,Xh,n1,o1,f1,$1,Y1,j5],H5=[["v-8daa1a0e","/",{y:"h",t:"Blog",i:"home"},["/README.md"]],["v-184f4da6","/intro.html",{y:"p",t:"About Me",i:"user"},[":md"]],["v-1473bf53","/demo/",{y:"p",t:"Project",i:"star"},["/demo/README.md"]],["v-e1e3da16","/posts/",{y:"p",t:"Archive",i:"book"},["/posts/README.md"]],["v-2d0ad528","/zh/",{y:"h",t:"博客",i:"home"},["/zh/README.md"]],["v-858cfdd6","/zh/intro.html",{y:"p",t:"关于我",i:"user"},[":md"]],["v-05573b46","/posts/LLM/langchain.html",{d:17064e8,l:"January 28, 2024",c:["LLM"],g:["LLM"],u:!0,e:`<h1> Understanding LangChain in One Article: Building Powerful Applications with Large Language Models</h1>
<blockquote>
<p>Starting with the architecture diagram, step by step, this article helps you understand all aspects of LangChain.</p>
</blockquote>
<ul>
<li>
<ol>
<li>What is LangChain?</li>
</ol>
</li>
<li>
<ol start="2">
<li>What Information Does the LangChain Architecture Diagram Tell Us?</li>
</ol>
</li>
<li>
<ol start="3">
<li>Essential Core Modules You Need to Know</li>
</ol>
</li>
<li>
<ol start="4">
<li>Experience the Function of Each Module Through Simple Example Code</li>
</ol>
</li>
</ul>
`,r:{minutes:3.9,words:1171},y:"a",t:"Understanding LangChain in One Article: Building Powerful Applications with Large Language Models",i:"lightbulb"},[":md"]],["v-e5984c6a","/posts/LLM/langchain_source_code.html",{d:17064864e5,l:"January 29, 2024",c:["LLM"],g:["LLM"],u:!0,e:`<h1> From the Source Code Perspective, Peering into the Operation Logic of LangChain</h1>
<blockquote>
<p>By interpreting the source code of Chain and AgentExecutor, let's understand how various modules are interconnected.</p>
</blockquote>
<ul>
<li>
<ol>
<li>Base Class of LangChain</li>
</ol>
</li>
<li>
<ol start="2">
<li>LCEL与Runnable</li>
</ol>
</li>
<li>
<ol start="3">
<li>Chain</li>
</ol>
</li>
<li>
<ol start="4">
<li>AgentExecutor</li>
</ol>
</li>
</ul>
`,r:{minutes:4.45,words:1336},y:"a",t:"From the Source Code Perspective, Peering into the Operation Logic of LangChain",i:"lightbulb"},[":md"]],["v-349fb87b","/posts/LLM/llama.html",{d:17172e8,l:"June 1, 2024",c:["LLM"],g:["LLM"],u:!0,e:`<h1> Llama Source Code Exploration</h1>
<ul>
<li>
<ol>
<li>About</li>
</ol>
</li>
<li>
<ol start="2">
<li>Llama Overall Architecture</li>
</ol>
</li>
<li>
<ol start="3">
<li>Hyperparameters</li>
</ol>
</li>
<li>
<ol start="4">
<li>Tensor Dimensionality Transformation</li>
</ol>
</li>
<li>
<ol start="5">
<li>Number of Trainable Parameters</li>
</ol>
</li>
<li>
<ol start="6">
<li>Source Code</li>
</ol>
</li>
</ul>
`,r:{minutes:5.46,words:1639},y:"a",t:"Llama Source Code Exploration",i:"lightbulb"},[":md"]],["v-2f55967c","/posts/LLM/llm_summary.html",{d:17188416e5,l:"June 20, 2024",c:["LLM"],g:["LLM"],u:!0,e:`<h1> LLM Summary</h1>
<ul>
<li>
<ol>
<li>The Platform for LLM evals</li>
</ol>
</li>
<li>
<ol start="2">
<li>LLM Organization and Product</li>
</ol>
</li>
</ul>
`,r:{minutes:1.64,words:492},y:"a",t:"LLM Summary",i:"lightbulb"},[":md"]],["v-50c8db59","/posts/LLM/streamlit.html",{d:17084736e5,l:"February 21, 2024",c:["LLM"],g:["LLM"],e:`<h1> Building Conversational Applications with Streamlit</h1>
<ul>
<li>
<ol>
<li>Components Required for Constructing a Dialogue Interface</li>
</ol>
</li>
<li>
<ol start="2">
<li>Complete Process of Dialogue Interface</li>
</ol>
</li>
<li>
<ol start="3">
<li>Refactoring for Streaming Output of Assistant Messages</li>
</ol>
</li>
<li>
<ol start="4">
<li>Building an Application that Encapsulates ChatGPT</li>
</ol>
</li>
</ul>
`,r:{minutes:1.56,words:467},y:"a",t:"Building Conversational Applications with Streamlit",i:"lightbulb"},[":md"]],["v-1c829e52","/posts/LLM/transformer.html",{d:17165088e5,l:"May 24, 2024",c:["LLM"],g:["LLM"],u:!0,e:`<h1> Transformer Source Code Exploration</h1>
<ul>
<li>
<ol>
<li>About</li>
</ol>
</li>
<li>
<ol start="2">
<li>Transformer Overall Architecture</li>
</ol>
</li>
<li>
<ol start="3">
<li>Hyperparameters</li>
</ol>
</li>
<li>
<ol start="4">
<li>Tensor Dimensionality Transformation</li>
</ol>
</li>
<li>
<ol start="5">
<li>Number of Trainable Parameters</li>
</ol>
</li>
<li>
<ol start="6">
<li>Source Code</li>
</ol>
</li>
</ul>
`,r:{minutes:16.02,words:4805},y:"a",t:"Transformer Source Code Exploration",i:"lightbulb"},[":md"]],["v-7b933308","/posts/Language/commen_mistakes.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Commen Mistakes"],e:`<h1> Commen Mistakes</h1>
`,r:{minutes:2.44,words:731},y:"a",t:"Commen Mistakes",i:"lightbulb"},[":md"]],["v-ae572218","/posts/Language/grammar.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Grammar"],e:`<h1> Grammar</h1>
<blockquote>
<p>Don't think that mastering the entire set of grammar rules is necessary to learn Language well.  Once you've grasped the core grammar, you're already well on your way. The rest is just about continuous accumulation and improvement.</p>
<p>Remember, the sole purpose of grammar is to build sentences.</p>
</blockquote>
`,r:{minutes:16.69,words:5007},y:"a",t:"Grammar",i:"lightbulb"},[":md"]],["v-77a572f4","/posts/Language/pronunciation.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Pronunciation"],e:`<h1> Pronunciation</h1>
`,r:{minutes:6.08,words:1824},y:"a",t:"Pronunciation",i:"lightbulb"},[":md"]],["v-165c2f30","/posts/Language/sentence_pattern_and_expression.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Sentence Pattern and Expression"],e:`<h1> Sentence Pattern and Expression</h1>
`,r:{minutes:24.08,words:7223},y:"a",t:"Sentence Pattern and Expression",i:"lightbulb"},[":md"]],["v-512e4fee","/posts/Python/01_python_environment.html",{d:16543872e5,l:"June 5, 2022",c:["Python"],g:["Python"],e:`<h1> Setting Up Python Development Environment and Using Pip for Package Management</h1>
<ul>
<li>
<ol>
<li>Applicable Scope</li>
</ol>
</li>
<li>
<ol start="2">
<li>Python Development Environment</li>
</ol>
</li>
<li>
<ol start="3">
<li>Package Management Tool: pip</li>
</ol>
</li>
<li>
<ol start="4">
<li>Pip Commands</li>
</ol>
</li>
</ul>
`,r:{minutes:7.22,words:2167},y:"a",t:"Setting Up Python Development Environment and Using Pip for Package Management",i:"lightbulb"},[":md"]],["v-53e80eee","/posts/Python/02_python_data_type.html",{d:1654992e6,l:"June 12, 2022",c:["Python"],g:["Python"],e:`<h1> Python Data Types</h1>
<ul>
<li>
<ol>
<li>Data Types</li>
</ol>
</li>
<li>
<ol start="2">
<li>String Operations</li>
</ol>
</li>
<li>
<ol start="3">
<li>List Operations</li>
</ol>
</li>
<li>
<ol start="4">
<li>Tuple Operations</li>
</ol>
</li>
<li>
<ol start="5">
<li>Set Operations</li>
</ol>
</li>
<li>
<ol start="6">
<li>Dictionary Operations</li>
</ol>
</li>
</ul>
`,r:{minutes:14.08,words:4224},y:"a",t:"Python Data Types",i:"lightbulb"},[":md"]],["v-26e6dd20","/posts/Python/03_python_operator.html",{d:16555104e5,l:"June 18, 2022",c:["Python"],g:["Python"],e:`<h1> Python Operators</h1>
<ul>
<li>
<ol>
<li>Variables and Constants</li>
</ol>
</li>
<li>
<ol start="2">
<li>Operators</li>
</ol>
</li>
<li>
<ol start="3">
<li>Comments</li>
</ol>
</li>
</ul>
`,r:{minutes:3.17,words:950},y:"a",t:"Python Operators",i:"lightbulb"},[":md"]],["v-1066d072","/posts/Python/04_python_method.html",{d:1655856e6,l:"June 22, 2022",c:["Python"],g:["Python"],e:`<h1> Python Functions</h1>
<ul>
<li>
<ol>
<li>Sequence/Selection/Iteration Statements</li>
</ol>
</li>
<li>
<ol start="2">
<li>Functions</li>
</ol>
</li>
<li>
<ol start="3">
<li>Built-in Functions</li>
</ol>
</li>
<li>
<ol start="4">
<li>Higher-order Functions</li>
</ol>
</li>
<li>
<ol start="5">
<li>Built-in Higher-order Functions</li>
</ol>
</li>
</ul>
`,r:{minutes:7.49,words:2247},y:"a",t:"Python Functions",i:"lightbulb"},[":md"]],["v-dbd695ec","/posts/Python/05_python_builtin_module.html",{d:16563744e5,l:"June 28, 2022",c:["Python"],g:["Python"],e:`<h1> Python Packages and Modules</h1>
<ul>
<li>
<ol>
<li>Packages, Modules,and <strong>init</strong>.py</li>
</ol>
</li>
<li>
<ol start="2">
<li>Inside Python Files</li>
</ol>
</li>
<li>
<ol start="3">
<li>Python Built-in Modules</li>
</ol>
</li>
<li>
<ol start="4">
<li>Practice</li>
</ol>
</li>
</ul>
`,r:{minutes:8.24,words:2473},y:"a",t:"Python Packages and Modules",i:"lightbulb"},[":md"]],["v-1610ea61","/posts/Python/06_python_popular_package.html",{d:16568064e5,l:"July 3, 2022",c:["Python"],g:["Python"],e:`<h1> Popular Third-party Python Packages</h1>
<ul>
<li>
<ol>
<li>Numpy</li>
</ol>
</li>
<li>
<ol start="2">
<li>Pandas</li>
</ol>
</li>
<li>
<ol start="3">
<li>Requests</li>
</ol>
</li>
<li>
<ol start="4">
<li>Flask</li>
</ol>
</li>
<li>
<ol start="5">
<li>More</li>
</ol>
</li>
</ul>
`,r:{minutes:5.06,words:1519},y:"a",t:"Popular Third-party Python Packages",i:"lightbulb"},[":md"]],["v-6022697a","/posts/api/GraphQL.html",{d:172905854e4,e:`<h1> GraphQL</h1>
<p><a href="https://hasura.io/learn/graphql/intro-graphql/introduction/" target="_blank" rel="noopener noreferrer">https://hasura.io/learn/graphql/intro-graphql/introduction/</a> <br></p>
<p><a href="https://graphql.cn/learn/" target="_blank" rel="noopener noreferrer">https://graphql.cn/learn/</a> <br></p>`,r:{minutes:.05,words:15},y:"a",t:"GraphQL",i:"lightbulb"},[":md"]],["v-3ff02593","/posts/code/%E7%AE%97%E6%B3%95%E6%8F%90%E5%8D%87.html",{d:172905854e4,e:`<h1> 算法提升</h1>
<h1> 刷题（持续练习，刻意练习不熟悉的数据结构和算法，反复回顾）</h1>
<p>刷算法 <br>
1.限时10分钟想思路，如果想不出来直接看题解，节省时间，试着根据题解写代码，还写不出来，直接看题解代码，理解后复现 <br>
2.重复刷题：时间久了会生疏，需重复刷找回记忆 <br>
3.写解题报告 <br>
写解题步骤，供忘记了快速想起来，减少重复刷题的遍数 <br></p>
<p>Note:面试时，注重沟通和交流，把面试官当作之后的同事伙伴，一起交流问题 <br>
题库：力扣 <br>
做题：把所有想到的方法过一遍，<strong>时刻想到时空复杂度</strong>，选择时空复杂度最优的 <br>
关键：3分学，7分练，动手写，总结自己的代码模板 <br>
合格程序员的第一步：算法和数据结构 <br>
 <br>
1.看题，边界范围，可通过范围知道可能的解法（询问题目细节，边界条件，可能的极端错误情况） <br>
2.想尽可能多的解，找到最佳解（所有可能的解法都和面试官沟通一遍） <br>
3.代码实现 <br>
4.学习别人的代码 <br>
 <br></p>`,r:{minutes:2.04,words:612},y:"a",t:"算法提升",i:"lightbulb"},["/posts/code/算法提升.html","/posts/code/算法提升.md",":md"]],["v-0b2a4422","/posts/code/%E7%BB%8F%E5%85%B8%E9%A2%98%E6%B1%87%E6%80%BB%EF%BC%88%E6%AF%8F%E4%B8%AA%E7%BB%86%E5%88%86%E7%B1%BB%E9%99%90%E5%AE%9A10%E9%A2%98%E4%BB%A5%E5%86%85%EF%BC%89.html",{d:172905854e4,e:`<h1> 经典题汇总（每个细分类限定10题以内）</h1>
<p>%代表做不出来的次数<br>
&amp;代表做出来的次数</p>
<ul>
<li><a href="#%E7%BB%8F%E5%85%B8%E9%A2%98%E6%B1%87%E6%80%BB%E6%AF%8F%E4%B8%AA%E7%BB%86%E5%88%86%E7%B1%BB%E9%99%90%E5%AE%9A10%E9%A2%98%E4%BB%A5%E5%86%85">经典题汇总（每个细分类限定10题以内）</a></li>
<li><a href="#%E6%95%B0%E7%BB%84">数组</a></li>
<li><a href="#%E5%8F%8C%E6%8C%87%E9%92%88%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3">双指针&amp;滑动窗口</a></li>
<li><a href="#%E9%93%BE%E8%A1%A8">链表</a></li>
<li><a href="#%E6%A0%91">树</a>
<ul>
<li><a href="#%E7%BA%BF%E6%AE%B5%E6%A0%91">线段树</a></li>
</ul>
</li>
<li><a href="#%E5%9B%BE">!图</a>
<ul>
<li><a href="#dfs">DFS</a>
<ul>
<li><a href="#%E5%9B%9E%E6%BA%AF%E5%88%87%E8%AE%B0%E5%B0%86%E6%96%B0%E7%94%9F%E6%88%90%E7%9A%84curlist%E6%94%BE%E5%85%A5res%E6%97%B6%E8%A6%81%E5%88%9B%E5%BB%BA%E6%96%B0%E7%9A%84list%E5%8D%B3resaddnew-arraylistcurlist%E4%B8%8D%E7%84%B6%E5%B0%B1%E4%BC%9A%E8%A2%AB%E6%94%B9%E6%8E%89">回溯（切记：将新生成的curList放入res时，要创建新的list，即res.add(new ArrayList(curList))，不然就会被改掉）</a></li>
<li><a href="#%E5%B9%B6%E6%9F%A5%E9%9B%86%E5%B9%B6%E6%9F%A5%E9%9B%86%E8%83%BD%E5%81%9A%E7%9A%84%E9%A2%98%E4%B9%9F%E5%8F%AF%E4%BB%A5%E7%94%A8dfs%E6%88%96bfs%E5%81%9A%E6%88%91%E9%80%89%E6%8B%A9%E7%94%A8dfs%E6%9D%A5%E5%81%9A">并查集（并查集能做的题，也可以用DFS或BFS做，我选择用DFS来做）</a></li>
</ul>
</li>
<li><a href="#bfs%E5%A6%82%E6%9E%9C%E5%9B%BE%E6%98%AF%E7%9F%A9%E9%98%B5%E5%BE%80%E4%B8%8A%E4%B8%8B%E5%B7%A6%E5%8F%B34%E4%B8%AA%E6%96%B9%E5%90%91%E7%A7%BB%E5%8A%A8%E6%9C%80%E5%A5%BD%E7%94%A8for%E5%BE%AA%E7%8E%AF%E5%AE%9E%E7%8E%B0%E8%80%8C%E4%B8%8D%E6%98%AF%E5%86%994%E6%AC%A1%E7%9B%B8%E4%BC%BC%E7%9A%84%E4%BB%A3%E7%A0%81">BFS（如果图是矩阵，往上下左右4个方向移动，最好用for循环实现，而不是写4次相似的代码）</a></li>
<li><a href="#%E6%8B%93%E6%89%91%E6%8E%92%E5%BA%8F">拓扑排序</a></li>
</ul>
</li>
<li><a href="#%E6%A0%88%E5%8D%95%E8%B0%83%E6%A0%88">!栈&amp;单调栈</a></li>
<li><a href="#%E9%98%9F%E5%88%97">队列</a></li>
<li><a href="#%E5%A0%86">堆</a></li>
<li><a href="#%E5%93%88%E5%B8%8C%E8%A1%A8">哈希表</a></li>
<li><a href="#%E6%A8%A1%E6%8B%9F%E6%9E%9A%E4%B8%BE">模拟/枚举</a></li>
<li><a href="#%E9%80%92%E5%BD%92">递归</a></li>
<li><a href="#%E6%8E%92%E5%BA%8F">排序</a></li>
<li><a href="#%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E7%BB%86%E8%8A%82%E5%BE%88%E9%9A%BE%E6%8A%8A%E6%8F%A1%E5%A4%9A%E7%BB%83">二分查找(细节很难把握，多练)</a></li>
<li><a href="#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%B4%AA%E5%BF%83%E8%83%BD%E7%94%A8%E8%B4%AA%E5%BF%83%E6%B1%82%E8%A7%A3%E7%9A%84%E4%B8%80%E5%AE%9A%E8%83%BD%E7%94%A8%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92">动态规划（贪心：能用贪心求解的一定能用动态规划）</a></li>
<li><a href="#%E8%B4%AA%E5%BF%83%E5%8C%BA%E9%97%B4%E9%9B%86%E5%90%88">贪心&amp;区间集合</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串</a></li>
<li><a href="#%E6%95%B0%E5%AD%A6">数学</a>
<ul>
<li><a href="#%E5%BF%AB%E9%80%9F%E5%B9%82">快速幂</a></li>
<li><a href="#%E4%BC%97%E6%95%B0%E6%91%A9%E5%B0%94%E6%8A%95%E7%A5%A8%E6%B3%95">众数（摩尔投票法）</a></li>
</ul>
</li>
<li><a href="#%E4%BD%8D%E8%BF%90%E7%AE%97">位运算</a></li>
</ul>`,r:{minutes:10.76,words:3228},y:"a",t:"经典题汇总（每个细分类限定10题以内）",i:"lightbulb"},["/posts/code/经典题汇总（每个细分类限定10题以内）.html","/posts/code/经典题汇总（每个细分类限定10题以内）.md",":md"]],["v-155b3612","/posts/cs/CSAPP.html",{d:172905854e4,e:`<h1> CSAPP</h1>
<p>英文版：CSAPP（Computer Systems: A Programmer's Perspective） <br>
中文版：深入理解计算机系统 <br>
讲义：<a href="https://fengmuzi2003.gitbook.io/csapp3e/" target="_blank" rel="noopener noreferrer">CSAPP重点解读</a> <br>
官网：<a href="http://csapp.cs.cmu.edu/" target="_blank" rel="noopener noreferrer">CS:APP3e</a> <br>
自学关心的地方：Student Site（有一些推荐的不错的书和工具，也有实验链接） <br>
 <br></p>`,r:{minutes:.42,words:127},y:"a",t:"CSAPP",i:"lightbulb"},[":md"]],["v-6985d781","/posts/cs/Netty.html",{d:172905854e4,e:`<h1> Netty</h1>
<h2> 同步/异步，阻塞非阻塞</h2>
<p>在等待数据阶段：发起网络调用后，在服务端没准备好数据的情况下。客户端阻塞，则为阻塞IO；网络调用立即返回，则为非阻塞IO <br></p>
<p>在数据传输阶段: 如果发起网络调用的线程还可以做其它事情则为异步，否则为同步 <br></p>
<h2> BIO</h2>
<p>下图为MySQL Connector-Java 的架构，为典型的BIO: <br></p>
<p> <br></p>
<p>如果把这个架构改成NIO的: <br>
 <br></p>
<p>为什么MySQL 不使用NIO的模式: <br></p>`,r:{minutes:12.36,words:3709},y:"a",t:"Netty",i:"lightbulb"},[":md"]],["v-7813ca44","/posts/cs/RPC.html",{d:172905854e4,e:`<h1> RPC</h1>
<p>有了解过dubbo吗，简单介绍下dubbo结构。 <br>
如何做服务隔离。简单介绍下hystrix。 <br>
如何设计个rpc框架。 <br></p>
<h1> Dubbo</h1>
<h2> 服务注册/发现</h2>
<p>Dubbo的服务注册与发现机制: <br>
 <br></p>
<p>4类角色: 消费者、提供者、注册中心、Monitor <br></p>
<h2> Registry原理</h2>
<p>以Dubbo最常用的Zookeeper来介绍 <br></p>
<p>zk里的存储: <br>
 <br>
每一个服务的存储的目录结构为/dubbo/{serviceName} ，   其中serviceName为Provider的{包名}.{类名} <br>
下面有4个子文件夹，分别存储: <br></p>`,r:{minutes:8.57,words:2571},y:"a",t:"RPC",i:"lightbulb"},[":md"]],["v-798c95fd","/posts/cs/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html",{d:172905854e4,e:`<h1> 操作系统</h1>
<ul>
<li><a href="#%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F">操作系统</a></li>
<li><a href="#%E5%BF%AB%E9%80%9F%E6%8E%8C%E6%8F%A1%E9%9D%A2%E8%AF%95">快速掌握面试</a>
<ul>
<li><a href="#1-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E5%92%8C%E7%A1%AC%E4%BB%B6%E4%B9%8B%E9%97%B4%E7%9A%84%E5%AA%92%E4%BB%8B-">1. 操作系统：应用程序和硬件之间的媒介 </a></li>
<li><a href="#2-%E5%B9%B6%E5%8F%91%E5%B9%B6%E8%A1%8C%E8%BF%9B%E7%A8%8B%E7%BA%BF%E7%A8%8B%E5%8D%8F%E7%A8%8B-">2. 并发&amp;并行，进程&amp;线程&amp;协程 </a></li>
<li><a href="#3-%E8%BF%9B%E7%A8%8B%E4%B8%8A%E4%B8%8B%E6%96%87%E5%88%87%E6%8D%A2%E7%BA%BF%E7%A8%8B%E4%B8%8A%E4%B8%8B%E6%96%87%E5%88%87%E6%8D%A2-">3. 进程上下文切换&amp;线程上下文切换 </a></li>
<li><a href="#4-%E7%94%A8%E6%88%B7%E6%80%81%E5%86%85%E6%A0%B8%E6%80%81%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8%E7%94%A8%E6%88%B7%E6%80%81%E9%80%9A%E8%BF%87%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8%E5%88%87%E6%8D%A2%E5%88%B0%E5%86%85%E6%A0%B8%E6%80%81-">4. 用户态&amp;内核态，系统调用：用户态通过系统调用切换到内核态 </a></li>
<li><a href="#5-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%9A%84%E8%BF%9B%E7%A8%8B%E7%BA%BF%E7%A8%8B%E6%9C%89%E5%93%AA%E4%BA%9B%E7%8A%B6%E6%80%81notejava%E6%98%AF6%E7%A7%8D%E7%8A%B6%E6%80%81%E5%88%9B%E5%BB%BA%E5%B0%B1%E7%BB%AA%E8%BF%90%E8%A1%8C%E9%98%BB%E5%A1%9E%E7%BB%93%E6%9D%9F-">5. 操作系统的进程/线程有哪些状态（Note:Java是6种状态）：创建，就绪，运行，阻塞，结束 </a></li>
<li><a href="#6-%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A17%E7%A7%8D-">6. 进程间通信（7种） </a></li>
<li><a href="#7-%E8%BF%9B%E7%A8%8B%E7%9A%84%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95-">7. 进程的调度算法 </a></li>
<li><a href="#8-%E7%BA%BF%E7%A8%8B%E9%97%B4%E5%90%8C%E6%AD%A5-">8. 线程间同步 </a></li>
<li><a href="#9-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86-">9. 操作系统的内存管理 </a></li>
<li><a href="#10-%E5%B8%B8%E8%A7%81%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E6%9C%BA%E5%88%B6-">10. 常见内存管理机制 </a></li>
<li><a href="#11-%E9%A1%B5%E5%BC%8F%E7%AE%A1%E7%90%86%E9%87%8D%E8%A6%81%E6%A6%82%E5%BF%B5%E5%BF%AB%E8%A1%A8%E5%A4%9A%E7%BA%A7%E9%A1%B5%E8%A1%A8-">11. 页式管理重要概念：快表&amp;多级页表 </a></li>
<li><a href="#12-%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98%E8%99%9A%E6%8B%9F%E5%9C%B0%E5%9D%80%E7%89%A9%E7%90%86%E5%86%85%E5%AD%98%E7%89%A9%E7%90%86%E5%9C%B0%E5%9D%80-">12. 虚拟内存（虚拟地址）&amp;物理内存（物理地址） </a></li>
<li><a href="#13-%E4%BA%A4%E6%8D%A2%E7%A9%BA%E9%97%B4%E7%A3%81%E7%9B%98%E4%B8%8A%E7%94%A8%E4%BA%8E%E6%89%A9%E5%B1%95%E5%86%85%E5%AD%98%E7%9A%84%E4%B8%80%E5%9D%97%E7%A9%BA%E9%97%B4%E5%B0%B1%E5%8F%AB%E4%BA%A4%E6%8D%A2%E7%A9%BA%E9%97%B4-">13. 交换空间：磁盘上用于扩展内存的一块空间，就叫交换空间。 </a></li>
<li><a href="#14-%E9%A1%B5%E9%9D%A2%E7%BD%AE%E6%8D%A2%E7%AE%97%E6%B3%95-">14. 页面置换算法 </a></li>
</ul>
</li>
<li><a href="#%E5%8C%BA%E5%88%86io%E5%AF%86%E9%9B%86%E5%86%85%E5%AD%98%E5%AF%86%E9%9B%86%E5%92%8C%E8%AE%A1%E7%AE%97%E5%AF%86%E9%9B%86">区分IO密集、内存密集和计算密集</a></li>
<li><a href="#java-%E4%B8%AD-io-%E6%B5%81%E5%88%86%E4%B8%BA%E5%87%A0%E7%A7%8D">Java 中 IO 流分为几种?</a>
<ul>
<li><a href="#%E6%97%A2%E7%84%B6%E6%9C%89%E4%BA%86%E5%AD%97%E8%8A%82%E6%B5%81%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%98%E8%A6%81%E6%9C%89%E5%AD%97%E7%AC%A6%E6%B5%81">既然有了字节流,为什么还要有字符流?</a></li>
</ul>
</li>
<li><a href="#bionioaio">BIO、NIO、AIO</a>
<ul>
<li><a href="#io%E6%B1%87%E6%80%BB%E8%A1%A8%E6%A6%82%E8%A7%88">IO汇总表概览</a></li>
<li><a href="#%E4%BA%94%E5%A4%A7io%E6%A8%A1%E5%9E%8B%E7%8B%AD%E4%B9%89nio">五大IO模型（狭义NIO）</a></li>
<li><a href="#bio-%E9%98%BB%E5%A1%9Eio-blocking-io">BIO (阻塞I/O, blocking I/O)</a></li>
<li><a href="#nioio%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8-%E9%9D%9E%E9%98%BB%E5%A1%9Eio-noblocking-io">NIO/IO多路复用 (非阻塞I/O, noblocking I/O)</a>
<ul>
<li><a href="#bio%E4%B8%8Enio%E7%9A%84%E5%8C%BA%E5%88%AB">BIO与NIO的区别</a></li>
<li><a href="#nio%E4%B8%89%E5%A4%A7%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6selector%E9%80%89%E6%8B%A9%E5%99%A8channel%E9%80%9A%E9%81%93buffer%E7%BC%93%E5%86%B2%E5%99%A8">NIO三大核心组件：Selector（选择器）、Channel（通道）、Buffer（缓冲器）</a></li>
<li><a href="#io%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E4%B8%89%E7%A7%8D%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6">I/O多路复用的三种实现机制</a>
<ul>
<li><a href="#select%E4%B8%8Epoll">select与poll</a></li>
<li><a href="#epoll">epoll</a></li>
<li><a href="#%E6%AF%94%E8%BE%83">比较</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#aio-%E5%BC%82%E6%AD%A5ioasynchronous-io">AIO (异步I/O,Asynchronous I/O)</a></li>
</ul>
</li>
</ul>`,r:{minutes:16.52,words:4955},y:"a",t:"操作系统",i:"lightbulb"},["/posts/cs/操作系统.html","/posts/cs/操作系统.md",":md"]],["v-4e69f864","/posts/cs/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E8%83%BD.html",{d:172905854e4,e:`<h1> 浏览器技能</h1>
<h1> 快捷键</h1>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>切换下一个</td>
<td>Ctrl+Tab</td>
</tr>
<tr>
<td>关闭当前网页</td>
<td>Ctrl+W</td>
</tr>
<tr>
<td>恢复被关掉的网页</td>
<td>Ctrl+Shift+T</td>
</tr>
<tr>
<td>打开历史记录</td>
<td>Ctrl+H</td>
</tr>
</tbody>
</table>
<h1> 选择</h1>`,r:{minutes:3.3,words:990},y:"a",t:"浏览器技能",i:"lightbulb"},["/posts/cs/浏览器技能.html","/posts/cs/浏览器技能.md",":md"]],["v-a0eafd0a","/posts/cs/%E7%BD%91%E7%BB%9C.html",{d:172905854e4,e:`<h1> 网络</h1>
<ul>
<li><a href="#%E7%BD%91%E7%BB%9C">网络</a></li>
<li><a href="#%E5%BF%AB%E9%80%9F%E6%8E%8C%E6%8F%A1%E9%9D%A2%E8%AF%95">快速掌握面试</a>
<ul>
<li><a href="#1-%E7%BD%91%E7%BB%9C%E5%88%86%E5%B1%82osi%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8Btcpip%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B%E4%BA%94%E5%B1%82%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B-">1. 网络分层：OSI参考模型、TCP/IP参考模型、五层参考模型 </a></li>
<li><a href="#2-tcp%E4%B8%8Eudp%E5%8C%BA%E5%88%AB-">2. TCP与UDP区别 </a></li>
<li><a href="#3-tcp%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B-">3. TCP三次握手和四次挥手 </a></li>
<li><a href="#4-%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5url%E5%88%B0%E9%A1%B5%E9%9D%A2%E6%98%BE%E7%A4%BA%E7%9A%84%E8%BF%87%E7%A8%8B%E6%89%93%E5%BC%80%E7%BD%91%E9%A1%B5%E7%9A%84%E6%95%B4%E4%B8%AA%E8%BF%87%E7%A8%8B%E4%BC%9A%E4%BD%BF%E7%94%A8%E5%93%AA%E4%BA%9B%E5%8D%8F%E8%AE%AE-">4. 浏览器输入url到页面显示的过程（打开网页的整个过程会使用哪些协议） </a></li>
<li><a href="#5-%E7%8A%B6%E6%80%81%E7%A0%81-">5. 状态码 </a></li>
<li><a href="#6-http%E9%95%BF%E8%BF%9E%E6%8E%A5%E7%9F%AD%E8%BF%9E%E6%8E%A5-">6. HTTP长连接&amp;短连接 </a></li>
<li><a href="#7-http10-11-20-30%E7%9A%84%E5%8C%BA%E5%88%AB-">7. HTTP/1.0, 1.1, 2.0, 3.0的区别 </a></li>
<li><a href="#8-httphttps-">8. HTTP&amp;HTTPS </a></li>
<li><a href="#9-http%E4%B8%8Erpc%E7%9A%84%E5%8C%BA%E5%88%AB-">9. HTTP与RPC的区别 </a></li>
<li><a href="#10-cookiesession-">10. Cookie&amp;Session </a></li>
<li><a href="#11--uri%E5%92%8Curl%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88--">11.  URI和URL的区别是什么?  </a></li>
<li><a href="#12--getpost-">12.  GET&amp;POST </a></li>
<li><a href="#13--ipmac-">13.  IP&amp;MAC </a></li>
</ul>
</li>
<li><a href="#%E4%B8%80%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84">一、网络体系结构</a>
<ul>
<li><a href="#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5">基本概念</a></li>
<li><a href="#%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84%E5%88%86%E5%B1%82%E7%BB%93%E6%9E%84">计算机网络体系结构——分层结构</a></li>
<li><a href="#%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87">性能指标</a>
<ul>
<li><a href="#%E9%80%9F%E7%8E%87%E5%B8%A6%E5%AE%BD%E5%90%9E%E5%90%90%E9%87%8F">速率、带宽、吞吐量</a></li>
<li><a href="#%E6%97%B6%E5%BB%B6%E6%97%B6%E5%BB%B6%E5%B8%A6%E5%AE%BD%E7%A7%AF%E5%BE%80%E8%BF%94%E6%97%B6%E9%97%B4rtt%E5%88%A9%E7%94%A8%E7%8E%87">时延、时延带宽积、往返时间RTT、利用率</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E4%BA%8C%E4%BC%A0%E8%BE%93%E4%BB%8B%E8%B4%A8%E7%AC%AC0%E5%B1%82">二、传输介质（第0层）</a>
<ul>
<li><a href="#%E5%AF%BC%E5%90%91%E6%80%A7%E4%BC%A0%E8%BE%93%E4%BB%8B%E8%B4%A8">导向性传输介质</a>
<ul>
<li><a href="#%E5%8F%8C%E7%BB%9E%E7%BA%BF">双绞线</a></li>
<li><a href="#%E5%90%8C%E8%BD%B4%E7%94%B5%E7%BC%86">同轴电缆</a></li>
<li><a href="#%E5%85%89%E7%BA%A4">光纤</a></li>
</ul>
</li>
<li><a href="#%E9%9D%9E%E5%AF%BC%E5%90%91%E6%80%A7%E4%BC%A0%E8%BE%93%E4%BB%8B%E8%B4%A8">非导向性传输介质</a></li>
</ul>
</li>
<li><a href="#%E4%B8%89%E7%89%A9%E7%90%86%E5%B1%82%E7%AC%AC%E4%B8%80%E5%B1%82">三、物理层（第一层）</a>
<ul>
<li><a href="#%E7%89%A9%E7%90%86%E5%B1%82%E8%AE%BE%E5%A4%87">物理层设备</a>
<ul>
<li><a href="#%E4%B8%AD%E7%BB%A7%E5%99%A8">中继器</a></li>
<li><a href="#%E9%9B%86%E7%BA%BF%E5%99%A8">集线器</a></li>
</ul>
</li>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86">数据通信基础知识</a>
<ul>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E6%A8%A1%E5%9E%8B">数据通信模型</a></li>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E7%9B%B8%E5%85%B3%E6%9C%AF%E8%AF%AD">数据通信相关术语</a></li>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E6%96%B9%E5%BC%8F%E5%88%86%E7%B1%BB">数据通信方式分类</a>
<ul>
<li><a href="#%E5%8D%95%E5%B7%A5%E5%8D%8A%E5%8F%8C%E5%B7%A5%E5%85%A8%E5%8F%8C%E5%B7%A5%E9%80%9A%E4%BF%A1">单工、半双工、全双工通信</a></li>
<li><a href="#%E4%B8%B2%E8%A1%8C%E5%B9%B6%E8%A1%8C%E9%80%9A%E4%BF%A1">串行、并行通信</a></li>
<li><a href="#%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5%E9%80%9A%E4%BF%A1">同步、异步通信</a></li>
</ul>
</li>
<li><a href="#%E6%95%B0%E6%8D%AE%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">数据交换方式</a>
<ul>
<li><a href="#%E7%94%B5%E8%B7%AF%E4%BA%A4%E6%8D%A2%E5%BB%BA%E7%AB%8B%E7%89%A9%E7%90%86%E8%BF%9E%E6%8E%A5%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">电路交换（建立物理连接交换方式）</a></li>
<li><a href="#%E6%8A%A5%E6%96%87%E4%BA%A4%E6%8D%A2%E5%AD%98%E5%82%A8%E8%BD%AC%E5%8F%91%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">报文交换（存储转发交换方式）</a></li>
<li><a href="#%E5%88%86%E7%BB%84%E4%BA%A4%E6%8D%A2%E5%AD%98%E5%82%A8%E8%BD%AC%E5%8F%91%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">分组交换（存储转发交换方式）</a>
<ul>
<li><a href="#%E6%95%B0%E6%8D%AE%E6%8A%A5%E6%96%B9%E5%BC%8F%E5%AD%98%E5%82%A8%E8%BD%AC%E5%8F%91%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">数据报方式（存储转发交换方式）</a></li>
<li><a href="#%E8%99%9A%E7%94%B5%E8%B7%AF%E6%96%B9%E5%BC%8F%E5%BB%BA%E7%AB%8B%E9%80%BB%E8%BE%91%E8%BF%9E%E6%8E%A5%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">虚电路方式（建立逻辑连接交换方式）</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E7%A0%81%E5%85%83%E9%80%9F%E7%8E%87%E6%B3%A2%E7%89%B9%E5%B8%A6%E5%AE%BD">码元、速率、波特、带宽</a></li>
<li><a href="#%E5%A5%88%E6%B0%8F%E5%87%86%E5%88%99%E9%A6%99%E5%86%9C%E5%AE%9A%E7%90%86">奈氏准则&amp;香农定理</a></li>
<li><a href="#%E7%BC%96%E7%A0%81%E8%B0%83%E5%88%B6">编码&amp;调制</a>
<ul>
<li><a href="#%E7%BC%96%E7%A0%81%E8%BD%AC%E4%B8%BA%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7">编码（转为数字信号）</a>
<ul>
<li><a href="#%E6%95%B0%E5%AD%97%E6%95%B0%E6%8D%AE%E7%BC%96%E7%A0%81%E4%B8%BA%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7">数字数据编码为数字信号</a></li>
<li><a href="#%E6%A8%A1%E6%8B%9F%E6%95%B0%E6%8D%AE%E7%BC%96%E7%A0%81%E4%B8%BA%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7">模拟数据编码为数字信号</a></li>
</ul>
</li>
<li><a href="#%E8%B0%83%E5%88%B6%E8%BD%AC%E4%B8%BA%E6%A8%A1%E6%8B%9F%E4%BF%A1%E5%8F%B7">调制（转为模拟信号）</a>
<ul>
<li><a href="#%E6%95%B0%E5%AD%97%E6%95%B0%E6%8D%AE%E8%B0%83%E5%88%B6%E4%B8%BA%E6%A8%A1%E6%8B%9F%E4%BF%A1%E5%8F%B7">数字数据调制为模拟信号</a></li>
<li><a href="#%E6%A8%A1%E6%8B%9F%E6%95%B0%E6%8D%AE%E8%B0%83%E5%88%B6%E4%B8%BA%E6%A8%A1%E6%8B%9F%E4%BF%A1%E5%8F%B7">模拟数据调制为模拟信号</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E5%9B%9B%E6%95%B0%E6%8D%AE%E9%93%BE%E8%B7%AF%E5%B1%82%E7%AC%AC%E4%BA%8C%E5%B1%82">四、数据链路层（第二层）</a>
<ul>
<li><a href="#%E9%93%BE%E8%B7%AF%E5%B1%82%E8%AE%BE%E5%A4%87">链路层设备</a>
<ul>
<li><a href="#%E7%BD%91%E6%A1%A5">网桥</a></li>
<li><a href="#%E4%BA%A4%E6%8D%A2%E6%9C%BA">交换机</a></li>
</ul>
</li>
<li><a href="#%E9%93%BE%E8%B7%AF%E5%B1%82%E7%9A%84%E5%8A%9F%E8%83%BD">链路层的功能</a>
<ul>
<li><a href="#%E5%B0%81%E8%A3%85%E6%88%90%E5%B8%A7%E9%80%8F%E6%98%8E%E4%BC%A0%E8%BE%93">封装成帧&amp;透明传输</a></li>
<li><a href="#%E5%B7%AE%E9%94%99%E6%8E%A7%E5%88%B6%E6%A3%80%E9%94%99%E7%BC%96%E7%A0%81">差错控制（检错编码）</a></li>
<li><a href="#%E6%B5%81%E9%87%8F%E6%8E%A7%E5%88%B6%E5%92%8C%E5%8F%AF%E9%9D%A0%E4%BC%A0%E8%BE%93%E6%9C%BA%E5%88%B6">流量控制和可靠传输机制</a></li>
</ul>
</li>
<li><a href="#%E9%93%BE%E8%B7%AF%E5%B1%82%E7%9A%84%E4%B8%A4%E7%A7%8D%E4%BF%A1%E9%81%93%E4%BB%8B%E8%B4%A8%E8%AE%BF%E9%97%AE%E6%8E%A7%E5%88%B6">链路层的两种信道&amp;介质访问控制</a></li>
<li><a href="#%E5%B1%80%E5%9F%9F%E7%BD%91">局域网</a>
<ul>
<li><a href="#%E5%B1%80%E5%9F%9F%E7%BD%91%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%E5%92%8C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84">局域网基本概念和体系结构</a></li>
<li><a href="#%E5%B1%80%E5%9F%9F%E7%BD%91%E7%9A%84%E5%88%86%E7%B1%BB">局域网的分类</a>
<ul>
<li><a href="#%E4%BB%A5%E5%A4%AA%E7%BD%918023">以太网802.3</a></li>
<li><a href="#%E6%97%A0%E7%BA%BF%E5%B1%80%E5%9F%9F%E7%BD%9180211">无线局域网802.11</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E5%B9%BF%E5%9F%9F%E7%BD%91">广域网</a>
<ul>
<li><a href="#%E5%B9%BF%E5%9F%9F%E7%BD%91%E4%BD%BF%E7%94%A8%E7%9A%84%E9%93%BE%E8%B7%AF%E5%B1%82%E5%8D%8F%E8%AE%AE">广域网使用的链路层协议</a>
<ul>
<li><a href="#ppp%E5%8D%8F%E8%AE%AE">PPP协议</a></li>
<li><a href="#hdlc%E5%8D%8F%E8%AE%AE">HDLC协议</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E4%BA%94%E7%BD%91%E7%BB%9C%E5%B1%82%E7%AC%AC%E4%B8%89%E5%B1%82">五、网络层（第三层）</a>
<ul>
<li><a href="#%E7%BD%91%E7%BB%9C%E5%B1%82%E8%AE%BE%E5%A4%87%E8%B7%AF%E7%94%B1%E5%99%A8">网络层设备——路由器</a></li>
<li><a href="#%E7%BD%91%E7%BB%9C%E5%B1%82%E7%9A%84%E5%8A%9F%E8%83%BD">网络层的功能</a>
<ul>
<li><a href="#%E8%B7%AF%E7%94%B1%E9%80%89%E6%8B%A9%E4%B8%8E%E5%88%86%E7%BB%84%E8%BD%AC%E5%8F%91">路由选择与分组转发</a></li>
<li><a href="#%E5%BC%82%E6%9E%84%E7%BD%91%E7%BB%9C%E4%BA%92%E8%81%94">异构网络互联</a></li>
<li><a href="#%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6">拥塞控制</a></li>
</ul>
</li>
<li><a href="#ipv4%E5%9C%B0%E5%9D%80">IPv4地址</a></li>
<li><a href="#ip%E6%95%B0%E6%8D%AE%E6%8A%A5%E6%A0%BC%E5%BC%8F">IP数据报格式</a></li>
<li><a href="#ip%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%88%86%E7%89%87">IP数据报分片</a></li>
<li><a href="#%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E8%BD%AC%E6%8D%A2nat">网络地址转换（NAT）</a></li>
<li><a href="#%E5%AD%90%E7%BD%91%E5%88%92%E5%88%86%E5%AD%90%E7%BD%91%E6%8E%A9%E7%A0%81">子网划分&amp;子网掩码</a></li>
<li><a href="#%E6%9E%84%E6%88%90%E8%B6%85%E7%BD%91%E6%97%A0%E5%88%86%E7%B1%BB%E7%BC%96%E5%9D%80%E6%96%B9%E6%B3%95cidr">构成超网（无分类编址方法CIDR）</a></li>
<li><a href="#ipv6">IPv6</a></li>
<li><a href="#%E7%A7%BB%E5%8A%A8ip">移动IP</a></li>
<li><a href="#ip%E7%BB%84%E6%92%AD">IP组播</a></li>
<li><a href="#%E5%8D%8F%E8%AE%AE">协议</a>
<ul>
<li><a href="#arp%E5%8D%8F%E8%AE%AE">ARP协议</a></li>
<li><a href="#dhcp%E5%8D%8F%E8%AE%AE">DHCP协议</a></li>
<li><a href="#icmp%E5%8D%8F%E8%AE%AE">ICMP协议</a></li>
<li><a href="#%E4%B8%89%E7%A7%8D%E8%B7%AF%E7%94%B1%E5%8D%8F%E8%AE%AE%E8%B7%AF%E7%94%B1%E7%AE%97%E6%B3%95">三种路由协议&amp;路由算法</a>
<ul>
<li><a href="#ospf%E5%8D%8F%E8%AE%AE%E5%8F%8A%E9%93%BE%E8%B7%AF%E7%8A%B6%E6%80%81%E7%AE%97%E6%B3%95">OSPF协议及链路状态算法</a></li>
<li><a href="#rip%E5%8D%8F%E8%AE%AE%E5%8F%8A%E8%B7%9D%E7%A6%BB%E5%90%91%E9%87%8F%E7%AE%97%E6%B3%95">RIP协议及距离向量算法</a></li>
<li><a href="#bgp%E5%8D%8F%E8%AE%AE">BGP协议</a></li>
</ul>
</li>
<li><a href="#igmp%E5%8D%8F%E8%AE%AE%E4%B8%8E%E7%BB%84%E6%92%AD%E8%B7%AF%E7%94%B1%E9%80%89%E6%8B%A9%E5%8D%8F%E8%AE%AE">IGMP协议与组播路由选择协议</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E5%85%AD%E4%BC%A0%E8%BE%93%E5%B1%82%E7%AC%AC%E5%9B%9B%E5%B1%82">六、传输层（第四层）</a>
<ul>
<li><a href="#tcp%E5%8D%8F%E8%AE%AE">TCP协议</a></li>
<li><a href="#udp%E5%8D%8F%E8%AE%AE">UDP协议</a></li>
</ul>
</li>
<li><a href="#%E4%B8%83%E5%BA%94%E7%94%A8%E5%B1%82%E7%AC%AC%E4%BA%94%E5%B1%82">七、应用层（第五层）</a>
<ul>
<li><a href="#%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8%E6%A8%A1%E5%9E%8B">网络应用模型</a>
<ul>
<li><a href="#cs">C/S</a></li>
<li><a href="#p2p">P2P</a></li>
</ul>
</li>
<li><a href="#%E4%B8%87%E7%BB%B4%E7%BD%91%E5%92%8Chttp%E5%8D%8F%E8%AE%AE">万维网和HTTP协议</a></li>
<li><a href="#%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E7%B3%BB%E7%BB%9Fdns">域名解析系统DNS</a></li>
<li><a href="#%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AEftp">文件传输协议FTP</a></li>
<li><a href="#%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6">电子邮件</a></li>
</ul>
</li>
</ul>`,r:{minutes:23.37,words:7010},y:"a",t:"网络",i:"lightbulb"},["/posts/cs/网络.html","/posts/cs/网络.md",":md"]],["v-be73916a","/posts/cs/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8A%80%E8%83%BD.html",{d:172905854e4,e:`<h1> 计算机技能</h1>
<h1> 常识</h1>
<p>1、每充满电后拔掉电源并不会保护电池，插上电源不会用电池，拔掉会用电池，反而对电池不好。能充电就一直充电，充着电用，才能发挥笔记本更高的性能</p>
<p>2、金山打字通练习打字 Note:有双拼，一个格子两个字母（做到不看键盘）</p>
<p>3、尽量用键盘快捷键，次用触摸板，最好不用鼠标（做到不用鼠标和触摸板）</p>
<p>4、浏览器的插件，快捷键，设置等（做到精通）</p>
<h1> 技巧</h1>
<p>1、C盘文件夹迁移</p>
<p>C盘容易爆满，把除系统文件以外的其他文件和文件夹放在其他盘，不要放C盘</p>
<p>把特殊文件夹（视频，图片，文档，下载等）从C盘移到其他盘：在其他盘新建同名文件夹，将C盘的特殊文件夹（右键-&gt;属性-&gt;位置）更换为其他盘的空文件夹位置</p>`,r:{minutes:3.45,words:1035},y:"a",t:"计算机技能",i:"lightbulb"},["/posts/cs/计算机技能.html","/posts/cs/计算机技能.md",":md"]],["v-1df908df","/posts/docker/Docker.html",{d:172905854e4,e:`<h1> Docker</h1>
<h1> 运维工作进化论</h1>
<h2> 小试牛刀</h2>
<p> <br>
 <br></p>
<h2> 初露锋芒</h2>
<p> <br>
 <br>
 <br></p>
<h2> 小有名气</h2>
<p> <br>
 <br>
 <br></p>
<h2> 名动一方</h2>
<p> <br>
 <br>
 <br></p>
<h2> 一派宗师</h2>
<p> <br>
 <br></p>
<h2> 千古留名</h2>
<p> <br>
 <br></p>
<h1> 容器</h1>
<h2> 什么是容器</h2>
<p> <br>
 <br>
 <br>
 <br></p>`,r:{minutes:22.53,words:6758},y:"a",t:"Docker",i:"lightbulb"},[":md"]],["v-b93f1926","/posts/docker/K8S.html",{d:172905854e4,e:`<h1> K8S</h1>
<p> <br>
 <br>
 <br></p>
<p>changeset  优点：1.分发  2.复用 <br></p>
`,r:{minutes:.12,words:37},y:"a",t:"K8S",i:"lightbulb"},[":md"]],["v-be2c9ec8","/posts/frontend/AntDesign.html",{d:172905854e4,e:`<h1> AntDesign</h1>
<p><a href="https://preview.pro.ant.design/dashboard/analysis" target="_blank" rel="noopener noreferrer">Ant Design Pro Preview</a> <br>
<a href="https://pro.ant.design/" target="_blank" rel="noopener noreferrer">Ant Design Pro</a> <br>
<a href="https://procomponents.ant.design/" target="_blank" rel="noopener noreferrer">ProComponents</a> <br>
<a href="https://www.eggjs.org/" target="_blank" rel="noopener noreferrer">EggJS-企业级Node.js开发框架</a> <br>
<a href="https://github.com/websemantics/awesome-ant-design" target="_blank" rel="noopener noreferrer">https://github.com/websemantics/awesome-ant-design</a> <br></p>`,r:{minutes:.14,words:41},y:"a",t:"AntDesign",i:"lightbulb"},[":md"]],["v-4d328dde","/posts/frontend/CSS.html",{d:172905854e4,e:`<h1> CSS</h1>
<h1> Resolution</h1>
<p>内容超出了页面，看不到底部的内容了，如何加上滚轴？ <br>
overflow-y: auto !important; <br></p>
<h1> Knowledge</h1>
<p>1、引入样式表（3种方式） <br></p>
<ul>
<li>内联样式- 在HTML元素中使用"style"<strong>属性</strong> <br></li>
<li>内部样式表 -在HTML文档头部 &lt;head&gt; 区域使用&lt;style&gt;<strong>元素</strong> 来包含CSS <br></li>
<li>外部样式表 - 使用外部 CSS<strong>文件</strong>，在HTML文档头部 &lt;head&gt; 区域使用&lt;link&gt;引入 <br></li>
</ul>`,r:{minutes:1.31,words:394},y:"a",t:"CSS",i:"lightbulb"},[":md"]],["v-2206dc02","/posts/frontend/Expo.html",{d:172905854e4,e:`<h1> Expo</h1>
<p>expo <br>
<a href="https://expo.dev/tools" target="_blank" rel="noopener noreferrer">https://expo.dev/tools</a> <br>
expo snack
<a href="https://snack.expo.dev/" target="_blank" rel="noopener noreferrer">https://snack.expo.dev/</a> <br>
 <br></p>
<p><a href="https://www.newline.co/30-days-of-react-native" target="_blank" rel="noopener noreferrer">https://www.newline.co/30-days-of-react-native</a> <br>
这里展示了用expo的教学 <br></p>`,r:{minutes:.15,words:45},y:"a",t:"Expo",i:"lightbulb"},[":md"]],["v-5499a5df","/posts/frontend/Frontend.html",{d:172905854e4,e:`<h1> Frontend</h1>
<p><a href="https://www.yuque.com/fe9/basic" target="_blank" rel="noopener noreferrer">前端九部——入门者手册</a> <br>
<a href="https://www.yuque.com/fe9/select" target="_blank" rel="noopener noreferrer">前端九部——精选集</a> <br>
<a href="https://github.com/frontend9" target="_blank" rel="noopener noreferrer">前端九部github</a> <br>
<a href="https://github.com/zenany/zenany.github.io/blob/master/_posts/about_frontend.md" target="_blank" rel="noopener noreferrer">前端开发漫游指南</a> <br>
<a href="https://www.yuque.com/mind-palace" target="_blank" rel="noopener noreferrer">大猫智库</a> <br>
<a href="https://segmentfault.com/a/1190000007326671" target="_blank" rel="noopener noreferrer">前端跨域整理</a> <br>
<a href="https://segmentfault.com/a/1190000006672214" target="_blank" rel="noopener noreferrer">WEB前端安全那些事儿</a> <br>
<a href="https://github.com/xiaosansiji/cookbook-of-webdev/blob/master/performance-optimization/index.md" target="_blank" rel="noopener noreferrer">Web站点性能优化</a> <br>
<a href="http://www.ruanyifeng.com/blog/2016/08/http.html" target="_blank" rel="noopener noreferrer">阮一峰HTTP协议入门</a> <br>
<a href="https://blog.csdn.net/nanjingshida/article/details/72775687" target="_blank" rel="noopener noreferrer">chrome调试技巧</a> <br>
脚手架：<a href="https://github.com/sorrycc/roadhog" target="_blank" rel="noopener noreferrer">https://github.com/sorrycc/roadhog</a> <br>
roadmap	<a href="https://github.com/kamranahmedse/developer-roadmap" target="_blank" rel="noopener noreferrer">https://github.com/kamranahmedse/developer-roadmap</a> <br>
HTML+CSS+JavaScript ES6+Typescript+Less+React+Nodejs+Npm+Webpack <br>
路线图创建	<a href="https://balsamiq.com/wireframes/desktop/" target="_blank" rel="noopener noreferrer">https://balsamiq.com/wireframes/desktop/</a> <br></p>`,r:{minutes:6.51,words:1952},y:"a",t:"Frontend",i:"lightbulb"},[":md"]],["v-ce284ff4","/posts/frontend/HTML.html",{d:172905854e4,e:`<h1> HTML</h1>
<p>超文本标记语言（英语：HyperText Markup Language，简称：HTML） <br>
<a href="https://www.runoob.com/tags/ref-byfunc.html" target="_blank" rel="noopener noreferrer">HTML参考手册-菜鸟教程</a> <br>
<a href="https://www.runoob.com/html/html-tutorial.html" target="_blank" rel="noopener noreferrer">HTML菜鸟教程</a> <br>
使用技巧 <br>
1、查看网页源代码：鼠标右键，选择“查看网页源代码” <br>
<em>2、VS Code 和 Sublime Text 还可以配合 Emmet 插件来提高编码速度。</em> <br>
<em>Emmet 官网：</em><a href="http://emmet.io/" target="_blank" rel="noopener noreferrer">http://emmet.io/</a> <br></p>`,r:{minutes:3.75,words:1126},y:"a",t:"HTML",i:"lightbulb"},[":md"]],["v-106d4d44","/posts/frontend/JavaScript.html",{d:172905854e4,e:`<h1> JavaScript</h1>
<p>github <br>
<a href="https://github.com/Asabeneh/30-Days-Of-JavaScript" target="_blank" rel="noopener noreferrer">https://github.com/Asabeneh/30-Days-Of-JavaScript</a> <br>
<a href="https://github.com/biaochenxuying/blog" target="_blank" rel="noopener noreferrer">https://github.com/biaochenxuying/blog</a> <br>
<a href="https://github.com/course-dasheng/fe-algorithm" target="_blank" rel="noopener noreferrer">https://github.com/course-dasheng/fe-algorithm</a> <br></p>`,r:{minutes:2.99,words:898},y:"a",t:"JavaScript",i:"lightbulb"},[":md"]],["v-5d634456","/posts/frontend/Practice.html",{d:172905854e4,e:`<h1> 简书实践</h1>
<h1> 课程导学</h1>
<p><a href="https://coding.imooc.com/class/229.html#Anchor" target="_blank" rel="noopener noreferrer">https://coding.imooc.com/class/229.html#Anchor</a> <br></p>
<h2> 课程内容</h2>
<p> <br></p>
<h2> 项目</h2>
<p> <br></p>
<h2> 技术点</h2>
<p> <br></p>
<h2> 学习前提</h2>
<p> <br></p>`,r:{minutes:30.49,words:9146},y:"a",t:"简书实践",i:"lightbulb"},[":md"]],["v-3a7c55e2","/posts/frontend/React.html",{d:172905854e4,e:`<h1> React</h1>
<p>学习资源 <br>
官方文档	<a href="https://zh-hans.reactjs.org/" target="_blank" rel="noopener noreferrer">https://zh-hans.reactjs.org/</a> <br>
菜鸟教程	<a href="https://www.runoob.com/react/react-tutorial.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/react/react-tutorial.html</a> <br>
项目实战：<a href="https://coding.imooc.com/class/229.html#Anchor" target="_blank" rel="noopener noreferrer">https://coding.imooc.com/class/229.html#Anchor</a> <br></p>`,r:{minutes:1.45,words:435},y:"a",t:"React",i:"lightbulb"},[":md"]],["v-2b106454","/posts/frontend/npm.html",{d:172905854e4,e:`<h1> NPM</h1>
<h1> <a href="https://cloud.tencent.com/developer/article/1372949" target="_blank" rel="noopener noreferrer">npm使用国内镜像加速</a></h1>
<p> <br>
npm install有依赖问题，可以尝试 <br></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --legacy-peer-deps &lt;br/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.69,words:1407},y:"a",t:"NPM",i:"lightbulb"},[":md"]],["v-b4e3bf38","/posts/java/Java8%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html",{d:172905854e4,e:`<h1> Java8学习笔记</h1>
<ul>
<li><a href="#java8%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0">Java8学习笔记</a></li>
<li><a href="#%E4%B8%80%E8%A1%8C%E4%B8%BA%E5%8F%82%E6%95%B0%E5%8C%96">一、行为参数化</a></li>
<li><a href="#%E4%BA%8Clambda%E8%A1%A8%E8%BE%BE%E5%BC%8F">二、Lambda表达式</a></li>
<li><a href="#%E4%B8%89%E5%87%BD%E6%95%B0%E5%BC%8F%E6%8E%A5%E5%8F%A3">三、函数式接口</a></li>
<li><a href="#%E5%9B%9B%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8">四、方法引用</a></li>
<li><a href="#%E4%BA%94stream-api">五、Stream API</a></li>
<li><a href="#%E5%85%ADoptional%E7%B1%BB">六、Optional类</a></li>
<li><a href="#%E4%B8%83%E4%B8%BE%E4%BE%8B">七、举例</a></li>
<li><a href="#50jdk18-%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7-">50.JDK1.8 都有哪些新特性？ </a></li>
<li><a href="#51lambda-%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%BA%86%E8%A7%A3%E5%A4%9A%E5%B0%91">51.Lambda 表达式了解多少？</a></li>
<li><a href="#52optional-%E4%BA%86%E8%A7%A3%E5%90%97">52.Optional 了解吗？</a></li>
<li><a href="#53stream-%E6%B5%81%E7%94%A8%E8%BF%87%E5%90%97">53.Stream 流用过吗？</a></li>
</ul>`,r:{minutes:13.94,words:4183},y:"a",t:"Java8学习笔记",i:"lightbulb"},["/posts/java/Java8学习笔记.html","/posts/java/Java8学习笔记.md",":md"]],["v-02738b09","/posts/java/%E5%9F%BA%E7%A1%80.html",{d:172905854e4,e:`<h1> 基础</h1>
<ul>
<li><a href="#%E5%9F%BA%E7%A1%80">基础</a></li>
<li><a href="#%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1">面向对象</a>
<ul>
<li><a href="#1java-%E8%AF%AD%E8%A8%80%E6%9C%89%E5%93%AA%E4%BA%9B%E7%89%B9%E7%82%B9">1、Java 语言有哪些特点？</a></li>
<li><a href="#2%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1">2、面向对象</a>
<ul>
<li><a href="#1%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%8E%E9%9D%A2%E5%90%91%E8%BF%87%E7%A8%8B%E5%A4%84%E7%90%86%E9%97%AE%E9%A2%98%E7%9A%84%E4%B8%8D%E5%90%8C%E8%A7%92%E5%BA%A6">（1）面向对象与面向过程（处理问题的不同角度）</a></li>
<li><a href="#2%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7%E5%B0%81%E8%A3%85%E7%BB%A7%E6%89%BF%E5%A4%9A%E6%80%81">（2）面向对象三大特性：封装、继承、多态</a></li>
<li><a href="#3%E5%B0%81%E8%A3%85">（3）封装</a>
<ul>
<li><a href="#%E8%AE%BF%E9%97%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6">访问修饰符</a></li>
</ul>
</li>
<li><a href="#4%E7%BB%A7%E6%89%BF">（4）继承</a></li>
<li><a href="#5%E5%A4%9A%E6%80%81">（5）多态</a>
<ul>
<li><a href="#%E9%87%8D%E8%BD%BD%E4%B8%8E%E9%87%8D%E5%86%99">重载与重写</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#3%E6%8E%A5%E5%8F%A3%E4%B8%8E%E6%8A%BD%E8%B1%A1%E7%B1%BB">3、接口与抽象类</a></li>
<li><a href="#4object%E7%B1%BB%E7%9A%84%E6%96%B9%E6%B3%95">4、Object类的方法</a></li>
<li><a href="#5final%E5%85%B3%E9%94%AE%E5%AD%97">5、final关键字</a></li>
<li><a href="#6finalfinallyfinalize%E7%9A%84%E5%8C%BA%E5%88%AB">6、final、finally、finalize的区别</a></li>
<li><a href="#7%E4%B8%8Eequals">7、==与equals</a></li>
<li><a href="#8hashcode%E4%B8%8Eequals">8、hashCode与equals</a></li>
<li><a href="#9%E6%B7%B1%E6%8B%B7%E8%B4%9D%E4%B8%8E%E6%B5%85%E6%8B%B7%E8%B4%9D">9、深拷贝与浅拷贝</a></li>
<li><a href="#10java%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E5%BC%8F">10、Java创建对象的方式</a></li>
<li><a href="#11new%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%BF%87%E7%A8%8B%E4%BA%86%E8%A7%A3%E5%90%97">11、new创建对象的过程了解吗？</a></li>
<li><a href="#12%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6">12、反射机制</a></li>
<li><a href="#13%E5%BA%8F%E5%88%97%E5%8C%96">13、序列化</a>
<ul>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%BA%8F%E5%88%97%E5%8C%96%E4%BB%80%E4%B9%88%E6%98%AF%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96">什么是序列化？什么是反序列化？</a></li>
<li><a href="#%E8%AF%B4%E8%AF%B4%E6%9C%89%E5%87%A0%E7%A7%8D%E5%BA%8F%E5%88%97%E5%8C%96%E6%96%B9%E5%BC%8F">说说有几种序列化方式？</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">数据类型</a>
<ul>
<li><a href="#1java%E6%9C%89%E5%93%AA%E4%BA%9B%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">1、Java有哪些数据类型</a></li>
<li><a href="#2%E8%87%AA%E5%8A%A8%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2%E5%BC%BA%E5%88%B6%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2">2、自动类型转换&amp;强制类型转换</a></li>
<li><a href="#3%E8%87%AA%E5%8A%A8%E6%8B%86%E7%AE%B1%E8%87%AA%E5%8A%A8%E8%A3%85%E7%AE%B1">3、自动拆箱&amp;自动装箱</a></li>
<li><a href="#4switch-case%E7%9A%84%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8F%AF%E4%BB%A5%E6%98%AF%E4%BB%80%E4%B9%88%E7%B1%BB%E5%9E%8B">4、switch case的表达式可以是什么类型？</a></li>
<li><a href="#5string-%E7%B1%BB%E5%8F%AF%E4%BB%A5%E8%A2%AB%E7%BB%A7%E6%89%BF%E5%90%97">5、String 类可以被继承吗？</a></li>
<li><a href="#6stringstringbuffer%E4%B8%8Estringbuilder">6、String、StringBuffer与StringBuilder</a></li>
<li><a href="#7string-str1--new-stringabc%E5%92%8C-string-str2--abc-%E7%9A%84%E5%8C%BA%E5%88%AB">7、String str1 = new String("abc")和 String str2 = "abc" 的区别？</a></li>
<li><a href="#8%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%8B%BC%E6%8E%A5jdk18%E4%BC%98%E5%8C%96">8、字符串拼接jdk1.8优化</a></li>
<li><a href="#9integer-a-127integer-b--127integer-c-128integer-d--128%E7%9B%B8%E7%AD%89%E5%90%97">9、Integer a= 127，Integer b = 127；Integer c= 128，Integer d = 128；，相等吗?</a></li>
<li><a href="#10double%E4%B8%8Ebigdecimal">10、double与BigDecimal</a></li>
<li><a href="#11%E6%B3%9B%E5%9E%8B%E7%B1%BB%E5%9E%8B%E5%8F%82%E6%95%B0%E5%8C%96">11、泛型（类型参数化）</a></li>
</ul>
</li>
<li><a href="#%E5%BC%82%E5%B8%B8">异常</a>
<ul>
<li><a href="#1java%E4%B8%AD%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E4%BD%93%E7%B3%BB">1、Java中异常处理体系</a></li>
<li><a href="#2%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F">2、异常处理方式</a></li>
<li><a href="#3%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E8%A6%81%E7%82%B9">3、异常处理要点</a></li>
<li><a href="#4%E4%B8%89%E9%81%93%E7%BB%8F%E5%85%B8%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E4%BB%A3%E7%A0%81%E9%A2%98">4、三道经典异常处理代码题</a></li>
</ul>
</li>
</ul>`,r:{minutes:24.5,words:7350},y:"a",t:"基础",i:"lightbulb"},["/posts/java/基础.html","/posts/java/基础.md",":md"]],["v-3e231f51","/posts/java/%E9%9B%86%E5%90%88.html",{d:172905854e4,e:`<h1> 集合</h1>
<ul>
<li><a href="#%E9%9B%86%E5%90%88">集合</a></li>
<li><a href="#%E4%BA%8C%E9%9B%86%E5%90%88">二、集合</a>
<ul>
<li><a href="#%E4%B8%80comparator%E4%B8%8Ecomparable%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E6%8E%92%E5%BA%8F">（一）Comparator与Comparable实现自定义类排序</a></li>
<li><a href="#%E4%BA%8Clist-%E5%AF%B9%E4%BB%98%E9%A1%BA%E5%BA%8F%E7%9A%84%E5%A5%BD%E5%B8%AE--set-%E6%B3%A8%E9%87%8D%E7%8B%AC%E7%9A%84%E6%80%A7%E8%B4%A8--map-key%E6%9D%A5%E6%90%9C%E7%B4%A2%E7%9A%84%E4%B8%93%E5%AE%B6">（二）List (对付顺序的好帮⼿)  、Set (注重独⼀⽆⼆的性质)  、Map (⽤Key来搜索的专家)</a></li>
<li><a href="#%E4%B8%89arraylist%E5%BA%95%E5%B1%82%E6%98%AFobject%E6%95%B0%E7%BB%84linkedlist%E5%BA%95%E5%B1%82%E6%98%AF%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8%E4%B8%8Evector%E4%BF%9D%E8%AF%81%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E8%80%8Carraylist%E4%B8%8Elinkedlist%E4%B8%8D%E4%BF%9D%E8%AF%81%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8">（三）ArrayList（底层是Object数组）、LinkedList（底层是双向链表）与Vector（保证线程安全，而ArrayList与LinkedList不保证线程安全）</a></li>
<li><a href="#%E5%9B%9Bhashmaphashtablehashsetconcurrenthashmaplinkedhashmaptreemap">（四）HashMap、Hashtable、HashSet、ConcurrentHashMap、LinkedHashMap、TreeMap</a>
<ul>
<li><a href="#1hashmap%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8">（1）HashMap（⾮线程安全）</a></li>
<li><a href="#2hashtable%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E6%98%AF%E5%85%A8%E8%A1%A8%E9%94%81%E6%80%A7%E8%83%BD%E5%B7%AE-%E5%9F%BA%E6%9C%AC%E8%A2%AB%E6%B7%98%E6%B1%B0">（2）HashTable（线程安全，是全表锁，性能差， 基本被淘汰）</a></li>
<li><a href="#3hashset%E5%BA%95%E5%B1%82%E5%B0%B1%E6%98%AF%E5%9F%BA%E4%BA%8Ehashmap%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%A3%80%E6%9F%A5%E9%87%8D%E5%A4%8D%E6%97%B6%E5%85%88%E7%94%A8hashcode%E5%90%8E%E7%94%A8equals">（3）HashSet（底层就是基于HashMap实现的，检查重复时，先用hashcode()，后用equals()）</a></li>
<li><a href="#4concurrenthashmap">（4）ConcurrentHashMap</a></li>
<li><a href="#5linkedhashmap">（5）LinkedHashMap</a></li>
<li><a href="#6treemap-%E7%BA%A2%E6%A0%91%E5%B9%B3%E8%A1%A1%E7%9A%84%E6%8E%92%E5%BA%8F%E5%8F%89%E6%A0%91">（6）TreeMap： 红⿊树(⾃平衡的排序⼆叉树)</a></li>
</ul>
</li>
<li><a href="#%E4%BA%94copyonwritearraylist%E9%81%BF%E5%85%8D%E5%B9%B6%E5%8F%91%E4%BF%AE%E6%94%B9%E5%BC%82%E5%B8%B8">（五）CopyOnWriteArrayList避免并发修改异常</a></li>
<li><a href="#%E5%85%AD%E6%8A%8A%E9%9B%86%E5%90%88%E5%8C%85%E8%A3%85%E6%88%90%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E7%9A%84">（六）把集合包装成线程安全的</a></li>
</ul>
</li>
</ul>`,r:{minutes:6.51,words:1952},y:"a",t:"集合",i:"lightbulb"},["/posts/java/集合.html","/posts/java/集合.md",":md"]],["v-a5db72e6","/posts/juc/juc.html",{d:172905854e4,e:`<h1> JUC</h1>
<p><a href="./JUC.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"JUC",i:"lightbulb"},[":md"]],["v-12cc15fb","/posts/jvm/jvm.html",{d:172905854e4,e:`<h1> JVM</h1>
<p><a href="./JVM.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"JVM",i:"lightbulb"},[":md"]],["v-5abb1155","/posts/linux/linux.html",{d:172905854e4,e:`<h1> Linux</h1>
<p><a href="./Linux.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"Linux",i:"lightbulb"},[":md"]],["v-2fd44fde","/posts/micro_service/MicroService.html",{d:172905854e4,e:`<h1> 微服务</h1>
<h2> 1、对微服务的理解</h2>
<p>按业务拆分，每个服务只关注一个业务，具有独立性，独立进程，独立部署，独立数据存储</p>
<h2> 2、服务注册与服务发现、以及服务间调用</h2>
<p>相关概念：服务与实例</p>
<p>服务名称：每个服务在服务注册中心的标识，相当于Java中的类名。
服务实例：网络中提供服务的实例，具有IP和端口，相当于Java中的对象，一个实例即为运行在服务器上的一个进
程。</p>
<p>场景：</p>
<p>注册中心（服务端）</p>
<p>服务A有多实例，实现了负载均衡（作为客户端，注册到注册中心）</p>
<p>服务B有多实例，实现了负载均衡（作为客户端，注册到注册中心）</p>`,r:{minutes:5.89,words:1767},y:"a",t:"微服务",i:"lightbulb"},[":md"]],["v-081d7c76","/posts/micro_service/MybatisPlus.html",{d:172905854e4,e:`<h1> Mybatis Plus</h1>
<p>MyBatis-Plus（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。</p>
<p>特性：

架构：
</p>
`,r:{minutes:.18,words:54},y:"a",t:"Mybatis Plus",i:"lightbulb"},[":md"]],["v-0b37b602","/posts/mq/mq.html",{d:172905854e4,e:`<h1> RocketMQ</h1>
<p><a href="./RocketMQ.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"RocketMQ",i:"lightbulb"},[":md"]],["v-521f5626","/posts/mysql/SQL.html",{d:172905854e4,e:`<h1> SQL</h1>
<ul>
<li><a href="#sql">SQL</a></li>
<li><a href="#sql-1">SQL</a>
<ul>
<li><a href="#%E5%85%B3%E8%81%94%E6%9F%A5%E8%AF%A2">关联查询</a></li>
<li><a href="#having%E4%B8%8Ewhere">having与where</a></li>
<li><a href="#%E6%B7%BB%E5%8A%A0%E4%B8%80%E5%88%97">添加一列</a></li>
<li><a href="#%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0">聚合函数</a></li>
<li><a href="#%E7%AA%97%E5%8F%A3%E5%87%BD%E6%95%B0-%E6%B7%BB%E5%8A%A0%E6%8E%92%E5%90%8D%E5%88%97%E6%8E%92%E5%90%8Dtop-n">窗口函数-添加排名列(排名，top n)</a>
<ul>
<li><a href="#%E7%AA%97%E5%8F%A3%E5%87%BD%E6%95%B0-%E5%85%B3%E9%94%AE%E5%AD%97overpartitionorder">窗口函数 关键字：over,partition,order</a></li>
<li><a href="#%E6%8E%92%E5%90%8D-rankdense_rankrow_number">排名 rank,dense_rank,row_number</a></li>
<li><a href="#%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E7%AA%97%E5%8F%A3%E5%87%BD%E6%95%B0">聚合函数作为窗口函数</a></li>
</ul>
</li>
<li><a href="#%E9%A1%BA%E5%BA%8F">顺序</a></li>
<li><a href="#%E5%8E%BB%E9%87%8Ddistinct">去重distinct</a></li>
<li><a href="#%E5%8C%85%E5%90%ABin">包含in</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%A4%84%E7%90%86">字符串处理</a>
<ul>
<li><a href="#%E5%AD%90%E4%B8%B2-substrstrstart-------substrstrstartlen">子串 substr(str,start)   |    substr(str,start,len)</a></li>
<li><a href="#%E5%AD%90%E4%B8%B2-leftstrlen---rightstrlen">子串 left(str,len)  | right(str,len)</a></li>
<li><a href="#%E5%8F%8D%E8%BD%AC-reversestr">反转 reverse(str)</a></li>
<li><a href="#%E6%8B%BC%E6%8E%A5-concat">拼接 concat</a></li>
</ul>
</li>
<li><a href="#%E6%97%B6%E9%97%B4%E5%A4%84%E7%90%86">时间处理</a>
<ul>
<li><a href="#%E8%AE%A1%E7%AE%97%E6%97%B6%E9%97%B4%E5%B7%AE-timestampdiff%E8%AE%A1%E7%AE%97%E7%B2%92%E5%BA%A6%E5%BC%80%E5%A7%8B%E6%97%B6%E9%97%B4%E7%BB%93%E6%9D%9F%E6%97%B6%E9%97%B4">计算时间差 timestampdiff(计算粒度,开始时间,结束时间)</a></li>
</ul>
</li>
<li><a href="#%E5%9B%9B%E8%88%8D%E4%BA%94%E5%85%A5%E4%B8%8E%E5%8F%96%E6%95%B4">四舍五入与取整</a></li>
</ul>
</li>
<li><a href="#other">other</a>
<ul>
<li><a href="#1distinct%E5%85%B3%E9%94%AE%E5%AD%97%E5%BF%85%E9%A1%BB%E7%9B%B4%E6%8E%A5%E6%94%BE%E5%9C%A8%E5%88%97%E5%90%8D%E7%9A%84%E5%89%8D%E9%9D%A2%E5%85%B3%E9%94%AE%E5%AD%97%E4%BD%9C%E7%94%A8%E4%BA%8E%E6%89%80%E6%9C%89%E8%A6%81%E6%9F%A5%E7%9A%84%E5%88%97-">1.Distinct关键字（必须直接放在列名的前面；关键字作用于所有要查的列） </a></li>
<li><a href="#2%E8%A1%8C%E6%95%B0%E9%99%90%E5%88%B6-">2.行数限制： </a></li>
<li><a href="#3%E6%B3%A8%E9%87%8A-">3.	注释 </a></li>
<li><a href="#4%E6%8E%92%E5%BA%8F-">4.	排序 </a></li>
<li><a href="#5where-">5.	Where </a></li>
<li><a href="#6%E9%80%9A%E9%85%8D%E7%AC%A6%E7%94%A8%E6%9D%A5%E5%8C%B9%E9%85%8D%E5%80%BC%E7%9A%84%E4%B8%80%E9%83%A8%E5%88%86%E7%9A%84%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6-">6.	通配符（用来匹配值的一部分的特殊字符） </a></li>
<li><a href="#7%E6%8B%BC%E6%8E%A5%E5%AD%97%E6%AE%B5-">7.	拼接字段 </a></li>
<li><a href="#8%E8%81%9A%E9%9B%86%E5%87%BD%E6%95%B0-">8.	聚集函数 </a></li>
<li><a href="#9%E5%88%86%E7%BB%84%E6%95%B0%E6%8D%AE-">9.分组数据 </a></li>
<li><a href="#10select%E5%AD%90%E5%8F%A5%E5%8F%8A%E5%85%B6%E9%A1%BA%E5%BA%8F-">10.Select子句及其顺序 </a></li>
<li><a href="#11%E5%AD%90%E6%9F%A5%E8%AF%A2note%E4%BD%9C%E4%B8%BA%E5%AD%90%E6%9F%A5%E8%AF%A2%E7%9A%84select%E8%AF%AD%E5%8F%A5%E5%8F%AA%E8%83%BD%E6%9F%A5%E8%AF%A2%E5%8D%95%E4%B8%AA%E5%88%97%E4%BC%81%E5%9B%BE%E6%A3%80%E7%B4%A2%E5%A4%9A%E4%B8%AA%E5%88%97%E5%B0%86%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E5%AD%90%E6%9F%A5%E8%AF%A2%E5%B8%B8%E7%94%A8%E4%BA%8Ewhere%E5%AD%90%E5%8F%A5%E7%9A%84in%E6%93%8D%E4%BD%9C%E7%AC%A6%E4%B8%AD-">11.子查询（NOTE:作为子查询的SELECT语句只能查询单个列。企图检索多个列将返回错误。子查询常用于where子句的in操作符中） </a></li>
<li><a href="#12%E8%81%94%E7%BB%93%E8%81%94%E7%BB%93%E6%98%AF%E4%B8%80%E7%A7%8D%E6%9C%BA%E5%88%B6%E7%94%A8%E6%9D%A5%E5%9C%A8%E4%B8%80%E6%9D%A1select%E8%AF%AD%E5%8F%A5%E4%B8%AD%E5%85%B3%E8%81%94%E8%A1%A8%E5%9B%A0%E6%AD%A4%E7%A7%B0%E4%B8%BA%E8%81%94%E7%BB%93-">12.	联结（联结是一种机制，用来在一条select语句中关联表，因此称为联结） </a></li>
<li><a href="#13%E7%BB%84%E5%90%88%E6%9F%A5%E8%AF%A2%E4%BD%BF%E7%94%A8union%E5%BE%88%E7%AE%80%E5%8D%95%E6%89%80%E8%A6%81%E5%81%9A%E7%9A%84%E5%8F%AA%E6%98%AF%E7%BB%99%E5%87%BA%E6%AF%8F%E6%9D%A1select%E8%AF%AD%E5%8F%A5%E5%9C%A8%E5%90%84%E6%9D%A1%E8%AF%AD%E5%8F%A5%E4%B9%8B%E9%97%B4%E6%94%BE%E4%B8%8A%E5%85%B3%E9%94%AE%E5%AD%97union-">13.	组合查询（使用union很简单，所要做的只是给出每条select语句，在各条语句之间放上关键字union） </a></li>
<li><a href="#14%E8%A7%86%E5%9B%BE-">14.	视图 </a></li>
<li><a href="#15-%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B-">15. 存储过程 </a></li>
</ul>
</li>
</ul>`,r:{minutes:11.83,words:3548},y:"a",t:"SQL",i:"lightbulb"},[":md"]],["v-f648540e","/posts/mysql/mysql.html",{d:172905854e4,e:`<h1> MySQL</h1>
<p><a href="./MySQL.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"MySQL",i:"lightbulb"},[":md"]],["v-f7fb7aca","/posts/pytorch/01_ai_concept.html",{d:16573248e5,l:"July 9, 2022",c:["Pytorch"],g:["Pytorch"],e:`<h1> Artificial Intelligence Concept Interpretation</h1>
<ul>
<li>
<ol>
<li>Machine Learning, Deep Learning, and Reinforcement Learning</li>
</ol>
</li>
<li>
<ol start="2">
<li>Supervised Learning, Semi-Supervised Learning, Unsupervised Learning</li>
</ol>
</li>
<li>
<ol start="3">
<li>Online Learning and Offline Learning</li>
</ol>
</li>
<li>
<ol start="4">
<li>Regression, Classification, and Multi-label Classification</li>
</ol>
</li>
<li>
<ol start="5">
<li>Recommendation and Search</li>
</ol>
</li>
</ul>
`,r:{minutes:4.3,words:1290},y:"a",t:"Artificial Intelligence Concept Interpretation",i:"lightbulb"},[":md"]],["v-06f975a7","/posts/pytorch/02_neural_net_train.html",{d:16577568e5,l:"July 14, 2022",c:["Pytorch"],g:["Pytorch"],e:`<h1> Neural Network Training Key Points Interpretation</h1>
<ul>
<li>
<ol>
<li>Overall Objective</li>
</ol>
</li>
<li>
<ol start="2">
<li>Loss Function(Objective Function): Quantifying Model Effectiveness</li>
</ol>
</li>
<li>
<ol start="3">
<li>Optimization Algorithms (Gradient Descent): Algorithms that Adjust Model Parameters to Optimize the Objective Function</li>
</ol>
</li>
<li>
<ol start="4">
<li>Hyperparameters</li>
</ol>
</li>
</ul>
`,r:{minutes:2.04,words:613},y:"a",t:"Neural Network Training Key Points Interpretation",i:"lightbulb"},[":md"]],["v-1aae202e","/posts/pytorch/03_pytorch_operation.html",{d:16581024e5,l:"July 18, 2022",c:["Pytorch"],g:["Pytorch"],e:`<h1> Tensor Operations</h1>
<ul>
<li>
<ol>
<li>Scalar, Vector, Matrix, and Tensor</li>
</ol>
</li>
<li>
<ol start="2">
<li>Initializing Tensors</li>
</ol>
</li>
<li>
<ol start="3">
<li>Attributes of Tensors</li>
</ol>
</li>
<li>
<ol start="4">
<li>Basic Operations on Tensors</li>
</ol>
</li>
<li>
<ol start="5">
<li>Summation and Averaging</li>
</ol>
</li>
<li>
<ol start="6">
<li>Product Operations</li>
</ol>
</li>
<li>
<ol start="7">
<li>Calculating the Norm of a Vector</li>
</ol>
</li>
<li>
<ol start="8">
<li>Gradient Computation</li>
</ol>
</li>
</ul>
`,r:{minutes:9.52,words:2855},y:"a",t:"Tensor Operations",i:"lightbulb"},[":md"]],["v-584324ea","/posts/pytorch/04_pytorch_practice_nn.html",{d:16585344e5,l:"July 23, 2022",c:["Pytorch"],g:["Pytorch"],e:`<h1> Deep Learning Practice with PyTorch</h1>
<ul>
<li>
<ol start="0">
<li>PyTorch's APIs</li>
</ol>
</li>
<li>
<ol>
<li>Data Loading and Preprocessing</li>
</ol>
</li>
<li>
<ol start="2">
<li>Defining Network Models</li>
</ol>
</li>
<li>
<ol start="3">
<li>Defining Loss Function and Optimizer</li>
</ol>
</li>
<li>
<ol start="4">
<li>Training the Network</li>
</ol>
</li>
<li>
<ol start="5">
<li>Testing the Network</li>
</ol>
</li>
<li>
<ol start="6">
<li>Saving and Loading Models</li>
</ol>
</li>
<li>
<ol start="7">
<li>GPU Acceleration</li>
</ol>
</li>
<li>
<ol start="8">
<li>Visualization with TensorBoard</li>
</ol>
</li>
</ul>
`,r:{minutes:8.89,words:2666},y:"a",t:"Deep Learning Practice with PyTorch",i:"lightbulb"},[":md"]],["v-d9c466b0","/posts/pytorch/05_linear_nn.html",{d:16590528e5,l:"July 29, 2022",c:["Pytorch"],g:["Pytorch"],e:`<h1> PyTorch Practical for Linear Neural Network</h1>
<ul>
<li>
<ol>
<li>Implementing Linear Regression with PyTorch</li>
</ol>
</li>
<li>
<ol start="2">
<li>Implementing Softmax Regression with PyTorch</li>
</ol>
</li>
</ul>
`,r:{minutes:8.71,words:2612},y:"a",t:"PyTorch Practical for Linear Neural Network",i:"lightbulb"},[":md"]],["v-271e5cf6","/posts/pytorch/06_heterogeneous_graph.html",{d:17091648e5,l:"February 29, 2024",c:["Pytorch"],g:["Pytorch"],e:`<h1> PyG Heterogeneous Graph Practice</h1>
<h2> Homogeneous Graph and Heterogeneous Graph</h2>
<h3> Homogeneous graph</h3>
<p>Without distinguishing between node and edge types, there is only one type of node and one type of edge.</p>
<p>Node Type + Edge Type = 2</p>
<p>For example, in a social network, it can be imagined that nodes only have one category 'person', and edges only have one type of connection 'knows'. And people either know each other or they do not.</p>`,r:{minutes:.81,words:243},y:"a",t:"PyG Heterogeneous Graph Practice",i:"lightbulb"},[":md"]],["v-280b4b72","/posts/redis/redis.html",{d:172905854e4,e:`<h1> Redis</h1>
<p><a href="./Redis.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"Redis",i:"lightbulb"},[":md"]],["v-1c08519f","/posts/spring/spring.html",{d:172905854e4,e:`<h1> Spring</h1>
<p><a href="./Spring.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"Spring",i:"lightbulb"},[":md"]],["v-fcc6a446","/posts/tools/IDEA_Keymap.html",{d:172905854e4,e:`<h1> IDEA快捷键</h1>
<h2> 查看一个类的构造函数有哪些</h2>
<p>方法一：类前面加new，类后面不要加括号，按住ctrl点一下该类，会出现它的构造函数如下图

方法二：类前面加new，类后面加括号，ctrl+p，会出现它的构造函数如下图
</p>
<h2> 常用快捷键按重要性依次排序:  <br></h2>
<ul>
<li>Ctrl+Z: 撤销更改  <br></li>
<li>Ctrl+Shift+Z: 恢复被撤销的内容  <br></li>
<li>Ctrl+E: 查看最近改过的各种文件(以及各种好用的快捷键)  <br></li>
<li>Alt+Enter: 显示IDEA推测你要完成的操作，高级的代码补全  <br></li>
<li>Ctrl+Shift+F: 查找代码片段用  <br></li>
<li>Alt+F7: 跟踪一个Object的usage，一个个检查，比ctrl + 左键点击好用得多  <br></li>
<li>Shift Shift: 查找文件或类用  <br></li>
<li>Alt+9: 查看Git的历史提交记录  <br></li>
<li>拖黑后Ctrl+"/": 注释，取消注释  <br></li>
<li>F2: 跳到当前代码下一个报错的地方  <br></li>
<li>Alt+ ←/→: 在打开的文件中切换  <br></li>
<li>Ctrl+Alt+←/→: 跳到上一次/下一次看过的代码段  <br></li>
<li>Ctrl+Alt+L: 自动优化当前文件代码格式  <br></li>
</ul>`,r:{minutes:2.23,words:669},y:"a",t:"IDEA快捷键",i:"lightbulb"},[":md"]],["v-5fdc317f","/posts/tools/IDEA_Problem_and_plugin.html",{d:172905854e4,e:`<h1> IDEA常见问题及插件</h1>
<h2> 一、常用插件</h2>
<ul>
<li>Alibaba Java Coding Guidelines(XenoAmess TPM) : 代码检查用这个  <br></li>
<li>RestfulTool: 通过URL直接定位到对应controller代码 <br></li>
<li>Maven Helper: 分析Maven项目的package依赖冲突 <br></li>
<li>POJO to JSON: 要为类生成代码直接在类定义处右键就能copy json了，省时省力 <br></li>
<li>Github Copilot: AI补全代码，学生可以免费申请 <br></li>
<li>Sonar Lint: 扫描 bug, vulnerabilities and code smell，同时也是code review好帮手 <br></li>
<li>Database Navigator: 数据库插件，聊胜于无 （不建议使用，只能查看，无法创建表，还是用DBeaver算了） <br></li>
<li>Git Commit Template : 提交git commit模板，有利于团队管理提交代码  <br></li>
<li>Spring Assistant ：在idea中添加Spring Initializr工具；支持.yml提示【特别提醒：亲测很难用，maven导包会报错，直接用官网方式创建SpringBoot脚手架项目】 <br></li>
<li>GitToolBox：查看每行代码最后一个修改的人 <br></li>
<li>lombok：通过注解自动生成set,get,equals,constructor,toString</li>
</ul>`,r:{minutes:5.98,words:1794},y:"a",t:"IDEA常见问题及插件",i:"lightbulb"},[":md"]],["v-cdac0a3e","/posts/tools/Markdown.html",{d:172905854e4,e:`<h1> Markdown</h1>
<h2> md基本语法</h2>
<p>引用：&gt;大于号</p>
<p>换行：后面空2个空格，或者空一行，或者<br></p>
<p>上标(superscript)：<sup></sup></p>
<p>下标(subscript)：<sub></sub></p>
<p>更多</p>
<p>markdown官方基本语法：https://markdown.com.cn/cheat-sheet.html</p>
<p><a href="https://www.zybuluo.com/mdeditor" target="_blank" rel="noopener noreferrer">Markdown教程</a>
<a href="https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown" target="_blank" rel="noopener noreferrer">Markdown简明语法</a>
<a href="https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#cmd-markdown-%E9%AB%98%E9%98%B6%E8%AF%AD%E6%B3%95%E6%89%8B%E5%86%8C" target="_blank" rel="noopener noreferrer">Markdown高阶语法</a>
<a href="https://www.runoob.com/markdown/md-advance.html" target="_blank" rel="noopener noreferrer">Markdown菜鸟教程</a>
<a href="https://blog.csdn.net/qq_40818172/article/details/126260661" target="_blank" rel="noopener noreferrer">Markdown CSDN教程</a>
<a href="https://baijiahao.baidu.com/s?id=1680509829195209918&amp;wfr=spider&amp;for=pc" target="_blank" rel="noopener noreferrer">Markdown流程图全指导</a>
<a href="https://www.cnblogs.com/garyyan/p/8329343.html" target="_blank" rel="noopener noreferrer">markdown添加css样式</a></p>`,r:{minutes:.75,words:224},y:"a",t:"Markdown",i:"lightbulb"},[":md"]],["v-c3bdf33c","/posts/tools/Maven--java%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7.html",{d:172905854e4,e:`<h1> Maven--java包管理工具</h1>
<ul>
<li><a href="#maven--java%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7">Maven--java包管理工具</a>
<ul>
<li><a href="#%E4%B8%80%E7%AE%80%E4%BB%8B">一、简介</a>
<ul>
<li><a href="#%E4%B8%80%E4%BB%80%E4%B9%88%E6%98%AFmaven">（一）什么是Maven</a></li>
<li><a href="#%E4%BA%8Cmaven%E8%83%BD%E5%81%9A%E4%BB%80%E4%B9%88">（二）maven能做什么</a></li>
<li><a href="#%E4%B8%89maven%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84">（三）maven文件结构</a></li>
</ul>
</li>
<li><a href="#%E4%BA%8C%E4%BD%BF%E7%94%A8">二、使用</a>
<ul>
<li><a href="#%E4%B8%80%E5%AE%98%E7%BD%91%E4%B8%8B%E8%BD%BDwindow%E7%B3%BB%E7%BB%9F">（一）官网下载（window系统）</a></li>
<li><a href="#%E4%BA%8C%E8%A7%A3%E5%8E%8B">（二）解压</a></li>
<li><a href="#%E4%B8%89%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">（三）配置环境变量</a></li>
<li><a href="#%E5%9B%9B%E9%85%8D%E7%BD%AEsettingsxml">（四）配置settings.xml</a></li>
<li><a href="#%E4%BA%94idea%E9%85%8D%E7%BD%AE%E8%87%AA%E5%B7%B1%E7%9A%84maven">（五）IDEA配置自己的maven</a></li>
<li><a href="#%E5%85%AD%E7%94%A8idea%E5%88%9B%E5%BB%BAmaven%E9%A1%B9%E7%9B%AE">（六）用IDEA创建maven项目</a></li>
<li><a href="#%E4%B8%83%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96">（七）引入依赖</a></li>
<li><a href="#%E5%85%AB%E5%BC%95%E5%85%A5%E6%8F%92%E4%BB%B6">（八）引入插件</a></li>
</ul>
</li>
<li><a href="#%E4%B8%89maven%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C">三、maven基础操作</a>
<ul>
<li><a href="#%E4%B8%80%E4%BB%93%E5%BA%93">（一）仓库</a></li>
<li><a href="#%E4%BA%8C%E9%85%8D%E7%BD%AE">（二）配置</a></li>
<li><a href="#%E4%B8%89gav%E5%9D%90%E6%A0%87">（三）gav坐标</a></li>
<li><a href="#%E5%9B%9B%E6%93%8D%E4%BD%9C%E5%91%BD%E4%BB%A4%E4%B8%8E%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">（四）操作命令与生命周期</a></li>
<li><a href="#%E4%BA%94%E4%BE%9D%E8%B5%96%E8%8C%83%E5%9B%B4%E7%AE%A1%E7%90%86">（五）依赖范围管理</a></li>
<li><a href="#%E5%85%AD%E7%88%B6%E5%AD%90%E9%A1%B9%E7%9B%AE%E4%BE%9D%E8%B5%96%E4%BC%A0%E9%80%92">（六）父子项目依赖传递</a></li>
<li><a href="#%E4%B8%83%E9%A1%B9%E7%9B%AE%E8%81%9A%E5%90%88%E7%BB%9F%E4%B8%80%E7%AE%A1%E7%90%86">（七）项目聚合统一管理</a></li>
<li><a href="#%E5%85%AB%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84%E4%BE%9D%E8%B5%96%E5%86%B2%E7%AA%81">（八）项目中的依赖冲突</a>
<ul>
<li><a href="#%E6%8E%92%E5%8C%85-maven-helper">排包: maven helper</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#pom%E6%96%87%E4%BB%B6%E8%A7%A3%E6%9E%90">POM文件解析</a>
<ul>
<li><a href="#scope%E8%AF%A6%E8%A7%A3">scope详解</a></li>
</ul>
</li>
<li><a href="#%E5%B8%B8%E8%A7%81%E9%94%99%E8%AF%AF">常见错误</a>
<ul>
<li><a href="#since-maven-381-http-repositories-are-blocked">Since Maven 3.8.1 http repositories are blocked.</a></li>
<li><a href="#could-not-find-artifact-orgspringframeworkbootspring-boot-starter-parentpom320release-in-central">Could not find artifact org.springframework.boot:spring-boot-starter-parent:pom:3.2.0.RELEASE in central</a></li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:12.25,words:3674},y:"a",t:"Maven--java包管理工具",i:"lightbulb"},["/posts/tools/Maven--java包管理工具.html","/posts/tools/Maven--java包管理工具.md",":md"]],["v-68b4c8f8","/posts/tools/Poetry--python%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7.html",{d:172905854e4,e:`<h1> Poetry--python包管理工具</h1>
<p>https://blog.csdn.net/Python966/article/details/134134702</p>
`,r:{minutes:.04,words:11},y:"a",t:"Poetry--python包管理工具",i:"lightbulb"},["/posts/tools/Poetry--python包管理工具.html","/posts/tools/Poetry--python包管理工具.md",":md"]],["v-2b64e284","/zh/demo/",{y:"p",t:"项目",i:"star"},["/zh/demo/README.md"]],["v-564155e4","/zh/posts/",{y:"p",t:"知识库",i:"book"},["/zh/posts/README.md"]],["v-08107cad","/posts/Language/topics/careers.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Careers"],e:`<h1> Careers</h1>
`,r:{minutes:6.63,words:1990},y:"a",t:"Careers",i:"lightbulb"},[":md"]],["v-a821f576","/posts/Language/topics/common.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Common"],e:`<h1> Common</h1>
`,r:{minutes:6.44,words:1931},y:"a",t:"Common",i:"lightbulb"},[":md"]],["v-6b0e2128","/posts/Language/topics/communication.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Communication"],e:`<h1> Communication</h1>
`,r:{minutes:6.18,words:1854},y:"a",t:"Communication",i:"lightbulb"},[":md"]],["v-6b49d44a","/posts/Language/topics/computers.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Computers"],e:`<h1> Computers</h1>
`,r:{minutes:1.38,words:413},y:"a",t:"Computers",i:"lightbulb"},[":md"]],["v-df36f7a6","/posts/Language/topics/describing_something.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Describing something"],e:`<h1> Describing something</h1>
`,r:{minutes:.38,words:114},y:"a",t:"Describing something",i:"lightbulb"},[":md"]],["v-3bba3d80","/posts/Language/topics/dreams.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Dreams and Wishes"],e:`<h1> Dreams and Wishes</h1>
`,r:{minutes:.82,words:247},y:"a",t:"Dreams and Wishes",i:"lightbulb"},[":md"]],["v-849acaf0","/posts/Language/topics/graduating.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Graduating"],e:`<h1> Graduating</h1>
`,r:{minutes:1.06,words:317},y:"a",t:"Graduating",i:"lightbulb"},[":md"]],["v-28b506e8","/posts/Language/topics/greetings.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Greetings"],e:`<h1> Greetings</h1>
`,r:{minutes:1.77,words:530},y:"a",t:"Greetings",i:"lightbulb"},[":md"]],["v-4179d052","/posts/Language/topics/hobbies.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Hobbies"],e:`<h1> Hobbies</h1>
`,r:{minutes:3.15,words:944},y:"a",t:"Hobbies",i:"lightbulb"},[":md"]],["v-0f9cca50","/posts/Language/topics/immigration.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Immigration"],e:`<h1> Immigration</h1>
`,r:{minutes:.43,words:130},y:"a",t:"Immigration",i:"lightbulb"},[":md"]],["v-543d335a","/posts/Language/topics/introducing_someone.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Introduction"],e:`<h1> Introduction</h1>
`,r:{minutes:4.61,words:1383},y:"a",t:"Introduction",i:"lightbulb"},[":md"]],["v-bbae0c58","/posts/Language/topics/phone.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Phone and email"],e:`<h1> Phone and email</h1>
`,r:{minutes:1.42,words:425},y:"a",t:"Phone and email",i:"lightbulb"},[":md"]],["v-3e3c9404","/posts/Language/topics/routine.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Routine"],e:`<h1> Routine</h1>
`,r:{minutes:1.41,words:424},y:"a",t:"Routine",i:"lightbulb"},[":md"]],["v-5ad3f4b6","/posts/Language/topics/time_and_weather.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Time"],e:`<h1> Time &amp; Weather &amp; seasons</h1>
`,r:{minutes:1.87,words:561},y:"a",t:"Time & Weather & seasons",i:"lightbulb"},[":md"]],["v-2b6e996a","/posts/Language/topics/traits.html",{d:1657584e6,l:"July 12, 2022",c:["Conversation"],g:["Traits"],e:`<h1> Traits</h1>
`,r:{minutes:.36,words:108},y:"a",t:"Traits",i:"lightbulb"},[":md"]],["v-660b1242","/posts/code/algorithm/0.%E6%97%B6%E7%A9%BA%E5%A4%8D%E6%9D%82%E5%BA%A6.html",{d:172905854e4,e:`<h1> 复杂度分析 Complexity Analysis</h1>
<h2> 1. 大O复杂度表示法</h2>
<p>T(n) = O(f(n))</p>
<ul>
<li>T(n)表示代码执行时间</li>
<li>n表示数据规模大小</li>
<li>f(n)表示每行代码执行次数总和</li>
</ul>
<p>表示代码执行时间/所需空间随数据规模增长的变化趋势。</p>
<p>Note：只是表示一种变化趋势，不是具体的执行时间/空间大小。低阶、常量、系数被忽略，只记录最大量级就可以了。</p>
<h2> 2. 复杂度计算</h2>
<ol>
<li>最大值法则（非嵌套代码）：总复杂度等于量级最大的那段代码的复杂度 <br></li>
</ol>`,r:{minutes:5.63,words:1690},y:"a",t:"复杂度分析 Complexity Analysis",i:"lightbulb"},["/posts/code/algorithm/0.时空复杂度.html","/posts/code/algorithm/0.时空复杂度.md",":md"]],["v-8f4323a6","/posts/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3_%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html",{d:172905854e4,e:`<h1> 分治思想与递归实现</h1>
<h2> 算法的两种实现方式</h2>
<p>正如数据结构中，所有的数据结构都由数组或链表实现。 <br>
Note：数据结构的底层存储只有数组和链表两种 <br>
数组：栈、队列、堆、树、图(邻接矩阵) <br>
链表：栈、队列、堆、树、图(邻接表) <br></p>
<p>在算法中，所有的算法都由迭代或递归实现。 <br>
迭代：可以实现所有算法，所有的递归都可转换为迭代。动态规划可以看做是通过迭代实现分治思想的别称。 <br>
递归：分治思想的算法，也就是有子问题的算法，除了动态规划是自底向上通过迭代实现，其他的算法都是自顶向下，都可用递归实现 <br></p>`,r:{minutes:12.53,words:3760},y:"a",t:"分治思想与递归实现",i:"lightbulb"},["/posts/code/algorithm/1.分治思想_递归实现.html","/posts/code/algorithm/1.分治思想&递归实现.html","/posts/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3&%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html","/posts/code/algorithm/1.分治思想&递归实现.md","/posts/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3&%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.md"]],["v-1ce5ffde","/posts/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6_%E4%BD%8D%E8%BF%90%E7%AE%97.html",{d:172905854e4,e:`<h1> 二进制与位运算</h1>
<p><a href="https://www.runoob.com/w3cnote/bit-operation.html" target="_blank" rel="noopener noreferrer">链接</a> <br>
左移变大 （*2） <br>
右移变小（/2） <br>
奇数（二进制末位是1） <br>
偶数（二进制末位是0） <br>
x&amp;1 == 1   可以判断末位是否是1 <br>
x &gt;&gt;= 1  末位去掉一位 <br></p>
<h2> 位运算</h2>
<p> <br>
基本原理 <br></p>
<p>0s 表示一串 0，1s 表示一串 1。 <br></p>`,r:{minutes:4.23,words:1269},y:"a",t:"二进制与位运算",i:"lightbulb"},["/posts/code/algorithm/2.二进制_位运算.html","/posts/code/algorithm/2.二进制&位运算.html","/posts/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6&%E4%BD%8D%E8%BF%90%E7%AE%97.html","/posts/code/algorithm/2.二进制&位运算.md","/posts/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6&%E4%BD%8D%E8%BF%90%E7%AE%97.md"]],["v-30e253e2","/posts/code/algorithm/3.%E6%8E%92%E5%BA%8F.html",{d:172905854e4,e:`<h1> 排序</h1>
<h1> 排序算法的分析与评价</h1>
<h2> 执行效率</h2>
<h3> 最好情况、最坏情况、平均情况下的时间复杂度</h3>
<p>对于要排序的数据，有的接近有序，有的完全无序。有序度不同的数据，对于排序的执行时间肯定是有影响的，我们要知道排序算法在不同数据下的性能表现。   <br></p>
<h4> 平均复杂度分析：有序度&amp;逆序度</h4>
<p><strong>有序度：<em><em>是数组中具有有序关系的元素对的个数。 <br>
对于一个倒序排列的数组，比如 6，5，4，3，2，1，有序度是 0；对于一个完全有序的数组，比如 1，2，3，4，5，6，有序度就是1+2+...+(n-1)=n</em>(n-1)/2，也就是 1+2+3+4+5=15。 <br>
<strong>满有序度</strong>：我们把这种完全有序的数组的有序度叫作满有序度。   <br>
 <br>
<strong>逆序度</strong>：定义正好跟有序度相反。 <br>
 <br>
<strong>公式</strong>：<strong>逆序度 = 满有序度 - 有序度</strong> <br>
我们排序的过程就是一种增加有序度，减少逆序度的过程，最后达到满有序度，就说明排序完成了。  <br>
拿冒泡排序的例子来说明。要排序的数组的初始状态是 4，5，6，3， 2，1 ，其中，有序元素对有 (4，5) (4，6)(5，6)，所以有序度是 3。n=6，所以排序完成之后终态的满有序度为 n</em>(n-1)/2=15。   <br>
 <br>
冒泡排序包含两个操作原子，<strong>比较</strong>和</strong>交换**。每交换一次，有序度就加 1。不管算法怎么改 进，<strong>交换次数总是确定的，即为逆序度</strong>，也就是n*(n-1)/2减去初始有序度。 <br>
此例中就是 15– 3=12，要进行 12 次交换操作。 对于包含 n 个数据的数组进行冒泡排序，平均交换次数是多少呢？最坏情况下，初始状态的有序度是 0，所以要进行 n*(n-1)/2 次交换。最好情况下，初始状态的有序度是 n*(n-1)/2，就不需要进行交换。我们可以取个中间值 n*(n-1)/4，来表示初始有序度既不是很高也不是很低的平均情况。 换句话说，平均情况下，需要 n*(n-1)/4 次交换操作，比较操作肯定要比交换操作多，而复杂度的上限是 O(n)，所以平均情况下的时间复杂度就是 O(n)。  <br>
这个平均时间复杂度推导过程其实并不严格，但是很多时候很实用，毕竟概率论的定量分析太复杂，不太好用。 <br></p>`,r:{minutes:23.65,words:7094},y:"a",t:"排序",i:"lightbulb"},["/posts/code/algorithm/3.排序.html","/posts/code/algorithm/3.排序.md",":md"]],["v-52cd1778","/posts/code/algorithm/4.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html",{d:172905854e4,e:`<h1> 二分查找</h1>
<h2> 对数列的要求</h2>
<ol>
<li>有序的（排好序的，无序的需要提前排序） <br></li>
<li>存在上下界（限定数量或区间范围。否则需要对不定长的边界做处理，来找到明确上下界） <br></li>
<li>能够通过索引访问其中的元素（数组适合，链表非常不适合） <br></li>
<li>不常变动的，不要求动态增删的情形下查找（否则，应采用AVL树，即自平衡的二叉查找树） <br></li>
<li>数据量不能超级大（针对实际应用，要考虑内存限制） <br></li>
</ol>
<p>数据量太大就不适合二分查找了。 <br>
二分查找的底层需要依赖数组这种数据结构，而数组为了支持随机访问的特性，要求内存空 间连续，对内存的要求比较苛刻。比如，我们有 1GB 大小的数据，如果希望用数组来存 储，那就需要 1GB 的连续内存空间。   <br>
注意这里的“连续”二字，也就是说，即便有 2GB 的内存空间剩余，但是如果这剩余的 2GB 内存空间都是零散的，没有连续的 1GB 大小的内存空间，那照样无法申请一个 1GB 大小的数组。而我们的二分查找是作用在数组这种数据结构之上的，所以太大的数据用数组 存储就比较吃力了，也就不能用二分查找了。   <br></p>`,r:{minutes:5.28,words:1583},y:"a",t:"二分查找",i:"lightbulb"},["/posts/code/algorithm/4.二分查找.html","/posts/code/algorithm/4.二分查找.md",":md"]],["v-7c18e3be","/posts/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92_%E8%B4%AA%E5%BF%83.html",{d:172905854e4,e:`<h1> 动态规划与贪心</h1>
<p>动态规划适合用来求解最优问题，比如求最大值、最小值等。 <br></p>
<h2> 动态规划基础步骤</h2>
<p> <br>
1.建立dp数组（确定是一维、二维还是多维，也可后续进行变更。从小往大考虑，1维能不能表示出来，1维不行的话，考虑2维） <br>
2.根据题意，描述dp数组每一个格的含义 <br>
3.已知dp[i][j]能推出哪些格，或者通过哪些格能推出dp[i][j]，推导动态转移矩阵 <br>
4.根据dp[i][j]能推导出的位置，确定往dp数组填入内容的顺序（是从上到下，从左到右，从左下角到右上角，还是从左上角到右下角） <br>
5.初始化dp数组 <br>
6.循环填满dp数组 <br>
7.根据需要从dp数组获取对应信息 <br></p>`,r:{minutes:6.38,words:1913},y:"a",t:"动态规划与贪心",i:"lightbulb"},["/posts/code/algorithm/5.动态规划_贪心.html","/posts/code/algorithm/5.动态规划&贪心.html","/posts/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92&%E8%B4%AA%E5%BF%83.html","/posts/code/algorithm/5.动态规划&贪心.md","/posts/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92&%E8%B4%AA%E5%BF%83.md"]],["v-7354118a","/posts/code/algorithm/6.%E5%AD%97%E7%AC%A6%E4%B8%B2.html",{d:172905854e4,e:`<h1> 字符串</h1>
<h2> 哈希</h2>
<p>假如要把字符串映射到数组中的某个地方: <br></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        h <span class="token operator">=</span> h <span class="token operator">*</span> <span class="token number">31</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.25,words:974},y:"a",t:"字符串",i:"lightbulb"},["/posts/code/algorithm/6.字符串.html","/posts/code/algorithm/6.字符串.md",":md"]],["v-4094a976","/posts/code/algorithm/7.%E6%95%B0%E5%AD%A6.html",{d:172905854e4,e:`<h1> 数学</h1>
<h2> Acwing</h2>
<p><a href="https://zhuanlan.zhihu.com/p/643391309" target="_blank" rel="noopener noreferrer">参考笔记</a> <br>
数论：质数、约数、欧拉函数、快速幂、扩展欧几里得算法、中国剩余定理 <br>
高斯消元 <br>
组合计数 <br>
容斥原理 <br>
简单博弈论 <br>
 <br></p>
<h3> 质数（又称素数）</h3>
<p>概念：在大于1的整数中，如果只包含1和本身这两个约数，则称为质数或素数。 <br></p>
<h4> 质数的判定——试除法   时间复杂度：O(sqrt(n))</h4>`,r:{minutes:9.93,words:2979},y:"a",t:"数学",i:"lightbulb"},["/posts/code/algorithm/7.数学.html","/posts/code/algorithm/7.数学.md",":md"]],["v-67569e35","/posts/code/algorithm/8.%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7.html",{d:172905854e4,e:`<h1> 算法技巧</h1>
<h2> 前缀和 &amp; 差分</h2>
<p>前缀和与差分是互逆的 <br></p>
<h2> 双指针</h2>
<p>举例: <br></p>
<ol>
<li>指向不同序列: 两个有序数组/链表的合并 <br></li>
<li>指向相同序列: 快排的双坑法, KMP, 链表判环 <br></li>
</ol>
<p>核心思想: <br>
利用某些性质，只枚举O(n)个状态 <br></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 不用双指针，则O(n^2) &lt;br/&gt;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 用双指针，两个指针总共移动的次数不超过k*n，所以为O(n) &lt;br/&gt;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">++</span>j<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.39,words:418},y:"a",t:"算法技巧",i:"lightbulb"},["/posts/code/algorithm/8.算法技巧.html","/posts/code/algorithm/8.算法技巧.md",":md"]],["v-9da72a26","/posts/code/data_structure/1.%E6%95%B0%E7%BB%84.html",{d:172905854e4,e:`<h1> 数组</h1>
<h2> 特点</h2>
<ol>
<li>属于线性表 <br></li>
</ol>
<p>线性表，只有前后两个方向：数组、链表、栈、队列 <br>
非线性表：树、图 <br></p>
<ol start="2">
<li>连续的内存空间和相同类型的数据 <br></li>
<li>优：随机访问O(1) <br></li>
</ol>
<p>随机访问是指通过下标访问。 <br>
查找 != 随机访问，即便是排好序的用二分查找，时间复杂度为O(logn)） <br></p>
<ol start="4">
<li>缺：增删元素要做大量的数据搬移工作(O(n) <br></li>
</ol>`,r:{minutes:2.38,words:713},y:"a",t:"数组",i:"lightbulb"},["/posts/code/data_structure/1.数组.html","/posts/code/data_structure/1.数组.md",":md"]],["v-4ecbd87c","/posts/code/data_structure/2.%E9%93%BE%E8%A1%A8.html",{d:172905854e4,e:`<h1> 链表</h1>
<h2> 链表分类</h2>
<h3> 单链表</h3>
<p>每个结点由两部分组成，data和next。 <br>
特殊结点：头结点、尾结点 <br>
头结点：第一个结点，用来记录链表的基地址，有了它，我们就可以遍历得到整条链表。 <br>
尾结点：指针指向空地址NULL，表示这是链表上最后一个结点。 <br></p>
<h3> 循环链表</h3>
<p>循环链表与单链表的区别，仅在于尾结点，尾结点指针指向链表的头结点，适合处理环形结构的数据。 <br></p>
<h3> 双向链表（在实际软件开发中更加常用）</h3>
<p>每个结点由三部分组成，数据data，后继指针next，前驱指针prev。 <br>
特点： <br>
占用更多存储空间，支持两个方向，更灵活。 <br>
支持O(1)找到前驱结点。在需要用到上一个结点时，用双向链表可以很容易知道上一个结点，而用单链表，需要用双指针，保留上一个结点和当前结点的位置。插入和删除当前结点，都需要用到上一个结点。 <br>
查找有序链表时，可以根据要查找的值决定往前还是往后找。 <br>
Java中，双向链表的应用：LinkedList、LinkedHashMap <br></p>`,r:{minutes:12.19,words:3656},y:"a",t:"链表",i:"lightbulb"},["/posts/code/data_structure/2.链表.html","/posts/code/data_structure/2.链表.md",":md"]],["v-53ba0e11","/posts/code/data_structure/3.%E6%A0%88.html",{d:172905854e4,e:`<h1> 栈</h1>
<h1> 单调栈</h1>
<p>单调栈：元素按从小到大或从大到小排列，具有单调性 <br></p>
`,r:{minutes:.1,words:29},y:"a",t:"栈",i:"lightbulb"},["/posts/code/data_structure/3.栈.html","/posts/code/data_structure/3.栈.md",":md"]],["v-510ee6af","/posts/code/data_structure/4.%E9%98%9F%E5%88%97.html",{d:172905854e4,e:`<h1> 队列</h1>
<p>（1）队列也是一种“操作受限”的线性表，只支持两种基本操作：入队（队尾）和出队 （队头）  <br>
（2）顺序队列和链式队列 <br>
顺序队列：用数组实现 <br>
针对队尾满了，对头还有很多空位，解决方案：循环队列；一旦队尾满了，整体移到前面（不如循环队列） <br>
链式队列：用链表实现 <br>
（3）循环队列 <br>
要想写出没有 bug 的循环队列实现代码，关键要确定好队空和队满的判定条件。 <br>
队满判定条件：head=tail <br>
队满判定条件：(tail+1)%n=head <br>
（4）阻塞队列与并发队列 <br>
阻塞队列、并发队列，底层都还是队列这种数 据结构，只不过在之上附加了很多其他功能。阻塞队列就是入队、出队操作可以阻塞，并发 队列就是队列的操作多线程安全。   <br>
（5）应用 <br>
算法中应用：广度优先搜索 <br></p>`,r:{minutes:3.72,words:1117},y:"a",t:"队列",i:"lightbulb"},["/posts/code/data_structure/4.队列.html","/posts/code/data_structure/4.队列.md",":md"]],["v-9a7ab73a","/posts/code/data_structure/5.%E5%A0%86%EF%BC%88%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97%EF%BC%89.html",{d:172905854e4,e:`<h1> 堆（优先队列）</h1>
<h2> 概念（关键词：堆、完全二叉树、优先队列）</h2>
<p>只要满足以下这两点，它就是一个堆： <br></p>
<ol>
<li>堆是一个<strong>完全二叉树</strong> <br></li>
<li>堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值 <br></li>
</ol>
<p>特性：堆顶拥有最高优先级；每个父节点的优先级高于子节点的优先级。 <br></p>
<h2> 分类</h2>
<h3> 大根堆（大顶堆）</h3>
<p>概念：每个节点的值都大于等于子树中每个节点值的堆 <br>
特点：堆顶元素存储的是堆中数据的最大值 <br></p>`,r:{minutes:12.82,words:3845},y:"a",t:"堆（优先队列）",i:"lightbulb"},["/posts/code/data_structure/5.堆（优先队列）.html","/posts/code/data_structure/5.堆（优先队列）.md",":md"]],["v-2163f696","/posts/code/data_structure/6.%E6%A0%91.html",{d:172905854e4,e:`<h1> 树</h1>
<h2> 概念</h2>
<p>高度、深度、层 <br>
 <br>
 <br></p>
<h2> 二叉树</h2>
<h3> 二叉树的存储：链表与数组</h3>
<p>顺序存储法： 一般情况下，为了方便计算子节点，根节点会存储在下标为 1 的位置。如果节点 X 存储在数组中下标为 i 的位置，下标为 2 * i 的位置存储的就是左子节点，下标为 2 * i + 1 的位置存储的就是右子节点。反过来，下标为 i/2 的位置存储就是它的父节点。  <br></p>
<h3> 完全二叉树</h3>
<p>满二叉树是完全二叉树的一种特殊情况 <br>
如果某棵二叉树是一棵完全二叉树，那用数组存储无疑是最节省内存的一种方式。   <br>
这也是为什么完全二叉树会单独拎出来的原因，也是为什么完全二叉树要求最后一层的子节点都靠左的原因。   <br>
当我们讲到堆和堆排序的时候，你会发现，堆其实就是一种完全二叉树，最常用的存储方式就是数组。   <br></p>`,r:{minutes:43.88,words:13165},y:"a",t:"树",i:"lightbulb"},["/posts/code/data_structure/6.树.html","/posts/code/data_structure/6.树.md",":md"]],["v-77fd1436","/posts/code/data_structure/7.%E5%9B%BE.html",{d:172905854e4,e:`<h1> 图</h1>
<h2> 基本概念</h2>
<p>顶点（vertex）、边（edge） <br>
度（degree）、入度（In-degree）、出度（Out-degree） <br>
树、森林、环 <br>
无向图、有向图、完全有向图、完全无向图 <br>
连通图、联通分量 <br>
带权图（weighted graph）：每条边都有一个权重（weight） <br></p>
<h2> 图的存储</h2>
<h3> 邻接矩阵</h3>
<p>( Adjacency Matrix）--用空间换时间 <br>
 <br>
优：存储简单，获取两个顶点的关系高效。方便计算， 可以将很多图的运算转换成矩阵之间的运算。比如求解最短路径问题时会提到一个Floyd-Warshall 算法，就是利用矩阵循环相乘若干次得到结果。  <br>
缺：无向图有一半空间是浪费的，稀疏图绝大部分的存储空间都被浪费了。   <br></p>`,r:{minutes:29.18,words:8753},y:"a",t:"图",i:"lightbulb"},["/posts/code/data_structure/7.图.html","/posts/code/data_structure/7.图.md",":md"]],["v-6393b21c","/posts/code/data_structure/8.%E5%93%88%E5%B8%8C%E8%A1%A8%EF%BC%88%E6%95%A3%E5%88%97%E8%A1%A8%EF%BC%89.html",{d:172905854e4,e:`<h1> 哈希表</h1>
<p>hashset或桶（下标模拟hash） <br></p>
<h1> 一致性哈希</h1>
<p><a href="https://zhuanlan.zhihu.com/p/129049724" target="_blank" rel="noopener noreferrer">一致性哈希</a> <br>
可以保证当机器增加或者减少时，节点之间的数据迁移只限于两个节点之间，不会造成全局的网络问题。 <br></p>
`,r:{minutes:.24,words:71},y:"a",t:"哈希表",i:"lightbulb"},["/posts/code/data_structure/8.哈希表（散列表）.html","/posts/code/data_structure/8.哈希表（散列表）.md",":md"]],["v-f2a786dc","/posts/code/language/Java%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80.html",{d:172905854e4,e:`<h1> Java语言基础</h1>
<p>"对语言的熟悉程度" <br></p>
<ul>
<li><a href="#java%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80">Java语言基础</a>
<ul>
<li><a href="#%E5%AF%BC%E5%8C%85%E6%B1%87%E6%80%BB">导包汇总</a>
<ul>
<li><a href="#%E5%9F%BA%E6%9C%AC%E5%8C%85%E8%A3%85%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">基本/包装数据类型</a></li>
<li><a href="#%E7%BB%A7%E6%89%BF">继承</a></li>
<li><a href="#%E5%A4%9A%E6%80%81-%E7%88%B6%E7%B1%BB%E5%BC%95%E7%94%A8%E6%8C%87%E5%90%91%E5%AD%90%E7%B1%BB%E5%AF%B9%E8%B1%A1">多态-父类引用指向子类对象</a></li>
<li><a href="#%E6%8E%A5%E5%8F%A3">接口</a></li>
<li><a href="#%E6%B3%9B%E5%9E%8B-%E7%B1%BB%E5%9E%8B%E5%8F%82%E6%95%B0%E5%8C%96">泛型-类型参数化</a></li>
<li><a href="#lambda%E8%A1%A8%E8%BE%BE%E5%BC%8F--%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E5%8C%96">lambda表达式- 函数参数化</a></li>
<li><a href="#io">IO</a>
<ul>
<li><a href="#%E8%BE%93%E5%87%BA">输出</a></li>
<li><a href="#%E8%BE%93%E5%85%A5">输入</a></li>
</ul>
</li>
<li><a href="#biginteger">BigInteger</a></li>
<li><a href="#character">Character*</a></li>
<li><a href="#string">String*</a></li>
<li><a href="#stringbuilder">StringBuilder*</a></li>
<li><a href="#sort">sort</a></li>
<li><a href="#arrays">Arrays</a></li>
<li><a href="#collections-%E9%80%9A%E7%94%A8">Collections 通用*</a></li>
<li><a href="#list">List*</a></li>
<li><a href="#queuestackpirorityqueue%E5%A0%86%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97">Queue&amp;Stack*&amp;PirorityQueue（堆==优先队列）</a></li>
<li><a href="#map">Map</a></li>
<li><a href="#set">Set</a></li>
<li><a href="#objects">Objects</a></li>
</ul>
</li>
<li><a href="#%E7%BD%91%E6%98%93%E8%AF%AD%E6%B3%95%E6%80%BB%E7%BB%93">网易语法总结</a></li>
<li><a href="#%E7%BC%96%E7%A0%81%E8%A7%84%E8%8C%83">编码规范</a></li>
</ul>
</li>
</ul>`,r:{minutes:9.56,words:2869},y:"a",t:"Java语言基础",i:"lightbulb"},["/posts/code/language/Java语言基础.html","/posts/code/language/Java语言基础.md",":md"]],["v-dfa4da02","/posts/code/language/python%E7%AE%97%E6%B3%95%E5%88%B7%E9%A2%98%E8%AF%AD%E6%B3%95%E5%BF%AB%E9%80%9F%E6%81%A2%E5%A4%8D.html",{d:172905854e4,e:`<h1> Python算法刷题语法快速恢复</h1>
<h2> 关键词</h2>
<p>and 与
or  或
not 非
is  等于（比较对象）
== 等于（比较值）
True  真
False 假
None 空</p>
<h2> 选择</h2>
<p>n1 = int(num1[i]) if i &gt;= 0 else 0
return True if len(stack) == 0 else False
if root in (None, p, q): return root</p>
<h2> 循环</h2>
<p>while xxx:
for item in nums:
for index, item in enumerate(nums):
for i in range(n)： # 从0到（n-1）
for i in range(1, len(prices)): # 从1到（len-1）
for _ in range(len(q)): # 如果不需要用到遍历的值，用“_”</p>`,r:{minutes:1.89,words:568},y:"a",t:"Python算法刷题语法快速恢复",i:"lightbulb"},["/posts/code/language/python算法刷题语法快速恢复.html","/posts/code/language/python算法刷题语法快速恢复.md",":md"]],["v-6d0c678c","/zh/posts/LLM/langchain.html",{d:17064e8,l:"2024年1月28日",c:["LLM"],g:["LLM"],u:!0,e:`<h1> 一文带你了解LangChain: 使用大语言模型构建强大的应用程序</h1>
<blockquote>
<p>从架构图入手，一步步带你了解LangChain的方方面面</p>
</blockquote>
<ul>
<li>
<ol>
<li>LangChain是什么</li>
</ol>
</li>
<li>
<ol start="2">
<li>LangChain的架构图告诉了我们什么信息</li>
</ol>
</li>
<li>
<ol start="3">
<li>你不得不知的一些核心模块</li>
</ol>
</li>
<li>
<ol start="4">
<li>通过简单的示例代码感受下各模块的作用</li>
</ol>
</li>
</ul>
`,r:{minutes:5.69,words:1706},y:"a",t:"一文带你了解LangChain: 使用大语言模型构建强大的应用程序",i:"lightbulb"},[":md"]],["v-fbcadf0c","/zh/posts/LLM/langchain_source_code.html",{d:17064864e5,l:"2024年1月29日",c:["LLM"],g:["LLM"],u:!0,e:`<h1> 从源码视角，窥探LangChain的运行逻辑</h1>
<blockquote>
<p>通过解读Chain的源码和AgentExecutor的源码，带你了解各个模块是如何关联在一起的</p>
</blockquote>
<ul>
<li>
<ol>
<li>LangChain的基类</li>
</ol>
</li>
<li>
<ol start="2">
<li>LCEL与Runnable</li>
</ol>
</li>
<li>
<ol start="3">
<li>Chain</li>
</ol>
</li>
<li>
<ol start="4">
<li>AgentExecutor</li>
</ol>
</li>
</ul>
`,r:{minutes:5.35,words:1606},y:"a",t:"从源码视角，窥探LangChain的运行逻辑",i:"lightbulb"},[":md"]],["v-5bcfad2a","/zh/posts/LLM/llama.html",{d:17172e8,l:"2024年6月1日",c:["LLM"],g:["LLM"],u:!0,e:`<h1> Llama源码解读</h1>
<ul>
<li>
<ol>
<li>About</li>
</ol>
</li>
<li>
<ol start="2">
<li>模型总体架构</li>
</ol>
</li>
<li>
<ol start="3">
<li>超参数</li>
</ol>
</li>
<li>
<ol start="4">
<li>张量维度转换</li>
</ol>
</li>
<li>
<ol start="5">
<li>可训练参数量</li>
</ol>
</li>
<li>
<ol start="6">
<li>源码</li>
</ol>
</li>
</ul>
`,r:{minutes:5.87,words:1761},y:"a",t:"Llama源码解读",i:"lightbulb"},[":md"]],["v-d0356272","/zh/posts/LLM/llama_advanced.html",{d:17172e8,l:"2024年6月1日",c:["LLM"],g:["LLM"],u:!0,e:`<h1> Llama进阶</h1>
<ul>
<li>
<ol>
<li>LayerNorm(Layer Normalization，层归一化)</li>
</ol>
</li>
<li>
<ol start="2">
<li>Attention</li>
</ol>
</li>
<li>
<ol start="3">
<li>超参数</li>
</ol>
</li>
<li>
<ol start="4">
<li>张量维度转换</li>
</ol>
</li>
<li>
<ol start="5">
<li>可训练参数量</li>
</ol>
</li>
<li>
<ol start="6">
<li>源码</li>
</ol>
</li>
</ul>
`,r:{minutes:5.04,words:1511},y:"a",t:"Llama进阶",i:"lightbulb"},[":md"]],["v-ddbde82a","/zh/posts/LLM/llm_summary.html",{d:17188416e5,l:"2024年6月20日",c:["LLM"],g:["LLM"],u:!0,e:`<h1> LLM汇总</h1>
<ul>
<li>
<ol>
<li>LLM性能评估平台</li>
</ol>
</li>
<li>
<ol start="2">
<li>LLM组织和模型</li>
</ol>
</li>
</ul>
`,r:{minutes:2.78,words:833},y:"a",t:"LLM汇总",i:"lightbulb"},[":md"]],["v-7efe3ef0","/zh/posts/LLM/streamlit.html",{d:17084736e5,l:"2024年2月21日",c:["LLM"],g:["LLM"],e:`<h1> streamlit构建对话式应用程序</h1>
<ul>
<li>
<ol>
<li>构建对话界面所需的组件</li>
</ol>
</li>
<li>
<ol start="2">
<li>对话界面完整流程</li>
</ol>
</li>
<li>
<ol start="3">
<li>流式输出assistant消息的改造</li>
</ol>
</li>
<li>
<ol start="4">
<li>构建封装ChatGPT的应用</li>
</ol>
</li>
</ul>
`,r:{minutes:1.9,words:570},y:"a",t:"streamlit构建对话式应用程序",i:"lightbulb"},[":md"]],["v-538a2646","/zh/posts/LLM/transformer.html",{d:17165088e5,l:"2024年5月24日",c:["LLM"],g:["LLM"],u:!0,e:`<h1> Transformer源码解读</h1>
<ul>
<li>
<ol>
<li>About</li>
</ol>
</li>
<li>
<ol start="2">
<li>模型总体架构</li>
</ol>
</li>
<li>
<ol start="3">
<li>超参数</li>
</ol>
</li>
<li>
<ol start="4">
<li>张量维度转换</li>
</ol>
</li>
<li>
<ol start="5">
<li>可训练参数量</li>
</ol>
</li>
<li>
<ol start="6">
<li>源码</li>
</ol>
</li>
</ul>
`,r:{minutes:24.42,words:7325},y:"a",t:"Transformer源码解读",i:"lightbulb"},[":md"]],["v-9d52c426","/zh/posts/Language/commen_mistakes.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Commen Mistakes"],e:`<h1> Commen Mistakes</h1>
`,r:{minutes:2.44,words:731},y:"a",t:"Commen Mistakes",i:"lightbulb"},[":md"]],["v-ff10b136","/zh/posts/Language/grammar.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Grammar"],e:`<h1> Grammar</h1>
<blockquote>
<p>Don't think that mastering the entire set of grammar rules is necessary to learn Language well.  Once you've grasped the core grammar, you're already well on your way. The rest is just about continuous accumulation and improvement.</p>
<p>Remember, the sole purpose of grammar is to build sentences.</p>
</blockquote>
`,r:{minutes:16.69,words:5007},y:"a",t:"Grammar",i:"lightbulb"},[":md"]],["v-67b2b392","/zh/posts/Language/pronunciation.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Pronunciation"],e:`<h1> Pronunciation</h1>
`,r:{minutes:6.08,words:1824},y:"a",t:"Pronunciation",i:"lightbulb"},[":md"]],["v-41ad36be","/zh/posts/Language/sentence_pattern_and_expression.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Sentence Pattern and Expression"],e:`<h1> Sentence Pattern and Expression</h1>
`,r:{minutes:24.08,words:7223},y:"a",t:"Sentence Pattern and Expression",i:"lightbulb"},[":md"]],["v-7b27ee69","/zh/posts/api/GraphQL.html",{d:172905854e4,e:`<h1> GraphQL</h1>
<p><a href="https://hasura.io/learn/graphql/intro-graphql/introduction/" target="_blank" rel="noopener noreferrer">https://hasura.io/learn/graphql/intro-graphql/introduction/</a> <br></p>
<p><a href="https://graphql.cn/learn/" target="_blank" rel="noopener noreferrer">https://graphql.cn/learn/</a> <br></p>`,r:{minutes:.05,words:15},y:"a",t:"GraphQL",i:"lightbulb"},[":md"]],["v-de6cc37c","/zh/posts/code/%E7%AE%97%E6%B3%95%E6%8F%90%E5%8D%87.html",{d:172905854e4,e:`<h1> 算法提升</h1>
<h1> 刷题（持续练习，刻意练习不熟悉的数据结构和算法，反复回顾）</h1>
<p>刷算法 <br>
1.限时10分钟想思路，如果想不出来直接看题解，节省时间，试着根据题解写代码，还写不出来，直接看题解代码，理解后复现 <br>
2.重复刷题：时间久了会生疏，需重复刷找回记忆 <br>
3.写解题报告 <br>
写解题步骤，供忘记了快速想起来，减少重复刷题的遍数 <br></p>
<p>Note:面试时，注重沟通和交流，把面试官当作之后的同事伙伴，一起交流问题 <br>
题库：力扣 <br>
做题：把所有想到的方法过一遍，<strong>时刻想到时空复杂度</strong>，选择时空复杂度最优的 <br>
关键：3分学，7分练，动手写，总结自己的代码模板 <br>
合格程序员的第一步：算法和数据结构 <br>
 <br>
1.看题，边界范围，可通过范围知道可能的解法（询问题目细节，边界条件，可能的极端错误情况） <br>
2.想尽可能多的解，找到最佳解（所有可能的解法都和面试官沟通一遍） <br>
3.代码实现 <br>
4.学习别人的代码 <br>
 <br></p>`,r:{minutes:2.04,words:612},y:"a",t:"算法提升",i:"lightbulb"},["/zh/posts/code/算法提升.html","/zh/posts/code/算法提升.md",":md"]],["v-44fdf740","/zh/posts/code/%E7%BB%8F%E5%85%B8%E9%A2%98%E6%B1%87%E6%80%BB%EF%BC%88%E6%AF%8F%E4%B8%AA%E7%BB%86%E5%88%86%E7%B1%BB%E9%99%90%E5%AE%9A10%E9%A2%98%E4%BB%A5%E5%86%85%EF%BC%89.html",{d:172905854e4,e:`<h1> 经典题汇总（每个细分类限定10题以内）</h1>
<p>%代表做不出来的次数<br>
&amp;代表做出来的次数</p>
<ul>
<li><a href="#%E7%BB%8F%E5%85%B8%E9%A2%98%E6%B1%87%E6%80%BB%E6%AF%8F%E4%B8%AA%E7%BB%86%E5%88%86%E7%B1%BB%E9%99%90%E5%AE%9A10%E9%A2%98%E4%BB%A5%E5%86%85">经典题汇总（每个细分类限定10题以内）</a></li>
<li><a href="#%E6%95%B0%E7%BB%84">数组</a></li>
<li><a href="#%E5%8F%8C%E6%8C%87%E9%92%88%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3">双指针&amp;滑动窗口</a></li>
<li><a href="#%E9%93%BE%E8%A1%A8">链表</a></li>
<li><a href="#%E6%A0%91">树</a>
<ul>
<li><a href="#%E7%BA%BF%E6%AE%B5%E6%A0%91">线段树</a></li>
</ul>
</li>
<li><a href="#%E5%9B%BE">!图</a>
<ul>
<li><a href="#dfs">DFS</a>
<ul>
<li><a href="#%E5%9B%9E%E6%BA%AF%E5%88%87%E8%AE%B0%E5%B0%86%E6%96%B0%E7%94%9F%E6%88%90%E7%9A%84curlist%E6%94%BE%E5%85%A5res%E6%97%B6%E8%A6%81%E5%88%9B%E5%BB%BA%E6%96%B0%E7%9A%84list%E5%8D%B3resaddnew-arraylistcurlist%E4%B8%8D%E7%84%B6%E5%B0%B1%E4%BC%9A%E8%A2%AB%E6%94%B9%E6%8E%89">回溯（切记：将新生成的curList放入res时，要创建新的list，即res.add(new ArrayList(curList))，不然就会被改掉）</a></li>
<li><a href="#%E5%B9%B6%E6%9F%A5%E9%9B%86%E5%B9%B6%E6%9F%A5%E9%9B%86%E8%83%BD%E5%81%9A%E7%9A%84%E9%A2%98%E4%B9%9F%E5%8F%AF%E4%BB%A5%E7%94%A8dfs%E6%88%96bfs%E5%81%9A%E6%88%91%E9%80%89%E6%8B%A9%E7%94%A8dfs%E6%9D%A5%E5%81%9A">并查集（并查集能做的题，也可以用DFS或BFS做，我选择用DFS来做）</a></li>
</ul>
</li>
<li><a href="#bfs%E5%A6%82%E6%9E%9C%E5%9B%BE%E6%98%AF%E7%9F%A9%E9%98%B5%E5%BE%80%E4%B8%8A%E4%B8%8B%E5%B7%A6%E5%8F%B34%E4%B8%AA%E6%96%B9%E5%90%91%E7%A7%BB%E5%8A%A8%E6%9C%80%E5%A5%BD%E7%94%A8for%E5%BE%AA%E7%8E%AF%E5%AE%9E%E7%8E%B0%E8%80%8C%E4%B8%8D%E6%98%AF%E5%86%994%E6%AC%A1%E7%9B%B8%E4%BC%BC%E7%9A%84%E4%BB%A3%E7%A0%81">BFS（如果图是矩阵，往上下左右4个方向移动，最好用for循环实现，而不是写4次相似的代码）</a></li>
<li><a href="#%E6%8B%93%E6%89%91%E6%8E%92%E5%BA%8F">拓扑排序</a></li>
</ul>
</li>
<li><a href="#%E6%A0%88%E5%8D%95%E8%B0%83%E6%A0%88">!栈&amp;单调栈</a></li>
<li><a href="#%E9%98%9F%E5%88%97">队列</a></li>
<li><a href="#%E5%A0%86">堆</a></li>
<li><a href="#%E5%93%88%E5%B8%8C%E8%A1%A8">哈希表</a></li>
<li><a href="#%E6%A8%A1%E6%8B%9F%E6%9E%9A%E4%B8%BE">模拟/枚举</a></li>
<li><a href="#%E9%80%92%E5%BD%92">递归</a></li>
<li><a href="#%E6%8E%92%E5%BA%8F">排序</a></li>
<li><a href="#%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE%E7%BB%86%E8%8A%82%E5%BE%88%E9%9A%BE%E6%8A%8A%E6%8F%A1%E5%A4%9A%E7%BB%83">二分查找(细节很难把握，多练)</a></li>
<li><a href="#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92%E8%B4%AA%E5%BF%83%E8%83%BD%E7%94%A8%E8%B4%AA%E5%BF%83%E6%B1%82%E8%A7%A3%E7%9A%84%E4%B8%80%E5%AE%9A%E8%83%BD%E7%94%A8%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92">动态规划（贪心：能用贪心求解的一定能用动态规划）</a></li>
<li><a href="#%E8%B4%AA%E5%BF%83%E5%8C%BA%E9%97%B4%E9%9B%86%E5%90%88">贪心&amp;区间集合</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串</a></li>
<li><a href="#%E6%95%B0%E5%AD%A6">数学</a>
<ul>
<li><a href="#%E5%BF%AB%E9%80%9F%E5%B9%82">快速幂</a></li>
<li><a href="#%E4%BC%97%E6%95%B0%E6%91%A9%E5%B0%94%E6%8A%95%E7%A5%A8%E6%B3%95">众数（摩尔投票法）</a></li>
</ul>
</li>
<li><a href="#%E4%BD%8D%E8%BF%90%E7%AE%97">位运算</a></li>
</ul>`,r:{minutes:10.76,words:3228},y:"a",t:"经典题汇总（每个细分类限定10题以内）",i:"lightbulb"},["/zh/posts/code/经典题汇总（每个细分类限定10题以内）.html","/zh/posts/code/经典题汇总（每个细分类限定10题以内）.md",":md"]],["v-35db20fa","/zh/posts/cs/CSAPP.html",{d:172905854e4,e:`<h1> CSAPP</h1>
<p>英文版：CSAPP（Computer Systems: A Programmer's Perspective） <br>
中文版：深入理解计算机系统 <br>
讲义：<a href="https://fengmuzi2003.gitbook.io/csapp3e/" target="_blank" rel="noopener noreferrer">CSAPP重点解读</a> <br>
官网：<a href="http://csapp.cs.cmu.edu/" target="_blank" rel="noopener noreferrer">CS:APP3e</a> <br>
自学关心的地方：Student Site（有一些推荐的不错的书和工具，也有实验链接） <br>
 <br></p>`,r:{minutes:.42,words:127},y:"a",t:"CSAPP",i:"lightbulb"},[":md"]],["v-393d10f2","/zh/posts/cs/Netty.html",{d:172905854e4,e:`<h1> Netty</h1>
<h2> 同步/异步，阻塞非阻塞</h2>
<p>在等待数据阶段：发起网络调用后，在服务端没准备好数据的情况下。客户端阻塞，则为阻塞IO；网络调用立即返回，则为非阻塞IO <br></p>
<p>在数据传输阶段: 如果发起网络调用的线程还可以做其它事情则为异步，否则为同步 <br></p>
<h2> BIO</h2>
<p>下图为MySQL Connector-Java 的架构，为典型的BIO: <br></p>
<p> <br></p>
<p>如果把这个架构改成NIO的: <br>
 <br></p>
<p>为什么MySQL 不使用NIO的模式: <br></p>`,r:{minutes:12.36,words:3709},y:"a",t:"Netty",i:"lightbulb"},[":md"]],["v-eb4206e2","/zh/posts/cs/RPC.html",{d:172905854e4,e:`<h1> RPC</h1>
<p>有了解过dubbo吗，简单介绍下dubbo结构。 <br>
如何做服务隔离。简单介绍下hystrix。 <br>
如何设计个rpc框架。 <br></p>
<h1> Dubbo</h1>
<h2> 服务注册/发现</h2>
<p>Dubbo的服务注册与发现机制: <br>
 <br></p>
<p>4类角色: 消费者、提供者、注册中心、Monitor <br></p>
<h2> Registry原理</h2>
<p>以Dubbo最常用的Zookeeper来介绍 <br></p>
<p>zk里的存储: <br>
 <br>
每一个服务的存储的目录结构为/dubbo/{serviceName} ，   其中serviceName为Provider的{包名}.{类名} <br>
下面有4个子文件夹，分别存储: <br></p>`,r:{minutes:8.57,words:2571},y:"a",t:"RPC",i:"lightbulb"},[":md"]],["v-4e7a6e6c","/zh/posts/cs/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.html",{d:172905854e4,e:`<h1> 操作系统</h1>
<ul>
<li><a href="#%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F">操作系统</a></li>
<li><a href="#%E5%BF%AB%E9%80%9F%E6%8E%8C%E6%8F%A1%E9%9D%A2%E8%AF%95">快速掌握面试</a>
<ul>
<li><a href="#1-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F%E5%92%8C%E7%A1%AC%E4%BB%B6%E4%B9%8B%E9%97%B4%E7%9A%84%E5%AA%92%E4%BB%8B-">1. 操作系统：应用程序和硬件之间的媒介 </a></li>
<li><a href="#2-%E5%B9%B6%E5%8F%91%E5%B9%B6%E8%A1%8C%E8%BF%9B%E7%A8%8B%E7%BA%BF%E7%A8%8B%E5%8D%8F%E7%A8%8B-">2. 并发&amp;并行，进程&amp;线程&amp;协程 </a></li>
<li><a href="#3-%E8%BF%9B%E7%A8%8B%E4%B8%8A%E4%B8%8B%E6%96%87%E5%88%87%E6%8D%A2%E7%BA%BF%E7%A8%8B%E4%B8%8A%E4%B8%8B%E6%96%87%E5%88%87%E6%8D%A2-">3. 进程上下文切换&amp;线程上下文切换 </a></li>
<li><a href="#4-%E7%94%A8%E6%88%B7%E6%80%81%E5%86%85%E6%A0%B8%E6%80%81%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8%E7%94%A8%E6%88%B7%E6%80%81%E9%80%9A%E8%BF%87%E7%B3%BB%E7%BB%9F%E8%B0%83%E7%94%A8%E5%88%87%E6%8D%A2%E5%88%B0%E5%86%85%E6%A0%B8%E6%80%81-">4. 用户态&amp;内核态，系统调用：用户态通过系统调用切换到内核态 </a></li>
<li><a href="#5-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%9A%84%E8%BF%9B%E7%A8%8B%E7%BA%BF%E7%A8%8B%E6%9C%89%E5%93%AA%E4%BA%9B%E7%8A%B6%E6%80%81notejava%E6%98%AF6%E7%A7%8D%E7%8A%B6%E6%80%81%E5%88%9B%E5%BB%BA%E5%B0%B1%E7%BB%AA%E8%BF%90%E8%A1%8C%E9%98%BB%E5%A1%9E%E7%BB%93%E6%9D%9F-">5. 操作系统的进程/线程有哪些状态（Note:Java是6种状态）：创建，就绪，运行，阻塞，结束 </a></li>
<li><a href="#6-%E8%BF%9B%E7%A8%8B%E9%97%B4%E9%80%9A%E4%BF%A17%E7%A7%8D-">6. 进程间通信（7种） </a></li>
<li><a href="#7-%E8%BF%9B%E7%A8%8B%E7%9A%84%E8%B0%83%E5%BA%A6%E7%AE%97%E6%B3%95-">7. 进程的调度算法 </a></li>
<li><a href="#8-%E7%BA%BF%E7%A8%8B%E9%97%B4%E5%90%8C%E6%AD%A5-">8. 线程间同步 </a></li>
<li><a href="#9-%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E7%9A%84%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86-">9. 操作系统的内存管理 </a></li>
<li><a href="#10-%E5%B8%B8%E8%A7%81%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86%E6%9C%BA%E5%88%B6-">10. 常见内存管理机制 </a></li>
<li><a href="#11-%E9%A1%B5%E5%BC%8F%E7%AE%A1%E7%90%86%E9%87%8D%E8%A6%81%E6%A6%82%E5%BF%B5%E5%BF%AB%E8%A1%A8%E5%A4%9A%E7%BA%A7%E9%A1%B5%E8%A1%A8-">11. 页式管理重要概念：快表&amp;多级页表 </a></li>
<li><a href="#12-%E8%99%9A%E6%8B%9F%E5%86%85%E5%AD%98%E8%99%9A%E6%8B%9F%E5%9C%B0%E5%9D%80%E7%89%A9%E7%90%86%E5%86%85%E5%AD%98%E7%89%A9%E7%90%86%E5%9C%B0%E5%9D%80-">12. 虚拟内存（虚拟地址）&amp;物理内存（物理地址） </a></li>
<li><a href="#13-%E4%BA%A4%E6%8D%A2%E7%A9%BA%E9%97%B4%E7%A3%81%E7%9B%98%E4%B8%8A%E7%94%A8%E4%BA%8E%E6%89%A9%E5%B1%95%E5%86%85%E5%AD%98%E7%9A%84%E4%B8%80%E5%9D%97%E7%A9%BA%E9%97%B4%E5%B0%B1%E5%8F%AB%E4%BA%A4%E6%8D%A2%E7%A9%BA%E9%97%B4-">13. 交换空间：磁盘上用于扩展内存的一块空间，就叫交换空间。 </a></li>
<li><a href="#14-%E9%A1%B5%E9%9D%A2%E7%BD%AE%E6%8D%A2%E7%AE%97%E6%B3%95-">14. 页面置换算法 </a></li>
</ul>
</li>
<li><a href="#%E5%8C%BA%E5%88%86io%E5%AF%86%E9%9B%86%E5%86%85%E5%AD%98%E5%AF%86%E9%9B%86%E5%92%8C%E8%AE%A1%E7%AE%97%E5%AF%86%E9%9B%86">区分IO密集、内存密集和计算密集</a></li>
<li><a href="#java-%E4%B8%AD-io-%E6%B5%81%E5%88%86%E4%B8%BA%E5%87%A0%E7%A7%8D">Java 中 IO 流分为几种?</a>
<ul>
<li><a href="#%E6%97%A2%E7%84%B6%E6%9C%89%E4%BA%86%E5%AD%97%E8%8A%82%E6%B5%81%E4%B8%BA%E4%BB%80%E4%B9%88%E8%BF%98%E8%A6%81%E6%9C%89%E5%AD%97%E7%AC%A6%E6%B5%81">既然有了字节流,为什么还要有字符流?</a></li>
</ul>
</li>
<li><a href="#bionioaio">BIO、NIO、AIO</a>
<ul>
<li><a href="#io%E6%B1%87%E6%80%BB%E8%A1%A8%E6%A6%82%E8%A7%88">IO汇总表概览</a></li>
<li><a href="#%E4%BA%94%E5%A4%A7io%E6%A8%A1%E5%9E%8B%E7%8B%AD%E4%B9%89nio">五大IO模型（狭义NIO）</a></li>
<li><a href="#bio-%E9%98%BB%E5%A1%9Eio-blocking-io">BIO (阻塞I/O, blocking I/O)</a></li>
<li><a href="#nioio%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8-%E9%9D%9E%E9%98%BB%E5%A1%9Eio-noblocking-io">NIO/IO多路复用 (非阻塞I/O, noblocking I/O)</a>
<ul>
<li><a href="#bio%E4%B8%8Enio%E7%9A%84%E5%8C%BA%E5%88%AB">BIO与NIO的区别</a></li>
<li><a href="#nio%E4%B8%89%E5%A4%A7%E6%A0%B8%E5%BF%83%E7%BB%84%E4%BB%B6selector%E9%80%89%E6%8B%A9%E5%99%A8channel%E9%80%9A%E9%81%93buffer%E7%BC%93%E5%86%B2%E5%99%A8">NIO三大核心组件：Selector（选择器）、Channel（通道）、Buffer（缓冲器）</a></li>
<li><a href="#io%E5%A4%9A%E8%B7%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E4%B8%89%E7%A7%8D%E5%AE%9E%E7%8E%B0%E6%9C%BA%E5%88%B6">I/O多路复用的三种实现机制</a>
<ul>
<li><a href="#select%E4%B8%8Epoll">select与poll</a></li>
<li><a href="#epoll">epoll</a></li>
<li><a href="#%E6%AF%94%E8%BE%83">比较</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#aio-%E5%BC%82%E6%AD%A5ioasynchronous-io">AIO (异步I/O,Asynchronous I/O)</a></li>
</ul>
</li>
</ul>`,r:{minutes:16.52,words:4955},y:"a",t:"操作系统",i:"lightbulb"},["/zh/posts/cs/操作系统.html","/zh/posts/cs/操作系统.md",":md"]],["v-21c8383f","/zh/posts/cs/%E6%B5%8F%E8%A7%88%E5%99%A8%E6%8A%80%E8%83%BD.html",{d:172905854e4,e:`<h1> 浏览器技能</h1>
<h1> 快捷键</h1>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>切换下一个</td>
<td>Ctrl+Tab</td>
</tr>
<tr>
<td>关闭当前网页</td>
<td>Ctrl+W</td>
</tr>
<tr>
<td>恢复被关掉的网页</td>
<td>Ctrl+Shift+T</td>
</tr>
<tr>
<td>打开历史记录</td>
<td>Ctrl+H</td>
</tr>
</tbody>
</table>
<h1> 选择</h1>`,r:{minutes:3.3,words:990},y:"a",t:"浏览器技能",i:"lightbulb"},["/zh/posts/cs/浏览器技能.html","/zh/posts/cs/浏览器技能.md",":md"]],["v-75fde7aa","/zh/posts/cs/%E7%BD%91%E7%BB%9C.html",{d:172905854e4,e:`<h1> 网络</h1>
<ul>
<li><a href="#%E7%BD%91%E7%BB%9C">网络</a></li>
<li><a href="#%E5%BF%AB%E9%80%9F%E6%8E%8C%E6%8F%A1%E9%9D%A2%E8%AF%95">快速掌握面试</a>
<ul>
<li><a href="#1-%E7%BD%91%E7%BB%9C%E5%88%86%E5%B1%82osi%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8Btcpip%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B%E4%BA%94%E5%B1%82%E5%8F%82%E8%80%83%E6%A8%A1%E5%9E%8B-">1. 网络分层：OSI参考模型、TCP/IP参考模型、五层参考模型 </a></li>
<li><a href="#2-tcp%E4%B8%8Eudp%E5%8C%BA%E5%88%AB-">2. TCP与UDP区别 </a></li>
<li><a href="#3-tcp%E4%B8%89%E6%AC%A1%E6%8F%A1%E6%89%8B%E5%92%8C%E5%9B%9B%E6%AC%A1%E6%8C%A5%E6%89%8B-">3. TCP三次握手和四次挥手 </a></li>
<li><a href="#4-%E6%B5%8F%E8%A7%88%E5%99%A8%E8%BE%93%E5%85%A5url%E5%88%B0%E9%A1%B5%E9%9D%A2%E6%98%BE%E7%A4%BA%E7%9A%84%E8%BF%87%E7%A8%8B%E6%89%93%E5%BC%80%E7%BD%91%E9%A1%B5%E7%9A%84%E6%95%B4%E4%B8%AA%E8%BF%87%E7%A8%8B%E4%BC%9A%E4%BD%BF%E7%94%A8%E5%93%AA%E4%BA%9B%E5%8D%8F%E8%AE%AE-">4. 浏览器输入url到页面显示的过程（打开网页的整个过程会使用哪些协议） </a></li>
<li><a href="#5-%E7%8A%B6%E6%80%81%E7%A0%81-">5. 状态码 </a></li>
<li><a href="#6-http%E9%95%BF%E8%BF%9E%E6%8E%A5%E7%9F%AD%E8%BF%9E%E6%8E%A5-">6. HTTP长连接&amp;短连接 </a></li>
<li><a href="#7-http10-11-20-30%E7%9A%84%E5%8C%BA%E5%88%AB-">7. HTTP/1.0, 1.1, 2.0, 3.0的区别 </a></li>
<li><a href="#8-httphttps-">8. HTTP&amp;HTTPS </a></li>
<li><a href="#9-http%E4%B8%8Erpc%E7%9A%84%E5%8C%BA%E5%88%AB-">9. HTTP与RPC的区别 </a></li>
<li><a href="#10-cookiesession-">10. Cookie&amp;Session </a></li>
<li><a href="#11--uri%E5%92%8Curl%E7%9A%84%E5%8C%BA%E5%88%AB%E6%98%AF%E4%BB%80%E4%B9%88--">11.  URI和URL的区别是什么?  </a></li>
<li><a href="#12--getpost-">12.  GET&amp;POST </a></li>
<li><a href="#13--ipmac-">13.  IP&amp;MAC </a></li>
</ul>
</li>
<li><a href="#%E4%B8%80%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84">一、网络体系结构</a>
<ul>
<li><a href="#%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5">基本概念</a></li>
<li><a href="#%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84%E5%88%86%E5%B1%82%E7%BB%93%E6%9E%84">计算机网络体系结构——分层结构</a></li>
<li><a href="#%E6%80%A7%E8%83%BD%E6%8C%87%E6%A0%87">性能指标</a>
<ul>
<li><a href="#%E9%80%9F%E7%8E%87%E5%B8%A6%E5%AE%BD%E5%90%9E%E5%90%90%E9%87%8F">速率、带宽、吞吐量</a></li>
<li><a href="#%E6%97%B6%E5%BB%B6%E6%97%B6%E5%BB%B6%E5%B8%A6%E5%AE%BD%E7%A7%AF%E5%BE%80%E8%BF%94%E6%97%B6%E9%97%B4rtt%E5%88%A9%E7%94%A8%E7%8E%87">时延、时延带宽积、往返时间RTT、利用率</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E4%BA%8C%E4%BC%A0%E8%BE%93%E4%BB%8B%E8%B4%A8%E7%AC%AC0%E5%B1%82">二、传输介质（第0层）</a>
<ul>
<li><a href="#%E5%AF%BC%E5%90%91%E6%80%A7%E4%BC%A0%E8%BE%93%E4%BB%8B%E8%B4%A8">导向性传输介质</a>
<ul>
<li><a href="#%E5%8F%8C%E7%BB%9E%E7%BA%BF">双绞线</a></li>
<li><a href="#%E5%90%8C%E8%BD%B4%E7%94%B5%E7%BC%86">同轴电缆</a></li>
<li><a href="#%E5%85%89%E7%BA%A4">光纤</a></li>
</ul>
</li>
<li><a href="#%E9%9D%9E%E5%AF%BC%E5%90%91%E6%80%A7%E4%BC%A0%E8%BE%93%E4%BB%8B%E8%B4%A8">非导向性传输介质</a></li>
</ul>
</li>
<li><a href="#%E4%B8%89%E7%89%A9%E7%90%86%E5%B1%82%E7%AC%AC%E4%B8%80%E5%B1%82">三、物理层（第一层）</a>
<ul>
<li><a href="#%E7%89%A9%E7%90%86%E5%B1%82%E8%AE%BE%E5%A4%87">物理层设备</a>
<ul>
<li><a href="#%E4%B8%AD%E7%BB%A7%E5%99%A8">中继器</a></li>
<li><a href="#%E9%9B%86%E7%BA%BF%E5%99%A8">集线器</a></li>
</ul>
</li>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86">数据通信基础知识</a>
<ul>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E6%A8%A1%E5%9E%8B">数据通信模型</a></li>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E7%9B%B8%E5%85%B3%E6%9C%AF%E8%AF%AD">数据通信相关术语</a></li>
<li><a href="#%E6%95%B0%E6%8D%AE%E9%80%9A%E4%BF%A1%E6%96%B9%E5%BC%8F%E5%88%86%E7%B1%BB">数据通信方式分类</a>
<ul>
<li><a href="#%E5%8D%95%E5%B7%A5%E5%8D%8A%E5%8F%8C%E5%B7%A5%E5%85%A8%E5%8F%8C%E5%B7%A5%E9%80%9A%E4%BF%A1">单工、半双工、全双工通信</a></li>
<li><a href="#%E4%B8%B2%E8%A1%8C%E5%B9%B6%E8%A1%8C%E9%80%9A%E4%BF%A1">串行、并行通信</a></li>
<li><a href="#%E5%90%8C%E6%AD%A5%E5%BC%82%E6%AD%A5%E9%80%9A%E4%BF%A1">同步、异步通信</a></li>
</ul>
</li>
<li><a href="#%E6%95%B0%E6%8D%AE%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">数据交换方式</a>
<ul>
<li><a href="#%E7%94%B5%E8%B7%AF%E4%BA%A4%E6%8D%A2%E5%BB%BA%E7%AB%8B%E7%89%A9%E7%90%86%E8%BF%9E%E6%8E%A5%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">电路交换（建立物理连接交换方式）</a></li>
<li><a href="#%E6%8A%A5%E6%96%87%E4%BA%A4%E6%8D%A2%E5%AD%98%E5%82%A8%E8%BD%AC%E5%8F%91%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">报文交换（存储转发交换方式）</a></li>
<li><a href="#%E5%88%86%E7%BB%84%E4%BA%A4%E6%8D%A2%E5%AD%98%E5%82%A8%E8%BD%AC%E5%8F%91%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">分组交换（存储转发交换方式）</a>
<ul>
<li><a href="#%E6%95%B0%E6%8D%AE%E6%8A%A5%E6%96%B9%E5%BC%8F%E5%AD%98%E5%82%A8%E8%BD%AC%E5%8F%91%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">数据报方式（存储转发交换方式）</a></li>
<li><a href="#%E8%99%9A%E7%94%B5%E8%B7%AF%E6%96%B9%E5%BC%8F%E5%BB%BA%E7%AB%8B%E9%80%BB%E8%BE%91%E8%BF%9E%E6%8E%A5%E4%BA%A4%E6%8D%A2%E6%96%B9%E5%BC%8F">虚电路方式（建立逻辑连接交换方式）</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E7%A0%81%E5%85%83%E9%80%9F%E7%8E%87%E6%B3%A2%E7%89%B9%E5%B8%A6%E5%AE%BD">码元、速率、波特、带宽</a></li>
<li><a href="#%E5%A5%88%E6%B0%8F%E5%87%86%E5%88%99%E9%A6%99%E5%86%9C%E5%AE%9A%E7%90%86">奈氏准则&amp;香农定理</a></li>
<li><a href="#%E7%BC%96%E7%A0%81%E8%B0%83%E5%88%B6">编码&amp;调制</a>
<ul>
<li><a href="#%E7%BC%96%E7%A0%81%E8%BD%AC%E4%B8%BA%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7">编码（转为数字信号）</a>
<ul>
<li><a href="#%E6%95%B0%E5%AD%97%E6%95%B0%E6%8D%AE%E7%BC%96%E7%A0%81%E4%B8%BA%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7">数字数据编码为数字信号</a></li>
<li><a href="#%E6%A8%A1%E6%8B%9F%E6%95%B0%E6%8D%AE%E7%BC%96%E7%A0%81%E4%B8%BA%E6%95%B0%E5%AD%97%E4%BF%A1%E5%8F%B7">模拟数据编码为数字信号</a></li>
</ul>
</li>
<li><a href="#%E8%B0%83%E5%88%B6%E8%BD%AC%E4%B8%BA%E6%A8%A1%E6%8B%9F%E4%BF%A1%E5%8F%B7">调制（转为模拟信号）</a>
<ul>
<li><a href="#%E6%95%B0%E5%AD%97%E6%95%B0%E6%8D%AE%E8%B0%83%E5%88%B6%E4%B8%BA%E6%A8%A1%E6%8B%9F%E4%BF%A1%E5%8F%B7">数字数据调制为模拟信号</a></li>
<li><a href="#%E6%A8%A1%E6%8B%9F%E6%95%B0%E6%8D%AE%E8%B0%83%E5%88%B6%E4%B8%BA%E6%A8%A1%E6%8B%9F%E4%BF%A1%E5%8F%B7">模拟数据调制为模拟信号</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E5%9B%9B%E6%95%B0%E6%8D%AE%E9%93%BE%E8%B7%AF%E5%B1%82%E7%AC%AC%E4%BA%8C%E5%B1%82">四、数据链路层（第二层）</a>
<ul>
<li><a href="#%E9%93%BE%E8%B7%AF%E5%B1%82%E8%AE%BE%E5%A4%87">链路层设备</a>
<ul>
<li><a href="#%E7%BD%91%E6%A1%A5">网桥</a></li>
<li><a href="#%E4%BA%A4%E6%8D%A2%E6%9C%BA">交换机</a></li>
</ul>
</li>
<li><a href="#%E9%93%BE%E8%B7%AF%E5%B1%82%E7%9A%84%E5%8A%9F%E8%83%BD">链路层的功能</a>
<ul>
<li><a href="#%E5%B0%81%E8%A3%85%E6%88%90%E5%B8%A7%E9%80%8F%E6%98%8E%E4%BC%A0%E8%BE%93">封装成帧&amp;透明传输</a></li>
<li><a href="#%E5%B7%AE%E9%94%99%E6%8E%A7%E5%88%B6%E6%A3%80%E9%94%99%E7%BC%96%E7%A0%81">差错控制（检错编码）</a></li>
<li><a href="#%E6%B5%81%E9%87%8F%E6%8E%A7%E5%88%B6%E5%92%8C%E5%8F%AF%E9%9D%A0%E4%BC%A0%E8%BE%93%E6%9C%BA%E5%88%B6">流量控制和可靠传输机制</a></li>
</ul>
</li>
<li><a href="#%E9%93%BE%E8%B7%AF%E5%B1%82%E7%9A%84%E4%B8%A4%E7%A7%8D%E4%BF%A1%E9%81%93%E4%BB%8B%E8%B4%A8%E8%AE%BF%E9%97%AE%E6%8E%A7%E5%88%B6">链路层的两种信道&amp;介质访问控制</a></li>
<li><a href="#%E5%B1%80%E5%9F%9F%E7%BD%91">局域网</a>
<ul>
<li><a href="#%E5%B1%80%E5%9F%9F%E7%BD%91%E5%9F%BA%E6%9C%AC%E6%A6%82%E5%BF%B5%E5%92%8C%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84">局域网基本概念和体系结构</a></li>
<li><a href="#%E5%B1%80%E5%9F%9F%E7%BD%91%E7%9A%84%E5%88%86%E7%B1%BB">局域网的分类</a>
<ul>
<li><a href="#%E4%BB%A5%E5%A4%AA%E7%BD%918023">以太网802.3</a></li>
<li><a href="#%E6%97%A0%E7%BA%BF%E5%B1%80%E5%9F%9F%E7%BD%9180211">无线局域网802.11</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E5%B9%BF%E5%9F%9F%E7%BD%91">广域网</a>
<ul>
<li><a href="#%E5%B9%BF%E5%9F%9F%E7%BD%91%E4%BD%BF%E7%94%A8%E7%9A%84%E9%93%BE%E8%B7%AF%E5%B1%82%E5%8D%8F%E8%AE%AE">广域网使用的链路层协议</a>
<ul>
<li><a href="#ppp%E5%8D%8F%E8%AE%AE">PPP协议</a></li>
<li><a href="#hdlc%E5%8D%8F%E8%AE%AE">HDLC协议</a></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E4%BA%94%E7%BD%91%E7%BB%9C%E5%B1%82%E7%AC%AC%E4%B8%89%E5%B1%82">五、网络层（第三层）</a>
<ul>
<li><a href="#%E7%BD%91%E7%BB%9C%E5%B1%82%E8%AE%BE%E5%A4%87%E8%B7%AF%E7%94%B1%E5%99%A8">网络层设备——路由器</a></li>
<li><a href="#%E7%BD%91%E7%BB%9C%E5%B1%82%E7%9A%84%E5%8A%9F%E8%83%BD">网络层的功能</a>
<ul>
<li><a href="#%E8%B7%AF%E7%94%B1%E9%80%89%E6%8B%A9%E4%B8%8E%E5%88%86%E7%BB%84%E8%BD%AC%E5%8F%91">路由选择与分组转发</a></li>
<li><a href="#%E5%BC%82%E6%9E%84%E7%BD%91%E7%BB%9C%E4%BA%92%E8%81%94">异构网络互联</a></li>
<li><a href="#%E6%8B%A5%E5%A1%9E%E6%8E%A7%E5%88%B6">拥塞控制</a></li>
</ul>
</li>
<li><a href="#ipv4%E5%9C%B0%E5%9D%80">IPv4地址</a></li>
<li><a href="#ip%E6%95%B0%E6%8D%AE%E6%8A%A5%E6%A0%BC%E5%BC%8F">IP数据报格式</a></li>
<li><a href="#ip%E6%95%B0%E6%8D%AE%E6%8A%A5%E5%88%86%E7%89%87">IP数据报分片</a></li>
<li><a href="#%E7%BD%91%E7%BB%9C%E5%9C%B0%E5%9D%80%E8%BD%AC%E6%8D%A2nat">网络地址转换（NAT）</a></li>
<li><a href="#%E5%AD%90%E7%BD%91%E5%88%92%E5%88%86%E5%AD%90%E7%BD%91%E6%8E%A9%E7%A0%81">子网划分&amp;子网掩码</a></li>
<li><a href="#%E6%9E%84%E6%88%90%E8%B6%85%E7%BD%91%E6%97%A0%E5%88%86%E7%B1%BB%E7%BC%96%E5%9D%80%E6%96%B9%E6%B3%95cidr">构成超网（无分类编址方法CIDR）</a></li>
<li><a href="#ipv6">IPv6</a></li>
<li><a href="#%E7%A7%BB%E5%8A%A8ip">移动IP</a></li>
<li><a href="#ip%E7%BB%84%E6%92%AD">IP组播</a></li>
<li><a href="#%E5%8D%8F%E8%AE%AE">协议</a>
<ul>
<li><a href="#arp%E5%8D%8F%E8%AE%AE">ARP协议</a></li>
<li><a href="#dhcp%E5%8D%8F%E8%AE%AE">DHCP协议</a></li>
<li><a href="#icmp%E5%8D%8F%E8%AE%AE">ICMP协议</a></li>
<li><a href="#%E4%B8%89%E7%A7%8D%E8%B7%AF%E7%94%B1%E5%8D%8F%E8%AE%AE%E8%B7%AF%E7%94%B1%E7%AE%97%E6%B3%95">三种路由协议&amp;路由算法</a>
<ul>
<li><a href="#ospf%E5%8D%8F%E8%AE%AE%E5%8F%8A%E9%93%BE%E8%B7%AF%E7%8A%B6%E6%80%81%E7%AE%97%E6%B3%95">OSPF协议及链路状态算法</a></li>
<li><a href="#rip%E5%8D%8F%E8%AE%AE%E5%8F%8A%E8%B7%9D%E7%A6%BB%E5%90%91%E9%87%8F%E7%AE%97%E6%B3%95">RIP协议及距离向量算法</a></li>
<li><a href="#bgp%E5%8D%8F%E8%AE%AE">BGP协议</a></li>
</ul>
</li>
<li><a href="#igmp%E5%8D%8F%E8%AE%AE%E4%B8%8E%E7%BB%84%E6%92%AD%E8%B7%AF%E7%94%B1%E9%80%89%E6%8B%A9%E5%8D%8F%E8%AE%AE">IGMP协议与组播路由选择协议</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E5%85%AD%E4%BC%A0%E8%BE%93%E5%B1%82%E7%AC%AC%E5%9B%9B%E5%B1%82">六、传输层（第四层）</a>
<ul>
<li><a href="#tcp%E5%8D%8F%E8%AE%AE">TCP协议</a></li>
<li><a href="#udp%E5%8D%8F%E8%AE%AE">UDP协议</a></li>
</ul>
</li>
<li><a href="#%E4%B8%83%E5%BA%94%E7%94%A8%E5%B1%82%E7%AC%AC%E4%BA%94%E5%B1%82">七、应用层（第五层）</a>
<ul>
<li><a href="#%E7%BD%91%E7%BB%9C%E5%BA%94%E7%94%A8%E6%A8%A1%E5%9E%8B">网络应用模型</a>
<ul>
<li><a href="#cs">C/S</a></li>
<li><a href="#p2p">P2P</a></li>
</ul>
</li>
<li><a href="#%E4%B8%87%E7%BB%B4%E7%BD%91%E5%92%8Chttp%E5%8D%8F%E8%AE%AE">万维网和HTTP协议</a></li>
<li><a href="#%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90%E7%B3%BB%E7%BB%9Fdns">域名解析系统DNS</a></li>
<li><a href="#%E6%96%87%E4%BB%B6%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AEftp">文件传输协议FTP</a></li>
<li><a href="#%E7%94%B5%E5%AD%90%E9%82%AE%E4%BB%B6">电子邮件</a></li>
</ul>
</li>
</ul>`,r:{minutes:23.37,words:7010},y:"a",t:"网络",i:"lightbulb"},["/zh/posts/cs/网络.html","/zh/posts/cs/网络.md",":md"]],["v-2c792888","/zh/posts/cs/%E8%AE%A1%E7%AE%97%E6%9C%BA%E6%8A%80%E8%83%BD.html",{d:172905854e4,e:`<h1> 计算机技能</h1>
<h1> 常识</h1>
<p>1、每充满电后拔掉电源并不会保护电池，插上电源不会用电池，拔掉会用电池，反而对电池不好。能充电就一直充电，充着电用，才能发挥笔记本更高的性能</p>
<p>2、金山打字通练习打字 Note:有双拼，一个格子两个字母（做到不看键盘）</p>
<p>3、尽量用键盘快捷键，次用触摸板，最好不用鼠标（做到不用鼠标和触摸板）</p>
<p>4、浏览器的插件，快捷键，设置等（做到精通）</p>
<h1> 技巧</h1>
<p>1、C盘文件夹迁移</p>
<p>C盘容易爆满，把除系统文件以外的其他文件和文件夹放在其他盘，不要放C盘</p>
<p>把特殊文件夹（视频，图片，文档，下载等）从C盘移到其他盘：在其他盘新建同名文件夹，将C盘的特殊文件夹（右键-&gt;属性-&gt;位置）更换为其他盘的空文件夹位置</p>`,r:{minutes:3.45,words:1035},y:"a",t:"计算机技能",i:"lightbulb"},["/zh/posts/cs/计算机技能.html","/zh/posts/cs/计算机技能.md",":md"]],["v-e49de3e4","/zh/posts/docker/Docker.html",{d:172905854e4,e:`<h1> Docker</h1>
<h1> 运维工作进化论</h1>
<h2> 小试牛刀</h2>
<p> <br>
 <br></p>
<h2> 初露锋芒</h2>
<p> <br>
 <br>
 <br></p>
<h2> 小有名气</h2>
<p> <br>
 <br>
 <br></p>
<h2> 名动一方</h2>
<p> <br>
 <br>
 <br></p>
<h2> 一派宗师</h2>
<p> <br>
 <br></p>
<h2> 千古留名</h2>
<p> <br>
 <br></p>
<h1> 容器</h1>
<h2> 什么是容器</h2>
<p> <br>
 <br>
 <br>
 <br></p>`,r:{minutes:22.53,words:6758},y:"a",t:"Docker",i:"lightbulb"},[":md"]],["v-622f149e","/zh/posts/docker/K8S.html",{d:172905854e4,e:`<h1> K8S</h1>
<p> <br>
 <br>
 <br></p>
<p>changeset  优点：1.分发  2.复用 <br></p>
`,r:{minutes:.12,words:37},y:"a",t:"K8S",i:"lightbulb"},[":md"]],["v-370085d6","/zh/posts/java/Java8%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html",{d:172905854e4,e:`<h1> Java8学习笔记</h1>
<ul>
<li><a href="#java8%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0">Java8学习笔记</a></li>
<li><a href="#%E4%B8%80%E8%A1%8C%E4%B8%BA%E5%8F%82%E6%95%B0%E5%8C%96">一、行为参数化</a></li>
<li><a href="#%E4%BA%8Clambda%E8%A1%A8%E8%BE%BE%E5%BC%8F">二、Lambda表达式</a></li>
<li><a href="#%E4%B8%89%E5%87%BD%E6%95%B0%E5%BC%8F%E6%8E%A5%E5%8F%A3">三、函数式接口</a></li>
<li><a href="#%E5%9B%9B%E6%96%B9%E6%B3%95%E5%BC%95%E7%94%A8">四、方法引用</a></li>
<li><a href="#%E4%BA%94stream-api">五、Stream API</a></li>
<li><a href="#%E5%85%ADoptional%E7%B1%BB">六、Optional类</a></li>
<li><a href="#%E4%B8%83%E4%B8%BE%E4%BE%8B">七、举例</a></li>
<li><a href="#50jdk18-%E9%83%BD%E6%9C%89%E5%93%AA%E4%BA%9B%E6%96%B0%E7%89%B9%E6%80%A7-">50.JDK1.8 都有哪些新特性？ </a></li>
<li><a href="#51lambda-%E8%A1%A8%E8%BE%BE%E5%BC%8F%E4%BA%86%E8%A7%A3%E5%A4%9A%E5%B0%91">51.Lambda 表达式了解多少？</a></li>
<li><a href="#52optional-%E4%BA%86%E8%A7%A3%E5%90%97">52.Optional 了解吗？</a></li>
<li><a href="#53stream-%E6%B5%81%E7%94%A8%E8%BF%87%E5%90%97">53.Stream 流用过吗？</a></li>
</ul>`,r:{minutes:13.94,words:4183},y:"a",t:"Java8学习笔记",i:"lightbulb"},["/zh/posts/java/Java8学习笔记.html","/zh/posts/java/Java8学习笔记.md",":md"]],["v-0cb3bd10","/zh/posts/java/%E5%9F%BA%E7%A1%80.html",{d:172905854e4,e:`<h1> 基础</h1>
<ul>
<li><a href="#%E5%9F%BA%E7%A1%80">基础</a></li>
<li><a href="#%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1">面向对象</a>
<ul>
<li><a href="#1java-%E8%AF%AD%E8%A8%80%E6%9C%89%E5%93%AA%E4%BA%9B%E7%89%B9%E7%82%B9">1、Java 语言有哪些特点？</a></li>
<li><a href="#2%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1">2、面向对象</a>
<ul>
<li><a href="#1%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%8E%E9%9D%A2%E5%90%91%E8%BF%87%E7%A8%8B%E5%A4%84%E7%90%86%E9%97%AE%E9%A2%98%E7%9A%84%E4%B8%8D%E5%90%8C%E8%A7%92%E5%BA%A6">（1）面向对象与面向过程（处理问题的不同角度）</a></li>
<li><a href="#2%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E4%B8%89%E5%A4%A7%E7%89%B9%E6%80%A7%E5%B0%81%E8%A3%85%E7%BB%A7%E6%89%BF%E5%A4%9A%E6%80%81">（2）面向对象三大特性：封装、继承、多态</a></li>
<li><a href="#3%E5%B0%81%E8%A3%85">（3）封装</a>
<ul>
<li><a href="#%E8%AE%BF%E9%97%AE%E4%BF%AE%E9%A5%B0%E7%AC%A6">访问修饰符</a></li>
</ul>
</li>
<li><a href="#4%E7%BB%A7%E6%89%BF">（4）继承</a></li>
<li><a href="#5%E5%A4%9A%E6%80%81">（5）多态</a>
<ul>
<li><a href="#%E9%87%8D%E8%BD%BD%E4%B8%8E%E9%87%8D%E5%86%99">重载与重写</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#3%E6%8E%A5%E5%8F%A3%E4%B8%8E%E6%8A%BD%E8%B1%A1%E7%B1%BB">3、接口与抽象类</a></li>
<li><a href="#4object%E7%B1%BB%E7%9A%84%E6%96%B9%E6%B3%95">4、Object类的方法</a></li>
<li><a href="#5final%E5%85%B3%E9%94%AE%E5%AD%97">5、final关键字</a></li>
<li><a href="#6finalfinallyfinalize%E7%9A%84%E5%8C%BA%E5%88%AB">6、final、finally、finalize的区别</a></li>
<li><a href="#7%E4%B8%8Eequals">7、==与equals</a></li>
<li><a href="#8hashcode%E4%B8%8Eequals">8、hashCode与equals</a></li>
<li><a href="#9%E6%B7%B1%E6%8B%B7%E8%B4%9D%E4%B8%8E%E6%B5%85%E6%8B%B7%E8%B4%9D">9、深拷贝与浅拷贝</a></li>
<li><a href="#10java%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%96%B9%E5%BC%8F">10、Java创建对象的方式</a></li>
<li><a href="#11new%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1%E7%9A%84%E8%BF%87%E7%A8%8B%E4%BA%86%E8%A7%A3%E5%90%97">11、new创建对象的过程了解吗？</a></li>
<li><a href="#12%E5%8F%8D%E5%B0%84%E6%9C%BA%E5%88%B6">12、反射机制</a></li>
<li><a href="#13%E5%BA%8F%E5%88%97%E5%8C%96">13、序列化</a>
<ul>
<li><a href="#%E4%BB%80%E4%B9%88%E6%98%AF%E5%BA%8F%E5%88%97%E5%8C%96%E4%BB%80%E4%B9%88%E6%98%AF%E5%8F%8D%E5%BA%8F%E5%88%97%E5%8C%96">什么是序列化？什么是反序列化？</a></li>
<li><a href="#%E8%AF%B4%E8%AF%B4%E6%9C%89%E5%87%A0%E7%A7%8D%E5%BA%8F%E5%88%97%E5%8C%96%E6%96%B9%E5%BC%8F">说说有几种序列化方式？</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">数据类型</a>
<ul>
<li><a href="#1java%E6%9C%89%E5%93%AA%E4%BA%9B%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">1、Java有哪些数据类型</a></li>
<li><a href="#2%E8%87%AA%E5%8A%A8%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2%E5%BC%BA%E5%88%B6%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2">2、自动类型转换&amp;强制类型转换</a></li>
<li><a href="#3%E8%87%AA%E5%8A%A8%E6%8B%86%E7%AE%B1%E8%87%AA%E5%8A%A8%E8%A3%85%E7%AE%B1">3、自动拆箱&amp;自动装箱</a></li>
<li><a href="#4switch-case%E7%9A%84%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8F%AF%E4%BB%A5%E6%98%AF%E4%BB%80%E4%B9%88%E7%B1%BB%E5%9E%8B">4、switch case的表达式可以是什么类型？</a></li>
<li><a href="#5string-%E7%B1%BB%E5%8F%AF%E4%BB%A5%E8%A2%AB%E7%BB%A7%E6%89%BF%E5%90%97">5、String 类可以被继承吗？</a></li>
<li><a href="#6stringstringbuffer%E4%B8%8Estringbuilder">6、String、StringBuffer与StringBuilder</a></li>
<li><a href="#7string-str1--new-stringabc%E5%92%8C-string-str2--abc-%E7%9A%84%E5%8C%BA%E5%88%AB">7、String str1 = new String("abc")和 String str2 = "abc" 的区别？</a></li>
<li><a href="#8%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%8B%BC%E6%8E%A5jdk18%E4%BC%98%E5%8C%96">8、字符串拼接jdk1.8优化</a></li>
<li><a href="#9integer-a-127integer-b--127integer-c-128integer-d--128%E7%9B%B8%E7%AD%89%E5%90%97">9、Integer a= 127，Integer b = 127；Integer c= 128，Integer d = 128；，相等吗?</a></li>
<li><a href="#10double%E4%B8%8Ebigdecimal">10、double与BigDecimal</a></li>
<li><a href="#11%E6%B3%9B%E5%9E%8B%E7%B1%BB%E5%9E%8B%E5%8F%82%E6%95%B0%E5%8C%96">11、泛型（类型参数化）</a></li>
</ul>
</li>
<li><a href="#%E5%BC%82%E5%B8%B8">异常</a>
<ul>
<li><a href="#1java%E4%B8%AD%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E4%BD%93%E7%B3%BB">1、Java中异常处理体系</a></li>
<li><a href="#2%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E6%96%B9%E5%BC%8F">2、异常处理方式</a></li>
<li><a href="#3%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E8%A6%81%E7%82%B9">3、异常处理要点</a></li>
<li><a href="#4%E4%B8%89%E9%81%93%E7%BB%8F%E5%85%B8%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86%E4%BB%A3%E7%A0%81%E9%A2%98">4、三道经典异常处理代码题</a></li>
</ul>
</li>
</ul>`,r:{minutes:24.5,words:7350},y:"a",t:"基础",i:"lightbulb"},["/zh/posts/java/基础.html","/zh/posts/java/基础.md",":md"]],["v-3555b5c0","/zh/posts/java/%E9%9B%86%E5%90%88.html",{d:172905854e4,e:`<h1> 集合</h1>
<ul>
<li><a href="#%E9%9B%86%E5%90%88">集合</a></li>
<li><a href="#%E4%BA%8C%E9%9B%86%E5%90%88">二、集合</a>
<ul>
<li><a href="#%E4%B8%80comparator%E4%B8%8Ecomparable%E5%AE%9E%E7%8E%B0%E8%87%AA%E5%AE%9A%E4%B9%89%E7%B1%BB%E6%8E%92%E5%BA%8F">（一）Comparator与Comparable实现自定义类排序</a></li>
<li><a href="#%E4%BA%8Clist-%E5%AF%B9%E4%BB%98%E9%A1%BA%E5%BA%8F%E7%9A%84%E5%A5%BD%E5%B8%AE--set-%E6%B3%A8%E9%87%8D%E7%8B%AC%E7%9A%84%E6%80%A7%E8%B4%A8--map-key%E6%9D%A5%E6%90%9C%E7%B4%A2%E7%9A%84%E4%B8%93%E5%AE%B6">（二）List (对付顺序的好帮⼿)  、Set (注重独⼀⽆⼆的性质)  、Map (⽤Key来搜索的专家)</a></li>
<li><a href="#%E4%B8%89arraylist%E5%BA%95%E5%B1%82%E6%98%AFobject%E6%95%B0%E7%BB%84linkedlist%E5%BA%95%E5%B1%82%E6%98%AF%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8%E4%B8%8Evector%E4%BF%9D%E8%AF%81%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E8%80%8Carraylist%E4%B8%8Elinkedlist%E4%B8%8D%E4%BF%9D%E8%AF%81%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8">（三）ArrayList（底层是Object数组）、LinkedList（底层是双向链表）与Vector（保证线程安全，而ArrayList与LinkedList不保证线程安全）</a></li>
<li><a href="#%E5%9B%9Bhashmaphashtablehashsetconcurrenthashmaplinkedhashmaptreemap">（四）HashMap、Hashtable、HashSet、ConcurrentHashMap、LinkedHashMap、TreeMap</a>
<ul>
<li><a href="#1hashmap%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8">（1）HashMap（⾮线程安全）</a></li>
<li><a href="#2hashtable%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E6%98%AF%E5%85%A8%E8%A1%A8%E9%94%81%E6%80%A7%E8%83%BD%E5%B7%AE-%E5%9F%BA%E6%9C%AC%E8%A2%AB%E6%B7%98%E6%B1%B0">（2）HashTable（线程安全，是全表锁，性能差， 基本被淘汰）</a></li>
<li><a href="#3hashset%E5%BA%95%E5%B1%82%E5%B0%B1%E6%98%AF%E5%9F%BA%E4%BA%8Ehashmap%E5%AE%9E%E7%8E%B0%E7%9A%84%E6%A3%80%E6%9F%A5%E9%87%8D%E5%A4%8D%E6%97%B6%E5%85%88%E7%94%A8hashcode%E5%90%8E%E7%94%A8equals">（3）HashSet（底层就是基于HashMap实现的，检查重复时，先用hashcode()，后用equals()）</a></li>
<li><a href="#4concurrenthashmap">（4）ConcurrentHashMap</a></li>
<li><a href="#5linkedhashmap">（5）LinkedHashMap</a></li>
<li><a href="#6treemap-%E7%BA%A2%E6%A0%91%E5%B9%B3%E8%A1%A1%E7%9A%84%E6%8E%92%E5%BA%8F%E5%8F%89%E6%A0%91">（6）TreeMap： 红⿊树(⾃平衡的排序⼆叉树)</a></li>
</ul>
</li>
<li><a href="#%E4%BA%94copyonwritearraylist%E9%81%BF%E5%85%8D%E5%B9%B6%E5%8F%91%E4%BF%AE%E6%94%B9%E5%BC%82%E5%B8%B8">（五）CopyOnWriteArrayList避免并发修改异常</a></li>
<li><a href="#%E5%85%AD%E6%8A%8A%E9%9B%86%E5%90%88%E5%8C%85%E8%A3%85%E6%88%90%E7%BA%BF%E7%A8%8B%E5%AE%89%E5%85%A8%E7%9A%84">（六）把集合包装成线程安全的</a></li>
</ul>
</li>
</ul>`,r:{minutes:6.51,words:1952},y:"a",t:"集合",i:"lightbulb"},["/zh/posts/java/集合.html","/zh/posts/java/集合.md",":md"]],["v-1ca090cd","/zh/posts/frontend/AntDesign.html",{d:172905854e4,e:`<h1> AntDesign</h1>
<p><a href="https://preview.pro.ant.design/dashboard/analysis" target="_blank" rel="noopener noreferrer">Ant Design Pro Preview</a> <br>
<a href="https://pro.ant.design/" target="_blank" rel="noopener noreferrer">Ant Design Pro</a> <br>
<a href="https://procomponents.ant.design/" target="_blank" rel="noopener noreferrer">ProComponents</a> <br>
<a href="https://www.eggjs.org/" target="_blank" rel="noopener noreferrer">EggJS-企业级Node.js开发框架</a> <br>
<a href="https://github.com/websemantics/awesome-ant-design" target="_blank" rel="noopener noreferrer">https://github.com/websemantics/awesome-ant-design</a> <br></p>`,r:{minutes:.14,words:41},y:"a",t:"AntDesign",i:"lightbulb"},[":md"]],["v-da44b262","/zh/posts/frontend/CSS.html",{d:172905854e4,e:`<h1> CSS</h1>
<h1> Resolution</h1>
<p>内容超出了页面，看不到底部的内容了，如何加上滚轴？ <br>
overflow-y: auto !important; <br></p>
<h1> Knowledge</h1>
<p>1、引入样式表（3种方式） <br></p>
<ul>
<li>内联样式- 在HTML元素中使用"style"<strong>属性</strong> <br></li>
<li>内部样式表 -在HTML文档头部 &lt;head&gt; 区域使用&lt;style&gt;<strong>元素</strong> 来包含CSS <br></li>
<li>外部样式表 - 使用外部 CSS<strong>文件</strong>，在HTML文档头部 &lt;head&gt; 区域使用&lt;link&gt;引入 <br></li>
</ul>`,r:{minutes:1.31,words:394},y:"a",t:"CSS",i:"lightbulb"},[":md"]],["v-5eb4972e","/zh/posts/frontend/Expo.html",{d:172905854e4,e:`<h1> Expo</h1>
<p>expo <br>
<a href="https://expo.dev/tools" target="_blank" rel="noopener noreferrer">https://expo.dev/tools</a> <br>
expo snack
<a href="https://snack.expo.dev/" target="_blank" rel="noopener noreferrer">https://snack.expo.dev/</a> <br>
 <br></p>
<p><a href="https://www.newline.co/30-days-of-react-native" target="_blank" rel="noopener noreferrer">https://www.newline.co/30-days-of-react-native</a> <br>
这里展示了用expo的教学 <br></p>`,r:{minutes:.15,words:45},y:"a",t:"Expo",i:"lightbulb"},[":md"]],["v-715d7b8e","/zh/posts/frontend/Frontend.html",{d:172905854e4,e:`<h1> Frontend</h1>
<p><a href="https://www.yuque.com/fe9/basic" target="_blank" rel="noopener noreferrer">前端九部——入门者手册</a> <br>
<a href="https://www.yuque.com/fe9/select" target="_blank" rel="noopener noreferrer">前端九部——精选集</a> <br>
<a href="https://github.com/frontend9" target="_blank" rel="noopener noreferrer">前端九部github</a> <br>
<a href="https://github.com/zenany/zenany.github.io/blob/master/_posts/about_frontend.md" target="_blank" rel="noopener noreferrer">前端开发漫游指南</a> <br>
<a href="https://www.yuque.com/mind-palace" target="_blank" rel="noopener noreferrer">大猫智库</a> <br>
<a href="https://segmentfault.com/a/1190000007326671" target="_blank" rel="noopener noreferrer">前端跨域整理</a> <br>
<a href="https://segmentfault.com/a/1190000006672214" target="_blank" rel="noopener noreferrer">WEB前端安全那些事儿</a> <br>
<a href="https://github.com/xiaosansiji/cookbook-of-webdev/blob/master/performance-optimization/index.md" target="_blank" rel="noopener noreferrer">Web站点性能优化</a> <br>
<a href="http://www.ruanyifeng.com/blog/2016/08/http.html" target="_blank" rel="noopener noreferrer">阮一峰HTTP协议入门</a> <br>
<a href="https://blog.csdn.net/nanjingshida/article/details/72775687" target="_blank" rel="noopener noreferrer">chrome调试技巧</a> <br>
脚手架：<a href="https://github.com/sorrycc/roadhog" target="_blank" rel="noopener noreferrer">https://github.com/sorrycc/roadhog</a> <br>
roadmap	<a href="https://github.com/kamranahmedse/developer-roadmap" target="_blank" rel="noopener noreferrer">https://github.com/kamranahmedse/developer-roadmap</a> <br>
HTML+CSS+JavaScript ES6+Typescript+Less+React+Nodejs+Npm+Webpack <br>
路线图创建	<a href="https://balsamiq.com/wireframes/desktop/" target="_blank" rel="noopener noreferrer">https://balsamiq.com/wireframes/desktop/</a> <br></p>`,r:{minutes:6.51,words:1952},y:"a",t:"Frontend",i:"lightbulb"},[":md"]],["v-08a3dd35","/zh/posts/frontend/HTML.html",{d:172905854e4,e:`<h1> HTML</h1>
<p>超文本标记语言（英语：HyperText Markup Language，简称：HTML） <br>
<a href="https://www.runoob.com/tags/ref-byfunc.html" target="_blank" rel="noopener noreferrer">HTML参考手册-菜鸟教程</a> <br>
<a href="https://www.runoob.com/html/html-tutorial.html" target="_blank" rel="noopener noreferrer">HTML菜鸟教程</a> <br>
使用技巧 <br>
1、查看网页源代码：鼠标右键，选择“查看网页源代码” <br>
<em>2、VS Code 和 Sublime Text 还可以配合 Emmet 插件来提高编码速度。</em> <br>
<em>Emmet 官网：</em><a href="http://emmet.io/" target="_blank" rel="noopener noreferrer">http://emmet.io/</a> <br></p>`,r:{minutes:3.75,words:1126},y:"a",t:"HTML",i:"lightbulb"},[":md"]],["v-0b927333","/zh/posts/frontend/JavaScript.html",{d:172905854e4,e:`<h1> JavaScript</h1>
<p>github <br>
<a href="https://github.com/Asabeneh/30-Days-Of-JavaScript" target="_blank" rel="noopener noreferrer">https://github.com/Asabeneh/30-Days-Of-JavaScript</a> <br>
<a href="https://github.com/biaochenxuying/blog" target="_blank" rel="noopener noreferrer">https://github.com/biaochenxuying/blog</a> <br>
<a href="https://github.com/course-dasheng/fe-algorithm" target="_blank" rel="noopener noreferrer">https://github.com/course-dasheng/fe-algorithm</a> <br></p>`,r:{minutes:2.99,words:898},y:"a",t:"JavaScript",i:"lightbulb"},[":md"]],["v-7a271a05","/zh/posts/frontend/Practice.html",{d:172905854e4,e:`<h1> 简书实践</h1>
<h1> 课程导学</h1>
<p><a href="https://coding.imooc.com/class/229.html#Anchor" target="_blank" rel="noopener noreferrer">https://coding.imooc.com/class/229.html#Anchor</a> <br></p>
<h2> 课程内容</h2>
<p> <br></p>
<h2> 项目</h2>
<p> <br></p>
<h2> 技术点</h2>
<p> <br></p>
<h2> 学习前提</h2>
<p> <br></p>`,r:{minutes:30.49,words:9146},y:"a",t:"简书实践",i:"lightbulb"},[":md"]],["v-7c7612da","/zh/posts/frontend/React.html",{d:172905854e4,e:`<h1> React</h1>
<p>学习资源 <br>
官方文档	<a href="https://zh-hans.reactjs.org/" target="_blank" rel="noopener noreferrer">https://zh-hans.reactjs.org/</a> <br>
菜鸟教程	<a href="https://www.runoob.com/react/react-tutorial.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/react/react-tutorial.html</a> <br>
项目实战：<a href="https://coding.imooc.com/class/229.html#Anchor" target="_blank" rel="noopener noreferrer">https://coding.imooc.com/class/229.html#Anchor</a> <br></p>`,r:{minutes:1.45,words:435},y:"a",t:"React",i:"lightbulb"},[":md"]],["v-3022e6c7","/zh/posts/frontend/npm.html",{d:172905854e4,e:`<h1> NPM</h1>
<h1> <a href="https://cloud.tencent.com/developer/article/1372949" target="_blank" rel="noopener noreferrer">npm使用国内镜像加速</a></h1>
<p> <br>
npm install有依赖问题，可以尝试 <br></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install --legacy-peer-deps &lt;br/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.69,words:1407},y:"a",t:"NPM",i:"lightbulb"},[":md"]],["v-9874ca08","/zh/posts/juc/juc.html",{d:172905854e4,e:`<h1> JUC</h1>
<p><a href="./JUC.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"JUC",i:"lightbulb"},[":md"]],["v-197f6a6a","/zh/posts/jvm/jvm.html",{d:172905854e4,e:`<h1> JVM</h1>
<p><a href="./JVM.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"JVM",i:"lightbulb"},[":md"]],["v-72f36506","/zh/posts/langchain/langchain.html",{d:17064e8,l:"2024年1月28日",c:["LLM"],g:["LLM"],u:!0,e:`<h1> 一文带你了解LangChain: 使用大语言模型构建强大的应用程序</h1>
<blockquote>
<p>从架构图入手，一步步带你了解LangChain的方方面面</p>
</blockquote>
<ul>
<li>
<ol>
<li>LangChain是什么</li>
</ol>
</li>
<li>
<ol start="2">
<li>LangChain的架构图告诉了我们什么信息</li>
</ol>
</li>
<li>
<ol start="3">
<li>你不得不知的一些核心模块</li>
</ol>
</li>
<li>
<ol start="4">
<li>通过简单的示例代码感受下各模块的作用</li>
</ol>
</li>
</ul>
`,r:{minutes:5.69,words:1706},y:"a",t:"一文带你了解LangChain: 使用大语言模型构建强大的应用程序",i:"lightbulb"},[":md"]],["v-06df26f4","/zh/posts/langchain/langchain_source_code.html",{d:17064864e5,l:"2024年1月29日",c:["LLM"],g:["LLM"],u:!0,e:`<h1> 从源码视角，窥探LangChain的运行逻辑</h1>
<blockquote>
<p>通过解读Chain的源码和AgentExecutor的源码，带你了解各个模块是如何关联在一起的</p>
</blockquote>
<ul>
<li>
<ol>
<li>LangChain的基类</li>
</ol>
</li>
<li>
<ol start="2">
<li>LCEL与Runnable</li>
</ol>
</li>
<li>
<ol start="3">
<li>Chain</li>
</ol>
</li>
<li>
<ol start="4">
<li>AgentExecutor</li>
</ol>
</li>
</ul>
`,r:{minutes:5.35,words:1606},y:"a",t:"从源码视角，窥探LangChain的运行逻辑",i:"lightbulb"},[":md"]],["v-733043fc","/zh/posts/langchain/streamlit.html",{d:17084736e5,l:"2024年2月21日",c:["LLM"],g:["LLM"],e:`<h1> streamlit构建对话式应用程序</h1>
<ul>
<li>
<ol>
<li>构建对话界面所需的组件</li>
</ol>
</li>
<li>
<ol start="2">
<li>对话界面完整流程</li>
</ol>
</li>
<li>
<ol start="3">
<li>流式输出assistant消息的改造</li>
</ol>
</li>
<li>
<ol start="4">
<li>构建封装ChatGPT的应用</li>
</ol>
</li>
</ul>
`,r:{minutes:1.9,words:570},y:"a",t:"streamlit构建对话式应用程序",i:"lightbulb"},[":md"]],["v-75c09644","/zh/posts/linux/linux.html",{d:172905854e4,e:`<h1> Linux</h1>
<p><a href="./Linux.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"Linux",i:"lightbulb"},[":md"]],["v-507721e2","/zh/posts/micro_service/MicroService.html",{d:172905854e4,e:`<h1> 微服务</h1>
<h2> 1、对微服务的理解</h2>
<p>按业务拆分，每个服务只关注一个业务，具有独立性，独立进程，独立部署，独立数据存储</p>
<h2> 2、服务注册与服务发现、以及服务间调用</h2>
<p>相关概念：服务与实例</p>
<p>服务名称：每个服务在服务注册中心的标识，相当于Java中的类名。
服务实例：网络中提供服务的实例，具有IP和端口，相当于Java中的对象，一个实例即为运行在服务器上的一个进
程。</p>
<p>场景：</p>
<p>注册中心（服务端）</p>
<p>服务A有多实例，实现了负载均衡（作为客户端，注册到注册中心）</p>
<p>服务B有多实例，实现了负载均衡（作为客户端，注册到注册中心）</p>`,r:{minutes:5.89,words:1767},y:"a",t:"微服务",i:"lightbulb"},[":md"]],["v-05f799b6","/zh/posts/micro_service/MybatisPlus.html",{d:172905854e4,e:`<h1> Mybatis Plus</h1>
<p>MyBatis-Plus（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。</p>
<p>特性：

架构：
</p>
`,r:{minutes:.18,words:54},y:"a",t:"Mybatis Plus",i:"lightbulb"},[":md"]],["v-d5206da4","/zh/posts/mq/mq.html",{d:172905854e4,e:`<h1> RocketMQ</h1>
<p><a href="./RocketMQ.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"RocketMQ",i:"lightbulb"},[":md"]],["v-03bf6cc8","/zh/posts/mysql/SQL.html",{d:172905854e4,e:`<h1> SQL</h1>
<ul>
<li><a href="#sql">SQL</a></li>
<li><a href="#sql-1">SQL</a>
<ul>
<li><a href="#%E5%85%B3%E8%81%94%E6%9F%A5%E8%AF%A2">关联查询</a></li>
<li><a href="#having%E4%B8%8Ewhere">having与where</a></li>
<li><a href="#%E6%B7%BB%E5%8A%A0%E4%B8%80%E5%88%97">添加一列</a></li>
<li><a href="#%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0">聚合函数</a></li>
<li><a href="#%E7%AA%97%E5%8F%A3%E5%87%BD%E6%95%B0-%E6%B7%BB%E5%8A%A0%E6%8E%92%E5%90%8D%E5%88%97%E6%8E%92%E5%90%8Dtop-n">窗口函数-添加排名列(排名，top n)</a>
<ul>
<li><a href="#%E7%AA%97%E5%8F%A3%E5%87%BD%E6%95%B0-%E5%85%B3%E9%94%AE%E5%AD%97overpartitionorder">窗口函数 关键字：over,partition,order</a></li>
<li><a href="#%E6%8E%92%E5%90%8D-rankdense_rankrow_number">排名 rank,dense_rank,row_number</a></li>
<li><a href="#%E8%81%9A%E5%90%88%E5%87%BD%E6%95%B0%E4%BD%9C%E4%B8%BA%E7%AA%97%E5%8F%A3%E5%87%BD%E6%95%B0">聚合函数作为窗口函数</a></li>
</ul>
</li>
<li><a href="#%E9%A1%BA%E5%BA%8F">顺序</a></li>
<li><a href="#%E5%8E%BB%E9%87%8Ddistinct">去重distinct</a></li>
<li><a href="#%E5%8C%85%E5%90%ABin">包含in</a></li>
<li><a href="#%E5%AD%97%E7%AC%A6%E4%B8%B2%E5%A4%84%E7%90%86">字符串处理</a>
<ul>
<li><a href="#%E5%AD%90%E4%B8%B2-substrstrstart-------substrstrstartlen">子串 substr(str,start)   |    substr(str,start,len)</a></li>
<li><a href="#%E5%AD%90%E4%B8%B2-leftstrlen---rightstrlen">子串 left(str,len)  | right(str,len)</a></li>
<li><a href="#%E5%8F%8D%E8%BD%AC-reversestr">反转 reverse(str)</a></li>
<li><a href="#%E6%8B%BC%E6%8E%A5-concat">拼接 concat</a></li>
</ul>
</li>
<li><a href="#%E6%97%B6%E9%97%B4%E5%A4%84%E7%90%86">时间处理</a>
<ul>
<li><a href="#%E8%AE%A1%E7%AE%97%E6%97%B6%E9%97%B4%E5%B7%AE-timestampdiff%E8%AE%A1%E7%AE%97%E7%B2%92%E5%BA%A6%E5%BC%80%E5%A7%8B%E6%97%B6%E9%97%B4%E7%BB%93%E6%9D%9F%E6%97%B6%E9%97%B4">计算时间差 timestampdiff(计算粒度,开始时间,结束时间)</a></li>
</ul>
</li>
<li><a href="#%E5%9B%9B%E8%88%8D%E4%BA%94%E5%85%A5%E4%B8%8E%E5%8F%96%E6%95%B4">四舍五入与取整</a></li>
</ul>
</li>
<li><a href="#other">other</a>
<ul>
<li><a href="#1distinct%E5%85%B3%E9%94%AE%E5%AD%97%E5%BF%85%E9%A1%BB%E7%9B%B4%E6%8E%A5%E6%94%BE%E5%9C%A8%E5%88%97%E5%90%8D%E7%9A%84%E5%89%8D%E9%9D%A2%E5%85%B3%E9%94%AE%E5%AD%97%E4%BD%9C%E7%94%A8%E4%BA%8E%E6%89%80%E6%9C%89%E8%A6%81%E6%9F%A5%E7%9A%84%E5%88%97-">1.Distinct关键字（必须直接放在列名的前面；关键字作用于所有要查的列） </a></li>
<li><a href="#2%E8%A1%8C%E6%95%B0%E9%99%90%E5%88%B6-">2.行数限制： </a></li>
<li><a href="#3%E6%B3%A8%E9%87%8A-">3.	注释 </a></li>
<li><a href="#4%E6%8E%92%E5%BA%8F-">4.	排序 </a></li>
<li><a href="#5where-">5.	Where </a></li>
<li><a href="#6%E9%80%9A%E9%85%8D%E7%AC%A6%E7%94%A8%E6%9D%A5%E5%8C%B9%E9%85%8D%E5%80%BC%E7%9A%84%E4%B8%80%E9%83%A8%E5%88%86%E7%9A%84%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6-">6.	通配符（用来匹配值的一部分的特殊字符） </a></li>
<li><a href="#7%E6%8B%BC%E6%8E%A5%E5%AD%97%E6%AE%B5-">7.	拼接字段 </a></li>
<li><a href="#8%E8%81%9A%E9%9B%86%E5%87%BD%E6%95%B0-">8.	聚集函数 </a></li>
<li><a href="#9%E5%88%86%E7%BB%84%E6%95%B0%E6%8D%AE-">9.分组数据 </a></li>
<li><a href="#10select%E5%AD%90%E5%8F%A5%E5%8F%8A%E5%85%B6%E9%A1%BA%E5%BA%8F-">10.Select子句及其顺序 </a></li>
<li><a href="#11%E5%AD%90%E6%9F%A5%E8%AF%A2note%E4%BD%9C%E4%B8%BA%E5%AD%90%E6%9F%A5%E8%AF%A2%E7%9A%84select%E8%AF%AD%E5%8F%A5%E5%8F%AA%E8%83%BD%E6%9F%A5%E8%AF%A2%E5%8D%95%E4%B8%AA%E5%88%97%E4%BC%81%E5%9B%BE%E6%A3%80%E7%B4%A2%E5%A4%9A%E4%B8%AA%E5%88%97%E5%B0%86%E8%BF%94%E5%9B%9E%E9%94%99%E8%AF%AF%E5%AD%90%E6%9F%A5%E8%AF%A2%E5%B8%B8%E7%94%A8%E4%BA%8Ewhere%E5%AD%90%E5%8F%A5%E7%9A%84in%E6%93%8D%E4%BD%9C%E7%AC%A6%E4%B8%AD-">11.子查询（NOTE:作为子查询的SELECT语句只能查询单个列。企图检索多个列将返回错误。子查询常用于where子句的in操作符中） </a></li>
<li><a href="#12%E8%81%94%E7%BB%93%E8%81%94%E7%BB%93%E6%98%AF%E4%B8%80%E7%A7%8D%E6%9C%BA%E5%88%B6%E7%94%A8%E6%9D%A5%E5%9C%A8%E4%B8%80%E6%9D%A1select%E8%AF%AD%E5%8F%A5%E4%B8%AD%E5%85%B3%E8%81%94%E8%A1%A8%E5%9B%A0%E6%AD%A4%E7%A7%B0%E4%B8%BA%E8%81%94%E7%BB%93-">12.	联结（联结是一种机制，用来在一条select语句中关联表，因此称为联结） </a></li>
<li><a href="#13%E7%BB%84%E5%90%88%E6%9F%A5%E8%AF%A2%E4%BD%BF%E7%94%A8union%E5%BE%88%E7%AE%80%E5%8D%95%E6%89%80%E8%A6%81%E5%81%9A%E7%9A%84%E5%8F%AA%E6%98%AF%E7%BB%99%E5%87%BA%E6%AF%8F%E6%9D%A1select%E8%AF%AD%E5%8F%A5%E5%9C%A8%E5%90%84%E6%9D%A1%E8%AF%AD%E5%8F%A5%E4%B9%8B%E9%97%B4%E6%94%BE%E4%B8%8A%E5%85%B3%E9%94%AE%E5%AD%97union-">13.	组合查询（使用union很简单，所要做的只是给出每条select语句，在各条语句之间放上关键字union） </a></li>
<li><a href="#14%E8%A7%86%E5%9B%BE-">14.	视图 </a></li>
<li><a href="#15-%E5%AD%98%E5%82%A8%E8%BF%87%E7%A8%8B-">15. 存储过程 </a></li>
</ul>
</li>
</ul>`,r:{minutes:11.83,words:3548},y:"a",t:"SQL",i:"lightbulb"},[":md"]],["v-c03d4a30","/zh/posts/mysql/mysql.html",{d:172905854e4,e:`<h1> MySQL</h1>
<p><a href="./MySQL.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"MySQL",i:"lightbulb"},[":md"]],["v-027521cc","/zh/posts/python/01_python_environment.html",{d:16543872e5,l:"2022年6月5日",c:["Python"],g:["Python"],e:`<h1> 搭建Python开发环境，使用pip进行包管理</h1>
<ul>
<li>
<ol>
<li>适用范围</li>
</ol>
</li>
<li>
<ol start="2">
<li>Python开发环境</li>
</ol>
</li>
<li>
<ol start="3">
<li>包管理工具pip</li>
</ol>
</li>
<li>
<ol start="4">
<li>pip 命令</li>
</ol>
</li>
</ul>
`,r:{minutes:7.38,words:2213},y:"a",t:"搭建Python开发环境，使用pip进行包管理",i:"lightbulb"},[":md"]],["v-ce1d9382","/zh/posts/python/02_python_data_type.html",{d:1654992e6,l:"2022年6月12日",c:["Python"],g:["Python"],e:`<h1> Python的数据类型</h1>
<ul>
<li>
<ol>
<li>数据类型</li>
</ol>
</li>
<li>
<ol start="2">
<li>String操作</li>
</ol>
</li>
<li>
<ol start="3">
<li>List操作</li>
</ol>
</li>
<li>
<ol start="4">
<li>Tuple操作</li>
</ol>
</li>
<li>
<ol start="5">
<li>Set操作</li>
</ol>
</li>
<li>
<ol start="6">
<li>Dictionary操作</li>
</ol>
</li>
</ul>
`,r:{minutes:14.14,words:4241},y:"a",t:"Python的数据类型",i:"lightbulb"},[":md"]],["v-11ee8802","/zh/posts/python/03_python_operator.html",{d:16555104e5,l:"2022年6月18日",c:["Python"],g:["Python"],e:`<h1> Python的运算符</h1>
<ul>
<li>
<ol>
<li>变量与常量</li>
</ol>
</li>
<li>
<ol start="2">
<li>运算符 Operators</li>
</ol>
</li>
<li>
<ol start="3">
<li>注释 Comment</li>
</ol>
</li>
</ul>
`,r:{minutes:3.22,words:967},y:"a",t:"Python的运算符",i:"lightbulb"},[":md"]],["v-21ba52c1","/zh/posts/python/04_python_method.html",{d:1655856e6,l:"2022年6月22日",c:["Python"],g:["Python"],e:`<h1> Python的函数</h1>
<ul>
<li>
<ol>
<li>顺序/选择/循环语句</li>
</ol>
</li>
<li>
<ol start="2">
<li>函数 Functions</li>
</ol>
</li>
<li>
<ol start="3">
<li>内置函数 built-in functions</li>
</ol>
</li>
<li>
<ol start="4">
<li>高阶函数</li>
</ol>
</li>
<li>
<ol start="5">
<li>内置高阶函数</li>
</ol>
</li>
</ul>
`,r:{minutes:7.4,words:2220},y:"a",t:"Python的函数",i:"lightbulb"},[":md"]],["v-21e47859","/zh/posts/python/05_python_builtin_module.html",{d:16563744e5,l:"2022年6月28日",c:["Python"],g:["Python"],e:`<h1> Python的包与模块</h1>
<ul>
<li>
<ol>
<li>包、模块与__init__.py</li>
</ol>
</li>
<li>
<ol start="2">
<li>Python文件内部</li>
</ol>
</li>
<li>
<ol start="3">
<li>python内置模块</li>
</ol>
</li>
<li>
<ol start="4">
<li>应用</li>
</ol>
</li>
</ul>
`,r:{minutes:8.29,words:2488},y:"a",t:"Python的包与模块",i:"lightbulb"},[":md"]],["v-ff8cde1c","/zh/posts/python/06_python_popular_package.html",{d:16568064e5,l:"2022年7月3日",c:["Python"],g:["Python"],e:`<h1> Python受欢迎的第三方包</h1>
<ul>
<li>
<ol>
<li>Numpy</li>
</ol>
</li>
<li>
<ol start="2">
<li>Pandas</li>
</ol>
</li>
<li>
<ol start="3">
<li>Requests</li>
</ol>
</li>
<li>
<ol start="4">
<li>Flask</li>
</ol>
</li>
<li>
<ol start="5">
<li>更多</li>
</ol>
</li>
</ul>
`,r:{minutes:5.08,words:1525},y:"a",t:"Python受欢迎的第三方包",i:"lightbulb"},[":md"]],["v-4a75a8ca","/zh/posts/pytorch/01_ai_concept.html",{d:16573248e5,l:"2022年7月9日",c:["Pytorch"],g:["Pytorch"],e:`<h1> 人工智能概念解读</h1>
<ul>
<li>
<ol>
<li>机器学习、深度学习与强化学习</li>
</ol>
</li>
<li>
<ol start="2">
<li>有监督学习、半监督学习、无监督学习</li>
</ol>
</li>
<li>
<ol start="3">
<li>在线学习和离线学习</li>
</ol>
</li>
<li>
<ol start="4">
<li>回归，分类与多标签分类</li>
</ol>
</li>
<li>
<ol start="5">
<li>推荐与搜索</li>
</ol>
</li>
</ul>
`,r:{minutes:4.47,words:1342},y:"a",t:"人工智能概念解读",i:"lightbulb"},[":md"]],["v-5d0d3c96","/zh/posts/pytorch/02_neural_net_train.html",{d:16577568e5,l:"2022年7月14日",c:["Pytorch"],g:["Pytorch"],e:`<h1> 神经网络训练要点解读</h1>
<ul>
<li>
<ol>
<li>整体目标</li>
</ol>
</li>
<li>
<ol start="2">
<li>损失函数：量化模型的有效性</li>
</ol>
</li>
<li>
<ol start="3">
<li>优化算法（梯度下降,gradient descent）：调整模型参数以优化目标函数的算法</li>
</ol>
</li>
<li>
<ol start="4">
<li>超参数</li>
</ol>
</li>
</ul>
`,r:{minutes:2.2,words:659},y:"a",t:"神经网络训练要点解读",i:"lightbulb"},[":md"]],["v-5f0e06da","/zh/posts/pytorch/03_pytorch_operation.html",{d:16581024e5,l:"2022年7月18日",c:["Pytorch"],g:["Pytorch"],e:`<h1> 张量Tensor操作</h1>
<ul>
<li>
<ol>
<li>标量，向量，矩阵与张量</li>
</ol>
</li>
<li>
<ol start="2">
<li>初始化张量</li>
</ol>
</li>
<li>
<ol start="3">
<li>张量的属性</li>
</ol>
</li>
<li>
<ol start="4">
<li>张量的基本运算</li>
</ol>
</li>
<li>
<ol start="5">
<li>求和与求平均值</li>
</ol>
</li>
<li>
<ol start="6">
<li>求乘积</li>
</ol>
</li>
<li>
<ol start="7">
<li>求向量的模/范数</li>
</ol>
</li>
<li>
<ol start="8">
<li>求梯度</li>
</ol>
</li>
</ul>
`,r:{minutes:9.7,words:2909},y:"a",t:"张量Tensor操作",i:"lightbulb"},[":md"]],["v-894ce788","/zh/posts/pytorch/04_pytorch_practice_nn.html",{d:16585344e5,l:"2022年7月23日",c:["Pytorch"],g:["Pytorch"],e:`<h1> 使用PyTorch进行深度学习实践</h1>
<ul>
<li>
<ol start="0">
<li>Pytorch的API</li>
</ol>
</li>
<li>
<ol>
<li>数据加载和预处理</li>
</ol>
</li>
<li>
<ol start="2">
<li>定义网络模型</li>
</ol>
</li>
<li>
<ol start="3">
<li>定义损失函数和优化器</li>
</ol>
</li>
<li>
<ol start="4">
<li>训练网络</li>
</ol>
</li>
<li>
<ol start="5">
<li>测试网络</li>
</ol>
</li>
<li>
<ol start="6">
<li>保存和加载模型</li>
</ol>
</li>
<li>
<ol start="7">
<li>GPU加速</li>
</ol>
</li>
<li>
<ol start="8">
<li>使用TensorBoard进行可视化</li>
</ol>
</li>
</ul>
`,r:{minutes:9.06,words:2718},y:"a",t:"使用PyTorch进行深度学习实践",i:"lightbulb"},[":md"]],["v-06c536ce","/zh/posts/pytorch/05_linear_nn.html",{d:16590528e5,l:"2022年7月29日",c:["Pytorch"],g:["Pytorch"],e:`<h1> Pytorch实战线性神经网络</h1>
<ul>
<li>
<ol>
<li>Pytorch实现线性回归</li>
</ol>
</li>
<li>
<ol start="2">
<li>Pytorch实现softmax回归</li>
</ol>
</li>
</ul>
`,r:{minutes:8.74,words:2621},y:"a",t:"Pytorch实战线性神经网络",i:"lightbulb"},[":md"]],["v-58281f94","/zh/posts/pytorch/06_heterogeneous_graph.html",{d:17091648e5,l:"2024年2月29日",c:["Pytorch"],g:["Pytorch"],e:`<h1> PyG Heterogeneous Graph Practice</h1>
<h2> 同构图与异构图</h2>
<figure><figcaption>同构图与异构图</figcaption></figure>
<h3> 同构图</h3>
<p>不区分节点和边的类型，节点和边都只有一种类型</p>
<p>点类型+边类型=2</p>
<p>例如，在社交网络中，可以想象node只有‘人’这一个种类，edge只有‘认识’这一种连接。而人和人要么认识，要么不认识。</p>
<h3> 异构图</h3>
<p>点的类型或边的类型超过一种</p>
<p>点类型+边类型&gt;2</p>
<p>现实世界中，大多数图都是异构图，表示了关于不同类型实体及其不同类型关系的信息。不同类型的点和边的特征表示类型和维度可以不相同。</p>`,r:{minutes:1.14,words:342},y:"a",t:"PyG Heterogeneous Graph Practice",i:"lightbulb"},[":md"]],["v-fa68fb56","/zh/posts/pytorch/AI_evolution.html",{d:17084736e5,l:"2024年2月21日",c:["LLM"],g:["LLM"],e:`<h1> AI发展历程</h1>
`,r:{minutes:3.46,words:1039},y:"a",t:"AI发展历程",i:"lightbulb"},[":md"]],["v-06ffdf36","/zh/posts/redis/redis.html",{d:172905854e4,e:`<h1> Redis</h1>
<p><a href="./Redis.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"Redis",i:"lightbulb"},[":md"]],["v-e87f5264","/zh/posts/spring/spring.html",{d:172905854e4,e:`<h1> Spring</h1>
<p><a href="./Spring.pdf">查看PDF文件</a></p>
`,r:{minutes:.03,words:9},y:"a",t:"Spring",i:"lightbulb"},[":md"]],["v-c33ef8e8","/zh/posts/tools/IDEA_Keymap.html",{d:172905854e4,e:`<h1> IDEA快捷键</h1>
<h2> 查看一个类的构造函数有哪些</h2>
<p>方法一：类前面加new，类后面不要加括号，按住ctrl点一下该类，会出现它的构造函数如下图

方法二：类前面加new，类后面加括号，ctrl+p，会出现它的构造函数如下图
</p>
<h2> 常用快捷键按重要性依次排序:  <br></h2>
<ul>
<li>Ctrl+Z: 撤销更改  <br></li>
<li>Ctrl+Shift+Z: 恢复被撤销的内容  <br></li>
<li>Ctrl+E: 查看最近改过的各种文件(以及各种好用的快捷键)  <br></li>
<li>Alt+Enter: 显示IDEA推测你要完成的操作，高级的代码补全  <br></li>
<li>Ctrl+Shift+F: 查找代码片段用  <br></li>
<li>Alt+F7: 跟踪一个Object的usage，一个个检查，比ctrl + 左键点击好用得多  <br></li>
<li>Shift Shift: 查找文件或类用  <br></li>
<li>Alt+9: 查看Git的历史提交记录  <br></li>
<li>拖黑后Ctrl+"/": 注释，取消注释  <br></li>
<li>F2: 跳到当前代码下一个报错的地方  <br></li>
<li>Alt+ ←/→: 在打开的文件中切换  <br></li>
<li>Ctrl+Alt+←/→: 跳到上一次/下一次看过的代码段  <br></li>
<li>Ctrl+Alt+L: 自动优化当前文件代码格式  <br></li>
</ul>`,r:{minutes:2.23,words:669},y:"a",t:"IDEA快捷键",i:"lightbulb"},[":md"]],["v-ffcc0ea4","/zh/posts/tools/IDEA_Problem_and_plugin.html",{d:172905854e4,e:`<h1> IDEA常见问题及插件</h1>
<h2> 一、常用插件</h2>
<ul>
<li>Alibaba Java Coding Guidelines(XenoAmess TPM) : 代码检查用这个  <br></li>
<li>RestfulTool: 通过URL直接定位到对应controller代码 <br></li>
<li>Maven Helper: 分析Maven项目的package依赖冲突 <br></li>
<li>POJO to JSON: 要为类生成代码直接在类定义处右键就能copy json了，省时省力 <br></li>
<li>Github Copilot: AI补全代码，学生可以免费申请 <br></li>
<li>Sonar Lint: 扫描 bug, vulnerabilities and code smell，同时也是code review好帮手 <br></li>
<li>Database Navigator: 数据库插件，聊胜于无 （不建议使用，只能查看，无法创建表，还是用DBeaver算了） <br></li>
<li>Git Commit Template : 提交git commit模板，有利于团队管理提交代码  <br></li>
<li>Spring Assistant ：在idea中添加Spring Initializr工具；支持.yml提示【特别提醒：亲测很难用，maven导包会报错，直接用官网方式创建SpringBoot脚手架项目】 <br></li>
<li>GitToolBox：查看每行代码最后一个修改的人 <br></li>
<li>lombok：通过注解自动生成set,get,equals,constructor,toString</li>
</ul>`,r:{minutes:5.98,words:1794},y:"a",t:"IDEA常见问题及插件",i:"lightbulb"},[":md"]],["v-20729b92","/zh/posts/tools/Markdown.html",{d:172905854e4,e:`<h1> Markdown</h1>
<h2> md基本语法</h2>
<p>引用：&gt;大于号</p>
<p>换行：后面空2个空格，或者空一行，或者<br></p>
<p>上标(superscript)：<sup></sup></p>
<p>下标(subscript)：<sub></sub></p>
<p>更多</p>
<p>markdown官方基本语法：https://markdown.com.cn/cheat-sheet.html</p>
<p><a href="https://www.zybuluo.com/mdeditor" target="_blank" rel="noopener noreferrer">Markdown教程</a>
<a href="https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown" target="_blank" rel="noopener noreferrer">Markdown简明语法</a>
<a href="https://www.zybuluo.com/mdeditor?url=https://www.zybuluo.com/static/editor/md-help.markdown#cmd-markdown-%E9%AB%98%E9%98%B6%E8%AF%AD%E6%B3%95%E6%89%8B%E5%86%8C" target="_blank" rel="noopener noreferrer">Markdown高阶语法</a>
<a href="https://www.runoob.com/markdown/md-advance.html" target="_blank" rel="noopener noreferrer">Markdown菜鸟教程</a>
<a href="https://blog.csdn.net/qq_40818172/article/details/126260661" target="_blank" rel="noopener noreferrer">Markdown CSDN教程</a>
<a href="https://baijiahao.baidu.com/s?id=1680509829195209918&amp;wfr=spider&amp;for=pc" target="_blank" rel="noopener noreferrer">Markdown流程图全指导</a>
<a href="https://www.cnblogs.com/garyyan/p/8329343.html" target="_blank" rel="noopener noreferrer">markdown添加css样式</a></p>`,r:{minutes:.75,words:224},y:"a",t:"Markdown",i:"lightbulb"},[":md"]],["v-23cd2113","/zh/posts/tools/Maven--java%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7.html",{d:172905854e4,e:`<h1> Maven--java包管理工具</h1>
<ul>
<li><a href="#maven--java%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7">Maven--java包管理工具</a>
<ul>
<li><a href="#%E4%B8%80%E7%AE%80%E4%BB%8B">一、简介</a>
<ul>
<li><a href="#%E4%B8%80%E4%BB%80%E4%B9%88%E6%98%AFmaven">（一）什么是Maven</a></li>
<li><a href="#%E4%BA%8Cmaven%E8%83%BD%E5%81%9A%E4%BB%80%E4%B9%88">（二）maven能做什么</a></li>
<li><a href="#%E4%B8%89maven%E6%96%87%E4%BB%B6%E7%BB%93%E6%9E%84">（三）maven文件结构</a></li>
</ul>
</li>
<li><a href="#%E4%BA%8C%E4%BD%BF%E7%94%A8">二、使用</a>
<ul>
<li><a href="#%E4%B8%80%E5%AE%98%E7%BD%91%E4%B8%8B%E8%BD%BDwindow%E7%B3%BB%E7%BB%9F">（一）官网下载（window系统）</a></li>
<li><a href="#%E4%BA%8C%E8%A7%A3%E5%8E%8B">（二）解压</a></li>
<li><a href="#%E4%B8%89%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F">（三）配置环境变量</a></li>
<li><a href="#%E5%9B%9B%E9%85%8D%E7%BD%AEsettingsxml">（四）配置settings.xml</a></li>
<li><a href="#%E4%BA%94idea%E9%85%8D%E7%BD%AE%E8%87%AA%E5%B7%B1%E7%9A%84maven">（五）IDEA配置自己的maven</a></li>
<li><a href="#%E5%85%AD%E7%94%A8idea%E5%88%9B%E5%BB%BAmaven%E9%A1%B9%E7%9B%AE">（六）用IDEA创建maven项目</a></li>
<li><a href="#%E4%B8%83%E5%BC%95%E5%85%A5%E4%BE%9D%E8%B5%96">（七）引入依赖</a></li>
<li><a href="#%E5%85%AB%E5%BC%95%E5%85%A5%E6%8F%92%E4%BB%B6">（八）引入插件</a></li>
</ul>
</li>
<li><a href="#%E4%B8%89maven%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C">三、maven基础操作</a>
<ul>
<li><a href="#%E4%B8%80%E4%BB%93%E5%BA%93">（一）仓库</a></li>
<li><a href="#%E4%BA%8C%E9%85%8D%E7%BD%AE">（二）配置</a></li>
<li><a href="#%E4%B8%89gav%E5%9D%90%E6%A0%87">（三）gav坐标</a></li>
<li><a href="#%E5%9B%9B%E6%93%8D%E4%BD%9C%E5%91%BD%E4%BB%A4%E4%B8%8E%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">（四）操作命令与生命周期</a></li>
<li><a href="#%E4%BA%94%E4%BE%9D%E8%B5%96%E8%8C%83%E5%9B%B4%E7%AE%A1%E7%90%86">（五）依赖范围管理</a></li>
<li><a href="#%E5%85%AD%E7%88%B6%E5%AD%90%E9%A1%B9%E7%9B%AE%E4%BE%9D%E8%B5%96%E4%BC%A0%E9%80%92">（六）父子项目依赖传递</a></li>
<li><a href="#%E4%B8%83%E9%A1%B9%E7%9B%AE%E8%81%9A%E5%90%88%E7%BB%9F%E4%B8%80%E7%AE%A1%E7%90%86">（七）项目聚合统一管理</a></li>
<li><a href="#%E5%85%AB%E9%A1%B9%E7%9B%AE%E4%B8%AD%E7%9A%84%E4%BE%9D%E8%B5%96%E5%86%B2%E7%AA%81">（八）项目中的依赖冲突</a>
<ul>
<li><a href="#%E6%8E%92%E5%8C%85-maven-helper">排包: maven helper</a></li>
</ul>
</li>
</ul>
</li>
<li><a href="#pom%E6%96%87%E4%BB%B6%E8%A7%A3%E6%9E%90">POM文件解析</a>
<ul>
<li><a href="#scope%E8%AF%A6%E8%A7%A3">scope详解</a></li>
</ul>
</li>
<li><a href="#%E5%B8%B8%E8%A7%81%E9%94%99%E8%AF%AF">常见错误</a>
<ul>
<li><a href="#since-maven-381-http-repositories-are-blocked">Since Maven 3.8.1 http repositories are blocked.</a></li>
<li><a href="#could-not-find-artifact-orgspringframeworkbootspring-boot-starter-parentpom320release-in-central">Could not find artifact org.springframework.boot:spring-boot-starter-parent:pom:3.2.0.RELEASE in central</a></li>
</ul>
</li>
</ul>
</li>
</ul>`,r:{minutes:12.25,words:3674},y:"a",t:"Maven--java包管理工具",i:"lightbulb"},["/zh/posts/tools/Maven--java包管理工具.html","/zh/posts/tools/Maven--java包管理工具.md",":md"]],["v-00aa36b2","/zh/posts/tools/Poetry--python%E5%8C%85%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7.html",{d:172905854e4,e:`<h1> Poetry--python包管理工具</h1>
<p>https://blog.csdn.net/Python966/article/details/134134702</p>
`,r:{minutes:.04,words:11},y:"a",t:"Poetry--python包管理工具",i:"lightbulb"},["/zh/posts/tools/Poetry--python包管理工具.html","/zh/posts/tools/Poetry--python包管理工具.md",":md"]],["v-0179d9c8","/zh/posts/Language/topics/careers.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Careers"],e:`<h1> Careers</h1>
`,r:{minutes:6.63,words:1990},y:"a",t:"Careers",i:"lightbulb"},[":md"]],["v-982f3614","/zh/posts/Language/topics/common.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Common"],e:`<h1> Common</h1>
`,r:{minutes:6.44,words:1931},y:"a",t:"Common",i:"lightbulb"},[":md"]],["v-2a9292ca","/zh/posts/Language/topics/communication.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Communication"],e:`<h1> Communication</h1>
`,r:{minutes:6.18,words:1854},y:"a",t:"Communication",i:"lightbulb"},[":md"]],["v-60308af9","/zh/posts/Language/topics/computers.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Computers"],e:`<h1> Computers</h1>
`,r:{minutes:1.38,words:413},y:"a",t:"Computers",i:"lightbulb"},[":md"]],["v-3dc01a1e","/zh/posts/Language/topics/describing_something.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Describing something"],e:`<h1> Describing something</h1>
`,r:{minutes:.38,words:114},y:"a",t:"Describing something",i:"lightbulb"},[":md"]],["v-43b39d31","/zh/posts/Language/topics/dreams.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Dreams and Wishes"],e:`<h1> Dreams and Wishes</h1>
`,r:{minutes:.82,words:247},y:"a",t:"Dreams and Wishes",i:"lightbulb"},[":md"]],["v-65a2b9b9","/zh/posts/Language/topics/graduating.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Graduating"],e:`<h1> Graduating</h1>
`,r:{minutes:1.06,words:317},y:"a",t:"Graduating",i:"lightbulb"},[":md"]],["v-1d9bbd97","/zh/posts/Language/topics/greetings.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Greetings"],e:`<h1> Greetings</h1>
`,r:{minutes:1.77,words:530},y:"a",t:"Greetings",i:"lightbulb"},[":md"]],["v-38ac66c1","/zh/posts/Language/topics/hobbies.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Hobbies"],e:`<h1> Hobbies</h1>
`,r:{minutes:3.15,words:944},y:"a",t:"Hobbies",i:"lightbulb"},[":md"]],["v-4e4561c7","/zh/posts/Language/topics/immigration.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Immigration"],e:`<h1> Immigration</h1>
`,r:{minutes:.43,words:130},y:"a",t:"Immigration",i:"lightbulb"},[":md"]],["v-7a9a637c","/zh/posts/Language/topics/introducing_someone.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Introduction"],e:`<h1> Introduction</h1>
`,r:{minutes:4.61,words:1383},y:"a",t:"Introduction",i:"lightbulb"},[":md"]],["v-689c6003","/zh/posts/Language/topics/phone.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Phone and email"],e:`<h1> Phone and email</h1>
`,r:{minutes:1.42,words:425},y:"a",t:"Phone and email",i:"lightbulb"},[":md"]],["v-4fd76726","/zh/posts/Language/topics/routine.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Routine"],e:`<h1> Routine</h1>
`,r:{minutes:1.41,words:424},y:"a",t:"Routine",i:"lightbulb"},[":md"]],["v-50022b27","/zh/posts/Language/topics/time_and_weather.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Time"],e:`<h1> Time &amp; Weather &amp; seasons</h1>
`,r:{minutes:1.87,words:561},y:"a",t:"Time & Weather & seasons",i:"lightbulb"},[":md"]],["v-1b7bda08","/zh/posts/Language/topics/traits.html",{d:1657584e6,l:"2022年7月12日",c:["Conversation"],g:["Traits"],e:`<h1> Traits</h1>
`,r:{minutes:.36,words:108},y:"a",t:"Traits",i:"lightbulb"},[":md"]],["v-2891a61a","/zh/posts/code/algorithm/0.%E6%97%B6%E7%A9%BA%E5%A4%8D%E6%9D%82%E5%BA%A6.html",{d:172905854e4,e:`<h1> 复杂度分析 Complexity Analysis</h1>
<h2> 1. 大O复杂度表示法</h2>
<p>T(n) = O(f(n))</p>
<ul>
<li>T(n)表示代码执行时间</li>
<li>n表示数据规模大小</li>
<li>f(n)表示每行代码执行次数总和</li>
</ul>
<p>表示代码执行时间/所需空间随数据规模增长的变化趋势。</p>
<p>Note：只是表示一种变化趋势，不是具体的执行时间/空间大小。低阶、常量、系数被忽略，只记录最大量级就可以了。</p>
<h2> 2. 复杂度计算</h2>
<ol>
<li>最大值法则（非嵌套代码）：总复杂度等于量级最大的那段代码的复杂度 <br></li>
</ol>`,r:{minutes:5.63,words:1690},y:"a",t:"复杂度分析 Complexity Analysis",i:"lightbulb"},["/zh/posts/code/algorithm/0.时空复杂度.html","/zh/posts/code/algorithm/0.时空复杂度.md",":md"]],["v-1d06f544","/zh/posts/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3_%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html",{d:172905854e4,e:`<h1> 分治思想与递归实现</h1>
<h2> 算法的两种实现方式</h2>
<p>正如数据结构中，所有的数据结构都由数组或链表实现。 <br>
Note：数据结构的底层存储只有数组和链表两种 <br>
数组：栈、队列、堆、树、图(邻接矩阵) <br>
链表：栈、队列、堆、树、图(邻接表) <br></p>
<p>在算法中，所有的算法都由迭代或递归实现。 <br>
迭代：可以实现所有算法，所有的递归都可转换为迭代。动态规划可以看做是通过迭代实现分治思想的别称。 <br>
递归：分治思想的算法，也就是有子问题的算法，除了动态规划是自底向上通过迭代实现，其他的算法都是自顶向下，都可用递归实现 <br></p>`,r:{minutes:12.53,words:3760},y:"a",t:"分治思想与递归实现",i:"lightbulb"},["/zh/posts/code/algorithm/1.分治思想_递归实现.html","/zh/posts/code/algorithm/1.分治思想&递归实现.html","/zh/posts/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3&%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.html","/zh/posts/code/algorithm/1.分治思想&递归实现.md","/zh/posts/code/algorithm/1.%E5%88%86%E6%B2%BB%E6%80%9D%E6%83%B3&%E9%80%92%E5%BD%92%E5%AE%9E%E7%8E%B0.md"]],["v-7c803182","/zh/posts/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6_%E4%BD%8D%E8%BF%90%E7%AE%97.html",{d:172905854e4,e:`<h1> 二进制与位运算</h1>
<p><a href="https://www.runoob.com/w3cnote/bit-operation.html" target="_blank" rel="noopener noreferrer">链接</a> <br>
左移变大 （*2） <br>
右移变小（/2） <br>
奇数（二进制末位是1） <br>
偶数（二进制末位是0） <br>
x&amp;1 == 1   可以判断末位是否是1 <br>
x &gt;&gt;= 1  末位去掉一位 <br></p>
<h2> 位运算</h2>
<p> <br>
基本原理 <br></p>
<p>0s 表示一串 0，1s 表示一串 1。 <br></p>`,r:{minutes:4.23,words:1269},y:"a",t:"二进制与位运算",i:"lightbulb"},["/zh/posts/code/algorithm/2.二进制_位运算.html","/zh/posts/code/algorithm/2.二进制&位运算.html","/zh/posts/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6&%E4%BD%8D%E8%BF%90%E7%AE%97.html","/zh/posts/code/algorithm/2.二进制&位运算.md","/zh/posts/code/algorithm/2.%E4%BA%8C%E8%BF%9B%E5%88%B6&%E4%BD%8D%E8%BF%90%E7%AE%97.md"]],["v-573f8404","/zh/posts/code/algorithm/3.%E6%8E%92%E5%BA%8F.html",{d:172905854e4,e:`<h1> 排序</h1>
<h1> 排序算法的分析与评价</h1>
<h2> 执行效率</h2>
<h3> 最好情况、最坏情况、平均情况下的时间复杂度</h3>
<p>对于要排序的数据，有的接近有序，有的完全无序。有序度不同的数据，对于排序的执行时间肯定是有影响的，我们要知道排序算法在不同数据下的性能表现。   <br></p>
<h4> 平均复杂度分析：有序度&amp;逆序度</h4>
<p><strong>有序度：<em><em>是数组中具有有序关系的元素对的个数。 <br>
对于一个倒序排列的数组，比如 6，5，4，3，2，1，有序度是 0；对于一个完全有序的数组，比如 1，2，3，4，5，6，有序度就是1+2+...+(n-1)=n</em>(n-1)/2，也就是 1+2+3+4+5=15。 <br>
<strong>满有序度</strong>：我们把这种完全有序的数组的有序度叫作满有序度。   <br>
 <br>
<strong>逆序度</strong>：定义正好跟有序度相反。 <br>
 <br>
<strong>公式</strong>：<strong>逆序度 = 满有序度 - 有序度</strong> <br>
我们排序的过程就是一种增加有序度，减少逆序度的过程，最后达到满有序度，就说明排序完成了。  <br>
拿冒泡排序的例子来说明。要排序的数组的初始状态是 4，5，6，3， 2，1 ，其中，有序元素对有 (4，5) (4，6)(5，6)，所以有序度是 3。n=6，所以排序完成之后终态的满有序度为 n</em>(n-1)/2=15。   <br>
 <br>
冒泡排序包含两个操作原子，<strong>比较</strong>和</strong>交换**。每交换一次，有序度就加 1。不管算法怎么改 进，<strong>交换次数总是确定的，即为逆序度</strong>，也就是n*(n-1)/2减去初始有序度。 <br>
此例中就是 15– 3=12，要进行 12 次交换操作。 对于包含 n 个数据的数组进行冒泡排序，平均交换次数是多少呢？最坏情况下，初始状态的有序度是 0，所以要进行 n*(n-1)/2 次交换。最好情况下，初始状态的有序度是 n*(n-1)/2，就不需要进行交换。我们可以取个中间值 n*(n-1)/4，来表示初始有序度既不是很高也不是很低的平均情况。 换句话说，平均情况下，需要 n*(n-1)/4 次交换操作，比较操作肯定要比交换操作多，而复杂度的上限是 O(n)，所以平均情况下的时间复杂度就是 O(n)。  <br>
这个平均时间复杂度推导过程其实并不严格，但是很多时候很实用，毕竟概率论的定量分析太复杂，不太好用。 <br></p>`,r:{minutes:23.65,words:7094},y:"a",t:"排序",i:"lightbulb"},["/zh/posts/code/algorithm/3.排序.html","/zh/posts/code/algorithm/3.排序.md",":md"]],["v-20905e73","/zh/posts/code/algorithm/4.%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE.html",{d:172905854e4,e:`<h1> 二分查找</h1>
<h2> 对数列的要求</h2>
<ol>
<li>有序的（排好序的，无序的需要提前排序） <br></li>
<li>存在上下界（限定数量或区间范围。否则需要对不定长的边界做处理，来找到明确上下界） <br></li>
<li>能够通过索引访问其中的元素（数组适合，链表非常不适合） <br></li>
<li>不常变动的，不要求动态增删的情形下查找（否则，应采用AVL树，即自平衡的二叉查找树） <br></li>
<li>数据量不能超级大（针对实际应用，要考虑内存限制） <br></li>
</ol>
<p>数据量太大就不适合二分查找了。 <br>
二分查找的底层需要依赖数组这种数据结构，而数组为了支持随机访问的特性，要求内存空 间连续，对内存的要求比较苛刻。比如，我们有 1GB 大小的数据，如果希望用数组来存 储，那就需要 1GB 的连续内存空间。   <br>
注意这里的“连续”二字，也就是说，即便有 2GB 的内存空间剩余，但是如果这剩余的 2GB 内存空间都是零散的，没有连续的 1GB 大小的内存空间，那照样无法申请一个 1GB 大小的数组。而我们的二分查找是作用在数组这种数据结构之上的，所以太大的数据用数组 存储就比较吃力了，也就不能用二分查找了。   <br></p>`,r:{minutes:5.28,words:1583},y:"a",t:"二分查找",i:"lightbulb"},["/zh/posts/code/algorithm/4.二分查找.html","/zh/posts/code/algorithm/4.二分查找.md",":md"]],["v-070c152f","/zh/posts/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92_%E8%B4%AA%E5%BF%83.html",{d:172905854e4,e:`<h1> 动态规划与贪心</h1>
<p>动态规划适合用来求解最优问题，比如求最大值、最小值等。 <br></p>
<h2> 动态规划基础步骤</h2>
<p> <br>
1.建立dp数组（确定是一维、二维还是多维，也可后续进行变更。从小往大考虑，1维能不能表示出来，1维不行的话，考虑2维） <br>
2.根据题意，描述dp数组每一个格的含义 <br>
3.已知dp[i][j]能推出哪些格，或者通过哪些格能推出dp[i][j]，推导动态转移矩阵 <br>
4.根据dp[i][j]能推导出的位置，确定往dp数组填入内容的顺序（是从上到下，从左到右，从左下角到右上角，还是从左上角到右下角） <br>
5.初始化dp数组 <br>
6.循环填满dp数组 <br>
7.根据需要从dp数组获取对应信息 <br></p>`,r:{minutes:6.38,words:1913},y:"a",t:"动态规划与贪心",i:"lightbulb"},["/zh/posts/code/algorithm/5.动态规划_贪心.html","/zh/posts/code/algorithm/5.动态规划&贪心.html","/zh/posts/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92&%E8%B4%AA%E5%BF%83.html","/zh/posts/code/algorithm/5.动态规划&贪心.md","/zh/posts/code/algorithm/5.%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92&%E8%B4%AA%E5%BF%83.md"]],["v-0291b30a","/zh/posts/code/algorithm/6.%E5%AD%97%E7%AC%A6%E4%B8%B2.html",{d:172905854e4,e:`<h1> 字符串</h1>
<h2> 哈希</h2>
<p>假如要把字符串映射到数组中的某个地方: <br></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
        h <span class="token operator">=</span> h <span class="token operator">*</span> <span class="token number">31</span> <span class="token operator">+</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token keyword">return</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.25,words:974},y:"a",t:"字符串",i:"lightbulb"},["/zh/posts/code/algorithm/6.字符串.html","/zh/posts/code/algorithm/6.字符串.md",":md"]],["v-2d661165","/zh/posts/code/algorithm/7.%E6%95%B0%E5%AD%A6.html",{d:172905854e4,e:`<h1> 数学</h1>
<h2> Acwing</h2>
<p><a href="https://zhuanlan.zhihu.com/p/643391309" target="_blank" rel="noopener noreferrer">参考笔记</a> <br>
数论：质数、约数、欧拉函数、快速幂、扩展欧几里得算法、中国剩余定理 <br>
高斯消元 <br>
组合计数 <br>
容斥原理 <br>
简单博弈论 <br>
 <br></p>
<h3> 质数（又称素数）</h3>
<p>概念：在大于1的整数中，如果只包含1和本身这两个约数，则称为质数或素数。 <br></p>
<h4> 质数的判定——试除法   时间复杂度：O(sqrt(n))</h4>`,r:{minutes:9.93,words:2979},y:"a",t:"数学",i:"lightbulb"},["/zh/posts/code/algorithm/7.数学.html","/zh/posts/code/algorithm/7.数学.md",":md"]],["v-9d64ef38","/zh/posts/code/algorithm/8.%E7%AE%97%E6%B3%95%E6%8A%80%E5%B7%A7.html",{d:172905854e4,e:`<h1> 算法技巧</h1>
<h2> 前缀和 &amp; 差分</h2>
<p>前缀和与差分是互逆的 <br></p>
<h2> 双指针</h2>
<p>举例: <br></p>
<ol>
<li>指向不同序列: 两个有序数组/链表的合并 <br></li>
<li>指向相同序列: 快排的双坑法, KMP, 链表判环 <br></li>
</ol>
<p>核心思想: <br>
利用某些性质，只枚举O(n)个状态 <br></p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 不用双指针，则O(n^2) &lt;br/&gt;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>

<span class="token comment">// 用双指针，两个指针总共移动的次数不超过k*n，所以为O(n) &lt;br/&gt;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> j<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> j <span class="token operator">&amp;&amp;</span> <span class="token function">check</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">++</span>j<span class="token punctuation">;</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span> <span class="token operator">&lt;</span>br<span class="token operator">/</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.39,words:418},y:"a",t:"算法技巧",i:"lightbulb"},["/zh/posts/code/algorithm/8.算法技巧.html","/zh/posts/code/algorithm/8.算法技巧.md",":md"]],["v-79f9a05e","/zh/posts/code/data_structure/1.%E6%95%B0%E7%BB%84.html",{d:172905854e4,e:`<h1> 数组</h1>
<h2> 特点</h2>
<ol>
<li>属于线性表 <br></li>
</ol>
<p>线性表，只有前后两个方向：数组、链表、栈、队列 <br>
非线性表：树、图 <br></p>
<ol start="2">
<li>连续的内存空间和相同类型的数据 <br></li>
<li>优：随机访问O(1) <br></li>
</ol>
<p>随机访问是指通过下标访问。 <br>
查找 != 随机访问，即便是排好序的用二分查找，时间复杂度为O(logn)） <br></p>
<ol start="4">
<li>缺：增删元素要做大量的数据搬移工作(O(n) <br></li>
</ol>`,r:{minutes:2.38,words:713},y:"a",t:"数组",i:"lightbulb"},["/zh/posts/code/data_structure/1.数组.html","/zh/posts/code/data_structure/1.数组.md",":md"]],["v-17990ded","/zh/posts/code/data_structure/2.%E9%93%BE%E8%A1%A8.html",{d:172905854e4,e:`<h1> 链表</h1>
<h2> 链表分类</h2>
<h3> 单链表</h3>
<p>每个结点由两部分组成，data和next。 <br>
特殊结点：头结点、尾结点 <br>
头结点：第一个结点，用来记录链表的基地址，有了它，我们就可以遍历得到整条链表。 <br>
尾结点：指针指向空地址NULL，表示这是链表上最后一个结点。 <br></p>
<h3> 循环链表</h3>
<p>循环链表与单链表的区别，仅在于尾结点，尾结点指针指向链表的头结点，适合处理环形结构的数据。 <br></p>
<h3> 双向链表（在实际软件开发中更加常用）</h3>
<p>每个结点由三部分组成，数据data，后继指针next，前驱指针prev。 <br>
特点： <br>
占用更多存储空间，支持两个方向，更灵活。 <br>
支持O(1)找到前驱结点。在需要用到上一个结点时，用双向链表可以很容易知道上一个结点，而用单链表，需要用双指针，保留上一个结点和当前结点的位置。插入和删除当前结点，都需要用到上一个结点。 <br>
查找有序链表时，可以根据要查找的值决定往前还是往后找。 <br>
Java中，双向链表的应用：LinkedList、LinkedHashMap <br></p>`,r:{minutes:12.19,words:3656},y:"a",t:"链表",i:"lightbulb"},["/zh/posts/code/data_structure/2.链表.html","/zh/posts/code/data_structure/2.链表.md",":md"]],["v-5ba2c580","/zh/posts/code/data_structure/3.%E6%A0%88.html",{d:172905854e4,e:`<h1> 栈</h1>
<h1> 单调栈</h1>
<p>单调栈：元素按从小到大或从大到小排列，具有单调性 <br></p>
`,r:{minutes:.1,words:29},y:"a",t:"栈",i:"lightbulb"},["/zh/posts/code/data_structure/3.栈.html","/zh/posts/code/data_structure/3.栈.md",":md"]],["v-19dc1c20","/zh/posts/code/data_structure/4.%E9%98%9F%E5%88%97.html",{d:172905854e4,e:`<h1> 队列</h1>
<p>（1）队列也是一种“操作受限”的线性表，只支持两种基本操作：入队（队尾）和出队 （队头）  <br>
（2）顺序队列和链式队列 <br>
顺序队列：用数组实现 <br>
针对队尾满了，对头还有很多空位，解决方案：循环队列；一旦队尾满了，整体移到前面（不如循环队列） <br>
链式队列：用链表实现 <br>
（3）循环队列 <br>
要想写出没有 bug 的循环队列实现代码，关键要确定好队空和队满的判定条件。 <br>
队满判定条件：head=tail <br>
队满判定条件：(tail+1)%n=head <br>
（4）阻塞队列与并发队列 <br>
阻塞队列、并发队列，底层都还是队列这种数 据结构，只不过在之上附加了很多其他功能。阻塞队列就是入队、出队操作可以阻塞，并发 队列就是队列的操作多线程安全。   <br>
（5）应用 <br>
算法中应用：广度优先搜索 <br></p>`,r:{minutes:3.72,words:1117},y:"a",t:"队列",i:"lightbulb"},["/zh/posts/code/data_structure/4.队列.html","/zh/posts/code/data_structure/4.队列.md",":md"]],["v-1da5dadc","/zh/posts/code/data_structure/5.%E5%A0%86%EF%BC%88%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97%EF%BC%89.html",{d:172905854e4,e:`<h1> 堆（优先队列）</h1>
<h2> 概念（关键词：堆、完全二叉树、优先队列）</h2>
<p>只要满足以下这两点，它就是一个堆： <br></p>
<ol>
<li>堆是一个<strong>完全二叉树</strong> <br></li>
<li>堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值 <br></li>
</ol>
<p>特性：堆顶拥有最高优先级；每个父节点的优先级高于子节点的优先级。 <br></p>
<h2> 分类</h2>
<h3> 大根堆（大顶堆）</h3>
<p>概念：每个节点的值都大于等于子树中每个节点值的堆 <br>
特点：堆顶元素存储的是堆中数据的最大值 <br></p>`,r:{minutes:12.82,words:3845},y:"a",t:"堆（优先队列）",i:"lightbulb"},["/zh/posts/code/data_structure/5.堆（优先队列）.html","/zh/posts/code/data_structure/5.堆（优先队列）.md",":md"]],["v-294cae05","/zh/posts/code/data_structure/6.%E6%A0%91.html",{d:172905854e4,e:`<h1> 树</h1>
<h2> 概念</h2>
<p>高度、深度、层 <br>
 <br>
 <br></p>
<h2> 二叉树</h2>
<h3> 二叉树的存储：链表与数组</h3>
<p>顺序存储法： 一般情况下，为了方便计算子节点，根节点会存储在下标为 1 的位置。如果节点 X 存储在数组中下标为 i 的位置，下标为 2 * i 的位置存储的就是左子节点，下标为 2 * i + 1 的位置存储的就是右子节点。反过来，下标为 i/2 的位置存储就是它的父节点。  <br></p>
<h3> 完全二叉树</h3>
<p>满二叉树是完全二叉树的一种特殊情况 <br>
如果某棵二叉树是一棵完全二叉树，那用数组存储无疑是最节省内存的一种方式。   <br>
这也是为什么完全二叉树会单独拎出来的原因，也是为什么完全二叉树要求最后一层的子节点都靠左的原因。   <br>
当我们讲到堆和堆排序的时候，你会发现，堆其实就是一种完全二叉树，最常用的存储方式就是数组。   <br></p>`,r:{minutes:43.88,words:13165},y:"a",t:"树",i:"lightbulb"},["/zh/posts/code/data_structure/6.树.html","/zh/posts/code/data_structure/6.树.md",":md"]],["v-682ba558","/zh/posts/code/data_structure/7.%E5%9B%BE.html",{d:172905854e4,e:`<h1> 图</h1>
<h2> 基本概念</h2>
<p>顶点（vertex）、边（edge） <br>
度（degree）、入度（In-degree）、出度（Out-degree） <br>
树、森林、环 <br>
无向图、有向图、完全有向图、完全无向图 <br>
连通图、联通分量 <br>
带权图（weighted graph）：每条边都有一个权重（weight） <br></p>
<h2> 图的存储</h2>
<h3> 邻接矩阵</h3>
<p>( Adjacency Matrix）--用空间换时间 <br>
 <br>
优：存储简单，获取两个顶点的关系高效。方便计算， 可以将很多图的运算转换成矩阵之间的运算。比如求解最短路径问题时会提到一个Floyd-Warshall 算法，就是利用矩阵循环相乘若干次得到结果。  <br>
缺：无向图有一半空间是浪费的，稀疏图绝大部分的存储空间都被浪费了。   <br></p>`,r:{minutes:29.18,words:8753},y:"a",t:"图",i:"lightbulb"},["/zh/posts/code/data_structure/7.图.html","/zh/posts/code/data_structure/7.图.md",":md"]],["v-2480c8cd","/zh/posts/code/data_structure/8.%E5%93%88%E5%B8%8C%E8%A1%A8%EF%BC%88%E6%95%A3%E5%88%97%E8%A1%A8%EF%BC%89.html",{d:172905854e4,e:`<h1> 哈希表</h1>
<p>hashset或桶（下标模拟hash） <br></p>
<h1> 一致性哈希</h1>
<p><a href="https://zhuanlan.zhihu.com/p/129049724" target="_blank" rel="noopener noreferrer">一致性哈希</a> <br>
可以保证当机器增加或者减少时，节点之间的数据迁移只限于两个节点之间，不会造成全局的网络问题。 <br></p>
`,r:{minutes:.24,words:71},y:"a",t:"哈希表",i:"lightbulb"},["/zh/posts/code/data_structure/8.哈希表（散列表）.html","/zh/posts/code/data_structure/8.哈希表（散列表）.md",":md"]],["v-7b929843","/zh/posts/code/language/Java%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80.html",{d:172905854e4,e:`<h1> Java语言基础</h1>
<p>"对语言的熟悉程度" <br></p>
<ul>
<li><a href="#java%E8%AF%AD%E8%A8%80%E5%9F%BA%E7%A1%80">Java语言基础</a>
<ul>
<li><a href="#%E5%AF%BC%E5%8C%85%E6%B1%87%E6%80%BB">导包汇总</a>
<ul>
<li><a href="#%E5%9F%BA%E6%9C%AC%E5%8C%85%E8%A3%85%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B">基本/包装数据类型</a></li>
<li><a href="#%E7%BB%A7%E6%89%BF">继承</a></li>
<li><a href="#%E5%A4%9A%E6%80%81-%E7%88%B6%E7%B1%BB%E5%BC%95%E7%94%A8%E6%8C%87%E5%90%91%E5%AD%90%E7%B1%BB%E5%AF%B9%E8%B1%A1">多态-父类引用指向子类对象</a></li>
<li><a href="#%E6%8E%A5%E5%8F%A3">接口</a></li>
<li><a href="#%E6%B3%9B%E5%9E%8B-%E7%B1%BB%E5%9E%8B%E5%8F%82%E6%95%B0%E5%8C%96">泛型-类型参数化</a></li>
<li><a href="#lambda%E8%A1%A8%E8%BE%BE%E5%BC%8F--%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0%E5%8C%96">lambda表达式- 函数参数化</a></li>
<li><a href="#io">IO</a>
<ul>
<li><a href="#%E8%BE%93%E5%87%BA">输出</a></li>
<li><a href="#%E8%BE%93%E5%85%A5">输入</a></li>
</ul>
</li>
<li><a href="#biginteger">BigInteger</a></li>
<li><a href="#character">Character*</a></li>
<li><a href="#string">String*</a></li>
<li><a href="#stringbuilder">StringBuilder*</a></li>
<li><a href="#sort">sort</a></li>
<li><a href="#arrays">Arrays</a></li>
<li><a href="#collections-%E9%80%9A%E7%94%A8">Collections 通用*</a></li>
<li><a href="#list">List*</a></li>
<li><a href="#queuestackpirorityqueue%E5%A0%86%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97">Queue&amp;Stack*&amp;PirorityQueue（堆==优先队列）</a></li>
<li><a href="#map">Map</a></li>
<li><a href="#set">Set</a></li>
<li><a href="#objects">Objects</a></li>
</ul>
</li>
<li><a href="#%E7%BD%91%E6%98%93%E8%AF%AD%E6%B3%95%E6%80%BB%E7%BB%93">网易语法总结</a></li>
<li><a href="#%E7%BC%96%E7%A0%81%E8%A7%84%E8%8C%83">编码规范</a></li>
</ul>
</li>
</ul>`,r:{minutes:9.56,words:2869},y:"a",t:"Java语言基础",i:"lightbulb"},["/zh/posts/code/language/Java语言基础.html","/zh/posts/code/language/Java语言基础.md",":md"]],["v-35a127b0","/zh/posts/code/language/python%E7%AE%97%E6%B3%95%E5%88%B7%E9%A2%98%E8%AF%AD%E6%B3%95%E5%BF%AB%E9%80%9F%E6%81%A2%E5%A4%8D.html",{d:172905854e4,e:`<h1> Python算法刷题语法快速恢复</h1>
<h2> 关键词</h2>
<p>and 与
or  或
not 非
is  等于（比较对象）
== 等于（比较值）
True  真
False 假
None 空</p>
<h2> 选择</h2>
<p>n1 = int(num1[i]) if i &gt;= 0 else 0
return True if len(stack) == 0 else False
if root in (None, p, q): return root</p>
<h2> 循环</h2>
<p>while xxx:
for item in nums:
for index, item in enumerate(nums):
for i in range(n)： # 从0到（n-1）
for i in range(1, len(prices)): # 从1到（len-1）
for _ in range(len(q)): # 如果不需要用到遍历的值，用“_”</p>`,r:{minutes:1.89,words:568},y:"a",t:"Python算法刷题语法快速恢复",i:"lightbulb"},["/zh/posts/code/language/python算法刷题语法快速恢复.html","/zh/posts/code/language/python算法刷题语法快速恢复.md",":md"]],["v-3706649a","/404.html",{y:"p",t:""},[]],["v-63554377","/posts/LLM/",{y:"p",t:"L L M"},[]],["v-46e16862","/posts/Language/",{y:"p",t:"Language"},[]],["v-bc4bbbc4","/posts/Python/",{y:"p",t:"Python"},[]],["v-635f59ca","/posts/api/",{y:"p",t:"Api"},[]],["v-08a78e0d","/posts/code/",{y:"p",t:"Code"},[]],["v-76d18eaa","/posts/cs/",{y:"p",t:"Cs"},[]],["v-9c50150c","/posts/docker/",{y:"p",t:"Docker"},[]],["v-7c94a508","/posts/frontend/",{y:"p",t:"Frontend"},[]],["v-09041878","/posts/java/",{y:"p",t:"Java"},[]],["v-6363832c","/posts/juc/",{y:"p",t:"Juc"},[]],["v-63638823","/posts/jvm/",{y:"p",t:"Jvm"},[]],["v-1b5614f0","/posts/linux/",{y:"p",t:"Linux"},[]],["v-152ca16a","/posts/micro_service/",{y:"p",t:"Micro Service"},[]],["v-76d1b3f6","/posts/mq/",{y:"p",t:"Mq"},[]],["v-1dee9b02","/posts/mysql/",{y:"p",t:"Mysql"},[]],["v-d418c61e","/posts/pytorch/",{y:"p",t:"Pytorch"},[]],["v-25561149","/posts/redis/",{y:"p",t:"Redis"},[]],["v-644641a6","/posts/spring/",{y:"p",t:"Spring"},[]],["v-2951b8e9","/posts/tools/",{y:"p",t:"Tools"},[]],["v-648510e9","/posts/Language/topics/",{y:"p",t:"Topics"},[]],["v-a15e0926","/posts/code/algorithm/",{y:"p",t:"Algorithm"},[]],["v-0a474f24","/posts/code/data_structure/",{y:"p",t:"Data Structure"},[]],["v-4232c86a","/posts/code/language/",{y:"p",t:"Language"},[]],["v-083f76e6","/zh/posts/LLM/",{y:"p",t:"L L M"},[]],["v-2e6dfb5a","/zh/posts/Language/",{y:"p",t:"Language"},[]],["v-08498d39","/zh/posts/api/",{y:"p",t:"Api"},[]],["v-0103c87e","/zh/posts/code/",{y:"p",t:"Code"},[]],["v-c5a89d4a","/zh/posts/cs/",{y:"p",t:"Cs"},[]],["v-040f57ab","/zh/posts/docker/",{y:"p",t:"Docker"},[]],["v-016052e9","/zh/posts/java/",{y:"p",t:"Java"},[]],["v-1e7c3ef9","/zh/posts/frontend/",{y:"p",t:"Frontend"},[]],["v-084db69b","/zh/posts/juc/",{y:"p",t:"Juc"},[]],["v-084dbb92","/zh/posts/jvm/",{y:"p",t:"Jvm"},[]],["v-c9a39c40","/zh/posts/langchain/",{y:"p",t:"Langchain"},[]],["v-2e81289f","/zh/posts/linux/",{y:"p",t:"Linux"},[]],["v-3c5c9619","/zh/posts/micro_service/",{y:"p",t:"Micro Service"},[]],["v-c5a852b2","/zh/posts/mq/",{y:"p",t:"Mq"},[]],["v-3119aeb1","/zh/posts/mysql/",{y:"p",t:"Mysql"},[]],["v-de4e2722","/zh/posts/python/",{y:"p",t:"Python"},[]],["v-eaaefe40","/zh/posts/pytorch/",{y:"p",t:"Pytorch"},[]],["v-388124f8","/zh/posts/redis/",{y:"p",t:"Redis"},[]],["v-2014415e","/zh/posts/spring/",{y:"p",t:"Spring"},[]],["v-3c7ccc98","/zh/posts/tools/",{y:"p",t:"Tools"},[]],["v-7f8a95d8","/zh/posts/Language/topics/",{y:"p",t:"Topics"},[]],["v-6e1f9c9e","/zh/posts/code/algorithm/",{y:"p",t:"Algorithm"},[]],["v-6c12c493","/zh/posts/code/data_structure/",{y:"p",t:"Data Structure"},[]],["v-6962bd19","/zh/posts/code/language/",{y:"p",t:"Language"},[]],["v-5bc93818","/category/",{y:"p",t:"Category",I:!1},[]],["v-744d024e","/tag/",{y:"p",t:"Tag",I:!1},[]],["v-e52c881c","/article/",{y:"p",t:"Articles",I:!1},[]],["v-154dc4c4","/star/",{y:"p",t:"Star",I:!1},[]],["v-01560935","/timeline/",{y:"p",t:"Timeline",I:!1},[]],["v-65f226fa","/category/llm/",{y:"p",t:"LLM Category",I:!1},[]],["v-b30c33a0","/tag/llm/",{y:"p",t:"Tag: LLM",I:!1},[]],["v-54d7ff21","/zh/article/",{y:"p",t:"文章",I:!1},[]],["v-2c3ee7f5","/zh/star/",{y:"p",t:"星标",I:!1},[]],["v-27b02be6","/zh/timeline/",{y:"p",t:"时间轴",I:!1},[]],["v-494b3a18","/category/conversation/",{y:"p",t:"Conversation Category",I:!1},[]],["v-4c399930","/tag/commen-mistakes/",{y:"p",t:"Tag: Commen Mistakes",I:!1},[]],["v-78cbe7bb","/category/python/",{y:"p",t:"Python Category",I:!1},[]],["v-da453c94","/tag/grammar/",{y:"p",t:"Tag: Grammar",I:!1},[]],["v-bdd621d8","/category/pytorch/",{y:"p",t:"Pytorch Category",I:!1},[]],["v-83049d70","/tag/pronunciation/",{y:"p",t:"Tag: Pronunciation",I:!1},[]],["v-fbb94a6e","/zh/category/",{y:"p",t:"分类",I:!1},[]],["v-04391248","/tag/sentence-pattern-and-expression/",{y:"p",t:"Tag: Sentence Pattern and Expression",I:!1},[]],["v-8facedaa","/zh/category/llm/",{y:"p",t:"LLM 分类",I:!1},[]],["v-245f5676","/tag/python/",{y:"p",t:"Tag: Python",I:!1},[]],["v-1340303a","/zh/category/conversation/",{y:"p",t:"Conversation 分类",I:!1},[]],["v-66c3b96c","/tag/pytorch/",{y:"p",t:"Tag: Pytorch",I:!1},[]],["v-13d78bea","/zh/category/python/",{y:"p",t:"Python 分类",I:!1},[]],["v-e6c5fb30","/tag/careers/",{y:"p",t:"Tag: Careers",I:!1},[]],["v-677dd0c5","/zh/category/pytorch/",{y:"p",t:"Pytorch 分类",I:!1},[]],["v-2cae7d96","/tag/common/",{y:"p",t:"Tag: Common",I:!1},[]],["v-084b0ce7","/tag/communication/",{y:"p",t:"Tag: Communication",I:!1},[]],["v-4f072b45","/tag/computers/",{y:"p",t:"Tag: Computers",I:!1},[]],["v-143a738c","/tag/describing-something/",{y:"p",t:"Tag: Describing something",I:!1},[]],["v-23ce7695","/tag/dreams-and-wishes/",{y:"p",t:"Tag: Dreams and Wishes",I:!1},[]],["v-5e25924e","/tag/graduating/",{y:"p",t:"Tag: Graduating",I:!1},[]],["v-55c05ce3","/tag/greetings/",{y:"p",t:"Tag: Greetings",I:!1},[]],["v-5d23f08d","/tag/hobbies/",{y:"p",t:"Tag: Hobbies",I:!1},[]],["v-fcd998da","/tag/immigration/",{y:"p",t:"Tag: Immigration",I:!1},[]],["v-5ac057c7","/tag/introduction/",{y:"p",t:"Tag: Introduction",I:!1},[]],["v-689f2654","/tag/phone-and-email/",{y:"p",t:"Tag: Phone and email",I:!1},[]],["v-e54ce78e","/tag/routine/",{y:"p",t:"Tag: Routine",I:!1},[]],["v-29324574","/tag/time/",{y:"p",t:"Tag: Time",I:!1},[]],["v-9727c2c8","/tag/traits/",{y:"p",t:"Tag: Traits",I:!1},[]],["v-540234fd","/zh/tag/",{y:"p",t:"标签",I:!1},[]],["v-6de8295f","/zh/tag/llm/",{y:"p",t:"标签: LLM",I:!1},[]],["v-73698ddf","/zh/tag/commen-mistakes/",{y:"p",t:"标签: Commen Mistakes",I:!1},[]],["v-b3ef1536","/zh/tag/grammar/",{y:"p",t:"标签: Grammar",I:!1},[]],["v-759df492","/zh/tag/pronunciation/",{y:"p",t:"标签: Pronunciation",I:!1},[]],["v-0dc06e12","/zh/tag/sentence-pattern-and-expression/",{y:"p",t:"标签: Sentence Pattern and Expression",I:!1},[]],["v-33a6e194","/zh/tag/python/",{y:"p",t:"标签: Python",I:!1},[]],["v-406d920e","/zh/tag/pytorch/",{y:"p",t:"标签: Pytorch",I:!1},[]],["v-c06fd3d2","/zh/tag/careers/",{y:"p",t:"标签: Careers",I:!1},[]],["v-250ab807","/zh/tag/common/",{y:"p",t:"标签: Common",I:!1},[]],["v-0efe6156","/zh/tag/communication/",{y:"p",t:"标签: Communication",I:!1},[]],["v-43bc0f34","/zh/tag/computers/",{y:"p",t:"标签: Computers",I:!1},[]],["v-c8f9d786","/zh/tag/describing-something/",{y:"p",t:"标签: Describing something",I:!1},[]],["v-3ed3fb84","/zh/tag/dreams-and-wishes/",{y:"p",t:"标签: Dreams and Wishes",I:!1},[]],["v-72d4d0ca","/zh/tag/graduating/",{y:"p",t:"标签: Graduating",I:!1},[]],["v-4a7540d2","/zh/tag/greetings/",{y:"p",t:"标签: Greetings",I:!1},[]],["v-704f043c","/zh/tag/hobbies/",{y:"p",t:"标签: Hobbies",I:!1},[]],["v-1c9ed7c2","/zh/tag/immigration/",{y:"p",t:"标签: Immigration",I:!1},[]],["v-21293978","/zh/tag/introduction/",{y:"p",t:"标签: Introduction",I:!1},[]],["v-1a3f3cf6","/zh/tag/phone-and-email/",{y:"p",t:"标签: Phone and email",I:!1},[]],["v-bef6c030","/zh/tag/routine/",{y:"p",t:"标签: Routine",I:!1},[]],["v-4f8c6825","/zh/tag/time/",{y:"p",t:"标签: Time",I:!1},[]],["v-a66f4de6","/zh/tag/traits/",{y:"p",t:"标签: Traits",I:!1},[]]];var qo=z({name:"Vuepress",setup(){const e=ud();return()=>o(e.value)}}),q5=()=>H5.reduce((e,[t,n,r,a])=>(e.push({name:t,path:n,component:qo,meta:r},{path:n.endsWith("/")?n+"index.html":n.substring(0,n.length-5),redirect:n},...a.map(l=>({path:l===":md"?n.substring(0,n.length-5)+".md":l,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:qo}]),G5=Fd,U5=()=>{const e=v0({history:G5(Ul("/blog/")),routes:q5(),scrollBehavior:(t,n,r)=>r||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{var r;(t.path!==n.path||n===It)&&([t.meta._data]=await Promise.all([kt.resolvePageData(t.name),(r=Xs[t.name])==null?void 0:r.__asyncLoader()]))}),e},J5=e=>{e.component("ClientOnly",ha),e.component("Content",oc)},W5=(e,t,n)=>{const r=Do(()=>t.currentRoute.value.path),a=Do(()=>kt.resolveRouteLocale(_n.value.locales,r.value)),l=Aa(r,()=>t.currentRoute.value.meta._data),i=D(()=>kt.resolveLayouts(n)),s=D(()=>kt.resolveSiteLocaleData(_n.value,a.value)),u=D(()=>kt.resolvePageFrontmatter(l.value)),p=D(()=>kt.resolvePageHeadTitle(l.value,s.value)),E=D(()=>kt.resolvePageHead(p.value,u.value,s.value)),d=D(()=>kt.resolvePageLang(l.value,s.value)),h=D(()=>kt.resolvePageLayout(l.value,i.value));return e.provide(id,i),e.provide(Zs,l),e.provide(ec,u),e.provide(cd,p),e.provide(tc,E),e.provide(nc,d),e.provide(ac,h),e.provide(Jl,a),e.provide(ic,s),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>u.value},$head:{get:()=>E.value},$headTitle:{get:()=>p.value},$lang:{get:()=>d.value},$page:{get:()=>l.value},$routeLocale:{get:()=>a.value},$site:{get:()=>_n.value},$siteLocale:{get:()=>s.value},$withBase:{get:()=>ye}}),{layouts:i,pageData:l,pageFrontmatter:u,pageHead:E,pageHeadTitle:p,pageLang:d,pageLayout:h,routeLocale:a,siteData:_n,siteLocaleData:s}},K5=()=>{const e=sd(),t=rc(),n=X([]),r=()=>{e.value.forEach(l=>{const i=Q5(l);i&&n.value.push(i)})},a=()=>{document.documentElement.lang=t.value,n.value.forEach(l=>{l.parentNode===document.head&&document.head.removeChild(l)}),n.value.splice(0,n.value.length),e.value.forEach(l=>{const i=Y5(l);i!==null&&(document.head.appendChild(i),n.value.push(i))})};mt(Ed,a),ge(()=>{r(),a(),he(()=>e.value,a)})},Q5=([e,t,n=""])=>{const r=Object.entries(t).map(([s,u])=>le(u)?`[${s}=${JSON.stringify(u)}]`:u===!0?`[${s}]`:"").join(""),a=`head > ${e}${r}`;return Array.from(document.querySelectorAll(a)).find(s=>s.innerText===n)||null},Y5=([e,t,n])=>{if(!le(e))return null;const r=document.createElement(e);return da(t)&&Object.entries(t).forEach(([a,l])=>{le(l)?r.setAttribute(a,l):l===!0&&r.setAttribute(a,"")}),le(n)&&r.appendChild(document.createTextNode(n)),r},X5=WE,Z5=async()=>{var n;const e=X5({name:"VuepressApp",setup(){var r;K5();for(const a of Gr)(r=a.setup)==null||r.call(a);return()=>[o(_c),...Gr.flatMap(({rootComponents:a=[]})=>a.map(l=>o(l)))]}}),t=U5();J5(e),W5(e,t,Gr);for(const r of Gr)await((n=r.enhance)==null?void 0:n.call(r,{app:e,router:t,siteData:_n}));return e.use(t),{app:e,router:t}};Z5().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{zs as a,$s as b,ev as c,Z5 as createVueApp,ke as d,tv as e,nv as f,tE as o,ct as r,d8 as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index.html-KP3Nhwvm.js","assets/plugin-vue_export-helper-x3n3nnut.js","assets/intro.html-ZAk8GTGA.js","assets/index.html-AvyRNOve.js","assets/index.html-wQOb7UJg.js","assets/index.html--ePJ8j1q.js","assets/intro.html-BqLWcbMS.js","assets/langchain.html-ZWehPOnH.js","assets/langchain_source_code.html-TceCWIOy.js","assets/llama.html-X6uNo2ra.js","assets/llm_summary.html-9VaamIID.js","assets/streamlit.html-rgJth-7G.js","assets/transformer.html-3VIzg4_z.js","assets/commen_mistakes.html-MSLAMRwu.js","assets/grammar.html-RvLOBsLt.js","assets/pronunciation.html-uihjXDHV.js","assets/sentence_pattern_and_expression.html-npuHnD0T.js","assets/01_python_environment.html-K6Pr2cjA.js","assets/02_python_data_type.html-Tg1AMcbk.js","assets/03_python_operator.html-Ivd8pJ-I.js","assets/04_python_method.html-9w57UYBW.js","assets/05_python_builtin_module.html-uKTEtJx_.js","assets/06_python_popular_package.html-4E8UMLOD.js","assets/GraphQL.html-HDNGRDOT.js","assets/算法提升.html-xjIbGpss.js","assets/经典题汇总（每个细分类限定10题以内）.html-kLMPnAXy.js","assets/CSAPP.html-nrl-NpjF.js","assets/Netty.html-d_D4MoBM.js","assets/RPC.html-tPJ7iYJ1.js","assets/操作系统.html-HCtQS7lu.js","assets/浏览器技能.html-wxqxH6R8.js","assets/网络.html-sr-va6lw.js","assets/计算机技能.html-fkuHdajH.js","assets/Docker.html-swJN_-ea.js","assets/K8S.html-pEP50Dts.js","assets/AntDesign.html-iF3nuoRS.js","assets/CSS.html-GQdjrEsD.js","assets/Expo.html-Qy_xBjnq.js","assets/Frontend.html-mS4Y4o1w.js","assets/HTML.html-NPta3FF8.js","assets/JavaScript.html-YFce6KAG.js","assets/Practice.html-xwPK6OEI.js","assets/React.html-KYLOblY-.js","assets/npm.html-uxGzmTbA.js","assets/Java8学习笔记.html-0ZMGNWh9.js","assets/基础.html-Kv2Vui69.js","assets/集合.html-Ii57ZSDu.js","assets/juc.html-uoA6MJWg.js","assets/jvm.html-4l8WCoF3.js","assets/linux.html-4dY6LuxG.js","assets/MicroService.html-bWu-TV2p.js","assets/MybatisPlus.html-KKJQzrIf.js","assets/mq.html-75UZwoSF.js","assets/SQL.html-Tbeuu3Fy.js","assets/mysql.html-S5sF__rc.js","assets/01_ai_concept.html-RRctnSLc.js","assets/02_neural_net_train.html-Fd76CqEM.js","assets/03_pytorch_operation.html-lhtuyV94.js","assets/04_pytorch_practice_nn.html-G7xOCb7e.js","assets/05_linear_nn.html-jopNBTck.js","assets/06_heterogeneous_graph.html-Q-X4LMoJ.js","assets/redis.html-Ae4nZ3Ek.js","assets/spring.html-EplXiXIb.js","assets/IDEA_Keymap.html-__2uzry1.js","assets/IDEA_Problem_and_plugin.html-eZoaW5FP.js","assets/Markdown.html-5niWgdwD.js","assets/Maven--java包管理工具.html-rCLacUt-.js","assets/Poetry--python包管理工具.html-_IZGO8y2.js","assets/index.html-WvZq75b-.js","assets/index.html-UGt1UrQW.js","assets/careers.html-bNc7bZTH.js","assets/common.html-o9A9EUoI.js","assets/communication.html-Irq_EMFH.js","assets/computers.html-8ak2wIfu.js","assets/describing_something.html-W5IZV2KJ.js","assets/dreams.html-IiBIY7x9.js","assets/graduating.html-KEJ2PNXf.js","assets/greetings.html-wgTU00do.js","assets/hobbies.html-UWQCGpnR.js","assets/immigration.html-Vl0ZWbXm.js","assets/introducing_someone.html-zx_5RWdi.js","assets/phone.html-jIxOcQ8n.js","assets/routine.html-ehVtSfuj.js","assets/time_and_weather.html-BazI0HtA.js","assets/traits.html--qr6cvwo.js","assets/0.时空复杂度.html-bBB0KoI6.js","assets/1.分治思想_递归实现.html-1gFg7UeK.js","assets/2.二进制_位运算.html-C6bKKwXg.js","assets/3.排序.html-P5cgymzC.js","assets/4.二分查找.html-Hnca59Xx.js","assets/5.动态规划_贪心.html-mDlRtByl.js","assets/6.字符串.html-spc1ttj7.js","assets/7.数学.html-Ffu-vV_a.js","assets/8.算法技巧.html-J8cIbRW0.js","assets/1.数组.html-ItwuScgA.js","assets/2.链表.html-I5R2ycd-.js","assets/3.栈.html-F4pnJRF4.js","assets/4.队列.html--_rpWBec.js","assets/5.堆（优先队列）.html-tWfVJmcH.js","assets/6.树.html-lDB9HNfl.js","assets/7.图.html-PuR6bgah.js","assets/8.哈希表（散列表）.html-M4tUFlyS.js","assets/Java语言基础.html-6bww4M-X.js","assets/python算法刷题语法快速恢复.html-sI8mS6ok.js","assets/langchain.html-iCb9V2JS.js","assets/langchain_source_code.html-opNDH4tv.js","assets/llama.html-zvbnKkom.js","assets/llama_advanced.html-KFjF5i6Z.js","assets/llm_summary.html-oB0oG5Te.js","assets/streamlit.html-DtBAbcup.js","assets/transformer.html-pQMLBpSl.js","assets/commen_mistakes.html-8IF3Ipvm.js","assets/grammar.html-iM7hsYBy.js","assets/pronunciation.html-wAVvvr2R.js","assets/sentence_pattern_and_expression.html-RLVJ3msA.js","assets/GraphQL.html-3Y6-lPGt.js","assets/算法提升.html-qt-Fqxoi.js","assets/经典题汇总（每个细分类限定10题以内）.html-_a9yoU5w.js","assets/CSAPP.html-NSXogoid.js","assets/Netty.html-TJdA23cu.js","assets/RPC.html-yA6R_PN0.js","assets/操作系统.html-BoovfzHh.js","assets/浏览器技能.html-3WHHyW_e.js","assets/网络.html-CV3E7NCR.js","assets/计算机技能.html-tsSKrt-G.js","assets/Docker.html-w0DhF4Ot.js","assets/K8S.html-cAxRpRvb.js","assets/Java8学习笔记.html-VLJ9RROP.js","assets/基础.html-YzsVYCHe.js","assets/集合.html-sLVuFHOf.js","assets/AntDesign.html-DAaPDWwm.js","assets/CSS.html-pYJZ7pMv.js","assets/Expo.html-7gW71gi4.js","assets/Frontend.html-odsakoEC.js","assets/HTML.html-SgmJHRd8.js","assets/JavaScript.html-kw11PEWu.js","assets/Practice.html-wHFT7AxT.js","assets/React.html-x4ZSPH1q.js","assets/npm.html-_UNYSiiZ.js","assets/juc.html-lndZzNUQ.js","assets/jvm.html-cCrvyYF1.js","assets/langchain.html-J1l_CBZU.js","assets/langchain_source_code.html-vKmMRsDj.js","assets/streamlit.html-G2auisuq.js","assets/linux.html-zo0yqRFD.js","assets/MicroService.html-apZ28wAy.js","assets/MybatisPlus.html-Kzq0ljyO.js","assets/mq.html-OZ0xAZXN.js","assets/SQL.html-G9STxyV0.js","assets/mysql.html-3RhophA0.js","assets/01_python_environment.html-vKkN4YFF.js","assets/02_python_data_type.html-vfjKkymO.js","assets/03_python_operator.html-Ql2moYSw.js","assets/04_python_method.html-ldCD9bTH.js","assets/05_python_builtin_module.html-gyXt34Fd.js","assets/06_python_popular_package.html-qqpAcEe0.js","assets/01_ai_concept.html-fgbncfGK.js","assets/02_neural_net_train.html-sXNuLe3j.js","assets/03_pytorch_operation.html-YpSKRs6B.js","assets/04_pytorch_practice_nn.html-Fowb8vx-.js","assets/05_linear_nn.html-vaWMswje.js","assets/06_heterogeneous_graph.html-vq9OwT5Z.js","assets/AI_evolution.html-R6uIuqKW.js","assets/redis.html-l5hLyy-c.js","assets/spring.html-4Q7A3eUG.js","assets/IDEA_Keymap.html-nz-0YGCa.js","assets/IDEA_Problem_and_plugin.html-p62DFOCX.js","assets/Markdown.html-HK9M6btB.js","assets/Maven--java包管理工具.html-WNzF86-7.js","assets/Poetry--python包管理工具.html-TpUmw-OB.js","assets/careers.html-rKRNtK0N.js","assets/common.html-5wRR3Wk-.js","assets/communication.html-Cwd1VTDo.js","assets/computers.html-Xj4o4vfH.js","assets/describing_something.html-O9sPIZYS.js","assets/dreams.html-AggOsb--.js","assets/graduating.html-AZZVqwyn.js","assets/greetings.html-zZf8m_By.js","assets/hobbies.html-IkZLAkBS.js","assets/immigration.html-BjFXuVI5.js","assets/introducing_someone.html-9zM5Sv_e.js","assets/phone.html-hcQ6c6d3.js","assets/routine.html-wR88D0Ah.js","assets/time_and_weather.html-cdhyEQU4.js","assets/traits.html-ldp1L4cg.js","assets/0.时空复杂度.html-VgOfmdce.js","assets/1.分治思想_递归实现.html-xrNFxD3i.js","assets/2.二进制_位运算.html-c7ZhThQc.js","assets/3.排序.html-2609tx3z.js","assets/4.二分查找.html-sxq3H8Qm.js","assets/5.动态规划_贪心.html-JEfnZn9H.js","assets/6.字符串.html-9laxOOFS.js","assets/7.数学.html-R1lMXiJD.js","assets/8.算法技巧.html-c2Fgzh2q.js","assets/1.数组.html-2kXDJvUO.js","assets/2.链表.html-fcDwZEVJ.js","assets/3.栈.html-RdhRGDzT.js","assets/4.队列.html-POG1LizY.js","assets/5.堆（优先队列）.html-mrn_Cs4Y.js","assets/6.树.html-3eBJUXFu.js","assets/7.图.html-jUz63SfW.js","assets/8.哈希表（散列表）.html-CHR98Exf.js","assets/Java语言基础.html-h6kTvliv.js","assets/python算法刷题语法快速恢复.html-t6X3EaML.js","assets/404.html-rOHXGR4I.js","assets/index.html-qcii__N9.js","assets/index.html-LZtuyW6a.js","assets/index.html-tv5K203c.js","assets/index.html-d5SOKgjM.js","assets/index.html-IKlMoWMr.js","assets/index.html-iTgmscjZ.js","assets/index.html-Ty6Ho1L0.js","assets/index.html-RD4v8IRN.js","assets/index.html-0H75k_fd.js","assets/index.html-XgiV2ub-.js","assets/index.html-CIqPG6m8.js","assets/index.html-TRzr-eeP.js","assets/index.html-tBiqxUGU.js","assets/index.html-YWb2EiDn.js","assets/index.html-CGx_uKxa.js","assets/index.html-NWN9cvvi.js","assets/index.html-pdZbtG7R.js","assets/index.html-8E50WBdG.js","assets/index.html-iiC8pvUo.js","assets/index.html-3arpiOSa.js","assets/index.html-uyyxzKYy.js","assets/index.html-9rWS1rqO.js","assets/index.html-yUfHSbv6.js","assets/index.html-1xwGOBOt.js","assets/index.html-k2z9ROWI.js","assets/index.html-ahLmlEYY.js","assets/index.html-1K3OgKhC.js","assets/index.html-jvbG1TyM.js","assets/index.html-90Ry0M9n.js","assets/index.html-coXrALJp.js","assets/index.html-RwtvECtJ.js","assets/index.html-aVkn1tL5.js","assets/index.html-t5MWxJBG.js","assets/index.html-WWRz_DTN.js","assets/index.html-eDIGCcVA.js","assets/index.html-geWhGMX1.js","assets/index.html-qsCsL7Ru.js","assets/index.html-dKOmoJYf.js","assets/index.html-f3L9w_5o.js","assets/index.html-MQki_pDu.js","assets/index.html-9ONyJcLq.js","assets/index.html-zxtM_2wi.js","assets/index.html-PFnVWAPy.js","assets/index.html-1whSkpAE.js","assets/index.html-kLR5Kihg.js","assets/index.html-pQRr4ltI.js","assets/index.html-LqUFt9tW.js","assets/index.html-pYvek_4C.js","assets/index.html-IJsrrOdK.js","assets/index.html-Xrs1GPOW.js","assets/index.html-FwkXUxYF.js","assets/index.html-Iow68ZSV.js","assets/index.html-v-LpSGYd.js","assets/index.html-HIvHzwqi.js","assets/index.html-uBvxBxPQ.js","assets/index.html-QQ1EbEmm.js","assets/index.html-yXATMGYL.js","assets/index.html-ThY2wMQV.js","assets/index.html-7MZ4tZkP.js","assets/index.html-1ag-M5EN.js","assets/index.html-aSFdZYie.js","assets/index.html-EvsFgWLR.js","assets/index.html-0-v-HEqL.js","assets/index.html-0A0lQn7t.js","assets/index.html-GpbQvslw.js","assets/index.html-C5dqdPp6.js","assets/index.html-e82O_aRW.js","assets/index.html-1AvS51wa.js","assets/index.html-3-2ognqK.js","assets/index.html-0TIvNDdB.js","assets/index.html-v8UjiB92.js","assets/index.html-wLOj1NXM.js","assets/index.html-Wjtrd9UJ.js","assets/index.html-5cwjHXKU.js","assets/index.html-nt8SrnsG.js","assets/index.html--Y4_gCLh.js","assets/index.html-1kvrqnuQ.js","assets/index.html-gGuimI4B.js","assets/index.html-QF-Cbjp8.js","assets/index.html-iTlOj6IJ.js","assets/index.html-F4YTA8xp.js","assets/index.html-gJLEKdow.js","assets/index.html-zIzGvvFW.js","assets/index.html-w_pn0tK1.js","assets/index.html-6BE4kWnD.js","assets/index.html-kiUmI141.js","assets/index.html-RXlPqgN5.js","assets/index.html-OLy_B4Gm.js","assets/index.html-Tka6Uy5i.js","assets/index.html-XIs_Swn2.js","assets/index.html-j7LE1HVT.js","assets/index.html-ZXRTYXGV.js","assets/index.html-B4ERcwhE.js","assets/index.html-QSYAgBZU.js","assets/index.html-5zBrxHvk.js","assets/index.html-6icPMUjm.js","assets/index.html-C53CPM1B.js","assets/index.html-wxkI92HI.js","assets/index.html-tARJ3ZQM.js","assets/index.html-hNH6L70F.js","assets/index.html-wfiXNLYo.js","assets/index.html-A0PHnPH1.js","assets/index.html-7URhB9oq.js","assets/index.html-swZzQYK-.js","assets/index.html-7BVYKfRJ.js","assets/index.html--H5SAMJd.js","assets/index.html-jGi6a0pF.js","assets/index.html-BVcCW4M7.js","assets/index.html-01c89sRX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
