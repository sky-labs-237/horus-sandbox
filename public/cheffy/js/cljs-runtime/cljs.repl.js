goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36637){
var map__36638 = p__36637;
var map__36638__$1 = (((((!((map__36638 == null))))?(((((map__36638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36638):map__36638);
var m = map__36638__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36638__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36638__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36640_36747 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36641_36748 = null;
var count__36642_36749 = (0);
var i__36643_36750 = (0);
while(true){
if((i__36643_36750 < count__36642_36749)){
var f_36761 = chunk__36641_36748.cljs$core$IIndexed$_nth$arity$2(null,i__36643_36750);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36761], 0));


var G__36768 = seq__36640_36747;
var G__36769 = chunk__36641_36748;
var G__36770 = count__36642_36749;
var G__36771 = (i__36643_36750 + (1));
seq__36640_36747 = G__36768;
chunk__36641_36748 = G__36769;
count__36642_36749 = G__36770;
i__36643_36750 = G__36771;
continue;
} else {
var temp__5735__auto___36774 = cljs.core.seq(seq__36640_36747);
if(temp__5735__auto___36774){
var seq__36640_36775__$1 = temp__5735__auto___36774;
if(cljs.core.chunked_seq_QMARK_(seq__36640_36775__$1)){
var c__4550__auto___36776 = cljs.core.chunk_first(seq__36640_36775__$1);
var G__36777 = cljs.core.chunk_rest(seq__36640_36775__$1);
var G__36778 = c__4550__auto___36776;
var G__36779 = cljs.core.count(c__4550__auto___36776);
var G__36780 = (0);
seq__36640_36747 = G__36777;
chunk__36641_36748 = G__36778;
count__36642_36749 = G__36779;
i__36643_36750 = G__36780;
continue;
} else {
var f_36781 = cljs.core.first(seq__36640_36775__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36781], 0));


var G__36782 = cljs.core.next(seq__36640_36775__$1);
var G__36783 = null;
var G__36784 = (0);
var G__36785 = (0);
seq__36640_36747 = G__36782;
chunk__36641_36748 = G__36783;
count__36642_36749 = G__36784;
i__36643_36750 = G__36785;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36786 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36786], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36786)))?cljs.core.second(arglists_36786):arglists_36786)], 0));
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
var seq__36644_36787 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36645_36788 = null;
var count__36646_36789 = (0);
var i__36647_36790 = (0);
while(true){
if((i__36647_36790 < count__36646_36789)){
var vec__36661_36791 = chunk__36645_36788.cljs$core$IIndexed$_nth$arity$2(null,i__36647_36790);
var name_36792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36661_36791,(0),null);
var map__36664_36793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36661_36791,(1),null);
var map__36664_36794__$1 = (((((!((map__36664_36793 == null))))?(((((map__36664_36793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36664_36793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36664_36793):map__36664_36793);
var doc_36795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36664_36794__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36664_36794__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36792], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36796], 0));

if(cljs.core.truth_(doc_36795)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36795], 0));
} else {
}


var G__36798 = seq__36644_36787;
var G__36799 = chunk__36645_36788;
var G__36800 = count__36646_36789;
var G__36801 = (i__36647_36790 + (1));
seq__36644_36787 = G__36798;
chunk__36645_36788 = G__36799;
count__36646_36789 = G__36800;
i__36647_36790 = G__36801;
continue;
} else {
var temp__5735__auto___36802 = cljs.core.seq(seq__36644_36787);
if(temp__5735__auto___36802){
var seq__36644_36803__$1 = temp__5735__auto___36802;
if(cljs.core.chunked_seq_QMARK_(seq__36644_36803__$1)){
var c__4550__auto___36804 = cljs.core.chunk_first(seq__36644_36803__$1);
var G__36805 = cljs.core.chunk_rest(seq__36644_36803__$1);
var G__36806 = c__4550__auto___36804;
var G__36807 = cljs.core.count(c__4550__auto___36804);
var G__36808 = (0);
seq__36644_36787 = G__36805;
chunk__36645_36788 = G__36806;
count__36646_36789 = G__36807;
i__36647_36790 = G__36808;
continue;
} else {
var vec__36669_36809 = cljs.core.first(seq__36644_36803__$1);
var name_36810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36669_36809,(0),null);
var map__36672_36811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36669_36809,(1),null);
var map__36672_36812__$1 = (((((!((map__36672_36811 == null))))?(((((map__36672_36811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36672_36811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36672_36811):map__36672_36811);
var doc_36813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36672_36812__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36672_36812__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36810], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36814], 0));

if(cljs.core.truth_(doc_36813)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36813], 0));
} else {
}


