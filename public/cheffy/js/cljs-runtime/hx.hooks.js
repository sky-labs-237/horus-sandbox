goog.provide('hx.hooks');
goog.require('cljs.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('goog.object');
/**
 * Like `React.useState`, but the update function returned can be used similar
 *   to `swap!`.
 * 
 *   Example:
 *   ```
 *   (let [[state set-state] (useState {:count 0})]
 * ;; ...
 * (set-state update :count inc))
 *   ```
 * 
 *   If `eq?` is passed in, will use that function to determine whether to update
 *   the React state. If it returns `true`, it will keep the old state, `false` it
 *   will render with new state.
 */
hx.hooks.useState = (function hx$hooks$useState(var_args){
var G__29172 = arguments.length;
switch (G__29172) {
case 1:
return hx.hooks.useState.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hx.hooks.useState.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hx.hooks.useState.cljs$core$IFn$_invoke$arity$1 = (function (initial){
var vec__29173 = module$node_modules$react$index.useState(initial);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29173,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29173,(1),null);
var updater = (function (){var G__29176 = ((function (vec__29173,v,u){
return (function() {
var hx$hooks$updater = null;
var hx$hooks$updater__1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var hx$hooks$updater__2 = (function() { 
var G__29241__delegate = function (f,xs){
return hx$hooks$updater.cljs$core$IFn$_invoke$arity$1(((function (vec__29173,v,u){
return (function hx$hooks$updater_$_spread_updater(x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,xs);
});})(vec__29173,v,u))
);
};
var G__29241 = function (f,var_args){
var xs = null;
if (arguments.length > 1) {
var G__29242__i = 0, G__29242__a = new Array(arguments.length -  1);
while (G__29242__i < G__29242__a.length) {G__29242__a[G__29242__i] = arguments[G__29242__i + 1]; ++G__29242__i;}
  xs = new cljs.core.IndexedSeq(G__29242__a,0,null);
} 
return G__29241__delegate.call(this,f,xs);};
G__29241.cljs$lang$maxFixedArity = 1;
G__29241.cljs$lang$applyTo = (function (arglist__29243){
var f = cljs.core.first(arglist__29243);
var xs = cljs.core.rest(arglist__29243);
return G__29241__delegate(f,xs);
});
G__29241.cljs$core$IFn$_invoke$arity$variadic = G__29241__delegate;
return G__29241;
})()
;
hx$hooks$updater = function(f,var_args){
var xs = var_args;
switch(arguments.length){
case 1:
return hx$hooks$updater__1.call(this,f);
default:
var G__29244 = null;
if (arguments.length > 1) {
var G__29245__i = 0, G__29245__a = new Array(arguments.length -  1);
while (G__29245__i < G__29245__a.length) {G__29245__a[G__29245__i] = arguments[G__29245__i + 1]; ++G__29245__i;}
G__29244 = new cljs.core.IndexedSeq(G__29245__a,0,null);
}
return hx$hooks$updater__2.cljs$core$IFn$_invoke$arity$variadic(f, G__29244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hx$hooks$updater.cljs$lang$maxFixedArity = 1;
hx$hooks$updater.cljs$lang$applyTo = hx$hooks$updater__2.cljs$lang$applyTo;
hx$hooks$updater.cljs$core$IFn$_invoke$arity$1 = hx$hooks$updater__1;
hx$hooks$updater.cljs$core$IFn$_invoke$arity$variadic = hx$hooks$updater__2.cljs$core$IFn$_invoke$arity$variadic;
return hx$hooks$updater;
})()
;})(vec__29173,v,u))
;
var G__29177 = [u];
return module$node_modules$react$index.useCallback(G__29176,G__29177);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,updater], null);
});

hx.hooks.useState.cljs$core$IFn$_invoke$arity$2 = (function (initial,eq_QMARK_){
var vec__29178 = module$node_modules$react$index.useState(initial);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29178,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29178,(1),null);
var updater = (function (){var G__29181 = ((function (vec__29178,v,u){
return (function() {
var hx$hooks$updater = null;
var hx$hooks$updater__1 = (function (x){
if((!(cljs.core.ifn_QMARK_(x)))){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
} else {
var G__29183 = ((function (vec__29178,v,u){
return (function hx$hooks$updater_$_update(current_state){
var new_state = (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(current_state) : x.call(null,current_state));
if(cljs.core.truth_((eq_QMARK_.cljs$core$IFn$_invoke$arity$2 ? eq_QMARK_.cljs$core$IFn$_invoke$arity$2(current_state,new_state) : eq_QMARK_.call(null,current_state,new_state)))){
return current_state;
} else {
return new_state;
}
});})(vec__29178,v,u))
;
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__29183) : u.call(null,G__29183));
}
});
var hx$hooks$updater__2 = (function() { 
var G__29246__delegate = function (f,xs){
return hx$hooks$updater.cljs$core$IFn$_invoke$arity$1(((function (vec__29178,v,u){
return (function hx$hooks$updater_$_spread_updater(x){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,x,xs);
});})(vec__29178,v,u))
);
};
var G__29246 = function (f,var_args){
var xs = null;
if (arguments.length > 1) {
var G__29248__i = 0, G__29248__a = new Array(arguments.length -  1);
while (G__29248__i < G__29248__a.length) {G__29248__a[G__29248__i] = arguments[G__29248__i + 1]; ++G__29248__i;}
  xs = new cljs.core.IndexedSeq(G__29248__a,0,null);
} 
return G__29246__delegate.call(this,f,xs);};
G__29246.cljs$lang$maxFixedArity = 1;
G__29246.cljs$lang$applyTo = (function (arglist__29249){
var f = cljs.core.first(arglist__29249);
var xs = cljs.core.rest(arglist__29249);
return G__29246__delegate(f,xs);
});
G__29246.cljs$core$IFn$_invoke$arity$variadic = G__29246__delegate;
return G__29246;
})()
;
hx$hooks$updater = function(f,var_args){
var xs = var_args;
switch(arguments.length){
case 1:
return hx$hooks$updater__1.call(this,f);
default:
var G__29250 = null;
if (arguments.length > 1) {
var G__29251__i = 0, G__29251__a = new Array(arguments.length -  1);
while (G__29251__i < G__29251__a.length) {G__29251__a[G__29251__i] = arguments[G__29251__i + 1]; ++G__29251__i;}
G__29250 = new cljs.core.IndexedSeq(G__29251__a,0,null);
}
return hx$hooks$updater__2.cljs$core$IFn$_invoke$arity$variadic(f, G__29250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hx$hooks$updater.cljs$lang$maxFixedArity = 1;
hx$hooks$updater.cljs$lang$applyTo = hx$hooks$updater__2.cljs$lang$applyTo;
hx$hooks$updater.cljs$core$IFn$_invoke$arity$1 = hx$hooks$updater__1;
hx$hooks$updater.cljs$core$IFn$_invoke$arity$variadic = hx$hooks$updater__2.cljs$core$IFn$_invoke$arity$variadic;
return hx$hooks$updater;
})()
;})(vec__29178,v,u))
;
var G__29182 = [u];
return module$node_modules$react$index.useCallback(G__29181,G__29182);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,updater], null);
});

hx.hooks.useState.cljs$lang$maxFixedArity = 2;

/**
 * Takes an initial value. Returns an atom that will _NOT_ re-render component
 *   on change.
 */
hx.hooks.useIRef = (function hx$hooks$useIRef(initial){
var sentinel = (function (){var G__29184 = ({});
return module$node_modules$react$index.useRef(G__29184);
})();
var G__29185 = ((function (sentinel){
return (function (){
var x29187 = ({"current": initial});
x29187.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

x29187.cljs$core$IDeref$_deref$arity$1 = ((function (x29187,sentinel){
return (function (this$){
var this$__$1 = this;
return this$__$1.current;
});})(x29187,sentinel))
;

x29187.cljs$core$IReset$ = cljs.core.PROTOCOL_SENTINEL;

x29187.cljs$core$IReset$_reset_BANG_$arity$2 = ((function (x29187,sentinel){
return (function (this$,v){
var this$__$1 = this;
return goog.object.set(this$__$1,"current",v);
});})(x29187,sentinel))
;

x29187.cljs$core$ISwap$ = cljs.core.PROTOCOL_SENTINEL;

x29187.cljs$core$ISwap$_swap_BANG_$arity$2 = ((function (x29187,sentinel){
return (function (this$,f){
var this$__$1 = this;
var G__29188 = this$__$1;
var G__29189 = "current";
var G__29190 = (function (){var G__29191 = this$__$1.current;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__29191) : f.call(null,G__29191));
})();
return goog.object.set(G__29188,G__29189,G__29190);
});})(x29187,sentinel))
;

x29187.cljs$core$ISwap$_swap_BANG_$arity$3 = ((function (x29187,sentinel){
return (function (this$,f,a){
var this$__$1 = this;
var G__29192 = this$__$1;
var G__29193 = "current";
var G__29194 = (function (){var G__29195 = this$__$1.current;
var G__29196 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__29195,G__29196) : f.call(null,G__29195,G__29196));
})();
return goog.object.set(G__29192,G__29193,G__29194);
});})(x29187,sentinel))
;

x29187.cljs$core$ISwap$_swap_BANG_$arity$4 = ((function (x29187,sentinel){
return (function (this$,f,a,b){
var this$__$1 = this;
var G__29197 = this$__$1;
var G__29198 = "current";
var G__29199 = (function (){var G__29200 = this$__$1.current;
var G__29201 = a;
var G__29202 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__29200,G__29201,G__29202) : f.call(null,G__29200,G__29201,G__29202));
})();
return goog.object.set(G__29197,G__29198,G__29199);
});})(x29187,sentinel))
;

x29187.cljs$core$ISwap$_swap_BANG_$arity$5 = ((function (x29187,sentinel){
return (function (this$,f,a,b,xs){
var this$__$1 = this;
var G__29203 = this$__$1;
var G__29204 = "current";
var G__29205 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.current,a,b,xs);
return goog.object.set(G__29203,G__29204,G__29205);
});})(x29187,sentinel))
;

return x29187;
});})(sentinel))
;
var G__29186 = [sentinel];
return module$node_modules$react$index.useMemo(G__29185,G__29186);
});
/**
 * Just react/useReducer.
 */
