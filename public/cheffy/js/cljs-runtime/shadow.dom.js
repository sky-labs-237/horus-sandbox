goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__40557 = coll;
var G__40558 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__40557,G__40558) : shadow.dom.lazy_native_coll_seq.call(null,G__40557,G__40558));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__40584 = arguments.length;
switch (G__40584) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__40590 = arguments.length;
switch (G__40590) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__40594 = arguments.length;
switch (G__40594) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__40599 = arguments.length;
switch (G__40599) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__40604 = arguments.length;
switch (G__40604) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__40608 = document;
var G__40609 = shadow.dom.dom_node(el);
return goog.dom.contains(G__40608,G__40609);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__40610 = shadow.dom.dom_node(parent);
var G__40611 = shadow.dom.dom_node(el);
return goog.dom.contains(G__40610,G__40611);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__40615 = shadow.dom.dom_node(el);
var G__40616 = cls;
return goog.dom.classlist.add(G__40615,G__40616);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__40618 = shadow.dom.dom_node(el);
var G__40619 = cls;
return goog.dom.classlist.remove(G__40618,G__40619);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__40623 = arguments.length;
switch (G__40623) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__40626 = shadow.dom.dom_node(el);
var G__40627 = cls;
return goog.dom.classlist.toggle(G__40626,G__40627);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e40634){if((e40634 instanceof Object)){
var e = e40634;
return console.log("didnt support attachEvent",el,e);
} else {
throw e40634;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__40638 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__40639 = null;
var count__40640 = (0);
var i__40641 = (0);
while(true){
if((i__40641 < count__40640)){
var el = chunk__40639.cljs$core$IIndexed$_nth$arity$2(null,i__40641);
var handler_41202__$1 = ((function (seq__40638,chunk__40639,count__40640,i__40641,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40638,chunk__40639,count__40640,i__40641,el))
;
var G__40648_41204 = el;
var G__40649_41205 = cljs.core.name(ev);
var G__40650_41206 = handler_41202__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40648_41204,G__40649_41205,G__40650_41206) : shadow.dom.dom_listen.call(null,G__40648_41204,G__40649_41205,G__40650_41206));


var G__41208 = seq__40638;
var G__41209 = chunk__40639;
var G__41210 = count__40640;
var G__41211 = (i__40641 + (1));
seq__40638 = G__41208;
chunk__40639 = G__41209;
count__40640 = G__41210;
i__40641 = G__41211;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40638);
if(temp__5735__auto__){
var seq__40638__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40638__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40638__$1);
var G__41212 = cljs.core.chunk_rest(seq__40638__$1);
var G__41213 = c__4550__auto__;
var G__41214 = cljs.core.count(c__4550__auto__);
var G__41215 = (0);
seq__40638 = G__41212;
chunk__40639 = G__41213;
count__40640 = G__41214;
i__40641 = G__41215;
continue;
} else {
var el = cljs.core.first(seq__40638__$1);
var handler_41216__$1 = ((function (seq__40638,chunk__40639,count__40640,i__40641,el,seq__40638__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__40638,chunk__40639,count__40640,i__40641,el,seq__40638__$1,temp__5735__auto__))
;
var G__40651_41217 = el;
var G__40652_41218 = cljs.core.name(ev);
var G__40653_41219 = handler_41216__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40651_41217,G__40652_41218,G__40653_41219) : shadow.dom.dom_listen.call(null,G__40651_41217,G__40652_41218,G__40653_41219));


var G__41220 = cljs.core.next(seq__40638__$1);
var G__41221 = null;
var G__41222 = (0);
var G__41223 = (0);
seq__40638 = G__41220;
chunk__40639 = G__41221;
count__40640 = G__41222;
i__40641 = G__41223;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__40655 = arguments.length;
switch (G__40655) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__40656 = shadow.dom.dom_node(el);
var G__40657 = cljs.core.name(ev);
var G__40658 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__40656,G__40657,G__40658) : shadow.dom.dom_listen.call(null,G__40656,G__40657,G__40658));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__40659 = shadow.dom.dom_node(el);
var G__40660 = cljs.core.name(ev);
var G__40661 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__40659,G__40660,G__40661) : shadow.dom.dom_listen_remove.call(null,G__40659,G__40660,G__40661));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__40663 = cljs.core.seq(events);
var chunk__40664 = null;
var count__40665 = (0);
var i__40666 = (0);
while(true){
if((i__40666 < count__40665)){
var vec__40675 = chunk__40664.cljs$core$IIndexed$_nth$arity$2(null,i__40666);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40675,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40675,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41227 = seq__40663;
var G__41228 = chunk__40664;
var G__41229 = count__40665;
var G__41230 = (i__40666 + (1));
seq__40663 = G__41227;
chunk__40664 = G__41228;
count__40665 = G__41229;
i__40666 = G__41230;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40663);
if(temp__5735__auto__){
var seq__40663__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40663__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40663__$1);
var G__41231 = cljs.core.chunk_rest(seq__40663__$1);
var G__41232 = c__4550__auto__;
var G__41233 = cljs.core.count(c__4550__auto__);
var G__41234 = (0);
seq__40663 = G__41231;
chunk__40664 = G__41232;
count__40665 = G__41233;
i__40666 = G__41234;
continue;
} else {
var vec__40679 = cljs.core.first(seq__40663__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40679,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40679,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__41235 = cljs.core.next(seq__40663__$1);
var G__41236 = null;
var G__41237 = (0);
var G__41238 = (0);
seq__40663 = G__41235;
chunk__40664 = G__41236;
count__40665 = G__41237;
i__40666 = G__41238;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__40682 = cljs.core.seq(styles);
var chunk__40683 = null;
var count__40684 = (0);
var i__40685 = (0);
while(true){
if((i__40685 < count__40684)){
var vec__40701 = chunk__40683.cljs$core$IIndexed$_nth$arity$2(null,i__40685);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40701,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40701,(1),null);
var G__40704_41241 = dom;
var G__40705_41242 = cljs.core.name(k);
var G__40706_41243 = (((v == null))?"":v);
goog.style.setStyle(G__40704_41241,G__40705_41242,G__40706_41243);


var G__41244 = seq__40682;
var G__41245 = chunk__40683;
var G__41246 = count__40684;
var G__41247 = (i__40685 + (1));
seq__40682 = G__41244;
chunk__40683 = G__41245;
count__40684 = G__41246;
i__40685 = G__41247;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40682);
if(temp__5735__auto__){
var seq__40682__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40682__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40682__$1);
var G__41248 = cljs.core.chunk_rest(seq__40682__$1);
var G__41249 = c__4550__auto__;
var G__41250 = cljs.core.count(c__4550__auto__);
var G__41251 = (0);
seq__40682 = G__41248;
chunk__40683 = G__41249;
count__40684 = G__41250;
i__40685 = G__41251;
continue;
} else {
var vec__40708 = cljs.core.first(seq__40682__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40708,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40708,(1),null);
var G__40712_41252 = dom;
var G__40713_41253 = cljs.core.name(k);
var G__40714_41254 = (((v == null))?"":v);
goog.style.setStyle(G__40712_41252,G__40713_41253,G__40714_41254);


var G__41255 = cljs.core.next(seq__40682__$1);
var G__41256 = null;
var G__41257 = (0);
var G__41258 = (0);
seq__40682 = G__41255;
chunk__40683 = G__41256;
count__40684 = G__41257;
i__40685 = G__41258;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__40719_41259 = key;
var G__40719_41260__$1 = (((G__40719_41259 instanceof cljs.core.Keyword))?G__40719_41259.fqn:null);
switch (G__40719_41260__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_41264 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_41264,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_41264,"aria-");
}
})())){
el.setAttribute(ks_41264,value);
} else {
(el[ks_41264] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__40729 = shadow.dom.dom_node(el);
var G__40730 = cls;
return goog.dom.classlist.contains(G__40729,G__40730);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__40737){
var map__40739 = p__40737;
var map__40739__$1 = (((((!((map__40739 == null))))?(((((map__40739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40739):map__40739);
var props = map__40739__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40739__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__40743 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40743,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40743,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40743,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__40747 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__40747,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__40747;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__40750 = arguments.length;
switch (G__40750) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__40752){
var vec__40754 = p__40752;
var seq__40755 = cljs.core.seq(vec__40754);
var first__40756 = cljs.core.first(seq__40755);
var seq__40755__$1 = cljs.core.next(seq__40755);
var nn = first__40756;
var first__40756__$1 = cljs.core.first(seq__40755__$1);
var seq__40755__$2 = cljs.core.next(seq__40755__$1);
var np = first__40756__$1;
var nc = seq__40755__$2;
var node = vec__40754;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40758 = nn;
var G__40759 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40758,G__40759) : create_fn.call(null,G__40758,G__40759));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__40761 = nn;
var G__40762 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__40761,G__40762) : create_fn.call(null,G__40761,G__40762));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__40763 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40763,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40763,(1),null);
var seq__40767_41288 = cljs.core.seq(node_children);
var chunk__40768_41289 = null;
var count__40769_41290 = (0);
var i__40770_41291 = (0);
while(true){
if((i__40770_41291 < count__40769_41290)){
var child_struct_41292 = chunk__40768_41289.cljs$core$IIndexed$_nth$arity$2(null,i__40770_41291);
var children_41296 = shadow.dom.dom_node(child_struct_41292);
if(cljs.core.seq_QMARK_(children_41296)){
var seq__40798_41297 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41296));
var chunk__40800_41298 = null;
var count__40801_41299 = (0);
var i__40802_41300 = (0);
while(true){
if((i__40802_41300 < count__40801_41299)){
var child_41301 = chunk__40800_41298.cljs$core$IIndexed$_nth$arity$2(null,i__40802_41300);
if(cljs.core.truth_(child_41301)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41301);


var G__41302 = seq__40798_41297;
var G__41303 = chunk__40800_41298;
var G__41304 = count__40801_41299;
var G__41305 = (i__40802_41300 + (1));
seq__40798_41297 = G__41302;
chunk__40800_41298 = G__41303;
count__40801_41299 = G__41304;
i__40802_41300 = G__41305;
continue;
} else {
var G__41307 = seq__40798_41297;
var G__41308 = chunk__40800_41298;
var G__41309 = count__40801_41299;
var G__41310 = (i__40802_41300 + (1));
seq__40798_41297 = G__41307;
chunk__40800_41298 = G__41308;
count__40801_41299 = G__41309;
i__40802_41300 = G__41310;
continue;
}
} else {
var temp__5735__auto___41311 = cljs.core.seq(seq__40798_41297);
if(temp__5735__auto___41311){
var seq__40798_41312__$1 = temp__5735__auto___41311;
if(cljs.core.chunked_seq_QMARK_(seq__40798_41312__$1)){
var c__4550__auto___41317 = cljs.core.chunk_first(seq__40798_41312__$1);
var G__41318 = cljs.core.chunk_rest(seq__40798_41312__$1);
var G__41319 = c__4550__auto___41317;
var G__41320 = cljs.core.count(c__4550__auto___41317);
var G__41321 = (0);
seq__40798_41297 = G__41318;
chunk__40800_41298 = G__41319;
count__40801_41299 = G__41320;
i__40802_41300 = G__41321;
continue;
} else {
var child_41322 = cljs.core.first(seq__40798_41312__$1);
if(cljs.core.truth_(child_41322)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41322);


var G__41323 = cljs.core.next(seq__40798_41312__$1);
var G__41324 = null;
var G__41325 = (0);
var G__41326 = (0);
seq__40798_41297 = G__41323;
chunk__40800_41298 = G__41324;
count__40801_41299 = G__41325;
i__40802_41300 = G__41326;
continue;
} else {
var G__41327 = cljs.core.next(seq__40798_41312__$1);
var G__41328 = null;
var G__41329 = (0);
var G__41330 = (0);
seq__40798_41297 = G__41327;
chunk__40800_41298 = G__41328;
count__40801_41299 = G__41329;
i__40802_41300 = G__41330;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41296);
}


var G__41331 = seq__40767_41288;
var G__41332 = chunk__40768_41289;
var G__41333 = count__40769_41290;
var G__41334 = (i__40770_41291 + (1));
seq__40767_41288 = G__41331;
chunk__40768_41289 = G__41332;
count__40769_41290 = G__41333;
i__40770_41291 = G__41334;
continue;
} else {
var temp__5735__auto___41336 = cljs.core.seq(seq__40767_41288);
if(temp__5735__auto___41336){
var seq__40767_41337__$1 = temp__5735__auto___41336;
if(cljs.core.chunked_seq_QMARK_(seq__40767_41337__$1)){
var c__4550__auto___41338 = cljs.core.chunk_first(seq__40767_41337__$1);
var G__41339 = cljs.core.chunk_rest(seq__40767_41337__$1);
var G__41340 = c__4550__auto___41338;
var G__41341 = cljs.core.count(c__4550__auto___41338);
var G__41342 = (0);
seq__40767_41288 = G__41339;
chunk__40768_41289 = G__41340;
count__40769_41290 = G__41341;
i__40770_41291 = G__41342;
continue;
} else {
var child_struct_41343 = cljs.core.first(seq__40767_41337__$1);
var children_41344 = shadow.dom.dom_node(child_struct_41343);
if(cljs.core.seq_QMARK_(children_41344)){
var seq__40804_41345 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_41344));
var chunk__40806_41346 = null;
var count__40807_41347 = (0);
var i__40808_41348 = (0);
while(true){
if((i__40808_41348 < count__40807_41347)){
var child_41350 = chunk__40806_41346.cljs$core$IIndexed$_nth$arity$2(null,i__40808_41348);
if(cljs.core.truth_(child_41350)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41350);


var G__41352 = seq__40804_41345;
var G__41353 = chunk__40806_41346;
var G__41354 = count__40807_41347;
var G__41355 = (i__40808_41348 + (1));
seq__40804_41345 = G__41352;
chunk__40806_41346 = G__41353;
count__40807_41347 = G__41354;
i__40808_41348 = G__41355;
continue;
} else {
var G__41356 = seq__40804_41345;
var G__41357 = chunk__40806_41346;
var G__41358 = count__40807_41347;
var G__41359 = (i__40808_41348 + (1));
seq__40804_41345 = G__41356;
chunk__40806_41346 = G__41357;
count__40807_41347 = G__41358;
i__40808_41348 = G__41359;
continue;
}
} else {
var temp__5735__auto___41360__$1 = cljs.core.seq(seq__40804_41345);
if(temp__5735__auto___41360__$1){
var seq__40804_41361__$1 = temp__5735__auto___41360__$1;
if(cljs.core.chunked_seq_QMARK_(seq__40804_41361__$1)){
var c__4550__auto___41363 = cljs.core.chunk_first(seq__40804_41361__$1);
var G__41365 = cljs.core.chunk_rest(seq__40804_41361__$1);
var G__41366 = c__4550__auto___41363;
var G__41367 = cljs.core.count(c__4550__auto___41363);
var G__41368 = (0);
seq__40804_41345 = G__41365;
chunk__40806_41346 = G__41366;
count__40807_41347 = G__41367;
i__40808_41348 = G__41368;
continue;
} else {
var child_41369 = cljs.core.first(seq__40804_41361__$1);
if(cljs.core.truth_(child_41369)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_41369);


var G__41371 = cljs.core.next(seq__40804_41361__$1);
var G__41372 = null;
var G__41373 = (0);
var G__41374 = (0);
seq__40804_41345 = G__41371;
chunk__40806_41346 = G__41372;
count__40807_41347 = G__41373;
i__40808_41348 = G__41374;
continue;
} else {
var G__41376 = cljs.core.next(seq__40804_41361__$1);
var G__41377 = null;
var G__41378 = (0);
var G__41379 = (0);
seq__40804_41345 = G__41376;
chunk__40806_41346 = G__41377;
count__40807_41347 = G__41378;
i__40808_41348 = G__41379;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_41344);
}


var G__41384 = cljs.core.next(seq__40767_41337__$1);
var G__41385 = null;
var G__41386 = (0);
var G__41387 = (0);
seq__40767_41288 = G__41384;
chunk__40768_41289 = G__41385;
count__40769_41290 = G__41386;
i__40770_41291 = G__41387;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__40821 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__40821);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__40826 = cljs.core.seq(node);
var chunk__40827 = null;
var count__40828 = (0);
var i__40829 = (0);
while(true){
if((i__40829 < count__40828)){
var n = chunk__40827.cljs$core$IIndexed$_nth$arity$2(null,i__40829);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41391 = seq__40826;
var G__41392 = chunk__40827;
var G__41393 = count__40828;
var G__41394 = (i__40829 + (1));
seq__40826 = G__41391;
chunk__40827 = G__41392;
count__40828 = G__41393;
i__40829 = G__41394;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40826);
if(temp__5735__auto__){
var seq__40826__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40826__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40826__$1);
var G__41398 = cljs.core.chunk_rest(seq__40826__$1);
var G__41399 = c__4550__auto__;
var G__41400 = cljs.core.count(c__4550__auto__);
var G__41401 = (0);
seq__40826 = G__41398;
chunk__40827 = G__41399;
count__40828 = G__41400;
i__40829 = G__41401;
continue;
} else {
var n = cljs.core.first(seq__40826__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__41403 = cljs.core.next(seq__40826__$1);
var G__41404 = null;
var G__41405 = (0);
var G__41406 = (0);
seq__40826 = G__41403;
chunk__40827 = G__41404;
count__40828 = G__41405;
i__40829 = G__41406;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__40836 = shadow.dom.dom_node(new$);
var G__40837 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__40836,G__40837);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__40840 = arguments.length;
switch (G__40840) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__40846 = arguments.length;
switch (G__40846) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__40857 = arguments.length;
switch (G__40857) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41428 = arguments.length;
var i__4731__auto___41430 = (0);
while(true){
if((i__4731__auto___41430 < len__4730__auto___41428)){
args__4736__auto__.push((arguments[i__4731__auto___41430]));

var G__41431 = (i__4731__auto___41430 + (1));
i__4731__auto___41430 = G__41431;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__40876_41432 = cljs.core.seq(nodes);
var chunk__40877_41433 = null;
var count__40878_41434 = (0);
var i__40879_41435 = (0);
while(true){
if((i__40879_41435 < count__40878_41434)){
var node_41436 = chunk__40877_41433.cljs$core$IIndexed$_nth$arity$2(null,i__40879_41435);
fragment.appendChild(shadow.dom._to_dom(node_41436));


var G__41438 = seq__40876_41432;
var G__41439 = chunk__40877_41433;
var G__41440 = count__40878_41434;
var G__41441 = (i__40879_41435 + (1));
seq__40876_41432 = G__41438;
chunk__40877_41433 = G__41439;
count__40878_41434 = G__41440;
i__40879_41435 = G__41441;
continue;
} else {
var temp__5735__auto___41442 = cljs.core.seq(seq__40876_41432);
if(temp__5735__auto___41442){
var seq__40876_41443__$1 = temp__5735__auto___41442;
if(cljs.core.chunked_seq_QMARK_(seq__40876_41443__$1)){
var c__4550__auto___41445 = cljs.core.chunk_first(seq__40876_41443__$1);
var G__41446 = cljs.core.chunk_rest(seq__40876_41443__$1);
var G__41447 = c__4550__auto___41445;
var G__41448 = cljs.core.count(c__4550__auto___41445);
var G__41449 = (0);
seq__40876_41432 = G__41446;
chunk__40877_41433 = G__41447;
count__40878_41434 = G__41448;
i__40879_41435 = G__41449;
continue;
} else {
var node_41450 = cljs.core.first(seq__40876_41443__$1);
fragment.appendChild(shadow.dom._to_dom(node_41450));


var G__41451 = cljs.core.next(seq__40876_41443__$1);
var G__41452 = null;
var G__41453 = (0);
var G__41454 = (0);
seq__40876_41432 = G__41451;
chunk__40877_41433 = G__41452;
count__40878_41434 = G__41453;
i__40879_41435 = G__41454;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq40871){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq40871));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__40886_41456 = cljs.core.seq(scripts);
var chunk__40887_41457 = null;
var count__40888_41458 = (0);
var i__40889_41459 = (0);
while(true){
if((i__40889_41459 < count__40888_41458)){
var vec__40897_41460 = chunk__40887_41457.cljs$core$IIndexed$_nth$arity$2(null,i__40889_41459);
var script_tag_41461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40897_41460,(0),null);
var script_body_41462 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40897_41460,(1),null);
eval(script_body_41462);


var G__41464 = seq__40886_41456;
var G__41465 = chunk__40887_41457;
var G__41466 = count__40888_41458;
var G__41467 = (i__40889_41459 + (1));
seq__40886_41456 = G__41464;
chunk__40887_41457 = G__41465;
count__40888_41458 = G__41466;
i__40889_41459 = G__41467;
continue;
} else {
var temp__5735__auto___41468 = cljs.core.seq(seq__40886_41456);
if(temp__5735__auto___41468){
var seq__40886_41469__$1 = temp__5735__auto___41468;
if(cljs.core.chunked_seq_QMARK_(seq__40886_41469__$1)){
var c__4550__auto___41470 = cljs.core.chunk_first(seq__40886_41469__$1);
var G__41471 = cljs.core.chunk_rest(seq__40886_41469__$1);
var G__41472 = c__4550__auto___41470;
var G__41473 = cljs.core.count(c__4550__auto___41470);
var G__41474 = (0);
seq__40886_41456 = G__41471;
chunk__40887_41457 = G__41472;
count__40888_41458 = G__41473;
i__40889_41459 = G__41474;
continue;
} else {
var vec__40900_41475 = cljs.core.first(seq__40886_41469__$1);
var script_tag_41476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40900_41475,(0),null);
var script_body_41477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40900_41475,(1),null);
eval(script_body_41477);


var G__41479 = cljs.core.next(seq__40886_41469__$1);
var G__41480 = null;
var G__41481 = (0);
var G__41482 = (0);
seq__40886_41456 = G__41479;
chunk__40887_41457 = G__41480;
count__40888_41458 = G__41481;
i__40889_41459 = G__41482;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__40903){
var vec__40904 = p__40903;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40904,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40904,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__40907 = shadow.dom.dom_node(el);
var G__40908 = cls;
return goog.dom.getAncestorByClass(G__40907,G__40908);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__40913 = arguments.length;
switch (G__40913) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__40914 = shadow.dom.dom_node(el);
var G__40915 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__40914,G__40915);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__40918 = shadow.dom.dom_node(el);
var G__40919 = cljs.core.name(tag);
var G__40920 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__40918,G__40919,G__40920);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__40922 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__40922);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__40923 = shadow.dom.dom_node(dom);
var G__40924 = value;
return goog.dom.forms.setValue(G__40923,G__40924);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__40925 = cljs.core.seq(style_keys);
var chunk__40926 = null;
var count__40927 = (0);
var i__40928 = (0);
while(true){
if((i__40928 < count__40927)){
var it = chunk__40926.cljs$core$IIndexed$_nth$arity$2(null,i__40928);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41502 = seq__40925;
var G__41503 = chunk__40926;
var G__41504 = count__40927;
var G__41505 = (i__40928 + (1));
seq__40925 = G__41502;
chunk__40926 = G__41503;
count__40927 = G__41504;
i__40928 = G__41505;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__40925);
if(temp__5735__auto__){
var seq__40925__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40925__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__40925__$1);
var G__41509 = cljs.core.chunk_rest(seq__40925__$1);
var G__41510 = c__4550__auto__;
var G__41511 = cljs.core.count(c__4550__auto__);
var G__41512 = (0);
seq__40925 = G__41509;
chunk__40926 = G__41510;
count__40927 = G__41511;
i__40928 = G__41512;
continue;
} else {
var it = cljs.core.first(seq__40925__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__41513 = cljs.core.next(seq__40925__$1);
var G__41514 = null;
var G__41515 = (0);
var G__41516 = (0);
seq__40925 = G__41513;
chunk__40926 = G__41514;
count__40927 = G__41515;
i__40928 = G__41516;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k40930,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__40934 = k40930;
var G__40934__$1 = (((G__40934 instanceof cljs.core.Keyword))?G__40934.fqn:null);
switch (G__40934__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40930,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__40935){
var vec__40936 = p__40935;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40936,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40936,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40929){
var self__ = this;
var G__40929__$1 = this;
return (new cljs.core.RecordIter((0),G__40929__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__40944 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__40944(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40931,other40932){
var self__ = this;
var this40931__$1 = this;
return (((!((other40932 == null)))) && ((this40931__$1.constructor === other40932.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40931__$1.x,other40932.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40931__$1.y,other40932.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40931__$1.__extmap,other40932.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__40929){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__40952 = cljs.core.keyword_identical_QMARK_;
var expr__40953 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__40955 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__40956 = expr__40953;
return (pred__40952.cljs$core$IFn$_invoke$arity$2 ? pred__40952.cljs$core$IFn$_invoke$arity$2(G__40955,G__40956) : pred__40952.call(null,G__40955,G__40956));
})())){
return (new shadow.dom.Coordinate(G__40929,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__40959 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__40960 = expr__40953;
return (pred__40952.cljs$core$IFn$_invoke$arity$2 ? pred__40952.cljs$core$IFn$_invoke$arity$2(G__40959,G__40960) : pred__40952.call(null,G__40959,G__40960));
})())){
return (new shadow.dom.Coordinate(self__.x,G__40929,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__40929),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__40929){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__40929,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__40933){
var extmap__4424__auto__ = (function (){var G__40969 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40933,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__40933)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__40969);
} else {
return G__40969;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__40933),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__40933),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__40973 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__40973);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__40976 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__40976);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__40979 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__40979);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k40984,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__40995 = k40984;
var G__40995__$1 = (((G__40995 instanceof cljs.core.Keyword))?G__40995.fqn:null);
switch (G__40995__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k40984,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__40998){
var vec__41000 = p__40998;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41000,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41000,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__40983){
var self__ = this;
var G__40983__$1 = this;
return (new cljs.core.RecordIter((0),G__40983__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__41008 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__41008(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this40985,other40986){
var self__ = this;
var this40985__$1 = this;
return (((!((other40986 == null)))) && ((this40985__$1.constructor === other40986.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40985__$1.w,other40986.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40985__$1.h,other40986.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this40985__$1.__extmap,other40986.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__40983){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__41011 = cljs.core.keyword_identical_QMARK_;
var expr__41012 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__41014 = new cljs.core.Keyword(null,"w","w",354169001);
var G__41015 = expr__41012;
return (pred__41011.cljs$core$IFn$_invoke$arity$2 ? pred__41011.cljs$core$IFn$_invoke$arity$2(G__41014,G__41015) : pred__41011.call(null,G__41014,G__41015));
})())){
return (new shadow.dom.Size(G__40983,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__41016 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__41017 = expr__41012;
return (pred__41011.cljs$core$IFn$_invoke$arity$2 ? pred__41011.cljs$core$IFn$_invoke$arity$2(G__41016,G__41017) : pred__41011.call(null,G__41016,G__41017));
})())){
return (new shadow.dom.Size(self__.w,G__40983,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__40983),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__40983){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__40983,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__40988){
var extmap__4424__auto__ = (function (){var G__41019 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__40988,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__40988)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41019);
} else {
return G__41019;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__40988),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__40988),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__41021 = shadow.dom.dom_node(el);
return goog.style.getSize(G__41021);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__41586 = (i + (1));
var G__41587 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__41586;
ret = G__41587;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__41026){
var vec__41028 = p__41026;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41028,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41028,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__41034 = arguments.length;
switch (G__41034) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__41043_41590 = new_node;
var G__41044_41591 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__41043_41590,G__41044_41591);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__41047_41592 = new_node;
var G__41048_41593 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__41047_41592,G__41048_41593);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__41595 = ps;
var G__41596 = (i + (1));
el__$1 = G__41595;
i = G__41596;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__41052 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__41052);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__41056 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__41056);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__41059 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__41059);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__41062 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41062,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41062,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41062,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__41066_41604 = cljs.core.seq(props);
var chunk__41067_41605 = null;
var count__41068_41606 = (0);
var i__41069_41607 = (0);
while(true){
if((i__41069_41607 < count__41068_41606)){
var vec__41079_41608 = chunk__41067_41605.cljs$core$IIndexed$_nth$arity$2(null,i__41069_41607);
var k_41609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41079_41608,(0),null);
var v_41610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41079_41608,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_41609);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41609),v_41610);


var G__41611 = seq__41066_41604;
var G__41612 = chunk__41067_41605;
var G__41613 = count__41068_41606;
var G__41614 = (i__41069_41607 + (1));
seq__41066_41604 = G__41611;
chunk__41067_41605 = G__41612;
count__41068_41606 = G__41613;
i__41069_41607 = G__41614;
continue;
} else {
var temp__5735__auto___41615 = cljs.core.seq(seq__41066_41604);
if(temp__5735__auto___41615){
var seq__41066_41616__$1 = temp__5735__auto___41615;
if(cljs.core.chunked_seq_QMARK_(seq__41066_41616__$1)){
var c__4550__auto___41617 = cljs.core.chunk_first(seq__41066_41616__$1);
var G__41618 = cljs.core.chunk_rest(seq__41066_41616__$1);
var G__41619 = c__4550__auto___41617;
var G__41620 = cljs.core.count(c__4550__auto___41617);
var G__41621 = (0);
seq__41066_41604 = G__41618;
chunk__41067_41605 = G__41619;
count__41068_41606 = G__41620;
i__41069_41607 = G__41621;
continue;
} else {
var vec__41084_41622 = cljs.core.first(seq__41066_41616__$1);
var k_41623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41084_41622,(0),null);
var v_41624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41084_41622,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_41623);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_41623),v_41624);


var G__41625 = cljs.core.next(seq__41066_41616__$1);
var G__41626 = null;
var G__41627 = (0);
var G__41628 = (0);
seq__41066_41604 = G__41625;
chunk__41067_41605 = G__41626;
count__41068_41606 = G__41627;
i__41069_41607 = G__41628;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__41091 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41091,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41091,(1),null);
var seq__41094_41630 = cljs.core.seq(node_children);
var chunk__41096_41631 = null;
var count__41097_41632 = (0);
var i__41098_41633 = (0);
while(true){
if((i__41098_41633 < count__41097_41632)){
var child_struct_41634 = chunk__41096_41631.cljs$core$IIndexed$_nth$arity$2(null,i__41098_41633);
if((!((child_struct_41634 == null)))){
if(typeof child_struct_41634 === 'string'){
var text_41635 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41635),child_struct_41634].join(''));
} else {
var children_41637 = shadow.dom.svg_node(child_struct_41634);
if(cljs.core.seq_QMARK_(children_41637)){
var seq__41126_41638 = cljs.core.seq(children_41637);
var chunk__41128_41639 = null;
var count__41129_41640 = (0);
var i__41130_41641 = (0);
while(true){
if((i__41130_41641 < count__41129_41640)){
var child_41642 = chunk__41128_41639.cljs$core$IIndexed$_nth$arity$2(null,i__41130_41641);
if(cljs.core.truth_(child_41642)){
node.appendChild(child_41642);


var G__41643 = seq__41126_41638;
var G__41644 = chunk__41128_41639;
var G__41645 = count__41129_41640;
var G__41646 = (i__41130_41641 + (1));
seq__41126_41638 = G__41643;
chunk__41128_41639 = G__41644;
count__41129_41640 = G__41645;
i__41130_41641 = G__41646;
continue;
} else {
var G__41647 = seq__41126_41638;
var G__41648 = chunk__41128_41639;
var G__41649 = count__41129_41640;
var G__41650 = (i__41130_41641 + (1));
seq__41126_41638 = G__41647;
chunk__41128_41639 = G__41648;
count__41129_41640 = G__41649;
i__41130_41641 = G__41650;
continue;
}
} else {
var temp__5735__auto___41651 = cljs.core.seq(seq__41126_41638);
if(temp__5735__auto___41651){
var seq__41126_41652__$1 = temp__5735__auto___41651;
if(cljs.core.chunked_seq_QMARK_(seq__41126_41652__$1)){
var c__4550__auto___41653 = cljs.core.chunk_first(seq__41126_41652__$1);
var G__41654 = cljs.core.chunk_rest(seq__41126_41652__$1);
var G__41655 = c__4550__auto___41653;
var G__41656 = cljs.core.count(c__4550__auto___41653);
var G__41657 = (0);
seq__41126_41638 = G__41654;
chunk__41128_41639 = G__41655;
count__41129_41640 = G__41656;
i__41130_41641 = G__41657;
continue;
} else {
var child_41658 = cljs.core.first(seq__41126_41652__$1);
if(cljs.core.truth_(child_41658)){
node.appendChild(child_41658);


var G__41659 = cljs.core.next(seq__41126_41652__$1);
var G__41660 = null;
var G__41661 = (0);
var G__41662 = (0);
seq__41126_41638 = G__41659;
chunk__41128_41639 = G__41660;
count__41129_41640 = G__41661;
i__41130_41641 = G__41662;
continue;
} else {
var G__41663 = cljs.core.next(seq__41126_41652__$1);
var G__41664 = null;
var G__41665 = (0);
var G__41666 = (0);
seq__41126_41638 = G__41663;
chunk__41128_41639 = G__41664;
count__41129_41640 = G__41665;
i__41130_41641 = G__41666;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41637);
}
}


var G__41667 = seq__41094_41630;
var G__41668 = chunk__41096_41631;
var G__41669 = count__41097_41632;
var G__41670 = (i__41098_41633 + (1));
seq__41094_41630 = G__41667;
chunk__41096_41631 = G__41668;
count__41097_41632 = G__41669;
i__41098_41633 = G__41670;
continue;
} else {
var G__41671 = seq__41094_41630;
var G__41672 = chunk__41096_41631;
var G__41673 = count__41097_41632;
var G__41674 = (i__41098_41633 + (1));
seq__41094_41630 = G__41671;
chunk__41096_41631 = G__41672;
count__41097_41632 = G__41673;
i__41098_41633 = G__41674;
continue;
}
} else {
var temp__5735__auto___41675 = cljs.core.seq(seq__41094_41630);
if(temp__5735__auto___41675){
var seq__41094_41676__$1 = temp__5735__auto___41675;
if(cljs.core.chunked_seq_QMARK_(seq__41094_41676__$1)){
var c__4550__auto___41677 = cljs.core.chunk_first(seq__41094_41676__$1);
var G__41678 = cljs.core.chunk_rest(seq__41094_41676__$1);
var G__41679 = c__4550__auto___41677;
var G__41680 = cljs.core.count(c__4550__auto___41677);
var G__41681 = (0);
seq__41094_41630 = G__41678;
chunk__41096_41631 = G__41679;
count__41097_41632 = G__41680;
i__41098_41633 = G__41681;
continue;
} else {
var child_struct_41682 = cljs.core.first(seq__41094_41676__$1);
if((!((child_struct_41682 == null)))){
if(typeof child_struct_41682 === 'string'){
var text_41683 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_41683),child_struct_41682].join(''));
} else {
var children_41684 = shadow.dom.svg_node(child_struct_41682);
if(cljs.core.seq_QMARK_(children_41684)){
var seq__41136_41685 = cljs.core.seq(children_41684);
var chunk__41138_41686 = null;
var count__41139_41687 = (0);
var i__41140_41688 = (0);
while(true){
if((i__41140_41688 < count__41139_41687)){
var child_41689 = chunk__41138_41686.cljs$core$IIndexed$_nth$arity$2(null,i__41140_41688);
if(cljs.core.truth_(child_41689)){
node.appendChild(child_41689);


var G__41690 = seq__41136_41685;
var G__41691 = chunk__41138_41686;
var G__41692 = count__41139_41687;
var G__41693 = (i__41140_41688 + (1));
seq__41136_41685 = G__41690;
chunk__41138_41686 = G__41691;
count__41139_41687 = G__41692;
i__41140_41688 = G__41693;
continue;
} else {
var G__41694 = seq__41136_41685;
var G__41695 = chunk__41138_41686;
var G__41696 = count__41139_41687;
var G__41697 = (i__41140_41688 + (1));
seq__41136_41685 = G__41694;
chunk__41138_41686 = G__41695;
count__41139_41687 = G__41696;
i__41140_41688 = G__41697;
continue;
}
} else {
var temp__5735__auto___41698__$1 = cljs.core.seq(seq__41136_41685);
if(temp__5735__auto___41698__$1){
var seq__41136_41699__$1 = temp__5735__auto___41698__$1;
if(cljs.core.chunked_seq_QMARK_(seq__41136_41699__$1)){
var c__4550__auto___41700 = cljs.core.chunk_first(seq__41136_41699__$1);
var G__41705 = cljs.core.chunk_rest(seq__41136_41699__$1);
var G__41706 = c__4550__auto___41700;
var G__41707 = cljs.core.count(c__4550__auto___41700);
var G__41708 = (0);
seq__41136_41685 = G__41705;
chunk__41138_41686 = G__41706;
count__41139_41687 = G__41707;
i__41140_41688 = G__41708;
continue;
} else {
var child_41709 = cljs.core.first(seq__41136_41699__$1);
if(cljs.core.truth_(child_41709)){
node.appendChild(child_41709);


var G__41711 = cljs.core.next(seq__41136_41699__$1);
var G__41712 = null;
var G__41713 = (0);
var G__41714 = (0);
seq__41136_41685 = G__41711;
chunk__41138_41686 = G__41712;
count__41139_41687 = G__41713;
i__41140_41688 = G__41714;
continue;
} else {
var G__41716 = cljs.core.next(seq__41136_41699__$1);
var G__41717 = null;
var G__41718 = (0);
var G__41719 = (0);
seq__41136_41685 = G__41716;
chunk__41138_41686 = G__41717;
count__41139_41687 = G__41718;
i__41140_41688 = G__41719;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_41684);
}
}


var G__41720 = cljs.core.next(seq__41094_41676__$1);
var G__41721 = null;
var G__41722 = (0);
var G__41723 = (0);
seq__41094_41630 = G__41720;
chunk__41096_41631 = G__41721;
count__41097_41632 = G__41722;
i__41098_41633 = G__41723;
continue;
} else {
var G__41724 = cljs.core.next(seq__41094_41676__$1);
var G__41725 = null;
var G__41726 = (0);
var G__41727 = (0);
seq__41094_41630 = G__41724;
chunk__41096_41631 = G__41725;
count__41097_41632 = G__41726;
i__41098_41633 = G__41727;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__41148_41728 = shadow.dom._to_svg;
var G__41149_41729 = "string";
var G__41150_41730 = ((function (G__41148_41728,G__41149_41729){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__41148_41728,G__41149_41729))
;
goog.object.set(G__41148_41728,G__41149_41729,G__41150_41730);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__41152_41734 = shadow.dom._to_svg;
var G__41153_41735 = "null";
var G__41154_41736 = ((function (G__41152_41734,G__41153_41735){
return (function (_){
return null;
});})(G__41152_41734,G__41153_41735))
;
goog.object.set(G__41152_41734,G__41153_41735,G__41154_41736);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___41738 = arguments.length;
var i__4731__auto___41739 = (0);
while(true){
if((i__4731__auto___41739 < len__4730__auto___41738)){
args__4736__auto__.push((arguments[i__4731__auto___41739]));

var G__41740 = (i__4731__auto___41739 + (1));
i__4731__auto___41739 = G__41740;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq41155){
var G__41156 = cljs.core.first(seq41155);
var seq41155__$1 = cljs.core.next(seq41155);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41156,seq41155__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__41158 = arguments.length;
switch (G__41158) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__41159_41748 = shadow.dom.dom_node(el);
var G__41160_41749 = cljs.core.name(event);
var G__41161_41750 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__41159_41748,G__41160_41749,G__41161_41750) : shadow.dom.dom_listen.call(null,G__41159_41748,G__41160_41749,G__41161_41750));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__38930__auto___41751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___41751,buf,chan,event_fn){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___41751,buf,chan,event_fn){
return (function (state_41166){
var state_val_41167 = (state_41166[(1)]);
if((state_val_41167 === (1))){
var state_41166__$1 = state_41166;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41166__$1,(2),once_or_cleanup);
} else {
if((state_val_41167 === (2))){
var inst_41163 = (state_41166[(2)]);
var inst_41164 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_41166__$1 = (function (){var statearr_41168 = state_41166;
(statearr_41168[(7)] = inst_41163);

return statearr_41168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41166__$1,inst_41164);
} else {
return null;
}
}
});})(c__38930__auto___41751,buf,chan,event_fn))
;
return ((function (switch__38829__auto__,c__38930__auto___41751,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__38830__auto__ = null;
var shadow$dom$state_machine__38830__auto____0 = (function (){
var statearr_41170 = [null,null,null,null,null,null,null,null];
(statearr_41170[(0)] = shadow$dom$state_machine__38830__auto__);

(statearr_41170[(1)] = (1));

return statearr_41170;
});
var shadow$dom$state_machine__38830__auto____1 = (function (state_41166){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_41166);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e41172){if((e41172 instanceof Object)){
var ex__38833__auto__ = e41172;
var statearr_41174_41752 = state_41166;
(statearr_41174_41752[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41172;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41753 = state_41166;
state_41166 = G__41753;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
shadow$dom$state_machine__38830__auto__ = function(state_41166){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__38830__auto____0.call(this);
case 1:
return shadow$dom$state_machine__38830__auto____1.call(this,state_41166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__38830__auto____0;
shadow$dom$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__38830__auto____1;
return shadow$dom$state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___41751,buf,chan,event_fn))
})();
var state__38932__auto__ = (function (){var statearr_41175 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_41175[(6)] = c__38930__auto___41751);

return statearr_41175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___41751,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
