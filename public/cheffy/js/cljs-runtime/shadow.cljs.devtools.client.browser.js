goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42667 = arguments.length;
var i__4731__auto___42668 = (0);
while(true){
if((i__4731__auto___42668 < len__4730__auto___42667)){
args__4736__auto__.push((arguments[i__4731__auto___42668]));

var G__42669 = (i__4731__auto___42668 + (1));
i__4731__auto___42668 = G__42669;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq42506){
var G__42507 = cljs.core.first(seq42506);
var seq42506__$1 = cljs.core.next(seq42506);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42507,seq42506__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__42519){
var map__42520 = p__42519;
var map__42520__$1 = (((((!((map__42520 == null))))?(((((map__42520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42520):map__42520);
var src = map__42520__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42520__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42520__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__42522 = cljs.core.seq(sources);
var chunk__42523 = null;
var count__42524 = (0);
var i__42525 = (0);
while(true){
if((i__42525 < count__42524)){
var map__42530 = chunk__42523.cljs$core$IIndexed$_nth$arity$2(null,i__42525);
var map__42530__$1 = (((((!((map__42530 == null))))?(((((map__42530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42530):map__42530);
var src = map__42530__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42530__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42530__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42530__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42530__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__42670 = seq__42522;
var G__42671 = chunk__42523;
var G__42672 = count__42524;
var G__42673 = (i__42525 + (1));
seq__42522 = G__42670;
chunk__42523 = G__42671;
count__42524 = G__42672;
i__42525 = G__42673;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42522);
if(temp__5735__auto__){
var seq__42522__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42522__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42522__$1);
var G__42674 = cljs.core.chunk_rest(seq__42522__$1);
var G__42675 = c__4550__auto__;
var G__42676 = cljs.core.count(c__4550__auto__);
var G__42677 = (0);
seq__42522 = G__42674;
chunk__42523 = G__42675;
count__42524 = G__42676;
i__42525 = G__42677;
continue;
} else {
var map__42534 = cljs.core.first(seq__42522__$1);
var map__42534__$1 = (((((!((map__42534 == null))))?(((((map__42534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42534):map__42534);
var src = map__42534__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42534__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42534__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42534__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42534__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__42678 = cljs.core.next(seq__42522__$1);
var G__42679 = null;
var G__42680 = (0);
var G__42681 = (0);
seq__42522 = G__42678;
chunk__42523 = G__42679;
count__42524 = G__42680;
i__42525 = G__42681;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__42537 = cljs.core.seq(js_requires);
var chunk__42538 = null;
var count__42539 = (0);
var i__42540 = (0);
while(true){
if((i__42540 < count__42539)){
var js_ns = chunk__42538.cljs$core$IIndexed$_nth$arity$2(null,i__42540);
var require_str_42682 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42682);


var G__42683 = seq__42537;
var G__42684 = chunk__42538;
var G__42685 = count__42539;
var G__42686 = (i__42540 + (1));
seq__42537 = G__42683;
chunk__42538 = G__42684;
count__42539 = G__42685;
i__42540 = G__42686;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42537);
if(temp__5735__auto__){
var seq__42537__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42537__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42537__$1);
var G__42687 = cljs.core.chunk_rest(seq__42537__$1);
var G__42688 = c__4550__auto__;
var G__42689 = cljs.core.count(c__4550__auto__);
var G__42690 = (0);
seq__42537 = G__42687;
chunk__42538 = G__42688;
count__42539 = G__42689;
i__42540 = G__42690;
continue;
} else {
var js_ns = cljs.core.first(seq__42537__$1);
var require_str_42691 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_42691);


var G__42692 = cljs.core.next(seq__42537__$1);
var G__42693 = null;
var G__42694 = (0);
var G__42695 = (0);
seq__42537 = G__42692;
chunk__42538 = G__42693;
count__42539 = G__42694;
i__42540 = G__42695;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__42542 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__42542) : callback.call(null,G__42542));
} else {
var G__42543 = shadow.cljs.devtools.client.env.files_url();
var G__42544 = ((function (G__42543){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__42543))
;
var G__42545 = "POST";
var G__42546 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__42547 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__42543,G__42544,G__42545,G__42546,G__42547);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__42549){
var map__42550 = p__42549;
var map__42550__$1 = (((((!((map__42550 == null))))?(((((map__42550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42550):map__42550);
var msg = map__42550__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42550__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42550__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__42552 = info;
var map__42552__$1 = (((((!((map__42552 == null))))?(((((map__42552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42552):map__42552);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42552__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42552__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__42552,map__42552__$1,sources,compiled,map__42550,map__42550__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42554(s__42555){
return (new cljs.core.LazySeq(null,((function (map__42552,map__42552__$1,sources,compiled,map__42550,map__42550__$1,msg,info,reload_info){
return (function (){
var s__42555__$1 = s__42555;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__42555__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__42560 = cljs.core.first(xs__6292__auto__);
var map__42560__$1 = (((((!((map__42560 == null))))?(((((map__42560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42560):map__42560);
var src = map__42560__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42560__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42560__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__42555__$1,map__42560,map__42560__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42552,map__42552__$1,sources,compiled,map__42550,map__42550__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42554_$_iter__42556(s__42557){
return (new cljs.core.LazySeq(null,((function (s__42555__$1,map__42560,map__42560__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42552,map__42552__$1,sources,compiled,map__42550,map__42550__$1,msg,info,reload_info){
return (function (){
var s__42557__$1 = s__42557;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__42557__$1);
if(temp__5735__auto____$1){
var s__42557__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__42557__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__42557__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__42559 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__42558 = (0);
while(true){
if((i__42558 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__42558);
cljs.core.chunk_append(b__42559,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__42696 = (i__42558 + (1));
i__42558 = G__42696;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__42559),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42554_$_iter__42556(cljs.core.chunk_rest(s__42557__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__42559),null);
}
} else {
var warning = cljs.core.first(s__42557__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42554_$_iter__42556(cljs.core.rest(s__42557__$2)));
}
} else {
return null;
}
break;
}
});})(s__42555__$1,map__42560,map__42560__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42552,map__42552__$1,sources,compiled,map__42550,map__42550__$1,msg,info,reload_info))
,null,null));
});})(s__42555__$1,map__42560,map__42560__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__42552,map__42552__$1,sources,compiled,map__42550,map__42550__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__42554(cljs.core.rest(s__42555__$1)));
} else {
var G__42697 = cljs.core.rest(s__42555__$1);
s__42555__$1 = G__42697;
continue;
}
} else {
var G__42698 = cljs.core.rest(s__42555__$1);
s__42555__$1 = G__42698;
continue;
}
} else {
return null;
}
break;
}
});})(map__42552,map__42552__$1,sources,compiled,map__42550,map__42550__$1,msg,info,reload_info))
,null,null));
});})(map__42552,map__42552__$1,sources,compiled,map__42550,map__42550__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__42562_42699 = cljs.core.seq(warnings);
var chunk__42563_42700 = null;
var count__42564_42701 = (0);
var i__42565_42702 = (0);
while(true){
if((i__42565_42702 < count__42564_42701)){
var map__42572_42703 = chunk__42563_42700.cljs$core$IIndexed$_nth$arity$2(null,i__42565_42702);
var map__42572_42704__$1 = (((((!((map__42572_42703 == null))))?(((((map__42572_42703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42572_42703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42572_42703):map__42572_42703);
var w_42705 = map__42572_42704__$1;
var msg_42706__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42572_42704__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42572_42704__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42708 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42572_42704__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42709 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42572_42704__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42709)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42707),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42708),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42706__$1)].join(''));


var G__42710 = seq__42562_42699;
var G__42711 = chunk__42563_42700;
var G__42712 = count__42564_42701;
var G__42713 = (i__42565_42702 + (1));
seq__42562_42699 = G__42710;
chunk__42563_42700 = G__42711;
count__42564_42701 = G__42712;
i__42565_42702 = G__42713;
continue;
} else {
var temp__5735__auto___42714 = cljs.core.seq(seq__42562_42699);
if(temp__5735__auto___42714){
var seq__42562_42715__$1 = temp__5735__auto___42714;
if(cljs.core.chunked_seq_QMARK_(seq__42562_42715__$1)){
var c__4550__auto___42716 = cljs.core.chunk_first(seq__42562_42715__$1);
var G__42717 = cljs.core.chunk_rest(seq__42562_42715__$1);
var G__42718 = c__4550__auto___42716;
var G__42719 = cljs.core.count(c__4550__auto___42716);
var G__42720 = (0);
seq__42562_42699 = G__42717;
chunk__42563_42700 = G__42718;
count__42564_42701 = G__42719;
i__42565_42702 = G__42720;
continue;
} else {
var map__42574_42721 = cljs.core.first(seq__42562_42715__$1);
var map__42574_42722__$1 = (((((!((map__42574_42721 == null))))?(((((map__42574_42721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42574_42721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42574_42721):map__42574_42721);
var w_42723 = map__42574_42722__$1;
var msg_42724__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42574_42722__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_42725 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42574_42722__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_42726 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42574_42722__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_42727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42574_42722__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_42727)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_42725),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_42726),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_42724__$1)].join(''));


var G__42728 = cljs.core.next(seq__42562_42715__$1);
var G__42729 = null;
var G__42730 = (0);
var G__42731 = (0);
seq__42562_42699 = G__42728;
chunk__42563_42700 = G__42729;
count__42564_42701 = G__42730;
i__42565_42702 = G__42731;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__42552,map__42552__$1,sources,compiled,warnings,map__42550,map__42550__$1,msg,info,reload_info){
return (function (p__42576){
var map__42577 = p__42576;
var map__42577__$1 = (((((!((map__42577 == null))))?(((((map__42577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42577):map__42577);
var src = map__42577__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42577__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42577__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__42552,map__42552__$1,sources,compiled,warnings,map__42550,map__42550__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__42552,map__42552__$1,sources,compiled,warnings,map__42550,map__42550__$1,msg,info,reload_info){
return (function (p__42579){
var map__42580 = p__42579;
var map__42580__$1 = (((((!((map__42580 == null))))?(((((map__42580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42580):map__42580);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42580__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__42552,map__42552__$1,sources,compiled,warnings,map__42550,map__42550__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__42552,map__42552__$1,sources,compiled,warnings,map__42550,map__42550__$1,msg,info,reload_info){
return (function (p__42582){
var map__42583 = p__42582;
var map__42583__$1 = (((((!((map__42583 == null))))?(((((map__42583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42583):map__42583);
var rc = map__42583__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42583__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__42552,map__42552__$1,sources,compiled,warnings,map__42550,map__42550__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__42552,map__42552__$1,sources,compiled,warnings,map__42550,map__42550__$1,msg,info,reload_info){
return (function (p1__42548_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__42548_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__42552,map__42552__$1,sources,compiled,warnings,map__42550,map__42550__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__42585){
var map__42586 = p__42585;
var map__42586__$1 = (((((!((map__42586 == null))))?(((((map__42586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42586):map__42586);
var msg = map__42586__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42586__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__42588 = cljs.core.seq(updates);
var chunk__42590 = null;
var count__42591 = (0);
var i__42592 = (0);
while(true){
if((i__42592 < count__42591)){
var path = chunk__42590.cljs$core$IIndexed$_nth$arity$2(null,i__42592);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42618_42732 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42621_42733 = null;
var count__42622_42734 = (0);
var i__42623_42735 = (0);
while(true){
if((i__42623_42735 < count__42622_42734)){
var node_42736 = chunk__42621_42733.cljs$core$IIndexed$_nth$arity$2(null,i__42623_42735);
var path_match_42737 = shadow.cljs.devtools.client.browser.match_paths(node_42736.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42737)){
var new_link_42738 = (function (){var G__42628 = node_42736.cloneNode(true);
G__42628.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42737),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42628;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42737], 0));

goog.dom.insertSiblingAfter(new_link_42738,node_42736);

goog.dom.removeNode(node_42736);


var G__42739 = seq__42618_42732;
var G__42740 = chunk__42621_42733;
var G__42741 = count__42622_42734;
var G__42742 = (i__42623_42735 + (1));
seq__42618_42732 = G__42739;
chunk__42621_42733 = G__42740;
count__42622_42734 = G__42741;
i__42623_42735 = G__42742;
continue;
} else {
var G__42743 = seq__42618_42732;
var G__42744 = chunk__42621_42733;
var G__42745 = count__42622_42734;
var G__42746 = (i__42623_42735 + (1));
seq__42618_42732 = G__42743;
chunk__42621_42733 = G__42744;
count__42622_42734 = G__42745;
i__42623_42735 = G__42746;
continue;
}
} else {
var temp__5735__auto___42747 = cljs.core.seq(seq__42618_42732);
if(temp__5735__auto___42747){
var seq__42618_42748__$1 = temp__5735__auto___42747;
if(cljs.core.chunked_seq_QMARK_(seq__42618_42748__$1)){
var c__4550__auto___42749 = cljs.core.chunk_first(seq__42618_42748__$1);
var G__42750 = cljs.core.chunk_rest(seq__42618_42748__$1);
var G__42751 = c__4550__auto___42749;
var G__42752 = cljs.core.count(c__4550__auto___42749);
var G__42753 = (0);
seq__42618_42732 = G__42750;
chunk__42621_42733 = G__42751;
count__42622_42734 = G__42752;
i__42623_42735 = G__42753;
continue;
} else {
var node_42754 = cljs.core.first(seq__42618_42748__$1);
var path_match_42755 = shadow.cljs.devtools.client.browser.match_paths(node_42754.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42755)){
var new_link_42756 = (function (){var G__42629 = node_42754.cloneNode(true);
G__42629.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42755),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42629;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42755], 0));

goog.dom.insertSiblingAfter(new_link_42756,node_42754);

goog.dom.removeNode(node_42754);


var G__42757 = cljs.core.next(seq__42618_42748__$1);
var G__42758 = null;
var G__42759 = (0);
var G__42760 = (0);
seq__42618_42732 = G__42757;
chunk__42621_42733 = G__42758;
count__42622_42734 = G__42759;
i__42623_42735 = G__42760;
continue;
} else {
var G__42761 = cljs.core.next(seq__42618_42748__$1);
var G__42762 = null;
var G__42763 = (0);
var G__42764 = (0);
seq__42618_42732 = G__42761;
chunk__42621_42733 = G__42762;
count__42622_42734 = G__42763;
i__42623_42735 = G__42764;
continue;
}
}
} else {
}
}
break;
}


var G__42765 = seq__42588;
var G__42766 = chunk__42590;
var G__42767 = count__42591;
var G__42768 = (i__42592 + (1));
seq__42588 = G__42765;
chunk__42590 = G__42766;
count__42591 = G__42767;
i__42592 = G__42768;
continue;
} else {
var G__42769 = seq__42588;
var G__42770 = chunk__42590;
var G__42771 = count__42591;
var G__42772 = (i__42592 + (1));
seq__42588 = G__42769;
chunk__42590 = G__42770;
count__42591 = G__42771;
i__42592 = G__42772;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42588);
if(temp__5735__auto__){
var seq__42588__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42588__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__42588__$1);
var G__42773 = cljs.core.chunk_rest(seq__42588__$1);
var G__42774 = c__4550__auto__;
var G__42775 = cljs.core.count(c__4550__auto__);
var G__42776 = (0);
seq__42588 = G__42773;
chunk__42590 = G__42774;
count__42591 = G__42775;
i__42592 = G__42776;
continue;
} else {
var path = cljs.core.first(seq__42588__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__42630_42777 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__42633_42778 = null;
var count__42634_42779 = (0);
var i__42635_42780 = (0);
while(true){
if((i__42635_42780 < count__42634_42779)){
var node_42781 = chunk__42633_42778.cljs$core$IIndexed$_nth$arity$2(null,i__42635_42780);
var path_match_42782 = shadow.cljs.devtools.client.browser.match_paths(node_42781.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42782)){
var new_link_42783 = (function (){var G__42640 = node_42781.cloneNode(true);
G__42640.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42782),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42640;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42782], 0));

goog.dom.insertSiblingAfter(new_link_42783,node_42781);

goog.dom.removeNode(node_42781);


var G__42784 = seq__42630_42777;
var G__42785 = chunk__42633_42778;
var G__42786 = count__42634_42779;
var G__42787 = (i__42635_42780 + (1));
seq__42630_42777 = G__42784;
chunk__42633_42778 = G__42785;
count__42634_42779 = G__42786;
i__42635_42780 = G__42787;
continue;
} else {
var G__42788 = seq__42630_42777;
var G__42789 = chunk__42633_42778;
var G__42790 = count__42634_42779;
var G__42791 = (i__42635_42780 + (1));
seq__42630_42777 = G__42788;
chunk__42633_42778 = G__42789;
count__42634_42779 = G__42790;
i__42635_42780 = G__42791;
continue;
}
} else {
var temp__5735__auto___42792__$1 = cljs.core.seq(seq__42630_42777);
if(temp__5735__auto___42792__$1){
var seq__42630_42793__$1 = temp__5735__auto___42792__$1;
if(cljs.core.chunked_seq_QMARK_(seq__42630_42793__$1)){
var c__4550__auto___42794 = cljs.core.chunk_first(seq__42630_42793__$1);
var G__42795 = cljs.core.chunk_rest(seq__42630_42793__$1);
var G__42796 = c__4550__auto___42794;
var G__42797 = cljs.core.count(c__4550__auto___42794);
var G__42798 = (0);
seq__42630_42777 = G__42795;
chunk__42633_42778 = G__42796;
count__42634_42779 = G__42797;
i__42635_42780 = G__42798;
continue;
} else {
var node_42799 = cljs.core.first(seq__42630_42793__$1);
var path_match_42800 = shadow.cljs.devtools.client.browser.match_paths(node_42799.getAttribute("href"),path);
if(cljs.core.truth_(path_match_42800)){
var new_link_42801 = (function (){var G__42641 = node_42799.cloneNode(true);
G__42641.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_42800),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__42641;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_42800], 0));

goog.dom.insertSiblingAfter(new_link_42801,node_42799);

goog.dom.removeNode(node_42799);


var G__42802 = cljs.core.next(seq__42630_42793__$1);
var G__42803 = null;
var G__42804 = (0);
var G__42805 = (0);
seq__42630_42777 = G__42802;
chunk__42633_42778 = G__42803;
count__42634_42779 = G__42804;
i__42635_42780 = G__42805;
continue;
} else {
var G__42806 = cljs.core.next(seq__42630_42793__$1);
var G__42807 = null;
var G__42808 = (0);
var G__42809 = (0);
seq__42630_42777 = G__42806;
chunk__42633_42778 = G__42807;
count__42634_42779 = G__42808;
i__42635_42780 = G__42809;
continue;
}
}
} else {
}
}
break;
}


var G__42810 = cljs.core.next(seq__42588__$1);
var G__42811 = null;
var G__42812 = (0);
var G__42813 = (0);
seq__42588 = G__42810;
chunk__42590 = G__42811;
count__42591 = G__42812;
i__42592 = G__42813;
continue;
} else {
var G__42814 = cljs.core.next(seq__42588__$1);
var G__42815 = null;
var G__42816 = (0);
var G__42817 = (0);
seq__42588 = G__42814;
chunk__42590 = G__42815;
count__42591 = G__42816;
i__42592 = G__42817;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
return (0,eval)(js);;
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__42642){
var map__42643 = p__42642;
var map__42643__$1 = (((((!((map__42643 == null))))?(((((map__42643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42643):map__42643);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42643__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42643__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__42643,map__42643__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__42643,map__42643__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__42645,done){
var map__42646 = p__42645;
var map__42646__$1 = (((((!((map__42646 == null))))?(((((map__42646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42646):map__42646);
var msg = map__42646__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42646__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42646__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42646__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42646__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__42646,map__42646__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__42648){
var map__42649 = p__42648;
var map__42649__$1 = (((((!((map__42649 == null))))?(((((map__42649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42649):map__42649);
var src = map__42649__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42649__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__42646,map__42646__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__42646,map__42646__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(sources_to_load,map__42646,map__42646__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__42651,done){
var map__42652 = p__42651;
var map__42652__$1 = (((((!((map__42652 == null))))?(((((map__42652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42652):map__42652);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42652__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42652__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__42652,map__42652__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__42652,map__42652__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__42654){
var map__42655 = p__42654;
var map__42655__$1 = (((((!((map__42655 == null))))?(((((map__42655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42655):map__42655);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42655__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42655__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__42657,done){
var map__42658 = p__42657;
var map__42658__$1 = (((((!((map__42658 == null))))?(((((map__42658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42658):map__42658);
var msg = map__42658__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42658__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__42660_42818 = type;
var G__42660_42819__$1 = (((G__42660_42818 instanceof cljs.core.Keyword))?G__42660_42818.fqn:null);
switch (G__42660_42819__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__42661 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__42662 = ((function (G__42661){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__42661))
;
var G__42663 = "POST";
var G__42664 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__42665 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__42661,G__42662,G__42663,G__42664,G__42665);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e42666){var e = e42666;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___42821 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___42821)){
var s_42822 = temp__5735__auto___42821;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_42822.onclose = ((function (s_42822,temp__5735__auto___42821){
return (function (e){
return null;
});})(s_42822,temp__5735__auto___42821))
;

s_42822.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
