goog.provide('cheffy');
goog.require('cljs.core');
goog.require('cheffy.test');
goog.require('hx.react');
goog.require('hx.hooks');
goog.require('hx.hooks.alpha');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('cheffy.state');
goog.require('cheffy.theme');
goog.require('cheffy.db');
var module$node_modules$react_router_dom$index=shadow.js.require("module$node_modules$react_router_dom$index", {});
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
cheffy.App = (function cheffy$App(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var map__27751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748,(0),null);
var map__27751__$1 = (((((!((map__27751 == null))))?(((((map__27751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27751):map__27751);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27751__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body((function (){var vec__27753 = hx.hooks.useReducer.cljs$core$IFn$_invoke$arity$2(cheffy.state.state_reducer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cheffy.db.initial_app_db], null));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27753,(0),null);
var dispatch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27753,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"provider","provider",-302056900),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"context","context",-830191113),cheffy.state.app_state,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [state,dispatch], null)], null),children], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.App,"displayName","cheffy/App");
} else {
}
cheffy.home = (function cheffy$home(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27757,(0),null);
return hx.react.parse_body(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Home"], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.home,"displayName","cheffy/home");
} else {
}
cheffy.about = (function cheffy$about(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27761 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27761,(0),null);
return hx.react.parse_body(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About"], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.about,"displayName","cheffy/about");
} else {
}
cheffy.topic = (function cheffy$topic(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27765 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27765,(0),null);
return hx.react.parse_body((function (){var match = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"match","match",1220059550)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__27768 = match;
var map__27768__$1 = (((((!((map__27768 == null))))?(((((map__27768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27768):map__27768);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27768__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27768__$1,new cljs.core.Keyword(null,"url","url",276297046));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27768__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),["Requested Param: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))].join('')], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.topic,"displayName","cheffy/topic");
} else {
}
cheffy.topics = (function cheffy$topics(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27771 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27771,(0),null);
return hx.react.parse_body((function (){var match = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"match","match",1220059550)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__27774 = match;
var map__27774__$1 = (((((!((map__27774 == null))))?(((((map__27774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27774):map__27774);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27774__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27774__$1,new cljs.core.Keyword(null,"url","url",276297046));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27774__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Topics"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"/components"].join('')], null),"Components"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"/props-v-state"].join('')], null),"Props v. State"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/:id"].join(''),new cljs.core.Keyword(null,"component","component",1555936782),cheffy.topic], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Route,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exact","exact",1438022323),true,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"render","render",-1408033454),((function (match,map__27774,map__27774__$1,path,url,params,vec__27771,req){
return (function (){
return hx.react.f(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Please select a topic"], null));
});})(match,map__27774,map__27774__$1,path,url,params,vec__27771,req))
], null)], null)], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.topics,"displayName","cheffy/topics");
} else {
}
cheffy.Header = (function cheffy$Header(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27777,(0),null);
return hx.react.parse_body(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),"/"], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),"/about"], null),"About"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),"/topics"], null),"Topics"], null)], null)], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.Header,"displayName","cheffy/Header");
} else {
}
cheffy.app_router = (function cheffy$app_router(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27781 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27781,(0),null);
return hx.react.parse_body((function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Normalize], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.BrowserRouter,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cheffy.Header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Route,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exact","exact",1438022323),true,new cljs.core.Keyword(null,"path","path",-188191168),"/",new cljs.core.Keyword(null,"component","component",1555936782),cheffy.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/about",new cljs.core.Keyword(null,"component","component",1555936782),cheffy.about], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/topics",new cljs.core.Keyword(null,"component","component",1555936782),cheffy.topics], null)], null)], null)], null);
})()
);
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.app_router,"displayName","cheffy/app-router");
} else {
}
cheffy.start = (function cheffy$start(){
var G__27784 = hx.react.f(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cheffy.App,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cheffy.test.PrintState], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cheffy.test.PrintDbConsumer], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cheffy.test.my_component_sui], null)], null));
var G__27785 = document.getElementById("app");
return module$node_modules$react_dom$index.render(G__27784,G__27785);
});
cheffy.init = (function cheffy$init(){
return cheffy.start();
});
goog.exportSymbol('cheffy.init', cheffy.init);

//# sourceMappingURL=cheffy.js.map
