goog.provide('cheffy.state');
goog.require('cljs.core');
goog.require('hx.react');
goog.require('hx.hooks');
goog.require('hx.hooks.alpha');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
cheffy.state.app_state = module$node_modules$react$index.createContext();
cheffy.state.state_reducer = (function cheffy$state$state_reducer(state,p__27157){
var vec__27158 = p__27157;
var seq__27159 = cljs.core.seq(vec__27158);
var first__27160 = cljs.core.first(seq__27159);
var seq__27159__$1 = cljs.core.next(seq__27159);
var type = first__27160;
var args = seq__27159__$1;
var G__27161 = type;
var G__27161__$1 = (((G__27161 instanceof cljs.core.Keyword))?G__27161.fqn:null);
switch (G__27161__$1) {
case "foo/load":
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"foo","foo",1268894036),"bar");

break;
default:
console.warn("Unknown action type",type);

return state;

}
});

//# sourceMappingURL=cheffy.state.js.map
