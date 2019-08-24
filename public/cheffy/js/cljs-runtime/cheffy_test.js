goog.provide('cheffy_test');
goog.require('cljs.core');
goog.require('hx.react');
goog.require('hx.hooks');
goog.require('hx.hooks.alpha');
goog.require('cheffy.state');
goog.require('cheffy.theme');
goog.require('cheffy.db');
var module$node_modules$$material_ui$core$styles$index=shadow.js.require("module$node_modules$$material_ui$core$styles$index", {});
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
cheffy_test.styles = ({"root": ({"backgroundColor": "red"})});
cheffy_test.ComponentWithStyles_hx_wrapped = (function cheffy_test$ComponentWithStyles_hx_wrapped(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27241 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var map__27244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27241,(0),null);
var map__27244__$1 = (((((!((map__27244 == null))))?(((((map__27244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27244.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27244):map__27244);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27244__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classes.root], null),"testing a commosent with styles"], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy_test.ComponentWithStyles_hx_wrapped,"displayName","cheffy-test/ComponentWithStyles");
} else {
}

cheffy_test.ComponentWithStyles = (function (){var fexpr__27246 = module$node_modules$$material_ui$core$styles$index.withStyles(cheffy_test.styles);
return (fexpr__27246.cljs$core$IFn$_invoke$arity$1 ? fexpr__27246.cljs$core$IFn$_invoke$arity$1(cheffy_test.ComponentWithStyles_hx_wrapped) : fexpr__27246.call(null,cheffy_test.ComponentWithStyles_hx_wrapped));
})();
cheffy_test.my_component_mui_hx_wrapped = (function cheffy_test$my_component_mui_hx_wrapped(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var map__27251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27248,(0),null);
var map__27251__$1 = (((((!((map__27251 == null))))?(((((map__27251.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27251.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27251):map__27251);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27251__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classes.root], null),"kjkjjgjgjgg",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"primary"], null),"primary"], null)], null)], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy_test.my_component_mui_hx_wrapped,"displayName","cheffy-test/my-component-mui");
} else {
}

cheffy_test.my_component_mui = (function (){var fexpr__27253 = module$node_modules$$material_ui$core$styles$index.withStyles(cheffy_test.styles);
return (fexpr__27253.cljs$core$IFn$_invoke$arity$1 ? fexpr__27253.cljs$core$IFn$_invoke$arity$1(cheffy_test.my_component_mui_hx_wrapped) : fexpr__27253.call(null,cheffy_test.my_component_mui_hx_wrapped));
})();
cheffy_test.my_component_sui = (function cheffy_test$my_component_sui(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27255 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27255,(0),null);
return hx.react.parse_body((function (){var vec__27258 = (hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1 ? hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1(cheffy.state.app_state) : hx.hooks.useContext.call(null,cheffy.state.app_state));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27258,(0),null);
var dispatch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27258,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Normalize], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.ThemeProvider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),cheffy.theme.cheffy_theme], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__27258,state,dispatch,vec__27255,_){
return (function (){
var G__27261 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("foo","load","foo/load",-1319061850)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__27261) : dispatch.call(null,G__27261));
});})(vec__27258,state,dispatch,vec__27255,_))
], null),"hello cheffy"], null)], null)], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy_test.my_component_sui,"displayName","cheffy-test/my-component-sui");
} else {
}
cheffy_test.PrintState = (function cheffy_test$PrintState(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27263 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27263,(0),null);
return hx.react.parse_body((function (){var vec__27266 = (hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1 ? hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1(cheffy.state.app_state) : hx.hooks.useContext.call(null,cheffy.state.app_state));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27266,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"foo","foo",1268894036).cljs$core$IFn$_invoke$arity$1(state)], 0))], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy_test.PrintState,"displayName","cheffy-test/PrintState");
} else {
}
cheffy_test.PrintDbConsumer = (function cheffy_test$PrintDbConsumer(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27270 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27270,(0),null);
return hx.react.parse_body((function (){var vec__27273 = (hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1 ? hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1(cheffy.state.app_state) : hx.hooks.useContext.call(null,cheffy.state.app_state));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27273,(0),null);
var dispatch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27273,(1),null);
var map__27276 = state;
var map__27276__$1 = (((((!((map__27276 == null))))?(((((map__27276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27276):map__27276);
var foo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27276__$1,new cljs.core.Keyword(null,"foo","foo",1268894036));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27276__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Initial state: ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0))], null)], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy_test.PrintDbConsumer,"displayName","cheffy-test/PrintDbConsumer");
} else {
}

//# sourceMappingURL=cheffy_test.js.map
