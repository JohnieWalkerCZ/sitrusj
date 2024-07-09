(()=>{"use strict";var e={8411:(e,t,r)=>{function n(e){return function(){let t=e(...arguments);if(t&&"object"==typeof t&&t instanceof Promise)throw new Error("Function unexpectedly returned a Promise");return t}}r.d(t,{WB:()=>i,a_:()=>n,qG:()=>s,zd:()=>o});var i={JS_EVAL_TYPE_GLOBAL:0,JS_EVAL_TYPE_MODULE:1,JS_EVAL_TYPE_DIRECT:2,JS_EVAL_TYPE_INDIRECT:3,JS_EVAL_TYPE_MASK:3,JS_EVAL_FLAG_STRICT:8,JS_EVAL_FLAG_STRIP:16,JS_EVAL_FLAG_COMPILE_ONLY:32,JS_EVAL_FLAG_BACKTRACE_BARRIER:64},s={BaseObjects:1,Date:2,Eval:4,StringNormalize:8,RegExp:16,RegExpCompiler:32,JSON:64,Proxy:128,MapSet:256,TypedArrays:512,Promise:1024,BigInt:2048,BigFloat:4096,BigDecimal:8192,OperatorOverloading:16384,BignumExt:32768},o={Pending:0,Fulfilled:1,Rejected:2}},1416:(e,t,r)=>{r.d(t,{a:()=>u,b:()=>m,f:()=>P,g:()=>A,j:()=>M,m:()=>J,n:()=>N,o:()=>I,p:()=>V,q:()=>O,r:()=>j,s:()=>z,t:()=>U});var n,o=r(8411),a=Object.defineProperty,l=!1;function u(){l&&console.log(...arguments)}((e,t)=>{for(var r in t)a(e,r,{get:t[r],enumerable:!0})})({},{QuickJSAsyncifyError:()=>f,QuickJSAsyncifySuspended:()=>p,QuickJSEmscriptenModuleError:()=>w,QuickJSMemoryLeakDetected:()=>v,QuickJSNotImplemented:()=>m,QuickJSPromisePending:()=>g,QuickJSUnknownIntrinsic:()=>y,QuickJSUnwrapError:()=>c,QuickJSUseAfterFree:()=>d,QuickJSWrongOwner:()=>h});var c=class extends Error{constructor(e,t){super(String(e)),this.cause=e,this.context=t,this.name="QuickJSUnwrapError"}},h=class extends Error{constructor(){super(...arguments),this.name="QuickJSWrongOwner"}},d=class extends Error{constructor(){super(...arguments),this.name="QuickJSUseAfterFree"}},m=class extends Error{constructor(){super(...arguments),this.name="QuickJSNotImplemented"}},f=class extends Error{constructor(){super(...arguments),this.name="QuickJSAsyncifyError"}},p=class extends Error{constructor(){super(...arguments),this.name="QuickJSAsyncifySuspended"}},v=class extends Error{constructor(){super(...arguments),this.name="QuickJSMemoryLeakDetected"}},w=class extends Error{constructor(){super(...arguments),this.name="QuickJSEmscriptenModuleError"}},y=class extends TypeError{constructor(){super(...arguments),this.name="QuickJSUnknownIntrinsic"}},g=class extends Error{constructor(){super(...arguments),this.name="QuickJSPromisePending"}};function*S(e){return yield e}var b=S;function _(e,t){return function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return x(t.call(e,b,...n))}}function x(e){return function t(r){return r.done?r.value:r.value instanceof Promise?r.value.then((r=>t(e.next(r))),(r=>t(e.throw(r)))):t(e.next(r.value))}(e.next())}b.of=function(e){return S(x(e))};var P=class{[Symbol.dispose](){return this.dispose()}},E=null!==(n=Symbol.dispose)&&void 0!==n?n:Symbol.for("Symbol.dispose"),T=P.prototype;T[E]||(T[E]=function(){return this.dispose()});var A=class e extends P{constructor(e,t,r,n){super(),this._value=e,this.copier=t,this.disposer=r,this._owner=n,this._alive=!0,this._constructorStack=l?new Error("Lifetime constructed").stack:void 0}get alive(){return this._alive}get value(){return this.assertAlive(),this._value}get owner(){return this._owner}get dupable(){return!!this.copier}dup(){if(this.assertAlive(),!this.copier)throw new Error("Non-dupable lifetime");return new e(this.copier(this._value),this.copier,this.disposer,this._owner)}consume(e){this.assertAlive();let t=e(this);return this.dispose(),t}dispose(){this.assertAlive(),this.disposer&&this.disposer(this._value),this._alive=!1}assertAlive(){if(!this.alive)throw this._constructorStack?new d("Lifetime not alive\n".concat(this._constructorStack,"\nLifetime used")):new d("Lifetime not alive")}},k=class extends A{constructor(e,t){super(e,void 0,void 0,t)}get dupable(){return!0}dup(){return this}dispose(){}},C=class extends A{constructor(e,t,r,n){super(e,t,r,n)}dispose(){this._alive=!1}};function L(e,t){let r;try{e.dispose()}catch(n){r=n}if(t&&r)throw Object.assign(t,{message:"".concat(t.message,"\n Then, failed to dispose scope: ").concat(r.message),disposeError:r}),t;if(t||r)throw t||r}var M=class e extends P{constructor(){super(...arguments),this._disposables=new A(new Set)}static withScope(t){let r,n=new e;try{return t(n)}catch(i){throw r=i,i}finally{L(n,r)}}static withScopeMaybeAsync(t,r){return function(e,t){return x(t.call(e,b))}(void 0,(function*(n){let i,o=new e;try{return yield*n.of(r.call(t,n,o))}catch(s){throw i=s,s}finally{L(o,i)}}))}static async withScopeAsync(t){let r,n=new e;try{return await t(n)}catch(i){throw r=i,i}finally{L(n,r)}}manage(e){return this._disposables.value.add(e),e}get alive(){return this._disposables.alive}dispose(){let e=Array.from(this._disposables.value.values()).reverse();for(let t of e)t.alive&&t.dispose();this._disposables.dispose()}},Q=class extends P{constructor(e){super(),this.resolve=e=>{this.resolveHandle.alive&&(this.context.unwrapResult(this.context.callFunction(this.resolveHandle,this.context.undefined,e||this.context.undefined)).dispose(),this.disposeResolvers(),this.onSettled())},this.reject=e=>{this.rejectHandle.alive&&(this.context.unwrapResult(this.context.callFunction(this.rejectHandle,this.context.undefined,e||this.context.undefined)).dispose(),this.disposeResolvers(),this.onSettled())},this.dispose=()=>{this.handle.alive&&this.handle.dispose(),this.disposeResolvers()},this.context=e.context,this.owner=e.context.runtime,this.handle=e.promiseHandle,this.settled=new Promise((e=>{this.onSettled=e})),this.resolveHandle=e.resolveHandle,this.rejectHandle=e.rejectHandle}get alive(){return this.handle.alive||this.resolveHandle.alive||this.rejectHandle.alive}disposeResolvers(){this.resolveHandle.alive&&this.resolveHandle.dispose(),this.rejectHandle.alive&&this.rejectHandle.dispose()}},H=class{constructor(e){this.module=e}toPointerArray(e){let t=new Int32Array(e.map((e=>e.value))),r=t.length*t.BYTES_PER_ELEMENT,n=this.module._malloc(r);return new Uint8Array(this.module.HEAPU8.buffer,n,r).set(new Uint8Array(t.buffer)),new A(n,void 0,(e=>this.module._free(e)))}newMutablePointerArray(e){let t=new Int32Array(new Array(e).fill(0)),r=t.length*t.BYTES_PER_ELEMENT,n=this.module._malloc(r),i=new Int32Array(this.module.HEAPU8.buffer,n,e);return i.set(t),new A({typedArray:i,ptr:n},void 0,(e=>this.module._free(e.ptr)))}newHeapCharPointer(e){let t=this.module.lengthBytesUTF8(e),r=t+1,n=this.module._malloc(r);return this.module.stringToUTF8(e,n,r),new A({ptr:n,strlen:t},void 0,(e=>this.module._free(e.ptr)))}newHeapBufferPointer(e){let t=e.byteLength,r=this.module._malloc(t);return this.module.HEAPU8.set(e,r),new A({pointer:r,numBytes:t},void 0,(e=>this.module._free(e.pointer)))}consumeHeapCharPointer(e){let t=this.module.UTF8ToString(e);return this.module._free(e),t}};Symbol("Unstable"),Object.freeze({BaseObjects:!0,Date:!0,Eval:!0,StringNormalize:!0,RegExp:!0,JSON:!0,Proxy:!0,MapSet:!0,TypedArrays:!0,Promise:!0});function J(e){if(!e)return 0;let t=0;for(let[r,n]of Object.entries(e)){if(!(r in o.qG))throw new y(r);n&&(t|=o.qG[r])}return t}function N(e){if("number"==typeof e)return e;if(void 0===e)return 0;let{type:t,strict:r,strip:n,compileOnly:i,backtraceBarrier:s}=e,a=0;return"global"===t&&(a|=o.WB.JS_EVAL_TYPE_GLOBAL),"module"===t&&(a|=o.WB.JS_EVAL_TYPE_MODULE),r&&(a|=o.WB.JS_EVAL_FLAG_STRICT),n&&(a|=o.WB.JS_EVAL_FLAG_STRIP),i&&(a|=o.WB.JS_EVAL_FLAG_COMPILE_ONLY),s&&(a|=o.WB.JS_EVAL_FLAG_BACKTRACE_BARRIER),a}function R(){let e=[];for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];for(let i of r)void 0!==i&&(e=e.concat(i));return e}var F=class extends H{constructor(e){var t;super(e.module),this.scope=new M,this.copyJSValue=e=>this.ffi.QTS_DupValuePointer(this.ctx.value,e),this.freeJSValue=e=>{this.ffi.QTS_FreeValuePointer(this.ctx.value,e)},null!==(t=e.ownedLifetimes)&&void 0!==t&&t.forEach((e=>this.scope.manage(e))),this.owner=e.owner,this.module=e.module,this.ffi=e.ffi,this.rt=e.rt,this.ctx=this.scope.manage(e.ctx)}get alive(){return this.scope.alive}dispose(){return this.scope.dispose()}[Symbol.dispose](){return this.dispose()}manage(e){return this.scope.manage(e)}consumeJSCharPointer(e){let t=this.module.UTF8ToString(e);return this.ffi.QTS_FreeCString(this.ctx.value,e),t}heapValueHandle(e){return new A(e,this.copyJSValue,this.freeJSValue,this.owner)}},I=class extends P{constructor(e){super(),this._undefined=void 0,this._null=void 0,this._false=void 0,this._true=void 0,this._global=void 0,this._BigInt=void 0,this.fnNextId=-32768,this.fnMaps=new Map,this.cToHostCallbacks={callFunction:(e,t,r,n,i)=>{if(e!==this.ctx.value)throw new Error("QuickJSContext instance received C -> JS call with mismatched ctx");let s=this.getFunction(i);if(!s)throw new Error("QuickJSContext had no callback with id ".concat(i));return M.withScopeMaybeAsync(this,(function*(e,i){let o=i.manage(new C(t,this.memory.copyJSValue,this.memory.freeJSValue,this.runtime)),a=new Array(r);for(let t=0;t<r;t++){let e=this.ffi.QTS_ArgvGetJSValueConstPointer(n,t);a[t]=i.manage(new C(e,this.memory.copyJSValue,this.memory.freeJSValue,this.runtime))}try{let t=yield*e(s.apply(o,a));if(t){if("error"in t&&t.error)throw u("throw error",t.error),t.error;let e=i.manage(t instanceof A?t:t.value);return this.ffi.QTS_DupValuePointer(this.ctx.value,e.value)}return 0}catch(l){return this.errorToHandle(l).consume((e=>this.ffi.QTS_Throw(this.ctx.value,e.value)))}}))}},this.runtime=e.runtime,this.module=e.module,this.ffi=e.ffi,this.rt=e.rt,this.ctx=e.ctx,this.memory=new F({...e,owner:this.runtime}),e.callbacks.setContextCallbacks(this.ctx.value,this.cToHostCallbacks),this.dump=this.dump.bind(this),this.getString=this.getString.bind(this),this.getNumber=this.getNumber.bind(this),this.resolvePromise=this.resolvePromise.bind(this)}get alive(){return this.memory.alive}dispose(){this.memory.dispose()}get undefined(){if(this._undefined)return this._undefined;let e=this.ffi.QTS_GetUndefined();return this._undefined=new k(e)}get null(){if(this._null)return this._null;let e=this.ffi.QTS_GetNull();return this._null=new k(e)}get true(){if(this._true)return this._true;let e=this.ffi.QTS_GetTrue();return this._true=new k(e)}get false(){if(this._false)return this._false;let e=this.ffi.QTS_GetFalse();return this._false=new k(e)}get global(){if(this._global)return this._global;let e=this.ffi.QTS_GetGlobalObject(this.ctx.value);return this.memory.manage(this.memory.heapValueHandle(e)),this._global=new k(e,this.runtime),this._global}newNumber(e){return this.memory.heapValueHandle(this.ffi.QTS_NewFloat64(this.ctx.value,e))}newString(e){let t=this.memory.newHeapCharPointer(e).consume((e=>this.ffi.QTS_NewString(this.ctx.value,e.value.ptr)));return this.memory.heapValueHandle(t)}newUniqueSymbol(e){var t;let r=null!==(t="symbol"==typeof e?e.description:e)&&void 0!==t?t:"",n=this.memory.newHeapCharPointer(r).consume((e=>this.ffi.QTS_NewSymbol(this.ctx.value,e.value.ptr,0)));return this.memory.heapValueHandle(n)}newSymbolFor(e){var t;let r=null!==(t="symbol"==typeof e?e.description:e)&&void 0!==t?t:"",n=this.memory.newHeapCharPointer(r).consume((e=>this.ffi.QTS_NewSymbol(this.ctx.value,e.value.ptr,1)));return this.memory.heapValueHandle(n)}newBigInt(e){if(!this._BigInt){let e=this.getProp(this.global,"BigInt");this.memory.manage(e),this._BigInt=new k(e.value,this.runtime)}let t=this._BigInt,r=String(e);return this.newString(r).consume((e=>this.unwrapResult(this.callFunction(t,this.undefined,e))))}newObject(e){e&&this.runtime.assertOwned(e);let t=e?this.ffi.QTS_NewObjectProto(this.ctx.value,e.value):this.ffi.QTS_NewObject(this.ctx.value);return this.memory.heapValueHandle(t)}newArray(){let e=this.ffi.QTS_NewArray(this.ctx.value);return this.memory.heapValueHandle(e)}newArrayBuffer(e){let t=new Uint8Array(e),r=this.memory.newHeapBufferPointer(t),n=this.ffi.QTS_NewArrayBuffer(this.ctx.value,r.value.pointer,t.length);return this.memory.heapValueHandle(n)}newPromise(e){let t=M.withScope((e=>{let t=e.manage(this.memory.newMutablePointerArray(2)),r=this.ffi.QTS_NewPromiseCapability(this.ctx.value,t.value.ptr),n=this.memory.heapValueHandle(r),[i,s]=Array.from(t.value.typedArray).map((e=>this.memory.heapValueHandle(e)));return new Q({context:this,promiseHandle:n,resolveHandle:i,rejectHandle:s})}));return e&&"function"==typeof e&&(e=new Promise(e)),e&&Promise.resolve(e).then(t.resolve,(e=>e instanceof A?t.reject(e):this.newError(e).consume(t.reject))),t}newFunction(e,t){let r=++this.fnNextId;return this.setFunction(r,t),this.memory.heapValueHandle(this.ffi.QTS_NewFunction(this.ctx.value,r,e))}newError(e){let t=this.memory.heapValueHandle(this.ffi.QTS_NewError(this.ctx.value));return e&&"object"==typeof e?(void 0!==e.name&&this.newString(e.name).consume((e=>this.setProp(t,"name",e))),void 0!==e.message&&this.newString(e.message).consume((e=>this.setProp(t,"message",e)))):"string"==typeof e?this.newString(e).consume((e=>this.setProp(t,"message",e))):void 0!==e&&this.newString(String(e)).consume((e=>this.setProp(t,"message",e))),t}typeof(e){return this.runtime.assertOwned(e),this.memory.consumeHeapCharPointer(this.ffi.QTS_Typeof(this.ctx.value,e.value))}getNumber(e){return this.runtime.assertOwned(e),this.ffi.QTS_GetFloat64(this.ctx.value,e.value)}getString(e){return this.runtime.assertOwned(e),this.memory.consumeJSCharPointer(this.ffi.QTS_GetString(this.ctx.value,e.value))}getSymbol(e){this.runtime.assertOwned(e);let t=this.memory.consumeJSCharPointer(this.ffi.QTS_GetSymbolDescriptionOrKey(this.ctx.value,e.value));return this.ffi.QTS_IsGlobalSymbol(this.ctx.value,e.value)?Symbol.for(t):Symbol(t)}getBigInt(e){this.runtime.assertOwned(e);let t=this.getString(e);return BigInt(t)}getArrayBuffer(e){this.runtime.assertOwned(e);let t=this.ffi.QTS_GetArrayBufferLength(this.ctx.value,e.value),r=this.ffi.QTS_GetArrayBuffer(this.ctx.value,e.value);if(!r)throw new Error("Couldn't allocate memory to get ArrayBuffer");return new A(this.module.HEAPU8.subarray(r,r+t),void 0,(()=>this.module._free(r)))}getPromiseState(e){this.runtime.assertOwned(e);let t=this.ffi.QTS_PromiseState(this.ctx.value,e.value);if(t<0)return{type:"fulfilled",value:e,notAPromise:!0};if(t===o.zd.Pending)return{type:"pending",get error(){return new g("Cannot unwrap a pending promise")}};let r=this.ffi.QTS_PromiseResult(this.ctx.value,e.value),n=this.memory.heapValueHandle(r);if(t===o.zd.Fulfilled)return{type:"fulfilled",value:n};if(t===o.zd.Rejected)return{type:"rejected",error:n};throw n.dispose(),new Error("Unknown JSPromiseStateEnum: ".concat(t))}resolvePromise(e){this.runtime.assertOwned(e);let t=M.withScope((t=>{let r=t.manage(this.getProp(this.global,"Promise")),n=t.manage(this.getProp(r,"resolve"));return this.callFunction(n,r,e)}));return t.error?Promise.resolve(t):new Promise((e=>{M.withScope((r=>{let n=r.manage(this.newFunction("resolve",(t=>{e({value:t&&t.dup()})}))),i=r.manage(this.newFunction("reject",(t=>{e({error:t&&t.dup()})}))),s=r.manage(t.value),o=r.manage(this.getProp(s,"then"));this.unwrapResult(this.callFunction(o,s,n,i)).dispose()}))}))}getProp(e,t){this.runtime.assertOwned(e);let r=this.borrowPropertyKey(t).consume((t=>this.ffi.QTS_GetProp(this.ctx.value,e.value,t.value)));return this.memory.heapValueHandle(r)}setProp(e,t,r){this.runtime.assertOwned(e),this.borrowPropertyKey(t).consume((t=>this.ffi.QTS_SetProp(this.ctx.value,e.value,t.value,r.value)))}defineProp(e,t,r){this.runtime.assertOwned(e),M.withScope((n=>{let i=n.manage(this.borrowPropertyKey(t)),s=r.value||this.undefined,o=!!r.configurable,a=!!r.enumerable,l=!!r.value,u=r.get?n.manage(this.newFunction(r.get.name,r.get)):this.undefined,c=r.set?n.manage(this.newFunction(r.set.name,r.set)):this.undefined;this.ffi.QTS_DefineProp(this.ctx.value,e.value,i.value,s.value,u.value,c.value,o,a,l)}))}callFunction(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];this.runtime.assertOwned(e);let s=this.memory.toPointerArray(n).consume((r=>this.ffi.QTS_Call(this.ctx.value,e.value,t.value,n.length,r.value))),o=this.ffi.QTS_ResolveException(this.ctx.value,s);return o?(this.ffi.QTS_FreeValuePointer(this.ctx.value,s),{error:this.memory.heapValueHandle(o)}):{value:this.memory.heapValueHandle(s)}}evalCode(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"eval.js",r=arguments.length>2?arguments[2]:void 0,n=void 0===r?1:0,i=N(r),s=this.memory.newHeapCharPointer(e).consume((e=>this.ffi.QTS_Eval(this.ctx.value,e.value.ptr,e.value.strlen,t,n,i))),o=this.ffi.QTS_ResolveException(this.ctx.value,s);return o?(this.ffi.QTS_FreeValuePointer(this.ctx.value,s),{error:this.memory.heapValueHandle(o)}):{value:this.memory.heapValueHandle(s)}}throw(e){return this.errorToHandle(e).consume((e=>this.ffi.QTS_Throw(this.ctx.value,e.value)))}borrowPropertyKey(e){return"number"==typeof e?this.newNumber(e):"string"==typeof e?this.newString(e):new k(e.value,this.runtime)}getMemory(e){if(e===this.rt.value)return this.memory;throw new Error("Private API. Cannot get memory from a different runtime")}dump(e){this.runtime.assertOwned(e);let t=this.typeof(e);if("string"===t)return this.getString(e);if("number"===t)return this.getNumber(e);if("bigint"===t)return this.getBigInt(e);if("undefined"===t)return;if("symbol"===t)return this.getSymbol(e);let r=this.getPromiseState(e);if("fulfilled"===r.type&&!r.notAPromise)return e.dispose(),{type:r.type,value:r.value.consume(this.dump)};if("pending"===r.type)return e.dispose(),{type:r.type};if("rejected"===r.type)return e.dispose(),{type:r.type,error:r.error.consume(this.dump)};let n=this.memory.consumeJSCharPointer(this.ffi.QTS_Dump(this.ctx.value,e.value));try{return JSON.parse(n)}catch{return n}}unwrapResult(e){if(e.error){let t="context"in e.error?e.error.context:this,r=e.error.consume((e=>this.dump(e)));if(r&&"object"==typeof r&&"string"==typeof r.message){let{message:e,name:n,stack:i}=r,s=new c(""),o=s.stack;throw"string"==typeof n&&(s.name=r.name),"string"==typeof i&&(s.stack="".concat(n,": ").concat(e,"\n").concat(r.stack,"Host: ").concat(o)),Object.assign(s,{cause:r,context:t,message:e}),s}throw new c(r,t)}return e.value}getFunction(e){let t=e>>8,r=this.fnMaps.get(t);if(r)return r.get(e)}setFunction(e,t){let r=e>>8,n=this.fnMaps.get(r);return n||(n=new Map,this.fnMaps.set(r,n)),n.set(e,t)}errorToHandle(e){return e instanceof A?e:this.newError(e)}encodeBinaryJSON(e){let t=this.ffi.QTS_bjson_encode(this.ctx.value,e.value);return this.memory.heapValueHandle(t)}decodeBinaryJSON(e){let t=this.ffi.QTS_bjson_decode(this.ctx.value,e.value);return this.memory.heapValueHandle(t)}},V=class extends P{constructor(e){var t;super(),this.scope=new M,this.contextMap=new Map,this.cToHostCallbacks={shouldInterrupt:e=>{if(e!==this.rt.value)throw new Error("QuickJSContext instance received C -> JS interrupt with mismatched rt");let t=this.interruptHandler;if(!t)throw new Error("QuickJSContext had no interrupt handler");return t(this)?1:0},loadModuleSource:_(this,(function*(e,t,r,n){var s;let o=this.moduleLoader;if(!o)throw new Error("Runtime has no module loader");if(t!==this.rt.value)throw new Error("Runtime pointer mismatch");let a=null!==(s=this.contextMap.get(r))&&void 0!==s?s:this.newContext({contextPointer:r});try{let t=yield*e(o(n,a));if("object"==typeof t&&"error"in t&&t.error)throw u("cToHostLoadModule: loader returned error",t.error),t.error;let r="string"==typeof t?t:"value"in t?t.value:t;return this.memory.newHeapCharPointer(r).value.ptr}catch(i){return u("cToHostLoadModule: caught error",i),a.throw(i),0}})),normalizeModule:_(this,(function*(e,t,r,n,i){var s;let o=this.moduleNormalizer;if(!o)throw new Error("Runtime has no module normalizer");if(t!==this.rt.value)throw new Error("Runtime pointer mismatch");let a=null!==(s=this.contextMap.get(r))&&void 0!==s?s:this.newContext({contextPointer:r});try{let t=yield*e(o(n,i,a));if("object"==typeof t&&"error"in t&&t.error)throw u("cToHostNormalizeModule: normalizer returned error",t.error),t.error;let r="string"==typeof t?t:t.value;return a.getMemory(this.rt.value).newHeapCharPointer(r).value.ptr}catch(l){return u("normalizeModule: caught error",l),a.throw(l),0}}))},null!==(t=e.ownedLifetimes)&&void 0!==t&&t.forEach((e=>this.scope.manage(e))),this.module=e.module,this.memory=new H(this.module),this.ffi=e.ffi,this.rt=e.rt,this.callbacks=e.callbacks,this.scope.manage(this.rt),this.callbacks.setRuntimeCallbacks(this.rt.value,this.cToHostCallbacks),this.executePendingJobs=this.executePendingJobs.bind(this)}get alive(){return this.scope.alive}dispose(){return this.scope.dispose()}newContext(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=J(e.intrinsics),r=new A(e.contextPointer||this.ffi.QTS_NewContext(this.rt.value,t),void 0,(e=>{this.contextMap.delete(e),this.callbacks.deleteContext(e),this.ffi.QTS_FreeContext(e)})),n=new I({module:this.module,ctx:r,ffi:this.ffi,rt:this.rt,ownedLifetimes:e.ownedLifetimes,runtime:this,callbacks:this.callbacks});return this.contextMap.set(r.value,n),n}setModuleLoader(e,t){this.moduleLoader=e,this.moduleNormalizer=t,this.ffi.QTS_RuntimeEnableModuleLoader(this.rt.value,this.moduleNormalizer?1:0)}removeModuleLoader(){this.moduleLoader=void 0,this.ffi.QTS_RuntimeDisableModuleLoader(this.rt.value)}hasPendingJob(){return!!this.ffi.QTS_IsJobPending(this.rt.value)}setInterruptHandler(e){let t=this.interruptHandler;this.interruptHandler=e,t||this.ffi.QTS_RuntimeEnableInterruptHandler(this.rt.value)}removeInterruptHandler(){this.interruptHandler&&(this.ffi.QTS_RuntimeDisableInterruptHandler(this.rt.value),this.interruptHandler=void 0)}executePendingJobs(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,r=this.memory.newMutablePointerArray(1),n=this.ffi.QTS_ExecutePendingJob(this.rt.value,null!==t&&void 0!==t?t:-1,r.value.ptr),i=r.value.typedArray[0];if(r.dispose(),0===i)return this.ffi.QTS_FreeValuePointerRuntime(this.rt.value,n),{value:0};let s=null!==(e=this.contextMap.get(i))&&void 0!==e?e:this.newContext({contextPointer:i}),o=s.getMemory(this.rt.value).heapValueHandle(n);if("number"===s.typeof(o)){let e=s.getNumber(o);return o.dispose(),{value:e}}return{error:Object.assign(o,{context:s})}}setMemoryLimit(e){if(e<0&&-1!==e)throw new Error("Cannot set memory limit to negative number. To unset, pass -1");this.ffi.QTS_RuntimeSetMemoryLimit(this.rt.value,e)}computeMemoryUsage(){let e=this.getSystemContext().getMemory(this.rt.value);return e.heapValueHandle(this.ffi.QTS_RuntimeComputeMemoryUsage(this.rt.value,e.ctx.value))}dumpMemoryUsage(){return this.memory.consumeHeapCharPointer(this.ffi.QTS_RuntimeDumpMemoryUsage(this.rt.value))}setMaxStackSize(e){if(e<0)throw new Error("Cannot set memory limit to negative number. To unset, pass 0.");this.ffi.QTS_RuntimeSetMaxStackSize(this.rt.value,e)}assertOwned(e){if(e.owner&&e.owner.rt!==this.rt)throw new h("Handle is not owned by this runtime: ".concat(e.owner.rt.value," != ").concat(this.rt.value))}getSystemContext(){return this.context||(this.context=this.scope.manage(this.newContext())),this.context}},B=class{constructor(e){this.callFunction=e.callFunction,this.shouldInterrupt=e.shouldInterrupt,this.loadModuleSource=e.loadModuleSource,this.normalizeModule=e.normalizeModule}},O=class{constructor(e){this.contextCallbacks=new Map,this.runtimeCallbacks=new Map,this.suspendedCount=0,this.cToHostCallbacks=new B({callFunction:(e,t,r,n,i,o)=>this.handleAsyncify(e,(()=>{try{let e=this.contextCallbacks.get(t);if(!e)throw new Error("QuickJSContext(ctx = ".concat(t,') not found for C function call "').concat(o,'"'));return e.callFunction(t,r,n,i,o)}catch(s){return console.error("[C to host error: returning null]",s),0}})),shouldInterrupt:(e,t)=>this.handleAsyncify(e,(()=>{try{let e=this.runtimeCallbacks.get(t);if(!e)throw new Error("QuickJSRuntime(rt = ".concat(t,") not found for C interrupt"));return e.shouldInterrupt(t)}catch(e){return console.error("[C to host interrupt: returning error]",e),1}})),loadModuleSource:(e,t,r,n)=>this.handleAsyncify(e,(()=>{try{let e=this.runtimeCallbacks.get(t);if(!e)throw new Error("QuickJSRuntime(rt = ".concat(t,") not found for C module loader"));let i=e.loadModuleSource;if(!i)throw new Error("QuickJSRuntime(rt = ".concat(t,") does not support module loading"));return i(t,r,n)}catch(e){return console.error("[C to host module loader error: returning null]",e),0}})),normalizeModule:(e,t,r,n,i)=>this.handleAsyncify(e,(()=>{try{let e=this.runtimeCallbacks.get(t);if(!e)throw new Error("QuickJSRuntime(rt = ".concat(t,") not found for C module loader"));let s=e.normalizeModule;if(!s)throw new Error("QuickJSRuntime(rt = ".concat(t,") does not support module loading"));return s(t,r,n,i)}catch(e){return console.error("[C to host module loader error: returning null]",e),0}}))}),this.module=e,this.module.callbacks=this.cToHostCallbacks}setRuntimeCallbacks(e,t){this.runtimeCallbacks.set(e,t)}deleteRuntime(e){this.runtimeCallbacks.delete(e)}setContextCallbacks(e,t){this.contextCallbacks.set(e,t)}deleteContext(e){this.contextCallbacks.delete(e)}handleAsyncify(e,t){if(e)return e.handleSleep((e=>{try{let r=t();if(!(r instanceof Promise))return u("asyncify.handleSleep: not suspending:",r),void e(r);if(this.suspended)throw new f("Already suspended at: ".concat(this.suspended.stack,"\nAttempted to suspend at:"));this.suspended=new p("(".concat(this.suspendedCount++,")")),u("asyncify.handleSleep: suspending:",this.suspended),r.then((t=>{this.suspended=void 0,u("asyncify.handleSleep: resolved:",t),e(t)}),(e=>{u("asyncify.handleSleep: rejected:",e),console.error("QuickJS: cannot handle error in suspended function",e),this.suspended=void 0}))}catch(r){throw u("asyncify.handleSleep: error:",r),this.suspended=void 0,r}}));let r=t();if(r instanceof Promise)throw new Error("Promise return value not supported in non-asyncify context.");return r}};function j(e,t){t.interruptHandler&&e.setInterruptHandler(t.interruptHandler),void 0!==t.maxStackSizeBytes&&e.setMaxStackSize(t.maxStackSizeBytes),void 0!==t.memoryLimitBytes&&e.setMemoryLimit(t.memoryLimitBytes)}function z(e,t){t.moduleLoader&&e.setModuleLoader(t.moduleLoader),t.shouldInterrupt&&e.setInterruptHandler(t.shouldInterrupt),void 0!==t.memoryLimitBytes&&e.setMemoryLimit(t.memoryLimitBytes),void 0!==t.maxStackSizeBytes&&e.setMaxStackSize(t.maxStackSizeBytes)}var U=class{constructor(e,t){this.module=e,this.ffi=t,this.callbacks=new O(e)}newRuntime(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new A(this.ffi.QTS_NewRuntime(),void 0,(e=>{this.callbacks.deleteRuntime(e),this.ffi.QTS_FreeRuntime(e)})),r=new V({module:this.module,callbacks:this.callbacks,ffi:this.ffi,rt:t});return j(r,e),e.moduleLoader&&r.setModuleLoader(e.moduleLoader),r}newContext(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.newRuntime(),r=t.newContext({...e,ownedLifetimes:R(t,e.ownedLifetimes)});return t.context=r,r}evalCode(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return M.withScope((r=>{let n=r.manage(this.newContext());z(n.runtime,t);let i=n.evalCode(e,"eval.js");if(void 0!==t.memoryLimitBytes&&n.runtime.setMemoryLimit(-1),i.error)throw n.dump(r.manage(i.error));return n.dump(r.manage(i.value))}))}getWasmMemory(){var e,t,r;let n=null===(e=(t=this.module).quickjsEmscriptenInit)||void 0===e||null===(e=e.call(t,(()=>{})))||void 0===e||null===(r=e.getWasmMemory)||void 0===r?void 0:r.call(e);if(!n)throw new Error("Variant does not support getting WebAssembly.Memory");return n}getFFI(){return this.ffi}}}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.m=e,r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>"static/js/"+e+"."+{343:"5cf2d9b9",662:"6bba74cd",667:"c727fe28",730:"12a20934"}[e]+".chunk.js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/",(()=>{r.b=self.location+"/../../../";var e={341:1};r.f.i=(t,n)=>{e[t]||importScripts(r.p+r.u(t))};var t=self.webpackChunkmy_app=self.webpackChunkmy_app||[],n=t.push.bind(t);t.push=t=>{var i=t[0],s=t[1],o=t[2];for(var a in s)r.o(s,a)&&(r.m[a]=s[a]);for(o&&o(r);i.length;)e[i.pop()]=1;n(t)}})();var n=r(1416);r(8411);function i(e){return e&&"default"in e&&e.default?e.default&&"default"in e.default&&e.default.default?e.default.default:e.default:e}var s={type:"async",importFFI:()=>r.e(662).then(r.bind(r,7662)).then((e=>e.QuickJSAsyncFFI)),importModuleLoader:()=>r.e(730).then(r.bind(r,8730)).then((e=>e.default))};async function o(){return async function(e){let t=i(await e),[n,s,{QuickJSAsyncWASMModule:o}]=await Promise.all([t.importModuleLoader().then(i),t.importFFI(),r.e(667).then(r.bind(r,6667)).then(i)]),a=await n();return a.type="async",new o(a,new s(a))}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:s)}let a={},l="",u=[0,0,0,0],c=0,h={4:0,5:1,6:2,7:3};class d extends n.f{static disposeContext(e){for(const t of d.INTERVALS.values())t.context===e&&t.dispose()}constructor(e,t,r){super()}dispose(){clearInterval(this.intervalId),this.fnHandle.dispose(),d.INTERVALS.delete(this.fnHandle.value)}get alive(){return this.fnHandle.alive}}d.INTERVALS=new Map;let m={sensorReadings:e=>{u=e.data.payload}};function f(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.global;const i=e.newFunction(t,r);e.setProp(n,t,i),i.dispose()}onmessage=e=>{const{action:t,payload:r}=e.data;var n,i;"evalCode"===t?(n=r.modules,i=r.code,a=n,o().then((async e=>{const t=e.newContext();!async function(e){e.runtime.setModuleLoader((e=>{if(a[e])return a[e];throw new Error("Module ".concat(e," not found in cache"))})),f(e,"__enabledraw",(t=>{postMessage({action:"setDraw",payload:0!==e.getNumber(t)})})),function(e){const t=e.newFunction("setInterval",((t,r)=>{if(d.INTERVALS.size>100)throw new Error("Too many intervals scheduled already");const n=e.getNumber(r),i=t.dup(),s=setInterval((()=>{e.callFunction(i,e.undefined)}),n),o=new d(i,e,s);return d.INTERVALS.set(s,o),e.newNumber(s)}));e.setProp(e.global,"setInterval",t),t.dispose();const r=e.newFunction("setTimeout",((t,r)=>{if(d.INTERVALS.size>100)throw new Error("Too many intervals scheduled already");const n=e.getNumber(r),i=t.dup(),s=setTimeout((()=>{e.callFunction(i,e.undefined)}),n),o=new d(i,e,s);return d.INTERVALS.set(s,o),e.newNumber(s)}));e.setProp(e.global,"setTimeout",r),r.dispose();const n=e.newFunction("clearInterval",(t=>{const r=e.getNumber(t),n=d.INTERVALS.get(r);clearInterval(r),null===n||void 0===n||n.dispose()}));e.setProp(e.global,"clearInterval",n),n.dispose();const i=e.newFunction("clearTimeout",(t=>{const r=e.getNumber(t),n=d.INTERVALS.get(r);clearTimeout(r),null===n||void 0===n||n.dispose()}));e.setProp(e.global,"clearTimeout",i),i.dispose();const s=e.newFunction("sleep",(t=>{const r=e.newPromise();return setTimeout((()=>{r.resolve()}),e.getNumber(t)),r.settled.then(e.runtime.executePendingJobs),r.handle}));e.setProp(e.global,"sleep",s),s.dispose()}(e),function(e){const t=e.newFunction("log",(function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];const i=r.map(e.dump);l="",i.forEach((e=>l+=" "+e)),postMessage({action:"print",payload:l+"\n"})})),r=e.newObject();e.setProp(r,"log",t),e.setProp(e.global,"console",r),r.dispose(),t.dispose()}(e);const t=e.newObject();(function(e,t){f(e,"setSpeed",(t=>{c=e.getNumber(t)/60}),t),f(e,"move",(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.newObject(),n=e.getNumber(t),i=1,s=1;n<0?i=1+n:s=1-n;const o=e.getNumber(e.getProp(r,"distance")),a=e.getNumber(e.getProp(r,"time")),l=o?{distance:o}:{time:a},u=e.newPromise();return postMessage({action:"move",payload:{velocity:[i*c,s*c],duration:l}}),m.stop=e=>{u.resolve()},u.settled.then(e.runtime.executePendingJobs),u.handle}),t),f(e,"rotate",(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.newNumber(0);const r=e.newPromise();return postMessage({action:"rotate",payload:{angle:e.getNumber(t),velocity:c}}),m.stop=e=>{r.resolve()},r.settled.then(e.runtime.executePendingJobs),r.handle}),t),f(e,"stop",(()=>{postMessage({action:"setVelocity",payload:[0,0]})}),t)})(e,t),function(e,t){const r=e.newObject();e.setProp(e.global,"adc",r),f(e,"read",(t=>{const r=e.getNumber(t);return void 0!==h[r]?e.newNumber(u[h[r]]):(postMessage({action:"print",payload:"Error: invalid reading"}),NaN)}),r),f(e,"configure",(t=>{h[e.getNumber(t)]=e.getNumber(t)-4}),r),r.dispose(),f(e,"switchSensors",(t=>{const r=e.newPromise();return postMessage({action:"switchSensors",payload:e.getNumber(t)}),m.switchedSensors=e=>{r.resolve()},r.settled.then(e.runtime.executePendingJobs),r.handle}),t);const n=e.unwrapResult(e.evalCode("\nexport const readSensor = async (sensor) => {\n    switch (sensor) {\n        case 'W_FR':\n            await switchSensors(0);\n            return adc.read(robutek.Pins.Sens1);\n        case 'W_FL':\n            await switchSensors(0);\n            return adc.read(robutek.Pins.Sens2);\n        case 'W_BL':\n            await switchSensors(0);\n            return adc.read(robutek.Pins.Sens3);\n        case 'W_BR':\n            await switchSensors(0);\n            return adc.read(robutek.Pins.Sens4);\n        case 'L_FR':\n            await switchSensors(1);\n            return adc.read(robutek.Pins.Sens1);\n        case 'L_FL':\n            await switchSensors(1);\n            return adc.read(robutek.Pins.Sens2);\n        case 'L_BL':\n            await switchSensors(1);\n            return adc.read(robutek.Pins.Sens3);\n        case 'L_BR':\n            await switchSensors(1);\n            return adc.read(robutek.Pins.Sens4);\n        default:\n            return NaN;\n    }\n}"));e.setProp(t,"readSensor",e.getProp(n,"readSensor"))}(e,t),function(e,t){e.evalCode("\nclass Servo {\n    constructor( pin, timer, channel ){\n        this.pin = pin;\n    }\n\n    write(value){\n        __enabledraw(value > 512);\n    }\n}\n");const r=e.newObject();e.setProp(r,"Down",e.newNumber(562)),e.setProp(r,"Up",e.newNumber(332)),e.setProp(r,"Unload",e.newNumber(0)),e.setProp(t,"PenPos",r),r.dispose()}(e,t),function(e,t){const r=e.newObject(),n=(t,n)=>{e.setProp(r,t,e.newNumber(n))};n("StatusLED",46),n("Motor1A",11),n("Motor1B",12),n("Motor2A",45),n("Motor2B",13),n("Enc1A",39),n("Enc1B",40),n("Enc2A",42),n("Enc2B",41),n("Sens1",4),n("Sens2",5),n("Sens3",6),n("Sens4",7),n("SensSW",8),n("SensEN",47),e.setProp(t,"Pins",r)}(e,t),e.setProp(e.global,"robutek",t)}(t);const r=Date.now()+100;t.runtime.setInterruptHandler(function(e){let t="number"==typeof e?e:e.getTime();return function(){return Date.now()>t}}(r));const n=await t.evalCode("(async () => {\n".concat(i,"\n})()"));t.runtime.executePendingJobs(),n.error?(console.log("Execution failed:",t.getString(n.error)),n.error.dispose()):(console.log("Success:",t.getString(n.value)),n.value.dispose())}))):m[t]&&m[t](e)}})();
//# sourceMappingURL=341.0e72fcd1.chunk.js.map