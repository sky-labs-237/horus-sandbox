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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__32040){
var vec__32041 = p__32040;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32041,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32041,(1),null);
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
var vec__32044 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32044,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32044,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32044,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__32049 = arguments.length;
switch (G__32049) {
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

var G__32051_32117 = clojure.data.equality_partition;
var G__32052_32118 = "null";
var G__32053_32119 = ((function (G__32051_32117,G__32052_32118){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32051_32117,G__32052_32118))
;
goog.object.set(G__32051_32117,G__32052_32118,G__32053_32119);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__32054_32120 = clojure.data.equality_partition;
var G__32055_32121 = "string";
var G__32056_32122 = ((function (G__32054_32120,G__32055_32121){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32054_32120,G__32055_32121))
;
goog.object.set(G__32054_32120,G__32055_32121,G__32056_32122);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__32057_32123 = clojure.data.equality_partition;
var G__32058_32124 = "number";
var G__32059_32125 = ((function (G__32057_32123,G__32058_32124){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32057_32123,G__32058_32124))
;
goog.object.set(G__32057_32123,G__32058_32124,G__32059_32125);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__32060_32126 = clojure.data.equality_partition;
var G__32061_32127 = "array";
var G__32062_32128 = ((function (G__32060_32126,G__32061_32127){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__32060_32126,G__32061_32127))
;
goog.object.set(G__32060_32126,G__32061_32127,G__32062_32128);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__32063_32129 = clojure.data.equality_partition;
var G__32064_32130 = "function";
var G__32065_32131 = ((function (G__32063_32129,G__32064_32130){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32063_32129,G__32064_32130))
;
goog.object.set(G__32063_32129,G__32064_32130,G__32065_32131);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__32066_32132 = clojure.data.equality_partition;
var G__32067_32133 = "boolean";
var G__32068_32134 = ((function (G__32066_32132,G__32067_32133){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__32066_32132,G__32067_32133))
;
goog.object.set(G__32066_32132,G__32067_32133,G__32068_32134);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__32069_32135 = clojure.data.equality_partition;
var G__32070_32136 = "_";
var G__32071_32137 = ((function (G__32069_32135,G__32070_32136){
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
});})(G__32069_32135,G__32070_32136))
;
goog.object.set(G__32069_32135,G__32070_32136,G__32071_32137);
goog.object.set(clojure.data.Diff,"null",true);

var G__32092_32150 = clojure.data.diff_similar;
var G__32093_32151 = "null";
var G__32094_32152 = ((function (G__32092_32150,G__32093_32151){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32092_32150,G__32093_32151))
;
goog.object.set(G__32092_32150,G__32093_32151,G__32094_32152);

goog.object.set(clojure.data.Diff,"string",true);

var G__32095_32154 = clojure.data.diff_similar;
var G__32096_32155 = "string";
var G__32097_32156 = ((function (G__32095_32154,G__32096_32155){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32095_32154,G__32096_32155))
;
goog.object.set(G__32095_32154,G__32096_32155,G__32097_32156);

goog.object.set(clojure.data.Diff,"number",true);

var G__32098_32178 = clojure.data.diff_similar;
var G__32099_32179 = "number";
var G__32100_32180 = ((function (G__32098_32178,G__32099_32179){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32098_32178,G__32099_32179))
;
goog.object.set(G__32098_32178,G__32099_32179,G__32100_32180);

goog.object.set(clojure.data.Diff,"array",true);

var G__32101_32181 = clojure.data.diff_similar;
var G__32102_32182 = "array";
var G__32103_32183 = ((function (G__32101_32181,G__32102_32182){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__32101_32181,G__32102_32182))
;
goog.object.set(G__32101_32181,G__32102_32182,G__32103_32183);

goog.object.set(clojure.data.Diff,"function",true);

var G__32104_32188 = clojure.data.diff_similar;
var G__32105_32189 = "function";
var G__32106_32190 = ((function (G__32104_32188,G__32105_32189){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32104_32188,G__32105_32189))
;
goog.object.set(G__32104_32188,G__32105_32189,G__32106_32190);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__32107_32191 = clojure.data.diff_similar;
var G__32108_32192 = "boolean";
var G__32109_32193 = ((function (G__32107_32191,G__32108_32192){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__32107_32191,G__32108_32192))
;
goog.object.set(G__32107_32191,G__32108_32192,G__32109_32193);

goog.object.set(clojure.data.Diff,"_",true);

var G__32110_32194 = clojure.data.diff_similar;
var G__32111_32195 = "_";
var G__32112_32196 = ((function (G__32110_32194,G__32111_32195){
return (function (a,b){
var fexpr__32114 = (function (){var G__32115 = clojure.data.equality_partition(a);
var G__32115__$1 = (((G__32115 instanceof cljs.core.Keyword))?G__32115.fqn:null);
switch (G__32115__$1) {
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
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32115__$1)].join('')));

}
})();
return (fexpr__32114.cljs$core$IFn$_invoke$arity$2 ? fexpr__32114.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__32114.call(null,a,b));
});})(G__32110_32194,G__32111_32195))
;
goog.object.set(G__32110_32194,G__32111_32195,G__32112_32196);
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