var G__36815 = cljs.core.next(seq__36644_36803__$1);
var G__36816 = null;
var G__36817 = (0);
var G__36818 = (0);
seq__36644_36787 = G__36815;
chunk__36645_36788 = G__36816;
count__36646_36789 = G__36817;
i__36647_36790 = G__36818;
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

var seq__36674 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36675 = null;
var count__36676 = (0);
var i__36677 = (0);
while(true){
if((i__36677 < count__36676)){
var role = chunk__36675.cljs$core$IIndexed$_nth$arity$2(null,i__36677);
var temp__5735__auto___36831__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36831__$1)){
var spec_36832 = temp__5735__auto___36831__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36832)], 0));
} else {
}


var G__36833 = seq__36674;
var G__36834 = chunk__36675;
var G__36835 = count__36676;
var G__36836 = (i__36677 + (1));
seq__36674 = G__36833;
chunk__36675 = G__36834;
count__36676 = G__36835;
i__36677 = G__36836;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__36674);
if(temp__5735__auto____$1){
var seq__36674__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36674__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36674__$1);
var G__36837 = cljs.core.chunk_rest(seq__36674__$1);
var G__36838 = c__4550__auto__;
var G__36839 = cljs.core.count(c__4550__auto__);
var G__36840 = (0);
seq__36674 = G__36837;
chunk__36675 = G__36838;
count__36676 = G__36839;
i__36677 = G__36840;
continue;
} else {
var role = cljs.core.first(seq__36674__$1);
var temp__5735__auto___36841__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___36841__$2)){
var spec_36842 = temp__5735__auto___36841__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36842)], 0));
} else {
}