hx.hooks.useReducer = (function hx$hooks$useReducer(var_args){
var G__29207 = arguments.length;
switch (G__29207) {
case 2:
return hx.hooks.useReducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hx.hooks.useReducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hx.hooks.useReducer.cljs$core$IFn$_invoke$arity$2 = (function (reducer,init_state){
return hx.hooks.useReducer.cljs$core$IFn$_invoke$arity$3(reducer,init_state,undefined);
});

hx.hooks.useReducer.cljs$core$IFn$_invoke$arity$3 = (function (reducer,init_state,init){
var G__29208 = (function (){var G__29211 = (function (){
if((((!(cljs.core.fn_QMARK_(reducer)))) && (cljs.core.ifn_QMARK_(reducer)))){
return (function hx$hooks$wrap_ifn(state,action){
return (reducer.cljs$core$IFn$_invoke$arity$2 ? reducer.cljs$core$IFn$_invoke$arity$2(state,action) : reducer.call(null,state,action));
});
} else {
return reducer;
}
});
var G__29212 = [reducer];
return module$node_modules$react$index.useMemo(G__29211,G__29212);
})();
var G__29209 = init_state;
var G__29210 = init;
return module$node_modules$react$index.useReducer(G__29208,G__29209,G__29210);
});

hx.hooks.useReducer.cljs$lang$maxFixedArity = 3;

/**
 * Caches `x`. When a new `x` is passed in, returns new `x` only if it is
 *   not structurally equal to the previous `x`.
 * 
 *   Useful for optimizing `<-effect` et. al. when you have two values that might
 *   be structurally equal by referentially different.
 */
hx.hooks.useValue = (function hx$hooks$useValue(x){
var _x = module$node_modules$react$index.useRef(x);
var x_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,_x.current))?_x.current:x);
var G__29213_29265 = ((function (x_SINGLEQUOTE_,_x){
return (function (){
_x.current = x;

return undefined;
});})(x_SINGLEQUOTE_,_x))
;
var G__29214_29266 = [x_SINGLEQUOTE_];
module$node_modules$react$index.useEffect(G__29213_29265,G__29214_29266);

return x_SINGLEQUOTE_;
});
hx.hooks.wrap_fx = (function hx$hooks$wrap_fx(f){
return (function hx$hooks$wrap_fx_$_wrap_fx_return(){
var x = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(x)){
return x;
} else {
return undefined;
}
});
});
/**
 * Just react/useEffect
 */
