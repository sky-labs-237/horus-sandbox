goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__37214__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37214 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37215__i = 0, G__37215__a = new Array(arguments.length -  0);
while (G__37215__i < G__37215__a.length) {G__37215__a[G__37215__i] = arguments[G__37215__i + 0]; ++G__37215__i;}
  args = new cljs.core.IndexedSeq(G__37215__a,0,null);
} 
return G__37214__delegate.call(this,args);};
G__37214.cljs$lang$maxFixedArity = 0;
G__37214.cljs$lang$applyTo = (function (arglist__37216){
var args = cljs.core.seq(arglist__37216);
return G__37214__delegate(args);
});
G__37214.cljs$core$IFn$_invoke$arity$variadic = G__37214__delegate;
return G__37214;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__37217__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__37217 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37218__i = 0, G__37218__a = new Array(arguments.length -  0);
while (G__37218__i < G__37218__a.length) {G__37218__a[G__37218__i] = arguments[G__37218__i + 0]; ++G__37218__i;}
  args = new cljs.core.IndexedSeq(G__37218__a,0,null);
} 
return G__37217__delegate.call(this,args);};
G__37217.cljs$lang$maxFixedArity = 0;
G__37217.cljs$lang$applyTo = (function (arglist__37219){
var args = cljs.core.seq(arglist__37219);
return G__37217__delegate(args);
});
G__37217.cljs$core$IFn$_invoke$arity$variadic = G__37217__delegate;
return G__37217;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
