var Gl=Object.defineProperty;var Wl=(e,t,n)=>t in e?Gl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var O=(e,t,n)=>(Wl(e,typeof t!="symbol"?t+"":t,n),n),da=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)};var h=(e,t,n)=>(da(e,t,"read from private field"),n?n.call(e):t.get(e)),S=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},P=(e,t,n,r)=>(da(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n);var V=(e,t,n)=>(da(e,t,"access private method"),n);var Wi=Array.isArray,ql=Array.prototype.indexOf,Rn=Array.prototype.includes,Zl=Array.from,Ir=Object.keys,qn=Object.defineProperty,bn=Object.getOwnPropertyDescriptor,Jl=Object.getOwnPropertyDescriptors,Xl=Object.prototype,Ql=Array.prototype,qi=Object.getPrototypeOf,Si=Object.isExtensible;const Nt=()=>{};function es(e){for(var t=0;t<e.length;t++)e[t]()}function Zi(){var e,t,n=new Promise((r,a)=>{e=r,t=a});return{promise:n,resolve:e,reject:t}}const ye=2,In=4,Kr=8,Ha=1<<24,tt=16,gt=32,Tt=64,ka=128,Ge=512,de=1024,be=2048,bt=4096,We=8192,rt=16384,zt=32768,xa=1<<25,Vt=65536,Or=1<<17,ts=1<<18,un=1<<19,ns=1<<20,ln=65536,Pr=1<<21,mn=1<<22,Ut=1<<23,yn=Symbol("$state"),rs=Symbol("legacy props"),as=Symbol(""),Er=Symbol("attributes"),Ea=Symbol("class"),Sa=Symbol("style"),jn=Symbol("text"),Hn=Symbol("form reset"),Yr=new class extends Error{constructor(){super(...arguments);O(this,"name","StaleReactionError");O(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Bi;const cr=!!((Bi=globalThis.document)!=null&&Bi.contentType)&&globalThis.document.contentType.includes("xml"),ur=3,fr=8;function Ji(e){return e===this.v}function Xi(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function is(e){return!Xi(e,this.v)}function os(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ls(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ss(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function cs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function us(e){throw new Error("https://svelte.dev/e/effect_orphan")}function fs(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hs(){throw new Error("https://svelte.dev/e/hydration_failed")}function ds(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function vs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ps(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function gs(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const bs=1,ms=2,Ka="[",Qi="[!",Ci="[?",eo="]",sn={},ue=Symbol("uninitialized"),to="http://www.w3.org/1999/xhtml",ys="http://www.w3.org/2000/svg",ws="http://www.w3.org/1998/Math/MathML",_s="@attach";let Oe=null;function On(e){Oe=e}function Rt(e,t=!1,n){Oe={p:Oe,i:!1,c:null,e:null,s:e,x:null,r:M,l:null}}function It(e){var t=Oe,n=t.e;if(n!==null){t.e=null;for(var r of n)Do(r)}return e!==void 0&&(t.x=e),t.i=!0,Oe=t.p,e!=null?e:{}}function no(){return!0}let Gt=[];function ro(){var e=Gt;Gt=[],es(e)}function $t(e){if(Gt.length===0&&!Yn){var t=Gt;queueMicrotask(()=>{t===Gt&&ro()})}Gt.push(e)}function ks(){for(;Gt.length>0;)ro()}function xs(){console.warn("https://svelte.dev/e/derived_inert")}function hr(e){console.warn("https://svelte.dev/e/hydration_mismatch")}function Es(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Ss(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}let U=!1;function pt(e){U=e}let N;function $e(e){if(e===null)throw hr(),sn;return N=e}function cn(){return $e(wt(N))}function te(e){if(U){if(wt(N)!==null)throw hr(),sn;N=e}}function Ya(e=1){if(U){for(var t=e,n=N;t--;)n=wt(n);N=n}}function Ga(e=!0){for(var t=0,n=N;;){if(n.nodeType===fr){var r=n.data;if(r===eo){if(t===0)return n;t-=1}else(r===Ka||r===Qi||r[0]==="["&&!isNaN(Number(r.slice(1))))&&(t+=1)}var a=wt(n);e&&n.remove(),n=a}}function ao(e){if(!e||e.nodeType!==fr)throw hr(),sn;return e.data}function Ct(e){if(typeof e!="object"||e===null||yn in e)return e;const t=qi(e);if(t!==Xl&&t!==Ql)return e;var n=new Map,r=Wi(e),a=F(0),o=on,u=l=>{if(on===o)return l();var s=j,c=on;Ze(null),Pi(o);var d=l();return Ze(s),Pi(c),d};return r&&n.set("length",F(e.length)),new Proxy(e,{defineProperty(l,s,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&ds();var d=n.get(s);return d===void 0?u(()=>{var p=F(c.value);return n.set(s,p),p}):$(d,c.value,!0),!0},deleteProperty(l,s){var c=n.get(s);if(c===void 0){if(s in l){const d=u(()=>F(ue));n.set(s,d),Gn(a)}}else $(c,ue),Gn(a);return!0},get(l,s,c){var b;if(s===yn)return e;var d=n.get(s),p=s in l;if(d===void 0&&(!p||(b=bn(l,s))!=null&&b.writable)&&(d=u(()=>{var m=Ct(p?l[s]:ue),x=F(m);return x}),n.set(s,d)),d!==void 0){var v=i(d);return v===ue?void 0:v}return Reflect.get(l,s,c)},getOwnPropertyDescriptor(l,s){var c=Reflect.getOwnPropertyDescriptor(l,s);if(c&&"value"in c){var d=n.get(s);d&&(c.value=i(d))}else if(c===void 0){var p=n.get(s),v=p==null?void 0:p.v;if(p!==void 0&&v!==ue)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return c},has(l,s){var v;if(s===yn)return!0;var c=n.get(s),d=c!==void 0&&c.v!==ue||Reflect.has(l,s);if(c!==void 0||M!==null&&(!d||(v=bn(l,s))!=null&&v.writable)){c===void 0&&(c=u(()=>{var b=d?Ct(l[s]):ue,m=F(b);return m}),n.set(s,c));var p=i(c);if(p===ue)return!1}return d},set(l,s,c,d){var ie;var p=n.get(s),v=s in l;if(r&&s==="length")for(var b=c;b<p.v;b+=1){var m=n.get(b+"");m!==void 0?$(m,ue):b in l&&(m=u(()=>F(ue)),n.set(b+"",m))}if(p===void 0)(!v||(ie=bn(l,s))!=null&&ie.writable)&&(p=u(()=>F(void 0)),$(p,Ct(c)),n.set(s,p));else{v=p.v!==ue;var x=u(()=>Ct(c));$(p,x)}var L=Reflect.getOwnPropertyDescriptor(l,s);if(L!=null&&L.set&&L.set.call(d,c),!v){if(r&&typeof s=="string"){var C=n.get("length"),Z=Number(s);Number.isInteger(Z)&&Z>=C.v&&$(C,Z+1)}Gn(a)}return!0},ownKeys(l){i(a);var s=Reflect.ownKeys(l).filter(p=>{var v=n.get(p);return v===void 0||v.v!==ue});for(var[c,d]of n)d.v!==ue&&!(c in l)&&s.push(c);return s},setPrototypeOf(){vs()}})}function $i(e){try{if(e!==null&&typeof e=="object"&&yn in e)return e[yn]}catch(t){}return e}function Cs(e,t){return Object.is($i(e),$i(t))}var rn,Ca,io,oo,lo;function $a(){if(rn===void 0){rn=window,Ca=document,io=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;oo=bn(t,"firstChild").get,lo=bn(t,"nextSibling").get,Si(e)&&(e[Ea]=void 0,e[Er]=null,e[Sa]=void 0,e.__e=void 0),Si(n)&&(n[jn]=void 0)}}function mt(e=""){return document.createTextNode(e)}function Ue(e){return oo.call(e)}function wt(e){return lo.call(e)}function le(e,t){if(!U)return Ue(e);var n=Ue(N);if(n===null)n=N.appendChild(mt());else if(t&&n.nodeType!==ur){var r=mt();return n==null||n.before(r),$e(r),r}return t&&Gr(n),$e(n),n}function vn(e,t=!1){if(!U){var n=Ue(e);return n instanceof Comment&&n.data===""?wt(n):n}if(t){if((N==null?void 0:N.nodeType)!==ur){var r=mt();return N==null||N.before(r),$e(r),r}Gr(N)}return N}function ne(e,t=1,n=!1){let r=U?N:e;for(var a;t--;)a=r,r=wt(r);if(!U)return r;if(n){if((r==null?void 0:r.nodeType)!==ur){var o=mt();return r===null?a==null||a.after(o):r.before(o),$e(o),o}Gr(r)}return $e(r),r}function $s(e){e.textContent=""}function Wa(e,t,n){let r;return document.createElementNS(t!=null?t:to,e,r)}function Gr(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===ur;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function so(e){var t=M;if(t===null)return j.f|=Ut,e;if(!(t.f&zt)&&!(t.f&In))throw e;Dt(e,t)}function Dt(e,t){for(;t!==null;){if(t.f&ka){if(!(t.f&zt))throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}const Ts=-7169;function ce(e,t){e.f=e.f&Ts|t}function qa(e){e.f&Ge||e.deps===null?ce(e,de):ce(e,bt)}function co(e){if(e!==null)for(const t of e)!(t.f&ye)||!(t.f&ln)||(t.f^=ln,co(t.deps))}function uo(e,t,n){e.f&be?t.add(e):e.f&bt&&n.add(e),co(e.deps),ce(e,de)}function fo(e,t,n){if(e==null)return t(void 0),Nt;const r=pr(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}const hn=[];function As(e,t=Nt){let n=null;const r=new Set;function a(l){if(Xi(e,l)&&(e=l,n)){const s=!hn.length;for(const c of r)c[1](),hn.push(c,e);if(s){for(let c=0;c<hn.length;c+=2)hn[c][0](hn[c+1]);hn.length=0}}}function o(l){a(l(e))}function u(l,s=Nt){const c=[l,s];return r.add(c),r.size===1&&(n=t(a,o)||Nt),l(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:a,update:o,subscribe:u}}function zn(e){let t;return fo(e,n=>t=n)(),t}let Ta=Symbol("unmounted");function Ti(e,t,n){var o;const r=(o=n[t])!=null?o:n[t]={store:null,source:Co(void 0),unsubscribe:Nt};if(r.store!==e&&!(Ta in n))if(r.unsubscribe(),r.store=e!=null?e:null,e==null)r.source.v=void 0,r.unsubscribe=Nt;else{var a=!0;r.unsubscribe=fo(e,u=>{a?r.source.v=u:$(r.source,u)}),a=!1}return e&&Ta in n?zn(e):i(r.source)}function Rs(){const e={};function t(){qr(()=>{for(var n in e)e[n].unsubscribe();qn(e,Ta,{enumerable:!1,value:!0})})}return[e,t]}let va=null,dn=null,A=null,Kn=null,ge=null,Aa=null,Yn=!1,pa=!1,gn=null,Sr=null;var Ai=0;let Is=1;var wn,Ot,Jt,_n,kn,Xt,xn,_t,Jn,Me,Xn,Pt,ht,dt,En,Sn,Qn,Ra,Qt,Bn,er,Ia,Nr,ho,Ur,vo,Cn,Cr,za,Os,tr,Oa,Lt,pn;const Vr=class{constructor(){S(this,Qn);S(this,Qt);S(this,er);S(this,Nr);S(this,Ur);S(this,Cn);S(this,za);S(this,tr);S(this,Lt);O(this,"id",Is++);S(this,wn,!1);O(this,"linked",!0);S(this,Ot,null);S(this,Jt,null);O(this,"async_deriveds",new Map);O(this,"current",new Map);O(this,"previous",new Map);O(this,"unblocked",new Set);S(this,_n,new Set);S(this,kn,new Set);S(this,Xt,new Set);S(this,xn,0);S(this,_t,new Map);S(this,Jn,null);S(this,Me,[]);S(this,Xn,[]);S(this,Pt,new Set);S(this,ht,new Set);S(this,dt,new Map);S(this,En,new Set);O(this,"is_fork",!1);S(this,Sn,!1)}skip_effect(t){h(this,dt).has(t)||h(this,dt).set(t,{d:[],m:[]}),h(this,En).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=h(this,dt).get(t);if(r){h(this,dt).delete(t);for(var a of r.d)ce(a,be),n(a);for(a of r.m)ce(a,bt),n(a)}h(this,En).add(t)}capture(t,n,r=!1){t.v!==ue&&!this.previous.has(t)&&this.previous.set(t,t.v),t.f&Ut||(this.current.set(t,[n,r]),ge==null||ge.set(t,n)),this.is_fork||(t.v=n)}activate(){A=this}deactivate(){A=null,ge=null}flush(){try{pa=!0,A=this,V(this,Qt,Bn).call(this)}finally{Ai=0,Aa=null,gn=null,Sr=null,pa=!1,A=null,ge=null,an.clear()}}discard(){for(const t of h(this,kn))t(this);h(this,kn).clear(),h(this,Xt).clear(),V(this,Lt,pn).call(this)}register_created_effect(t){h(this,Xn).push(t)}increment(t,n){var r;if(P(this,xn,h(this,xn)+1),t){let a=(r=h(this,_t).get(n))!=null?r:0;h(this,_t).set(n,a+1)}}decrement(t,n){var r;if(P(this,xn,h(this,xn)-1),t){let a=(r=h(this,_t).get(n))!=null?r:0;a===1?h(this,_t).delete(n):h(this,_t).set(n,a-1)}h(this,Sn)||(P(this,Sn,!0),$t(()=>{P(this,Sn,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)h(this,Pt).add(r);for(const r of n)h(this,ht).add(r);t.clear(),n.clear()}oncommit(t){h(this,_n).add(t)}ondiscard(t){h(this,kn).add(t)}on_fork_commit(t){h(this,Xt).add(t)}run_fork_commit_callbacks(){for(const t of h(this,Xt))t(this);h(this,Xt).clear()}settled(){var t;return((t=h(this,Jn))!=null?t:P(this,Jn,Zi())).promise}static ensure(){var t;if(A===null){const n=A=new Vr;V(t=n,tr,Oa).call(t),!pa&&!Yn&&$t(()=>{h(n,wn)||n.flush()})}return A}apply(){{ge=null;return}}schedule(t){var a;if(Aa=t,(a=t.b)!=null&&a.is_pending&&t.f&(In|Kr|Ha)&&!(t.f&zt)){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(gn!==null&&n===M&&(j===null||!(j.f&ye)))return;if(r&(Tt|gt)){if(!(r&de))return;n.f^=de}}h(this,Me).push(n)}};let Ft=Vr;wn=new WeakMap,Ot=new WeakMap,Jt=new WeakMap,_n=new WeakMap,kn=new WeakMap,Xt=new WeakMap,xn=new WeakMap,_t=new WeakMap,Jn=new WeakMap,Me=new WeakMap,Xn=new WeakMap,Pt=new WeakMap,ht=new WeakMap,dt=new WeakMap,En=new WeakMap,Sn=new WeakMap,Qn=new WeakSet,Ra=function(){if(this.is_fork)return!0;for(const r of h(this,_t).keys()){for(var t=r,n=!1;t.parent!==null;){if(h(this,dt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},Qt=new WeakSet,Bn=function(){var s,c,d,p;if(P(this,wn,!0),Ai++>1e3&&(V(this,Lt,pn).call(this),Ps()),!V(this,Qn,Ra).call(this)){for(const v of h(this,Pt))h(this,ht).delete(v),ce(v,be),this.schedule(v);for(const v of h(this,ht))ce(v,bt),this.schedule(v)}const t=h(this,Me);P(this,Me,[]),this.apply();var n=gn=[],r=[],a=Sr=[];for(const v of t)try{V(this,er,Ia).call(this,v,n,r)}catch(b){throw bo(v),b}if(A=null,a.length>0){var o=Vr.ensure();for(const v of a)o.schedule(v)}if(gn=null,Sr=null,V(this,Qn,Ra).call(this)){V(this,Cn,Cr).call(this,r),V(this,Cn,Cr).call(this,n);for(const[v,b]of h(this,dt))go(v,b);a.length>0&&V(s=A,Qt,Bn).call(s);return}const u=V(this,Nr,ho).call(this);if(u){V(c=u,Ur,vo).call(c,this);return}h(this,Pt).clear(),h(this,ht).clear();for(const v of h(this,_n))v(this);h(this,_n).clear(),Kn=this,Ri(r),Ri(n),Kn=null,(d=h(this,Jn))==null||d.resolve();var l=A;if(this.linked&&h(this,xn)===0&&V(this,Lt,pn).call(this),h(this,Me).length>0){l===null&&(l=this,V(this,tr,Oa).call(this));const v=l;h(v,Me).push(...h(this,Me).filter(b=>!h(v,Me).includes(b)))}l!==null&&V(p=l,Qt,Bn).call(p)},er=new WeakSet,Ia=function(t,n,r){t.f^=de;for(var a=t.first;a!==null;){var o=a.f,u=(o&(gt|Tt))!==0,l=u&&(o&de)!==0,s=l||(o&We)!==0||h(this,dt).has(a);if(!s&&a.fn!==null){u?a.f^=de:o&In?n.push(a):vr(a)&&(o&tt&&h(this,ht).add(a),Pn(a));var c=a.first;if(c!==null){a=c;continue}}for(;a!==null;){var d=a.next;if(d!==null){a=d;break}a=a.parent}}},Nr=new WeakSet,ho=function(){for(var t=h(this,Ot);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=h(t,Ot)}return null},Ur=new WeakSet,vo=function(t){var r;for(const[a,o]of t.current)!this.previous.has(a)&&t.previous.has(a)&&this.previous.set(a,t.previous.get(a)),this.current.set(a,o);for(const[a,o]of t.async_deriveds){const u=this.async_deriveds.get(a);u&&o.promise.then(u.resolve)}const n=a=>{var o=a.reactions;if(o!==null)for(const s of o){var u=s.f;if(u&ye)n(s);else{var l=s;u&(mn|tt)&&!this.async_deriveds.has(l)&&(h(this,ht).delete(l),ce(l,be),this.schedule(l))}}};for(const a of this.current.keys())n(a);this.oncommit(()=>t.discard()),V(r=t,Lt,pn).call(r),A=this,V(this,Qt,Bn).call(this)},Cn=new WeakSet,Cr=function(t){for(var n=0;n<t.length;n+=1)uo(t[n],h(this,Pt),h(this,ht))},za=new WeakSet,Os=function(){var d;V(this,Lt,pn).call(this);for(let p=va;p!==null;p=h(p,Jt)){var t=p.id<this.id,n=[];for(const[v,[b,m]]of this.current){if(p.current.has(v)){var r=p.current.get(v)[0];if(t&&b!==r)p.current.set(v,[b,m]);else continue}n.push(v)}if(t)for(const[v,b]of this.async_deriveds){const m=p.async_deriveds.get(v);m&&b.promise.then(m.resolve)}if(h(p,wn)){var a=[...p.current.keys()].filter(v=>!this.current.has(v));if(a.length===0)t&&p.discard();else if(n.length>0){if(t)for(const v of h(this,En))p.unskip_effect(v,b=>{var m;b.f&(tt|mn)?p.schedule(b):V(m=p,Cn,Cr).call(m,[b])});p.activate();var o=new Set,u=new Map;for(var l of n)po(l,a,o,u);u=new Map;var s=[...p.current.keys()].filter(v=>this.current.has(v)?this.current.get(v)[0]!==v.v:!0);if(s.length>0)for(const v of h(this,Xn))!(v.f&(rt|We|Or))&&Za(v,s,u)&&(v.f&(mn|tt)?(ce(v,be),p.schedule(v)):h(p,Pt).add(v));if(h(p,Me).length>0){p.apply();for(var c of h(p,Me))V(d=p,er,Ia).call(d,c,[],[]);P(p,Me,[])}p.deactivate()}}}},tr=new WeakSet,Oa=function(){dn===null?va=dn=this:(P(dn,Jt,this),P(this,Ot,dn)),dn=this},Lt=new WeakSet,pn=function(){var t=h(this,Ot),n=h(this,Jt);t===null?va=n:P(t,Jt,n),n===null?dn=t:P(n,Ot,t),this.linked=!1};function Q(e){var t=Yn;Yn=!0;try{for(var n;;){if(ks(),A===null)return n;A.flush()}}finally{Yn=t}}function Ps(){try{fs()}catch(e){Dt(e,Aa)}}let Xe=null;function Ri(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&(rt|We))&&vr(r)&&(Xe=new Set,Pn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Fo(r),(Xe==null?void 0:Xe.size)>0)){an.clear();for(const a of Xe){if(a.f&(rt|We))continue;const o=[a];let u=a.parent;for(;u!==null;)Xe.has(u)&&(Xe.delete(u),o.push(u)),u=u.parent;for(let l=o.length-1;l>=0;l--){const s=o[l];s.f&(rt|We)||Pn(s)}}Xe.clear()}}Xe=null}}function po(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const a of e.reactions){const o=a.f;o&ye?po(a,t,n,r):o&(mn|tt)&&!(o&be)&&Za(a,t,r)&&(ce(a,be),Ja(a))}}function Za(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const a of e.deps){if(Rn.call(t,a))return!0;if(a.f&ye&&Za(a,t,n))return n.set(a,!0),!0}return n.set(e,!1),!1}function Ja(e){A.schedule(e)}function go(e,t){if(!(e.f&gt&&e.f&de)){e.f&be?t.d.push(e):e.f&bt&&t.m.push(e),ce(e,de);for(var n=e.first;n!==null;)go(n,t),n=n.next}}function bo(e){ce(e,de);for(var t=e.first;t!==null;)bo(t),t=t.next}function Ls(e){let t=0,n=dr(0),r;return()=>{ei()&&(i(n),Zr(()=>(t===0&&(r=pr(()=>e(()=>Gn(n)))),t+=1,()=>{$t(()=>{t-=1,t===0&&(r==null||r(),r=void 0,Gn(n))})})))}}var Ms=Vt|un;function Ds(e,t,n,r){new Ns(e,t,n,r)}var De,nr,He,en,Re,Ke,Ce,Ne,kt,tn,Mt,$n,rr,ar,xt,Fr,jr,mo,zr,yo,Br,wo,ir,Pa,Tn,$r,An,Tr,or,La,lr,Ma;class Ns{constructor(t,n,r,a){S(this,jr);S(this,zr);S(this,Br);S(this,ir);S(this,Tn);S(this,An);S(this,or);S(this,lr);O(this,"parent");O(this,"is_pending",!1);O(this,"transform_error");S(this,De,void 0);S(this,nr,U?N:null);S(this,He,void 0);S(this,en,void 0);S(this,Re,void 0);S(this,Ke,null);S(this,Ce,null);S(this,Ne,null);S(this,kt,null);S(this,tn,0);S(this,Mt,0);S(this,$n,!1);S(this,rr,new Set);S(this,ar,new Set);S(this,xt,null);S(this,Fr,Ls(()=>(P(this,xt,dr(h(this,tn))),()=>{P(this,xt,null)})));var o,u;P(this,De,t),P(this,He,n),P(this,en,l=>{var s=M;s.b=this,s.f|=ka,r(l)}),this.parent=M.b,this.transform_error=(u=a!=null?a:(o=this.parent)==null?void 0:o.transform_error)!=null?u:l=>l,P(this,Re,gr(()=>{if(U){const l=h(this,nr);cn();const s=l.data===Qi;if(l.data.startsWith(Ci)){const d=JSON.parse(l.data.slice(Ci.length));V(this,zr,yo).call(this,d)}else s?V(this,Br,wo).call(this):V(this,jr,mo).call(this)}else V(this,ir,Pa).call(this)},Ms)),U&&P(this,De,N)}defer_effect(t){uo(t,h(this,rr),h(this,ar))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!h(this,He).pending}update_pending_count(t,n){V(this,or,La).call(this,t,n),P(this,tn,h(this,tn)+t),!(!h(this,xt)||h(this,$n))&&(P(this,$n,!0),$t(()=>{P(this,$n,!1),h(this,xt)&&Dr(h(this,xt),h(this,tn))}))}get_effect_pending(){return h(this,Fr).call(this),i(h(this,xt))}error(t){if(!h(this,He).onerror&&!h(this,He).failed)throw t;A!=null&&A.is_fork?(h(this,Ke)&&A.skip_effect(h(this,Ke)),h(this,Ce)&&A.skip_effect(h(this,Ce)),h(this,Ne)&&A.skip_effect(h(this,Ne)),A.on_fork_commit(()=>{V(this,lr,Ma).call(this,t)})):V(this,lr,Ma).call(this,t)}}De=new WeakMap,nr=new WeakMap,He=new WeakMap,en=new WeakMap,Re=new WeakMap,Ke=new WeakMap,Ce=new WeakMap,Ne=new WeakMap,kt=new WeakMap,tn=new WeakMap,Mt=new WeakMap,$n=new WeakMap,rr=new WeakMap,ar=new WeakMap,xt=new WeakMap,Fr=new WeakMap,jr=new WeakSet,mo=function(){try{P(this,Ke,ft(()=>h(this,en).call(this,h(this,De))))}catch(t){this.error(t)}},zr=new WeakSet,yo=function(t){const n=h(this,He).failed;n&&P(this,Ne,ft(()=>{n(h(this,De),()=>t,()=>()=>{})}))},Br=new WeakSet,wo=function(){const t=h(this,He).pending;t&&(this.is_pending=!0,P(this,Ce,ft(()=>t(h(this,De)))),$t(()=>{var n=P(this,kt,document.createDocumentFragment()),r=mt();n.append(r),P(this,Ke,V(this,An,Tr).call(this,()=>ft(()=>h(this,en).call(this,r)))),h(this,Mt)===0&&(h(this,De).before(n),P(this,kt,null),Wn(h(this,Ce),()=>{P(this,Ce,null)}),V(this,Tn,$r).call(this,A))}))},ir=new WeakSet,Pa=function(){try{if(this.is_pending=this.has_pending_snippet(),P(this,Mt,0),P(this,tn,0),P(this,Ke,ft(()=>{h(this,en).call(this,h(this,De))})),h(this,Mt)>0){var t=P(this,kt,document.createDocumentFragment());Bo(h(this,Ke),t);const n=h(this,He).pending;P(this,Ce,ft(()=>n(h(this,De))))}else V(this,Tn,$r).call(this,A)}catch(n){this.error(n)}},Tn=new WeakSet,$r=function(t){this.is_pending=!1,t.transfer_effects(h(this,rr),h(this,ar))},An=new WeakSet,Tr=function(t){var n=M,r=j,a=Oe;yt(h(this,Re)),Ze(h(this,Re)),On(h(this,Re).ctx);try{return Ft.ensure(),t()}catch(o){return so(o),null}finally{yt(n),Ze(r),On(a)}},or=new WeakSet,La=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&V(r=this.parent,or,La).call(r,t,n);return}P(this,Mt,h(this,Mt)+t),h(this,Mt)===0&&(V(this,Tn,$r).call(this,n),h(this,Ce)&&Wn(h(this,Ce),()=>{P(this,Ce,null)}),h(this,kt)&&(h(this,De).before(h(this,kt)),P(this,kt,null)))},lr=new WeakSet,Ma=function(t){h(this,Ke)&&(me(h(this,Ke)),P(this,Ke,null)),h(this,Ce)&&(me(h(this,Ce)),P(this,Ce,null)),h(this,Ne)&&(me(h(this,Ne)),P(this,Ne,null)),U&&($e(h(this,nr)),Ya(),$e(Ga()));var n=h(this,He).onerror;let r=h(this,He).failed;var a=!1,o=!1;const u=()=>{if(a){Ss();return}a=!0,o&&gs(),h(this,Ne)!==null&&Wn(h(this,Ne),()=>{P(this,Ne,null)}),V(this,An,Tr).call(this,()=>{V(this,ir,Pa).call(this)})},l=s=>{try{o=!0,n==null||n(s,u),o=!1}catch(c){Dt(c,h(this,Re)&&h(this,Re).parent)}r&&P(this,Ne,V(this,An,Tr).call(this,()=>{try{return ft(()=>{var c=M;c.b=this,c.f|=ka,r(h(this,De),()=>s,()=>u)})}catch(c){return Dt(c,h(this,Re).parent),null}}))};$t(()=>{var s;try{s=this.transform_error(t)}catch(c){Dt(c,h(this,Re)&&h(this,Re).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(l,c=>Dt(c,h(this,Re)&&h(this,Re).parent)):l(s)})};function _o(e,t,n,r){const a=Xa;var o=e.filter(v=>!v.settled);if(n.length===0&&o.length===0){r(t.map(a));return}var u=M,l=Us(),s=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(v=>v.promise)):null;function c(v){if(!(u.f&rt)){l();try{r(v)}catch(b){Dt(b,u)}Lr()}}var d=ko();if(n.length===0){s.then(()=>c(t.map(a))).finally(d);return}function p(){Promise.all(n.map(v=>Vs(v))).then(v=>c([...t.map(a),...v])).catch(v=>Dt(v,u)).finally(d)}s?s.then(()=>{l(),p(),Lr()}):p()}function Us(){var e=M,t=j,n=Oe,r=A;return function(o=!0){yt(e),Ze(t),On(n),o&&!(e.f&rt)&&(r==null||r.activate(),r==null||r.apply())}}function Lr(e=!0){yt(null),Ze(null),On(null),e&&(A==null||A.deactivate())}function ko(){var e=M,t=e.b,n=A,r=t.is_rendered();return t.update_pending_count(1,n),n.increment(r,e),()=>{t.update_pending_count(-1,n),n.decrement(r,e)}}function Xa(e){var t=ye|be;return M!==null&&(M.f|=un),{ctx:Oe,deps:null,effects:null,equals:Ji,f:t,fn:e,reactions:null,rv:0,v:ue,wv:0,parent:M,ac:null}}const _r=Symbol("obsolete");function Vs(e,t,n){let r=M;r===null&&ls();var a=void 0,o=dr(ue),u=!j,l=new Set;return Js(()=>{var b;var s=M,c=Zi();a=c.promise;try{Promise.resolve(e()).then(c.resolve,m=>{m!==Yr&&c.reject(m)}).finally(Lr)}catch(m){c.reject(m),Lr()}var d=A;if(u){if(s.f&zt)var p=ko();if(r.b.is_rendered())(b=d.async_deriveds.get(s))==null||b.reject(_r);else for(const m of l.values())m.reject(_r);l.add(c),d.async_deriveds.set(s,c)}const v=(m,x=void 0)=>{p==null||p(),l.delete(c),x!==_r&&(d.activate(),x?(o.f|=Ut,Dr(o,x)):(o.f&Ut&&(o.f^=Ut),Dr(o,m)),d.deactivate())};c.promise.then(v,m=>v(null,m||"unknown"))}),qr(()=>{for(const s of l)s.reject(_r)}),new Promise(s=>{function c(d){function p(){d===a?s(o):c(a)}d.then(p,p)}c(a)})}function Se(e){const t=Xa(e);return Ao(t),t}function Fs(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)me(t[n])}}function Qa(e){var t,n=M,r=e.parent;if(!At&&r!==null&&e.v!==ue&&r.f&(rt|We))return xs(),e.v;yt(r);try{e.f&=~ln,Fs(e),t=Po(e)}finally{yt(n)}return t}function xo(e){var t=Qa(e);if(!e.equals(t)&&(e.wv=Io(),(!(A!=null&&A.is_fork)||e.deps===null)&&(A!==null?(A.capture(e,t,!0),Kn==null||Kn.capture(e,t,!0)):e.v=t,e.deps===null))){ce(e,de);return}At||(ge!==null?(ei()||A!=null&&A.is_fork)&&ge.set(e,t):qa(e))}function js(e){var t,n;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),(n=r.ac)==null||n.abort(Yr),r.fn!==null&&(r.teardown=Nt),r.ac=null,Zn(r,0),ni(r))}function Eo(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Pn(t)}let Mr=new Set;const an=new Map;let So=!1;function dr(e,t){var n={f:0,v:e,reactions:null,equals:Ji,rv:0,wv:0};return n}function F(e,t){const n=dr(e);return Ao(n),n}function Co(e,t=!1,n=!0){const r=dr(e);return t||(r.equals=is),r}function $(e,t,n=!1){j!==null&&(!nt||j.f&Or)&&no()&&j.f&(ye|tt|mn|Or)&&(qe===null||!Rn.call(qe,e))&&ps();let r=n?Ct(t):t;return Dr(e,r,Sr)}function Dr(e,t,n=null){if(!e.equals(t)){an.set(e,At?t:e.v);var r=Ft.ensure();if(r.capture(e,t),e.f&ye){const a=e;e.f&be&&Qa(a),ge===null&&qa(a)}e.wv=Io(),$o(e,be,n),M!==null&&M.f&de&&!(M.f&(gt|Tt))&&(Be===null?Ks([e]):Be.push(e)),!r.is_fork&&Mr.size>0&&!So&&zs()}return t}function zs(){So=!1;for(const e of Mr){e.f&de&&ce(e,bt);let t;try{t=vr(e)}catch(n){t=!0}t&&Pn(e)}Mr.clear()}function Gn(e){$(e,e.v+1)}function $o(e,t,n){var r=e.reactions;if(r!==null)for(var a=r.length,o=0;o<a;o++){var u=r[o],l=u.f,s=(l&be)===0;if(s&&ce(u,t),l&Or)Mr.add(u);else if(l&ye){var c=u;ge==null||ge.delete(c),l&ln||(l&Ge&&(M===null||!(M.f&Pr))&&(u.f|=ln),$o(c,bt,n))}else if(s){var d=u;l&tt&&Xe!==null&&Xe.add(d),n!==null?n.push(d):Ja(d)}}}function Bs(e,t){if(t){const n=document.body;e.autofocus=!0,$t(()=>{document.activeElement===n&&e.focus()})}}let Ii=!1;function To(){Ii||(Ii=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Hn])==null||t.call(n)})},{capture:!0}))}function Wr(e){var t=j,n=M;Ze(null),yt(null);try{return e()}finally{Ze(t),yt(n)}}function Hs(e,t,n,r=n){e.addEventListener(t,()=>Wr(n));const a=e[Hn];a?e[Hn]=()=>{a(),r(!0)}:e[Hn]=()=>r(!0),To()}let Ar=!1,At=!1;function Oi(e){At=e}let j=null,nt=!1;function Ze(e){j=e}let M=null;function yt(e){M=e}let qe=null;function Ao(e){j!==null&&(qe===null?qe=[e]:qe.push(e))}let Ie=null,Pe=0,Be=null;function Ks(e){Be=e}let Ro=1,Wt=0,on=Wt;function Pi(e){on=e}function Io(){return++Ro}function vr(e){var t=e.f;if(t&be)return!0;if(t&ye&&(e.f&=~ln),t&bt){for(var n=e.deps,r=n.length,a=0;a<r;a++){var o=n[a];if(vr(o)&&xo(o),o.wv>e.wv)return!0}t&Ge&&ge===null&&ce(e,de)}return!1}function Oo(e,t,n=!0){var r=e.reactions;if(r!==null&&!(qe!==null&&Rn.call(qe,e)))for(var a=0;a<r.length;a++){var o=r[a];o.f&ye?Oo(o,t,!1):t===o&&(n?ce(o,be):o.f&de&&ce(o,bt),Ja(o))}}function Po(e){var x,L;var t=Ie,n=Pe,r=Be,a=j,o=qe,u=Oe,l=nt,s=on,c=e.f;Ie=null,Pe=0,Be=null,j=c&(gt|Tt)?null:e,qe=null,On(e.ctx),nt=!1,on=++Wt,e.ac!==null&&(Wr(()=>{e.ac.abort(Yr)}),e.ac=null);try{e.f|=Pr;var d=e.fn,p=d();e.f|=zt;var v=e.deps,b=A==null?void 0:A.is_fork;if(Ie!==null){var m;if(b||Zn(e,Pe),v!==null&&Pe>0)for(v.length=Pe+Ie.length,m=0;m<Ie.length;m++)v[Pe+m]=Ie[m];else e.deps=v=Ie;if(ei()&&e.f&Ge)for(m=Pe;m<v.length;m++)((L=(x=v[m]).reactions)!=null?L:x.reactions=[]).push(e)}else!b&&v!==null&&Pe<v.length&&(Zn(e,Pe),v.length=Pe);if(no()&&Be!==null&&!nt&&v!==null&&!(e.f&(ye|bt|be)))for(m=0;m<Be.length;m++)Oo(Be[m],e);if(a!==null&&a!==e){if(Wt++,a.deps!==null)for(let C=0;C<n;C+=1)a.deps[C].rv=Wt;if(t!==null)for(const C of t)C.rv=Wt;Be!==null&&(r===null?r=Be:r.push(...Be))}return e.f&Ut&&(e.f^=Ut),p}catch(C){return so(C)}finally{e.f^=Pr,Ie=t,Pe=n,Be=r,j=a,qe=o,On(u),nt=l,on=s}}function Ys(e,t){let n=t.reactions;if(n!==null){var r=ql.call(n,e);if(r!==-1){var a=n.length-1;a===0?n=t.reactions=null:(n[r]=n[a],n.pop())}}if(n===null&&t.f&ye&&(Ie===null||!Rn.call(Ie,t))){var o=t;o.f&Ge&&(o.f^=Ge,o.f&=~ln),o.v!==ue&&qa(o),js(o),Zn(o,0)}}function Zn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Ys(e,n[r])}function Pn(e){var t=e.f;if(!(t&rt)){ce(e,de);var n=M,r=Ar;M=e,Ar=!0;try{t&(tt|Ha)?Xs(e):ni(e),Uo(e);var a=Po(e);e.teardown=typeof a=="function"?a:null,e.wv=Ro;var o}finally{Ar=r,M=n}}}async function qt(){await Promise.resolve(),Q()}function i(e){var d;var t=e.f,n=(t&ye)!==0;if(j!==null&&!nt){var r=M!==null&&(M.f&rt)!==0;if(!r&&(qe===null||!Rn.call(qe,e))){var a=j.deps;if(j.f&Pr)e.rv<Wt&&(e.rv=Wt,Ie===null&&a!==null&&a[Pe]===e?Pe++:Ie===null?Ie=[e]:Ie.push(e));else{((d=j.deps)!=null?d:j.deps=[]).push(e);var o=e.reactions;o===null?e.reactions=[j]:Rn.call(o,j)||o.push(j)}}}if(At&&an.has(e))return an.get(e);if(n){var u=e;if(At){var l=u.v;return(!(u.f&de)&&u.reactions!==null||Mo(u))&&(l=Qa(u)),an.set(u,l),l}var s=(u.f&Ge)===0&&!nt&&j!==null&&(Ar||(j.f&Ge)!==0),c=(u.f&zt)===0;vr(u)&&(s&&(u.f|=Ge),xo(u)),s&&!c&&(Eo(u),Lo(u))}if(ge!=null&&ge.has(e))return ge.get(e);if(e.f&Ut)throw e.v;return e.v}function Lo(e){var t;if(e.f|=Ge,e.deps!==null)for(const n of e.deps)((t=n.reactions)!=null?t:n.reactions=[]).push(e),n.f&ye&&!(n.f&Ge)&&(Eo(n),Lo(n))}function Mo(e){if(e.v===ue)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(an.has(t)||t.f&ye&&Mo(t))return!0;return!1}function pr(e){var t=nt;try{return nt=!0,e()}finally{nt=t}}function Gs(e){M===null&&(j===null&&us(),cs()),At&&ss()}function Ws(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function at(e,t){var u;var n=M;n!==null&&n.f&We&&(e|=We);var r={ctx:Oe,deps:null,nodes:null,f:e|be|Ge,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};A==null||A.register_created_effect(r);var a=r;if(e&In)gn!==null?gn.push(r):Ft.ensure().schedule(r);else if(t!==null){try{Pn(r)}catch(l){throw me(r),l}a.deps===null&&a.teardown===null&&a.nodes===null&&a.first===a.last&&!(a.f&un)&&(a=a.first,e&tt&&e&Vt&&a!==null&&(a.f|=Vt))}if(a!==null&&(a.parent=n,n!==null&&Ws(a,n),j!==null&&j.f&ye&&!(e&Tt))){var o=j;((u=o.effects)!=null?u:o.effects=[]).push(a)}return r}function ei(){return j!==null&&!nt}function qr(e){const t=at(Kr,null);return ce(t,de),t.teardown=e,t}function Le(e){var a;Gs();var t=M.f,n=!j&&(t&gt)!==0&&(t&zt)===0;if(n){var r=Oe;((a=r.e)!=null?a:r.e=[]).push(e)}else return Do(e)}function Do(e){return at(In|ns,e)}function qs(e){Ft.ensure();const t=at(Tt|un,e);return()=>{me(t)}}function Zs(e){Ft.ensure();const t=at(Tt|un,e);return(n={})=>new Promise(r=>{n.outro?Wn(t,()=>{me(t),r(void 0)}):(me(t),r(void 0))})}function ti(e){return at(In,e)}function Js(e){return at(mn|un,e)}function Zr(e,t=0){return at(Kr|t,e)}function xe(e,t=[],n=[],r=[]){_o(r,t,n,a=>{at(Kr,()=>e(...a.map(i)))})}function gr(e,t=0){var n=at(tt|t,e);return n}function No(e,t=0){var n=at(Ha|t,e);return n}function ft(e){return at(gt|un,e)}function Uo(e){var t=e.teardown;if(t!==null){const n=At,r=j;Oi(!0),Ze(null);try{t.call(null)}finally{Oi(n),Ze(r)}}}function ni(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const a=n.ac;a!==null&&Wr(()=>{a.abort(Yr)});var r=n.next;n.f&Tt?n.parent=null:me(n,t),n=r}}function Xs(e){for(var t=e.first;t!==null;){var n=t.next;t.f&gt||me(t),t=n}}function me(e,t=!0){var n=!1;(t||e.f&ts)&&e.nodes!==null&&e.nodes.end!==null&&(Vo(e.nodes.start,e.nodes.end),n=!0),ce(e,xa),ni(e,t&&!n),Zn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();Uo(e),e.f^=xa,e.f|=rt;var a=e.parent;a!==null&&a.first!==null&&Fo(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Vo(e,t){for(;e!==null;){var n=e===t?null:wt(e);e.remove(),e=n}}function Fo(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Wn(e,t,n=!0){var r=[];jo(e,r,!0);var a=()=>{n&&me(e),t&&t()},o=r.length;if(o>0){var u=()=>--o||a();for(var l of r)l.out(u)}else a()}function jo(e,t,n){if(!(e.f&We)){e.f^=We;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var a=e.first;a!==null;){var o=a.next;if(!(a.f&Tt)){var u=(a.f&Vt)!==0||(a.f&gt)!==0&&(e.f&tt)!==0;jo(a,t,u?n:!1)}a=o}}}function Qs(e){zo(e,!0)}function zo(e,t){if(e.f&We){e.f^=We,e.f&de||(ce(e,be),Ft.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,a=(n.f&Vt)!==0||(n.f&gt)!==0;zo(n,a?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const u of o)(u.is_global||t)&&u.in()}}function Bo(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var a=n===r?null:wt(n);t.append(n),n=a}}function Li(e){const t={get:n=>zn(t.store)[n],set:(n,r)=>{typeof n=="string"?Object.assign(zn(t.store),{[n]:r}):Object.assign(zn(t.store),n),t.store.set(zn(t.store))},store:As(e)};return t}globalThis.$altcha=globalThis.$altcha||{algorithms:new Map,defaults:Li({}),i18n:Li({}),instances:new Set,plugins:new Set};const ec={ariaLinkLabel:"Altcha (official website)",cancel:"Cancel",enterCode:"Enter code",enterCodeAria:"Enter code you hear. Press Space to play audio.",enterCodeFromImage:"To proceed, please enter the code from the image below.",error:"Verification failed. Try again later.",expired:"Verification expired. Try again.",footer:'Protected by <a href="https://altcha.org/" tabindex="-1" target="_blank" aria-label="Altcha (official website)">ALTCHA</a>',getAudioChallenge:"Get an audio challenge",label:"I'm not a robot",loading:"Loading...",reload:"Reload",verify:"Verify",verificationRequired:"Verification required!",verified:"Verified",verifying:"Verifying...",waitAlert:"Verifying... please wait."};"$altcha"in globalThis&&globalThis.$altcha.i18n.set("en",ec);const tc="5";var Hi,Ki,Yi;typeof window<"u"&&((Yi=(Ki=(Hi=window.__svelte)!=null?Hi:window.__svelte={}).v)!=null?Yi:Ki.v=new Set).add(tc);const Zt=Symbol("events"),Ho=new Set,Da=new Set;function Ko(e,t,n,r={}){function a(o){if(r.capture||Na.call(t,o),!o.cancelBubble)return Wr(()=>n==null?void 0:n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?$t(()=>{t.addEventListener(e,a,r)}):t.addEventListener(e,a,r),a}function he(e,t,n,r,a){var o={capture:r,passive:a},u=Ko(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&qr(()=>{t.removeEventListener(e,u,o)})}function Jr(e,t,n){var r;((r=t[Zt])!=null?r:t[Zt]={})[e]=n}function Xr(e){for(var t=0;t<e.length;t++)Ho.add(e[t]);for(var n of Da)n(e)}let Mi=null;function Na(e){var L,C;var t=this,n=t.ownerDocument,r=e.type,a=((L=e.composedPath)==null?void 0:L.call(e))||[],o=a[0]||e.target;Mi=e;var u=0,l=Mi===e&&e[Zt];if(l){var s=a.indexOf(l);if(s!==-1&&(t===document||t===window)){e[Zt]=t;return}var c=a.indexOf(t);if(c===-1)return;s<=c&&(u=s)}if(o=a[u]||e.target,o!==t){qn(e,"currentTarget",{configurable:!0,get(){return o||n}});var d=j,p=M;Ze(null),yt(null);try{for(var v,b=[];o!==null;){var m=o.assignedSlot||o.parentNode||o.host||null;try{var x=(C=o[Zt])==null?void 0:C[r];x!=null&&(!o.disabled||e.target===o)&&x.call(o,e)}catch(Z){v?b.push(Z):v=Z}if(e.cancelBubble||m===t||m===null)break;o=m}if(v){for(let Z of b)queueMicrotask(()=>{throw Z});throw v}}finally{e[Zt]=t,delete e.currentTarget,Ze(d),yt(p)}}}var Gi;const ga=((Gi=globalThis==null?void 0:globalThis.window)==null?void 0:Gi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function nc(e){var t;return(t=ga==null?void 0:ga.createHTML(e))!=null?t:e}function Yo(e){var t=Wa("template");return t.innerHTML=nc(e.replaceAll("<!>","<!---->")),t.content}function Ve(e,t){var n=M;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function ae(e,t){var n=(t&bs)!==0,r=(t&ms)!==0,a,o=!e.startsWith("<!>");return()=>{if(U)return Ve(N,null),N;a===void 0&&(a=Yo(o?e:"<!>"+e),n||(a=Ue(a)));var u=r||io?document.importNode(a,!0):a.cloneNode(!0);if(n){var l=Ue(u),s=u.lastChild;Ve(l,s)}else Ve(u,u);return u}}function rc(e,t,n="svg"){var r=!e.startsWith("<!>"),a=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(U)return Ve(N,null),N;if(!o){var u=Yo(a),l=Ue(u);o=Ue(l)}var s=o.cloneNode(!0);return Ve(s,s),s}}function ri(e,t){return rc(e,t,"svg")}function kr(e=""){if(!U){var t=mt(e+"");return Ve(t,t),t}var n=N;return n.nodeType!==ur?(n.before(n=mt()),$e(n)):Gr(n),Ve(n,n),n}function Di(){if(U)return Ve(N,null),N;var e=document.createDocumentFragment(),t=document.createComment(""),n=mt();return e.append(t,n),Ve(t,n),e}function B(e,t){if(U){var n=M;(!(n.f&zt)||n.nodes.end===null)&&(n.nodes.end=N),cn();return}e!==null&&e.before(t)}function ac(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ic=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function oc(e){return ic.includes(e)}const lc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function sc(e){var t;return e=e.toLowerCase(),(t=lc[e])!=null?t:e}const cc=["touchstart","touchmove"];function uc(e){return cc.includes(e)}function vt(e,t){var r;var n=t==null?"":typeof t=="object"?`${t}`:t;n!==((r=e[jn])!=null?r:e[jn]=e.nodeValue)&&(e[jn]=n,e.nodeValue=`${n}`)}function Go(e,t){return Wo(e,t)}function fc(e,t){var u;$a(),t.intro=(u=t.intro)!=null?u:!1;const n=t.target,r=U,a=N;try{for(var o=Ue(n);o&&(o.nodeType!==fr||o.data!==Ka);)o=wt(o);if(!o)throw sn;pt(!0),$e(o);const l=Wo(e,{...t,anchor:o});return pt(!1),l}catch(l){if(l instanceof Error&&l.message.split(`
`).some(s=>s.startsWith("https://svelte.dev/e/")))throw l;return l!==sn&&console.warn("Failed to hydrate: ",l),t.recover===!1&&hs(),$a(),$s(n),pt(!1),Go(e,t)}finally{pt(r),$e(a)}}const xr=new Map;function Wo(e,{target:t,anchor:n,props:r={},events:a,context:o,intro:u=!0,transformError:l}){$a();var s=void 0,c=Zs(()=>{var d=n!=null?n:t.appendChild(mt());Ds(d,{pending:()=>{}},b=>{Rt({});var m=Oe;if(o&&(m.c=o),a&&(r.$$events=a),U&&Ve(b,null),s=e(b,r)||{},U&&(M.nodes.end=N,N===null||N.nodeType!==fr||N.data!==eo))throw hr(),sn;It()},l);var p=new Set,v=b=>{for(var m=0;m<b.length;m++){var x=b[m];if(!p.has(x)){p.add(x);var L=uc(x);for(const ie of[t,document]){var C=xr.get(ie);C===void 0&&(C=new Map,xr.set(ie,C));var Z=C.get(x);Z===void 0?(ie.addEventListener(x,Na,{passive:L}),C.set(x,1)):C.set(x,Z+1)}}}};return v(Zl(Ho)),Da.add(v),()=>{var L;for(var b of p)for(const C of[t,document]){var m=xr.get(C),x=m.get(b);--x==0?(C.removeEventListener(b,Na),m.delete(b),m.size===0&&xr.delete(C)):m.set(b,x)}Da.delete(v),d!==n&&((L=d.parentNode)==null||L.removeChild(d))}});return Ua.set(s,c),s}let Ua=new WeakMap;function hc(e,t){const n=Ua.get(e);return n?(Ua.delete(e),n(t)):Promise.resolve()}var Qe,Et,et,nn,sr,Hr,Ba;class Qr{constructor(t,n=!0){O(this,"anchor");S(this,Qe,new Map);S(this,Et,new Map);S(this,et,new Map);S(this,nn,new Set);S(this,sr,!0);S(this,Hr,t=>{if(h(this,Qe).has(t)){var n=h(this,Qe).get(t),r=h(this,Et).get(n);if(r)Qs(r),h(this,nn).delete(n);else{var a=h(this,et).get(n);a&&(h(this,Et).set(n,a.effect),h(this,et).delete(n),a.fragment.lastChild.remove(),this.anchor.before(a.fragment),r=a.effect)}for(const[o,u]of h(this,Qe)){if(h(this,Qe).delete(o),o===t)break;const l=h(this,et).get(u);l&&(me(l.effect),h(this,et).delete(u))}for(const[o,u]of h(this,Et)){if(o===n||h(this,nn).has(o))continue;const l=()=>{if(Array.from(h(this,Qe).values()).includes(o)){var c=document.createDocumentFragment();Bo(u,c),c.append(mt()),h(this,et).set(o,{effect:u,fragment:c})}else me(u);h(this,nn).delete(o),h(this,Et).delete(o)};h(this,sr)||!r?(h(this,nn).add(o),Wn(u,l,!1)):l()}}});S(this,Ba,t=>{h(this,Qe).delete(t);const n=Array.from(h(this,Qe).values());for(const[r,a]of h(this,et))n.includes(r)||(me(a.effect),h(this,et).delete(r))});this.anchor=t,P(this,sr,n)}ensure(t,n){var r=A;n&&!h(this,Et).has(t)&&!h(this,et).has(t)&&h(this,Et).set(t,ft(()=>n(this.anchor))),h(this,Qe).set(r,t),U&&(this.anchor=N),h(this,Hr).call(this,r)}}Qe=new WeakMap,Et=new WeakMap,et=new WeakMap,nn=new WeakMap,sr=new WeakMap,Hr=new WeakMap,Ba=new WeakMap;function dc(e,t,...n){var r=new Qr(e);gr(()=>{var o;const a=(o=t())!=null?o:null;r.ensure(a,a&&(u=>a(u,...n)))},Vt)}function ai(e){Oe===null&&os(),Le(()=>{const t=pr(e);if(typeof t=="function")return t})}function fe(e,t,n=!1){var r;U&&(r=N,cn());var a=new Qr(e),o=n?Vt:0;function u(l,s){if(U){var c=ao(r);if(l!==parseInt(c.substring(1))){var d=Ga();$e(d),a.anchor=d,pt(!1),a.ensure(l,s),pt(!0);return}}a.ensure(l,s)}gr(()=>{var l=!1;t((s,c=0)=>{l=!0,u(c,s)}),l||u(-1,null)},o)}const vc=Symbol("NaN");function pc(e,t,n){U&&cn();var r=new Qr(e);gr(()=>{var a=t();a!==a&&(a=vc),r.ensure(a,n)})}function qo(e,t,n=!1,r=!1,a=!1,o=!1){var u=e,l="";if(n){var s=e;U&&(u=$e(Ue(s)))}xe(()=>{var x;var c=M;if(l===(l=(x=t())!=null?x:"")){U&&cn();return}if(n&&!U){c.nodes=null,s.innerHTML=l,l!==""&&Ve(Ue(s),s.lastChild);return}if(c.nodes!==null&&(Vo(c.nodes.start,c.nodes.end),c.nodes=null),l!==""){if(U){N.data;for(var d=cn(),p=d;d!==null&&(d.nodeType!==fr||d.data!=="");)p=d,d=wt(d);if(d===null)throw hr(),sn;Ve(N,p),u=$e(d);return}var v=r?ys:a?ws:void 0,b=Wa(r?"svg":a?"math":"template",v);b.innerHTML=l;var m=r||a?b:b.content;if(Ve(Ue(m),m.lastChild),r||a)for(;Ue(m);)u.before(Ue(m));else u.before(m)}})}function gc(e,t,n){var r;U&&(r=N,cn());var a=new Qr(e);gr(()=>{var d;var o=(d=t())!=null?d:null;if(U){var u=ao(r),l=u===Ka,s=o!==null;if(l!==s){var c=Ga();$e(c),a.anchor=c,pt(!1),a.ensure(o,o&&(p=>n(p,o))),pt(!0);return}}a.ensure(o,o&&(p=>n(p,o)))},Vt)}function bc(e,t){var n=void 0,r;No(()=>{n!==(n=t())&&(r&&(me(r),r=null),n&&(r=ft(()=>{ti(()=>n(e))})))})}function Zo(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Zo(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function mc(){for(var e,t,n=0,r="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Zo(e))&&(r&&(r+=" "),r+=t);return r}function yc(e){return typeof e=="object"?mc(e):e!=null?e:""}const Ni=[...` 	
\r\f \v\uFEFF`];function wc(e,t,n){var r=e==null?"":""+e;if(n){for(var a of Object.keys(n))if(n[a])r=r?r+" "+a:a;else if(r.length)for(var o=a.length,u=0;(u=r.indexOf(a,u))>=0;){var l=u+o;(u===0||Ni.includes(r[u-1]))&&(l===r.length||Ni.includes(r[l]))?r=(u===0?"":r.substring(0,u))+r.substring(l+1):u=l}}return r===""?null:r}function Ui(e,t=!1){var n=t?" !important;":";",r="";for(var a of Object.keys(e)){var o=e[a];o!=null&&o!==""&&(r+=" "+a+": "+o+n)}return r}function ba(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function _c(e,t){if(t){var n="",r,a;if(Array.isArray(t)?(r=t[0],a=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var o=!1,u=0,l=!1,s=[];r&&s.push(...Object.keys(r).map(ba)),a&&s.push(...Object.keys(a).map(ba));var c=0,d=-1;const x=e.length;for(var p=0;p<x;p++){var v=e[p];if(l?v==="/"&&e[p-1]==="*"&&(l=!1):o?o===v&&(o=!1):v==="/"&&e[p+1]==="*"?l=!0:v==='"'||v==="'"?o=v:v==="("?u++:v===")"&&u--,!l&&o===!1&&u===0){if(v===":"&&d===-1)d=p;else if(v===";"||p===x-1){if(d!==-1){var b=ba(e.substring(c,d).trim());if(!s.includes(b)){v!==";"&&p++;var m=e.substring(c,p).trim();n+=" "+m+";"}}c=p+1,d=-1}}}}return r&&(n+=Ui(r)),a&&(n+=Ui(a,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function kc(e,t,n,r,a,o){var u=e[Ea];if(U||u!==n||u===void 0){var l=wc(n,r,o);(!U||l!==e.getAttribute("class"))&&(l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l)),e[Ea]=n}else if(o&&a!==o)for(var s in o){var c=!!o[s];(a==null||c!==!!a[s])&&e.classList.toggle(s,c)}return o}function ma(e,t={},n,r){for(var a in n){var o=n[a];t[a]!==o&&(n[a]==null?e.style.removeProperty(a):e.style.setProperty(a,o,r))}}function xc(e,t,n,r){var a=e[Sa];if(U||a!==t){var o=_c(t,r);(!U||o!==e.getAttribute("style"))&&(o==null?e.removeAttribute("style"):e.style.cssText=o),e[Sa]=t}else r&&(Array.isArray(r)?(ma(e,n==null?void 0:n[0],r[0]),ma(e,n==null?void 0:n[1],r[1],"important")):ma(e,n,r));return r}function Va(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Wi(t))return Es();for(var r of e.options)r.selected=t.includes(Vi(r));return}for(r of e.options){var a=Vi(r);if(Cs(a,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Ec(e){var t=new MutationObserver(()=>{Va(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),qr(()=>{t.disconnect()})}function Vi(e){return"__value"in e?e.__value:e.value}const Vn=Symbol("class"),Fn=Symbol("style"),Jo=Symbol("is custom element"),Xo=Symbol("is html"),Sc=cr?"link":"LINK",Cc=cr?"input":"INPUT",$c=cr?"option":"OPTION",Tc=cr?"select":"SELECT",Ac=cr?"progress":"PROGRESS";function ii(e){if(U){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var r=e.value;W(e,"value",null),e.value=r}if(e.hasAttribute("checked")){var a=e.checked;W(e,"checked",null),e.checked=a}}};e[Hn]=n,$t(n),To()}}function Rc(e,t){var n=oi(e);n.value===(n.value=t!=null?t:void 0)||e.value===t&&(t!==0||e.nodeName!==Ac)||(e.value=t!=null?t:"")}function Ic(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function W(e,t,n,r){var a=oi(e);U&&(a[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName===Sc)||a[t]!==(a[t]=n)&&(t==="loading"&&(e[as]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Qo(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Oc(e,t,n,r,a=!1,o=!1){var it;if(U&&a&&e.nodeName===Cc){var u=e,l=u.type==="checkbox"?"defaultChecked":"defaultValue";l in n||ii(u)}var s=oi(e),c=s[Jo],d=!s[Xo];let p=U&&c;p&&pt(!1);var v=t||{},b=e.nodeName===$c;for(var m in t)m in n||(n[m]=null);n.class?n.class=yc(n.class):n[Vn]&&(n.class=null),n[Fn]&&((it=n.style)!=null||(n.style=null));var x=Qo(e);for(const T in n){let z=n[T];if(b&&T==="value"&&z==null){e.value=e.__value="",v[T]=z;continue}if(T==="class"){var L=e.namespaceURI==="http://www.w3.org/1999/xhtml";kc(e,L,z,r,t==null?void 0:t[Vn],n[Vn]),v[T]=z,v[Vn]=n[Vn];continue}if(T==="style"){xc(e,z,t==null?void 0:t[Fn],n[Fn]),v[T]=z,v[Fn]=n[Fn];continue}var C=v[T];if(!(z===C&&!(z===void 0&&e.hasAttribute(T)))){v[T]=z;var Z=T[0]+T[1];if(Z!=="$$")if(Z==="on"){const se={},Y="$$"+T;let K=T.slice(2);var ie=oc(K);if(ac(K)&&(K=K.slice(0,-7),se.capture=!0),!ie&&C){if(z!=null)continue;e.removeEventListener(K,v[Y],se),v[Y]=null}if(ie)Jr(K,e,z),Xr([K]);else if(z!=null){let ot=function(Ee){v[T].call(this,Ee)};v[Y]=Ko(K,e,ot,se)}}else if(T==="style")W(e,T,z);else if(T==="autofocus")Bs(e,!!z);else if(!c&&(T==="__value"||T==="value"&&z!=null))e.value=e.__value=z;else if(T==="selected"&&b)Ic(e,z);else{var H=T;d||(H=sc(H));var we=H==="defaultValue"||H==="defaultChecked";if(z==null&&!c&&!we)if(s[T]=null,H==="value"||H==="checked"){let se=e;const Y=t===void 0;if(H==="value"){let K=se.defaultValue;se.removeAttribute(H),se.defaultValue=K,se.value=se.__value=Y?K:null}else{let K=se.defaultChecked;se.removeAttribute(H),se.defaultChecked=K,se.checked=Y?K:!1}}else e.removeAttribute(T);else we||x.includes(H)&&(c||typeof z!="string")?(e[H]=z,H in s&&(s[H]=ue)):typeof z!="function"&&W(e,H,z)}}}return p&&pt(!0),v}function ea(e,t,n=[],r=[],a=[],o,u=!1,l=!1){_o(a,n,r,s=>{var c=void 0,d={},p=e.nodeName===Tc,v=!1;if(No(()=>{var m=t(...s.map(i)),x=Oc(e,c,m,o,u,l);v&&p&&"value"in m&&Va(e,m.value);for(let C of Object.getOwnPropertySymbols(d))m[C]||me(d[C]);for(let C of Object.getOwnPropertySymbols(m)){var L=m[C];C.description===_s&&(!c||L!==c[C])&&(d[C]&&me(d[C]),d[C]=ft(()=>bc(e,()=>L))),x[C]=L}c=x}),p){var b=e;ti(()=>{Va(b,c.value,!0),Ec(b)})}v=!0})}function oi(e){var t;return(t=e[Er])!=null?t:e[Er]={[Jo]:e.nodeName.includes("-"),[Xo]:e.namespaceURI===to}}var Fi=new Map;function Qo(e){var t=e.getAttribute("is")||e.nodeName,n=Fi.get(t);if(n)return n;Fi.set(t,n=[]);for(var r,a=e,o=Element.prototype;o!==a;){r=Jl(a);for(var u in r)r[u].set&&u!=="innerHTML"&&u!=="textContent"&&u!=="innerText"&&n.push(u);a=qi(a)}return n}function Pc(e,t,n=t){var r=new WeakSet;Hs(e,"input",async a=>{var o=a?e.defaultValue:e.value;if(o=ya(e)?wa(o):o,n(o),A!==null&&r.add(A),await qt(),o!==(o=t())){var u=e.selectionStart,l=e.selectionEnd,s=e.value.length;if(e.value=o!=null?o:"",l!==null){var c=e.value.length;u===l&&l===s&&c>s?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=u,e.selectionEnd=Math.min(l,c))}}}),(U&&e.defaultValue!==e.value||pr(t)==null&&e.value)&&(n(ya(e)?wa(e.value):e.value),A!==null&&r.add(A)),Zr(()=>{var a=t();if(e===document.activeElement){var o=A;if(r.has(o))return}ya(e)&&a===wa(e.value)||e.type==="date"&&!a&&!e.value||a!==e.value&&(e.value=a!=null?a:"")})}function ya(e){var t=e.type;return t==="number"||t==="range"}function wa(e){return e===""?null:+e}function _a(e,t){return e===t||(e==null?void 0:e[yn])===t}function jt(e={},t,n,r){var a=Oe.r,o=M;return ti(()=>{var u,l;return Zr(()=>{u=l,l=[],pr(()=>{_a(n(...l),e)||(t(e,...l),u&&_a(n(...u),e)&&t(null,...u))})}),()=>{let s=o;for(;s!==a&&s.parent!==null&&s.parent.f&xa;)s=s.parent;const c=()=>{l&&_a(n(...l),e)&&t(null,...l)},d=s.teardown;s.teardown=()=>{c(),d==null||d()}}}),e}const Lc={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ta(e,t,n){return new Proxy({props:e,exclude:t},Lc)}function re(e,t,n,r){var a=r,o=!0,u=()=>(o&&(o=!1,a=r),a),l;l=e[t],l===void 0&&r!==void 0&&(l=u());var s;s=()=>{var v=e[t];return v===void 0?u():(o=!0,v)};var c=!1,d=Xa(()=>(c=!1,s())),p=M;return function(v,b){if(arguments.length>0){const m=b?i(d):v;return $(d,m),c=!0,a!==void 0&&(a=m),v}return At&&c||p.f&rt?d.v:i(d)}}function Mc(e){return new Dc(e)}var St,Ye;class Dc{constructor(t){S(this,St,void 0);S(this,Ye,void 0);var o,u;var n=new Map,r=(l,s)=>{var c=Co(s,!1,!1);return n.set(l,c),c};const a=new Proxy({...t.props||{},$$events:{}},{get(l,s){var c;return i((c=n.get(s))!=null?c:r(s,Reflect.get(l,s)))},has(l,s){var c;return s===rs?!0:(i((c=n.get(s))!=null?c:r(s,Reflect.get(l,s))),Reflect.has(l,s))},set(l,s,c){var d;return $((d=n.get(s))!=null?d:r(s,c),c),Reflect.set(l,s,c)}});P(this,Ye,(t.hydrate?fc:Go)(t.component,{target:t.target,anchor:t.anchor,props:a,context:t.context,intro:(o=t.intro)!=null?o:!1,recover:t.recover,transformError:t.transformError})),(!((u=t==null?void 0:t.props)!=null&&u.$$host)||t.sync===!1)&&Q(),P(this,St,a.$$events);for(const l of Object.keys(h(this,Ye)))l==="$set"||l==="$destroy"||l==="$on"||qn(this,l,{get(){return h(this,Ye)[l]},set(s){h(this,Ye)[l]=s},enumerable:!0});h(this,Ye).$set=l=>{Object.assign(a,l)},h(this,Ye).$destroy=()=>{hc(h(this,Ye))}}$set(t){h(this,Ye).$set(t)}$on(t,n){h(this,St)[t]=h(this,St)[t]||[];const r=(...a)=>n.call(this,...a);return h(this,St)[t].push(r),()=>{h(this,St)[t]=h(this,St)[t].filter(a=>a!==r)}}$destroy(){h(this,Ye).$destroy()}}St=new WeakMap,Ye=new WeakMap;let el=class{};typeof HTMLElement=="function"&&(el=class extends HTMLElement{constructor(t,n,r){super();O(this,"$$ctor");O(this,"$$s");O(this,"$$c");O(this,"$$cn",!1);O(this,"$$d",{});O(this,"$$r",!1);O(this,"$$p_d",{});O(this,"$$l",{});O(this,"$$l_u",new Map);O(this,"$$me");O(this,"$$shadowRoot",null);this.$$ctor=t,this.$$s=n,r&&(this.$$shadowRoot=this.attachShadow(r))}addEventListener(t,n,r){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(n),this.$$c){const a=this.$$c.$on(t,n);this.$$l_u.set(n,a)}super.addEventListener(t,n,r)}removeEventListener(t,n,r){if(super.removeEventListener(t,n,r),this.$$c){const a=this.$$l_u.get(n);a&&(a(),this.$$l_u.delete(n))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let t=function(a){return o=>{const u=Wa("slot");a!=="default"&&(u.name=a),B(o,u)}};if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},r=Nc(this);for(const a of this.$$s)a in r&&(a==="default"&&!this.$$d.children?(this.$$d.children=t(a),n.default=!0):n[a]=t(a));for(const a of this.attributes){const o=this.$$g_p(a.name);o in this.$$d||(this.$$d[o]=Rr(o,a.value,this.$$p_d,"toProp"))}for(const a in this.$$p_d)!(a in this.$$d)&&this[a]!==void 0&&(this.$$d[a]=this[a],delete this[a]);this.$$c=Mc({component:this.$$ctor,target:this.$$shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=qs(()=>{Zr(()=>{var a;this.$$r=!0;for(const o of Ir(this.$$c)){if(!((a=this.$$p_d[o])!=null&&a.reflect))continue;this.$$d[o]=this.$$c[o];const u=Rr(o,this.$$d[o],this.$$p_d,"toAttribute");u==null?this.removeAttribute(this.$$p_d[o].attribute||o):this.setAttribute(this.$$p_d[o].attribute||o,u)}this.$$r=!1})});for(const a in this.$$l)for(const o of this.$$l[a]){const u=this.$$c.$on(a,o);this.$$l_u.set(o,u)}this.$$l={}}}attributeChangedCallback(t,n,r){var a;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Rr(t,r,this.$$p_d,"toProp"),(a=this.$$c)==null||a.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return Ir(this.$$p_d).find(n=>this.$$p_d[n].attribute===t||!this.$$p_d[n].attribute&&n.toLowerCase()===t)||t}});function Rr(e,t,n,r){var o;const a=(o=n[e])==null?void 0:o.type;if(t=a==="Boolean"&&typeof t!="boolean"?t!=null:t,!r||!n[e])return t;if(r==="toAttribute")switch(a){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t==null?null:t;default:return t}else switch(a){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function Nc(e){const t={};return e.childNodes.forEach(n=>{t[n.slot||"default"]=!0}),t}function Bt(e,t,n,r,a,o){let u=class extends el{constructor(){super(e,n,a),this.$$p_d=t}static get observedAttributes(){return Ir(t).map(l=>(t[l].attribute||l).toLowerCase())}};return Ir(t).forEach(l=>{qn(u.prototype,l,{get(){return this.$$c&&l in this.$$c?this.$$c[l]:this.$$d[l]},set(s){var p;s=Rr(l,s,t),this.$$d[l]=s;var c=this.$$c;if(c){var d=(p=bn(c,l))==null?void 0:p.get;d?c[l]=s:c.$set({[l]:s})}}})}),r.forEach(l=>{qn(u.prototype,l,{get(){var s;return(s=this.$$c)==null?void 0:s[l]}})}),e.element=u,u}var Uc=ae('<div class="altcha-checkbox"><input/> <svg aria-hidden="true" width="12" height="9" viewBox="0 0 12 9"><polyline points="1 5 4 8 11 1"></polyline></svg> <div class="altcha-spinner altcha-checkbox-spinner" aria-hidden="true"></div></div>');function tl(e,t){Rt(t,!0);let n=re(t,"loading"),r=ta(t,["$$slots","$$events","$$legacy","$$host","loading"]),a;function o(){a==null||a.click()}var u={get loading(){return n()},set loading(d){n(d),Q()}},l=Uc(),s=le(l);ea(s,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),jt(s,d=>a=d,()=>a);var c=ne(s,2);return Ya(2),te(l),xe(()=>W(l,"data-loading",n())),Jr("click",c,o),B(e,l),It(u)}Xr(["click"]);Bt(tl,{loading:{}},[],[],{mode:"open"});var Vc=ae('<div class="altcha-checkbox-native"><input/> <div class="altcha-spinner altcha-checkbox-native-spinner"></div></div>');function nl(e,t){Rt(t,!0);let n=re(t,"loading"),r=ta(t,["$$slots","$$events","$$legacy","$$host","loading"]);var a={get loading(){return n()},set loading(l){n(l),Q()}},o=Vc(),u=le(o);return ea(u,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),Ya(2),te(o),xe(()=>W(o,"data-loading",n())),B(e,o),It(a)}Bt(nl,{loading:{}},[],[],{mode:"open"});var Fc=ae('<div><a target="_blank" class="altcha-logo" aria-hidden="true" tabindex="-1"><svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.33955 16.4279C5.88954 20.6586 12.1971 21.2105 16.4279 17.6604C18.4699 15.947 19.6548 13.5911 19.9352 11.1365L17.9886 10.4279C17.8738 12.5624 16.909 14.6459 15.1423 16.1284C11.7577 18.9684 6.71167 18.5269 3.87164 15.1423C1.03163 11.7577 1.4731 6.71166 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577C16.9767 5.86872 17.5322 7.02798 17.804 8.2324L19.9522 9.01429C19.7622 7.07737 19.0059 5.17558 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956C-0.658625 5.88958 -1.21046 12.1971 2.33955 16.4279Z" fill="currentColor"></path><path d="M3.57212 2.33956C1.65755 3.94607 0.496389 6.11731 0.12782 8.40523L2.04639 9.13961C2.26047 7.15832 3.21057 5.25375 4.8577 3.87164C8.24231 1.03162 13.2883 1.4731 16.1284 4.8577L13.8302 6.78606L19.9633 9.13364C19.7929 7.15555 19.0335 5.20847 17.6604 3.57212C14.1104 -0.658624 7.80283 -1.21043 3.57212 2.33956Z" fill="currentColor"></path><path d="M7 10H5C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10H13C13 11.6569 11.6569 13 10 13C8.3431 13 7 11.6569 7 10Z" fill="currentColor"></path></svg></a></div>');function li(e,t){Rt(t,!0);let n=re(t,"strings");const r="https://altcha.org";var a={get strings(){return n()},set strings(l){n(l),Q()}},o=Fc(),u=le(o);return W(u,"href",r),te(o),xe(()=>W(u,"aria-label",n().ariaLinkLabel)),B(e,o),It(a)}Bt(li,{strings:{}},[],[],{mode:"open"});var jc=ae('<div class="altcha-footer"><p></p> <!></div>');function Fa(e,t){Rt(t,!0);let n=re(t,"logo"),r=re(t,"strings");var a={get logo(){return n()},set logo(c){n(c),Q()},get strings(){return r()},set strings(c){r(c),Q()}},o=jc(),u=le(o);qo(u,()=>r().footer,!0),te(u);var l=ne(u,2);{var s=c=>{li(c,{get strings(){return r()}})};fe(l,c=>{n()&&c(s)})}return te(o),B(e,o),It(a)}Bt(Fa,{logo:{},strings:{}},[],[],{mode:"open"});var zc=ae('<div class="altcha-switch"><input/>  <div class="altcha-switch-toggle"><div class="altcha-spinner altcha-switch-spinner"></div></div></div>');function rl(e,t){Rt(t,!0);let n=re(t,"loading"),r=ta(t,["$$slots","$$events","$$legacy","$$host","loading"]),a;function o(){a==null||a.click()}var u={get loading(){return n()},set loading(d){n(d),Q()}},l=zc(),s=le(l);ea(s,()=>({type:"checkbox",...r}),void 0,void 0,void 0,void 0,!0),jt(s,d=>a=d,()=>a);var c=ne(s,2);return te(l),xe(()=>W(l,"data-loading",n())),Jr("click",c,o),B(e,l),It(u)}Xr(["click"]);Bt(rl,{loading:{}},[],[],{mode:"open"});var pe=(e=>(e.ERROR="error",e.LOADING="loading",e.PLAYING="playing",e.PAUSED="paused",e.READY="ready",e))(pe||{}),G=(e=>(e.CODE="code",e.ERROR="error",e.VERIFIED="verified",e.VERIFYING="verifying",e.UNVERIFIED="unverified",e.EXPIRED="expired",e))(G||{}),Bc=ae('<div class="altcha-code-challenge-title"> </div>'),Hc=ae('<div class="altcha-spinner"></div>'),Kc=ri('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.8659 3.00017L22.3922 19.5002C22.6684 19.9785 22.5045 20.5901 22.0262 20.8662C21.8742 20.954 21.7017 21.0002 21.5262 21.0002H2.47363C1.92135 21.0002 1.47363 20.5525 1.47363 20.0002C1.47363 19.8246 1.51984 19.6522 1.60761 19.5002L11.1339 3.00017C11.41 2.52187 12.0216 2.358 12.4999 2.63414C12.6519 2.72191 12.7782 2.84815 12.8659 3.00017ZM10.9999 16.0002V18.0002H12.9999V16.0002H10.9999ZM10.9999 9.00017V14.0002H12.9999V9.00017H10.9999Z"></path></svg>'),Yc=ri('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 7C15 6.44772 15.4477 6 16 6C16.5523 6 17 6.44772 17 7V17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17V7ZM7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7V17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17V7Z"></path></svg>'),Gc=ri('<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 12H7C8.10457 12 9 12.8954 9 14V19C9 20.1046 8.10457 21 7 21H4C2.89543 21 2 20.1046 2 19V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V19C22 20.1046 21.1046 21 20 21H17C15.8954 21 15 20.1046 15 19V14C15 12.8954 15.8954 12 17 12H20C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12Z"></path></svg>'),Wc=ae('<button type="button" class="altcha-button altcha-button-secondary"><!></button>'),qc=ae('<audio hidden="" autoplay=""></audio>'),Zc=ae('<div class="altcha-code-challenge"><form data-code-challenge="true"><!> <div class="altcha-code-challenge-text"> </div> <img class="altcha-code-challenge-image" alt=""/> <div class="altcha-code-challenge-row"><input type="text" class="altcha-input" autocomplete="off" name="" required=""/> <!> <button type="button" class="altcha-button altcha-button-secondary"><svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2V4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 9.25022 5.38734 6.82447 7.50024 5.38451L7.5 8H9.5V2L3.5 2V4L5.99918 3.99989C3.57075 5.82434 2 8.72873 2 12Z"></path></svg></button></div> <div class="altcha-code-challenge-buttons"><button type="submit" class="altcha-button"> </button> <button type="button" class="altcha-button altcha-button-secondary"> </button></div></form> <!></div>');function al(e,t){Rt(t,!0);let n=re(t,"audioUrl"),r=re(t,"codeChallenge"),a=re(t,"config"),o=re(t,"imageUrl"),u=re(t,"onCancel"),l=re(t,"onReload"),s=re(t,"onSubmit"),c=re(t,"strings"),d=F(void 0),p=F(void 0),v=F(void 0),b=F(!1),m=F(""),x=F(!1);ai(()=>(a().disableAutoFocus||qt().then(()=>{var k;(k=i(v))==null||k.focus()}),()=>{i(p)&&(i(p).pause(),$(p,void 0))}));function L(){$(d,pe.PAUSED,!0)}function C(k){$(d,pe.ERROR,!0)}function Z(){$(d,pe.READY,!0)}function ie(){$(d,pe.LOADING,!0)}function H(){$(d,pe.PLAYING,!0)}function we(){$(d,pe.PAUSED,!0)}function it(k){var q;k.code==="Space"?(k.preventDefault(),k.stopPropagation(),z()):k.code==="Escape"&&(k.preventDefault(),k.stopPropagation(),(q=u())==null||q())}function T(k){var q;k.preventDefault(),k.stopPropagation(),(q=s())==null||q(i(m))}function z(){i(p)?i(d)===pe.LOADING||(i(p).paused?(n()&&i(p).src!==n()&&(i(p).src=n()),i(p).currentTime=0,i(p).play()):i(p).pause()):($(x,!0),requestAnimationFrame(()=>{i(p)&&n()&&(i(p).src=n(),i(p).play())}))}var se={get audioUrl(){return n()},set audioUrl(k){n(k),Q()},get codeChallenge(){return r()},set codeChallenge(k){r(k),Q()},get config(){return a()},set config(k){a(k),Q()},get imageUrl(){return o()},set imageUrl(k){o(k),Q()},get onCancel(){return u()},set onCancel(k){u(k),Q()},get onReload(){return l()},set onReload(k){l(k),Q()},get onSubmit(){return s()},set onSubmit(k){s(k),Q()},get strings(){return c()},set strings(k){c(k),Q()}},Y=Zc(),K=le(Y),ot=le(K);{var Ee=k=>{var q=Bc(),Yt=le(q,!0);te(q),xe(()=>vt(Yt,c().verificationRequired)),B(k,q)};fe(ot,k=>{a().codeChallengeDisplay!=="standard"&&k(Ee)})}var Te=ne(ot,2),oe=le(Te,!0);te(Te);var lt=ne(Te,2),E=ne(lt,2),J=le(E);ii(J),J.disabled=i(b),jt(J,k=>$(v,k),()=>i(v));var _e=ne(J,2);{var y=k=>{var q=Wc(),Yt=le(q);{var ra=Ae=>{var st=Hc();B(Ae,st)},Nn=Ae=>{var st=Kc();B(Ae,st)},aa=Ae=>{var st=Yc();B(Ae,st)},ia=Ae=>{var st=Gc();B(Ae,st)};fe(Yt,Ae=>{i(d)===pe.LOADING?Ae(ra):i(d)===pe.ERROR?Ae(Nn,1):i(d)===pe.PLAYING?Ae(aa,2):Ae(ia,-1)})}te(q),xe(()=>{W(q,"title",c().getAudioChallenge),q.disabled=i(d)===pe.LOADING||i(d)===pe.ERROR,W(q,"aria-label",i(d)===pe.LOADING?c().loading:c().getAudioChallenge)}),he("click",q,()=>z(),!0),B(k,q)};fe(_e,k=>{r().audio&&k(y)})}var Ht=ne(_e,2);te(E);var br=ne(E,2),Fe=le(br),na=le(Fe,!0);te(Fe);var Kt=ne(Fe,2),Ln=le(Kt,!0);te(Kt),te(br),te(K);var Mn=ne(K,2);{var Dn=k=>{var q=qc();jt(q,Yt=>$(p,Yt),()=>i(p)),he("error",q,C),he("loadstart",q,ie),he("canplay",q,Z),he("pause",q,we),he("playing",q,H),he("ended",q,L),B(k,q)};fe(Mn,k=>{i(x)&&k(Dn)})}return te(Y),xe(()=>{vt(oe,c().enterCodeFromImage),W(lt,"src",o()),W(J,"minlength",r().length||1),W(J,"maxlength",r().length),W(J,"placeholder",c().enterCode),W(J,"aria-label",i(d)===pe.LOADING?c().loading:i(d)===pe.PLAYING?"":c().enterCodeAria),W(J,"aria-live",i(d)?"assertive":"polite"),W(J,"aria-busy",i(d)===pe.LOADING),W(Ht,"title",c().reload),W(Ht,"aria-label",c().reload),W(Fe,"aria-label",c().verify),vt(na,c().verify),W(Kt,"aria-label",c().cancel),vt(Ln,c().cancel)}),he("submit",K,T,!0),Jr("keydown",J,it),Pc(J,()=>i(m),k=>$(m,k)),he("click",Ht,()=>{var k;return(k=l())==null?void 0:k()},!0),he("click",Kt,()=>{var k;return(k=u())==null?void 0:k()},!0),B(e,Y),It(se)}Xr(["keydown"]);Bt(al,{audioUrl:{},codeChallenge:{},config:{},imageUrl:{},onCancel:{},onReload:{},onSubmit:{},strings:{}},[],[],{mode:"open"});var Jc=ae('<div class="altcha-popover-backdrop" data-backdrop=""></div>'),Xc=ae('<div class="altcha-popover-arrow"></div>'),Qc=ae('<div role="button" class="altcha-popover-close">&times;</div>'),eu=ae('<!> <div><!> <!> <div class="altcha-popover-content"><!></div></div>',1);function ja(e,t){Rt(t,!0);let n=re(t,"anchor"),r=re(t,"children"),a=re(t,"display",7,"standard"),o=re(t,"backdrop",7,!1),u=re(t,"onClickOutside"),l=re(t,"onClickOutsideDelay",7,600),s=re(t,"onClose"),c=re(t,"placement",7,"auto"),d=re(t,"updateUISignal"),p=re(t,"variant",7,"neutral"),v=ta(t,["$$slots","$$events","$$legacy","$$host","anchor","children","display","backdrop","onClickOutside","onClickOutsideDelay","onClose","placement","updateUISignal","variant"]),b=F(void 0),m=F(void 0),x=F(!1),L=F(0);Le(()=>{c()!=="auto"&&$(x,c()==="top")}),Le(()=>{d()&&we()}),ai(()=>{const E=a()==="bottomsheet"||a()==="overlay";return E&&(i(m)&&document.body.append(i(m)),i(b)&&document.body.append(i(b))),we(),qt().then(()=>{$(L,Date.now(),!0)}),()=>{E&&(i(m)&&document.body.removeChild(i(m)),i(b)&&document.body.removeChild(i(b)))}});function C(){var E;(E=s())==null||E()}function Z(E){var _e,y;const J=E.target;!((_e=i(b))!=null&&_e.contains(J))&&(!l()||i(L)+l()<Date.now())&&((y=u())==null||y())}function ie(){we()}function H(){we()}function we(){if(n()&&c()==="auto"&&i(b)){const E=n().getBoundingClientRect(),_e=document.documentElement.clientHeight-(E.top+E.height)<i(b).clientHeight;i(x)!==_e&&$(x,_e)}}var it={get anchor(){return n()},set anchor(E){n(E),Q()},get children(){return r()},set children(E){r(E),Q()},get display(){return a()},set display(E="standard"){a(E),Q()},get backdrop(){return o()},set backdrop(E=!1){o(E),Q()},get onClickOutside(){return u()},set onClickOutside(E){u(E),Q()},get onClickOutsideDelay(){return l()},set onClickOutsideDelay(E=600){l(E),Q()},get onClose(){return s()},set onClose(E){s(E),Q()},get placement(){return c()},set placement(E="auto"){c(E),Q()},get updateUISignal(){return d()},set updateUISignal(E){d(E),Q()},get variant(){return p()},set variant(E="neutral"){p(E),Q()}},T=eu();he("click",rn,Z,!0),he("resize",rn,ie),he("scroll",rn,H);var z=vn(T);{var se=E=>{var J=Jc();jt(J,_e=>$(m,_e),()=>i(m)),B(E,J)};fe(z,E=>{o()&&E(se)})}var Y=ne(z,2);ea(Y,()=>{var E;return{...v,class:`altcha-popover ${(E=t.class||"")!=null?E:""}`,"data-popover":!0,"data-variant":p(),"data-top":i(x),"data-display":a()}});var K=le(Y);{var ot=E=>{var J=Xc();B(E,J)};fe(K,E=>{a()==="standard"&&E(ot)})}var Ee=ne(K,2);{var Te=E=>{var J=Qc();he("click",J,C,!0),B(E,J)};fe(Ee,E=>{a()!=="standard"&&E(Te)})}var oe=ne(Ee,2),lt=le(oe);return dc(lt,()=>{var E;return(E=r())!=null?E:Nt}),te(oe),te(Y),jt(Y,E=>$(b,E),()=>i(b)),B(e,T),It(it)}Bt(ja,{anchor:{},children:{},display:{},backdrop:{},onClickOutside:{},onClickOutsideDelay:{},onClose:{},placement:{},updateUISignal:{},variant:{}},[],[],{mode:"open"});function tu(e){return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function nu(e,t="altcha-css",n){var r,a,o;if(typeof document<"u"&&document&&!document.getElementById(t)){const u=document.createElement("style");u.id=t,u.textContent=e;const l=(o=(r=document.currentScript)==null?void 0:r.nonce)!=null?o:(a=document.querySelector('meta[name="csp-nonce"]'))==null?void 0:a.content;l&&(u.nonce=l),document.head.appendChild(u)}}async function il(e){var v;const{challenge:t,concurrency:n=navigator.hardwareConcurrency,controller:r=new AbortController,createWorker:a,onOutOfMemory:o=b=>b>1?Math.floor(b/2):0,counterMode:u,timeout:l=9e4}=e,s=Math.min(16,Math.max(1,n)),c=[],d=()=>{for(const b of c)b.terminate()};for(let b=0;b<s;b++)c.push(await a(t.parameters.algorithm));let p=null;try{p=await Promise.race(c.map((b,m)=>(r.signal.addEventListener("abort",()=>{b.postMessage({type:"abort"})}),new Promise((x,L)=>{b.addEventListener("error",C=>{L(C)}),b.addEventListener("message",C=>{if(C.data){for(const Z of c)Z!==b&&Z.postMessage({type:"abort"});if(C.data.error)return L(new Error(C.data.error))}x(C.data)}),b.postMessage({challenge:t,counterMode:u,counterStart:m,counterStep:s,timeout:l,type:"work"})}))))}catch(b){if(b instanceof Error&&!!((v=b==null?void 0:b.message)!=null&&v.includes("Out of memory"))&&o){d();const x=o(s);if(x)return il({...e,challenge:t,controller:r,concurrency:x,createWorker:a})}throw b}finally{d()}return r.signal.aborted?null:p||null}class ru{constructor(t={}){O(this,"TAG_CODES",{INPUT:1,TEXTAREA:2,SELECT:3,BUTTON:4,A:5,DETAILS:6,SUMMARY:7,IFRAME:8,VIDEO:9,AUDIO:10});O(this,"maxSamples");O(this,"sampleInterval");O(this,"target");O(this,"focusStartTime",0);O(this,"focusInteraction",0);O(this,"focusInteractionTimer",null);O(this,"lastPointerSample",0);O(this,"lastTouchSample",0);O(this,"lastScrollSample",0);O(this,"pendingPointer",null);O(this,"pendingTouch",null);O(this,"focus",[]);O(this,"pointer",[]);O(this,"scroll",[]);O(this,"touch",[]);O(this,"onFocus",t=>{var a;if(this.focusInteraction===2)return;const n=t.target;if(!(n instanceof Element))return;const r=performance.now();this.focusStartTime===0&&(this.focusStartTime=r),this.focus.push([Math.round(r-this.focusStartTime),n.tabIndex,(a=this.TAG_CODES[n.tagName])!=null?a:0,this.focusInteraction?1:0]),this.evict(this.focus)});O(this,"onInteraction",t=>{this.focusInteraction="keyCode"in t?1:2,this.focusInteractionTimer&&clearTimeout(this.focusInteractionTimer),this.focusInteractionTimer=setTimeout(()=>{this.focusInteraction=0},100)});O(this,"onPointer",t=>{if(t.pointerType==="touch")return;const n=t.timeStamp||performance.now();this.pendingPointer=[Math.round(t.clientX),Math.round(t.clientY),Math.round(n)],n-this.lastPointerSample>=this.sampleInterval&&(this.pointer.push(this.pendingPointer),this.lastPointerSample=n,this.pendingPointer=null,this.evict(this.pointer))});O(this,"onScroll",()=>{const t=performance.now();t-this.lastScrollSample<this.sampleInterval||(this.scroll.push([Math.round(window.scrollY),Math.round(t)]),this.lastScrollSample=t,this.evict(this.scroll))});O(this,"onTouchMove",t=>{const n=t.timeStamp||performance.now(),r=t.touches[0];r&&(this.pendingTouch=[Math.round(r.clientX),Math.round(r.clientY),Math.round(n),Math.round(r.force*1e3)/1e3,Math.round(r.radiusX||0),Math.round(r.radiusY||0)],n-this.lastTouchSample>=this.sampleInterval&&(this.touch.push(this.pendingTouch),this.lastTouchSample=n,this.pendingTouch=null,this.evict(this.touch)))});const{maxSamples:n=60,sampleInterval:r=50,target:a=window}=t;this.maxSamples=n,this.sampleInterval=r,this.target=a,this.attach()}destroy(){const t={capture:!0};this.target.removeEventListener("focusin",this.onFocus,t),this.target.removeEventListener("keydown",this.onInteraction,t),this.target.removeEventListener("pointerdown",this.onInteraction,t),this.target.removeEventListener("pointermove",this.onPointer,t),this.target.removeEventListener("scroll",this.onScroll,t),this.target.removeEventListener("touchmove",this.onTouchMove,t)}export(){return{focus:this.focus,maxTouchPoints:navigator.maxTouchPoints||0,pointer:this.pointer,scroll:this.scroll,time:Date.now(),touch:this.touch}}attach(){const t={passive:!0,capture:!0};this.target.addEventListener("focusin",this.onFocus,t),this.target.addEventListener("keydown",this.onInteraction,t),this.target.addEventListener("pointerdown",this.onInteraction,t),this.target.addEventListener("pointermove",this.onPointer,t),this.target.addEventListener("scroll",this.onScroll,t),this.target.addEventListener("touchmove",this.onTouchMove,t)}evict(t){t.length>this.maxSamples&&t.splice(0,t.length-this.maxSamples)}}var au=ae('<div class="altcha-overlay-backdrop" data-backdrop=""></div>'),iu=ae('<div class="altcha-overlay-content"></div>'),ou=ae('<div role="button" class="altcha-overlay-close">&times;</div> <!>',1),lu=ae('<div class="altcha-floating-arrow"></div>'),su=ae('<input type="hidden"/>'),cu=ae('<div class="altcha-error">Secure context (HTTPS) required.</div>'),uu=ae('<div class="altcha-error"> </div>'),fu=ae('<div class="altcha-error"> </div>'),hu=ae("<!> <!>",1),du=ae('<!> <div class="altcha"><!> <div class="altcha-main"><div><div class="altcha-checkbox-wrap"><!> <label><!></label></div> <!></div> <!> <!> <!></div> <!></div>',1);function vu(e,t){Rt(t,!0);const n=()=>Ti(d,"$altchaDefaults",a),r=()=>Ti(m,"$altchaI18nStore",a),[a,o]=Rs(),u='input[type="text"]:not([data-no-spamfilter]), textarea:not([data-no-spamfilter])',l='input[type="submit"], button[type="submit"], button:not([type="button"]):not([type="reset"])',s=["ar","fa","he","ur"],{isSecureContext:c}=globalThis,{store:d}=globalThis.$altcha.defaults,p=navigator.hardwareConcurrency||2,v=navigator.deviceMemory||0,b=v&&v<=4?Math.min(4,p):p,m=globalThis.$altcha.i18n.store,x=t.$$host,L=(f,g)=>{qt().then(()=>{x==null||x.dispatchEvent(new CustomEvent(f,{detail:g}))})};let C=null,Z=F(Ct(new URL(location.origin))),ie=F(!1),H=F(null),we=F(null),it=F(null),T=F(Ct(G.UNVERIFIED)),z=F(void 0),se=F(void 0),Y=F(null),K=F(void 0),ot=F(null),Ee=F(null),Te=F(null),oe=F(null),lt=F(Ct([])),E=F(0),J=F(Ct({})),_e=F(!0);const y=Se(()=>({fetch:(f,g)=>fetch(f,g),audioChallengeLanguage:"",auto:"off",barPlacement:"bottom",challenge:"",codeChallenge:null,codeChallengeDisplay:"standard",credentials:null,debug:!1,disableAutoFocus:!1,display:"standard",floatingAnchor:"",floatingOffset:8,floatingPersist:!1,floatingPlacement:"auto",hideFooter:!1,hideLogo:!1,humanInteractionSignature:!0,language:"",mockError:!1,minDuration:500,overlayContent:"",name:"altcha",popoverPlacement:"auto",retryOnOutOfMemoryError:!0,setCookie:null,serverVerificationFields:!1,serverVerificationTimeZone:!1,test:!1,timeout:9e4,type:"checkbox",validationMessage:"",verifyFunction:null,verifyUrl:"",workers:b,...n(),...i(J)})),Ht=Se(()=>`altcha-checkbox-${t.id||Math.floor(Math.random()*1e12).toString(16)}`),br=Se(()=>ul(i(y).type)),Fe=Se(()=>i(y).auto),na=Se(()=>i(T)===G.VERIFYING),Kt=Se(()=>!i(y).hideFooter),Ln=Se(()=>!i(y).hideLogo&&i(y).display!=="bar"),Mn=Se(()=>fl(r(),[i(y).language,document.documentElement.lang,...navigator.languages])),Dn=Se(()=>s.includes(i(Mn).language)?"rtl":void 0),k=Se(()=>({...i(Mn).strings})),q=Se(()=>{var f,g,_;return(g=(f=i(H))==null?void 0:f.audio)!=null&&g.match(/^(https?:)?\//)?mr(i(H).audio,i(Z),{language:i(y).audioChallengeLanguage||i(Mn).language}).toString():(_=i(H))==null?void 0:_.audio}),Yt=Se(()=>{var f,g,_;return(g=(f=i(H))==null?void 0:f.image)!=null&&g.match(/^(https?:)?\//)?mr(i(H).image,i(Z)):(_=i(H))==null?void 0:_.image});Le(()=>{Un({auto:t.auto,challenge:t.challenge,display:t.display,language:t.language,name:t.name,type:t.type,workers:t.workers})}),Le(()=>{if(t.configuration)try{Un(JSON.parse(t.configuration))}catch(f){X("unable to parse the `configuration` attribute (JSON expected)")}}),Le(()=>{i(it)!==i(y).display&&yr(i(y).display)}),Le(()=>{i(ie)&&i(T)===G.VERIFYING&&$(ie,!1)}),Le(()=>{!i(ie)&&i(T)===G.VERIFIED&&$(ie,!0)}),Le(()=>{if(!i(ie)){const f=oa();f&&f.checked&&(f.checked=!1)}}),Le(()=>{var f;i(T)===G.VERIFIED&&((f=oa())==null||f.setCustomValidity(""))}),Le(()=>{if(i(Fe)==="onload"){const f=setTimeout(()=>{fn()},1);return()=>{f&&clearTimeout(f)}}}),Le(()=>{i(Ee)&&X("error:",i(Ee))}),Le(()=>{i(oe)&&i(y).setCookie&&Sl(i(oe),i(y).setCookie)}),ai(()=>{var f,g,_,w;return X("mounted","3.1.0"),x&&globalThis.$altcha.instances.add(x),$(Y,(f=i(K))==null?void 0:f.closest("form"),!0),(g=i(Y))==null||g.addEventListener("reset",hi),(_=i(Y))==null||_.addEventListener("submit",di,{capture:!0}),(w=i(Y))==null||w.addEventListener("focusin",fi),ra(),i(y).humanInteractionSignature&&(X("human interaction signature enabled"),C=new ru),L("load"),c||X("secure context (HTTPS) required"),()=>{var R,I,D;aa(),x&&globalThis.$altcha.instances.delete(x),i(Te)&&clearTimeout(i(Te)),(R=i(Y))==null||R.removeEventListener("reset",hi),(I=i(Y))==null||I.removeEventListener("submit",di,{capture:!0}),(D=i(Y))==null||D.removeEventListener("focusin",fi),C==null||C.destroy()}});function ra(){$(lt,[...globalThis.$altcha.plugins].map(f=>new f(x)),!0),X("activating plugins",i(lt).map(f=>f.constructor.name));for(const f of i(lt))f.activate()}async function Nn(f,...g){let _;for(const w of i(lt))_=await w[f].call(w,...g);return _}function aa(){for(const f of i(lt))f.destroy()}function ia(f){const[g,_]=f.salt.split("?"),w={};if(_)try{Object.assign(w,Object.fromEntries(new URLSearchParams(_).entries()))}catch(I){}const R={codeChallenge:f.codeChallenge,parameters:{algorithm:f.algorithm,cost:1,data:w,expiresAt:w!=null&&w.expires?parseInt(w.expires,10):void 0,keyLength:f.algorithm==="SHA-512"?64:f.algorithm==="SHA-384"?48:32,nonce:tu(new TextEncoder().encode(f.salt)),keyPrefix:f.challenge,salt:""},signature:f.signature};return Object.defineProperties(R,{_originalSalt:{enumerable:!1,value:f.salt,writable:!1},_version:{enumerable:!1,value:1,writable:!1}}),R}function Ae(f,g){return{algorithm:f.parameters.algorithm,challenge:f.parameters.keyPrefix,number:g.counter,salt:"_originalSalt"in f?f._originalSalt:f.parameters.nonce,signature:f.signature,took:g.time||0}}async function st(f){await new Promise(g=>setTimeout(g,f))}async function ui(f=i(y).challenge,g){const _=await Nn("onFetchChallenge",f);let w=null;if(_!==void 0)return _;if(typeof f=="string")if(f.startsWith("{")){X("parsing JSON challenge");try{w=JSON.parse(f)}catch(R){throw new Error("Unable to parse JSON challenge.")}}else{X("fetching challenge from",(g==null?void 0:g.method)||"GET",f),$(Z,new URL(f,location.origin),!0);const R=await i(y).fetch(f,{credentials:i(y).credentials||void 0,...g});await pi(R);const I=R.headers.get("x-altcha-config");I&&kl(I);const D=await R.json();if(D&&"his"in D&&D.his){if(X("requested HIS"),!C)throw new Error("Server requested HIS data but collector is disabled.");return ui(mr(D.his.url,i(Z)),{body:JSON.stringify({his:C.export()}),headers:{"content-type":"application/json"},method:"POST"})}D&&"hisResult"in D&&D.hisResult&&X("HIS result",D.hisResult),w=D}else if(f&&typeof f=="object")try{w=JSON.parse(JSON.stringify(f))}catch(R){throw new Error("Unable to parse JSON challenge.")}if(sl(w)&&(w=ia(w)),!cl(w))throw new Error("Challenge validation failed.");return w}function sl(f){return typeof f=="object"&&"challenge"in f}function cl(f){return!!f&&typeof f=="object"&&"parameters"in f&&!!f.parameters&&typeof f.parameters=="object"&&"algorithm"in f.parameters&&"nonce"in f.parameters&&"salt"in f.parameters&&"keyPrefix"in f.parameters}function oa(){return document.getElementById(i(Ht))}function ul(f){switch(f){case"checkbox":return tl;case"switch":return rl;case"native":default:return nl}}function fl(f,g){const _=Object.keys(f).map(R=>R.toLowerCase());let w=g.reduce((R,I)=>(I=I.toLowerCase(),R||(f[I]?I:null)||_.find(D=>I.split("-")[0]===D.split("-")[0])||null),null);return f[w||""]||(w="en"),{language:w,strings:f[w]}}function hl(f){switch(f){case"bar":return i(y).barPlacement||"bottom";case"floating":return i(y).floatingPlacement||"auto";default:return}}function dl(f){var _;return[...((_=i(Y))==null?void 0:_.querySelectorAll(u))||[]].reduce((w,R)=>{const I=R.name,D=R.value;return I&&D&&(w[I]=/\n/.test(D)?D.replace(new RegExp("(?<!\\r)\\n","g"),`\r
`):D),w},{})}function vl(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch(f){}}function mr(f,g,_){const w=new URL(f,g);if(w.search||(w.search=g.search),_)for(const R in _)_[R]!==void 0&&_[R]!==null&&w.searchParams.set(R,_[R]);return w.toString()}function pl(f){!i(ie)&&f.currentTarget.checked?(f.preventDefault(),f.currentTarget.checked=!1,i(T)!==G.VERIFYING&&fn()):f.currentTarget.checked||(f.preventDefault(),je())}function gl(f){i(T)===G.VERIFYING?f.currentTarget.setCustomValidity(i(k).waitAlert):i(y).validationMessage&&f.currentTarget.setCustomValidity(i(y).validationMessage)}function bl(){yr(i(y).display),je()}function ml(){wr()}function yl(f){const g=f.target;i(y).display==="floating"&&g&&!(x!=null&&x.contains(g))&&!g.hasAttribute("data-backdrop")&&!g.closest("[data-popover]")&&i(T)!==G.VERIFIED&&!i(y).floatingPersist&&la()}function fi(f){i(Fe)==="onfocus"&&i(T)===G.UNVERIFIED&&fn()}function hi(){yr(i(y).display),je()}function di(f){const g=f.target;(g==null?void 0:g.getAttribute("data-code-challenge"))!=="true"&&i(Fe)==="onsubmit"&&i(T)===G.UNVERIFIED&&(f.preventDefault(),f.stopPropagation(),$(ot,f.submitter,!0),sa(),fn().then(_=>{_&&!i(H)&&qt().then(()=>{vi(i(ot))})}))}function wl(f){f.persisted&&(yr(i(y).display),je())}function _l(){wr()}function kl(f){var g,_;try{const w=JSON.parse(f);w&&typeof w=="object"&&Un({serverVerificationFields:(g=w==null?void 0:w.sentinel)==null?void 0:g.fields,serverVerificationTimeZone:(_=w==null?void 0:w.sentinel)==null?void 0:_.timeZone,verifyUrl:w.verifyurl,...w})}catch(w){X("unable to configure from x-altcha-config header",w)}}function xl(f=20){var ve;if(!i(K))return;const g=i(y).floatingPlacement;if(!i(se)&&($(se,(i(y).floatingAnchor instanceof HTMLElement?i(y).floatingAnchor:i(y).floatingAnchor?document.querySelector(i(y).floatingAnchor):(ve=i(Y))==null?void 0:ve.querySelector(l))||i(Y),!0),!i(se))){X("unable to find floating anchor element");return}const _=parseInt(i(y).floatingOffset,10)||12,w=i(se).getBoundingClientRect(),R=i(K).getBoundingClientRect(),I=document.documentElement.clientHeight,D=document.documentElement.clientWidth,ke=!g||g==="auto"?w.bottom+R.height+_+f>I:g==="top",ee=Math.max(f,Math.min(D-f-R.width,w.left+w.width/2-R.width/2));if(i(K).style.setProperty("--altcha-floating-left",`${ee}px`),i(K).style.setProperty("--altcha-floating-top",ke?`${w.top-(R.height+_)}px`:`${w.bottom+_}px`),i(K).setAttribute("data-floating-position",ke?"top":"bottom"),i(z)){const ut=i(z).getBoundingClientRect();i(z).style.left=w.left-ee+w.width/2-ut.width/2+"px"}}async function El(f,g){const _=await Nn("onRequestServerVerification",f,g);if(_!==void 0)return _;if(X("requesting server verification from",i(y).verifyUrl),!i(y).verifyUrl)throw new Error("Parameter verifyUrl must be set for server verification.");const w=await i(y).fetch(mr(i(y).verifyUrl,i(Z)),{body:JSON.stringify({code:g,fields:i(y).serverVerificationFields?dl():void 0,payload:f,timeZone:i(y).serverVerificationTimeZone?vl():void 0}),credentials:i(y).credentials||void 0,headers:{"Content-Type":"application/json"},method:"POST"});await pi(w);const R=await w.json();return R&&typeof R=="object"&&"payload"in R&&R.payload&&L("serververification",R),R}function vi(f){var g;i(Y)&&"requestSubmit"in i(Y)?i(Y).requestSubmit(f):(g=i(Y))!=null&&g.reportValidity()&&(f?f.click():i(Y).submit())}function Sl(f,g={}){const{domain:_,name:w=i(y).name,maxAge:R,path:I,sameSite:D,secure:ke}=g;let ee=`${encodeURIComponent(w)}=${encodeURIComponent(f)}`;_&&(ee+=`; Domain=${_}`),R!=null&&(ee+=`; Max-Age=${R}`),I&&(ee+=`; Path=${I}`),D&&(ee+=`; SameSite=${D}`),ke&&(ee+="; Secure"),document.cookie=ee}function yr(f){switch(f){case"bar":case"floating":case"overlay":la(),(!i(Fe)||i(Fe)==="off")&&(i(J).auto="onsubmit");break;case"standard":sa()}i(it)!==f&&$(it,f,!0)}function Cl(f){i(Te)&&clearTimeout(i(Te));const g=()=>{i(T)!==G.UNVERIFIED?($(ie,!1),ze(G.EXPIRED)):je(),L("expired")},_=f*1e3-Date.now();_>=1?$(Te,setTimeout(g,_),!0):g()}async function pi(f){var _;if(f.status>=400){if((_=f.headers.get("content-type"))!=null&&_.includes("/json")){let w;try{w=await f.json()}catch(R){}if(w&&"error"in w)throw new Error(`Server responded with ${f.status} - ${w.error}`)}throw new Error(`Server responded with ${f.status}.`)}const g=f.headers.get("content-type");if(!g||!g.includes("/json"))throw new Error(`Server responded with invalid content-type. Expected application/json, received ${g}.`)}async function gi(f){var _;if(!i(oe)){ze(G.ERROR,"Cannot verify code challenge without PoW payload.");return}ze(G.VERIFYING);let g=null;if(i(y).verifyUrl)g=await El(i(oe),f);else if(i(y).verifyFunction)g=await i(y).verifyFunction(i(oe),f);else{ze(G.ERROR,"Parameter verifyUrl is required for code challenge verification.");return}g!=null&&g.payload&&($(oe,g.payload,!0),X("server payload",i(oe))),(g==null?void 0:g.verified)===!0?(X("verified"),ze(G.VERIFIED),L("verified",{payload:i(oe)}),i(Fe)==="onsubmit"&&qt().then(()=>{vi(i(ot))})):ze(G.ERROR,(g==null?void 0:g.reason)||"Verification failed."),i(y).disableAutoFocus||(_=oa())==null||_.focus()}function Un(f){Object.assign(i(J),{...Object.fromEntries(Object.entries(f).filter(([g,_])=>_!==void 0))})}function $l(){return{...i(y)}}function Tl(){return i(T)}function la(){$(_e,!1)}function X(...f){(i(y).debug||f.some(g=>g instanceof Error))&&console[f[0]instanceof Error?"error":"log"]("ALTCHA",`[name=${i(y).name}]`,...f)}function je(f=G.UNVERIFIED,g=null){$(ie,!1),$(Ee,g,!0),$(oe,null),i(we)&&i(we).abort(),i(Te)&&(clearTimeout(i(Te)),$(Te,null)),ze(f)}function ze(f,g=null){$(T,f,!0),$(Ee,g,!0),L("statechange",{payload:i(oe),state:i(T)})}function sa(){$(_e,!0),qt().then(()=>{wr()})}function wr(){switch(i(y).display){case"floating":return xl()}$(E,i(E)+1)}async function fn(f={}){var ve,ut;const{concurrency:g=Math.max(1,i(y).workers),controller:_=new AbortController,minDuration:w=i(y).minDuration}=f,R=performance.now();let I=null,D=null,ke=!1;const ee=await Nn("onVerify",f);if(ee!==void 0)return ee;je(G.VERIFYING),$(we,_,!0);try{if(!c)throw new Error("Secure context (HTTPS) required.");if(i(y).mockError)throw new Error("Mock error.");if(i(y).test)return X("running test mode with null challenge"),await st(Math.max(0,w-(performance.now()-R))),(ve=i(we))!=null&&ve.signal.aborted?(je(),null):($(oe,btoa(JSON.stringify({challenge:null,solution:null,test:!0})),!0),X("verified"),ze(G.VERIFIED),L("verified",{payload:i(oe)}),{payload:i(oe)});if(I=await ui(),!I)throw new Error("Failed to fetch challenge.");X("challenge",I),"configuration"in I&&(X("re-configuring from challenge",I.configuration),Un(I.configuration)),I.parameters.expiresAt&&Cl(I.parameters.expiresAt),ke="_version"in I&&I._version===1;const Je=globalThis.$altcha.algorithms.get(I.parameters.algorithm);if(!Je)throw new Error(`Unsupported algorithm ${I.parameters.algorithm}.`);if(D=await il({challenge:I,concurrency:g,controller:_,createWorker:Je,counterMode:ke?"string":"uint32",onOutOfMemory:xi=>{if(X("out of memory error received"),L("outofmemory"),i(y).retryOnOutOfMemoryError&&xi>1){const Ei=Math.floor(xi/2);return X(`retrying with ${Ei} workers...`),Ei}},timeout:i(y).timeout}),(ut=i(we))!=null&&ut.signal.aborted)return je(),null;if(!D)throw new Error("Failed to find solution.");X("solution",D),await st(Math.max(0,w-(performance.now()-R))),$(H,I.codeChallenge||i(y).codeChallenge||null,!0),ke?$(oe,btoa(JSON.stringify(Ae(I,D))),!0):$(oe,btoa(JSON.stringify({challenge:{parameters:I.parameters,signature:I.signature},solution:D})),!0),i(H)?(X("requesting code verification"),ze(G.CODE),L("codechallenge",{codeChallenge:i(H)})):i(y).verifyUrl?await gi():(X("verified"),ze(G.VERIFIED),L("verified",{payload:i(oe)}))}catch(Je){return X("verification failed",Je),ze(G.ERROR,String(Je)),null}finally{$(we,null)}return{challenge:I,payload:i(oe),solution:D}}var Al={configure:Un,getConfiguration:$l,getState:Tl,hide:la,log:X,reset:je,setState:ze,show:sa,updateUI:wr,verify:fn},bi=du();he("scroll",Ca,ml),he("click",Ca,yl),he("pageshow",rn,wl),he("resize",rn,_l);var mi=vn(bi);{var Rl=f=>{var g=au();B(f,g)};fe(mi,f=>{i(y).display==="overlay"&&i(_e)&&f(Rl)})}var ct=ne(mi,2),yi=le(ct);{var Il=f=>{var g=ou(),_=vn(g),w=ne(_,2);{var R=I=>{var D=iu();qo(D,()=>{var ke;return(ke=document.querySelector(i(y).overlayContent))==null?void 0:ke.innerHTML},!0),te(D),B(I,D)};fe(w,I=>{i(y).overlayContent&&I(R)})}he("click",_,bl,!0),B(f,g)};fe(yi,f=>{i(y).display==="overlay"&&i(_e)&&f(Il)})}var ca=ne(yi,2),ua=le(ca),fa=le(ua),wi=le(fa);{let f=Se(()=>i(y).display==="standard"&&i(Fe)!=="onsubmit"||i(T)===G.VERIFYING);gc(wi,()=>i(br),(g,_)=>{_(g,{get id(){return i(Ht)},name:"",get required(){return i(f)},get loading(){return i(na)},get checked(){return i(ie)},onchange:pl,oninvalid:gl})})}var ha=ne(wi,2),Ol=le(ha);{var Pl=f=>{var g=kr();xe(()=>vt(g,i(k).verificationRequired)),B(f,g)},Ll=f=>{var g=kr();xe(()=>vt(g,i(k).verifying)),B(f,g)},Ml=f=>{var g=kr();xe(()=>vt(g,i(k).verified)),B(f,g)},Dl=f=>{var g=kr();xe(()=>vt(g,i(k).label)),B(f,g)};fe(Ol,f=>{i(T)===G.CODE&&i(H)?f(Pl):i(T)===G.VERIFYING?f(Ll,1):i(T)===G.VERIFIED?f(Ml,2):f(Dl,-1)})}te(ha),te(fa);var Nl=ne(fa,2);{var Ul=f=>{li(f,{get strings(){return i(k)}})};fe(Nl,f=>{i(Ln)&&f(Ul)})}te(ua);var _i=ne(ua,2);{var Vl=f=>{{let g=Se(()=>i(y).display==="bar"&&i(Ln));Fa(f,{get logo(){return i(g)},get strings(){return i(k)}})}};fe(_i,f=>{i(Kt)&&f(Vl)})}var ki=ne(_i,2);{var Fl=f=>{var g=lu();jt(g,_=>$(z,_),()=>i(z)),B(f,g)};fe(ki,f=>{i(y).display==="floating"&&f(Fl)})}var jl=ne(ki,2);{var zl=f=>{var g=su();ii(g),xe(()=>{W(g,"name",i(y).name),Rc(g,i(oe))}),B(f,g)};fe(jl,f=>{i(y).setCookie||f(zl)})}te(ca);var Bl=ne(ca,2);{var Hl=f=>{ja(f,{get anchor(){return i(K)},onClickOutside:()=>{c&&je()},get placement(){return i(y).popoverPlacement},role:"alert",variant:"error",get dir(){return i(Dn)},get updateUISignal(){return i(E)},children:(g,_)=>{var w=Di(),R=vn(w);{var I=ee=>{var ve=cu();B(ee,ve)},D=ee=>{var ve=uu(),ut=le(ve,!0);te(ve),xe(()=>vt(ut,i(k).expired)),B(ee,ve)},ke=ee=>{var ve=fu(),ut=le(ve,!0);te(ve),xe(()=>{W(ve,"title",i(Ee)),vt(ut,i(k).error)}),B(ee,ve)};fe(R,ee=>{!i(Ee)&&!c?ee(I):!i(Ee)&&i(T)===G.EXPIRED?ee(D,1):ee(ke,-1)})}B(g,w)},$$slots:{default:!0}})},Kl=f=>{var g=Di(),_=vn(g);pc(_,()=>i(H),w=>{{let R=Se(()=>i(y).codeChallengeDisplay!=="standard");ja(w,{get anchor(){return i(K)},get backdrop(){return i(R)},get display(){return i(y).codeChallengeDisplay},onClose:()=>{je()},get placement(){return i(y).popoverPlacement},role:"dialog",get"aria-label"(){return i(k).verificationRequired},get dir(){return i(Dn)},get updateUISignal(){return i(E)},children:(I,D)=>{var ke=hu(),ee=vn(ke);al(ee,{get audioUrl(){return i(q)},get imageUrl(){return i(Yt)},onCancel:()=>je(),onReload:()=>fn(),onSubmit:Je=>gi(Je),get codeChallenge(){return i(H)},get config(){return i(y)},get strings(){return i(k)}});var ve=ne(ee,2);{var ut=Je=>{Fa(Je,{get logo(){return i(Ln)},get strings(){return i(k)}})};fe(ve,Je=>{i(Kt)&&i(y).codeChallengeDisplay!=="standard"&&Je(ut)})}B(I,ke)},$$slots:{default:!0}})}}),B(f,g)};fe(Bl,f=>{i(Ee)||i(T)===G.EXPIRED||!c?f(Hl):i(H)&&i(T)===G.CODE&&f(Kl,1)})}te(ct),jt(ct,f=>$(K,f),()=>i(K)),xe(f=>{W(ct,"data-state",i(T)),W(ct,"data-display",i(y).display||void 0),W(ct,"data-placement",f),W(ct,"data-visible",i(_e)||void 0),W(ct,"dir",i(Dn)),W(ha,"for",i(Ht)),ct.dir=ct.dir},[()=>hl(i(y).display)]),B(e,bi);var Yl=It(Al);return o(),Yl}typeof window<"u"&&window.customElements&&!customElements.get("altcha-widget")&&customElements.define("altcha-widget",Bt(vu,{auto:{type:"String"},challenge:{type:"String"},configuration:{type:"String"},display:{type:"String"},language:{type:"String"},name:{type:"String"},theme:{type:"String"},type:{type:"String"},workers:{type:"Number"}},[],["configure","getConfiguration","getState","hide","log","reset","setState","show","updateUI","verify"]));const ol=`(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  function getDigest(algorithm) {
    switch (algorithm) {
      case "PBKDF2/SHA-512":
        return "SHA-512";
      case "PBKDF2/SHA-384":
        return "SHA-384";
      case "PBKDF2/SHA-256":
      default:
        return "SHA-256";
    }
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, cost, keyLength = 32 } = parameters;
    const passwordKey = await crypto.subtle.importKey(
      "raw",
      password,
      { name: "PBKDF2" },
      false,
      ["deriveKey"]
    );
    const derivedKey = await crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: cost,
        hash: getDigest(algorithm)
      },
      passwordKey,
      { name: "AES-GCM", length: keyLength * 8 },
      true,
      ["encrypt"]
    );
    return {
      derivedKey: new Uint8Array(await crypto.subtle.exportKey("raw", derivedKey))
    };
  }
  handler({
    deriveKey
  });
})();
`,ji=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",ol],{type:"text/javascript;charset=utf-8"});function si(e){let t;try{if(t=ji&&(self.URL||self.webkitURL).createObjectURL(ji),!t)throw"";const n=new Worker(t,{name:e==null?void 0:e.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch(n){return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(ol),{name:e==null?void 0:e.name})}}const ll=`(function() {
  "use strict";
  function bufferStartsWith(buffer, prefix) {
    if (prefix.length > buffer.length) {
      return false;
    }
    for (let i = 0; i < prefix.length; i++) {
      if (buffer[i] !== prefix[i]) {
        return false;
      }
    }
    return true;
  }
  function bufferToHex(buffer) {
    return Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  function concatBuffers(a, b) {
    const out = new Uint8Array(a.length + b.length);
    out.set(a, 0);
    out.set(b, a.length);
    return out;
  }
  function hexToBuffer(hex) {
    if (hex.length % 2 !== 0) {
      throw new Error(\`Hex string must have an even length. Got: \${hex}\`);
    }
    const buffer = new ArrayBuffer(hex.length / 2);
    const view = new DataView(buffer);
    for (let i = 0; i < hex.length; i += 2) {
      const byteString = hex.substring(i, i + 2);
      const byteValue = parseInt(byteString, 16);
      view.setUint8(i / 2, byteValue);
    }
    return new Uint8Array(buffer);
  }
  async function delay(ms) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
  function timeDuration(start) {
    return Math.floor((performance.now() - start) * 10) / 10;
  }
  class PasswordBuffer {
    constructor(nonce, mode = "uint32") {
      this.nonce = nonce;
      this.mode = mode;
      this.buffer = new Uint8Array(this.nonce.length + this.COUNTER_BYTES);
      this.buffer.set(this.nonce, 0);
      this.dataView = new DataView(this.buffer.buffer);
    }
    COUNTER_BYTES = 4;
    buffer;
    dataView;
    encoder = new TextEncoder();
    /**
     * Appends the counter to the nonce buffer.
     * In 'string' mode, encodes the counter as a UTF-8 string.
     * In 'uint32' mode, writes the counter as a big-endian 32-bit integer.
     */
    setCounter(n) {
      if (this.mode === "string") {
        return concatBuffers(this.nonce, this.encoder.encode(n.toString()));
      }
      this.dataView.setUint32(this.nonce.length, n, false);
      return this.buffer;
    }
  }
  async function solveChallenge(options) {
    const {
      challenge,
      controller,
      counterMode = "uint32",
      counterStart = 0,
      counterStep = 1,
      deriveKey: deriveKey2,
      timeout = 9e4
    } = options;
    const { nonce, keyPrefix, salt } = challenge.parameters;
    const nonceBuf = hexToBuffer(nonce);
    const saltBuf = hexToBuffer(salt);
    const keyPrefixBuf = keyPrefix.length % 2 === 0 ? hexToBuffer(keyPrefix) : null;
    const password = new PasswordBuffer(nonceBuf, counterMode);
    const start = performance.now();
    let counter = counterStart;
    let iterations = 0;
    let derivedKeyHex = "";
    let lastYield = start;
    while (true) {
      if (controller?.signal.aborted || timeout && iterations % 10 === 0 && performance.now() - start > timeout) {
        return null;
      }
      const { derivedKey } = await deriveKey2(
        challenge.parameters,
        saltBuf,
        password.setCounter(counter)
      );
      if (iterations % 10 === 0 && performance.now() - lastYield > 200) {
        await delay(0);
        lastYield = performance.now();
      }
      if (keyPrefixBuf ? bufferStartsWith(derivedKey, keyPrefixBuf) : bufferToHex(derivedKey).startsWith(keyPrefix)) {
        derivedKeyHex = bufferToHex(derivedKey);
        break;
      }
      counter = counter + counterStep;
      iterations = iterations + 1;
    }
    return {
      counter,
      derivedKey: derivedKeyHex,
      time: timeDuration(start)
    };
  }
  function handler(options) {
    const { deriveKey: deriveKey2 } = options;
    let controller = void 0;
    self.onmessage = async (message) => {
      const { challenge, counterMode, counterStart, counterStep, timeout, type } = message.data;
      if (type === "abort") {
        controller?.abort();
      } else if (type === "work") {
        controller = new AbortController();
        let solution;
        try {
          solution = await solveChallenge({
            challenge,
            controller,
            counterStart,
            counterStep,
            deriveKey: deriveKey2,
            counterMode,
            timeout
          });
        } catch (err) {
          return self.postMessage({ error: err });
        }
        self.postMessage(solution);
      }
    };
  }
  async function deriveKey(parameters, salt, password) {
    const { algorithm, keyLength = 32 } = parameters;
    const iterations = Math.max(1, parameters.cost);
    let data = void 0;
    let derivedKey = void 0;
    for (let i = 0; i < iterations; i++) {
      if (i === 0) {
        data = concatBuffers(salt, password);
      } else {
        data = derivedKey;
      }
      derivedKey = new Uint8Array(
        (await crypto.subtle.digest(algorithm, data)).slice(0, keyLength)
      );
    }
    return {
      parameters: {},
      derivedKey
    };
  }
  handler({
    deriveKey
  });
})();
`,zi=typeof self<"u"&&self.Blob&&new Blob(["(self.URL || self.webkitURL).revokeObjectURL(self.location.href);",ll],{type:"text/javascript;charset=utf-8"});function ci(e){let t;try{if(t=zi&&(self.URL||self.webkitURL).createObjectURL(zi),!t)throw"";const n=new Worker(t,{name:e==null?void 0:e.name});return n.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),n}catch(n){return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(ll),{name:e==null?void 0:e.name})}}const pu=`:root {
  --altcha-border-color: var(--altcha-color-neutral);
  --altcha-border-width: 1px;
  --altcha-border-radius: 6px;
  --altcha-color-base: light-dark(oklch(100% 0.00011 271.152), oklch(20.904% 0.00002 271.152));
  --altcha-color-base-content: light-dark(
  	oklch(20.904% 0.00002 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-error: oklch(51.284% 0.20527 28.678);
  --altcha-color-error-content: oklch(100% 0.00011 271.152);
  --altcha-color-neutral: light-dark(oklch(83.591% 0.0001 271.152), oklch(46.04% 0.00005 271.152));
  --altcha-color-neutral-content: light-dark(
  	oklch(46.76% 0.00005 271.152),
  	oklch(100% 0.00011 271.152)
  );
  --altcha-color-primary: oklch(40.279% 0.2449 268.131);
  --altcha-color-primary-content: oklch(100% 0.00011 271.152);
  --altcha-color-success: oklch(55.748% 0.18968 142.511);
  --altcha-color-success-content: oklch(100% 0.00011 271.152);
  --altcha-checkbox-border-color: light-dark(
  	oklch(66.494% 0.00233 15.434),
  	oklch(51.028% 0.00006 271.152)
  );
  --altcha-checkbox-border-radius: 5px;
  --altcha-checkbox-border-width: var(--altcha-border-width);
  --altcha-checkbox-outline: 2px solid var(--altcha-checkbox-outline-color);
  --altcha-checkbox-outline-color: -webkit-focus-ring-color;
  --altcha-checkbox-outline-offset: 2px;
  --altcha-checkbox-size: 22px;
  --altcha-checkbox-transition-duration: var(--altcha-transition-duration);
  --altcha-input-background-color: var(--altcha-color-base);
  --altcha-input-border-radius: 3px;
  --altcha-input-border-width: 1px;
  --altcha-input-color: var(--altcha-color-base-content);
  --altcha-max-width: 320px;
  --altcha-padding: 0.75rem;
  --altcha-popover-arrow-size: 6px;
  --altcha-popover-color: var(--altcha-border-color);
  --altcha-shadow: drop-shadow(3px 3px 6px oklch(0% 0 0 / 0.2));
  --altcha-spinner-color: var(--altcha-color-base-content);
  --altcha-switch-background-color: var(--altcha-color-neutral);
  --altcha-switch-border-radius: calc(infinity * 1px);
  --altcha-switch-height: var(--altcha-checkbox-size);
  --altcha-switch-padding: 0.25rem;
  --altcha-switch-width: calc(var(--altcha-checkbox-size) * 1.75);
  --altcha-switch-toggle-border-radius: 100%;
  --altcha-switch-toggle-color: var(--altcha-color-neutral-content);
  --altcha-switch-toggle-size: calc(
  	var(--altcha-switch-height) - calc(var(--altcha-switch-padding) * 2)
  );
  --altcha-transition-duration: 0.6s;
  --altcha-z-index: 99999999;
  --altcha-z-index-popover: 999999999;
}

@supports (-moz-appearance: none) {
  :root {
    --altcha-checkbox-outline-color: var(--altcha-color-primary);
  }
}
.altcha {
  all: revert-layer;
  display: none;
  font-family: inherit;
  font-size: inherit;
  position: relative;
}
.altcha[data-visible] {
  display: block;
}
.altcha-popover, .altcha-popover * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha * {
  all: revert-layer;
  box-sizing: border-box;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
}
.altcha a, .altcha-popover a {
  color: currentColor;
  text-decoration: none;
}
.altcha a:hover, .altcha-popover a:hover {
  color: currentColor;
}
.altcha-main {
  align-items: start;
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width, 1px) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius, 0);
  color: var(--altcha-color-base-content);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  padding: var(--altcha-padding);
  max-width: var(--altcha-max-width, 100%);
}
.altcha-main > * {
  display: flex;
  width: 100%;
}
.altcha-main > *:first-child {
  flex-grow: 1;
}
.altcha-checkbox-wrap {
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  gap: 0.5rem;
}
.altcha-checkbox-wrap > * {
  display: flex;
}
.altcha-logo {
  opacity: 0.7;
}
.altcha-footer {
  align-items: center;
  display: flex;
  flex-grow: 1;
  gap: 0.5rem;
  justify-content: flex-end;
  font-size: 0.7rem;
  opacity: 0.7;
}
.altcha-footer p {
  margin: 0;
  padding: 0;
}
.altcha-error {
  font-size: 0.85rem;
}
.altcha-button {
  align-items: center;
  background: var(--altcha-color-primary);
  border: var(--altcha-input-border-width) solid var(--altcha-color-primary);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-color-primary-content);
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  gap: 0.5rem;
  padding: 0.35rem;
}
.altcha-button:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-button > .altcha-spinner, .altcha-button > svg {
  height: 20px;
  width: 20px;
}
.altcha-button-secondary {
  background: transparent;
  border-color: var(--altcha-color-neutral);
  color: var(--altcha-color-neutral-content);
}
.altcha-input {
  background: var(--altcha-input-background-color);
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  color: var(--altcha-input-color);
  flex-grow: 1;
  font-size: 1rem;
  min-width: 0;
  padding: 0.25rem;
  width: auto;
}
.altcha-input:focus {
  border-color: var(--altcha-color-primary);
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-spinner {
  animation: altcha-rotate 0.6s linear infinite;
  border-radius: 100%;
  border: var(--altcha-checkbox-border-width) solid var(--altcha-spinner-color);
  border-bottom-color: transparent;
  border-right-color: transparent;
  opacity: 0.7;
}
.altcha-popover {
  background-color: var(--altcha-color-base);
  border: var(--altcha-border-width) solid var(--altcha-border-color);
  border-radius: var(--altcha-border-radius);
  color: var(--altcha-color-base-content);
  filter: var(--altcha-shadow);
  position: absolute;
  left: calc(var(--altcha-padding) / 2);
  max-width: calc(var(--altcha-max-width) - var(--altcha-padding));
  top: calc(var(--altcha-padding) + var(--altcha-checkbox-size) + var(--altcha-popover-arrow-size));
  z-index: var(--altcha-z-index-popover);
}
.altcha-popover-arrow {
  border: var(--altcha-popover-arrow-size) solid transparent;
  border-bottom-color: var(--altcha-popover-color);
  content: "";
  height: 0;
  left: calc(var(--altcha-checkbox-size) / 2);
  position: absolute;
  top: calc(var(--altcha-popover-arrow-size) * -2);
  width: 0;
}
.altcha-popover-content {
  max-height: 100dvh;
  overflow: auto;
  padding: var(--altcha-padding);
}
.altcha-popover[data-top=true][data-display=standard] {
  bottom: calc(100% - (var(--altcha-padding) - var(--altcha-popover-arrow-size)));
  top: auto;
}
.altcha-popover[data-top=true][data-display=standard] .altcha-popover-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-popover-color);
  bottom: calc(var(--altcha-popover-arrow-size) * -2);
  top: auto;
}
.altcha-popover[data-variant=error] {
  --altcha-popover-color: var(--altcha-color-error);
  background-color: var(--altcha-color-error);
  border-color: var(--altcha-color-error);
  color: var(--altcha-color-error-content);
}
.altcha-popover[data-variant=error] .altcha-popover-content {
  padding: calc(var(--altcha-padding) / 1.5) var(--altcha-padding);
}
.altcha-popover[data-display=overlay] {
  animation: altcha-overlay-slidein 0.5s forwards;
  left: 50%;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] {
  animation: altcha-bottomsheet-slideup 0.5s forwards;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 0;
  bottom: -100%;
  left: 50%;
  position: fixed;
  top: auto;
  transform: translate(-50%, 0);
  width: var(--altcha-max-width);
  z-index: var(--altcha-z-index);
}
.altcha-popover[data-display=bottomsheet] .altcha-popover-content {
  padding-bottom: calc(var(--altcha-padding) * 2);
}
.altcha-popover-backdrop {
  background: var(--altcha-color-base-content);
  bottom: 0;
  left: 0;
  opacity: 0.1;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity 0.5s;
  z-index: var(--altcha-z-index);
}
.altcha-popover-close {
  color: var(--altcha-color-base-content);
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  height: 1.25rem;
  line-height: 0.95;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1.25rem;
  z-index: var(--altcha-z-index);
}
[dir=rtl] .altcha-popover {
  left: auto;
  right: calc(var(--altcha-padding) / 2);
}
[dir=rtl] .altcha-popover-arrow {
  left: auto;
  right: calc(var(--altcha-checkbox-size) / 2);
}
[dir=rtl] .altcha-popover-close {
  left: 0;
  right: auto;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer, .altcha-popover[data-display=overlay] .altcha-footer {
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  gap: 0.5rem;
}
.altcha-popover[data-display=bottomsheet] .altcha-footer svg, .altcha-popover[data-display=overlay] .altcha-footer svg {
  height: 18px;
  width: 18px;
  vertical-align: middle;
}
.altcha-code-challenge > form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.altcha-code-challenge-title {
  font-weight: 600;
}
.altcha-code-challenge-text {
  font-size: 0.85rem;
}
.altcha-code-challenge-image {
  background: white;
  border: var(--altcha-input-border-width) solid var(--altcha-color-neutral);
  border-radius: var(--altcha-input-border-radius);
  object-fit: contain;
  height: 50px;
}
.altcha-code-challenge-row {
  display: flex;
  gap: 0.5rem;
}
.altcha-code-challenge-buttons {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: var(--altcha-padding);
  justify-content: space-between;
}
.altcha-code-challenge-buttons button {
  justify-content: center;
  width: 100%;
}
.altcha-checkbox {
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input {
  appearance: none;
  background: var(--altcha-input-background-color);
  border: var(--altcha-checkbox-border-width, 2px) solid var(--altcha-checkbox-border-color);
  border-radius: var(--altcha-checkbox-border-radius);
  cursor: pointer;
  height: var(--altcha-checkbox-size);
  left: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox input:before {
  border-radius: var(--altcha-checkbox-border-radius);
  content: "";
  width: 100%;
  height: 100%;
  background: var(--altcha-color-neutral);
  display: block;
  transform: scale(0);
}
.altcha-checkbox input:checked {
  background-color: var(--altcha-color-success);
  border-color: var(--altcha-color-success);
}
.altcha-checkbox input:checked::before {
  background-color: var(--altcha-color-success);
  opacity: 0;
  transform: scale(2.2);
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox svg {
  --altcha-radio-svg-size: calc(var(--altcha-checkbox-size) * 0.5);
  --altcha-radio-svg-offset: calc(var(--altcha-checkbox-size) * 0.25);
  fill: none;
  left: var(--altcha-radio-svg-offset);
  height: var(--altcha-radio-svg-size);
  opacity: 0;
  position: absolute;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 16px;
  stroke-dashoffset: 16px;
  top: var(--altcha-radio-svg-offset);
  transform: translate3d(0, 0, 0);
  width: var(--altcha-radio-svg-size);
}
.altcha-checkbox input:checked + svg {
  color: var(--altcha-color-success-content);
  opacity: 1;
  stroke-dashoffset: 0;
  transition: all var(--altcha-checkbox-transition-duration) ease;
  transition-delay: 0.1s;
}
.altcha-checkbox-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox[data-loading=true] .altcha-checkbox-spinner {
  display: block;
}
.altcha-checkbox-native {
  height: var(--altcha-checkbox-size);
  position: relative;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native input {
  height: var(--altcha-checkbox-size);
  margin: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native-spinner {
  display: none;
  left: 0;
  height: var(--altcha-checkbox-size);
  position: absolute;
  top: 0;
  width: var(--altcha-checkbox-size);
}
.altcha-checkbox-native[data-loading=true] input {
  appearance: none;
  opacity: 0;
  pointer-events: none;
}
.altcha-checkbox-native[data-loading=true] .altcha-checkbox-native-spinner {
  display: block;
}
.altcha-switch {
  align-items: center;
  border-radius: var(--altcha-switch-border-radius);
  background-color: var(--altcha-switch-background-color);
  display: flex;
  height: var(--altcha-switch-height);
  padding: var(--altcha-switch-padding);
  position: relative;
  width: var(--altcha-switch-width);
}
.altcha-switch:focus-within {
  outline: var(--altcha-checkbox-outline);
  outline-offset: var(--altcha-checkbox-outline-offset);
}
.altcha-switch input {
  appearance: none;
  cursor: pointer;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
.altcha-switch-toggle {
  align-items: center;
  background-color: var(--altcha-switch-toggle-color);
  border-radius: var(--altcha-switch-toggle-border-radius);
  cursor: pointer;
  display: flex;
  height: var(--altcha-switch-toggle-size);
  justify-content: center;
  left: var(--altcha-switch-padding);
  position: absolute;
  transition: width 150ms ease-out, left 150ms ease-out;
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch-spinner {
  display: none;
  height: var(--altcha-switch-toggle-size);
  width: var(--altcha-switch-toggle-size);
}
.altcha-switch[data-loading=true] {
  pointer-events: none;
}
.altcha-switch[data-loading=true] .altcha-switch-spinner {
  display: block;
}
.altcha-switch[data-loading=true] .altcha-switch-toggle {
  background-color: transparent;
  left: calc(50% - var(--altcha-switch-toggle-size) / 2);
}
[data-state=verified] .altcha-switch {
  --altcha-switch-background-color: var(--altcha-color-success);
}
[data-state=verified] .altcha-switch-toggle {
  background-color: var(--altcha-color-success-content);
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl] .altcha-switch-toggle {
  left: calc(100% - var(--altcha-switch-height) + var(--altcha-switch-padding));
}
[dir=rtl][data-state=verified] .altcha-switch-toggle {
  left: var(--altcha-switch-padding);
}
.altcha-floating-arrow {
  border: 6px solid transparent;
  border-bottom-color: var(--altcha-border-color);
  content: "";
  height: 0;
  left: 12px;
  position: absolute;
  top: -12px;
  width: 0;
}
.altcha-overlay-backdrop {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha-overlay-close {
  display: inline-block;
  color: currentColor;
  cursor: pointer;
  font-size: 1rem;
  height: 1rem;
  line-height: 0.85;
  position: absolute;
  right: 0;
  text-align: center;
  text-shadow: 0 0 1px var(--altcha-color-base);
  top: -1.5rem;
  width: 1rem;
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] {
  animation: altcha-overlay-slidein var(--altcha-transition-duration) forwards;
  filter: var(--altcha-shadow);
  left: 50%;
  opacity: 0;
  position: fixed;
  top: 45%;
  transform: translate(-50%, -50%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=overlay] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating] {
  display: none;
  filter: var(--altcha-shadow);
  left: var(--altcha-floating-left, -100%);
  position: fixed;
  top: var(--altcha-floating-top, -100%);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=floating] .altcha-main {
  width: var(--altcha-max-width);
}
.altcha[data-display=floating][data-floating-position=top] .altcha-floating-arrow {
  border-bottom-color: transparent;
  border-top-color: var(--altcha-border-color);
  bottom: -12px;
  top: auto;
}
.altcha[data-display=floating][data-visible] {
  display: flex;
}
.altcha[data-display=bar] {
  bottom: -100%;
  filter: var(--altcha-shadow);
  left: 0;
  position: fixed;
  right: 0;
  transition: bottom var(--altcha-transition-duration), top var(--altcha-transition-duration);
  z-index: var(--altcha-z-index);
}
.altcha[data-display=bar] .altcha-main {
  align-items: center;
  border-radius: 0;
  border-width: var(--altcha-border-width) 0 0 0;
  flex-direction: row;
  max-width: 100% !important;
}
.altcha[data-display=bar] .altcha-main > * {
  width: auto;
}
.altcha[data-display=bar][data-placement=top] {
  bottom: auto;
  top: -100%;
}
.altcha[data-display=bar][data-placement=top] .altcha-main {
  border-width: 0 0 var(--altcha-border-width) 0;
}
.altcha[data-display=bar][data-placement=bottom]:not([data-state=unverified]) {
  bottom: 0;
}
.altcha[data-display=bar][data-placement=top]:not([data-state=unverified]) {
  top: 0;
}
.altcha[data-display=invisible] {
  display: none;
}

@keyframes altcha-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes altcha-bottomsheet-slideup {
  100% {
    bottom: 0;
  }
}
@keyframes altcha-overlay-slidein {
  100% {
    opacity: 1;
    top: 50%;
  }
}`;nu(pu);$altcha.algorithms.set("SHA-256",()=>new ci);$altcha.algorithms.set("SHA-384",()=>new ci);$altcha.algorithms.set("SHA-512",()=>new ci);$altcha.algorithms.set("PBKDF2/SHA-256",()=>new si);$altcha.algorithms.set("PBKDF2/SHA-384",()=>new si);$altcha.algorithms.set("PBKDF2/SHA-512",()=>new si);