hx.hooks.useEffect = (function hx$hooks$useEffect(var_args){
var G__29216 = arguments.length;
switch (G__29216) {
case 1:
return hx.hooks.useEffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hx.hooks.useEffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hx.hooks.useEffect.cljs$core$IFn$_invoke$arity$1 = (function (f){
var G__29217 = hx.hooks.wrap_fx(f);
return module$node_modules$react$index.useEffect(G__29217);
});

hx.hooks.useEffect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
var G__29218 = hx.hooks.wrap_fx(f);
var G__29219 = cljs.core.to_array(deps);
return module$node_modules$react$index.useEffect(G__29218,G__29219);
});

hx.hooks.useEffect.cljs$lang$maxFixedArity = 2;

/**
 * Just react/useContext
 */
hx.hooks.useContext = module$node_modules$react$index.useContext;
/**
 * Just react/useMemo
 */
hx.hooks.useMemo = module$node_modules$react$index.useMemo;
/**
 * Just react/useCallback
 */
hx.hooks.useCallback = (function hx$hooks$useCallback(var_args){
var G__29221 = arguments.length;
switch (G__29221) {
case 1:
return hx.hooks.useCallback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hx.hooks.useCallback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hx.hooks.useCallback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useCallback(f);
});

hx.hooks.useCallback.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
var G__29222 = f;
var G__29223 = cljs.core.to_array(deps);
return module$node_modules$react$index.useCallback(G__29222,G__29223);
});

