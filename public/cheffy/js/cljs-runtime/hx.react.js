goog.provide('hx.react');
goog.require('cljs.core');
goog.require('goog.object');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
goog.require('hx.hiccup');
goog.require('hx.utils');
hx.react.props__GT_clj = hx.utils.props__GT_clj;
hx.react.props = (function hx$react$props(el,first_arg,props_QMARK_){
if(cljs.core.truth_((function (){var and__4120__auto__ = typeof el === 'string';
if(and__4120__auto__){
return props_QMARK_;
} else {
return and__4120__auto__;
}
})())){
return hx.utils.clj__GT_props.cljs$core$IFn$_invoke$arity$1(first_arg);
} else {
if(cljs.core.truth_(props_QMARK_)){
return hx.utils.clj__GT_props.cljs$core$IFn$_invoke$arity$2(first_arg,false);
} else {
return null;

}
}
});
hx.react.fn_as_child = (function hx$react$fn_as_child(config,first_child,args){
return (function() { 
var G__26149__delegate = function (args__$1){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(first_child,args__$1);
if(cljs.core.vector_QMARK_(ret)){
return hx.hiccup._as_element(ret,config);
} else {
return ret;
}
};
var G__26149 = function (var_args){
var args__$1 = null;
if (arguments.length > 0) {
var G__26150__i = 0, G__26150__a = new Array(arguments.length -  0);
while (G__26150__i < G__26150__a.length) {G__26150__a[G__26150__i] = arguments[G__26150__i + 0]; ++G__26150__i;}
  args__$1 = new cljs.core.IndexedSeq(G__26150__a,0,null);
} 
return G__26149__delegate.call(this,args__$1);};
G__26149.cljs$lang$maxFixedArity = 0;
G__26149.cljs$lang$applyTo = (function (arglist__26151){
var args__$1 = cljs.core.seq(arglist__26151);
return G__26149__delegate(args__$1);
});
G__26149.cljs$core$IFn$_invoke$arity$variadic = G__26149__delegate;
return G__26149;
})()
;
});
hx.react.create_element = (function hx$react$create_element(config,el,args){
var first_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(args,(0),null);
var props_QMARK_ = cljs.core.map_QMARK_(first_arg);
var props = hx.react.props(el,first_arg,props_QMARK_);
var children = ((props_QMARK_)?cljs.core._rest(args):args);
var first_child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(children,(0),null);
var G__26066 = cljs.core.count(children);
switch (G__26066) {
case (0):
return module$node_modules$react$index.createElement(el,props);

break;
case (1):
if(goog.isFunction(first_child)){
var G__26067 = el;
var G__26068 = props;
var G__26069 = hx.react.fn_as_child(config,first_child,args);
return module$node_modules$react$index.createElement(G__26067,G__26068,G__26069);
} else {
var G__26070 = el;
var G__26071 = props;
var G__26072 = hx.hiccup._as_element(first_child,config);
return module$node_modules$react$index.createElement(G__26070,G__26071,G__26072);
}

break;
default:
return module$node_modules$react$index.createElement.apply(null,(function (){var a = [el,props];
var c = children;
while(true){
if((!((c == null)))){
a.push(hx.hiccup._as_element(cljs.core._first(c),config));

var G__26153 = a;
var G__26154 = cljs.core._next(c);
a = G__26153;
c = G__26154;
continue;
} else {
return a;
}
break;
}
})());

}
});
hx.react.react_hiccup_config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"create-element","create-element",193243064),hx.react.create_element,new cljs.core.Keyword(null,"is-element?","is-element?",-1231778016),module$node_modules$react$index.isValidElement,new cljs.core.Keyword(null,"fragment","fragment",826775688),module$node_modules$react$index.Fragment], null);
hx.react.f = (function hx$react$f(form){
return hx.hiccup.parse(hx.react.react_hiccup_config,form);
});
hx.react.parse_body = (function hx$react$parse_body(body){
if(cljs.core.vector_QMARK_(body)){
return hx.react.f(body);
} else {
return body;
}
});
hx.react.fragment = module$node_modules$react$index.Fragment;
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"<>","<>",1280186386),hx.react.fragment);
hx.react.Provider = (function hx$react$Provider(props__26042__auto__,maybe_ref__26043__auto__){
var vec__26074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1 ? hx.react.props__GT_clj.cljs$core$IFn$_invoke$arity$1(props__26042__auto__) : hx.react.props__GT_clj.call(null,props__26042__auto__)),maybe_ref__26043__auto__], null);
var map__26077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26074,(0),null);
var map__26077__$1 = (((((!((map__26077 == null))))?(((((map__26077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26077):map__26077);
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26077__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26077__$1,new cljs.core.Keyword(null,"value","value",305978217));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26077__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return hx.react.parse_body(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [context.Provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null),children], null));
});

if(cljs.core.truth_(goog.DEBUG)){
goog.object.set(hx.react.Provider,"displayName","hx.react/Provider");
} else {
}
hx.hiccup.extend_tag(new cljs.core.Keyword(null,"provider","provider",-302056900),hx.react.Provider);
hx.react.$ = (function hx$react$$(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26155 = arguments.length;
var i__4731__auto___26156 = (0);
while(true){
if((i__4731__auto___26156 < len__4730__auto___26155)){
args__4736__auto__.push((arguments[i__4731__auto___26156]));

var G__26157 = (i__4731__auto___26156 + (1));
i__4731__auto___26156 = G__26157;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return hx.react.$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

hx.react.$.cljs$core$IFn$_invoke$arity$variadic = (function (el,args){
return hx.hiccup.make_element(hx.react.react_hiccup_config,el,args);
});

hx.react.$.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
hx.react.$.cljs$lang$applyTo = (function (seq26079){
var G__26080 = cljs.core.first(seq26079);
var seq26079__$1 = cljs.core.next(seq26079);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26080,seq26079__$1);
});

hx.react.assign_methods = (function hx$react$assign_methods(class$,method_map){
var seq__26081_26158 = cljs.core.seq(method_map);
var chunk__26082_26159 = null;
var count__26083_26160 = (0);
var i__26084_26161 = (0);
while(true){
if((i__26084_26161 < count__26083_26160)){
var vec__26097_26162 = chunk__26082_26159.cljs$core$IIndexed$_nth$arity$2(null,i__26084_26161);
var method_name_26163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26097_26162,(0),null);
var method_fn_26164 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26097_26162,(1),null);
var G__26100_26165 = class$.prototype;
var G__26101_26166 = cljs.core.munge(cljs.core.name(method_name_26163));
var G__26102_26167 = method_fn_26164;
goog.object.set(G__26100_26165,G__26101_26166,G__26102_26167);


var G__26168 = seq__26081_26158;
var G__26169 = chunk__26082_26159;
var G__26170 = count__26083_26160;
var G__26171 = (i__26084_26161 + (1));
seq__26081_26158 = G__26168;
chunk__26082_26159 = G__26169;
count__26083_26160 = G__26170;
i__26084_26161 = G__26171;
continue;
} else {
var temp__5735__auto___26172 = cljs.core.seq(seq__26081_26158);
if(temp__5735__auto___26172){
var seq__26081_26173__$1 = temp__5735__auto___26172;
if(cljs.core.chunked_seq_QMARK_(seq__26081_26173__$1)){
var c__4550__auto___26174 = cljs.core.chunk_first(seq__26081_26173__$1);
var G__26175 = cljs.core.chunk_rest(seq__26081_26173__$1);
var G__26176 = c__4550__auto___26174;
var G__26177 = cljs.core.count(c__4550__auto___26174);
var G__26178 = (0);
seq__26081_26158 = G__26175;
chunk__26082_26159 = G__26176;
count__26083_26160 = G__26177;
i__26084_26161 = G__26178;
continue;
} else {
var vec__26103_26179 = cljs.core.first(seq__26081_26173__$1);
var method_name_26180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26103_26179,(0),null);
var method_fn_26181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26103_26179,(1),null);
var G__26106_26182 = class$.prototype;
var G__26107_26183 = cljs.core.munge(cljs.core.name(method_name_26180));
var G__26108_26184 = method_fn_26181;
goog.object.set(G__26106_26182,G__26107_26183,G__26108_26184);


var G__26185 = cljs.core.next(seq__26081_26173__$1);
var G__26186 = null;
var G__26187 = (0);
var G__26188 = (0);
seq__26081_26158 = G__26185;
chunk__26082_26159 = G__26186;
count__26083_26160 = G__26187;
i__26084_26161 = G__26188;
continue;
}
} else {
}
}
break;
}

return class$;
});
hx.react.create_class = (function hx$react$create_class(super_class,init_fn,static_properties,method_names){
var ctor = (function (props){
var this$ = this;
var seq__26109_26190 = cljs.core.seq(method_names);
var chunk__26110_26191 = null;
var count__26111_26192 = (0);
var i__26112_26193 = (0);
while(true){
if((i__26112_26193 < count__26111_26192)){
var method_26197 = chunk__26110_26191.cljs$core$IIndexed$_nth$arity$2(null,i__26112_26193);
var G__26123_26198 = this$;
var G__26124_26199 = cljs.core.munge(method_26197);
var G__26125_26200 = (function (){var G__26126 = this$;
var G__26127 = cljs.core.munge(method_26197);
return goog.object.get(G__26126,G__26127);
})().bind(this$);
goog.object.set(G__26123_26198,G__26124_26199,G__26125_26200);


var G__26201 = seq__26109_26190;
var G__26202 = chunk__26110_26191;
var G__26203 = count__26111_26192;
var G__26204 = (i__26112_26193 + (1));
seq__26109_26190 = G__26201;
chunk__26110_26191 = G__26202;
count__26111_26192 = G__26203;
i__26112_26193 = G__26204;
continue;
} else {
var temp__5735__auto___26205 = cljs.core.seq(seq__26109_26190);
if(temp__5735__auto___26205){
var seq__26109_26206__$1 = temp__5735__auto___26205;
if(cljs.core.chunked_seq_QMARK_(seq__26109_26206__$1)){
var c__4550__auto___26207 = cljs.core.chunk_first(seq__26109_26206__$1);
var G__26208 = cljs.core.chunk_rest(seq__26109_26206__$1);
var G__26209 = c__4550__auto___26207;
var G__26210 = cljs.core.count(c__4550__auto___26207);
var G__26211 = (0);
seq__26109_26190 = G__26208;
chunk__26110_26191 = G__26209;
count__26111_26192 = G__26210;
i__26112_26193 = G__26211;
continue;
} else {
var method_26212 = cljs.core.first(seq__26109_26206__$1);
var G__26128_26213 = this$;
var G__26129_26214 = cljs.core.munge(method_26212);
var G__26130_26215 = (function (){var G__26131 = this$;
var G__26132 = cljs.core.munge(method_26212);
return goog.object.get(G__26131,G__26132);
})().bind(this$);
goog.object.set(G__26128_26213,G__26129_26214,G__26130_26215);


var G__26216 = cljs.core.next(seq__26109_26206__$1);
var G__26217 = null;
var G__26218 = (0);
var G__26219 = (0);
seq__26109_26190 = G__26216;
chunk__26110_26191 = G__26217;
count__26111_26192 = G__26218;
i__26112_26193 = G__26219;
continue;
}
} else {
}
}
break;
}

return (init_fn.cljs$core$IFn$_invoke$arity$2 ? init_fn.cljs$core$IFn$_invoke$arity$2(this$,props) : init_fn.call(null,this$,props));
});
goog.inherits(ctor,super_class);

var seq__26133_26222 = cljs.core.seq(static_properties);
var chunk__26134_26223 = null;
var count__26135_26224 = (0);
var i__26136_26225 = (0);
while(true){
if((i__26136_26225 < count__26135_26224)){
var vec__26143_26226 = chunk__26134_26223.cljs$core$IIndexed$_nth$arity$2(null,i__26136_26225);
var k_26227 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26143_26226,(0),null);
var v_26228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26143_26226,(1),null);
goog.object.set(ctor,k_26227,v_26228);


var G__26229 = seq__26133_26222;
var G__26230 = chunk__26134_26223;
var G__26231 = count__26135_26224;
var G__26232 = (i__26136_26225 + (1));
seq__26133_26222 = G__26229;
chunk__26134_26223 = G__26230;
count__26135_26224 = G__26231;
i__26136_26225 = G__26232;
continue;
} else {
var temp__5735__auto___26233 = cljs.core.seq(seq__26133_26222);
if(temp__5735__auto___26233){
var seq__26133_26234__$1 = temp__5735__auto___26233;
if(cljs.core.chunked_seq_QMARK_(seq__26133_26234__$1)){
var c__4550__auto___26235 = cljs.core.chunk_first(seq__26133_26234__$1);
var G__26236 = cljs.core.chunk_rest(seq__26133_26234__$1);
var G__26237 = c__4550__auto___26235;
var G__26238 = cljs.core.count(c__4550__auto___26235);
var G__26239 = (0);
seq__26133_26222 = G__26236;
chunk__26134_26223 = G__26237;
count__26135_26224 = G__26238;
i__26136_26225 = G__26239;
continue;
} else {
var vec__26146_26240 = cljs.core.first(seq__26133_26234__$1);
var k_26241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26146_26240,(0),null);
var v_26242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26146_26240,(1),null);
goog.object.set(ctor,k_26241,v_26242);


var G__26243 = cljs.core.next(seq__26133_26234__$1);
var G__26244 = null;
var G__26245 = (0);
var G__26246 = (0);
seq__26133_26222 = G__26243;
chunk__26134_26223 = G__26244;
count__26135_26224 = G__26245;
i__26136_26225 = G__26246;
continue;
}
} else {
}
}
break;
}

return ctor;
});
hx.react.create_component = (function hx$react$create_component(init_fn,static_properties,method_names){
return hx.react.create_class(module$node_modules$react$index.Component,init_fn,static_properties,method_names);
});
hx.react.create_pure_component = (function hx$react$create_pure_component(init_fn,static_properties,method_names){
return hx.react.create_class(module$node_modules$react$index.PureComponent,init_fn,static_properties,method_names);
});
/**
 * Just react/createContext
 */
hx.react.create_context = module$node_modules$react$index.createContext;
/**
 * Takes a React component, and creates a function that returns
 *   a new React element
 */
hx.react.factory = (function hx$react$factory(component){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hx.react.$,component);
});

//# sourceMappingURL=hx.react.js.map
