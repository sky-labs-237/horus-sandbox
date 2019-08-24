goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__26645){
var vec__26646 = p__26645;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26646,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__26649 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26649,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26649,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26649,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__26656 = arguments.length;
switch (G__26656) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__26670_26724 = clojure.data.equality_partition;
var G__26671_26725 = "null";
var G__26672_26726 = ((function (G__26670_26724,G__26671_26725){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26670_26724,G__26671_26725))
;
goog.object.set(G__26670_26724,G__26671_26725,G__26672_26726);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__26673_26728 = clojure.data.equality_partition;
var G__26674_26729 = "string";
var G__26675_26730 = ((function (G__26673_26728,G__26674_26729){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26673_26728,G__26674_26729))
;
goog.object.set(G__26673_26728,G__26674_26729,G__26675_26730);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__26676_26733 = clojure.data.equality_partition;
var G__26677_26734 = "number";
var G__26678_26735 = ((function (G__26676_26733,G__26677_26734){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26676_26733,G__26677_26734))
;
goog.object.set(G__26676_26733,G__26677_26734,G__26678_26735);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__26679_26737 = clojure.data.equality_partition;
var G__26680_26738 = "array";
var G__26681_26739 = ((function (G__26679_26737,G__26680_26738){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__26679_26737,G__26680_26738))
;
goog.object.set(G__26679_26737,G__26680_26738,G__26681_26739);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__26682_26741 = clojure.data.equality_partition;
var G__26683_26742 = "function";
var G__26684_26743 = ((function (G__26682_26741,G__26683_26742){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26682_26741,G__26683_26742))
;
goog.object.set(G__26682_26741,G__26683_26742,G__26684_26743);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__26685_26747 = clojure.data.equality_partition;
var G__26686_26748 = "boolean";
var G__26687_26749 = ((function (G__26685_26747,G__26686_26748){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__26685_26747,G__26686_26748))
;
goog.object.set(G__26685_26747,G__26686_26748,G__26687_26749);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__26688_26750 = clojure.data.equality_partition;
var G__26689_26751 = "_";
var G__26690_26752 = ((function (G__26688_26750,G__26689_26751){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__26688_26750,G__26689_26751))
;
goog.object.set(G__26688_26750,G__26689_26751,G__26690_26752);
goog.object.set(clojure.data.Diff,"null",true);

var G__26694_26757 = clojure.data.diff_similar;
var G__26695_26758 = "null";
var G__26696_26759 = ((function (G__26694_26757,G__26695_26758){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26694_26757,G__26695_26758))
;
goog.object.set(G__26694_26757,G__26695_26758,G__26696_26759);

goog.object.set(clojure.data.Diff,"string",true);

var G__26697_26760 = clojure.data.diff_similar;
var G__26698_26761 = "string";
var G__26699_26762 = ((function (G__26697_26760,G__26698_26761){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26697_26760,G__26698_26761))
;
goog.object.set(G__26697_26760,G__26698_26761,G__26699_26762);

goog.object.set(clojure.data.Diff,"number",true);

var G__26700_26763 = clojure.data.diff_similar;
var G__26701_26764 = "number";
var G__26702_26765 = ((function (G__26700_26763,G__26701_26764){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26700_26763,G__26701_26764))
;
goog.object.set(G__26700_26763,G__26701_26764,G__26702_26765);

goog.object.set(clojure.data.Diff,"array",true);

var G__26703_26766 = clojure.data.diff_similar;
var G__26704_26767 = "array";
var G__26705_26768 = ((function (G__26703_26766,G__26704_26767){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__26703_26766,G__26704_26767))
;
goog.object.set(G__26703_26766,G__26704_26767,G__26705_26768);

goog.object.set(clojure.data.Diff,"function",true);

var G__26706_26769 = clojure.data.diff_similar;
var G__26707_26770 = "function";
var G__26708_26771 = ((function (G__26706_26769,G__26707_26770){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26706_26769,G__26707_26770))
;
goog.object.set(G__26706_26769,G__26707_26770,G__26708_26771);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__26709_26772 = clojure.data.diff_similar;
var G__26710_26773 = "boolean";
var G__26711_26774 = ((function (G__26709_26772,G__26710_26773){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__26709_26772,G__26710_26773))
;
goog.object.set(G__26709_26772,G__26710_26773,G__26711_26774);

goog.object.set(clojure.data.Diff,"_",true);

var G__26712_26775 = clojure.data.diff_similar;
var G__26713_26776 = "_";
var G__26714_26777 = ((function (G__26712_26775,G__26713_26776){
return (function (a,b){
var fexpr__26716 = (function (){var G__26717 = clojure.data.equality_partition(a);
var G__26717__$1 = (((G__26717 instanceof cljs.core.Keyword))?G__26717.fqn:null);
switch (G__26717__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26717__$1)].join('')));

}
})();
return (fexpr__26716.cljs$core$IFn$_invoke$arity$2 ? fexpr__26716.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__26716.call(null,a,b));
});})(G__26712_26775,G__26713_26776))
;
goog.object.set(G__26712_26775,G__26713_26776,G__26714_26777);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
