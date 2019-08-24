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
var len__4730__auto___37392 = arguments.length;
var i__4731__auto___37393 = (0);
while(true){
if((i__4731__auto___37393 < len__4730__auto___37392)){
args__4736__auto__.push((arguments[i__4731__auto___37393]));

var G__37394 = (i__4731__auto___37393 + (1));
i__4731__auto___37393 = G__37394;
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
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37191){
var G__37192 = cljs.core.first(seq37191);
var seq37191__$1 = cljs.core.next(seq37191);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37192,seq37191__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37199){
var map__37200 = p__37199;
var map__37200__$1 = (((((!((map__37200 == null))))?(((((map__37200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37200):map__37200);
var src = map__37200__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37200__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37200__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__37202 = cljs.core.seq(sources);
var chunk__37203 = null;
var count__37204 = (0);
var i__37205 = (0);
while(true){
if((i__37205 < count__37204)){
var map__37210 = chunk__37203.cljs$core$IIndexed$_nth$arity$2(null,i__37205);
var map__37210__$1 = (((((!((map__37210 == null))))?(((((map__37210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37210):map__37210);
var src = map__37210__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37210__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37210__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37210__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37210__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37395 = seq__37202;
var G__37396 = chunk__37203;
var G__37397 = count__37204;
var G__37398 = (i__37205 + (1));
seq__37202 = G__37395;
chunk__37203 = G__37396;
count__37204 = G__37397;
i__37205 = G__37398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37202);
if(temp__5735__auto__){
var seq__37202__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37202__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37202__$1);
var G__37399 = cljs.core.chunk_rest(seq__37202__$1);
var G__37400 = c__4550__auto__;
var G__37401 = cljs.core.count(c__4550__auto__);
var G__37402 = (0);
seq__37202 = G__37399;
chunk__37203 = G__37400;
count__37204 = G__37401;
i__37205 = G__37402;
continue;
} else {
var map__37212 = cljs.core.first(seq__37202__$1);
var map__37212__$1 = (((((!((map__37212 == null))))?(((((map__37212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37212):map__37212);
var src = map__37212__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37212__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37212__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37212__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37212__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37403 = cljs.core.next(seq__37202__$1);
var G__37404 = null;
var G__37405 = (0);
var G__37406 = (0);
seq__37202 = G__37403;
chunk__37203 = G__37404;
count__37204 = G__37405;
i__37205 = G__37406;
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
var seq__37221 = cljs.core.seq(js_requires);
var chunk__37222 = null;
var count__37223 = (0);
var i__37224 = (0);
while(true){
if((i__37224 < count__37223)){
var js_ns = chunk__37222.cljs$core$IIndexed$_nth$arity$2(null,i__37224);
var require_str_37407 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37407);


var G__37408 = seq__37221;
var G__37409 = chunk__37222;
var G__37410 = count__37223;
var G__37411 = (i__37224 + (1));
seq__37221 = G__37408;
chunk__37222 = G__37409;
count__37223 = G__37410;
i__37224 = G__37411;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37221);
if(temp__5735__auto__){
var seq__37221__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37221__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37221__$1);
var G__37412 = cljs.core.chunk_rest(seq__37221__$1);
var G__37413 = c__4550__auto__;
var G__37414 = cljs.core.count(c__4550__auto__);
var G__37415 = (0);
seq__37221 = G__37412;
chunk__37222 = G__37413;
count__37223 = G__37414;
i__37224 = G__37415;
continue;
} else {
var js_ns = cljs.core.first(seq__37221__$1);
var require_str_37416 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37416);


var G__37417 = cljs.core.next(seq__37221__$1);
var G__37418 = null;
var G__37419 = (0);
var G__37420 = (0);
seq__37221 = G__37417;
chunk__37222 = G__37418;
count__37223 = G__37419;
i__37224 = G__37420;
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
var G__37225 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37225) : callback.call(null,G__37225));
} else {
var G__37226 = shadow.cljs.devtools.client.env.files_url();
var G__37227 = ((function (G__37226){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37226))
;
var G__37228 = "POST";
var G__37229 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37230 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37226,G__37227,G__37228,G__37229,G__37230);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37233){
var map__37247 = p__37233;
var map__37247__$1 = (((((!((map__37247 == null))))?(((((map__37247.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37247.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37247):map__37247);
var msg = map__37247__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37247__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37247__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37255 = info;
var map__37255__$1 = (((((!((map__37255 == null))))?(((((map__37255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37255):map__37255);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37255__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37255,map__37255__$1,sources,compiled,map__37247,map__37247__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37257(s__37258){
return (new cljs.core.LazySeq(null,((function (map__37255,map__37255__$1,sources,compiled,map__37247,map__37247__$1,msg,info,reload_info){
return (function (){
var s__37258__$1 = s__37258;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37258__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37267 = cljs.core.first(xs__6292__auto__);
var map__37267__$1 = (((((!((map__37267 == null))))?(((((map__37267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37267):map__37267);
var src = map__37267__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37267__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37267__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37258__$1,map__37267,map__37267__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37255,map__37255__$1,sources,compiled,map__37247,map__37247__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37257_$_iter__37259(s__37260){
return (new cljs.core.LazySeq(null,((function (s__37258__$1,map__37267,map__37267__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37255,map__37255__$1,sources,compiled,map__37247,map__37247__$1,msg,info,reload_info){
return (function (){
var s__37260__$1 = s__37260;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37260__$1);
if(temp__5735__auto____$1){
var s__37260__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37260__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37260__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37262 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37261 = (0);
while(true){
if((i__37261 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37261);
cljs.core.chunk_append(b__37262,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37425 = (i__37261 + (1));
i__37261 = G__37425;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37262),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37257_$_iter__37259(cljs.core.chunk_rest(s__37260__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37262),null);
}
} else {
var warning = cljs.core.first(s__37260__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37257_$_iter__37259(cljs.core.rest(s__37260__$2)));
}
} else {
return null;
}
break;
}
});})(s__37258__$1,map__37267,map__37267__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37255,map__37255__$1,sources,compiled,map__37247,map__37247__$1,msg,info,reload_info))
,null,null));
});})(s__37258__$1,map__37267,map__37267__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37255,map__37255__$1,sources,compiled,map__37247,map__37247__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37257(cljs.core.rest(s__37258__$1)));
} else {
var G__37427 = cljs.core.rest(s__37258__$1);
s__37258__$1 = G__37427;
continue;
}
} else {
var G__37428 = cljs.core.rest(s__37258__$1);
s__37258__$1 = G__37428;
continue;
}
} else {
return null;
}
break;
}
});})(map__37255,map__37255__$1,sources,compiled,map__37247,map__37247__$1,msg,info,reload_info))
,null,null));
});})(map__37255,map__37255__$1,sources,compiled,map__37247,map__37247__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37269_37429 = cljs.core.seq(warnings);
var chunk__37270_37430 = null;
var count__37271_37431 = (0);
var i__37272_37432 = (0);
while(true){
if((i__37272_37432 < count__37271_37431)){
var map__37277_37433 = chunk__37270_37430.cljs$core$IIndexed$_nth$arity$2(null,i__37272_37432);
var map__37277_37434__$1 = (((((!((map__37277_37433 == null))))?(((((map__37277_37433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37277_37433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37277_37433):map__37277_37433);
var w_37435 = map__37277_37434__$1;
var msg_37436__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37277_37434__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37277_37434__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37277_37434__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37277_37434__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37439)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37437),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37438),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37436__$1)].join(''));


var G__37440 = seq__37269_37429;
var G__37441 = chunk__37270_37430;
var G__37442 = count__37271_37431;
var G__37443 = (i__37272_37432 + (1));
seq__37269_37429 = G__37440;
chunk__37270_37430 = G__37441;
count__37271_37431 = G__37442;
i__37272_37432 = G__37443;
continue;
} else {
var temp__5735__auto___37444 = cljs.core.seq(seq__37269_37429);
if(temp__5735__auto___37444){
var seq__37269_37445__$1 = temp__5735__auto___37444;
if(cljs.core.chunked_seq_QMARK_(seq__37269_37445__$1)){
var c__4550__auto___37446 = cljs.core.chunk_first(seq__37269_37445__$1);
var G__37447 = cljs.core.chunk_rest(seq__37269_37445__$1);
var G__37448 = c__4550__auto___37446;
var G__37449 = cljs.core.count(c__4550__auto___37446);
var G__37450 = (0);
seq__37269_37429 = G__37447;
chunk__37270_37430 = G__37448;
count__37271_37431 = G__37449;
i__37272_37432 = G__37450;
continue;
} else {
var map__37279_37451 = cljs.core.first(seq__37269_37445__$1);
var map__37279_37452__$1 = (((((!((map__37279_37451 == null))))?(((((map__37279_37451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37279_37451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37279_37451):map__37279_37451);
var w_37453 = map__37279_37452__$1;
var msg_37454__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37279_37452__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37279_37452__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37279_37452__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37279_37452__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37457)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37455),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37456),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37454__$1)].join(''));


var G__37501 = cljs.core.next(seq__37269_37445__$1);
var G__37502 = null;
var G__37503 = (0);
var G__37504 = (0);
seq__37269_37429 = G__37501;
chunk__37270_37430 = G__37502;
count__37271_37431 = G__37503;
i__37272_37432 = G__37504;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37255,map__37255__$1,sources,compiled,warnings,map__37247,map__37247__$1,msg,info,reload_info){
return (function (p__37281){
var map__37282 = p__37281;
var map__37282__$1 = (((((!((map__37282 == null))))?(((((map__37282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37282):map__37282);
var src = map__37282__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37282__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37282__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37255,map__37255__$1,sources,compiled,warnings,map__37247,map__37247__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37255,map__37255__$1,sources,compiled,warnings,map__37247,map__37247__$1,msg,info,reload_info){
return (function (p__37284){
var map__37285 = p__37284;
var map__37285__$1 = (((((!((map__37285 == null))))?(((((map__37285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37285):map__37285);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37285__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37255,map__37255__$1,sources,compiled,warnings,map__37247,map__37247__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37255,map__37255__$1,sources,compiled,warnings,map__37247,map__37247__$1,msg,info,reload_info){
return (function (p__37287){
var map__37288 = p__37287;
var map__37288__$1 = (((((!((map__37288 == null))))?(((((map__37288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37288):map__37288);
var rc = map__37288__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37288__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37255,map__37255__$1,sources,compiled,warnings,map__37247,map__37247__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37255,map__37255__$1,sources,compiled,warnings,map__37247,map__37247__$1,msg,info,reload_info){
return (function (p1__37232_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37232_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37255,map__37255__$1,sources,compiled,warnings,map__37247,map__37247__$1,msg,info,reload_info))
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37294){
var map__37295 = p__37294;
var map__37295__$1 = (((((!((map__37295 == null))))?(((((map__37295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37295):map__37295);
var msg = map__37295__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37295__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37300 = cljs.core.seq(updates);
var chunk__37302 = null;
var count__37303 = (0);
var i__37304 = (0);
while(true){
if((i__37304 < count__37303)){
var path = chunk__37302.cljs$core$IIndexed$_nth$arity$2(null,i__37304);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37338_37511 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37341_37512 = null;
var count__37342_37513 = (0);
var i__37343_37514 = (0);
while(true){
if((i__37343_37514 < count__37342_37513)){
var node_37515 = chunk__37341_37512.cljs$core$IIndexed$_nth$arity$2(null,i__37343_37514);
var path_match_37516 = shadow.cljs.devtools.client.browser.match_paths(node_37515.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37516)){
var new_link_37517 = (function (){var G__37348 = node_37515.cloneNode(true);
G__37348.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37516),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37348;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37516], 0));

goog.dom.insertSiblingAfter(new_link_37517,node_37515);

goog.dom.removeNode(node_37515);


var G__37518 = seq__37338_37511;
var G__37519 = chunk__37341_37512;
var G__37520 = count__37342_37513;
var G__37521 = (i__37343_37514 + (1));
seq__37338_37511 = G__37518;
chunk__37341_37512 = G__37519;
count__37342_37513 = G__37520;
i__37343_37514 = G__37521;
continue;
} else {
var G__37522 = seq__37338_37511;
var G__37523 = chunk__37341_37512;
var G__37524 = count__37342_37513;
var G__37525 = (i__37343_37514 + (1));
seq__37338_37511 = G__37522;
chunk__37341_37512 = G__37523;
count__37342_37513 = G__37524;
i__37343_37514 = G__37525;
continue;
}
} else {
var temp__5735__auto___37526 = cljs.core.seq(seq__37338_37511);
if(temp__5735__auto___37526){
var seq__37338_37527__$1 = temp__5735__auto___37526;
if(cljs.core.chunked_seq_QMARK_(seq__37338_37527__$1)){
var c__4550__auto___37528 = cljs.core.chunk_first(seq__37338_37527__$1);
var G__37529 = cljs.core.chunk_rest(seq__37338_37527__$1);
var G__37530 = c__4550__auto___37528;
var G__37531 = cljs.core.count(c__4550__auto___37528);
var G__37532 = (0);
seq__37338_37511 = G__37529;
chunk__37341_37512 = G__37530;
count__37342_37513 = G__37531;
i__37343_37514 = G__37532;
continue;
} else {
var node_37533 = cljs.core.first(seq__37338_37527__$1);
var path_match_37534 = shadow.cljs.devtools.client.browser.match_paths(node_37533.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37534)){
var new_link_37535 = (function (){var G__37349 = node_37533.cloneNode(true);
G__37349.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37534),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37349;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37534], 0));

goog.dom.insertSiblingAfter(new_link_37535,node_37533);

goog.dom.removeNode(node_37533);


var G__37536 = cljs.core.next(seq__37338_37527__$1);
var G__37537 = null;
var G__37538 = (0);
var G__37539 = (0);
seq__37338_37511 = G__37536;
chunk__37341_37512 = G__37537;
count__37342_37513 = G__37538;
i__37343_37514 = G__37539;
continue;
} else {
var G__37540 = cljs.core.next(seq__37338_37527__$1);
var G__37541 = null;
var G__37542 = (0);
var G__37543 = (0);
seq__37338_37511 = G__37540;
chunk__37341_37512 = G__37541;
count__37342_37513 = G__37542;
i__37343_37514 = G__37543;
continue;
}
}
} else {
}
}
break;
}


var G__37544 = seq__37300;
var G__37545 = chunk__37302;
var G__37546 = count__37303;
var G__37547 = (i__37304 + (1));
seq__37300 = G__37544;
chunk__37302 = G__37545;
count__37303 = G__37546;
i__37304 = G__37547;
continue;
} else {
var G__37548 = seq__37300;
var G__37549 = chunk__37302;
var G__37550 = count__37303;
var G__37551 = (i__37304 + (1));
seq__37300 = G__37548;
chunk__37302 = G__37549;
count__37303 = G__37550;
i__37304 = G__37551;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37300);
if(temp__5735__auto__){
var seq__37300__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37300__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37300__$1);
var G__37552 = cljs.core.chunk_rest(seq__37300__$1);
var G__37553 = c__4550__auto__;
var G__37554 = cljs.core.count(c__4550__auto__);
var G__37555 = (0);
seq__37300 = G__37552;
chunk__37302 = G__37553;
count__37303 = G__37554;
i__37304 = G__37555;
continue;
} else {
var path = cljs.core.first(seq__37300__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37350_37556 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37353_37557 = null;
var count__37354_37558 = (0);
var i__37355_37559 = (0);
while(true){
if((i__37355_37559 < count__37354_37558)){
var node_37560 = chunk__37353_37557.cljs$core$IIndexed$_nth$arity$2(null,i__37355_37559);
var path_match_37561 = shadow.cljs.devtools.client.browser.match_paths(node_37560.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37561)){
var new_link_37562 = (function (){var G__37365 = node_37560.cloneNode(true);
G__37365.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37561),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37365;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37561], 0));

goog.dom.insertSiblingAfter(new_link_37562,node_37560);

goog.dom.removeNode(node_37560);


var G__37563 = seq__37350_37556;
var G__37564 = chunk__37353_37557;
var G__37565 = count__37354_37558;
var G__37566 = (i__37355_37559 + (1));
seq__37350_37556 = G__37563;
chunk__37353_37557 = G__37564;
count__37354_37558 = G__37565;
i__37355_37559 = G__37566;
continue;
} else {
var G__37567 = seq__37350_37556;
var G__37568 = chunk__37353_37557;
var G__37569 = count__37354_37558;
var G__37570 = (i__37355_37559 + (1));
seq__37350_37556 = G__37567;
chunk__37353_37557 = G__37568;
count__37354_37558 = G__37569;
i__37355_37559 = G__37570;
continue;
}
} else {
var temp__5735__auto___37571__$1 = cljs.core.seq(seq__37350_37556);
if(temp__5735__auto___37571__$1){
var seq__37350_37572__$1 = temp__5735__auto___37571__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37350_37572__$1)){
var c__4550__auto___37573 = cljs.core.chunk_first(seq__37350_37572__$1);
var G__37574 = cljs.core.chunk_rest(seq__37350_37572__$1);
var G__37575 = c__4550__auto___37573;
var G__37576 = cljs.core.count(c__4550__auto___37573);
var G__37577 = (0);
seq__37350_37556 = G__37574;
chunk__37353_37557 = G__37575;
count__37354_37558 = G__37576;
i__37355_37559 = G__37577;
continue;
} else {
var node_37578 = cljs.core.first(seq__37350_37572__$1);
var path_match_37579 = shadow.cljs.devtools.client.browser.match_paths(node_37578.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37579)){
var new_link_37580 = (function (){var G__37366 = node_37578.cloneNode(true);
G__37366.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37579),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37366;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37579], 0));

goog.dom.insertSiblingAfter(new_link_37580,node_37578);

goog.dom.removeNode(node_37578);


var G__37581 = cljs.core.next(seq__37350_37572__$1);
var G__37582 = null;
var G__37583 = (0);
var G__37584 = (0);
seq__37350_37556 = G__37581;
chunk__37353_37557 = G__37582;
count__37354_37558 = G__37583;
i__37355_37559 = G__37584;
continue;
} else {
var G__37585 = cljs.core.next(seq__37350_37572__$1);
var G__37586 = null;
var G__37587 = (0);
var G__37588 = (0);
seq__37350_37556 = G__37585;
chunk__37353_37557 = G__37586;
count__37354_37558 = G__37587;
i__37355_37559 = G__37588;
continue;
}
}
} else {
}
}
break;
}


var G__37589 = cljs.core.next(seq__37300__$1);
var G__37590 = null;
var G__37591 = (0);
var G__37592 = (0);
seq__37300 = G__37589;
chunk__37302 = G__37590;
count__37303 = G__37591;
i__37304 = G__37592;
continue;
} else {
var G__37593 = cljs.core.next(seq__37300__$1);
var G__37594 = null;
var G__37595 = (0);
var G__37596 = (0);
seq__37300 = G__37593;
chunk__37302 = G__37594;
count__37303 = G__37595;
i__37304 = G__37596;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37367){
var map__37368 = p__37367;
var map__37368__$1 = (((((!((map__37368 == null))))?(((((map__37368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37368):map__37368);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37368__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37368__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37368,map__37368__$1,id,js){
return (function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
});})(map__37368,map__37368__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37370,done){
var map__37371 = p__37370;
var map__37371__$1 = (((((!((map__37371 == null))))?(((((map__37371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37371):map__37371);
var msg = map__37371__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37371,map__37371__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37373){
var map__37374 = p__37373;
var map__37374__$1 = (((((!((map__37374 == null))))?(((((map__37374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37374.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37374):map__37374);
var src = map__37374__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37374__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37371,map__37371__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37371,map__37371__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(sources_to_load,map__37371,map__37371__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37376,done){
var map__37377 = p__37376;
var map__37377__$1 = (((((!((map__37377 == null))))?(((((map__37377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37377):map__37377);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37377__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37377__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37377,map__37377__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
});})(map__37377,map__37377__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37379){
var map__37380 = p__37379;
var map__37380__$1 = (((((!((map__37380 == null))))?(((((map__37380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37380):map__37380);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37380__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37380__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37382,done){
var map__37383 = p__37382;
var map__37383__$1 = (((((!((map__37383 == null))))?(((((map__37383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37383.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37383):map__37383);
var msg = map__37383__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37383__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37385_37604 = type;
var G__37385_37605__$1 = (((G__37385_37604 instanceof cljs.core.Keyword))?G__37385_37604.fqn:null);
switch (G__37385_37605__$1) {
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
var G__37386 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37387 = ((function (G__37386){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37386))
;
var G__37388 = "POST";
var G__37389 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37390 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37386,G__37387,G__37388,G__37389,G__37390);
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
}catch (e37391){var e = e37391;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___37613 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___37613)){
var s_37614 = temp__5735__auto___37613;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37614.onclose = ((function (s_37614,temp__5735__auto___37613){
return (function (e){
return null;
});})(s_37614,temp__5735__auto___37613))
;

s_37614.close();

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
