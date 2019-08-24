goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31228){
var map__31229 = p__31228;
var map__31229__$1 = (((((!((map__31229 == null))))?(((((map__31229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31229):map__31229);
var m = map__31229__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31229__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31231_31357 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31232_31358 = null;
var count__31233_31359 = (0);
var i__31234_31360 = (0);
while(true){
if((i__31234_31360 < count__31233_31359)){
var f_31361 = chunk__31232_31358.cljs$core$IIndexed$_nth$arity$2(null,i__31234_31360);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31361], 0));


var G__31362 = seq__31231_31357;
var G__31363 = chunk__31232_31358;
var G__31364 = count__31233_31359;
var G__31365 = (i__31234_31360 + (1));
seq__31231_31357 = G__31362;
chunk__31232_31358 = G__31363;
count__31233_31359 = G__31364;
i__31234_31360 = G__31365;
continue;
} else {
var temp__5735__auto___31366 = cljs.core.seq(seq__31231_31357);
if(temp__5735__auto___31366){
var seq__31231_31367__$1 = temp__5735__auto___31366;
if(cljs.core.chunked_seq_QMARK_(seq__31231_31367__$1)){
var c__4550__auto___31368 = cljs.core.chunk_first(seq__31231_31367__$1);
var G__31369 = cljs.core.chunk_rest(seq__31231_31367__$1);
var G__31370 = c__4550__auto___31368;
var G__31371 = cljs.core.count(c__4550__auto___31368);
var G__31372 = (0);
seq__31231_31357 = G__31369;
chunk__31232_31358 = G__31370;
count__31233_31359 = G__31371;
i__31234_31360 = G__31372;
continue;
} else {
var f_31373 = cljs.core.first(seq__31231_31367__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_31373], 0));


var G__31374 = cljs.core.next(seq__31231_31367__$1);
var G__31375 = null;
var G__31376 = (0);
var G__31377 = (0);
seq__31231_31357 = G__31374;
chunk__31232_31358 = G__31375;
count__31233_31359 = G__31376;
i__31234_31360 = G__31377;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31378 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_31378], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_31378)))?cljs.core.second(arglists_31378):arglists_31378)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31235_31388 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31236_31389 = null;
var count__31237_31390 = (0);
var i__31238_31391 = (0);
while(true){
if((i__31238_31391 < count__31237_31390)){
var vec__31249_31392 = chunk__31236_31389.cljs$core$IIndexed$_nth$arity$2(null,i__31238_31391);
var name_31393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31249_31392,(0),null);
var map__31252_31394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31249_31392,(1),null);
var map__31252_31395__$1 = (((((!((map__31252_31394 == null))))?(((((map__31252_31394.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31252_31394.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31252_31394):map__31252_31394);
var doc_31396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31252_31395__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31252_31395__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31393], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31397], 0));

if(cljs.core.truth_(doc_31396)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31396], 0));
} else {
}


var G__31398 = seq__31235_31388;
var G__31399 = chunk__31236_31389;
var G__31400 = count__31237_31390;
var G__31401 = (i__31238_31391 + (1));
seq__31235_31388 = G__31398;
chunk__31236_31389 = G__31399;
count__31237_31390 = G__31400;
i__31238_31391 = G__31401;
continue;
} else {
var temp__5735__auto___31402 = cljs.core.seq(seq__31235_31388);
if(temp__5735__auto___31402){
var seq__31235_31403__$1 = temp__5735__auto___31402;
if(cljs.core.chunked_seq_QMARK_(seq__31235_31403__$1)){
var c__4550__auto___31404 = cljs.core.chunk_first(seq__31235_31403__$1);
var G__31405 = cljs.core.chunk_rest(seq__31235_31403__$1);
var G__31406 = c__4550__auto___31404;
var G__31407 = cljs.core.count(c__4550__auto___31404);
var G__31408 = (0);
seq__31235_31388 = G__31405;
chunk__31236_31389 = G__31406;
count__31237_31390 = G__31407;
i__31238_31391 = G__31408;
continue;
} else {
var vec__31254_31409 = cljs.core.first(seq__31235_31403__$1);
var name_31410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31254_31409,(0),null);
var map__31257_31411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31254_31409,(1),null);
var map__31257_31412__$1 = (((((!((map__31257_31411 == null))))?(((((map__31257_31411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31257_31411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31257_31411):map__31257_31411);
var doc_31413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31257_31412__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31257_31412__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_31410], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_31414], 0));

if(cljs.core.truth_(doc_31413)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_31413], 0));
} else {
}


