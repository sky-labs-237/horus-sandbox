goog.provide('cheffy.test');
goog.require('cljs.core');
goog.require('hx.react');
goog.require('hx.hooks');
goog.require('hx.hooks.alpha');
goog.require('cheffy.state');
goog.require('cheffy.theme');
goog.require('cheffy.db');
var module$node_modules$$material_ui$core$styles$index=shadow.js.require("module$node_modules$$material_ui$core$styles$index", {});
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
var module$node_modules$react_router_dom$index=shadow.js.require("module$node_modules$react_router_dom$index", {});
cheffy.test.styles = ({"root": ({"backgroundColor": "red"})});
cheffy.test.ComponentWithStyles_hx_wrapped = (function cheffy$test$ComponentWithStyles_hx_wrapped(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var map__27685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27682,(0),null);
var map__27685__$1 = (((((!((map__27685 == null))))?(((((map__27685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27685):map__27685);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27685__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classes.root], null),"testing a commosent with styles"], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.test.ComponentWithStyles_hx_wrapped,"displayName","cheffy.test/ComponentWithStyles");
} else {
}

cheffy.test.ComponentWithStyles = (function (){var fexpr__27687 = module$node_modules$$material_ui$core$styles$index.withStyles(cheffy.test.styles);
return (fexpr__27687.cljs$core$IFn$_invoke$arity$1 ? fexpr__27687.cljs$core$IFn$_invoke$arity$1(cheffy.test.ComponentWithStyles_hx_wrapped) : fexpr__27687.call(null,cheffy.test.ComponentWithStyles_hx_wrapped));
})();
cheffy.test.my_component_mui_hx_wrapped = (function cheffy$test$my_component_mui_hx_wrapped(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27689 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var map__27692 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27689,(0),null);
var map__27692__$1 = (((((!((map__27692 == null))))?(((((map__27692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27692):map__27692);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27692__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classes.root], null),"kjkjjgjgjgg",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"primary"], null),"primary"], null)], null)], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.test.my_component_mui_hx_wrapped,"displayName","cheffy.test/my-component-mui");
} else {
}

cheffy.test.my_component_mui = (function (){var fexpr__27694 = module$node_modules$$material_ui$core$styles$index.withStyles(cheffy.test.styles);
return (fexpr__27694.cljs$core$IFn$_invoke$arity$1 ? fexpr__27694.cljs$core$IFn$_invoke$arity$1(cheffy.test.my_component_mui_hx_wrapped) : fexpr__27694.call(null,cheffy.test.my_component_mui_hx_wrapped));
})();
cheffy.test.my_component_sui = (function cheffy$test$my_component_sui(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27696,(0),null);
return hx.react.parse_body((function (){var vec__27699 = (hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1 ? hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1(cheffy.state.app_state) : hx.hooks.useContext.call(null,cheffy.state.app_state));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27699,(0),null);
var dispatch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27699,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Normalize], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.ThemeProvider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),cheffy.theme.cheffy_theme], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__27699,state,dispatch,vec__27696,_){
return (function (){
var G__27702 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("foo","load","foo/load",-1319061850)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__27702) : dispatch.call(null,G__27702));
});})(vec__27699,state,dispatch,vec__27696,_))
], null),"hello cheffy"], null)], null)], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.test.my_component_sui,"displayName","cheffy.test/my-component-sui");
} else {
}
cheffy.test.PrintState = (function cheffy$test$PrintState(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27704,(0),null);
return hx.react.parse_body((function (){var vec__27707 = (hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1 ? hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1(cheffy.state.app_state) : hx.hooks.useContext.call(null,cheffy.state.app_state));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27707,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"foo","foo",1268894036).cljs$core$IFn$_invoke$arity$1(state)], 0))], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.test.PrintState,"displayName","cheffy.test/PrintState");
} else {
}
cheffy.test.PrintDbConsumer = (function cheffy$test$PrintDbConsumer(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27711 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27711,(0),null);
return hx.react.parse_body((function (){var vec__27714 = (hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1 ? hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1(cheffy.state.app_state) : hx.hooks.useContext.call(null,cheffy.state.app_state));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27714,(0),null);
var dispatch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27714,(1),null);
var map__27717 = state;
var map__27717__$1 = (((((!((map__27717 == null))))?(((((map__27717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27717):map__27717);
var foo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27717__$1,new cljs.core.Keyword(null,"foo","foo",1268894036));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27717__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Initial state: ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0))], null)], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.test.PrintDbConsumer,"displayName","cheffy.test/PrintDbConsumer");
} else {
}
cheffy.test.home = (function cheffy$test$home(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27720 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27720,(0),null);
return hx.react.parse_body(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Home"], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.test.home,"displayName","cheffy.test/home");
} else {
}
cheffy.test.about = (function cheffy$test$about(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27724,(0),null);
return hx.react.parse_body(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About"], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.test.about,"displayName","cheffy.test/about");
} else {
}
cheffy.test.topic = (function cheffy$test$topic(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27728,(0),null);
return hx.react.parse_body((function (){var match = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"match","match",1220059550)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__27731 = match;
var map__27731__$1 = (((((!((map__27731 == null))))?(((((map__27731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27731):map__27731);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27731__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27731__$1,new cljs.core.Keyword(null,"url","url",276297046));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27731__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),["Requested Param: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params))].join('')], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.test.topic,"displayName","cheffy.test/topic");
} else {
}
cheffy.test.topics = (function cheffy$test$topics(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27734 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27734,(0),null);
return hx.react.parse_body((function (){var match = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(req,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"match","match",1220059550)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var map__27737 = match;
var map__27737__$1 = (((((!((map__27737 == null))))?(((((map__27737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27737.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27737):map__27737);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27737__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27737__$1,new cljs.core.Keyword(null,"url","url",276297046));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27737__$1,new cljs.core.Keyword(null,"params","params",710516235));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Topics"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"/components"].join('')], null),"Components"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),"/props-v-state"].join('')], null),"Props v. State"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"/:id"].join(''),new cljs.core.Keyword(null,"component","component",1555936782),cheffy.test.topic], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Route,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exact","exact",1438022323),true,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"render","render",-1408033454),((function (match,map__27737,map__27737__$1,path,url,params,vec__27734,req){
return (function (){
return hx.react.f(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Please select a topic"], null));
});})(match,map__27737,map__27737__$1,path,url,params,vec__27734,req))
], null)], null)], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.test.topics,"displayName","cheffy.test/topics");
} else {
}
cheffy.test.Header = (function cheffy$test$Header(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27740 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27740,(0),null);
return hx.react.parse_body(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),"/"], null),"Home"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),"/about"], null),"About"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"to","to",192099007),"/topics"], null),"Topics"], null)], null)], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.test.Header,"displayName","cheffy.test/Header");
} else {
}
cheffy.test.app_router = (function cheffy$test$app_router(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27744 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27744,(0),null);
return hx.react.parse_body((function (){
new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Normalize], null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.BrowserRouter,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cheffy.test.Header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Route,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"exact","exact",1438022323),true,new cljs.core.Keyword(null,"path","path",-188191168),"/",new cljs.core.Keyword(null,"component","component",1555936782),cheffy.test.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/about",new cljs.core.Keyword(null,"component","component",1555936782),cheffy.test.about], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$react_router_dom$index.Route,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"/topics",new cljs.core.Keyword(null,"component","component",1555936782),cheffy.test.topics], null)], null)], null)], null);
})()
);
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.test.app_router,"displayName","cheffy.test/app-router");
} else {
}

//# sourceMappingURL=cheffy.test.js.map