hx.hooks.useCallback.cljs$lang$maxFixedArity = 2;

/**
 * Just react/useImperativeHandle
 */
hx.hooks.useImperativeHandle = (function hx$hooks$useImperativeHandle(var_args){
var G__29225 = arguments.length;
switch (G__29225) {
case 2:
return hx.hooks.useImperativeHandle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hx.hooks.useImperativeHandle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hx.hooks.useImperativeHandle.cljs$core$IFn$_invoke$arity$2 = (function (ref,create_handle){
return module$node_modules$react$index.useImperativeHandle(ref,create_handle);
});

hx.hooks.useImperativeHandle.cljs$core$IFn$_invoke$arity$3 = (function (ref,create_handle,deps){
var G__29226 = ref;
var G__29227 = create_handle;
var G__29228 = cljs.core.to_array(deps);
return module$node_modules$react$index.useImperativeHandle(G__29226,G__29227,G__29228);
});

hx.hooks.useImperativeHandle.cljs$lang$maxFixedArity = 3;

/**
 * Just react/useLayoutEffect
 */
hx.hooks.useLayoutEffect = (function hx$hooks$useLayoutEffect(var_args){
var G__29230 = arguments.length;
switch (G__29230) {
case 1:
return hx.hooks.useLayoutEffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hx.hooks.useLayoutEffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hx.hooks.useLayoutEffect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useLayoutEffect(f);
});

hx.hooks.useLayoutEffect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
var G__29231 = f;
var G__29232 = cljs.core.to_array(deps);
return module$node_modules$react$index.useLayoutEffect(G__29231,G__29232);
});

hx.hooks.useLayoutEffect.cljs$lang$maxFixedArity = 2;

/**
 * Just react/useDebugValue
 */
hx.hooks.useDebugValue = module$node_modules$react$index.useDebugValue;
hx.hooks._LT__state = hx.hooks.useState;
hx.hooks._LT__ref = hx.hooks.useIRef;
/**
 * Takes an atom. Returns the currently derefed value of the atom, and re-renders
 *   the component on change.
 */
hx.hooks._LT__deref = (function hx$hooks$_LT__deref(a){
var vec__29233 = (function (){var G__29236 = cljs.core.deref(a);
return module$node_modules$react$index.useState(G__29236);
})();
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29233,(0),null);
var u = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29233,(1),null);
var G__29237_29286 = ((function (vec__29233,v,u){
return (function (){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("<-deref");
cljs.core.add_watch(a,k,((function (k,vec__29233,v,u){
return (function (_,___$1,___$2,v_SINGLEQUOTE_){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(v_SINGLEQUOTE_) : u.call(null,v_SINGLEQUOTE_));
});})(k,vec__29233,v,u))
);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),v)){
var G__29239_29289 = cljs.core.deref(a);
(u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__29239_29289) : u.call(null,G__29239_29289));
} else {
}

return ((function (k,vec__29233,v,u){
return (function (){
return cljs.core.remove_watch(a,k);
});
;})(k,vec__29233,v,u))
});})(vec__29233,v,u))
;
var G__29238_29287 = [a];
module$node_modules$react$index.useEffect(G__29237_29286,G__29238_29287);

return v;
});
hx.hooks._LT__effect = hx.hooks.useEffect;
/**
 * Just react/useReducer.
 */
hx.hooks._LT__reducer = hx.hooks.useReducer;
hx.hooks._LT__value = hx.hooks.useValue;
/**
 * Just react/useContext
 */
hx.hooks._LT__context = module$node_modules$react$index.useContext;
/**
 * Just react/useMemo
 */
hx.hooks._LT__memo = module$node_modules$react$index.useMemo;
hx.hooks._LT__callback = hx.hooks.useCallback;
hx.hooks._LT__imperative_handle = hx.hooks.useImperativeHandle;
/**
 * Just react/useDebugValue
 */
hx.hooks._LT__debug_value = module$node_modules$react$index.useDebugValue;
hx.hooks._LT__layout_effect = hx.hooks.useLayoutEffect;

//# sourceMappingURL=hx.hooks.js.map