var G__31419 = cljs.core.next(seq__31235_31403__$1);
var G__31420 = null;
var G__31421 = (0);
var G__31422 = (0);
seq__31235_31388 = G__31419;
chunk__31236_31389 = G__31420;
count__31237_31390 = G__31421;
i__31238_31391 = G__31422;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31259 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31260 = null;
var count__31261 = (0);
var i__31262 = (0);
while(true){
if((i__31262 < count__31261)){
var role = chunk__31260.cljs$core$IIndexed$_nth$arity$2(null,i__31262);
var temp__5735__auto___31436__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31436__$1)){
var spec_31437 = temp__5735__auto___31436__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31437)], 0));
} else {
}


var G__31438 = seq__31259;
var G__31439 = chunk__31260;
var G__31440 = count__31261;
var G__31441 = (i__31262 + (1));
seq__31259 = G__31438;
chunk__31260 = G__31439;
count__31261 = G__31440;
i__31262 = G__31441;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__31259);
if(temp__5735__auto____$1){
var seq__31259__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31259__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31259__$1);
var G__31442 = cljs.core.chunk_rest(seq__31259__$1);
var G__31443 = c__4550__auto__;
var G__31444 = cljs.core.count(c__4550__auto__);
var G__31445 = (0);
seq__31259 = G__31442;
chunk__31260 = G__31443;
count__31261 = G__31444;
i__31262 = G__31445;
continue;
} else {
var role = cljs.core.first(seq__31259__$1);
var temp__5735__auto___31446__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31446__$2)){
var spec_31447 = temp__5735__auto___31446__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_31447)], 0));
} else {
}


