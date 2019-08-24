goog.provide('hx.hooks.alpha');
goog.require('cljs.core');
goog.require('hx.hooks');
if((typeof hx !== 'undefined') && (typeof hx.hooks !== 'undefined') && (typeof hx.hooks.alpha !== 'undefined') && (typeof hx.hooks.alpha.states !== 'undefined')){
} else {
hx.hooks.alpha.states = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Like useState, but maintains your state across hot-reloads. `k` is a globally
 *   unique key to ensure you always get the same state back.
 * 
 *   Example: `(useStateOnce 0 ::counter)`
 */
hx.hooks.alpha.useStateOnce = (function hx$hooks$alpha$useStateOnce(initial,k){
var hook = hx.hooks.useState.cljs$core$IFn$_invoke$arity$1(((cljs.core.contains_QMARK_(cljs.core.deref(hx.hooks.alpha.states),k))?(function (){var fexpr__29288 = cljs.core.deref(hx.hooks.alpha.states);
return (fexpr__29288.cljs$core$IFn$_invoke$arity$1 ? fexpr__29288.cljs$core$IFn$_invoke$arity$1(k) : fexpr__29288.call(null,k));
})():initial));
var has_mounted_QMARK_ = hx.hooks.useIRef(false);
hx.hooks.useEffect.cljs$core$IFn$_invoke$arity$2(((function (hook,has_mounted_QMARK_){
return (function (){
if(cljs.core.truth_(cljs.core.deref(has_mounted_QMARK_))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hx.hooks.alpha.states,cljs.core.assoc,k,cljs.core.first(hook));
} else {
return cljs.core.reset_BANG_(has_mounted_QMARK_,true);
}
});})(hook,has_mounted_QMARK_))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(hook)], null));

return hook;
});
/**
 * Like useReducer, but maintains your state across hot-reloads. `k` is a globally
 *   unique key to ensure you always get the same state back.
 * 
 *   Example: `(useReducerOnce reducer initial ::counter)`
 */
hx.hooks.alpha.useReducerOnce = (function hx$hooks$alpha$useReducerOnce(reducer,initial,k){
var hook = hx.hooks.useReducer.cljs$core$IFn$_invoke$arity$2(reducer,((cljs.core.contains_QMARK_(cljs.core.deref(hx.hooks.alpha.states),k))?(function (){var fexpr__29290 = cljs.core.deref(hx.hooks.alpha.states);
return (fexpr__29290.cljs$core$IFn$_invoke$arity$1 ? fexpr__29290.cljs$core$IFn$_invoke$arity$1(k) : fexpr__29290.call(null,k));
})():initial));
var has_mounted_QMARK__29296 = hx.hooks.useIRef(false);
hx.hooks.useEffect.cljs$core$IFn$_invoke$arity$2(((function (has_mounted_QMARK__29296,hook){
return (function (){
if(cljs.core.truth_(cljs.core.deref(has_mounted_QMARK__29296))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hx.hooks.alpha.states,cljs.core.assoc,k,cljs.core.first(hook));
} else {
return cljs.core.reset_BANG_(has_mounted_QMARK__29296,true);
}
});})(has_mounted_QMARK__29296,hook))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(hook)], null));

return hook;
});

//# sourceMappingURL=hx.hooks.alpha.js.map
