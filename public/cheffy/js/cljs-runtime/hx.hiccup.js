goog.provide('hx.hiccup');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('hx.utils');

/**
 * @interface
 */
hx.hiccup.IElement = function(){};

/**
 * Converts to an element
 */
hx.hiccup._as_element = (function hx$hiccup$_as_element(el,config){
if((((!((el == null)))) && ((!((el.hx$hiccup$IElement$_as_element$arity$2 == null)))))){
return el.hx$hiccup$IElement$_as_element$arity$2(el,config);
} else {
var x__4433__auto__ = (((el == null))?null:el);
var m__4434__auto__ = (hx.hiccup._as_element[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(el,config) : m__4434__auto__.call(null,el,config));
} else {
var m__4431__auto__ = (hx.hiccup._as_element["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(el,config) : m__4431__auto__.call(null,el,config));
} else {
throw cljs.core.missing_protocol("IElement.-as-element",el);
}
}
}
});

if((typeof hx !== 'undefined') && (typeof hx.hiccup !== 'undefined') && (typeof hx.hiccup.tag_registry !== 'undefined')){
} else {
hx.hiccup.tag_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
hx.hiccup.extend_tag = (function hx$hiccup$extend_tag(tag,impl){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(hx.hiccup.tag_registry,cljs.core.assoc,tag,impl);
});
hx.hiccup.tag__GT_impl = (function hx$hiccup$tag__GT_impl(tag){
var temp__5733__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(hx.hiccup.tag_registry),tag,null);
if(cljs.core.truth_(temp__5733__auto__)){
var t = temp__5733__auto__;
return t;
} else {
return cljs.core.name(tag);
}
});
hx.hiccup.parse_tag = (function hx$hiccup$parse_tag(el){
if((el instanceof cljs.core.Keyword)){
return hx.hiccup.tag__GT_impl(el);
} else {
if(cljs.core.var_QMARK_(el)){
return (function() { 
var hx$hiccup$parse_tag_$_VarEl__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(el,args);
};
var hx$hiccup$parse_tag_$_VarEl = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26618__i = 0, G__26618__a = new Array(arguments.length -  0);
while (G__26618__i < G__26618__a.length) {G__26618__a[G__26618__i] = arguments[G__26618__i + 0]; ++G__26618__i;}
  args = new cljs.core.IndexedSeq(G__26618__a,0,null);
} 
return hx$hiccup$parse_tag_$_VarEl__delegate.call(this,args);};
hx$hiccup$parse_tag_$_VarEl.cljs$lang$maxFixedArity = 0;
hx$hiccup$parse_tag_$_VarEl.cljs$lang$applyTo = (function (arglist__26619){
var args = cljs.core.seq(arglist__26619);
return hx$hiccup$parse_tag_$_VarEl__delegate(args);
});
hx$hiccup$parse_tag_$_VarEl.cljs$core$IFn$_invoke$arity$variadic = hx$hiccup$parse_tag_$_VarEl__delegate;
return hx$hiccup$parse_tag_$_VarEl;
})()
;
} else {
return el;

}
}
});
hx.hiccup.make_element = (function hx$hiccup$make_element(config,el,args){
var fexpr__26564 = new cljs.core.Keyword(null,"create-element","create-element",193243064).cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__26564.cljs$core$IFn$_invoke$arity$3 ? fexpr__26564.cljs$core$IFn$_invoke$arity$3(config,el,args) : fexpr__26564.call(null,config,el,args));
});
hx.hiccup.parse = (function hx$hiccup$parse(config,hiccup){
return hx.hiccup.make_element(config,hx.hiccup.parse_tag(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(hiccup,(0))),cljs.core.rest(hiccup));
});
hx.hiccup.ex = (function hx$hiccup$ex(s){
return (new Error(s));
});
goog.object.set(hx.hiccup.IElement,"null",true);

var G__26567_26626 = hx.hiccup._as_element;
var G__26568_26627 = "null";
var G__26569_26628 = ((function (G__26567_26626,G__26568_26627){
return (function (_,___$1){
return null;
});})(G__26567_26626,G__26568_26627))
;
goog.object.set(G__26567_26626,G__26568_26627,G__26569_26628);

goog.object.set(hx.hiccup.IElement,"number",true);

var G__26570_26629 = hx.hiccup._as_element;
var G__26571_26630 = "number";
var G__26572_26631 = ((function (G__26570_26629,G__26571_26630){
return (function (n,_){
return n;
});})(G__26570_26629,G__26571_26630))
;
goog.object.set(G__26570_26629,G__26571_26630,G__26572_26631);

goog.object.set(hx.hiccup.IElement,"string",true);

var G__26573_26632 = hx.hiccup._as_element;
var G__26574_26633 = "string";
var G__26575_26634 = ((function (G__26573_26632,G__26574_26633){
return (function (s,_){
return s;
});})(G__26573_26632,G__26574_26633))
;
goog.object.set(G__26573_26632,G__26574_26633,G__26575_26634);

cljs.core.PersistentVector.prototype.hx$hiccup$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.hx$hiccup$IElement$_as_element$arity$2 = (function (form,config){
var form__$1 = this;
return hx.hiccup.make_element(config,hx.hiccup.parse_tag(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form__$1,(0))),cljs.core.rest(form__$1));
});

cljs.core.LazySeq.prototype.hx$hiccup$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.hx$hiccup$IElement$_as_element$arity$2 = (function (a,config){
var a__$1 = this;
return hx.hiccup.make_element(config,new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(config),cljs.core.cons(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (a__$1){
return (function (p1__26565_SHARP_){
return hx.hiccup._as_element(p1__26565_SHARP_,config);
});})(a__$1))
,a__$1)));
});

goog.object.set(hx.hiccup.IElement,"array",true);

var G__26576_26640 = hx.hiccup._as_element;
var G__26577_26641 = "array";
var G__26578_26642 = ((function (G__26576_26640,G__26577_26641){
return (function (a,config){
return hx.hiccup.make_element(config,new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(config),cljs.core.cons(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__26576_26640,G__26577_26641){
return (function (p1__26566_SHARP_){
return hx.hiccup._as_element(p1__26566_SHARP_,config);
});})(G__26576_26640,G__26577_26641))
,a)));
});})(G__26576_26640,G__26577_26641))
;
goog.object.set(G__26576_26640,G__26577_26641,G__26578_26642);

goog.object.set(hx.hiccup.IElement,"_",true);

var G__26579_26643 = hx.hiccup._as_element;
var G__26580_26644 = "_";
var G__26581_26645 = ((function (G__26579_26643,G__26580_26644){
return (function (el,config){
if(cljs.core.truth_((function (){var fexpr__26582 = new cljs.core.Keyword(null,"is-element?","is-element?",-1231778016).cljs$core$IFn$_invoke$arity$1(config);
return (fexpr__26582.cljs$core$IFn$_invoke$arity$1 ? fexpr__26582.cljs$core$IFn$_invoke$arity$1(el) : fexpr__26582.call(null,el));
})())){
return el;
} else {
throw hx.hiccup.ex(["Unknown element type ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(el)], 0))," found while parsing hiccup form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(el.toString())].join(''));

}
});})(G__26579_26643,G__26580_26644))
;
goog.object.set(G__26579_26643,G__26580_26644,G__26581_26645);

//# sourceMappingURL=hx.hiccup.js.map