var G__36843 = cljs.core.next(seq__36674__$1);
var G__36844 = null;
var G__36845 = (0);
var G__36846 = (0);
seq__36674 = G__36843;
chunk__36675 = G__36844;
count__36676 = G__36845;
i__36677 = G__36846;
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
var G__36851 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36852 = cljs.core.ex_cause(t);
via = G__36851;
t = G__36852;
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
var map__36680 = datafied_throwable;
var map__36680__$1 = (((((!((map__36680 == null))))?(((((map__36680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36680):map__36680);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36680__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36680__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36680__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36681 = cljs.core.last(via);
var map__36681__$1 = (((((!((map__36681 == null))))?(((((map__36681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36681):map__36681);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36681__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36681__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36681__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36682 = data;
var map__36682__$1 = (((((!((map__36682 == null))))?(((((map__36682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36682):map__36682);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36682__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36682__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36682__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36683 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36683__$1 = (((((!((map__36683 == null))))?(((((map__36683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36683):map__36683);
var top_data = map__36683__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36683__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36688 = phase;
var G__36688__$1 = (((G__36688 instanceof cljs.core.Keyword))?G__36688.fqn:null);
switch (G__36688__$1) {
case "read-source":
var map__36689 = data;
var map__36689__$1 = (((((!((map__36689 == null))))?(((((map__36689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36689):map__36689);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36689__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36689__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36691 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36691__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36691,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36691);
var G__36691__$2 = (cljs.core.truth_((function (){var fexpr__36692 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36692.cljs$core$IFn$_invoke$arity$1 ? fexpr__36692.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36692.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36691__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36691__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36691__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36691__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36693 = top_data;
var G__36693__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36693,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36693);
var G__36693__$2 = (cljs.core.truth_((function (){var fexpr__36694 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36694.cljs$core$IFn$_invoke$arity$1 ? fexpr__36694.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36694.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36693__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36693__$1);
var G__36693__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36693__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36693__$2);
var G__36693__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36693__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36693__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36693__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36693__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36695 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36695,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36695,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36695,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36695,(3),null);
var G__36698 = top_data;
var G__36698__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36698,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36698);
var G__36698__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36698__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36698__$1);
var G__36698__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36698__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36698__$2);
var G__36698__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36698__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36698__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36698__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36698__$4;
}

break;
case "execution":
var vec__36699 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36699,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36699,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36699,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36699,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__36699,source__$1,method,file,line,G__36688,G__36688__$1,map__36680,map__36680__$1,via,trace,phase,map__36681,map__36681__$1,type,message,data,map__36682,map__36682__$1,problems,fn,caller,map__36683,map__36683__$1,top_data,source){
return (function (p1__36679_SHARP_){
var or__4131__auto__ = (p1__36679_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__36703 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36703.cljs$core$IFn$_invoke$arity$1 ? fexpr__36703.cljs$core$IFn$_invoke$arity$1(p1__36679_SHARP_) : fexpr__36703.call(null,p1__36679_SHARP_));
}
});})(vec__36699,source__$1,method,file,line,G__36688,G__36688__$1,map__36680,map__36680__$1,via,trace,phase,map__36681,map__36681__$1,type,message,data,map__36682,map__36682__$1,problems,fn,caller,map__36683,map__36683__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__36704 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36704__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36704,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36704);
var G__36704__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36704__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36704__$1);
var G__36704__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36704__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36704__$2);
var G__36704__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36704__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36704__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36704__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36704__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36688__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36707){
var map__36708 = p__36707;
var map__36708__$1 = (((((!((map__36708 == null))))?(((((map__36708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36708):map__36708);
var triage_data = map__36708__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36708__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36708__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36708__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36708__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36708__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36708__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36708__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36708__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__36710 = phase;
var G__36710__$1 = (((G__36710 instanceof cljs.core.Keyword))?G__36710.fqn:null);
switch (G__36710__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36711 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36712 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36713 = loc;
var G__36714 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36715_36862 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36716_36863 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36717_36864 = true;
var _STAR_print_fn_STAR__temp_val__36718_36865 = ((function (_STAR_print_newline_STAR__orig_val__36715_36862,_STAR_print_fn_STAR__orig_val__36716_36863,_STAR_print_newline_STAR__temp_val__36717_36864,sb__4661__auto__,G__36711,G__36712,G__36713,G__36710,G__36710__$1,loc,class_name,simple_class,cause_type,format,map__36708,map__36708__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__36715_36862,_STAR_print_fn_STAR__orig_val__36716_36863,_STAR_print_newline_STAR__temp_val__36717_36864,sb__4661__auto__,G__36711,G__36712,G__36713,G__36710,G__36710__$1,loc,class_name,simple_class,cause_type,format,map__36708,map__36708__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36717_36864;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36718_36865;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__36715_36862,_STAR_print_fn_STAR__orig_val__36716_36863,_STAR_print_newline_STAR__temp_val__36717_36864,_STAR_print_fn_STAR__temp_val__36718_36865,sb__4661__auto__,G__36711,G__36712,G__36713,G__36710,G__36710__$1,loc,class_name,simple_class,cause_type,format,map__36708,map__36708__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__36715_36862,_STAR_print_fn_STAR__orig_val__36716_36863,_STAR_print_newline_STAR__temp_val__36717_36864,_STAR_print_fn_STAR__temp_val__36718_36865,sb__4661__auto__,G__36711,G__36712,G__36713,G__36710,G__36710__$1,loc,class_name,simple_class,cause_type,format,map__36708,map__36708__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__36705_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36705_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__36715_36862,_STAR_print_fn_STAR__orig_val__36716_36863,_STAR_print_newline_STAR__temp_val__36717_36864,_STAR_print_fn_STAR__temp_val__36718_36865,sb__4661__auto__,G__36711,G__36712,G__36713,G__36710,G__36710__$1,loc,class_name,simple_class,cause_type,format,map__36708,map__36708__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__36715_36862,_STAR_print_fn_STAR__orig_val__36716_36863,_STAR_print_newline_STAR__temp_val__36717_36864,_STAR_print_fn_STAR__temp_val__36718_36865,sb__4661__auto__,G__36711,G__36712,G__36713,G__36710,G__36710__$1,loc,class_name,simple_class,cause_type,format,map__36708,map__36708__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36716_36863;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36715_36862;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36711,G__36712,G__36713,G__36714) : format.call(null,G__36711,G__36712,G__36713,G__36714));

break;
case "macroexpansion":
var G__36719 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36720 = cause_type;
var G__36721 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36722 = loc;
var G__36723 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36719,G__36720,G__36721,G__36722,G__36723) : format.call(null,G__36719,G__36720,G__36721,G__36722,G__36723));

break;
case "compile-syntax-check":
var G__36724 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36725 = cause_type;
var G__36726 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36727 = loc;
var G__36728 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36724,G__36725,G__36726,G__36727,G__36728) : format.call(null,G__36724,G__36725,G__36726,G__36727,G__36728));

break;
case "compilation":
var G__36729 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36730 = cause_type;
var G__36731 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36732 = loc;
var G__36733 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36729,G__36730,G__36731,G__36732,G__36733) : format.call(null,G__36729,G__36730,G__36731,G__36732,G__36733));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36734 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36735 = symbol;
var G__36736 = loc;
var G__36737 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36738_36873 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36739_36874 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36740_36875 = true;
var _STAR_print_fn_STAR__temp_val__36741_36876 = ((function (_STAR_print_newline_STAR__orig_val__36738_36873,_STAR_print_fn_STAR__orig_val__36739_36874,_STAR_print_newline_STAR__temp_val__36740_36875,sb__4661__auto__,G__36734,G__36735,G__36736,G__36710,G__36710__$1,loc,class_name,simple_class,cause_type,format,map__36708,map__36708__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__36738_36873,_STAR_print_fn_STAR__orig_val__36739_36874,_STAR_print_newline_STAR__temp_val__36740_36875,sb__4661__auto__,G__36734,G__36735,G__36736,G__36710,G__36710__$1,loc,class_name,simple_class,cause_type,format,map__36708,map__36708__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36740_36875;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36741_36876;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__36738_36873,_STAR_print_fn_STAR__orig_val__36739_36874,_STAR_print_newline_STAR__temp_val__36740_36875,_STAR_print_fn_STAR__temp_val__36741_36876,sb__4661__auto__,G__36734,G__36735,G__36736,G__36710,G__36710__$1,loc,class_name,simple_class,cause_type,format,map__36708,map__36708__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__36738_36873,_STAR_print_fn_STAR__orig_val__36739_36874,_STAR_print_newline_STAR__temp_val__36740_36875,_STAR_print_fn_STAR__temp_val__36741_36876,sb__4661__auto__,G__36734,G__36735,G__36736,G__36710,G__36710__$1,loc,class_name,simple_class,cause_type,format,map__36708,map__36708__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__36706_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36706_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__36738_36873,_STAR_print_fn_STAR__orig_val__36739_36874,_STAR_print_newline_STAR__temp_val__36740_36875,_STAR_print_fn_STAR__temp_val__36741_36876,sb__4661__auto__,G__36734,G__36735,G__36736,G__36710,G__36710__$1,loc,class_name,simple_class,cause_type,format,map__36708,map__36708__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__36738_36873,_STAR_print_fn_STAR__orig_val__36739_36874,_STAR_print_newline_STAR__temp_val__36740_36875,_STAR_print_fn_STAR__temp_val__36741_36876,sb__4661__auto__,G__36734,G__36735,G__36736,G__36710,G__36710__$1,loc,class_name,simple_class,cause_type,format,map__36708,map__36708__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36739_36874;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36738_36873;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36734,G__36735,G__36736,G__36737) : format.call(null,G__36734,G__36735,G__36736,G__36737));
} else {
var G__36742 = "Execution error%s at %s(%s).\n%s\n";
var G__36743 = cause_type;
var G__36744 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36745 = loc;
var G__36746 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36742,G__36743,G__36744,G__36745,G__36746) : format.call(null,G__36742,G__36743,G__36744,G__36745,G__36746));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36710__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
