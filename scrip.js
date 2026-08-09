var h="2.0.0";const i={Awesomium:"awesomium",Cef:"cef",CefSharp:"cefsharp",CoachJS:"coachjs",Electron:"electron",FMiner:"fminer",Geb:"geb",NightmareJS:"nightmarejs",Phantomas:"phantomas",PhantomJS:"phantomjs",Rhino:"rhino",Selenium:"selenium",Sequentum:"sequentum",SlimerJS:"slimerjs",WebDriverIO:"webdriverio",WebDriver:"webdriver",HeadlessChrome:"headless_chrome",Unknown:"unknown"};class o extends Error{constructor(n,t){super(t),this.state=n,this.name="BotdError",Object.setPrototypeOf(this,o.prototype)}}function v(e,n){const t={};let r={bot:!1};for(const a in n){const s=n[a],f=s(e);let c={bot:!1};typeof f=="string"?c={bot:!0,botKind:f}:f&&(c={bot:!0,botKind:i.Unknown}),t[a]=c,c.bot&&(r=c)}return[t,r]}async function p(e){const n={},t=Object.keys(e);return await Promise.all(t.map(async r=>{const a=e[r];try{n[r]={value:await a(),state:0}}catch(s){s instanceof o?n[r]={state:s.state,error:`${s.name}: ${s.message}`}:n[r]={state:-3,error:s instanceof Error?`${s.name}: ${s.message}`:String(s)}}})),n}function _({appVersion:e}){if(e.state!==0)return!1;if(/headless/i.test(e.value))return i.HeadlessChrome;if(/electron/i.test(e.value))return i.Electron;if(/slimerjs/i.test(e.value))return i.SlimerJS}function l(e,n){return e.indexOf(n)!==-1}function u(e,n){return e.indexOf(n)!==-1}function b(e,n){if("find"in e)return e.find(n);for(let t=0;t<e.length;t++)if(n(e[t],t,e))return e[t]}function g(e){return Object.getOwnPropertyNames(e)}function m(e,...n){for(const t of n)if(typeof t=="string"){if(l(e,t))return!0}else if(b(e,a=>t.test(a))!=null)return!0;return!1}function d(e){return e.reduce((n,t)=>n+(t?1:0),0)}function y({documentElementKeys:e}){if(e.state!==0)return!1;if(m(e.value,"selenium","webdriver","driver"))return i.Selenium}function S({errorTrace:e}){if(e.state!==0)return!1;if(/PhantomJS/i.test(e.value))return i.PhantomJS}function P({evalLength:e,browserKind:n,browserEngineKind:t}){if(e.state!==0||n.state!==0||t.state!==0)return;const r=e.value;return t.value==="unknown"?!1:r===37&&!l(["webkit","gecko"],t.value)||r===39&&!l(["internet_explorer"],n.value)||r===33&&!l(["chromium"],t.value)}function C({functionBind:e}){if(e.state===-2)return i.PhantomJS}function E({languages:e}){if(e.state===0&&e.value.length===0)return i.HeadlessChrome}function A({mimeTypesConsistent:e}){if(e.state===0&&!e.value)return i.Unknown}function x({notificationPermissions:e,browserKind:n}){if(n.state!==0||n.value!=="chrome")return!1;if(e.state===0&&e.value)return i.HeadlessChrome}function k({pluginsArray:e}){if(e.state===0&&!e.value)return i.HeadlessChrome}function W({pluginsLength:e,android:n,browserKind:t,browserEngineKind:r}){if(!(e.state!==0||n.state!==0||t.state!==0||r.state!==0)&&!(t.value!=="chrome"||n.value||r.value!=="chromium")&&e.value===0)return i.HeadlessChrome}function D({process:e}){var n;if(e.state!==0)return!1;if(e.value.type==="renderer"||((n=e.value.versions)===null||n===void 0?void 0:n.electron)!=null)return i.Electron}function L({productSub:e,browserKind:n}){if(e.state!==0||n.state!==0)return!1;if((n.value==="chrome"||n.value==="safari"||n.value==="opera"||n.value==="wechat")&&e.value!=="20030107")return i.Unknown}function R({userAgent:e}){if(e.state!==0)return!1;if(/PhantomJS/i.test(e.value))return i.PhantomJS;if(/Headless/i.test(e.value))return i.HeadlessChrome;if(/Electron/i.test(e.value))return i.Electron;if(/slimerjs/i.test(e.value))return i.SlimerJS}function H({webDriver:e}){if(e.state===0&&e.value)return i.HeadlessChrome}function j({webGL:e}){if(e.state===0){const{vendor:n,renderer:t}=e.value;if(n=="Brian Paul"&&t=="Mesa OffScreen")return i.HeadlessChrome}}function O({windowExternal:e}){if(e.state!==0)return!1;if(/Sequentum/i.test(e.value))return i.Sequentum}function M({windowSize:e,documentFocus:n}){if(e.state!==0||n.state!==0)return!1;const{outerWidth:t,outerHeight:r}=e.value;if(n.value&&t===0&&r===0)return i.HeadlessChrome}function I({distinctiveProps:e}){if(e.state!==0)return!1;const n=e.value;let t;for(t in n)if(n[t])return t}const T={detectAppVersion:_,detectDocumentAttributes:y,detectErrorTrace:S,detectEvalLengthInconsistency:P,detectFunctionBind:C,detectLanguagesLengthInconsistency:E,detectNotificationPermissions:x,detectPluginsArray:k,detectPluginsLengthInconsistency:W,detectProcess:D,detectUserAgent:R,detectWebDriver:H,detectWebGL:j,detectWindowExternal:O,detectWindowSize:M,detectMimeTypesConsistent:A,detectProductSub:L,detectDistinctiveProperties:I};function N(){const e=navigator.appVersion;if(e==null)throw new o(-1,"navigator.appVersion is undefined");return e}function F(){if(document.documentElement===void 0)throw new o(-1,"document.documentElement is undefined");const{documentElement:e}=document;if(typeof e.getAttributeNames!="function")throw new o(-2,"document.documentElement.getAttributeNames is not a function");return e.getAttributeNames()}function J(){try{null[0]()}catch(e){if(e instanceof Error&&e.stack!=null)return e.stack.toString()}throw new o(-3,"errorTrace signal unexpected behaviour")}function B(){return eval.toString().length}function $(){if(Function.prototype.bind===void 0)throw new o(-2,"Function.prototype.bind is undefined");return Function.prototype.bind.toString()}function w(){var e,n;const t=window,r=navigator;return d(["webkitPersistentStorage"in r,"webkitTemporaryStorage"in r,r.vendor.indexOf("Google")===0,"webkitResolveLocalFileSystemURL"in t,"BatteryManager"in t,"webkitMediaStream"in t,"webkitSpeechGrammar"in t])>=5?"chromium":d(["ApplePayError"in t,"CSSPrimitiveValue"in t,"Counter"in t,r.vendor.indexOf("Apple")===0,"getStorageUpdates"in r,"WebKitMediaKeys"in t])>=4?"webkit":d(["buildID"in navigator,"MozAppearance"in((n=(e=document.documentElement)===null||e===void 0?void 0:e.style)!==null&&n!==void 0?n:{}),"onmozfullscreenchange"in t,"mozInnerScreenX"in t,"CSSMozDocumentRule"in t,"CanvasCaptureMediaStream"in t])>=4?"gecko":"unknown"}function G(){var e;const n=(e=navigator.userAgent)===null||e===void 0?void 0:e.toLowerCase();return u(n,"edg/")?"edge":u(n,"trident")||u(n,"msie")?"internet_explorer":u(n,"wechat")?"wechat":u(n,"firefox")?"firefox":u(n,"opera")||u(n,"opr")?"opera":u(n,"chrome")?"chrome":u(n,"safari")?"safari":"unknown"}function q(){const e=w(),n=e==="chromium",t=e==="gecko",r=window,a=navigator,s="connection";return n?d([!("SharedWorker"in r),a[s]&&"ontypechange"in a[s],!("sinkId"in new Audio)])>=2:t?d(["onorientationchange"in r,"orientation"in r,/android/i.test(a.appVersion)])>=2:!1}function U(){return document.hasFocus===void 0?!1:document.hasFocus()}function z(){const e=window;return d([!("MediaSettingsRange"in e),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3}function V(){const e=navigator,n=[],t=e.language||e.userLanguage||e.browserLanguage||e.systemLanguage;if(t!==void 0&&n.push([t]),Array.isArray(e.languages))w()==="chromium"&&z()||n.push(e.languages);else if(typeof e.languages=="string"){const r=e.languages;r&&n.push(r.split(","))}return n}function X(){if(navigator.mimeTypes===void 0)throw new o(-1,"navigator.mimeTypes is undefined");const{mimeTypes:e}=navigator;let n=Object.getPrototypeOf(e)===MimeTypeArray.prototype;for(let t=0;t<e.length;t++)n&&(n=Object.getPrototypeOf(e[t])===MimeType.prototype);return n}async function Z(){if(window.Notification===void 0)throw new o(-1,"window.Notification is undefined");if(navigator.permissions===void 0)throw new o(-1,"navigator.permissions is undefined");const{permissions:e}=navigator;if(typeof e.query!="function")throw new o(-2,"navigator.permissions.query is not a function");try{const n=await e.query({name:"notifications"});return window.Notification.permission==="denied"&&n.state==="prompt"}catch(n){throw new o(-3,"notificationPermissions signal unexpected behaviour")}}function Q(){if(navigator.plugins===void 0)throw new o(-1,"navigator.plugins is undefined");if(window.PluginArray===void 0)throw new o(-1,"window.PluginArray is undefined");return navigator.plugins instanceof PluginArray}function Y(){if(navigator.plugins===void 0)throw new o(-1,"navigator.plugins is undefined");if(navigator.plugins.length===void 0)throw new o(-3,"navigator.plugins.length is undefined");return navigator.plugins.length}function K(){const{process:e}=window,n="window.process is";if(e===void 0)throw new o(-1,`${n} undefined`);if(e&&typeof e!="object")throw new o(-3,`${n} not an object`);return e}function ee(){const{productSub:e}=navigator;if(e===void 0)throw new o(-1,"navigator.productSub is undefined");return e}function ne(){if(navigator.connection===void 0)throw new o(-1,"navigator.connection is undefined");if(navigator.connection.rtt===void 0)throw new o(-1,"navigator.connection.rtt is undefined");return navigator.connection.rtt}function te(){return navigator.userAgent}function ie(){if(navigator.webdriver==null)throw new o(-1,"navigator.webdriver is undefined");return navigator.webdriver}function re(){const e=document.createElement("canvas");if(typeof e.getContext!="function")throw new o(-2,"HTMLCanvasElement.getContext is not a function");const n=e.getContext("webgl");if(n===null)throw new o(-4,"WebGLRenderingContext is null");if(typeof n.getParameter!="function")throw new o(-2,"WebGLRenderingContext.getParameter is not a function");const t=n.getParameter(n.VENDOR),r=n.getParameter(n.RENDERER);return{vendor:t,renderer:r}}function oe(){if(window.external===void 0)throw new o(-1,"window.external is undefined");const{external:e}=window;if(typeof e.toString!="function")throw new o(-2,"window.external.toString is not a function");return e.toString()}function se(){return{outerWidth:window.outerWidth,outerHeight:window.outerHeight,innerWidth:window.innerWidth,innerHeight:window.innerHeight}}function ae(){const e={[i.Awesomium]:{window:["awesomium"]},[i.Cef]:{window:["RunPerfTest"]},[i.CefSharp]:{window:["CefSharp"]},[i.CoachJS]:{window:["emit"]},[i.FMiner]:{window:["fmget_targets"]},[i.Geb]:{window:["geb"]},[i.NightmareJS]:{window:["__nightmare","nightmare"]},[i.Phantomas]:{window:["__phantomas"]},[i.PhantomJS]:{window:["callPhantom","_phantom"]},[i.Rhino]:{window:["spawn"]},[i.Selenium]:{window:["_Selenium_IDE_Recorder","_selenium","calledSelenium",/^([a-z]){3}_.*_(Array|Promise|Symbol)$/],document:["__selenium_evaluate","selenium-evaluate","__selenium_unwrapped"]},[i.WebDriverIO]:{window:["wdioElectron"]},[i.WebDriver]:{window:["webdriver","__webdriverFunc","__lastWatirAlert","__lastWatirConfirm","__lastWatirPrompt","_WEBDRIVER_ELEM_CACHE","ChromeDriverw"],document:["__webdriver_script_fn","__driver_evaluate","__webdriver_evaluate","__fxdriver_evaluate","__driver_unwrapped","__webdriver_unwrapped","__fxdriver_unwrapped","__webdriver_script_fn","__webdriver_script_func","__webdriver_script_function","$cdc_asdjflasutopfhvcZLmcf","$cdc_asdjflasutopfhvcZLmcfl_","$chrome_asyncScriptInfo","__$webdriverAsyncExecutor"]},[i.HeadlessChrome]:{window:["domAutomation","domAutomationController"]}};let n;const t={},r=g(window);let a=[];window.document!==void 0&&(a=g(window.document));for(n in e){const s=e[n];if(s!==void 0){const f=s.window===void 0?!1:m(r,...s.window),c=s.document===void 0||!a.length?!1:m(a,...s.document);t[n]=f||c}}return t}const ue={android:q,browserKind:G,browserEngineKind:w,documentFocus:U,userAgent:te,appVersion:N,rtt:ne,windowSize:se,pluginsLength:Y,pluginsArray:Q,errorTrace:J,productSub:ee,windowExternal:oe,mimeTypesConsistent:X,evalLength:B,webGL:re,webDriver:ie,languages:V,notificationPermissions:Z,documentElementKeys:F,functionBind:$,process:K,distinctiveProps:ae};class ce{constructor(){this.components=void 0,this.detections=void 0}getComponents(){return this.components}getDetections(){return this.detections}detect(){if(this.components===void 0)throw new Error("BotDetector.detect can't be called before BotDetector.collect");const[n,t]=v(this.components,T);return this.detections=n,t}async collect(){return this.components=await p(ue),this.components}}function de(){if(!(window.__fpjs_d_m||Math.random()>=.001))try{const e=new XMLHttpRequest;e.open("get",`https://m1.openfpcdn.io/botd/v${h}/npm-monitoring`,!0),e.send()}catch(e){console.error(e)}}async function fe({monitoring:e=!0}={}){e&&de();const n=new ce;return await n.collect(),n}export{fe as l};import{_ as M,a as Te,b as R,c as we}from"./tslib@2.8.1.a36276c9.js";var Se="4.6.2";function O(e,n){return new Promise(function(t){return setTimeout(t,e,n)})}function Ee(){return new Promise(function(e){var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(null)})}function Ye(e,n){n===void 0&&(n=1/0);var t=window.requestIdleCallback;return t?new Promise(function(r){return t.call(window,function(){return r()},{timeout:n})}):O(Math.min(e,n))}function Le(e){return!!e&&typeof e.then=="function"}function ce(e,n){try{var t=e();Le(t)?t.then(function(r){return n(!0,r)},function(r){return n(!1,r)}):n(!0,t)}catch(r){n(!1,r)}}function ue(e,n,t){return t===void 0&&(t=16),M(this,void 0,void 0,function(){var r,i,u,a;return R(this,function(s){switch(s.label){case 0:r=Array(e.length),i=Date.now(),u=0,s.label=1;case 1:return u<e.length?(r[u]=n(e[u],u),a=Date.now(),a>=i+t?(i=a,[4,Ee()]):[3,3]):[3,4];case 2:s.sent(),s.label=3;case 3:return++u,[3,1];case 4:return[2,r]}})})}function N(e){return e.then(void 0,function(){}),e}function Xe(e,n){for(var t=0,r=e.length;t<r;++t)if(e[t]===n)return!0;return!1}function Ne(e,n){return!Xe(e,n)}function ee(e){return parseInt(e)}function F(e){return parseFloat(e)}function P(e,n){return typeof e=="number"&&isNaN(e)?n:e}function x(e){return e.reduce(function(n,t){return n+(t?1:0)},0)}function ke(e,n){if(n===void 0&&(n=1),Math.abs(n)>=1)return Math.round(e/n)*n;var t=1/n;return Math.round(e*t)/t}function je(e){for(var n,t,r="Unexpected syntax '".concat(e,"'"),i=/^\s*([a-z-]*)(.*)$/i.exec(e),u=i[1]||void 0,a={},s=/([.:#][\w-]+|\[.+?\])/gi,c=function(d,v){a[d]=a[d]||[],a[d].push(v)};;){var f=s.exec(i[2]);if(!f)break;var l=f[0];switch(l[0]){case".":c("class",l.slice(1));break;case"#":c("id",l.slice(1));break;case"[":{var o=/^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);if(o)c(o[1],(t=(n=o[4])!==null&&n!==void 0?n:o[5])!==null&&t!==void 0?t:"");else throw new Error(r);break}default:throw new Error(r)}}return[u,a]}function He(e){for(var n=new Uint8Array(e.length),t=0;t<e.length;t++){var r=e.charCodeAt(t);if(r>127)return new TextEncoder().encode(e);n[t]=r}return n}function G(e,n){var t=e[0]>>>16,r=e[0]&65535,i=e[1]>>>16,u=e[1]&65535,a=n[0]>>>16,s=n[0]&65535,c=n[1]>>>16,f=n[1]&65535,l=0,o=0,d=0,v=0;v+=u+f,d+=v>>>16,v&=65535,d+=i+c,o+=d>>>16,d&=65535,o+=r+s,l+=o>>>16,o&=65535,l+=t+a,l&=65535,e[0]=l<<16|o,e[1]=d<<16|v}function C(e,n){var t=e[0]>>>16,r=e[0]&65535,i=e[1]>>>16,u=e[1]&65535,a=n[0]>>>16,s=n[0]&65535,c=n[1]>>>16,f=n[1]&65535,l=0,o=0,d=0,v=0;v+=u*f,d+=v>>>16,v&=65535,d+=i*f,o+=d>>>16,d&=65535,d+=u*c,o+=d>>>16,d&=65535,o+=r*f,l+=o>>>16,o&=65535,o+=i*c,l+=o>>>16,o&=65535,o+=u*s,l+=o>>>16,o&=65535,l+=t*f+r*c+i*s+u*a,l&=65535,e[0]=l<<16|o,e[1]=d<<16|v}function E(e,n){var t=e[0];n%=64,n===32?(e[0]=e[1],e[1]=t):n<32?(e[0]=t<<n|e[1]>>>32-n,e[1]=e[1]<<n|t>>>32-n):(n-=32,e[0]=e[1]<<n|t>>>32-n,e[1]=t<<n|e[1]>>>32-n)}function V(e,n){n%=64,n!==0&&(n<32?(e[0]=e[1]>>>32-n,e[1]=e[1]<<n):(e[0]=e[1]<<n-32,e[1]=0))}function g(e,n){e[0]^=n[0],e[1]^=n[1]}var De=[4283543511,3981806797],ze=[3301882366,444984403];function se(e){var n=[0,e[0]>>>1];g(e,n),C(e,De),n[1]=e[0]>>>1,g(e,n),C(e,ze),n[1]=e[0]>>>1,g(e,n)}var z=[2277735313,289559509],B=[1291169091,658871167],le=[0,5],Be=[0,1390208809],Je=[0,944331445];function Oe(e,n){var t=He(e);n=n||0;var r=[0,t.length],i=r[1]%16,u=r[1]-i,a=[0,n],s=[0,n],c=[0,0],f=[0,0],l;for(l=0;l<u;l=l+16)c[0]=t[l+4]|t[l+5]<<8|t[l+6]<<16|t[l+7]<<24,c[1]=t[l]|t[l+1]<<8|t[l+2]<<16|t[l+3]<<24,f[0]=t[l+12]|t[l+13]<<8|t[l+14]<<16|t[l+15]<<24,f[1]=t[l+8]|t[l+9]<<8|t[l+10]<<16|t[l+11]<<24,C(c,z),E(c,31),C(c,B),g(a,c),E(a,27),G(a,s),C(a,le),G(a,Be),C(f,B),E(f,33),C(f,z),g(s,f),E(s,31),G(s,a),C(s,le),G(s,Je);c[0]=0,c[1]=0,f[0]=0,f[1]=0;var o=[0,0];switch(i){case 15:o[1]=t[l+14],V(o,48),g(f,o);case 14:o[1]=t[l+13],V(o,40),g(f,o);case 13:o[1]=t[l+12],V(o,32),g(f,o);case 12:o[1]=t[l+11],V(o,24),g(f,o);case 11:o[1]=t[l+10],V(o,16),g(f,o);case 10:o[1]=t[l+9],V(o,8),g(f,o);case 9:o[1]=t[l+8],g(f,o),C(f,B),E(f,33),C(f,z),g(s,f);case 8:o[1]=t[l+7],V(o,56),g(c,o);case 7:o[1]=t[l+6],V(o,48),g(c,o);case 6:o[1]=t[l+5],V(o,40),g(c,o);case 5:o[1]=t[l+4],V(o,32),g(c,o);case 4:o[1]=t[l+3],V(o,24),g(c,o);case 3:o[1]=t[l+2],V(o,16),g(c,o);case 2:o[1]=t[l+1],V(o,8),g(c,o);case 1:o[1]=t[l],g(c,o),C(c,z),E(c,31),C(c,B),g(a,c)}return g(a,r),g(s,r),G(a,s),G(s,a),se(a),se(s),G(a,s),G(s,a),("00000000"+(a[0]>>>0).toString(16)).slice(-8)+("00000000"+(a[1]>>>0).toString(16)).slice(-8)+("00000000"+(s[0]>>>0).toString(16)).slice(-8)+("00000000"+(s[1]>>>0).toString(16)).slice(-8)}function Ue(e){var n;return Te({name:e.name,message:e.message,stack:(n=e.stack)===null||n===void 0?void 0:n.split(`
`)},e)}function Qe(e){return/^function\s.*?\{\s*\[native code]\s*}$/.test(String(e))}function _e(e){return typeof e!="function"}function Ke(e,n){var t=N(new Promise(function(r){var i=Date.now();ce(e.bind(null,n),function(){for(var u=[],a=0;a<arguments.length;a++)u[a]=arguments[a];var s=Date.now()-i;if(!u[0])return r(function(){return{error:u[1],duration:s}});var c=u[1];if(_e(c))return r(function(){return{value:c,duration:s}});r(function(){return new Promise(function(f){var l=Date.now();ce(c,function(){for(var o=[],d=0;d<arguments.length;d++)o[d]=arguments[d];var v=s+Date.now()-l;if(!o[0])return f({error:o[1],duration:v});f({value:o[1],duration:v})})})})})}));return function(){return t.then(function(i){return i()})}}function $e(e,n,t,r){var i=Object.keys(e).filter(function(a){return Ne(t,a)}),u=N(ue(i,function(a){return Ke(e[a],n)},r));return function(){return M(this,void 0,void 0,function(){var s,c,f,l,o;return R(this,function(d){switch(d.label){case 0:return[4,u];case 1:return s=d.sent(),[4,ue(s,function(v){return N(v())},r)];case 2:return c=d.sent(),[4,Promise.all(c)];case 3:for(f=d.sent(),l={},o=0;o<i.length;++o)l[i[o]]=f[o];return[2,l]}})})}}function xe(){var e=window,n=navigator;return x(["MSCSSMatrix"in e,"msSetImmediate"in e,"msIndexedDB"in e,"msMaxTouchPoints"in n,"msPointerEnabled"in n])>=4}function qe(){var e=window,n=navigator;return x(["msWriteProfilerMark"in e,"MSStream"in e,"msLaunchUri"in n,"msSaveBlob"in n])>=3&&!xe()}function j(){var e=window,n=navigator;return x(["webkitPersistentStorage"in n,"webkitTemporaryStorage"in n,(n.vendor||"").indexOf("Google")===0,"webkitResolveLocalFileSystemURL"in e,"BatteryManager"in e,"webkitMediaStream"in e,"webkitSpeechGrammar"in e])>=5}function W(){var e=window,n=navigator;return x(["ApplePayError"in e,"CSSPrimitiveValue"in e,"Counter"in e,n.vendor.indexOf("Apple")===0,"RGBColor"in e,"WebKitMediaKeys"in e])>=4}function ne(){var e=window,n=e.HTMLElement,t=e.Document;return x(["safari"in e,!("ongestureend"in e),!("TouchEvent"in e),!("orientation"in e),n&&!("autocapitalize"in n.prototype),t&&"pointerLockElement"in t.prototype])>=4}function H(){var e=window;return Qe(e.print)&&String(e.browser)==="[object WebPageNamespace]"}function Ve(){var e,n,t=window;return x(["buildID"in navigator,"MozAppearance"in((n=(e=document.documentElement)===null||e===void 0?void 0:e.style)!==null&&n!==void 0?n:{}),"onmozfullscreenchange"in t,"mozInnerScreenX"in t,"CSSMozDocumentRule"in t,"CanvasCaptureMediaStream"in t])>=4}function en(){var e=window;return x([!("MediaSettingsRange"in e),"RTCEncodedAudioFrame"in e,""+e.Intl=="[object Intl]",""+e.Reflect=="[object Reflect]"])>=3}function nn(){var e=window,n=e.URLPattern;return x(["union"in Set.prototype,"Iterator"in e,n&&"hasRegExpGroups"in n.prototype,"RGB8"in WebGLRenderingContext.prototype])>=3}function tn(){var e=window;return x(["DOMRectList"in e,"RTCPeerConnectionIceEvent"in e,"SVGGeometryElement"in e,"ontransitioncancel"in e])>=3}function D(){var e=window,n=navigator,t=e.CSS,r=e.HTMLButtonElement;return x([!("getStorageUpdates"in n),r&&"popover"in r.prototype,"CSSCounterStyleRule"in e,t.supports("font-size-adjust: ex-height 0.5"),t.supports("text-transform: full-width")])>=4}function rn(){if(navigator.platform==="iPad")return!0;var e=screen,n=e.width/e.height;return x(["MediaSource"in window,!!Element.prototype.webkitRequestFullscreen,n>.65&&n<1.53])>=2}function an(){var e=document;return e.fullscreenElement||e.msFullscreenElement||e.mozFullScreenElement||e.webkitFullscreenElement||null}function on(){var e=document;return(e.exitFullscreen||e.msExitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen).call(e)}function te(){var e=j(),n=Ve(),t=window,r=navigator,i="connection";return e?x([!("SharedWorker"in t),r[i]&&"ontypechange"in r[i],!("sinkId"in new Audio)])>=2:n?x(["onorientationchange"in t,"orientation"in t,/android/i.test(r.appVersion)])>=2:!1}function cn(){var e=navigator,n=window,t=Audio.prototype,r=n.visualViewport;return x(["srLatency"in t,"srChannelCount"in t,"devicePosture"in e,r&&"segments"in r,"getTextInformation"in Image.prototype])>=3}function un(){return fn()?-4:sn()}function sn(){var e=window,n=e.OfflineAudioContext||e.webkitOfflineAudioContext;if(!n)return-2;if(ln())return-1;var t=4500,r=5e3,i=new n(1,r,44100),u=i.createOscillator();u.type="triangle",u.frequency.value=1e4;var a=i.createDynamicsCompressor();a.threshold.value=-50,a.knee.value=40,a.ratio.value=12,a.attack.value=0,a.release.value=.25,u.connect(a),a.connect(i.destination),u.start(0);var s=dn(i),c=s[0],f=s[1],l=N(c.then(function(o){return vn(o.getChannelData(0).subarray(t))},function(o){if(o.name==="timeout"||o.name==="suspended")return-3;throw o}));return function(){return f(),l}}function ln(){return W()&&!ne()&&!tn()}function fn(){return W()&&D()&&H()||j()&&cn()&&nn()}function dn(e){var n=3,t=500,r=500,i=5e3,u=function(){},a=new Promise(function(s,c){var f=!1,l=0,o=0;e.oncomplete=function(b){return s(b.renderedBuffer)};var d=function(){setTimeout(function(){return c(fe("timeout"))},Math.min(r,o+i-Date.now()))},v=function(){try{var b=e.startRendering();switch(Le(b)&&N(b),e.state){case"running":o=Date.now(),f&&d();break;case"suspended":document.hidden||l++,f&&l>=n?c(fe("suspended")):setTimeout(v,t);break}}catch(y){c(y)}};v(),u=function(){f||(f=!0,o>0&&d())}});return[a,u]}function vn(e){for(var n=0,t=0;t<e.length;++t)n+=Math.abs(e[t]);return n}function fe(e){var n=new Error(e);return n.name=e,n}function Ce(e,n,t){var r,i,u;return t===void 0&&(t=50),M(this,void 0,void 0,function(){var a,s;return R(this,function(c){switch(c.label){case 0:a=document,c.label=1;case 1:return a.body?[3,3]:[4,O(t)];case 2:return c.sent(),[3,1];case 3:s=a.createElement("iframe"),c.label=4;case 4:return c.trys.push([4,,10,11]),[4,new Promise(function(f,l){var o=!1,d=function(){o=!0,f()},v=function(S){o=!0,l(S)};s.onload=d,s.onerror=v;var b=s.style;b.setProperty("display","block","important"),b.position="absolute",b.top="0",b.left="0",b.visibility="hidden",n&&"srcdoc"in s?s.srcdoc=n:s.src="about:blank",a.body.appendChild(s);var y=function(){var S,h;o||(((h=(S=s.contentWindow)===null||S===void 0?void 0:S.document)===null||h===void 0?void 0:h.readyState)==="complete"?d():setTimeout(y,10))};y()})];case 5:c.sent(),c.label=6;case 6:return!((i=(r=s.contentWindow)===null||r===void 0?void 0:r.document)===null||i===void 0)&&i.body?[3,8]:[4,O(t)];case 7:return c.sent(),[3,6];case 8:return[4,e(s,s.contentWindow)];case 9:return[2,c.sent()];case 10:return(u=s.parentNode)===null||u===void 0||u.removeChild(s),[7];case 11:return[2]}})})}function mn(e){for(var n=je(e),t=n[0],r=n[1],i=document.createElement(t!=null?t:"div"),u=0,a=Object.keys(r);u<a.length;u++){var s=a[u],c=r[s].join(" ");s==="style"?hn(i.style,c):i.setAttribute(s,c)}return i}function hn(e,n){for(var t=0,r=n.split(";");t<r.length;t++){var i=r[t],u=/^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);if(u){var a=u[1],s=u[2],c=u[4];e.setProperty(a,s,c||"")}}}function pn(){for(var e=window;;){var n=e.parent;if(!n||n===e)return!1;try{if(n.location.origin!==e.location.origin)return!0}catch(t){if(t instanceof Error&&t.name==="SecurityError")return!0;throw t}e=n}}var gn="mmMwWLliI0O&1",bn="48px",Y=["monospace","sans-serif","serif"],de=["sans-serif-thin","ARNO PRO","Agency FB","Arabic Typesetting","Arial Unicode MS","AvantGarde Bk BT","BankGothic Md BT","Batang","Bitstream Vera Sans Mono","Calibri","Century","Century Gothic","Clarendon","EUROSTILE","Franklin Gothic","Futura Bk BT","Futura Md BT","GOTHAM","Gill Sans","HELV","Haettenschweiler","Helvetica Neue","Humanst521 BT","Leelawadee","Letter Gothic","Levenim MT","Lucida Bright","Lucida Sans","Menlo","MS Mincho","MS Outlook","MS Reference Specialty","MS UI Gothic","MT Extra","MYRIAD PRO","Marlett","Meiryo UI","Microsoft Uighur","Minion Pro","Monotype Corsiva","PMingLiU","Pristina","SCRIPTINA","Segoe UI Light","Serifa","SimHei","Small Fonts","Staccato222 BT","TRAJAN PRO","Univers CE 55 Medium","Vrinda","ZWAdobeF"];function yn(){var e=this;return Ce(function(n,t){var r=t.document;return M(e,void 0,void 0,function(){var i,u,a,s,c,f,l,o,d,v,b,y;return R(this,function(S){for(i=r.body,i.style.fontSize=bn,u=r.createElement("div"),u.style.setProperty("visibility","hidden","important"),a={},s={},c=function(h){var w=r.createElement("span"),L=w.style;return L.position="absolute",L.top="0",L.left="0",L.fontFamily=h,w.textContent=gn,u.appendChild(w),w},f=function(h,w){return c("'".concat(h,"',").concat(w))},l=function(){return Y.map(c)},o=function(){for(var h={},w=function(Z){h[Z]=Y.map(function(T){return f(Z,T)})},L=0,I=de;L<I.length;L++){var A=I[L];w(A)}return h},d=function(h){return Y.some(function(w,L){return h[L].offsetWidth!==a[w]||h[L].offsetHeight!==s[w]})},v=l(),b=o(),i.appendChild(u),y=0;y<Y.length;y++)a[Y[y]]=v[y].offsetWidth,s[Y[y]]=v[y].offsetHeight;return[2,de.filter(function(h){return d(b[h])})]})})})}function wn(){var e=navigator.plugins;if(e){for(var n=[],t=0;t<e.length;++t){var r=e[t];if(r){for(var i=[],u=0;u<r.length;++u){var a=r[u];i.push({type:a.type,suffixes:a.suffixes})}n.push({name:r.name,description:r.description,mimeTypes:i})}}return n}}function Sn(){return Ln(Mn())}function Ln(e){var n,t=!1,r,i,u=kn(),a=u[0],s=u[1];return xn(a,s)?(t=Vn(s),e?r=i="skipped":(n=Cn(a,s),r=n[0],i=n[1])):r=i="unsupported",{winding:t,geometry:r,text:i}}function kn(){var e=document.createElement("canvas");return e.width=1,e.height=1,[e,e.getContext("2d")]}function xn(e,n){return!!(n&&e.toDataURL)}function Vn(e){return e.rect(0,0,10,10),e.rect(2,2,6,6),!e.isPointInPath(5,5,"evenodd")}function Cn(e,n){Fn(e,n);var t=Q(e),r=Q(e);if(t!==r)return["unstable","unstable"];Wn(e,n);var i=Q(e);return[i,t]}function Fn(e,n){e.width=240,e.height=60,n.textBaseline="alphabetic",n.fillStyle="#f60",n.fillRect(100,1,62,20),n.fillStyle="#069",n.font='11pt "Times New Roman"';var t="Cwm fjordbank gly ".concat(String.fromCharCode(55357,56835));n.fillText(t,2,15),n.fillStyle="rgba(102, 204, 0, 0.2)",n.font="18pt Arial",n.fillText(t,4,45)}function Wn(e,n){e.width=122,e.height=110,n.globalCompositeOperation="multiply";for(var t=0,r=[["#f2f",40,40],["#2ff",80,40],["#ff2",60,80]];t<r.length;t++){var i=r[t],u=i[0],a=i[1],s=i[2];n.fillStyle=u,n.beginPath(),n.arc(a,s,40,0,Math.PI*2,!0),n.closePath(),n.fill()}n.fillStyle="#f9c",n.arc(60,60,60,0,Math.PI*2,!0),n.arc(60,60,20,0,Math.PI*2,!0),n.fill("evenodd")}function Q(e){return e.toDataURL()}function Mn(){return W()&&D()&&H()}function Rn(){var e=navigator,n=0,t;e.maxTouchPoints!==void 0?n=ee(e.maxTouchPoints):e.msMaxTouchPoints!==void 0&&(n=e.msMaxTouchPoints);try{document.createEvent("TouchEvent"),t=!0}catch(i){t=!1}var r="ontouchstart"in window;return{maxTouchPoints:n,touchEvent:t,touchStart:r}}function In(){return navigator.oscpu}function Pn(){var e=navigator,n=[],t=e.language||e.userLanguage||e.browserLanguage||e.systemLanguage;if(t!==void 0&&n.push([t]),Array.isArray(e.languages))j()&&en()||n.push(e.languages);else if(typeof e.languages=="string"){var r=e.languages;r&&n.push(r.split(","))}return n}function Zn(){return window.screen.colorDepth}function Gn(){return P(F(navigator.deviceMemory),void 0)}function An(){if(!(W()&&D()&&H()))return Tn()}function Tn(){var e=screen,n=function(r){return P(ee(r),null)},t=[n(e.width),n(e.height)];return t.sort().reverse(),t}var En=2500,Yn=10,J,_;function Xn(){if(_===void 0){var e=function(){var n=$();q(n)?_=setTimeout(e,En):(J=n,_=void 0)};e()}}function Nn(){var e=this;return Xn(),function(){return M(e,void 0,void 0,function(){var n;return R(this,function(t){switch(t.label){case 0:return n=$(),q(n)?J?[2,we([],J,!0)]:an()?[4,on()]:[3,2]:[3,2];case 1:t.sent(),n=$(),t.label=2;case 2:return q(n)||(J=n),[2,n]}})})}}function jn(){var e=this;if(W()&&D()&&H())return function(){return Promise.resolve(void 0)};var n=Nn();return function(){return M(e,void 0,void 0,function(){var t,r;return R(this,function(i){switch(i.label){case 0:return[4,n()];case 1:return t=i.sent(),r=function(u){return u===null?null:ke(u,Yn)},[2,[r(t[0]),r(t[1]),r(t[2]),r(t[3])]]}})})}}function $(){var e=screen;return[P(F(e.availTop),null),P(F(e.width)-F(e.availWidth)-P(F(e.availLeft),0),null),P(F(e.height)-F(e.availHeight)-P(F(e.availTop),0),null),P(F(e.availLeft),null)]}function q(e){for(var n=0;n<4;++n)if(e[n])return!1;return!0}function Hn(){return P(ee(navigator.hardwareConcurrency),void 0)}function Dn(){var e,n=(e=window.Intl)===null||e===void 0?void 0:e.DateTimeFormat;if(n){var t=new n().resolvedOptions().timeZone;if(t)return t}var r=-zn();return"UTC".concat(r>=0?"+":"").concat(r)}function zn(){var e=new Date().getFullYear();return Math.max(F(new Date(e,0,1).getTimezoneOffset()),F(new Date(e,6,1).getTimezoneOffset()))}function Bn(){try{return!!window.sessionStorage}catch(e){return!0}}function Jn(){try{return!!window.localStorage}catch(e){return!0}}function On(){if(!(xe()||qe()))try{return!!window.indexedDB}catch(e){return!0}}function Un(){return!!window.openDatabase}function Qn(){return navigator.cpuClass}function _n(){var e=navigator.platform;return e==="MacIntel"&&W()&&!ne()?rn()?"iPad":"iPhone":e}function Kn(){return navigator.vendor||""}function $n(){for(var e=[],n=0,t=["chrome","safari","__crWeb","__gCrWeb","yandex","__yb","__ybro","__firefox__","__edgeTrackingPreventionStatistics","webkit","oprt","samsungAr","ucweb","UCShellJava","puffinDevice"];n<t.length;n++){var r=t[n],i=window[r];i&&typeof i=="object"&&e.push(r)}return e.sort()}function qn(){var e=document;try{e.cookie="cookietest=1; SameSite=Strict;";var n=e.cookie.indexOf("cookietest=")!==-1;return e.cookie="cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT",n}catch(t){return!1}}function et(){var e=atob;return{abpIndo:["#Iklan-Melayang","#Kolom-Iklan-728","#SidebarIklan-wrapper",'[title="ALIENBOLA" i]',e("I0JveC1CYW5uZXItYWRz")],abpvn:[".quangcao","#mobileCatfish",e("LmNsb3NlLWFkcw=="),'[id^="bn_bottom_fixed_"]',"#pmadv"],adBlockFinland:[".mainostila",e("LnNwb25zb3JpdA=="),".ylamainos",e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"),e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],adBlockPersian:["#navbar_notice_50",".kadr",'TABLE[width="140px"]',"#divAgahi",e("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],adBlockWarningRemoval:["#adblock-honeypot",".adblocker-root",".wp_adblock_detect",e("LmhlYWRlci1ibG9ja2VkLWFk"),e("I2FkX2Jsb2NrZXI=")],adGuardAnnoyances:[".hs-sosyal","#cookieconsentdiv",'div[class^="app_gdpr"]',".as-oil",'[data-cypress="soft-push-notification-modal"]'],adGuardBase:[".BetterJsPopOverlay",e("I2FkXzMwMFgyNTA="),e("I2Jhbm5lcmZsb2F0MjI="),e("I2NhbXBhaWduLWJhbm5lcg=="),e("I0FkLUNvbnRlbnQ=")],adGuardChinese:[e("LlppX2FkX2FfSA=="),e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"),"#widget-quan",e("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"),e("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],adGuardFrench:["#pavePub",e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"),".mobile_adhesion",".widgetadv",e("LmFkc19iYW4=")],adGuardGerman:['aside[data-portal-id="leaderboard"]'],adGuardJapanese:["#kauli_yad_1",e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="),e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="),e("LmFkZ29vZ2xl"),e("Ll9faXNib29zdFJldHVybkFk")],adGuardMobile:[e("YW1wLWF1dG8tYWRz"),e("LmFtcF9hZA=="),'amp-embed[type="24smi"]',"#mgid_iframe1",e("I2FkX2ludmlld19hcmVh")],adGuardRussian:[e("YVtocmVmXj0iaHR0cHM6Ly9himport{g as q,i as N,a as I,b as k,c as C,d as o,e as A,w as Te,f as v,h as ee,j as te,k as D,l as B,m as he,n as Oe,o as be,p as Ce,t as Fe}from"./@intlify_shared@10.0.0-beta.2.3561053b.js";import{d as Le,b as Ie,c as Ne,C as Me}from"./@intlify_message-compiler@10.0.0-beta.2.ae080eb7.js";function Ae(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(q().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(q().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const w=[];w[0]={w:[0],i:[3,0],["["]:[4],o:[7]};w[1]={w:[1],["."]:[2],["["]:[4],o:[7]};w[2]={w:[2],i:[3,0],[0]:[3,0]};w[3]={i:[3,0],[0]:[3,0],w:[1,1],["."]:[2,1],["["]:[4,1],o:[7,1]};w[4]={["'"]:[5,0],['"']:[6,0],["["]:[4,2],["]"]:[1,3],o:8,l:[4,0]};w[5]={["'"]:[4,0],o:8,l:[5,0]};w[6]={['"']:[4,0],o:8,l:[6,0]};const De=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Se(e){return De.test(e)}function Re(e){const t=e.charCodeAt(0),r=e.charCodeAt(e.length-1);return t===r&&(t===34||t===39)?e.slice(1,-1):e}function pe(e){if(e==null)return"o";switch(e.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return e;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function ye(e){const t=e.trim();return e.charAt(0)==="0"&&isNaN(parseInt(e))?!1:Se(t)?Re(t):"*"+t}function Pe(e){const t=[];let r=-1,a=0,n=0,s,i,u,l,c,_,T;const d=[];d[0]=()=>{i===void 0?i=u:i+=u},d[1]=()=>{i!==void 0&&(t.push(i),i=void 0)},d[2]=()=>{d[0](),n++},d[3]=()=>{if(n>0)n--,a=4,d[0]();else{if(n=0,i===void 0||(i=ye(i),i===!1))return!1;d[1]()}};function E(){const g=e[r+1];if(a===5&&g==="'"||a===6&&g==='"')return r++,u="\\"+g,d[0](),!0}for(;a!==null;)if(r++,s=e[r],!(s==="\\"&&E())){if(l=pe(s),T=w[a],c=T[l]||T.l||8,c===8||(a=c[0],c[1]!==void 0&&(_=d[c[1]],_&&(u=s,_()===!1))))return;if(a===7)return t}}const ae=new Map;function ke(e,t){return N(e)?e[t]:null}function dt(e,t){if(!N(e))return null;let r=ae.get(t);if(r||(r=Pe(t),r&&ae.set(t,r)),!r)return null;const a=r.length;let n=e,s=0;for(;s<a;){const i=n[r[s]];if(i===void 0||I(n))return null;n=i,s++}return n}const we=e=>e,We=e=>"",ve="text",Ue=e=>e.length===0?"":Ce(e),Ve=Fe;function re(e,t){return e=Math.abs(e),t===2?e?e>1?1:0:1:e?Math.min(e,2):0}function $e(e){const t=D(e.pluralIndex)?e.pluralIndex:-1;return e.named&&(D(e.named.count)||D(e.named.n))?D(e.named.count)?e.named.count:D(e.named.n)?e.named.n:t:t}function Ge(e,t){t.count||(t.count=e),t.n||(t.n=e)}function xe(e={}){const t=e.locale,r=$e(e),a=N(e.pluralRules)&&o(t)&&I(e.pluralRules[t])?e.pluralRules[t]:re,n=N(e.pluralRules)&&o(t)&&I(e.pluralRules[t])?re:void 0,s=m=>m[a(r,m.length,n)],i=e.list||[],u=m=>i[m],l=e.named||{};D(e.pluralIndex)&&Ge(r,l);const c=m=>l[m];function _(m){const h=I(e.messages)?e.messages(m):N(e.messages)?e.messages[m]:!1;return h||(e.parent?e.parent.message(m):We)}const T=m=>e.modifiers?e.modifiers[m]:we,d=C(e.processor)&&I(e.processor.normalize)?e.processor.normalize:Ue,E=C(e.processor)&&I(e.processor.interpolate)?e.processor.interpolate:Ve,g=C(e.processor)&&o(e.processor.type)?e.processor.type:ve,L={list:u,named:c,plural:s,linked:(m,...h)=>{const[M,f]=h;let O="text",b="";h.length===1?N(M)?(b=M.modifier||b,O=M.type||O):o(M)&&(b=M||b):h.length===2&&(o(M)&&(b=M||b),o(f)&&(O=f||O));const W=_(m)(L),S=O==="vnode"&&k(W)&&b?W[0]:W;return b?T(b)(S,O):S},message:_,type:g,interpolate:E,normalize:d,values:v({},i,l)};return L}let V=null;function gt(e){V=e}function Ke(e,t,r){V&&V.emit("i18n:init",{timestamp:Date.now(),i18n:e,version:t,meta:r})}const Ye=je("function:translate");function je(e){return t=>V&&V.emit(e,t)}const y={INVALID_ARGUMENT:Me,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_NON_STRING_MESSAGE:20,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},Et=24;function P(e){return Ne(e,null,void 0)}function Z(e,t){return t.locale!=null?ne(t.locale):ne(e.locale)}let Y;function ne(e){if(o(e))return e;if(I(e)){if(e.resolvedOnce&&Y!=null)return Y;if(e.constructor.name==="Function"){const t=e();if(be(t))throw P(y.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return Y=t}else throw P(y.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw P(y.NOT_SUPPORT_LOCALE_TYPE)}function ze(e,t,r){return[...new Set([r,...k(t)?t:N(t)?Object.keys(t):o(t)?[t]:[r]])]}function Tt(e,t,r){const a=o(r)?r:z,n=e;n.__localeChainCache||(n.__localeChainCache=new Map);let s=n.__localeChainCache.get(a);if(!s){s=[];let i=[r];for(;k(i);)i=se(s,i,t);const u=k(t)||!C(t)?t:t.default?t.default:null;i=o(u)?[u]:u,k(i)&&se(s,i,!1),n.__localeChainCache.set(a,s)}return s}function se(e,t,r){let a=!0;for(let n=0;n<t.length&&A(a);n++){const s=t[n];o(s)&&(a=He(e,t[n],r))}return a}function He(e,t,r){let a;const n=t.split("-");do{const s=n.join("-");a=Be(e,s,r),n.splice(-1,1)}while(n.length&&a===!0);return a}function Be(e,t,r){let a=!1;if(!e.includes(t)&&(a=!0,t)){a=t[t.length-1]!=="!";const n=t.replace(/!/g,"");e.push(n),(k(r)||C(r))&&r[n]&&(a=r[n])}return a}const Ze="10.0.0-beta.2",J=-1,z="en-US",ht="",le=e=>`${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;function Je(){return{upper:(e,t)=>t==="text"&&o(e)?e.toUpperCase():t==="vnode"&&N(e)&&"__v_isVNode"in e?e.children.toUpperCase():e,lower:(e,t)=>t==="text"&&o(e)?e.toLowerCase():t==="vnode"&&N(e)&&"__v_isVNode"in e?e.children.toLowerCase():e,capitalize:(e,t)=>t==="text"&&o(e)?le(e):t==="vnode"&&N(e)&&"__v_isVNode"in e?le(e.children):e}}let ue;function Ot(e){ue=e}let fe;function bt(e){fe=e}let me;function Ct(e){me=e}let _e=null;const Ft=e=>{_e=e},Qe=()=>_e;let de=null;const Lt=e=>{de=e},It=()=>de;let ie=0;function Nt(e={}){const t=I(e.onWarn)?e.onWarn:Te,r=o(e.version)?e.version:Ze,a=o(e.locale)||I(e.locale)?e.locale:z,n=I(a)?z:a,s=k(e.fallbackLocale)||C(e.fallbackLocale)||o(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:n,i=C(e.messages)?e.messages:{[n]:{}},u=C(e.datetimeFormats)?e.datetimeFormats:{[n]:{}},l=C(e.numberFormats)?e.numberFormats:{[n]:{}},c=v({},e.modifiers||{},Je()),_=e.pluralRules||{},T=I(e.missing)?e.missing:null,d=A(e.missingWarn)||ee(e.missingWarn)?e.missingWarn:!0,E=A(e.fallbackWarn)||ee(e.fallbackWarn)?e.fallbackWarn:!0,g=!!e.fallbackFormat,F=!!e.unresolving,L=I(e.postTranslation)?e.postTranslation:null,m=C(e.processor)?e.processor:null,h=A(e.warnHtmlMessage)?e.warnHtmlMessage:!0,M=!!e.escapeParameter,f=I(e.messageCompiler)?e.messageCompiler:ue,O=I(e.messageResolver)?e.messageResolver:fe||ke,b=I(e.localeFallbacker)?e.localeFallbacker:me||ze,W=N(e.fallbackContext)?e.fallbackContext:void 0,S=e,x=N(S.__datetimeFormatters)?S.__datetimeFormatters:new Map,K=N(S.__numberFormatters)?S.__numberFormatters:new Map,U=N(S.__meta)?S.__meta:{};ie++;const p={version:r,cid:ie,locale:a,fallbackLocale:s,messages:i,modifiers:c,pluralRules:_,missing:T,missingWarn:d,fallbackWarn:E,fallbackFormat:g,unresolving:F,postTranslation:L,processor:m,warnHtmlMessage:h,escapeParameter:M,messageCompiler:f,messageResolver:O,localeFallbacker:b,fallbackContext:W,onWarn:t,__meta:U};return p.datetimeFormats=u,p.numberFormats=l,p.__datetimeFormatters=x,p.__numberFormatters=K,__INTLIFY_PROD_DEVTOOLS__&&Ke(p,r,U),p}function Q(e,t,r,a,n){const{missing:s,onWarn:i}=e;if(s!==null){const u=s(e,r,t,n);return o(u)?u:t}else return t}function Mt(e,t,r){const a=e;a.__localeChainCache=new Map,e.localeFallbacker(e,r,t)}function Xe(e,t){return e===t?!1:e.split("-")[0]===t.split("-")[0]}function qe(e,t){const r=t.indexOf(e);if(r===-1)return!1;for(let a=r+1;a<t.length;a++)if(Xe(e,t[a]))return!0;return!1}function j(e){return r=>et(r,e)}function et(e,t){const r=t.b||t.body;if((r.t||r.type)===1){const a=r,n=a.c||a.cases;return e.plural(n.reduce((s,i)=>[...s,ce(e,i)],[]))}else return ce(e,r)}function ce(e,t){const r=t.s||t.static;if(r)return e.type==="text"?r:e.normalize([r]);{const a=(t.i||t.items).reduce((n,s)=>[...n,H(e,s)],[]);return e.normalize(a)}}function H(e,t){const r=t.t||t.type;switch(r){case 3:{const a=t;return a.v||a.value}case 9:{const a=t;return a.v||a.value}case 4:{const a=t;return e.interpolate(e.named(a.k||a.key))}case 5:{const a=t;return e.interpolate(e.list(a.i!=null?a.i:a.index))}case 6:{const a=t,n=a.m||a.modifier;return e.linked(H(e,a.k||a.key),n?H(e,n):void 0,e.type)}case 7:{const a=t;return a.v||a.value}case 8:{const a=t;return a.v||a.value}default:throw new Error(`unhandled node type on format message part: ${r}`)}}const tt=e=>e;let G=Object.create(null);const $=e=>N(e)&&(e.t===0||e.type===0)&&("b"in e||"body"in e);function at(e,t={}){let r=!1;const a=t.onError||Le;return t.onError=n=>{r=!0,a(n)},{...Ie(e,t),detectError:r}}function At(e,t){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&o(e)){A(t.warnHtmlMessage)&&t.warnHtmlMessage;const a=(t.onCacheKey||tt)(e),n=G[a];if(n)return n;const{ast:s,detectError:i}=at(e,{...t,location:!1,jit:!0}),u=j(s);return i?u:G[a]=u}else{const r=e.cacheKey;if(r){const a=G[r];return a||(G[r]=j(e))}else return j(e)}}const oe=()=>"",R=e=>I(e);function Dt(e,...t){const{fallbackFormat:r,postTranslation:a,unresolving:n,messageCompiler:s,fallbackLocale:i,messages:u}=e,[l,c]=st(...t),_=A(c.missingWarn)?c.missingWarn:e.missingWarn,T=A(c.fallbackWarn)?c.fallbackWarn:e.fallbackWarn,d=A(c.escapeParameter)?c.escapeParameter:e.escapeParameter,E=!!c.resolvedMessage,g=o(c.default)||A(c.default)?A(c.default)?s?l:()=>l:c.default:r?s?l:()=>l:null,F=r||g!=null&&(o(g)||I(g)),L=Z(e,c);d&&rt(c);let[m,h,M]=E?[l,L,u[L]||{}]:ge(e,l,L,i,T,_),f=m,O=l;if(!E&&!(o(f)||$(f)||R(f))&&F&&(f=g,O=f),!E&&(!(o(f)||$(f)||R(f))||!o(h)))return n?J:l;let b=!1;const W=()=>{b=!0},S=R(f)?f:Ee(e,l,h,f,O,W);if(b)return f;const x=it(e,h,M,c),K=xe(x),U=nt(e,S,K),p=a?a(U,l):U;if(__INTLIFY_PROD_DEVTOOLS__){const X={timestamp:Date.now(),key:o(l)?l:R(f)?f.key:"",locale:h||(R(f)?f.locale:""),format:o(f)?f:R(f)?f.source:"",message:p};X.meta=v({},e.__meta,Qe()||{}),Ye(X)}return p}function rt(e){k(e.list)?e.list=e.list.map(t=>o(t)?te(t):t):N(e.named)&&Object.keys(e.named).forEach(t=>{o(e.named[t])&&(e.named[t]=te(e.named[t]))})}function ge(e,t,r,a,n,s){const{messages:i,onWarn:u,messageResolver:l,localeFallbacker:c}=e,_=c(e,a,r);let T={},d,E=null;const g="translate";for(let F=0;F<_.length&&(d=_[F],T=i[d]||{},(E=l(T,t))===null&&(E=T[t]),!(o(E)||$(E)||R(E)));F++)if(!qe(d,_)){const L=Q(e,t,d,s,g);L!==t&&(E=L)}return[E,d,T]}function Ee(e,t,r,a,n,s){const{messageCompiler:i,warnHtmlMessage:u}=e;if(R(a)){const c=a;return c.locale=c.locale||r,c.key=c.key||t,c}if(i==null){const c=()=>a;return c.locale=r,c.key=t,c}const l=i(a,lt(e,r,n,a,u,s));return l.locale=r,l.key=t,l.source=a,l}function nt(e,t,r){return t(r)}function st(...e){const[t,r,a]=e,n={};if(!o(t)&&!D(t)&&!R(t)&&!$(t))throw P(y.INVALID_ARGUMENT);const s=D(t)?String(t):(R(t),t);return D(r)?n.plural=r:o(r)?n.default=r:C(r)&&!B(r)?n.named=r:k(r)&&(n.list=r),D(a)?n.plural=a:o(a)?n.default=a:C(a)&&v(n,a),[s,n]}function lt(e,t,r,a,n,s){return{locale:t,key:r,warnHtmlMessage:n,onError:i=>{throw s&&s(i),i},onCacheKey:i=>he(t,r,i)}}function it(e,t,r,a){const{modifiers:n,pluralRules:s,messageResolver:i,fallbackLocale:u,fallbackWarn:l,missingWarn:c,fallbackContext:_}=e,d={locale:t,modifiers:n,pluralRules:s,messages:E=>{let g=i(r,E);if(g==null&&_){const[,,F]=ge(_,E,t,u,l,c);g=i(F,E)}if(o(g)||$(g)){let F=!1;const m=Ee(e,E,t,g,E,()=>{F=!0});return F?oe:m}else return R(g)?g:oe}};return e.processor&&(d.processor=e.processor),a.list&&(d.list=a.list),a.named&&(d.named=a.named),D(a.plural)&&(d.pluralIndex=a.plural),d}function St(e,...t){const{datetimeFormats:r,unresolving:a,fallbackLocale:n,onWarn:s,localeFallbacker:i}=e,{__datetimeFormatters:u}=e,[l,c,_,T]=ot(...t),d=A(_.missingWarn)?_.missingWarn:e.missingWarn;A(_.fallbackWarn)?_.fallbackWarn:e.fallbackWarn;const E=!!_.part,g=Z(e,_),F=i(e,n,g);if(!o(l)||l==="")return new Intl.DateTimeFormat(g,T).format(c);let L={},m,h=null;const M="datetime format";for(let b=0;b<F.length&&(m=F[b],L=r[m]||{},h=L[l],!C(h));b++)Q(e,l,m,d,M);if(!C(h)||!o(m))return a?J:l;let f=`${m}__${l}`;B(T)||(f=`${f}__${JSON.stringify(T)}`);let O=u.get(f);return O||(O=new Intl.DateTimeFormat(m,v({},h,T)),u.set(f,O)),E?O.formatToParts(c):O.format(c)}const ct=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function ot(...e){const[t,r,a,n]=e,s={};let i={},u;if(o(t)){const l=t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw P(y.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();u=new Date(c);try{u.toISOString()}catch(_){throw P(y.INVALID_ISO_DATE_ARGUMENT)}}else if(Oe(t)){if(isNaN(t.getTime()))throw P(y.INVALID_DATE_ARGUMENT);u=t}else if(D(t))u=t;else throw P(y.INVALID_ARGUMENT);return o(r)?s.key=r:C(r)&&Object.keys(r).forEach(l=>{ct.includes(l)?i[l]=r[l]:s[l]=r[l]}),o(a)?s.locale=a:C(a)&&(i=a),C(n)&&(i=n),[s.key||"",u,s,i]}function Rt(e,t,r){const a=e;for(const n in r){const s=`${t}__${n}`;a.__datetimeFormatters.has(s)&&a.__datetimeFormatters.delete(s)}}function pt(e,...t){const{numberFormats:r,unresolving:a,fallbackLocale:n,onWarn:s,localeFallbacker:i}=e,{__numberFormatters:u}=e,[l,c,_,T]=ft(...t),d=A(_.missingWarn)?_.missingWarn:e.missingWarn;A(_.fallbackWarn)?_.fallbackWarn:e.fallbackWarn;const E=!!_.part,g=Z(e,_),F=i(e,n,g);if(!o(l)||l==="")return new Intl.NumberFormat(g,T).format(c);let L={},m,h=null;const M="number format";for(let b=0;b<F.length&&(m=F[b],L=r[m]||{},h=L[l],!C(h));b++)Q(e,l,m,d,M);if(!C(h)||!o(m))return a?J:l;let f=`${m}__${l}`;B(T)||(f=`${f}__${JSON.stringify(T)}`);let O=u.get(f);return O||(O=new Intl.NumberFormat(m,v({},h,T)),u.set(f,O)),E?O.formatToParts(c):O.format(c)}const ut=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function ft(...e){const[t,r,a,n]=e,s={};let i={};if(!D(t))throw P(y.INVALID_ARGUMENT);const u=t;return o(r)?s.key=r:C(r)&&Object.keys(r).forEach(l=>{ut.includes(l)?i[l]=r[l]:s[l]=r[l]}),o(a)?s.locale=a:C(a)&&(i=a),C(n)&&(i=n),[s.key||"",u,s,i]}function yt(e,t,r){const a=e;for(const n in r){const s=`${t}__${n}`;a.__numberFormatters.has(s)&&a.__numberFormatters.delete(s)}}Ae();export{Et as C,z as D,ht as M,ut as N,bt as a,Ct as b,ct as c,At as d,dt as e,Tt as f,Nt as g,Rt as h,yt as i,Ft as j,It as k,J as l,ot as m,St as n,ft as o,st as p,pt as q,Ot as r,gt as s,Dt as t,Mt as u,$ as v,R as w,Lt as x};import{f as te,p as ne,d as j}from"./@intlify_shared@10.0.0-beta.2.3561053b.js";function ke(r,n,u){return{line:r,column:n,offset:u}}function J(r,n,u){const a={start:r,end:n};return u!=null&&(a.source=u),a}const C={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16},Be=17;function re(r,n,u={}){const{domain:a,messages:p,args:o}=u,k=r,h=new SyntaxError(String(k));return h.code=r,n&&(h.location=n),h.domain=a,h}function Ve(r){throw r}const X=" ",Ae="\r",O=`
`,Pe=String.fromCharCode(8232),me=String.fromCharCode(8233);function ye(r){const n=r;let u=0,a=1,p=1,o=0;const k=N=>n[N]===Ae&&n[N+1]===O,h=N=>n[N]===O,T=N=>n[N]===me,b=N=>n[N]===Pe,D=N=>k(N)||h(N)||T(N)||b(N),I=()=>u,S=()=>a,v=()=>p,U=()=>o,m=N=>k(N)||T(N)||b(N)?O:n[N],_=()=>m(u),s=()=>m(u+o);function l(){return o=0,D(u)&&(a++,p=0),k(u)&&u++,u++,p++,n[u]}function E(){return k(u+o)&&o++,o++,n[u+o]}function c(){u=0,a=1,p=1,o=0}function d(N=0){o=N}function L(){const N=u+o;for(;N!==u;)l();o=0}return{index:I,line:S,column:v,peekOffset:U,charAt:m,currentChar:_,currentPeek:s,next:l,peek:E,reset:c,resetPeek:d,skipToPeek:L}}const Y=void 0,Oe=".",Z="'",be="tokenizer";function De(r,n={}){const u=n.location!==!1,a=ye(r),p=()=>a.index(),o=()=>ke(a.line(),a.column(),a.index()),k=o(),h=p(),T={currentType:13,offset:h,startLoc:k,endLoc:k,lastType:13,lastOffset:h,lastStartLoc:k,lastEndLoc:k,braceNest:0,inLinked:!1,text:""},b=()=>T,{onError:D}=n;function I(e,t,i,...f){const A=b();if(t.column+=i,t.offset+=i,D){const P=u?J(A.startLoc,t):null,R=re(e,P,{domain:be,args:f});D(R)}}function S(e,t,i){e.endLoc=o(),e.currentType=t;const f={type:t};return u&&(f.loc=J(e.startLoc,e.endLoc)),i!=null&&(f.value=i),f}const v=e=>S(e,13);function U(e,t){return e.currentChar()===t?(e.next(),t):(I(C.EXPECTED_TOKEN,o(),0,t),"")}function m(e){let t="";for(;e.currentPeek()===X||e.currentPeek()===O;)t+=e.currentPeek(),e.peek();return t}function _(e){const t=m(e);return e.skipToPeek(),t}function s(e){if(e===Y)return!1;const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t===95}function l(e){if(e===Y)return!1;const t=e.charCodeAt(0);return t>=48&&t<=57}function E(e,t){const{currentType:i}=t;if(i!==2)return!1;m(e);const f=s(e.currentPeek());return e.resetPeek(),f}function c(e,t){const{currentType:i}=t;if(i!==2)return!1;m(e);const f=e.currentPeek()==="-"?e.peek():e.currentPeek(),A=l(f);return e.resetPeek(),A}function d(e,t){const{currentType:i}=t;if(i!==2)return!1;m(e);const f=e.currentPeek()===Z;return e.resetPeek(),f}function L(e,t){const{currentType:i}=t;if(i!==7)return!1;m(e);const f=e.currentPeek()===".";return e.resetPeek(),f}function N(e,t){const{currentType:i}=t;if(i!==8)return!1;m(e);const f=s(e.currentPeek());return e.resetPeek(),f}function w(e,t){const{currentType:i}=t;if(!(i===7||i===11))return!1;m(e);const f=e.currentPeek()===":";return e.resetPeek(),f}function y(e,t){const{currentType:i}=t;if(i!==9)return!1;const f=()=>{const P=e.currentPeek();return P==="{"?s(e.peek()):P==="@"||P==="|"||P===":"||P==="."||P===X||!P?!1:P===O?(e.peek(),f()):G(e,!1)},A=f();return e.resetPeek(),A}function $(e){m(e);const t=e.currentPeek()==="|";return e.resetPeek(),t}function G(e,t=!0){const i=(A=!1,P="")=>{const R=e.currentPeek();return R==="{"||R==="@"||!R?A:R==="|"?!(P===X||P===O):R===X?(e.peek(),i(!0,X)):R===O?(e.peek(),i(!0,O)):!0},f=i();return t&&e.resetPeek(),f}function g(e,t){const i=e.currentChar();return i===Y?Y:t(i)?(e.next(),i):null}function se(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||t===95||t===36}function ie(e){return g(e,se)}function ue(e){const t=e.charCodeAt(0);return t>=97&&t<=122||t>=65&&t<=90||t>=48&&t<=57||t===95||t===36||t===45}function ce(e){return g(e,ue)}function ae(e){const t=e.charCodeAt(0);return t>=48&&t<=57}function oe(e){return g(e,ae)}function le(e){const t=e.charCodeAt(0);return t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102}function fe(e){return g(e,le)}function W(e){let t="",i="";for(;t=oe(e);)i+=t;return i}function Ee(e){let t="";for(;;){const i=e.currentChar();if(i==="{"||i==="}"||i==="@"||i==="|"||!i)break;if(i===X||i===O)if(G(e))t+=i,e.next();else{if($(e))break;t+=i,e.next()}else t+=i,e.next()}return t}function de(e){_(e);let t="",i="";for(;t=ce(e);)i+=t;return e.currentChar()===Y&&I(C.UNTERMINATED_CLOSING_BRACE,o(),0),i}function Le(e){_(e);let t="";return e.currentChar()==="-"?(e.next(),t+=`-${W(e)}`):t+=W(e),e.currentChar()===Y&&I(C.UNTERMINATED_CLOSING_BRACE,o(),0),t}function pe(e){return e!==Z&&e!==O}function Ne(e){_(e),U(e,"'");let t="",i="";for(;t=g(e,pe);)t==="\\"?i+=_e(e):i+=t;const f=e.currentChar();return f===O||f===Y?(I(C.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,o(),0),f===O&&(e.next(),U(e,"'")),i):(U(e,"'"),i)}function _e(e){const t=e.currentChar();switch(t){case"\\":case"'":return e.next(),`\\${t}`;case"u":return q(e,t,4);case"U":return q(e,t,6);default:return I(C.UNKNOWN_ESCAPE_SEQUENCE,o(),0,t),""}}function q(e,t,i){U(e,t);let f="";for(let A=0;A<i;A++){const P=fe(e);if(!P){I(C.INVALID_UNICODE_ESCAPE_SEQUENCE,o(),0,`\\${t}${f}${e.currentChar()}`);break}f+=P}return`\\${t}${f}`}function he(e){return e!=="{"&&e!=="}"&&e!==X&&e!==O}function Ce(e){_(e);let t="",i="";for(;t=g(e,he);)i+=t;return i}function Te(e){let t="",i="";for(;t=ie(e);)i+=t;return i}function Ie(e){const t=i=>{const f=e.currentChar();return f==="{"||f==="@"||f==="|"||f==="("||f===")"||!f||f===X?i:(i+=f,e.next(),t(i))};return t("")}function F(e){_(e);const t=U(e,"|");return _(e),t}function B(e,t){let i=null;switch(e.currentChar()){case"{":return t.braceNest>=1&&I(C.NOT_ALLOW_NEST_PLACEHOLDER,o(),0),e.next(),i=S(t,2,"{"),_(e),t.braceNest++,i;case"}":return t.braceNest>0&&t.currentType===2&&I(C.EMPTY_PLACEHOLDER,o(),0),e.next(),i=S(t,3,"}"),t.braceNest--,t.braceNest>0&&_(e),t.inLinked&&t.braceNest===0&&(t.inLinked=!1),i;case"@":return t.braceNest>0&&I(C.UNTERMINATED_CLOSING_BRACE,o(),0),i=H(e,t)||v(t),t.braceNest=0,i;default:{let A=!0,P=!0,R=!0;if($(e))return t.braceNest>0&&I(C.UNTERMINATED_CLOSING_BRACE,o(),0),i=S(t,1,F(e)),t.braceNest=0,t.inLinked=!1,i;if(t.braceNest>0&&(t.currentType===4||t.currentType===5||t.currentType===6))return I(C.UNTERMINATED_CLOSING_BRACE,o(),0),t.braceNest=0,V(e,t);if(A=E(e,t))return i=S(t,4,de(e)),_(e),i;if(P=c(e,t))return i=S(t,5,Le(e)),_(e),i;if(R=d(e,t))return i=S(t,6,Ne(e)),_(e),i;if(!A&&!P&&!R)return i=S(t,12,Ce(e)),I(C.INVALID_TOKEN_IN_PLACEHOLDER,o(),0,i.value),_(e),i;break}}return i}function H(e,t){const{currentType:i}=t;let f=null;const A=e.currentChar();switch((i===7||i===8||i===11||i===9)&&(A===O||A===X)&&I(C.INVALID_LINKED_FORMAT,o(),0),A){case"@":return e.next(),f=S(t,7,"@"),t.inLinked=!0,f;case".":return _(e),e.next(),S(t,8,".");case":":return _(e),e.next(),S(t,9,":");default:return $(e)?(f=S(t,1,F(e)),t.braceNest=0,t.inLinked=!1,f):L(e,t)||w(e,t)?(_(e),H(e,t)):N(e,t)?(_(e),S(t,11,Te(e))):y(e,t)?(_(e),A==="{"?B(e,t)||f:S(t,10,Ie(e))):(i===7&&I(C.INVALID_LINKED_FORMAT,o(),0),t.braceNest=0,t.inLinked=!1,V(e,t))}}function V(e,t){let i={type:13};if(t.braceNest>0)return B(e,t)||v(t);if(t.inLinked)return H(e,t)||v(t);switch(e.currentChar()){case"{":return B(e,t)||v(t);case"}":return I(C.UNBALANCED_CLOSING_BRACE,o(),0),e.next(),S(t,3,"}");case"@":return H(e,t)||v(t);default:{if($(e))return i=S(t,1,F(e)),t.braceNest=0,t.inLinked=!1,i;if(G(e))return S(t,0,Ee(e));break}}return i}function Se(){const{currentType:e,offset:t,startLoc:i,endLoc:f}=T;return T.lastType=e,T.lastOffset=t,T.lastStartLoc=i,T.lastEndLoc=f,T.offset=p(),T.startLoc=o(),a.currentChar()===Y?S(T,13):V(a,T)}return{nextToken:Se,currentOffset:p,currentPosition:o,context:b}}const ve="parser",Re=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function Ue(r,n,u){switch(r){case"\\\\":return"\\";case"\\'":return"'";default:{const a=parseInt(n||u,16);return a<=55295||a>=57344?String.fromCodePoint(a):"�"}}}function Me(r={}){const n=r.location!==!1,{onError:u}=r;function a(s,l,E,c,...d){const L=s.currentPosition();if(L.offset+=c,L.column+=c,u){const N=n?J(E,L):null,w=re(l,N,{domain:ve,args:d});u(w)}}function p(s,l,E){const c={type:s};return n&&(c.start=l,c.end=l,c.loc={start:E,end:E}),c}function o(s,l,E,c){c&&(s.type=c),n&&(s.end=l,s.loc&&(s.loc.end=E))}function k(s,l){const E=s.context(),c=p(3,E.offset,E.startLoc);return c.value=l,o(c,s.currentOffset(),s.currentPosition()),c}function h(s,l){const E=s.context(),{lastOffset:c,lastStartLoc:d}=E,L=p(5,c,d);return L.index=parseInt(l,10),s.nextToken(),o(L,s.currentOffset(),s.currentPosition()),L}function T(s,l){const E=s.context(),{lastOffset:c,lastStartLoc:d}=E,L=p(4,c,d);return L.key=l,s.nextToken(),o(L,s.currentOffset(),s.currentPosition()),L}function b(s,l){const E=s.context(),{lastOffset:c,lastStartLoc:d}=E,L=p(9,c,d);return L.value=l.replace(Re,Ue),s.nextToken(),o(L,s.currentOffset(),s.currentPosition()),L}function D(s){const l=s.nextToken(),E=s.context(),{lastOffset:c,lastStartLoc:d}=E,L=p(8,c,d);return l.type!==11?(a(s,C.UNEXPECTED_EMPTY_LINKED_MODIFIER,E.lastStartLoc,0),L.value="",o(L,c,d),{nextConsumeToken:l,node:L}):(l.value==null&&a(s,C.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,M(l)),L.value=l.value||"",o(L,s.currentOffset(),s.currentPosition()),{node:L})}function I(s,l){const E=s.context(),c=p(7,E.offset,E.startLoc);return c.value=l,o(c,s.currentOffset(),s.currentPosition()),c}function S(s){const l=s.context(),E=p(6,l.offset,l.startLoc);let c=s.nextToken();if(c.type===8){const d=D(s);E.modifier=d.node,c=d.nextConsumeToken||s.nextToken()}switch(c.type!==9&&a(s,C.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(c)),c=s.nextToken(),c.type===2&&(c=s.nextToken()),c.type){case 10:c.value==null&&a(s,C.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(c)),E.key=I(s,c.value||"");break;case 4:c.value==null&&a(s,C.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(c)),E.key=T(s,c.value||"");break;case 5:c.value==null&&a(s,C.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(c)),E.key=h(s,c.value||"");break;case 6:c.value==null&&a(s,C.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(c)),E.key=b(s,c.value||"");break;default:{a(s,C.UNEXPECTED_EMPTY_LINKED_KEY,l.lastStartLoc,0);const d=s.context(),L=p(7,d.offset,d.startLoc);return L.value="",o(L,d.offset,d.startLoc),E.key=L,o(E,d.offset,d.startLoc),{nextConsumeToken:c,node:E}}}return o(E,s.currentOffset(),s.currentPosition()),{node:E}}function v(s){const l=s.context(),E=l.currentType===1?s.currentOffset():l.offset,c=l.currentType===1?l.endLoc:l.startLoc,d=p(2,E,c);d.items=[];let L=null;do{const y=L||s.nextToken();switch(L=null,y.type){case 0:y.value==null&&a(s,C.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(y)),d.items.push(k(s,y.value||""));break;case 5:y.value==null&&a(s,C.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(y)),d.items.push(h(s,y.value||""));break;case 4:y.value==null&&a(s,C.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(y)),d.items.push(T(s,y.value||""));break;case 6:y.value==null&&a(s,C.UNEXPECTED_LEXICAL_ANALYSIS,l.lastStartLoc,0,M(y)),d.items.push(b(s,y.value||""));break;case 7:{const $=S(s);d.items.push($.node),L=$.nextConsumeToken||null;break}}}while(l.currentType!==13&&l.currentType!==1);const N=l.currentType===1?l.lastOffset:s.currentOffset(),w=l.currentType===1?l.lastEndLoc:s.currentPosition();return o(d,N,w),d}function U(s,l,E,c){const d=s.context();let L=c.items.length===0;const N=p(1,l,E);N.cases=[],N.cases.push(c);do{const w=v(s);L||(L=w.items.length===0),N.cases.push(w)}while(d.currentType!==13);return L&&a(s,C.MUST_HAVE_MESSAGES_IN_PLURAL,E,0),o(N,s.currentOffset(),s.currentPosition()),N}function m(s){const l=s.context(),{offset:E,startLoc:c}=l,d=v(s);return l.currentType===13?d:U(s,E,c,d)}function _(s){const l=De(s,te({},r)),E=l.context(),c=p(0,E.offset,E.startLoc);return n&&c.loc&&(c.loc.source=s),c.body=m(l),r.onCacheKey&&(c.cacheKey=r.onCacheKey(s)),E.currentType!==13&&a(l,C.UNEXPECTED_LEXICAL_ANALYSIS,E.lastStartLoc,0,s[E.offset]||""),o(c,l.currentOffset(),l.currentPosition()),c}return{parse:_}}function M(r){if(r.type===13)return"EOF";const n=(r.value||"").replace(/\r?\n/gu,"\\n");return n.length>10?n.slice(0,9)+"…":n}function Xe(r,n={}){const u={ast:r,helpers:new Set};return{context:()=>u,helper:o=>(u.helpers.add(o),o)}}function z(r,n){for(let u=0;u<r.length;u++)Q(r[u],n)}function Q(r,n){switch(r.type){case 1:z(r.cases,n),n.helper("plural");break;case 2:z(r.items,n);break;case 6:{Q(r.key,n),n.helper("linked"),n.helper("type");break}case 5:n.helper("interpolate"),n.helper("list");break;case 4:n.helper("interpolate"),n.helper("named");break}}function we(r,n={}){const u=Xe(r);u.helper("normalize"),r.body&&Q(r.body,u);const a=u.context();r.helpers=Array.from(a.helpers)}function Ye(r){const n=r.body;return n.type===2?ee(n):n.cases.forEach(u=>ee(u)),r}function ee(r){if(r.items.length===1){const n=r.items[0];(n.type===3||n.type===9)&&(r.static=n.value,delete n.value)}else{const n=[];for(let u=0;u<r.items.length;u++){const a=r.items[u];if(!(a.type===3||a.type===9)||a.value==null)break;n.push(a.value)}if(n.length===r.items.length){r.static=ne(n);for(let u=0;u<r.items.length;u++){const a=r.items[u];(a.type===3||a.type===9)&&delete a.value}}}}function x(r){switch(r.t=r.type,r.type){case 0:{const n=r;x(n.body),n.b=n.body,delete n.body;break}case 1:{const n=r,u=n.cases;for(let a=0;a<u.length;a++)x(u[a]);n.c=u,delete n.cases;break}case 2:{const n=r,u=n.items;for(let a=0;a<u.length;a++)x(u[a]);n.i=u,delete n.items,n.static&&(n.s=n.static,delete n.static);break}case 3:case 9:case 8:case 7:{const n=r;n.value&&(n.v=n.value,delete n.value);break}case 6:{const n=r;x(n.key),n.k=n.key,delete n.key,n.modifier&&(x(n.modifier),n.m=n.modifier,delete n.modifier);break}case 5:{const n=r;n.i=n.index,delete n.index;break}case 4:{const n=r;n.k=n.key,delete n.key;break}}delete r.type}function $e(r,n){const{sourceMap:u,filename:a,breakLineCode:p,needIndent:o}=n,k=n.location!==!1,h={filename:a,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:p,needIndent:o,indentLevel:0};k&&r.loc&&(h.source=r.loc.source);const T=()=>h;function b(_,s){h.code+=_}function D(_,s=!0){const l=s?p:"";b(o?l+"  ".repeat(_):l)}function I(_=!0){const s=++h.indentLevel;_&&D(s)}function S(_=!0){const s=--h.indentLevel;_&&D(s)}function v(){D(h.indentLevel)}return{context:T,push:b,indent:I,deindent:S,newline:v,helper:_=>`_${_}`,needIndent:()=>h.needIndent}}function ge(r,n){const{helper:u}=r;r.push(`${u("linked")}(`),K(r,n.key),n.modifier?(r.push(", "),K(r,n.modifier),r.push(", _type")):r.push(", undefined, _type"),r.push(")")}function xe(r,n){const{helper:u,needIndent:a}=r;r.push(`${u("normalize")}([`),r.indent(a());const p=n.items.length;for(let o=0;o<p&&(K(r,n.items[o]),o!==p-1);o++)r.push(", ");r.deindent(a()),r.push("])")}function Ke(r,n){const{helper:u,needIndent:a}=r;if(n.cases.length>1){r.push(`${u("plural")}([`),r.indent(a());const p=n.cases.length;for(let o=0;o<p&&(K(r,n.cases[o]),o!==p-1);o++)r.push(", ");r.deindent(a()),r.push("])")}}function He(r,n){n.body?K(r,n.body):r.push("null")}function K(r,n){const{helper:u}=r;switch(n.type){case 0:He(r,n);break;case 1:Ke(r,n);break;case 2:xe(r,n);break;case 6:ge(r,n);break;case 8:r.push(JSON.stringify(n.value),n);break;case 7:r.push(JSON.stringify(n.value),n);break;case 5:r.push(`${u("interpolate")}(${u("list")}(${n.index}))`,n);break;case 4:r.push(`${u("interpolate")}(${u("named")}(${JSON.stringify(n.key)}))`,n);break;case 9:r.push(JSON.stringify(n.value),n);break;case 3:r.push(JSON.stringify(n.value),n);break}}const Ge=(r,n={})=>{const u=j(n.mode)?n.mode:"normal",a=j(n.filename)?n.filename:"message.intl",p=!!n.sourceMap,o=n.breakLineCode!=null?n.breakLineCode:u==="arrow"?";":`
`,k=n.needIndent?n.needIndent:u!=="arrow",h=r.helpers||[],T=$e(r,{mode:u,filename:a,sourceMap:p,breakLineCode:o,needIndent:k});T.push(u==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),T.indent(k),h.length>0&&(T.push(`const { ${ne(h.map(I=>`${I}: _${I}`),", ")} } = ctx`),T.newline()),T.push("return "),K(T,r),T.deindent(k),T.push("}"),delete r.helpers;const{code:b,map:D}=T.context();return{ast:r,code:b,map:D?D.toJSON():void 0}};function Je(r,n={}){const u=te({},n),a=!!u.jit,p=!!u.minify,o=u.optimize==null?!0:u.optimize,h=Me(u).parse(r);return a?(o&&Ye(h),p&&x(h),{ast:h,code:""}):(we(h,u),Ge(h,u))}export{Be as C,Je as b,re as c,Ve as d};const d=typeof window<"u",O=(t,e=!1)=>e?Symbol.for(t):Symbol(t),h=(t,e,n)=>y({l:t,k:e,s:n}),y=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),j=t=>typeof t=="number"&&isFinite(t),w=t=>u(t)==="[object Date]",S=t=>u(t)==="[object RegExp]",m=t=>g(t)&&Object.keys(t).length===0,T=Object.assign;let a;const E=()=>a||(a=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function N(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const b=Object.prototype.hasOwnProperty;function P(t,e){return b.call(t,e)}const f=Array.isArray,l=t=>typeof t=="function",A=t=>typeof t=="string",x=t=>typeof t=="boolean",i=t=>t!==null&&typeof t=="object",D=t=>i(t)&&l(t.then)&&l(t.catch),p=Object.prototype.toString,u=t=>p.call(t),g=t=>{if(!i(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},F=t=>t==null?"":f(t)||g(t)&&t.toString===p?JSON.stringify(t,null,2):String(t);function J(t,e=""){return t.reduce((n,o,c)=>c===0?n+o:n+e+o,"")}function k(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const r=t=>!i(t)||f(t);function q(t,e){if(r(t)||r(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:o,des:c}=n.pop();Object.keys(o).forEach(s=>{r(o[s])||r(c[s])?c[s]=o[s]:n.push({src:o[s],des:c[s]})})}}export{l as a,f as b,g as c,A as d,x as e,T as f,E as g,S as h,i,N as j,j as k,m as l,h as m,w as n,D as o,J as p,O as q,d as r,q as s,F as t,P as u,k as w};import{T as
W}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{S as P,M
as H,A as z,D as q}from"./@pixi_constants@7.4.2.8b356162.js";import{R as O,T as j,c as
$}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_s
ettings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{k as Y,o as
K}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@
2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{C as
L}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";import{G as
J}from"./@pixi_graphics@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__@pix
i_sprit_a3536a87af99d28ff44bd814c835c9e3.87e100c4.js";import{S as
Q}from"./@pixi_sprite@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2_.de6f452
6.js";import"./@pixi_mesh@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2_.a36
f1bab.js";import{S as Z}from"./@pixi_mesh-
extras@7.4.2_@pixi_core@7.4.2_@pixi_mesh@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@
pixi_core@7.4.2__.adea85df.js";var R=(t=>
(t[t.Region=0]="Region",t[t.BoundingBox=1]="BoundingBox",t[t.Mesh=2]="Mesh",t[t.LinkedMesh=3]="
LinkedMesh",t[t.Path=4]="Path",t[t.Point=5]="Point",t[t.Clipping=6]="Clipping",t))(R||{});class
Et{constructor(e,r=new Array,i=0,s=new DataView(e.buffer))
{this.strings=r,this.index=i,this.buffer=s}readByte(){return
this.buffer.getInt8(this.index++)}readUnsignedByte(){return
this.buffer.getUint8(this.index++)}readShort(){const e=this.buffer.getInt16(this.index);return
this.index+=2,e}readInt32(){const e=this.buffer.getInt32(this.index);return this.index+=4,e}readInt(e)
{let r=this.readByte(),i=r&127;return r&128&&(r=this.readByte(),i|=(r&127)<<7,r&128&&
(r=this.readByte(),i|=(r&127)<<14,r&128&&(r=this.readByte(),i|=(r&127)<<21,r&128&&
(r=this.readByte(),i|=(r&127)<<28)))),e?i:i>>>1^-(i&1)}readStringRef(){const e=this.readInt(!0);return
e==0?null:this.strings[e-1]}readString(){let e=this.readInt(!0);switch(e){case 0:return null;case
1:return""}e--;let r="";for(let i=0;i<e;){const s=this.readUnsignedByte();switch(s>>4){case 12:case
13:r+=String.fromCharCode((s&31)<<6|this.readByte()&63),i+=2;break;case
14:r+=String.fromCharCode((s&15)<<12|(this.readByte()&63)
<<6|this.readByte()&63),i+=3;break;default:r+=String.fromCharCode(s),i++}}return r}readFloat(){const
e=this.buffer.getFloat32(this.index);return this.index+=4,e}readBoolean(){return
this.readByte()!=0}}var tt=(t=>
(t[t.setup=0]="setup",t[t.first=1]="first",t[t.replace=2]="replace",t[t.add=3]="add",t))(tt||{}),et=(t=>
(t[t.mixIn=0]="mixIn",t[t.mixOut=1]="mixOut",t))(et||{}),rt=(t=>
(t[t.Fixed=0]="Fixed",t[t.Percent=1]="Percent",t))(rt||{}),it=(t=>
(t[t.Tangent=0]="Tangent",t[t.Chain=1]="Chain",t[t.ChainScale=2]="ChainScale",t))(it||{}),st=(t=>
(t[t.Normal=0]="Normal",t[t.OnlyTranslation=1]="OnlyTranslation",t[t.NoRotationOrReflection=2]="NoR
otationOrReflection",t[t.NoScale=3]="NoScale",t[t.NoScaleOrReflection=4]="NoScaleOrReflection",t))
(st||{});function D(t){switch(t.toLowerCase()){case"nearest":return I.Nearest;case"linear":return
I.Linear;case"mipmap":return I.MipMap;case"mipmapnearestnearest":return
I.MipMapNearestNearest;case"mipmaplinearnearest":return
I.MipMapLinearNearest;case"mipmapnearestlinear":return
I.MipMapNearestLinear;case"mipmaplinearlinear":return I.MipMapLinearLinear;default:throw new
Error(`Unknown texture filter ${t}`)}}var I=(t=>
(t[t.Nearest=9728]="Nearest",t[t.Linear=9729]="Linear",t[t.MipMap=9987]="MipMap",t[t.MipMapNeare
stNearest=9984]="MipMapNearestNearest",t[t.MipMapLinearNearest=9985]="MipMapLinearNearest",t[t.MipMapNearestLinear=9986]="MipMapNearestLinear",t[t.MipMapLinearLinear=9987]="MipMapLin
earLinear",t))(I||{}),A=(t=>
(t[t.MirroredRepeat=33648]="MirroredRepeat",t[t.ClampToEdge=33071]="ClampToEdge",t[t.Repeat=1
0497]="Repeat",t))(A||{});class v{constructor()
{this.size=null,this.names=null,this.values=null,this.renderObject=null}get width(){const
e=this.texture;return e.trim?e.trim.width:e.orig.width}get height(){const e=this.texture;return e.trim?
e.trim.height:e.orig.height}get u(){return this.texture._uvs.x0}get v(){return this.texture._uvs.y0}get
u2(){return this.texture._uvs.x2}get v2(){return this.texture._uvs.y2}get offsetX(){const
e=this.texture;return e.trim?e.trim.x:0}get offsetY(){return this.spineOffsetY}get pixiOffsetY(){const
e=this.texture;return e.trim?e.trim.y:0}get spineOffsetY(){const e=this.texture;return
this.originalHeight-this.height-(e.trim?e.trim.y:0)}get originalWidth(){return this.texture.orig.width}get
originalHeight(){return this.texture.orig.height}get x(){return this.texture.frame.x}get y(){return
this.texture.frame.y}get rotate(){return this.texture.rotate!==0}get degrees(){return(360-
this.texture.rotate*45)%360}}class nt{constructor()
{this.x=0,this.y=0,this.width=0,this.height=0,this.offsetX=0,this.offsetY=0,this.originalWidth=0,this.origi
nalHeight=0,this.rotate=0,this.index=0}}class _t{constructor(e,r,i){this.pages=new
Array,this.regions=new Array,e&&this.addSpineAtlas(e,r,i)}addTexture(e,r){const i=this.pages;let
s=null;for(let o=0;o<i.length;o++)if(i[o].baseTexture===r.baseTexture){s=i[o];break}if(s===null){s=new
X,s.name="texturePage";const
o=r.baseTexture;s.width=o.realWidth,s.height=o.realHeight,s.baseTexture=o,s.minFilter=s.magFilter=I
.Nearest,s.uWrap=A.ClampToEdge,s.vWrap=A.ClampToEdge,i.push(s)}const a=new F;return
a.name=e,a.page=s,a.texture=r,a.index=-1,this.regions.push(a),a}addTextureHash(e,r){for(const i in
e)e.hasOwnProperty(i)&&this.addTexture(r&&i.indexOf(".")!==-1?
i.substr(0,i.lastIndexOf(".")):i,e[i])}addSpineAtlas(e,r,i){return this.load(e,r,i)}load(e,r,i){if(r==null)throw
new Error("textureLoader cannot be null.");const s=new at(e),a=new Array(4);let o=null;const c={};let
l=null;c.size=()=>{o.width=parseInt(a[1]),o.height=parseInt(a[2])},c.format=()=>{},c.filter=()=>
{o.minFilter=D(a[1]),o.magFilter=D(a[2])},c.repeat=()=>{a[1].indexOf("x")!=-1&&
(o.uWrap=A.Repeat),a[1].indexOf("y")!=-1&&(o.vWrap=A.Repeat)},c.pma=()=>
{o.pma=a[1]=="true"};const g={};g.xy=()=>{l.x=parseInt(a[1]),l.y=parseInt(a[2])},g.size=()=>
{l.width=parseInt(a[1]),l.height=parseInt(a[2])},g.bounds=()=>
{l.x=parseInt(a[1]),l.y=parseInt(a[2]),l.width=parseInt(a[3]),l.height=parseInt(a[4])},g.offset=()=>
{l.offsetX=parseInt(a[1]),l.offsetY=parseInt(a[2])},g.orig=()=>
{l.originalWidth=parseInt(a[1]),l.originalHeight=parseInt(a[2])},g.offsets=()=>
{l.offsetX=parseInt(a[1]),l.offsetY=parseInt(a[2]),l.originalWidth=parseInt(a[3]),l.originalHeight=parseIn
t(a[4])},g.rotate=()=>{const n=a[1];let u=0;n.toLocaleLowerCase()=="true"?
u=6:n.toLocaleLowerCase()=="false"?u=0:u=(720-parseFloat(n))%360/45,l.rotate=u},g.index=()=>
{l.index=parseInt(a[1])};let h=s.readLine();for(;h!=null&&h.trim().length==0;)h=s.readLine();for(;!
(h==null||h.trim().length==0||s.readEntry(a,h)==0);)h=s.readLine();const d=()=>{for(;;){if(h==null)return
i&&i(this);if(h.trim().length==0)o=null,h=s.readLine();else if(o===null){for(o=new
X,o.name=h.trim();s.readEntry(a,h=s.readLine())!=0;){const
n=c[a[0]];n&&n()}this.pages.push(o),r(o.name,n=>{if(n===null)return
this.pages.splice(this.pages.indexOf(o),1),i&&i(null);o.baseTexture=n,o.pma&&
(n.alphaMode=z.PMA),n.valid||n.setSize(o.width,o.height),o.setFilters(),(!o.width||!o.height)&&
(o.width=n.realWidth,o.height=n.realHeight,(!o.width||!o.height)&&`${o.name}`),d()});break}else{l=new
nt;const n=new F;n.name=h,n.page=o;let u=null,f=null;for(;;){const
p=s.readEntry(a,h=s.readLine());if(p==0)break;const b=g[a[0]];if(b)b();else{u==null&&(u=[],f=[]),u.push(a[0]);const B=[];for(let
T=0;T<p;T++)B.push(parseInt(a[T+1]));f.push(B)}}l.originalWidth==0&&l.originalHeight==0&&
(l.originalWidth=l.width,l.originalHeight=l.height);const
m=o.baseTexture.resolution;l.x/=m,l.y/=m,l.width/=m,l.height/=m,l.originalWidth/=m,l.originalHeight/=
m,l.offsetX/=m,l.offsetY/=m;const x=l.rotate%4!==0,w=new O(l.x,l.y,x?l.height:l.width,x?
l.width:l.height),y=new O(0,0,l.originalWidth,l.originalHeight),S=new O(l.offsetX,l.originalHeight-
l.height-l.offsetY,l.width,l.height);n.texture=new
W(n.page.baseTexture,w,y,S,l.rotate),n.index=l.index,n.texture.updateUvs(),this.regions.push(n)}}};d()
}findRegion(e){for(let r=0;r<this.regions.length;r++)if(this.regions[r].name==e)return
this.regions[r];return null}dispose(){for(let
e=0;e<this.pages.length;e++)this.pages[e].baseTexture.dispose()}}class at{constructor(e)
{this.index=0,this.lines=e.split(/\r\n|\r|\n/)}readLine(){return this.index>=this.lines.length?
null:this.lines[this.index++]}readEntry(e,r){if(r==null||(r=r.trim(),r.length==0))return 0;const
i=r.indexOf(":");if(i==-1)return 0;e[0]=r.substr(0,i).trim();for(let s=1,a=i+1;;s++){const
o=r.indexOf(",",a);if(o==-1)return e[s]=r.substr(a).trim(),s;if(e[s]=r.substr(a,o-
a).trim(),a=o+1,s==4)return 4}}}class X{constructor()
{this.minFilter=I.Nearest,this.magFilter=I.Nearest,this.uWrap=A.ClampToEdge,this.vWrap=A.ClampTo
Edge}setFilters(){const e=this.baseTexture,r=this.minFilter;r==I.Linear?
e.scaleMode=P.LINEAR:this.minFilter==I.Nearest?e.scaleMode=P.NEAREST:
(e.mipmap=H.POW2,r==I.MipMapNearestNearest?
e.scaleMode=P.NEAREST:e.scaleMode=P.LINEAR)}}class F extends v{}class Pt{constructor()
{this.array=new Array}add(e){const r=this.contains(e);return this.array[e|0]=e|0,!r}contains(e){return
this.array[e|0]!=null}remove(e){this.array[e|0]=void 0}clear(){this.array.length=0}}class Lt{constructor()
{this.entries={},this.size=0}add(e){const r=this.entries[e];return this.entries[e]=!0,r?!1:
(this.size++,!0)}addAll(e){const r=this.size;for(let i=0,s=e.length;i<s;i++)this.add(e[i]);return
r!=this.size}contains(e){return this.entries[e]}clear(){this.entries={},this.size=0}}const
N=class{constructor(t=0,e=0,r=0,i=0){this.r=t,this.g=e,this.b=r,this.a=i}set(t,e,r,i){return
this.r=t,this.g=e,this.b=r,this.a=i,this.clamp()}setFromColor(t){return
this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this}setFromString(t){return t=t.charAt(0)=="#"?
t.substr(1):t,this.r=parseInt(t.substr(0,2),16)/255,this.g=parseInt(t.substr(2,2),16)/255,this.b=parseInt(t.
substr(4,2),16)/255,this.a=t.length!=8?1:parseInt(t.substr(6,2),16)/255,this}add(t,e,r,i){return
this.r+=t,this.g+=e,this.b+=r,this.a+=i,this.clamp()}clamp(){return this.r<0?this.r=0:this.r>1&&
(this.r=1),this.g<0?this.g=0:this.g>1&&(this.g=1),this.b<0?this.b=0:this.b>1&&(this.b=1),this.a<0?
this.a=0:this.a>1&&(this.a=1),this}static rgba8888ToColor(t,e){t.r=((e&4278190080)>>>24)/255,t.g=
((e&16711680)>>>16)/255,t.b=((e&65280)>>>8)/255,t.a=(e&255)/255}static rgb888ToColor(t,e){t.r=
((e&16711680)>>>16)/255,t.g=((e&65280)>>>8)/255,t.b=(e&255)/255}static fromString(t){return new
N().setFromString(t)}};let _=N;_.WHITE=new N(1,1,1,1);_.RED=new N(1,0,0,1);_.GREEN=new
N(0,1,0,1);_.BLUE=new N(0,0,1,1);_.MAGENTA=new N(1,0,1,1);const M=class{static clamp(t,e,r)
{return t<e?e:t>r?r:t}static cosDeg(t){return Math.cos(t*M.degRad)}static sinDeg(t){return
Math.sin(t*M.degRad)}static signum(t){return Math.sign(t)}static toInt(t){return t>0?
Math.floor(t):Math.ceil(t)}static cbrt(t){const e=Math.pow(Math.abs(t),.3333333333333333);return t<0?
-e:e}static randomTriangular(t,e){return M.randomTriangularWith(t,e,(t+e)*.5)}static
randomTriangularWith(t,e,r){const i=Math.random(),s=e-t;return i<=(r-t)/s?t+Math.sqrt(i*s*(r-t)):e-
Math.sqrt((1-i)*s*(e-r))}static isPowerOfTwo(t){return t&&(t&t-1)===0}};let
k=M;k.PI=3.1415927;k.PI2=M.PI*2;k.radiansToDegrees=180/M.PI;k.radDeg=M.radiansToDegrees;k.d
egreesToRadians=M.PI/180;k.degRad=M.degreesToRadians;class ot{apply(e,r,i){return e+(re)*this.applyInternal(i)}}class lt extends ot{constructor(e)
{super(),this.power=2,this.power=e}applyInternal(e){return e<=.5?
Math.pow(e*2,this.power)/2:Math.pow((e-1)*2,this.power)/(this.power%2==0?-2:2)+1}}class Tt
extends lt{applyInternal(e){return Math.pow(e-1,this.power)*(this.power%2==0?-1:1)+1}}const
E=class{static arrayCopy(t,e,r,i,s){for(let a=e,o=i;a<e+s;a++,o++)r[o]=t[a]}static arrayFill(t,e,r,i){for(let
s=e;s<r;s++)t[s]=i}static setArraySize(t,e,r=0){const i=t.length;if(i==e)return t;if(t.length=e,i<e)for(let
s=i;s<e;s++)t[s]=r;return t}static ensureArrayCapacity(t,e,r=0){return t.length>=e?
t:E.setArraySize(t,e,r)}static newArray(t,e){const r=new Array(t);for(let i=0;i<t;i++)r[i]=e;return r}static
newFloatArray(t){if(E.SUPPORTS_TYPED_ARRAYS)return new Float32Array(t);const e=new
Array(t);for(let r=0;r<e.length;r++)e[r]=0;return e}static newShortArray(t)
{if(E.SUPPORTS_TYPED_ARRAYS)return new Int16Array(t);const e=new Array(t);for(let
r=0;r<e.length;r++)e[r]=0;return e}static toFloatArray(t){return E.SUPPORTS_TYPED_ARRAYS?new
Float32Array(t):t}static toSinglePrecision(t){return E.SUPPORTS_TYPED_ARRAYS?
Math.fround(t):t}static webkit602BugfixHelper(t,e){}static contains(t,e,r=!0){for(let
i=0;i<t.length;i++)if(t[i]==e)return!0;return!1}static enumValue(t,e){return
t[e[0].toUpperCase()+e.slice(1)]}};let U=E;U.SUPPORTS_TYPED_ARRAYS=typeof
Float32Array<"u";class ht{constructor(e){this.items=new Array,this.instantiator=e}obtain(){return
this.items.length>0?this.items.pop():this.instantiator()}free(e)
{e.reset&&e.reset(),this.items.push(e)}freeAll(e){for(let r=0;r<e.length;r++)this.free(e[r])}clear()
{this.items.length=0}}class Ot{constructor(e=0,r=0){this.x=e,this.y=r}set(e,r){return
this.x=e,this.y=r,this}length(){const e=this.x,r=this.y;return Math.sqrt(e*e+r*r)}normalize(){const
e=this.length();return e!=0&&(this.x/=e,this.y/=e),this}}class Yt{constructor()
{this.minX=0,this.minY=0,this.maxX=0,this.maxY=0,this.boundingBoxes=new
Array,this.polygons=new Array,this.polygonPool=new ht(()=>U.newFloatArray(16))}update(e,r)
{if(!e)throw new Error("skeleton cannot be null.");const
i=this.boundingBoxes,s=this.polygons,a=this.polygonPool,o=e.slots,c=o.length;i.length=0,a.freeAll(s),
s.length=0;for(let l=0;l<c;l++){const g=o[l];if(!g.bone.active)continue;const
h=g.getAttachment();if(h!=null&&h.type===R.BoundingBox){const d=h;i.push(d);let
n=a.obtain();n.length!=d.worldVerticesLength&&
(n=U.newFloatArray(d.worldVerticesLength)),s.push(n),d.computeWorldVertices(g,0,d.worldVerticesL
ength,n,0,2)}}r?this.aabbCompute():
(this.minX=Number.POSITIVE_INFINITY,this.minY=Number.POSITIVE_INFINITY,this.maxX=Number
.NEGATIVE_INFINITY,this.maxY=Number.NEGATIVE_INFINITY)}aabbCompute(){let
e=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=N
umber.NEGATIVE_INFINITY;const a=this.polygons;for(let o=0,c=a.length;o<c;o++){const
l=a[o],g=l;for(let h=0,d=l.length;h<d;h+=2){const
n=g[h],u=g[h+1];e=Math.min(e,n),r=Math.min(r,u),i=Math.max(i,n),s=Math.max(s,u)}}this.minX=e,this.
minY=r,this.maxX=i,this.maxY=s}aabbContainsPoint(e,r){return
e>=this.minX&&e<=this.maxX&&r>=this.minY&&r<=this.maxY}aabbIntersectsSegment(e,r,i,s){const
a=this.minX,o=this.minY,c=this.maxX,l=this.maxY;if(e<=a&&i<=a||r<=o&&s<=o||e>=c&&i>=c||r>=l&&s
>=l)return!1;const g=(s-r)/(i-e);let h=g*(a-e)+r;if(h>o&&h<l||(h=g*(c-e)+r,h>o&&h<l))return!0;let d=(o-
r)/g+e;return d>a&&d<c||(d=(l-r)/g+e,d>a&&d<c)}aabbIntersectsSkeleton(e){return
this.minX<e.maxX&&this.maxX>e.minX&&this.minY<e.maxY&&this.maxY>e.minY}containsPoint(e,r)
{const i=this.polygons;for(let s=0,a=i.length;s<a;s++)if(this.containsPointPolygon(i[s],e,r))return
this.boundingBoxes[s];return null}containsPointPolygon(e,r,i){const s=e,a=e.length;let o=a-
2,c=!1;for(let l=0;l<a;l+=2){const g=s[l+1],h=s[o+1];if(g<i&&h>=i||h<i&&g>=i){const d=s[l];d+(i-g)/(h-g)*(s[o]-d)<r&&(c=!c)}o=l}return c}intersectsSegment(e,r,i,s){const a=this.polygons;for(let
o=0,c=a.length;o<c;o++)if(this.intersectsSegmentPolygon(a[o],e,r,i,s))return
this.boundingBoxes[o];return null}intersectsSegmentPolygon(e,r,i,s,a){const o=e,c=e.length,l=r-s,g=i-
a,h=r*a-i*s;let d=o[c-2],n=o[c-1];for(let u=0;u<c;u+=2){const f=o[u],m=o[u+1],x=d*m-n*f,w=d-f,y=n-
m,S=l*y-g*w,p=(h*w-l*x)/S;if((p>=d&&p<=f||p>=f&&p<=d)&&(p>=r&&p<=s||p>=s&&p<=r)){const b=
(h*y-g*x)/S;if((b>=n&&b<=m||b>=m&&b<=n)&&
(b>=i&&b<=a||b>=a&&b<=i))return!0}d=f,n=m}return!1}getPolygon(e){if(!e)throw new
Error("boundingBox cannot be null.");const r=this.boundingBoxes.indexOf(e);return r==-1?
null:this.polygons[r]}getWidth(){return this.maxX-this.minX}getHeight(){return this.maxY-
this.minY}}const ut=
{yDown:!0,FAIL_ON_NON_EXISTING_SKIN:!1,GLOBAL_AUTO_UPDATE:!0,GLOBAL_DELAY_LIMI
T:0,REPORT_TEXTURE_LOADER_ERROR:!0},C=[0,0,0];class ct extends Q{constructor()
{super(...arguments),this.region=null,this.attachment=null}}class gt extends Z{constructor(e,r,i,s,a)
{super(e,r,i,s,a),this.region=null,this.attachment=null}}const G=class extends L{constructor(t)
{if(super(),!t)throw new Error("The spineData param is required.");if(typeof t=="string")throw new
Error('spineData param cant be string. Please use
spine.Spine.fromAtlas("YOUR_RESOURCE_NAME") from now
on.');this.spineData=t,this.createSkeleton(t),this.slotContainers=[],this.tempClipContainers=[];for(let
e=0,r=this.skeleton.slots.length;e<r;e++){const
i=this.skeleton.slots[e],s=i.getAttachment(),a=this.newContainer();if(this.slotContainers.push(a),this.a
ddChild(a),this.tempClipContainers.push(null),!!s)if(s.type===R.Region){const
o=s.name,c=this.createSprite(i,s,o);i.currentSprite=c,i.currentSpriteName=o,a.addChild(c)}else
if(s.type===R.Mesh){const
o=this.createMesh(i,s);i.currentMesh=o,i.currentMeshId=s.id,i.currentMeshName=s.name,a.addChild(
o)}else s.type===R.Clipping&&
(this.createGraphics(i,s),a.addChild(i.clippingContainer),a.addChild(i.currentGraphics))}this.tintRgb=n
ew Float32Array([1,1,1]),this.autoUpdate=!0,this.visible=!0}get debug(){return this._debug}set
debug(t){var e;t!=this._debug&&
((e=this._debug)==null||e.unregisterSpine(this),t==null||t.registerSpine(this),this._debug=t)}get
autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&
(this._autoUpdate=t,this.updateTransform=t?
G.prototype.autoUpdateTransform:L.prototype.updateTransform)}get tint(){return Y(this.tintRgb)}set
tint(t){this.tintRgb=K(t,this.tintRgb)}get delayLimit(){return(typeof this.localDelayLimit<"u"?
this.localDelayLimit:ut.GLOBAL_DELAY_LIMIT)||Number.MAX_VALUE}update(t){var g;const
e=this.delayLimit;if(t>e&&
(t=e),this.state.update(t),this.state.apply(this.skeleton),!this.skeleton)return;this.skeleton.updateWorld
Transform();const r=this.skeleton.slots,i=this.color;let s=null,a=null;i?
(s=i.light,a=i.dark):s=this.tintRgb;for(let h=0,d=r.length;h<d;h++){const
n=r[h],u=n.getAttachment(),f=this.slotContainers[h];if(!u){f.visible=!1;continue}let
m=null;u.sequence&&u.sequence.apply(n,u);let x=u.region;const w=u.color;switch(u!=null&&u.type)
{case R.Region:if(f.transform.setFromMatrix(n.bone.matrix),x=u.region,n.currentMesh&&
(n.currentMesh.visible=!1,n.currentMesh=null,n.currentMeshId=void 0,n.currentMeshName=void
0),!x){n.currentSprite&&
(n.currentSprite.renderable=!1);break}if(!n.currentSpriteName||n.currentSpriteName!==u.name){const
p=u.name;if(n.currentSprite&&(n.currentSprite.visible=!1),n.sprites=n.sprites||{},n.sprites[p]!==void
0)n.sprites[p].visible=!0;else{constb=this.createSprite(n,u,p);f.addChild(b)}n.currentSprite=n.sprites[p],n.currentSpriteName=p}n.current
Sprite.renderable=!0,n.hackRegion||this.setSpriteRegion(u,n.currentSprite,x),n.currentSprite.color?
m=n.currentSprite.color:
(C[0]=s[0]*n.color.r*w.r,C[1]=s[1]*n.color.g*w.g,C[2]=s[2]*n.color.b*w.b,n.currentSprite.tint=Y(C)),n.curr
entSprite.blendMode=n.blendMode;break;case R.Mesh:if(n.currentSprite)
{n.currentSprite.visible=!1,n.currentSprite=null,n.currentSpriteName=void 0;const p=new
j;p._parentID=-1,p._worldID=f.transform._worldID,f.transform=p}if(!x){n.currentMesh&&
(n.currentMesh.renderable=!1);break}const S=u.id;if(n.currentMeshId===void
0||n.currentMeshId!==S){const p=S;if(n.currentMesh&&
(n.currentMesh.visible=!1),n.meshes=n.meshes||{},n.meshes[p]!==void
0)n.meshes[p].visible=!0;else{const
b=this.createMesh(n,u);f.addChild(b)}n.currentMesh=n.meshes[p],n.currentMeshName=u.name,n.cur
rentMeshId=p}n.currentMesh.renderable=!0,u.computeWorldVerticesOld(n,n.currentMesh.vertices),n.
currentMesh.color?m=n.currentMesh.color:
(C[0]=s[0]*n.color.r*w.r,C[1]=s[1]*n.color.g*w.g,C[2]=s[2]*n.color.b*w.b,n.currentMesh.tint=Y(Cfrom"./
@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{S as P,M as H,A as
z,D as q}from"./@pixi_constants@7.4.2.8b356162.js";import{R as O,T as j,c as
$}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_s
ettings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{k as Y,o as
K}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@
2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{C as
L}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";import{G as
J}from"./@pixi_graphics@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__@pix
i_sprit_a3536a87af99d28ff44bd814c835c9e3.87e100c4.js";import{S as
Q}from"./@pixi_sprite@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2_.de6f452
6.js";import"./@pixi_mesh@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2_.a36
f1bab.js";import{S as Z}from"./@pixi_mesh-
extras@7.4.2_@pixi_core@7.4.2_@pixi_mesh@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@
pixi_core@7.4.2__.adea85df.js";var R=(t=>
(t[t.Region=0]="Region",t[t.BoundingBox=1]="BoundingBox",t[t.Mesh=2]="Mesh",t[t.LinkedMesh=3]="
LinkedMesh",t[t.Path=4]="Path",t[t.Point=5]="Point",t[t.Clipping=6]="Clipping",t))(R||{});class
Et{constructor(e,r=new Array,i=0,s=new DataView(e.buffer))
{this.strings=r,this.index=i,this.buffer=s}readByte(){return
this.buffer.getInt8(this.index++)}readUnsignedByte(){return
this.buffer.getUint8(this.index++)}readShort(){const e=this.buffer.getInt16(this.index);return
this.index+=2,e}readInt32(){const e=this.buffer.getInt32(this.index);return this.index+=4,e}readInt(e)
{let r=this.readByte(),i=r&127;return r&128&&(r=this.readByte(),i|=(r&127)<<7,r&128&&
(r=this.readByte(),i|=(r&127)<<14,r&128&&(r=this.readByte(),i|=(r&127)<<21,r&128&&
(r=this.readByte(),i|=(r&127)<<28)))),e?i:i>>>1^-(i&1)}readStringRef(){const e=this.readInt(!0);return
e==0?null:this.strings[e-1]}readString(){let e=this.readInt(!0);switch(e){case 0:return null;case
1:return""}e--;let r="";for(let i=0;i<e;){const s=this.readUnsignedByte();switch(s>>4){case 12:case
13:r+=String.fromCharCode((s&31)<<6|this.readByte()&63),i+=2;break;case
14:r+=String.fromCharCode((s&15)<<12|(this.readByte()&63)
<<6|this.readByte()&63),i+=3;break;default:r+=String.fromCharCode(s),i++}}return r}readFloat(){const
e=this.buffer.getFloat32(this.index);return this.index+=4,e}readBoolean(){return
this.readByte()!=0}}var tt=(t=>(t[t.setup=0]="setup",t[t.first=1]="first",t[t.replace=2]="replace",t[t.add=3]="add",t))(tt||{}),et=(t=>
(t[t.mixIn=0]="mixIn",t[t.mixOut=1]="mixOut",t))(et||{}),rt=(t=>
(t[t.Fixed=0]="Fixed",t[t.Percent=1]="Percent",t))(rt||{}),it=(t=>
(t[t.Tangent=0]="Tangent",t[t.Chain=1]="Chain",t[t.ChainScale=2]="ChainScale",t))(it||{}),st=(t=>
(t[t.Normal=0]="Normal",t[t.OnlyTranslation=1]="OnlyTranslation",t[t.NoRotationOrReflection=2]="NoR
otationOrReflection",t[t.NoScale=3]="NoScale",t[t.NoScaleOrReflection=4]="NoScaleOrReflection",t))
(st||{});function D(t){switch(t.toLowerCase()){case"nearest":return I.Nearest;case"linear":return
I.Linear;case"mipmap":return I.MipMap;case"mipmapnearestnearest":return
I.MipMapNearestNearest;case"mipmaplinearnearest":return
I.MipMapLinearNearest;case"mipmapnearestlinear":return
I.MipMapNearestLinear;case"mipmaplinearlinear":return I.MipMapLinearLinear;default:throw new
Error(`Unknown texture filter ${t}`)}}var I=(t=>
(t[t.Nearest=9728]="Nearest",t[t.Linear=9729]="Linear",t[t.MipMap=9987]="MipMap",t[t.MipMapNeare
stNearest=9984]="MipMapNearestNearest",t[t.MipMapLinearNearest=9985]="MipMapLinearNearest",
t[t.MipMapNearestLinear=9986]="MipMapNearestLinear",t[t.MipMapLinearLinear=9987]="MipMapLin
earLinear",t))(I||{}),A=(t=>
(t[t.MirroredRepeat=33648]="MirroredRepeat",t[t.ClampToEdge=33071]="ClampToEdge",t[t.Repeat=1
0497]="Repeat",t))(A||{});class v{constructor()
{this.size=null,this.names=null,this.values=null,this.renderObject=null}get width(){const
e=this.texture;return e.trim?e.trim.width:e.orig.width}get height(){const e=this.texture;return e.trim?
e.trim.height:e.orig.height}get u(){return this.texture._uvs.x0}get v(){return this.texture._uvs.y0}get
u2(){return this.texture._uvs.x2}get v2(){return this.texture._uvs.y2}get offsetX(){const
e=this.texture;return e.trim?e.trim.x:0}get offsetY(){return this.spineOffsetY}get pixiOffsetY(){const
e=this.texture;return e.trim?e.trim.y:0}get spineOffsetY(){const e=this.texture;return
this.originalHeight-this.height-(e.trim?e.trim.y:0)}get originalWidth(){return this.texture.orig.width}get
originalHeight(){return this.texture.orig.height}get x(){return this.texture.frame.x}get y(){return
this.texture.frame.y}get rotate(){return this.texture.rotate!==0}get degrees(){return(360-
this.texture.rotate*45)%360}}class nt{constructor()
{this.x=0,this.y=0,this.width=0,this.height=0,this.offsetX=0,this.offsetY=0,this.originalWidth=0,this.origi
nalHeight=0,this.rotate=0,this.index=0}}class _t{constructor(e,r,i){this.pages=new
Array,this.regions=new Array,e&&this.addSpineAtlas(e,r,i)}addTexture(e,r){const i=this.pages;let
s=null;for(let o=0;o<i.length;o++)if(i[o].baseTexture===r.baseTexture){s=i[o];break}if(s===null){s=new
X,s.name="texturePage";const
o=r.baseTexture;s.width=o.realWidth,s.height=o.realHeight,s.baseTexture=o,s.minFilter=s.magFilter=I
.Nearest,s.uWrap=A.ClampToEdge,s.vWrap=A.ClampToEdge,i.push(s)}const a=new F;return
a.name=e,a.page=s,a.texture=r,a.index=-1,this.regions.push(a),a}addTextureHash(e,r){for(const i in
e)e.hasOwnProperty(i)&&this.addTexture(r&&i.indexOf(".")!==-1?
i.substr(0,i.lastIndexOf(".")):i,e[i])}addSpineAtlas(e,r,i){return this.load(e,r,i)}load(e,r,i){if(r==null)throw
new Error("textureLoader cannot be null.");const s=new at(e),a=new Array(4);let o=null;const c={};let
l=null;c.size=()=>{o.width=parseInt(a[1]),o.height=parseInt(a[2])},c.format=()=>{},c.filter=()=>
{o.minFilter=D(a[1]),o.magFilter=D(a[2])},c.repeat=()=>{a[1].indexOf("x")!=-1&&
(o.uWrap=A.Repeat),a[1].indexOf("y")!=-1&&(o.vWrap=A.Repeat)},c.pma=()=>
{o.pma=a[1]=="true"};const g={};g.xy=()=>{l.x=parseInt(a[1]),l.y=parseInt(a[2])},g.size=()=>
{l.width=parseInt(a[1]),l.height=parseInt(a[2])},g.bounds=()=>
{l.x=parseInt(a[1]),l.y=parseInt(a[2]),l.width=parseInt(a[3]),l.height=parseInt(a[4])},g.offset=()=>
{l.offsetX=parseInt(a[1]),l.offsetY=parseInt(a[2])},g.orig=()=>{l.originalWidth=parseInt(a[1]),l.originalHeight=parseInt(a[2])},g.offsets=()=>
{l.offsetX=parseInt(a[1]),l.offsetY=parseInt(a[2]),l.originalWidth=parseInt(a[3]),l.originalHeight=parseIn
t(a[4])},g.rotate=()=>{const n=a[1];let u=0;n.toLocaleLowerCase()=="true"?
u=6:n.toLocaleLowerCase()=="false"?u=0:u=(720-parseFloat(n))%360/45,l.rotate=u},g.index=()=>
{l.index=parseInt(a[1])};let h=s.readLine();for(;h!=null&&h.trim().length==0;)h=s.readLine();for(;!
(h==null||h.trim().length==0||s.readEntry(a,h)==0);)h=s.readLine();const d=()=>{for(;;){if(h==null)return
i&&i(this);if(h.trim().length==0)o=null,h=s.readLine();else if(o===null){for(o=new
X,o.name=h.trim();s.readEntry(a,h=s.readLine())!=0;){const
n=c[a[0]];n&&n()}this.pages.push(o),r(o.name,n=>{if(n===null)return
this.pages.splice(this.pages.indexOf(o),1),i&&i(null);o.baseTexture=n,o.pma&&
(n.alphaMode=z.PMA),n.valid||n.setSize(o.width,o.height),o.setFilters(),(!o.width||!o.height)&&
(o.width=n.realWidth,o.height=n.realHeight,(!o.width||!o.height)&&`${o.name}`),d()});break}else{l=new
nt;const n=new F;n.name=h,n.page=o;let u=null,f=null;for(;;){const
p=s.readEntry(a,h=s.readLine());if(p==0)break;const b=g[a[0]];if(b)b();else{u==null&&(u=[],f=
[]),u.push(a[0]);const B=[];for(let
T=0;T<p;T++)B.push(parseInt(a[T+1]));f.push(B)}}l.originalWidth==0&&l.originalHeight==0&&
(l.originalWidth=l.width,l.originalHeight=l.height);const
m=o.baseTexture.resolution;l.x/=m,l.y/=m,l.width/=m,l.height/=m,l.originalWidth/=m,l.originalHeight/=
m,l.offsetX/=m,l.offsetY/=m;const x=l.rotate%4!==0,w=new O(l.x,l.y,x?l.height:l.width,x?
l.width:l.height),y=new O(0,0,l.originalWidth,l.originalHeight),S=new O(l.offsetX,l.originalHeight-
l.height-l.offsetY,l.width,l.height);n.texture=new
W(n.page.baseTexture,w,y,S,l.rotate),n.index=l.index,n.texture.updateUvs(),this.regions.push(n)}}};d()
}findRegion(e){for(let r=0;r<this.regions.length;r++)if(this.regions[r].name==e)return
this.regions[r];return null}dispose(){for(let
e=0;e<this.pages.length;e++)this.pages[e].baseTexture.dispose()}}class at{constructor(e)
{this.index=0,this.lines=e.split(/\r\n|\r|\n/)}readLine(){return this.index>=this.lines.length?
null:this.lines[this.index++]}readEntry(e,r){if(r==null||(r=r.trim(),r.length==0))return 0;const
i=r.indexOf(":");if(i==-1)return 0;e[0]=r.substr(0,i).trim();for(let s=1,a=i+1;;s++){const
o=r.indexOf(",",a);if(o==-1)return e[s]=r.substr(a).trim(),s;if(e[s]=r.substr(a,o-
a).trim(),a=o+1,s==4)return 4}}}class X{constructor()
{this.minFilter=I.Nearest,this.magFilter=I.Nearest,this.uWrap=A.ClampToEdge,this.vWrap=A.ClampTo
Edge}setFilters(){const e=this.baseTexture,r=this.minFilter;r==I.Linear?
e.scaleMode=P.LINEAR:this.minFilter==I.Nearest?e.scaleMode=P.NEAREST:
(e.mipmap=H.POW2,r==I.MipMapNearestNearest?
e.scaleMode=P.NEAREST:e.scaleMode=P.LINEAR)}}class F extends v{}class Pt{constructor()
{this.array=new Array}add(e){const r=this.contains(e);return this.array[e|0]=e|0,!r}contains(e){return
this.array[e|0]!=null}remove(e){this.array[e|0]=void 0}clear(){this.array.length=0}}class Lt{constructor()
{this.entries={},this.size=0}add(e){const r=this.entries[e];return this.entries[e]=!0,r?!1:
(this.size++,!0)}addAll(e){const r=this.size;for(let i=0,s=e.length;i<s;i++)this.add(e[i]);return
r!=this.size}contains(e){return this.entries[e]}clear(){this.entries={},this.size=0}}const
N=class{constructor(t=0,e=0,r=0,i=0){this.r=t,this.g=e,this.b=r,this.a=i}set(t,e,r,i){return
this.r=t,this.g=e,this.b=r,this.a=i,this.clamp()}setFromColor(t){return
this.r=t.r,this.g=t.g,this.b=t.b,this.a=t.a,this}setFromString(t){return t=t.charAt(0)=="#"?
t.substr(1):t,this.r=parseInt(t.substr(0,2),16)/255,this.g=parseInt(t.substr(2,2),16)/255,this.b=parseInt(t.
substr(4,2),16)/255,this.a=t.length!=8?1:parseInt(t.substr(6,2),16)/255,this}add(t,e,r,i){return
this.r+=t,this.g+=e,this.b+=r,this.a+=i,this.clamp()}clamp(){return this.r<0?this.r=0:this.r>1&&(this.r=1),this.g<0?this.g=0:this.g>1&&(this.g=1),this.b<0?this.b=0:this.b>1&&(this.b=1),this.a<0?
this.a=0:this.a>1&&(this.a=1),this}static rgba8888ToColor(t,e){t.r=((e&4278190080)>>>24)/255,t.g=
((e&16711680)>>>16)/255,t.b=((e&65280)>>>8)/255,t.a=(e&255)/255}static rgb888ToColor(t,e){t.r=
((e&16711680)>>>16)/255,t.g=((e&65280)>>>8)/255,t.b=(e&255)/255}static fromString(t){return new
N().setFromString(t)}};let _=N;_.WHITE=new N(1,1,1,1);_.RED=new N(1,0,0,1);_.GREEN=new
N(0,1,0,1);_.BLUE=new N(0,0,1,1);_.MAGENTA=new N(1,0,1,1);const M=class{static clamp(t,e,r)
{return t<e?e:t>r?r:t}static cosDeg(t){return Math.cos(t*M.degRad)}static sinDeg(t){return
Math.sin(t*M.degRad)}static signum(t){return Math.sign(t)}static toInt(t){return t>0?
Math.floor(t):Math.ceil(t)}static cbrt(t){const e=Math.pow(Math.abs(t),.3333333333333333);return t<0?
-e:e}static randomTriangular(t,e){return M.randomTriangularWith(t,e,(t+e)*.5)}static
randomTriangularWith(t,e,r){const i=Math.random(),s=e-t;return i<=(r-t)/s?t+Math.sqrt(i*s*(r-t)):e-
Math.sqrt((1-i)*s*(e-r))}static isPowerOfTwo(t){return t&&(t&t-1)===0}};let
k=M;k.PI=3.1415927;k.PI2=M.PI*2;k.radiansToDegrees=180/M.PI;k.radDeg=M.radiansToDegrees;k.d
egreesToRadians=M.PI/180;k.degRad=M.degreesToRadians;class ot{apply(e,r,i){return e+(r-
e)*this.applyInternal(i)}}class lt extends ot{constructor(e)
{super(),this.power=2,this.power=e}applyInternal(e){return e<=.5?
Math.pow(e*2,this.power)/2:Math.pow((e-1)*2,this.power)/(this.power%2==0?-2:2)+1}}class Tt
extends lt{applyInternal(e){return Math.pow(e-1,this.power)*(this.power%2==0?-1:1)+1}}const
E=class{static arrayCopy(t,e,r,i,s){for(let a=e,o=i;a<e+s;a++,o++)r[o]=t[a]}static arrayFill(t,e,r,i){for(let
s=e;s<r;s++)t[s]=i}static setArraySize(t,e,r=0){const i=t.length;if(i==e)return t;if(t.length=e,i<e)for(let
s=i;s<e;s++)t[s]=r;return t}static ensureArrayCapacity(t,e,r=0){return t.length>=e?
t:E.setArraySize(t,e,r)}static newArray(t,e){const r=new Array(t);for(let i=0;i<t;i++)r[i]=e;return r}static
newFloatArray(t){if(E.SUPPORTS_TYPED_ARRAYS)return new Float32Array(t);const e=new
Array(t);for(let r=0;r<e.length;r++)e[r]=0;return e}static newShortArray(t)
{if(E.SUPPORTS_TYPED_ARRAYS)return new Int16Array(t);const e=new Array(t);for(let
r=0;r<e.length;r++)e[r]=0;return e}static toFloatArray(t){return E.SUPPORTS_TYPED_ARRAYS?new
Float32Array(t):t}static toSinglePrecision(t){return E.SUPPORTS_TYPED_ARRAYS?
Math.fround(t):t}static webkit602BugfixHelper(t,e){}static contains(t,e,r=!0){for(let
i=0;i<t.length;i++)if(t[i]==e)return!0;return!1}static enumValue(t,e){return
t[e[0].toUpperCase()+e.slice(1)]}};let U=E;U.SUPPORTS_TYPED_ARRAYS=typeof
Float32Array<"u";class ht{constructor(e){this.items=new Array,this.instantiator=e}obtain(){return
this.items.length>0?this.items.pop():this.instantiator()}free(e)
{e.reset&&e.reset(),this.items.push(e)}freeAll(e){for(let r=0;r<e.length;r++)this.free(e[r])}clear()
{this.items.length=0}}class Ot{constructor(e=0,r=0){this.x=e,this.y=r}set(e,r){return
this.x=e,this.y=r,this}length(){const e=this.x,r=this.y;return Math.sqrt(e*e+r*r)}normalize(){const
e=this.length();return e!=0&&(this.x/=e,this.y/=e),this}}class Yt{constructor()
{this.minX=0,this.minY=0,this.maxX=0,this.maxY=0,this.boundingBoxes=new
Array,this.polygons=new Array,this.polygonPool=new ht(()=>U.newFloatArray(16))}update(e,r)
{if(!e)throw new Error("skeleton cannot be null.");const
i=this.boundingBoxes,s=this.polygons,a=this.polygonPool,o=e.slots,c=o.length;i.length=0,a.freeAll(s),
s.length=0;for(let l=0;l<c;l++){const g=o[l];if(!g.bone.active)continue;const
h=g.getAttachment();if(h!=null&&h.type===R.BoundingBox){const d=h;i.push(d);let
n=a.obtain();n.length!=d.worldVerticesLength&&
(n=U.newFloatArray(d.worldVerticesLength)),s.push(n),d.computeWorldVertices(g,0,d.worldVerticesL
ength,n,0,2)}}r?this.aabbCompute():
(this.minX=Number.POSITIVE_INFINITY,this.minY=Number.POSITIVE_INFINITY,this.maxX=Number.NEGATIVE_INFINITY,this.maxY=Number.NEGATIVE_INFINITY)}aabbCompute(){let
e=Number.POSITIVE_INFINITY,r=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY,s=N
umber.NEGATIVE_INFINITY;const a=this.polygons;for(let o=0,c=a.length;o<c;o++){const
l=a[o],g=l;for(let h=0,d=l.length;h<d;h+=2){const
n=g[h],u=g[h+1];e=Math.min(e,n),r=Math.min(r,u),i=Math.max(i,n),s=Math.max(s,u)}}this.minX=e,this.
minY=r,this.maxX=i,this.maxY=s}aabbContainsPoint(e,r){return
e>=this.minX&&e<=this.maxX&&r>=this.minY&&r<=this.maxY}aabbIntersectsSegment(e,r,i,s){const
a=this.minX,o=this.minY,c=this.maxX,l=this.maxY;if(e<=a&&i<=a||r<=o&&s<=o||e>=c&&i>=c||r>=l&&s
>=l)return!1;const g=(s-r)/(i-e);let h=g*(a-e)+r;if(h>o&&h<l||(h=g*(c-e)+r,h>o&&h<l))return!0;let d=(o-
r)/g+e;return d>a&&d<c||(d=(l-r)/g+e,d>a&&d<c)}aabbIntersectsSkeleton(e){return
this.minX<e.maxX&&this.maxX>e.minX&&this.minY<e.maxY&&this.maxY>e.minY}containsPoint(e,r)
{const i=this.polygons;for(let s=0,a=i.length;s<a;s++)if(this.containsPointPolygon(i[s],e,r))return
this.boundingBoxes[s];return null}containsPointPolygon(e,r,i){const s=e,a=e.length;let o=a-
2,c=!1;for(let l=0;l<a;l+=2){const g=s[l+1],h=s[o+1];if(g<i&&h>=i||h<i&&g>=i){const d=s[l];d+(i-g)/(h-g)*
(s[o]-d)<r&&(c=!c)}o=l}return c}intersectsSegment(e,r,i,s){const a=this.polygons;for(let
o=0,c=a.length;o<c;o++)if(this.intersectsSegmentPolygon(a[o],e,r,i,s))return
this.boundingBoxes[o];return null}intersectsSegmentPolygon(e,r,i,s,a){const o=e,c=e.length,l=r-s,g=i-
a,h=r*a-i*s;let d=o[c-2],n=o[c-1];for(let u=0;u<c;u+=2){const f=o[u],m=o[u+1],x=d*m-n*f,w=d-f,y=n-
m,S=l*y-g*w,p=(h*w-l*x)/S;if((p>=d&&p<=f||p>=f&&p<=d)&&(p>=r&&p<=s||p>=s&&p<=r)){const b=
(h*y-g*x)/S;if((b>=n&&b<=m||b>=m&&b<=n)&&
(b>=i&&b<=a||b>=a&&b<=i))return!0}d=f,n=m}return!1}getPolygon(e){if(!e)throw new
Error("boundingBox cannot be null.");const r=this.boundingBoxes.indexOf(e);return r==-1?
null:this.polygons[r]}getWidth(){return this.maxX-this.minX}getHeight(){return this.maxY-
this.minY}}const ut=
{yDown:!0,FAIL_ON_NON_EXISTING_SKIN:!1,GLOBAL_AUTO_UPDATE:!0,GLOBAL_DELAY_LIMI
T:0,REPORT_TEXTURE_LOADER_ERROR:!0},C=[0,0,0];class ct extends Q{constructor()
{super(...arguments),this.region=null,this.attachment=null}}class gt extends Z{constructor(e,r,i,s,a)
{super(e,r,i,s,a),this.region=null,this.attachment=null}}const G=class extends L{constructor(t)
{if(super(),!t)throw new Error("The spineData param is required.");if(typeof t=="string")throw new
Error('spineData param cant be string. Please use
spine.Spine.fromAtlas("YOUR_RESOURCE_NAME") from now
on.');this.spineData=t,this.createSkeleton(t),this.slotContainers=[],this.tempClipContainers=[];for(let
e=0,r=this.skeleton.slots.length;e<r;e++){const
i=this.skeleton.slots[e],s=i.getAttachment(),a=this.newContainer();if(this.slotContainers.push(a),this.a
ddChild(a),this.tempClipContainers.push(null),!!s)if(s.type===R.Region){const
o=s.name,c=this.createSprite(i,s,o);i.currentSprite=c,i.currentSpriteName=o,a.addChild(c)}else
if(s.type===R.Mesh){const
o=this.createMesh(i,s);i.currentMesh=o,i.currentMeshId=s.id,i.currentMeshName=s.name,a.addChild(
o)}else s.type===R.Clipping&&
(this.createGraphics(i,s),a.addChild(i.clippingContainer),a.addChild(i.currentGraphics))}this.tintRgb=n
ew Float32Array([1,1,1]),this.autoUpdate=!0,this.visible=!0}get debug(){return this._debug}set
debug(t){var e;t!=this._debug&&
((e=this._debug)==null||e.unregisterSpine(this),t==null||t.registerSpine(this),this._debug=t)}get
autoUpdate(){return this._autoUpdate}set autoUpdate(t){t!==this._autoUpdate&&
(this._autoUpdate=t,this.updateTransform=t?
G.prototype.autoUpdateTransform:L.prototype.updateTransform)}get tint(){return Y(this.tintRgb)}settint(t){this.tintRgb=K(t,this.tintRgb)}get delayLimit(){return(typeof this.localDelayLimit<"u"?
this.localDelayLimit:ut.GLOBAL_DELAY_LIMIT)||Number.MAX_VALUE}update(t){var g;const
e=this.delayLimit;if(t>e&&
(t=e),this.state.update(t),this.state.apply(this.skeleton),!this.skeleton)return;this.skeleton.updateWorld
Transform();const r=this.skeleton.slots,i=this.color;let s=null,a=null;i?
(s=i.light,a=i.dark):s=this.tintRgb;for(let h=0,d=r.length;h<d;h++){const
n=r[h],u=n.getAttachment(),f=this.slotContainers[h];if(!u){f.visible=!1;continue}let
m=null;u.sequence&&u.sequence.apply(n,u);let x=u.region;const w=u.color;switch(u!=null&&u.type)
{case R.Region:if(f.transform.setFromMatrix(n.bone.matrix),x=u.region,n.currentMesh&&
(n.currentMesh.visible=!1,n.currentMesh=null,n.currentMeshId=void 0,n.currentMeshName=void
0),!x){n.currentSprite&&
(n.currentSprite.renderable=!1);break}if(!n.currentSpriteName||n.currentSpriteName!==u.name){const
p=u.name;if(n.currentSprite&&(n.currentSprite.visible=!1),n.sprites=n.sprites||{},n.sprites[p]!==void
0)n.sprites[p].visible=!0;else{const
b=this.createSprite(n,u,p);f.addChild(b)}n.currentSprite=n.sprites[p],n.currentSpriteName=p}n.current
Sprite.renderable=!0,n.hackRegion||this.setSpriteRegion(u,n.currentSprite,x),n.currentSprite.color?
m=n.currentSprite.color:
(C[0]=s[0]*n.color.r*w.r,C[1]=s[1]*n.color.g*w.g,C[2]=s[2]*n.color.b*w.b,n.currentSprite.tint=Y(C)),n.curr
entSprite.blendMode=n.blendMode;break;case R.Mesh:if(n.currentSprite)
{n.currentSprite.visible=!1,n.currentSprite=null,n.currentSpriteName=void 0;const p=new
j;p._parentID=-1,p._worldID=f.transform._worldID,f.transform=p}if(!x){n.currentMesh&&
(n.currentMesh.renderable=!1);break}const S=u.id;if(n.currentMeshId===void
0||n.currentMeshId!==S){const p=S;if(n.currentMesh&&
(n.currentMesh.visible=!1),n.meshes=n.meshes||{},n.meshes[p]!==void
0)n.meshes[p].visible=!0;else{const
b=this.createMesh(n,u);f.addChild(b)}n.currentMesh=n.meshes[p],n.currentMeshName=u.name,n.cur
rentMeshId=p}n.currentMesh.renderable=!0,u.computeWorldVerticesOld(n,n.currentMesh.vertices),n.
currentMesh.color?
m=n.currentMesh.color:)),n.currentMesh.blendMode=n.blendMode,n.hackRegion||this.setMeshRegio
n(u,n.currentMesh,x);break;case R.Clip
import{T as A}from"./@pixi-
spine_base@4.0.6_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__@pixi_gra_074bb
737d3bfbcd5f96edd8ed71086e7.baac51e2.js";import"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85
af61b.js";import"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{E
as y,e as
E}from"./@pixi_extensions@7.4.2.089ce807.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@p
ixi_runner@7.4.2.8be90fed.js";import{s as
M}from"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{p as
m}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut
@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import"./@pixi_graphics@7.4.2_@pixi_core@7
.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__@pixi_sprit_a3536a87af99d28ff44bd814c835c9e3.8
7e100c4.js";import{L as j,c as f}from"./@pixi_assets@7.4.2_@pixi_core@7.4.2.4019d085.js";const J=
{extension:y.Asset,loader:{extension:{type:y.LoadParser,priority:j.Normal},test(a){return
f(a,".atlas")},async load(a){return await(await M.ADAPTER.fetch(a)).text()},testParse(a,s){constl=f(s.src,".atlas"),e=typeof a=="string";return Promise.resolve(l&&e)},async parse(a,s,l){const
e=s.data;let t=m.dirname(s.src);t&&t.lastIndexOf("/")!==t.length-1&&(t+="/");let o=null,c=null;const
d=new Promise((n,p)=>{o=n,c=p});let r;const x=n=>{n||c(`Something went terribly wrong loading a
spine .atlas file
Most likely your texture failed to load.`),o(r)};if(e.image||e.images){const n=Object.assign(e.image?
{default:e.image}:{},e.images);r=new A(a,(p,i)=>{const u=n[p]||n.default;u&&u.baseTexture?
i(u.baseTexture):i(u)},x)}else r=new A(a,k(l,t,e.imageMetadata),x);return await d},unload(a)
{a.dispose()}}},k=(a,s,l)=>async(e,t)=>{try{const
o=m.normalize([...s.split(m.sep),e].join(m.sep)),c=await a.load({src:o,data:l});t(c.baseTexture)}catch(o)
{console.error("Spine: error in texture loader",o),t(null)}};E.add(J);function L(a){return
a.hasOwnProperty("bones")}function F(a){return a instanceof ArrayBuffer}class Z{constructor()
{}installLoader(){const s=this,l={extension:y.Asset,loader:{extension:
{type:y.LoadParser,priority:j.Normal},test(e){return f(e,".skel")},async load(e){return await(await
M.ADAPTER.fetch(e)).arrayBuffer()},testParse(e,t){var r;const
o=f(t.src,".json")&&L(e),c=f(t.src,".skel")&&F(e),d=((r=t.data)==null?void 0:r.spineAtlas)===!1;return
Promise.resolve(o&&!d||c)},async parse(e,t,o){var S;const
c=m.extname(t.src).toLowerCase(),d=m.basename(t.src,c);let
r=m.dirname(t.src);r&&r.lastIndexOf("/")!==r.length-1&&(r+="/");const x=f(t.src,".json")&&L(e);let
n=null,p=e;x?n=s.createJsonParser():(n=s.createBinaryParser(),p=new Uint8Array(e));const i=t.data||
{},u=(S=i==null?void 0:i.spineSkeletonScale)!=null?S:null;u&&(n.scale=u);const
g=i.spineAtlas;if(g&&g.pages)return s.parseData(n,g,p);const h=i.atlasRawData;if(h){let
b=null,T=null;const D=new Promise((w,O)=>{b=w,T=O}),R=new A(h,k(o,r,i.imageMetadata),w=>
{w||T(`Something went terribly wrong loading a spine .atlas file
Most likely your texture failed to load.`),b(R)}),B=await D;return s.parseData(n,B,p)}let
P=i.spineAtlasFile;P||(P=`${r+d}.atlas`);const v=await
o.load({src:P,data:i,alias:i.spineAtlasAlias});return s.parseData(n,v,p)}}};return E.add(l),l}}export{Z as
S};
import"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_ma
th@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad
2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./e
ventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js"
;import{B as p,S as d}from"./@pixi-
spine_base@4.0.6_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__@pixi_gra_074bb
737d3bfbcd5f96edd8ed71086e7.baac51e2.js";import"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85
af61b.js";import"./@pixi_graphics@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.
2__@pixi_sprit_a3536a87af99d28ff44bd814c835c9e3.87e100c4.js";import{S as u,A as c,a as f,s as
w}from"./@pixi-spine_runtime-3.8@4.0.6_@pixi-
spine_base@4.0.6_@pixi_core@7.4.2_@pixi_display@7.4_2f205a559ddf83c35d05ce73c583b601.e
d7ab864.js";import{S as h,A as k,s as v}from"./@pixi-spine_runtime-3.7@4.0.6_@pixi-
spine_base@4.0.6_@pixi_core@7.4.2_@pixi_display@7.4_20d2c9612c051722433adb0bc22ead2c.
efb36809.js";import{S as V,A as m,a as A,s as R}from"./@pixi-spine_runtime-4.1@4.0.6_@pixi-
spine_base@4.0.6_@pixi_core@7.4.2_@pixi_display@7.4_42b2f5cf17673f8e76e8d310bb448f76.d4d909a4.js";import{S}from"./@pixi-spine_loader-base@4.0.6_@pixi-
spine_base@4.0.6_@pixi_core@7.4.2_@pixi_display@7.4_d3ffc3915436f86deb53a89f660980ee.6a
031092.js";import"./@pixi_assets@7.4.2_@pixi_core@7.4.2.4019d085.js";var o=(n=>
(n[n.UNKNOWN=0]="UNKNOWN",n[n.VER37=37]="VER37",n[n.VER38=38]="VER38",n[n.VER40=4
0]="VER40",n[n.VER41=41]="VER41",n))(o||{});function i(n){const
r=n.substr(0,3),t=Math.floor(Number(r)*10+.001);return r==="3.7"?37:r==="3.8"?38:r==="4.0"?
40:r==="4.1"?41:t<37?37:0}class ${constructor(){this.scale=1}readSkeletonData(r,t){let
e=null,s=this.readVersionOldFormat(t),a=i(s);if(a===o.VER38&&(e=new u(new
c(r))),s=this.readVersionNewFormat(t),a=i(s),(a===o.VER40||a===o.VER41)&&(e=new V(new
m(r))),!e){const l=`Unsupported version of spine model ${s}, please update pixi-
spine`;console.error(l)}return e.scale=this.scale,e.readSkeletonData(t)}readVersionOldFormat(r)
{const t=new p(r);let e;try{t.readString(),e=t.readString()}catch(s){e=""}return
e||""}readVersionNewFormat(r){const t=new p(r);t.readInt32(),t.readInt32();let
e;try{e=t.readString()}catch(s){e=""}return e||""}}class y{constructor()
{this.scale=1}readSkeletonData(r,t){const e=t.skeleton.spine,s=i(e);let a=null;if(s===o.VER37&&
(a=new h(new k(r))),s===o.VER38&&(a=new f(new c(r))),(s===o.VER40||s===o.VER41)&&(a=new
A(new m(r))),!a){const l=`Unsupported version of spine model ${e}, please update pixi-
spine`;console.error(l)}return a.scale=this.scale,a.readSkeletonData(t)}}class B extends
S{createBinaryParser(){return new $}createJsonParser(){return new y}parseData(r,t,e)
{return{spineData:r.readSkeletonData(t,e),spineAtlas:t}}}class Q extends d{createSkeleton(r){const
t=i(r.version);let e=null;if(t===o.VER37&&(e=v),t===o.VER38&&(e=w),
(t===o.VER40||t===o.VER41)&&(e=R),!e){const s=`Cant detect version of spine model
${r.version}`;console.error(s)}this.skeleton=new
e.Skeleton(r),this.skeleton.updateWorldTransform(),this.stateData=new
e.AnimationStateData(r),this.state=new e.AnimationState(this.stateData)}}new
B().installLoader();export{Q as S};
import{A as Pt,C as tt,M as y,U as I,P as Ie,a as S,b as ot,I as Pe,c as ke,d as mt,R as It,e as Nt,V as
ve,f as Ne,S as Ye}from"./@pixi-
spine_base@4.0.6_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__@pixi_gra_074bb
737d3bfbcd5f96edd8ed71086e7.baac51e2.js";import"./@pixi_core@7.4.2.ae619cd2.js";import"./@pix
i_color@7.4.2.090b5ebd.js";import{M as
Xe}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_
settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d7
4d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@
0.11.4.026de2db.js";import"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";import"./@pixi_gr
aphics@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__@pixi_sprit_a3536a87
af99d28ff44bd814c835c9e3.87e100c4.js";import{B as
Ot}from"./@pixi_constants@7.4.2.8b356162.js";class Zt{constructor(t){if(t==null)throw new
Error("name cannot be null.");this.name=t}}const ce=class extends Zt{constructor(i){super(i),this.id=
(ce.nextID++&65535)<<11,this.worldVerticesLength=0}computeWorldVerticesOld(i,t)
{this.computeWorldVertices(i,0,this.worldVerticesLength,t,0,2)}computeWorldVertices(i,t,e,a,s,l){e=s+
(e>>1)*l;const u=i.bone.skeleton,o=i.attachmentVertices;let n=this.vertices;const
r=this.bones;if(r==null){o.length>0&&(n=o);const
h=i.bone.matrix,m=h.tx,p=h.ty,g=h.a,E=h.c,b=h.b,M=h.d;for(let w=t,A=s;A<e;w+=2,A+=l){constx=n[w],R=n[w+1];a[A]=x*g+R*E+m,a[A+1]=x*b+R*M+p}return}let c=0,d=0;for(let h=0;h<t;h+=2){const
m=r[c];c+=m+1,d+=m}const f=u.bones;if(o.length==0)for(let h=s,m=d*3;h<e;h+=l){let
p=0,g=0,E=r[c++];for(E+=c;c<E;c++,m+=3){const b=f[r[c]].matrix,M=n[m],w=n[m+1],A=n[m+2];p+=
(M*b.a+w*b.c+b.tx)*A,g+=(M*b.b+w*b.d+b.ty)*A}a[h]=p,a[h+1]=g}else{const h=o;for(let
m=s,p=d*3,g=d<<1;m<e;m+=l){let E=0,b=0,M=r[c++];for(M+=c;c<M;c++,p+=3,g+=2){const
w=f[r[c]].matrix,A=n[p]+h[g],x=n[p+1]+h[g+1],R=n[p+2];E+=(A*w.a+x*w.c+w.tx)*R,b+=
(A*w.b+x*w.d+w.ty)*R}a[m]=E,a[m+1]=b}}}applyDeform(i){return this==i}};let yt=ce;yt.nextID=0;class
he extends yt{constructor(t){super(t),this.type=Pt.BoundingBox,this.color=new tt(1,1,1,1)}}class ue
extends yt{constructor(t){super(t),this.type=Pt.Clipping,this.color=new tt(.2275,.2275,.8078,1)}}class
zt extends yt{constructor(t){super(t),this.type=Pt.Mesh,this.color=new
tt(1,1,1,1),this.inheritDeform=!1,this.tempColor=new tt(0,0,0,0)}applyDeform(t){return
this==t||this.inheritDeform&&this.parentMesh==t}getParentMesh(){return
this.parentMesh}setParentMesh(t){this.parentMesh=t,t!=null&&
(this.bones=t.bones,this.vertices=t.vertices,this.worldVerticesLength=t.worldVerticesLength,this.regio
nUVs=t.regionUVs,this.triangles=t.triangles,this.hullLength=t.hullLength,this.worldVerticesLength=t.w
orldVerticesLength)}}class Xt extends yt{constructor(t)
{super(t),this.type=Pt.Path,this.closed=!1,this.constantSpeed=!1,this.color=new tt(1,1,1,1)}}class fe
extends yt{constructor(t){super(t),this.type=Pt.Point,this.color=new
tt(.38,.94,0,1)}computeWorldPosition(t,e){const a=t.matrix;return
e.x=this.x*a.a+this.y*a.c+t.worldX,e.y=this.x*a.b+this.y*a.d+t.worldY,e}computeWorldRotation(t){const
e=t.matrix,a=y.cosDeg(this.rotation),s=y.sinDeg(this.rotation),l=a*e.a+s*e.c,u=a*e.b+s*e.d;return
Math.atan2(u,l)*y.radDeg}}class Qt{constructor(t,e){if(this.attachmentVertices=new Array,t==null)throw
new Error("data cannot be null.");if(e==null)throw new Error("bone cannot be
null.");this.data=t,this.bone=e,this.color=new tt,this.darkColor=t.darkColor==null?null:new
tt,this.setToSetupPose(),this.blendMode=this.data.blendMode}getAttachment(){return
this.attachment}setAttachment(t){this.attachment!=t&&
(this.attachment=t,this.attachmentTime=this.bone.skeleton.time,this.attachmentVertices.length=0)}set
AttachmentTime(t){this.attachmentTime=this.bone.skeleton.time-t}getAttachmentTime(){return
this.bone.skeleton.time-this.attachmentTime}setToSetupPose()
{this.color.setFromColor(this.data.color),this.darkColor!=null&&this.darkColor.setFromColor(this.data.
darkColor),this.data.attachmentName==null?this.attachment=null:
(this.attachment=null,this.setAttachment(this.bone.skeleton.getAttachment(this.data.index,this.data.at
tachmentName)))}}const J=class extends Zt{constructor(i)
{super(i),this.type=Pt.Region,this.x=0,this.y=0,this.scaleX=1,this.scaleY=1,this.rotation=0,this.width=0
,this.height=0,this.color=new
tt(1,1,1,1),this.offset=I.newFloatArray(8),this.uvs=I.newFloatArray(8),this.tempColor=new
tt(1,1,1,1)}updateOffset(){const
i=this.width/this.region.originalWidth*this.scaleX,t=this.height/this.region.originalHeight*this.scaleY,e=-
this.width/2*this.scaleX+this.region.offsetX*i,a=-
this.height/2*this.scaleY+this.region.offsetY*t,s=e+this.region.width*i,l=a+this.region.height*t,u=this.ro
tation*Math.PI/180,o=Math.cos(u),n=Math.sin(u),r=e*o+this.x,c=e*n,d=a*o+this.y,f=a*n,h=s*o+this.x,
m=s*n,p=l*o+this.y,g=l*n,E=this.offset;E[J.OX1]=r-f,E[J.OY1]=d+c,E[J.OX2]=r-
g,E[J.OY2]=p+c,E[J.OX3]=h-g,E[J.OY3]=p+m,E[J.OX4]=h-f,E[J.OY4]=d+m}setRegion(i)
{this.region=i;const t=this.uvs;i.rotate?
(t[2]=i.u,t[3]=i.v2,t[4]=i.u,t[5]=i.v,t[6]=i.u2,t[7]=i.v,t[0]=i.u2,t[1]=i.v2):
(t[0]=i.u,t[1]=i.v2,t[2]=i.u,t[3]=i.v,t[4]=i.u2,t[5]=i.v,t[6]=i.u2,t[7]=i.v2)}computeWorldVertices(i,t,e,a){consts=this.offset,l=i instanceof Qt?i.bone.matrix:i.matrix,u=l.tx,o=l.ty,n=l.a,r=l.c,c=l.b,d=l.d;let
f=0,h=0;f=s[J.OX1],h=s[J.OY1],t[e]=f*n+h*r+u,t[e+1]=f*c+h*d+o,e+=a,f=s[J.OX2],h=s[J.OY2],t[e]=f*n+
h*r+u,t[e+1]=f*c+h*d+o,e+=a,f=s[J.OX3],h=s[J.OY3],t[e]=f*n+h*r+u,t[e+1]=f*c+h*d+o,e+=a,f=s[J.OX4]
,h=s[J.OY4],t[e]=f*n+h*r+u,t[e+1]=f*c+h*d+o}};let
P=J;P.OX1=0;P.OY1=1;P.OX2=2;P.OY2=3;P.OX3=4;P.OY3=5;P.OX4=6;P.OY4=7;P.X1=0;P.Y1=1;P.C1
R=2;P.C1G=3;P.C1B=4;P.C1A=5;P.U1=6;P.V1=7;P.X2=8;P.Y2=9;P.C2R=10;P.C2G=11;P.C2B=12;P.C
2A=13;P.U2=14;P.V2=15;P.X3=16;P.Y3=17;P.C3R=18;P.C3G=19;P.C3B=20;P.C3A=21;P.U3=22;P.V3
=23;P.X4=24;P.Y4=25;P.C4R=26;P.C4G=27;P.C4B=28;P.C4A=29;P.U4=30;P.V4=31;class
De{constructor(t,e){this.jitterX=0,this.jitterY=0,this.jitterX=t,this.jitterY=e}begin(t){}transform(t,e,a,s)
{t.x+=y.randomTriangular(-this.jitterX,this.jitterY),t.y+=y.randomTriangular(-this.jitterX,this.jitterY)}end()
{}}const de=class{constructor(i)
{this.centerX=0,this.centerY=0,this.radius=0,this.angle=0,this.worldX=0,this.worldY=0,this.radius=i}be
gin(i){this.worldX=i.x+this.centerX,this.worldY=i.y+this.centerY}transform(i,t,e,a){const
s=this.angle*y.degreesToRadians,l=i.x-this.worldX,u=i.y-
this.worldY,o=Math.sqrt(l*l+u*u);if(o<this.radius){const n=de.interpolation.apply(0,s,(this.radius-
o)/this.radius),r=Math.cos(n),c=Math.sin(n);i.x=r*l-c*u+this.worldX,i.y=c*l+r*u+this.worldY}}end(){}};let
me=de;me.interpolation=new Ie(2);class z{constructor(t,e,a){if(t==null)throw new Error("name cannot
be null.");if(e==null)throw new Error("timelines cannot be
null.");this.name=t,this.timelines=e,this.duration=a}apply(t,e,a,s,l,u,o,n){if(t==null)throw new
Error("skeleton cannot be null.");s&&this.duration!=0&&(a%=this.duration,e>0&&
(e%=this.duration));const r=this.timelines;for(let c=0,d=r.length;c<d;c++)r[c].apply(t,e,a,l,u,o,n)}static
binarySearch(t,e,a=1){let s=0,l=t.length/a-2;if(l==0)return a;let u=l>>>1;for(;;){if(t[(u+1)*a]<=e?
s=u+1:l=u,s==l)return(s+1)*a;u=s+l>>>1}}static linearSearch(t,e,a){for(let s=0,l=t.length-
a;s<=l;s+=a)if(t[s]>e)return s;return-1}}var ge=(i=>
(i[i.rotate=0]="rotate",i[i.translate=1]="translate",i[i.scale=2]="scale",i[i.shear=3]="shear",i[i.attachment
=4]="attachment",i[i.color=5]="color",i[i.deform=6]="deform",i[i.event=7]="event",i[i.drawOrder=8]="dra
wOrder",i[i.ikConstraint=9]="ikConstraint",i[i.transformConstraint=10]="transformConstraint",i[i.pathCo
nstraintPosition=11]="pathConstraintPosition",i[i.pathConstraintSpacing=12]="pathConstraintSpacing"
,i[i.pathConstraintMix=13]="pathConstraintMix",i[i.twoColor=14]="twoColor",i))(ge||{});const
H=class{constructor(i){if(i<=0)throw new Error(`frameCount must be > 0:
${i}`);this.curves=I.newFloatArray((i-1)*H.BEZIER_SIZE)}getFrameCount(){return
this.curves.length/H.BEZIER_SIZE+1}setLinear(i)
{this.curves[i*H.BEZIER_SIZE]=H.LINEAR}setStepped(i)
{this.curves[i*H.BEZIER_SIZE]=H.STEPPED}getCurveType(i){const
t=i*H.BEZIER_SIZE;if(t==this.curves.length)return H.LINEAR;const e=this.curves[t];return
e==H.LINEAR?H.LINEAR:e==H.STEPPED?H.STEPPED:H.BEZIER}setCurve(i,t,e,a,s){const l=(-
t*2+a)*.03,u=(-e*2+s)*.03,o=((t-a)*3+1)*.006,n=((e-s)*3+1)*.006;let
r=l*2+o,c=u*2+n,d=t*.3+l+o*.16666667,f=e*.3+u+n*.16666667,h=i*H.BEZIER_SIZE;const
m=this.curves;m[h++]=H.BEZIER;let p=d,g=f;for(let E=h+H.BEZIER_SIZE-
1;h<E;h+=2)m[h]=p,m[h+1]=g,d+=r,f+=c,r+=o,c+=n,p+=d,g+=f}getCurvePercent(i,t)
{t=y.clamp(t,0,1);const e=this.curves;let a=i*H.BEZIER_SIZE;const s=e[a];if(s==H.LINEAR)return
t;if(s==H.STEPPED)return 0;a++;let l=0;for(let o=a,n=a+H.BEZIER_SIZE-1;a<n;a+=2)if(l=e[a],l>=t){let
r,c;return a==o?(r=0,c=0):(r=e[a-2],c=e[a-1]),c+(e[a+1]-c)*(t-r)/(l-r)}const u=e[a-1];return u+(1-u)*(t-
l)/(1-l)}};let lt=H;lt.LINEAR=0;lt.STEPPED=1;lt.BEZIER=2;lt.BEZIER_SIZE=10*2-1;const Rt=class
extends lt{constructor(i){super(i),this.frames=I.newFloatArray(i<<1)}getPropertyId(){return
0+this.boneIndex}setFrame(i,t,e){i<<=1,this.frames[i]=t,this.frames[i+Rt.ROTATION]=e}apply(i,t,e,a,s,l,u){const
o=this.frames,n=i.bones[this.boneIndex];if(e<o[0]){switch(l){case
S.setup:n.rotation=n.data.rotation;return;case S.first:const m=n.data.rotation-n.rotation;n.rotation+=
(m-(16384-(16384.499999999996-m/360|0))*360)*s}return}if(e>=o[o.length-Rt.ENTRIES]){let
m=o[o.length+Rt.PREV_ROTATION];switch(l){case
S.setup:n.rotation=n.data.rotation+m*s;break;case S.first:case S.replace:m+=n.data.rotation-
n.rotation,m-=(16384-(16384.499999999996-m/360|0))*360;case S.add:n.rotation+=m*s}return}const
r=z.binarySearch(o,e,Rt.ENTRIES),c=o[r+Rt.PREV_ROTATION],d=o[r],f=this.getCurvePercent((r>>1)
-1,1-(e-d)/(o[r+Rt.PREV_TIME]-d));let h=o[r+Rt.ROTATION]-c;switch(h=c+(h-(16384-
(16384.499999999996-h/360|0))*360)*f,l){case S.setup:n.rotation=n.data.rotation+(h-(16384-
(16384.499999999996-h/360|0))*360)*s;break;case S.first:case S.replace:h+=n.data.rotation-
n.rotation;case S.add:n.rotation+=(h-(16384-(16384.499999999996-h/360|0))*360)*s}}};let
it=Rt;it.ENTRIES=2;it.PREV_TIME=-2;it.PREV_ROTATION=-1;it.ROTATION=1;const st=class
extends lt{constructor(i){super(i),this.frames=I.newFloatArray(i*st.ENTRIES)}getPropertyId()
{return(1<<24)+this.boneIndex}setFrame(i,t,e,a)
{i*=st.ENTRIES,this.frames[i]=t,this.frames[i+st.X]=e,this.frames[i+st.Y]=a}apply(i,t,e,a,s,l,u){const
o=this.frames,n=i.bones[this.boneIndex];if(e<o[0]){switch(l){case
S.setup:n.x=n.data.x,n.y=n.data.y;return;case S.first:n.x+=(n.data.x-n.x)*s,n.y+=(n.data.y-
n.y)*s}return}let r=0,c=0;if(e>=o[o.length-
st.ENTRIES])r=o[o.length+st.PREV_X],c=o[o.length+st.PREV_Y];else{const
d=z.binarySearch(o,e,st.ENTRIES);r=o[d+st.PREV_X],c=o[d+st.PREV_Y];const
f=o[d],h=this.getCurvePercent(d/st.ENTRIES-1,1-(e-f)/(o[d+st.PREV_TIME]-f));r+=(o[d+st.X]-r)*h,c+=
(o[d+st.Y]-c)*h}switch(l){case S.setup:n.x=n.data.x+r*s,n.y=n.data.y+c*s;break;case S.first:case
S.replace:n.x+=(n.data.x+r-n.x)*s,n.y+=(n.data.y+c-n.y)*s;break;case S.add:n.x+=r*s,n.y+=c*s}}};let
xt=st;xt.ENTRIES=3;xt.PREV_TIME=-3;xt.PREV_X=-2;xt.PREV_Y=-1;xt.X=1;xt.Y=2;class ct extends
xt{constructor(t){super(t)}getPropertyId(){return(2<<24)+this.boneIndex}apply(t,e,a,s,l,u,o){const
n=this.frames,r=t.bones[this.boneIndex];if(a<n[0]){switch(u){case
S.setup:r.scaleX=r.data.scaleX,r.scaleY=r.data.scaleY;return;case S.first:r.scaleX+=(r.data.scaleX-
r.scaleX)*l,r.scaleY+=(r.data.scaleY-r.scaleY)*l}return}let c=0,d=0;if(a>=n[n.length-
ct.ENTRIES])c=n[n.length+ct.PREV_X]*r.data.scaleX,d=n[n.length+ct.PREV_Y]*r.data.scaleY;else{co
nst f=z.binarySearch(n,a,ct.ENTRIES);c=n[f+ct.PREV_X],d=n[f+ct.PREV_Y];const
h=n[f],m=this.getCurvePercent(f/ct.ENTRIES-1,1-(a-h)/(n[f+ct.PREV_TIME]-h));c=(c+(n[f+ct.X]-
c)*m)*r.data.scaleX,d=(d+(n[f+ct.Y]-d)*m)*r.data.scaleY}if(l==1)u==S.add?(r.scaleX+=c-
r.data.scaleX,r.scaleY+=d-r.data.scaleY):(r.scaleX=c,r.scaleY=d);else{let
f=0,h=0;if(o==ot.mixOut)switch(u){case S.setup:f=r.data.scaleX,h=r.data.scaleY,r.scaleX=f+
(Math.abs(c)*y.signum(f)-f)*l,r.scaleY=h+(Math.abs(d)*y.signum(h)-h)*l;break;case S.first:case
S.replace:f=r.scaleX,h=r.scaleY,r.scaleX=f+(Math.abs(c)*y.signum(f)-f)*l,r.scaleY=h+
(Math.abs(d)*y.signum(h)-h)*l;break;case S.add:f=r.scaleX,h=r.scaleY,r.scaleX=f+
(Math.abs(c)*y.signum(f)-r.data.scaleX)*l,r.scaleY=h+(Math.abs(d)*y.signum(h)-r.data.scaleY)*l}else
switch(u){case
S.setup:f=Math.abs(r.data.scaleX)*y.signum(c),h=Math.abs(r.data.scaleY)*y.signum(d),r.scaleX=f+(c-
f)*l,r.scaleY=h+(d-h)*l;break;case S.first:case
S.replace:f=Math.abs(r.scaleX)*y.signum(c),h=Math.abs(r.scaleY)*y.signum(d),r.scaleX=f+(c-
f)*l,r.scaleY=h+(d-h)*l;break;case S.add:f=y.signum(c),h=y.signum(d),r.scaleX=Math.abs(r.scaleX)*f+
(c-Math.abs(r.data.scaleX)*f)*l,r.scaleY=Math.abs(r.scaleY)*h+(d-Math.abs(r.data.scaleY)*h)*l}}}}class
ht extends xt{constructor(t){super(t)}getPropertyId(){return(3<<24)+this.boneIndex}apply(t,e,a,s,l,u,o){const n=this.frames,r=t.bones[this.boneIndex];if(a<n[0]){switch(u){case
S.setup:r.shearX=r.data.shearX,r.shearY=r.data.shearY;return;case S.first:r.shearX+=(r.data.shearX-
r.shearX)*l,r.shearY+=(r.data.shearY-r.shearY)*l}return}let c=0,d=0;if(a>=n[n.length-
ht.ENTRIES])c=n[n.length+ht.PREV_X],d=n[n.length+ht.PREV_Y];else{const
f=z.binarySearch(n,a,ht.ENTRIES);c=n[f+ht.PREV_X],d=n[f+ht.PREV_Y];const
h=n[f],m=this.getCurvePercent(f/ht.ENTRIES-1,1-(a-h)/(n[f+ht.PREV_TIME]-h));c=c+(n[f+ht.X]-
c)*m,d=d+(n[f+ht.Y]-d)*m}switch(u){case
S.setup:r.shearX=r.data.shearX+c*l,r.shearY=r.data.shearY+d*l;break;case S.first:case
S.replace:r.shearX+=(r.data.shearX+c-r.shearX)*l,r.shearY+=(r.data.shearY+d-r.shearY)*l;break;case
S.add:r.shearX+=c*l,r.shearY+=d*l}}}const U=class extends lt{constructor(i)
{super(i),this.frames=I.newFloatArray(i*U.ENTRIES)}getPropertyId()
{return(5<<24)+this.slotIndex}setFrame(i,t,e,a,s,l)
{i*=U.ENTRIES,this.frames[i]=t,this.frames[i+U.R]=e,this.frames[i+U.G]=a,this.frames[i+U.B]=s,this.fr
ames[i+U.A]=l}apply(i,t,e,a,s,l,u){const o=i.slots[this.slotIndex],n=this.frames;if(e<n[0]){switch(l){case
S.setup:o.color.setFromColor(o.data.color);return;case S.first:const
h=o.color,m=o.data.color;h.add((m.r-h.r)*s,(m.g-h.g)*s,(m.b-h.b)*s,(m.a-h.a)*s)}return}let
r=0,c=0,d=0,f=0;if(e>=n[n.length-U.ENTRIES]){const
h=n.length;r=n[h+U.PREV_R],c=n[h+U.PREV_G],d=n[h+U.PREV_B],f=n[h+U.PREV_A]}else{const
h=z.binarySearch(n,e,U.ENTRIES);r=n[h+U.PREV_R],c=n[h+U.PREV_G],d=n[h+U.PREV_B],f=n[h+
U.PREV_A];const m=n[h],p=this.getCurvePercent(h/U.ENTRIES-1,1-(e-m)/(n[h+U.PREV_TIME]-
m));r+=(n[h+U.R]-r)*p,c+=(n[h+U.G]-c)*p,d+=(n[h+U.B]-d)*p,f+=(n[h+U.A]-
f)*p}if(s==1)o.color.set(r,c,d,f);else{const
h=o.color;l==S.setup&&h.setFromColor(o.data.color),h.add((r-h.r)*s,(c-h.g)*s,(d-h.b)*s,(f-h.a)*s)}}};let
ut=U;ut.ENTRIES=5;ut.PREV_TIME=-5;ut.PREV_R=-4;ut.PREV_G=-3;ut.PREV_B=-2;ut.PREV_A=-1
;ut.R=1;ut.G=2;ut.B=3;ut.A=4;const D=class extends lt{constructor(i)
{super(i),this.frames=I.newFloatArray(i*D.ENTRIES)}getPropertyId()
{return(14<<24)+this.slotIndex}setFrame(i,t,e,a,s,l,u,o,n)
{i*=D.ENTRIES,this.frames[i]=t,this.frames[i+D.R]=e,this.frames[i+D.G]=a,this.frames[i+D.B]=s,this.fr
ames[i+D.A]=l,this.frames[i+D.R2]=u,this.frames[i+D.G2]=o,this.frames[i+D.B2]=n}apply(i,t,e,a,s,l,u)
{const o=i.slots[this.slotIndex],n=this.frames;if(e<n[0]){switch(l){case
S.setup:o.color.setFromColor(o.data.color),o.darkColor.setFromColor(o.data.darkColor);return;case
S.first:const g=o.color,E=o.darkColor,b=o.data.color,M=o.data.darkColor;g.add((b.r-g.r)*s,(b.g-g.g)*s,
(b.b-g.b)*s,(b.a-g.a)*s),E.add((M.r-E.r)*s,(M.g-E.g)*s,(M.b-E.b)*s,0)}return}let
r=0,c=0,d=0,f=0,h=0,m=0,p=0;if(e>=n[n.length-D.ENTRIES]){const
g=n.length;r=n[g+D.PREV_R],c=n[g+D.PREV_G],d=n[g+D.PREV_B],f=n[g+D.PREV_A],h=n[g+D.PR
EV_R2],m=n[g+D.PREV_G2],p=n[g+D.PREV_B2]}else{const
g=z.binarySearch(n,e,D.ENTRIES);r=n[g+D.PREV_R],c=n[g+D.PREV_G],d=n[g+D.PREV_B],f=n[g+
D.PREV_A],h=n[g+D.PREV_R2],m=n[g+D.PREV_G2],p=n[g+D.PREV_B2];const
E=n[g],b=this.getCurvePercent(g/D.ENTRIES-1,1-(e-E)/(n[g+D.PREV_TIME]-E));r+=(n[g+D.R]-
r)*b,c+=(n[g+D.G]-c)*b,d+=(n[g+D.B]-d)*b,f+=(n[g+D.A]-f)*b,h+=(n[g+D.R2]-h)*b,m+=(n[g+D.G2]-
m)*b,p+=(n[g+D.B2]-p)*b}if(s==1)o.color.set(r,c,d,f),o.darkColor.set(h,m,p,1);else{const
g=o.color,E=o.darkColor;l==S.setup&&
(g.setFromColor(o.data.color),E.setFromColor(o.data.darkColor)),g.add((r-g.r)*s,(c-g.g)*s,(d-g.b)*s,(f-
g.a)*s),E.add((h-E.r)*s,(m-E.g)*s,(p-E.b)*s,0)}}};let
Z=D;Z.ENTRIES=8;Z.PREV_TIME=-8;Z.PREV_R=-7;Z.PREV_G=-6;Z.PREV_B=-5;Z.PREV_A=-4;Z.
PREV_R2=-3;Z.PREV_G2=-2;Z.PREV_B2=-1;Z.R=1;Z.G=2;Z.B=3;Z.A=4;Z.R2=5;Z.G2=6;Z.B2=7;class Lt{constructor(t){this.frames=I.newFloatArray(t),this.attachmentNames=new
Array(t)}getPropertyId(){return(4<<24)+this.slotIndex}getFrameCount(){return
this.frames.length}setFrame(t,e,a){this.frames[t]=e,this.attachmentNames[t]=a}apply(t,e,a,s,l,u,o)
{const n=t.slots[this.slotIndex];if(o==ot.mixOut&&u==S.setup){const
f=n.data.attachmentName;n.setAttachment(f==null?null:t.getAttachment(this.slotIndex,f));return}const
r=this.frames;if(a<r[0]){if(u==S.setup||u==S.first){const
f=n.data.attachmentName;n.setAttachment(f==null?null:t.getAttachment(this.slotIndex,f))}return}let
c=0;a>=r[r.length-1]?c=r.length-1:c=z.binarySearch(r,a,1)-1;const
d=this.attachmentNames[c];t.slots[this.slotIndex].setAttachment(d==null?
null:t.getAttachment(this.slotIndex,d))}}let le=null;class pe extends lt{constructor(t)
{super(t),this.frames=I.newFloatArray(t),this.frameVertices=new Array(t),le==null&&
(le=I.newFloatArray(64))}getPropertyId()
{return(6<<27)+Number(this.attachment.id)+this.slotIndex}setFrame(t,e,a)
{this.frames[t]=e,this.frameVertices[t]=a}apply(t,e,a,s,l,u,o){const
n=t.slots[this.slotIndex],r=n.getAttachment();if(!(r instanceof
yt)||!r.applyDeform(this.attachment))return;const c=n.attachmentVertices;c.length==0&&
(u=S.setup);const d=this.frameVertices,f=d[0].length,h=this.frames;if(a<h[0]){const w=r;switch(u){case
S.setup:c.length=0;return;case S.first:if(l==1){c.length=0;break}const
A=I.setArraySize(c,f);if(w.bones==null){const x=w.vertices;for(let R=0;R<f;R++)A[R]+=(x[R]-
A[R])*l}else{l=1-l;for(let x=0;x<f;x++)A[x]*=l}}return}const m=I.setArraySize(c,f);if(a>=h[h.length-1])
{const w=d[h.length-1];if(l==1)if(u==S.add){const A=r;if(A.bones==null){const x=A.vertices;for(let
R=0;R<f;R++)m[R]+=w[R]-x[R]}else for(let x=0;x<f;x++)m[x]+=w[x]}else I.arrayCopy(w,0,m,0,f);else
switch(u){case S.setup:{const x=r;if(x.bones==null){const R=x.vertices;for(let C=0;C<f;C++){const
T=R[C];m[C]=T+(w[C]-T)*l}}else for(let R=0;R<f;R++)m[R]=w[R]*l;break}case S.first:case
S.replace:for(let x=0;x<f;x++)m[x]+=(w[x]-m[x])*l;case S.add:const A=r;if(A.bones==null){const
x=A.vertices;for(let R=0;R<f;R++)m[R]+=(w[R]-x[R])*l}else for(let
x=0;x<f;x++)m[x]+=w[x]*l}return}const p=z.binarySearch(h,a),g=d[p-
1],E=d[p],b=h[p],M=this.getCurvePercent(p-1,1-(a-b)/(h[p-1]-b));if(l==1)if(u==S.add){const
w=r;if(w.bones==null){const A=w.vertices;for(let x=0;x<f;x++){const R=g[x];m[x]+=R+(E[x]-R)*M-
A[x]}}else for(let A=0;A<f;A++){const x=g[A];m[A]+=x+(E[A]-x)*M}}else for(let w=0;w<f;w++){const
A=g[w];m[w]=A+(E[w]-A)*M}else switch(u){case S.setup:{const A=r;if(A.bones==null){const
x=A.vertices;for(let R=0;R<f;R++){const C=g[R],T=x[R];m[R]=T+(C+(E[R]-C)*M-T)*l}}else for(let
x=0;x<f;x++){const R=g[x];m[x]=(R+(E[x]-R)*M)*l}break}case S.first:case S.replace:for(let
A=0;A<f;A++){const x=g[A];m[A]+=(x+(E[A]-x)*M-m[A])*l}break;case S.add:const
w=r;if(w.bones==null){const A=w.vertices;for(let x=0;x<f;x++){const R=g[x];m[x]+=(R+(E[x]-R)*M-
A[x])*l}}else for(let A=0;A<f;A++){const x=g[A];m[A]+=(x+(E[A]-x)*M)*l}}}}class xe{constructor(t)
{this.frames=I.newFloatArray(t),this.events=new Array(t)}getPropertyId(){return
7<<24}getFrameCount(){return this.frames.length}setFrame(t,e)
{this.frames[t]=e.time,this.events[t]=e}apply(t,e,a,s,l,u,o){if(s==null)return;const
n=this.frames,r=this.frames.length;if(e>a)this.apply(t,e,Number.MAX_VALUE,s,l,u,o),e=-1;else
if(e>=n[r-1])return;if(a<n[0])return;let c=0;if(e<n[0])c=0;else{c=z.binarySearch(n,e);const
d=n[c];for(;c>0&&n[c-1]==d;)c--}for(;c<r&&a>=n[c];c++)s.push(this.events[c])}}class Bt{constructor(t)
{this.frames=I.newFloatArray(t),this.drawOrders=new Array(t)}getPropertyId(){return
8<<24}getFrameCount(){return this.frames.length}setFrame(t,e,a)
{this.frames[t]=e,this.drawOrders[t]=a}apply(t,e,a,s,l,u,o){const
n=t.drawOrder,r=t.slots;if(o==ot.mixOut&&u==S.setup){I.arrayCopy(t.slots,0,t.drawOrder,0,t.slots.length);return}const c=this.frames;if(a<c[0])
{(u==S.setup||u==S.first)&&I.arrayCopy(t.slots,0,t.drawOrder,0,t.slots.length);return}let
d=0;a>=c[c.length-1]?d=c.length-1:d=z.binarySearch(c,a)-1;const
f=this.drawOrders[d];if(f==null)I.arrayCopy(r,0,n,0,r.length);else for(let
h=0,m=f.length;h<m;h++)n[h]=r[f[h]]}}const L=class extends lt{constructor(i)
{super(i),this.frames=I.newFloatArray(i*L.ENTRIES)}getPropertyId()
{return(9<<24)+this.ikConstraintIndex}setFrame(i,t,e,a,s,l)
{i*=L.ENTRIES,this.frames[i]=t,this.frames[i+L.MIX]=e,this.frames[i+L.BEND_DIRECTION]=a,this.fra
mes[i+L.COMPRESS]=s?1:0,this.frames[i+L.STRETCH]=l?1:0}apply(i,t,e,a,s,l,u){const
o=this.frames,n=i.ikConstraints[this.ikConstraintIndex];if(e<o[0]){switch(l){case
S.setup:n.mix=n.data.mix,n.bendDirection=n.data.bendDirection,n.compress=n.data.compress,n.stret
ch=n.data.stretch;return;case S.first:n.mix+=(n.data.mix-
n.mix)*s,n.bendDirection=n.data.bendDirection,n.compress=n.data.compress,n.stretch=n.data.stretch
}return}if(e>=o[o.length-L.ENTRIES]){l==S.setup?(n.mix=n.data.mix+(o[o.length+L.PREV_MIX]-
n.data.mix)*s,u==ot.mixOut?
(n.bendDirection=n.data.bendDirection,n.compress=n.data.compress,n.stretch=n.data.stretch):
(n.bendDirection=o[o.length+L.PREV_BEND_DIRECTION],n.compress=o[o.length+L.PREV_COMPR
ESS]!=0,n.stretch=o[o.length+L.PREV_STRETCH]!=0)):(n.mix+=(o[o.length+L.PREV_MIX]-
n.mix)*s,u==ot.mixIn&&
(n.bendDirection=o[o.length+L.PREV_BEND_DIRECTION],n.compress=o[o.length+L.PREV_COMPR
ESS]!=0,n.stretch=o[o.length+L.PREV_STRETCH]!=0));return}const
r=z.binarySearch(o,e,L.ENTRIES),c=o[r+L.PREV_MIX],d=o[r],f=this.getCurvePercent(r/L.ENTRIES-
1,1-(e-d)/(o[r+L.PREV_TIME]-d));l==S.setup?(n.mix=n.data.mix+(c+(o[r+L.MIX]-c)*f-
n.data.mix)*s,u==ot.mixOut?
(n.bendDirection=n.data.bendDirection,n.compress=n.data.compress,n.stretch=n.data.stretch):
(n.bendDirection=o[r+L.PREV_BEND_DIRECTION],n.compress=o[r+L.PREV_COMPRESS]!=0,n.stre
tch=o[r+L.PREV_STRETCH]!=0)):(n.mix+=(c+(o[r+L.MIX]-c)*f-n.mix)*s,u==ot.mixIn&&
(n.bendDirection=o[r+L.PREV_BEND_DIRECTION],n.compress=o[r+L.PREV_COMPRESS]!=0,n.stre
tch=o[r+L.PREV_STRETCH]!=0))}};let
ft=L;ft.ENTRIES=5;ft.PREV_TIME=-5;ft.PREV_MIX=-4;ft.PREV_BEND_DIRECTION=-3;ft.PREV_CO
MPRESS=-2;ft.PREV_STRETCH=-1;ft.MIX=1;ft.BEND_DIRECTION=2;ft.COMPRESS=3;ft.STRETC
H=4;const j=class extends lt{constructor(i)
{super(i),this.frames=I.newFloatArray(i*j.ENTRIES)}getPropertyId()
{return(10<<24)+this.transformConstraintIndex}setFrame(i,t,e,a,s,l)
{i*=j.ENTRIES,this.frames[i]=t,this.frames[i+j.ROTATE]=e,this.frames[i+j.TRANSLATE]=a,this.frames[i
+j.SCALE]=s,this.frames[i+j.SHEAR]=l}apply(i,t,e,a,s,l,u){const
o=this.frames,n=i.transformConstraints[this.transformConstraintIndex];if(e<o[0]){const
h=n.data;switch(l){case
S.setup:n.rotateMix=h.rotateMix,n.translateMix=h.translateMix,n.scaleMix=h.scaleMix,n.shearMix=h.s
hearMix;return;case S.first:n.rotateMix+=(h.rotateMix-n.rotateMix)*s,n.translateMix+=(h.translateMix-
n.translateMix)*s,n.scaleMix+=(h.scaleMix-n.scaleMix)*s,n.shearMix+=(h.shearMix-
n.shearMix)*s}return}let r=0,c=0,d=0,f=0;if(e>=o[o.length-j.ENTRIES]){const
h=o.length;r=o[h+j.PREV_ROTATE],c=o[h+j.PREV_TRANSLATE],d=o[h+j.PREV_SCALE],f=o[h+j.PR
EV_SHEAR]}else{const
h=z.binarySearch(o,e,j.ENTRIES);r=o[h+j.PREV_ROTATE],c=o[h+j.PREV_TRANSLATE],d=o[h+j.PR
EV_SCALE],f=o[h+j.PREV_SHEAR];const m=o[h],p=this.getCurvePercent(h/j.ENTRIES-1,1-(em)/(o[h+j.PREV_TIME]-m));r+=(o[h+j.ROTATE]-r)*p,c+=(o[h+j.TRANSLATE]-c)*p,d+=(o[h+j.SCALE]-
d)*p,f+=(o[h+j.SHEAR]-f)*p}if(l==S.setup){const h=n.data;n.rotateMix=h.rotateMix+(r-
h.rotateMix)*s,n.translateMix=h.translateMix+(c-h.translateMix)*s,n.scaleMix=h.scaleMix+(d-
h.scaleMix)*s,n.shearMix=h.shearMix+(f-h.shearMix)*s}else n.rotateMix+=(r-
n.rotateMix)*s,n.translateMix+=(c-n.translateMix)*s,n.scaleMix+=(d-n.scaleMix)*s,n.shearMix+=(f-
n.shearMix)*s}};let
dt=j;dt.ENTRIES=5;dt.PREV_TIME=-5;dt.PREV_ROTATE=-4;dt.PREV_TRANSLATE=-3;dt.PREV_S
CALE=-2;dt.PREV_SHEAR=-1;dt.ROTATE=1;dt.TRANSLATE=2;dt.SCALE=3;dt.SHEAR=4;const
gt=class extends lt{constructor(i){super(i),this.frames=I.newFloatArray(i*gt.ENTRIES)}getPropertyId()
{return(11<<24)+this.pathConstraintIndex}setFrame(i,t,e)
{i*=gt.ENTRIES,this.frames[i]=t,this.frames[i+gt.VALUE]=e}apply(i,t,e,a,s,l,u){const
o=this.frames,n=i.pathConstraints[this.pathConstraintIndex];if(e<o[0]){switch(l){case
S.setup:n.position=n.data.position;return;case S.first:n.position+=(n.data.position-
n.position)*s}return}let r=0;if(e>=o[o.length-gt.ENTRIES])r=o[o.length+gt.PREV_VALUE];else{const
c=z.binarySearch(o,e,gt.ENTRIES);r=o[c+gt.PREV_VALUE];const
d=o[c],f=this.getCurvePercent(c/gt.ENTRIES-1,1-(e-d)/(o[c+gt.PREV_TIME]-d));r+=(o[c+gt.VALUE]-
r)*f}l==S.setup?n.position=n.data.position+(r-n.data.position)*s:n.position+=(r-n.position)*s}};let
At=gt;At.ENTRIES=2;At.PREV_TIME=-2;At.PREV_VALUE=-1;At.VALUE=1;class Et extends
At{constructor(t){super(t)}getPropertyId(){return(12<<24)+this.pathConstraintIndex}apply(t,e,a,s,l,u,o)
{const n=this.frames,r=t.pathConstraints[this.pathConstraintIndex];if(a<n[0]){switch(u){case
S.setup:r.spacing=r.data.spacing;return;case S.first:r.spacing+=(r.data.spacing-r.spacing)*l}return}let
c=0;if(a>=n[n.length-Et.ENTRIES])c=n[n.length+Et.PREV_VALUE];else{const
d=z.binarySearch(n,a,Et.ENTRIES);c=n[d+Et.PREV_VALUE];const
f=n[d],h=this.getCurvePercent(d/Et.ENTRIES-1,1-(a-f)/(n[d+Et.PREV_TIME]-f));c+=(n[d+Et.VALUE]-
c)*h}u==S.setup?r.spacing=r.data.spacing+(c-r.data.spacing)*l:r.spacing+=(c-r.spacing)*l}}const
nt=class extends lt{constructor(i){super(i),this.frames=I.newFloatArray(i*nt.ENTRIES)}getPropertyId()
{return(13<<24)+this.pathConstraintIndex}setFrame(i,t,e,a)
{i*=nt.ENTRIES,this.frames[i]=t,this.frames[i+nt.ROTATE]=e,this.frames[i+nt.TRANSLATE]=a}apply(i,t
,e,a,s,l,u){const o=this.frames,n=i.pathConstraints[this.pathConstraintIndex];if(e<o[0]){switch(l){case
S.setup:n.rotateMix=n.data.rotateMix,n.translateMix=n.data.translateMix;return;case
S.first:n.rotateMix+=(n.data.rotateMix-n.rotateMix)*s,n.translateMix+=(n.data.translateMix-
n.translateMix)*s}return}let r=0,c=0;if(e>=o[o.length-
nt.ENTRIES])r=o[o.length+nt.PREV_ROTATE],c=o[o.length+nt.PREV_TRANSLATE];else{const
d=z.binarySearch(o,e,nt.ENTRIES);r=o[d+nt.PREV_ROTATE],c=o[d+nt.PREV_TRANSLATE];const
f=o[d],h=this.getCurvePercent(d/nt.ENTRIES-1,1-(e-f)/(o[d+nt.PREV_TIME]-f));r+=(o[d+nt.ROTATE]-
r)*h,c+=(o[d+nt.TRANSLATE]-c)*h}l==S.setup?(n.rotateMix=n.data.rotateMix+(r-
n.data.rotateMix)*s,n.translateMix=n.data.translateMix+(c-n.data.translateMix)*s):(n.rotateMix+=(r-
n.rotateMix)*s,n.translateMix+=(c-n.translateMix)*s)}};let
bt=nt;bt.ENTRIES=3;bt.PREV_TIME=-3;bt.PREV_ROTATE=-2;bt.PREV_TRANSLATE=-1;bt.ROTATE
=1;bt.TRANSLATE=2;const K=class{constructor(i){this.tracks=new Array,this.events=new
Array,this.listeners=new Array,this.queue=new Kt(this),this.propertyIDs=new
Pe,this.animationsChanged=!1,this.timeScale=1,this.trackEntryPool=new ke(()=>new
Wt),this.data=i}update(i){i*=this.timeScale;const t=this.tracks;for(let e=0,a=t.length;e<a;e++){const
s=t[e];if(s==null)continue;s.animationLast=s.nextAnimationLast,s.trackLast=s.nextTrackLast;let
l=i*s.timeScale;if(s.delay>0){if(s.delay-=l,s.delay>0)continue;l=-s.delay,s.delay=0}let
u=s.next;if(u!=null){const o=s.trackLast-u.delay;if(o>=0){for(u.delay=0,u.trackTime=s.timeScale==0?0:
(o/s.timeScale+i)*u.timeScale,s.trackTime+=l,this.setCurrent(e,u,!0);u.mixingFrom!=null;)u.mixTime+=
i,u=u.mixingFrom;continue}}else if(s.trackLast>=s.trackEnd&&s.mixingFrom==null)
{t[e]=null,this.queue.end(s),this.disposeNext(s);continue}if(s.mixingFrom!=null&&this.updateMixingFro
m(s,i)){let o=s.mixingFrom;for(s.mixingFrom=null,o!=null&&
(o.mixingTo=null);o!=null;)this.queue.end(o),o=o.mixingFrom}s.trackTime+=l}this.queue.drain()}updat
eMixingFrom(i,t){const e=i.mixingFrom;if(e==null)return!0;const a=this.updateMixingFrom(e,t);return
e.animationLast=e.nextAnimationLast,e.trackLast=e.nextTrackLast,i.mixTime>0&&i.mixTime>=i.mixD
uration?((e.totalAlpha==0||i.mixDuration==0)&&(i.mixingFrom=e.mixingFrom,e.mixingFrom!=null&&
(e.mixingFrom.mixingTo=i),i.interruptAlpha=e.interruptAlpha,this.queue.end(e)),a):
(e.trackTime+=t*e.timeScale,i.mixTime+=t,!1)}apply(i){if(i==null)throw new Error("skeleton cannot be
null.");this.animationsChanged&&this._animationsChanged();const t=this.events,e=this.tracks;let
a=!1;for(let s=0,l=e.length;s<l;s++){const u=e[s];if(u==null||u.delay>0)continue;a=!0;const o=s==0?
S.first:u.mixBlend;let n=u.alpha;u.mixingFrom!=null?
n*=this.applyMixingFrom(u,i,o):u.trackTime>=u.trackEnd&&u.next==null&&(n=0);const
r=u.animationLast,c=u.getAnimationTime(),d=u.animation.timelines.length,f=u.animation.timelines;if(s
==0&&n==1||o==S.add)for(let h=0;h<d;h++)f[h].apply(i,r,c,t,n,o,ot.mixIn);else{const
h=u.timelineMode,m=u.timelinesRotation.length==0;m&&I.setArraySize(u.timelinesRotation,d<<1,null
);const p=u.timelinesRotation;for(let g=0;g<d;g++){const E=f[g],b=h[g]==K.SUBSEQUENT?
o:S.setup;E instanceof it?
this.applyRotateTimeline(E,i,c,n,b,p,g<<1,m):E.apply(i,r,c,t,n,b,ot.mixIn)}}this.queueEvents(u,c),t.lengt
h=0,u.nextAnimationLast=c,u.nextTrackLast=u.trackTime}return
this.queue.drain(),a}applyMixingFrom(i,t,e){const
a=i.mixingFrom;a.mixingFrom!=null&&this.applyMixingFrom(a,t,e);let s=0;i.mixDuration==0?
(s=1,e==S.first&&(e=S.setup)):(s=i.mixTime/i.mixDuration,s>1&&(s=1),e!=S.first&&
(e=a.mixBlend));const l=s<a.eventThreshold?
this.events:null,u=s<a.attachmentThreshold,o=s<a.drawOrderThreshold,n=a.animationLast,r=a.getAn
imationTime(),c=a.animation.timelines.length,d=a.animation.timelines,f=a.alpha*i.interruptAlpha,h=f*
(1-s);if(e==S.add)for(let m=0;m<c;m++)d[m].apply(t,n,r,l,h,e,ot.mixOut);else{const
m=a.timelineMode,p=a.timelineHoldMix,g=a.timelinesRotation.length==0;g&&I.setArraySize(a.timelin
esRotation,c<<1,null);const E=a.timelinesRotation;a.totalAlpha=0;for(let b=0;b<c;b++){const
M=d[b];let w=ot.mixOut,A,x=0;switch(m[b]){case K.SUBSEQUENT:if(!u&&M instanceof Lt||!o&&M
instanceof Bt)continue;A=e,x=h;break;case K.FIRST:A=S.setup,x=h;break;case
K.HOLD:A=S.setup,x=f;break;default:A=S.setup;const R=p[b];x=f*Math.max(0,1-
R.mixTime/R.mixDuration);break}a.totalAlpha+=x,M instanceof it?
this.applyRotateTimeline(M,t,r,x,A,E,b<<1,g):(A==S.setup&&(M instanceof Lt?u&&(w=ot.mixOut):M
instanceof Bt&&o&&(w=ot.mixOut)),M.apply(t,n,r,l,x,A,w))}}return
i.mixDuration>0&&this.queueEvents(a,r),this.events.length=0,a.nextAnimationLast=r,a.nextTrackLast
=a.trackTime,s}applyRotateTimeline(i,t,e,a,s,l,u,o){if(o&&(l[u]=0),a==1)
{i.apply(t,0,e,null,1,s,ot.mixIn);return}const n=i,r=n.frames,c=t.bones[n.boneIndex];let
d=0,f=0;if(e<r[0])switch(s){case S.setup:c.rotation=c.data.rotation;default:return;case
S.first:d=c.rotation,f=c.data.rotation}else if(d=s==S.setup?c.data.rotation:c.rotation,e>=r[r.length-
it.ENTRIES])f=c.data.rotation+r[r.length+it.PREV_ROTATION];else{const
p=z.binarySearch(r,e,it.ENTRIES),g=r[p+it.PREV_ROTATION],E=r[p],b=n.getCurvePercent((p>>1)-1,
1-(e-E)/(r[p+it.PREV_TIME]-E));f=r[p+it.ROTATION]-g,f-=(16384-(16384.499999999996-
f/360|0))*360,f=g+f*b+c.data.rotation,f-=(16384-(16384.499999999996-f/360|0))*360}let h=0,m=fd;if(m-=(16384-(16384.499999999996-m/360|0))*360,m==0)h=l[u];else{let p=0,g=0;o?(p=0,g=m):
(p=l[u],g=l[u+1]);const E=m>0;let b=p>=0;y.signum(g)!=y.signum(m)&&Math.abs(g)<=90&&
(Math.abs(p)>180&&(p+=360*y.signum(p)),b=E),h=m+p-p%360,b!=E&&
(h+=360*y.signum(p)),l[u]=h}l[u+1]=m,d+=h*a,c.rotation=d-(16384-(16384.499999999996-
d/360|0))*360}queueEvents(i,t){const e=i.animationStart,a=i.animationEnd,s=a-
e,l=i.trackLast%s,u=this.events;let o=0;const n=u.length;for(;o<n;o++){const
c=u[o];if(c.time<l)break;c.time>a||this.queue.event(i,c)}let r=!1;for(i.loop?
r=s==0||l>i.trackTime%s:r=t>=a&&i.animationLast<a,r&&this.queue.complete(i);o<n;o++)u[o].time<e||t
his.queue.event(i,u[o])}clearTracks(){const
i=this.queue.drainDisabled;this.queue.drainDisabled=!0;for(let
t=0,e=this.tracks.length;t<e;t++)this.clearTrack(t);this.tracks.length=0,this.queue.drainDisabled=i,this.
queue.drain()}clearTrack(i){if(i>=this.tracks.length)return;const
t=this.tracks[i];if(t==null)return;this.queue.end(t),this.disposeNext(t);let e=t;for(;;){const
a=e.mixingFrom;if(a==null)break;this.queue.end(a),e.mixingFrom=null,e.mixingTo=null,e=a}this.tracks
[t.trackIndex]=null,this.queue.drain()}setCurrent(i,t,e){const
a=this.expandToIndex(i);this.tracks[i]=t,a!=null&&
(e&&this.queue.interrupt(a),t.mixingFrom=a,a.mixingTo=t,t.mixTime=0,a.mixingFrom!=null&&a.mixDur
ation>0&&
(t.interruptAlpha*=Math.min(1,a.mixTime/a.mixDuration)),a.timelinesRotation.length=0),this.queue.sta
rt(t)}setAnimation(i,t,e){const a=this.data.skeletonData.findAnimation(t);if(a==null)throw new
Error(`Animation not found: ${t}`);return this.setAnimationWith(i,a,e)}setAnimationWith(i,t,e)
{if(t==null)throw new Error("animation cannot be null.");let a=!0,s=this.expandToIndex(i);s!=null&&
(s.nextTrackLast==-1?
(this.tracks[i]=s.mixingFrom,this.queue.interrupt(s),this.queue.end(s),this.disposeNext(s),s=s.mixingFr
om,a=!1):this.disposeNext(s));const l=this.trackEntry(i,t,e,s);return
this.setCurrent(i,l,a),this.queue.drain(),l}addAnimation(i,t,e,a){const
s=this.data.skeletonData.findAnimation(t);if(s==null)throw new Error(`Animation not found:
${t}`);return this.addAnimationWith(i,s,e,a)}addAnimationWith(i,t,e,a){if(t==null)throw new
Error("animation cannot be null.");let
s=this.expandToIndex(i);if(s!=null)for(;s.next!=null;)s=s.next;const
l=this.trackEntry(i,t,e,s);if(s==null)this.setCurrent(i,l,!0),this.queue.drain();else if(s.next=l,a<=0){const
u=s.animationEnd-s.animationStart;u!=0?(s.loop?a+=u*(1+
(s.trackTime/u|0)):a+=Math.max(u,s.trackTime),a-
=this.data.getMix(s.animation,t)):a=s.trackTime}return l.delay=a,l}setEmptyAnimation(i,t){const
e=this.setAnimationWith(i,K.emptyAnimation,!1);return
e.mixDuration=t,e.trackEnd=t,e}addEmptyAnimation(i,t,e){e<=0&&(e-=t);const
a=this.addAnimationWith(i,K.emptyAnimation,!1,e);return
a.mixDuration=t,a.trackEnd=t,a}setEmptyAnimations(i){const
t=this.queue.drainDisabled;this.queue.drainDisabled=!0;for(let e=0,a=this.tracks.length;e<a;e++)
{const
s=this.tracks[e];s!=null&&this.setEmptyAnimation(s.trackIndex,i)}this.queue.drainDisabled=t,this.queu
e.drain()}expandToIndex(i){return i<this.tracks.length?this.tracks[i]:
(I.ensureArrayCapacity(this.tracks,i-
this.tracks.length+1,null),this.tracks.length=i+1,null)}trackEntry(i,t,e,a){const
s=this.trackEntryPool.obtain();return
s.trackIndex=i,s.animation=t,s.loop=e,s.holdPrevious=!1,s.eventThreshold=0,s.attachmentThreshold=0,s.drawOrderThreshold=0,s.animationStart=0,s.animationEnd=t.duration,s.animationLast=-1,s.nextA
nimationLast=-1,s.delay=0,s.trackTime=0,s.trackLast=-1,s.nextTrackLast=-1,s.trackEnd=Number.MA
X_VALUE,s.timeScale=1,s.alpha=1,s.interruptAlpha=1,s.mixTime=0,s.mixDuration=a==null?
0:this.data.getMix(a.animation,t),s}disposeNext(i){let
t=i.next;for(;t!=null;)this.queue.dispose(t),t=t.next;i.next=null}_animationsChanged()
{this.animationsChanged=!1,this.propertyIDs.clear();for(let i=0,t=this.tracks.length;i<t;i++){let
e=this.tracks[i];if(e!=null)
{for(;e.mixingFrom!=null;)e=e.mixingFrom;do(e.mixingFrom==null||e.mixBlend!=S.add)&&this.setTime
lineModes(e),e=e.mixingTo;while(e!=null)}}}setTimelineModes(i){const
t=i.mixingTo,e=i.animation.timelines,a=i.animation.timelines.length,s=I.setArraySize(i.timelineMode,a)
;i.timelineHoldMix.length=0;const
l=I.setArraySize(i.timelineHoldMix,a),u=this.propertyIDs;if(t!=null&&t.holdPrevious){for(let
o=0;o<a;o++)u.add(e[o].getPropertyId()),s[o]=K.HOLD;return}t:for(let o=0;o<a;o++){const
n=e[o].getPropertyId();if(!u.add(n))s[o]=K.SUBSEQUENT;else
if(t==null||!this.hasTimeline(t,n))s[o]=K.FIRST;else{for(let
r=t.mixingTo;r!=null;r=r.mixingTo)if(!this.hasTimeline(r,n)){if(i.mixDuration>0)
{s[o]=K.HOLD_MIX,l[o]=r;continue t}break}s[o]=K.HOLD}}}hasTimeline(i,t){const
e=i.animation.timelines;for(let
a=0,s=e.length;a<s;a++)if(e[a].getPropertyId()==t)return!0;return!1}getCurrent(i){return
i>=this.tracks.length?null:this.tracks[i]}addListener(i){if(i==null)throw new Error("listener cannot be
null.");this.listeners.push(i)}removeListener(i){const
t=this.listeners.indexOf(i);t>=0&&this.listeners.splice(t,1)}clearListeners()
{this.listeners.length=0}clearListenerNotifications(){this.queue.clear()}setAnimationByName(i,t,e)
{K.deprecatedWarning1||(K.deprecatedWarning1=!0,console.warn("Spine Deprecation Warning:
AnimationState.setAnimationByName is deprecated, please use setAnimation from now
on.")),this.setAnimation(i,t,e)}addAnimationByName(i,t,e,a){K.deprecatedWarning2||
(K.deprecatedWarning2=!0,console.warn("Spine Deprecation Warning:
AnimationState.addAnimationByName is deprecated, please use addAnimation from now
on.")),this.addAnimation(i,t,e,a)}hasAnimation(i){return
this.data.skeletonData.findAnimation(i)!==null}hasAnimationByName(i){return
K.deprecatedWarning3||(K.deprecatedWarning3=!0,console.warn("Spine Deprecation Warning:
AnimationState.hasAnimationByName is deprecated, please use hasAnimation from now
on.")),this.hasAnimation(i)}};let wt=K;wt.emptyAnimation=new z("<empty>",
[],0);wt.SUBSEQUENT=0;wt.FIRST=1;wt.HOLD=2;wt.HOLD_MIX=3;wt.deprecatedWarning1=!1;wt.d
eprecatedWarning2=!1;wt.deprecatedWarning3=!1;const Mt=class{constructor()
{this.mixBlend=S.replace,this.timelineMode=new Array,this.timelineHoldMix=new
Array,this.timelinesRotation=new Array}reset()
{this.next=null,this.mixingFrom=null,this.mixingTo=null,this.animation=null,this.listener=null,this.timelin
eMode.length=0,this.timelineHoldMix.length=0,this.timelinesRotation.length=0}getAnimationTime()
{if(this.loop){const i=this.animationEnd-this.animationStart;return i==0?
this.animationStart:this.trackTime%i+this.animationStart}return
Math.min(this.trackTime+this.animationStart,this.animationEnd)}setAnimationLast(i)
{this.animationLast=i,this.nextAnimationLast=i}isComplete(){return
this.trackTime>=this.animationEnd-this.animationStart}resetRotationDirections()
{this.timelinesRotation.length=0}get time(){return Mt.deprecatedWarning1||
(Mt.deprecatedWarning1=!0,console.warn("Spine Deprecation Warning: TrackEntry.time isdeprecated, please use trackTime from now on.")),this.trackTime}set time(i){Mt.deprecatedWarning1||
(Mt.deprecatedWarning1=!0,console.warn("Spine Deprecation Warning: TrackEntry.time is
deprecated, please use trackTime from now on.")),this.trackTime=i}get endTime(){return
Mt.deprecatedWarning2||(Mt.deprecatedWarning2=!0,console.warn("Spine Deprecation Warning:
TrackEntry.endTime is deprecated, please use trackEnd from now on.")),this.trackTime}set endTime(i)
{Mt.deprecatedWarning2||(Mt.deprecatedWarning2=!0,console.warn("Spine Deprecation Warning:
TrackEntry.endTime is deprecated, please use trackEnd from now
on.")),this.trackTime=i}loopsCount(){return Math.floor(this.trackTime/this.trackEnd)}};let
Wt=Mt;Wt.deprecatedWarning1=!1;Wt.deprecatedWarning2=!1;const jt=class{constructor(i)
{this.objects=[],this.drainDisabled=!1,this.animState=i}start(i)
{this.objects.push(rt.start),this.objects.push(i),this.animState.animationsChanged=!0}interrupt(i)
{this.objects.push(rt.interrupt),this.objects.push(i)}end(i)
{this.objects.push(rt.end),this.objects.push(i),this.animState.animationsChanged=!0}dispose(i)
{this.objects.push(rt.dispose),this.objects.push(i)}complete(i)
{this.objects.push(rt.complete),this.objects.push(i)}event(i,t)
{this.objects.push(rt.event),this.objects.push(i),this.objects.push(t)}deprecateStuff(){return
jt.deprecatedWarning1||(jt.deprecatedWarning1=!0,console.warn("Spine Deprecation Warning:
onComplete, onStart, onEnd, onEvent art deprecated, please use listeners from now on.
'state.addListener({ complete: function(track, event) { } })'")),!0}drain()
{if(this.drainDisabled)return;this.drainDisabled=!0;const i=this.objec
import"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{M as
Ne}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_
settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d7
4d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@
0.11.4.026de2db.js";import{U as T,A as xt,C as W,M as y,P as Ye,a as R,b as pt,I as Oe,c as Xe,d as
Q,R as Vt,e as Tt,V as _e,B as Le,f as Be,S as De}from"./@pixi-
spine_base@4.0.6_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__@pixi_gra_074bb
737d3bfbcd5f96edd8ed71086e7.baac51e2.js";import"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85
af61b.js";import"./@pixi_graphics@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.
2__@pixi_sprit_a3536a87af99d28ff44bd814c835c9e3.87e100c4.js";import{B as
Pt}from"./@pixi_constants@7.4.2.8b356162.js";class ie{constructor(t){if(t==null)throw new
Error("name cannot be null.");this.name=t}}const Te=class extends ie{constructor(e){super(e),this.id=
(Te.nextID++&65535)
<<11,this.worldVerticesLength=0,this.deformAttachment=this}computeWorldVerticesOld(e,t)
{this.computeWorldVertices(e,0,this.worldVerticesLength,t,0,2)}computeWorldVertices(e,t,n,s,a,l)
{n=a+(n>>1)*l;const d=e.bone.skeleton,o=e.deform;let r=this.vertices;const i=this.bones;if(i==null)
{o.length>0&&(r=o);const h=e.bone.matrix,m=h.tx,x=h.ty,g=h.a,p=h.c,w=h.b,E=h.d;for(let
M=t,A=a;A<n;M+=2,A+=l){const b=r[M],S=r[M+1];s[A]=b*g+S*p+m,s[A+1]=b*w+S*E+x}return}let
c=0,f=0;for(let h=0;h<t;h+=2){const m=i[c];c+=m+1,f+=m}const u=d.bones;if(o.length==0)for(let
h=a,m=f*3;h<n;h+=l){let x=0,g=0,p=i[c++];for(p+=c;c<p;c++,m+=3){const
w=u[i[c]].matrix,E=r[m],M=r[m+1],A=r[m+2];x+=(E*w.a+M*w.c+w.tx)*A,g+=
(E*w.b+M*w.d+w.ty)*A}s[h]=x,s[h+1]=g}else{const h=o;for(let m=a,x=f*3,g=f<<1;m<n;m+=l){let
p=0,w=0,E=i[c++];for(E+=c;c<E;c++,x+=3,g+=2){const
M=u[i[c]].matrix,A=r[x]+h[g],b=r[x+1]+h[g+1],S=r[x+2];p+=(A*M.a+b*M.c+M.tx)*S,w+=(A*M.b+b*M.d+M.ty)*S}s[m]=p,s[m+1]=w}}}copyTo(e){this.bones!=null?(e.bones=new
Array(this.bones.length),T.arrayCopy(this.bones,0,e.bones,0,this.bones.length)):e.bones=null,this.vert
ices!=null?
(e.vertices=T.newFloatArray(this.vertices.length),T.arrayCopy(this.vertices,0,e.vertices,0,this.vertices.l
ength)):e.vertices=null,e.worldVerticesLength=this.worldVerticesLength,e.deformAttachment=this.def
ormAttachment}};let Ft=Te;Ft.nextID=0;class Gt extends Ft{constructor(t)
{super(t),this.type=xt.BoundingBox,this.color=new W(1,1,1,1)}copy(){const t=new
Gt(this.name);return this.copyTo(t),t.color.setFromColor(this.color),t}}class Zt extends Ft{constructor(t)
{super(t),this.type=xt.Clipping,this.color=new W(.2275,.2275,.8078,1)}copy(){const t=new
Zt(this.name);return this.copyTo(t),t.endSlot=this.endSlot,t.color.setFromColor(this.color),t}}class Xt
extends Ft{constructor(t){super(t),this.type=xt.Mesh,this.color=new W(1,1,1,1),this.tempColor=new
W(0,0,0,0)}getParentMesh(){return this.parentMesh}setParentMesh(t){this.parentMesh=t,t!=null&&
(this.bones=t.bones,this.vertices=t.vertices,this.worldVerticesLength=t.worldVerticesLength,this.regio
nUVs=t.regionUVs,this.triangles=t.triangles,this.hullLength=t.hullLength,this.worldVerticesLength=t.w
orldVerticesLength)}copy(){if(this.parentMesh!=null)return this.newLinkedMesh();const t=new
Xt(this.name);return
t.region=this.region,t.path=this.path,t.color.setFromColor(this.color),this.copyTo(t),t.regionUVs=new
Float32Array(this.regionUVs.length),T.arrayCopy(this.regionUVs,0,t.regionUVs,0,this.regionUVs.lengt
h),t.triangles=new
Array(this.triangles.length),T.arrayCopy(this.triangles,0,t.triangles,0,this.triangles.length),t.hullLength=
this.hullLength,this.edges!=null&&(t.edges=new
Array(this.edges.length),T.arrayCopy(this.edges,0,t.edges,0,this.edges.length)),t.width=this.width,t.hei
ght=this.height,t}newLinkedMesh(){const t=new Xt(this.name);return
t.region=this.region,t.path=this.path,t.color.setFromColor(this.color),t.deformAttachment=this.deformA
ttachment,t.setParentMesh(this.parentMesh!=null?this.parentMesh:this),t}}class _t extends
Ft{constructor(t){super(t),this.type=xt.Path,this.closed=!1,this.constantSpeed=!1,this.color=new
W(1,1,1,1)}copy(){const t=new _t(this.name);return this.copyTo(t),t.lengths=new
Array(this.lengths.length),T.arrayCopy(this.lengths,0,t.lengths,0,this.lengths.length),t.closed=closed,t.
constantSpeed=this.constantSpeed,t.color.setFromColor(this.color),t}}class zt extends
Ft{constructor(t){super(t),this.type=xt.Point,this.color=new W(.38,.94,0,1)}computeWorldPosition(t,n)
{const s=t.matrix;return
n.x=this.x*s.a+this.y*s.c+t.worldX,n.y=this.x*s.b+this.y*s.d+t.worldY,n}computeWorldRotation(t){const
n=t.matrix,s=y.cosDeg(this.rotation),a=y.sinDeg(this.rotation),l=s*n.a+a*n.c,d=s*n.b+a*n.d;return
Math.atan2(d,l)*y.radDeg}copy(){const t=new zt(this.name);return
t.x=this.x,t.y=this.y,t.rotation=this.rotation,t.color.setFromColor(this.color),t}}class oe{constructor(t,n)
{if(this.deform=new Array,t==null)throw new Error("data cannot be null.");if(n==null)throw new
Error("bone cannot be null.");this.data=t,this.bone=n,this.color=new
W,this.darkColor=t.darkColor==null?null:new
W,this.setToSetupPose(),this.blendMode=this.data.blendMode}getAttachment(){return
this.attachment}setAttachment(t){this.attachment!=t&&
(this.attachment=t,this.attachmentTime=this.bone.skeleton.time,this.deform.length=0)}setAttachment
Time(t){this.attachmentTime=this.bone.skeleton.time-t}getAttachmentTime(){return
this.bone.skeleton.time-this.attachmentTime}setToSetupPose()
{this.color.setFromColor(this.data.color),this.darkColor!=null&&this.darkColor.setFromColor(this.data.
darkColor),this.data.attachmentName==null?this.attachment=null:
(this.attachment=null,this.setAttachment(this.bone.skeleton.getAttachment(this.data.index,this.data.attachmentName)))}}const et=class extends ie{constructor(e)
{super(e),this.type=xt.Region,this.x=0,this.y=0,this.scaleX=1,this.scaleY=1,this.rotation=0,this.width=
0,this.height=0,this.color=new
W(1,1,1,1),this.offset=T.newFloatArray(8),this.uvs=T.newFloatArray(8),this.tempColor=new
W(1,1,1,1)}updateOffset(){const
e=this.width/this.region.originalWidth*this.scaleX,t=this.height/this.region.originalHeight*this.scaleY,n=
-this.width/2*this.scaleX+this.region.offsetX*e,s=-
this.height/2*this.scaleY+this.region.offsetY*t,a=n+this.region.width*e,l=s+this.region.height*t,d=this.r
otation*Math.PI/180,o=Math.cos(d),r=Math.sin(d),i=n*o+this.x,c=n*r,f=s*o+this.y,u=s*r,h=a*o+this.x,m
=a*r,x=l*o+this.y,g=l*r,p=this.offset;p[et.OX1]=i-u,p[et.OY1]=f+c,p[et.OX2]=i-
g,p[et.OY2]=x+c,p[et.OX3]=h-g,p[et.OY3]=x+m,p[et.OX4]=h-u,p[et.OY4]=f+m}setRegion(e)
{this.region=e;const t=this.uvs;e.rotate?
(t[2]=e.u,t[3]=e.v2,t[4]=e.u,t[5]=e.v,t[6]=e.u2,t[7]=e.v,t[0]=e.u2,t[1]=e.v2):
(t[0]=e.u,t[1]=e.v2,t[2]=e.u,t[3]=e.v,t[4]=e.u2,t[5]=e.v,t[6]=e.u2,t[7]=e.v2)}computeWorldVertices(e,t,n,s
){const a=this.offset,l=e instanceof oe?e.bone.matrix:e.matrix,d=l.tx,o=l.ty,r=l.a,i=l.c,c=l.b,f=l.d;let
u=0,h=0;u=a[et.OX1],h=a[et.OY1],t[n]=u*r+h*i+d,t[n+1]=u*c+h*f+o,n+=s,u=a[et.OX2],h=a[et.OY2],t[n]
=u*r+h*i+d,t[n+1]=u*c+h*f+o,n+=s,u=a[et.OX3],h=a[et.OY3],t[n]=u*r+h*i+d,t[n+1]=u*c+h*f+o,n+=s,u=
a[et.OX4],h=a[et.OY4],t[n]=u*r+h*i+d,t[n+1]=u*c+h*f+o}copy(){const e=new et(this.name);return
e.region=this.region,e.rendererObject=this.rendererObject,e.path=this.path,e.x=this.x,e.y=this.y,e.scal
eX=this.scaleX,e.scaleY=this.scaleY,e.rotation=this.rotation,e.width=this.width,e.height=this.height,T.
arrayCopy(this.uvs,0,e.uvs,0,8),T.arrayCopy(this.offset,0,e.offset,0,8),e.color.setFromColor(this.color),
e}};let
F=et;F.OX1=0;F.OY1=1;F.OX2=2;F.OY2=3;F.OX3=4;F.OY3=5;F.OX4=6;F.OY4=7;F.X1=0;F.Y1=1;F.C1
R=2;F.C1G=3;F.C1B=4;F.C1A=5;F.U1=6;F.V1=7;F.X2=8;F.Y2=9;F.C2R=10;F.C2G=11;F.C2B=12;F.C2
A=13;F.U2=14;F.V2=15;F.X3=16;F.Y3=17;F.C3R=18;F.C3G=19;F.C3B=20;F.C3A=21;F.U3=22;F.V3=2
3;F.X4=24;F.Y4=25;F.C4R=26;F.C4G=27;F.C4B=28;F.C4A=29;F.U4=30;F.V4=31;class
We{constructor(t,n){this.jitterX=0,this.jitterY=0,this.jitterX=t,this.jitterY=n}begin(t){}transform(t,n,s,a)
{t.x+=y.randomTriangular(-this.jitterX,this.jitterY),t.y+=y.randomTriangular(-this.jitterX,this.jitterY)}end()
{}}const Ve=class{constructor(e)
{this.centerX=0,this.centerY=0,this.radius=0,this.angle=0,this.worldX=0,this.worldY=0,this.radius=e}b
egin(e){this.worldX=e.x+this.centerX,this.worldY=e.y+this.centerY}transform(e,t,n,s){const
a=this.angle*y.degreesToRadians,l=e.x-this.worldX,d=e.y-
this.worldY,o=Math.sqrt(l*l+d*d);if(o<this.radius){const r=Ve.interpolation.apply(0,a,(this.radius-
o)/this.radius),i=Math.cos(r),c=Math.sin(r);e.x=i*l-c*d+this.worldX,e.y=c*l+i*d+this.worldY}}end(){}};let
ve=Ve;ve.interpolation=new Ye(2);class K{constructor(t,n,s){if(t==null)throw new Error("name cannot
be null.");if(n==null)throw new Error("timelines cannot be
null.");this.name=t,this.timelines=n,this.timelineIds=[];for(let
a=0;a<n.length;a++)this.timelineIds[n[a].getPropertyId()]=!0;this.duration=s}hasTimeline(t){return
this.timelineIds[t]==!0}apply(t,n,s,a,l,d,o,r){if(t==null)throw new Error("skeleton cannot be
null.");a&&this.duration!=0&&(s%=this.duration,n>0&&(n%=this.duration));const i=this.timelines;for(let
c=0,f=i.length;c<f;c++)i[c].apply(t,n,s,l,d,o,r)}static binarySearch(t,n,s=1){let a=0,l=t.length/s-
2;if(l==0)return s;let d=l>>>1;for(;;){if(t[(d+1)*s]<=n?a=d+1:l=d,a==l)return(a+1)*s;d=a+l>>>1}}static
linearSearch(t,n,s){for(let a=0,l=t.length-s;a<=l;a+=s)if(t[a]>n)return a;return-1}}var ke=(e=>
(e[e.rotate=0]="rotate",e[e.translate=1]="translate",e[e.scale=2]="scale",e[e.shear=3]="shear",e[e.atta
chment=4]="attachment",e[e.color=5]="color",e[e.deform=6]="deform",e[e.event=7]="event",e[e.draw
Order=8]="drawOrder",e[e.ikConstraint=9]="ikConstraint",e[e.transformConstraint=10]="transformConstraint",e[e.pathConstraintPosition=11]="pathConstraintPosition",e[e.pathConstraintSpacing=12]="pat
hConstraintSpacing",e[e.pathConstraintMix=13]="pathConstraintMix",e[e.twoColor=14]="twoColor",e)
)(ke||{});const z=class{constructor(e){if(e<=0)throw new Error(`frameCount must be > 0:
${e}`);this.curves=T.newFloatArray((e-1)*z.BEZIER_SIZE)}getFrameCount(){return
this.curves.length/z.BEZIER_SIZE+1}setLinear(e)
{this.curves[e*z.BEZIER_SIZE]=z.LINEAR}setStepped(e)
{this.curves[e*z.BEZIER_SIZE]=z.STEPPED}getCurveType(e){const
t=e*z.BEZIER_SIZE;if(t==this.curves.length)return z.LINEAR;const n=this.curves[t];return
n==z.LINEAR?z.LINEAR:n==z.STEPPED?z.STEPPED:z.BEZIER}setCurve(e,t,n,s,a){const l=(-
t*2+s)*.03,d=(-n*2+a)*.03,o=((t-s)*3+1)*.006,r=((n-a)*3+1)*.006;let
i=l*2+o,c=d*2+r,f=t*.3+l+o*.16666667,u=n*.3+d+r*.16666667,h=e*z.BEZIER_SIZE;const
m=this.curves;m[h++]=z.BEZIER;let x=f,g=u;for(let p=h+z.BEZIER_SIZE-
1;h<p;h+=2)m[h]=x,m[h+1]=g,f+=i,u+=c,i+=o,c+=r,x+=f,g+=u}getCurvePercent(e,t)
{t=y.clamp(t,0,1);const n=this.curves;let s=e*z.BEZIER_SIZE;const a=n[s];if(a==z.LINEAR)return
t;if(a==z.STEPPED)return 0;s++;let l=0;for(let o=s,r=s+z.BEZIER_SIZE-1;s<r;s+=2)if(l=n[s],l>=t){let
i,c;return s==o?(i=0,c=0):(i=n[s-2],c=n[s-1]),c+(n[s+1]-c)*(t-i)/(l-i)}const d=n[s-1];return d+(1-d)*(t-l)/(1-
l)}};let gt=z;gt.LINEAR=0;gt.STEPPED=1;gt.BEZIER=2;gt.BEZIER_SIZE=10*2-1;const kt=class
extends gt{constructor(e){super(e),this.frames=T.newFloatArray(e<<1)}getPropertyId(){return
0+this.boneIndex}setFrame(e,t,n)
{e<<=1,this.frames[e]=t,this.frames[e+kt.ROTATION]=n}apply(e,t,n,s,a,l,d){const
o=this.frames,r=e.bones[this.boneIndex];if(!r.active)return;if(n<o[0]){switch(l){case
R.setup:r.rotation=r.data.rotation;return;case R.first:const m=r.data.rotation-r.rotation;r.rotation+=(m-
(16384-(16384.499999999996-m/360|0))*360)*a}return}if(n>=o[o.length-kt.ENTRIES]){let
m=o[o.length+kt.PREV_ROTATION];switch(l){case R.setup:r.rotation=r.data.rotation+m*a;break;case
R.first:case R.replace:m+=r.data.rotation-r.rotation,m-=(16384-(16384.499999999996-
m/360|0))*360;case R.add:r.rotation+=m*a}return}const
i=K.binarySearch(o,n,kt.ENTRIES),c=o[i+kt.PREV_ROTATION],f=o[i],u=this.getCurvePercent((i>>1)-
1,1-(n-f)/(o[i+kt.PREV_TIME]-f));let h=o[i+kt.ROTATION]-c;switch(h=c+(h-(16384-
(16384.499999999996-h/360|0))*360)*u,l){case R.setup:r.rotation=r.data.rotation+(h-(16384-
(16384.499999999996-h/360|0))*360)*a;break;case R.first:case R.replace:h+=r.data.rotation-
r.rotation;case R.add:r.rotation+=(h-(16384-(16384.499999999996-h/360|0))*360)*a}}};let
nt=kt;nt.ENTRIES=2;nt.PREV_TIME=-2;nt.PREV_ROTATION=-1;nt.ROTATION=1;const ot=class
extends gt{constructor(e){super(e),this.frames=T.newFloatArray(e*ot.ENTRIES)}getPropertyId()
{return(1<<24)+this.boneIndex}setFrame(e,t,n,s)
{e*=ot.ENTRIES,this.frames[e]=t,this.frames[e+ot.X]=n,this.frames[e+ot.Y]=s}apply(e,t,n,s,a,l,d){const
o=this.frames,r=e.bones[this.boneIndex];if(!r.active)return;if(n<o[0]){switch(l){case
R.setup:r.x=r.data.x,r.y=r.data.y;return;case R.first:r.x+=(r.data.x-r.x)*a,r.y+=(r.data.y-r.y)*a}return}let
i=0,c=0;if(n>=o[o.length-ot.ENTRIES])i=o[o.length+ot.PREV_X],c=o[o.length+ot.PREV_Y];else{const
f=K.binarySearch(o,n,ot.ENTRIES);i=o[f+ot.PREV_X],c=o[f+ot.PREV_Y];const
u=o[f],h=this.getCurvePercent(f/ot.ENTRIES-1,1-(n-u)/(o[f+ot.PREV_TIME]-u));i+=(o[f+ot.X]-i)*h,c+=
(o[f+ot.Y]-c)*h}switch(l){case R.setup:r.x=r.data.x+i*a,r.y=r.data.y+c*a;break;case R.first:case
R.replace:r.x+=(r.data.x+i-r.x)*a,r.y+=(r.data.y+c-r.y)*a;break;case R.add:r.x+=i*a,r.y+=c*a}}};let
Et=ot;Et.ENTRIES=3;Et.PREV_TIME=-3;Et.PREV_X=-2;Et.PREV_Y=-1;Et.X=1;Et.Y=2;class ut
extends Et{constructor(t){super(t)}getPropertyId(){return(2<<24)+this.boneIndex}apply(t,n,s,a,l,d,o)
{const r=this.frames,i=t.bones[this.boneIndex];if(!i.active)return;if(s<r[0]){switch(d){case
R.setup:i.scaleX=i.data.scaleX,i.scaleY=i.data.scaleY;return;case R.first:i.scaleX+=(i.data.scaleXi.scaleX)*l,i.scaleY+=(i.data.scaleY-i.scaleY)*l}return}let c=0,f=0;if(s>=r[r.length-
ut.ENTRIES])c=r[r.length+ut.PREV_X]*i.data.scaleX,f=r[r.length+ut.PREV_Y]*i.data.scaleY;else{const
u=K.binarySearch(r,s,ut.ENTRIES);c=r[u+ut.PREV_X],f=r[u+ut.PREV_Y];const
h=r[u],m=this.getCurvePercent(u/ut.ENTRIES-1,1-(s-h)/(r[u+ut.PREV_TIME]-h));c=(c+(r[u+ut.X]-
c)*m)*i.data.scaleX,f=(f+(r[u+ut.Y]-f)*m)*i.data.scaleY}if(l==1)d==R.add?(i.scaleX+=c-
i.data.scaleX,i.scaleY+=f-i.data.scaleY):(i.scaleX=c,i.scaleY=f);else{let
u=0,h=0;if(o==pt.mixOut)switch(d){case R.setup:u=i.data.scaleX,h=i.data.scaleY,i.scaleX=u+
(Math.abs(c)*y.signum(u)-u)*l,i.scaleY=h+(Math.abs(f)*y.signum(h)-h)*l;break;case R.first:case
R.replace:u=i.scaleX,h=i.scaleY,i.scaleX=u+(Math.abs(c)*y.signum(u)-u)*l,i.scaleY=h+
(Math.abs(f)*y.signum(h)-h)*l;break;case R.add:u=i.scaleX,h=i.scaleY,i.scaleX=u+
(Math.abs(c)*y.signum(u)-i.data.scaleX)*l,i.scaleY=h+(Math.abs(f)*y.signum(h)-i.data.scaleY)*l}else
switch(d){case
R.setup:u=Math.abs(i.data.scaleX)*y.signum(c),h=Math.abs(i.data.scaleY)*y.signum(f),i.scaleX=u+(c-
u)*l,i.scaleY=h+(f-h)*l;break;case R.first:case
R.replace:u=Math.abs(i.scaleX)*y.signum(c),h=Math.abs(i.scaleY)*y.signum(f),i.scaleX=u+(c-
u)*l,i.scaleY=h+(f-h)*l;break;case R.add:u=y.signum(c),h=y.signum(f),i.scaleX=Math.abs(i.scaleX)*u+
(c-Math.abs(i.data.scaleX)*u)*l,i.scaleY=Math.abs(i.scaleY)*h+(f-Math.abs(i.data.scaleY)*h)*l}}}}class
mt extends Et{constructor(t){super(t)}getPropertyId(){return(3<<24)+this.boneIndex}apply(t,n,s,a,l,d,o)
{const r=this.frames,i=t.bones[this.boneIndex];if(!i.active)return;if(s<r[0]){switch(d){case
R.setup:i.shearX=i.data.shearX,i.shearY=i.data.shearY;return;case R.first:i.shearX+=(i.data.shearX-
i.shearX)*l,i.shearY+=(i.data.shearY-i.shearY)*l}return}let c=0,f=0;if(s>=r[r.length-
mt.ENTRIES])c=r[r.length+mt.PREV_X],f=r[r.length+mt.PREV_Y];else{const
u=K.binarySearch(r,s,mt.ENTRIES);c=r[u+mt.PREV_X],f=r[u+mt.PREV_Y];const
h=r[u],m=this.getCurvePercent(u/mt.ENTRIES-1,1-(s-h)/(r[u+mt.PREV_TIME]-h));c=c+(r[u+mt.X]-
c)*m,f=f+(r[u+mt.Y]-f)*m}switch(d){case
R.setup:i.shearX=i.data.shearX+c*l,i.shearY=i.data.shearY+f*l;break;case R.first:case
R.replace:i.shearX+=(i.data.shearX+c-i.shearX)*l,i.shearY+=(i.data.shearY+f-i.shearY)*l;break;case
R.add:i.shearX+=c*l,i.shearY+=f*l}}}const $=class extends gt{constructor(e)
{super(e),this.frames=T.newFloatArray(e*$.ENTRIES)}getPropertyId()
{return(5<<24)+this.slotIndex}setFrame(e,t,n,s,a,l)
{e*=$.ENTRIES,this.frames[e]=t,this.frames[e+$.R]=n,this.frames[e+$.G]=s,this.frames[e+$.B]=a,this.
frames[e+$.A]=l}apply(e,t,n,s,a,l,d){const o=e.slots[this.slotIndex];if(!o.bone.active)return;const
r=this.frames;if(n<r[0]){switch(l){case R.setup:o.color.setFromColor(o.data.color);return;case
R.first:const h=o.color,m=o.data.color;h.add((m.r-h.r)*a,(m.g-h.g)*a,(m.b-h.b)*a,(m.a-h.a)*a)}return}let
i=0,c=0,f=0,u=0;if(n>=r[r.length-$.ENTRIES]){const
h=r.length;i=r[h+$.PREV_R],c=r[h+$.PREV_G],f=r[h+$.PREV_B],u=r[h+$.PREV_A]}else{const
h=K.binarySearch(r,n,$.ENTRIES);i=r[h+$.PREV_R],c=r[h+$.PREV_G],f=r[h+$.PREV_B],u=r[h+$.PR
EV_A];const m=r[h],x=this.getCurvePercent(h/$.ENTRIES-1,1-(n-m)/(r[h+$.PREV_TIME]-m));i+=
(r[h+$.R]-i)*x,c+=(r[h+$.G]-c)*x,f+=(r[h+$.B]-f)*x,u+=(r[h+$.A]-
u)*x}if(a==1)o.color.set(i,c,f,u);else{const
h=o.color;l==R.setup&&h.setFromColor(o.data.color),h.add((i-h.r)*a,(c-h.g)*a,(f-h.b)*a,(u-h.a)*a)}}};let
ct=$;ct.ENTRIES=5;ct.PREV_TIME=-5;ct.PREV_R=-4;ct.PREV_G=-3;ct.PREV_B=-2;ct.PREV_A=-1;
ct.R=1;ct.G=2;ct.B=3;ct.A=4;const _=class extends gt{constructor(e)
{super(e),this.frames=T.newFloatArray(e*_.ENTRIES)}getPropertyId()
{return(14<<24)+this.slotIndex}setFrame(e,t,n,s,a,l,d,o,r)
{e*=_.ENTRIES,this.frames[e]=t,this.frames[e+_.R]=n,this.frames[e+_.G]=s,this.frames[e+_.B]=a,this.frames[e+_.A]=l,this.frames[e+_.R2]=d,this.frames[e+_.G2]=o,this.frames[e+_.B2]=r}apply(e,t,n,s,a,l,
d){const o=e.slots[this.slotIndex];if(!o.bone.active)return;const r=this.frames;if(n<r[0]){switch(l){case
R.setup:o.color.setFromColor(o.data.color),o.darkColor.setFromColor(o.data.darkColor);return;case
R.first:const g=o.color,p=o.darkColor,w=o.data.color,E=o.data.darkColor;g.add((w.r-g.r)*a,(w.g-g.g)*a,
(w.b-g.b)*a,(w.a-g.a)*a),p.add((E.r-p.r)*a,(E.g-p.g)*a,(E.b-p.b)*a,0)}return}let
i=0,c=0,f=0,u=0,h=0,m=0,x=0;if(n>=r[r.length-_.ENTRIES]){const
g=r.length;i=r[g+_.PREV_R],c=r[g+_.PREV_G],f=r[g+_.PREV_B],u=r[g+_.PREV_A],h=r[g+_.PREV_R
2],m=r[g+_.PREV_G2],x=r[g+_.PREV_B2]}else{const
g=K.binarySearch(r,n,_.ENTRIES);i=r[g+_.PREV_R],c=r[g+_.PREV_G],f=r[g+_.PREV_B],u=r[g+_.PR
EV_A],h=r[g+_.PREV_R2],m=r[g+_.PREV_G2],x=r[g+_.PREV_B2];const
p=r[g],w=this.getCurvePercent(g/_.ENTRIES-1,1-(n-p)/(r[g+_.PREV_TIME]-p));i+=(r[g+_.R]-i)*w,c+=
(r[g+_.G]-c)*w,f+=(r[g+_.B]-f)*w,u+=(r[g+_.A]-u)*w,h+=(r[g+_.R2]-h)*w,m+=(r[g+_.G2]-m)*w,x+=
(r[g+_.B2]-x)*w}if(a==1)o.color.set(i,c,f,u),o.darkColor.set(h,m,x,1);else{const
g=o.color,p=o.darkColor;l==R.setup&&
(g.setFromColor(o.data.color),p.setFromColor(o.data.darkColor)),g.add((i-g.r)*a,(c-g.g)*a,(f-g.b)*a,(u-
g.a)*a),p.add((h-p.r)*a,(m-p.g)*a,(x-p.b)*a,0)}}};let
J=_;J.ENTRIES=8;J.PREV_TIME=-8;J.PREV_R=-7;J.PREV_G=-6;J.PREV_B=-5;J.PREV_A=-4;J.PR
EV_R2=-3;J.PREV_G2=-2;J.PREV_B2=-1;J.R=1;J.G=2;J.B=3;J.A=4;J.R2=5;J.G2=6;J.B2=7;class
Ot{constructor(t){this.frames=T.newFloatArray(t),this.attachmentNames=new Array(t)}getPropertyId()
{return(4<<24)+this.slotIndex}getFrameCount(){return this.frames.length}setFrame(t,n,s)
{this.frames[t]=n,this.attachmentNames[t]=s}apply(t,n,s,a,l,d,o){const
r=t.slots[this.slotIndex];if(!r.bone.active)return;if(o==pt.mixOut)
{d==R.setup&&this.setAttachment(t,r,r.data.attachmentName);return}const i=this.frames;if(s<i[0])
{(d==R.setup||d==R.first)&&this.setAttachment(t,r,r.data.attachmentName);return}let c=0;s>=i[i.length-
1]?c=i.length-1:c=K.binarySearch(i,s,1)-1;const
f=this.attachmentNames[c];t.slots[this.slotIndex].setAttachment(f==null?
null:t.getAttachment(this.slotIndex,f))}setAttachment(t,n,s){n.setAttachment(s==null?
null:t.getAttachment(this.slotIndex,s))}}let Ce=null;class le extends gt{constructor(t)
{super(t),this.frames=T.newFloatArray(t),this.frameVertices=new Array(t),Ce==null&&
(Ce=T.newFloatArray(64))}getPropertyId()
{return(6<<27)+Number(this.attachment.id)+this.slotIndex}setFrame(t,n,s)
{this.frames[t]=n,this.frameVertices[t]=s}apply(t,n,s,a,l,d,o){const
r=t.slots[this.slotIndex];if(!r.bone.active)return;const i=r.getAttachment();if(!(i instanceof
Ft)||i.deformAttachment!=this.attachment)return;const c=r.deform;c.length==0&&(d=R.setup);const
f=this.frameVertices,u=f[0].length,h=this.frames;if(s<h[0]){const M=i;switch(d){case
R.setup:c.length=0;return;case R.first:if(l==1){c.length=0;break}const
A=T.setArraySize(c,u);if(M.bones==null){const b=M.vertices;for(let S=0;S<u;S++)A[S]+=(b[S]-
A[S])*l}else{l=1-l;for(let b=0;b<u;b++)A[b]*=l}}return}const m=T.setArraySize(c,u);if(s>=h[h.length-1])
{const M=f[h.length-1];if(l==1)if(d==R.add){const A=i;if(A.bones==null){const b=A.vertices;for(let
S=0;S<u;S++)m[S]+=M[S]-b[S]}else for(let b=0;b<u;b++)m[b]+=M[b]}else
T.arrayCopy(M,0,m,0,u);else switch(d){case R.setup:{const b=i;if(b.bones==null){const
S=b.vertices;for(let C=0;C<u;C++){const I=S[C];m[C]=I+(M[C]-I)*l}}else for(let
S=0;S<u;S++)m[S]=M[S]*l;break}case R.first:case R.replace:for(let b=0;b<u;b++)m[b]+=(M[b]-
m[b])*l;break;case R.add:const A=i;if(A.bones==null){const b=A.vertices;for(let S=0;S<u;S++)m[S]+=
(M[S]-b[S])*l}else for(let b=0;b<u;b++)m[b]+=M[b]*l}return}const x=K.binarySearch(h,s),g=f[x-
1],p=f[x],w=h[x],E=this.getCurvePercent(x-1,1-(s-w)/(h[x-1]-w));if(l==1)if(d==R.add){constM=i;if(M.bones==null){const A=M.vertices;for(let b=0;b<u;b++){const S=g[b];m[b]+=S+(p[b]-S)*E-
A[b]}}else for(let A=0;A<u;A++){const b=g[A];m[A]+=b+(p[A]-b)*E}}else for(let M=0;M<u;M++){const
A=g[M];m[M]=A+(p[M]-A)*E}else switch(d){case R.setup:{const A=i;if(A.bones==null){const
b=A.vertices;for(let S=0;S<u;S++){const C=g[S],I=b[S];m[S]=I+(C+(p[S]-C)*E-I)*l}}else for(let
b=0;b<u;b++){const S=g[b];m[b]=(S+(p[b]-S)*E)*l}break}case R.first:case R.replace:for(let
A=0;A<u;A++){const b=g[A];m[A]+=(b+(p[A]-b)*E-m[A])*l}break;case R.add:const
M=i;if(M.bones==null){const A=M.vertices;for(let b=0;b<u;b++){const S=g[b];m[b]+=(S+(p[b]-S)*E-
A[b])*l}}else for(let A=0;A<u;A++){const b=g[A];m[A]+=(b+(p[A]-b)*E)*l}}}}class Qt{constructor(t)
{this.frames=T.newFloatArray(t),this.events=new Array(t)}getPropertyId(){return
7<<24}getFrameCount(){return this.frames.length}setFrame(t,n)
{this.frames[t]=n.time,this.events[t]=n}apply(t,n,s,a,l,d,o){if(a==null)return;const
r=this.frames,i=this.frames.length;if(n>s)this.apply(t,n,Number.MAX_VALUE,a,l,d,o),n=-1;else
if(n>=r[i-1])return;if(s<r[0])return;let c=0;if(n<r[0])c=0;else{c=K.binarySearch(r,n);const
f=r[c];for(;c>0&&r[c-1]==f;)c--}for(;c<i&&s>=r[c];c++)a.push(this.events[c])}}class Dt{constructor(t)
{this.frames=T.newFloatArray(t),this.drawOrders=new Array(t)}getPropertyId(){return
8<<24}getFrameCount(){return this.frames.length}setFrame(t,n,s)
{this.frames[t]=n,this.drawOrders[t]=s}apply(t,n,s,a,l,d,o){const
r=t.drawOrder,i=t.slots;if(o==pt.mixOut&&d==R.setup)
{T.arrayCopy(t.slots,0,t.drawOrder,0,t.slots.length);return}const c=this.frames;if(s<c[0])
{(d==R.setup||d==R.first)&&T.arrayCopy(t.slots,0,t.drawOrder,0,t.slots.length);return}let
f=0;s>=c[c.length-1]?f=c.length-1:f=K.binarySearch(c,s)-1;const
u=this.drawOrders[f];if(u==null)T.arrayCopy(i,0,r,0,i.length);else for(let
h=0,m=u.length;h<m;h++)r[h]=i[u[h]]}}const L=class extends gt{constructor(e)
{super(e),this.frames=T.newFloatArray(e*L.ENTRIES)}getPropertyId()
{return(9<<24)+this.ikConstraintIndex}setFrame(e,t,n,s,a,l,d)
{e*=L.ENTRIES,this.frames[e]=t,this.frames[e+L.MIX]=n,this.frames[e+L.SOFTNESS]=s,this.frames[e
+L.BEND_DIRECTION]=a,this.frames[e+L.COMPRESS]=l?1:0,this.frames[e+L.STRETCH]=d?
1:0}apply(e,t,n,s,a,l,d){const
o=this.frames,r=e.ikConstraints[this.ikConstraintIndex];if(!r.active)return;if(n<o[0]){switch(l){case
R.setup:r.mix=r.data.mix,r.softness=r.data.softness,r.bendDirection=r.data.bendDirection,r.compress=
r.data.compress,r.stretch=r.data.stretch;return;case R.first:r.mix+=(r.data.mix-r.mix)*a,r.softness+=
(r.data.softness-
r.softness)*a,r.bendDirection=r.data.bendDirection,r.compress=r.data.compress,r.stretch=r.data.stretc
h}return}if(n>=o[o.length-L.ENTRIES]){l==R.setup?(r.mix=r.data.mix+(o[o.length+L.PREV_MIX]-
r.data.mix)*a,r.softness=r.data.softness+(o[o.length+L.PREV_SOFTNESS]-
r.data.softness)*a,d==pt.mixOut?
(r.bendDirection=r.data.bendDirection,r.compress=r.data.compress,r.stretch=r.data.stretch):
(r.bendDirection=o[o.length+L.PREV_BEND_DIRECTION],r.compress=o[o.length+L.PREV_COMPR
ESS]!=0,r.stretch=o[o.length+L.PREV_STRETCH]!=0)):(r.mix+=(o[o.length+L.PREV_MIX]-
r.mix)*a,r.softness+=(o[o.length+L.PREV_SOFTNESS]-r.softness)*a,d==pt.mixIn&&
(r.bendDirection=o[o.length+L.PREV_BEND_DIRECTION],r.compress=o[o.length+L.PREV_COMPR
ESS]!=0,r.stretch=o[o.length+L.PREV_STRETCH]!=0));return}const
i=K.binarySearch(o,n,L.ENTRIES),c=o[i+L.PREV_MIX],f=o[i+L.PREV_SOFTNESS],u=o[i],h=this.getC
urvePercent(i/L.ENTRIES-1,1-(n-u)/(o[i+L.PREV_TIME]-u));l==R.setup?(r.mix=r.data.mix+(c+
(o[i+L.MIX]-c)*h-r.data.mix)*a,r.softness=r.data.softness+(f+(o[i+L.SOFTNESS]-f)*h-(r.bendDirection=r.data.bendDirection,r.compress=r.data.compress,r.stretch=r.data.stretch):
(r.bendDirection=o[i+L.PREV_BEND_DIRECTION],r.compress=o[i+L.PREV_COMPRESS]!=0,r.stretc
h=o[i+L.PREV_STRETCH]!=0)):(r.mix+=(c+(o[i+L.MIX]-c)*h-r.mix)*a,r.softness+=(f+
(o[i+L.SOFTNESS]-f)*h-r.softness)*a,d==pt.mixIn&&
(r.bendDirection=o[i+L.PREV_BEND_DIRECTION],r.compress=o[i+L.PREV_COMPRESS]!=0,r.stretc
h=o[i+L.PREV_STRETCH]!=0))}};let
rt=L;rt.ENTRIES=6;rt.PREV_TIME=-6;rt.PREV_MIX=-5;rt.PREV_SOFTNESS=-4;rt.PREV_BEND_DI
RECTION=-3;rt.PREV_COMPRESS=-2;rt.PREV_STRETCH=-1;rt.MIX=1;rt.SOFTNESS=2;rt.BEND_
DIRECTION=3;rt.COMPRESS=4;rt.STRETCH=5;const H=class extends gt{constructor(e)
{super(e),this.frames=T.newFloatArray(e*H.ENTRIES)}getPropertyId()
{return(10<<24)+this.transformConstraintIndex}setFrame(e,t,n,s,a,l)
{e*=H.ENTRIES,this.frames[e]=t,this.frames[e+H.ROTATE]=n,this.frames[e+H.TRANSLATE]=s,this.fr
ames[e+H.SCALE]=a,this.frames[e+H.SHEAR]=l}apply(e,t,n,s,a,l,d){const
o=this.frames,r=e.transformConstraints[this.transformConstraintIndex];if(!r.active)return;if(n<o[0])
{const h=r.data;switch(l){case
R.setup:r.rotateMix=h.rotateMix,r.translateMix=h.translateMix,r.scaleMix=h.scaleMix,r.shearMix=h.she
arMix;return;case R.first:r.rotateMix+=(h.rotateMix-r.rotateMix)*a,r.translateMix+=(h.translateMix-
r.translateMix)*a,r.scaleMix+=(h.scaleMix-r.scaleMix)*a,r.shearMix+=(h.shearMix-
r.shearMix)*a}return}let i=0,c=0,f=0,u=0;if(n>=o[o.length-H.ENTRIES]){const
h=o.length;i=o[h+H.PREV_ROTATE],c=o[h+H.PREV_TRANSLATE],f=o[h+H.PREV_SCALE],u=o[h+H
.PREV_SHEAR]}else{const
h=K.binarySearch(o,n,H.ENTRIES);i=o[h+H.PREV_ROTATE],c=o[h+H.PREV_TRANSLATE],f=o[h+H.
PREV_SCALE],u=o[h+H.PREV_SHEAR];const m=o[h],x=this.getCurvePercent(h/H.ENTRIES-1,1-(n-
m)/(o[h+H.PREV_TIME]-m));i+=(o[h+H.ROTATE]-i)*x,c+=(o[h+H.TRANSLATE]-c)*x,f+=
(o[h+H.SCALE]-f)*x,u+=(o[h+H.SHEAR]-u)*x}if(l==R.setup){const h=r.data;r.rotateMix=h.rotateMix+(i-
h.rotateMix)*a,r.translateMix=h.translateMix+(c-h.translateMix)*a,r.scaleMix=h.scaleMix+(f-
h.scaleMix)*a,r.shearMix=h.shearMix+(u-h.shearMix)*a}else r.rotateMix+=(i-
r.rotateMix)*a,r.translateMix+=(c-r.translateMix)*a,r.scaleMix+=(f-r.scaleMix)*a,r.shearMix+=(u-
r.shearMix)*a}};let
ht=H;ht.ENTRIES=5;ht.PREV_TIME=-5;ht.PREV_ROTATE=-4;ht.PREV_TRANSLATE=-3;ht.PREV_S
CALE=-2;ht.PREV_SHEAR=-1;ht.ROTATE=1;ht.TRANSLATE=2;ht.SCALE=3;ht.SHEAR=4;const
bt=class extends gt{constructor(e)
{super(e),this.frames=T.newFloatArray(e*bt.ENTRIES)}getPropertyId()
{return(11<<24)+this.pathConstraintIndex}setFrame(e,t,n)
{e*=bt.ENTRIES,this.frames[e]=t,this.frames[e+bt.VALUE]=n}apply(e,t,n,s,a,l,d){const
o=this.frames,r=e.pathConstraints[this.pathConstraintIndex];if(!r.active)return;if(n<o[0]){switch(l){case
R.setup:r.position=r.data.position;return;case R.first:r.position+=(r.data.position-r.position)*a}return}let
i=0;if(n>=o[o.length-bt.ENTRIES])i=o[o.length+bt.PREV_VALUE];else{const
c=K.binarySearch(o,n,bt.ENTRIES);i=o[c+bt.PREV_VALUE];const
f=o[c],u=this.getCurvePercent(c/bt.ENTRIES-1,1-(n-f)/(o[c+bt.PREV_TIME]-f));i+=(o[c+bt.VALUE]-
i)*u}l==R.setup?r.position=r.data.position+(i-r.data.position)*a:r.position+=(i-r.position)*a}};let
yt=bt;yt.ENTRIES=2;yt.PREV_TIME=-2;yt.PREV_VALUE=-1;yt.VALUE=1;class St extends
yt{constructor(t){super(t)}getPropertyId(){return(12<<24)+this.pathConstraintIndex}apply(t,n,s,a,l,d,o)
{const r=this.frames,i=t.pathConstraints[this.pathConstraintIndex];if(!i.active)return;if(s<r[0]){switch(d)
{case R.setup:i.spacing=i.data.spacing;return;case R.first:i.spacing+=(i.data.spacing-
i.spacing)*l}return}let c=0;if(s>=r[r.length-St.ENTRIES])c=r[r.length+St.PREV_VALUE];else{const
r.data.softness)*a,d==pt.mixOut?f=K.binarySearch(r,s,St.ENTRIES);c=r[f+St.PREV_VALUE];const
u=r[f],h=this.getCurvePercent(f/St.ENTRIES-1,1-(s-u)/(r[f+St.PREV_TIME]-u));c+=(r[f+St.VALUE]-
c)*h}d==R.setup?i.spacing=i.data.spacing+(c-i.data.spacing)*l:i.spacing+=(c-i.spacing)*l}}const
lt=class extends gt{constructor(e)
{super(e),this.frames=T.newFloatArray(e*lt.ENTRIES)}getPropertyId()
{return(13<<24)+this.pathConstraintIndex}setFrame(e,t,n,s)
{e*=lt.ENTRIES,this.frames[e]=t,this.frames[e+lt.ROTATE]=n,this.frames[e+lt.TRANSLATE]=s}apply(e
,t,n,s,a,l,d){const
o=this.frames,r=e.pathConstraints[this.pathConstraintIndex];if(!r.active)return;if(n<o[0]){switch(l){case
R.setup:r.rotateMix=r.data.rotateMix,r.translateMix=r.data.translateMix;return;case
R.first:r.rotateMix+=(r.data.rotateMix-r.rotateMix)*a,r.translateMix+=(r.data.translateMix-
r.translateMix)*a}return}let i=0,c=0;if(n>=o[o.length-
lt.ENTRIES])i=o[o.length+lt.PREV_ROTATE],c=o[o.length+lt.PREV_TRANSLATE];else{const
f=K.binarySearch(o,n,lt.ENTRIES);i=o[f+lt.PREV_ROTATE],c=o[f+lt.PREV_TRANSLATE];const
u=o[f],h=this.getCurvePercent(f/lt.ENTRIES-1,1-(n-u)/(o[f+lt.PREV_TIME]-u));i+=(o[f+lt.ROTATE]-
i)*h,c+=(o[f+lt.TRANSLATE]-c)*h}l==R.setup?(r.rotateMix=r.data.rotateMix+(i-
r.data.rotateMix)*a,r.translateMix=r.data.translateMix+(c-r.data.translateMix)*a):(r.rotateMix+=(i-
r.rotateMix)*a,r.translateMix+=(c-r.translateMix)*a)}};let
At=lt;At.ENTRIES=3;At.PREV_TIME=-3;At.PREV_ROTATE=-2;At.PREV_TRANSLATE=-1;At.ROTAT
E=1;At.TRANSLATE=2;const j=class{constructor(e){this.tracks=new
Array,this.timeScale=1,this.unkeyedState=0,this.events=new Array,this.listeners=new
Array,this.queue=new ce(this),this.propertyIDs=new
Oe,this.animationsChanged=!1,this.trackEntryPool=new Xe(()=>new Kt),this.data=e}update(e)
{e*=this.timeScale;const t=this.tracks;for(let n=0,s=t.length;n<s;n++){const
a=t[n];if(a==null)continue;a.animationLast=a.nextAnimationLast,a.trackLast=a.nextTrackLast;let
l=e*a.timeScale;if(a.delay>0){if(a.delay-=l,a.delay>0)continue;l=-a.delay,a.delay=0}let
d=a.next;if(d!=null){const o=a.trackLast-d.delay;if(o>=0){for(d.delay=0,d.trackTime+=a.timeScale==0?
0:
(o/a.timeScale+e)*d.timeScale,a.trackTime+=l,this.setCurrent(n,d,!0);d.mixingFrom!=null;)d.mixTime+
=e,d=d.mixingFrom;continue}}else if(a.trackLast>=a.trackEnd&&a.mixingFrom==null)
{t[n]=null,this.queue.end(a),this.disposeNext(a);continue}if(a.mixingFrom!=null&&this.updateMixingFr
om(a,e)){let o=a.mixingFrom;for(a.mixingFrom=null,o!=null&&
(o.mixingTo=null);o!=null;)this.queue.end(o),o=o.mixingFrom}a.trackTime+=l}this.queue.drain()}updat
eMixingFrom(e,t){const n=e.mixingFrom;if(n==null)return!0;const s=this.updateMixingFrom(n,t);return
n.animationLast=n.nextAnimationLast,n.trackLast=n.nextTrackLast,e.mixTime>0&&e.mixTime>=e.mix
Duration?((n.totalAlpha==0||e.mixDuration==0)&&
(e.mixingFrom=n.mixingFrom,n.mixingFrom!=null&&
(n.mixingFrom.mixingTo=e),e.interruptAlpha=n.interruptAlpha,this.queue.end(n)),s):
(n.trackTime+=t*n.timeScale,e.mixTime+=t,!1)}apply(e){if(e==null)throw new Error("skeleton cannot
be null.");this.animationsChanged&&this._animationsChanged();const t=this.events,n=this.tracks;let
s=!1;for(let d=0,o=n.length;d<o;d++){const r=n[d];if(r==null||r.delay>0)continue;s=!0;const i=d==0?
R.first:r.mixBlend;let c=r.alpha;r.mixingFrom!=null?
c*=this.applyMixingFrom(r,e,i):r.trackTime>=r.trackEnd&&r.next==null&&(c=0);const
f=r.animationLast,u=r.getAnimationTime(),h=r.animation.timelines.length,m=r.animation.timelines;if(d=
=0&&c==1||i==R.add)for(let x=0;x<h;x++){const g=m[x];g instanceof Ot?
this.applyAttachmentTimeline(g,e,u,i,!0):g.apply(e,f,u,t,c,i,pt.mixIn)}else{constx=r.timelineMode,g=r.timelinesRotation.length==0;g&&T.setArraySize(r.timelinesRotation,h<<1,null);c
onst p=r.timelinesRotation;for(let w=0;w<h;w++){const E=m[w],M=x[w]==j.SUBSEQUENT?i:R.setup;E
instanceof nt?this.applyRotateTimeline(E,e,u,c,M,p,w<<1,g):E instanceof Ot?
this.applyAttachmentTimeline(E,e,u,i,!0):E.apply(e,f,u,t,c,M,pt.mixIn)}}this.queueEvents(r,u),t.length=0
,r.nextAnimationLast=u,r.nextTrackLast=r.trackTime}const
a=this.unkeyedState+j.SETUP,l=e.slots;for(let d=0,o=e.slots.length;d<o;d++){const
r=l[d];if(r.attachmentState==a){const i=r.data.attachmentName;r.setAttachment(i==null?
null:e.getAttachment(r.data.index,i))}}return
this.unkeyedState+=2,this.queue.drain(),s}applyMixingFrom(e,t,n){const
s=e.mixingFrom;s.mixingFrom!=null&&this.applyMixingFrom(s,t,n);let a=0;e.mixDuration==0?
(a=1,n==R.first&&(n=R.setup)):(a=e.mixTime/e.mixDuration,a>1&&(a=1),n!=R.first&&
(n=s.mixBlend));const l=a<s.eventThreshold?
this.events:null,d=a<s.attachmentThreshold,o=a<s.drawOrderThreshold,r=s.animationLast,i=s.getAni
mationTime(),c=s.animation.timelines.length,f=s.animation.timelines,u=s.alpha*e.interruptAlpha,h=u*
(1-a);if(n==R.add)for(let m=0;m<c;m++)f[m].apply(t,r,i,l,h,n,pt.mixOut);else{const
m=s.timelineMode,x=s.timelineHoldMix,g=s.timelinesRotation.length==0;g&&T.setArraySize(s.timelin
esRotation,c<<1,null);const p=s.timelinesRotation;s.totalAlpha=0;for(let w=0;w<c;w++){const
E=f[w];let M=pt.mixOut,A,b=0;switch(m[w]){case j.SUBSEQUENT:if(!o&&E instanceof
Dt)continue;A=n,b=h;break;case j.FIRST:A=R.setup,b=h;break;case
j.HOLD_SUBSEQUENT:A=n,b=u;break;case
j.HOLD_FIRST:A=R.setup,b=u;break;default:A=R.setup;const S=x[w];b=u*Math.max(0,1-
S.mixTime/S.mixDuration);break}s.totalAlpha+=b,E instanceof nt?
this.applyRotateTimeline(E,t,i,b,A,p,w<<1,g):E instanceof Ot?this.applyAttachmentTimeline(E,t,i,A,d):
(o&&E instanceof Dt&&A==R.setup&&(M=pt.mixIn),E.apply(t,r,i,l,b,A,M))}}return
e.mixDuration>0&&this.queueEvents(s,i),this.events.length=0,s.nextAnimationLast=i,s.nextTrackLast
=s.trackTime,a}applyAttachmentTimeline(e,t,n,s,a){const
l=t.slots[e.slotIndex];if(!l.bone.active)return;const d=e.frames;if(n<d[0])
(s==R.setup||s==R.first)&&this.setAttachment(t,l,l.data.attachmentName,a);else{let o;n>=d[d.length-
1]?o=d.length-
1:o=K.binarySearch(d,n)-1,this.setAttachment(t,l,e.attachmentNames[o],a)}l.attachmentState<=this.u
nkeyedState&&(l.attachmentState=this.unkeyedState+j.SETUP)}setAttachment(e,t,n,s)
{t.setAttachment(n==null?null:e.getAttachment(t.data.index,n)),s&&
(t.attachmentState=this.unkeyedState+j.CURRENT)}applyRotateTimeline(e,t,n,s,a,l,d,o){if(o&&
(l[d]=0),s==1){e.apply(t,0,n,null,1,a,pt.mixIn);return}const
r=e,i=r.frames,c=t.bones[r.boneIndex];if(!c.active)return;let f=0,u=0;if(n<i[0])switch(a){case
R.setup:c.rotation=c.data.rotation;default:return;case R.first:f=c.rotation,u=c.data.rotation}else
if(f=a==R.setup?c.data.rotation:c.rotation,n>=i[i.length-
nt.ENTRIES])u=c.data.rotation+i[i.length+nt.PREV_ROTATION];else{const
x=K.binarySearch(i,n,nt.ENTRIES),g=i[x+nt.PREV_ROTATION],p=i[x],w=r.getCurvePercent((x>>1)-1,
1-(n-p)/(i[x+nt.PREV_TIME]-p));u=i[x+nt.ROTATION]-g,u-=(16384-(16384.499999999996-
u/360|0))*360,u=g+u*w+c.data.rotation,u-=(16384-(16384.499999999996-u/360|0))*360}let h=0,m=u-
f;if(m-=(16384-(16384.499999999996-m/360|0))*360,m==0)h=l[d];else{let x=0,g=0;o?(x=0,g=m):
(x=l[d],g=l[d+1]);const p=m>0;let w=x>=0;y.signum(g)!=y.signum(m)&&Math.abs(g)<=90&&
(Math.abs(x)>180&&(x+=360*y.signum(x)),w=p),h=m+x-x%360,w!=p&&
(h+=360*y.signum(x)),l[d]=h}l[d+1]=m,f+=h*s,c.rotation=f-(16384-(16384.499999999996-
f/360|0))*360}queueEvents(e,t){const n=e.animationStart,s=e.animationEnd,a=sn,l=e.trackLast%a,d=this.events;let o=0;const r=d.length;for(;o<r;o++){const
c=d[o];if(c.time<l)break;c.time>s||this.queue.event(e,c)}let i=!1;for(e.loop?
i=a==0||l>e.trackTime%a:i=t>=s&&e.animationLast<s,i&&this.queue.complete(e);o<r;o++)d[o].time<n|
|this.queue.event(e,d[o])}clearTracks(){const
e=this.queue.drainDisabled;this.queue.drainDisabled=!0;for(let
t=0,n=this.tracks.length;t<n;t++)this.clearTrack(t);this.tracks.length=0,this.queue.drainDisabled=e,this.
queue.drain()}clearTrack(e){if(e>=this.tracks.length)return;const
t=this.tracks[e];if(t==null)return;this.queue.end(t),this.disposeNext(t);let n=t;for(;;){const
s=n.mixingFrom;if(s==null)break;this.queue.end(s),n.mixingFrom=null,n.mixingTo=null,n=s}this.tracks
[t.trackIndex]=null,this.queue.drain()}setCurrent(e,t,n){const
s=this.expandToIndex(e);this.tracks[e]=t,s!=null&&
(n&&this.queue.interrupt(s),t.mixingFrom=s,s.mixingTo=t,t.mixTime=0,s.mixingFrom!=null&&s.mixDur
ation>0&&
(t.interruptAlpha*=Math.min(1,s.mixTime/s.mixDuration)),s.timelinesRotation.length=0),this.queue.star
t(t)}setAnimation(e,t,n){const s=this.data.skeletonData.findAnimation(t);if(s==null)throw new
Error(`Animation not found: ${t}`);return this.setAnimationWith(e,s,n)}setAnimationWith(e,t,n)
{if(t==null)throw new Error("animation cannot be null.");let s=!0,a=this.expandToIndex(e);a!=null&&
(a.nextTrackLast==-1?
(this.tracks[e]=a.mixingFrom,this.queue.interrupt(a),this.queue.end(a),this.disposeNext(a),a=a.mixing
From,s=!1):this.disposeNext(a));const l=this.trackEntry(e,t,n,a);return
this.setCurrent(e,l,s),this.queue.drain(),l}addAnimation(e,t,n,s){const
a=this.data.skeletonData.findAnimation(t);if(a==null)throw new Error(`Animation not found:
${t}`);return this.addAnimationWith(e,a,n,s)}addAnimationWith(e,t,n,s){if(t==null)throw new
Error("animation cannot be null.");let
a=this.expandToIndex(e);if(a!=null)for(;a.next!=null;)a=a.next;const
l=this.trackEntry(e,t,n,a);if(a==null)this.setCurrent(e,l,!0),this.queue.drain();else if(a.next=l,s<=0)
{const d=a.animationEnd-a.animationStart;d!=0?(a.loop?s+=d*(1+
(a.trackTime/d|0)):s+=Math.max(d,a.trackTime),s-
=this.data.getMix(a.animation,t)):s=a.trackTime}return l.delay=s,l}setEmptyAnimation(e,t){const
n=this.setAnimationWith(e,j.emptyAnimation,!1);return
n.mixDuration=t,n.trackEnd=t,n}addEmptyAnimation(e,t,n){n<=0&&(n-=t);const
s=this.addAnimationWith(e,j.emptyAnimation,!1,n);return
s.mixDuration=t,s.trackEnd=t,s}setEmptyAnimations(e){const
t=this.queue.drainDisabled;this.queue.drainDisabled=!0;for(let n=0,s=this.tracks.length;n<s;n++)
{const
a=this.tracks[n];a!=null&&this.setEmptyAnimation(a.trackIndex,e)}this.queue.drainDisabled=t,this.que
ue.drain()}expandToIndex(e){return e<this.tracks.length?this.tracks[e]:
(T.ensureArrayCapacity(this.tracks,e+1,null),this.tracks.length=e+1,null)}trackEntry(e,t,n,s){const
a=this.trackEntryPool.obtain();return
a.trackIndex=e,a.animation=t,a.loop=n,a.holdPrevious=!1,a.eventThreshold=0,a.attachmentThreshol
d=0,a.drawOrderThreshold=0,a.animationStart=0,a.animationEnd=t.duration,a.animationLast=-1,a.ne
xtAnimationLast=-1,a.delay=0,a.trackTime=0,a.trackLast=-1,a.nextTrackLast=-1,a.trackEnd=Number.
MAX_VALUE,a.timeScale=1,a.alpha=1,a.interruptAlpha=1,a.mixTime=0,a.mixDuration=s==null?
0:this.data.getMix(s.animation,t),a.mixBlend=R.replace,a}disposeNext(e){let
t=e.next;for(;t!=null;)this.queue.dispose(t),t=t.next;e.next=null}_animationsChanged()
{this.animationsChanged=!1,this.propertyIDs.clear();for(let e=0,t=this.tracks.length;e<t;e++){letn=this.tracks[e];if(n!=null)
{for(;n.mixingFrom!=null;)n=n.mixingFrom;do(n.mixingFrom==null||n.mixBlend!=R.add)&&this.comput
eHold(n),n=n.mixingTo;while(n!=null)}}}computeHold(e){const
t=e.mixingTo,n=e.animation.timelines,s=e.animation.timelines.length,a=T.setArraySize(e.timelineMod
e,s);e.timelineHoldMix.length=0;const
l=T.setArraySize(e.timelineHoldMix,s),d=this.propertyIDs;if(t!=null&&t.holdPrevious){for(let
o=0;o<s;o++)a[o]=d.add(n[o].getPropertyId())?j.HOLD_FIRST:j.HOLD_SUBSEQUENT;return}t:for(let
o=0;o<s;o++){const r=n[o],i=r.getPropertyId();if(!d.add(i))a[o]=j.SUBSEQUENT;else if(t==null||r
instanceof Ot||r instanceof Dt||r instanceof Qt||!t.animation.hasTimeline(i))a[o]=j.FIRST;else{for(let
c=t.mixingTo;c!=null;c=c.mixingTo)if(!c.animation.hasTimeline(i)){if(e.mixDuration>0)
{a[o]=j.HOLD_MIX,l[o]=c;continue t}break}a[o]=j.HOLD_FIRST}}}getCurrent(e){return
e>=this.tracks.length?null:t
import"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{M as
rs}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_s
ettings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74
d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0
.11.4.026de2db.js";import{U as B,A as et,C as N,M as T,g as He,a as C,b as st,c as is,d as nt,e as
yt,R as Et,V as te,B as as,f as os,S as cs}from"./@pixi-
spine_base@4.0.6_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__@pixi_gra_074bb
737d3bfbcd5f96edd8ed71086e7.baac51e2.js";import"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85
af61b.js";import"./@pixi_graphics@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.
2__@pixi_sprit_a3536a87af99d28ff44bd814c835c9e3.87e100c4.js";import{B as
wt}from"./@pixi_constants@7.4.2.8b356162.js";class ne{constructor(t){if(!t)throw new Error("name
cannot be null.");this.name=t}}const je=class extends ne{constructor(c)
{super(c),this.id=je.nextID++,this.bones=null,this.vertices=
[],this.worldVerticesLength=0,this.timelineAttachment=this}computeWorldVerticesOld(c,t)
{this.computeWorldVertices(c,0,this.worldVerticesLength,t,0,2)}computeWorldVertices(c,t,n,e,r,a){n=r+
(n>>1)*a;const d=c.bone.skeleton,l=c.deform;let s=this.vertices;const i=this.bones;if(!i){l.length>0&&
(s=l);const u=c.bone.matrix,m=u.tx,g=u.ty,p=u.a,k=u.c,x=u.b,y=u.d;for(let b=t,w=r;w<n;b+=2,w+=a)
{const S=s[b],v=s[b+1];e[w]=S*p+v*k+m,e[w+1]=S*x+v*y+g}return}let o=0,h=0;for(let u=0;u<t;u+=2)
{const m=i[o];o+=m+1,h+=m}const f=d.bones;if(l.length==0)for(let u=r,m=h*3;u<n;u+=a){let
g=0,p=0,k=i[o++];for(k+=o;o<k;o++,m+=3){const x=f[i[o]].matrix,y=s[m],b=s[m+1],w=s[m+2];g+=
(y*x.a+b*x.c+x.tx)*w,p+=(y*x.b+b*x.d+x.ty)*w}e[u]=g,e[u+1]=p}else{const u=l;for(let
m=r,g=h*3,p=h<<1;m<n;m+=a){let k=0,x=0,y=i[o++];for(y+=o;o<y;o++,g+=3,p+=2){const
b=f[i[o]].matrix,w=s[g]+u[p],S=s[g+1]+u[p+1],v=s[g+2];k+=(w*b.a+S*b.c+b.tx)*v,x+=
(w*b.b+S*b.d+b.ty)*v}e[m]=k,e[m+1]=x}}}copyTo(c){this.bones?(c.bones=new
Array(this.bones.length),B.arrayCopy(this.bones,0,c.bones,0,this.bones.length)):c.bones=null,this.vert
ices&&
(c.vertices=B.newFloatArray(this.vertices.length),B.arrayCopy(this.vertices,0,c.vertices,0,this.vertices.
length)),c.worldVerticesLength=this.worldVerticesLength,c.timelineAttachment=this.timelineAttachme
nt}};let ot=je;ot.nextID=0;class Nt extends ot{constructor(t)
{super(t),this.type=et.BoundingBox,this.color=new N(1,1,1,1)}copy(){const t=new Nt(this.name);return
this.copyTo(t),t.color.setFromColor(this.color),t}}class qt extends ot{constructor(t)
{super(t),this.type=et.Clipping,this.endSlot=null,this.color=new N(.2275,.2275,.8078,1)}copy(){constt=new qt(this.name);return
this.copyTo(t),t.endSlot=this.endSlot,t.color.setFromColor(this.color),t}}class vt extends
ot{constructor(t,n){super(t),this.type=et.Mesh,this.region=null,this.triangles=[],this.color=new
N(1,1,1,1),this.width=0,this.height=0,this.hullLength=0,this.edges=
[],this.parentMesh=null,this.sequence=null,this.tempColor=new
N(0,0,0,0),this.path=n}getParentMesh(){return this.parentMesh}setParentMesh(t)
{this.parentMesh=t,t&&
(this.bones=t.bones,this.vertices=t.vertices,this.worldVerticesLength=t.worldVerticesLength,this.regio
nUVs=t.regionUVs,this.triangles=t.triangles,this.hullLength=t.hullLength,this.worldVerticesLength=t.w
orldVerticesLength)}copy(){if(this.parentMesh)return this.newLinkedMesh();const t=new
vt(this.name,this.path);return
t.region=this.region,t.color.setFromColor(this.color),this.copyTo(t),t.regionUVs=new
Float32Array(this.regionUVs.length),B.arrayCopy(this.regionUVs,0,t.regionUVs,0,this.regionUVs.lengt
h),t.triangles=new
Array(this.triangles.length),B.arrayCopy(this.triangles,0,t.triangles,0,this.triangles.length),t.hullLength=
this.hullLength,t.sequence=this.sequence!=null?this.sequence.copy():null,this.edges&&(t.edges=new
Array(this.edges.length),B.arrayCopy(this.edges,0,t.edges,0,this.edges.length)),t.width=this.width,t.he
ight=this.height,t}computeWorldVertices(t,n,e,r,a,d)
{this.sequence!=null&&this.sequence.apply(t,this),super.computeWorldVertices(t,n,e,r,a,d)}newLinked
Mesh(){const t=new vt(this.name,this.path);return
t.region=this.region,t.color.setFromColor(this.color),t.timelineAttachment=this.timelineAttachment,t.set
ParentMesh(this.parentMesh?this.parentMesh:this),t}}class At extends ot{constructor(t)
{super(t),this.type=et.Path,this.lengths=[],this.closed=!1,this.constantSpeed=!1,this.color=new
N(1,1,1,1)}copy(){const t=new At(this.name);return this.copyTo(t),t.lengths=new
Array(this.lengths.length),B.arrayCopy(this.lengths,0,t.lengths,0,this.lengths.length),t.closed=closed,t.
constantSpeed=this.constantSpeed,t.color.setFromColor(this.color),t}}class Wt extends
ot{constructor(t){super(t),this.type=et.Point,this.x=0,this.y=0,this.rotation=0,this.color=new
N(.38,.94,0,1)}computeWorldPosition(t,n){const e=t.matrix;return
n.x=this.x*e.a+this.y*e.c+t.worldX,n.y=this.x*e.b+this.y*e.d+t.worldY,n}computeWorldRotation(t){const
n=t.matrix,e=T.cosDeg(this.rotation),r=T.sinDeg(this.rotation),a=e*n.a+r*n.c,d=e*n.b+r*n.d;return
Math.atan2(d,a)*T.radDeg}copy(){const t=new Wt(this.name);return
t.x=this.x,t.y=this.y,t.rotation=this.rotation,t.color.setFromColor(this.color),t}}const Ge=class extends
ne{constructor(c,t)
{super(c),this.type=et.Region,this.x=0,this.y=0,this.scaleX=1,this.scaleY=1,this.rotation=0,this.width=
0,this.height=0,this.color=new
N(1,1,1,1),this.rendererObject=null,this.region=null,this.sequence=null,this.offset=B.newFloatArray(8)
,this.uvs=B.newFloatArray(8),this.tempColor=new N(1,1,1,1),this.path=t}updateRegion()
{if(!this.region)throw new Error("Region not set.");const
c=this.region,t=this.width/this.region.originalWidth*this.scaleX,n=this.height/this.region.originalHeight*
this.scaleY,e=-this.width/2*this.scaleX+this.region.offsetX*t,r=-
this.height/2*this.scaleY+this.region.offsetY*n,a=e+this.region.width*t,d=r+this.region.height*n,l=this.r
otation*Math.PI/180,s=Math.cos(l),i=Math.sin(l),o=this.x,h=this.y,f=e*s+o,u=e*i,m=r*s+h,g=r*i,p=a*s+
o,k=a*i,x=d*s+h,y=d*i,b=this.offset;b[0]=f-g,b[1]=m+u,b[2]=f-y,b[3]=x+u,b[4]=p-y,b[5]=x+k,b[6]=p-
g,b[7]=m+k;const w=this.uvs;c.degrees==90?
(w[2]=c.u,w[3]=c.v2,w[4]=c.u,w[5]=c.v,w[6]=c.u2,w[7]=c.v,w[0]=c.u2,w[1]=c.v2):
(w[0]=c.u,w[1]=c.v2,w[2]=c.u,w[3]=c.v,w[4]=c.u2,w[5]=c.v,w[6]=c.u2,w[7]=c.v2)}computeWorldVertices(c,t,n,e){this.sequence!=null&&this.sequence.apply(c,this);const
r=c.bone,a=this.offset,d=r.matrix,l=d.tx,s=d.ty,i=d.a,o=d.c,h=d.b,f=d.d;let
u=0,m=0;u=a[0],m=a[1],t[n]=u*i+m*o+l,t[n+1]=u*h+m*f+s,n+=e,u=a[2],m=a[3],t[n]=u*i+m*o+l,t[n+1]=u*
h+m*f+s,n+=e,u=a[4],m=a[5],t[n]=u*i+m*o+l,t[n+1]=u*h+m*f+s,n+=e,u=a[6],m=a[7],t[n]=u*i+m*o+l,t[n+
1]=u*h+m*f+s}copy(){const c=new Ge(this.name,this.path);return
c.region=this.region,c.rendererObject=this.rendererObject,c.x=this.x,c.y=this.y,c.scaleX=this.scaleX,c.
scaleY=this.scaleY,c.rotation=this.rotation,c.width=this.width,c.height=this.height,B.arrayCopy(this.uv
s,0,c.uvs,0,8),B.arrayCopy(this.offset,0,c.offset,0,8),c.color.setFromColor(this.color),c.sequence=this.
sequence!=null?this.sequence.copy():null,c}};let
z=Ge;z.X1=0;z.Y1=1;z.C1R=2;z.C1G=3;z.C1B=4;z.C1A=5;z.U1=6;z.V1=7;z.X2=8;z.Y2=9;z.C2R=10;
z.C2G=11;z.C2B=12;z.C2A=13;z.U2=14;z.V2=15;z.X3=16;z.Y3=17;z.C3R=18;z.C3G=19;z.C3B=20;z
.C3A=21;z.U3=22;z.V3=23;z.X4=24;z.Y4=25;z.C4R=26;z.C4G=27;z.C4B=28;z.C4A=29;z.U4=30;z.V
4=31;const Vt=class{constructor(c)
{this.id=Vt.nextID(),this.start=0,this.digits=0,this.setupIndex=0,this.regions=new Array(c)}copy(){const
c=new Vt(this.regions.length);return
B.arrayCopy(this.regions,0,c.regions,0,this.regions.length),c.start=this.start,c.digits=this.digits,c.setup
Index=this.setupIndex,c}apply(c,t){let n=c.sequenceIndex;n==-1&&
(n=this.setupIndex),n>=this.regions.length&&(n=this.regions.length-1);const
e=this.regions[n];t.region!=e&&(t.region=e)}getPath(c,t){let n=c;const e=(this.start+t).toString();for(let
r=this.digits-e.length;r>0;r--)n+="0";return n+=e,n}static nextID(){return Vt._nextID++}};let
Ot=Vt;Ot._nextID=0;var ft=(c=>
(c[c.hold=0]="hold",c[c.once=1]="once",c[c.loop=2]="loop",c[c.pingpong=3]="pingpong",c[c.onceReve
rse=4]="onceReverse",c[c.loopReverse=5]="loopReverse",c[c.pingpongReverse=6]="pingpongRever
se",c))(ft||{});const re=[0,1,2,3,4,5,6];class zt{constructor(t,n,e){if(this.timelines=[],this.timelineIds=new
He,!t)throw new Error("name cannot be
null.");this.name=t,this.setTimelines(n),this.duration=e}setTimelines(t){if(!t)throw new Error("timelines
cannot be null.");this.timelines=t,this.timelineIds.clear();for(let
n=0;n<t.length;n++)this.timelineIds.addAll(t[n].getPropertyIds())}hasTimeline(t){for(let
n=0;n<t.length;n++)if(this.timelineIds.contains(t[n]))return!0;return!1}apply(t,n,e,r,a,d,l,s){if(!t)throw
new Error("skeleton cannot be null.");r&&this.duration!=0&&(e%=this.duration,n>0&&
(n%=this.duration));const i=this.timelines;for(let o=0,h=i.length;o<h;o++)i[o].apply(t,n,e,a,d,l,s)}}const
H=
{rotate:0,x:1,y:2,scaleX:3,scaleY:4,shearX:5,shearY:6,rgb:7,alpha:8,rgb2:9,attachment:10,deform:11,
event:12,drawOrder:13,ikConstraint:14,transformConstraint:15,pathConstraintPosition:16,pathConstr
aintSpacing:17,pathConstraintMix:18,sequence:19};class G{constructor(t,n)
{this.propertyIds=n,this.frames=B.newFloatArray(t*this.getFrameEntries())}getPropertyIds(){return
this.propertyIds}getFrameEntries(){return 1}getFrameCount(){return
this.frames.length/this.getFrameEntries()}getDuration(){return this.frames[this.frames.length-
this.getFrameEntries()]}static search1(t,n){const e=t.length;for(let r=1;r<e;r++)if(t[r]>n)return r-1;return
e-1}static search(t,n,e){const r=t.length;for(let a=e;a<r;a+=e)if(t[a]>n)return a-e;return r-e}}class ct
extends G{constructor(t,n,e){super(t,e),this.curves=B.newFloatArray(t+n*18),this.curves[t-
1]=1}setLinear(t){this.curves[t]=0}setStepped(t){this.curves[t]=1}shrink(t){const
n=this.getFrameCount()+t*18;if(this.curves.length>n){const
e=B.newFloatArray(n);B.arrayCopy(this.curves,0,e,0,n),this.curves=e}}setBezier(t,n,e,r,a,d,l,s,i,o,h)
{const f=this.curves;let u=this.getFrameCount()+t*18;e==0&&(f[n]=2+u);const m=(r-d*2+s)*.03,g=(a-
l*2+i)*.03,p=((d-s)*3-r+o)*.006,k=((l-i)*3-a+h)*.006;let x=m*2+p,y=g*2+k,b=(dr)*.3+m+p*.16666667,w=(l-a)*.3+g+k*.16666667,S=r+b,v=a+w;for(let
M=u+18;u<M;u+=2)f[u]=S,f[u+1]=v,b+=x,w+=y,x+=p,y+=k,S+=b,v+=w}getBezierValue(t,n,e,r){const
a=this.curves;if(a[r]>t){const i=this.frames[n],o=this.frames[n+e];return o+(t-i)/(a[r]-i)*(a[r+1]-o)}const
d=r+18;for(r+=2;r<d;r+=2)if(a[r]>=t){const i=a[r-2],o=a[r-1];return o+(t-i)/(a[r]-i)*(a[r+1]-
o)}n+=this.getFrameEntries();const l=a[d-2],s=a[d-1];return s+(t-l)/(this.frames[n]-l)*(this.frames[n+e]-
s)}}class lt extends ct{constructor(t,n,e){super(t,n,[e])}getFrameEntries(){return 2}setFrame(t,n,e)
{t<<=1,this.frames[t]=n,this.frames[t+1]=e}getCurveValue(t){const n=this.frames;let e=n.length-
2;for(let a=2;a<=e;a+=2)if(n[a]>t){e=a-2;break}const r=this.curves[e>>1];switch(r){case 0:const
a=n[e],d=n[e+1];return d+(t-a)/(n[e+2]-a)*(n[e+2+1]-d);case 1:return n[e+1]}return
this.getBezierValue(t,e,1,r-2)}}class Ut extends ct{constructor(t,n,e,r){super(t,n,
[e,r])}getFrameEntries(){return 3}setFrame(t,n,e,r)
{t*=3,this.frames[t]=n,this.frames[t+1]=e,this.frames[t+2]=r}}class Bt extends lt{constructor(t,n,e)
{super(t,n,`${H.rotate}|${e}`),this.boneIndex=0,this.boneIndex=e}apply(t,n,e,r,a,d,l){const
s=t.bones[this.boneIndex];if(!s.active)return;const i=this.frames;if(e<i[0]){switch(d){case
C.setup:s.rotation=s.data.rotation;return;case C.first:s.rotation+=(s.data.rotation-
s.rotation)*a}return}let o=this.getCurveValue(e);switch(d){case
C.setup:s.rotation=s.data.rotation+o*a;break;case C.first:case C.replace:o+=s.data.rotation-
s.rotation;case C.add:s.rotation+=o*a}}}class ie extends Ut{constructor(t,n,e)
{super(t,n,`${H.x}|${e}`,`${H.y}|${e}`),this.boneIndex=0,this.boneIndex=e}apply(t,n,e,r,a,d,l){const
s=t.bones[this.boneIndex];if(!s.active)return;const i=this.frames;if(e<i[0]){switch(d){case
C.setup:s.x=s.data.x,s.y=s.data.y;return;case C.first:s.x+=(s.data.x-s.x)*a,s.y+=(s.data.y-
s.y)*a}return}let o=0,h=0;const f=G.search(i,e,3),u=this.curves[f/3];switch(u){case 0:const
m=i[f];o=i[f+1],h=i[f+2];const g=(e-m)/(i[f+3]-m);o+=(i[f+3+1]-o)*g,h+=(i[f+3+2]-h)*g;break;case
1:o=i[f+1],h=i[f+2];break;default:o=this.getBezierValue(e,f,1,u-2),h=this.getBezierValue(e,f,2,u+18-
2)}switch(d){case C.setup:s.x=s.data.x+o*a,s.y=s.data.y+h*a;break;case C.first:case C.replace:s.x+=
(s.data.x+o-s.x)*a,s.y+=(s.data.y+h-s.y)*a;break;case C.add:s.x+=o*a,s.y+=h*a}}}class ae extends
lt{constructor(t,n,e){super(t,n,`${H.x}|${e}`),this.boneIndex=0,this.boneIndex=e}apply(t,n,e,r,a,d,l)
{const s=t.bones[this.boneIndex];if(!s.active)return;const i=this.frames;if(e<i[0]){switch(d){case
C.setup:s.x=s.data.x;return;case C.first:s.x+=(s.data.x-s.x)*a}return}const
o=this.getCurveValue(e);switch(d){case C.setup:s.x=s.data.x+o*a;break;case C.first:case
C.replace:s.x+=(s.data.x+o-s.x)*a;break;case C.add:s.x+=o*a}}}class oe extends lt{constructor(t,n,e)
{super(t,n,`${H.y}|${e}`),this.boneIndex=0,this.boneIndex=e}apply(t,n,e,r,a,d,l){const
s=t.bones[this.boneIndex];if(!s.active)return;const i=this.frames;if(e<i[0]){switch(d){case
C.setup:s.y=s.data.y;return;case C.first:s.y+=(s.data.y-s.y)*a}return}const
o=this.getCurveValue(e);switch(d){case C.setup:s.y=s.data.y+o*a;break;case C.first:case
C.replace:s.y+=(s.data.y+o-s.y)*a;break;case C.add:s.y+=o*a}}}class ce extends Ut{constructor(t,n,e)
{super(t,n,`${H.scaleX}|${e}`,`${H.scaleY}|${e}`),this.boneIndex=0,this.boneIndex=e}apply(t,n,e,r,a,d,l)
{const s=t.bones[this.boneIndex];if(!s.active)return;const i=this.frames;if(e<i[0]){switch(d){case
C.setup:s.scaleX=s.data.scaleX,s.scaleY=s.data.scaleY;return;case C.first:s.scaleX+=(s.data.scaleX-
s.scaleX)*a,s.scaleY+=(s.data.scaleY-s.scaleY)*a}return}let o,h;const
f=G.search(i,e,3),u=this.curves[f/3];switch(u){case 0:const m=i[f];o=i[f+1],h=i[f+2];const g=(e-
m)/(i[f+3]-m);o+=(i[f+3+1]-o)*g,h+=(i[f+3+2]-h)*g;break;case
1:o=i[f+1],h=i[f+2];break;default:o=this.getBezierValue(e,f,1,u-2),h=this.getBezierValue(e,f,2,u+18-
2)}if(o*=s.data.scaleX,h*=s.data.scaleY,a==1)d==C.add?(s.scaleX+=o-s.data.scaleX,s.scaleY+=h-
s.data.scaleY):(s.scaleX=o,s.scaleY=h);else{let m=0,g=0;if(l==st.mixOut)switch(d){case
C.setup:m=s.data.scaleX,g=s.data.scaleY,s.scaleX=m+(Math.abs(o)*T.signum(m)-m)*a,s.scaleY=g+(Math.abs(h)*T.signum(g)-g)*a;break;case C.first:case
C.replace:m=s.scaleX,g=s.scaleY,s.scaleX=m+(Math.abs(o)*T.signum(m)-m)*a,s.scaleY=g+
(Math.abs(h)*T.signum(g)-g)*a;break;case C.add:s.scaleX+=(o-s.data.scaleX)*a,s.scaleY+=(h-
s.data.scaleY)*a}else switch(d){case
C.setup:m=Math.abs(s.data.scaleX)*T.signum(o),g=Math.abs(s.data.scaleY)*T.signum(h),s.scaleX=m
+(o-m)*a,s.scaleY=g+(h-g)*a;break;case C.first:case
C.replace:m=Math.abs(s.scaleX)*T.signum(o),g=Math.abs(s.scaleY)*T.signum(h),s.scaleX=m+(o-
m)*a,s.scaleY=g+(h-g)*a;break;case C.add:s.scaleX+=(o-s.data.scaleX)*a,s.scaleY+=(h-
s.data.scaleY)*a}}}}class le extends lt{constructor(t,n,e)
{super(t,n,`${H.scaleX}|${e}`),this.boneIndex=0,this.boneIndex=e}apply(t,n,e,r,a,d,l){const
s=t.bones[this.boneIndex];if(!s.active)return;const i=this.frames;if(e<i[0]){switch(d){case
C.setup:s.scaleX=s.data.scaleX;return;case C.first:s.scaleX+=(s.data.scaleX-s.scaleX)*a}return}const
o=this.getCurveValue(e)*s.data.scaleX;if(a==1)d==C.add?s.scaleX+=o-
s.data.scaleX:s.scaleX=o;else{let h=0;if(l==st.mixOut)switch(d){case
C.setup:h=s.data.scaleX,s.scaleX=h+(Math.abs(o)*T.signum(h)-h)*a;break;case C.first:case
C.replace:h=s.scaleX,s.scaleX=h+(Math.abs(o)*T.signum(h)-h)*a;break;case C.add:s.scaleX+=(o-
s.data.scaleX)*a}else switch(d){case C.setup:h=Math.abs(s.data.scaleX)*T.signum(o),s.scaleX=h+(o-
h)*a;break;case C.first:case C.replace:h=Math.abs(s.scaleX)*T.signum(o),s.scaleX=h+(o-
h)*a;break;case C.add:s.scaleX+=(o-s.data.scaleX)*a}}}}class he extends lt{constructor(t,n,e)
{super(t,n,`${H.scaleY}|${e}`),this.boneIndex=0,this.boneIndex=e}apply(t,n,e,r,a,d,l){const
s=t.bones[this.boneIndex];if(!s.active)return;const i=this.frames;if(e<i[0]){switch(d){case
C.setup:s.scaleY=s.data.scaleY;return;case C.first:s.scaleY+=(s.data.scaleY-s.scaleY)*a}return}const
o=this.getCurveValue(e)*s.data.scaleY;if(a==1)d==C.add?s.scaleY+=o-
s.data.scaleY:s.scaleY=o;else{let h=0;if(l==st.mixOut)switch(d){case
C.setup:h=s.data.scaleY,s.scaleY=h+(Math.abs(o)*T.signum(h)-h)*a;break;case C.first:case
C.replace:h=s.scaleY,s.scaleY=h+(Math.abs(o)*T.signum(h)-h)*a;break;case C.add:s.scaleY+=(o-
s.data.scaleY)*a}else switch(d){case C.setup:h=Math.abs(s.data.scaleY)*T.signum(o),s.scaleY=h+(o-
h)*a;break;case C.first:case C.replace:h=Math.abs(s.scaleY)*T.signum(o),s.scaleY=h+(o-
h)*a;break;case C.add:s.scaleY+=(o-s.data.scaleY)*a}}}}class de extends Ut{constructor(t,n,e)
{super(t,n,`${H.shearX}|${e}`,`${H.shearY}|${e}`),this.boneIndex=0,this.boneIndex=e}apply(t,n,e,r,a,d,l
){const s=t.bones[this.boneIndex];if(!s.active)return;const i=this.frames;if(e<i[0]){switch(d){case
C.setup:s.shearX=s.data.shearX,s.shearY=s.data.shearY;return;case C.first:s.shearX+=
(s.data.shearX-s.shearX)*a,s.shearY+=(s.data.shearY-s.shearY)*a}return}let o=0,h=0;const
f=G.search(i,e,3),u=this.curves[f/3];switch(u){case 0:const m=i[f];o=i[f+1],h=i[f+2];const g=(e-
m)/(i[f+3]-m);o+=(i[f+3+1]-o)*g,h+=(i[f+3+2]-h)*g;break;case
1:o=i[f+1],h=i[f+2];break;default:o=this.getBezierValue(e,f,1,u-2),h=this.getBezierValue(e,f,2,u+18-
2)}switch(d){case C.setup:s.shearX=s.data.shearX+o*a,s.shearY=s.data.shearY+h*a;break;case
C.first:case C.replace:s.shearX+=(s.data.shearX+o-s.shearX)*a,s.shearY+=(s.data.shearY+h-
s.shearY)*a;break;case C.add:s.shearX+=o*a,s.shearY+=h*a}}}class fe extends lt{constructor(t,n,e)
{super(t,n,`${H.shearX}|${e}`),this.boneIndex=0,this.boneIndex=e}apply(t,n,e,r,a,d,l){const
s=t.bones[this.boneIndex];if(!s.active)return;const i=this.frames;if(e<i[0]){switch(d){case
C.setup:s.shearX=s.data.shearX;return;case C.first:s.shearX+=(s.data.shearX-
s.shearX)*a}return}const o=this.getCurveValue(e);switch(d){case
C.setup:s.shearX=s.data.shearX+o*a;break;case C.first:case C.replace:s.shearX+=(s.data.shearX+o-
s.shearX)*a;break;case C.add:s.shearX+=o*a}}}class me extends lt{constructor(t,n,e)
{super(t,n,`${H.shearY}|${e}`),this.boneIndex=0,this.boneIndex=e}apply(t,n,e,r,a,d,l){consts=t.bones[this.boneIndex];if(!s.active)return;const i=this.frames;if(e<i[0]){switch(d){case
C.setup:s.shearY=s.data.shearY;return;case C.first:s.shearY+=(s.data.shearY-
s.shearY)*a}return}const o=this.getCurveValue(e);switch(d){case
C.setup:s.shearY=s.data.shearY+o*a;break;case C.first:case C.replace:s.shearY+=(s.data.shearY+o-
s.shearY)*a;break;case C.add:s.shearY+=o*a}}}class ue extends ct{constructor(t,n,e){super(t,n,
[`${H.rgb}|${e}`,`${H.alpha}|${e}`]),this.slotIndex=0,this.slotIndex=e}getFrameEntries(){return
5}setFrame(t,n,e,r,a,d)
{t*=5,this.frames[t]=n,this.frames[t+1]=e,this.frames[t+2]=r,this.frames[t+3]=a,this.frames[t+4]=d}apply
(t,n,e,r,a,d,l){const s=t.slots[this.slotIndex];if(!s.bone.active)return;const
i=this.frames,o=s.color;if(e<i[0]){const k=s.data.color;switch(d){case
C.setup:o.setFromColor(k);return;case C.first:o.add((k.r-o.r)*a,(k.g-o.g)*a,(k.b-o.b)*a,(k.a-
o.a)*a)}return}let h=0,f=0,u=0,m=0;const g=G.search(i,e,5),p=this.curves[g/5];switch(p){case 0:const
k=i[g];h=i[g+1],f=i[g+2],u=i[g+3],m=i[g+4];const x=(e-k)/(i[g+5]-k);h+=(i[g+5+1]-h)*x,f+=(i[g+5+2]-
f)*x,u+=(i[g+5+3]-u)*x,m+=(i[g+5+4]-m)*x;break;case
1:h=i[g+1],f=i[g+2],u=i[g+3],m=i[g+4];break;default:h=this.getBezierValue(e,g,1,p-
2),f=this.getBezierValue(e,g,2,p+18-2),u=this.getBezierValue(e,g,3,p+18*2-
2),m=this.getBezierValue(e,g,4,p+18*3-2)}a==1?o.set(h,f,u,m):
(d==C.setup&&o.setFromColor(s.data.color),o.add((h-o.r)*a,(f-o.g)*a,(u-o.b)*a,(m-o.a)*a))}}class ge
extends ct{constructor(t,n,e){super(t,n,
[`${H.rgb}|${e}`]),this.slotIndex=0,this.slotIndex=e}getFrameEntries(){return 4}setFrame(t,n,e,r,a)
{t<<=2,this.frames[t]=n,this.frames[t+1]=e,this.frames[t+2]=r,this.frames[t+3]=a}apply(t,n,e,r,a,d,l)
{const s=t.slots[this.slotIndex];if(!s.bone.active)return;const i=this.frames,o=s.color;if(e<i[0]){const
k=s.data.color;switch(d){case C.setup:o.setFromColor(k);return;case C.first:o.add((k.r-o.r)*a,(k.g-
o.g)*a,(k.b-o.b)*a,(k.a-o.a)*a)}return}let h=0,f=0,u=0,m=0;const
g=G.search(i,e,5),p=this.curves[g/5];switch(p){case 0:const
k=i[g];h=i[g+1],f=i[g+2],u=i[g+3],m=i[g+4];const x=(e-k)/(i[g+5]-k);h+=(i[g+5+1]-h)*x,f+=(i[g+5+2]-
f)*x,u+=(i[g+5+3]-u)*x,m+=(i[g+5+4]-m)*x;break;case
1:h=i[g+1],f=i[g+2],u=i[g+3],m=i[g+4];break;default:h=this.getBezierValue(e,g,1,p-
2),f=this.getBezierValue(e,g,2,p+18-2),u=this.getBezierValue(e,g,3,p+18*2-
2),m=this.getBezierValue(e,g,4,p+18*3-2)}a==1?o.set(h,f,u,m):
(d==C.setup&&o.setFromColor(s.data.color),o.add((h-o.r)*a,(f-o.g)*a,(u-o.b)*a,(m-o.a)*a))}}class ge
extends ct{constructor(t,n,e){super(t,n,
[`${H.rgb}|${e}`]),this.slotIndex=0,this.slotIndex=e}getFrameEntries(){return 4}setFrame(t,n,e,r,a)
{t<<=2,this.frames[t]=n,this.frames[t+1]=e,this.frames[t+2]=r,this.frames[t+3]=a}apply(t,n,e,r,a,d,l)
{const s=t.slots[this.slotIndex];if(!s.bone.active)return;const i=this.frames,o=s.color;if(e<i[0]){const
p=s.data.color;switch(d){case C.setup:o.r=p.r,o.g=p.g,o.b=p.b;return;case C.first:o.r+=(p.r-
o.r)*a,o.g+=(p.g-o.g)*a,o.b+=(p.b-o.b)*a}return}let h=0,f=0,u=0;const
m=G.search(i,e,4),g=this.curves[m>>2];switch(g){case 0:const
p=i[m];h=i[m+1],f=i[m+2],u=i[m+3];const k=(e-p)/(i[m+4]-p);h+=(i[m+4+1]-h)*k,f+=(i[m+4+2]-f)*k,u+=
(i[m+4+3]-u)*k;break;case 1:h=i[m+1],f=i[m+2],u=i[m+3];break;default:h=this.getBezierValue(e,m,1,g-
2),f=this.getBezierValue(e,m,2,g+18-2),u=this.getBezierValue(e,m,3,g+18*2-
2)}if(a==1)o.r=h,o.g=f,o.b=u;else{if(d==C.setup){const p=s.data.color;o.r=p.r,o.g=p.g,o.b=p.b}o.r+=(h-
o.r)*a,o.g+=(f-o.g)*a,o.b+=(u-o.b)*a}}}class xe extends lt{constructor(t,n,e)
{super(t,n,`${H.alpha}|${e}`),this.slotIndex=0,this.slotIndex=e}apply(t,n,e,r,a,d,l){const
s=t.slots[this.slotIndex];if(!s.bone.active)return;const i=s.color;if(e<this.frames[0]){const
h=s.data.color;switch(d){case C.setup:i.a=h.a;return;case C.first:i.a+=(h.a-i.a)*a}return}consto=this.getCurveValue(e);a==1?i.a=o:(d==C.setup&&(i.a=s.data.color.a),i.a+=(o-i.a)*a)}}class be
extends ct{constructor(t,n,e){super(t,n,
[`${H.rgb}|${e}`,`${H.alpha}|${e}`,`${H.rgb2}|${e}`]),this.slotIndex=0,this.slotIndex=e}getFrameEntries(
){return 8}setFrame(t,n,e,r,a,d,l,s,i)
{t<<=3,this.frames[t]=n,this.frames[t+1]=e,this.frames[t+2]=r,this.frames[t+3]=a,this.frames[t+4]=d,this
.frames[t+5]=l,this.frames[t+6]=s,this.frames[t+7]=i}apply(t,n,e,r,a,d,l){const
s=t.slots[this.slotIndex];if(!s.bone.active)return;const i=this.frames,o=s.color,h=s.darkColor;if(e<i[0])
{const w=s.data.color,S=s.data.darkColor;switch(d){case
C.setup:o.setFromColor(w),h.r=S.r,h.g=S.g,h.b=S.b;return;case C.first:o.add((w.r-o.r)*a,(w.g-o.g)*a,
(w.b-o.b)*a,(w.a-o.a)*a),h.r+=(S.r-h.r)*a,h.g+=(S.g-h.g)*a,h.b+=(S.b-h.b)*a}return}let
f=0,u=0,m=0,g=0,p=0,k=0,x=0;const y=G.search(i,e,8),b=this.curves[y>>3];switch(b){case 0:const
w=i[y];f=i[y+1],u=i[y+2],m=i[y+3],g=i[y+4],p=i[y+5],k=i[y+6],x=i[y+7];const S=(e-w)/(i[y+8]-w);f+=
(i[y+8+1]-f)*S,u+=(i[y+8+2]-u)*S,m+=(i[y+8+3]-m)*S,g+=(i[y+8+4]-g)*S,p+=(i[y+8+5]-p)*S,k+=
(i[y+8+6]-k)*S,x+=(i[y+8+7]-x)*S;break;case
1:f=i[y+1],u=i[y+2],m=i[y+3],g=i[y+4],p=i[y+5],k=i[y+6],x=i[y+7];break;default:f=this.getBezierValue(e,y,
1,b-2),u=this.getBezierValue(e,y,2,b+18-2),m=this.getBezierValue(e,y,3,b+18*2-
2),g=this.getBezierValue(e,y,4,b+18*3-2),p=this.getBezierValue(e,y,5,b+18*4-
2),k=this.getBezierValue(e,y,6,b+18*5-2),x=this.getBezierValue(e,y,7,b+18*6-
2)}if(a==1)o.set(f,u,m,g),h.r=p,h.g=k,h.b=x;else{if(d==C.setup){o.setFromColor(s.data.color);const
w=s.data.darkColor;h.r=w.r,h.g=w.g,h.b=w.b}o.add((f-o.r)*a,(u-o.g)*a,(m-o.b)*a,(g-o.a)*a),h.r+=(p-
h.r)*a,h.g+=(k-h.g)*a,h.b+=(x-h.b)*a}}}class we extends ct{constructor(t,n,e){super(t,n,
[`${H.rgb}|${e}`,`${H.rgb2}|${e}`]),this.slotIndex=0,this.slotIndex=e}getFrameEntries(){return
7}setFrame(t,n,e,r,a,d,l,s)
{t*=7,this.frames[t]=n,this.frames[t+1]=e,this.frames[t+2]=r,this.frames[t+3]=a,this.frames[t+4]=d,this.fr
ames[t+5]=l,this.frames[t+6]=s}apply(t,n,e,r,a,d,l){const
s=t.slots[this.slotIndex];if(!s.bone.active)return;const i=this.frames,o=s.color,h=s.darkColor;if(e<i[0])
{const b=s.data.color,w=s.data.darkColor;switch(d){case
C.setup:o.r=b.r,o.g=b.g,o.b=b.b,h.r=w.r,h.g=w.g,h.b=w.b;return;case C.first:o.r+=(b.r-o.r)*a,o.g+=(b.g-
o.g)*a,o.b+=(b.b-o.b)*a,h.r+=(w.r-h.r)*a,h.g+=(w.g-h.g)*a,h.b+=(w.b-h.b)*a}return}let
f=0,u=0,m=0,g=0,p=0,k=0;const x=G.search(i,e,7),y=this.curves[x/7];switch(y){case 0:const
b=i[x];f=i[x+1],u=i[x+2],m=i[x+3],g=i[x+4],p=i[x+5],k=i[x+6];const w=(e-b)/(i[x+7]-b);f+=(i[x+7+1]-
f)*w,u+=(i[x+7+2]-u)*w,m+=(i[x+7+3]-m)*w,g+=(i[x+7+4]-g)*w,p+=(i[x+7+5]-p)*w,k+=(i[x+7+6]-
k)*w;break;case
1:f=i[x+1],u=i[x+2],m=i[x+3],g=i[x+4],p=i[x+5],k=i[x+6];break;default:f=this.getBezierValue(e,x,1,y-
2),u=this.getBezierValue(e,x,2,y+18-2),m=this.getBezierValue(e,x,3,y+18*2-
2),g=this.getBezierValue(e,x,4,y+18*3-2),p=this.getBezierValue(e,x,5,y+18*4-
2),k=this.getBezierValue(e,x,6,y+18*5-
2)}if(a==1)o.r=f,o.g=u,o.b=m,h.r=g,h.g=p,h.b=k;else{if(d==C.setup){const
b=s.data.color,w=s.data.darkColor;o.r=b.r,o.g=b.g,o.b=b.b,h.r=w.r,h.g=w.g,h.b=w.b}o.r+=(f-
o.r)*a,o.g+=(u-o.g)*a,o.b+=(m-o.b)*a,h.r+=(g-h.r)*a,h.g+=(p-h.g)*a,h.b+=(k-h.b)*a}}}class kt extends
G{constructor(t,n){super(t,
[`${H.attachment}|${n}`]),this.slotIndex=0,this.slotIndex=n,this.attachmentNames=new
Array(t)}getFrameCount(){return this.frames.length}setFrame(t,n,e)
{this.frames[t]=n,this.attachmentNames[t]=e}apply(t,n,e,r,a,d,l){const
s=t.slots[this.slotIndex];if(s.bone.active){if(l==st.mixOut)
{d==C.setup&&this.setAttachment(t,s,s.data.attachmentName);return}if(e<this.frames[0]){(d==C.setup||d==C.first)&&this.setAttachment(t,s,s.data.attachmentName);return}this.setAttachment(
t,s,this.attachmentNames[G.search1(this.frames,e)])}}setAttachment(t,n,e){n.setAttachment(e?
t.getAttachment(this.slotIndex,e):null)}}class pe extends ct{constructor(t,n,e,r){super(t,n,
[`${H.deform}|${e}|${r.id}`]),this.slotIndex=0,this.slotIndex=e,this.attachment=r,this.vertices=new
Array(t)}getFrameCount(){return this.frames.length}setFrame(t,n,e)
{this.frames[t]=n,this.vertices[t]=e}setBezier(t,n,e,r,a,d,l,s,i,o,h){const f=this.curves;let
u=this.getFrameCount()+t*18;e==0&&(f[n]=2+u);const m=(r-d*2+s)*.03,g=i*.03-l*.06,p=((d-s)*3-
r+o)*.006,k=(l-i+.33333333)*.018;let x=m*2+p,y=g*2+k,b=(d-
r)*.3+m+p*.16666667,w=l*.3+g+k*.16666667,S=r+b,v=w;for(let
M=u+18;u<M;u+=2)f[u]=S,f[u+1]=v,b+=x,w+=y,x+=p,y+=k,S+=b,v+=w}getCurvePercent(t,n){const
e=this.curves;let r=e[n];switch(r){case 0:const s=this.frames[n];return(t-
s)/(this.frames[n+this.getFrameEntries()]-s);case 1:return 0}if(r-=2,e[r]>t){const s=this.frames[n];return
e[r+1]*(t-s)/(e[r]-s)}const a=r+18;for(r+=2;r<a;r+=2)if(e[r]>=t){const s=e[r-2],i=e[r-1];return i+(t-s)/(e[r]-
s)*(e[r+1]-i)}const d=e[a-2],l=e[a-1];return l+(1-l)*(t-d)/(this.frames[n+this.getFrameEntries()]-
d)}apply(t,n,e,r,a,d,l){const s=t.slots[this.slotIndex];if(!s.bone.active)return;const
i=s.getAttachment();if(!i||!(i instanceof ot)||i.timelineAttachment!=this.attachment)return;const
o=s.deform;o.length==0&&(d=C.setup);const h=this.vertices,f=h[0].length,u=this.frames;if(e<u[0])
{switch(d){case C.setup:o.length=0;return;case C.first:if(a==1){o.length=0;return}o.length=f;const
x=i;if(x.bones){a=1-a;for(let y=0;y<f;y++)o[y]*=a}else{const y=x.vertices;for(let b=0;b<f;b++)o[b]+=
(y[b]-o[b])*a}}return}if(o.length=f,e>=u[u.length-1]){const x=h[u.length-1];if(a==1)if(d==C.add){const
y=i;if(y.bones)for(let b=0;b<f;b++)o[b]+=x[b];else{const b=y.vertices;for(let w=0;w<f;w++)o[w]+=x[w]-
b[w]}}else B.arrayCopy(x,0,o,0,f);else switch(d){case C.setup:{const b=i;if(b.bones)for(let
w=0;w<f;w++)o[w]=x[w]*a;else{const w=b.vertices;for(let S=0;S<f;S++){const v=w[S];o[S]=v+(x[S]-
v)*a}}break}case C.first:case C.replace:for(let b=0;b<f;b++)o[b]+=(x[b]-o[b])*a;break;case C.add:const
y=i;if(y.bones)for(let b=0;b<f;b++)o[b]+=x[b]*a;else{const b=y.vertices;for(let w=0;w<f;w++)o[w]+=
(x[w]-b[w])*a}}return}const
m=G.search1(u,e),g=this.getCurvePercent(e,m),p=h[m],k=h[m+1];if(a==1)if(d==C.add){const
x=i;if(x.bones)for(let y=0;y<f;y++){const b=p[y];o[y]+=b+(k[y]-b)*g}else{const y=x.vertices;for(let
b=0;b<f;b++){const w=p[b];o[b]+=w+(k[b]-w)*g-y[b]}}}else for(let x=0;x<f;x++){const y=p[x];o[x]=y+
(k[x]-y)*g}else switch(d){case C.setup:{const y=i;if(y.bones)for(let b=0;b<f;b++){const w=p[b];o[b]=(w+
(k[b]-w)*g)*a}else{const b=y.vertices;for(let w=0;w<f;w++){const S=p[w],v=b[w];o[w]=v+(S+(k[w]-S)*g-
v)*a}}break}case C.first:case C.replace:for(let y=0;y<f;y++){const b=p[y];o[y]+=(b+(k[y]-b)*g-
o[y])*a}break;case C.add:const x=i;if(x.bones)for(let y=0;y<f;y++){const b=p[y];o[y]+=(b+(k[y]-
b)*g)*a}else{const y=x.vertices;for(let b=0;b<f;b++){const w=p[b];o[b]+=(w+(k[b]-w)*g-y[b])*a}}}}}const
Ke=class extends G{constructor(c){super(c,Ke.propertyIds),this.events=new
Array(c)}getFrameCount(){return this.frames.length}setFrame(c,t)
{this.frames[c]=t.time,this.events[c]=t}apply(c,t,n,e,r,a,d){if(!e)return;const
l=this.frames,s=this.frames.length;if(t>n)this.apply(c,t,Number.MAX_VALUE,e,r,a,d),t=-1;else if(t>=l[s-
1])return;if(n<l[0])return;let i=0;if(t<l[0])i=0;else{i=G.search1(l,t)+1;const o=l[i];for(;i>0&&l[i-1]==o;)i-
-}for(;i<s&&n>=l[i];i++)e.push(this.events[i])}};let Rt=Ke;Rt.propertyIds=[`${H.event}`];const Qe=class
extends G{constructor(c){super(c,Qe.propertyIds),this.drawOrders=new Array(c)}getFrameCount()
{return this.frames.length}setFrame(c,t,n){this.frames[c]=t,this.drawOrders[c]=n}apply(c,t,n,e,r,a,d)
{if(d==st.mixOut)
{a==C.setup&&B.arrayCopy(c.slots,0,c.drawOrder,0,c.slots.length);return}if(n<this.frames[0])
{(a==C.setup||a==C.first)&&B.arrayCopy(c.slots,0,c.drawOrder,0,c.slots.length);return}const
l=G.search1(this.frames,n),s=this.drawOrders[l];if(!s)B.arrayCopy(c.slots,0,c.drawOrder,0,c.slots.length);else{const i=c.drawOrder,o=c.slots;for(let h=0,f=s.length;h<f;h++)i[h]=o[s[h]]}}};let
St=Qe;St.propertyIds=[`${H.drawOrder}`];class ye extends ct{constructor(t,n,e){super(t,n,
[`${H.ikConstraint}|${e}`]),this.ikConstraintIndex=0,this.ikConstraintIndex=e}getFrameEntries(){return
6}setFrame(t,n,e,r,a,d,l)
{t*=6,this.frames[t]=n,this.frames[t+1]=e,this.frames[t+2]=r,this.frames[t+3]=a,this.frames[t+4]=d?
1:0,this.frames[t+5]=l?1:0}apply(t,n,e,r,a,d,l){const
s=t.ikConstraints[this.ikConstraintIndex];if(!s.active)return;const i=this.frames;if(e<i[0]){switch(d){case
C.setup:s.mix=s.data.mix,s.softness=s.data.softness,s.bendDirection=s.data.bendDirection,s.compre
ss=s.data.compress,s.stretch=s.data.stretch;return;case C.first:s.mix+=(s.data.mix-
s.mix)*a,s.softness+=(s.data.softness-
s.softness)*a,s.bendDirection=s.data.bendDirection,s.compress=s.data.compress,s.stretch=s.data.str
etch}return}let o=0,h=0;const f=G.search(i,e,6),u=this.curves[f/6];switch(u){case 0:const
m=i[f];o=i[f+1],h=i[f+2];const g=(e-m)/(i[f+6]-m);o+=(i[f+6+1]-o)*g,h+=(i[f+6+2]-h)*g;break;case
1:o=i[f+1],h=i[f+2];break;default:o=this.getBezierValue(e,f,1,u-2),h=this.getBezierValue(e,f,2,u+18-
2)}d==C.setup?(s.mix=s.data.mix+(o-s.data.mix)*a,s.softness=s.data.softness+(h-
s.data.softness)*a,l==st.mixOut?
(s.bendDirection=s.data.bendDirection,s.compress=s.data.compress,s.stretch=s.data.stretch):
(s.bendDirection=i[f+3],s.compress=i[f+4]!=0,s.stretch=i[f+5]!=0)):(s.mix+=(o-s.mix)*a,s.softness+=(h-
s.softness)*a,l==st.mixIn&&(s.bendDirection=i[f+3],s.compress=i[f+4]!=0,s.stretch=i[f+5]!=0))}}class
ke extends ct{constructor(t,n,e){super(t,n,
[`${H.transformConstraint}|${e}`]),this.transformConstraintIndex=0,this.transformConstraintIndex=e}g
etFrameEntries(){return 7}setFrame(t,n,e,r,a,d,l,s){const
i=this.frames;t*=7,i[t]=n,i[t+1]=e,i[t+2]=r,i[t+3]=a,i[t+4]=d,i[t+5]=l,i[t+6]=s}apply(t,n,e,r,a,d,l){const
s=t.transformConstraints[this.transformConstraintIndex];if(!s.active)return;const i=this.frames;if(e<i[0])
{const x=s.data;switch(d){case
C.setup:s.mixRotate=x.mixRotate,s.mixX=x.mixX,s.mixY=x.mixY,s.mixScaleX=x.mixScaleX,s.mixScal
eY=x.mixScaleY,s.mixShearY=x.mixShearY;return;case C.first:s.mixRotate+=(x.mixRotate-
s.mixRotate)*a,s.mixX+=(x.mixX-s.mixX)*a,s.mixY+=(x.mixY-s.mixY)*a,s.mixScaleX+=(x.mixScaleX-
s.mixScaleX)*a,s.mixScaleY+=(x.mixScaleY-s.mixScaleY)*a,s.mixShearY+=(x.mixShearY-
s.mixShearY)*a}return}let o,h,f,u,m,g;const p=G.search(i,e,7),k=this.curves[p/7];switch(k){case
0:const x=i[p];o=i[p+1],h=i[p+2],f=i[p+3],u=i[p+4],m=i[p+5],g=i[p+6];const y=(e-x)/(i[p+7]-x);o+=
(i[p+7+1]-o)*y,h+=(i[p+7+2]-h)*y,f+=(i[p+7+3]-f)*y,u+=(i[p+7+4]-u)*y,m+=(i[p+7+5]-m)*y,g+=(i[p+7+6]-
g)*y;break;case
1:o=i[p+1],h=i[p+2],f=i[p+3],u=i[p+4],m=i[p+5],g=i[p+6];break;default:o=this.getBezierValue(e,p,1,k-
2),h=this.getBezierValue(e,p,2,k+18-2),f=this.getBezierValue(e,p,3,k+18*2-
2),u=this.getBezierValue(e,p,4,k+18*3-2),m=this.getBezierValue(e,p,5,k+18*4-
2),g=this.getBezierValue(e,p,6,k+18*5-2)}if(d==C.setup){const x=s.data;s.mixRotate=x.mixRotate+(o-
x.mixRotate)*a,s.mixX=x.mixX+(h-x.mixX)*a,s.mixY=x.mixY+(f-x.mixY)*a,s.mixScaleX=x.mixScaleX+
(u-x.mixScaleX)*a,s.mixScaleY=x.mixScaleY+(m-x.mixScaleY)*a,s.mixShearY=x.mixShearY+(g-
x.mixShearY)*a}else s.mixRotate+=(o-s.mixRotate)*a,s.mixX+=(h-s.mixX)*a,s.mixY+=(f-
s.mixY)*a,s.mixScaleX+=(u-s.mixScaleX)*a,s.mixScaleY+=(m-s.mixScaleY)*a,s.mixShearY+=(g-
s.mixShearY)*a}}class Se extends lt{constructor(t,n,e)
{super(t,n,`${H.pathConstraintPosition}|${e}`),this.pathConstraintIndex=0,this.pathConstraintIndex=e}
apply(t,n,e,r,a,d,l){const s=t.pathConstraints[this.pathConstraintIndex];if(!s.active)return;const
i=this.frames;if(e<i[0]){switch(d){case C.setup:s.position=s.data.position;return;case
C.first:s.position+=(s.data.position-s.position)*a}return}const o=this.getCurveValue(e);d==C.setup?s.position=s.data.position+(o-s.data.position)*a:s.position+=(o-s.position)*a}}class ve extends
lt{constructor(t,n,e)
{super(t,n,`${H.pathConstraintSpacing}|${e}`),this.pathConstraintIndex=0,this.pathConstraintIndex=e}
apply(t,n,e,r,a,d,l){const s=t.pathConstraints[this.pathConstraintIndex];if(!s.active)return;const
i=this.frames;if(e<i[0]){switch(d){case C.setup:s.spacing=s.data.spacing;return;case
C.first:s.spacing+=(s.data.spacing-s.spacing)*a}return}const o=this.getCurveValue(e);d==C.setup?
s.spacing=s.data.spacing+(o-s.data.spacing)*a:s.spacing+=(o-s.spacing)*a}}class Ae extends
ct{constructor(t,n,e){super(t,n,
[`${H.pathConstraintMix}|${e}`]),this.pathConstraintIndex=0,this.pathConstraintIndex=e}getFrameEntri
es(){return 4}setFrame(t,n,e,r,a){const
d=this.frames;t<<=2,d[t]=n,d[t+1]=e,d[t+2]=r,d[t+3]=a}apply(t,n,e,r,a,d,l){const
s=t.pathConstraints[this.pathConstraintIndex];if(!s.active)return;const i=this.frames;if(e<i[0]){switch(d)
{case C.setup:s.mixRotate=s.data.mixRotate,s.mixX=s.data.mixX,s.mixY=s.data.mixY;return;case
C.first:s.mixRotate+=(s.data.mixRotate-s.mixRotate)*a,s.mixX+=(s.data.mixX-s.mixX)*a,s.mixY+=
(s.data.mixY-s.mixY)*a}return}let o,h,f;const u=G.search(i,e,4),m=this.curves[u>>2];switch(m){case
0:const g=i[u];o=i[u+1],h=i[u+2],f=i[u+3];const p=(e-g)/(i[u+4]-g);o+=(i[u+4+1]-o)*p,h+=(i[u+4+2]-
h)*p,f+=(i[u+4+3]-f)*p;break;case
1:o=i[u+1],h=i[u+2],f=i[u+3];break;default:o=this.getBezierValue(e,u,1,m-
2),h=this.getBezierValue(e,u,2,m+18-2),f=this.getBezierValue(e,u,3,m+18*2-2)}if(d==C.setup){const
g=s.data;s.mixRotate=g.mixRotate+(o-g.mixRotate)*a,s.mixX=g.mixX+(h-g.mixX)*a,s.mixY=g.mixY+
(f-g.mixY)*a}else s.mixRotate+=(o-s.mixRotate)*a,s.mixX+=(h-s.mixX)*a,s.mixY+=(f-s.mixY)*a}}const
pt=class extends G{constructor(c,t,n){super(c,
[`${H.sequence}|${t}|${n.sequence.id}`]),this.slotIndex=t,this.attachment=n}getFrameEntries(){return
pt.ENTRIES}getSlotIndex(){return this.slotIndex}getAttachment(){return
this.attachment}setFrame(c,t,n,e,r){const
a=this.frames;c*=pt.ENTRIES,a[c]=t,a[c+pt.MODE]=n|e<<4,a[c+pt.DELAY]=r}apply(c,t,n,e,r,a,d)
{const l=c.slots[this.slotIndex];if(!l.bone.active)return;const s=l.attachment,i=this.attachment;if(s!=i&&(!
(s instanceof ot)||s.timelineAttachment!=i))return;const o=this.frames;if(n<o[0])
{(a==C.setup||a==C.first)&&(l.sequenceIndex=-1);return}const
h=G.search(o,n,pt.ENTRIES),f=o[h],u=o[h+pt.MODE],m=o[h+pt.DELAY];if(!this.attachment.sequence)
return;let g=u>>4;const
p=this.attachment.sequence.regions.length,k=re[u&15];if(k!=ft.hold)switch(g+=(n-f)/m+1e-5|0,k){case
ft.once:g=Math.min(p-1,g);break;case ft.loop:g%=p;break;case ft.pingpong:{const x=
(p<<1)-2;g=x==0?0:g%x,g>=p&&(g=x-g);break}case ft.onceReverse:g=Math.max(p-1-g,0);break;case
ft.loopReverse:g=p-1-g%p;break;case ft.pingpongReverse:{const x=(p<<1)-2;g=x==0?0:(g+p-
1)%x,g>=p&&(g=x-g)}}l.sequenceIndex=g}};let Mt=pt;Mt.ENTRIES=3;Mt.MODE=1;Mt.DELAY=2;const
dt=class{constructor(c){this.tracks=new Array,this.timeScale=1,this.unkeyedState=0,this.events=new
Array,this.listeners=new Array,this.queue=new Je(this),this.propertyIDs=new
He,this.animationsChanged=!1,this.trackEntryPool=new is(()=>new _t),this.data=c}static
emptyAnimation(){return dt._emptyAnimation}update(c){c*=this.timeScale;const t=this.tracks;for(let
n=0,e=t.length;n<e;n++){const
r=t[n];if(!r)continue;r.animationLast=r.nextAnimationLast,r.trackLast=r.nextTrackLast;let
a=c*r.timeScale;if(r.delay>0){if(r.delay-=a,r.delay>0)continue;a=-r.delay,r.delay=0}let d=r.next;if(d)
{const l=r.trackLast-d.delay;if(l>=0){for(d.delay=0,d.trackTime+=r.timeScale==0?0:
(l/r.timeScale+c)*d.timeScale,r.trackTime+=a,this.setCurrent(n,d,!0);d.mixingFrom;)d.mixTime+=c,d=d
.mixingFrom;continue}}else if(r.trackLast>=r.trackEnd&&!r.mixingFrom){t[n]=null,this.queue.end(r),this.clearNext(r);continue}if(r.mixingFrom&&this.updateMixingFrom(r,c)){let
l=r.mixingFrom;for(r.mixingFrom=null,l&&
(l.mixingTo=null);l;)this.queue.end(l),l=l.mixingFrom}r.trackTime+=a}this.queue.drain()}updateMixingFr
om(c,t){const n=c.mixingFrom;if(!n)return!0;const e=this.updateMixingFrom(n,t);return
n.animationLast=n.nextAnimationLast,n.trackLast=n.nextTrackLast,c.mixTime>0&&c.mixTime>=c.mix
Duration?((n.totalAlpha==0||c.mixDuration==0)&&(c.mixingFrom=n.mixingFrom,n.mixingFrom&&
(n.mixingFrom.mixingTo=c),c.interruptAlpha=n.interruptAlpha,this.queue.end(n)),e):
(n.trackTime+=t*n.timeScale,c.mixTime+=t,!1)}apply(c){if(!c)throw new Error("skeleton cannot be
null.");this.animationsChanged&&this._animationsChanged();const t=this.events,n=this.tracks;let
e=!1;for(let d=0,l=n.length;d<l;d++){const s=n[d];if(!s||s.delay>0)continue;e=!0;const i=d==0?
C.first:s.mixBlend;let o=s.alpha;s.mixingFrom?
o*=this.applyMixingFrom(s,c,i):s.trackTime>=s.trackEnd&&!s.next&&(o=0);const
h=s.animationLast,f=s.getAnimationTime();let u=f,m=t;s.reverse&&(u=s.animation.duration-
u,m=null);const g=s.animation.timelines,p=g.length;if(d==0&&o==1||i==C.add)for(let k=0;k<p;k++)
{const x=g[k];x instanceof kt?
this.applyAttachmentTimeline(x,c,u,i,!0):x.apply(c,h,u,m,o,i,st.mixIn)}else{const
k=s.timelineMode,x=s.shortestRotation,y=!x&&s.timelinesRotation.length!=p<<1;y&&
(s.timelinesRotation.length=p<<1);for(let b=0;b<p;b++){const w=g[b],S=k[b]==Kt?i:C.setup;!x&&w
instanceof Bt?this.applyRotateTimeline(w,c,u,o,S,s.timelinesRotation,b<<1,y):w instanceof kt?
this.applyAttachmentTimeline(w,c,u,i,!0):w.apply(c,h,u,m,o,S,st.mixIn)}}this.queueEvents(s,f),t.length=
0,s.nextAnimationLast=f,s.nextTrackLast=s.trackTime}const r=this.unkeyedState+Ue,a=c.slots;for(let
d=0,l=c.slots.length;d<l;d++){const s=a[d];if(s.attachmentState==r){const
i=s.data.attachmentName;s.setAttachment(i?c.getAttachment(s.data.index,i):null)}}return
this.unkeyedState+=2,this.queue.drain(),e}applyMixingFrom(c,t,n){const
e=c.mixingFrom;e.mixingFrom&&this.applyMixingFrom(e,t,n);let r=0;c.mixDuration==0?
(r=1,n==C.first&&(n=C.setup)):(r=c.mixTime/c.mixDuration,r>1&&(r=1),n!=C.first&&
(n=e.mixBlend));const
a=r<e.attachmentThreshold,d=r<e.drawOrderThreshold,l=e.animation.timelines,s=l.length,i=e.alpha*c
.interruptAlpha,o=i*(1-r),h=e.animationLast,f=e.getAnimationTime();let u=f,m=null;if(e.reverse?
u=e.animation.duration-u:r<e.eventThreshold&&(m=this.events),n==C.add)for(let
g=0;g<s;g++)l[g].apply(t,h,u,m,o,n,st.mixOut);else{const
g=e.timelineMode,p=e.timelineHoldMix,k=e.shortestRotation,x=!k&&e.timelinesRotation.;
import"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{E as g,e as
w}from"./@pixi_extensions@7.4.2.089ce807.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@p
ixi_runner@7.4.2.8be90fed.js";import{i as
v}from"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{r as
D}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@
2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{D as
T}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";import{F as
I}from"./@pixi_events@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2_.3666ca
a9.js";const E=
{accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:
null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};T.mixi
n(E);const H=9,u=100,f=0,C=0,y=2,m=1,$=-1e3,A=-1e3,k=2;class x{constructor(e){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=
[],this.renderId=0,this.children=
[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,
(v.tablet||v.phone)&&this.createTouchHook();const
t=document.createElement("div");t.style.width=`${u}px`,t.style.height=`${u}px`,t.style.position="absolut
e",t.style.top=`${f}px`,t.style.left=`${C}px`,t.style.zIndex=y.toString(),this.div=t,this.renderer=e,this._on
KeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThi
s.addEventListener("keydown",this._onKeyDown,!1)}get isActive(){return this._isActive}get
isMobileAccessibility(){return this._isMobileAccessibility}createTouchHook(){const
e=document.createElement("button");e.style.width=`${m}px`,e.style.height=`${m}px`,e.style.position="
absolute",e.style.top=`${$}px`,e.style.left=`${A}px`,e.style.zIndex=k.toString(),e.style.backgroundColor
="#FF0000",e.title="select to enable accessibility for this content",e.addEventListener("focus",()=>
{this._isMobileAccessibility=!0,this.activate(),this.destroyTouchHook()}),document.body.appendChild(
e),this._hookDiv=e}destroyTouchHook(){this._hookDiv&&
(document.body.removeChild(this._hookDiv),this._hookDiv=null)}activate(){var e;this._isActive||
(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),glob
alThis.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.updat
e,this),(e=this.renderer.view.parentNode)==null||e.appendChild(this.div))}deactivate(){var
e;!this._isActive||this._isMobileAccessibility||
(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),g
lobalThis.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update
),(e=this.div.parentNode)==null||e.removeChild(this.div))}updateAccessibleObjects(e)
{if(!e.visible||!e.accessibleChildren)return;e.accessible&&e.isInteractive()&&
(e._accessibleActive||this.addChild(e),e.renderId=this.renderId);const t=e.children;if(t)for(let
n=0;n<t.length;n++)this.updateAccessibleObjects(t[n])}update(){const
e=performance.now();if(v.android.device&&e<this.androidUpdateCount||
(this.androidUpdateCount=e+this.androidUpdateFrequency,!this.renderer.renderingToScreen))return;t
his.renderer.lastObjectRendered&&this.updateAccessibleObjects(this.renderer.lastObjectRendered);c
onst{x:t,y:n,width:l,height:b}=this.renderer.view.getBoundingClientRect(),
{width:c,height:p,resolution:_}=this.renderer,d=l/c*_,a=b/p*_;let
i=this.div;i.style.left=`${t}px`,i.style.top=`${n}px`,i.style.width=`${c}px`,i.style.height=`${p}px`;for(let
h=0;h<this.children.length;h++){const
s=this.children[h];if(s.renderId!==this.renderId)s._accessibleActive=!1,D(this.children,h,1),this.div.rem
oveChild(s._accessibleDiv),this.pool.push(s._accessibleDiv),s._accessibleDiv=null,h-
-;else{i=s._accessibleDiv;let o=s.hitArea;const r=s.worldTransform;s.hitArea?
(i.style.left=`${(r.tx+o.x*r.a)*d}px`,i.style.top=`${(r.ty+o.y*r.d)*a}px`,i.style.width=`${o.width*r.a*d}px`,i.st
yle.height=`${o.height*r.d*a}px`):
(o=s.getBounds(),this.capHitArea(o),i.style.left=`${o.x*d}px`,i.style.top=`${o.y*a}px`,i.style.width=`${o.
width*d}px`,i.style.height=`${o.height*a}px`,i.title!==s.accessibleTitle&&s.accessibleTitle!==null&&
(i.title=s.accessibleTitle),i.getAttribute("aria-
label")!==s.accessibleHint&&s.accessibleHint!==null&&i.setAttribute("aria-label",s.accessibleHint)),
(s.accessibleTitle!==i.title||s.tabIndex!==i.tabIndex)&&
(i.title=s.accessibleTitle,i.tabIndex=s.tabIndex,this.debug&&this.updateDebugHTML(i))}}this.renderId+
+}updateDebugHTML(e){e.innerHTML=`type: ${e.type}</br> title : ${e.title}</br> tabIndex:
${e.tabIndex}`}capHitArea(e){e.x<0&&(e.width+=e.x,e.x=0),e.y<0&&
(e.height+=e.y,e.y=0);const{width:t,height:n}=this.renderer;e.x+e.width>t&&(e.width=te.x),e.y+e.height>n&&(e.height=n-e.y)}addChild(e){let t=this.pool.pop();t||
(t=document.createElement("button"),t.style.width=`${u}px`,t.style.height=`${u}px`,t.style.background
Color=this.debug?"rgba(255,255,255,0.5)":"transparent",t.style.position="absolute",t.style.zIndex=y.to
String(),t.style.borderStyle="none",navigator.userAgent.toLowerCase().includes("chrome")?
t.setAttribute("aria-live","off"):t.setAttribute("aria-
live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?t.setAttribute("aria-
relevant","additions"):t.setAttribute("aria-
relevant","text"),t.addEventListener("click",this._onClick.bind(this)),t.addEventListener("focus",this._on
Focus.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))),t.style.pointerEvents=e.
accessiblePointerEvents,t.type=e.accessibleType,e.accessibleTitle&&e.accessibleTitle!==null?
t.title=e.accessibleTitle:(!e.accessibleHint||e.accessibleHint===null)&&(t.title=`displayObject
${e.tabIndex}`),e.accessibleHint&&e.accessibleHint!==null&&t.setAttribute("aria-
label",e.accessibleHint),this.debug&&this.updateDebugHTML(t),e._accessibleActive=!0,e._accessible
Div=t,t.displayObject=e,this.children.push(e),this.div.appendChild(e._accessibleDiv),e._accessibleDiv.
tabIndex=e.tabIndex}_dispatchEvent(e,t)
{const{displayObject:n}=e.target,l=this.renderer.events.rootBoundary,b=Object.assign(new I(l),
{target:n});l.rootTarget=this.renderer.lastObjectRendered,t.forEach(c=>l.dispatchEvent(b,c))}_onClick(
e){this._dispatchEvent(e,["click","pointertap","tap"])}_onFocus(e){e.target.getAttribute("aria-
live")||e.target.setAttribute("aria-live","assertive"),this._dispatchEvent(e,
["mouseover"])}_onFocusOut(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-
live","polite"),this._dispatchEvent(e,["mouseout"])}_onKeyDown(e)
{e.keyCode===H&&this.activate()}_onMouseMove(e)
{e.movementX===0&&e.movementY===0||this.deactivate()}destroy()
{this.destroyTouchHook(),this.div=null,globalThis.document.removeEventListener("mousemove",this.
_onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.
children=null,this.renderer=null}}x.extension={name:"accessibility",type:
[g.RendererPlugin,g.CanvasRendererPlugin]};w.add(x);
import{a as
c}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{e as n,E as
l}from"./@pixi_extensions@7.4.2.089ce807.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pi
xi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.
2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";im
port"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{C as
z}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";const h=class r{constructor(e)
{this.stage=new z,e=Object.assign({forceCanvas:!1},e),this.renderer=c(e),r._plugins.forEach(i=>
{i.init.call(this,e)})}render(){this.renderer.render(this.stage)}get view(){var
e;return(e=this.renderer)==null?void 0:e.view}get screen(){var e;return(e=this.renderer)==null?void
0:e.screen}destroy(e,i){const s=r._plugins.slice(0);s.reverse(),s.forEach(t=>
{t.destroy.call(this)}),this.stage.destroy(i),this.stage=null,this.renderer.destroy(e),this.renderer=null}};h.
_plugins=[];let u=h;n.handleByList(l.Application,u._plugins);class o{static init(e)
{Object.defineProperty(this,"resizeTo",{set(i)
{globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=i,i&&
(globalThis.addEventListener("resize",this.queueResize),this.resize())},get(){return
this._resizeTo}}),this.queueResize=()=>{this._resizeTo&&(this.cancelResize(),this._resizeId=requestAnimationFrame(()=>this.resize()))},this.cancelResize=
()=>{this._resizeId&&(cancelAnimationFrame(this._resizeId),this._resizeId=null)},this.resize=()=>
{if(!this._resizeTo)return;this.cancelResize();let
i,s;if(this._resizeTo===globalThis.window)i=globalThis.innerWidth,s=globalThis.innerHeight;else{cons
t{clientWidth:t,clientHeight:a}=this._resizeTo;i=t,s=a}this.renderer.resize(i,s),this.render()},this._resizeI
d=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null}static destroy()
{globalThis.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=n
ull,this.queueResize=null,this.resizeTo=null,this.resize=null}}o.extension=l.Application;n.add(o);export
{u as A};
import{T as L,B as C,S as K,V as
te}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_m
ath@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import{s as
v}from"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{p as b,g
as U,d as se,a as
Z}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@
2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{E as A,e as
p}from"./@pixi_extensions@7.4.2.089ce807.js";const z=
{loader:A.LoadParser,resolver:A.ResolveParser,cache:A.CacheParser,detection:A.DetectionParser};p
.handle(A.Asset,s=>{const e=s.ref;Object.entries(z).filter(([t])=>!!e[t]).forEach(([t,a])=>{var r;return
p.add(Object.assign(e[t],{extension:(r=e[t].extension)!=null?r:a}))})},s=>{const
e=s.ref;Object.keys(z).filter(t=>!!e[t]).forEach(t=>p.remove(e[t]))});class ae{constructor(e,t=!1)
{this._loader=e,this._assetList=[],this._isLoading=!1,this._maxConcurrent=1,this.verbose=t}add(e)
{e.forEach(t=>
{this._assetList.push(t)}),this.verbose&&this._assetList,this._isActive&&!this._isLoading&&this._next()
}async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;const e=
[],t=Math.min(this._assetList.length,this._maxConcurrent);for(let
a=0;a<t;a++)e.push(this._assetList.pop());await
this._loader.load(e),this._isLoading=!1,this._next()}}get active(){return this._isActive}set active(e)
{this._isActive!==e&&(this._isActive=e,e&&!this._isLoading&&this._next())}}function I(s,e)
{if(Array.isArray(e)){for(const t of e)if(s.startsWith(`data:${t}`))return!0;return!1}return
s.startsWith(`data:${e}`)}function R(s,e){const t=s.split("?")[0],a=b.extname(t).toLowerCase();return
Array.isArray(e)?e.includes(a):a===e}const m=(s,e,t=!1)=>(Array.isArray(s)||(s=[s]),e?
s.map(a=>typeof a=="string"||t?e(a):a):s),tt=(s,e)=>{const t=e.split("?")[1];return t&&(s+=`?
${t}`),s};function q(s,e,t,a,r){const i=e[t];for(let o=0;o<i.length;o++){const n=i[o];t<e.length-1?
q(s.replace(a[t],n),e,t+1,a,r):r.push(s.replace(a[t],n))}}function re(s){const e=/\{(.*?)\}/g,t=s.match(e),a=
[];if(t){const r=[];t.forEach(i=>{const o=i.substring(1,i.length-1).split(",");r.push(o)}),q(s,r,0,t,a)}else
a.push(s);return a}const k=s=>!Array.isArray(s);class ie{constructor(){this._parsers=
[],this._cache=new Map,this._cacheMap=new Map}reset()
{this._cacheMap.clear(),this._cache.clear()}has(e){return this._cache.has(e)}get(e){const
t=this._cache.get(e);return t||console.warn(`[Assets] Asset id ${e} was not found in the
Cache`),t}set(e,t){const a=m(e);let r;for(let n=0;n<this.parsers.length;n++){const
c=this.parsers[n];if(c.test(t)){r=c.getCacheableAssets(a,t);break}}r||(r={},a.forEach(n=>{r[n]=t}));const
i=Object.keys(r),o={cacheKeys:i,keys:a};if(a.forEach(n=>{this._cacheMap.set(n,o)}),i.forEach(n=>
{this._cache.has(n)&&this._cache.get(n)!==t&&console.warn("[Cache] already haskey:",n),this._cache.set(n,r[n])}),t instanceof L){const n=t;a.forEach(c=>
{n.baseTexture!==L.EMPTY.baseTexture&&C.addToCache(n.baseTexture,c),L.addToCache(n,c)})}}re
move(e){if(!this._cacheMap.has(e)){console.warn(`[Assets] Asset id ${e} was not found in the
Cache`);return}const t=this._cacheMap.get(e);t.cacheKeys.forEach(a=>
{this._cache.delete(a)}),t.keys.forEach(a=>{this._cacheMap.delete(a)})}get parsers(){return
this._parsers}}const B=new ie;class oe{constructor(){this._parsers=
[],this._parsersValidated=!1,this.parsers=new Proxy(this._parsers,{set:(e,t,a)=>
(this._parsersValidated=!1,e[t]=a,!0)}),this.promiseCache={}}reset()
{this._parsersValidated=!1,this.promiseCache={}}_getLoadPromiseAndParser(e,t){const a=
{promise:null,parser:null};return a.promise=(async()=>{var o,n;let r=null,i=null;if(t.loadParser&&
(i=this._parserHash[t.loadParser],i||console.warn(`[Assets] specified load parser "${t.loadParser}" not
found while loading ${e}`)),!i){for(let c=0;c<this.parsers.length;c++){const l=this.parsers[c];if(l.load&&
((o=l.test)!=null&&o.call(l,e,t,this))){i=l;break}}if(!i)return console.warn(`[Assets] ${e} could not be
loaded as we don't know how to parse it, ensure the correct parser has been added`),null}r=await
i.load(e,t,this),a.parser=i;for(let c=0;c<this.parsers.length;c++){const
l=this.parsers[c];l.parse&&l.parse&&await((n=l.testParse)==null?void 0:n.call(l,r,t,this))&&(r=await
l.parse(r,t,this)||r,a.parser=l)}return r})(),a}async load(e,t)
{this._parsersValidated||this._validateParsers();let a=0;const r={},i=k(e),o=m(e,l=>({alias:
[l],src:l})),n=o.length,c=o.map(async l=>{const
d=b.toAbsolute(l.src);if(!r[l.src])try{this.promiseCache[d]||
(this.promiseCache[d]=this._getLoadPromiseAndParser(d,l)),r[l.src]=await
this.promiseCache[d].promise,t&&t(++a/n)}catch(h){throw delete this.promiseCache[d],delete
r[l.src],new Error(`[Loader.load] Failed to load ${d}.
${h}`)}});return await Promise.all(c),i?r[o[0].src]:r}async unload(e){const t=m(e,a=>({alias:
[a],src:a})).map(async a=>{var o,n;const r=b.toAbsolute(a.src),i=this.promiseCache[r];if(i){const
c=await i.promise;delete this.promiseCache[r],(n=(o=i.parser)==null?void
0:o.unload)==null||n.call(o,c,a,this)}});await Promise.all(t)}_validateParsers()
{this._parsersValidated=!0,this._parserHash=this._parsers.filter(e=>e.name).reduce((e,t)=>
(e[t.name]&&console.warn(`[Assets] loadParser name conflict "${t.name}"`),{...e,[t.name]:t}),{})}}var
P=(s=>(s[s.Low=0]="Low",s[s.Normal=1]="Normal",s[s.High=2]="High",s))(P||{});const
ne=".json",ce="application/json",le={extension:
{type:A.LoadParser,priority:P.Low},name:"loadJson",test(s){return I(s,ce)||R(s,ne)},async load(s)
{return await(await v.ADAPTER.fetch(s)).json()}};p.add(le);const de=".txt",he="text/plain",Ae=
{name:"loadTxt",extension:{type:A.LoadParser,priority:P.Low},test(s){return I(s,he)||R(s,de)},async
load(s){return await(await v.ADAPTER.fetch(s)).text()}};p.add(Ae);const pe=
["normal","bold","100","200","300","400","500","600","700","800","900"],ue=
[".ttf",".otf",".woff",".woff2"],fe=["font/ttf","font/otf","font/woff","font/woff2"],me=/^(--|-?[A-Z_])[0-9A-
Z_-]*$/i;function ge(s){const e=b.extname(s),t=b.basename(s,e).replace(/(-|_)/g,"
").toLowerCase().split(" ").map(i=>i.charAt(0).toUpperCase()+i.slice(1));let a=t.length>0;for(const i of
t)if(!i.match(me)){a=!1;break}let r=t.join(" ");return a||(r=`"${r.replace(/[\\"]/g,"\\$&")}"`),r}const _e=/^[0-
9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;function we(s){return _e.test(s)?s:encodeURI(s)}const ye=
{extension:{type:A.LoadParser,priority:P.Low},name:"loadWebFont",test(s){return
I(s,fe)||R(s,ue)},async load(s,e){var a,r,i,o,n,c;const t=v.ADAPTER.getFontFaceSet();if(t){const l=[],d=
(r=(a=e.data)==null?void 0:a.family)!=null?r:ge(s),h=(n=(o=(i=e.data)==null?void 0:i.weights)==null?
void 0:o.filter(f=>pe.includes(f)))!=null?n:["normal"],u=(c=e.data)!=null?c:{};for(let f=0;f<h.length;f++)
{const W=h[f],g=new FontFace(d,`url(${we(s)})`,{...u,weight:W});awaitg.load(),t.add(g),l.push(g)}return l.length===1?l[0]:l}return console.warn("[loadWebFont] FontFace
API is not supported. Skipping loading font"),null},unload(s){(Array.isArray(s)?s:
[s]).forEach(e=>v.ADAPTER.getFontFaceSet().delete(e))}};p.add(ye);const ve=`(function() {
 "use strict";
 const WHITE_PNG =
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0l
EQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";
 async function checkImageBitmap() {
 try {
 if (typeof createImageBitmap != "function")
 return !1;
 const imageBlob = await (await fetch(WHITE_PNG)).blob(), imageBitmap = await
createImageBitmap(imageBlob);
 return imageBitmap.width === 1 && imageBitmap.height === 1;
 } catch {
 return !1;
 }
 }
 checkImageBitmap().then((result) => {
 self.postMessage(result);
 });
})();
`;let x=null,j=class{constructor(){x||(x=URL.createObjectURL(new Blob([ve],
{type:"application/javascript"}))),this.worker=new Worker(x)}};j.revokeObjectURL=function(){x&&
(URL.revokeObjectURL(x),x=null)};const be=`(function() {
 "use strict";
 async function loadImageBitmap(url) {
 const response = await fetch(url);
 if (!response.ok)
 throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \${response.status}const imageBlob = await response.blob();
 return await createImageBitmap(imageBlob);
 }
 self.onmessage = async (event) => {
 try {
 const imageBitmap = await loadImageBitmap(event.data.data[0]);
 self.postMessage({
 data: imageBitmap,
 uuid: event.data.uuid,
 id: event.data.id
 }, [imageBitmap]);
 } catch (e) {
 self.postMessage({
 error: e,
 uuid: event.data.uuid,
 id: event.data.id
 });
 }
 };
})();
`;let E=null;class J{constructor(){E||(E=URL.createObjectURL(new Blob([be],
{type:"application/javascript"}))),this.worker=new Worker(E)}}J.revokeObjectURL=function(){E&&
(URL.revokeObjectURL(E),E=null)};let Q=0,F;class Be{constructor()
{this._initialized=!1,this._createdWorkers=0,this.workerPool=[],this.queue=[],this.resolveHash=
{}}isImageBitmapSupported(){return this._isImageBitmapSupported!==void 0?
this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(e=>
{const{worker:t}=new j;t.addEventListener("message",a=>
{t.terminate(),j.revokeObjectURL(),e(a.data)})}),this._isImageBitmapSupported)}loadImageBitmap(e)
{return this._run("loadImageBitmap",[e])}async _initWorkers(){this._initialized||
(this._initialized=!0)}getWorker(){F===void 0&&(F=navigator.hardwareConcurrency||4);let
e=this.workerPool.pop();return!e&&this._createdWorkers<F&&(this._createdWorkers++,e=new
J().worker,e.addEventListener("message",t=>
\${response.statusText}\`);{this.complete(t.data),this.returnWorker(t.target),this.next()})),e}returnWorker(e)
{this.workerPool.push(e)}complete(e){e.error!==void 0?
this.resolveHash[e.uuid].reject(e.error):this.resolveHash[e.uuid].resolve(e.data),this.resolveHash[e.uu
id]=null}async _run(e,t){await this._initWorkers();const a=new Promise((r,i)=>
{this.queue.push({id:e,arguments:t,resolve:r,reject:i})});return this.next(),a}next()
{if(!this.queue.length)return;const e=this.getWorker();if(!e)return;const
t=this.queue.pop(),a=t.id;this.resolveHash[Q]=
{resolve:t.resolve,reject:t.reject},e.postMessage({data:t.arguments,uuid:Q++,id:a})}}const X=new
Be;function S(s,e,t){s.resource.internal=!0;const a=new L(s),r=()=>{delete
e.promiseCache[t],B.has(t)&&B.remove(t)};return a.baseTexture.once("destroyed",()=>{t in
e.promiseCache&&(console.warn("[Assets] A BaseTexture managed by Assets was destroyed instead
of unloaded! Use Assets.unload() instead of destroying the BaseTexture."),r())}),a.once("destroyed",
()=>{s.destroyed||(console.warn("[Assets] A Texture managed by Assets was destroyed instead of
unloaded! Use Assets.unload() instead of destroying the Texture."),r())}),a}const Pe=
[".jpeg",".jpg",".png",".webp",".avif"],xe=["image/jpeg","image/png","image/webp","image/avif"];async
function Ee(s){const e=await v.ADAPTER.fetch(s);if(!e.ok)throw new Error(`[loadImageBitmap] Failed
to fetch ${s}: ${e.status} ${e.statusText}`);const t=await e.blob();return await
createImageBitmap(t)}const T={name:"loadTextures",extension:
{type:A.LoadParser,priority:P.High},config:
{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(s){return
I(s,xe)||R(s,Pe)},async load(s,e,t){var n,c;const
a=globalThis.createImageBitmap&&this.config.preferCreateImageBitmap;let r;a?
this.config.preferWorkers&&await X.isImageBitmapSupported()?r=await
X.loadImageBitmap(s):r=await Ee(s):r=await new Promise((l,d)=>{const h=new
Image;h.crossOrigin=this.config.crossOrigin,h.src=s,h.complete?l(h):(h.onload=
()=>l(h),h.onerror=u=>d(u))});const i={...e.data};(n=i.resolution)!=null||(i.resolution=U(s)),a&&
((c=i.resourceOptions)==null?void 0:c.ownsImageBitmap)===void 0&&(i.resourceOptions=
{...i.resourceOptions},i.resourceOptions.ownsImageBitmap=!0);const o=new C(r,i);return
o.resource.src=s,S(o,t,s)},unload(s){s.destroy(!0)}};p.add(T);const Ie=".svg",Re="image/svg+xml",Le=
{extension:{type:A.LoadParser,priority:P.High},name:"loadSVG",test(s){return I(s,Re)||R(s,Ie)},async
testParse(s){return K.test(s)},async parse(s,e,t){var i;const a=new K(s,(i=e==null?void
0:e.data)==null?void 0:i.resourceOptions);await a.load();const r=new C(a,{resolution:U(s),...e==null?
void 0:e.data});return r.resource.src=e.src,S(r,t,e.src)},async load(s,e){return(await
v.ADAPTER.fetch(s)).text()},unload:T.unload};p.add(Le);const Oe=[".mp4",".m4v",".webm",".ogv"],ke=
["video/mp4","video/webm","video/ogg"],Ce={name:"loadVideo",extension:
{type:A.LoadParser,priority:P.High},config:
{defaultAutoPlay:!0,defaultUpdateFPS:0,defaultLoop:!1,defaultMuted:!1,defaultPlaysinline:!0},test(s)
{return I(s,ke)||R(s,Oe)},async load(s,e,t){var o;let a;const r=await(await
v.ADAPTER.fetch(s)).blob(),i=URL.createObjectURL(r);try{const n=
{autoPlay:this.config.defaultAutoPlay,updateFPS:this.config.defaultUpdateFPS,loop:this.config.default
Loop,muted:this.config.defaultMuted,playsinline:this.config.defaultPlaysinline,...(o=e==null?void
0:e.data)==null?void 0:o.resourceOptions,autoLoad:!0},c=new te(i,n);await c.load();const l=new C(c,
{alphaMode:await se(),resolution:U(s),...e==null?void
0:e.data});l.resource.src=s,a=S(l,t,s),a.baseTexture.once("destroyed",()=>
{URL.revokeObjectURL(i)})}catch(n){throw URL.revokeObjectURL(i),n}return a},unload(s)
{s.destroy(!0)}};p.add(Ce);class Te{constructor(){this._defaultBundleIdentifierOptions={connector:"",createBundleAssetId:(e,t)=>`${e}${this._bundleIdConnector}${t}`,extractAssetIdFromBundle:
(e,t)=>t.replace(`${e}${this._bundleIdConnector}`,"")},this._bundleIdConnector=this._defaultBundleIde
ntifierOptions.connector,this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundle
AssetId,this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBun
dle,this._assetMap={},this._preferredOrder=[],this._parsers=[],this._resolverHash={},this._bundles=
{}}setBundleIdentifier(e){var t,a,r;if(this._bundleIdConnector=(t=e.connector)!=null?
t:this._bundleIdConnector,this._createBundleAssetId=(a=e.createBundleAssetId)!=null?
a:this._createBundleAssetId,this._extractAssetIdFromBundle=(r=e.extractAssetIdFromBundle)!=null?
r:this._extractAssetIdFromBundle,this._extractAssetIdFromBundle("foo",this._createBundleAssetId("f
oo","bar"))!=="bar")throw new Error("[Resolver] GenerateBundleAssetId are not working
correctly")}prefer(...e){e.forEach(t=>{this._preferredOrder.push(t),t.priority||
(t.priority=Object.keys(t.params))}),this._resolverHash={}}set basePath(e){this._basePath=e}get
basePath(){return this._basePath}set rootPath(e){this._rootPath=e}get rootPath(){return
this._rootPath}get parsers(){return this._parsers}reset()
{this.setBundleIdentifier(this._defaultBundleIdentifierOptions),this._assetMap=
{},this._preferredOrder=[],this._resolverHash=
{},this._rootPath=null,this._basePath=null,this._manifest=null,this._bundles=
{},this._defaultSearchParams=null}setDefaultSearchParams(e){if(typeof
e=="string")this._defaultSearchParams=e;else{const
t=e;this._defaultSearchParams=Object.keys(t).map(a=>`${encodeURIComponent(a)}=${encodeURIC
omponent(t[a])}`).join("&")}}getAlias(e){const{alias:t,name:a,src:r,srcs:i}=e;return m(t||a||r||i,o=>{var
n;return typeof o=="string"?o:Array.isArray(o)?o.map(c=>{var l,d;return(d=(l=c==null?void
0:c.src)!=null?l:c==null?void 0:c.srcs)!=null?d:c}):o!=null&&o.src||o!=null&&o.srcs?(n=o.src)!=null?
n:o.srcs:o},!0)}addManifest(e){this._manifest&&console.warn("[Resolver] Manifest already exists, this
will be overwritten"),this._manifest=e,e.bundles.forEach(t=>
{this.addBundle(t.name,t.assets)})}addBundle(e,t){const a=[];Array.isArray(t)?t.forEach(r=>{var
c,l;const i=(c=r.src)!=null?c:r.srcs,o=(l=r.alias)!=null?l:r.name;let n;if(typeof o=="string"){const
d=this._createBundleAssetId(e,o);a.push(d),n=[o,d]}else{const
d=o.map(h=>this._createBundleAssetId(e,h));a.push(...d),n=
[...o,...d]}this.add({...r,alias:n,src:i})}):Object.keys(t).forEach(r=>{var o;const i=
[r,this._createBundleAssetId(e,r)];if(typeof t[r]=="string")this.add({alias:i,src:t[r]});else
if(Array.isArray(t[r]))this.add({alias:i,src:t[r]});else{const n=t[r],c=(o=n.src)!=null?
o:n.srcs;this.add({...n,alias:i,src:Array.isArray(c)?c:[c]})}a.push(...i)}),this._bundles[e]=a}add(e,t,a,r,i)
{const o=[];typeof e=="string"||Array.isArray(e)&&typeof e[0]=="string"?(Z("7.2.0",`Assets.add now
uses an object instead of individual parameters.
Please use Assets.add({ alias, src, data, format, loadParser })
instead.`),o.push({alias:e,src:t,data:a,format:r,loadParser:i})):Array.isArray(e)?
o.push(...e):o.push(e);let n;n=c=>{this.hasKey(c)&&console.warn(`[Resolver] already has key: ${c}
overwriting`)},m(o).forEach(c=>{const{src:l,srcs:d}=c;let{data:h,format:u,loadParser:f}=c;const
W=m(l||d).map(_=>typeof _=="string"?re(_):Array.isArray(_)?_:[_]),g=this.getAlias(c);Array.isArray(g)?
g.forEach(n):n(g);const D=[];W.forEach(_=>{_.forEach(w=>{var V,H,G;let y={};if(typeof w!="object")
{y.src=w;for(let M=0;M<this._parsers.length;M++){const N=this._parsers[M];if(N.test(w))
{y=N.parse(w);break}}}else h=(V=w.data)!=null?V:h,u=(H=w.format)!=null?H:u,f=
(G=w.loadParser)!=null?G:f,y={...y,...w};if(!g)throw new Error(`[Resolver] alias is undefined for this
asset: ${y.src}`);y=this.buildResolvedAsset(y,
{aliases:g,data:h,format:u,loadParser:f}),D.push(y)})}),g.forEach(_=>{this._assetMap[_]=D})})}resolveBundle(e){const t=k(e);e=m(e);const a={};return e.forEach(r=>{const
i=this._bundles[r];if(i){const o=this.resolve(i),n={};for(const c in o){const
l=o[c];n[this._extractAssetIdFromBundle(r,c)]=l}a[r]=n}}),t?a[e[0]]:a}resolveUrl(e){const
t=this.resolve(e);if(typeof e!="string"){const a={};for(const r in t)a[r]=t[r].src;return a}return
t.src}resolve(e){const t=k(e);e=m(e);const a={};return e.forEach(r=>{var
i;if(!this._resolverHash[r])if(this._assetMap[r]){let o=this._assetMap[r];const
n=o[0],c=this._getPreferredOrder(o);c==null||c.priority.forEach(l=>{c.params[l].forEach(d=>{const
h=o.filter(u=>u[l]?u[l]===d:!1);h.length&&(o=h)})}),this._resolverHash[r]=(i=o[0])!=null?i:n}else
this._resolverHash[r]=this.buildResolvedAsset({alias:[r],src:r},{});a[r]=this._resolverHash[r]}),t?
a[e[0]]:a}hasKey(e){return!!this._assetMap[e]}hasBundle(e)
{return!!this._bundles[e]}_getPreferredOrder(e){for(let t=0;t<e.length;t++){const
a=e[0],r=this._preferredOrder.find(i=>i.params.format.includes(a.format));if(r)return r}return
this._preferredOrder[0]}_appendDefaultSearchParams(e){if(!this._defaultSearchParams)return
e;const t=/\?/.test(e)?"&":"?";return`${e}${t}${this._defaultSearchParams}`}buildResolvedAsset(e,t)
{var n,c;const{aliases:a,data:r,loadParser:i,format:o}=t;return(this._basePath||this._rootPath)&&
(e.src=b.toAbsolute(e.src,this._basePath,this._rootPath)),e.alias=(n=a!=null?a:e.alias)!=null?n:
[e.src],e.src=this._appendDefaultSearchParams(e.src),e.data={...r||{},...e.data},e.loadParser=i!=null?
i:e.loadParser,e.format=(c=o!=null?o:e.format)!=null?
c:b.extname(e.src).slice(1),e.srcs=e.src,e.name=e.alias,e}}class We{constructor(){this._detections=
[],this._initialized=!1,this.resolver=new Te,this.loader=new
oe,this.cache=B,this._backgroundLoader=new
ae(this.loader),this._backgroundLoader.active=!0,this.reset()}async init(e={}){var
i,o,n;if(this._initialized){console.warn("[Assets]AssetManager already initialized, did you load before
calling this
Assets.init()?");return}if(this._initialized=!0,e.defaultSearchParams&&this.resolver.setDefaultSearchP
arams(e.defaultSearchParams),e.basePath&&
(this.resolver.basePath=e.basePath),e.bundleIdentifier&&this.resolver.setBundleIdentifier(e.bundleIde
ntifier),e.manifest){let c=e.manifest;typeof c=="string"&&(c=await
this.load(c)),this.resolver.addManifest(c)}const t=(o=(i=e.texturePreference)==null?void
0:i.resolution)!=null?o:1,a=typeof t=="number"?[t]:t,r=await this._detectFormats({preferredFormats:
(n=e.texturePreference)==null?void
0:n.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:
{format:r,resolution:a}}),e.preferences&&this.setPreferences(e.preferences)}add(e,t,a,r,i)
{this.resolver.addBundle(e,t)}async loadBundle(e,t){this._initialized||await this.init();let a=!1;typeof
e=="string"&&(a=!0,e=[e]);const r=this.resolver.resolveBundle(e),i={},o=Object.keys(r);let
n=0,c=0;const l=()=>{t==null||t(++n/c)},d=o.map(h=>{const u=r[h];return
c+=Object.keys(u).length,this._mapLoadToResolve(u,l).then(f=>{i[h]=f})});return await
Promise.all(d),a?i[e[0]]:i}async backgroundLoad(e){this._initialized||await this.init(),typeof
e=="string"&&(e=[e]);const
t=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(t))}async
backgroundLoadBundle(e){this._initialized||await this.init(),typeof e=="string"&&(e=[e]);const
t=this.resolver.resolveBundle(e);Object.values(t).forEach(a=>
{this._backgroundLoader.add(Object.values(a))})}reset()
{this.resolver.reset(),this.loader.reset(),this.cache.reset(),this._initialized=!1}get(e){if(typeof
e=="string")return B.get(e);const t={};for(let a=0;a<e.length;a++)t[a]=B.get(e[a]);return t}async
_mapLoadToResolve(e,t){consta=Object.values(e),r=Object.keys(e);this._backgroundLoader.active=!1;const i=await
this.loader.load(a,t);this._backgroundLoader.active=!0;const o={};return a.forEach((n,c)=>{const
l=i[n.src],d=[n.src];n.alias&&d.push(...n.alias),o[r[c]]=l,B.set(d,l)}),o}async unload(e)
{this._initialized||await this.init();const t=m(e).map(r=>typeof r!="string"?
r.src:r),a=this.resolver.resolve(t);await this._unloadFromResolved(a)}async unloadBundle(e)
{this._initialized||await this.init(),e=m(e);const
t=this.resolver.resolveBundle(e),a=Object.keys(t).map(r=>this._unloadFromResolved(t[r]));await
Promise.all(a)}async _unloadFromResolved(e){const t=Object.values(e);t.forEach(a=>
{B.remove(a.src)}),await this.loader.unload(t)}async _detectFormats(e){let t=[];e.preferredFormats&&
(t=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]);for(const a of
e.detections)e.skipDetections||await a.test()?t=await a.add(t):e.skipDetections||(t=await
a.remove(t));return t=t.filter((a,r)=>t.indexOf(a)===r),t}get detections(){return this._detections}get
preferWorkers(){return T.config.preferWorkers}set preferWorkers(e){Z("7.2.0","Assets.prefersWorkers
is deprecated, use Assets.setPreferences({ preferWorkers: true })
instead."),this.setPreferences({preferWorkers:e})}setPreferences(e){this.loader.parsers.forEach(t=>
{t.config&&Object.keys(t.config).filter(a=>a in e).forEach(a=>{t.config[a]=e[a]})})}}const O=new
We;p.handleByList(A.LoadParser,O.loader.parsers).handleByList(A.ResolveParser,O.resolver.parsers
).handleByList(A.CacheParser,O.cache.parsers).handleByList(A.DetectionParser,O.detections);const
Me={extension:A.CacheParser,test:s=>Array.isArray(s)&&s.every(e=>e instanceof
L),getCacheableAssets:(s,e)=>{const t={};return s.forEach(a=>{e.forEach((r,i)=>{t[a+
(i===0?"":i+1)]=r})}),t}};p.add(Me);async function ee(s){if("Image"in globalThis)return new
Promise(e=>{const t=new Image;t.onload=()=>{e(!0)},t.onerror=()=>
{e(!1)},t.src=s});if("createImageBitmap"in globalThis&&"fetch"in globalThis){try{const e=await(await
fetch(s)).blob();await createImageBitmap(e)}catch(e){return!1}return!0}return!1}const Fe={extension:
{type:A.DetectionParser,priority:1},test:async()=>ee("data:image/avif;base64,AAAAIGZ0eXBhdmlmA
AAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAA
AAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEA
AAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAA
amlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxh
djFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAC
VtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async s=>
[...s,"avif"],remove:async s=>s.filter(e=>e!=="avif")};p.add(Fe);const je={extension:
{type:A.DetectionParser,priority:0},test:async()=>ee("data:image/webp;base64,UklGRh4AAABXRUJQ
VlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async s=>[...s,"webp"],remove:async
s=>s.filter(e=>e!=="webp")};p.add(je);const Y=["png","jpg","jpeg"],Ue={extension:
{type:A.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async s=>[...s,...Y],remove:async
s=>s.filter(e=>!Y.includes(e))};p.add(Ue);const Se="WorkerGlobalScope"in globalThis&&globalThis
instanceof globalThis.WorkerGlobalScope;function $(s){return
Se?!1:document.createElement("video").canPlayType(s)!==""}const $e={extension:
{type:A.DetectionParser,priority:0},test:async()=>$("video/webm"),add:async s=>
[...s,"webm"],remove:async s=>s.filter(e=>e!=="webm")};p.add($e);const De={extension:
{type:A.DetectionParser,priority:0},test:async()=>$("video/mp4"),add:async s=>
[...s,"mp4","m4v"],remove:async s=>s.filter(e=>e!=="mp4"&&e!=="m4v")};p.add(De);const Ve=
{extension:{type:A.DetectionParser,priority:0},test:async()=>$("video/ogg"),add:async s=>
[...s,"ogv"],remove:async s=>s.filter(e=>e!=="ogv")};p.add(Ve);const He=
{extension:A.ResolveParser,test:T.test,parse:s=>{var e,t;return{resolution:parseFloat((t=(e=v.RETINA_PREFIX.exec(s))==null?void 0:e[1])!=null?
t:"1"),format:b.extname(s).slice(1),src:s}}};p.add(He);export{O as A,P as L,S as a,tt as b,R as c};
import{k as m,n as _,w as p}from"./@pixi_colord@2.9.6.1836e49c.js";m([_]);const e=class
h{constructor(t=16777215){this._value=null,this._components=new
Float32Array(4),this._components.fill(1),this._int=16777215,this.value=t}get red(){return
this._components[0]}get green(){return this._components[1]}get blue(){return this._components[2]}get
alpha(){return this._components[3]}setValue(t){return this.value=t,this}set value(t){if(t instanceof
h)this._value=this.cloneSource(t._value),this._int=t._int,this._components.set(t._components);else{if(t
===null)throw new Error("Cannot set PIXI.Color#value to null");
(this._value===null||!this.isSourceEqual(this._value,t))&&
(this.normalize(t),this._value=this.cloneSource(t))}}get value(){return this._value}cloneSource(t){return
typeof t=="string"||typeof t=="number"||t instanceof Number||t===null?
t:Array.isArray(t)||ArrayBuffer.isView(t)?t.slice(0):typeof t=="object"&&t!==null?
{...t}:t}isSourceEqual(t,n){const r=typeof t;if(r!==typeof n)return!1;if(r==="number"||r==="string"||t
instanceof Number)return
t===n;if(Array.isArray(t)&&Array.isArray(n)||ArrayBuffer.isView(t)&&ArrayBuffer.isView(n))return
t.length!==n.length?!1:t.every((s,i)=>s===n[i]);if(t!==null&&n!==null){const
s=Object.keys(t),i=Object.keys(n);return s.length!==i.length?!1:s.every(o=>t[o]===n[o])}return
t===n}toRgba(){const[t,n,r,s]=this._components;return{r:t,g:n,b:r,a:s}}toRgb()
{const[t,n,r]=this._components;return{r:t,g:n,b:r}}toRgbaString()
{const[t,n,r]=this.toUint8RgbArray();return`rgba(${t},${n},${r},${this.alpha})`}toUint8RgbArray(t)
{const[n,r,s]=this._components;return t=t!=null?t:
[],t[0]=Math.round(n*255),t[1]=Math.round(r*255),t[2]=Math.round(s*255),t}toRgbArray(t){t=t!=null?t:
[];const[n,r,s]=this._components;return t[0]=n,t[1]=r,t[2]=s,t}toNumber(){return
this._int}toLittleEndianNumber(){const t=this._int;return(t>>16)+(t&65280)+((t&255)<<16)}multiply(t)
{const[n,r,s,i]=h.temp.setValue(t)._components;return
this._components[0]*=n,this._components[1]*=r,this._components[2]*=s,this._components[3]*=i,this.r
efreshInt(),this._value=null,this}premultiply(t,n=!0){return n&&
(this._components[0]*=t,this._components[1]*=t,this._components[2]*=t),this._components[3]=t,this.re
freshInt(),this._value=null,this}toPremultiplied(t,n=!0)
{if(t===1)return(255<<24)+this._int;if(t===0)return n?0:this._int;let
r=this._int>>16&255,s=this._int>>8&255,i=this._int&255;return n&&(r=r*t+.5|0,s=s*t+.5|0,i=i*t+.5|0),
(t*255<<24)+(r<<16)+(s<<8)+i}toHex(){const t=this._int.toString(16);return`#${"000000".substring(0,6-
t.length)+t}`}toHexa(){const t=Math.round(this._components[3]*255).toString(16);return
this.toHex()+"00".substring(0,2-t.length)+t}setAlpha(t){return
this._components[3]=this._clamp(t),this}round(t){const[n,r,s]=this._components;return
this._components[0]=Math.round(n*t)/t,this._components[1]=Math.round(r*t)/t,this._components[2]=M
ath.round(s*t)/t,this.refreshInt(),this._value=null,this}toArray(t){t=t!=null?t:
[];const[n,r,s,i]=this._components;return t[0]=n,t[1]=r,t[2]=s,t[3]=i,t}normalize(t){let n,r,s,i;if((typeof
t=="number"||t instanceof Number)&&t>=0&&t<=16777215){const o=t;n=(o>>16&255)/255,r=
(o>>8&255)/255,s=(o&255)/255,i=1}else if((Array.isArray(t)||t instanceof
Float32Array)&&t.length>=3&&t.length<=4)t=this._clamp(t),[n,r,s,i=1]=t;else if((t instanceof
Uint8Array||t instanceof Uint8ClampedArray)&&t.length>=3&&t.length<=4)t=this._clamp(t,0,255),
[n,r,s,i=255]=t,n/=255,r/=255,s/=255,i/=255;else if(typeof t=="string"||typeof t=="object"){if(typeoft=="string"){const c=h.HEX_PATTERN.exec(t);c&&(t=`#${c[2]}`)}const o=p(t);o.isValid()&&
({r:n,g:r,b:s,a:i}=o.rgba,n/=255,r/=255,s/=255)}if(n!==void
0)this._components[0]=n,this._components[1]=r,this._components[2]=s,this._components[3]=i,this.ref
reshInt();else throw new Error(`Unable to convert color ${t}`)}refreshInt()
{this._clamp(this._components);const[t,n,r]=this._components;this._int=(t*255<<16)+(n*255<<8)+
(r*255|0)}_clamp(t,n=0,r=1){return typeof t=="number"?Math.min(Math.max(t,n),r):(t.forEach((s,i)=>
{t[i]=Math.min(Math.max(s,n),r)}),t)}};e.shared=new e,e.temp=new e,e.HEX_PATTERN=/^(#|0x)?(([a-
f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;let g=e;export{g as C};
var D={grad:.9,turn:360,rad:360/(2*Math.PI)},l=function(r){return typeof r=="string"?r.length>0:typeof
r=="number"},u=function(r,e,t){return e===void 0&&(e=0),t===void 0&&
(t=Math.pow(10,e)),Math.round(t*r)/t+0},d=function(r,e,t){return e===void 0&&(e=0),t===void 0&&
(t=1),r>t?t:r>e?r:e},L=function(r){return(r=isFinite(r)?r%360:0)>0?r:r+360},I=function(r)
{return{r:d(r.r,0,255),g:d(r.g,0,255),b:d(r.b,0,255),a:d(r.a)}},p=function(r)
{return{r:u(r.r),g:u(r.g),b:u(r.b),a:u(r.a,3)}},F=/^#([0-9a-f]{3,8})$/i,c=function(r){var
e=r.toString(16);return e.length<2?"0"+e:e},P=function(r){var
e=r.r,t=r.g,a=r.b,n=r.a,f=Math.max(e,t,a),i=f-Math.min(e,t,a),o=i?f===e?(t-a)/i:f===t?2+(a-e)/i:4+(e-
t)/i:0;return{h:60*(o<0?o+6:o),s:f?i/f*100:0,v:f/255*100,a:n}},z=function(r){var
e=r.h,t=r.s,a=r.v,n=r.a;e=e/360*6,t/=100,a/=100;var f=Math.floor(e),i=a*(1-t),o=a*(1-(e-f)*t),s=a*(1-(1-
e+f)*t),g=f%6;return{r:255*[a,o,i,i,s,a][g],g:255*[s,a,a,o,i,i][g],b:255*[i,i,s,a,a,o][g],a:n}},H=function(r)
{return{h:L(r.h),s:d(r.s,0,100),l:d(r.l,0,100),a:d(r.a)}},$=function(r)
{return{h:u(r.h),s:u(r.s),l:u(r.l),a:u(r.a,3)}},j=function(r){return z((t=(e=r).s,{h:e.h,s:(t*=((a=e.l)<50?
a:100-a)/100)>0?2*t/(a+t)*100:0,v:a+t,a:e.a}));var e,t,a},h=function(r){return{h:(e=P(r)).h,s:(n=(200-
(t=e.s))*(a=e.v)/100)>0&&n<200?t*a/100/(n<=100?n:200-n)*100:0,l:n/2,a:e.a};var e,t,a,n},O=/^hsla?\
(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?
\d*\.?\d+)(%)?\s*)?\)$/i,V=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?
\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,A=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?
\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,B=/^rgba?\(\s*([+-]?\d*\.?\d+)
(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,y={string:
[[function(r){var e=F.exec(r);return e?(r=e[1]).length<=4?
{r:parseInt(r[0]+r[0],16),g:parseInt(r[1]+r[1],16),b:parseInt(r[2]+r[2],16),a:r.length===4?
u(parseInt(r[3]+r[3],16)/255,2):1}:r.length===6||r.length===8?
{r:parseInt(r.substr(0,2),16),g:parseInt(r.substr(2,2),16),b:parseInt(r.substr(4,2),16),a:r.length===8?
u(parseInt(r.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(r){var e=A.exec(r)||B.exec(r);return e?
e[2]!==e[4]||e[4]!==e[6]?null:I({r:Number(e[1])/(e[2]?100/255:1),g:Number(e[3])/(e[4]?
100/255:1),b:Number(e[5])/(e[6]?100/255:1),a:e[7]===void 0?1:Number(e[7])/(e[8]?
100:1)}):null},"rgb"],[function(r){var e=O.exec(r)||V.exec(r);if(!e)return null;var t,a,n=H({h:
(t=e[1],a=e[2],a===void 0&&(a="deg"),Number(t)*
(D[a]||1)),s:Number(e[3]),l:Number(e[4]),a:e[5]===void 0?1:Number(e[5])/(e[6]?100:1)});return
j(n)},"hsl"]],object:[[function(r){var e=r.r,t=r.g,a=r.b,n=r.a,f=n===void 0?1:n;return l(e)&&l(t)&&l(a)?
I({r:Number(e),g:Number(t),b:Number(a),a:Number(f)}):null},"rgb"],[function(r){var
e=r.h,t=r.s,a=r.l,n=r.a,f=n===void 0?1:n;if(!l(e)||!l(t)||!l(a))return null;var
i=H({h:Number(e),s:Number(t),l:Number(a),a:Number(f)});return j(i)},"hsl"],[function(r){var
e=r.h,t=r.s,a=r.v,n=r.a,f=n===void 0?1:n;if(!l(e)||!l(t)||!l(a))return null;var i=function(o)
{return{h:L(o.h),s:d(o.s,0,100),v:d(o.v,0,100),a:d(o.a)}}({h:Number(e),s:Number(t),v:Number(a),a:Number(f)});return z(i)},"hsv"]]},R=function(r,e){for(var
t=0;t<e.length;t++){var a=e[t][0](r);if(a)return[a,e[t][1]]}return[null,void 0]},G=function(r){return typeof
r=="string"?R(r.trim(),y.string):typeof r=="object"&&r!==null?R(r,y.object):[null,void 0]},v=function(r,e)
{var t=h(r);return{h:t.h,s:d(t.s+100*e,0,100),l:t.l,a:t.a}},m=function(r)
{return(299*r.r+587*r.g+114*r.b)/1e3/255},S=function(r,e){var
t=h(r);return{h:t.h,s:t.s,l:d(t.l+100*e,0,100),a:t.a}},k=function(){function r(e){this.parsed=G(e)
[0],this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}return r.prototype.isValid=function(){return
this.parsed!==null},r.prototype.brightness=function(){return
u(m(this.rgba),2)},r.prototype.isDark=function(){return m(this.rgba)<.5},r.prototype.isLight=function()
{return m(this.rgba)>=.5},r.prototype.toHex=function(){return e=p(this.rgba),t=e.r,a=e.g,n=e.b,i=(f=e.a)
<1?c(u(255*f)):"","#"+c(t)+c(a)+c(n)+i;var e,t,a,n,f,i},r.prototype.toRgb=function(){return
p(this.rgba)},r.prototype.toRgbString=function(){return e=p(this.rgba),t=e.r,a=e.g,n=e.b,(f=e.a)
<1?"rgba("+t+", "+a+", "+n+", "+f+")":"rgb("+t+", "+a+", "+n+")";var
e,t,a,n,f},r.prototype.toHsl=function(){return $(h(this.rgba))},r.prototype.toHslString=function(){return
e=$(h(this.rgba)),t=e.h,a=e.s,n=e.l,(f=e.a)<1?"hsla("+t+", "+a+"%, "+n+"%, "+f+")":"hsl("+t+", "+a+"%,
"+n+"%)";var e,t,a,n,f},r.prototype.toHsv=function(){return e=P(this.rgba),
{h:u(e.h),s:u(e.s),v:u(e.v),a:u(e.a,3)};var e},r.prototype.invert=function(){return b({r:255-
(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e},r.prototype.saturate=function(e){return e===void 0&&
(e=.1),b(v(this.rgba,e))},r.prototype.desaturate=function(e){return e===void 0&&(e=.1),b(v(this.rgba,-
e))},r.prototype.grayscale=function(){return b(v(this.rgba,-1))},r.prototype.lighten=function(e){return
e===void 0&&(e=.1),b(S(this.rgba,e))},r.prototype.darken=function(e){return e===void 0&&
(e=.1),b(S(this.rgba,-e))},r.prototype.rotate=function(e){return e===void 0&&
(e=15),this.hue(this.hue()+e)},r.prototype.alpha=function(e){return typeof e=="number"?b({r:
(t=this.rgba).r,g:t.g,b:t.b,a:e}):u(this.rgba.a,3);var t},r.prototype.hue=function(e){var
t=h(this.rgba);return typeof e=="number"?b({h:e,s:t.s,l:t.l,a:t.a}):u(t.h)},r.prototype.isEqual=function(e)
{return this.toHex()===b(e).toHex()},r}(),b=function(r){return r instanceof k?r:new k(r)},E=
[],J=function(r){r.forEach(function(e){E.indexOf(e)<0&&(e(k,y),E.push(e))})};function K(r,e){var t=
{white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2
691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papay
awhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:
"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aqu
amarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#00
8b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",dark
grey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc
",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey
:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#
fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e9
0ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",
lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon
:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivo
ry:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediuma
quamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb37
1",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",mid
nightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lig
htslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletr
ed:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b
0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"
#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb9
8",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletr
ed:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0
f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",sea
shell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90
ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40
e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosyb
rown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d
3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"},a
={};for(var n in t)a[t[n]]=n;var f={};r.prototype.toName=function(i){if(!
(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b))return"transparent";var o,s,g=a[this.toHex()];if(g)return
g;if(i!=null&&i.closest){var C=this.toRgb(),w=1/0,N="black";if(!f.length)for(var x in t)f[x]=new
r(t[x]).toRgb();for(var q in t){var M=(o=C,s=f[q],Math.pow(o.r-s.r,2)+Math.pow(o.g-
s.g,2)+Math.pow(o.b-s.b,2));M<w&&(w=M,N=q)}return N}},e.string.push([function(i){var
o=i.toLowerCase(),s=o==="transparent"?"#0000":t[o];return s?new
r(s).toRgb():null},"name"])}export{J as k,K as n,b as w};
import{b as te,c as q,B as
_e}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_
math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import{s as
v}from"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{g as
re,p as
oe}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut
@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{E as K,e as
k}from"./@pixi_extensions@7.4.2.089ce807.js";import{L as Ee,c as ne,a as
se}from"./@pixi_assets@7.4.2_@pixi_core@7.4.2.4019d085.js";import{T as G,F as C,M as ie,A as
ae}from"./@pixi_constants@7.4.2.8b356162.js";var P=(e=>
(e[e.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",e
[e.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",
e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT
",e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EX
T",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA
_S3TC_DXT1_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESS
ED_SRGB_ALPHA_S3TC_DXT3_EXT",e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=359
19]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",e[e.COMPRESSED_SRGB_S3TC_DXT1_
EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",e[e.COMPRESSED_R11_EAC=37488]="
COMPRESSED_R11_EAC",e[e.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIG
NED_R11_EAC",e[e.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",e[e.COMP
RESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",e[e.COMPRESSE
D_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",e[e.COMPRESSED_RGBA8_ETC2_EAC=
37496]="COMPRESSED_RGBA8_ETC2_EAC",e[e.COMPRESSED_SRGB8_ETC2=37493]="COMP
RESSED_SRGB8_ETC2",e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESS
ED_SRGB8_ALPHA8_ETC2_EAC",e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",e[e.COMPRESSED_SRGB
8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALP
HA1_ETC2",e[e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVR
TC_4BPPV1_IMG",e[e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_R
GBA_PVRTC_4BPPV1_IMG",e[e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRE
SSED_RGB_PVRTC_2BPPV1_IMG",e[e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="C
OMPRESSED_RGBA_PVRTC_2BPPV1_IMG",e[e.COMPRESSED_RGB_ETC1_WEBGL=36196]="
COMPRESSED_RGB_ETC1_WEBGL",e[e.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRE
SSED_RGB_ATC_WEBGL",e[e.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35987]="
COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",e[e.COMPRESSED_RGBA_ATC_INTER
POLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEB
GL",e[e.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KH
R",e[e.COMPRESSED_RGBA_BPTC_UNORM_EXT=36492]="COMPRESSED_RGBA_BPTC_UNO
RM_EXT",e[e.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT=36493]="COMPRESSED_SR
GB_ALPHA_BPTC_UNORM_EXT",e[e.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT=36494]
="COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT",e[e.COMPRESSED_RGB_BPTC_UNSIGN
ED_FLOAT_EXT=36495]="COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT",e))(P||{});const
Y=
{33776:.5,33777:.5,33778:1,33779:1,35916:.5,35917:.5,35918:1,35919:1,37488:.5,37489:.5,37490:1,
37491:1,37492:.5,37496:1,37493:.5,37497:1,37494:.5,37495:.5,35840:.5,35842:.5,35841:.25,35843:.
25,36196:.5,35986:.5,35987:1,34798:1,37808:1,36492:1,36493:1,36494:1,36495:1};let c,L;function
J(){L=
{bptc:c.getExtension("EXT_texture_compression_bptc"),astc:c.getExtension("WEBGL_compressed_t
exture_astc"),etc:c.getExtension("WEBGL_compressed_texture_etc"),s3tc:c.getExtension("WEBGL_
compressed_texture_s3tc"),s3tc_sRGB:c.getExtension("WEBGL_compressed_texture_s3tc_srgb"),p
vrtc:c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compr
essed_texture_pvrtc"),etc1:c.getExtension("WEBGL_compressed_texture_etc1"),atc:c.getExtension("
WEBGL_compressed_texture_atc")}}const Se={extension:
{type:K.DetectionParser,priority:2},test:async()=>{const
e=v.ADAPTER.createCanvas().getContext("webgl");return e?(c=e,!0):(console.warn("WebGL not
available for compressed textures."),!1)},add:async e=>{L||J();const t=[];for(const n in
L)L[n]&&t.push(n);return[...t,...e]},remove:async e=>(L||J(),e.filter(t=>!(t in L)))};k.add(Se);class De
extends te{constructor(t,n={width:1,height:1,autoLoad:!0}){let E,_;typeof t=="string"?(E=t,_=new
Uint8Array):(E=null,_=t),super(_,n),this.origin=E,this.buffer=_?new
q(_):null,this._load=null,this.loaded=!1,this.origin!==null&&n.autoLoad!==!1&&this.load(),this.origin==
=null&&this.buffer&&
(this._load=Promise.resolve(this),this.loaded=!0,this.onBlobLoaded(this.buffer.rawBinaryData))}onBlo
bLoaded(t){}load(){return this._load?this._load:
(this._load=fetch(this.origin).then(t=>t.blob()).then(t=>t.arrayBuffer()).then(t=>(this.data=new
Uint32Array(t),this.buffer=new
q(t),this.loaded=!0,this.onBlobLoaded(t),this.update(),this)),this._load)}}class g extends
De{constructor(t,n)
{super(t,n),this.format=n.format,this.levels=n.levels||1,this._width=n.width,this._height=n.height,this._
extension=g._formatToExtension(this.format),(n.levelBuffers||this.buffer)&&
(this._levelBuffers=n.levelBuffers||g._createLevelBuffers(t instanceof Uint8Array?
t:this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height))}upload(t,n,E){const_=t.gl;if(!t.context.extensions[this._extension])throw new Error(`${this._extension} textures are not
supported on the current
machine`);if(!this._levelBuffers)return!1;_.pixelStorei(_.UNPACK_ALIGNMENT,4);for(let
r=0,i=this.levels;r<i;r++)
{const{levelID:o,levelWidth:s,levelHeight:D,levelBuffer:a}=this._levelBuffers[r];_.compressedTexImage
2D(_.TEXTURE_2D,o,this.format,s,D,0,a)}return!0}onBlobLoaded()
{this._levelBuffers=g._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this
.height)}static _formatToExtension(t)
{if(t>=33776&&t<=33779)return"s3tc";if(t>=35916&&t<=35919)return"s3tc_sRGB";if(t>=37488&&t<=3
7497)return"etc";if(t>=35840&&t<=35843)return"pvrtc";if(t===36196)return"etc1";if(t===35986||t===35
987||t===34798)return"atc";if(t>=36492&&t<=36495)return"bptc";if(t===37808)return"astc";throw new
Error(`Invalid (compressed) texture format given: ${t}`)}static _createLevelBuffers(t,n,E,_,r,i,o){const
s=new Array(E);let D=t.byteOffset,a=i,B=o,d=a+_-1&~(_-1),l=B+r-1&~(r-1),h=d*l*Y[n];for(let
T=0;T<E;T++)s[T]={levelID:T,levelWidth:E>1?a:d,levelHeight:E>1?B:l,levelBuffer:new
Uint8Array(t.buffer,D,h)},D+=h,a=a>>1||1,B=B>>1||1,d=a+_-1&~(_-1),l=B+r-1&~(r-1),h=d*l*Y[n];return
s}}const $=4,W=124,Pe=32,Q=20,le=542327876,V=
{SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},Ce=
{SIZE:0,FLAGS:1,FOURCC:2,RGB_BITCOUNT:3,R_BIT_MASK:4,G_BIT_MASK:5,B_BIT_MASK:6,A
_BIT_MASK:7},F=
{DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},B
e=1,Ge=2,de=4,Te=64,Re=512,ue=131072,fe=827611204,ce=861165636,he=894720068,pe=808540
228,Oe=4,Ae={[fe]:P.COMPRESSED_RGBA_S3TC_DXT1_EXT,
[ce]:P.COMPRESSED_RGBA_S3TC_DXT3_EXT,
[he]:P.COMPRESSED_RGBA_S3TC_DXT5_EXT},Xe=
{70:P.COMPRESSED_RGBA_S3TC_DXT1_EXT,71:P.COMPRESSED_RGBA_S3TC_DXT1_EXT,73:
P.COMPRESSED_RGBA_S3TC_DXT3_EXT,74:P.COMPRESSED_RGBA_S3TC_DXT3_EXT,76:P.C
OMPRESSED_RGBA_S3TC_DXT5_EXT,77:P.COMPRESSED_RGBA_S3TC_DXT5_EXT,72:P.COM
PRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,75:P.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_E
XT,78:P.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,96:P.COMPRESSED_RGB_BPTC_SIG
NED_FLOAT_EXT,95:P.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,98:P.COMPRESSE
D_RGBA_BPTC_UNORM_EXT,99:P.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT};functio
n ge(e){const t=new Uint32Array(e);if(t[0]!==le)throw new Error("Invalid DDS file magic word");const
n=new
Uint32Array(e,0,W/Uint32Array.BYTES_PER_ELEMENT),E=n[V.HEIGHT],_=n[V.WIDTH],r=n[V.MIPM
AP_COUNT],i=new
Uint32Array(e,V.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,Pe/Uint32Array.BYTES_PER
_ELEMENT),o=i[Be];if(o&de){const s=i[Ce.FOURCC];if(s!==pe){const O=Ae[s],u=$+W,A=new
Uint8Array(e,u);return[new g(A,{format:O,width:_,height:E,levels:r})]}const D=$+W,a=new
Uint32Array(t.buffer,D,Q/Uint32Array.BYTES_PER_ELEMENT),B=a[F.DXGI_FORMAT],d=a[F.RESO
URCE_DIMENSION],l=a[F.MISC_FLAG],h=a[F.ARRAY_SIZE],T=Xe[B];if(T===void 0)throw new
Error(`DDSParser cannot parse texture data with DXGI format ${B}`);if(l===Oe)throw new
Error("DDSParser does not support cubemap textures");if(d===6)throw new Error("DDSParser does
not supported 3D texture data");const M=new Array,y=$+W+Q;if(h===1)M.push(new
Uint8Array(e,y));else{const O=Y[T];let u=0,A=_,f=E;for(let p=0;p<r;p++){const
m=Math.max(1,A+3&-4),U=Math.max(1,f+3&-4),I=m*U*O;u+=I,A=A>>>1,f=f>>>1}let H=y;for(let
p=0;p<h;p++)M.push(new Uint8Array(e,H,u)),H+=u}return M.map(O=>new g(O,{format:T,width:_,height:E,levels:r}))}throw o&Te?new Error("DDSParser does not support
uncompressed texture data."):o&Re?new Error("DDSParser does not supported YUV uncompressed
texture data."):o&ue?new Error("DDSParser does not support single-channel (lumninance) texture
data!"):o&Ge?new Error("DDSParser does not support single-channel (alpha) texture data!"):new
Error("DDSParser failed to load a texture file due to an unknown reason!")}const N=
[171,75,84,88,32,49,49,187,13,10,26,10],Me=67305985,R=
{FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTE
RNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXE
L_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIP
MAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},j=64,ee={[G.UNSIGNED_BYTE]:1,
[G.UNSIGNED_SHORT]:2,[G.INT]:4,[G.UNSIGNED_INT]:4,[G.FLOAT]:4,[G.HALF_FLOAT]:8},me=
{[C.RGBA]:4,[C.RGB]:3,[C.RG]:2,[C.RED]:1,[C.LUMINANCE]:1,[C.LUMINANCE_ALPHA]:2,
[C.ALPHA]:1},Ue={[G.UNSIGNED_SHORT_4_4_4_4]:2,[G.UNSIGNED_SHORT_5_5_5_1]:2,
[G.UNSIGNED_SHORT_5_6_5]:2};function xe(e,t,n=!1){const E=new DataView(t);if(!we(e,E))return
null;const
_=E.getUint32(R.ENDIANNESS,!0)===Me,r=E.getUint32(R.GL_TYPE,_),i=E.getUint32(R.GL_FORM
AT,_),o=E.getUint32(R.GL_INTERNAL_FORMAT,_),s=E.getUint32(R.PIXEL_WIDTH,_),D=E.getUint3
2(R.PIXEL_HEIGHT,_)||1,a=E.getUint32(R.PIXEL_DEPTH,_)||1,B=E.getUint32(R.NUMBER_OF_AR
RAY_ELEMENTS,_)||1,d=E.getUint32(R.NUMBER_OF_FACES,_),l=E.getUint32(R.NUMBER_OF_M
IPMAP_LEVELS,_),h=E.getUint32(R.BYTES_OF_KEY_VALUE_DATA,_);if(D===0||a!==1)throw new
Error("Only 2D textures are supported");if(d!==1)throw new Error("CubeTextures are not supported by
KTXLoader yet!");if(B!==1)throw new Error("WebGL does not support array textures");const
T=4,M=4,y=s+3&-4,O=D+3&-4,u=new Array(B);let A=s*D;r===0&&(A=y*O);let f;if(r!==0?ee[r]?
f=ee[r]*me[i]:f=Ue[r]:f=Y[o],f===void 0)throw new Error("Unable to resolve the pixel format stored in
the *.ktx file!");const H=n?ye(E,h,_):null;let p=A*f,m=s,U=D,I=y,z=O,X=j+h;for(let S=0;S<l;S++){const
x=E.getUint32(X,_);let w=X+4;for(let b=0;b<B;b++){let Z=u[b];Z||(Z=u[b]=new Array(l)),Z[S]=
{levelID:S,levelWidth:l>1||r!==0?m:I,levelHeight:l>1||r!==0?U:z,levelBuffer:new
Uint8Array(t,w,p)},w+=p}X+=x+4,X=X%4!==0?X+4-X%4:X,m=m>>1||1,U=U>>1||1,I=m+T-1&~(T-
1),z=U+M-1&~(M-1),p=I*z*f}return r!==0?{uncompressed:u.map(S=>{let
x=S[0].levelBuffer,w=!1;return r===G.FLOAT?x=new
Float32Array(S[0].levelBuffer.buffer,S[0].levelBuffer.byteOffset,S[0].levelBuffer.byteLength/4):r===G.U
NSIGNED_INT?(w=!0,x=new
Uint32Array(S[0].levelBuffer.buffer,S[0].levelBuffer.byteOffset,S[0].levelBuffer.byteLength/4)):r===G.I
NT&&(w=!0,x=new
Int32Array(S[0].levelBuffer.buffer,S[0].levelBuffer.byteOffset,S[0].levelBuffer.byteLength/4)),
{resource:new te(x,{width:S[0].levelWidth,height:S[0].levelHeight}),type:r,format:w?
Le(i):i}}),kvData:H}:{compressed:u.map(S=>new g(null,
{format:o,width:s,height:D,levels:l,levelBuffers:S})),kvData:H}}function we(e,t){for(let
n=0;n<N.length;n++)if(t.getUint8(n)!==N[n])return console.error(`${e} is not a valid *.ktx
file!`),!1;return!0}function Le(e){switch(e){case C.RGBA:return C.RGBA_INTEGER;case
C.RGB:return C.RGB_INTEGER;case C.RG:return C.RG_INTEGER;case C.RED:return
C.RED_INTEGER;default:return e}}function ye(e,t,n){const E=new Map;let _=0;for(;_<t;){const
r=e.getUint32(j+_,n),i=j+_+4,o=3-(r+3)%4;if(r===0||r>t-_){console.error("KTXLoader:
keyAndValueByteSize out of bounds");break}let s=0;for(;s<r&&e.getUint8(i+s)!==0;s++);if(s===-1)
{console.error("KTXLoader: Failed to find null byte terminating kvData key");break}const D=new
TextDecoder().decode(new Uint8Array(e.buffer,i,s)),a=new DataView(e.buffer,i+s+1,r-s1);E.set(D,a),_+=4+r+o}return E}const He={extension:
{type:K.LoadParser,priority:Ee.High},name:"loadDDS",test(e){return ne(e,".dds")},async load(e,t,n)
{const E=await(await v.ADAPTER.fetch(e)).arrayBuffer(),_=ge(E).map(r=>{const i=new _e(r,
{mipmap:ie.OFF,alphaMode:ae.NO_PREMULTIPLIED_ALPHA,resolution:re(e),...t.data});return
se(i,n,e)});return _.length===1?_[0]:_},unload(e){Array.isArray(e)?
e.forEach(t=>t.destroy(!0)):e.destroy(!0)}};k.add(He);const Ie={extension:
{type:K.LoadParser,priority:Ee.High},name:"loadKTX",test(e){return ne(e,".ktx")},async load(e,t,n)
{const E=await(await v.ADAPTER.fetch(e)).arrayBuffer(),
{compressed:_,uncompressed:r,kvData:i}=xe(e,E),o=_!=null?_:r,s=
{mipmap:ie.OFF,alphaMode:ae.NO_PREMULTIPLIED_ALPHA,resolution:re(e),...t.data},D=o.map(a=
>{var l;o===r&&Object.assign(s,{type:a.type,format:a.format});const B=(l=a.resource)!=null?l:a,d=new
_e(B,s);return d.ktxKeyValueData=i,se(d,n,e)});return D.length===1?D[0]:D},unload(e)
{Array.isArray(e)?e.forEach(t=>t.destroy(!0)):e.destroy(!0)}};k.add(Ie);const ve=
["s3tc","s3tc_sRGB","etc","etc1","pvrtc","atc","astc","bptc"],be={extension:K.ResolveParser,test:e=>
{const t=oe.extname(e).slice(1);return["basis","ktx","dds"].includes(t)},parse:e=>{var E,_,r,i;const
t=e.split("."),n=t.pop();if(["ktx","dds"].includes(n)){const
o=t.pop();if(ve.includes(o))return{resolution:parseFloat((_=(E=v.RETINA_PREFIX.exec(e))==null?void
0:E[1])!=null?_:"1"),format:o,src:e}}return{resolution:parseFloat((i=
(r=v.RETINA_PREFIX.exec(e))==null?void 0:r[1])!=null?i:"1"),format:n,src:e}}};k.add(be);import{s as b,i as Q}from"./@pixi_settings@7.4.2.aad2afb5.js";import{R as V}from"./@pixi_runner@7.4.2.8be90fed.js";import{u as _e,i as lt,B as G,T as O,b as At,P as ut,a as R,c as hr,n as we,l as ct,e as dr,g as ft,r as lr,f as ur}from"./@pixi_utils@7.4.2.8d74d95b.js";import{E as nt}from"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{C as Pe}from"./@pixi_color@7.4.2.090b5ebd.js";import{B as T,A as ne,S as k,M as se,W as It,a as pe,F as c,T as _,D as Ye,b as U,E as ae,P as B,c as I,C as Y,d as mt,e as w,G as Ct,f,R as cr}from"./@pixi_constants@7.4.2.8b356162.js";import{E as v,e as x}from"./@pixi_extensions@7.4.2.089ce807.js";import{M as L,g as M,R as C,P as J,T as fr}from"./@pixi_math@7.4.2.5f60b3ed.js";import{T as ve}from"./@pixi_ticker@7.4.2.206acfd7.js";class mr{constructor(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}get int8View(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View}get uint8View(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View}get int16View(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View}get uint16View(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View}get int32View(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View}view(e){return this[`${e}View`]}destroy(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null}static sizeOf(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}}const pr=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function _r(n){let e="";for(let t=0;t<n;++t)t>0&&(e+=`
else `),t<n-1&&(e+=`if(test == ${t}.0){}`);return e}function Tr(n,e){if(n===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");const t=e.createShader(e.FRAGMENT_SHADER);for(;;){const r=pr.replace(/%forloop%/gi,_r(n));if(e.shaderSource(t,r),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))n=n/2|0;else break}return n}const De=0,Ge=1,ke=2,Ve=3,He=4,$e=5;class oe{constructor(){this.data=0,this.blendMode=T.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}get blend(){return!!(this.data&1<<De)}set blend(e){!!(this.data&1<<De)!==e&&(this.data^=1<<De)}get offsets(){return!!(this.data&1<<Ge)}set offsets(e){!!(this.data&1<<Ge)!==e&&(this.data^=1<<Ge)}get culling(){return!!(this.data&1<<ke)}set culling(e){!!(this.data&1<<ke)!==e&&(this.data^=1<<ke)}get depthTest(){return!!(this.data&1<<Ve)}set depthTest(e){!!(this.data&1<<Ve)!==e&&(this.data^=1<<Ve)}get depthMask(){return!!(this.data&1<<$e)}set depthMask(e){!!(this.data&1<<$e)!==e&&(this.data^=1<<$e)}get clockwiseFrontFace(){return!!(this.data&1<<He)}set clockwiseFrontFace(e){!!(this.data&1<<He)!==e&&(this.data^=1<<He)}get blendMode(){return this._blendMode}set blendMode(e){this.blend=e!==T.NONE,this._blendMode=e}get polygonOffset(){return this._polygonOffset}set polygonOffset(e){this.offsets=!!e,this._polygonOffset=e}static for2d(){const e=new oe;return e.depthTest=!1,e.blend=!0,e}}oe.prototype.toString=function(){return`[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`};const Ke=[];function wt(n,e){if(!n)return null;let t="";if(typeof n=="string"){const r=/\.(\w{3,4})(?:$|\?|#)/i.exec(n);r&&(t=r[1].toLowerCase())}for(let r=Ke.length-1;r>=0;--r){const s=Ke[r];if(s.test&&s.test(n,t))return new s(n,e)}throw new Error("Unrecognized source type to auto-detect Resource")}class Te{constructor(e=0,t=0){this._width=e,this._height=t,this.destroyed=!1,this.internal=!1,this.onResize=new V("setRealSize"),this.onUpdate=new V("update"),this.onError=new V("onError")}bind(e){this.onResize.add(e),this.onUpdate.add(e),this.onError.add(e),(this._width||this._height)&&this.onResize.emit(this._width,this._height)}unbind(e){this.onResize.remove(e),this.onUpdate.remove(e),this.onError.remove(e)}resize(e,t){(e!==this._width||t!==this._height)&&(this._width=e,this._height=t,this.onResize.emit(e,t))}get valid(){return!!this._width&&!!this._height}update(){this.destroyed||this.onUpdate.emit()}load(){return Promise.resolve(this)}get width(){return this._width}get height(){return this._height}style(e,t,r){return!1}dispose(){}destroy(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)}static test(e,t){return!1}}class Ft extends Te{constructor(e,t){var i;const{width:r,height:s}=t||{};if(!r||!s)throw new Error("BufferResource width or height invalid");super(r,s),this.data=e,this.unpackAlignment=(i=t.unpackAlignment)!=null?i:4}upload(e,t,r){const s=e.gl;s.pixelStorei(s.UNPACK_ALIGNMENT,this.unpackAlignment),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.alphaMode===ne.UNPACK);const i=t.realWidth,a=t.realHeight;return r.width===i&&r.height===a?s.texSubImage2D(t.target,0,0,0,i,a,t.format,r.type,this.data):(r.width=i,r.height=a,s.texImage2D(t.target,0,r.internalFormat,i,a,0,t.format,r.type,this.data)),!0}dispose(){this.data=null}static test(e){return e===null||e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array}}const vr={scaleMode:k.NEAREST,alphaMode:ne.NPM},qe=class q extends nt{constructor(e=null,t=null){super(),t=Object.assign({},q.defaultOptions,t);const{alphaMode:r,mipmap:s,anisotropicLevel:i,scaleMode:a,width:o,height:h,wrapMode:d,format:l,type:u,target:m,resolution:E,resourceOptions:S}=t;e&&!(e instanceof Te)&&(e=wt(e,S),e.internal=!0),this.resolution=E||b.RESOLUTION,this.width=Math.round((o||0)*this.resolution)/this.resolution,this.height=Math.round((h||0)*this.resolution)/this.resolution,this._mipmap=s,this.anisotropicLevel=i,this._wrapMode=d,this._scaleMode=a,this.format=l,this.type=u,this.target=m,this.alphaMode=r,this.uid=_e(),this.touched=0,this.isPowerOfTwo=!1,this._refreshPOT(),this._glTextures={},this.dirtyId=0,this.dirtyStyleId=0,this.cacheId=null,this.valid=o>0&&h>0,this.textureCacheIds=[],this.destroyed=!1,this.resource=null,this._batchEnabled=0,this._batchLocation=0,this.parentTextureArray=null,this.setResource(e)}get realWidth(){return Math.round(this.width*this.resolution)}get realHeight(){return Math.round(this.height*this.resolution)}get mipmap(){return this._mipmap}set mipmap(e){this._mipmap!==e&&(this._mipmap=e,this.dirtyStyleId++)}get scaleMode(){return this._scaleMode}set scaleMode(e){this._scaleMode!==e&&(this._scaleMode=e,this.dirtyStyleId++)}get wrapMode(){return this._wrapMode}set wrapMode(e){this._wrapMode!==e&&(this._wrapMode=e,this.dirtyStyleId++)}setStyle(e,t){let r;return e!==void 0&&e!==this.scaleMode&&(this.scaleMode=e,r=!0),t!==void 0&&t!==this.mipmap&&(this.mipmap=t,r=!0),r&&this.dirtyStyleId++,this}setSize(e,t,r){return r=r||this.resolution,this.setRealSize(e*r,t*r,r)}setRealSize(e,t,r){return this.resolution=r||this.resolution,this.width=Math.round(e)/this.resolution,this.height=Math.round(t)/this.resolution,this._refreshPOT(),this.update(),this}_refreshPOT(){this.isPowerOfTwo=lt(this.realWidth)&&lt(this.realHeight)}setResolution(e){const t=this.resolution;return t===e?this:(this.resolution=e,this.valid&&(this.width=Math.round(this.width*t)/e,this.height=Math.round(this.height*t)/e,this.emit("update",this)),this._refreshPOT(),this)}setResource(e){if(this.resource===e)return this;if(this.resource)throw new Error("Resource can be set only once");return e.bind(this),this.resource=e,this}update(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))}onError(e){this.emit("error",this,e)}destroy(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete G[this.cacheId],delete O[this.cacheId],this.cacheId=null),this.valid=!1,this.dispose(),q.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0,this.emit("destroyed",this),this.removeAllListeners()}dispose(){this.emit("dispose",this)}castToBaseTexture(){return this}static from(e,t,r=b.STRICT_TEXTURE_CACHE){const s=typeof e=="string";let i=null;if(s)i=e;else{if(!e._pixiId){const o=(t==null?void 0:t.pixiIdPrefix)||"pixiid";e._pixiId=`${o}_${_e()}`}i=e._pixiId}let a=G[i];if(s&&r&&!a)throw new Error(`The cacheId "${i}" does not exist in BaseTextureCache.`);return a||(a=new q(e,t),a.cacheId=i,q.addToCache(a,i)),a}static fromBuffer(e,t,r,s){e=e||new Float32Array(t*r*4);const i=new Ft(e,{width:t,height:r,...s==null?void 0:s.resourceOptions});let a,o;return e instanceof Float32Array?(a=c.RGBA,o=_.FLOAT):e instanceof Int32Array?(a=c.RGBA_INTEGER,o=_.INT):e instanceof Uint32Array?(a=c.RGBA_INTEGER,o=_.UNSIGNED_INT):e instanceof Int16Array?(a=c.RGBA_INTEGER,o=_.SHORT):e instanceof Uint16Array?(a=c.RGBA_INTEGER,o=_.UNSIGNED_SHORT):e instanceof Int8Array?(a=c.RGBA,o=_.BYTE):(a=c.RGBA,o=_.UNSIGNED_BYTE),i.internal=!0,new q(i,Object.assign({},vr,{type:o,format:a},s))}static addToCache(e,t){t&&(e.textureCacheIds.includes(t)||e.textureCacheIds.push(t),G[t]&&G[t]!==e&&console.warn(`BaseTexture added to the cache with an id [${t}] that already had an entry`),G[t]=e)}static removeFromCache(e){if(typeof e=="string"){const t=G[e];if(t){const r=t.textureCacheIds.indexOf(e);return r>-1&&t.textureCacheIds.splice(r,1),delete G[e],t}}else if(e!=null&&e.textureCacheIds){for(let t=0;t<e.textureCacheIds.length;++t)delete G[e.textureCacheIds[t]];return e.textureCacheIds.length=0,e}return null}};qe.defaultOptions={mipmap:se.POW2,anisotropicLevel:0,scaleMode:k.LINEAR,wrapMode:It.CLAMP,alphaMode:ne.UNPACK,target:pe.TEXTURE_2D,format:c.RGBA,type:_.UNSIGNED_BYTE},qe._globalBatch=0;let g=qe;class Er{constructor(){this.texArray=null,this.blend=0,this.type=Ye.TRIANGLES,this.start=0,this.size=0,this.data=null}}let gr=0;class F{constructor(e,t=!0,r=!1){this.data=e||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=r,this.static=t,this.id=gr++,this.disposeRunner=new V("disposeBuffer")}update(e){e instanceof Array&&(e=new Float32Array(e)),this.data=e||this.data,this._updateID++}dispose(){this.disposeRunner.emit(this,!1)}destroy(){this.dispose(),this.data=null}set index(e){this.type=e?U.ELEMENT_ARRAY_BUFFER:U.ARRAY_BUFFER}get index(){return this.type===U.ELEMENT_ARRAY_BUFFER}static from(e){return e instanceof Array&&(e=new Float32Array(e)),new F(e)}}class Fe{constructor(e,t=0,r=!1,s=_.FLOAT,i,a,o,h=1){this.buffer=e,this.size=t,this.normalized=r,this.type=s,this.stride=i,this.start=a,this.instance=o,this.divisor=h}destroy(){this.buffer=null}static from(e,t,r,s,i){return new Fe(e,t,r,s,i)}}const xr={Float32Array,Uint32Array,Int32Array,Uint8Array};function yr(n,e){let t=0,r=0;const s={};for(let h=0;h<n.length;h++)r+=e[h],t+=n[h].length;const i=new ArrayBuffer(t*4);let a=null,o=0;for(let h=0;h<n.length;h++){const d=e[h],l=n[h],u=At(l);s[u]||(s[u]=new xr[u](i)),a=s[u];for(let m=0;m<l.length;m++){const E=(m/d|0)*r+o,S=m%d;a[E+S]=l[m]}o+=d}return new Float32Array(i)}const pt={5126:4,5123:2,5121:1};let Rr=0;const br={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array};class ie{constructor(e=[],t={}){this.buffers=e,this.indexBuffer=null,this.attributes=t,this.glVertexArrayObjects={},this.id=Rr++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new V("disposeGeometry"),this.refCount=0}addAttribute(e,t,r=0,s=!1,i,a,o,h=!1){if(!t)throw new Error("You must pass a buffer when creating an attribute");t instanceof F||(t instanceof Array&&(t=new Float32Array(t)),t=new F(t));const d=e.split("|");if(d.length>1){for(let u=0;u<d.length;u++)this.addAttribute(d[u],t,r,s,i);return this}let l=this.buffers.indexOf(t);return l===-1&&(this.buffers.push(t),l=this.buffers.length-1),this.attributes[e]=new Fe(l,r,s,i,a,o,h),this.instanced=this.instanced||h,this}getAttribute(e){return this.attributes[e]}getBuffer(e){return this.buffers[this.getAttribute(e).buffer]}addIndex(e){return e instanceof F||(e instanceof Array&&(e=new Uint16Array(e)),e=new F(e)),e.type=U.ELEMENT_ARRAY_BUFFER,this.indexBuffer=e,this.buffers.includes(e)||this.buffers.push(e),this}getIndex(){return this.indexBuffer}interleave(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;const e=[],t=[],r=new F;let s;for(s in this.attributes){const i=this.attributes[s],a=this.buffers[i.buffer];e.push(a.data),t.push(i.size*pt[i.type]/4),i.buffer=0}for(r.data=yr(e,t),s=0;s<this.buffers.length;s++)this.buffers[s]!==this.indexBuffer&&this.buffers[s].destroy();return this.buffers=[r],this.indexBuffer&&this.buffers.push(this.indexBuffer),this}getSize(){for(const e in this.attributes){const t=this.attributes[e];return this.buffers[t.buffer].data.length/(t.stride/4||t.size)}return 0}dispose(){this.disposeRunner.emit(this,!1)}destroy(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null}clone(){const e=new ie;for(let t=0;t<this.buffers.length;t++)e.buffers[t]=new F(this.buffers[t].data.slice(0));for(const t in this.attributes){const r=this.attributes[t];e.attributes[t]=new Fe(r.buffer,r.size,r.normalized,r.type,r.stride,r.start,r.instance)}return this.indexBuffer&&(e.indexBuffer=e.buffers[this.buffers.indexOf(this.indexBuffer)],e.indexBuffer.type=U.ELEMENT_ARRAY_BUFFER),e}static merge(e){const t=new ie,r=[],s=[],i=[];let a;for(let o=0;o<e.length;o++){a=e[o];for(let h=0;h<a.buffers.length;h++)s[h]=s[h]||0,s[h]+=a.buffers[h].data.length,i[h]=0}for(let o=0;o<a.buffers.length;o++)r[o]=new br[At(a.buffers[o].data)](s[o]),t.buffers[o]=new F(r[o]);for(let o=0;o<e.length;o++){a=e[o];for(let h=0;h<a.buffers.length;h++)r[h].set(a.buffers[h].data,i[h]),i[h]+=a.buffers[h].data.length}if(t.attributes=a.attributes,a.indexBuffer){t.indexBuffer=t.buffers[a.buffers.indexOf(a.indexBuffer)],t.indexBuffer.type=U.ELEMENT_ARRAY_BUFFER;let o=0,h=0,d=0,l=0;for(let u=0;u<a.buffers.length;u++)if(a.buffers[u]!==a.indexBuffer){l=u;break}for(const u in a.attributes){const m=a.attributes[u];(m.buffer|0)===l&&(h+=m.size*pt[m.type]/4)}for(let u=0;u<e.length;u++){const m=e[u].indexBuffer.data;for(let E=0;E<m.length;E++)t.indexBuffer.data[E+d]+=o;o+=e[u].buffers[l].data.length/h,d+=m.length}}return t}}class Sr extends ie{constructor(e=!1){super(),this._buffer=new F(null,e,!1),this._indexBuffer=new F(null,e,!0),this.addAttribute("aVertexPosition",this._buffer,2,!1,_.FLOAT).addAttribute("aTextureCoord",this._buffer,2,!1,_.FLOAT).addAttribute("aColor",this._buffer,4,!0,_.UNSIGNED_BYTE).addAttribute("aTextureId",this._buffer,1,!0,_.FLOAT).addIndex(this._indexBuffer)}}var Ar=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,Ir=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;function _t(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}function Xe(n){const e=new Array(n);for(let t=0;t<e.length;t++)e[t]=!1;return e}function Mt(n,e){switch(n){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"uvec2":return new Uint32Array(2*e);case"uvec3":return new Uint32Array(3*e);case"uvec4":return new Uint32Array(4*e);case"bool":return!1;case"bvec2":return Xe(2*e);case"bvec3":return Xe(3*e);case"bvec4":return Xe(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}const re=[{test:n=>n.type==="float"&&n.size===1&&!n.isArray,code:n=>`
            if(uv["${n}"] !== ud["${n}"].value)
            {
                ud["${n}"].value = uv["${n}"]
                gl.uniform1f(ud["${n}"].location, uv["${n}"])
            }
            `},{test:(n,e)=>(n.type==="sampler2D"||n.type==="samplerCube"||n.type==="sampler2DArray")&&n.size===1&&!n.isArray&&(e==null||e.castToBaseTexture!==void 0),code:n=>`t = syncData.textureCount++;

            renderer.texture.bind(uv["${n}"], t);

            if(ud["${n}"].value !== t)
            {
                ud["${n}"].value = t;
                gl.uniform1i(ud["${n}"].location, t);
; // eslint-disable-line max-len
            }`},{test:(n,e)=>n.type==="mat3"&&n.size===1&&!n.isArray&&e.a!==void 0,code:n=>`
            gl.uniformMatrix3fv(ud["${n}"].location, false, uv["${n}"].toArray(true));
            `,codeUbo:n=>`
                var ${n}_matrix = uv.${n}.toArray(true);

                data[offset] = ${n}_matrix[0];
                data[offset+1] = ${n}_matrix[1];
                data[offset+2] = ${n}_matrix[2];
        
                data[offset + 4] = ${n}_matrix[3];
                data[offset + 5] = ${n}_matrix[4];
                data[offset + 6] = ${n}_matrix[5];
        
                data[offset + 8] = ${n}_matrix[6];
                data[offset + 9] = ${n}_matrix[7];
                data[offset + 10] = ${n}_matrix[8];
            `},{test:(n,e)=>n.type==="vec2"&&n.size===1&&!n.isArray&&e.x!==void 0,code:n=>`
                cv = ud["${n}"].value;
                v = uv["${n}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${n}"].location, v.x, v.y);
                }`,codeUbo:n=>`
                v = uv.${n};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `},{test:n=>n.type==="vec2"&&n.size===1&&!n.isArray,code:n=>`
                cv = ud["${n}"].value;
                v = uv["${n}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${n}"].location, v[0], v[1]);
                }
            `},{test:(n,e)=>n.type==="vec4"&&n.size===1&&!n.isArray&&e.width!==void 0,code:n=>`
                cv = ud["${n}"].value;
                v = uv["${n}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${n}"].location, v.x, v.y, v.width, v.height)
                }`,codeUbo:n=>`
                    v = uv.${n};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `},{test:(n,e)=>n.type==="vec4"&&n.size===1&&!n.isArray&&e.red!==void 0,code:n=>`
                cv = ud["${n}"].value;
                v = uv["${n}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)   }`,codeUbo:n=>`
                    v = uv.${n};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `},{test:(n,e)=>n.type==="vec3"&&n.size===1&&!n.isArray&&e.red!==void 0,code:n=>`
                cv = ud["${n}"].value;
                v = uv["${n}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${n}"].location, v.red, v.green, v.blue)
                }`,codeUbo:n=>`
                    v = uv.${n};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `},{test:n=>n.type==="vec4"&&n.size===1&&!n.isArray,code:n=>`
                cv = ud["${n}"].value;
                v = uv["${n}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${n}"].location, v[0], v[1], v[2], v[3])
                }`}],Cr={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,samplerCube:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,sampler2DArray:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`},wr={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function Fr(n,e){var r;const t=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(const s in n.uniforms){const i=e[s];if(!i){((r=n.uniforms[s])==null?void 0:r.group)===!0&&(n.uniforms[s].ubo?t.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${s}, '${s}');
                    `):t.push(`
                        renderer.shader.syncUniformGroup(uv.${s}, syncData);
                    `));continue}const a=n.uniforms[s];let o=!1;for(let h=0;h<re.length;h++)if(re[h].test(i,a)){t.push(re[h].code(s,a)),o=!0;break}if(!o){const h=(i.size===1&&!i.isArray?Cr:wr)[i.type].replace("location",`ud["${s}"].location`);t.push(`
            cu = ud["${s}"];
            cv = cu.value;
            v = uv["${s}"];
            ${h};`)}}return new Function("ud","uv","renderer","syncData",t.join(`
`))}const Nt={};let K=Nt;function Mr(){if(K===Nt||K!=null&&K.isContextLost()){const n=b.ADAPTER.createCanvas();let e;b.PREFER_ENV>=ae.WEBGL2&&(e=n.getContext("webgl2",{})),e||(e=n.getContext("webgl",{})||n.getContext("experimental-webgl",{}),e?e.getExtension("WEBGL_draw_buffers"):e=null),K=e}return K}let Ee;function Nr(){if(!Ee){Ee=B.MEDIUM;const n=Mr();if(n&&n.getShaderPrecisionFormat){const e=n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT);e&&(Ee=e.precision?B.HIGH:B.MEDIUM)}}return Ee}function Tt(n,e){const t=n.getShaderSource(e).split(`
`).map((d,l)=>`${l}: ${d}`),r=n.getShaderInfoLog(e),s=r.split(`
`),i={},a=s.map(d=>parseFloat(d.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))).filter(d=>d&&!i[d]?(i[d]=!0,!0):!1),o=[""];a.forEach(d=>{t[d-1]=`%c${t[d-1]}%c`,o.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});const h=t.join(`
`);o[0]=h,console.error(r),console.groupCollapsed("click to view full shader code"),console.warn(...o),console.groupEnd()}function Br(n,e,t,r){n.getProgramParameter(e,n.LINK_STATUS)||(n.getShaderParameter(t,n.COMPILE_STATUS)||Tt(n,t),n.getShaderParameter(r,n.COMPILE_STATUS)||Tt(n,r),console.error("PixiJS Error: Could not initialize shader."),n.getProgramInfoLog(e)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",n.getProgramInfoLog(e)))}const Or={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function Bt(n){return Or[n]}let ge=null;const vt={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function Ot(n,e){if(!ge){const t=Object.keys(vt);ge={};for(let r=0;r<t.length;++r){const s=t[r];ge[n[s]]=vt[s]}}return ge[e]}function Et(n,e,t){if(n.substring(0,9)!=="precision"){let r=e;return e===B.HIGH&&t!==B.HIGH&&(r=B.MEDIUM),`precision ${r} float;
${n}`}else if(t!==B.HIGH&&n.substring(0,15)==="precision highp")return n.replace("precision highp","precision mediump");return n}let de;function Pr(){if(typeof de=="boolean")return de;try{de=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch(n){de=!1}return de}let Lr=0;const xe={},Ze=class Z{constructor(e,t,r="pixi-shader",s={}){this.extra={},this.id=Lr++,this.vertexSrc=e||Z.defaultVertexSrc,this.fragmentSrc=t||Z.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.extra=s,this.vertexSrc.substring(0,8)!=="#version"&&(r=r.replace(/\s+/g,"-"),xe[r]?(xe[r]++,r+=`-${xe[r]}`):xe[r]=1,this.vertexSrc=`#define SHADER_NAME ${r}
${this.vertexSrc}`,this.fragmentSrc=`#define SHADER_NAME ${r}
${this.fragmentSrc}`,this.vertexSrc=Et(this.vertexSrc,Z.defaultVertexPrecision,B.HIGH),this.fragmentSrc=Et(this.fragmentSrc,Z.defaultFragmentPrecision,Nr())),this.glPrograms={},this.syncUniforms=null}static get defaultVertexSrc(){return Ir}static get defaultFragmentSrc(){return Ar}static from(e,t,r){const s=e+t;let i=ut[s];return i||(ut[s]=i=new Z(e,t,r)),i}};Ze.defaultVertexPrecision=B.HIGH,Ze.defaultFragmentPrecision=Q.apple.device?B.HIGH:B.MEDIUM;let z=Ze,Ur=0;class P{constructor(e,t,r){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=Ur++,this.static=!!t,this.ubo=!!r,e instanceof F?(this.buffer=e,this.buffer.type=U.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=e,this.ubo&&(this.buffer=new F(new Float32Array(1)),this.buffer.type=U.UNIFORM_BUFFER,this.autoManage=!0))}update(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()}add(e,t,r){if(!this.ubo)this.uniforms[e]=new P(t,r);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")}static from(e,t,r){return new P(e,t,r)}static uboFrom(e,t){return new P(e,t!=null?t:!0,!0)}}class Le{constructor(e,t){this.uniformBindCount=0,this.program=e,t?t instanceof P?this.uniformGroup=t:this.uniformGroup=new P(t):this.uniformGroup=new P({}),this.disposeRunner=new V("disposeShader")}checkUniformExists(e,t){if(t.uniforms[e])return!0;for(const r in t.uniforms){const s=t.uniforms[r];if(s.group===!0&&this.checkUniformExists(e,s))return!0}return!1}destroy(){this.uniformGroup=null,this.disposeRunner.emit(this),this.disposeRunner.destroy()}get uniforms(){return this.uniformGroup.uniforms}static from(e,t,r){const s=z.from(e,t);return new Le(s,r)}}class Dr{constructor(e,t){if(this.vertexSrc=e,this.fragTemplate=t,this.programCache={},this.defaultGroupCache={},!t.includes("%count%"))throw new Error('Fragment template must contain "%count%".');if(!t.includes("%forloop%"))throw new Error('Fragment template must contain "%forloop%".')}generateShader(e){if(!this.programCache[e]){const r=new Int32Array(e);for(let i=0;i<e;i++)r[i]=i;this.defaultGroupCache[e]=P.from({uSamplers:r},!0);let s=this.fragTemplate;s=s.replace(/%count%/gi,`${e}`),s=s.replace(/%forloop%/gi,this.generateSampleSrc(e)),this.programCache[e]=new z(this.vertexSrc,s)}const t={tint:new Float32Array([1,1,1,1]),translationMatrix:new L,default:this.defaultGroupCache[e]};return new Le(this.programCache[e],t)}generateSampleSrc(e){let t="";t+=`
`,t+=`
`;for(let r=0;r<e;r++)r>0&&(t+=`
else `),r<e-1&&(t+=`if(vTextureId < ${r}.5)`),t+=`
{`,t+=`
	color = texture2D(uSamplers[${r}], vTextureCoord);`,t+=`
}`;return t+=`
`,t+=`
`,t}}class Gr{constructor(){this.elements=[],this.ids=[],this.count=0}clear(){for(let e=0;e<this.count;e++)this.elements[e]=null;this.count=0}}function kr(){return!Q.apple.device}function Vr(n){let e=!0;const t=b.ADAPTER.getNavigator();if(Q.tablet||Q.phone){if(Q.apple.device){const r=t.userAgent.match(/OS (\d+)_(\d+)?/);r&&parseInt(r[1],10)<11&&(e=!1)}if(Q.android.device){const r=t.userAgent.match(/Android\s([0-9.]*)/);r&&parseInt(r[1],10)<7&&(e=!1)}}return e?n:4}class Pt{constructor(e){this.renderer=e}flush(){}destroy(){this.renderer=null}start(){}stop(){this.flush()}render(e){}}var Hr=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,$r=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;const ue=class N extends Pt{constructor(e){super(e),this.setShaderGenerator(),this.geometryClass=Sr,this.vertexSize=6,this.state=oe.for2d(),this.size=N.defaultBatchSize*4,this._vertexCount=0,this._indexCount=0,this._bufferedElements=[],this._bufferedTextures=[],this._bufferSize=0,this._shader=null,this._packedGeometries=[],this._packedGeometryPoolSize=2,this._flushId=0,this._aBuffers={},this._iBuffers={},this.maxTextures=1,this.renderer.on("prerender",this.onPrerender,this),e.runners.contextChange.add(this),this._dcIndex=0,this._aIndex=0,this._iIndex=0,this._attributeBuffer=null,this._indexBuffer=null,this._tempBoundTextures=[]}static get defaultMaxTextures(){var e;return this._defaultMaxTextures=(e=this._defaultMaxTextures)!=null?e:Vr(32),this._defaultMaxTextures}static set defaultMaxTextures(e){this._defaultMaxTextures=e}static get canUploadSameBuffer(){var e;return this._canUploadSameBuffer=(e=this._canUploadSameBuffer)!=null?e:kr(),this._canUploadSameBuffer}static set canUploadSameBuffer(e){this._canUploadSameBuffer=e}get MAX_TEXTURES(){return R("7.1.0","BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"),this.maxTextures}static get defaultVertexSrc(){return $r}static get defaultFragmentTemplate(){return Hr}setShaderGenerator({vertex:e=N.defaultVertexSrc,fragment:t=N.defaultFragmentTemplate}={}){this.shaderGenerator=new Dr(e,t)}contextChange(){const e=this.renderer.gl;b.PREFER_ENV===ae.WEBGL_LEGACY?this.maxTextures=1:(this.maxTextures=Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),N.defaultMaxTextures),this.maxTextures=Tr(this.maxTextures,e)),this._shader=this.shaderGenerator.generateShader(this.maxTextures);for(let t=0;t<this._packedGeometryPoolSize;t++)this._packedGeometries[t]=new this.geometryClass;this.initFlushBuffers()}initFlushBuffers(){const{_drawCallPool:e,_textureArrayPool:t}=N,r=this.size/4,s=Math.floor(r/this.maxTextures)+1;for(;e.length<r;)e.push(new Er);for(;t.length<s;)t.push(new Gr);for(let i=0;i<this.maxTextures;i++)this._tempBoundTextures[i]=null}onPrerender(){this._flushId=0}render(e){e._texture.valid&&(this._vertexCount+e.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=e.vertexData.length/2,this._indexCount+=e.indices.length,this._bufferedTextures[this._bufferSize]=e._texture.baseTexture,this._bufferedElements[this._bufferSize++]=e)}buildTexturesAndDrawCalls(){const{_bufferedTextures:e,maxTextures:t}=this,r=N._textureArrayPool,s=this.renderer.batch,i=this._tempBoundTextures,a=this.renderer.textureGC.count;let o=++g._globalBatch,h=0,d=r[0],l=0;s.copyBoundTextures(i,t);for(let u=0;u<this._bufferSize;++u){const m=e[u];e[u]=null,m._batchEnabled!==o&&(d.count>=t&&(s.boundArray(d,i,o,t),this.buildDrawCalls(d,l,u),l=u,d=r[++h],++o),m._batchEnabled=o,m.touched=a,d.elements[d.count++]=m)}d.count>0&&(s.boundArray(d,i,o,t),this.buildDrawCalls(d,l,this._bufferSize),++h,++o);for(let u=0;u<i.length;u++)i[u]=null;g._globalBatch=o}buildDrawCalls(e,t,r){const{_bufferedElements:s,_attributeBuffer:i,_indexBuffer:a,vertexSize:o}=this,h=N._drawCallPool;let d=this._dcIndex,l=this._aIndex,u=this._iIndex,m=h[d];m.start=this._iIndex,m.texArray=e;for(let E=t;E<r;++E){const S=s[E],p=S._texture.baseTexture,A=hr[p.alphaMode?1:0][S.blendMode];s[E]=null,t<E&&m.blend!==A&&(m.size=u-m.start,t=E,m=h[++d],m.texArray=e,m.start=u),this.packInterleavedGeometry(S,i,a,l,u),l+=S.vertexData.length/2*o,u+=S.indices.length,m.blend=A}t<r&&(m.size=u-m.start,++d),this._dcIndex=d,this._aIndex=l,this._iIndex=u}bindAndClearTexArray(e){const t=this.renderer.texture;for(let r=0;r<e.count;r++)t.bind(e.elements[r],e.ids[r]),e.elements[r]=null;e.count=0}updateGeometry(){const{_packedGeometries:e,_attributeBuffer:t,_indexBuffer:r}=this;N.canUploadSameBuffer?(e[this._flushId]._buffer.update(t.rawBinaryData),e[this._flushId]._indexBuffer.update(r),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,e[this._flushId]=new this.geometryClass),e[this._flushId]._buffer.update(t.rawBinaryData),e[this._flushId]._indexBuffer.update(r),this.renderer.geometry.bind(e[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)}drawBatches(){const e=this._dcIndex,{gl:t,state:r}=this.renderer,s=N._drawCallPool;let i=null;for(let a=0;a<e;a++){const{texArray:o,type:h,size:d,start:l,blend:u}=s[a];i!==o&&(i=o,this.bindAndClearTexArray(o)),this.state.blendMode=u,r.set(this.state),t.drawElements(h,d,t.UNSIGNED_SHORT,l*2)}}flush(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)}start(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.maxTextures),this.renderer.shader.bind(this._shader),N.canUploadSameBuffer&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])}stop(){this.flush()}destroy(){for(let e=0;e<this._packedGeometryPoolSize;e++)this._packedGeometries[e]&&this._packedGeometries[e].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),super.destroy()}getAttributeBuffer(e){const t=we(Math.ceil(e/8)),r=ct(t),s=t*8;this._aBuffers.length<=r&&(this._iBuffers.length=r+1);let i=this._aBuffers[s];return i||(this._aBuffers[s]=i=new mr(s*this.vertexSize*4)),i}getIndexBuffer(e){const t=we(Math.ceil(e/12)),r=ct(t),s=t*12;this._iBuffers.length<=r&&(this._iBuffers.length=r+1);let i=this._iBuffers[r];return i||(this._iBuffers[r]=i=new Uint16Array(s)),i}packInterleavedGeometry(e,t,r,s,i){const{uint32View:a,float32View:o}=t,h=s/this.vertexSize,d=e.uvs,l=e.indices,u=e.vertexData,m=e._texture.baseTexture._batchLocation,E=Math.min(e.worldAlpha,1),S=Pe.shared.setValue(e._tintRGB).toPremultiplied(E,e._texture.baseTexture.alphaMode>0);for(let p=0;p<u.length;p+=2)o[s++]=u[p],o[s++]=u[p+1],o[s++]=d[p],o[s++]=d[p+1],a[s++]=S,o[s++]=m;for(let p=0;p<l.length;p++)r[i++]=h+l[p]}};ue.defaultBatchSize=4096,ue.extension={name:"batch",type:v.RendererPlugin},ue._drawCallPool=[],ue._textureArrayPool=[];let $=ue;x.add($);var Xr=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = textimport"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{R as b,T as A,a as B,D as j,M as O}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import{s as M}from"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{r as X,a as P}from"./@pixi_utils@7.4.2.8d74d95b.js";import{E as v}from"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{e as R}from"./@pixi_constants@7.4.2.8b356162.js";class T{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}clear(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}getRectangle(t){return this.minX>this.maxX||this.minY>this.maxY?b.EMPTY:(t=t||new b(0,0,1,1),t.x=this.minX,t.y=this.minY,t.width=this.maxX-this.minX,t.height=this.maxY-this.minY,t)}addPoint(t){this.minX=Math.min(this.minX,t.x),this.maxX=Math.max(this.maxX,t.x),this.minY=Math.min(this.minY,t.y),this.maxY=Math.max(this.maxY,t.y)}addPointMatrix(t,s){const{a:i,b:e,c:n,d:h,tx:r,ty:a}=t,l=i*s.x+n*s.y+r,d=e*s.x+h*s.y+a;this.minX=Math.min(this.minX,l),this.maxX=Math.max(this.maxX,l),this.minY=Math.min(this.minY,d),this.maxY=Math.max(this.maxY,d)}addQuad(t){let s=this.minX,i=this.minY,e=this.maxX,n=this.maxY,h=t[0],r=t[1];s=h<s?h:s,i=r<i?r:i,e=h>e?h:e,n=r>n?r:n,h=t[2],r=t[3],s=h<s?h:s,i=r<i?r:i,e=h>e?h:e,n=r>n?r:n,h=t[4],r=t[5],s=h<s?h:s,i=r<i?r:i,e=h>e?h:e,n=r>n?r:n,h=t[6],r=t[7],s=h<s?h:s,i=r<i?r:i,e=h>e?h:e,n=r>n?r:n,this.minX=s,this.minY=i,this.maxX=e,this.maxY=n}addFrame(t,s,i,e,n){this.addFrameMatrix(t.worldTransform,s,i,e,n)}addFrameMatrix(t,s,i,e,n){const h=t.a,r=t.b,a=t.c,l=t.d,d=t.tx,x=t.ty;let f=this.minX,u=this.minY,c=this.maxX,p=this.maxY,m=h*s+a*i+d,o=r*s+l*i+x;f=m<f?m:f,u=o<u?o:u,c=m>c?m:c,p=o>p?o:p,m=h*e+a*i+d,o=r*e+l*i+x,f=m<f?m:f,u=o<u?o:u,c=m>c?m:c,p=o>p?o:p,m=h*s+a*n+d,o=r*s+l*n+x,f=m<f?m:f,u=o<u?o:u,c=m>c?m:c,p=o>p?o:p,m=h*e+a*n+d,o=r*e+l*n+x,f=m<f?m:f,u=o<u?o:u,c=m>c?m:c,p=o>p?o:p,this.minX=f,this.minY=u,this.maxX=c,this.maxY=p}addVertexData(t,s,i){let e=this.minX,n=this.minY,h=this.maxX,r=this.maxY;for(let a=s;a<i;a+=2){const l=t[a],d=t[a+1];e=l<e?l:e,n=d<n?d:n,h=l>h?l:h,r=d>r?d:r}this.minX=e,this.minY=n,this.maxX=h,this.maxY=r}addVertices(t,s,i,e){this.addVerticesMatrix(t.worldTransform,s,i,e)}addVerticesMatrix(t,s,i,e,n=0,h=n){const r=t.a,a=t.b,l=t.c,d=t.d,x=t.tx,f=t.ty;let u=this.minX,c=this.minY,p=this.maxX,m=this.maxY;for(let o=i;o<e;o+=2){const C=s[o],D=s[o+1],w=r*C+l*D+x,I=d*D+a*C+f;u=Math.min(u,w-n),p=Math.max(p,w+n),c=Math.min(c,I-h),m=Math.max(m,I+h)}this.minX=u,this.minY=c,this.maxX=p,this.maxY=m}addBounds(t){const s=this.minX,i=this.minY,e=this.maxX,n=this.maxY;this.minX=t.minX<s?t.minX:s,this.minY=t.minY<i?t.minY:i,this.maxX=t.maxX>e?t.maxX:e,this.maxY=t.maxY>n?t.maxY:n}addBoundsMask(t,s){const i=t.minX>s.minX?t.minX:s.minX,e=t.minY>s.minY?t.minY:s.minY,n=t.maxX<s.maxX?t.maxX:s.maxX,h=t.maxY<s.maxY?t.maxY:s.maxY;if(i<=n&&e<=h){const r=this.minX,a=this.minY,l=this.maxX,d=this.maxY;this.minX=i<r?i:r,this.minY=e<a?e:a,this.maxX=n>l?n:l,this.maxY=h>d?h:d}}addBoundsMatrix(t,s){this.addFrameMatrix(s,t.minX,t.minY,t.maxX,t.maxY)}addBoundsArea(t,s){const i=t.minX>s.x?t.minX:s.x,e=t.minY>s.y?t.minY:s.y,n=t.maxX<s.x+s.width?t.maxX:s.x+s.width,h=t.maxY<s.y+s.height?t.maxY:s.y+s.height;if(i<=n&&e<=h){const r=this.minX,a=this.minY,l=this.maxX,d=this.maxY;this.minX=i<r?i:r,this.minY=e<a?e:a,this.maxX=n>l?n:l,this.maxY=h>d?h:d}}pad(t=0,s=t){this.isEmpty()||(this.minX-=t,this.maxX+=t,this.minY-=s,this.maxY+=s)}addFramePad(t,s,i,e,n,h){t-=n,s-=h,i+=n,e+=h,this.minX=this.minX<t?this.minX:t,this.maxX=this.maxX>i?this.maxX:i,this.minY=this.minY<s?this.minY:s,this.maxY=this.maxY>e?this.maxY:e}}class g extends v{constructor(){super(),this.tempDisplayObjectParent=null,this.transform=new A,this.alpha=1,this.visible=!0,this.renderable=!0,this.cullable=!1,this.cullArea=null,this.parent=null,this.worldAlpha=1,this._lastSortedIndex=0,this._zIndex=0,this.filterArea=null,this.filters=null,this._enabledFilters=null,this._bounds=new T,this._localBounds=null,this._boundsID=0,this._boundsRect=null,this._localBoundsRect=null,this._mask=null,this._maskRefCount=0,this._destroyed=!1,this.isSprite=!1,this.isMask=!1}static mixin(t){const s=Object.keys(t);for(let i=0;i<s.length;++i){const e=s[i];Object.defineProperty(g.prototype,e,Object.getOwnPropertyDescriptor(t,e))}}get destroyed(){return this._destroyed}_recursivePostUpdateTransform(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)}updateTransform(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha}getBounds(t,s){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),s||(this._boundsRect||(this._boundsRect=new b),s=this._boundsRect),this._bounds.getRectangle(s)}getLocalBounds(t){var r;t||(this._localBoundsRect||(this._localBoundsRect=new b),t=this._localBoundsRect),this._localBounds||(this._localBounds=new T);const s=this.transform,i=this.parent;this.parent=null,this._tempDisplayObjectParent.worldAlpha=(r=i==null?void 0:i.worldAlpha)!=null?r:1,this.transform=this._tempDisplayObjectParent.transform;const e=this._bounds,n=this._boundsID;this._bounds=this._localBounds;const h=this.getBounds(!1,t);return this.parent=i,this.transform=s,this._bounds=e,this._bounds.updateID+=this._boundsID-n,h}toGlobal(t,s,i=!1){return i||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,s)}toLocal(t,s,i,e){return s&&(t=s.toGlobal(t,i,e)),e||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,i)}setParent(t){if(!t||!t.addChild)throw new Error("setParent: Argument must be a Container");return t.addChild(this),t}removeFromParent(){var t;(t=this.parent)==null||t.removeChild(this)}setTransform(t=0,s=0,i=1,e=1,n=0,h=0,r=0,a=0,l=0){return this.position.x=t,this.position.y=s,this.scale.x=i||1,this.scale.y=e||1,this.rotation=n,this.skew.x=h,this.skew.y=r,this.pivot.x=a,this.pivot.y=l,this}destroy(t){this.removeFromParent(),this._destroyed=!0,this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.cullArea=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.eventMode="auto",this.interactiveChildren=!1,this.emit("destroyed"),this.removeAllListeners()}get _tempDisplayObjectParent(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new F),this.tempDisplayObjectParent}enableTempParent(){const t=this.parent;return this.parent=this._tempDisplayObjectParent,t}disableTempParent(t){this.parent=t}get x(){return this.position.x}set x(t){this.transform.position.x=t}get y(){return this.position.y}set y(t){this.transform.position.y=t}get worldTransform(){return this.transform.worldTransform}get localTransform(){return this.transform.localTransform}get position(){return this.transform.position}set position(t){this.transform.position.copyFrom(t)}get scale(){return this.transform.scale}set scale(t){this.transform.scale.copyFrom(t)}get pivot(){return this.transform.pivot}set pivot(t){this.transform.pivot.copyFrom(t)}get skew(){return this.transform.skew}set skew(t){this.transform.skew.copyFrom(t)}get rotation(){return this.transform.rotation}set rotation(t){this.transform.rotation=t}get angle(){return this.transform.rotation*B}set angle(t){this.transform.rotation=t*j}get zIndex(){return this._zIndex}set zIndex(t){this._zIndex!==t&&(this._zIndex=t,this.parent&&(this.parent.sortDirty=!0))}get worldVisible(){let t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0}get mask(){return this._mask}set mask(t){if(this._mask!==t){if(this._mask){const s=this._mask.isMaskData?this._mask.maskObject:this._mask;s&&(s._maskRefCount--,s._maskRefCount===0&&(s.renderable=!0,s.isMask=!1))}if(this._mask=t,this._mask){const s=this._mask.isMaskData?this._mask.maskObject:this._mask;s&&(s._maskRefCount===0&&(s.renderable=!1,s.isMask=!0),s._maskRefCount++)}}}}class F extends g{constructor(){super(...arguments),this.sortDirty=null}}g.prototype.displayObjectUpdateTransform=g.prototype.updateTransform;const E=new O;function S(_,t){return _.zIndex===t.zIndex?_._lastSortedIndex-t._lastSortedIndex:_.zIndex-t.zIndex}const k=class y extends g{constructor(){super(),this.children=[],this.sortableChildren=y.defaultSortableChildren,this.sortDirty=!1}onChildrenChange(t){}addChild(...t){if(t.length>1)for(let s=0;s<t.length;s++)this.addChild(t[s]);else{const s=t[0];s.parent&&s.parent.removeChild(s),s.parent=this,this.sortDirty=!0,s.transform._parentID=-1,this.children.push(s),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",s,this,this.children.length-1),s.emit("added",this)}return t[0]}addChildAt(t,s){if(s<0||s>this.children.length)throw new Error(`${t}addChildAt: The index ${s} supplied is out of bounds ${this.children.length}`);return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,this.children.splice(s,0,t),this._boundsID++,this.onChildrenChange(s),t.emit("added",this),this.emit("childAdded",t,this,s),t}swapChildren(t,s){if(t===s)return;const i=this.getChildIndex(t),e=this.getChildIndex(s);this.children[i]=s,this.children[e]=t,this.onChildrenChange(i<e?i:e)}getChildIndex(t){const s=this.children.indexOf(t);if(s===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return s}setChildIndex(t,s){if(s<0||s>=this.children.length)throw new Error(`The index ${s} supplied is out of bounds ${this.children.length}`);const i=this.getChildIndex(t);X(this.children,i,1),this.children.splice(s,0,t),this.onChildrenChange(s)}getChildAt(t){if(t<0||t>=this.children.length)throw new Error(`getChildAt: Index (${t}) does not exist.`);return this.children[t]}removeChild(...t){if(t.length>1)for(let s=0;s<t.length;s++)this.removeChild(t[s]);else{const s=t[0],i=this.children.indexOf(s);if(i===-1)return null;s.parent=null,s.transform._parentID=-1,X(this.children,i,1),this._boundsID++,this.onChildrenChange(i),s.emit("removed",this),this.emit("childRemoved",s,this,i)}return t[0]}removeChildAt(t){const s=this.getChildAt(t);return s.parent=null,s.transform._parentID=-1,X(this.children,t,1),this._boundsID++,this.onChildrenChange(t),s.emit("removed",this),this.emit("childRemoved",s,this,t),s}removeChildren(t=0,s=this.children.length){const i=t,e=s,n=e-i;let h;if(n>0&&n<=e){h=this.children.splice(i,n);for(let r=0;r<h.length;++r)h[r].parent=null,h[r].transform&&(h[r].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(let r=0;r<h.length;++r)h[r].emit("removed",this),this.emit("childRemoved",h[r],this,r);return h}else if(n===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")}sortChildren(){let t=!1;for(let s=0,i=this.children.length;s<i;++s){const e=this.children[s];e._lastSortedIndex=s,!t&&e.zIndex!==0&&(t=!0)}t&&this.children.length>1&&this.children.sort(S),this.sortDirty=!1}updateTransform(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(let t=0,s=this.children.length;t<s;++t){const i=this.children[t];i.visible&&i.updateTransform()}}calculateBounds(){this._bounds.clear(),this._calculateBounds();for(let t=0;t<this.children.length;t++){const s=this.children[t];if(!(!s.visible||!s.renderable))if(s.calculateBounds(),s._mask){const i=s._mask.isMaskData?s._mask.maskObject:s._mask;i?(i.calculateBounds(),this._bounds.addBoundsMask(s._bounds,i._bounds)):this._bounds.addBounds(s._bounds)}else s.filterArea?this._bounds.addBoundsArea(s._bounds,s.filterArea):this._bounds.addBounds(s._bounds)}this._bounds.updateID=this._boundsID}getLocalBounds(t,s=!1){const i=super.getLocalBounds(t);if(!s)for(let e=0,n=this.children.length;e<n;++e){const h=this.children[e];h.visible&&h.updateTransform()}return i}_calculateBounds(){}_renderWithCulling(t){const s=t.renderTexture.sourceFrame;if(!(s.width>0&&s.height>0))return;let i,e;this.cullArea?(i=this.cullArea,e=this.worldTransform):this._render!==y.prototype._render&&(i=this.getBounds(!0));const n=t.projection.transform;if(n&&(e?(e=E.copyFrom(e),e.prepend(n)):e=n),i&&s.intersects(i,e))this._render(t);else if(this.cullArea)return;for(let h=0,r=this.children.length;h<r;++h){const a=this.children[h],l=a.cullable;a.cullable=l||!this.cullArea,a.render(t),a.cullable=l}}render(t){var s;if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||(s=this.filters)!=null&&s.length)this.renderAdvanced(t);else if(this.cullable)this._renderWithCulling(t);else{this._render(t);for(let i=0,e=this.children.length;i<e;++i)this.children[i].render(t)}}renderAdvanced(t){var n,h,r;const s=this.filters,i=this._mask;if(s){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(let a=0;a<s.length;a++)s[a].enabled&&this._enabledFilters.push(s[a])}const e=s&&((n=this._enabledFilters)==null?void 0:n.length)||i&&(!i.isMaskData||i.enabled&&(i.autoDetect||i.type!==R.NONE));if(e&&t.batch.flush(),s&&((h=this._enabledFilters)!=null&&h.length)&&t.filter.push(this,this._enabledFilters),i&&t.mask.push(this,this._mask),this.cullable)this._renderWithCulling(t);else{this._render(t);for(let a=0,l=this.children.length;a<l;++a)this.children[a].render(t)}e&&t.batch.flush(),i&&t.mask.pop(this),s&&((r=this._enabledFilters)!=null&&r.length)&&t.filter.pop()}_render(t){}destroy(t){super.destroy(),this.sortDirty=!1;const s=typeof t=="boolean"?t:t==null?void 0:t.children,i=this.removeChildren(0,this.children.length);if(s)for(let e=0;e<i.length;++e)i[e].destroy(t)}get width(){return this.scale.x*this.getLocalBounds().width}set width(t){const s=this.getLocalBounds().width;s!==0?this.scale.x=t/s:this.scale.x=1,this._width=t}get height(){return this.scale.y*this.getLocalBounds().height}set height(t){const s=this.getLocalBounds().height;s!==0?this.scale.y=t/s:this.scale.y=1,this._height=t}};k.defaultSortableChildren=!1;let Y=k;Y.prototype.containerUpdateTransform=Y.prototype.updateTransform;Object.defineProperties(M,{SORTABLE_CHILDREN:{get(){return Y.defaultSortableChildren},set(_){P("7.1.0","settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"),Y.defaultSortableChildren=_}}});export{T as B,Y as C,g as D};
import"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{P as g}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import{T as _,U as D}from"./@pixi_ticker@7.4.2.206acfd7.js";import{a as k}from"./@pixi_utils@7.4.2.8d74d95b.js";import{E as B}from"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{E as A,e as L}from"./@pixi_extensions@7.4.2.089ce807.js";import{D as O}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";class S{constructor(){this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this.tickerAdded=!1,this._pauseUpdate=!0}init(t){this.removeTickerListener(),this.events=t,this.interactionFrequency=10,this._deltaTime=0,this._didMove=!1,this.tickerAdded=!1,this._pauseUpdate=!0}get pauseUpdate(){return this._pauseUpdate}set pauseUpdate(t){this._pauseUpdate=t}addTickerListener(){this.tickerAdded||!this.domElement||(_.system.add(this.tickerUpdate,this,D.INTERACTION),this.tickerAdded=!0)}removeTickerListener(){this.tickerAdded&&(_.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)}pointerMoved(){this._didMove=!0}update(){if(!this.domElement||this._pauseUpdate)return;if(this._didMove){this._didMove=!1;return}const t=this.events.rootPointerEvent;this.events.supportsTouchEvents&&t.pointerType==="touch"||globalThis.document.dispatchEvent(new PointerEvent("pointermove",{clientX:t.clientX,clientY:t.clientY}))}tickerUpdate(t){this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())}}const E=new S;class T{constructor(t){this.bubbles=!0,this.cancelBubble=!0,this.cancelable=!1,this.composed=!1,this.defaultPrevented=!1,this.eventPhase=T.prototype.NONE,this.propagationStopped=!1,this.propagationImmediatelyStopped=!1,this.layer=new g,this.page=new g,this.NONE=0,this.CAPTURING_PHASE=1,this.AT_TARGET=2,this.BUBBLING_PHASE=3,this.manager=t}get layerX(){return this.layer.x}get layerY(){return this.layer.y}get pageX(){return this.page.x}get pageY(){return this.page.y}get data(){return this}composedPath(){return this.manager&&(!this.path||this.path[this.path.length-1]!==this.target)&&(this.path=this.target?this.manager.propagationPath(this.target):[]),this.path}initEvent(t,e,n){throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}initUIEvent(t,e,n,o,i){throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}preventDefault(){this.nativeEvent instanceof Event&&this.nativeEvent.cancelable&&this.nativeEvent.preventDefault(),this.defaultPrevented=!0}stopImmediatePropagation(){this.propagationImmediatelyStopped=!0}stopPropagation(){this.propagationStopped=!0}}class P extends T{constructor(){super(...arguments),this.client=new g,this.movement=new g,this.offset=new g,this.global=new g,this.screen=new g}get clientX(){return this.client.x}get clientY(){return this.client.y}get x(){return this.clientX}get y(){return this.clientY}get movementX(){return this.movement.x}get movementY(){return this.movement.y}get offsetX(){return this.offset.x}get offsetY(){return this.offset.y}get globalX(){return this.global.x}get globalY(){return this.global.y}get screenX(){return this.screen.x}get screenY(){return this.screen.y}getLocalPosition(t,e,n){return t.worldTransform.applyInverse(n||this.global,e)}getModifierState(t){return"getModifierState"in this.nativeEvent&&this.nativeEvent.getModifierState(t)}initMouseEvent(t,e,n,o,i,s,a,l,d,m,p,c,h,u,F){throw new Error("Method not implemented.")}}class v extends P{constructor(){super(...arguments),this.width=0,this.height=0,this.isPrimary=!1}getCoalescedEvents(){return this.type==="pointermove"||this.type==="mousemove"||this.type==="touchmove"?[this]:[]}getPredictedEvents(){throw new Error("getPredictedEvents is not supported!")}}class y extends P{constructor(){super(...arguments),this.DOM_DELTA_PIXEL=0,this.DOM_DELTA_LINE=1,this.DOM_DELTA_PAGE=2}}y.DOM_DELTA_PIXEL=0,y.DOM_DELTA_LINE=1,y.DOM_DELTA_PAGE=2;const U=2048,R=new g,f=new g;class X{constructor(t){this.dispatch=new B,this.moveOnAll=!1,this.enableGlobalMoveEvents=!0,this.mappingState={trackingData:{}},this.eventPool=new Map,this._allInteractiveElements=[],this._hitElements=[],this._isPointerMoveEvent=!1,this.rootTarget=t,this.hitPruneFn=this.hitPruneFn.bind(this),this.hitTestFn=this.hitTestFn.bind(this),this.mapPointerDown=this.mapPointerDown.bind(this),this.mapPointerMove=this.mapPointerMove.bind(this),this.mapPointerOut=this.mapPointerOut.bind(this),this.mapPointerOver=this.mapPointerOver.bind(this),this.mapPointerUp=this.mapPointerUp.bind(this),this.mapPointerUpOutside=this.mapPointerUpOutside.bind(this),this.mapWheel=this.mapWheel.bind(this),this.mappingTable={},this.addEventMapping("pointerdown",this.mapPointerDown),this.addEventMapping("pointermove",this.mapPointerMove),this.addEventMapping("pointerout",this.mapPointerOut),this.addEventMapping("pointerleave",this.mapPointerOut),this.addEventMapping("pointerover",this.mapPointerOver),this.addEventMapping("pointerup",this.mapPointerUp),this.addEventMapping("pointerupoutside",this.mapPointerUpOutside),this.addEventMapping("wheel",this.mapWheel)}addEventMapping(t,e){this.mappingTable[t]||(this.mappingTable[t]=[]),this.mappingTable[t].push({fn:e,priority:0}),this.mappingTable[t].sort((n,o)=>n.priority-o.priority)}dispatchEvent(t,e){t.propagationStopped=!1,t.propagationImmediatelyStopped=!1,this.propagate(t,e),this.dispatch.emit(e||t.type,t)}mapEvent(t){if(!this.rootTarget)return;const e=this.mappingTable[t.type];if(e)for(let n=0,o=e.length;n<o;n++)e[n].fn(t);else console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`)}hitTest(t,e){E.pauseUpdate=!0;const n=this._isPointerMoveEvent&&this.enableGlobalMoveEvents?"hitTestMoveRecursive":"hitTestRecursive",o=this[n](this.rootTarget,this.rootTarget.eventMode,R.set(t,e),this.hitTestFn,this.hitPruneFn);return o&&o[0]}propagate(t,e){if(!t.target)return;const n=t.composedPath();t.eventPhase=t.CAPTURING_PHASE;for(let o=0,i=n.length-1;o<i;o++)if(t.currentTarget=n[o],this.notifyTarget(t,e),t.propagationStopped||t.propagationImmediatelyStopped)return;if(t.eventPhase=t.AT_TARGET,t.currentTarget=t.target,this.notifyTarget(t,e),!(t.propagationStopped||t.propagationImmediatelyStopped)){t.eventPhase=t.BUBBLING_PHASE;for(let o=n.length-2;o>=0;o--)if(t.currentTarget=n[o],this.notifyTarget(t,e),t.propagationStopped||t.propagationImmediatelyStopped)return}}all(t,e,n=this._allInteractiveElements){if(n.length===0)return;t.eventPhase=t.BUBBLING_PHASE;const o=Array.isArray(e)?e:[e];for(let i=n.length-1;i>=0;i--)o.forEach(s=>{t.currentTarget=n[i],this.notifyTarget(t,s)})}propagationPath(t){const e=[t];for(let n=0;n<U&&t!==this.rootTarget;n++){if(!t.parent)throw new Error("Cannot find propagation path to disconnected target");e.push(t.parent),t=t.parent}return e.reverse(),e}hitTestMoveRecursive(t,e,n,o,i,s=!1){let a=!1;if(this._interactivePrune(t))return null;if((t.eventMode==="dynamic"||e==="dynamic")&&(E.pauseUpdate=!1),t.interactiveChildren&&t.children){const m=t.children;for(let p=m.length-1;p>=0;p--){const c=m[p],h=this.hitTestMoveRecursive(c,this._isInteractive(e)?e:c.eventMode,n,o,i,s||i(t,n));if(h){if(h.length>0&&!h[h.length-1].parent)continue;const u=t.isInteractive();(h.length>0||u)&&(u&&this._allInteractiveElements.push(t),h.push(t)),this._hitElements.length===0&&(this._hitElements=h),a=!0}}}const l=this._isInteractive(e),d=t.isInteractive();return l&&d&&this._allInteractiveElements.push(t),s||this._hitElements.length>0?null:a?this._hitElements:l&&!i(t,n)&&o(t,n)?d?[t]:[]:null}hitTestRecursive(t,e,n,o,i){if(this._interactivePrune(t)||i(t,n))return null;if((t.eventMode==="dynamic"||e==="dynamic")&&(E.pauseUpdate=!1),t.interactiveChildren&&t.children){const l=t.children;for(let d=l.length-1;d>=0;d--){const m=l[d],p=this.hitTestRecursive(m,this._isInteractive(e)?e:m.eventMode,n,o,i);if(p){if(p.length>0&&!p[p.length-1].parent)continue;const c=t.isInteractive();return(p.length>0||c)&&p.push(t),p}}}const s=this._isInteractive(e),a=t.isInteractive();return s&&o(t,n)?a?[t]:[]:null}_isInteractive(t){return t==="static"||t==="dynamic"}_interactivePrune(t){return!!(!t||t.isMask||!t.visible||!t.renderable||t.eventMode==="none"||t.eventMode==="passive"&&!t.interactiveChildren||t.isMask)}hitPruneFn(t,e){var n;if(t.hitArea&&(t.worldTransform.applyInverse(e,f),!t.hitArea.contains(f.x,f.y)))return!0;if(t._mask){const o=t._mask.isMaskData?t._mask.maskObject:t._mask;if(o&&!((n=o.containsPoint)!=null&&n.call(o,e)))return!0}return!1}hitTestFn(t,e){return t.eventMode==="passive"?!1:t.hitArea?!0:t.containsPoint?t.containsPoint(e):!1}notifyTarget(t,e){var i,s;e=e!=null?e:t.type;const n=`on${e}`;(s=(i=t.currentTarget)[n])==null||s.call(i,t);const o=t.eventPhase===t.CAPTURING_PHASE||t.eventPhase===t.AT_TARGET?`${e}capture`:e;this.notifyListeners(t,o),t.eventPhase===t.AT_TARGET&&this.notifyListeners(t,e)}mapPointerDown(t){if(!(t instanceof v)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const e=this.createPointerEvent(t);if(this.dispatchEvent(e,"pointerdown"),e.pointerType==="touch")this.dispatchEvent(e,"touchstart");else if(e.pointerType==="mouse"||e.pointerType==="pen"){const o=e.button===2;this.dispatchEvent(e,o?"rightdown":"mousedown")}const n=this.trackingData(t.pointerId);n.pressTargetsByButton[t.button]=e.composedPath(),this.freeEvent(e)}mapPointerMove(t){var l,d,m;if(!(t instanceof v)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}this._allInteractiveElements.length=0,this._hitElements.length=0,this._isPointerMoveEvent=!0;const e=this.createPointerEvent(t);this._isPointerMoveEvent=!1;const n=e.pointerType==="mouse"||e.pointerType==="pen",o=this.trackingData(t.pointerId),i=this.findMountedTarget(o.overTargets);if(((l=o.overTargets)==null?void 0:l.length)>0&&i!==e.target){const p=t.type==="mousemove"?"mouseout":"pointerout",c=this.createPointerEvent(t,p,i);if(this.dispatchEvent(c,"pointerout"),n&&this.dispatchEvent(c,"mouseout"),!e.composedPath().includes(i)){const h=this.createPointerEvent(t,"pointerleave",i);for(h.eventPhase=h.AT_TARGET;h.target&&!e.composedPath().includes(h.target);)h.currentTarget=h.target,this.notifyTarget(h),n&&this.notifyTarget(h,"mouseleave"),h.target=h.target.parent;this.freeEvent(h)}this.freeEvent(c)}if(i!==e.target){const p=t.type==="mousemove"?"mouseover":"pointerover",c=this.clonePointerEvent(e,p);this.dispatchEvent(c,"pointerover"),n&&this.dispatchEvent(c,"mouseover");let h=i==null?void 0:i.parent;for(;h&&h!==this.rootTarget.parent&&h!==e.target;)h=h.parent;if(!h||h===this.rootTarget.parent){const u=this.clonePointerEvent(e,"pointerenter");for(u.eventPhase=u.AT_TARGET;u.target&&u.target!==i&&u.target!==this.rootTarget.parent;)u.currentTarget=u.target,this.notifyTarget(u),n&&this.notifyTarget(u,"mouseenter"),u.target=u.target.parent;this.freeEvent(u)}this.freeEvent(c)}const s=[],a=(d=this.enableGlobalMoveEvents)!=null?d:!0;this.moveOnAll?s.push("pointermove"):this.dispatchEvent(e,"pointermove"),a&&s.push("globalpointermove"),e.pointerType==="touch"&&(this.moveOnAll?s.splice(1,0,"touchmove"):this.dispatchEvent(e,"touchmove"),a&&s.push("globaltouchmove")),n&&(this.moveOnAll?s.splice(1,0,"mousemove"):this.dispatchEvent(e,"mousemove"),a&&s.push("globalmousemove"),this.cursor=(m=e.target)==null?void 0:m.cursor),s.length>0&&this.all(e,s),this._allInteractiveElements.length=0,this._hitElements.length=0,o.overTargets=e.composedPath(),this.freeEvent(e)}mapPointerOver(t){var s;if(!(t instanceof v)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const e=this.trackingData(t.pointerId),n=this.createPointerEvent(t),o=n.pointerType==="mouse"||n.pointerType==="pen";this.dispatchEvent(n,"pointerover"),o&&this.dispatchEvent(n,"mouseover"),n.pointerType==="mouse"&&(this.cursor=(s=n.target)==null?void 0:s.cursor);const i=this.clonePointerEvent(n,"pointerenter");for(i.eventPhase=i.AT_TARGET;i.target&&i.target!==this.rootTarget.parent;)i.currentTarget=i.target,this.notifyTarget(i),o&&this.notifyTarget(i,"mouseenter"),i.target=i.target.parent;e.overTargets=n.composedPath(),this.freeEvent(n),this.freeEvent(i)}mapPointerOut(t){if(!(t instanceof v)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const e=this.trackingData(t.pointerId);if(e.overTargets){const n=t.pointerType==="mouse"||t.pointerType==="pen",o=this.findMountedTarget(e.overTargets),i=this.createPointerEvent(t,"pointerout",o);this.dispatchEvent(i),n&&this.dispatchEvent(i,"mouseout");const s=this.createPointerEvent(t,"pointerleave",o);for(s.eventPhase=s.AT_TARGET;s.target&&s.target!==this.rootTarget.parent;)s.currentTarget=s.target,this.notifyTarget(s),n&&this.notifyTarget(s,"mouseleave"),s.target=s.target.parent;e.overTargets=null,this.freeEvent(i),this.freeEvent(s)}this.cursor=null}mapPointerUp(t){if(!(t instanceof v)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const e=performance.now(),n=this.createPointerEvent(t);if(this.dispatchEvent(n,"pointerup"),n.pointerType==="touch")this.dispatchEvent(n,"touchend");else if(n.pointerType==="mouse"||n.pointerType==="pen"){const a=n.button===2;this.dispatchEvent(n,a?"rightup":"mouseup")}const o=this.trackingData(t.pointerId),i=this.findMountedTarget(o.pressTargetsByButton[t.button]);let s=i;if(i&&!n.composedPath().includes(i)){let a=i;for(;a&&!n.composedPath().includes(a);){if(n.currentTarget=a,this.notifyTarget(n,"pointerupoutside"),n.pointerType==="touch")this.notifyTarget(n,"touchendoutside");else if(n.pointerType==="mouse"||n.pointerType==="pen"){const l=n.button===2;this.notifyTarget(n,l?"rightupoutside":"mouseupoutside")}a=a.parent}delete o.pressTargetsByButton[t.button],s=a}if(s){const a=this.clonePointerEvent(n,"click");a.target=s,a.path=null,o.clicksByButton[t.button]||(o.clicksByButton[t.button]={clickCount:0,target:a.target,timeStamp:e});const l=o.clicksByButton[t.button];if(l.target===a.target&&e-l.timeStamp<200?++l.clickCount:l.clickCount=1,l.target=a.target,l.timeStamp=e,a.detail=l.clickCount,a.pointerType==="mouse"){const d=a.button===2;this.dispatchEvent(a,d?"rightclick":"click")}else a.pointerType==="touch"&&this.dispatchEvent(a,"tap");this.dispatchEvent(a,"pointertap"),this.freeEvent(a)}this.freeEvent(n)}mapPointerUpOutside(t){if(!(t instanceof v)){console.warn("EventBoundary cannot map a non-pointer event as a pointer event");return}const e=this.trackingData(t.pointerId),n=this.findMountedTarget(e.pressTargetsByButton[t.button]),o=this.createPointerEvent(t);if(n){let i=n;for(;i;)o.currentTarget=i,this.notifyTarget(o,"pointerupoutside"),o.pointerType==="touch"?this.notifyTarget(o,"touchendoutside"):(o.pointerType==="mouse"||o.pointerType==="pen")&&this.notifyTarget(o,o.button===2?"rightupoutside":"mouseupoutside"),i=i.parent;delete e.pressTargetsByButton[t.button]}this.freeEvent(o)}mapWheel(t){if(!(t instanceof y)){console.warn("EventBoundary cannot map a non-wheel event as a wheel event");return}const e=this.createWheelEvent(t);this.dispatchEvent(e),this.freeEvent(e)}findMountedTarget(t){if(!t)return null;let e=t[0];for(let n=1;n<t.length&&t[n].parent===e;n++)e=t[n];return e}createPointerEvent(t,e,n){var i;const o=this.allocateEvent(v);return this.copyPointerData(t,o),this.copyMouseData(t,o),this.copyData(t,o),o.nativeEvent=t.nativeEvent,o.originalEvent=t,o.target=(i=n!=null?n:this.hitTest(o.global.x,o.global.y))!=null?i:this._hitElements[0],typeof e=="string"&&(o.type=e),o}createWheelEvent(t){const e=this.allocateEvent(y);return this.copyWheelData(t,e),this.copyMouseData(t,e),this.copyData(t,e),e.nativeEvent=t.nativeEvent,e.originalEvent=t,e.target=this.hitTest(e.global.x,e.global.y),e}clonePointerEvent(t,e){const n=this.allocateEvent(v);return n.nativeEvent=t.nativeEvent,n.originalEvent=t.originalEvent,this.copyPointerData(t,n),this.copyMouseData(t,n),this.copyData(t,n),n.target=t.target,n.path=t.composedPath().slice(),n.type=e!=null?e:n.type,n}copyWheelData(t,e){e.deltaMode=t.deltaMode,e.deltaX=t.deltaX,e.deltaY=t.deltaY,e.deltaZ=t.deltaZ}copyPointerData(t,e){t instanceof v&&e instanceof v&&(e.pointerId=t.pointerId,e.width=t.width,e.height=t.height,e.isPrimary=t.isPrimary,e.pointerType=t.pointerType,e.pressure=t.pressure,e.tangentialPressure=t.tangentialPressure,e.tiltX=t.tiltX,e.tiltY=t.tiltY,e.twist=t.twist)}copyMouseData(t,e){t instanceof P&&e instanceof P&&(e.altKey=t.altKey,e.button=t.button,e.buttons=t.buttons,e.client.copyFrom(t.client),e.ctrlKey=t.ctrlKey,e.metaKey=t.metaKey,e.movement.copyFrom(t.movement),e.screen.copyFrom(t.screen),e.shiftKey=t.shiftKey,e.global.copyFrom(t.global))}copyData(t,e){e.isTrusted=t.isTrusted,e.srcElement=t.srcElement,e.timeStamp=performance.now(),e.type=t.type,e.detail=t.detail,e.view=t.view,e.which=t.which,e.layer.copyFrom(t.layer),e.page.copyFrom(t.page)}trackingData(t){return this.mappingState.trackingData[t]||(this.mappingState.trackingData[t]={pressTargetsByButton:{},clicksByButton:{},overTarget:null}),this.mappingState.trackingData[t]}allocateEvent(t){this.eventPool.has(t)||this.eventPool.set(t,[]);const e=this.eventPool.get(t).pop()||new t(this);return e.eventPhase=e.NONE,e.currentTarget=null,e.path=null,e.target=null,e}freeEvent(t){if(t.manager!==this)throw new Error("It is illegal to free an event not managed by this EventBoundary!");const e=t.constructor;this.eventPool.has(e)||this.eventPool.set(e,[]),this.eventPool.get(e).push(t)}notifyListeners(t,e){const n=t.currentTarget._events[e];if(n&&t.currentTarget.isInteractive())if("fn"in n)n.once&&t.currentTarget.removeListener(e,n.fn,void 0,!0),n.fn.call(n.context,t);else for(let o=0,i=n.length;o<i&&!t.propagationImmediatelyStopped;o++)n[o].once&&t.currentTarget.removeListener(e,n[o].fn,void 0,!0),n[o].fn.call(n[o].context,t)}}const Y=1,C={touchstart:"pointerdown",touchend:"pointerup",touchendoutside:"pointerupoutside",touchmove:"pointermove",touchcancel:"pointercancel"},b=class w{constructor(t){this.supportsTouchEvents="ontouchstart"in globalThis,this.supportsPointerEvents=!!globalThis.PointerEvent,this.domElement=null,this.resolution=1,this.renderer=t,this.rootBoundary=new X(null),E.init(this),this.autoPreventDefault=!0,this.eventsAdded=!1,this.rootPointerEvent=new v(null),this.rootWheelEvent=new y(null),this.cursorStyles={default:"inherit",pointer:"pointer"},this.features=new Proxy({...w.defaultEventFeatures},{set:(e,n,o)=>(n==="globalMove"&&(this.rootBoundary.enableGlobalMoveEvents=o),e[n]=o,!0)}),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onPointerOverOut=this.onPointerOverOut.bind(this),this.onWheel=this.onWheel.bind(this)}static get defaultEventMode(){return this._defaultEventMode}init(t){var o,i;const{view:e,resolution:n}=this.renderer;this.setTargetElement(e),this.resolution=n,w._defaultEventMode=(o=t.eventMode)!=null?o:"auto",Object.assign(this.features,(i=t.eventFeatures)!=null?i:{}),this.rootBoundary.enableGlobalMoveEvents=this.features.globalMove}resolutionChange(t){this.resolution=t}destroy(){this.setTargetElement(null),this.renderer=null}setCursor(t){t=t||"default";let e=!0;if(globalThis.OffscreenCanvas&&this.domElement instanceof OffscreenCanvas&&(e=!1),this.currentCursor===t)return;this.currentCursor=t;const n=this.cursorStyles[t];if(n)switch(typeof n){case"string":e&&(this.domElement.style.cursor=n);break;case"function":n(t);break;case"object":e&&Object.assign(this.domElement.style,n);break}else e&&typeof t=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.domElement.style.cursor=t)}get pointer(){return this.rootPointerEvent}onPointerDown(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const e=this.normalizeToPointerData(t);this.autoPreventDefault=!0,this.eventsAdded=!1,this.rootPointerEvent=new v(null),this.rootWheelEvent=new y(null),this.cursorStyles={default:"inherit",pointer:"pointer"},this.features=new Proxy({...w.defaultEventFeatures},{set:(e,n,o)=>(n==="globalMove"&&(this.rootBoundary.enableGlobalMoveEvents=o),e[n]=o,!0)}),this.onPointerDown=this.onPointerDown.bind(this),this.onPointerMove=this.onPointerMove.bind(this),this.onPointerUp=this.onPointerUp.bind(this),this.onPointerOverOut=this.onPointerOverOut.bind(this),this.onWheel=this.onWheel.bind(this)}static get defaultEventMode(){return this._defaultEventMode}init(t){var o,i;const{view:e,resolution:n}=this.renderer;this.setTargetElement(e),this.resolution=n,w._defaultEventMode=(o=t.eventMode)!=null?o:"auto",Object.assign(this.features,(i=t.eventFeatures)!=null?i:{}),this.rootBoundary.enableGlobalMoveEvents=this.features.globalMove}resolutionChange(t){this.resolution=t}destroy(){this.setTargetElement(null),this.renderer=null}setCursor(t){t=t||"default";let e=!0;if(globalThis.OffscreenCanvas&&this.domElement instanceof OffscreenCanvas&&(e=!1),this.currentCursor===t)return;this.currentCursor=t;const n=this.cursorStyles[t];if(n)switch(typeof n){case"string":e&&(this.domElement.style.cursor=n);break;case"function":n(t);break;case"object":e&&Object.assign(this.domElement.style,n);break}else e&&typeof t=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.domElement.style.cursor=t)}get pointer(){return this.rootPointerEvent}onPointerDown(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const e=this.normalizeToPointerData(t);this.autoPreventDefault&&e[0].isNormalized&&(t.cancelable||!("cancelable"in t))&&t.preventDefault();for(let n=0,o=e.length;n<o;n++){const i=e[n],s=this.bootstrapEvent(this.rootPointerEvent,i);this.rootBoundary.mapEvent(s)}this.setCursor(this.rootBoundary.cursor)}onPointerMove(t){if(!this.features.move)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,E.pointerMoved();const e=this.normalizeToPointerData(t);for(let n=0,o=e.length;n<o;n++){const i=this.bootstrapEvent(this.rootPointerEvent,e[n]);this.rootBoundary.mapEvent(i)}this.setCursor(this.rootBoundary.cursor)}onPointerUp(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let e=t.target;t.composedPath&&t.composedPath().length>0&&(e=t.composedPath()[0]);const n=e!==this.domElement?"outside":"",o=this.normalizeToPointerData(t);for(let i=0,s=o.length;i<s;i++){const a=this.bootstrapEvent(this.rootPointerEvent,o[i]);a.type+=n,this.rootBoundary.mapEvent(a)}this.setCursor(this.rootBoundary.cursor)}onPointerOverOut(t){if(!this.features.click)return;this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;const e=this.normalizeToPointerData(t);for(let n=0,o=e.length;n<o;n++){const i=this.bootstrapEvent(this.rootPointerEvent,e[n]);this.rootBoundary.mapEvent(i)}this.setCursor(this.rootBoundary.cursor)}onWheel(t){if(!this.features.wheel)return;const e=this.normalizeWheelEvent(t);this.rootBoundary.rootTarget=this.renderer.lastObjectRendered,this.rootBoundary.mapEvent(e)}setTargetElement(t){this.removeEvents(),this.domElement=t,E.domElement=t,this.addEvents()}addEvents(){if(this.eventsAdded||!this.domElement)return;E.addTickerListener();const t=this.domElement.style;t&&(globalThis.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none")),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this.onPointerMove,!0),this.domElement.addEventListener("pointerdown",this.onPointerDown,!0),this.domElement.addEventListener("pointerleave",this.onPointerOverOut,!0),this.domElement.addEventListener("pointerover",this.onPointerOverOut,!0),globalThis.addEventListener("pointerup",this.onPointerUp,!0)):(globalThis.document.addEventListener("mousemove",this.onPointerMove,!0),this.domElement.addEventListener("mousedown",this.onPointerDown,!0),this.domElement.addEventListener("mouseout",this.onPointerOverOut,!0),this.domElement.addEventListener("mouseover",this.onPointerOverOut,!0),globalThis.addEventListener("mouseup",this.onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.addEventListener("touchstart",this.onPointerDown,!0),this.domElement.addEventListener("touchend",this.onPointerUp,!0),this.domElement.addEventListener("touchmove",this.onPointerMove,!0))),this.domElement.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0}),this.eventsAdded=!0}removeEvents(){if(!this.eventsAdded||!this.domElement)return;E.removeTickerListener();const t=this.domElement.style;globalThis.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction=""),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this.onPointerMove,!0),this.domElement.removeEventListener("pointerdown",this.onPointerDown,!0),this.domElement.removeEventListener("pointerleave",this.onPointerOverOut,!0),this.domElement.removeEventListener("pointerover",this.onPointerOverOut,!0),globalThis.removeEventListener("pointerup",this.onPointerUp,!0)):(globalThis.document.removeEventListener("mousemove",this.onPointerMove,!0),this.domElement.removeEventListener("mousedown",this.onPointerDown,!0),this.domElement.removeEventListener("mouseout",this.onPointerOverOut,!0),this.domElement.removeEventListener("mouseover",this.onPointerOverOut,!0),globalThis.removeEventListener("mouseup",this.onPointerUp,!0),this.supportsTouchEvents&&(this.domElement.removeEventListener("touchstart",this.onPointerDown,!0),this.domElement.removeEventListener("touchend",this.onPointerUp,!0),this.domElement.removeEventListener("touchmove",this.onPointerMove,!0))),this.domElement.removeEventListener("wheel",this.onWheel,!0),this.domElement=null,this.eventsAdded=!1}mapPositionToPoint(t,e,n){const o=this.domElement.isConnected?this.domElement.getBoundingClientRect():{x:0,y:0,width:this.domElement.width,height:this.domElement.height,left:0,top:0},i=1/this.resolution;t.x=(e-o.left)*(this.domElement.width/o.width)*i,t.y=(n-o.top)*(this.domElement.height/o.height)*i}normalizeToPointerData(t){const e=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(let n=0,o=t.changedTouches.length;n<o;n++){const i=t.changedTouches[n];typeof i.button>"u"&&(i.button=0),typeof i.buttons>"u"&&(i.buttons=1),typeof i.isPrimary>"u"&&(i.isPrimary=t.touches.length===1&&t.type==="touchstart"),typeof i.width>"u"&&(i.width=i.radiusX||1),typeof i.height>"u"&&(i.height=i.radiusY||1),typeof i.tiltX>"u"&&(i.tiltX=0),typeof i.tiltY>"u"&&(i.tiltY=0),typeof i.pointerType>"u"&&(i.pointerType="touch"),typeof i.pointerId>"u"&&(i.pointerId=i.identifier||0),typeof i.pressure>"u"&&(i.pressure=i.force||.5),typeof i.twist>"u"&&(i.twist=0),typeof i.tangentialPressure>"u"&&(i.tangentialPressure=0),typeof i.layerX>"u"&&(i.layerX=i.offsetX=i.clientX),typeof i.layerY>"u"&&(i.layerY=i.offsetY=i.clientY),i.isNormalized=!0,i.type=t.type,e.push(i)}else if(!globalThis.MouseEvent||t instanceof MouseEvent&&(!this.supportsPointerEvents||!(t instanceof globalThis.PointerEvent))){const n=t;typeof n.isPrimary>"u"&&(n.isPrimary=!0),typeof n.width>"u"&&(n.width=1),typeof n.height>"u"&&(n.height=1),typeof n.tiltX>"u"&&(n.tiltX=0),typeof n.tiltY>"u"&&(n.tiltY=0),typeof n.pointerType>"u"&&(n.pointerType="mouse"),typeof n.pointerId>"u"&&(n.pointerId=Y),typeof n.pressure>"u"&&(n.pressure=.5),typeof n.twist>"u"&&(n.twist=0),typeof n.tangentialPressure>"u"&&(n.tangentialPressure=0),n.isNormalized=!0,e.push(n)}else e.push(t);return e}normalizeWheelEvent(t){const e=this.rootWheelEvent;return this.transferMouseData(e,t),e.deltaX=t.deltaX,e.deltaY=t.deltaY,e.deltaZ=t.deltaZ,e.deltaMode=t.deltaMode,this.mapPositionToPoint(e.screen,t.clientX,t.clientY),e.global.copyFrom(e.screen),e.offset.copyFrom(e.screen),e.nativeEvent=t,e.type=t.type,e}bootstrapEvent(t,e){return t.originalEvent=null,t.nativeEvent=e,t.pointerId=e.pointerId,t.width=e.width,t.height=e.height,t.isPrimary=e.isPrimary,t.pointerType=e.pointerType,t.pressure=e.pressure,t.tangentialPressure=e.tangentialPressure,t.tiltX=e.tiltX,t.tiltY=e.tiltY,t.twist=e.twist,this.transferMouseData(t,e),this.mapPositionToPoint(t.screen,e.clientX,e.clientY),t.global.copyFrom(t.screen),t.offset.copyFrom(t.screen),t.isTrusted=e.isTrusted,t.type==="pointerleave"&&(t.type="pointerout"),t.type.startsWith("mouse")&&(t.type=t.type.replace("mouse","pointer")),t.type.startsWith("touch")&&(t.type=C[t.type]||t.type),t}transferMouseData(t,e){t.isTrusted=e.isTrusted,t.srcElement=e.srcElement,t.timeStamp=performance.now(),t.type=e.type,t.altKey=e.altKey,t.button=e.button,t.buttons=e.buttons,t.client.x=e.clientX,t.client.y=e.clientY,t.ctrlKey=e.ctrlKey,t.metaKey=e.metaKey,t.movement.x=e.movementX,t.movement.y=e.movementY,t.page.x=e.pageX,t.page.y=e.pageY,t.relatedTarget=null,t.shiftKey=e.shiftKey}};b.extension={name:"events",type:[A.RendererSystem,A.CanvasRendererSystem]},b.defaultEventFeatures={move:!0,globalMove:!0,click:!0,wheel:!0};let M=b;L.add(M);function I(r){return r==="dynamic"||r==="static"}const x={onclick:null,onmousedown:null,onmouseenter:null,onmouseleave:null,onmousemove:null,onglobalmousemove:null,onmouseout:null,onmouseover:null,onmouseup:null,onmouseupoutside:null,onpointercancel:null,onpointerdown:null,onpointerenter:null,onpointerleave:null,onpointermove:null,onglobalpointermove:null,onpointerout:null,onpointerover:null,onpointertap:null,onpointerup:null,onpointerupoutside:null,onrightclick:null,onrightdown:null,onrightup:null,onrightupoutside:null,ontap:null,ontouchcancel:null,ontouchend:null,ontouchendoutside:null,ontouchmove:null,onglobaltouchmove:null,ontouchstart:null,onwheel:null,_internalInteractive:void 0,get interactive(){var r;return(r=this._internalInteractive)!=null?r:I(M.defaultEventMode)},set interactive(r){k("7.2.0","Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."),this._internalInteractive=r,this.eventMode=r?"static":"auto"},_internalEventMode:void 0,get eventMode(){var r;return(r=this._internalEventMode)!=null?r:M.defaultEventMode},set eventMode(r){this._internalInteractive=I(r),this._internalEventMode=r},isInteractive(){return this.eventMode==="static"||this.eventMode==="dynamic"},interactiveChildren:!0,hitArea:null,addEventListener(r,t,e){const n=typeof e=="boolean"&&e||typeof e=="object"&&e.capture,o=typeof e=="object"?e.signal:void 0,i=typeof e=="object"?e.once===!0:!1,s=typeof t=="function"?void 0:t;r=n?`${r}capture`:r;const a=typeof t=="function"?t:t.handleEvent,l=this;o&&o.addEventListener("abort",()=>{l.off(r,a,s)}),i?l.once(r,a,s):l.on(r,a,s)},removeEventListener(r,t,e){const n=typeof e=="boolean"&&e||typeof e=="object"&&e.capture,o=typeof t=="function"?void 0:t;r=n?`${r}capture`:r,t=typeof t=="function"?t:t.handleEvent,this.off(r,t,o)},dispatchEvent(r){if(!(r instanceof T))throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");return r.defaultPrevented=!1,r.path=null,r.target=this,r.manager.dispatchEvent(r),!r.defaultPrevented}};O.mixin(x);export{T as F};
  import{R as w}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{F as f}from"./@pixi_constants@7.4.2.8b356162.js";import{E as g,e as A}from"./@pixi_extensions@7.4.2.089ce807.js";import{R as y}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{C as T}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";const d=new y,E=4,b=class h{constructor(t){this.renderer=t,this._rendererPremultipliedAlpha=!1}contextChange(){var r;const t=(r=this.renderer)==null?void 0:r.gl.getContextAttributes();this._rendererPremultipliedAlpha=!!(t&&t.alpha&&t.premultipliedAlpha)}async image(t,r,e,n){const i=new Image;return i.src=await this.base64(t,r,e,n),i}async base64(t,r,e,n){const i=this.canvas(t,n);if(i.toBlob!==void 0)return new Promise((l,a)=>{i.toBlob(s=>{if(!s){a(new Error("ICanvas.toBlob failed!"));return}const o=new FileReader;o.onload=()=>l(o.result),o.onerror=a,o.readAsDataURL(s)},r,e)});if(i.toDataURL!==void 0)return i.toDataURL(r,e);if(i.convertToBlob!==void 0){const l=await i.convertToBlob({type:r,quality:e});return new Promise((a,s)=>{const o=new FileReader;o.onload=()=>a(o.result),o.onerror=s,o.readAsDataURL(l)})}throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}canvas(t,r){const{pixels:e,width:n,height:i,flipY:l,premultipliedAlpha:a}=this._rawPixels(t,r);l&&h._flipY(e,n,i),a&&h._unpremultiplyAlpha(e);const s=new T(n,i,1),o=new ImageData(new Uint8ClampedArray(e.buffer),n,i);return s.context.putImageData(o,0,0),s.canvas}pixels(t,r){const{pixels:e,width:n,height:i,flipY:l,premultipliedAlpha:a}=this._rawPixels(t,r);return l&&h._flipY(e,n,i),a&&h._unpremultiplyAlpha(e),e}_rawPixels(t,r){const e=this.renderer;if(!e)throw new Error("The Extract has already been destroyed");let n,i=!1,l=!1,a,s=!1;t&&(t instanceof w?a=t:(a=e.generateTexture(t,{region:r,resolution:e.resolution,multisample:e.multisample}),s=!0,r&&(d.width=r.width,d.height=r.height,r=d)));const o=e.gl;if(a){if(n=a.baseTexture.resolution,r=r!=null?r:a.frame,i=!1,l=a.baseTexture.alphaMode>0&&a.baseTexture.format===f.RGBA,!s){e.renderTexture.bind(a);const m=a.framebuffer.glFramebuffers[e.CONTEXT_UID];m.blitFramebuffer&&e.framebuffer.bind(m.blitFramebuffer)}}else n=e.resolution,r||(r=d,r.width=e.width/n,r.height=e.height/n),i=!0,l=this._rendererPremultipliedAlpha,e.renderTexture.bind();const u=Math.max(Math.round(r.width*n),1),p=Math.max(Math.round(r.height*n),1),c=new Uint8Array(E*u*p);return o.readPixels(Math.round(r.x*n),Math.round(r.y*n),u,p,o.RGBA,o.UNSIGNED_BYTE,c),s&&(a==null||a.destroy(!0)),{pixels:c,width:u,height:p,flipY:i,premultipliedAlpha:l}}destroy(){this.renderer=null}static _flipY(t,r,e){const n=r<<2,i=e>>1,l=new Uint8Array(n);for(let a=0;a<i;a++){const s=a*n,o=(e-a-1)*n;l.set(t.subarray(s,s+n)),t.copyWithin(s,o,o+n),t.set(l,o)}}static _unpremultiplyAlpha(t){t instanceof Uint8ClampedArray&&(t=new Uint8Array(t.buffer));const r=t.length;for(let e=0;e<r;e+=4){const n=t[e+3];if(n!==0){const i=255.001/n;t[e]=t[e]*i+.5,t[e+1]=t[e+1]*i+.5,t[e+2]=t[e+2]*i+.5}}}};b.extension={name:"extract",type:g.RendererSystem};let R=b;A.add(R);
  import{F as t,d as o}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";var a=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;class v extends t{constructor(r=1){super(o,a,{uAlpha:1}),this.alpha=r}get alpha(){return this.uniforms.uAlpha}set alpha(r){this.uniforms.uAlpha=r}}export{v as A};import{F as n}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{C as a}from"./@pixi_constants@7.4.2.8b356162.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";const g={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},c=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function m(h){const t=g[h],i=t.length;let e=c,s="";const o="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";let l;for(let r=0;r<h;r++){let u=o.replace("%index%",r.toString());l=r,r>=i&&(l=h-r-1),u=u.replace("%value%",t[l].toString()),s+=u,s+=`
`}return e=e.replace("%blur%",s),e=e.replace("%size%",h.toString()),e}const x=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function F(h,t){const i=Math.ceil(h/2);let e=x,s="",o;t?o="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":o="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(let l=0;l<h;l++){let r=o.replace("%index%",l.toString());r=r.replace("%sampleIndex%",`${l-(i-1)}.0`),s+=r,s+=`
`}return e=e.replace("%blur%",s),e=e.replace("%size%",h.toString()),e}class p extends n{constructor(t,i=8,e=4,s=n.defaultResolution,o=5){const l=F(o,t),r=m(o);super(l,r),this.horizontal=t,this.resolution=s,this._quality=0,this.quality=e,this.blur=i}apply(t,i,e,s){if(e?this.horizontal?this.uniforms.strength=1/e.width*(e.width/i.width):this.uniforms.strength=1/e.height*(e.height/i.height):this.horizontal?this.uniforms.strength=1/t.renderer.width*(t.renderer.width/i.width):this.uniforms.strength=1/t.renderer.height*(t.renderer.height/i.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)t.applyFilter(this,i,e,s);else{const o=t.getFilterTexture(),l=t.renderer;let r=i,u=o;this.state.blend=!1,t.applyFilter(this,r,u,a.CLEAR);for(let d=1;d<this.passes-1;d++){t.bindAndClear(r,a.BLIT),this.uniforms.uSampler=u;const b=u;u=r,r=b,l.shader.bind(this),l.geometry.draw(5)}this.state.blend=!0,t.applyFilter(this,u,e,s),t.returnFilterTexture(o)}}get blur(){return this.strength}set blur(t){this.padding=1+Math.abs(t)*2,this.strength=t}get quality(){return this._quality}set quality(t){this._quality=t,this.passes=t}}class _ extends n{constructor(t=8,i=4,e=n.defaultResolution,s=5){super(),this._repeatEdgePixels=!1,this.blurXFilter=new p(!0,t,i,e,s),this.blurYFilter=new p(!1,t,i,e,s),this.resolution=e,this.quality=i,this.blur=t,this.repeatEdgePixels=!1}apply(t,i,e,s){const o=Math.abs(this.blurXFilter.strength),l=Math.abs(this.blurYFilter.strength);if(o&&l){const r=t.getFilterTexture();this.blurXFilter.apply(t,i,r,a.CLEAR),this.blurYFilter.apply(t,r,e,s),t.returnFilterTexture(r)}else l?this.blurYFilter.apply(t,i,e,s):this.blurXFilter.apply(t,i,e,s)}updatePadding(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2}get blur(){return this.blurXFilter.blur}set blur(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()}get quality(){return this.blurXFilter.quality}set quality(t){this.blurXFilter.quality=this.blurYFilter.quality=t}get blurX(){return this.blurXFilter.blur}set blurX(t){this.blurXFilter.blur=t,this.updatePadding()}get blurY(){return this.blurYFilter.blur}set blurY(t){this.blurYFilter.blur=t,this.updatePadding()}get blendMode(){return this.blurYFilter.blendMode}set blendMode(t){this.blurYFilter.blendMode=t}get repeatEdgePixels(){return this._repeatEdgePixels}set repeatEdgePixels(t){this._repeatEdgePixels=t,this.updatePadding()}}export{_ as B,p as a};import{F as f,e as v}from"./@pixi_core@7.4.2.ae619cd2.js";import{C as d}from"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";var A=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;class g extends f{constructor(){const i={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};super(v,A,i),this.alpha=1}_loadMatrix(i,r=!1){let t=i;r&&(this._multiply(t,this.uniforms.m,i),t=this._colorMatrix(t)),this.uniforms.m=t}_multiply(i,r,t){return i[0]=r[0]*t[0]+r[1]*t[5]+r[2]*t[10]+r[3]*t[15],i[1]=r[0]*t[1]+r[1]*t[6]+r[2]*t[11]+r[3]*t[16],i[2]=r[0]*t[2]+r[1]*t[7]+r[2]*t[12]+r[3]*t[17],i[3]=r[0]*t[3]+r[1]*t[8]+r[2]*t[13]+r[3]*t[18],i[4]=r[0]*t[4]+r[1]*t[9]+r[2]*t[14]+r[3]*t[19]+r[4],i[5]=r[5]*t[0]+r[6]*t[5]+r[7]*t[10]+r[8]*t[15],i[6]=r[5]*t[1]+r[6]*t[6]+r[7]*t[11]+r[8]*t[16],i[7]=r[5]*t[2]+r[6]*t[7]+r[7]*t[12]+r[8]*t[17],i[8]=r[5]*t[3]+r[6]*t[8]+r[7]*t[13]+r[8]*t[18],i[9]=r[5]*t[4]+r[6]*t[9]+r[7]*t[14]+r[8]*t[19]+r[9],i[10]=r[10]*t[0]+r[11]*t[5]+r[12]*t[10]+r[13]*t[15],i[11]=r[10]*t[1]+r[11]*t[6]+r[12]*t[11]+r[13]*t[16],i[12]=r[10]*t[2]+r[11]*t[7]+r[12]*t[12]+r[13]*t[17],i[13]=r[10]*t[3]+r[11]*t[8]+r[12]*t[13]+r[13]*t[18],i[14]=r[10]*t[4]+r[11]*t[9]+r[12]*t[14]+r[13]*t[19]+r[14],i[15]=r[15]*t[0]+r[16]*t[5]+r[17]*t[10]+r[18]*t[15],i[16]=r[15]*t[1]+r[16]*t[6]+r[17]*t[11]+r[18]*t[16],i[17]=r[15]*t[2]+r[16]*t[7]+r[17]*t[12]+r[18]*t[17],i[18]=r[15]*t[3]+r[16]*t[8]+r[17]*t[13]+r[18]*t[18],i[19]=r[15]*t[4]+r[16]*t[9]+r[17]*t[14]+r[18]*t[19]+r[19],i}_colorMatrix(i){const r=new Float32Array(i);return r[4]/=255,r[9]/=255,r[14]/=255,r[19]/=255,r}brightness(i,r){const t=[i,0,0,0,0,0,i,0,0,0,0,0,i,0,0,0,0,0,1,0];this._loadMatrix(t,r)}tint(i,r){const[t,s,e]=d.shared.setValue(i).toArray(),l=[t,0,0,0,0,0,s,0,0,0,0,0,e,0,0,0,0,0,1,0];this._loadMatrix(l,r)}greyscale(i,r){const t=[i,i,i,0,0,i,i,i,0,0,i,i,i,0,0,0,0,0,1,0];this._loadMatrix(t,r)}blackAndWhite(i){const r=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(r,i)}hue(i,r){i=(i||0)/180*Math.PI;const t=Math.cos(i),s=Math.sin(i),e=Math.sqrt,l=1/3,m=e(l),o=t+(1-t)*l,c=l*(1-t)-m*s,x=l*(1-t)+m*s,h=l*(1-t)+m*s,a=t+l*(1-t),p=l*(1-t)-m*s,u=l*(1-t)-m*s,M=l*(1-t)+m*s,_=t+l*(1-t),n=[o,c,x,0,0,h,a,p,0,0,u,M,_,0,0,0,0,0,1,0];this._loadMatrix(n,r)}contrast(i,r){const t=(i||0)+1,s=-.5*(t-1),e=[t,0,0,0,s,0,t,0,0,s,0,0,t,0,s,0,0,0,1,0];this._loadMatrix(e,r)}saturate(i=0,r){const t=i*2/3+1,s=(t-1)*-.5,e=[t,s,s,0,0,s,t,s,0,0,s,s,t,0,0,0,0,0,1,0];this._loadMatrix(e,r)}desaturate(){this.saturate(-1)}negative(i){const r=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(r,i)}sepia(i){const r=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(r,i)}technicolor(i){const r=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(r,i)}polaroid(i){const r=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(r,i)}toBGR(i){const r=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(r,i)}kodachrome(i){const r=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(r,i)}browni(i){const r=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(r,i)}vintage(i){const r=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(r,i)}colorTone(i,r,t,s,e){i=i||.2,r=r||.15,t=t||16770432,s=s||3375104;const l=d.shared,[m,o,c]=l.setValue(t).toArray(),[x,h,a]=l.setValue(s).toArray(),p=[.3,.59,.11,0,0,m,o,c,i,0,x,h,a,r,0,m-x,o-h,c-a,0,0];this._loadMatrix(p,e)}night(i,r){i=i||.1;const t=[i*-2,-i,0,0,0,-i,0,i,0,0,0,i,i*2,0,0,0,0,0,1,0];this._loadMatrix(t,r)}predator(i,r){const t=[11.224130630493164*i,-4.794486999511719*i,-2.8746118545532227*i,0*i,.40342438220977783*i,-3.6330697536468506*i,9.193157196044922*i,-2.951810836791992*i,0*i,-1.316135048866272*i,-3.2184197902679443*i,-4.2375030517578125*i,7.476448059082031*i,0*i,.8044459223747253*i,0,0,0,1,0];this._loadMatrix(t,r)}lsd(i){const r=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(r,i)}reset(){const i=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(i,!1)}get matrix(){return this.uniforms.m}set matrix(i){this.uniforms.m=i}get alpha(){return this.uniforms.uAlpha}set alpha(i){this.uniforms.uAlpha=i}}g.prototype.grayscale=g.prototype.greyscale;export{g as C};import{F as n}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{P as s,M as p}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";var u=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,l=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;class w extends n{constructor(r,i){const e=new p;r.renderable=!1,super(l,u,{mapSampler:r._texture,filterMatrix:e,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])}),this.maskSprite=r,this.maskMatrix=e,i==null&&(i=20),this.scale=new s(i,i)}apply(r,i,e,m){this.uniforms.filterMatrix=r.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;const t=this.maskSprite.worldTransform,o=Math.sqrt(t.a*t.a+t.b*t.b),a=Math.sqrt(t.c*t.c+t.d*t.d);o!==0&&a!==0&&(this.uniforms.rotation[0]=t.a/o,this.uniforms.rotation[1]=t.b/o,this.uniforms.rotation[2]=t.c/a,this.uniforms.rotation[3]=t.d/a),r.applyFilter(this,i,e,m)}get map(){return this.uniforms.mapSampler}set map(r){this.uniforms.mapSampler=r}}export{w as D};
  import{F as r}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";var e=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,o=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;class l extends r{constructor(){super(o,e)}}export{l as F};
  import{F as e,e as i}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";var t=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;class h extends e{constructor(o=.5,r=Math.random()){super(i,t,{uNoise:0,uSeed:0}),this.noise=o,this.seed=r}get noise(){return this.uniforms.uNoise}set noise(o){this.uniforms.uNoise=o}get seed(){return this.uniforms.uSeed}set seed(o){this.uniforms.uSeed=o}}export{h as N};import{f as jt,B as xt,g as wt,h as St,T as Y,i as Ot,U as Nt,j as qt}from"./@pixi_core@7.4.2.ae619cd2.js";import{C as k}from"./@pixi_color@7.4.2.090b5ebd.js";import{S as B,b as at,P as et,c as nt,R as kt,d as Ft,C as zt,E as Ht,M as Vt}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import{e as Gt}from"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{W as _t,D as $,B as Wt}from"./@pixi_constants@7.4.2.8b356162.js";import{B as Yt,C as Qt}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";const st={build(u){const t=u.points;let e,s,i,h,r,o;if(u.type===B.CIRC){const g=u.shape;e=g.x,s=g.y,r=o=g.radius,i=h=0}else if(u.type===B.ELIP){const g=u.shape;e=g.x,s=g.y,r=g.width,o=g.height,i=h=0}else{const g=u.shape,y=g.width/2,x=g.height/2;e=g.x+y,s=g.y+x,r=o=Math.max(0,Math.min(g.radius,Math.min(y,x))),i=y-r,h=x-o}if(!(r>=0&&o>=0&&i>=0&&h>=0)){t.length=0;return}const l=Math.ceil(2.3*Math.sqrt(r+o)),a=l*8+(i?4:0)+(h?4:0);if(t.length=a,a===0)return;if(l===0){t.length=8,t[0]=t[6]=e+i,t[1]=t[3]=s+h,t[2]=t[4]=e-i,t[5]=t[7]=s-h;return}let n=0,p=l*4+(i?2:0)+2,c=p,f=a;{const g=i+r,y=h,x=e+g,m=e-g,w=s+y;if(t[n++]=x,t[n++]=w,t[--p]=w,t[--p]=m,h){const d=s-y;t[c++]=m,t[c++]=d,t[--f]=d,t[--f]=x}}for(let g=1;g<l;g++){const y=Math.PI/2*(g/l),x=i+Math.cos(y)*r,m=h+Math.sin(y)*o,w=e+x,d=e-x,b=s+m,D=s-m;t[n++]=w,t[n++]=b,t[--p]=b,t[--p]=d,t[c++]=d,t[c++]=D,t[--f]=D,t[--f]=w}{const g=i,y=h+o,x=e+g,m=e-g,w=s+y,d=s-y;t[n++]=x,t[n++]=w,t[--f]=d,t[--f]=x,i&&(t[n++]=m,t[n++]=w,t[--f]=d,t[--f]=m)}},triangulate(u,t){const e=u.points,s=t.points,i=t.indices;if(e.length===0)return;let h=s.length/2;const r=h;let o,l;if(u.type!==B.RREC){const n=u.shape;o=n.x,l=n.y}else{const n=u.shape;o=n.x+n.width/2,l=n.y+n.height/2}const a=u.matrix;s.push(u.matrix?a.a*o+a.c*l+a.tx:o,u.matrix?a.b*o+a.d*l+a.ty:l),h++,s.push(e[0],e[1]);for(let n=2;n<e.length;n+=2)s.push(e[n],e[n+1]),i.push(h++,r,h);i.push(r+1,r,h)}};function Mt(u,t=!1){const e=u.length;if(e<6)return;let s=0;for(let i=0,h=u[e-2],r=u[e-1];i<e;i+=2){const o=u[i],l=u[i+1];s+=(o-h)*(l+r),h=o,r=l}if(!t&&s>0||t&&s<=0){const i=e/2;for(let h=i+i%2;h<e;h+=2){const r=e-h-2,o=e-h-1,l=h,a=h+1;[u[r],u[l]]=[u[l],u[r]],[u[o],u[a]]=[u[a],u[o]]}}}const Dt={build(u){u.points=u.shape.points.slice()},triangulate(u,t){let e=u.points;const s=u.holes,i=t.points,h=t.indices;if(e.length>=6){Mt(e,!1);const r=[];for(let a=0;a<s.length;a++){const n=s[a];Mt(n.points,!0),r.push(e.length/2),e=e.concat(n.points)}const o=Gt(e,r,2);if(!o)return;const l=i.length/2;for(let a=0;a<o.length;a+=3)h.push(o[a]+l),h.push(o[a+1]+l),h.push(o[a+2]+l);for(let a=0;a<e.length;a++)i.push(e[a])}}},Xt={build(u){const t=u.shape,e=t.x,s=t.y,i=t.width,h=t.height,r=u.points;r.length=0,i>=0&&h>=0&&r.push(e,s,e+i,s,e+i,s+h,e,s+h)},triangulate(u,t){const e=u.points,s=t.points;if(e.length===0)return;const i=s.length/2;s.push(e[0],e[1],e[2],e[3],e[6],e[7],e[4],e[5]),t.indices.push(i,i+1,i+2,i+1,i+2,i+3)}},Zt={build(u){st.build(u)},triangulate(u,t){st.triangulate(u,t)}};var I=(u=>(u.MITER="miter",u.BEVEL="bevel",u.ROUND="round",u))(I||{}),L=(u=>(u.BUTT="butt",u.ROUND="round",u.SQUARE="square",u))(L||{});const z={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount(u,t=20){if(!this.adaptive||!u||isNaN(u))return t;let e=Math.ceil(u/this.maxLength);return e<this.minSegments?e=this.minSegments:e>this.maxSegments&&(e=this.maxSegments),e}};class Pt{static curveTo(t,e,s,i,h,r){const o=r[r.length-2],l=r[r.length-1]-e,a=o-t,n=i-e,p=s-t,c=Math.abs(l*p-a*n);if(c<1e-8||h===0)return(r[r.length-2]!==t||r[r.length-1]!==e)&&r.push(t,e),null;const f=l*l+a*a,g=n*n+p*p,y=l*n+a*p,x=h*Math.sqrt(f)/c,m=h*Math.sqrt(g)/c,w=x*y/f,d=m*y/g,b=x*p+m*a,D=x*n+m*l,E=a*(m+w),_=l*(m+w),M=p*(x+d),v=n*(x+d),C=Math.atan2(_-D,E-b),R=Math.atan2(v-D,M-b);return{cx:b+t,cy:D+e,radius:h,startAngle:C,endAngle:R,anticlockwise:a*n>p*l}}static arc(t,e,s,i,h,r,o,l,a){const n=o-r,p=z._segmentsCount(Math.abs(n)*h,Math.ceil(Math.abs(n)/at)*40),c=n/(p*2),f=c*2,g=Math.cos(c),y=Math.sin(c),x=p-1,m=x%1/x;for(let w=0;w<=x;++w){const d=w+m*w,b=c+r+f*d,D=Math.cos(b),E=-Math.sin(b);a.push((g*D+y*E)*h+s,(g*-E+y*D)*h+i)}}}class Kt{constructor(){this.reset()}begin(t,e,s){this.reset(),this.style=t,this.start=e,this.attribStart=s}end(t,e){this.attribSize=e-this.attribStart,this.size=t-this.start}reset(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0}}class ct{static curveLength(t,e,s,i,h,r,o,l){let a=0,n=0,p=0,c=0,f=0,g=0,y=0,x=0,m=0,w=0,d=0,b=t,D=e;for(let E=1;E<=10;++E)n=E/10,p=n*n,c=p*n,f=1-n,g=f*f,y=g*f,x=y*t+3*g*n*s+3*f*p*h+c*o,m=y*e+3*g*n*i+3*f*p*r+c*l,w=b-x,d=D-m,b=x,D=m,a+=Math.sqrt(w*w+d*d);return a}static curveTo(t,e,s,i,h,r,o){const l=o[o.length-2],a=o[o.length-1];o.length-=2;const n=z._segmentsCount(ct.curveLength(l,a,t,e,s,i,h,r));let p=0,c=0,f=0,g=0,y=0;o.push(l,a);for(let x=1,m=0;x<=n;++x)m=x/n,p=1-m,c=p*p,f=c*p,g=m*m,y=g*m,o.push(f*l+3*c*m*t+3*p*g*s+y*h,f*a+3*c*m*e+3*p*g*i+y*r)}}function Tt(u,t,e,s,i,h,r,o){const l=u-e*i,a=t-s*i,n=u+e*h,p=t+s*h;let c,f;r?(c=s,f=-e):(c=-s,f=e);const g=l+c,y=a+f,x=n+c,m=p+f;return o.push(g,y,x,m),2}function q(u,t,e,s,i,h,r,o){const l=e-u,a=s-t;let n=Math.atan2(l,a),p=Math.atan2(i-u,h-t);o&&n<p?n+=Math.PI*2:!o&&n>p&&(p+=Math.PI*2);let c=n;const f=p-n,g=Math.abs(f),y=Math.sqrt(l*l+a*a),x=(15*g*Math.sqrt(y)/Math.PI>>0)+1,m=f/x;if(c+=m,o){r.push(u,t,e,s);for(let w=1,d=c;w<x;w++,d+=m)r.push(u,t,u+Math.sin(d)*y,t+Math.cos(d)*y);r.push(u,t,i,h)}else{r.push(e,s,u,t);for(let w=1,d=c;w<x;w++,d+=m)r.push(u+Math.sin(d)*y,t+Math.cos(d)*y,u,t);r.push(i,h,u,t)}return x*2}function $t(u,t){const e=u.shape;let s=u.points||e.points.slice();const i=t.closePointEps;if(s.length===0)return;const h=u.lineStyle,r=new et(s[0],s[1]),o=new et(s[s.length-2],s[s.length-1]),l=e.type!==B.POLY||e.closeStroke,a=Math.abs(r.x-o.x)<i&&Math.abs(r.y-o.y)<i;if(l){s=s.slice(),a&&(s.pop(),s.pop(),o.set(s[s.length-2],s[s.length-1]));const T=(r.x+o.x)*.5,A=(o.y+r.y)*.5;s.unshift(T,A),s.push(T,A)}const n=t.points,p=s.length/2;let c=s.length;const f=n.length/2,g=h.width/2,y=g*g,x=h.miterLimit*h.miterLimit;let m=s[0],w=s[1],d=s[2],b=s[3],D=0,E=0,_=-(w-b),M=m-d,v=0,C=0,R=Math.sqrt(_*_+M*M);_/=R,M/=R,_*=g,M*=g;const pt=h.alignment,S=(1-pt)*2,P=pt*2;l||(h.cap===L.ROUND?c+=q(m-_*(S-P)*.5,w-M*(S-P)*.5,m-_*S,w-M*S,m+_*P,w+M*P,n,!0)+2:h.cap===L.SQUARE&&(c+=Tt(m,w,_,M,S,P,!0,n))),n.push(m-_*S,w-M*S,m+_*P,w+M*P);for(let T=1;T<p-1;++T){m=s[(T-1)*2],w=s[(T-1)*2+1],d=s[T*2],b=s[T*2+1],D=s[(T+1)*2],E=s[(T+1)*2+1],_=-(w-b),M=m-d,R=Math.sqrt(_*_+M*M),_/=R,M/=R,_*=g,M*=g,v=-(b-E),C=d-D,R=Math.sqrt(v*v+C*C),v/=R,C/=R,v*=g,C*=g;const A=d-m,H=w-b,V=d-D,G=E-b,gt=A*V+H*G,Q=H*V-G*A,W=Q<0;if(Math.abs(Q)<.001*Math.abs(gt)){n.push(d-_*S,b-M*S,d+_*P,b+M*P),gt>=0&&(h.join===I.ROUND?c+=q(d,b,d-_*S,b-M*S,d-v*S,b-C*S,n,!1)+4:c+=2,n.push(d-v*P,b-C*P,d+v*S,b+C*S));continue}const bt=(-_+m)*(-M+b)-(-_+d)*(-M+w),yt=(-v+D)*(-C+b)-(-v+d)*(-C+E),X=(A*yt-V*bt)/Q,Z=(G*bt-H*yt)/Q,ft=(X-d)*(X-d)+(Z-b)*(Z-b),U=d+(X-d)*S,j=b+(Z-b)*S,O=d-(X-d)*P,N=b-(Z-b)*P,At=Math.min(A*A+H*H,V*V+G*G),mt=W?S:P,Lt=At+mt*mt*y,Ut=ft<=Lt;let K=h.join;if(K===I.MITER&&ft/y>x&&(K=I.BEVEL),Ut)switch(K){case I.MITER:{n.push(U,j,O,N);break}case I.BEVEL:{W?n.push(U,j,d+_*P,b+M*P,U,j,d+v*P,b+C*P):n.push(d-_*S,b-M*S,O,N,d-v*S,b-C*S,O,N),c+=2;break}case I.ROUND:{W?(n.push(U,j,d+_*P,b+M*P),c+=q(d,b,d+_*P,b+M*P,d+v*P,b+C*P,n,!0)+4,n.push(U,j,d+v*P,b+C*P)):(n.push(d-_*S,b-M*S,O,N),c+=q(d,b,d-_*S,b-M*S,d-v*S,b-C*S,n,!1)+4,n.push(d-v*S,b-C*S,O,N));break}}else{switch(n.push(d-_*S,b-M*S,d+_*P,b+M*P),K){case I.MITER:{W?n.push(O,N,O,N):n.push(U,j,U,j),c+=2;break}case I.ROUND:{W?c+=q(d,b,d+_*P,b+M*P,d+v*P,b+C*P,n,!0)+2:c+=q(d,b,d-_*S,b-M*S,d-v*S,b-C*S,n,!1)+2;break}}n.push(d-v*S,b-C*S,d+v*P,b+C*P),c+=2}}m=s[(p-2)*2],w=s[(p-2)*2+1],d=s[(p-1)*2],b=s[(p-1)*2+1],_=-(w-b),M=m-d,R=Math.sqrt(_*_+M*M),_/=R,M/=R,_*=g,M*=g,n.push(d-_*S,b-M*S,d+_*P,b+M*P),l||(h.cap===L.ROUND?c+=q(d-_*(S-P)*.5,b-M*(S-P)*.5,d-_*S,b-M*S,d+_*P,b+M*P,n,!1)+2:h.cap===L.SQUARE&&(c+=Tt(d,b,_,M,S,P,!1,n)));const It=t.indices,Bt=z.epsilon*z.epsilon;for(let T=f;T<c+f-2;++T)m=n[T*2],w=n[T*2+1],d=n[(T+1)*2],b=n[(T+1)*2+1],D=n[(T+2)*2],E=n[(T+2)*2+1],!(Math.abs(m*(b-E)+d*(E-w)+D*(w-b))<Bt)&&It.push(T,T+1,T+2)}function Jt(u,t){let e=0;const s=u.shape,i=u.points||s.points,h=s.type!==B.POLY||s.closeStroke;if(i.length===0)return;const r=t.points,o=t.indices,l=i.length/2,a=r.length/2;let n=a;for(r.push(i[0],i[1]),e=1;e<l;e++)r.push(i[e*2],i[e*2+1]),o.push(n,n+1),n++;h&&o.push(n,a)}function vt(u,t){u.lineStyle.native?Jt(u,t):$t(u,t)}class ut{static curveLength(t,e,s,i,h,r){const o=t-2*s+h,l=e-2*i+r,a=2*s-2*t,n=2*i-2*e,p=4*(o*o+l*l),c=4*(o*a+l*n),f=a*a+n*n,g=2*Math.sqrt(p+c+f),y=Math.sqrt(p),x=2*p*y,m=2*Math.sqrt(f),w=c/y;return(x*g+y*c*(g-m)+(4*f*p-c*c)*Math.log((2*y+w+g)/(w+m)))/(4*x)}static curveTo(t,e,s,i,h){const r=h[h.length-2],o=h[h.length-1],l=z._segmentsCount(ut.curveLength(r,o,t,e,s,i));let a=0,n=0;for(let p=1;p<=l;++p){const c=p/l;a=r+(t-r)*c,n=o+(e-o)*c,h.push(a+(t+(s-t)*c-a)*c,n+(e+(i-e)*c-n)*c)}}}const rt={[B.POLY]:Dt,[B.CIRC]:st,[B.ELIP]:st,[B.RECT]:Xt,[B.RREC]:Zt},Ct=[],J=[];class it{constructor(t,e=null,s=null,i=null){this.points=[],this.holes=[],this.shape=t,this.lineStyle=s,this.fillStyle=e,this.matrix=i,this.type=t.type}clone(){return new it(this.shape,this.fillStyle,this.lineStyle,this.matrix)}destroy(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null}}const F=new et,Et=class Rt extends jt{constructor(){super(),this.closePointEps=1e-4,this.boundsPadding=0,this.uvsFloat32=null,this.indicesUint16=null,this.batchable=!1,this.points=[],this.colors=[],this.uvs=[],this.indices=[],this.textureIds=[],this.graphicsData=[],this.drawCalls=[],this.batchDirty=-1,this.batches=[],this.dirty=0,this.cacheDirty=-1,this.clearDirty=0,this.shapeIndex=0,this._bounds=new Yt,this.boundsDirty=-1}get bounds(){return this.updateBatches(),this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds}invalidate(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(let t=0;t<this.drawCalls.length;t++)this.drawCalls[t].texArray.clear(),J.push(this.drawCalls[t]);this.drawCalls.length=0;for(let t=0;t<this.batches.length;t++){const e=this.batches[t];e.reset(),Ct.push(e)}this.batches.length=0}clear(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this}drawShape(t,e=null,s=null,i=null){const h=new it(t,e,s,i);return this.graphicsData.push(h),this.dirty++,this}drawHole(t,e=null){if(!this.graphicsData.length)return null;const s=new it(t,null,null,e),i=this.graphicsData[this.graphicsData.length-1];return s.lineStyle=i.lineStyle,i.holes.push(s),this.dirty++,this}destroy(){super.destroy();for(let t=0;t<this.graphicsData.length;++t)this.graphicsData[t].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null}containsPoint(t){const e=this.graphicsData;for(let s=0;s<e.length;++s){const i=e[s];if(i.fillStyle.visible&&i.shape&&(i.matrix?i.matrix.applyInverse(t,F):F.copyFrom(t),i.shape.contains(F.x,F.y))){let h=!1;if(i.holes){for(let r=0;r<i.holes.length;r++)if(i.holes[r].shape.contains(F.x,F.y)){h=!0;break}}if(!h)return!0}}return!1}updateBatches(){if(!this.graphicsData.length){this.batchable=!0;return}if(!this.validateBatching())return;this.cacheDirty=this.dirty;const t=this.uvs,e=this.graphicsData;let s=null,i=null;this.batches.length>0&&(s=this.batches[this.batches.length-1],i=s.style);for(let l=this.shapeIndex;l<e.length;l++){this.shapeIndex++;const a=e[l],n=a.fillStyle,p=a.lineStyle;rt[a.type].build(a),a.matrix&&this.transformPoints(a.points,a.matrix),(n.visible||p.visible)&&this.processHoles(a.holes);for(let c=0;c<2;c++){const f=c===0?n:p;if(!f.visible)continue;const g=f.texture.baseTexture,y=this.indices.length,x=this.points.length/2;g.wrapMode=_t.REPEAT,c===0?this.processFill(a):this.processLine(a);const m=this.points.length/2-x;m!==0&&(s&&!this._compareStyles(i,f)&&(s.end(y,x),s=null),s||(s=Ct.pop()||new Kt,s.begin(f,y,x),this.batches.push(s),i=f),this.addUvs(this.points,t,f.texture,x,m,f.matrix))}}const h=this.indices.length,r=this.points.length/2;if(s&&s.end(h,r),this.batches.length===0){this.batchable=!0;return}const o=r>65535;this.indicesUint16&&this.indices.length===this.indicesUint16.length&&o===this.indicesUint16.BYTES_PER_ELEMENT>2?this.indicesUint16.set(this.indices):this.indicesUint16=o?new Uint32Array(this.indices):new Uint16Array(this.indices),this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}_compareStyles(t,e){return!(!t||!e||t.texture.baseTexture!==e.texture.baseTexture||t.color+t.alpha!==e.color+e.alpha||!!t.native!=!!e.native)}validateBatching(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(let t=0,e=this.graphicsData.length;t<e;t++){const s=this.graphicsData[t],i=s.fillStyle,h=s.lineStyle;if(i&&!i.texture.baseTexture.valid||h&&!h.texture.baseTexture.valid)return!1}return!0}packBatches(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);const t=this.batches;for(let e=0,s=t.length;e<s;e++){const i=t[e];for(let h=0;h<i.size;h++){const r=i.start+h;this.indicesUint16[r]=this.indicesUint16[r]-i.attribStart}}}isBatchable(){if(this.points.length>65535*2)return!1;const t=this.batches;for(let e=0;e<t.length;e++)if(t[e].style.native)return!1;return this.points.length<Rt.BATCHABLE_SIZE*2}buildDrawCalls(){let t=++xt._globalBatch;for(let p=0;p<this.drawCalls.length;p++)this.drawCalls[p].texArray.clear(),J.push(this.drawCalls[p]);this.drawCalls.length=0;const e=this.colors,s=this.textureIds;let i=J.pop();i||(i=new wt,i.texArray=new St),i.texArray.count=0,i.start=0,i.size=0,i.type=$.TRIANGLES;let h=0,r=null,o=0,l=!1,a=$.TRIANGLES,n=0;this.drawCalls.push(i);for(let p=0;p<this.batches.length;p++){const c=this.batches[p],f=8,g=c.style,y=g.texture.baseTexture;l!==!!g.native&&(l=!!g.native,a=l?$.LINES:$.TRIANGLES,r=null,h=f,t++),r!==y&&(r=y,y._batchEnabled!==t&&(h===f&&(t++,h=0,i.size>0&&(i=J.pop(),i||(i=new wt,i.texArray=new St),this.drawCalls.push(i)),i.start=n,i.size=0,i.texArray.count=0,i.type=a),y.touched=1,y._batchEnabled=t,y._batchLocation=h,y.wrapMode=_t.REPEAT,i.texArray.elements[i.texArray.count++]=y,h++)),i.size+=c.size,n+=c.size,o=y._batchLocation,this.addColors(e,g.color,g.alpha,c.attribSize,c.attribStart),this.addTextureIds(s,o,c.attribSize,c.attribStart)}xt._globalBatch=t,this.packAttributes()}packAttributes(){const t=this.points,e=this.uvs,s=this.colors,i=this.textureIds,h=new ArrayBuffer(t.length*3*4),r=new Float32Array(h),o=new Uint32Array(h);let l=0;for(let a=0;a<t.length/2;a++)r[l++]=t[a*2],r[l++]=t[a*2+1],r[l++]=e[a*2],r[l++]=e[a*2+1],o[l++]=s[a],r[l++]=i[a];this._buffer.update(h),this._indexBuffer.update(this.indicesUint16)}processFill(t){t.holes.length?Dt.triangulate(t,this):rt[t.type].triangulate(t,this)}processLine(t){vt(t,this);for(let e=0;e<t.holes.length;e++)vt(t.holes[e],this)}processHoles(t){for(let e=0;e<t.length;e++){const s=t[e];rt[s.type].build(s),s.matrix&&this.transformPoints(s.points,s.matrix)}}calculateBounds(){const t=this._bounds;t.clear(),t.addVertexData(this.points,0,this.points.length),t.pad(this.boundsPadding,this.boundsPadding)}transformPoints(t,e){for(let s=0;s<t.length/2;s++){const i=t[s*2],h=t[s*2+1];t[s*2]=e.a*i+e.c*h+e.tx,t[s*2+1]=e.b*i+e.d*h+e.ty}}addColors(t,e,s,i,h=0){const r=k.shared.setValue(e).toLittleEndianNumber(),o=k.shared.setValue(r).toPremultiplied(s);t.length=Math.max(t.length,h+i);for(let l=0;l<i;l++)t[h+l]=o}addTextureIds(t,e,s,i=0){t.length=Math.max(t.length,i+s);for(let h=0;h<s;h++)t[i+h]=e}addUvs(t,e,s,i,h,r=null){let o=0;const l=e.length,a=s.frame;for(;o<h;){let p=t[(i+o)*2],c=t[(i+o)*2+1];if(r){const f=r.a*p+r.c*c+r.tx;c=r.b*p+r.d*c+r.ty,p=f}o++,e.push(p/a.width,c/a.height)}const n=s.baseTexture;(a.width<n.width||a.height<n.height)&&this.adjustUvs(e,s,l,h)}adjustUvs(t,e,s,i){const h=e.baseTexture,r=1e-6,o=s+i*2,l=e.frame,a=l.width/h.width,n=l.height/h.height;let p=l.x/l.width,c=l.y/l.height,f=Math.floor(t[s]+r),g=Math.floor(t[s+1]+r);for(let y=s+2;y<o;y+=2)f=Math.min(f,Math.floor(t[y]+r)),g=Math.min(g,Math.floor(t[y+1]+r));p-=f,c-=g;for(let y=s;y<o;y+=2)t[y]=(t[y]+p)*a,t[y+1]=(t[y+1]+c)*n}};Et.BATCHABLE_SIZE=100;let te=Et;class ht{constructor(){this.color=16777215,this.alpha=1,this.texture=Y.WHITE,this.matrix=null,this.visible=!1,this.reset()}clone(){const t=new ht;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t}reset(){this.color=16777215,this.alpha=1,this.texture=Y.WHITE,this.matrix=null,this.visible=!1}destroy(){this.texture=null,this.matrix=null}}class dt extends ht{constructor(){super(...arguments),this.width=0,this.alignment=.5,this.native=!1,this.cap=L.BUTT,this.join=I.MITER,this.miterLimit=10}clone(){const t=new dt;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t.width=this.width,t.alignment=this.alignment,t.native=this.native,t.cap=this.cap,t.join=this.join,t.miterLimit=this.miterLimit,t}reset(){super.reset(),this.color=0,this.alignment=.5,this.width=0,this.native=!1,this.cap=L.BUTT,this.join=I.MITER,this.miterLimit=10}}const lt={},ot=class tt extends Qt{constructor(t=null){super(),this.shader=null,this.pluginName="batch",this.currentPath=null,this.batches=[],this.batchTint=-1,this.batchDirty=-1,this.vertexData=null,this._fillStyle=new ht,this._lineStyle=new dt,this._matrix=null,this._holeMode=!1,this.state=Ot.for2d(),this._geometry=t||new te,this._geometry.refCount++,this._transformID=-1,this._tintColor=new k(16777215),this.blendMode=Wt.NORMAL}get geometry(){return this._geometry}clone(){return this.finishPoly(),new tt(this._geometry)}set blendMode(t){this.state.blendMode=t}get blendMode(){return this.state.blendMode}get tint(){return this._tintColor.value}set tint(t){this._tintColor.setValue(t)}get fill(){return this._fillStyle}get line(){return this._lineStyle}lineStyle(t=null,e=0,s,i=.5,h=!1){return typeof t=="number"&&(t={width:t,color:e,alpha:s,alignment:i,native:h}),this.lineTextureStyle(t)}lineTextureStyle(t){const e={width:0,texture:Y.WHITE,color:t!=null&&t.texture?16777215:0,matrix:null,alignment:.5,native:!1,cap:L.BUTT,join:I.MITER,miterLimit:10};t=Object.assign(e,t),this.normalizeColor(t),this.currentPath&&this.startPoly();const s=t.width>0&&t.alpha>0;return s?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._lineStyle,{visible:s},t)):this._lineStyle.reset(),this}startPoly(){if(this.currentPath){const t=this.currentPath.points,e=this.currentPath.points.length;e>2&&(this.drawShape(this.currentPath),this.currentPath=new nt,this.currentPath.closeStroke=!1,this.currentPath.points.push(t[e-2],t[e-1]))}else this.currentPath=new nt,this.currentPath.closeStroke=!1}finishPoly(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)}moveTo(t,e){return this.startPoly(),this.currentPath.points[0]=t,this.currentPath.points[1]=e,this}lineTo(t,e){this.currentPath||this.moveTo(0,0);const s=this.currentPath.points,i=s[s.length-2],h=s[s.length-1];return(i!==t||h!==e)&&s.push(t,e),this}_initCurve(t=0,e=0){this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[t,e]):this.moveTo(t,e)}quadraticCurveTo(t,e,s,i,h,r){const o=r[r.length-2],l=r[r.length-1]-e,a=o-t,n=i-e,p=s-t,c=Math.abs(l*p-a*n);if(c<1e-8||h===0)return(r[r.length-2]!==t||r[r.length-1]!==e)&&r.push(t,e),null;const f=l*l+a*a,g=n*n+p*p,y=l*n+a*p,x=h*Math.sqrt(f)/c,m=h*Math.sqrt(g)/c,w=x*y/f,d=m*y/g,b=x*p+m*a,D=x*n+m*l,E=a*(m+w),_=l*(m+w),M=p*(x+d),v=n*(x+d),C=Math.atan2(_-D,E-b),R=Math.atan2(v-D,M-b);return{cx:b+t,cy:D+e,radius:h,startAngle:C,endAngle:R,anticlockwise:a*n>p*l}}static arc(t,e,s,i,h,r,o,l,a){const n=o-r,p=z._segmentsCount(Math.abs(n)*h,Math.ceil(Math.abs(n)/at)*40),c=n/(p*2),f=c*2,g=Math.cos(c),y=Math.sin(c),x=p-1,m=x%1/x;for(let w=0;w<=x;++w){const d=w+m*w,b=c+r+f*d,D=Math.cos(b),E=-Math.sin(b);a.push((g*D+y*E)*h+s,(g*-E+y*D)*h+i)}}}class Kt{constructor(){this.reset()}begin(t,e,s){this.reset(),this.style=t,this.start=e,this.attribStart=s}end(t,e){this.attribSize=e-this.attribStart,this.size=t-this.start}reset(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0}}class ct{static curveLength(t,e,s,i,h,r,o,l){let a=0,n=0,p=0,c=0,f=0,g=0,y=0,x=0,m=0,w=0,d=0,b=t,D=e;for(let E=1;E<=10;++E)n=E/10,p=n*n,c=p*n,f=1-n,g=f*f,y=g*f,x=y*t+3*g*n*s+3*f*p*h+c*o,m=y*e+3*g*n*i+3*f*p*r+c*l,w=b-x,d=D-m,b=x,D=m,a+=Math.sqrt(w*w+d*d);return a}static curveTo(t,e,s,i,h,r,o){const l=o[o.length-2],a=o[o.length-1];o.length-=2;const n=z._segmentsCount(ct.curveLength(l,a,t,e,s,i,h,r));let p=0,c=0,f=0,g=0,y=0;o.push(l,a);for(let x=1,m=0;x<=n;++x)m=x/n,p=1-m,c=p*p,f=c*p,g=m*m,y=g*m,o.push(f*l+3*c*m*t+3*p*g*s+y*h,f*a+3*c*m*e+3*p*g*i+y*r)}}function Tt(u,t,e,s,i,h,r,o){const l=u-e*i,a=t-s*i,n=u+e*h,p=t+s*h;let c,f;r?(c=s,f=-e):(c=-s,f=e);const g=l+c,y=a+f,x=n+c,m=p+f;return o.push(g,y,x,m),2}function q(u,t,e,s,i,h,r,o){const l=e-u,a=s-t;let n=Math.atan2(l,a),p=Math.atan2(i-u,h-t);o&&n<p?n+=Math.PI*2:!o&&n>p&&(p+=Math.PI*2);let c=n;const f=p-n,g=Math.abs(f),y=Math.sqrt(l*l+a*a),x=(15*g*Math.sqrt(y)/Math.PI>>0)+1,m=f/x;if(c+=m,o){r.push(u,t,e,s);for(let w=1,d=c;w<x;w++,d+=m)r.push(u,t,u+Math.sin(d)*y,t+Math.cos(d)*y);r.push(u,t,i,h)}else{r.push(e,s,u,t);for(let w=1,d=c;w<x;w++,d+=m)r.push(u+Math.sin(d)*y,t+Math.cos(d)*y,u,t);r.push(i,h,u,t)}return x*2}function $t(u,t){const e=u.shape;let s=u.points||e.points.slice();const i=t.closePointEps;if(s.length===0)return;const h=u.lineStyle,r=new et(s[0],s[1]),o=new et(s[s.length-2],s[s.length-1]),l=e.type!==B.POLY||e.closeStroke,a=Math.abs(r.x-o.x)<i&&Math.abs(r.y-o.y)<i;if(l){s=s.slice(),a&&(s.pop(),s.pop(),o.set(s[s.length-2],s[s.length-1]));const T=(r.x+o.x)*.5,A=(o.y+r.y)*.5;s.unshift(T,A),s.push(T,A)}const n=t.points,p=s.length/2;let c=s.length;const f=n.length/2,g=h.width/2,y=g*g,x=h.miterLimit*h.miterLimit;let m=s[0],w=s[1],d=s[2],b=s[3],D=0,E=0,_=-(w-b),M=m-d,v=0,C=0,R=Math.sqrt(_*_+M*M);_/=R,M/=R,_*=g,M*=g;const pt=h.alignment,S=(1-pt)*2,P=pt*2;l||(h.cap===L.ROUND?c+=q(m-_*(S-P)*.5,w-M*(S-P)*.5,m-_*S,w-M*S,m+_*P,w+M*P,n,!0)+2:h.cap===L.SQUARE&&(c+=Tt(m,w,_,M,S,P,!0,n))),n.push(m-_*S,w-M*S,m+_*P,w+M*P);for(let T=1;T<p-1;++T){m=s[(T-1)*2],w=s[(T-1)*2+1],d=s[T*2],b=s[T*2+1],D=s[(T+1)*2],E=s[(T+1)*2+1],_=-(w-b),M=m-d,R=Math.sqrt(_*_+M*M),_/=R,M/=R,_*=g,M*=g,v=-(b-E),C=d-D,R=Math.sqrt(v*v+C*C),v/=R,C/=R,v*=g,C*=g;const A=d-m,H=w-b,V=d-D,G=E-b,gt=A*V+H*G,Q=H*V-G*A,W=Q<0;if(Math.abs(Q)<.001*Math.abs(gt)){n.push(d-_*S,b-M*S,d+_*P,b+M*P),gt>=0&&(h.join===I.ROUND?c+=q(d,b,d-_*S,b-M*S,d-v*S,b-C*S,n,!1)+4:c+=2,n.push(d-v*P,b-C*P,d+v*S,b+C*S));continue}const bt=(-_+m)*(-M+b)-(-_+d)*(-M+w),yt=(-v+D)*(-C+b)-(-v+d)*(-C+E),X=(A*yt-V*bt)/Q,Z=(G*bt-H*yt)/Q,ft=(X-d)*(X-d)+(Z-b)*(Z-b),U=d+(X-d)*S,j=b+(Z-b)*S,O=d-(X-d)*P,N=b-(Z-b)*P,At=Math.min(A*A+H*H,V*V+G*G),mt=W?S:P,Lt=At+mt*mt*y,Ut=ft<=Lt;let K=h.join;if(K===I.MITER&&ft/y>x&&(K=I.BEVEL),Ut)switch(K){case I.MITER:{n.push(U,j,O,N);break}case I.BEVEL:{W?n.push(U,j,d+_*P,b+M*P,U,j,d+v*P,b+C*P):n.push(d-_*S,b-M*S,O,N,d-v*S,b-C*S,O,N),c+=2;break}case I.ROUND:{W?(n.push(U,j,d+_*P,b+M*P),c+=q(d,b,d+_*P,b+M*P,d+v*P,b+C*P,n,!0)+4,n.push(U,j,d+v*P,b+C*P)):(n.push(d-_*S,b-M*S,O,N),c+=q(d,b,d-_*S,b-M*S,d-v*S,b-C*S,n,!1)+4,n.push(d-v*S,b-C*S,O,N));break}}else{switch(n.push(d-_*S,b-M*S,d+_*P,b+M*P),K){case I.MITER:{W?n.push(O,N,O,N):n.push(U,j,U,j),c+=2;break}case I.ROUND:{W?c+=q(d,b,d+_*P,b+M*P,d+v*P,b+C*P,n,!0)+2:c+=q(d,b,d-_*S,b-M*S,d-v*S,b-C*S,n,!1)+2;break}}n.push(d-v*S,b-C*S,d+v*P,b+C*P),c+=2}}m=s[(p-2)*2],w=s[(p-2)*2+1],d=s[(p-1)*2],b=s[(p-1)*2+1],_=-(w-b),M=m-d,R=Math.sqrt(_*_+M*M),_/=R,M/=R,_*=g,M*=g,n.push(d-_*S,b-M*S,d+_*P,b+M*P),l||(h.cap===L.ROUND?c+=q(d-_*(S-P)*.5,b-M*(S-P)*.5,d-_*S,b-M*S,d+_*P,b+M*P,n,!1)+2:h.cap===L.SQUARE&&(c+=Tt(d,b,_,M,S,P,!1,n)));const It=t.indices,Bt=z.epsilon*z.epsilon;for(let T=f;T<c+f-2;++T)m=n[T*2],w=n[T*2+1],d=n[(T+1)*2],b=n[(T+1)*2+1],D=n[(T+2)*2],E=n[(T+2)*2+1],!(Math.abs(m*(b-E)+d*(E-w)+D*(w-b))<Bt)&&It.push(T,T+1,T+2)}function Jt(u,t){let e=0;const s=u.shape,i=u.points||s.points,h=s.type!==B.POLY||s.closeStroke;if(i.length===0)return;const r=t.points,o=t.indices,l=i.length/2,a=r.length/2;let n=a;for(r.push(i[0],i[1]),e=1;e<l;e++)r.push(i[e*2],i[e*2+1]),o.push(n,n+1),n++;h&&o.push(n,a)}function vt(u,t){u.lineStyle.native?Jt(u,t):$t(u,t)}class ut{static curveLength(t,e,s,i,h,r){const o=t-2*s+h,l=e-2*i+r,a=2*s-2*t,n=2*i-2*e,p=4*(o*o+l*l),c=4*(o*a+l*n),f=a*a+n*n,g=2*Math.sqrt(p+c+f),y=Math.sqrt(p),x=2*p*y,m=2*Math.sqrt(f),w=c/y;return(x*g+y*c*(g-m)+(4*f*p-c*c)*Math.log((2*y+w+g)/(w+m)))/(4*x)}static curveTo(t,e,s,i,h){const r=h[h.length-2],o=h[h.length-1],l=z._segmentsCount(ut.curveLength(r,o,t,e,s,i));let a=0,n=0;for(let p=1;p<=l;++p){const c=p/l;a=r+(t-r)*c,n=o+(e-o)*c,h.push(a+(t+(s-t)*c-a)*c,n+(e+(i-e)*c-n)*c)}}}const rt={[B.POLY]:Dt,[B.CIRC]:st,[B.ELIP]:st,[B.RECT]:Xt,[B.RREC]:Zt},Ct=[],J=[];class it{constructor(t,e=null,s=null,i=null){this.points=[],this.holes=[],this.shape=t,this.lineStyle=s,this.fillStyle=e,this.matrix=i,this.type=t.type}clone(){return new it(this.shape,this.fillStyle,this.lineStyle,this.matrix)}destroy(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null}}const F=new et,Et=class Rt extends jt{constructor(){super(),this.closePointEps=1e-4,this.boundsPadding=0,this.uvsFloat32=null,this.indicesUint16=null,this.batchable=!1,this.points=[],this.colors=[],this.uvs=[],this.indices=[],this.textureIds=[],this.graphicsData=[],this.drawCalls=[],this.batchDirty=-1,this.batches=[],this.dirty=0,this.cacheDirty=-1,this.clearDirty=0,this.shapeIndex=0,this._bounds=new Yt,this.boundsDirty=-1}get bounds(){return this.updateBatches(),this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds}invalidate(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(let t=0;t<this.drawCalls.length;t++)this.drawCalls[t].texArray.clear(),J.push(this.drawCalls[t]);this.drawCalls.length=0;for(let t=0;t<this.batches.length;t++){const e=this.batches[t];e.reset(),Ct.push(e)}this.batches.length=0}clear(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this}drawShape(t,e=null,s=null,i=null){const h=new it(t,e,s,i);return this.graphicsData.push(h),this.dirty++,this}drawHole(t,e=null){if(!this.graphicsData.length)return null;const s=new it(t,null,null,e),i=this.graphicsData[this.graphicsData.length-1];return s.lineStyle=i.lineStyle,i.holes.push(s),this.dirty++,this}destroy(){super.destroy();for(let t=0;t<this.graphicsData.length;++t)this.graphicsData[t].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null}containsPoint(t){const e=this.graphicsData;for(let s=0;s<e.length;++s){const i=e[s];if(i.fillStyle.visible&&i.shape&&(i.matrix?i.matrix.applyInverse(t,F):F.copyFrom(t),i.shape.contains(F.x,F.y))){let h=!1;if(i.holes){for(let r=0;r<i.holes.length;r++)if(i.holes[r].shape.contains(F.x,F.y)){h=!0;break}}if(!h)return!0}}return!1}updateBatches(){if(!this.graphicsData.length){this.batchable=!0;return}if(!this.validateBatching())return;this.cacheDirty=this.dirty;const t=this.uvs,e=this.graphicsData;let s=null,i=null;this.batches.length>0&&(s=this.batches[this.batches.length-1],i=s.style);for(let l=this.shapeIndex;l<e.length;l++){this.shapeIndex++;const a=e[l],n=a.fillStyle,p=a.lineStyle;rt[a.type].build(a),a.matrix&&this.transformPoints(a.points,a.matrix),(n.visible||p.visible)&&this.processHoles(a.holes);for(let c=0;c<2;c++){const f=c===0?n:p;if(!f.visible)continue;const g=f.texture.baseTexture,y=this.indices.length,x=this.points.length/2;g.wrapMode=_t.REPEAT,c===0?this.processFill(a):this.processLine(a);const m=this.points.length/2-x;m!==0&&(s&&!this._compareStyles(i,f)&&(s.end(y,x),s=null),s||(s=Ct.pop()||new Kt,s.begin(f,y,x),this.batches.push(s),i=f),this.addUvs(this.points,t,f.texture,x,m,f.matrix))}}const h=this.indices.length,r=this.points.length/2;if(s&&s.end(h,r),this.batches.length===0){this.batchable=!0;return}const o=r>65535;this.indicesUint16&&this.indices.length===this.indicesUint16.length&&o===this.indicesUint16.BYTES_PER_ELEMENT>2?this.indicesUint16.set(this.indices):this.indicesUint16=o?new Uint32Array(this.indices):new Uint16Array(this.indices),this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}_compareStyles(t,e){return!(!t||!e||t.texture.baseTexture!==e.texture.baseTexture||t.color+t.alpha!==e.color+e.alpha||!!t.native!=!!e.native)}validateBatching(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(let t=0,e=this.graphicsData.length;t<e;t++){const s=this.graphicsData[t],i=s.fillStyle,h=s.lineStyle;if(i&&!i.texture.baseTexture.valid||h&&!h.texture.baseTexture.valid)return!1}return!0}packBatches(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);const t=this.batches;for(let e=0,s=t.length;e<s;e++){const i=t[e];for(let h=0;h<i.size;h++){const r=i.start+h;this.indicesUint16[r]=this.indicesUint16[r]-i.attribStart}}}isBatchable(){if(this.points.length>65535*2)return!1;const t=this.batches;for(let e=0;e<t.length;e++)if(t[e].style.native)return!1;return this.points.length<Rt.BATCHABLE_SIZE*2}buildDrawCalls(){let t=++xt._globalBatch;for(let p=0;p<this.drawCalls.length;p++)this.drawCalls[p].texArray.clear(),J.push(this.drawCalls[p]);this.drawCalls.length=0;const e=this.colors,s=this.textureIds;let i=J.pop();i||(i=new wt,i.texArray=new St),i.texArray.count=0,i.start=0,i.size=0,i.type=$.TRIANGLES;let h=0,r=null,o=0,l=!1,a=$.TRIANGLES,n=0;this.drawCalls.push(i);for(let p=0;p<this.batches.length;p++){const c=this.batches[p],f=8,g=c.style,y=g.texture.baseTexture;l!==!!g.native&&(l=!!g.native,a=l?$.LINES:$.TRIANGLES,r=null,h=f,t++),r!==y&&(r=y,y._batchEnabled!==t&&(h===f&&(t++,h=0,i.size>0&&(i=J.pop(),i||(i=new wt,i.texArray=new St),this.drawCalls.push(i)),i.start=n,i.size=0,i.texArray.count=0,i.type=a),y.touched=1,y._batchEnabled=t,y._batchLocation=h,y.wrapMode=_t.REPEAT,i.texArray.elements[i.texArray.count++]=y,h++)),i.size+=c.size,n+=c.size,o=y._batchLocation,this.addColors(e,g.color,g.alpha,c.attribSize,c.attribStart),this.addTextureIds(s,o,c.attribSize,c.attribStart)}xt._globalBatch=t,this.packAttributes()}packAttributes(){const t=this.points,e=this.uvs,s=this.colors,i=this.textureIds,h=new ArrayBuffer(t.length*3*4),r=new Float32Array(h),o=new Uint32Array(h);let l=0;for(let a=0;a<t.length/2;a++)r[l++]=t[a*2],r[l++]=t[a*2+1],r[l++]=e[a*2],r[l++]=e[a*2+1],o[l++]=s[a],r[l++]=i[a];this._buffer.update(h),this._indexBuffer.update(this.indicesUint16)}processFill(t){t.holes.length?Dt.triangulate(t,this):rt[t.type].triangulate(t,this)}processLine(t){vt(t,this);for(let e=0;e<t.holes.length;e++)vt(t.holes[e],this)}processHoles(t){for(let e=0;e<t.length;e++){const s=t[e];rt[s.type].build(s),s.matrix&&this.transformPoints(s.points,s.matrix)}}calculateBounds(){const t=this._bounds;t.clear(),t.addVertexData(this.points,0,this.points.length),t.pad(this.boundsPadding,this.boundsPadding)}transformPoints(t,e){for(let s=0;s<t.length/2;s++){const i=t[s*2],h=t[s*2+1];t[s*2]=e.a*i+e.c*h+e.tx,t[s*2+1]=e.b*i+e.d*h+e.ty}}addColors(t,e,s,i,h=0){const r=k.shared.setValue(e).toLittleEndianNumber(),o=k.shared.setValue(r).toPremultiplied(s);t.length=Math.max(t.length,h+i);for(let l=0;l<i;l++)t[h+l]=o}addTextureIds(t,e,s,i=0){t.length=Math.max(t.length,i+s);for(let h=0;h<s;h++)t[i+h]=e}addUvs(t,e,s,i,h,r=null){let o=0;const l=e.length,a=s.frame;for(;o<h;){let p=t[(i+o)*2],c=t[(i+o)*2+1];if(r){const f=r.a*p+r.c*c+r.tx;c=r.b*p+r.d*c+r.ty,p=f}o++,e.push(p/a.width,c/a.height)}const n=s.baseTexture;(a.width<n.width||a.height<n.height)&&this.adjustUvs(e,s,l,h)}adjustUvs(t,e,s,i){const h=e.baseTexture,r=1e-6,o=s+i*2,l=e.frame,a=l.width/h.width,n=l.height/h.height;let p=l.x/l.width,c=l.y/l.height,f=Math.floor(t[s]+r),g=Math.floor(t[s+1]+r);for(let y=s+2;y<o;y+=2)f=Math.min(f,Math.floor(t[y]+r)),g=Math.min(g,Math.floor(t[y+1]+r));p-=f,c-=g;for(let y=s;y<o;y+=2)t[y]=(t[y]+p)*a,t[y+1]=(t[y+1]+c)*n}};Et.BATCHABLE_SIZE=100;let te=Et;class ht{constructor(){this.color=16777215,this.alpha=1,this.texture=Y.WHITE,this.matrix=null,this.visible=!1,this.reset()}clone(){const t=new ht;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t}reset(){this.color=16777215,this.alpha=1,this.texture=Y.WHITE,this.matrix=null,this.visible=!1}destroy(){this.texture=null,this.matrix=null}}class dt extends ht{constructor(){super(...arguments),this.width=0,this.alignment=.5,this.native=!1,this.cap=L.BUTT,this.join=I.MITER,this.miterLimit=10}clone(){const t=new dt;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t.width=this.width,t.alignment=this.alignment,t.native=this.native,t.cap=this.cap,t.join=this.join,t.miterLimit=this.miterLimit,t}reset(){super.reset(),this.color=0,this.alignment=.5,this.width=0,this.native=!1,this.cap=L.BUTT,this.join=I.MITER,this.miterLimit=10}}const lt={},ot=class tt extends Qt{constructor(t=null){super(),this.shader=null,this.pluginName="batch",this.currentPath=null,this.batches=[],this.batchTint=-1,this.batchDirty=-1,this.vertexData=null,this._fillStyle=new ht,this._lineStyle=new dt,this._matrix=null,this._holeMode=!1,this.state=Ot.for2d(),this._geometry=t||new te,this._geometry.refCount++,this._transformID=-1,this._tintColor=new k(16777215),this.blendMode=Wt.NORMAL}get geometry(){return this._geometry}clone(){return this.finishPoly(),new tt(this._geometry)}set blendMode(t){this.state.blendMode=t}get blendMode(){return this.state.blendMode}get tint(){return this._tintColor.value}set tint(t){this._tintColor.setValue(t)}get fill(){return this._fillStyle}get line(){return this._lineStyle}lineStyle(t=null,e=0,s,i=.5,h=!1){return typeof t=="number"&&(t={width:t,color:e,alpha:s,alignment:i,native:h}),this.lineTextureStyle(t)}lineTextureStyle(t){const e={width:0,texture:Y.WHITE,color:t!=null&&t.texture?16777215:0,matrix:null,alignment:.5,native:!1,cap:L.BUTT,join:I.MITER,miterLimit:10};t=Object.assign(e,t),this.normalizeColor(t),this.currentPath&&this.startPoly();const s=t.width>0&&t.alpha>0;return s?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._lineStyle,{visible:s},t)):this._lineStyle.reset(),this}startPoly(){if(this.currentPath){const t=this.currentPath.points,e=this.currentPath.points.length;e>2&&(this.drawShape(this.currentPath),this.currentPath=new nt,this.currentPath.closeStroke=!1,this.currentPath.points.push(t[e-2],t[e-1]))}else this.currentPath=new nt,this.currentPath.closeStroke=!1}finishPoly(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)}moveTo(t,e){return this.startPoly(),this.currentPath.points[0]=t,this.currentPath.points[1]=e,this}lineTo(t,e){this.currentPath||this.moveTo(0,0);const s=this.currentPath.points,i=s[s.length-2],h=s[s.length-1];return(i!==t||h!==e)&&s.push(t,e),this}_initCurve(t=0,e=0){this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[t,e]):this.moveTo(t,e)}quadraticCurveTo(t,e,s,i){this._initCurve();const h=this.currentPath.points;return h.length===0&&this.moveTo(0,0),ut.curveTo(t,e,s,i,h),this}bezierCurveTo(t,e,s,i,h,r){return this._initCurve(),ct.curveTo(t,e,s,i,h,r,this.currentPath.points),this}arcTo(t,e,s,i,h){this._initCurve(t,e);const r=this.currentPath.points,o=Pt.curveTo(t,e,s,i,h,r);if(o){const{cx:l,cy:a,radius:n,startAngle:p,endAngle:c,anticlockwise:f}=o;this.arc(l,a,n,p,c,f)}return this}arc(t,e,s,i,h,r=!1){if(i===h)return this;if(!r&&h<=i?h+=at:r&&i<=h&&(i+=at),h-i===0)return this;const o=t+Math.cos(i)*s,l=e+Math.sin(i)*s,a=this._geometry.closePointEps;let n=this.currentPath?this.currentPath.points:null;if(n){const p=Math.abs(n[n.length-2]-o),c=Math.abs(n[n.length-1]-l);p<a&&c<a||n.push(o,l)}else this.moveTo(o,l),n=this.currentPath.points;return Pt.arc(o,l,t,e,s,i,h,r,n),this}beginFill(t=0,e){return this.beginTextureFill({texture:Y.WHITE,color:t,alpha:e})}normalizeColor(t){var s,i;const e=k.shared.setValue((s=t.color)!=null?s:0);t.color=e.toNumber(),(i=t.alpha)!=null||(t.alpha=e.alpha)}beginTextureFill(t){const e={texture:Y.WHITE,color:16777215,matrix:null};t=Object.assign(e,t),this.normalizeColor(t),this.currentPath&&this.startPoly();const s=t.alpha>0;return s?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._fillStyle,{visible:s},t)):this._fillStyle.reset(),this}endFill(){return this.finishPoly(),this._fillStyle.reset(),this}drawRect(t,e,s,i){return this.drawShape(new kt(t,e,s,i))}drawRoundedRect(t,e,s,i,h){return this.drawShape(new Ft(t,e,s,i,h))}drawCircle(t,e,s){return this.drawShape(new zt(t,e,s))}drawEllipse(t,e,s,i){return this.drawShape(new Ht(t,e,s,i))}drawPolygon(...t){let e,s=!0;const i=t[0];i.points?(s=i.closeStroke,e=i.points):Array.isArray(t[0])?e=t[0]:e=t;const h=new nt(e);return h.closeStroke=s,this.drawShape(h),this}drawShape(t){return this._holeMode?this._geometry.drawHole(t,this._matrix):this._geometry.drawShape(t,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this}clear(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this}isFastRect(){const t=this._geometry.graphicsData;return t.length===1&&t[0].shape.type===B.RECT&&!t[0].matrix&&!t[0].holes.length&&!(t[0].lineStyle.visible&&t[0].lineStyle.width)}_render(t){this.finishPoly();const e=this._geometry;e.updateBatches(),e.batchable?(this.batchDirty!==e.batchDirty&&this._populateBatches(),this._renderBatched(t)):(t.batch.flush(),this._renderDirect(t))}_populateBatches(){const t=this._geometry,e=this.blendMode,s=t.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=t.batchDirty,this.batches.length=s,this.vertexData=new Float32Array(t.points);for(let i=0;i<s;i++){const h=t.batches[i],r=h.style.color,o=new Float32Array(this.vertexData.buffer,h.attribStart*4*2,h.attribSize*2),l=new Float32Array(t.uvsFloat32.buffer,h.attribStart*4*2,h.attribSize*2),a=new Uint16Array(t.indicesUint16.buffer,h.start*2,h.size),n={vertexData:o,blendMode:e,indices:a,uvs:l,_batchRGB:k.shared.setValue(r).toRgbArray(),_tintRGB:r,_texture:h.style.texture,alpha:h.style.alpha,worldAlpha:1};this.batches[i]=n}}_renderBatched(t){if(this.batches.length){t.batch.setObjectRenderer(t.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(let e=0,s=this.batches.length;e<s;e++){const i=this.batches[e];i.worldAlpha=this.worldAlpha*i.alpha,t.plugins[this.pluginName].render(i)}}}_renderDirect(t){const e=this._resolveDirectShader(t),s=this._geometry,i=this.worldAlpha,h=e.uniforms,r=s.drawCalls;h.translationMatrix=this.transform.worldTransform,k.shared.setValue(this._tintColor).premultiply(i).toArray(h.tint),t.shader.bind(e),t.geometry.bind(s,e),t.state.set(this.state);for(let o=0,l=r.length;o<l;o++)this._renderDrawCallDirect(t,s.drawCalls[o])}_renderDrawCallDirect(t,e){const{texArray:s,type:i,size:h,start:r}=e,o=s.count;for(let l=0;l<o;l++)t.texture.bind(s.elements[l],l);t.geometry.draw(i,h,r)}_resolveDirectShader(t){let e=this.shader;const s=this.pluginName;if(!e){if(!lt[s]){const{maxTextures:i}=t.plugins[s],h=new Int32Array(i);for(let l=0;l<i;l++)h[l]=l;const r={tint:new Float32Array([1,1,1,1]),translationMatrix:new Vt,default:Nt.from({uSamplers:h},!0)},o=t.plugins[s]._shader.program;lt[s]=new qt(o,r)}e=lt[s]}return e}_calculateBounds(){this.finishPoly();const t=this._geometry;if(!t.graphicsData.length)return;const{minX:e,minY:s,maxX:i,maxY:h}=t.bounds;this._bounds.addFrame(this.transform,e,s,i,h)}containsPoint(t){return this.worldTransform.applyInverse(t,tt._TEMP_POINT),this._geometry.containsPoint(tt._TEMP_POINT)}calculateTints(){if(this.batchTint!==this.tint){this.batchTint=this._tintColor.toNumber();for(let t=0;t<this.batches.length;t++){const e=this.batches[t];e._tintRGB=k.shared.setValue(this._tintColor).multiply(e._batchRGB).toLittleEndianNumber()}}}calculateVertices(){const t=this.transform._worldID;if(this._transformID===t)return;this._transformID=t;const e=this.transform.worldTransform,s=e.a,i=e.b,h=e.c,r=e.d,o=e.tx,l=e.ty,a=this._geometry.points,n=this.vertexData;let p=0;for(let c=0;c<a.length;c+=2){const f=a[c],g=a[c+1];n[p++]=s*f+h*g+o,n[p++]=r*g+i*f+l}}closePath(){const t=this.currentPath;return t&&(t.closeStroke=!0,this.finishPoly()),this}setMatrix(t){return this._matrix=t,this}beginHole(){return this.finishPoly(),this._holeMode=!0,this}endHole(){return this.finishPoly(),this._holeMode=!1,this}destroy(t){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,super.destroy(t)}};ot.curves=z,ot._TEMP_POINT=new et;let pe=ot;export{pe as G};const Z=Math.PI*2,K=180/Math.PI,P=Math.PI/180;var D=(n=>(n[n.POLY=0]="POLY",n[n.RECT=1]="RECT",n[n.CIRC=2]="CIRC",n[n.ELIP=3]="ELIP",n[n.RREC=4]="RREC",n))(D||{});class u{constructor(t=0,i=0){this.x=0,this.y=0,this.x=t,this.y=i}clone(){return new u(this.x,this.y)}copyFrom(t){return this.set(t.x,t.y),this}copyTo(t){return t.set(this.x,this.y),t}equals(t){return t.x===this.x&&t.y===this.y}set(t=0,i=t){return this.x=t,this.y=i,this}}u.prototype.toString=function(){return`[@pixi/math:Point x=${this.x} y=${this.y}]`};const T=[new u,new u,new u,new u];class f{constructor(t=0,i=0,s=0,h=0){this.x=Number(t),this.y=Number(i),this.width=Number(s),this.height=Number(h),this.type=D.RECT}get left(){return this.x}get right(){return this.x+this.width}get top(){return this.y}get bottom(){return this.y+this.height}static get EMPTY(){return new f(0,0,0,0)}clone(){return new f(this.x,this.y,this.width,this.height)}copyFrom(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this}copyTo(t){return t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t}contains(t,i){return this.width<=0||this.height<=0?!1:t>=this.x&&t<this.x+this.width&&i>=this.y&&i<this.y+this.height}intersects(t,i){if(!i){const V=this.x<t.x?t.x:this.x;if((this.right>t.right?t.right:this.right)<=V)return!1;const B=this.y<t.y?t.y:this.y;return(this.bottom>t.bottom?t.bottom:this.bottom)>B}const s=this.left,h=this.right,e=this.top,o=this.bottom;if(h<=s||o<=e)return!1;const y=T[0].set(t.left,t.top),c=T[1].set(t.left,t.bottom),r=T[2].set(t.right,t.top),a=T[3].set(t.right,t.bottom);if(r.x<=y.x||c.y<=y.y)return!1;const R=Math.sign(i.a*i.d-i.b*i.c);if(R===0||(i.apply(y,y),i.apply(c,c),i.apply(r,r),i.apply(a,a),Math.max(y.x,c.x,r.x,a.x)<=s||Math.min(y.x,c.x,r.x,a.x)>=h||Math.max(y.y,c.y,r.y,a.y)<=e||Math.min(y.y,c.y,r.y,a.y)>=o))return!1;const g=R*(c.y-y.y),M=R*(y.x-c.x),O=g*s+M*e,A=g*h+M*e,S=g*s+M*o,F=g*h+M*o;if(Math.max(O,A,S,F)<=g*y.x+M*y.y||Math.min(O,A,S,F)>=g*a.x+M*a.y)return!1;const I=R*(y.y-r.y),$=R*(r.x-y.x),W=I*s+$*e,Y=I*h+$*e,j=I*s+$*o,q=I*h+$*o;return!(Math.max(W,Y,j,q)<=I*y.x+$*y.y||Math.min(W,Y,j,q)>=I*a.x+$*a.y)}pad(t=0,i=t){return this.x-=t,this.y-=i,this.width+=t*2,this.height+=i*2,this}fit(t){const i=Math.max(this.x,t.x),s=Math.min(this.x+this.width,t.x+t.width),h=Math.max(this.y,t.y),e=Math.min(this.y+this.height,t.y+t.height);return this.x=i,this.width=Math.max(s-i,0),this.y=h,this.height=Math.max(e-h,0),this}ceil(t=1,i=.001){const s=Math.ceil((this.x+this.width-i)*t)/t,h=Math.ceil((this.y+this.height-i)*t)/t;return this.x=Math.floor((this.x+i)*t)/t,this.y=Math.floor((this.y+i)*t)/t,this.width=s-this.x,this.height=h-this.y,this}enlarge(t){const i=Math.min(this.x,t.x),s=Math.max(this.x+this.width,t.x+t.width),h=Math.min(this.y,t.y),e=Math.max(this.y+this.height,t.y+t.height);return this.x=i,this.width=s-i,this.y=h,this.height=e-h,this}}f.prototype.toString=function(){return`[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`};class E{constructor(t=0,i=0,s=0){this.x=t,this.y=i,this.radius=s,this.type=D.CIRC}clone(){return new E(this.x,this.y,this.radius)}contains(t,i){if(this.radius<=0)return!1;const s=this.radius*this.radius;let h=this.x-t,e=this.y-i;return h*=h,e*=e,h+e<=s}getBounds(){return new f(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)}}E.prototype.toString=function(){return`[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`};class m{constructor(t=0,i=0,s=0,h=0){this.x=t,this.y=i,this.width=s,this.height=h,this.type=D.ELIP}clone(){return new m(this.x,this.y,this.width,this.height)}contains(t,i){if(this.width<=0||this.height<=0)return!1;let s=(t-this.x)/this.width,h=(i-this.y)/this.height;return s*=s,h*=h,s+h<=1}getBounds(){return new f(this.x-this.width,this.y-this.height,this.width,this.height)}}m.prototype.toString=function(){return`[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`};class L{constructor(...t){let i=Array.isArray(t[0])?t[0]:t;if(typeof i[0]!="number"){const s=[];for(let h=0,e=i.length;h<e;h++)s.push(i[h].x,i[h].y);i=s}this.points=i,this.type=D.POLY,this.closeStroke=!0}clone(){const t=this.points.slice(),i=new L(t);return i.closeStroke=this.closeStroke,i}contains(t,i){let s=!1;const h=this.points.length/2;for(let e=0,o=h-1;e<h;o=e++){const y=this.points[e*2],c=this.points[e*2+1],r=this.points[o*2],a=this.points[o*2+1];c>i!=a>i&&t<(r-y)*((i-c)/(a-c))+y&&(s=!s)}return s}}L.prototype.toString=function(){return`[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce((n,t)=>`${n}, ${t}`,"")}]`};class N{constructor(t=0,i=0,s=0,h=0,e=20){this.x=t,this.y=i,this.width=s,this.height=h,this.radius=e,this.type=D.RREC}clone(){return new N(this.x,this.y,this.width,this.height,this.radius)}contains(t,i){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&i>=this.y&&i<=this.y+this.height){const s=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(i>=this.y+s&&i<=this.y+this.height-s||t>=this.x+s&&t<=this.x+this.width-s)return!0;let h=t-(this.x+s),e=i-(this.y+s);const o=s*s;if(h*h+e*e<=o||(h=t-(this.x+this.width-s),h*h+e*e<=o)||(e=i-(this.y+this.height-s),h*h+e*e<=o)||(h=t-(this.x+s),h*h+e*e<=o))return!0}return!1}}N.prototype.toString=function(){return`[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`};class d{constructor(t=1,i=0,s=0,h=1,e=0,o=0){this.array=null,this.a=t,this.b=i,this.c=s,this.d=h,this.tx=e,this.ty=o}fromArray(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]}set(t,i,s,h,e,o){return this.a=t,this.b=i,this.c=s,this.d=h,this.tx=e,this.ty=o,this}toArray(t,i){this.array||(this.array=new Float32Array(9));const s=i||this.array;return t?(s[0]=this.a,s[1]=this.b,s[2]=0,s[3]=this.c,s[4]=this.d,s[5]=0,s[6]=this.tx,s[7]=this.ty,s[8]=1):(s[0]=this.a,s[1]=this.c,s[2]=this.tx,s[3]=this.b,s[4]=this.d,s[5]=this.ty,s[6]=0,s[7]=0,s[8]=1),s}apply(t,i){i=i||new u;const s=t.x,h=t.y;return i.x=this.a*s+this.c*h+this.tx,i.y=this.b*s+this.d*h+this.ty,i}applyInverse(t,i){i=i||new u;const s=1/(this.a*this.d+this.c*-this.b),h=t.x,e=t.y;return i.x=this.d*s*h+-this.c*s*e+(this.ty*this.c-this.tx*this.d)*s,i.y=this.a*s*e+-this.b*s*h+(-this.ty*this.a+this.tx*this.b)*s,i}translate(t,i){return this.tx+=t,this.ty+=i,this}scale(t,i){return this.a*=t,this.d*=i,this.c*=t,this.b*=i,this.tx*=t,this.ty*=i,this}rotate(t){const i=Math.cos(t),s=Math.sin(t),h=this.a,e=this.c,o=this.tx;return this.a=h*i-this.b*s,this.b=h*s+this.b*i,this.c=e*i-this.d*s,this.d=e*s+this.d*i,this.tx=o*i-this.ty*s,this.ty=o*s+this.ty*i,this}append(t){const i=this.a,s=this.b,h=this.c,e=this.d;return this.a=t.a*i+t.b*h,this.b=t.a*s+t.b*e,this.c=t.c*i+t.d*h,this.d=t.c*s+t.d*e,this.tx=t.tx*i+t.ty*h+this.tx,this.ty=t.tx*s+t.ty*e+this.ty,this}setTransform(t,i,s,h,e,o,y,c,r){return this.a=Math.cos(y+r)*e,this.b=Math.sin(y+r)*e,this.c=-Math.sin(y-c)*o,this.d=Math.cos(y-c)*o,this.tx=t-(s*this.a+h*this.c),this.ty=i-(s*this.b+h*this.d),this}prepend(t){const i=this.tx;if(t.a!==1||t.b!==0||t.c!==0||t.d!==1){const s=this.a,h=this.c;this.a=s*t.a+this.b*t.c,this.b=s*t.b+this.b*t.d,this.c=h*t.a+this.d*t.c,this.d=h*t.b+this.d*t.d}return this.tx=i*t.a+this.ty*t.c+t.tx,this.ty=i*t.b+this.ty*t.d+t.ty,this}decompose(t){const i=this.a,s=this.b,h=this.c,e=this.d,o=t.pivot,y=-Math.atan2(-h,e),c=Math.atan2(s,i),r=Math.abs(y+c);return r<1e-5||Math.abs(Z-r)<1e-5?(t.rotation=c,t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=y,t.skew.y=c),t.scale.x=Math.sqrt(i*i+s*s),t.scale.y=Math.sqrt(h*h+e*e),t.position.x=this.tx+(o.x*i+o.y*h),t.position.y=this.ty+(o.x*s+o.y*e),t}invert(){const t=this.a,i=this.b,s=this.c,h=this.d,e=this.tx,o=t*h-i*s;return this.a=h/o,this.b=-i/o,this.c=-s/o,this.d=t/o,this.tx=(s*this.ty-h*e)/o,this.ty=-(t*this.ty-i*e)/o,this}identity(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this}clone(){const t=new d;return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyTo(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t}copyFrom(t){return this.a=t.a,this.b=t.b,this.c=t.c,this.d=t.d,this.tx=t.tx,this.ty=t.ty,this}static get IDENTITY(){return new d}static get TEMP_MATRIX(){return new d}}d.prototype.toString=function(){return`[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`};const p=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],l=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],b=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],w=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],v=[],G=[],k=Math.sign;function z(){for(let n=0;n<16;n++){const t=[];v.push(t);for(let i=0;i<16;i++){const s=k(p[n]*p[i]+b[n]*l[i]),h=k(l[n]*p[i]+w[n]*l[i]),e=k(p[n]*b[i]+b[n]*w[i]),o=k(l[n]*b[i]+w[n]*w[i]);for(let y=0;y<16;y++)if(p[y]===s&&l[y]===h&&b[y]===e&&w[y]===o){t.push(y);break}}}for(let n=0;n<16;n++){const t=new d;t.set(p[n],l[n],b[n],w[n],0,0),G.push(t)}}z();const x={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:n=>p[n],uY:n=>l[n],vX:n=>b[n],vY:n=>w[n],inv:n=>n&8?n&15:-n&7,add:(n,t)=>v[n][t],sub:(n,t)=>v[n][x.inv(t)],rotate180:n=>n^4,isVertical:n=>(n&3)===2,byDirection:(n,t)=>Math.abs(n)*2<=Math.abs(t)?t>=0?x.S:x.N:Math.abs(t)*2<=Math.abs(n)?n>0?x.E:x.W:t>0?n>0?x.SE:x.SW:n>0?x.NE:x.NW,matrixAppendRotationInv:(n,t,i=0,s=0)=>{const h=G[x.inv(t)];h.tx=i,h.ty=s,n.append(h)}};class _{constructor(t,i,s=0,h=0){this._x=s,this._y=h,this.cb=t,this.scope=i}clone(t=this.cb,i=this.scope){return new _(t,i,this._x,this._y)}set(t=0,i=t){return(this._x!==t||this._y!==i)&&(this._x=t,this._y=i,this.cb.call(this.scope)),this}copyFrom(t){return(this._x!==t.x||this._y!==t.y)&&(this._x=t.x,this._y=t.y,this.cb.call(this.scope)),this}copyTo(t){return t.set(this._x,this._y),t}equals(t){return t.x===this._x&&t.y===this._y}get x(){return this._x}set x(t){this._x!==t&&(this._x=t,this.cb.call(this.scope))}get y(){return this._y}set y(t){this._y!==t&&(this._y=t,this.cb.call(this.scope))}}_.prototype.toString=function(){return`[@pixi/math:ObservablePoint x=${this.x} y=${this.y} scope=${this.scope}]`};const C=class{constructor(){this.worldTransform=new d,this.localTransform=new d,this.position=new _(this.onChange,this,0,0),this.scale=new _(this.onChange,this,1,1),this.pivot=new _(this.onChange,this,0,0),this.skew=new _(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}onChange(){this._localID++}updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++}updateLocalTransform(){const n=this.localTransform;this._localID!==this._currentLocalID&&(n.a=this._cx*this.scale.x,n.b=this._sx*this.scale.x,n.c=this._cy*this.scale.y,n.d=this._sy*this.scale.y,n.tx=this.position.x-(this.pivot.x*n.a+this.pivot.y*n.c),n.ty=this.position.y-(this.pivot.x*n.b+this.pivot.y*n.d),this._currentLocalID=this._localID,this._parentID=-1)}updateTransform(n){const t=this.localTransform;if(this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==n._worldID){const i=n.worldTransform,s=this.worldTransform;s.a=t.a*i.a+t.b*i.c,s.b=t.a*i.b+t.b*i.d,s.c=t.c*i.a+t.d*i.c,s.d=t.c*i.b+t.d*i.d,s.tx=t.tx*i.a+t.ty*i.c+i.tx,s.ty=t.tx*i.b+t.ty*i.d+i.ty,this._parentID=n._worldID,this._worldID++}}setFromMatrix(n){n.decompose(this),this._localID++}get rotation(){return this._rotation}set rotation(n){this._rotation!==n&&(this._rotation=n,this.updateSkew())}};C.IDENTITY=new C;let J=C;J.prototype.toString=function(){return`[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`};export{E as C,P as D,m as E,d as M,_ as O,u as P,f as R,D as S,J as T,K as a,Z as b,L as c,N as d,x as g};
import{M as m,a as p,b as n}from"./@pixi_mesh@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2_.a36f1bab.js";import{T as u}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";class T extends m{constructor(e=u.EMPTY,r,o,s,i){const t=new p(r,o,s);t.getBuffer("aVertexPosition").static=!1;const a=new n(e);super(t,a,null,i),this.autoUpdate=!0}get vertices(){return this.geometry.getBuffer("aVertexPosition").data}set vertices(e){this.geometry.getBuffer("aVertexPosition").data=e}_render(e){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),super._render(e)}}export{T as S};import{i as T,G as I,k as c,j as C,P as B,l as w}from"./@pixi_core@7.4.2.ae619cd2.js";import{C as p}from"./@pixi_color@7.4.2.090b5ebd.js";import{D as _,T as v}from"./@pixi_constants@7.4.2.8b356162.js";import{c as P,P as A,M as U}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import{s as y}from"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{C as S}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";class E{constructor(t,e){this.uvBuffer=t,this.uvMatrix=e,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}update(t){if(!t&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)return;this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;const e=this.uvBuffer.data;(!this.data||this.data.length!==e.length)&&(this.data=new Float32Array(e.length)),this.uvMatrix.multiplyUvs(e,this.data),this._updateID++}}const x=new A,D=new P,M=class b extends S{constructor(t,e,r,s=_.TRIANGLES){super(),this.geometry=t,this.shader=e,this.state=r||T.for2d(),this.drawMode=s,this.start=0,this.size=0,this.uvs=null,this.indices=null,this.vertexData=new Float32Array(1),this.vertexDirty=-1,this._transformID=-1,this._roundPixels=y.ROUND_PIXELS,this.batchUvs=null}get geometry(){return this._geometry}set geometry(t){this._geometry!==t&&(this._geometry&&(this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose()),this._geometry=t,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)}get uvBuffer(){return this.geometry.buffers[1]}get verticesBuffer(){return this.geometry.buffers[0]}set material(t){this.shader=t}get material(){return this.shader}set blendMode(t){this.state.blendMode=t}get blendMode(){return this.state.blendMode}set roundPixels(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t}get roundPixels(){return this._roundPixels}get tint(){return"tint"in this.shader?this.shader.tint:null}set tint(t){this.shader.tint=t}get tintValue(){return this.shader.tintValue}get texture(){return"texture"in this.shader?this.shader.texture:null}set texture(t){this.shader.texture=t}_render(t){const e=this.geometry.buffers[0].data;this.shader.batchable&&this.drawMode===_.TRIANGLES&&e.length<b.BATCHABLE_SIZE*2?this._renderToBatch(t):this._renderDefault(t)}_renderDefault(t){const e=this.shader;e.alpha=this.worldAlpha,e.update&&e.update(),t.batch.flush(),e.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),t.shader.bind(e),t.state.set(this.state),t.geometry.bind(this.geometry,e),t.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)}_renderToBatch(t){const e=this.geometry,r=this.shader;r.uvMatrix&&(r.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=e.indexBuffer.data,this._tintRGB=r._tintRGB,this._texture=r.texture;const s=this.material.pluginName;t.batch.setObjectRenderer(t.plugins[s]),t.plugins[s].render(this)}calculateVertices(){const t=this.geometry.buffers[0],e=t.data,r=t._updateID;if(r===this.vertexDirty&&this._transformID===this.transform._worldID)return;this._transformID=this.transform._worldID,this.vertexData.length!==e.length&&(this.vertexData=new Float32Array(e.length));const s=this.transform.worldTransform,n=s.a,u=s.b,a=s.c,l=s.d,d=s.tx,m=s.ty,o=this.vertexData;for(let i=0;i<o.length/2;i++){const h=e[i*2],g=e[i*2+1];o[i*2]=n*h+a*g+d,o[i*2+1]=u*h+l*g+m}if(this._roundPixels){const i=y.RESOLUTION;for(let h=0;h<o.length;++h)o[h]=Math.round(o[h]*i)/i}this.vertexDirty=r}calculateUvs(){const t=this.geometry.buffers[1],e=this.shader;e.uvMatrix.isSimple?this.uvs=t.data:(this.batchUvs||(this.batchUvs=new E(t,e.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)}_calculateBounds(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)}containsPoint(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,x);const e=this.geometry.getBuffer("aVertexPosition").data,r=D.points,s=this.geometry.getIndex().data,n=s.length,u=this.drawMode===4?3:1;for(let a=0;a+2<n;a+=u){const l=s[a]*2,d=s[a+1]*2,m=s[a+2]*2;if(r[0]=e[l],r[1]=e[l+1],r[2]=e[d],r[3]=e[d+1],r[4]=e[m],r[5]=e[m+1],D.contains(x.x,x.y))return!0}return!1}destroy(t){super.destroy(t),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null}};M.BATCHABLE_SIZE=100;let X=M;class q extends I{constructor(t,e,r){super();const s=new c(t),n=new c(e,!0),u=new c(r,!0,!0);this.addAttribute("aVertexPosition",s,2,!1,v.FLOAT).addAttribute("aTextureCoord",n,2,!1,v.FLOAT).addIndex(u),this._updateId=-1}get vertexDirtyId(){return this.buffers[0]._updateID}}var N=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,V=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;class J extends C{constructor(t,e){const r={uSampler:t,alpha:1,uTextureMatrix:U.IDENTITY,uColor:new Float32Array([1,1,1,1])};e=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},e),e.uniforms&&Object.assign(r,e.uniforms),super(e.program||B.from(V,N),r),this._colorDirty=!1,this.uvMatrix=new w(t),this.batchable=e.program===void 0,this.pluginName=e.pluginName,this._tintColor=new p(e.tint),this._tintRGB=this._tintColor.toLittleEndianNumber(),this._colorDirty=!0,this.alpha=e.alpha}get texture(){return this.uniforms.uSampler}set texture(t){this.uniforms.uSampler!==t&&(!this.uniforms.uSampler.baseTexture.alphaMode!=!t.baseTexture.alphaMode&&(this._colorDirty=!0),this.uniforms.uSampler=t,this.uvMatrix.texture=t)}set alpha(t){t!==this._alpha&&(this._alpha=t,this._colorDirty=!0)}get alpha(){return this._alpha}set tint(t){t!==this.tint&&(this._tintColor.setValue(t),this._tintRGB=this._tintColor.toLittleEndianNumber(),this._colorDirty=!0)}get tint(){return this._tintColor.value}get tintValue(){return this._tintColor.toNumber()}update(){if(this._colorDirty){this._colorDirty=!1;const t=this.texture.baseTexture.alphaMode;p.shared.setValue(this._tintColor).premultiply(this._alpha,t).toArray(this.uniforms.uColor)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)}}export{X as M,q as a,J as b};import{R as g,B as u,T as m}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{R as B,M as x}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{u as D}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{D as e}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";import{S as T}from"./@pixi_sprite@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2_.de6f4526.js";const y=new x;e.prototype._cacheAsBitmap=!1;e.prototype._cacheData=null;e.prototype._cacheAsBitmapResolution=null;e.prototype._cacheAsBitmapMultisample=null;class b{constructor(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}}Object.defineProperties(e.prototype,{cacheAsBitmapResolution:{get(){return this._cacheAsBitmapResolution},set(t){t!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=t,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get(){return this._cacheAsBitmapMultisample},set(t){t!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=t,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get(){return this._cacheAsBitmap},set(t){if(this._cacheAsBitmap===t)return;this._cacheAsBitmap=t;let a;t?(this._cacheData||(this._cacheData=new b),a=this._cacheData,a.originalRender=this.render,a.originalRenderCanvas=this.renderCanvas,a.originalUpdateTransform=this.updateTransform,a.originalCalculateBounds=this.calculateBounds,a.originalGetLocalBounds=this.getLocalBounds,a.originalDestroy=this.destroy,a.originalContainsPoint=this.containsPoint,a.originalMask=this._mask,a.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(a=this._cacheData,a.sprite&&this._destroyCachedDisplayObject(),this.render=a.originalRender,this.renderCanvas=a.originalRenderCanvas,this.calculateBounds=a.originalCalculateBounds,this.getLocalBounds=a.originalGetLocalBounds,this.destroy=a.originalDestroy,this.updateTransform=a.originalUpdateTransform,this.containsPoint=a.originalContainsPoint,this._mask=a.originalMask,this.filterArea=a.originalFilterArea)}}});e.prototype._renderCached=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(t),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(t))};e.prototype._initCachedDisplayObject=function(t){var _,f,C;if((_=this._cacheData)!=null&&_.sprite)return;const a=this.alpha;this.alpha=1,t.batch.flush();const i=this.getLocalBounds(new B,!0);if((f=this.filters)!=null&&f.length){const A=this.filters[0].padding;i.pad(A)}const n=this.cacheAsBitmapResolution||t.resolution;i.ceil(n),i.width=Math.max(i.width,1/n),i.height=Math.max(i.height,1/n);const p=t.renderTexture.current,o=t.renderTexture.sourceFrame.clone(),c=t.renderTexture.destinationFrame.clone(),l=t.projection.transform,h=g.create({width:i.width,height:i.height,resolution:n,multisample:(C=this.cacheAsBitmapMultisample)!=null?C:t.multisample}),s=`cacheAsBitmap_${D()}`;this._cacheData.textureCacheId=s,u.addToCache(h.baseTexture,s),m.addToCache(h,s);const d=this.transform.localTransform.copyTo(y).invert().translate(-i.x,-i.y);this.render=this._cacheData.originalRender,t.render(this,{renderTexture:h,clear:!0,transform:d,skipUpdateTransform:!1}),t.framebuffer.blit(),t.projection.transform=l,t.renderTexture.bind(p,o,c),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=a;const r=new T(h);r.transform.worldTransform=this.transform.worldTransform,r.anchor.x=-(i.x/i.width),r.anchor.y=-(i.y/i.height),r.alpha=a,r._bounds=this._bounds,this._cacheData.sprite=r,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=r.containsPoint.bind(r)};e.prototype._renderCachedCanvas=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(t),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(t))};e.prototype._initCachedDisplayObjectCanvas=function(t){var d;if((d=this._cacheData)!=null&&d.sprite)return;const a=this.getLocalBounds(new B,!0),i=this.alpha;this.alpha=1;const n=t.canvasContext.activeContext,p=t._projTransform,o=this.cacheAsBitmapResolution||t.resolution;a.ceil(o),a.width=Math.max(a.width,1/o),a.height=Math.max(a.height,1/o);const c=g.create({width:a.width,height:a.height,resolution:o}),l=`cacheAsBitmap_${D()}`;this._cacheData.textureCacheId=l,u.addToCache(c.baseTexture,l),m.addToCache(c,l);const h=y;this.transform.localTransform.copyTo(h),h.invert(),h.tx-=a.x,h.ty-=a.y,this.renderCanvas=this._cacheData.originalRenderCanvas,t.render(this,{renderTexture:c,clear:!0,transform:h,skipUpdateTransform:!1}),t.canvasContext.activeContext=n,t._projTransform=p,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=i;const s=new T(c);s.transform.worldTransform=this.transform.worldTransform,s.anchor.x=-(a.x/a.width),s.anchor.y=-(a.y/a.height),s.alpha=i,s._bounds=this._bounds,this._cacheData.sprite=s,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=t._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=s.containsPoint.bind(s)};e.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};e.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};e.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,u.removeFromCache(this._cacheData.textureCacheId),m.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};e.prototype._cacheAsBitmapDestroy=function(t){this.cacheAsBitmap=!1,this.destroy(t)};
  
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,V=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;class J extends C{constructor(t,e){const r={uSampler:t,alpha:1,uTextureMatrix:U.IDENTITY,uColor:new Float32Array([1,1,1,1])};e=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},e),e.uniforms&&Object.assign(r,e.uniforms),super(e.program||B.from(V,N),r),this._colorDirty=!1,this.uvMatrix=new w(t),this.batchable=e.program===void 0,this.pluginName=e.pluginName,this._tintColor=new p(e.tint),this._tintRGB=this._tintColor.toLittleEndianNumber(),this._colorDirty=!0,this.alpha=e.alpha}get texture(){return this.uniforms.uSampler}set texture(t){this.uniforms.uSampler!==t&&(!this.uniforms.uSampler.baseTexture.alphaMode!=!t.baseTexture.alphaMode&&(this._colorDirty=!0),this.uniforms.uSampler=t,this.uvMatrix.texture=t)}set alpha(t){t!==this._alpha&&(this._alpha=t,this._colorDirty=!0)}get alpha(){return this._alpha}set tint(t){t!==this.tint&&(this._tintColor.setValue(t),this._tintRGB=this._tintColor.toLittleEndianNumber(),this._colorDirty=!0)}get tint(){return this._tintColor.value}get tintValue(){return this._tintColor.toNumber()}update(){if(this._colorDirty){this._colorDirty=!1;const t=this.texture.baseTexture.alphaMode;p.shared.setValue(this._tintColor).premultiply(this._alpha,t).toArray(this.uniforms.uColor)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)}}export{X as M,q as a,J as b};
import{D as l,C as h}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";import"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";l.prototype.name=null;h.prototype.getChildByName=function(r,n){for(let t=0,i=this.children.length;t<i;t++)if(this.children[t].name===r)return this.children[t];if(n)for(let t=0,i=this.children.length;t<i;t++){const e=this.children[t];if(!e.getChildByName)continue;const o=e.getChildByName(r,!0);if(o)return o}return null};import"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{P as i}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{D as r}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";r.prototype.getGlobalPosition=function(t=new i,o=!1){return this.parent?this.parent.toGlobal(this.position,t,o):(t.x=this.position.x,t.y=this.position.y),t};
 import{G as D,k as v,O as B,j as _,i as z}from"./@pixi_core@7.4.2.ae619cd2.js";import{C as g}from"./@pixi_color@7.4.2.090b5ebd.js";import{M as C}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{h as T,j as w}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";import{T as f}from"./@pixi_constants@7.4.2.8b356162.js";import{E as N,e as U}from"./@pixi_extensions@7.4.2.089ce807.js";class b{constructor(s,a,n){this.geometry=new D,this.indexBuffer=null,this.size=n,this.dynamicProperties=[],this.staticProperties=[];for(let i=0;i<s.length;++i){let e=s[i];e={attributeName:e.attributeName,size:e.size,uploadFunction:e.uploadFunction,type:e.type||f.FLOAT,offset:e.offset},a[i]?this.dynamicProperties.push(e):this.staticProperties.push(e)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}initBuffers(){const s=this.geometry;let a=0;this.indexBuffer=new v(T(this.size),!0,!0),s.addIndex(this.indexBuffer),this.dynamicStride=0;for(let t=0;t<this.dynamicProperties.length;++t){const o=this.dynamicProperties[t];o.offset=a,a+=o.size,this.dynamicStride+=o.size}const n=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(n),this.dynamicDataUint32=new Uint32Array(n),this.dynamicBuffer=new v(this.dynamicData,!1,!1);let i=0;this.staticStride=0;for(let t=0;t<this.staticProperties.length;++t){const o=this.staticProperties[t];o.offset=i,i+=o.size,this.staticStride+=o.size}const e=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(e),this.staticDataUint32=new Uint32Array(e),this.staticBuffer=new v(this.staticData,!0,!1);for(let t=0;t<this.dynamicProperties.length;++t){const o=this.dynamicProperties[t];s.addAttribute(o.attributeName,this.dynamicBuffer,0,o.type===f.UNSIGNED_BYTE,o.type,this.dynamicStride*4,o.offset*4)}for(let t=0;t<this.staticProperties.length;++t){const o=this.staticProperties[t];s.addAttribute(o.attributeName,this.staticBuffer,0,o.type===f.UNSIGNED_BYTE,o.type,this.staticStride*4,o.offset*4)}}uploadDynamic(s,a,n){for(let i=0;i<this.dynamicProperties.length;i++){const e=this.dynamicProperties[i];e.uploadFunction(s,a,n,e.type===f.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,e.offset)}this.dynamicBuffer._updateID++}uploadStatic(s,a,n){for(let i=0;i<this.staticProperties.length;i++){const e=this.staticProperties[i];e.uploadFunction(s,a,n,e.type===f.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,e.offset)}this.staticBuffer._updateID++}destroy(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()}}var R=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,E=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;class P extends B{constructor(s){super(s),this.shader=null,this.properties=null,this.tempMatrix=new C,this.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:this.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:this.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:this.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:this.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:f.UNSIGNED_BYTE,uploadFunction:this.uploadTint,offset:0}],this.shader=_.from(E,R,{}),this.state=z.for2d()}render(s){const a=s.children,n=s._maxSize,i=s._batchSize,e=this.renderer;let t=a.length;if(t===0)return;t>n&&!s.autoResize&&(t=n);let o=s._buffers;o||(o=s._buffers=this.generateBuffers(s));const r=a[0]._texture.baseTexture,u=r.alphaMode>0;this.state.blendMode=w(s.blendMode,u),e.state.set(this.state);const p=e.gl,x=s.worldTransform.copyTo(this.tempMatrix);x.prepend(e.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=x.toArray(!0),this.shader.uniforms.uColor=g.shared.setValue(s.tintRgb).premultiply(s.worldAlpha,u).toArray(this.shader.uniforms.uColor),this.shader.uniforms.uSampler=r,this.renderer.shader.bind(this.shader);let h=!1;for(let m=0,d=0;m<t;m+=i,d+=1){let c=t-m;c>i&&(c=i),d>=o.length&&o.push(this._generateOneMoreBuffer(s));const l=o[d];l.uploadDynamic(a,m,c);const y=s._bufferUpdateIDs[d]||0;h=h||l._updateID<y,h&&(l._updateID=s._updateID,l.uploadStatic(a,m,c)),e.geometry.bind(l.geometry),p.drawElements(p.TRIANGLES,c*6,p.UNSIGNED_SHORT,0)}}generateBuffers(s){const a=[],n=s._maxSize,i=s._batchSize,e=s._properties;for(let t=0;t<n;t+=i)a.push(new b(this.properties,e,i));return a}_generateOneMoreBuffer(s){const a=s._batchSize,n=s._properties;return new b(this.properties,n,a)}uploadVertices(s,a,n,i,e,t){let o=0,r=0,u=0,p=0;for(let x=0;x<n;++x){const h=s[a+x],m=h._texture,d=h.scale.x,c=h.scale.y,l=m.trim,y=m.orig;l?(r=l.x-h.anchor.x*y.width,o=r+l.width,p=l.y-h.anchor.y*y.height,u=p+l.height):(o=y.width*(1-h.anchor.x),r=y.width*-h.anchor.x,u=y.height*(1-h.anchor.y),p=y.height*-h.anchor.y),i[t]=r*d,i[t+1]=p*c,i[t+e]=o*d,i[t+e+1]=p*c,i[t+e*2]=o*d,i[t+e*2+1]=u*c,i[t+e*3]=r*d,i[t+e*3+1]=u*c,t+=e*4}}uploadPosition(s,a,n,i,e,t){for(let o=0;o<n;o++){const r=s[a+o].position;i[t]=r.x,i[t+1]=r.y,i[t+e]=r.x,i[t+e+1]=r.y,i[t+e*2]=r.x,i[t+e*2+1]=r.y,i[t+e*3]=r.x,i[t+e*3+1]=r.y,t+=e*4}}uploadRotation(s,a,n,i,e,t){for(let o=0;o<n;o++){const r=s[a+o].rotation;i[t]=r,i[t+e]=r,i[t+e*2]=r,i[t+e*3]=r,t+=e*4}}uploadUvs(s,a,n,i,e,t){for(let o=0;o<n;++o){const r=s[a+o]._texture._uvs;r?(i[t]=r.x0,i[t+1]=r.y0,i[t+e]=r.x1,i[t+e+1]=r.y1,i[t+e*2]=r.x2,i[t+e*2+1]=r.y2,i[t+e*3]=r.x3,i[t+e*3+1]=r.y3,t+=e*4):(i[t]=0,i[t+1]=0,i[t+e]=0,i[t+e+1]=0,i[t+e*2]=0,i[t+e*2+1]=0,i[t+e*3]=0,i[t+e*3+1]=0,t+=e*4)}}uploadTint(s,a,n,i,e,t){for(let o=0;o<n;++o){const r=s[a+o],u=g.shared.setValue(r._tintRGB).toPremultiplied(r.alpha,r.texture.baseTexture.alphaMode>0);i[t]=u,i[t+e]=u,i[t+e*2]=u,i[t+e*3]=u,t+=e*4}}destroy(){super.destroy(),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null}}P.extension={name:"particle",type:N.RendererPlugin};U.add(P);
import{T as l,B as h}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import{s as k}from"./@pixi_settings@7.4.2.aad2afb5.js";import{T as n,U as u}from"./@pixi_ticker@7.4.2.206acfd7.js";import{a as m}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{C as H}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";import{T as d,a as p,b as P}from"./@pixi_text@7.4.2_@pixi_core@7.4.2_@pixi_sprite@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__.5a0a0ff8.js";import{E as F,e as _}from"./@pixi_extensions@7.4.2.089ce807.js";import{G as c}from"./@pixi_graphics@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__@pixi_sprit_a3536a87af99d28ff44bd814c835c9e3.87e100c4.js";class y{constructor(e){this.maxItemsPerFrame=e,this.itemsLeft=0}beginFrame(){this.itemsLeft=this.maxItemsPerFrame}allowedToUpload(){return this.itemsLeft-- >0}}function b(t,e){var r;let s=!1;if((r=t==null?void 0:t._textures)!=null&&r.length){for(let i=0;i<t._textures.length;i++)if(t._textures[i]instanceof l){const o=t._textures[i].baseTexture;e.includes(o)||(e.push(o),s=!0)}}return s}function U(t,e){if(t.baseTexture instanceof h){const s=t.baseTexture;return e.includes(s)||e.push(s),!0}return!1}function I(t,e){if(t._texture&&t._texture instanceof l){const s=t._texture.baseTexture;return e.includes(s)||e.push(s),!0}return!1}function B(t,e){return e instanceof d?(e.updateText(!0),!0):!1}function E(t,e){if(e instanceof p){const s=e.toFontString();return P.measureFont(s),!0}return!1}function L(t,e){if(t instanceof d){e.includes(t.style)||e.push(t.style),e.includes(t)||e.push(t);const s=t._texture.baseTexture;return e.includes(s)||e.push(s),!0}return!1}function S(t,e){return t instanceof p?(e.includes(t)||e.push(t),!0):!1}const f=class x{constructor(e){this.limiter=new y(x.uploadsPerFrame),this.renderer=e,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=()=>{this.queue&&this.prepareItems()},this.registerFindHook(L),this.registerFindHook(S),this.registerFindHook(b),this.registerFindHook(U),this.registerFindHook(I),this.registerUploadHook(B),this.registerUploadHook(E)}upload(e){return new Promise(s=>{e&&this.add(e),this.queue.length?(this.completes.push(s),this.ticking||(this.ticking=!0,n.system.addOnce(this.tick,this,u.UTILITY))):s()})}tick(){setTimeout(this.delayedTick,0)}prepareItems(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){const e=this.queue[0];let s=!1;if(e&&!e._destroyed){for(let r=0,i=this.uploadHooks.length;r<i;r++)if(this.uploadHooks[r](this.uploadHookHelper,e)){this.queue.shift(),s=!0;break}}s||this.queue.shift()}if(this.queue.length)n.system.addOnce(this.tick,this,u.UTILITY);else{this.ticking=!1;const e=this.completes.slice(0);this.completes.length=0;for(let s=0,r=e.length;s<r;s++)e[s]()}}registerFindHook(e){return e&&this.addHooks.push(e),this}registerUploadHook(e){return e&&this.uploadHooks.push(e),this}add(e){for(let s=0,r=this.addHooks.length;s<r&&!this.addHooks[s](e,this.queue);s++);if(e instanceof H)for(let s=e.children.length-1;s>=0;s--)this.add(e.children[s]);return this}destroy(){this.ticking&&n.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null}};f.uploadsPerFrame=4;let a=f;Object.defineProperties(k,{UPLOADS_PER_FRAME:{get(){return a.uploadsPerFrame},set(t){m("7.1.0","settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"),a.uploadsPerFrame=t}}});function T(t,e){return e instanceof h?(e._glTextures[t.CONTEXT_UID]||t.texture.bind(e),!0):!1}function O(t,e){if(!(e instanceof c))return!1;const{geometry:s}=e;e.finishPoly(),s.updateBatches();const{batches:r}=s;for(let i=0;i<r.length;i++){const{texture:o}=r[i].style;o&&T(t,o.baseTexture)}return s.batchable||t.geometry.bind(s,e._resolveDirectShader(t)),!0}function R(t,e){return t instanceof c?(e.push(t),!0):!1}class g extends a{constructor(e){super(e),this.uploadHookHelper=this.renderer,this.registerFindHook(R),this.registerUploadHook(T),this.registerUploadHook(O)}}g.extension={name:"prepare",type:F.RendererSystem};_.add(g);
class n{constructor(t){this.items=[],this._name=t,this._aliasCount=0}emit(t,e,h,r,m,a,o,l){if(arguments.length>8)throw new Error("max arguments reached");const{name:u,items:s}=this;this._aliasCount++;for(let i=0,d=s.length;i<d;i++)s[i][u](t,e,h,r,m,a,o,l);return s===this.items&&this._aliasCount--,this}ensureNonAliasedItems(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))}add(t){return t[this._name]&&(this.ensureNonAliasedItems(),this.remove(t),this.items.push(t)),this}remove(t){const e=this.items.indexOf(t);return e!==-1&&(this.ensureNonAliasedItems(),this.items.splice(e,1)),this}contains(t){return this.items.includes(t)}removeAll(){return this.ensureNonAliasedItems(),this.items.length=0,this}destroy(){this.removeAll(),this.items.length=0,this._name=""}get empty(){return this.items.length===0}get name(){return this._name}}Object.defineProperties(n.prototype,{dispatch:{value:n.prototype.emit},run:{value:n.prototype.emit}});export{n as R};
import{i as a}from"./ismobilejs@1.1.1.b3e8a064.js";const s={createCanvas:(e,t)=>{const n=document.createElement("canvas");return n.width=e,n.height=t,n},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>{var e;return(e=document.baseURI)!=null?e:window.location.href},getFontFaceSet:()=>document.fonts,fetch:(e,t)=>fetch(e,t),parseXML:e=>new DOMParser().parseFromString(e,"text/xml")},g={ADAPTER:s,RESOLUTION:1,CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1};var o;const r=(o=a.default)!=null?o:a,c=r(globalThis.navigator);export{c as i,g as s};
import{O as M,Q as _,i as w,j as s}from"./@pixi_core@7.4.2.ae619cd2.js";import{C as y}from"./@pixi_color@7.4.2.090b5ebd.js";import{M as A}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{j as E}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";import{W as f}from"./@pixi_constants@7.4.2.8b356162.js";import{E as b,e as D}from"./@pixi_extensions@7.4.2.089ce807.js";var R=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,F=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,P=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,S=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,O=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;const u=new A;class g extends M{constructor(e){super(e),e.runners.contextChange.add(this),this.quad=new _,this.state=w.for2d()}contextChange(){const e=this.renderer,o={globals:e.globalUniforms};this.simpleShader=s.from(S,O,o),this.shader=e.context.webGLVersion>1?s.from(F,R,o):s.from(S,P,o)}render(e){const o=this.renderer,m=this.quad;let r=m.vertices;r[0]=r[6]=e._width*-e.anchor.x,r[1]=r[3]=e._height*-e.anchor.y,r[2]=r[4]=e._width*(1-e.anchor.x),r[5]=r[7]=e._height*(1-e.anchor.y);const v=e.uvRespectAnchor?e.anchor.x:0,x=e.uvRespectAnchor?e.anchor.y:0;r=m.uvs,r[0]=r[6]=-v,r[1]=r[3]=-x,r[2]=r[4]=1-v,r[5]=r[7]=1-x,m.invalidate();const i=e._texture,a=i.baseTexture,h=a.alphaMode>0,n=e.tileTransform.localTransform,d=e.uvMatrix;let l=a.isPowerOfTwo&&i.frame.width===a.width&&i.frame.height===a.height;l&&(a._glTextures[o.CONTEXT_UID]?l=a.wrapMode!==f.CLAMP:a.wrapMode===f.CLAMP&&(a.wrapMode=f.REPEAT));const t=l?this.simpleShader:this.shader,C=i.width,T=i.height,c=e._width,p=e._height;u.set(n.a*C/c,n.b*C/p,n.c*T/c,n.d*T/p,n.tx/c,n.ty/p),u.invert(),l?u.prepend(d.mapCoord):(t.uniforms.uMapCoord=d.mapCoord.toArray(!0),t.uniforms.uClampFrame=d.uClampFrame,t.uniforms.uClampOffset=d.uClampOffset),t.uniforms.uTransform=u.toArray(!0),t.uniforms.uColor=y.shared.setValue(e.tint).premultiply(e.worldAlpha,h).toArray(t.uniforms.uColor),t.uniforms.translationMatrix=e.transform.worldTransform.toArray(!0),t.uniforms.uSampler=i,o.shader.bind(t),o.geometry.bind(m),this.state.blendMode=E(e.blendMode,h),o.state.set(this.state),o.geometry.draw(this.renderer.gl.TRIANGLES,6,0)}}g.extension={name:"tilingSprite",type:b.RendererPlugin};D.add(g);
  import{T as D}from"./@pixi_core@7.4.2.ae619cd2.js";import{C as p}from"./@pixi_color@7.4.2.090b5ebd.js";import{B as b}from"./@pixi_constants@7.4.2.8b356162.js";import{O as B,R as P,P as R}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import{s as I}from"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{s as T}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{C as v,B as U}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";const f=new R,N=new Uint16Array([0,1,2,0,2,3]);class y extends v{constructor(t){super(),this._anchor=new B(this._onAnchorUpdate,this,t?t.defaultAnchor.x:0,t?t.defaultAnchor.y:0),this._texture=null,this._width=0,this._height=0,this._tintColor=new p(16777215),this._tintRGB=null,this.tint=16777215,this.blendMode=b.NORMAL,this._cachedTint=16777215,this.uvs=null,this.texture=t||D.EMPTY,this.vertexData=new Float32Array(8),this.vertexTrimmedData=null,this._transformID=-1,this._textureID=-1,this._transformTrimmedID=-1,this._textureTrimmedID=-1,this.indices=N,this.pluginName="batch",this.isSprite=!0,this._roundPixels=I.ROUND_PIXELS}_onTextureUpdate(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=T(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=T(this.scale.y)*this._height/this._texture.orig.height)}_onAnchorUpdate(){this._transformID=-1,this._transformTrimmedID=-1}calculateVertices(){const t=this._texture;if(this._transformID===this.transform._worldID&&this._textureID===t._updateID)return;this._textureID!==t._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=t._updateID;const e=this.transform.worldTransform,r=e.a,u=e.b,s=e.c,c=e.d,x=e.tx,m=e.ty,i=this.vertexData,d=t.trim,o=t.orig,l=this._anchor;let a=0,h=0,n=0,_=0;if(d?(h=d.x-l._x*o.width,a=h+d.width,_=d.y-l._y*o.height,n=_+d.height):(h=-l._x*o.width,a=h+o.width,_=-l._y*o.height,n=_+o.height),i[0]=r*h+s*_+x,i[1]=c*_+u*h+m,i[2]=r*a+s*_+x,i[3]=c*_+u*a+m,i[4]=r*a+s*n+x,i[5]=c*n+u*a+m,i[6]=r*h+s*n+x,i[7]=c*n+u*h+m,this._roundPixels){const g=I.RESOLUTION;for(let w=0;w<i.length;++w)i[w]=Math.round(i[w]*g)/g}}calculateTrimmedVertices(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;const t=this._texture,e=this.vertexTrimmedData,r=t.orig,u=this._anchor,s=this.transform.worldTransform,c=s.a,x=s.b,m=s.c,i=s.d,d=s.tx,o=s.ty,l=-u._x*r.width,a=l+r.width,h=-u._y*r.height,n=h+r.height;if(e[0]=c*l+m*h+d,e[1]=i*h+x*l+o,e[2]=c*a+m*h+d,e[3]=i*h+x*a+o,e[4]=c*a+m*n+d,e[5]=i*n+x*a+o,e[6]=c*l+m*n+d,e[7]=i*n+x*l+o,this._roundPixels){const _=I.RESOLUTION;for(let g=0;g<e.length;++g)e[g]=Math.round(e[g]*_)/_}}_render(t){this.calculateVertices(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)}_calculateBounds(){const t=this._texture.trim,e=this._texture.orig;!t||t.width===e.width&&t.height===e.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))}getLocalBounds(t){return this.children.length===0?(this._localBounds||(this._localBounds=new U),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new P),t=this._localBoundsRect),this._localBounds.getRectangle(t)):super.getLocalBounds.call(this,t)}containsPoint(t){this.worldTransform.applyInverse(t,f);const e=this._texture.orig.width,r=this._texture.orig.height,u=-e*this.anchor.x;let s=0;return f.x>=u&&f.x<u+e&&(s=-r*this.anchor.y,f.y>=s&&f.y<s+r)}destroy(t){if(super.destroy(t),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null,typeof t=="boolean"?t:t==null?void 0:t.texture){const e=typeof t=="boolean"?t:t==null?void 0:t.baseTexture;this._texture.destroy(!!e)}this._texture=null}static from(t,e){const r=t instanceof D?t:D.from(t,e);return new y(r)}set roundPixels(t){this._roundPixels!==t&&(this._transformID=-1,this._transformTrimmedID=-1),this._roundPixels=t}get roundPixels(){return this._roundPixels}get width(){return Math.abs(this.scale.x)*this._texture.orig.width}set width(t){const e=T(this.scale.x)||1;this.scale.x=e*t/this._texture.orig.width,this._width=t}get height(){return Math.abs(this.scale.y)*this._texture.orig.height}set height(t){const e=T(this.scale.y)||1;this.scale.y=e*t/this._texture.orig.height,this._height=t}get anchor(){return this._anchor}set anchor(t){this._anchor.copyFrom(t)}get tint(){return this._tintColor.value}set tint(t){this._tintColor.setValue(t),this._tintRGB=this._tintColor.toLittleEndianNumber()}get tintValue(){return this._tintColor.toNumber()}get texture(){return this._texture}set texture(t){this._texture!==t&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=t||D.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,t&&(t.baseTexture.valid?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))}}export{y as S};
  import{T as d,B as g}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{R as x}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import{s as A}from"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{g as I,p as _}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{L as E,b as P}from"./@pixi_assets@7.4.2_@pixi_core@7.4.2.4019d085.js";import{E as T,e as C}from"./@pixi_extensions@7.4.2.089ce807.js";const w=class f{constructor(t,e,s){this.linkedSheets=[],(t instanceof g||t instanceof d)&&(t={texture:t,data:e,resolutionFilename:s});const{texture:i,data:o,resolutionFilename:a=null,cachePrefix:h=""}=t;this.cachePrefix=h,this._texture=i instanceof d?i:null,this.baseTexture=i instanceof g?i:this._texture.baseTexture,this.textures={},this.animations={},this.data=o;const n=this.baseTexture.resource;this.resolution=this._updateResolution(a||(n?n.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}_updateResolution(t=null){const{scale:e}=this.data.meta;let s=I(t,null);return s===null&&(s=typeof e=="number"?e:parseFloat(e!=null?e:"1")),s!==1&&this.baseTexture.setResolution(s),s}parse(){return new Promise(t=>{this._callback=t,this._batchIndex=0,this._frameKeys.length<=f.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()})}_processFrames(t){let e=t;const s=f.BATCH_SIZE;for(;e-t<s&&e<this._frameKeys.length;){const i=this._frameKeys[e],o=this._frames[i],a=o.frame;if(a){let h=null,n=null;const l=o.trimmed!==!1&&o.sourceSize?o.sourceSize:o.frame,p=new x(0,0,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution);o.rotated?h=new x(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.h)/this.resolution,Math.floor(a.w)/this.resolution):h=new x(Math.floor(a.x)/this.resolution,Math.floor(a.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution),o.trimmed!==!1&&o.spriteSourceSize&&(n=new x(Math.floor(o.spriteSourceSize.x)/this.resolution,Math.floor(o.spriteSourceSize.y)/this.resolution,Math.floor(a.w)/this.resolution,Math.floor(a.h)/this.resolution)),this.textures[i]=new d(this.baseTexture,h,p,n,o.rotated?2:0,o.anchor,o.borders),d.addToCache(this.textures[i],this.cachePrefix+i.toString())}e++}}_processAnimations(){const t=this.data.animations||{};for(const e in t){this.animations[e]=[];for(let s=0;s<t[e].length;s++){const i=t[e][s];this.animations[e].push(this.textures[i])}}}_parseComplete(){const t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)}_nextBatch(){this._processFrames(this._batchIndex*f.BATCH_SIZE),this._batchIndex++,setTimeout(()=>{this._batchIndex*f.BATCH_SIZE<this._frameKeys.length?this._nextBatch():(this._processAnimations(),this._parseComplete())},0)}destroy(t=!1){var e;for(const s in this.textures)this.textures[s].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&((e=this._texture)==null||e.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null,this.linkedSheets=[]}};w.BATCH_SIZE=1e3;let k=w;const B=["jpg","png","jpeg","avif","webp","s3tc","s3tc_sRGB","etc","etc1","pvrtc","atc","astc","bptc"];function M(r,t,e){const s={};if(r.forEach(i=>{s[i]=t}),Object.keys(t.textures).forEach(i=>{s[`${t.cachePrefix}${i}`]=t.textures[i]}),!e){const i=_.dirname(r[0]);t.linkedSheets.forEach((o,a)=>{Object.assign(s,M([`${i}/${t.data.meta.related_multi_packs[a]}`],o,!0))})}return s}const R={extension:T.Asset,cache:{test:r=>r instanceof k,getCacheableAssets:(r,t)=>M(r,t,!1)},resolver:{test:r=>{const t=r.split("?")[0].split("."),e=t.pop(),s=t.pop();return e==="json"&&B.includes(s)},parse:r=>{var e,s;const t=r.split(".");return{resolution:parseFloat((s=(e=A.RETINA_PREFIX.exec(r))==null?void 0:e[1])!=null?s:"1"),format:t[t.length-2],src:r}}},loader:{name:"spritesheetLoader",extension:{type:T.LoadParser,priority:E.Normal},async testParse(r,t){return _.extname(t.src).toLowerCase()===".json"&&!!r.frames},async parse(r,t,e){var p,b,y;const{texture:s,imageFilename:i,cachePrefix:o}=(p=t==null?void 0:t.data)!=null?p:{};let a=_.dirname(t.src);a&&a.lastIndexOf("/")!==a.length-1&&(a+="/");let h;if(s&&s.baseTexture)h=s;else{const c=P(a+(i!=null?i:r.meta.image),t.src);h=(await e.load([c]))[c]}const n=new k({texture:h.baseTexture,data:r,resolutionFilename:t.src,cachePrefix:o});await n.parse();const l=(b=r==null?void 0:r.meta)==null?void 0:b.related_multi_packs;if(Array.isArray(l)){const c=[];for(const u of l){if(typeof u!="string")continue;let m=a+u;(y=t.data)!=null&&y.ignoreMultiPack||(m=P(m,t.src),c.push(e.load({src:m,data:{ignoreMultiPack:!0}})))}const S=await Promise.all(c);n.linkedSheets=S,S.forEach(u=>{u.linkedSheets=[n].concat(n.linkedSheets.filter(m=>m!==u))})}return n},unload(r){r.destroy(!0)}}};C.add(R);
import{T as W,B as ot,P as ht}from"./@pixi_core@7.4.2.ae619cd2.js";import{C as st}from"./@pixi_color@7.4.2.090b5ebd.js";import{R as lt,O as ct,P as q}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import{s as $}from"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{g as ft,r as dt,p as X}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{c as ut,a as J,b as gt}from"./@pixi_text@7.4.2_@pixi_core@7.4.2_@pixi_sprite@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__.5a0a0ff8.js";import{A as pt,M as mt,B as K}from"./@pixi_constants@7.4.2.8b356162.js";import{C as xt}from"./@pixi_display@7.4.2_@pixi_core@7.4.2.c85af61b.js";import{a as vt,b as Q,M as tt}from"./@pixi_mesh@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2_.a36f1bab.js";import{L as yt,b as _t}from"./@pixi_assets@7.4.2_@pixi_core@7.4.2.4019d085.js";import{E as wt,e as Tt}from"./@pixi_extensions@7.4.2.089ce807.js";class G{constructor(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}}class U{static test(t){return typeof t=="string"&&t.startsWith("info face=")}static parse(t){const i=t.match(/^[a-z]+\s+.+$/gm),o={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(const e in i){const r=i[e].match(/^[a-z]+/gm)[0],n=i[e].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),f={};for(const s in n){const m=n[s].split("="),p=m[0],u=m[1].replace(/"/gm,""),d=parseFloat(u),c=isNaN(d)?u:d;f[p]=c}o[r].push(f)}const a=new G;return o.info.forEach(e=>a.info.push({face:e.face,size:parseInt(e.size,10)})),o.common.forEach(e=>a.common.push({lineHeight:parseInt(e.lineHeight,10)})),o.page.forEach(e=>a.page.push({id:parseInt(e.id,10),file:e.file})),o.char.forEach(e=>a.char.push({id:parseInt(e.id,10),page:parseInt(e.page,10),x:parseInt(e.x,10),y:parseInt(e.y,10),width:parseInt(e.width,10),height:parseInt(e.height,10),xoffset:parseInt(e.xoffset,10),yoffset:parseInt(e.yoffset,10),xadvance:parseInt(e.xadvance,10)})),o.kerning.forEach(e=>a.kerning.push({first:parseInt(e.first,10),second:parseInt(e.second,10),amount:parseInt(e.amount,10)})),o.distanceField.forEach(e=>a.distanceField.push({distanceRange:parseInt(e.distanceRange,10),fieldType:e.fieldType})),a}}class Y{static test(t){const i=t;return typeof t!="string"&&"getElementsByTagName"in t&&i.getElementsByTagName("page").length&&i.getElementsByTagName("info")[0].getAttribute("face")!==null}static parse(t){const i=new G,o=t.getElementsByTagName("info"),a=t.getElementsByTagName("common"),e=t.getElementsByTagName("page"),r=t.getElementsByTagName("char"),n=t.getElementsByTagName("kerning"),f=t.getElementsByTagName("distanceField");for(let s=0;s<o.length;s++)i.info.push({face:o[s].getAttribute("face"),size:parseInt(o[s].getAttribute("size"),10)});for(let s=0;s<a.length;s++)i.common.push({lineHeight:parseInt(a[s].getAttribute("lineHeight"),10)});for(let s=0;s<e.length;s++)i.page.push({id:parseInt(e[s].getAttribute("id"),10)||0,file:e[s].getAttribute("file")});for(let s=0;s<r.length;s++){const m=r[s];i.char.push({id:parseInt(m.getAttribute("id"),10),page:parseInt(m.getAttribute("page"),10)||0,x:parseInt(m.getAttribute("x"),10),y:parseInt(m.getAttribute("y"),10),width:parseInt(m.getAttribute("width"),10),height:parseInt(m.getAttribute("height"),10),xoffset:parseInt(m.getAttribute("xoffset"),10),yoffset:parseInt(m.getAttribute("yoffset"),10),xadvance:parseInt(m.getAttribute("xadvance"),10)})}for(let s=0;s<n.length;s++)i.kerning.push({first:parseInt(n[s].getAttribute("first"),10),second:parseInt(n[s].getAttribute("second"),10),amount:parseInt(n[s].getAttribute("amount"),10)});for(let s=0;s<f.length;s++)i.distanceField.push({fieldType:f[s].getAttribute("fieldType"),distanceRange:parseInt(f[s].getAttribute("distanceRange"),10)});return i}}class Z{static test(t){return typeof t=="string"&&t.includes("<font>")?Y.test($.ADAPTER.parseXML(t)):!1}static parse(t){return Y.parse($.ADAPTER.parseXML(t))}}const V=[U,Y,Z];function Mt(g){for(let t=0;t<V.length;t++)if(V[t].test(g))return V[t];return null}function St(g,t,i,o,a,e){const r=i.fill;if(Array.isArray(r)){if(r.length===1)return r[0]}else return r;let n;const f=i.dropShadow?i.dropShadowDistance:0,s=i.padding||0,m=g.width/o-f-s*2,p=g.height/o-f-s*2,u=r.slice(),d=i.fillGradientStops.slice();if(!d.length){const c=u.length+1;for(let _=1;_<c;++_)d.push(_/c)}if(u.unshift(r[0]),d.unshift(0),u.push(r[r.length-1]),d.push(1),i.fillGradientType===ut.LINEAR_VERTICAL){n=t.createLinearGradient(m/2,s,m/2,p+s);let c=0;const _=(e.fontProperties.fontSize+i.strokeThickness)/p;for(let y=0;y<a.length;y++){const S=e.lineHeight*y;for(let P=0;P<u.length;P++){let b=0;typeof d[P]=="number"?b=d[P]:b=P/u.length;const D=S/p+b*_;let E=Math.max(c,D);E=Math.min(E,1),n.addColorStop(E,u[P]),c=E}}}else{n=t.createLinearGradient(s,p/2,m+s,p/2);const c=u.length+1;let _=1;for(let y=0;y<u.length;y++){let S;typeof d[y]=="number"?S=d[y]:S=_/c,n.addColorStop(S,u[y]),_++}}return n}function Ct(g,t,i,o,a,e,r){const n=i.text,f=i.fontProperties;t.translate(o,a),t.scale(e,e);const s=r.strokeThickness/2,m=-(r.strokeThickness/2);if(t.font=r.toFontString(),t.lineWidth=r.strokeThickness,t.textBaseline=r.textBaseline,t.lineJoin=r.lineJoin,t.miterLimit=r.miterLimit,t.fillStyle=St(g,t,r,e,[n],i),t.strokeStyle=r.stroke,r.dropShadow){const p=r.dropShadowColor,u=r.dropShadowBlur*e,d=r.dropShadowDistance*e;t.shadowColor=st.shared.setValue(p).setAlpha(r.dropShadowAlpha).toRgbaString(),t.shadowBlur=u,t.shadowOffsetX=Math.cos(r.dropShadowAngle)*d,t.shadowOffsetY=Math.sin(r.dropShadowAngle)*d}else t.shadowColor="black",t.shadowBlur=0,t.shadowOffsetX=0,t.shadowOffsetY=0;r.stroke&&r.strokeThickness&&t.strokeText(n,s,m+i.lineHeight-f.descent),r.fill&&t.fillText(n,s,m+i.lineHeight-f.descent),t.setTransform(1,0,0,1,0,0),t.fillStyle="rgba(0, 0, 0, 0)"}function j(g){return g.codePointAt?g.codePointAt(0):g.charCodeAt(0)}function at(g){return Array.from?Array.from(g):g.split("")}function At(g){typeof g=="string"&&(g=[g]);const t=[];for(let i=0,o=g.length;i<o;i++){const a=g[i];if(Array.isArray(a)){if(a.length!==2)throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${a.length}.`);const e=a[0].charCodeAt(0),r=a[1].charCodeAt(0);if(r<e)throw new Error("[BitmapFont]: Invalid character range.");for(let n=e,f=r;n<=f;n++)t.push(String.fromCharCode(n))}else t.push(...at(a))}if(t.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return t}const R=class k{constructor(t,i,o){var m,p;const[a]=t.info,[e]=t.common,[r]=t.page,[n]=t.distanceField,f=ft(r.file),s={};this._ownsTextures=o,this.font=a.face,this.size=a.size,this.lineHeight=e.lineHeight/f,this.chars={},this.pageTextures=s;for(let u=0;u<t.page.length;u++){const{id:d,file:c}=t.page[u];s[d]=i instanceof Array?i[u]:i[c],n!=null&&n.fieldType&&n.fieldType!=="none"&&(s[d].baseTexture.alphaMode=pt.NO_PREMULTIPLIED_ALPHA,s[d].baseTexture.mipmap=mt.OFF)}for(let u=0;u<t.char.length;u++){const{id:d,page:c}=t.char[u];let{x:_,y,width:S,height:P,xoffset:b,yoffset:D,xadvance:E}=t.char[u];_/=f,y/=f,S/=f,P/=f,b/=f,D/=f,E/=f;const F=new lt(_+s[c].frame.x/f,y+s[c].frame.y/f,S,P);this.chars[d]={xOffset:b,yOffset:D,xAdvance:E,kerning:{},texture:new W(s[c].baseTexture,F),page:c}}for(let u=0;u<t.kerning.length;u++){let{first:d,second:c,amount:_}=t.kerning[u];d/=f,c/=f,_/=f,this.chars[c]&&(this.chars[c].kerning[d]=_)}this.distanceFieldRange=n==null?void 0:n.distanceRange,this.distanceFieldType=(p=(m=n==null?void 0:n.fieldType)==null?void 0:m.toLowerCase())!=null?p:"none"}destroy(){for(const t in this.chars)this.chars[t].texture.destroy(),this.chars[t].texture=null;for(const t in this.pageTextures)this._ownsTextures&&this.pageTextures[t].destroy(!0),this.pageTextures[t]=null;this.chars=null,this.pageTextures=null}static install(t,i,o){let a;if(t instanceof G)a=t;else{const r=Mt(t);if(!r)throw new Error("Unrecognized data format for font.");a=r.parse(t)}i instanceof W&&(i=[i]);const e=new k(a,i,o);return k.available[e.font]=e,e}static uninstall(t){const i=k.available[t];if(!i)throw new Error(`No font found named '${t}'`);i.destroy(),delete k.available[t]}static from(t,i,o){if(!t)throw new Error("[BitmapFont] Property `name` is required.");const{chars:a,padding:e,resolution:r,textureWidth:n,textureHeight:f,...s}=Object.assign({},k.defaultOptions,o),m=At(a),p=i instanceof J?i:new J(i),u=n,d=new G;d.info[0]={face:p.fontFamily,size:p.fontSize},d.common[0]={lineHeight:p.fontSize};let c=0,_=0,y,S,P,b=0;const D=[];for(let F=0;F<m.length;F++){y||(y=$.ADAPTER.createCanvas(),y.width=n,y.height=f,S=y.getContext("2d"),P=new ot(y,{resolution:r,...s}),D.push(new W(P)),d.page.push({id:D.length-1,file:""}));const z=m[F],C=gt.measureText(z,p,!1,y),B=C.width,N=Math.ceil(C.height),H=Math.ceil((p.fontStyle==="italic"?2:1)*B);if(_>=f-N*r){if(_===0)throw new Error(`[BitmapFont] textureHeight ${f}px is too small (fontFamily: '${p.fontFamily}', fontSize: ${p.fontSize}px, char: '${z}')`);--F,y=null,S=null,P=null,_=0,c=0,b=0;continue}if(b=Math.max(N+C.fontProperties.descent,b),H*r+c>=u){if(c===0)throw new Error(`[BitmapFont] textureWidth ${n}px is too small (fontFamily: '${p.fontFamily}', fontSize: ${p.fontSize}px, char: '${z}')`);--F,_+=b*r,_=Math.ceil(_),c=0,b=0;continue}Ct(y,S,C,c,_,r,p);const l=j(C.text);d.char.push({id:l,page:D.length-1,x:c/r,y:_/r,width:H,height:N,xoffset:0,yoffset:0,xadvance:B-(p.dropShadow?p.dropShadowDistance:0)-(p.stroke?p.strokeThickness:0)}),c+=(H+2*e)*r,c=Math.ceil(c)}if(!(o!=null&&o.skipKerning))for(let F=0,z=m.length;F<z;F++){const C=m[F];for(let B=0;B<z;B++){const N=m[B],H=S.measureText(C).width,l=S.measureText(N).width,h=S.measureText(C+N).width-(H+l);h&&d.kerning.push({first:j(C),second:j(N),amount:h})}}const E=new k(d,D,!0);return k.available[t]!==void 0&&k.uninstall(t),k.available[t]=E,E}};R.ALPHA=[["a","z"],["A","Z"]," "],R.NUMERIC=[["0","9"]],R.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],R.ASCII=[[" ","~"]],R.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:R.ALPHANUMERIC},R.available={};let O=R;var Pt=`// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`,bt=`// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;const et=[],it=[],rt=[],Dt=class nt extends xt{constructor(t,i={}){super();const{align:o,tint:a,maxWidth:e,letterSpacing:r,fontName:n,fontSize:f}=Object.assign({},nt.styleDefaults,i);if(!O.available[n])throw new Error(`Missing BitmapFont "${n}"`);this._activePagesMeshData=[],this._textWidth=0,this._textHeight=0,this._align=o,this._tintColor=new st(a),this._font=void 0,this._fontName=n,this._fontSize=f,this.text=t,this._maxWidth=e,this._maxLineHeight=0,this._letterSpacing=r,this._anchor=new ct(()=>{this.dirty=!0},this,0,0),this._roundPixels=$.ROUND_PIXELS,this.dirty=!0,this._resolution=$.RESOLUTION,this._autoResolution=!0,this._textureCache={}}updateText(){var H;const t=O.available[this._fontName],i=this.fontSize,o=i/t.size,a=new q,e=[],r=[],n=[],f=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",s=at(f),m=this._maxWidth*t.size/i,p=t.distanceFieldType==="none"?et:it;let u=null,d=0,c=0,_=0,y=-1,S=0,P=0,b=0,D=0;for(let l=0;l<s.length;l++){const h=s[l],T=j(h);if(/(?:\s)/.test(h)&&(y=l,S=d,D++),h==="\r"||h===`
`){r.push(d),n.push(-1),c=Math.max(c,d),++_,++P,a.x=0,a.y+=t.lineHeight,u=null,D=0;continue}const x=t.chars[T];if(!x)continue;u&&x.kerning[u]&&(a.x+=x.kerning[u]);const M=rt.pop()||{texture:W.EMPTY,line:0,charCode:0,prevSpaces:0,position:new q};M.texture=x.texture,M.line=_,M.charCode=T,M.position.x=Math.round(a.x+x.xOffset+this._letterSpacing/2),M.position.y=Math.round(a.y+x.yOffset),M.prevSpaces=D,e.push(M),d=M.position.x+Math.max(x.xAdvance-x.xOffset,x.texture.orig.width),a.x+=x.xAdvance+this._letterSpacing,b=Math.max(b,x.yOffset+x.texture.height),u=T,y!==-1&&m>0&&a.x>m&&(++P,dt(e,1+y-P,1+l-y),l=y,y=-1,r.push(S),n.push(e.length>0?e[e.length-1].prevSpaces:0),c=Math.max(c,S),_++,a.x=0,a.y+=t.lineHeight,u=null,D=0)}const E=s[s.length-1];E!=="\r"&&E!==`
`&&(/(?:\s)/.test(E)&&(d=S),r.push(d),c=Math.max(c,d),n.push(-1));const F=[];for(let l=0;l<=_;l++){let h=0;this._align==="right"?h=c-r[l]:this._align==="center"?h=(c-r[l])/2:this._align==="justify"&&(h=n[l]<0?0:(c-r[l])/n[l]),F.push(h)}const z=e.length,C={},B=[],N=this._activePagesMeshData;p.push(...N);for(let l=0;l<z;l++){const h=e[l].texture,T=h.baseTexture.uid;if(!C[T]){let x=p.pop();if(!x){const A=new vt;let v,L;t.distanceFieldType==="none"?(v=new Q(W.EMPTY),L=K.NORMAL):(v=new Q(W.EMPTY,{program:ht.from(bt,Pt),uniforms:{uFWidth:0}}),L=K.NORMAL_NPM);const I=new tt(A,v);I.blendMode=L,x={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:I,vertices:null,uvs:null,indices:null}}x.index=0,x.indexCount=0,x.vertexCount=0,x.uvsCount=0,x.total=0;const{_textureCache:M}=this;M[T]=M[T]||new W(h.baseTexture),x.mesh.texture=M[T],x.mesh.tint=this._tintColor.value,B.push(x),C[T]=x}C[T].total++}for(let l=0;l<N.length;l++)B.includes(N[l])||this.removeChild(N[l].mesh);for(let l=0;l<B.length;l++)B[l].mesh.parent!==this&&this.addChild(B[l].mesh);this._activePagesMeshData=B;for(const l in C){const h=C[l],T=h.total;if(!(((H=h.indices)==null?void 0:H.length)>6*T)||h.vertices.length<tt.BATCHABLE_SIZE*2)h.vertices=new Float32Array(4*2*T),h.uvs=new Float32Array(4*2*T),h.indices=new Uint16Array(6*T);else{const x=h.total,M=h.vertices;for(let A=x*4*2;A<M.length;A++)M[A]=0}h.mesh.size=6*T}for(let l=0;l<z;l++){const h=e[l];let T=h.position.x+F[h.line]*(this._align==="justify"?h.prevSpaces:1);this._roundPixels&&(T=Math.round(T));const x=T*o,M=h.position.y*o,A=h.texture,v=C[A.baseTexture.uid],L=A.frame,I=A._uvs,w=v.index++;v.indices[w*6+0]=0+w*4,v.indices[w*6+1]=1+w*4,v.indices[w*6+2]=2+w*4,v.indices[w*6+3]=0+w*4,v.indices[w*6+4]=2+w*4,v.indices[w*6+5]=3+w*4,v.vertices[w*8+0]=x,v.vertices[w*8+1]=M,v.vertices[w*8+2]=x+L.width*o,v.vertices[w*8+3]=M,v.vertices[w*8+4]=x+L.width*o,v.vertices[w*8+5]=M+L.height*o,v.vertices[w*8+6]=x,v.vertices[w*8+7]=M+L.height*o,v.uvs[w*8+0]=I.x0,v.uvs[w*8+1]=I.y0,v.uvs[w*8+2]=I.x1,v.uvs[w*8+3]=I.y1,v.uvs[w*8+4]=I.x2,v.uvs[w*8+5]=I.y2,v.uvs[w*8+6]=I.x3,v.uvs[w*8+7]=I.y3}this._textWidth=c*o,this._textHeight=(a.y+t.lineHeight)*o;for(const l in C){const h=C[l];if(this.anchor.x!==0||this.anchor.y!==0){let A=0;const v=this._textWidth*this.anchor.x,L=this._textHeight*this.anchor.y;for(let I=0;I<h.total;I++)h.vertices[A++]-=v,h.vertices[A++]-=L,h.vertices[A++]-=v,h.vertices[A++]-=L,h.vertices[A++]-=v,h.vertices[A++]-=L,h.vertices[A++]-=v,h.vertices[A++]-=L}this._maxLineHeight=b*o;const T=h.mesh.geometry.getBuffer("aVertexPosition"),x=h.mesh.geometry.getBuffer("aTextureCoord"),M=h.mesh.geometry.getIndex();T.data=h.vertices,x.data=h.uvs,M.data=h.indices,T.update(),x.update(),M.update()}for(let l=0;l<e.length;l++)rt.push(e[l]);this._font=t,this.dirty=!1}updateTransform(){this.validate(),this.containerUpdateTransform()}_render(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0);const{distanceFieldRange:i,distanceFieldType:o,size:a}=O.available[this._fontName];if(o!=="none"){const{a:e,b:r,c:n,d:f}=this.worldTransform,s=Math.sqrt(e*e+r*r),m=Math.sqrt(n*n+f*f),p=(Math.abs(s)+Math.abs(m))/2,u=this.fontSize/a,d=t._view.resolution;for(const c of this._activePagesMeshData)c.mesh.shader.uniforms.uFWidth=p*i*u*d}super._render(t)}getLocalBounds(){return this.validate(),super.getLocalBounds()}validate(){const t=O.available[this._fontName];if(!t)throw new Error(`Missing BitmapFont "${this._fontName}"`);this._font!==t&&(this.dirty=!0),this.dirty&&this.updateText()}get tint(){return this._tintColor.value}set tint(t){if(this.tint!==t){this._tintColor.setValue(t);for(let i=0;i<this._activePagesMeshData.length;i++)this._activePagesMeshData[i].mesh.tint=t}}get align(){return this._align}set align(t){this._align!==t&&(this._align=t,this.dirty=!0)}get fontName(){return this._fontName}set fontName(t){if(!O.available[t])throw new Error(`Missing BitmapFont "${t}"`);this._fontName!==t&&(this._fontName=t,this.dirty=!0)}get fontSize(){var t;return(t=this._fontSize)!=null?t:O.available[this._fontName].size}set fontSize(t){this._fontSize!==t&&(this._fontSize=t,this.dirty=!0)}get anchor(){return this._anchor}set anchor(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)}get text(){return this._text}set text(t){t=String(t!=null?t:""),this._text!==t&&(this._text=t,this.dirty=!0)}get maxWidth(){return this._maxWidth}set maxWidth(t){this._maxWidth!==t&&(this._maxWidth=t,this.dirty=!0)}get maxLineHeight(){return this.validate(),this._maxLineHeight}get textWidth(){return this.validate(),this._textWidth}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.dirty=!0)}get roundPixels(){return this._roundPixels}set roundPixels(t){t!==this._roundPixels&&(this._roundPixels=t,this.dirty=!0)}get textHeight(){return this.validate(),this._textHeight}get resolution(){return this._resolution}set resolution(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)}destroy(t){const{_textureCache:i}=this,o=O.available[this._fontName].distanceFieldType==="none"?et:it;o.push(...this._activePagesMeshData);for(const a of this._activePagesMeshData)this.removeChild(a.mesh);this._activePagesMeshData=[],o.filter(a=>i[a.mesh.texture.baseTexture.uid]).forEach(a=>{a.mesh.texture=W.EMPTY});for(const a in i)i[a].destroy(),delete i[a];this._font=null,this._tintColor=null,this._textureCache=null,super.destroy(t)}};Dt.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0};const Et=[".xml",".fnt"],Ft={extension:{type:wt.LoadParser,priority:yt.Normal},name:"loadBitmapFont",test(g){return Et.includes(X.extname(g).toLowerCase())},async testParse(g){return U.test(g)||Z.test(g)},async parse(g,t,i){const o=U.test(g)?U.parse(g):Z.parse(g),{src:a}=t,{page:e}=o,r=[];for(let s=0;s<e.length;++s){const m=e[s].file;let p=X.join(X.dirname(a),m);p=_t(p,a),r.push(p)}const n=await i.load(r),f=r.map(s=>n[s]);return O.install(o,f,!0)},async load(g,t){return(await $.ADAPTER.fetch(g)).text()},unload(g){g.destroy()}};Tt.add(Ft);
import{T as f}from"./@pixi_core@7.4.2.ae619cd2.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{R as _}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import{s as m}from"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{p as x,k as S,m as b,s as w}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{S as M}from"./@pixi_sprite@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2_.de6f4526.js";import{a as T}from"./@pixi_text@7.4.2_@pixi_core@7.4.2_@pixi_sprite@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2__.5a0a0ff8.js";const y=class l extends T{constructor(){super(...arguments),this._fonts=[],this._overrides=[],this._stylesheet="",this.fontsDirty=!1}static from(t){return new l(Object.keys(l.defaultOptions).reduce((e,s)=>({...e,[s]:t[s]}),{}))}cleanFonts(){this._fonts.length>0&&(this._fonts.forEach(t=>{URL.revokeObjectURL(t.src),t.refs--,t.refs===0&&(t.fontFace&&document.fonts.delete(t.fontFace),delete l.availableFonts[t.originalUrl])}),this.fontFamily="Arial",this._fonts.length=0,this.styleID++,this.fontsDirty=!0)}loadFont(t,e={}){const{availableFonts:s}=l;if(s[t]){const i=s[t];return this._fonts.push(i),i.refs++,this.styleID++,this.fontsDirty=!0,Promise.resolve()}return m.ADAPTER.fetch(t).then(i=>i.blob()).then(async i=>new Promise((r,o)=>{const n=URL.createObjectURL(i),h=new FileReader;h.onload=()=>r([n,h.result]),h.onerror=o,h.readAsDataURL(i)})).then(async([i,r])=>{const o=Object.assign({family:x.basename(t,x.extname(t)),weight:"normal",style:"normal",display:"auto",src:i,dataSrc:r,refs:1,originalUrl:t,fontFace:null},e);s[t]=o,this._fonts.push(o),this.styleID++;const n=new FontFace(o.family,`url(${o.src})`,{weight:o.weight,style:o.style,display:o.display});o.fontFace=n,await n.load(),document.fonts.add(n),await document.fonts.ready,this.styleID++,this.fontsDirty=!0})}addOverride(...t){const e=t.filter(s=>!this._overrides.includes(s));e.length>0&&(this._overrides.push(...e),this.styleID++)}removeOverride(...t){const e=t.filter(s=>this._overrides.includes(s));e.length>0&&(this._overrides=this._overrides.filter(s=>!e.includes(s)),this.styleID++)}toCSS(t){return[`transform: scale(${t})`,"transform-origin: top left","display: inline-block",`color: ${this.normalizeColor(this.fill)}`,`font-size: ${this.fontSize}px`,`font-family: ${this.fontFamily}`,`font-weight: ${this.fontWeight}`,`font-style: ${this.fontStyle}`,`font-variant: ${this.fontVariant}`,`letter-spacing: ${this.letterSpacing}px`,`text-align: ${this.align}`,`padding: ${this.padding}px`,`white-space: ${this.whiteSpace}`,...this.lineHeight?[`line-height: ${this.lineHeight}px`]:[],...this.wordWrap?[`word-wrap: ${this.breakWords?"break-all":"break-word"}`,`max-width: ${this.wordWrapWidth}px`]:[],...this.strokeThickness?[`-webkit-text-stroke-width: ${this.strokeThickness}px`,`-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`,`text-stroke-width: ${this.strokeThickness}px`,`text-stroke-color: ${this.normalizeColor(this.stroke)}`,"paint-order: stroke"]:[],...this.dropShadow?[this.dropShadowToCSS()]:[],...this._overrides].join(";")}toGlobalCSS(){return this._fonts.reduce((t,e)=>`${t}
            @font-face {
                font-family: "${e.family}";
                src: url('${e.dataSrc}');
                font-weight: ${e.weight};
                font-style: ${e.style};
                font-display: ${e.display};
            }`,this._stylesheet)}get stylesheet(){return this._stylesheet}set stylesheet(t){this._stylesheet!==t&&(this._stylesheet=t,this.styleID++)}normalizeColor(t){return Array.isArray(t)&&(t=S(t)),typeof t=="number"?b(t):t}dropShadowToCSS(){let t=this.normalizeColor(this.dropShadowColor);const e=this.dropShadowAlpha,s=Math.round(Math.cos(this.dropShadowAngle)*this.dropShadowDistance),i=Math.round(Math.sin(this.dropShadowAngle)*this.dropShadowDistance);t.startsWith("#")&&e<1&&(t+=(e*255|0).toString(16).padStart(2,"0"));const r=`${s}px ${i}px`;return this.dropShadowBlur>0?`text-shadow: ${r} ${this.dropShadowBlur}px ${t}`:`text-shadow: ${r} ${t}`}reset(){Object.assign(this,l.defaultOptions)}onBeforeDraw(){const{fontsDirty:t}=this;return this.fontsDirty=!1,this.isSafari&&this._fonts.length>0&&t?new Promise(e=>setTimeout(e,100)):Promise.resolve()}get isSafari(){const{userAgent:t}=m.ADAPTER.getNavigator();return/^((?!chrome|android).)*safari/i.test(t)}set fillGradientStops(t){console.warn("[HTMLTextStyle] fillGradientStops is not supported by HTMLText")}get fillGradientStops(){return super.fillGradientStops}set fillGradientType(t){console.warn("[HTMLTextStyle] fillGradientType is not supported by HTMLText")}get fillGradientType(){return super.fillGradientType}set miterLimit(t){console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText")}get miterLimit(){return super.miterLimit}set trim(t){console.warn("[HTMLTextStyle] trim is not supported by HTMLText")}get trim(){return super.trim}set textBaseline(t){console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText")}get textBaseline(){return super.textBaseline}set leading(t){console.warn("[HTMLTextStyle] leading is not supported by HTMLText")}get leading(){return super.leading}set lineJoin(t){console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText")}get lineJoin(){return super.lineJoin}};y.availableFonts={},y.defaultOptions={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,padding:0,stroke:"black",strokeThickness:0,whiteSpace:"normal",wordWrap:!1,wordWrapWidth:100};let p=y;const g=class d extends M{constructor(t="",e={}){var c;super(f.EMPTY),this._text=null,this._style=null,this._autoResolution=!0,this.localStyleID=-1,this.dirty=!1,this._updateID=0,this.ownsStyle=!1;const s=new Image,i=f.from(s,{scaleMode:m.SCALE_MODE,resourceOptions:{autoLoad:!1}});i.orig=new _,i.trim=new _,this.texture=i;const r="http://www.w3.org/2000/svg",o="http://www.w3.org/1999/xhtml",n=document.createElementNS(r,"svg"),h=document.createElementNS(r,"foreignObject"),a=document.createElementNS(o,"div"),u=document.createElementNS(o,"style");h.setAttribute("width","10000"),h.setAttribute("height","10000"),h.style.overflow="hidden",n.appendChild(h),this.maxWidth=d.defaultMaxWidth,this.maxHeight=d.defaultMaxHeight,this._domElement=a,this._styleElement=u,this._svgRoot=n,this._foreignObject=h,this._foreignObject.appendChild(u),this._foreignObject.appendChild(a),this._image=s,this._loadImage=new Image,this._autoResolution=d.defaultAutoResolution,this._resolution=(c=d.defaultResolution)!=null?c:m.RESOLUTION,this.text=t,this.style=e}measureText(t){var u,c;const{text:e,style:s,resolution:i}=Object.assign({text:this._text,style:this._style,resolution:this._resolution},t);Object.assign(this._domElement,{innerHTML:e,style:s.toCSS(i)}),this._styleElement.textContent=s.toGlobalCSS(),document.body.appendChild(this._svgRoot);const r=this._domElement.getBoundingClientRect();this._svgRoot.remove();const{width:o,height:n}=r;(o>this.maxWidth||n>this.maxHeight)&&console.warn("[HTMLText] Large expanse of text, increase HTMLText.maxWidth or HTMLText.maxHeight property.");const h=Math.min(this.maxWidth,Math.ceil(o)),a=Math.min(this.maxHeight,Math.ceil(n));return this._svgRoot.setAttribute("width",h.toString()),this._svgRoot.setAttribute("height",a.toString()),e!==this._text&&(this._domElement.innerHTML=this._text),s!==this._style&&(Object.assign(this._domElement,{style:(u=this._style)==null?void 0:u.toCSS(i)}),this._styleElement.textContent=(c=this._style)==null?void 0:c.toGlobalCSS()),{width:h+s.padding*2,height:a+s.padding*2}}async updateText(t=!0){const{style:e,_image:s,_loadImage:i}=this;if(this.localStyleID!==e.styleID&&(this.dirty=!0,this.localStyleID=e.styleID),!this.dirty&&t)return;const{width:r,height:o}=this.measureText();s.width=i.width=Math.ceil(Math.max(1,r)),s.height=i.height=Math.ceil(Math.max(1,o)),this._updateID++;const n=this._updateID;await new Promise(h=>{i.onload=async()=>{if(n<this._updateID){h();return}await e.onBeforeDraw(),s.src=i.src,i.onload=null,i.src="",this.updateTexture(),h()};const a=new XMLSerializer().serializeToString(this._svgRoot);i.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(a)}`})}get source(){return this._image}updateTexture(){const{style:t,texture:e,_image:s,resolution:i}=this,{padding:r}=t,{baseTexture:o}=e;e.trim.width=e._frame.width=s.width/i,e.trim.height=e._frame.height=s.height/i,e.trim.x=-r,e.trim.y=-r,e.orig.width=e._frame.width-r*2,e.orig.height=e._frame.height-r*2,this._onTextureUpdate(),o.setRealSize(s.width,s.height,i),this.dirty=!1}_render(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),super._render(t)}_renderCanvas(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),super._renderCanvas(t)}getLocalBounds(t){return this.updateText(!0),super.getLocalBounds(t)}_calculateBounds(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)}_onStyleChange(){this.dirty=!0}destroy(t){var s,i,r,o,n;typeof t=="boolean"&&(t={children:t}),t=Object.assign({},d.defaultDestroyOptions,t),super.destroy(t);const e=null;this.ownsStyle&&((s=this._style)==null||s.cleanFonts()),this._style=e,(i=this._svgRoot)==null||i.remove(),this._svgRoot=e,(r=this._domElement)==null||r.remove(),this._domElement=e,(o=this._foreignObject)==null||o.remove(),this._foreignObject=e,(n=this._styleElement)==null||n.remove(),this._styleElement=e,this._loadImage.src="",this._loadImage.onload=null,this._loadImage=e,this._image.src="",this._image=e}get width(){return this.updateText(!0),Math.abs(this.scale.x)*this._image.width/this.resolution}set width(t){this.updateText(!0);const e=w(this.scale.x)||1;this.scale.x=e*t/this._image.width/this.resolution,this._width=t}get height(){return this.updateText(!0),Math.abs(this.scale.y)*this._image.height/this.resolution}set height(t){this.updateText(!0);const e=w(this.scale.y)||1;this.scale.y=e*t/this._image.height/this.resolution,this._height=t}get style(){return this._style}set style(t){this._style!==t&&(t=t||{},t instanceof p?(this.ownsStyle=!1,this._style=t):t instanceof T?(console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"),this.ownsStyle=!0,this._style=p.from(t)):(this.ownsStyle=!0,this._style=new p(t)),this.localStyleID=-1,this.dirty=!0)}get text(){return this._text}set text(t){t=String(t===""||t===null||t===void 0?" ":t),t=this.sanitiseText(t),this._text!==t&&(this._text=t,this.dirty=!0)}get resolution(){return this._resolution}set resolution(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)}sanitiseText(t){return t.replace(/<br>/gi,"<br/>").replace(/<hr>/gi,"<hr/>").replace(/&nbsp;/gi,"&#160;")}};g.defaultDestroyOptions={texture:!0,children:!1,baseTexture:!0},g.defaultMaxWidth=2024,g.defaultMaxHeight=2024,g.defaultAutoResolution=!0;
  import{T as G}from"./@pixi_core@7.4.2.ae619cd2.js";import{C as H}from"./@pixi_color@7.4.2.090b5ebd.js";import{R as F}from"./@pixi_math@7.4.2.5f60b3ed.js";import"./@pixi_runner@7.4.2.8be90fed.js";import{s as D}from"./@pixi_settings@7.4.2.aad2afb5.js";import"./@pixi_ticker@7.4.2.206acfd7.js";import{a as V,t as $,s as z}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import{S as j}from"./@pixi_sprite@7.4.2_@pixi_core@7.4.2_@pixi_display@7.4.2_@pixi_core@7.4.2_.de6f4526.js";var E=(S=>(S[S.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",S[S.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL",S))(E||{});const W={willReadFrequently:!0},L=class r{static get experimentalLetterSpacingSupported(){let t=r._experimentalLetterSpacingSupported;if(t!==void 0){const e=D.ADAPTER.getCanvasRenderingContext2D().prototype;t=r._experimentalLetterSpacingSupported="letterSpacing"in e||"textLetterSpacing"in e}return t}constructor(t,e,i,s,n,a,o,c,f){this.text=t,this.style=e,this.width=i,this.height=s,this.lines=n,this.lineWidths=a,this.lineHeight=o,this.maxLineWidth=c,this.fontProperties=f}static measureText(t,e,i,s=r._canvas){i=i!=null?i:e.wordWrap;const n=e.toFontString(),a=r.measureFont(n);a.fontSize===0&&(a.fontSize=e.fontSize,a.ascent=e.fontSize);const o=s.getContext("2d",W);o.font=n;const c=(i?r.wordWrap(t,e,s):t).split(/(?:\r\n|\r|\n)/),f=new Array(c.length);let u=0;for(let p=0;p<c.length;p++){const g=r._measureText(c[p],e.letterSpacing,o);f[p]=g,u=Math.max(u,g)}let d=u+e.strokeThickness;e.dropShadow&&(d+=e.dropShadowDistance);const l=e.lineHeight||a.fontSize+e.strokeThickness;let h=Math.max(l,a.fontSize+e.strokeThickness*2)+e.leading+(c.length-1)*(l+e.leading);return e.dropShadow&&(h+=e.dropShadowDistance),new r(t,e,d,h,c,f,l+e.leading,u,a)}static _measureText(t,e,i){let s=!1;r.experimentalLetterSpacingSupported&&(r.experimentalLetterSpacing?(i.letterSpacing=`${e}px`,i.textLetterSpacing=`${e}px`,s=!0):(i.letterSpacing="0px",i.textLetterSpacing="0px"));let n=i.measureText(t).width;return n>0&&(s?n-=e:n+=(r.graphemeSegmenter(t).length-1)*e),n}static wordWrap(t,e,i=r._canvas){const s=i.getContext("2d",W);let n=0,a="",o="";const c=Object.create(null),{letterSpacing:f,whiteSpace:u}=e,d=r.collapseSpaces(u),l=r.collapseNewlines(u);let h=!d;const p=e.wordWrapWidth+f,g=r.tokenize(t);for(let y=0;y<g.length;y++){let m=g[y];if(r.isNewline(m)){if(!l){o+=r.addLine(a),h=!d,a="",n=0;continue}m=" "}if(d){const x=r.isBreakingSpace(m),_=r.isBreakingSpace(a[a.length-1]);if(x&&_)continue}const k=r.getFromCache(m,f,c,s);if(k>p)if(a!==""&&(o+=r.addLine(a),a="",n=0),r.canBreakWords(m,e.breakWords)){const x=r.wordWrapSplit(m);for(let _=0;_<x.length;_++){let w=x[_],T=w,I=1;for(;x[_+I];){const B=x[_+I];if(!r.canBreakChars(T,B,m,_,e.breakWords))w+=B;else break;T=B,I++}_+=I-1;const v=r.getFromCache(w,f,c,s);v+n>p&&(o+=r.addLine(a),h=!1,a="",n=0),a+=w,n+=v}}else{a.length>0&&(o+=r.addLine(a),a="",n=0);const x=y===g.length-1;o+=r.addLine(m,!x),h=!1,a="",n=0}else k+n>p&&(h=!1,o+=r.addLine(a),a="",n=0),(a.length>0||!r.isBreakingSpace(m)||h)&&(a+=m,n+=k)}return o+=r.addLine(a,!1),o}static addLine(t,e=!0){return t=r.trimRight(t),t=e?`${t}
`:t,t}static getFromCache(t,e,i,s){let n=i[t];return typeof n!="number"&&(n=r._measureText(t,e,s)+e,i[t]=n),n}static collapseSpaces(t){return t==="normal"||t==="pre-line"}static collapseNewlines(t){return t==="normal"}static trimRight(t){if(typeof t!="string")return"";for(let e=t.length-1;e>=0;e--){const i=t[e];if(!r.isBreakingSpace(i))break;t=t.slice(0,-1)}return t}static isNewline(t){return typeof t!="string"?!1:r._newlines.includes(t.charCodeAt(0))}static isBreakingSpace(t,e){return typeof t!="string"?!1:r._breakingSpaces.includes(t.charCodeAt(0))}static tokenize(t){const e=[];let i="";if(typeof t!="string")return e;for(let s=0;s<t.length;s++){const n=t[s],a=t[s+1];if(r.isBreakingSpace(n,a)||r.isNewline(n)){i!==""&&(e.push(i),i=""),e.push(n);continue}i+=n}return i!==""&&e.push(i),e}static canBreakWords(t,e){return e}static canBreakChars(t,e,i,s,n){return!0}static wordWrapSplit(t){return r.graphemeSegmenter(t)}static measureFont(t){if(r._fonts[t])return r._fonts[t];const e={ascent:0,descent:0,fontSize:0},i=r._canvas,s=r._context;s.font=t;const n=r.METRICS_STRING+r.BASELINE_SYMBOL,a=Math.ceil(s.measureText(n).width);let o=Math.ceil(s.measureText(r.BASELINE_SYMBOL).width);const c=Math.ceil(r.HEIGHT_MULTIPLIER*o);if(o=o*r.BASELINE_MULTIPLIER|0,a===0||c===0)return r._fonts[t]=e,e;i.width=a,i.height=c,s.fillStyle="#f00",s.fillRect(0,0,a,c),s.font=t,s.textBaseline="alphabetic",s.fillStyle="#000",s.fillText(n,0,o);const f=s.getImageData(0,0,a,c).data,u=f.length,d=a*4;let l=0,h=0,p=!1;for(l=0;l<o;++l){for(let g=0;g<d;g+=4)if(f[h+g]!==255){p=!0;break}if(!p)h+=d;else break}for(e.ascent=o-l,h=u-d,p=!1,l=c;l>o;--l){for(let g=0;g<d;g+=4)if(f[h+g]!==255){p=!0;break}if(!p)h-=d;else break}return e.descent=l-o,e.fontSize=e.ascent+e.descent,r._fonts[t]=e,e}static clearMetrics(t=""){t?delete r._fonts[t]:r._fonts={}}static get _canvas(){var t;if(!r.__canvas){let e;try{const i=new OffscreenCanvas(0,0);if((t=i.getContext("2d",W))!=null&&t.measureText)return r.__canvas=i,i;e=D.ADAPTER.createCanvas()}catch(i){e=D.ADAPTER.createCanvas()}e.width=e.height=10,r.__canvas=e}return r.__canvas}static get _context(){return r.__context||(r.__context=r._canvas.getContext("2d",W)),r.__context}};L.METRICS_STRING="|ÉqÅ",L.BASELINE_SYMBOL="M",L.BASELINE_MULTIPLIER=1.4,L.HEIGHT_MULTIPLIER=2,L.graphemeSegmenter=(()=>{if(typeof(Intl==null?void 0:Intl.Segmenter)=="function"){const S=new Intl.Segmenter;return t=>[...S.segment(t)].map(e=>e.segment)}return S=>[...S]})(),L.experimentalLetterSpacing=!1,L._fonts={},L._newlines=[10,13],L._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];let C=L;const J=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],N=class A{constructor(t){this.styleID=0,this.reset(),R(this,t,t)}clone(){const t={};return R(t,this,A.defaultStyle),new A(t)}reset(){R(this,A.defaultStyle,A.defaultStyle)}get align(){return this._align}set align(t){this._align!==t&&(this._align=t,this.styleID++)}get breakWords(){return this._breakWords}set breakWords(t){this._breakWords!==t&&(this._breakWords=t,this.styleID++)}get dropShadow(){return this._dropShadow}set dropShadow(t){this._dropShadow!==t&&(this._dropShadow=t,this.styleID++)}get dropShadowAlpha(){return this._dropShadowAlpha}set dropShadowAlpha(t){this._dropShadowAlpha!==t&&(this._dropShadowAlpha=t,this.styleID++)}get dropShadowAngle(){return this._dropShadowAngle}set dropShadowAngle(t){this._dropShadowAngle!==t&&(this._dropShadowAngle=t,this.styleID++)}get dropShadowBlur(){return this._dropShadowBlur}set dropShadowBlur(t){this._dropShadowBlur!==t&&(this._dropShadowBlur=t,this.styleID++)}get dropShadowColor(){return this._dropShadowColor}set dropShadowColor(t){const e=b(t);this._dropShadowColor!==e&&(this._dropShadowColor=e,this.styleID++)}get dropShadowDistance(){return this._dropShadowDistance}set dropShadowDistance(t){this._dropShadowDistance!==t&&(this._dropShadowDistance=t,this.styleID++)}get fill(){return this._fill}set fill(t){const e=b(t);this._fill!==e&&(this._fill=e,this.styleID++)}get fillGradientType(){return this._fillGradientType}set fillGradientType(t){this._fillGradientType!==t&&(this._fillGradientType=t,this.styleID++)}get fillGradientStops(){return this._fillGradientStops}set fillGradientStops(t){Y(this._fillGradientStops,t)||(this._fillGradientStops=t,this.styleID++)}get fontFamily(){return this._fontFamily}set fontFamily(t){this.fontFamily!==t&&(this._fontFamily=t,this.styleID++)}get fontSize(){return this._fontSize}set fontSize(t){this._fontSize!==t&&(this._fontSize=t,this.styleID++)}get fontStyle(){return this._fontStyle}set fontStyle(t){this._fontStyle!==t&&(this._fontStyle=t,this.styleID++)}get fontVariant(){return this._fontVariant}set fontVariant(t){this._fontVariant!==t&&(this._fontVariant=t,this.styleID++)}get fontWeight(){return this._fontWeight}set fontWeight(t){this._fontWeight!==t&&(this._fontWeight=t,this.styleID++)}get letterSpacing(){return this._letterSpacing}set letterSpacing(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.styleID++)}get lineHeight(){return this._lineHeight}set lineHeight(t){this._lineHeight!==t&&(this._lineHeight=t,this.styleID++)}get leading(){return this._leading}set leading(t){this._leading!==t&&(this._leading=t,this.styleID++)}get lineJoin(){return this._lineJoin}set lineJoin(t){this._lineJoin!==t&&(this._lineJoin=t,this.styleID++)}get miterLimit(){return this._miterLimit}set miterLimit(t){this._miterLimit!==t&&(this._miterLimit=t,this.styleID++)}get padding(){return this._padding}set padding(t){this._padding!==t&&(this._padding=t,this.styleID++)}get stroke(){return this._stroke}set stroke(t){const e=b(t);this._stroke!==e&&(this._stroke=e,this.styleID++)}get strokeThickness(){return this._strokeThickness}set strokeThickness(t){this._strokeThickness!==t&&(this._strokeThickness=t,this.styleID++)}get textBaseline(){return this._textBaseline}set textBaseline(t){this._textBaseline!==t&&(this._textBaseline=t,this.styleID++)}get trim(){return this._trim}set trim(t){this._trim!==t&&(this._trim=t,this.styleID++)}get whiteSpace(){return this._whiteSpace}set whiteSpace(t){this._whiteSpace!==t&&(this._whiteSpace=t,this.styleID++)}get wordWrap(){return this._wordWrap}set wordWrap(t){this._wordWrap!==t&&(this._wordWrap=t,this.styleID++)}get wordWrapWidth(){return this._wordWrapWidth}set wordWrapWidth(t){this._wordWrapWidth!==t&&(this._wordWrapWidth=t,this.styleID++)}toFontString(){const t=typeof this.fontSize=="number"?`${this.fontSize}px`:this.fontSize;let e=this.fontFamily;Array.isArray(this.fontFamily)||(e=this.fontFamily.split(","));for(let i=e.length-1;i>=0;i--){let s=e[i].trim();!/([\"\'])[^\'\"]+\1/.test(s)&&!J.includes(s)&&(s=`"${s}"`),e[i]=s}return`${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${t} ${e.join(",")}`}};N.defaultStyle={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:E.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};let P=N;function b(S){const t=H.shared,e=i=>{const s=t.setValue(i);return s.alpha===1?s.toHex():s.toRgbaString()};return Array.isArray(S)?S.map(e):e(S)}function Y(S,t){if(!Array.isArray(S)||!Array.isArray(t)||S.length!==t.length)return!1;for(let e=0;e<S.length;++e)if(S[e]!==t[e])return!1;return!0}function R(S,t,e){for(const i in e)Array.isArray(t[i])?S[i]=t[i].slice():S[i]=t[i]}const U={texture:!0,children:!1,baseTexture:!0},O=class M extends j{constructor(t,e,i){var a;let s=!1;i||(i=D.ADAPTER.createCanvas(),s=!0),i.width=3,i.height=3;const n=G.from(i);n.orig=new F,n.trim=new F,super(n),this._ownCanvas=s,this.canvas=i,this.context=i.getContext("2d",{willReadFrequently:!0}),this._resolution=(a=M.defaultResolution)!=null?a:D.RESOLUTION,this._autoResolution=M.defaultAutoResolution,this._text=null,this._style=null,this._styleListener=null,this._font="",this.text=t,this.style=e,this.localStyleID=-1}static get experimentalLetterSpacing(){return C.experimentalLetterSpacing}static set experimentalLetterSpacing(t){V("7.1.0","Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"),C.experimentalLetterSpacing=t}updateText(t){const e=this._style;if(this.localStyleID!==e.styleID&&(this.dirty=!0,this.localStyleID=e.styleID),!this.dirty&&t)return;this._font=this._style.toFontString();const i=this.context,s=C.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),n=s.width,a=s.height,o=s.lines,c=s.lineHeight,f=s.lineWidths,u=s.maxLineWidth,d=s.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,n)+e.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,a)+e.padding*2)*this._resolution),i.scale(this._resolution,this._resolution),i.clearRect(0,0,this.canvas.width,this.canvas.height),i.font=this._font,i.lineWidth=e.strokeThickness,i.textBaseline=e.textBaseline,i.lineJoin=e.lineJoin,i.miterLimit=e.miterLimit;let l,h;const p=e.dropShadow?2:1;for(let g=0;g<p;++g){const y=e.dropShadow&&g===0,m=y?Math.ceil(Math.max(1,a)+e.padding*2):0,k=m*this._resolution;if(y){i.fillStyle="black",i.strokeStyle="black";const _=e.dropShadowColor,w=e.dropShadowBlur*this._resolution,T=e.dropShadowDistance*this._resolution;i.shadowColor=H.shared.setValue(_).setAlpha(e.dropShadowAlpha).toRgbaString(),i.shadowBlur=w,i.shadowOffsetX=Math.cos(e.dropShadowAngle)*T,i.shadowOffsetY=Math.sin(e.dropShadowAngle)*T+k}else i.fillStyle=this._generateFillStyle(e,o,s),i.strokeStyle=e.stroke,i.shadowColor="black",i.shadowBlur=0,i.shadowOffsetX=0,i.shadowOffsetY=0;let x=(c-d.fontSize)/2;c-d.fontSize<0&&(x=0);for(let _=0;_<o.length;_++)l=e.strokeThickness/2,h=e.strokeThickness/2+_*c+d.ascent+x,e.align==="right"?l+=u-f[_]:e.align==="center"&&(l+=(u-f[_])/2),e.stroke&&e.strokeThickness&&this.drawLetterSpacing(o[_],l+e.padding,h+e.padding-m,!0),e.fill&&this.drawLetterSpacing(o[_],l+e.padding,h+e.padding-m)}this.updateTexture()}drawLetterSpacing(t,e,i,s=!1){const n=this._style.letterSpacing;let a=!1;if(C.experimentalLetterSpacingSupported&&(C.experimentalLetterSpacing?(this.context.letterSpacing=`${n}px`,this.context.textLetterSpacing=`${n}px`,a=!0):(this.context.letterSpacing="0px",this.context.textLetterSpacing="0px")),n===0||a){s?this.context.strokeText(t,e,i):this.context.fillText(t,e,i);return}let o=e;const c=C.graphemeSegmenter(t);let f=this.context.measureText(t).width,u=0;for(let d=0;d<c.length;++d){const l=c[d];s?this.context.strokeText(l,o,i):this.context.fillText(l,o,i);let h="";for(let p=d+1;p<c.length;++p)h+=c[p];u=this.context.measureText(h).width,o+=f-u+n,f=u}}updateTexture(){const t=this.canvas;if(this._style.trim){const a=$(t);a.data&&(t.width=a.width,t.height=a.height,this.context.putImageData(a.data,0,0))}const e=this._texture,i=this._style,s=i.trim?0:i.padding,n=e.baseTexture;e.trim.width=e._frame.width=t.width/this._resolution,e.trim.height=e._frame.height=t.height/this._resolution,e.trim.x=-s,e.trim.y=-s,e.orig.width=e._frame.width-s*2,e.orig.height=e._frame.height-s*2,this._onTextureUpdate(),n.setRealSize(t.width,t.height,this._resolution),e.updateUvs(),this.dirty=!1}_render(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),super._render(t)}updateTransform(){this.updateText(!0),super.updateTransform()}getBounds(t,e){return this.updateText(!0),this._textureID===-1&&(t=!1),super.getBounds(t,e)}getLocalBounds(t){return this.updateText(!0),super.getLocalBounds.call(this,t)}_calculateBounds(){this.calculateVertices(),this._bounds.addQuad(this.vertexData)}_generateFillStyle(t,e,i){const s=t.fill;if(Array.isArray(s)){if(s.length===1)return s[0]}else return s;let n;const a=t.dropShadow?t.dropShadowDistance:0,o=t.padding||0,c=this.canvas.width/this._resolution-a-o*2,f=this.canvas.height/this._resolution-a-o*2,u=s.slice(),d=t.fillGradientStops.slice();if(!d.length){const l=u.length+1;for(let h=1;h<l;++h)d.push(h/l)}if(u.unshift(s[0]),d.unshift(0),u.push(s[s.length-1]),d.push(1),t.fillGradientType===E.LINEAR_VERTICAL){n=this.context.createLinearGradient(c/2,o,c/2,f+o);const l=i.fontProperties.fontSize+t.strokeThickness;for(let h=0;h<e.length;h++){const p=i.lineHeight*(h-1)+l,g=i.lineHeight*h;let y=g;h>0&&p>g&&(y=(g+p)/2);const m=g+l,k=i.lineHeight*(h+1);let x=m;h+1<e.length&&k<m&&(x=(m+k)/2);const _=(x-y)/f;for(let w=0;w<u.length;w++){let T=0;typeof d[w]=="number"?T=d[w]:T=w/u.length;let I=Math.min(1,Math.max(0,y/f+T*_));I=Number(I.toFixed(5)),n.addColorStop(I,u[w])}}}else{n=this.context.createLinearGradient(o,f/2,c+o,f/2);const l=u.length+1;let h=1;for(let p=0;p<u.length;p++){let g;typeof d[p]=="number"?g=d[p]:g=h/l,n.addColorStop(g,u[p]),h++}}return n}destroy(t){typeof t=="boolean"&&(t={children:t}),t=Object.assign({},U,t),super.destroy(t),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null}get width(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width}set width(t){this.updateText(!0);const e=z(this.scale.x)||1;this.scale.x=e*t/this._texture.orig.width,this._width=t}get height(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height}set height(t){this.updateText(!0);const e=z(this.scale.y)||1;this.scale.y=e*t/this._texture.orig.height,this._height=t}get style(){return this._style}set style(t){t=t||{},t instanceof P?this._style=t:this._style=new P(t),this.localStyleID=-1,this.dirty=!0}get text(){return this._text}set text(t){t=String(t!=null?t:""),this._text!==t&&(this._text=t,this.dirty=!0)}get resolution(){return this._resolution}set resolution(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)}};O.defaultAutoResolution=!0;let at=O;export{at as T,P as a,C as b,E as c};
 import{s as u}from"./@pixi_settings@7.4.2.aad2afb5.js";import{a as m}from"./@pixi_utils@7.4.2.8d74d95b.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";import"./url@0.11.4.026de2db.js";import"./@pixi_color@7.4.2.090b5ebd.js";import{E as _,e as p}from"./@pixi_extensions@7.4.2.089ce807.js";var a=(i=>(i[i.INTERACTION=50]="INTERACTION",i[i.HIGH=25]="HIGH",i[i.NORMAL=0]="NORMAL",i[i.LOW=-25]="LOW",i[i.UTILITY=-50]="UTILITY",i))(a||{});class d{constructor(t,e=null,s=0,h=!1){this.next=null,this.previous=null,this._destroyed=!1,this.fn=t,this.context=e,this.priority=s,this.once=h}match(t,e=null){return this.fn===t&&this.context===e}emit(t){this.fn&&(this.context?this.fn.call(this.context,t):this.fn(t));const e=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),e}connect(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this}destroy(t=!1){this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);const e=this.next;return this.next=t?null:e,this.previous=null,e}}const o=class r{constructor(){this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new d(null,null,1/0),this.deltaMS=1/r.targetFPMS,this.elapsedMS=1/r.targetFPMS,this._tick=t=>{this._requestId=null,this.started&&(this.update(t),this.started&&this._requestId===null&&this._head.next&&(this._requestId=requestAnimationFrame(this._tick)))}}_requestIfNeeded(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))}_cancelIfNeeded(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)}_startIfPossible(){this.started?this._requestIfNeeded():this.autoStart&&this.start()}add(t,e,s=a.NORMAL){return this._addListener(new d(t,e,s))}addOnce(t,e,s=a.NORMAL){return this._addListener(new d(t,e,s,!0))}_addListener(t){let e=this._head.next,s=this._head;if(!e)t.connect(s);else{for(;e;){if(t.priority>e.priority){t.connect(s);break}s=e,e=e.next}t.previous||t.connect(s)}return this._startIfPossible(),this}remove(t,e){let s=this._head.next;for(;s;)s.match(t,e)?s=s.destroy():s=s.next;return this._head.next||this._cancelIfNeeded(),this}get count(){if(!this._head)return 0;let t=0,e=this._head;for(;e=e.next;)t++;return t}start(){this.started||(this.started=!0,this._requestIfNeeded())}stop(){this.started&&(this.started=!1,this._cancelIfNeeded())}destroy(){if(!this._protected){this.stop();let t=this._head.next;for(;t;)t=t.destroy(!0);this._head.destroy(),this._head=null}}update(t=performance.now()){let e;if(t>this.lastTime){if(e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),e*=this.speed,this._minElapsedMS){const l=t-this._lastFrame|0;if(l<this._minElapsedMS)return;this._lastFrame=t-l%this._minElapsedMS}this.deltaMS=e,this.deltaTime=this.deltaMS*r.targetFPMS;const s=this._head;let h=s.next;for(;h;)h=h.emit(this.deltaTime);s.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=t}get FPS(){return 1e3/this.elapsedMS}get minFPS(){return 1e3/this._maxElapsedMS}set minFPS(t){const e=Math.min(this.maxFPS,t),s=Math.min(Math.max(0,e)/1e3,r.targetFPMS);this._maxElapsedMS=1/s}get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}set maxFPS(t){if(t===0)this._minElapsedMS=0;else{const e=Math.max(this.minFPS,t);this._minElapsedMS=1/(e/1e3)}}static get shared(){if(!r._shared){const t=r._shared=new r;t.autoStart=!0,t._protected=!0}return r._shared}static get system(){if(!r._system){const t=r._system=new r;t.autoStart=!0,t._protected=!0}return r._system}};o.targetFPMS=.06;let n=o;Object.defineProperties(u,{TARGET_FPMS:{get(){return n.targetFPMS},set(i){m("7.1.0","settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"),n.targetFPMS=i}}});class c{static init(t){t=Object.assign({autoStart:!0,sharedTicker:!1},t),Object.defineProperty(this,"ticker",{set(e){this._ticker&&this._ticker.remove(this.render,this),this._ticker=e,e&&e.add(this.render,this,a.LOW)},get(){return this._ticker}}),this.stop=()=>{this._ticker.stop()},this.start=()=>{this._ticker.start()},this._ticker=null,this.ticker=t.sharedTicker?n.shared:new n,t.autoStart&&this.start()}static destroy(){if(this._ticker){const t=this._ticker;this.ticker=null,t.destroy()}}}c.extension=_.Application;p.add(c);export{n as T,a as U};
  import"./url@0.11.4.026de2db.js";import{s as h}from"./@pixi_settings@7.4.2.aad2afb5.js";import{A as E,B as c}from"./@pixi_constants@7.4.2.8b356162.js";import{C as b}from"./@pixi_color@7.4.2.090b5ebd.js";import"./eventemitter3@4.0.7.36f6abe0.js";import"./earcut@2.2.4.3debfdf7.js";h.RETINA_PREFIX=/@([0-9\.]+)x/;h.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;const C={};function _(e,t,n=3){if(C[t])return;let r=new Error().stack;typeof r>"u"?console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`):(r=r.split(`
`).splice(n).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",`${t}
Deprecated since v${e}`),console.warn(r),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",`${t}
Deprecated since v${e}`),console.warn(r))),C[t]=!0}function a(e){if(typeof e!="string")throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)}function d(e){return e.split("?")[0].split("#")[0]}function R(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function w(e,t,n){return e.replace(new RegExp(R(t),"g"),n)}function y(e,t){let n="",r=0,o=-1,i=0,A=-1;for(let s=0;s<=e.length;++s){if(s<e.length)A=e.charCodeAt(s);else{if(A===47)break;A=47}if(A===47){if(!(o===s-1||i===1))if(o!==s-1&&i===2){if(n.length<2||r!==2||n.charCodeAt(n.length-1)!==46||n.charCodeAt(n.length-2)!==46){if(n.length>2){const l=n.lastIndexOf("/");if(l!==n.length-1){l===-1?(n="",r=0):(n=n.slice(0,l),r=n.length-1-n.lastIndexOf("/")),o=s,i=0;continue}}else if(n.length===2||n.length===1){n="",r=0,o=s,i=0;continue}}t&&(n.length>0?n+="/..":n="..",r=2)}else n.length>0?n+=`/${e.slice(o+1,s)}`:n=e.slice(o+1,s),r=s-o-1;o=s,i=0}else A===46&&i!==-1?++i:i=-1}return n}const M={toPosix(e){return w(e,"\\","/")},isUrl(e){return/^https?:/.test(this.toPosix(e))},isDataUrl(e){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)},isBlobUrl(e){return e.startsWith("blob:")},hasProtocol(e){return/^[^/:]+:/.test(this.toPosix(e))},getProtocol(e){a(e),e=this.toPosix(e);const t=/^file:\/\/\//.exec(e);if(t)return t[0];const n=/^[^/:]+:\/{0,2}/.exec(e);return n?n[0]:""},toAbsolute(e,t,n){if(a(e),this.isDataUrl(e)||this.isBlobUrl(e))return e;const r=d(this.toPosix(t!=null?t:h.ADAPTER.getBaseUrl())),o=d(this.toPosix(n!=null?n:this.rootname(r)));return e=this.toPosix(e),e.startsWith("/")?M.join(o,e.slice(1)):this.isAbsolute(e)?e:this.join(r,e)},normalize(e){if(a(e),e.length===0)return".";if(this.isDataUrl(e)||this.isBlobUrl(e))return e;e=this.toPosix(e);let t="";const n=e.startsWith("/");this.hasProtocol(e)&&(t=this.rootname(e),e=e.slice(t.length));const r=e.endsWith("/");return e=y(e,!1),e.length>0&&r&&(e+="/"),n?`/${e}`:t+e},isAbsolute(e){return a(e),e=this.toPosix(e),this.hasProtocol(e)?!0:e.startsWith("/")},join(...e){var n;if(e.length===0)return".";let t;for(let r=0;r<e.length;++r){const o=e[r];if(a(o),o.length>0)if(t===void 0)t=o;else{const i=(n=e[r-1])!=null?n:"";this.joinExtensions.includes(this.extname(i).toLowerCase())?t+=`/../${o}`:t+=`/${o}`}}return t===void 0?".":this.normalize(t)},dirname(e){if(a(e),e.length===0)return".";e=this.toPosix(e);let t=e.charCodeAt(0);const n=t===47;let r=-1,o=!0;const i=this.getProtocol(e),A=e;e=e.slice(i.length);for(let s=e.length-1;s>=1;--s)if(t=e.charCodeAt(s),t===47){if(!o){r=s;break}}else o=!1;return r===-1?n?"/":this.isUrl(A)?i+e:i:n&&r===1?"//":i+e.slice(0,r)},rootname(e){a(e),e=this.toPosix(e);let t="";if(e.startsWith("/")?t="/":t=this.getProtocol(e),this.isUrl(e)){const n=e.indexOf("/",t.length);n!==-1?t=e.slice(0,n):t=e,t.endsWith("/")||(t+="/")}return t},basename(e,t){a(e),t&&a(t),e=d(this.toPosix(e));let n=0,r=-1,o=!0,i;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";let A=t.length-1,s=-1;for(i=e.length-1;i>=0;--i){const l=e.charCodeAt(i);if(l===47){if(!o){n=i+1;break}}else s===-1&&(o=!1,s=i+1),A>=0&&(l===t.charCodeAt(A)?--A===-1&&(r=i):(A=-1,r=s))}return n===r?r=s:r===-1&&(r=e.length),e.slice(n,r)}for(i=e.length-1;i>=0;--i)if(e.charCodeAt(i)===47){if(!o){n=i+1;break}}else r===-1&&(o=!1,r=i+1);return r===-1?"":e.slice(n,r)},extname(e){a(e),e=d(this.toPosix(e));let t=-1,n=0,r=-1,o=!0,i=0;for(let A=e.length-1;A>=0;--A){const s=e.charCodeAt(A);if(s===47){if(!o){n=A+1;break}continue}r===-1&&(o=!1,r=A+1),s===46?t===-1?t=A:i!==1&&(i=1):t!==-1&&(i=-1)}return t===-1||r===-1||i===0||i===1&&t===r-1&&t===n+1?"":e.slice(t,r)},parse(e){a(e);const t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;e=d(this.toPosix(e));let n=e.charCodeAt(0);const r=this.isAbsolute(e);let o;t.root=this.rootname(e),r||this.hasProtocol(e)?o=1:o=0;let i=-1,A=0,s=-1,l=!0,u=e.length-1,g=0;for(;u>=o;--u){if(n=e.charCodeAt(u),n===47){if(!l){A=u+1;break}continue}s===-1&&(l=!1,s=u+1),n===46?i===-1?i=u:g!==1&&(g=1):i!==-1&&(g=-1)}return i===-1||s===-1||g===0||g===1&&i===s-1&&i===A+1?s!==-1&&(A===0&&r?t.base=t.name=e.slice(1,s):t.base=t.name=e.slice(A,s)):(A===0&&r?(t.name=e.slice(1,i),t.base=e.slice(1,s)):(t.name=e.slice(A,i),t.base=e.slice(A,s)),t.ext=e.slice(i,s)),t.dir=this.dirname(e),t},sep:"/",delimiter:":",joinExtensions:[".html"]};let f;async function G(){return f!=null||(f=(async()=>{var i;const e=document.createElement("canvas").getContext("webgl");if(!e)return E.UNPACK;const t=await new Promise(A=>{const s=document.createElement("video");s.onloadeddata=()=>A(s),s.onerror=()=>A(null),s.autoplay=!1,s.crossOrigin="anonymous",s.preload="auto",s.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=",s.load()});if(!t)return E.UNPACK;const n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n);const r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t);const o=new Uint8Array(4);return e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,o),e.deleteFramebuffer(r),e.deleteTexture(n),(i=e.getExtension("WEBGL_lose_context"))==null||i.loseContext(),o[0]<=o[3]?E.PMA:E.UNPACK})()),f}let x;function V(){return typeof x>"u"&&(x=function(){var t;const e={stencil:!0,failIfMajorPerformanceCaveat:h.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!h.ADAPTER.getWebGLRenderingContext())return!1;const n=h.ADAPTER.createCanvas();let r=n.getContext("webgl",e)||n.getContext("experimental-webgl",e);const o=!!((t=r==null?void 0:r.getContextAttributes())!=null&&t.stencil);if(r){const i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,o}catch(n){return!1}}()),x}function j(e,t=[]){return _("7.2.0","utils.hex2rgb is deprecated, use Color#toRgbArray instead"),b.shared.setValue(e).toRgbArray(t)}function $(e){return _("7.2.0","utils.hex2string is deprecated, use Color#toHex instead"),b.shared.setValue(e).toHex()}function Q(e){return _("7.2.0","utils.rgb2hex is deprecated, use Color#toNumber instead"),b.shared.setValue(e).toNumber()}function N(){const e=[],t=[];for(let r=0;r<32;r++)e[r]=r,t[r]=r;e[c.NORMAL_NPM]=c.NORMAL,e[c.ADD_NPM]=c.ADD,e[c.SCREEN_NPM]=c.SCREEN,t[c.NORMAL]=c.NORMAL_NPM,t[c.ADD]=c.ADD_NPM,t[c.SCREEN]=c.SCREEN_NPM;const n=[];return n.push(t),n.push(e),n}const B=N();function Y(e,t){return B[t?1:0][e]}function J(e,t=null){const n=e*6;if(t=t||new Uint16Array(n),t.length!==n)throw new Error(`Out buffer length is incorrect, got ${t.length} and expected ${n}`);for(let r=0,o=0;r<n;r+=6,o+=4)t[r+0]=o+0,t[r+1]=o+1,t[r+2]=o+2,t[r+3]=o+0,t[r+4]=o+2,t[r+5]=o+3;return t}function z(e){if(e.BYTES_PER_ELEMENT===4)return e instanceof Float32Array?"Float32Array":e instanceof Uint32Array?"Uint32Array":"Int32Array";if(e.BYTES_PER_ELEMENT===2){if(e instanceof Uint16Array)return"Uint16Array"}else if(e.BYTES_PER_ELEMENT===1&&e instanceof Uint8Array)return"Uint8Array";return null}function H(e){return e+=e===0?1:0,--e,e|=e>>>1,e|=e>>>2,e|=e>>>4,e|=e>>>8,e|=e>>>16,e+1}function X(e){return!(e&e-1)&&!!e}function Z(e){let t=(e>65535?1:0)<<4;e>>>=t;let n=(e>255?1:0)<<3;return e>>>=n,t|=n,n=(e>15?1:0)<<2,e>>>=n,t|=n,n=(e>3?1:0)<<1,e>>>=n,t|=n,t|e>>1}function K(e,t,n){const r=e.length;let o;if(t>=r||n===0)return;n=t+n>r?r-t:n;const i=r-n;for(o=t;o<i;++o)e[o]=e[o+n];e.length=i}function v(e){return e===0?0:e<0?-1:1}let O=0;function q(){return++O}const P=class{constructor(e,t,n,r){this.left=e,this.top=t,this.right=n,this.bottom=r}get width(){return this.right-this.left}get height(){return this.bottom-this.top}isEmpty(){return this.left===this.right||this.top===this.bottom}};P.EMPTY=new P(0,0,0,0);let m=P;const p={},ee=Object.create(null),te=Object.create(null);class ne{constructor(t,n,r){this._canvas=h.ADAPTER.createCanvas(),this._context=this._canvas.getContext("2d"),this.resolution=r||h.RESOLUTION,this.resize(t,n)}clear(){this._checkDestroyed(),this._context.setTransform(1,0,0,1,0,0),this._context.clearRect(0,0,this._canvas.width,this._canvas.height)}resize(t,n){this._checkDestroyed(),this._canvas.width=Math.round(t*this.resolution),this._canvas.height=Math.round(n*this.resolution)}destroy(){this._context=null,this._canvas=null}get width(){return this._checkDestroyed(),this._canvas.width}set width(t){this._checkDestroyed(),this._canvas.width=Math.round(t)}get height(){return this._checkDestroyed(),this._canvas.height}set height(t){this._checkDestroyed(),this._canvas.height=Math.round(t)}get canvas(){return this._checkDestroyed(),this._canvas}get context(){return this._checkDestroyed(),this._context}_checkDestroyed(){if(this._canvas===null)throw new TypeError("The CanvasRenderTarget has already been destroyed")}}function D(e,t,n){for(let r=0,o=4*n*t;r<t;++r,o+=4)if(e[o+3]!==0)return!1;return!0}function T(e,t,n,r,o){const i=4*t;for(let A=r,s=r*i+4*n;A<=o;++A,s+=i)if(e[s+3]!==0)return!1;return!0}function S(e){const{width:t,height:n}=e,r=e.getContext("2d",{willReadFrequently:!0});if(r===null)throw new TypeError("Failed to get canvas 2D context");const o=r.getImageData(0,0,t,n).data;let i=0,A=0,s=t-1,l=n-1;for(;A<n&&D(o,t,A);)++A;if(A===n)return m.EMPTY;for(;D(o,t,l);)--l;for(;T(o,t,i,A,l);)++i;for(;T(o,t,s,A,l);)--s;return++s,++l,new m(i,A,s,l)}function re(e){const t=S(e),{width:n,height:r}=t;let o=null;if(!t.isEmpty()){const i=e.getContext("2d");if(i===null)throw new TypeError("Failed to get canvas 2D context");o=i.getImageData(t.left,t.top,n,r)}return{width:n,height:r,data:o}}function oe(e,t=globalThis.location){if(e.startsWith("data:"))return"";t=t||globalThis.location;const n=new URL(e,document.baseURI);return n.hostname!==t.hostname||n.port!==t.port||n.protocol!==t.protocol?"anonymous":""}function ie(e,t=1){var r;const n=(r=h.RETINA_PREFIX)==null?void 0:r.exec(e);return n?parseFloat(n[1]):t}export{te as B,ne as C,p as P,ee as T,_ as a,z as b,B as c,G as d,oe as e,V as f,ie as g,J as h,X as i,Y as j,Q as k,Z as l,$ as m,H as n,j as o,M as p,K as r,v as s,re as t,q as u};
 function r(t){if(t)return n(t)}function n(t){for(var s in r.prototype)t[s]=r.prototype[s];return t}r.prototype.on=r.prototype.addEventListener=function(t,s){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(s),this};r.prototype.once=function(t,s){function e(){this.off(t,e),s.apply(this,arguments)}return e.fn=s,this.on(t,e),this};r.prototype.off=r.prototype.removeListener=r.prototype.removeAllListeners=r.prototype.removeEventListener=function(t,s){if(this._callbacks=this._callbacks||{},arguments.length==0)return this._callbacks={},this;var e=this._callbacks["$"+t];if(!e)return this;if(arguments.length==1)return delete this._callbacks["$"+t],this;for(var a,i=0;i<e.length;i++)if(a=e[i],a===s||a.fn===s){e.splice(i,1);break}return e.length===0&&delete this._callbacks["$"+t],this};r.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var s=new Array(arguments.length-1),e=this._callbacks["$"+t],a=1;a<arguments.length;a++)s[a-1]=arguments[a];if(e){e=e.slice(0);for(var a=0,i=e.length;a<i;++a)e[a].apply(this,s)}return this};r.prototype.emitReserved=r.prototype.emit;r.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]};r.prototype.hasListeners=function(t){return!!this.listeners(t).length};export{r as E};
function x(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function _(t){var e=x(t).Element;return t instanceof e||t instanceof Element}function O(t){var e=x(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function oe(t){if(typeof ShadowRoot>"u")return!1;var e=x(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var k=Math.round;function z(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function pe(){return!/^((?!chrome|android).)*safari/i.test(z())}function X(t,e,r){e===void 0&&(e=!1),r===void 0&&(r=!1);var n=t.getBoundingClientRect(),o=1,a=1;e&&O(t)&&(o=t.offsetWidth>0&&k(n.width)/t.offsetWidth||1,a=t.offsetHeight>0&&k(n.height)/t.offsetHeight||1);var c=_(t)?x(t):window,s=c.visualViewport,f=!pe()&&r,u=(n.left+(f&&s?s.offsetLeft:0))/o,i=(n.top+(f&&s?s.offsetTop:0))/a,h=n.width/o,S=n.height/a;return{width:h,height:S,top:i,right:u+h,bottom:i+S,left:u,x:u,y:i}}function ae(t){var e=x(t),r=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:r,scrollTop:n}}function le(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function ve(t){return t===x(t)||!O(t)?ae(t):le(t)}function R(t){return t?(t.nodeName||"").toLowerCase():null}function F(t){return((_(t)?t.ownerDocument:t.document)||window.document).documentElement}function de(t){return X(F(t)).left+ae(t).scrollLeft}function D(t){return x(t).getComputedStyle(t)}function J(t){var e=D(t),r=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function he(t){var e=t.getBoundingClientRect(),r=k(e.width)/t.offsetWidth||1,n=k(e.height)/t.offsetHeight||1;return r!==1||n!==1}function me(t,e,r){r===void 0&&(r=!1);var n=O(e),o=O(e)&&he(e),a=F(e),c=X(t,o,r),s={scrollLeft:0,scrollTop:0},f={x:0,y:0};return(n||!n&&!r)&&((R(e)!=="body"||J(a))&&(s=ve(e)),O(e)?(f=X(e,!0),f.x+=e.clientLeft,f.y+=e.clientTop):a&&(f.x=de(a))),{x:c.left+s.scrollLeft-f.x,y:c.top+s.scrollTop-f.y,width:c.width,height:c.height}}function ge(t){var e=X(t),r=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-r)<=1&&(r=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:r,height:n}}function K(t){return R(t)==="html"?t:t.assignedSlot||t.parentNode||(oe(t)?t.host:null)||F(t)}function ie(t){return["html","body","#document"].indexOf(R(t))>=0?t.ownerDocument.body:O(t)&&J(t)?t:ie(K(t))}function H(t,e){var r;e===void 0&&(e=[]);var n=ie(t),o=n===((r=t.ownerDocument)==null?void 0:r.body),a=x(n),c=o?[a].concat(a.visualViewport||[],J(n)?n:[]):n,s=e.concat(c);return o?s:s.concat(H(K(c)))}function be(t){return["table","td","th"].indexOf(R(t))>=0}function Q(t){return!O(t)||D(t).position==="fixed"?null:t.offsetParent}function ye(t){var e=/firefox/i.test(z()),r=/Trident/i.test(z());if(r&&O(t)){var n=D(t);if(n.position==="fixed")return null}var o=K(t);for(oe(o)&&(o=o.host);O(o)&&["html","body"].indexOf(R(o))<0;){var a=D(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||e&&a.willChange==="filter"||e&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function se(t){for(var e=x(t),r=Q(t);r&&be(r)&&D(r).position==="static";)r=Q(r);return r&&(R(r)==="html"||R(r)==="body"&&D(r).position==="static")?e:r||ye(t)||e}var I="top",Y="bottom",W="right",T="left",fe="auto",we=[I,Y,W,T],ce="start",$="end",Oe=[].concat(we,[fe]).reduce(function(t,e){return t.concat([e,e+"-"+ce,e+"-"+$])},[]),xe="beforeRead",Ee="read",Se="afterRead",Re="beforeMain",De="main",je="afterMain",Le="beforeWrite",Me="write",Pe="afterWrite",G=[xe,Ee,Se,Re,De,je,Le,Me,Pe];function Te(t){var e=new Map,r=new Set,n=[];t.forEach(function(a){e.set(a.name,a)});function o(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(s){if(!r.has(s)){var f=e.get(s);f&&o(f)}}),n.push(a)}return t.forEach(function(a){r.has(a.name)||o(a)}),n}function Ae(t){var e=Te(t);return G.reduce(function(r,n){return r.concat(e.filter(function(o){return o.phase===n}))},[])}function Ie(t){var e;return function(){return e||(e=new Promise(function(r){Promise.resolve().then(function(){e=void 0,r(t())})})),e}}function L(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return[].concat(r).reduce(function(o,a){return o.replace(/%s/,a)},t)}var P='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',ke='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',Z=["name","enabled","phase","fn","effect","requires","options"];function qe(t){t.forEach(function(e){[].concat(Object.keys(e),Z).filter(function(r,n,o){return o.indexOf(r)===n}).forEach(function(r){switch(r){case"name":typeof e.name!="string"&&console.error(L(P,String(e.name),'"name"','"string"','"'+String(e.name)+'"'));break;case"enabled":typeof e.enabled!="boolean"&&console.error(L(P,e.name,'"enabled"','"boolean"','"'+String(e.enabled)+'"'));break;case"phase":G.indexOf(e.phase)<0&&console.error(L(P,e.name,'"phase"',"either "+G.join(", "),'"'+String(e.phase)+'"'));break;case"fn":typeof e.fn!="function"&&console.error(L(P,e.name,'"fn"','"function"','"'+String(e.fn)+'"'));break;case"effect":e.effect!=null&&typeof e.effect!="function"&&console.error(L(P,e.name,'"effect"','"function"','"'+String(e.fn)+'"'));break;case"requires":e.requires!=null&&!Array.isArray(e.requires)&&console.error(L(P,e.name,'"requires"','"array"','"'+String(e.requires)+'"'));break;case"requiresIfExists":Array.isArray(e.requiresIfExists)||console.error(L(P,e.name,'"requiresIfExists"','"array"','"'+String(e.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+e.name+'" modifier, valid properties are '+Z.map(function(n){return'"'+n+'"'}).join(", ")+'; but "'+r+'" was provided.')}e.requires&&e.requires.forEach(function(n){t.find(function(o){return o.name===n})==null&&console.error(L(ke,String(e.name),n,n))})})})}function Ne(t,e){var r=new Set;return t.filter(function(n){var o=e(n);if(!r.has(o))return r.add(o),!0})}function U(t){return t.split("-")[0]}function Ce(t){var e=t.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(e).map(function(r){return e[r]})}function ue(t){return t.split("-")[1]}function We(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Ve(t){var e=t.reference,r=t.element,n=t.placement,o=n?U(n):null,a=n?ue(n):null,c=e.x+e.width/2-r.width/2,s=e.y+e.height/2-r.height/2,f;switch(o){case I:f={x:c,y:e.y-r.height};break;case Y:f={x:c,y:e.y+e.height};break;case W:f={x:e.x+e.width,y:s};break;case T:f={x:e.x-r.width,y:s};break;default:f={x:e.x,y:e.y}}var u=o?We(o):null;if(u!=null){var i=u==="y"?"height":"width";switch(a){case ce:f[u]=f[u]-(e[i]/2-r[i]/2);break;case $:f[u]=f[u]+(e[i]/2-r[i]/2);break}}return f}var ee="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",Be="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",te={placement:"bottom",modifiers:[],strategy:"absolute"};function re(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function He(t){t===void 0&&(t={});var e=t,r=e.defaultModifiers,n=r===void 0?[]:r,o=e.defaultOptions,a=o===void 0?te:o;return function(s,f,u){u===void 0&&(u=a);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},te,a),modifiersData:{},elements:{reference:s,popper:f},attributes:{},styles:{}},h=[],S=!1,l={state:i,setOptions:function(y){var E=typeof y=="function"?y(i.options):y;m(),i.options=Object.assign({},a,i.options,E),i.scrollParents={reference:_(s)?H(s):s.contextElement?H(s.contextElement):[],popper:H(f)};var b=Ae(Ce([].concat(n,i.options.modifiers)));i.orderedModifiers=b.filter(function(g){return g.enabled});{var w=Ne([].concat(b,i.options.modifiers),function(g){var A=g.name;return A});if(qe(w),U(i.options.placement)===fe){var v=i.orderedModifiers.find(function(g){var A=g.name;return A==="flip"});v||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" "))}var p=D(f),j=p.marginTop,M=p.marginRight,q=p.marginBottom,N=p.marginLeft;[j,M,q,N].some(function(g){return parseFloat(g)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" "))}return V(),l.update()},forceUpdate:function(){if(!S){var y=i.elements,E=y.reference,b=y.popper;if(!re(E,b)){console.error(ee);return}i.rects={reference:me(E,se(b),i.options.strategy==="fixed"),popper:ge(b)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach(function(g){return i.modifiersData[g.name]=Object.assign({},g.data)});for(var w=0,v=0;v<i.orderedModifiers.length;v++){if(w+=1,w>100){console.error(Be);break}if(i.reset===!0){i.reset=!1,v=-1;continue}var p=i.orderedModifiers[v],j=p.fn,M=p.options,q=M===void 0?{}:M,N=p.name;typeof j=="function"&&(i=j({state:i,options:q,name:N,instance:l})||i)}}},update:Ie(function(){return new Promise(function(d){l.forceUpdate(),d(i)})}),destroy:function(){m(),S=!0}};if(!re(s,f))return console.error(ee),l;l.setOptions(u).then(function(d){!S&&u.onFirstUpdate&&u.onFirstUpdate(d)});function V(){i.orderedModifiers.forEach(function(d){var y=d.name,E=d.options,b=E===void 0?{}:E,w=d.effect;if(typeof w=="function"){var v=w({state:i,name:y,instance:l,options:b}),p=function(){};h.push(v||p)}})}function m(){h.forEach(function(d){return d()}),h=[]}return l}}var B={passive:!0};function Xe(t){var e=t.state,r=t.instance,n=t.options,o=n.scroll,a=o===void 0?!0:o,c=n.resize,s=c===void 0?!0:c,f=x(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return a&&u.forEach(function(i){i.addEventListener("scroll",r.update,B)}),s&&f.addEventListener("resize",r.update,B),function(){a&&u.forEach(function(i){i.removeEventListener("scroll",r.update,B)}),s&&f.removeEventListener("resize",r.update,B)}}var Ye={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Xe,data:{}};function $e(t){var e=t.state,r=t.name;e.modifiersData[r]=Ve({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Fe={name:"popperOffsets",enabled:!0,phase:"read",fn:$e,data:{}},Ue={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ze(t){var e=t.x,r=t.y,n=window,o=n.devicePixelRatio||1;return{x:k(e*o)/o||0,y:k(r*o)/o||0}}function ne(t){var e,r=t.popper,n=t.popperRect,o=t.placement,a=t.variation,c=t.offsets,s=t.position,f=t.gpuAcceleration,u=t.adaptive,i=t.roundOffsets,h=t.isFixed,S=c.x,l=S===void 0?0:S,V=c.y,m=V===void 0?0:V,d=typeof i=="function"?i({x:l,y:m}):{x:l,y:m};l=d.x,m=d.y;var y=c.hasOwnProperty("x"),E=c.hasOwnProperty("y"),b=T,w=I,v=window;if(u){var p=se(r),j="clientHeight",M="clientWidth";if(p===x(r)&&(p=F(r),D(p).position!=="static"&&s==="absolute"&&(j="scrollHeight",M="scrollWidth")),p=p,o===I||(o===T||o===W)&&a===$){w=Y;var q=h&&p===v&&v.visualViewport?v.visualViewport.height:p[j];m-=q-n.height,m*=f?1:-1}if(o===T||(o===I||o===Y)&&a===$){b=W;var N=h&&p===v&&v.visualViewport?v.visualViewport.width:p[M];l-=N-n.width,l*=f?1:-1}}var g=Object.assign({position:s},u&&Ue),A=i===!0?ze({x:l,y:m}):{x:l,y:m};if(l=A.x,m=A.y,f){var C;return Object.assign({},g,(C={},C[w]=E?"0":"",C[b]=y?"0":"",C.transform=(v.devicePixelRatio||1)<=1?"translate("+l+"px, "+m+"px)":"translate3d("+l+"px, "+m+"px, 0)",C))}return Object.assign({},g,(e={},e[w]=E?m+"px":"",e[b]=y?l+"px":"",e.transform="",e))}function Ge(t){var e=t.state,r=t.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,c=a===void 0?!0:a,s=r.roundOffsets,f=s===void 0?!0:s;{var u=D(e.elements.popper).transitionProperty||"";c&&["transform","top","right","bottom","left"].some(function(h){return u.indexOf(h)>=0})&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',`

`,'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.",`

`,"We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "))}var i={placement:U(e.placement),variation:ue(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ne(Object.assign({},i,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:f})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ne(Object.assign({},i,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var _e={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ge,data:{}};function Je(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},o=e.attributes[r]||{},a=e.elements[r];!O(a)||!R(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(c){var s=o[c];s===!1?a.removeAttribute(c):a.setAttribute(c,s===!0?"":s)}))})}function Ke(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var o=e.elements[n],a=e.attributes[n]||{},c=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),s=c.reduce(function(f,u){return f[u]="",f},{});!O(o)||!R(o)||(Object.assign(o.style,s),Object.keys(a).forEach(function(f){o.removeAttribute(f)}))})}}var Qe={name:"applyStyles",enabled:!0,phase:"write",fn:Je,effect:Ke,requires:["computeStyles"]},Ze=[Ye,Fe,_e,Qe],rt=He({defaultModifiers:Ze});function et(t,e,r){var n=U(t),o=[T,I].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,c=a[0],s=a[1];return c=c||0,s=(s||0)*o,[T,W].indexOf(n)>=0?{x:s,y:c}:{x:c,y:s}}function tt(t){var e=t.state,r=t.options,n=t.name,o=r.offset,a=o===void 0?[0,0]:o,c=Oe.reduce(function(i,h){return i[h]=et(h,e.rects,a),i},{}),s=c[e.placement],f=s.x,u=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=f,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=c}var nt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:tt};export{rt as c,nt as o};
  
`,'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.",`

`,"We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "))}var i={placement:U(e.placement),variation:ue(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ne(Object.assign({},i,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:c,roundOffsets:f})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ne(Object.assign({},i,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:f})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var _e={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ge,data:{}};function Je(t){var e=t.state;Object.keys(e.elements).forEach(function(r){var n=e.styles[r]||{},o=e.attributes[r]||{},a=e.elements[r];!O(a)||!R(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(c){var s=o[c];s===!1?a.removeAttribute(c):a.setAttribute(c,s===!0?"":s)}))})}function Ke(t){var e=t.state,r={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,r.popper),e.styles=r,e.elements.arrow&&Object.assign(e.elements.arrow.style,r.arrow),function(){Object.keys(e.elements).forEach(function(n){var o=e.elements[n],a=e.attributes[n]||{},c=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:r[n]),s=c.reduce(function(f,u){return f[u]="",f},{});!O(o)||!R(o)||(Object.assign(o.style,s),Object.keys(a).forEach(function(f){o.removeAttribute(f)}))})}}var Qe={name:"applyStyles",enabled:!0,phase:"write",fn:Je,effect:Ke,requires:["computeStyles"]},Ze=[Ye,Fe,_e,Qe],rt=He({defaultModifiers:Ze});function et(t,e,r){var n=U(t),o=[T,I].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},e,{placement:t})):r,c=a[0],s=a[1];return c=c||0,s=(s||0)*o,[T,W].indexOf(n)>=0?{x:s,y:c}:{x:c,y:s}}function tt(t){var e=t.state,r=t.options,n=t.name,o=r.offset,a=o===void 0?[0,0]:o,c=Oe.reduce(function(i,h){return i[h]=et(h,e.rects,a),i},{}),s=c[e.placement],f=s.x,u=s.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=f,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=c}var nt={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:tt};export{rt as c,nt as o};
  import{o as R,a as D,w as L,i as S,c as _,b as I,n as F,d as P,g as V,p as U,e as H,f as j}from"./@vue_runtime-core@3.5.23.ea9e0f11.js";import{u as p,i as z,r as m,a as M}from"./@vue_reactivity@3.5.23.4d0939bc.js";var v=typeof window<"u";function y(e){return v?requestAnimationFrame(e):-1}function q(e){v&&cancelAnimationFrame(e)}function oe(e){y(()=>y(e))}var J=e=>e===window,N=(e,n)=>({top:0,left:0,right:e,bottom:n,width:e,height:n}),se=e=>{const n=p(e);if(J(n)){const t=n.innerWidth,i=n.innerHeight;return N(t,i)}return n!=null&&n.getBoundingClientRect?n.getBoundingClientRect():N(0,0)};function ue(e=!1){const n=m(e);return[n,(i=!n.value)=>{n.value=i}]}function ce(e){const n=S(e,null);if(n){const t=V(),{link:i,unlink:a,internalChildren:r}=n;i(t),R(()=>a(t));const s=_(()=>r.indexOf(t));return{parent:n,index:s}}return{parent:null,index:m(-1)}}function K(e){const n=[],t=i=>{Array.isArray(i)&&i.forEach(a=>{var r;j(a)&&(n.push(a),(r=a.component)!=null&&r.subTree&&(n.push(a.component.subTree),t(a.component.subTree.children)),a.children&&t(a.children))})};return t(e),n}var O=(e,n)=>{const t=e.indexOf(n);return t===-1?e.findIndex(i=>n.key!==void 0&&n.key!==null&&i.type===n.type&&i.key===n.key):t};function G(e,n,t){const i=K(e.subTree.children);t.sort((r,s)=>O(i,r.vnode)-O(i,s.vnode));const a=t.map(r=>r.proxy);n.sort((r,s)=>{const u=a.indexOf(r),o=a.indexOf(s);return u-o})}function le(e){const n=M([]),t=M([]),i=V();return{children:n,linkChildren:r=>{U(e,Object.assign({link:o=>{o.proxy&&(t.push(o),n.push(o.proxy),G(i,n,t))},unlink:o=>{const c=t.indexOf(o);n.splice(c,1),t.splice(c,1)},children:n,internalChildren:t},r))}}}var k=1e3,E=60*k,T=60*E,A=24*T;function Q(e){const n=Math.floor(e/A),t=Math.floor(e%A/T),i=Math.floor(e%T/E),a=Math.floor(e%E/k),r=Math.floor(e%k);return{total:e,days:n,hours:t,minutes:i,seconds:a,milliseconds:r}}function X(e,n){return Math.floor(e/1e3)===Math.floor(n/1e3)}function fe(e){let n,t,i,a;const r=m(e.time),s=_(()=>Q(r.value)),u=()=>{i=!1,q(n)},o=()=>Math.max(t-Date.now(),0),c=d=>{var x,b;r.value=d,(x=e.onChange)==null||x.call(e,s.value),d===0&&(u(),(b=e.onFinish)==null||b.call(e))},h=()=>{n=y(()=>{i&&(c(o()),r.value>0&&h())})},f=()=>{n=y(()=>{if(i){const d=o();(!X(d,r.value)||d===0)&&c(d),r.value>0&&f()}})},l=()=>{v&&(e.millisecond?h():f())},W=()=>{i||(t=Date.now()+r.value,i=!0,l())},Y=(d=e.time)=>{u(),r.value=d};return H(u),P(()=>{a&&(i=!0,a=!1,l())}),D(()=>{i&&(u(),a=!0)}),{start:W,pause:u,reset:Y,current:s}}function Z(e){let n;I(()=>{e(),F(()=>{n=!0})}),P(()=>{n&&e()})}function $(e,n,t={}){if(!v)return;const{target:i=window,passive:a=!1,capture:r=!1}=t;let s=!1,u;const o=f=>{if(s)return;const l=p(f);l&&!u&&(l.addEventListener(e,n,{capture:r,passive:a}),u=!0)},c=f=>{if(s)return;const l=p(f);l&&u&&(l.removeEventListener(e,n,r),u=!1)};R(()=>c(i)),D(()=>c(i)),Z(()=>o(i));let h;return z(i)&&(h=L(i,(f,l)=>{c(l),o(f)})),()=>{h==null||h(),c(i),s=!0}}function de(e,n,t={}){if(!v)return;const{eventName:i="click"}=t;$(i,r=>{(Array.isArray(e)?e:[e]).every(o=>{const c=p(o);return c&&!c.contains(r.target)})&&n(r)},{target:document})}var g,C;function ve(){if(!g&&(g=m(0),C=m(0),v)){const e=()=>{g.value=window.innerWidth,C.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:g,height:C}}var ee=/scroll|auto|overlay/i,B=v?window:void 0;function ne(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function te(e,n=B){let t=e;for(;t&&t!==n&&ne(t);){const{overflowY:i}=window.getComputedStyle(t);if(ee.test(i))return t;t=t.parentNode}return n}function me(e,n=B){const t=m();return I(()=>{e.value&&(t.value=te(e.value,n))}),t}var w;function he(){if(!w&&(w=m("visible"),v)){const e=()=>{w.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return w}var ie=Symbol("van-field");function ge(e){const n=S(ie,null);n&&!n.customValue.value&&(n.customValue.value=e,L(e,()=>{n.resetValidation(),n.validateWithTrigger("onChange")}))}export{ie as C,se as a,$ as b,ce as c,q as d,me as e,le as f,te as g,he as h,oe as i,ge as j,v as k,ue as l,fe as m,de as n,Z as o,y as r,ve as u};
  import{i as F,h as I,e as Nt,a as j,b as ct,c as y,E as Yt,t as Bt,d as Z,f as Ft,r as zt,N as Gt,g as Jt,j as H,k as Ut,l as dt,m as qt}from"./@vue_shared@3.5.23.c91d4472.js";let v;class Qt{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=v,!e&&v&&(this.index=(v.scopes||(v.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].pause();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,s;if(this.scopes)for(e=0,s=this.scopes.length;e<s;e++)this.scopes[e].resume();for(e=0,s=this.effects.length;e<s;e++)this.effects[e].resume()}}run(e){if(this._active){const s=v;try{return v=this,e()}finally{v=s}}}on(){++this._on===1&&(this.prevScope=v,v=this)}off(){this._on>0&&--this._on===0&&(v=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ie(t){return new Qt(t)}function Xt(){return v}function Ee(t,e=!1){v&&v.cleanups.push(t)}let h;const rt=new WeakSet;class Zt{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,v&&v.active&&v.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,rt.has(this)&&(rt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||mt(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bt(this),xt(this);const e=h,s=R;h=this,R=!0;try{return this.fn()}finally{yt(this),h=e,R=s,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gt(e);this.deps=this.depsTail=void 0,bt(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?rt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ft(this)&&this.run()}get dirty(){return ft(this)}}let St=0,W,V;function mt(t,e=!1){if(t.flags|=8,e){t.next=V,V=t;return}t.next=W,W=t}function _t(){St++}function vt(){if(--St>0)return;if(V){let e=V;for(V=void 0;e;){const s=e.next;e.next=void 0,e.flags&=-9,e=s}}let t;for(;W;){let e=W;for(W=void 0;e;){const s=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(n){t||(t=n)}e=s}}if(t)throw t}function xt(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function yt(t){let e,s=t.depsTail,n=s;for(;n;){const i=n.prevDep;n.version===-1?(n===s&&(s=i),gt(n),$t(n)):e=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=i}t.deps=e,t.depsTail=s}function ft(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Tt(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Tt(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Y)||(t.globalVersion=Y,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ft(t))))return;t.flags|=2;const e=t.dep,s=h,n=R;h=t,R=!0;try{xt(t);const i=t.fn(t._value);(e.version===0||I(i,t._value))&&(t.flags|=128,t._value=i,e.version++)}catch(i){throw e.version++,i}finally{h=s,R=n,yt(t),t.flags&=-3}}function gt(t,e=!1){const{dep:s,prevSub:n,nextSub:i}=t;if(n&&(n.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=n,t.nextSub=void 0),s.subs===t&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)gt(r,!0)}!e&&!--s.sc&&s.map&&s.map.delete(s.key)}function $t(t){const{prevDep:e,nextDep:s}=t;e&&(e.nextDep=s,t.prevDep=void 0),s&&(s.prevDep=e,t.nextDep=void 0)}let R=!0;const Dt=[];function It(){Dt.push(R),R=!1}function Et(){const t=Dt.pop();R=t===void 0?!0:t}function bt(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const s=h;h=void 0;try{e()}finally{h=s}}}let Y=0;class kt{constructor(e,s){this.sub=e,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tt{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!h||!R||h===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==h)s=this.activeLink=new kt(h,this),h.deps?(s.prevDep=h.depsTail,h.depsTail.nextDep=s,h.depsTail=s):h.deps=h.depsTail=s,Mt(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=h.depsTail,s.nextDep=void 0,h.depsTail.nextDep=s,h.depsTail=s,h.deps===s&&(h.deps=n)}return s}trigger(e){this.version++,Y++,this.notify(e)}notify(e){_t();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{vt()}}}function Mt(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let n=e.deps;n;n=n.nextDep)Mt(n)}const s=t.dep.subs;s!==t&&(t.prevSub=s,s&&(s.nextSub=t)),t.dep.subs=t}}const $=new WeakMap,P=Symbol(""),lt=Symbol(""),B=Symbol("");function w(t,e,s){if(R&&h){let n=$.get(t);n||$.set(t,n=new Map);let i=n.get(s);i||(n.set(s,i=new tt),i.map=n,i.key=s),i.track()}}function T(t,e,s,n,i,r){const o=$.get(t);if(!o){Y++;return}const a=c=>{c&&c.trigger()};if(_t(),e==="clear")o.forEach(a);else{const c=y(t),d=c&&dt(s);if(c&&s==="length"){const f=Number(n);o.forEach((p,_)=>{(_==="length"||_===B||!F(_)&&_>=f)&&a(p)})}else switch((s!==void 0||o.has(void 0))&&a(o.get(s)),d&&a(o.get(B)),e){case"add":c?d&&a(o.get("length")):(a(o.get(P)),H(t)&&a(o.get(lt)));break;case"delete":c||(a(o.get(P)),H(t)&&a(o.get(lt)));break;case"set":H(t)&&a(o.get(P));break}}vt()}function te(t,e){const s=$.get(t);return s&&s.get(e)}function L(t){const e=u(t);return e===t?e:(w(e,"iterate",B),S(t)?e:e.map(g))}function wt(t){return w(t=u(t),"iterate",B),t}const ee={__proto__:null,[Symbol.iterator](){return ot(this,Symbol.iterator,g)},concat(...t){return L(this).concat(...t.map(e=>y(e)?L(e):e))},entries(){return ot(this,"entries",t=>(t[1]=g(t[1]),t))},every(t,e){return x(this,"every",t,e,void 0,arguments)},filter(t,e){return x(this,"filter",t,e,s=>s.map(g),arguments)},find(t,e){return x(this,"find",t,e,g,arguments)},findIndex(t,e){return x(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return x(this,"findLast",t,e,g,arguments)},findLastIndex(t,e){return x(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return x(this,"forEach",t,e,void 0,arguments)},includes(...t){return at(this,"includes",t)},indexOf(...t){return at(this,"indexOf",t)},join(t){return L(this).join(t)},lastIndexOf(...t){return at(this,"lastIndexOf",t)},map(t,e){return x(this,"map",t,e,void 0,arguments)},pop(){return C(this,"pop")},push(...t){return C(this,"push",t)},reduce(t,...e){return Rt(this,"reduce",t,e)},reduceRight(t,...e){return Rt(this,"reduceRight",t,e)},shift(){return C(this,"shift")},some(t,e){return x(this,"some",t,e,void 0,arguments)},splice(...t){return C(this,"splice",t)},toReversed(){return L(this).toReversed()},toSorted(t){return L(this).toSorted(t)},toSpliced(...t){return L(this).toSpliced(...t)},unshift(...t){return C(this,"unshift",t)},values(){return ot(this,"values",g)}};function ot(t,e,s){const n=wt(t),i=n[e]();return n!==t&&!S(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.done||(r.value=s(r.value)),r}),i}const se=Array.prototype;function x(t,e,s,n,i,r){const o=wt(t),a=o!==t&&!S(t),c=o[e];if(c!==se[e]){const p=c.apply(t,r);return a?g(p):p}let d=s;o!==t&&(a?d=function(p,_){return s.call(this,g(p),_,t)}:s.length>2&&(d=function(p,_){return s.call(this,p,_,t)}));const f=c.call(o,d,n);return a&&i?i(f):f}function Rt(t,e,s,n){const i=wt(t);let r=s;return i!==t&&(S(t)?s.length>3&&(r=function(o,a,c){return s.call(this,o,a,c,t)}):r=function(o,a,c){return s.call(this,o,g(a),c,t)}),i[e](r,...n)}function at(t,e,s){const n=u(t);w(n,"iterate",B);const i=n[e](...s);return(i===-1||i===!1)&&ge(s[0])?(s[0]=u(s[0]),n[e](...s)):i}function C(t,e,s=[]){It(),_t();const n=u(t)[e].apply(t,s);return vt(),Et(),n}const ie=qt("__proto__,__v_isRef,__isVue"),Pt=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(F));function ne(t){F(t)||(t=String(t));const e=u(this);return w(e,"has",t),e.hasOwnProperty(t)}class Ot{constructor(e=!1,s=!1){this._isReadonly=e,this._isShallow=s}get(e,s,n){if(s==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!i;if(s==="__v_isReadonly")return i;if(s==="__v_isShallow")return r;if(s==="__v_raw")return n===(i?r?Ht:Ct:r?Kt:jt).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=y(e);if(!i){let c;if(o&&(c=ee[s]))return c;if(s==="hasOwnProperty")return ne}const a=Reflect.get(e,s,b(e)?e:n);if((F(s)?Pt.has(s):ie(s))||(i||w(e,"get",s),r))return a;if(b(a)){const c=o&&dt(s)?a:a.value;return i&&j(c)?ht(c):c}return j(a)?i?ht(a):Wt(a):a}}class At extends Ot{constructor(e=!1){super(!1,e)}set(e,s,n,i){let r=e[s];if(!this._isShallow){const c=O(r);if(!S(n)&&!O(n)&&(r=u(r),n=u(n)),!y(e)&&b(r)&&!b(n))return c||(r.value=n),!0}const o=y(e)&&dt(s)?Number(s)<e.length:Z(e,s),a=Reflect.set(e,s,n,b(e)?e:i);return e===u(i)&&(o?I(n,r)&&T(e,"set",s,n):T(e,"add",s,n)),a}deleteProperty(e,s){const n=Z(e,s);e[s];const i=Reflect.deleteProperty(e,s);return i&&n&&T(e,"delete",s,void 0),i}has(e,s){const n=Reflect.has(e,s);return(!F(s)||!Pt.has(s))&&w(e,"has",s),n}ownKeys(e){return w(e,"iterate",y(e)?"length":P),Reflect.ownKeys(e)}}class Lt extends Ot{constructor(e=!1){super(!0,e)}set(e,s){return!0}deleteProperty(e,s){return!0}}const re=new At,oe=new Lt,ae=new At(!0),ce=new Lt(!0),ut=t=>t,q=t=>Reflect.getPrototypeOf(t);function fe(t,e,s){return function(...n){const i=this.__v_raw,r=u(i),o=H(r),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,d=i[t](...n),f=s?ut:e?pt:g;return!e&&w(r,"iterate",c?lt:P),{next(){const{value:p,done:_}=d.next();return _?{value:p,done:_}:{value:a?[f(p[0]),f(p[1])]:f(p),done:_}},[Symbol.iterator](){return this}}}}function Q(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function le(t,e){const s={get(i){const r=this.__v_raw,o=u(r),a=u(i);t||(I(i,a)&&w(o,"get",i),w(o,"get",a));const{has:c}=q(o),d=e?ut:t?pt:g;if(c.call(o,i))return d(r.get(i));if(c.call(o,a))return d(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&w(u(i),"iterate",P),i.size},has(i){const r=this.__v_raw,o=u(r),a=u(i);return t||(I(i,a)&&w(o,"has",i),w(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,c=u(a),d=e?ut:t?pt:g;return!t&&w(c,"iterate",P),a.forEach((f,p)=>i.call(r,d(f),d(p),o))}};return Nt(s,t?{add:Q("add"),set:Q("set"),delete:Q("delete"),clear:Q("clear")}:{add(i){!e&&!S(i)&&!O(i)&&(i=u(i));const r=u(this);return q(r).has.call(r,i)||(r.add(i),T(r,"add",i,i)),this},set(i,r){!e&&!S(r)&&!O(r)&&(r=u(r));const o=u(this),{has:a,get:c}=q(o);let d=a.call(o,i);d||(i=u(i),d=a.call(o,i));const f=c.call(o,i);return o.set(i,r),d?I(r,f)&&T(o,"set",i,r):T(o,"add",i,r),this},delete(i){const r=u(this),{has:o,get:a}=q(r);let c=o.call(r,i);c||(i=u(i),c=o.call(r,i)),a&&a.call(r,i);const d=r.delete(i);return c&&T(r,"delete",i,void 0),d},clear(){const i=u(this),r=i.size!==0,o=i.clear();return r&&T(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{s[i]=fe(i,t,e)}),s}function et(t,e){const s=le(t,e);return(n,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?n:Reflect.get(Z(s,i)&&i in n?s:n,i,r)}const ue={get:et(!1,!1)},he={get:et(!1,!0)},pe={get:et(!0,!1)},de={get:et(!0,!0)},jt=new WeakMap,Kt=new WeakMap,Ct=new WeakMap,Ht=new WeakMap;function _e(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ve(t){return t.__v_skip||!Object.isExtensible(t)?0:_e(Bt(t))}function Wt(t){return O(t)?t:st(t,!1,re,ue,jt)}function Me(t){return st(t,!1,ae,he,Kt)}function ht(t){return st(t,!0,oe,pe,Ct)}function Pe(t){return st(t,!0,ce,de,Ht)}function st(t,e,s,n,i){if(!j(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=ve(t);if(r===0)return t;const o=i.get(t);if(o)return o;const a=new Proxy(t,r===2?n:s);return i.set(t,a),a}function N(t){return O(t)?N(t.__v_raw):!!(t&&t.__v_isReactive)}function O(t){return!!(t&&t.__v_isReadonly)}function S(t){return!!(t&&t.__v_isShallow)}function ge(t){return t?!!t.__v_raw:!1}function u(t){const e=t&&t.__v_raw;return e?u(e):t}function Oe(t){return!Z(t,"__v_skip")&&Object.isExtensible(t)&&Ft(t,"__v_skip",!0),t}const g=t=>j(t)?Wt(t):t,pt=t=>j(t)?ht(t):t;function b(t){return t?t.__v_isRef===!0:!1}function Ae(t){return Vt(t,!1)}function Le(t){return Vt(t,!0)}function Vt(t,e){return b(t)?t:new we(t,e)}class we{constructor(e,s){this.dep=new tt,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?e:u(e),this._value=s?e:g(e),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(e){const s=this._rawValue,n=this.__v_isShallow||S(e)||O(e);e=n?e:u(e),I(e,s)&&(this._rawValue=e,this._value=n?e:g(e),this.dep.trigger())}}function je(t){t.dep&&t.dep.trigger()}function be(t){return b(t)?t.value:t}const Re={get:(t,e,s)=>e==="__v_raw"?t:be(Reflect.get(t,e,s)),set:(t,e,s,n)=>{const i=t[e];return b(i)&&!b(s)?(i.value=s,!0):Reflect.set(t,e,s,n)}};function Ke(t){return N(t)?t:new Proxy(t,Re)}class Se{constructor(e){this.__v_isRef=!0,this._value=void 0;const s=this.dep=new tt,{get:n,set:i}=e(s.track.bind(s),s.trigger.bind(s));this._get=n,this._set=i}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Ce(t){return new Se(t)}function He(t){const e=y(t)?new Array(t.length):{};for(const s in t)e[s]=xe(t,s);return e}class me{constructor(e,s,n){this._object=e,this._key=s,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return te(u(this._object),this._key)}}function xe(t,e,s){const n=t[e];return b(n)?n:new me(t,e,s)}class ye{constructor(e,s,n){this.fn=e,this.setter=s,this._value=void 0,this.dep=new tt(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Y-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&h!==this)return mt(this,!0),!0}get value(){const e=this.dep.track();return Tt(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function We(t,e,s=!1){let n,i;return ct(t)?n=t:(n=t.get,i=t.set),new ye(n,i,s)}const X={},k=new WeakMap;let M;function Te(t,e=!1,s=M){if(s){let n=k.get(s);n||k.set(s,n=[]),n.push(t)}}function Ve(t,e,s=Yt){const{immediate:n,deep:i,once:r,scheduler:o,augmentJob:a,call:c}=s,d=l=>i?l:S(l)||i===!1||i===0?D(l,1):D(l);let f,p,_,z,G=!1,J=!1;if(b(t)?(p=()=>t.value,G=S(t)):N(t)?(p=()=>d(t),G=!0):y(t)?(J=!0,G=t.some(l=>N(l)||S(l)),p=()=>t.map(l=>{if(b(l))return l.value;if(N(l))return d(l);if(ct(l))return c?c(l,2):l()})):ct(t)?e?p=c?()=>c(t,2):t:p=()=>{if(_){It();try{_()}finally{Et()}}const l=M;M=f;try{return c?c(t,3,[z]):t(z)}finally{M=l}}:p=Gt,e&&i){const l=p,m=i===!0?1/0:i;p=()=>D(l(),m)}const it=Xt(),A=()=>{f.stop(),it&&it.active&&zt(it.effects,f)};if(r&&e){const l=e;e=(...m)=>{l(...m),A()}}let E=J?new Array(t.length).fill(X):X;const K=l=>{if(!(!(f.flags&1)||!f.dirty&&!l))if(e){const m=f.run();if(i||G||(J?m.some((nt,U)=>I(nt,E[U])):I(m,E))){_&&_();const nt=M;M=f;try{const U=[m,E===X?void 0:J&&E[0]===X?[]:E,z];E=m,c?c(e,3,U):e(...U)}finally{M=nt}}}else f.run()};return a&&a(K),f=new Zt(p),f.scheduler=o?()=>o(K,!1):K,z=l=>Te(l,!1,f),_=f.onStop=()=>{const l=k.get(f);if(l){if(c)c(l,4);else for(const m of l)m();k.delete(f)}},e?n?K(!0):E=f.run():o?o(K.bind(null,!0),!0):f.run(),A.pause=f.pause.bind(f),A.resume=f.resume.bind(f),A.stop=A,A}function D(t,e=1/0,s){if(e<=0||!j(t)||t.__v_skip||(s=s||new Map,(s.get(t)||0)>=e))return t;if(s.set(t,e),e--,b(t))D(t.value,e,s);else if(y(t))for(let n=0;n<t.length;n++)D(t[n],e,s);else if(Jt(t)||H(t))t.forEach(n=>{D(n,e,s)});else if(Ut(t)){for(const n in t)D(t[n],e,s);for(const n of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,n)&&D(t[n],e,s)}return t}export{Ee as A,He as B,Le as C,je as D,Qt as E,ht as F,Zt as R,Wt as a,N as b,S as c,O as d,g as e,ge as f,We as g,Ce as h,b as i,Et as j,D as k,Ke as l,Oe as m,u as n,w as o,It as p,Me as q,Ae as r,wt as s,pt as t,be as u,T as v,Ve as w,Pe as x,Ie as y,Xt as z};
  import{b as Vl,c as Nl,d as $l,s as Hl,t as Ll,e as Ts,w as jl,f as Ls,g as Bl,h as Ul,i as Tt,p as je,j as Be,k as Dl,l as js,m as Rl,n as wt,R as Kl,E as Wl,o as Bs,a as ql,q as Gl,v as Jl}from"./@vue_reactivity@3.5.23.4d0939bc.js";import{b as H,e as ee,n as St,o as be,p as Us,q as he,a as fe,E as D,s as Ds,c as L,u as Rs,v as os,w as Ks,r as Ws,i as Yl,N as Ae,x as Je,y as Ke,h as De,z as ze,A as Ql,B as et,d as J,C as qs,f as Xl,D as Zl,F as Kt,G as Gs}from"./@vue_shared@3.5.23.c91d4472.js";function ft(e,t,s,l){try{return l?e(...l):e()}catch(n){Vt(n,t,s)}}function Ee(e,t,s,l){if(H(e)){const n=ft(e,t,s,l);return n&&Ks(n)&&n.catch(r=>{Vt(r,t,s)}),n}if(L(e)){const n=[];for(let r=0;r<e.length;r++)n.push(Ee(e[r],t,s,l));return n}}function Vt(e,t,s,l=!0){const n=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:i}=t&&t.appContext.config||D;if(t){let f=t.parent;const u=t.proxy,h=`https://vuejs.org/error-reference/#runtime-${s}`;for(;f;){const a=f.ec;if(a){for(let p=0;p<a.length;p++)if(a[p](e,u,h)===!1)return}f=f.parent}if(r){je(),ft(r,null,10,[e,u,h]),Be();return}}zl(e,s,n,l,i)}function zl(e,t,s,l=!0,n=!1){if(n)throw e;console.error(e)}const re=[];let Te=-1;const We=[];let Pe=null,Re=0;const Js=Promise.resolve();let Ft=null;function en(e){const t=Ft||Js;return e?t.then(this?e.bind(this):e):t}function tn(e){let t=Te+1,s=re.length;for(;t<s;){const l=t+s>>>1,n=re[l],r=rt(n);r<e||r===e&&n.flags&2?t=l+1:s=l}return t}function is(e){if(!(e.flags&1)){const t=rt(e),s=re[re.length-1];!s||!(e.flags&2)&&t>=rt(s)?re.push(e):re.splice(tn(t),0,e),e.flags|=1,Ys()}}function Ys(){Ft||(Ft=Js.then(Xs))}function sn(e){L(e)?We.push(...e):Pe&&e.id===-1?Pe.splice(Re+1,0,e):e.flags&1||(We.push(e),e.flags|=1),Ys()}function Fs(e,t,s=Te+1){for(;s<re.length;s++){const l=re[s];if(l&&l.flags&2){if(e&&l.id!==e.uid)continue;re.splice(s,1),s--,l.flags&4&&(l.flags&=-2),l(),l.flags&4||(l.flags&=-2)}}}function Qs(e){if(We.length){const t=[...new Set(We)].sort((s,l)=>rt(s)-rt(l));if(We.length=0,Pe){Pe.push(...t);return}for(Pe=t,Re=0;Re<Pe.length;Re++){const s=Pe[Re];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Pe=null,Re=0}}const rt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Xs(e){const t=Ae;try{for(Te=0;Te<re.length;Te++){const s=re[Te];s&&!(s.flags&8)&&(s.flags&4&&(s.flags&=-2),ft(s,s.i,s.i?15:14),s.flags&4||(s.flags&=-2))}}finally{for(;Te<re.length;Te++){const s=re[Te];s&&(s.flags&=-2)}Te=-1,re.length=0,Qs(),Ft=null,(re.length||We.length)&&Xs()}}let z=null,Zs=null;function At(e){const t=z;return z=e,Zs=e&&e.type.__scopeId||null,t}function ln(e,t=z,s){if(!t||e._n)return e;const l=(...n)=>{l._d&&Pt(-1);const r=At(t);let i;try{i=e(...n)}finally{At(r),l._d&&Pt(1)}return i};return l._n=!0,l._c=!0,l._d=!0,l}function hr(e,t){if(z===null)return e;const s=Bt(z),l=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[r,i,f,u=D]=t[n];r&&(H(r)&&(r={mounted:r,updated:r}),r.deep&&Dl(i),l.push({dir:r,instance:s,value:i,oldValue:void 0,arg:f,modifiers:u}))}return e}function Ne(e,t,s,l){const n=e.dirs,r=t&&t.dirs;for(let i=0;i<n.length;i++){const f=n[i];r&&(f.oldValue=r[i].value);let u=f.dir[l];u&&(je(),Ee(u,s,8,[e.el,f,e,t]),Be())}}const zs=Symbol("_vte"),el=e=>e.__isTeleport,tt=e=>e&&(e.disabled||e.disabled===""),As=e=>e&&(e.defer||e.defer===""),Es=e=>typeof SVGElement<"u"&&e instanceof SVGElement,vs=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,Qt=(e,t)=>{const s=e&&e.to;return he(s)?t?t(s):null:s},tl={name:"Teleport",__isTeleport:!0,process(e,t,s,l,n,r,i,f,u,h){const{mc:a,pc:p,pbc:A,o:{insert:_,querySelector:M,createText:v,createComment:$}}=h,N=tt(t.props);let{shapeFlag:E,children:P,dynamicChildren:k}=t;if(e==null){const B=t.el=v(""),U=t.anchor=v("");_(B,s,l),_(U,s,l);const Y=(w,V)=>{E&16&&a(P,w,V,n,r,i,f,u)},W=()=>{const w=t.target=Qt(t.props,M),V=sl(w,t,v,_);w&&(i!=="svg"&&Es(w)?i="svg":i!=="mathml"&&vs(w)&&(i="mathml"),n&&n.isCE&&(n.ce._teleportTargets||(n.ce._teleportTargets=new Set)).add(w),N||(Y(w,V),mt(t,!1)))};N&&(Y(s,U),mt(t,!0)),As(t.props)?(t.el.__isMounted=!1,X(()=>{W(),delete t.el.__isMounted},r)):W()}else{if(As(t.props)&&e.el.__isMounted===!1){X(()=>{tl.process(e,t,s,l,n,r,i,f,u,h)},r);return}t.el=e.el,t.targetStart=e.targetStart;const B=t.anchor=e.anchor,U=t.target=e.target,Y=t.targetAnchor=e.targetAnchor,W=tt(e.props),w=W?s:U,V=W?B:Y;if(i==="svg"||Es(U)?i="svg":(i==="mathml"||vs(U))&&(i="mathml"),k?(A(e.dynamicChildren,k,w,n,r,i,f),gs(e,t,!0)):u||p(e,t,w,V,n,r,i,f,!1),N)W?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):pt(t,s,B,h,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const K=t.target=Qt(t.props,M);K&&pt(t,K,null,h,0)}else W&&pt(t,U,Y,h,1);mt(t,N)}},remove(e,t,s,{um:l,o:{remove:n}},r){const{shapeFlag:i,children:f,anchor:u,targetStart:h,targetAnchor:a,target:p,props:A}=e;if(p&&(n(h),n(a)),r&&n(u),i&16){const _=r||!tt(A);for(let M=0;M<f.length;M++){const v=f[M];l(v,t,s,_,!!v.dynamicChildren)}}},move:pt,hydrate:nn};function pt(e,t,s,{o:{insert:l},m:n},r=2){r===0&&l(e.targetAnchor,t,s);const{el:i,anchor:f,shapeFlag:u,children:h,props:a}=e,p=r===2;if(p&&l(i,t,s),(!p||tt(a))&&u&16)for(let A=0;A<h.length;A++)n(h[A],t,s,2);p&&l(f,t,s)}function nn(e,t,s,l,n,r,{o:{nextSibling:i,parentNode:f,querySelector:u,insert:h,createText:a}},p){function A(v,$,N,E){$.anchor=p(i(v),$,f(v),s,l,n,r),$.targetStart=N,$.targetAnchor=E}const _=t.target=Qt(t.props,u),M=tt(t.props);if(_){const v=_._lpa||_.firstChild;if(t.shapeFlag&16)if(M)A(e,t,v,v&&i(v));else{t.anchor=i(e);let $=v;for(;$;){if($&&$.nodeType===8){if($.data==="teleport start anchor")t.targetStart=$;else if($.data==="teleport anchor"){t.targetAnchor=$,_._lpa=t.targetAnchor&&i(t.targetAnchor);break}}$=i($)}t.targetAnchor||sl(_,t,a,h),p(v&&i(v),t,_,s,l,n,r)}mt(t,M)}else M&&t.shapeFlag&16&&A(e,t,e,i(e));return t.anchor&&i(t.anchor)}const pr=tl;function mt(e,t){const s=e.ctx;if(s&&s.ut){let l,n;for(t?(l=e.el,n=e.anchor):(l=e.targetStart,n=e.targetAnchor);l&&l!==n;)l.nodeType===1&&l.setAttribute("data-v-owner",s.uid),l=l.nextSibling;s.ut()}}function sl(e,t,s,l){const n=t.targetStart=s(""),r=t.targetAnchor=s("");return n[zs]=r,e&&(l(n,e),l(r,e)),r}const ve=Symbol("_leaveCb"),gt=Symbol("_enterCb");function rn(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fs(()=>{e.isMounted=!0}),cs(()=>{e.isUnmounting=!0}),e}const ge=[Function,Array],on={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ge,onEnter:ge,onAfterEnter:ge,onEnterCancelled:ge,onBeforeLeave:ge,onLeave:ge,onAfterLeave:ge,onLeaveCancelled:ge,onBeforeAppear:ge,onAppear:ge,onAfterAppear:ge,onAppearCancelled:ge},ll=e=>{const t=e.subTree;return t.component?ll(t.component):t},fn={name:"BaseTransition",props:on,setup(e,{slots:t}){const s=ct(),l=rn();return()=>{const n=t.default&&ol(t.default(),!0);if(!n||!n.length)return;const r=nl(n),i=wt(e),{mode:f}=i;if(l.isLeaving)return Wt(r);const u=ks(r);if(!u)return Wt(r);let h=Xt(u,i,l,s,p=>h=p);u.type!==Z&&qe(u,h);let a=s.subTree&&ks(s.subTree);if(a&&a.type!==Z&&!we(a,u)&&ll(s).type!==Z){let p=Xt(a,i,l,s);if(qe(a,p),f==="out-in"&&u.type!==Z)return l.isLeaving=!0,p.afterLeave=()=>{l.isLeaving=!1,s.job.flags&8||s.update(),delete p.afterLeave,a=void 0},Wt(r);f==="in-out"&&u.type!==Z?p.delayLeave=(A,_,M)=>{const v=rl(l,a);v[String(a.key)]=a,A[ve]=()=>{_(),A[ve]=void 0,delete h.delayedLeave,a=void 0},h.delayedLeave=()=>{M(),delete h.delayedLeave,a=void 0}}:a=void 0}else a&&(a=void 0);return r}}};function nl(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==Z){t=s;break}}return t}const gr=fn;function rl(e,t){const{leavingVNodes:s}=e;let l=s.get(t.type);return l||(l=Object.create(null),s.set(t.type,l)),l}function Xt(e,t,s,l,n){const{appear:r,mode:i,persisted:f=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:a,onEnterCancelled:p,onBeforeLeave:A,onLeave:_,onAfterLeave:M,onLeaveCancelled:v,onBeforeAppear:$,onAppear:N,onAfterAppear:E,onAppearCancelled:P}=t,k=String(e.key),B=rl(s,e),U=(w,V)=>{w&&Ee(w,l,9,V)},Y=(w,V)=>{const K=V[1];U(w,V),L(w)?w.every(pe=>pe.length<=1)&&K():w.length<=1&&K()},W={mode:i,persisted:f,beforeEnter(w){let V=u;if(!s.isMounted)if(r)V=$||u;else return;w[ve]&&w[ve](!0);const K=B[k];K&&we(e,K)&&K.el[ve]&&K.el[ve](),U(V,[w])},enter(w){let V=h,K=a,pe=p;if(!s.isMounted)if(r)V=N||h,K=E||a,pe=P||p;else return;let _e=!1;const Me=w[gt]=at=>{_e||(_e=!0,at?U(pe,[w]):U(K,[w]),W.delayedLeave&&W.delayedLeave(),w[gt]=void 0)};V?Y(V,[w,Me]):Me()},leave(w,V){const K=String(e.key);if(w[gt]&&w[gt](!0),s.isUnmounting)return V();U(A,[w]);let pe=!1;const _e=w[ve]=Me=>{pe||(pe=!0,V(),Me?U(v,[w]):U(M,[w]),w[ve]=void 0,B[K]===e&&delete B[K])};B[K]=e,_?Y(_,[w,_e]):_e()},clone(w){const V=Xt(w,t,s,l,n);return n&&n(V),V}};return W}function Wt(e){if(Nt(e))return e=ke(e),e.children=null,e}function ks(e){if(!Nt(e))return el(e.type)&&e.children?nl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&H(s.default))return s.default()}}function qe(e,t){e.shapeFlag&6&&e.component?(e.transition=t,qe(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ol(e,t=!1,s){let l=[],n=0;for(let r=0;r<e.length;r++){let i=e[r];const f=s==null?i.key:String(s)+String(i.key!=null?i.key:r);i.type===ae?(i.patchFlag&128&&n++,l=l.concat(ol(i.children,t,f))):(t||i.type!==Z)&&l.push(f!=null?ke(i,{key:f}):i)}if(n>1)for(let r=0;r<l.length;r++)l[r].patchFlag=-2;return l}function yr(e,t){return H(e)?(()=>ee({name:e.name},t,{setup:e}))():e}function il(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Et=new WeakMap;function st(e,t,s,l,n=!1){if(L(e)){e.forEach((M,v)=>st(M,t&&(L(t)?t[v]:t),s,l,n));return}if(He(l)&&!n){l.shapeFlag&512&&l.type.__asyncResolved&&l.component.subTree.component&&st(e,t,s,l.component.subTree);return}const r=l.shapeFlag&4?Bt(l.component):l.el,i=n?null:r,{i:f,r:u}=e,h=t&&t.r,a=f.refs===D?f.refs={}:f.refs,p=f.setupState,A=wt(p),_=p===D?qs:M=>J(A,M);if(h!=null&&h!==u){if(Os(t),he(h))a[h]=null,_(h)&&(p[h]=null);else if(Tt(h)){h.value=null;const M=t;M.k&&(a[M.k]=null)}}if(H(u))ft(u,f,12,[i,a]);else{const M=he(u),v=Tt(u);if(M||v){const $=()=>{if(e.f){const N=M?_(u)?p[u]:a[u]:u.value;if(n)L(N)&&Ws(N,r);else if(L(N))N.includes(r)||N.push(r);else if(M)a[u]=[r],_(u)&&(p[u]=a[u]);else{const E=[r];u.value=E,e.k&&(a[e.k]=E)}}else M?(a[u]=i,_(u)&&(p[u]=i)):v&&(u.value=i,e.k&&(a[e.k]=i))};if(i){const N=()=>{$(),Et.delete(e)};N.id=-1,Et.set(e,N),X(N,s)}else Os(e),$()}}}function Os(e){const t=Et.get(e);t&&(t.flags|=8,Et.delete(e))}St().requestIdleCallback;St().cancelIdleCallback;const He=e=>!!e.type.__asyncLoader,Nt=e=>e.type.__isKeepAlive,cn={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const s=ct(),l=s.ctx;if(!l.renderer)return()=>{const E=t.default&&t.default();return E&&E.length===1?E[0]:E};const n=new Map,r=new Set;let i=null;const f=s.suspense,{renderer:{p:u,m:h,um:a,o:{createElement:p}}}=l,A=p("div");l.activate=(E,P,k,B,U)=>{const Y=E.component;h(E,P,k,0,f),u(Y.vnode,E,P,k,Y,f,B,E.slotScopeIds,U),X(()=>{Y.isDeactivated=!1,Y.a&&ze(Y.a);const W=E.props&&E.props.onVnodeMounted;W&&ye(W,Y.parent,E)},f)},l.deactivate=E=>{const P=E.component;Ot(P.m),Ot(P.a),h(E,A,null,1,f),X(()=>{P.da&&ze(P.da);const k=E.props&&E.props.onVnodeUnmounted;k&&ye(k,P.parent,E),P.isDeactivated=!0},f)};function _(E){qt(E),a(E,s,f,!0)}function M(E){n.forEach((P,k)=>{const B=rs(P.type);B&&!E(B)&&v(k)})}function v(E){const P=n.get(E);P&&(!i||!we(P,i))?_(P):i&&qt(i),n.delete(E),r.delete(E)}_t(()=>[e.include,e.exclude],([E,P])=>{E&&M(k=>Xe(E,k)),P&&M(k=>!Xe(P,k))},{flush:"post",deep:!0});let $=null;const N=()=>{$!=null&&(Mt(s.subTree.type)?X(()=>{n.set($,yt(s.subTree))},s.subTree.suspense):n.set($,yt(s.subTree)))};return fs(N),cl(N),cs(()=>{n.forEach(E=>{const{subTree:P,suspense:k}=s,B=yt(P);if(E.type===B.type&&E.key===B.key){qt(B);const U=B.component.da;U&&X(U,k);return}_(E)})}),()=>{if($=null,!t.default)return i=null;const E=t.default(),P=E[0];if(E.length>1)return i=null,E;if(!Ge(P)||!(P.shapeFlag&4)&&!(P.shapeFlag&128))return i=null,P;let k=yt(P);if(k.type===Z)return i=null,k;const B=k.type,U=rs(He(k)?k.type.__asyncResolved||{}:B),{include:Y,exclude:W,max:w}=e;if(Y&&(!U||!Xe(Y,U))||W&&U&&Xe(W,U))return k.shapeFlag&=-257,i=k,P;const V=k.key==null?B:k.key,K=n.get(V);return k.el&&(k=ke(k),P.shapeFlag&128&&(P.ssContent=k)),$=V,K?(k.el=K.el,k.component=K.component,k.transition&&qe(k,k.transition),k.shapeFlag|=512,r.delete(V),r.add(V)):(r.add(V),w&&r.size>parseInt(w,10)&&v(r.values().next().value)),k.shapeFlag|=256,i=k,Mt(P.type)?P:k}}},mr=cn;function Xe(e,t){return L(e)?e.some(s=>Xe(s,t)):he(e)?e.split(",").includes(t):Ql(e)?(e.lastIndex=0,e.test(t)):!1}function un(e,t){fl(e,"a",t)}function an(e,t){fl(e,"da",t)}function fl(e,t,s=se){const l=e.__wdc||(e.__wdc=()=>{let n=s;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if($t(t,l,s),s){let n=s.parent;for(;n&&n.parent;)Nt(n.parent.vnode)&&dn(l,t,s,n),n=n.parent}}function dn(e,t,s,l){const n=$t(t,e,l,!0);ul(()=>{Ws(l[t],n)},s)}function qt(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function yt(e){return e.shapeFlag&128?e.ssContent:e}function $t(e,t,s=se,l=!1){if(s){const n=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...i)=>{je();const f=ut(s),u=Ee(t,s,e,i);return f(),Be(),u});return l?n.unshift(r):n.push(r),r}}const Oe=e=>(t,s=se)=>{(!it||e==="sp")&&$t(e,(...l)=>t(...l),s)},hn=Oe("bm"),fs=Oe("m"),pn=Oe("bu"),cl=Oe("u"),cs=Oe("bum"),ul=Oe("um"),gn=Oe("sp"),yn=Oe("rtg"),mn=Oe("rtc");function bn(e,t=se){$t("ec",e,t)}const us="components",_n="directives";function br(e,t){return as(us,e,!0,t)||e}const al=Symbol.for("v-ndc");function _r(e){return he(e)?as(us,e,!1)||e:e||al}function xr(e){return as(_n,e)}function as(e,t,s=!0,l=!1){const n=z||se;if(n){const r=n.type;if(e===us){const f=rs(r,!1);if(f&&(f===t||f===be(t)||f===Us(be(t))))return r}const i=Ms(n[e]||r[e],t)||Ms(n.appContext[e],t);return!i&&l?r:i}}function Ms(e,t){return e&&(e[t]||e[be(t)]||e[Us(be(t))])}function Cr(e,t,s,l){let n;const r=s&&s[l],i=L(e);if(i||he(e)){const f=i&&Vl(e);let u=!1,h=!1;f&&(u=!Nl(e),h=$l(e),e=Hl(e)),n=new Array(e.length);for(let a=0,p=e.length;a<p;a++)n[a]=t(u?h?Ll(Ts(e[a])):Ts(e[a]):e[a],a,void 0,r&&r[a])}else if(typeof e=="number"){n=new Array(e);for(let f=0;f<e;f++)n[f]=t(f+1,f,void 0,r&&r[f])}else if(fe(e))if(e[Symbol.iterator])n=Array.from(e,(f,u)=>t(f,u,void 0,r&&r[u]));else{const f=Object.keys(e);n=new Array(f.length);for(let u=0,h=f.length;u<h;u++){const a=f[u];n[u]=t(e[a],a,u,r&&r[u])}}else n=[];return s&&(s[l]=n),n}function Tr(e,t){for(let s=0;s<t.length;s++){const l=t[s];if(L(l))for(let n=0;n<l.length;n++)e[l[n].name]=l[n].fn;else l&&(e[l.name]=l.key?(...n)=>{const r=l.fn(...n);return r&&(r.key=l.key),r}:l.fn)}return e}function Fr(e,t,s={},l,n){if(z.ce||z.parent&&He(z.parent)&&z.parent.ce){const h=Object.keys(s).length>0;return t!=="default"&&(s.name=t),ss(),ls(ae,null,[oe("slot",s,l&&l())],h?-2:64)}let r=e[t];r&&r._c&&(r._d=!1),ss();const i=r&&dl(r(s)),f=s.key||i&&i.key,u=ls(ae,{key:(f&&!Yl(f)?f:`_${t}`)+(!i&&l?"_fb":"")},i||(l?l():[]),i&&e._===1?64:-2);return!n&&u.scopeId&&(u.slotScopeIds=[u.scopeId+"-s"]),r&&r._c&&(r._d=!0),u}function dl(e){return e.some(t=>Ge(t)?!(t.type===Z||t.type===ae&&!dl(t.children)):!0)?e:null}const Zt=e=>e?Pl(e)?Bt(e):Zt(e.parent):null,lt=ee(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Zt(e.parent),$root:e=>Zt(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ds(e),$forceUpdate:e=>e.f||(e.f=()=>{is(e.update)}),$nextTick:e=>e.n||(e.n=en.bind(e.proxy)),$watch:e=>Un.bind(e)}),Gt=(e,t)=>e!==D&&!e.__isScriptSetup&&J(e,t),xn={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:l,data:n,props:r,accessCache:i,type:f,appContext:u}=e;let h;if(t[0]!=="$"){const _=i[t];if(_!==void 0)switch(_){case 1:return l[t];case 2:return n[t];case 4:return s[t];case 3:return r[t]}else{if(Gt(l,t))return i[t]=1,l[t];if(n!==D&&J(n,t))return i[t]=2,n[t];if((h=e.propsOptions[0])&&J(h,t))return i[t]=3,r[t];if(s!==D&&J(s,t))return i[t]=4,s[t];zt&&(i[t]=0)}}const a=lt[t];let p,A;if(a)return t==="$attrs"&&Bs(e.attrs,"get",""),a(e);if((p=f.__cssModules)&&(p=p[t]))return p;if(s!==D&&J(s,t))return i[t]=4,s[t];if(A=u.config.globalProperties,J(A,t))return A[t]},set({_:e},t,s){const{data:l,setupState:n,ctx:r}=e;return Gt(n,t)?(n[t]=s,!0):l!==D&&J(l,t)?(l[t]=s,!0):J(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:l,appContext:n,propsOptions:r,type:i}},f){let u,h;return!!(s[f]||e!==D&&f[0]!=="$"&&J(e,f)||Gt(t,f)||(u=r[0])&&J(u,f)||J(l,f)||J(lt,f)||J(n.config.globalProperties,f)||(h=i.__cssModules)&&h[f])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:J(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function vt(e){return L(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}function Ar(e,t){return!e||!t?e||t:L(e)&&L(t)?e.concat(t):ee({},vt(e),vt(t))}let zt=!0;function Cn(e){const t=ds(e),s=e.proxy,l=e.ctx;zt=!1,t.beforeCreate&&Ps(t.beforeCreate,e,"bc");const{data:n,computed:r,methods:i,watch:f,provide:u,inject:h,created:a,beforeMount:p,mounted:A,beforeUpdate:_,updated:M,activated:v,deactivated:$,beforeDestroy:N,beforeUnmount:E,destroyed:P,unmounted:k,render:B,renderTracked:U,renderTriggered:Y,errorCaptured:W,serverPrefetch:w,expose:V,inheritAttrs:K,components:pe,directives:_e,filters:Me}=t;if(h&&Tn(h,l,null),i)for(const Q in i){const q=i[Q];H(q)&&(l[Q]=q.bind(s))}if(n){const Q=n.call(s,s);fe(Q)&&(e.data=ql(Q))}if(zt=!0,r)for(const Q in r){const q=r[Q],Se=H(q)?q.bind(s,s):H(q.get)?q.get.bind(s,s):Ae,dt=!H(q)&&H(q.set)?q.set.bind(s):Ae,Ve=fr({get:Se,set:dt});Object.defineProperty(l,Q,{enumerable:!0,configurable:!0,get:()=>Ve.value,set:xe=>Ve.value=xe})}if(f)for(const Q in f)hl(f[Q],l,s,Q);if(u){const Q=H(u)?u.call(s):u;Reflect.ownKeys(Q).forEach(q=>{On(q,Q[q])})}a&&Ps(a,e,"c");function le(Q,q){L(q)?q.forEach(Se=>Q(Se.bind(s))):q&&Q(q.bind(s))}if(le(hn,p),le(fs,A),le(pn,_),le(cl,M),le(un,v),le(an,$),le(bn,W),le(mn,U),le(yn,Y),le(cs,E),le(ul,k),le(gn,w),L(V))if(V.length){const Q=e.exposed||(e.exposed={});V.forEach(q=>{Object.defineProperty(Q,q,{get:()=>s[q],set:Se=>s[q]=Se,enumerable:!0})})}else e.exposed||(e.exposed={});B&&e.render===Ae&&(e.render=B),K!=null&&(e.inheritAttrs=K),pe&&(e.components=pe),_e&&(e.directives=_e),w&&il(e)}function Tn(e,t,s=Ae){L(e)&&(e=es(e));for(const l in e){const n=e[l];let r;fe(n)?"default"in n?r=bt(n.from||l,n.default,!0):r=bt(n.from||l):r=bt(n),Tt(r)?Object.defineProperty(t,l,{enumerable:!0,configurable:!0,get:()=>r.value,set:i=>r.value=i}):t[l]=r}}function Ps(e,t,s){Ee(L(e)?e.map(l=>l.bind(t.proxy)):e.bind(t.proxy),t,s)}function hl(e,t,s,l){let n=l.includes(".")?Al(s,l):()=>s[l];if(he(e)){const r=t[e];H(r)&&_t(n,r)}else if(H(e))_t(n,e.bind(s));else if(fe(e))if(L(e))e.forEach(r=>hl(r,t,s,l));else{const r=H(e.handler)?e.handler.bind(s):t[e.handler];H(r)&&_t(n,r,e)}}function ds(e){const t=e.type,{mixins:s,extends:l}=t,{mixins:n,optionsCache:r,config:{optionMergeStrategies:i}}=e.appContext,f=r.get(t);let u;return f?u=f:!n.length&&!s&&!l?u=t:(u={},n.length&&n.forEach(h=>kt(u,h,i,!0)),kt(u,t,i)),fe(t)&&r.set(t,u),u}function kt(e,t,s,l=!1){const{mixins:n,extends:r}=t;r&&kt(e,r,s,!0),n&&n.forEach(i=>kt(e,i,s,!0));for(const i in t)if(!(l&&i==="expose")){const f=Fn[i]||s&&s[i];e[i]=f?f(e[i],t[i]):t[i]}return e}const Fn={data:Is,props:ws,emits:ws,methods:Ze,computed:Ze,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:Ze,directives:Ze,watch:En,provide:Is,inject:An};function Is(e,t){return t?e?function(){return ee(H(e)?e.call(this,this):e,H(t)?t.call(this,this):t)}:t:e}function An(e,t){return Ze(es(e),es(t))}function es(e){if(const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function ne(e,t){return e?[...new Set([].concat(e,t))]:t}function Ze(e,t){return e?ee(Object.create(null),e,t):t}function ws(e,t){return e?L(e)&&L(t)?[...new Set([...e,...t])]:ee(Object.create(null),vt(e),vt(t!=null?t:{})):t}function En(e,t){if(!e)return t;if(!t)return e;const s=ee(Object.create(null),e);for(const l in t)s[l]=ne(e[l],t[l]);return s}function pl(){return{app:null,config:{isNativeTag:qs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vn=0;function kn(e,t){return function(l,n=null){H(l)||(l=ee({},l)),n!=null&&!fe(n)&&(n=null);const r=pl(),i=new WeakSet,f=[];let u=!1;const h=r.app={_uid:vn++,_component:l,_props:n,_container:null,_context:r,_instance:null,version:cr,get config(){return r.config},set config(a){},use(a,...p){return i.has(a)||(a&&H(a.install)?(i.add(a),a.install(h,...p)):H(a)&&(i.add(a),a(h,...p))),h},mixin(a){return r.mixins.includes(a)||r.mixins.push(a),h},component(a,p){return p?(r.components[a]=p,h):r.components[a]},directive(a,p){return p?(r.directives[a]=p,h):r.directives[a]},mount(a,p,A){if(!u){const _=h._ceVNode||oe(l,n);return _.appContext=r,A===!0?A="svg":A===!1&&(A=void 0),p&&t?t(_,a):e(_,a,A),u=!0,h._container=a,a.__vue_app__=h,Bt(_.component)}},onUnmount(a){f.push(a)},unmount(){u&&(Ee(f,h._instance,16),e(null,h._container),delete h._container.__vue_app__)},provide(a,p){return r.provides[a]=p,h},runWithContext(a){const p=Le;Le=h;try{return a()}finally{Le=p}}};return h}}let Le=null;function On(e,t){if(se){let s=se.provides;const l=se.parent&&se.parent.provides;l===s&&(s=se.provides=Object.create(l)),s[e]=t}}function bt(e,t,s=!1){const l=ct();if(l||Le){let n=Le?Le._context.provides:l?l.parent==null||l.ce?l.vnode.appContext&&l.vnode.appContext.provides:l.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return s&&H(t)?t.call(l&&l.proxy):t}}function Er(){return!!(ct()||Le)}const gl={},yl=()=>Object.create(gl),ml=e=>Object.getPrototypeOf(e)===gl;function Mn(e,t,s,l=!1){const n={},r=yl();e.propsDefaults=Object.create(null),bl(e,t,n,r);for(const i in e.propsOptions[0])i in n||(n[i]=void 0);s?e.props=l?n:Gl(n):e.type.props?e.props=n:e.props=r,e.attrs=r}function Pn(e,t,s,l){const{props:n,attrs:r,vnode:{patchFlag:i}}=e,f=wt(n),[u]=e.propsOptions;let h=!1;if((l||i>0)&&!(i&16)){if(i&8){const a=e.vnode.dynamicProps;for(let p=0;p<a.length;p++){let A=a[p];if(Lt(e.emitsOptions,A))continue;const _=t[A];if(u)if(J(r,A))_!==r[A]&&(r[A]=_,h=!0);else{const M=be(A);n[M]=ts(u,f,M,_,e,!1)}else _!==r[A]&&(r[A]=_,h=!0)}}}else{bl(e,t,n,r)&&(h=!0);let a;for(const p in f)(!t||!J(t,p)&&((a=Je(p))===p||!J(t,a)))&&(u?s&&(s[p]!==void 0||s[a]!==void 0)&&(n[p]=ts(u,f,p,void 0,e,!0)):delete n[p]);if(r!==f)for(const p in r)(!t||!J(t,p))&&(delete r[p],h=!0)}h&&Jl(e.attrs,"set","")}function bl(e,t,s,l){const[n,r]=e.propsOptions;let i=!1,f;if(t)for(let u in t){if(et(u))continue;const h=t[u];let a;n&&J(n,a=be(u))?!r||!r.includes(a)?s[a]=h:(f||(f={}))[a]=h:Lt(e.emitsOptions,u)||(!(u in l)||h!==l[u])&&(l[u]=h,i=!0)}if(r){const u=wt(s),h=f||D;for(let a=0;a<r.length;a++){const p=r[a];s[p]=ts(n,u,p,h[p],e,!J(h,p))}}return i}function ts(e,t,s,l,n,r){const i=e[s];if(i!=null){const f=J(i,"default");if(f&&l===void 0){const u=i.default;if(i.type!==Function&&!i.skipFactory&&H(u)){const{propsDefaults:h}=n;if(s in h)l=h[s];else{const a=ut(n);l=h[s]=u.call(null,t),a()}}else l=u;n.ce&&n.ce._setProp(s,l)}i[0]&&(r&&!f?l=!1:i[1]&&(l===""||l===Je(s))&&(l=!0))}return l}const In=new WeakMap;function _l(e,t,s=!1){const l=s?In:t.propsCache,n=l.get(e);if(n)return n;const r=e.props,i={},f=[];let u=!1;if(!H(e)){const a=p=>{u=!0;const[A,_]=_l(p,t,!0);ee(i,A),_&&f.push(..._)};!s&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!r&&!u)return fe(e)&&l.set(e,Ke),Ke;if(L(r))for(let a=0;a<r.length;a++){const p=be(r[a]);Ss(p)&&(i[p]=D)}else if(r)for(const a in r){const p=be(a);if(Ss(p)){const A=r[a],_=i[p]=L(A)||H(A)?{type:A}:ee({},A),M=_.type;let v=!1,$=!0;if(L(M))for(let N=0;N<M.length;++N){const E=M[N],P=H(E)&&E.name;if(P==="Boolean"){v=!0;break}else P==="String"&&($=!1)}else v=H(M)&&M.name==="Boolean";_[0]=v,_[1]=$,(v||J(_,"default"))&&f.push(p)}}const h=[i,f];return fe(e)&&l.set(e,h),h}function Ss(e){return e[0]!=="$"&&!et(e)}const hs=e=>e==="_"||e==="_ctx"||e==="$stable",ps=e=>L(e)?e.map(Fe):[Fe(e)],wn=(e,t,s)=>{if(t._n)return t;const l=ln((...n)=>ps(t(...n)),s);return l._c=!1,l},xl=(e,t,s)=>{const l=e._ctx;for(const n in e){if(hs(n))continue;const r=e[n];if(H(r))t[n]=wn(n,r,l);else if(r!=null){const i=ps(r);t[n]=()=>i}}},Cl=(e,t)=>{const s=ps(t);e.slots.default=()=>s},Tl=(e,t,s)=>{for(const l in t)(s||!hs(l))&&(e[l]=t[l])},Sn=(e,t,s)=>{const l=e.slots=yl();if(e.vnode.shapeFlag&32){const n=t._;n?(Tl(l,t,s),s&&Xl(l,"_",n,!0)):xl(t,l)}else t&&Cl(e,t)},Vn=(e,t,s)=>{const{vnode:l,slots:n}=e;let r=!0,i=D;if(l.shapeFlag&32){const f=t._;f?s&&f===1?r=!1:Tl(n,t,s):(r=!t.$stable,xl(t,n)),i=t}else t&&(Cl(e,t),i={default:1});if(r)for(const f in n)!hs(f)&&i[f]==null&&delete n[f]},X=Jn;function vr(e){return Nn(e)}function Nn(e,t){const s=St();s.__VUE__=!0;const{insert:l,remove:n,patchProp:r,createElement:i,createText:f,createComment:u,setText:h,setElementText:a,parentNode:p,nextSibling:A,setScopeId:_=Ae,insertStaticContent:M}=e,v=(o,c,d,b=null,g=null,y=null,T=void 0,C=null,x=!!c.dynamicChildren)=>{if(o===c)return;o&&!we(o,c)&&(b=ht(o),xe(o,g,y,!0),o=null),c.patchFlag===-2&&(x=!1,c.dynamicChildren=null);const{type:m,ref:I,shapeFlag:F}=c;switch(m){case jt:$(o,c,d,b);break;case Z:N(o,c,d,b);break;case xt:o==null&&E(c,d,b,T);break;case ae:pe(o,c,d,b,g,y,T,C,x);break;default:F&1?B(o,c,d,b,g,y,T,C,x):F&6?_e(o,c,d,b,g,y,T,C,x):(F&64||F&128)&&m.process(o,c,d,b,g,y,T,C,x,Ue)}I!=null&&g?st(I,o&&o.ref,y,c||o,!c):I==null&&o&&o.ref!=null&&st(o.ref,null,y,o,!0)},$=(o,c,d,b)=>{if(o==null)l(c.el=f(c.children),d,b);else{const g=c.el=o.el;c.children!==o.children&&h(g,c.children)}},N=(o,c,d,b)=>{o==null?l(c.el=u(c.children||""),d,b):c.el=o.el},E=(o,c,d,b)=>{[o.el,o.anchor]=M(o.children,c,d,b,o.el,o.anchor)},P=({el:o,anchor:c},d,b)=>{let g;for(;o&&o!==c;)g=A(o),l(o,d,b),o=g;l(c,d,b)},k=({el:o,anchor:c})=>{let d;for(;o&&o!==c;)d=A(o),n(o),o=d;n(c)},B=(o,c,d,b,g,y,T,C,x)=>{if(c.type==="svg"?T="svg":c.type==="math"&&(T="mathml"),o==null)U(c,d,b,g,y,T,C,x);else{const m=o.el&&o.el._isVueCE?o.el:null;try{m&&m._beginPatch(),w(o,c,g,y,T,C,x)}finally{m&&m._endPatch()}}},U=(o,c,d,b,g,y,T,C)=>{let x,m;const{props:I,shapeFlag:F,transition:O,dirs:S}=o;if(x=o.el=i(o.type,y,I&&I.is,I),F&8?a(x,o.children):F&16&&W(o.children,x,null,b,g,Jt(o,y),T,C),S&&Ne(o,null,b,"created"),Y(x,o,o.scopeId,T,b),I){for(const G in I)G!=="value"&&!et(G)&&r(x,G,null,I[G],y,b);"value"in I&&r(x,"value",null,I.value,y),(m=I.onVnodeBeforeMount)&&ye(m,b,o)}S&&Ne(o,null,b,"beforeMount");const j=$n(g,O);j&&O.beforeEnter(x),l(x,c,d),((m=I&&I.onVnodeMounted)||j||S)&&X(()=>{m&&ye(m,b,o),j&&O.enter(x),S&&Ne(o,null,b,"mounted")},g)},Y=(o,c,d,b,g)=>{if(d&&_(o,d),b)for(let y=0;y<b.length;y++)_(o,b[y]);if(g){let y=g.subTree;if(c===y||Mt(y.type)&&(y.ssContent===c||y.ssFallback===c)){const T=g.vnode;Y(o,T,T.scopeId,T.slotScopeIds,g.parent)}}},W=(o,c,d,b,g,y,T,C,x=0)=>{for(let m=x;m<o.length;m++){const I=o[m]=C?Ie(o[m]):Fe(o[m]);v(null,I,c,d,b,g,y,T,C)}},w=(o,c,d,b,g,y,T)=>{const C=c.el=o.el;let{patchFlag:x,dynamicChildren:m,dirs:I}=c;x|=o.patchFlag&16;const F=o.props||D,O=c.props||D;let S;if(d&&$e(d,!1),(S=O.onVnodeBeforeUpdate)&&ye(S,d,c,o),I&&Ne(c,o,d,"beforeUpdate"),d&&$e(d,!0),(F.innerHTML&&O.innerHTML==null||F.textContent&&O.textContent==null)&&a(C,""),m?V(o.dynamicChildren,m,C,d,b,Jt(c,g),y):T||q(o,c,C,null,d,b,Jt(c,g),y,!1),x>0){if(x&16)K(C,F,O,d,g);else if(x&2&&F.class!==O.class&&r(C,"class",null,O.class,g),x&4&&r(C,"style",F.style,O.style,g),x&8){const j=c.dynamicProps;for(let G=0;G<j.length;G++){const R=j[G],ie=F[R],te=O[R];(te!==ie||R==="value")&&r(C,R,ie,te,g,d)}}x&1&&o.children!==c.children&&a(C,c.children)}else!T&&m==null&&K(C,F,O,d,g);((S=O.onVnodeUpdated)||I)&&X(()=>{S&&ye(S,d,c,o),I&&Ne(c,o,d,"updated")},b)},V=(o,c,d,b,g,y,T)=>{for(let C=0;C<c.length;C++){const x=o[C],m=c[C],I=x.el&&(x.type===ae||!we(x,m)||x.shapeFlag&198)?p(x.el):d;v(x,m,I,null,b,g,y,T,!0)}},K=(o,c,d,b,g)=>{if(c!==d){if(c!==D)for(const y in c)!et(y)&&!(y in d)&&r(o,y,c[y],null,g,b);for(const y in d){if(et(y))continue;const T=d[y],C=c[y];T!==C&&y!=="value"&&r(o,y,C,T,g,b)}"value"in d&&r(o,"value",c.value,d.value,g)}},pe=(o,c,d,b,g,y,T,C,x)=>{const m=c.el=o?o.el:f(""),I=c.anchor=o?o.anchor:f("");let{patchFlag:F,dynamicChildren:O,slotScopeIds:S}=c;S&&(C=C?C.concat(S):S),o==null?(l(m,d,b),l(I,d,b),W(c.children||[],d,I,g,y,T,C,x)):F>0&&F&64&&O&&o.dynamicChildren?(V(o.dynamicChildren,O,d,g,y,T,C),(c.key!=null||g&&c===g.subTree)&&gs(o,c,!0)):q(o,c,d,I,g,y,T,C,x)},_e=(o,c,d,b,g,y,T,C,x)=>{c.slotScopeIds=C,o==null?c.shapeFlag&512?g.ctx.activate(c,d,b,T,x):Me(c,d,b,g,y,T,x):at(o,c,x)},Me=(o,c,d,b,g,y,T)=>{const C=o.component=sr(o,b,g);if(Nt(o)&&(C.ctx.renderer=Ue),lr(C,!1,T),C.asyncDep){if(g&&g.registerDep(C,le,T),!o.el){const x=C.subTree=oe(Z);N(null,x,c,d),o.placeholder=x.el}}else le(C,o,c,d,g,y,T)},at=(o,c,d)=>{const b=c.component=o.component;if(qn(o,c,d))if(b.asyncDep&&!b.asyncResolved){Q(b,c,d);return}else b.next=c,b.update();else c.el=o.el,b.vnode=c},le=(o,c,d,b,g,y,T)=>{const C=()=>{if(o.isMounted){let{next:F,bu:O,u:S,parent:j,vnode:G}=o;{const ce=Fl(o);if(ce){F&&(F.el=G.el,Q(o,F,T)),ce.asyncDep.then(()=>{o.isUnmounted||C()});return}}let R=F,ie;$e(o,!1),F?(F.el=G.el,Q(o,F,T)):F=G,O&&ze(O),(ie=F.props&&F.props.onVnodeBeforeUpdate)&&ye(ie,j,F,G),$e(o,!0);const te=Yt(o),me=o.subTree;o.subTree=te,v(me,te,p(me.el),ht(me),o,g,y),F.el=te.el,R===null&&Gn(o,te.el),S&&X(S,g),(ie=F.props&&F.props.onVnodeUpdated)&&X(()=>ye(ie,j,F,G),g)}else{let F;const{el:O,props:S}=c,{bm:j,m:G,parent:R,root:ie,type:te}=o,me=He(c);if($e(o,!1),j&&ze(j),!me&&(F=S&&S.onVnodeBeforeMount)&&ye(F,R,c),$e(o,!0),O&&Rt){const ce=()=>{o.subTree=Yt(o),Rt(O,o.subTree,o,g,null)};me&&te.__asyncHydrate?te.__asyncHydrate(O,o,ce):ce()}else{ie.ce&&ie.ce._def.shadowRoot!==!1&&ie.ce._injectChildStyle(te);const ce=o.subTree=Yt(o);v(null,ce,d,b,o,g,y),c.el=ce.el}if(G&&X(G,g),!me&&(F=S&&S.onVnodeMounted)){const ce=c;X(()=>ye(F,R,ce),g)}(c.shapeFlag&256||R&&He(R.vnode)&&R.vnode.shapeFlag&256)&&o.a&&X(o.a,g),o.isMounted=!0,c=d=b=null}};o.scope.on();const x=o.effect=new Kl(C);o.scope.off();const m=o.update=x.run.bind(x),I=o.job=x.runIfDirty.bind(x);I.i=o,I.id=o.uid,x.scheduler=()=>is(I),$e(o,!0),m()},Q=(o,c,d)=>{c.component=o;const b=o.vnode.props;o.vnode=c,o.next=null,Pn(o,c.props,b,d),Vn(o,c.children,d),je(),Fs(o),Be()},q=(o,c,d,b,g,y,T,C,x=!1)=>{const m=o&&o.children,I=o?o.shapeFlag:0,F=c.children,{patchFlag:O,shapeFlag:S}=c;if(O>0){if(O&128){dt(m,F,d,b,g,y,T,C,x);return}else if(O&256){Se(m,F,d,b,g,y,T,C,x);return}}S&8?(I&16&&Ye(m,g,y),F!==m&&a(d,F)):I&16?S&16?dt(m,F,d,b,g,y,T,C,x):Ye(m,g,y,!0):(I&8&&a(d,""),S&16&&W(F,d,b,g,y,T,C,x))},Se=(o,c,d,b,g,y,T,C,x)=>{o=o||Ke,c=c||Ke;const m=o.length,I=c.length,F=Math.min(m,I);let O;for(O=0;O<F;O++){const S=c[O]=x?Ie(c[O]):Fe(c[O]);v(o[O],S,d,null,g,y,T,C,x)}m>I?Ye(o,g,y,!0,!1,F):W(c,d,b,g,y,T,C,x,F)},dt=(o,c,d,b,g,y,T,C,x)=>{let m=0;const I=c.length;let F=o.length-1,O=I-1;for(;m<=F&&m<=O;){const S=o[m],j=c[m]=x?Ie(c[m]):Fe(c[m]);if(we(S,j))v(S,j,d,null,g,y,T,C,x);else break;m++}for(;m<=F&&m<=O;){const S=o[F],j=c[O]=x?Ie(c[O]):Fe(c[O]);if(we(S,j))v(S,j,d,null,g,y,T,C,x);else break;F--,O--}if(m>F){if(m<=O){const S=O+1,j=S<I?c[S].el:b;for(;m<=O;)v(null,c[m]=x?Ie(c[m]):Fe(c[m]),d,j,g,y,T,C,x),m++}}else if(m>O)for(;m<=F;)xe(o[m],g,y,!0),m++;else{const S=m,j=m,G=new Map;for(m=j;m<=O;m++){const ue=c[m]=x?Ie(c[m]):Fe(c[m]);ue.key!=null&&G.set(ue.key,m)}let R,ie=0;const te=O-j+1;let me=!1,ce=0;const Qe=new Array(te);for(m=0;m<te;m++)Qe[m]=0;for(m=S;m<=F;m++){const ue=o[m];if(ie>=te){xe(ue,g,y,!0);continue}let Ce;if(ue.key!=null)Ce=G.get(ue.key);else for(R=j;R<=O;R++)if(Qe[R-j]===0&&we(ue,c[R])){Ce=R;break}Ce===void 0?xe(ue,g,y,!0):(Qe[Ce-j]=m+1,Ce>=ce?ce=Ce:me=!0,v(ue,c[Ce],d,null,g,y,T,C,x),ie++)}const _s=me?Hn(Qe):Ke;for(R=_s.length-1,m=te-1;m>=0;m--){const ue=j+m,Ce=c[ue],xs=c[ue+1],Cs=ue+1<I?xs.el||xs.placeholder:b;Qe[m]===0?v(null,Ce,d,Cs,g,y,T,C,x):me&&(R<0||m!==_s[R]?Ve(Ce,d,Cs,2):R--)}}},Ve=(o,c,d,b,g=null)=>{const{el:y,type:T,transition:C,children:x,shapeFlag:m}=o;if(m&6){Ve(o.component.subTree,c,d,b);return}if(m&128){o.suspense.move(c,d,b);return}if(m&64){T.move(o,c,d,Ue);return}if(T===ae){l(y,c,d);for(let F=0;F<x.length;F++)Ve(x[F],c,d,b);l(o.anchor,c,d);return}if(T===xt){P(o,c,d);return}if(b!==2&&m&1&&C)if(b===0)C.beforeEnter(y),l(y,c,d),X(()=>C.enter(y),g);else{const{leave:F,delayLeave:O,afterLeave:S}=C,j=()=>{o.ctx.isUnmounted?n(y):l(y,c,d)},G=()=>{y._isLeaving&&y[ve](!0),F(y,()=>{j(),S&&S()})};O?O(y,j,G):G()}else l(y,c,d)},xe=(o,c,d,b=!1,g=!1)=>{const{type:y,props:T,ref:C,children:x,dynamicChildren:m,shapeFlag:I,patchFlag:F,dirs:O,cacheIndex:S}=o;if(F===-2&&(g=!1),C!=null&&(je(),st(C,null,d,o,!0),Be()),S!=null&&(c.renderCache[S]=void 0),I&256){c.ctx.deactivate(o);return}const j=I&1&&O,G=!He(o);let R;if(G&&(R=T&&T.onVnodeBeforeUnmount)&&ye(R,c,o),I&6)Sl(o.component,d,b);else{if(I&128){o.suspense.unmount(d,b);return}j&&Ne(o,null,c,"beforeUnmount"),I&64?o.type.remove(o,c,d,Ue,b):m&&!m.hasOnce&&(y!==ae||F>0&&F&64)?Ye(m,c,d,!1,!0):(y===ae&&F&384||!g&&I&16)&&Ye(x,c,d),b&&ms(o)}(G&&(R=T&&T.onVnodeUnmounted)||j)&&X(()=>{R&&ye(R,c,o),j&&Ne(o,null,c,"unmounted")},d)},ms=o=>{const{type:c,el:d,anchor:b,transition:g}=o;if(c===ae){wl(d,b);return}if(c===xt){k(o);return}const y=()=>{n(d),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(o.shapeFlag&1&&g&&!g.persisted){const{leave:T,delayLeave:C}=g,x=()=>T(d,y);C?C(o.el,y,x):x()}else y()},wl=(o,c)=>{let d;for(;o!==c;)d=A(o),n(o),o=d;n(c)},Sl=(o,c,d)=>{const{bum:b,scope:g,job:y,subTree:T,um:C,m:x,a:m}=o;Ot(x),Ot(m),b&&ze(b),g.stop(),y&&(y.flags|=8,xe(T,o,c,d)),C&&X(C,c),X(()=>{o.isUnmounted=!0},c)},Ye=(o,c,d,b=!1,g=!1,y=0)=>{for(let T=y;T<o.length;T++)xe(o[T],c,d,b,g)},ht=o=>{if(o.shapeFlag&6)return ht(o.component.subTree);if(o.shapeFlag&128)return o.suspense.next();const c=A(o.anchor||o.el),d=c&&c[zs];return d?A(d):c};let Ut=!1;const bs=(o,c,d)=>{o==null?c._vnode&&xe(c._vnode,null,null,!0):v(c._vnode||null,o,c,null,null,null,d),c._vnode=o,Ut||(Ut=!0,Fs(),Qs(),Ut=!1)},Ue={p:v,um:xe,m:Ve,r:ms,mt:Me,mc:W,pc:q,pbc:V,n:ht,o:e};let Dt,Rt;return t&&([Dt,Rt]=t(Ue)),{render:bs,hydrate:Dt,createApp:kn(bs,Dt)}}function Jt({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function $e({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function $n(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function gs(e,t,s=!1){const l=e.children,n=t.children;if(L(l)&&L(n))for(let r=0;r<l.length;r++){const i=l[r];let f=n[r];f.shapeFlag&1&&!f.dynamicChildren&&((f.patchFlag<=0||f.patchFlag===32)&&(f=n[r]=Ie(n[r]),f.el=i.el),!s&&f.patchFlag!==-2&&gs(i,f)),f.type===jt&&f.patchFlag!==-1&&(f.el=i.el),f.type===Z&&!f.el&&(f.el=i.el)}}function Hn(e){const t=e.slice(),s=[0];let l,n,r,i,f;const u=e.length;for(l=0;l<u;l++){const h=e[l];if(h!==0){if(n=s[s.length-1],e[n]<h){t[l]=n,s.push(l);continue}for(r=0,i=s.length-1;r<i;)f=r+i>>1,e[s[f]]<h?r=f+1:i=f;h<e[s[r]]&&(r>0&&(t[l]=s[r-1]),s[r]=l)}}for(r=s.length,i=s[r-1];r-- >0;)s[r]=i,i=t[i];return s}function Fl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Fl(t)}function Ot(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ln=Symbol.for("v-scx"),jn=()=>bt(Ln);function kr(e,t){return Ht(e,null,t)}function Bn(e,t){return Ht(e,null,{flush:"sync"})}function _t(e,t,s){return Ht(e,t,s)}function Ht(e,t,s=D){const{immediate:l,deep:n,flush:r,once:i}=s,f=ee({},s),u=t&&l||!t&&r!=="post";let h;if(it){if(r==="sync"){const _=jn();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!u){const _=()=>{};return _.stop=Ae,_.resume=Ae,_.pause=Ae,_}}const a=se;f.call=(_,M,v)=>Ee(_,a,M,v);let p=!1;r==="post"?f.scheduler=_=>{X(_,a&&a.suspense)}:r!=="sync"&&(p=!0,f.scheduler=(_,M)=>{M?_():is(_)}),f.augmentJob=_=>{t&&(_.flags|=4),p&&(_.flags|=2,a&&(_.id=a.uid,_.i=a))};const A=jl(e,t,f);return it&&(h?h.push(A):u&&A()),A}function Un(e,t,s){const l=this.proxy,n=he(e)?e.includes(".")?Al(l,e):()=>l[e]:e.bind(l,l);let r;H(t)?r=t:(r=t.handler,s=t);const i=ut(this),f=Ht(n,r.bind(l),s);return i(),f}function Al(e,t){const s=t.split(".");return()=>{let l=e;for(let n=0;n<s.length&&l;n++)l=l[s[n]];return l}}function Or(e,t,s=D){const l=ct(),n=be(t),r=Je(t),i=El(e,n),f=Ul((u,h)=>{let a,p=D,A;return Bn(()=>{const _=e[n];De(a,_)&&(a=_,h())}),{get(){return u(),s.get?s.get(a):a},set(_){const M=s.set?s.set(_):_;if(!De(M,a)&&!(p!==D&&De(_,p)))return;const v=l.vnode.props;v&&(t in v||n in v||r in v)&&(`onUpdate:${t}`in v||`onUpdate:${n}`in v||`onUpdate:${r}`in v)||(a=_,h()),l.emit(`update:${t}`,M),De(_,M)&&De(_,p)&&!De(M,A)&&h(),p=_,A=M}}});return f[Symbol.iterator]=()=>{let u=0;return{next(){return u<2?{value:u++?i||D:f,done:!1}:{done:!0}}}},f}const El=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${be(t)}Modifiers`]||e[`${Je(t)}Modifiers`];function Dn(e,t,...s){if(e.isUnmounted)return;const l=e.vnode.props||D;let n=s;const r=t.startsWith("update:"),i=r&&El(l,t.slice(7));i&&(i.trim&&(n=s.map(a=>he(a)?a.trim():a)),i.number&&(n=s.map(Zl)));let f,u=l[f=Kt(t)]||l[f=Kt(be(t))];!u&&r&&(u=l[f=Kt(Je(t))]),u&&Ee(u,e,6,n);const h=l[f+"Once"];if(h){if(!e.emitted)e.emitted={};else if(e.emitted[f])return;e.emitted[f]=!0,Ee(h,e,6,n)}}const Rn=new WeakMap;function vl(e,t,s=!1){const l=s?Rn:t.emitsCache,n=l.get(e);if(n!==void 0)return n;const r=e.emits;let i={},f=!1;if(!H(e)){const u=h=>{const a=vl(h,t,!0);a&&(f=!0,ee(i,a))};!s&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!r&&!f?(fe(e)&&l.set(e,null),null):(L(r)?r.forEach(u=>i[u]=null):ee(i,r),fe(e)&&l.set(e,i),i)}function Lt(e,t){return!e||!os(t)?!1:(t=t.slice(2).replace(/Once$/,""),J(e,t[0].toLowerCase()+t.slice(1))||J(e,Je(t))||J(e,t))}function Yt(e){const{type:t,vnode:s,proxy:l,withProxy:n,propsOptions:[r],slots:i,attrs:f,emit:u,render:h,renderCache:a,props:p,data:A,setupState:_,ctx:M,inheritAttrs:v}=e,$=At(e);let N,E;try{if(s.shapeFlag&4){const k=n||l,B=k;N=Fe(h.call(B,k,a,p,_,A,M)),E=f}else{const k=t;N=Fe(k.length>1?k(p,{attrs:f,slots:i,emit:u}):k(p,null)),E=t.props?f:Kn(f)}}catch(k){nt.length=0,Vt(k,e,1),N=oe(Z)}let P=N;if(E&&v!==!1){const k=Object.keys(E),{shapeFlag:B}=P;k.length&&B&7&&(r&&k.some(Gs)&&(E=Wn(E,r)),P=ke(P,E,!1,!0))}return s.dirs&&(P=ke(P,null,!1,!0),P.dirs=P.dirs?P.dirs.concat(s.dirs):s.dirs),s.transition&&qe(P,s.transition),N=P,At($),N}const Kn=e=>{let t;for(const s in e)(s==="class"||s==="style"||os(s))&&((t||(t={}))[s]=e[s]);return t},Wn=(e,t)=>{const s={};for(const l in e)(!Gs(l)||!(l.slice(9)in t))&&(s[l]=e[l]);return s};function qn(e,t,s){const{props:l,children:n,component:r}=e,{props:i,children:f,patchFlag:u}=t,h=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return l?Vs(l,i,h):!!i;if(u&8){const a=t.dynamicProps;for(let p=0;p<a.length;p++){const A=a[p];if(i[A]!==l[A]&&!Lt(h,A))return!0}}}else return(n||f)&&(!f||!f.$stable)?!0:l===i?!1:l?i?Vs(l,i,h):!0:!!i;return!1}function Vs(e,t,s){const l=Object.keys(t);if(l.length!==Object.keys(e).length)return!0;for(let n=0;n<l.length;n++){const r=l[n];if(t[r]!==e[r]&&!Lt(s,r))return!0}return!1}function Gn({vnode:e,parent:t},s){for(;t;){const l=t.subTree;if(l.suspense&&l.suspense.activeBranch===e&&(l.el=e.el),l===e)(e=t.vnode).el=s,t=t.parent;else break}}const Mt=e=>e.__isSuspense;function Jn(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):sn(e)}const ae=Symbol.for("v-fgt"),jt=Symbol.for("v-txt"),Z=Symbol.for("v-cmt"),xt=Symbol.for("v-stc"),nt=[];let de=null;function ss(e=!1){nt.push(de=e?null:[])}function Yn(){nt.pop(),de=nt[nt.length-1]||null}let ot=1;function Pt(e,t=!1){ot+=e,e<0&&de&&t&&(de.hasOnce=!0)}function kl(e){return e.dynamicChildren=ot>0?de||Ke:null,Yn(),ot>0&&de&&de.push(e),e}function Mr(e,t,s,l,n,r){return kl(Ml(e,t,s,l,n,r,!0))}function ls(e,t,s,l,n){return kl(oe(e,t,s,l,n,!0))}function Ge(e){return e?e.__v_isVNode===!0:!1}function we(e,t){return e.type===t.type&&e.key===t.key}const Ol=({key:e})=>e!=null?e:null,Ct=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?he(e)||Tt(e)||H(e)?{i:z,r:e,k:t,f:!!s}:e:null);function Ml(e,t=null,s=null,l=0,n=null,r=e===ae?0:1,i=!1,f=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ol(t),ref:t&&Ct(t),scopeId:Zs,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:l,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:z};return f?(ys(u,s),r&128&&e.normalize(u)):s&&(u.shapeFlag|=he(s)?8:16),ot>0&&!i&&de&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&de.push(u),u}const oe=Qn;function Qn(e,t=null,s=null,l=0,n=null,r=!1){if((!e||e===al)&&(e=Z),Ge(e)){const f=ke(e,t,!0);return s&&ys(f,s),ot>0&&!r&&de&&(f.shapeFlag&6?de[de.indexOf(e)]=f:de.push(f)),f.patchFlag=-2,f}if(ir(e)&&(e=e.__vccOpts),t){t=Xn(t);let{class:f,style:u}=t;f&&!he(f)&&(t.class=Ds(f)),fe(u)&&(Ls(u)&&!L(u)&&(u=ee({},u)),t.style=Rs(u))}const i=he(e)?1:Mt(e)?128:el(e)?64:fe(e)?4:H(e)?2:0;return Ml(e,t,s,l,n,i,r,!0)}function Xn(e){return e?Ls(e)||ml(e)?ee({},e):e:null}function ke(e,t,s=!1,l=!1){const{props:n,ref:r,patchFlag:i,children:f,transition:u}=e,h=t?zn(n||{},t):n,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:h,key:h&&Ol(h),ref:t&&t.ref?s&&r?L(r)?r.concat(Ct(t)):[r,Ct(t)]:Ct(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:f,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ae?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ke(e.ssContent),ssFallback:e.ssFallback&&ke(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return u&&l&&qe(a,u.clone(a)),a}function Zn(e=" ",t=0){return oe(jt,null,e,t)}function Pr(e,t){const s=oe(xt,null,e);return s.staticCount=t,s}function Ir(e="",t=!1){return t?(ss(),ls(Z,null,e)):oe(Z,null,e)}function Fe(e){return e==null||typeof e=="boolean"?oe(Z):L(e)?oe(ae,null,e.slice()):Ge(e)?Ie(e):oe(jt,null,String(e))}function Ie(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ke(e)}function ys(e,t){let s=0;const{shapeFlag:l}=e;if(t==null)t=null;else if(L(t))s=16;else if(typeof t=="object")if(l&65){const n=t.default;n&&(n._c&&(n._d=!1),ys(e,n()),n._c&&(n._d=!0));return}else{s=32;const n=t._;!n&&!ml(t)?t._ctx=z:n===3&&z&&(z.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else H(t)?(t={default:t,_ctx:z},s=32):(t=String(t),l&64?(s=16,t=[Zn(t)]):s=8);e.children=t,e.shapeFlag|=s}function zn(...e){const t={};for(let s=0;s<e.length;s++){const l=e[s];for(const n in l)if(n==="class")t.class!==l.class&&(t.class=Ds([t.class,l.class]));else if(n==="style")t.style=Rs([t.style,l.style]);else if(os(n)){const r=t[n],i=l[n];i&&r!==i&&!(L(r)&&r.includes(i))&&(t[n]=r?[].concat(r,i):i)}else n!==""&&(t[n]=l[n])}return t}function ye(e,t,s,l=null){Ee(e,t,7,[s,l])}const er=pl();let tr=0;function sr(e,t,s){const l=e.type,n=(t?t.appContext:e.appContext)||er,r={uid:tr++,vnode:e,type:l,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Wl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_l(l,n),emitsOptions:vl(l,n),emit:null,emitted:null,propsDefaults:D,inheritAttrs:l.inheritAttrs,ctx:D,data:D,props:D,attrs:D,slots:D,refs:D,setupState:D,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Dn.bind(null,r),e.ce&&e.ce(r),r}let se=null;const ct=()=>se||z;let It,ns;{const e=St(),t=(s,l)=>{let n;return(n=e[s])||(n=e[s]=[]),n.push(l),r=>{n.length>1?n.forEach(i=>i(r)):n[0](r)}};It=t("__VUE_INSTANCE_SETTERS__",s=>se=s),ns=t("__VUE_SSR_SETTERS__",s=>it=s)}const ut=e=>{const t=se;return It(e),e.scope.on(),()=>{e.scope.off(),It(t)}},Ns=()=>{se&&se.scope.off(),It(null)};function Pl(e){return e.vnode.shapeFlag&4}let it=!1;function lr(e,t=!1,s=!1){t&&ns(t);const{props:l,children:n}=e.vnode,r=Pl(e);Mn(e,l,r,t),Sn(e,n,s||t);const i=r?nr(e,t):void 0;return t&&ns(!1),i}function nr(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,xn);const{setup:l}=s;if(l){je();const n=e.setupContext=l.length>1?or(e):null,r=ut(e),i=ft(l,e,0,[e.props,n]),f=Ks(i);if(Be(),r(),(f||e.sp)&&!He(e)&&il(e),f){if(i.then(Ns,Ns),t)return i.then(u=>{$s(e,u,t)}).catch(u=>{Vt(u,e,0)});e.asyncDep=i}else $s(e,i,t)}else Il(e,t)}function $s(e,t,s){H(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:fe(t)&&(e.setupState=js(t)),Il(e,s)}let Hs;function Il(e,t,s){const l=e.type;if(!e.render){if(!t&&Hs&&!l.render){const n=l.template||ds(e).template;if(n){const{isCustomElement:r,compilerOptions:i}=e.appContext.config,{delimiters:f,compilerOptions:u}=l,h=ee(ee({isCustomElement:r,delimiters:f},i),u);l.render=Hs(n,h)}}e.render=l.render||Ae}{const n=ut(e);je();try{Cn(e)}finally{Be(),n()}}}const rr={get(e,t){return Bs(e,"get",""),e[t]}};function or(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,rr),slots:e.slots,emit:e.emit,expose:t}}function Bt(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(js(Rl(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in lt)return lt[s](e)},has(t,s){return s in t||s in lt}})):e.proxy}function rs(e,t=!0){return H(e)?e.displayName||e.name:e.name||t&&e.__name}function ir(e){return H(e)&&"__vccOpts"in e}const fr=(e,t)=>Bl(e,t,it);function wr(e,t,s){try{Pt(-1);const l=arguments.length;return l===2?fe(t)&&!L(t)?Ge(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(l>3?s=Array.prototype.slice.call(arguments,2):l===3&&Ge(s)&&(s=[s]),oe(e,t,s))}finally{Pt(1)}}const cr="3.5.23";export{xr as A,gr as B,ss as C,Mr as D,jt as E,ae as F,br as G,ls as H,ln as I,Fr as J,Ml as K,Ir as L,Tr as M,Cr as N,Ar as O,Or as P,Pr as Q,_r as R,xt as S,pr as T,Xn as U,hn as V,mr as W,an as a,fs as b,fr as c,un as d,cs as e,Ge as f,ct as g,vr as h,bt as i,wr as j,pn as k,on as l,Ee as m,en as n,ul as o,On as p,sn as q,Er as r,cl as s,yr as t,oe as u,zn as v,_t as w,hr as x,kr as y,Zn as z};



                                                                                    
