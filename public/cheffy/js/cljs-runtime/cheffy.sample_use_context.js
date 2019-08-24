goog.provide('cheffy.sample_use_context');
goog.require('cljs.core');
goog.require('hx.react');
goog.require('hx.hooks');
goog.require('hx.hooks.alpha');
goog.require('cheffy.state');
goog.require('cheffy.theme');
goog.require('cheffy.db');
var module$node_modules$$material_ui$core$styles$index=shadow.js.require("module$node_modules$$material_ui$core$styles$index", {});
var module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs=shadow.js.require("module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs", {});
cheffy.sample_use_context.styles = ({"root": ({"backgroundColor": "red"})});
cheffy.sample_use_context.ComponentWithStyles_hx_wrapped = (function cheffy$sample_use_context$ComponentWithStyles_hx_wrapped(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var map__27167 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27164,(0),null);
var map__27167__$1 = (((((!((map__27167 == null))))?(((((map__27167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27167):map__27167);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27167__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classes.root], null),"testing a commosent with styles"], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.sample_use_context.ComponentWithStyles_hx_wrapped,"displayName","cheffy.sample-use-context/ComponentWithStyles");
} else {
}

cheffy.sample_use_context.ComponentWithStyles = (function (){var fexpr__27169 = module$node_modules$$material_ui$core$styles$index.withStyles(cheffy.sample_use_context.styles);
return (fexpr__27169.cljs$core$IFn$_invoke$arity$1 ? fexpr__27169.cljs$core$IFn$_invoke$arity$1(cheffy.sample_use_context.ComponentWithStyles_hx_wrapped) : fexpr__27169.call(null,cheffy.sample_use_context.ComponentWithStyles_hx_wrapped));
})();
cheffy.sample_use_context.my_component_mui_hx_wrapped = (function cheffy$sample_use_context$my_component_mui_hx_wrapped(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27171 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var map__27174 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27171,(0),null);
var map__27174__$1 = (((((!((map__27174 == null))))?(((((map__27174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27174):map__27174);
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27174__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),classes.root], null),"kjkjjgjgjgg",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"primary"], null),"primary"], null)], null)], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.sample_use_context.my_component_mui_hx_wrapped,"displayName","cheffy.sample-use-context/my-component-mui");
} else {
}

cheffy.sample_use_context.my_component_mui = (function (){var fexpr__27176 = module$node_modules$$material_ui$core$styles$index.withStyles(cheffy.sample_use_context.styles);
return (fexpr__27176.cljs$core$IFn$_invoke$arity$1 ? fexpr__27176.cljs$core$IFn$_invoke$arity$1(cheffy.sample_use_context.my_component_mui_hx_wrapped) : fexpr__27176.call(null,cheffy.sample_use_context.my_component_mui_hx_wrapped));
})();
cheffy.sample_use_context.my_component_sui = (function cheffy$sample_use_context$my_component_sui(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27178,(0),null);
return hx.react.parse_body((function (){var vec__27181 = (hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1 ? hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1(cheffy.state.app_state) : hx.hooks.useContext.call(null,cheffy.state.app_state));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27181,(0),null);
var dispatch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27181,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Normalize], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.ThemeProvider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),cheffy.theme.cheffy_theme], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [module$node_modules$$smooth_ui$core_sc$dist$smooth_ui_core_sc_cjs.Button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (vec__27181,state,dispatch,vec__27178,_){
return (function (){
var G__27184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("foo","load","foo/load",-1319061850)], null);
return (dispatch.cljs$core$IFn$_invoke$arity$1 ? dispatch.cljs$core$IFn$_invoke$arity$1(G__27184) : dispatch.call(null,G__27184));
});})(vec__27181,state,dispatch,vec__27178,_))
], null),"hello cheffy"], null)], null)], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.sample_use_context.my_component_sui,"displayName","cheffy.sample-use-context/my-component-sui");
} else {
}
cheffy.sample_use_context.PrintState = (function cheffy$sample_use_context$PrintState(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27186 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27186,(0),null);
return hx.react.parse_body((function (){var vec__27189 = (hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1 ? hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1(cheffy.state.app_state) : hx.hooks.useContext.call(null,cheffy.state.app_state));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27189,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"foo","foo",1268894036).cljs$core$IFn$_invoke$arity$1(state)], 0))], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.sample_use_context.PrintState,"displayName","cheffy.sample-use-context/PrintState");
} else {
}
cheffy.sample_use_context.PrintDbConsumer = (function cheffy$sample_use_context$PrintDbConsumer(props__26868__auto__,maybe_ref__26869__auto__){
var vec__27193 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26868__auto__) : hx.react.props__GT_clj.call(null,props__26868__auto__)),maybe_ref__26869__auto__], null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27193,(0),null);
return hx.react.parse_body((function (){var vec__27196 = (hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1 ? hx.hooks.useContext.cljs$core$IFn$_invoke$arity$1(cheffy.state.app_state) : hx.hooks.useContext.call(null,cheffy.state.app_state));
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27196,(0),null);
var dispatch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27196,(1),null);
var map__27199 = state;
var map__27199__$1 = (((((!((map__27199 == null))))?(((((map__27199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27199):map__27199);
var foo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27199__$1,new cljs.core.Keyword(null,"foo","foo",1268894036));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27199__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Initial state: ",cljs.core.prn_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state], 0))], null)], null);
})());
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(cheffy.sample_use_context.PrintDbConsumer,"displayName","cheffy.sample-use-context/PrintDbConsumer");
} else {
}

//# sourceMappingURL=cheffy.sample_use_context.js.map