var G__31448 = cljs.core.next(seq__31259__$1);
var G__31449 = null;
var G__31450 = (0);
var G__31451 = (0);
seq__31259 = G__31448;
chunk__31260 = G__31449;
count__31261 = G__31450;
i__31262 = G__31451;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31453 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__31454 = cljs.core.ex_cause(t);
via = G__31453;
t = G__31454;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31274 = datafied_throwable;
var map__31274__$1 = (((((!((map__31274 == null))))?(((((map__31274.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31274.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31274):map__31274);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31274__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31274__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31274__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31275 = cljs.core.last(via);
var map__31275__$1 = (((((!((map__31275 == null))))?(((((map__31275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31275):map__31275);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31275__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31275__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31275__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31276 = data;
var map__31276__$1 = (((((!((map__31276 == null))))?(((((map__31276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31276):map__31276);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31276__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31276__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31276__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31277 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31277__$1 = (((((!((map__31277 == null))))?(((((map__31277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31277):map__31277);
var top_data = map__31277__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31277__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31282 = phase;
var G__31282__$1 = (((G__31282 instanceof cljs.core.Keyword))?G__31282.fqn:null);
switch (G__31282__$1) {
case "read-source":
var map__31283 = data;
var map__31283__$1 = (((((!((map__31283 == null))))?(((((map__31283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31283):map__31283);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31283__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31283__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31285 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31285__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31285,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31285);
var G__31285__$2 = (cljs.core.truth_((function (){var fexpr__31286 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31286.cljs$core$IFn$_invoke$arity$1 ? fexpr__31286.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31286.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31285__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31285__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31285__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31285__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31287 = top_data;
var G__31287__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31287,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31287);
var G__31287__$2 = (cljs.core.truth_((function (){var fexpr__31288 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31288.cljs$core$IFn$_invoke$arity$1 ? fexpr__31288.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31288.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31287__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31287__$1);
var G__31287__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31287__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31287__$2);
var G__31287__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31287__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31287__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31287__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31287__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31289 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31289,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31289,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31289,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31289,(3),null);
var G__31292 = top_data;
var G__31292__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31292,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31292);
var G__31292__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31292__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31292__$1);
var G__31292__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31292__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31292__$2);
var G__31292__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31292__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31292__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31292__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31292__$4;
}

break;
case "execution":
var vec__31293 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31293,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31293,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31293,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31293,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__31293,source__$1,method,file,line,G__31282,G__31282__$1,map__31274,map__31274__$1,via,trace,phase,map__31275,map__31275__$1,type,message,data,map__31276,map__31276__$1,problems,fn,caller,map__31277,map__31277__$1,top_data,source){
return (function (p1__31273_SHARP_){
var or__4131__auto__ = (p1__31273_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__31300 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31300.cljs$core$IFn$_invoke$arity$1 ? fexpr__31300.cljs$core$IFn$_invoke$arity$1(p1__31273_SHARP_) : fexpr__31300.call(null,p1__31273_SHARP_));
}
});})(vec__31293,source__$1,method,file,line,G__31282,G__31282__$1,map__31274,map__31274__$1,via,trace,phase,map__31275,map__31275__$1,type,message,data,map__31276,map__31276__$1,problems,fn,caller,map__31277,map__31277__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__31301 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31301__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31301,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31301);
var G__31301__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31301__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31301__$1);
var G__31301__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31301__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31301__$2);
var G__31301__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31301__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31301__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31301__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31301__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31282__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31304){
var map__31305 = p__31304;
var map__31305__$1 = (((((!((map__31305 == null))))?(((((map__31305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31305):map__31305);
var triage_data = map__31305__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31305__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31305__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31305__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31305__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31305__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31305__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31305__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31305__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31307 = phase;
var G__31307__$1 = (((G__31307 instanceof cljs.core.Keyword))?G__31307.fqn:null);
switch (G__31307__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31308 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31309 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31310 = loc;
var G__31311 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31312_31457 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31313_31458 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31314_31459 = true;
var _STAR_print_fn_STAR__temp_val__31315_31460 = ((function (_STAR_print_newline_STAR__orig_val__31312_31457,_STAR_print_fn_STAR__orig_val__31313_31458,_STAR_print_newline_STAR__temp_val__31314_31459,sb__4661__auto__,G__31308,G__31309,G__31310,G__31307,G__31307__$1,loc,class_name,simple_class,cause_type,format,map__31305,map__31305__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31312_31457,_STAR_print_fn_STAR__orig_val__31313_31458,_STAR_print_newline_STAR__temp_val__31314_31459,sb__4661__auto__,G__31308,G__31309,G__31310,G__31307,G__31307__$1,loc,class_name,simple_class,cause_type,format,map__31305,map__31305__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31314_31459;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31315_31460;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31312_31457,_STAR_print_fn_STAR__orig_val__31313_31458,_STAR_print_newline_STAR__temp_val__31314_31459,_STAR_print_fn_STAR__temp_val__31315_31460,sb__4661__auto__,G__31308,G__31309,G__31310,G__31307,G__31307__$1,loc,class_name,simple_class,cause_type,format,map__31305,map__31305__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31312_31457,_STAR_print_fn_STAR__orig_val__31313_31458,_STAR_print_newline_STAR__temp_val__31314_31459,_STAR_print_fn_STAR__temp_val__31315_31460,sb__4661__auto__,G__31308,G__31309,G__31310,G__31307,G__31307__$1,loc,class_name,simple_class,cause_type,format,map__31305,map__31305__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31302_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31302_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31312_31457,_STAR_print_fn_STAR__orig_val__31313_31458,_STAR_print_newline_STAR__temp_val__31314_31459,_STAR_print_fn_STAR__temp_val__31315_31460,sb__4661__auto__,G__31308,G__31309,G__31310,G__31307,G__31307__$1,loc,class_name,simple_class,cause_type,format,map__31305,map__31305__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31312_31457,_STAR_print_fn_STAR__orig_val__31313_31458,_STAR_print_newline_STAR__temp_val__31314_31459,_STAR_print_fn_STAR__temp_val__31315_31460,sb__4661__auto__,G__31308,G__31309,G__31310,G__31307,G__31307__$1,loc,class_name,simple_class,cause_type,format,map__31305,map__31305__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31313_31458;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31312_31457;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31308,G__31309,G__31310,G__31311) : format.call(null,G__31308,G__31309,G__31310,G__31311));

break;
case "macroexpansion":
var G__31316 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31317 = cause_type;
var G__31318 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31319 = loc;
var G__31320 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31316,G__31317,G__31318,G__31319,G__31320) : format.call(null,G__31316,G__31317,G__31318,G__31319,G__31320));

break;
case "compile-syntax-check":
var G__31321 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31322 = cause_type;
var G__31323 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31324 = loc;
var G__31325 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31321,G__31322,G__31323,G__31324,G__31325) : format.call(null,G__31321,G__31322,G__31323,G__31324,G__31325));

break;
case "compilation":
var G__31326 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31327 = cause_type;
var G__31328 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31329 = loc;
var G__31330 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31326,G__31327,G__31328,G__31329,G__31330) : format.call(null,G__31326,G__31327,G__31328,G__31329,G__31330));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31331 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31332 = symbol;
var G__31333 = loc;
var G__31334 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31335_31461 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31336_31462 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31337_31463 = true;
var _STAR_print_fn_STAR__temp_val__31338_31464 = ((function (_STAR_print_newline_STAR__orig_val__31335_31461,_STAR_print_fn_STAR__orig_val__31336_31462,_STAR_print_newline_STAR__temp_val__31337_31463,sb__4661__auto__,G__31331,G__31332,G__31333,G__31307,G__31307__$1,loc,class_name,simple_class,cause_type,format,map__31305,map__31305__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__31335_31461,_STAR_print_fn_STAR__orig_val__31336_31462,_STAR_print_newline_STAR__temp_val__31337_31463,sb__4661__auto__,G__31331,G__31332,G__31333,G__31307,G__31307__$1,loc,class_name,simple_class,cause_type,format,map__31305,map__31305__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31337_31463;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31338_31464;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__31335_31461,_STAR_print_fn_STAR__orig_val__31336_31462,_STAR_print_newline_STAR__temp_val__31337_31463,_STAR_print_fn_STAR__temp_val__31338_31464,sb__4661__auto__,G__31331,G__31332,G__31333,G__31307,G__31307__$1,loc,class_name,simple_class,cause_type,format,map__31305,map__31305__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__31335_31461,_STAR_print_fn_STAR__orig_val__31336_31462,_STAR_print_newline_STAR__temp_val__31337_31463,_STAR_print_fn_STAR__temp_val__31338_31464,sb__4661__auto__,G__31331,G__31332,G__31333,G__31307,G__31307__$1,loc,class_name,simple_class,cause_type,format,map__31305,map__31305__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__31303_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31303_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__31335_31461,_STAR_print_fn_STAR__orig_val__31336_31462,_STAR_print_newline_STAR__temp_val__31337_31463,_STAR_print_fn_STAR__temp_val__31338_31464,sb__4661__auto__,G__31331,G__31332,G__31333,G__31307,G__31307__$1,loc,class_name,simple_class,cause_type,format,map__31305,map__31305__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__31335_31461,_STAR_print_fn_STAR__orig_val__31336_31462,_STAR_print_newline_STAR__temp_val__31337_31463,_STAR_print_fn_STAR__temp_val__31338_31464,sb__4661__auto__,G__31331,G__31332,G__31333,G__31307,G__31307__$1,loc,class_name,simple_class,cause_type,format,map__31305,map__31305__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31336_31462;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31335_31461;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31331,G__31332,G__31333,G__31334) : format.call(null,G__31331,G__31332,G__31333,G__31334));
} else {
var G__31342 = "Execution error%s at %s(%s).\n%s\n";
var G__31343 = cause_type;
var G__31344 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31345 = loc;
var G__31346 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31342,G__31343,G__31344,G__31345,G__31346) : format.call(null,G__31342,G__31343,G__31344,G__31345,G__31346));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31307__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
