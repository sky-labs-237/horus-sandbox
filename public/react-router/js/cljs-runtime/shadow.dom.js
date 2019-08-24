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
return cljs.core.cons((coll[idx]),(function (){var G__35125 = coll;
var G__35126 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35125,G__35126) : shadow.dom.lazy_native_coll_seq.call(null,G__35125,G__35126));
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
var G__35142 = arguments.length;
switch (G__35142) {
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
var G__35144 = arguments.length;
switch (G__35144) {
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
var G__35147 = arguments.length;
switch (G__35147) {
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
var G__35149 = arguments.length;
switch (G__35149) {
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
var G__35151 = arguments.length;
switch (G__35151) {
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
var G__35153 = document;
var G__35154 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35153,G__35154);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35155 = shadow.dom.dom_node(parent);
var G__35156 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35155,G__35156);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35157 = shadow.dom.dom_node(el);
var G__35158 = cls;
return goog.dom.classlist.add(G__35157,G__35158);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35159 = shadow.dom.dom_node(el);
var G__35160 = cls;
return goog.dom.classlist.remove(G__35159,G__35160);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35162 = arguments.length;
switch (G__35162) {
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
var G__35163 = shadow.dom.dom_node(el);
var G__35164 = cls;
return goog.dom.classlist.toggle(G__35163,G__35164);
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
}catch (e35165){if((e35165 instanceof Object)){
var e = e35165;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35165;

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
var seq__35166 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35167 = null;
var count__35168 = (0);
var i__35169 = (0);
while(true){
if((i__35169 < count__35168)){
var el = chunk__35167.cljs$core$IIndexed$_nth$arity$2(null,i__35169);
var handler_35731__$1 = ((function (seq__35166,chunk__35167,count__35168,i__35169,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35166,chunk__35167,count__35168,i__35169,el))
;
var G__35176_35732 = el;
var G__35177_35733 = cljs.core.name(ev);
var G__35178_35734 = handler_35731__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35176_35732,G__35177_35733,G__35178_35734) : shadow.dom.dom_listen.call(null,G__35176_35732,G__35177_35733,G__35178_35734));


var G__35736 = seq__35166;
var G__35737 = chunk__35167;
var G__35738 = count__35168;
var G__35739 = (i__35169 + (1));
seq__35166 = G__35736;
chunk__35167 = G__35737;
count__35168 = G__35738;
i__35169 = G__35739;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35166);
if(temp__5735__auto__){
var seq__35166__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35166__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35166__$1);
var G__35740 = cljs.core.chunk_rest(seq__35166__$1);
var G__35741 = c__4550__auto__;
var G__35742 = cljs.core.count(c__4550__auto__);
var G__35743 = (0);
seq__35166 = G__35740;
chunk__35167 = G__35741;
count__35168 = G__35742;
i__35169 = G__35743;
continue;
} else {
var el = cljs.core.first(seq__35166__$1);
var handler_35744__$1 = ((function (seq__35166,chunk__35167,count__35168,i__35169,el,seq__35166__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35166,chunk__35167,count__35168,i__35169,el,seq__35166__$1,temp__5735__auto__))
;
var G__35179_35745 = el;
var G__35180_35746 = cljs.core.name(ev);
var G__35181_35747 = handler_35744__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35179_35745,G__35180_35746,G__35181_35747) : shadow.dom.dom_listen.call(null,G__35179_35745,G__35180_35746,G__35181_35747));


var G__35749 = cljs.core.next(seq__35166__$1);
var G__35750 = null;
var G__35751 = (0);
var G__35752 = (0);
seq__35166 = G__35749;
chunk__35167 = G__35750;
count__35168 = G__35751;
i__35169 = G__35752;
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
var G__35183 = arguments.length;
switch (G__35183) {
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
var G__35184 = shadow.dom.dom_node(el);
var G__35185 = cljs.core.name(ev);
var G__35186 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35184,G__35185,G__35186) : shadow.dom.dom_listen.call(null,G__35184,G__35185,G__35186));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35188 = shadow.dom.dom_node(el);
var G__35189 = cljs.core.name(ev);
var G__35190 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35188,G__35189,G__35190) : shadow.dom.dom_listen_remove.call(null,G__35188,G__35189,G__35190));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35193 = cljs.core.seq(events);
var chunk__35194 = null;
var count__35196 = (0);
var i__35197 = (0);
while(true){
if((i__35197 < count__35196)){
var vec__35208 = chunk__35194.cljs$core$IIndexed$_nth$arity$2(null,i__35197);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35208,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35208,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35759 = seq__35193;
var G__35760 = chunk__35194;
var G__35761 = count__35196;
var G__35762 = (i__35197 + (1));
seq__35193 = G__35759;
chunk__35194 = G__35760;
count__35196 = G__35761;
i__35197 = G__35762;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35193);
if(temp__5735__auto__){
var seq__35193__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35193__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35193__$1);
var G__35764 = cljs.core.chunk_rest(seq__35193__$1);
var G__35765 = c__4550__auto__;
var G__35766 = cljs.core.count(c__4550__auto__);
var G__35767 = (0);
seq__35193 = G__35764;
chunk__35194 = G__35765;
count__35196 = G__35766;
i__35197 = G__35767;
continue;
} else {
var vec__35212 = cljs.core.first(seq__35193__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35212,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35212,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35786 = cljs.core.next(seq__35193__$1);
var G__35787 = null;
var G__35788 = (0);
var G__35789 = (0);
seq__35193 = G__35786;
chunk__35194 = G__35787;
count__35196 = G__35788;
i__35197 = G__35789;
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
var seq__35215 = cljs.core.seq(styles);
var chunk__35216 = null;
var count__35217 = (0);
var i__35218 = (0);
while(true){
if((i__35218 < count__35217)){
var vec__35235 = chunk__35216.cljs$core$IIndexed$_nth$arity$2(null,i__35218);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35235,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35235,(1),null);
var G__35238_35791 = dom;
var G__35239_35792 = cljs.core.name(k);
var G__35240_35793 = (((v == null))?"":v);
goog.style.setStyle(G__35238_35791,G__35239_35792,G__35240_35793);


var G__35796 = seq__35215;
var G__35797 = chunk__35216;
var G__35798 = count__35217;
var G__35799 = (i__35218 + (1));
seq__35215 = G__35796;
chunk__35216 = G__35797;
count__35217 = G__35798;
i__35218 = G__35799;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35215);
if(temp__5735__auto__){
var seq__35215__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35215__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35215__$1);
var G__35801 = cljs.core.chunk_rest(seq__35215__$1);
var G__35802 = c__4550__auto__;
var G__35803 = cljs.core.count(c__4550__auto__);
var G__35804 = (0);
seq__35215 = G__35801;
chunk__35216 = G__35802;
count__35217 = G__35803;
i__35218 = G__35804;
continue;
} else {
var vec__35241 = cljs.core.first(seq__35215__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35241,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35241,(1),null);
var G__35244_35805 = dom;
var G__35245_35806 = cljs.core.name(k);
var G__35246_35807 = (((v == null))?"":v);
goog.style.setStyle(G__35244_35805,G__35245_35806,G__35246_35807);


var G__35808 = cljs.core.next(seq__35215__$1);
var G__35809 = null;
var G__35810 = (0);
var G__35811 = (0);
seq__35215 = G__35808;
chunk__35216 = G__35809;
count__35217 = G__35810;
i__35218 = G__35811;
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
var G__35248_35812 = key;
var G__35248_35813__$1 = (((G__35248_35812 instanceof cljs.core.Keyword))?G__35248_35812.fqn:null);
switch (G__35248_35813__$1) {
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
var ks_35820 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_35820,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_35820,"aria-");
}
})())){
el.setAttribute(ks_35820,value);
} else {
(el[ks_35820] = value);
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
var G__35252 = shadow.dom.dom_node(el);
var G__35253 = cls;
return goog.dom.classlist.contains(G__35252,G__35253);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35254){
var map__35255 = p__35254;
var map__35255__$1 = (((((!((map__35255 == null))))?(((((map__35255.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35255.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35255):map__35255);
var props = map__35255__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35255__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35257 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35257,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35257,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35257,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35260 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35260,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35260;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35262 = arguments.length;
switch (G__35262) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35263){
var vec__35264 = p__35263;
var seq__35265 = cljs.core.seq(vec__35264);
var first__35266 = cljs.core.first(seq__35265);
var seq__35265__$1 = cljs.core.next(seq__35265);
var nn = first__35266;
var first__35266__$1 = cljs.core.first(seq__35265__$1);
var seq__35265__$2 = cljs.core.next(seq__35265__$1);
var np = first__35266__$1;
var nc = seq__35265__$2;
var node = vec__35264;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35267 = nn;
var G__35268 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35267,G__35268) : create_fn.call(null,G__35267,G__35268));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35269 = nn;
var G__35270 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35269,G__35270) : create_fn.call(null,G__35269,G__35270));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35271 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35271,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35271,(1),null);
var seq__35274_35871 = cljs.core.seq(node_children);
var chunk__35275_35872 = null;
var count__35276_35873 = (0);
var i__35277_35874 = (0);
while(true){
if((i__35277_35874 < count__35276_35873)){
var child_struct_35875 = chunk__35275_35872.cljs$core$IIndexed$_nth$arity$2(null,i__35277_35874);
var children_35876 = shadow.dom.dom_node(child_struct_35875);
if(cljs.core.seq_QMARK_(children_35876)){
var seq__35290_35877 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35876));
var chunk__35292_35878 = null;
var count__35293_35879 = (0);
var i__35294_35880 = (0);
while(true){
if((i__35294_35880 < count__35293_35879)){
var child_35884 = chunk__35292_35878.cljs$core$IIndexed$_nth$arity$2(null,i__35294_35880);
if(cljs.core.truth_(child_35884)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35884);


var G__35885 = seq__35290_35877;
var G__35886 = chunk__35292_35878;
var G__35887 = count__35293_35879;
var G__35888 = (i__35294_35880 + (1));
seq__35290_35877 = G__35885;
chunk__35292_35878 = G__35886;
count__35293_35879 = G__35887;
i__35294_35880 = G__35888;
continue;
} else {
var G__35889 = seq__35290_35877;
var G__35890 = chunk__35292_35878;
var G__35891 = count__35293_35879;
var G__35892 = (i__35294_35880 + (1));
seq__35290_35877 = G__35889;
chunk__35292_35878 = G__35890;
count__35293_35879 = G__35891;
i__35294_35880 = G__35892;
continue;
}
} else {
var temp__5735__auto___35893 = cljs.core.seq(seq__35290_35877);
if(temp__5735__auto___35893){
var seq__35290_35894__$1 = temp__5735__auto___35893;
if(cljs.core.chunked_seq_QMARK_(seq__35290_35894__$1)){
var c__4550__auto___35895 = cljs.core.chunk_first(seq__35290_35894__$1);
var G__35896 = cljs.core.chunk_rest(seq__35290_35894__$1);
var G__35897 = c__4550__auto___35895;
var G__35898 = cljs.core.count(c__4550__auto___35895);
var G__35899 = (0);
seq__35290_35877 = G__35896;
chunk__35292_35878 = G__35897;
count__35293_35879 = G__35898;
i__35294_35880 = G__35899;
continue;
} else {
var child_35900 = cljs.core.first(seq__35290_35894__$1);
if(cljs.core.truth_(child_35900)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35900);


var G__35902 = cljs.core.next(seq__35290_35894__$1);
var G__35903 = null;
var G__35904 = (0);
var G__35905 = (0);
seq__35290_35877 = G__35902;
chunk__35292_35878 = G__35903;
count__35293_35879 = G__35904;
i__35294_35880 = G__35905;
continue;
} else {
var G__35909 = cljs.core.next(seq__35290_35894__$1);
var G__35910 = null;
var G__35911 = (0);
var G__35912 = (0);
seq__35290_35877 = G__35909;
chunk__35292_35878 = G__35910;
count__35293_35879 = G__35911;
i__35294_35880 = G__35912;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35876);
}


var G__35913 = seq__35274_35871;
var G__35914 = chunk__35275_35872;
var G__35915 = count__35276_35873;
var G__35916 = (i__35277_35874 + (1));
seq__35274_35871 = G__35913;
chunk__35275_35872 = G__35914;
count__35276_35873 = G__35915;
i__35277_35874 = G__35916;
continue;
} else {
var temp__5735__auto___35917 = cljs.core.seq(seq__35274_35871);
if(temp__5735__auto___35917){
var seq__35274_35918__$1 = temp__5735__auto___35917;
if(cljs.core.chunked_seq_QMARK_(seq__35274_35918__$1)){
var c__4550__auto___35919 = cljs.core.chunk_first(seq__35274_35918__$1);
var G__35920 = cljs.core.chunk_rest(seq__35274_35918__$1);
var G__35921 = c__4550__auto___35919;
var G__35922 = cljs.core.count(c__4550__auto___35919);
var G__35923 = (0);
seq__35274_35871 = G__35920;
chunk__35275_35872 = G__35921;
count__35276_35873 = G__35922;
i__35277_35874 = G__35923;
continue;
} else {
var child_struct_35924 = cljs.core.first(seq__35274_35918__$1);
var children_35927 = shadow.dom.dom_node(child_struct_35924);
if(cljs.core.seq_QMARK_(children_35927)){
var seq__35296_35928 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35927));
var chunk__35298_35929 = null;
var count__35299_35930 = (0);
var i__35300_35931 = (0);
while(true){
if((i__35300_35931 < count__35299_35930)){
var child_35932 = chunk__35298_35929.cljs$core$IIndexed$_nth$arity$2(null,i__35300_35931);
if(cljs.core.truth_(child_35932)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35932);


var G__35933 = seq__35296_35928;
var G__35934 = chunk__35298_35929;
var G__35935 = count__35299_35930;
var G__35936 = (i__35300_35931 + (1));
seq__35296_35928 = G__35933;
chunk__35298_35929 = G__35934;
count__35299_35930 = G__35935;
i__35300_35931 = G__35936;
continue;
} else {
var G__35937 = seq__35296_35928;
var G__35938 = chunk__35298_35929;
var G__35939 = count__35299_35930;
var G__35940 = (i__35300_35931 + (1));
seq__35296_35928 = G__35937;
chunk__35298_35929 = G__35938;
count__35299_35930 = G__35939;
i__35300_35931 = G__35940;
continue;
}
} else {
var temp__5735__auto___35941__$1 = cljs.core.seq(seq__35296_35928);
if(temp__5735__auto___35941__$1){
var seq__35296_35943__$1 = temp__5735__auto___35941__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35296_35943__$1)){
var c__4550__auto___35944 = cljs.core.chunk_first(seq__35296_35943__$1);
var G__35945 = cljs.core.chunk_rest(seq__35296_35943__$1);
var G__35946 = c__4550__auto___35944;
var G__35947 = cljs.core.count(c__4550__auto___35944);
var G__35948 = (0);
seq__35296_35928 = G__35945;
chunk__35298_35929 = G__35946;
count__35299_35930 = G__35947;
i__35300_35931 = G__35948;
continue;
} else {
var child_35949 = cljs.core.first(seq__35296_35943__$1);
if(cljs.core.truth_(child_35949)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35949);


var G__35950 = cljs.core.next(seq__35296_35943__$1);
var G__35951 = null;
var G__35952 = (0);
var G__35953 = (0);
seq__35296_35928 = G__35950;
chunk__35298_35929 = G__35951;
count__35299_35930 = G__35952;
i__35300_35931 = G__35953;
continue;
} else {
var G__35954 = cljs.core.next(seq__35296_35943__$1);
var G__35955 = null;
var G__35956 = (0);
var G__35957 = (0);
seq__35296_35928 = G__35954;
chunk__35298_35929 = G__35955;
count__35299_35930 = G__35956;
i__35300_35931 = G__35957;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35927);
}


var G__35958 = cljs.core.next(seq__35274_35918__$1);
var G__35959 = null;
var G__35960 = (0);
var G__35961 = (0);
seq__35274_35871 = G__35958;
chunk__35275_35872 = G__35959;
count__35276_35873 = G__35960;
i__35277_35874 = G__35961;
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
var G__35302 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35302);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35304 = cljs.core.seq(node);
var chunk__35305 = null;
var count__35306 = (0);
var i__35307 = (0);
while(true){
if((i__35307 < count__35306)){
var n = chunk__35305.cljs$core$IIndexed$_nth$arity$2(null,i__35307);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35965 = seq__35304;
var G__35966 = chunk__35305;
var G__35967 = count__35306;
var G__35968 = (i__35307 + (1));
seq__35304 = G__35965;
chunk__35305 = G__35966;
count__35306 = G__35967;
i__35307 = G__35968;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35304);
if(temp__5735__auto__){
var seq__35304__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35304__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35304__$1);
var G__35969 = cljs.core.chunk_rest(seq__35304__$1);
var G__35970 = c__4550__auto__;
var G__35971 = cljs.core.count(c__4550__auto__);
var G__35972 = (0);
seq__35304 = G__35969;
chunk__35305 = G__35970;
count__35306 = G__35971;
i__35307 = G__35972;
continue;
} else {
var n = cljs.core.first(seq__35304__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35973 = cljs.core.next(seq__35304__$1);
var G__35974 = null;
var G__35975 = (0);
var G__35976 = (0);
seq__35304 = G__35973;
chunk__35305 = G__35974;
count__35306 = G__35975;
i__35307 = G__35976;
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
var G__35308 = shadow.dom.dom_node(new$);
var G__35309 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35308,G__35309);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35334 = arguments.length;
switch (G__35334) {
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
var G__35346 = arguments.length;
switch (G__35346) {
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
var G__35349 = arguments.length;
switch (G__35349) {
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
var len__4730__auto___36002 = arguments.length;
var i__4731__auto___36009 = (0);
while(true){
if((i__4731__auto___36009 < len__4730__auto___36002)){
args__4736__auto__.push((arguments[i__4731__auto___36009]));

var G__36011 = (i__4731__auto___36009 + (1));
i__4731__auto___36009 = G__36011;
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
var seq__35366_36012 = cljs.core.seq(nodes);
var chunk__35367_36013 = null;
var count__35368_36014 = (0);
var i__35369_36015 = (0);
while(true){
if((i__35369_36015 < count__35368_36014)){
var node_36016 = chunk__35367_36013.cljs$core$IIndexed$_nth$arity$2(null,i__35369_36015);
fragment.appendChild(shadow.dom._to_dom(node_36016));


var G__36018 = seq__35366_36012;
var G__36019 = chunk__35367_36013;
var G__36020 = count__35368_36014;
var G__36021 = (i__35369_36015 + (1));
seq__35366_36012 = G__36018;
chunk__35367_36013 = G__36019;
count__35368_36014 = G__36020;
i__35369_36015 = G__36021;
continue;
} else {
var temp__5735__auto___36023 = cljs.core.seq(seq__35366_36012);
if(temp__5735__auto___36023){
var seq__35366_36024__$1 = temp__5735__auto___36023;
if(cljs.core.chunked_seq_QMARK_(seq__35366_36024__$1)){
var c__4550__auto___36026 = cljs.core.chunk_first(seq__35366_36024__$1);
var G__36027 = cljs.core.chunk_rest(seq__35366_36024__$1);
var G__36028 = c__4550__auto___36026;
var G__36029 = cljs.core.count(c__4550__auto___36026);
var G__36030 = (0);
seq__35366_36012 = G__36027;
chunk__35367_36013 = G__36028;
count__35368_36014 = G__36029;
i__35369_36015 = G__36030;
continue;
} else {
var node_36031 = cljs.core.first(seq__35366_36024__$1);
fragment.appendChild(shadow.dom._to_dom(node_36031));


var G__36032 = cljs.core.next(seq__35366_36024__$1);
var G__36033 = null;
var G__36034 = (0);
var G__36035 = (0);
seq__35366_36012 = G__36032;
chunk__35367_36013 = G__36033;
count__35368_36014 = G__36034;
i__35369_36015 = G__36035;
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
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35350){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35350));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35370_36037 = cljs.core.seq(scripts);
var chunk__35371_36038 = null;
var count__35372_36039 = (0);
var i__35373_36040 = (0);
while(true){
if((i__35373_36040 < count__35372_36039)){
var vec__35380_36041 = chunk__35371_36038.cljs$core$IIndexed$_nth$arity$2(null,i__35373_36040);
var script_tag_36042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35380_36041,(0),null);
var script_body_36043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35380_36041,(1),null);
eval(script_body_36043);


var G__36045 = seq__35370_36037;
var G__36046 = chunk__35371_36038;
var G__36047 = count__35372_36039;
var G__36048 = (i__35373_36040 + (1));
seq__35370_36037 = G__36045;
chunk__35371_36038 = G__36046;
count__35372_36039 = G__36047;
i__35373_36040 = G__36048;
continue;
} else {
var temp__5735__auto___36049 = cljs.core.seq(seq__35370_36037);
if(temp__5735__auto___36049){
var seq__35370_36050__$1 = temp__5735__auto___36049;
if(cljs.core.chunked_seq_QMARK_(seq__35370_36050__$1)){
var c__4550__auto___36051 = cljs.core.chunk_first(seq__35370_36050__$1);
var G__36052 = cljs.core.chunk_rest(seq__35370_36050__$1);
var G__36053 = c__4550__auto___36051;
var G__36054 = cljs.core.count(c__4550__auto___36051);
var G__36055 = (0);
seq__35370_36037 = G__36052;
chunk__35371_36038 = G__36053;
count__35372_36039 = G__36054;
i__35373_36040 = G__36055;
continue;
} else {
var vec__35386_36056 = cljs.core.first(seq__35370_36050__$1);
var script_tag_36057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35386_36056,(0),null);
var script_body_36058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35386_36056,(1),null);
eval(script_body_36058);


var G__36060 = cljs.core.next(seq__35370_36050__$1);
var G__36061 = null;
var G__36062 = (0);
var G__36063 = (0);
seq__35370_36037 = G__36060;
chunk__35371_36038 = G__36061;
count__35372_36039 = G__36062;
i__35373_36040 = G__36063;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35390){
var vec__35392 = p__35390;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35392,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35392,(1),null);
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
var G__35399 = shadow.dom.dom_node(el);
var G__35400 = cls;
return goog.dom.getAncestorByClass(G__35399,G__35400);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35402 = arguments.length;
switch (G__35402) {
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
var G__35404 = shadow.dom.dom_node(el);
var G__35405 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35404,G__35405);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35406 = shadow.dom.dom_node(el);
var G__35407 = cljs.core.name(tag);
var G__35408 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35406,G__35407,G__35408);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35409 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35409);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35410 = shadow.dom.dom_node(dom);
var G__35411 = value;
return goog.dom.forms.setValue(G__35410,G__35411);
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
var seq__35415 = cljs.core.seq(style_keys);
var chunk__35416 = null;
var count__35417 = (0);
var i__35418 = (0);
while(true){
if((i__35418 < count__35417)){
var it = chunk__35416.cljs$core$IIndexed$_nth$arity$2(null,i__35418);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36078 = seq__35415;
var G__36079 = chunk__35416;
var G__36080 = count__35417;
var G__36081 = (i__35418 + (1));
seq__35415 = G__36078;
chunk__35416 = G__36079;
count__35417 = G__36080;
i__35418 = G__36081;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35415);
if(temp__5735__auto__){
var seq__35415__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35415__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35415__$1);
var G__36083 = cljs.core.chunk_rest(seq__35415__$1);
var G__36084 = c__4550__auto__;
var G__36085 = cljs.core.count(c__4550__auto__);
var G__36086 = (0);
seq__35415 = G__36083;
chunk__35416 = G__36084;
count__35417 = G__36085;
i__35418 = G__36086;
continue;
} else {
var it = cljs.core.first(seq__35415__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36087 = cljs.core.next(seq__35415__$1);
var G__36088 = null;
var G__36089 = (0);
var G__36090 = (0);
seq__35415 = G__36087;
chunk__35416 = G__36088;
count__35417 = G__36089;
i__35418 = G__36090;
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

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35429,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35437 = k35429;
var G__35437__$1 = (((G__35437 instanceof cljs.core.Keyword))?G__35437.fqn:null);
switch (G__35437__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35429,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35439){
var vec__35440 = p__35439;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35440,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35440,(1),null);
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

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35428){
var self__ = this;
var G__35428__$1 = this;
return (new cljs.core.RecordIter((0),G__35428__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35448 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35448(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35430,other35431){
var self__ = this;
var this35430__$1 = this;
return (((!((other35431 == null)))) && ((this35430__$1.constructor === other35431.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35430__$1.x,other35431.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35430__$1.y,other35431.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35430__$1.__extmap,other35431.__extmap)));
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

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35428){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35459 = cljs.core.keyword_identical_QMARK_;
var expr__35460 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35462 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35463 = expr__35460;
return (pred__35459.cljs$core$IFn$_invoke$arity$2 ? pred__35459.cljs$core$IFn$_invoke$arity$2(G__35462,G__35463) : pred__35459.call(null,G__35462,G__35463));
})())){
return (new shadow.dom.Coordinate(G__35428,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35465 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35466 = expr__35460;
return (pred__35459.cljs$core$IFn$_invoke$arity$2 ? pred__35459.cljs$core$IFn$_invoke$arity$2(G__35465,G__35466) : pred__35459.call(null,G__35465,G__35466));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35428,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35428),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35428){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35428,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35433){
var extmap__4424__auto__ = (function (){var G__35467 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35433,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35433)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35467);
} else {
return G__35467;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35433),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35433),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35468 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35468);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35469 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35469);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35484 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35484);
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

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35486,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35492 = k35486;
var G__35492__$1 = (((G__35492 instanceof cljs.core.Keyword))?G__35492.fqn:null);
switch (G__35492__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35486,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35493){
var vec__35494 = p__35493;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35494,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35494,(1),null);
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

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35485){
var self__ = this;
var G__35485__$1 = this;
return (new cljs.core.RecordIter((0),G__35485__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4243__auto____$1 = (function (){var fexpr__35497 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35497(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35487,other35488){
var self__ = this;
var this35487__$1 = this;
return (((!((other35488 == null)))) && ((this35487__$1.constructor === other35488.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35487__$1.w,other35488.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35487__$1.h,other35488.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35487__$1.__extmap,other35488.__extmap)));
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

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35485){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35498 = cljs.core.keyword_identical_QMARK_;
var expr__35499 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35501 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35502 = expr__35499;
return (pred__35498.cljs$core$IFn$_invoke$arity$2 ? pred__35498.cljs$core$IFn$_invoke$arity$2(G__35501,G__35502) : pred__35498.call(null,G__35501,G__35502));
})())){
return (new shadow.dom.Size(G__35485,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35517 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35518 = expr__35499;
return (pred__35498.cljs$core$IFn$_invoke$arity$2 ? pred__35498.cljs$core$IFn$_invoke$arity$2(G__35517,G__35518) : pred__35498.call(null,G__35517,G__35518));
})())){
return (new shadow.dom.Size(self__.w,G__35485,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35485),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35485){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35485,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35489){
var extmap__4424__auto__ = (function (){var G__35530 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35489,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35489)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35530);
} else {
return G__35530;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35489),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35489),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35534 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35534);
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
var G__36163 = (i + (1));
var G__36164 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36163;
ret = G__36164;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35549){
var vec__35550 = p__35549;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35550,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35550,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35554 = arguments.length;
switch (G__35554) {
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
var G__35555_36169 = new_node;
var G__35556_36170 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35555_36169,G__35556_36170);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35557_36171 = new_node;
var G__35558_36172 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35557_36171,G__35558_36172);

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
var G__36178 = ps;
var G__36179 = (i + (1));
el__$1 = G__36178;
i = G__36179;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35561 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35561);
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
var G__35568 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35568);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35571 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35571);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35575 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35575,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35575,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35575,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35578_36185 = cljs.core.seq(props);
var chunk__35579_36186 = null;
var count__35580_36187 = (0);
var i__35581_36188 = (0);
while(true){
if((i__35581_36188 < count__35580_36187)){
var vec__35592_36190 = chunk__35579_36186.cljs$core$IIndexed$_nth$arity$2(null,i__35581_36188);
var k_36191 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592_36190,(0),null);
var v_36192 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35592_36190,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36191);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36191),v_36192);


var G__36194 = seq__35578_36185;
var G__36195 = chunk__35579_36186;
var G__36196 = count__35580_36187;
var G__36197 = (i__35581_36188 + (1));
seq__35578_36185 = G__36194;
chunk__35579_36186 = G__36195;
count__35580_36187 = G__36196;
i__35581_36188 = G__36197;
continue;
} else {
var temp__5735__auto___36198 = cljs.core.seq(seq__35578_36185);
if(temp__5735__auto___36198){
var seq__35578_36199__$1 = temp__5735__auto___36198;
if(cljs.core.chunked_seq_QMARK_(seq__35578_36199__$1)){
var c__4550__auto___36200 = cljs.core.chunk_first(seq__35578_36199__$1);
var G__36202 = cljs.core.chunk_rest(seq__35578_36199__$1);
var G__36203 = c__4550__auto___36200;
var G__36204 = cljs.core.count(c__4550__auto___36200);
var G__36205 = (0);
seq__35578_36185 = G__36202;
chunk__35579_36186 = G__36203;
count__35580_36187 = G__36204;
i__35581_36188 = G__36205;
continue;
} else {
var vec__35595_36206 = cljs.core.first(seq__35578_36199__$1);
var k_36207 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595_36206,(0),null);
var v_36208 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35595_36206,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36207);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36207),v_36208);


var G__36212 = cljs.core.next(seq__35578_36199__$1);
var G__36213 = null;
var G__36214 = (0);
var G__36215 = (0);
seq__35578_36185 = G__36212;
chunk__35579_36186 = G__36213;
count__35580_36187 = G__36214;
i__35581_36188 = G__36215;
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
var vec__35602 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35602,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35602,(1),null);
var seq__35605_36217 = cljs.core.seq(node_children);
var chunk__35607_36218 = null;
var count__35608_36219 = (0);
var i__35609_36220 = (0);
while(true){
if((i__35609_36220 < count__35608_36219)){
var child_struct_36221 = chunk__35607_36218.cljs$core$IIndexed$_nth$arity$2(null,i__35609_36220);
if((!((child_struct_36221 == null)))){
if(typeof child_struct_36221 === 'string'){
var text_36223 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36223),child_struct_36221].join(''));
} else {
var children_36224 = shadow.dom.svg_node(child_struct_36221);
if(cljs.core.seq_QMARK_(children_36224)){
var seq__35629_36225 = cljs.core.seq(children_36224);
var chunk__35631_36226 = null;
var count__35632_36227 = (0);
var i__35633_36228 = (0);
while(true){
if((i__35633_36228 < count__35632_36227)){
var child_36230 = chunk__35631_36226.cljs$core$IIndexed$_nth$arity$2(null,i__35633_36228);
if(cljs.core.truth_(child_36230)){
node.appendChild(child_36230);


var G__36231 = seq__35629_36225;
var G__36232 = chunk__35631_36226;
var G__36233 = count__35632_36227;
var G__36234 = (i__35633_36228 + (1));
seq__35629_36225 = G__36231;
chunk__35631_36226 = G__36232;
count__35632_36227 = G__36233;
i__35633_36228 = G__36234;
continue;
} else {
var G__36235 = seq__35629_36225;
var G__36236 = chunk__35631_36226;
var G__36237 = count__35632_36227;
var G__36238 = (i__35633_36228 + (1));
seq__35629_36225 = G__36235;
chunk__35631_36226 = G__36236;
count__35632_36227 = G__36237;
i__35633_36228 = G__36238;
continue;
}
} else {
var temp__5735__auto___36240 = cljs.core.seq(seq__35629_36225);
if(temp__5735__auto___36240){
var seq__35629_36241__$1 = temp__5735__auto___36240;
if(cljs.core.chunked_seq_QMARK_(seq__35629_36241__$1)){
var c__4550__auto___36242 = cljs.core.chunk_first(seq__35629_36241__$1);
var G__36243 = cljs.core.chunk_rest(seq__35629_36241__$1);
var G__36244 = c__4550__auto___36242;
var G__36245 = cljs.core.count(c__4550__auto___36242);
var G__36246 = (0);
seq__35629_36225 = G__36243;
chunk__35631_36226 = G__36244;
count__35632_36227 = G__36245;
i__35633_36228 = G__36246;
continue;
} else {
var child_36247 = cljs.core.first(seq__35629_36241__$1);
if(cljs.core.truth_(child_36247)){
node.appendChild(child_36247);


var G__36248 = cljs.core.next(seq__35629_36241__$1);
var G__36249 = null;
var G__36250 = (0);
var G__36251 = (0);
seq__35629_36225 = G__36248;
chunk__35631_36226 = G__36249;
count__35632_36227 = G__36250;
i__35633_36228 = G__36251;
continue;
} else {
var G__36252 = cljs.core.next(seq__35629_36241__$1);
var G__36253 = null;
var G__36254 = (0);
var G__36255 = (0);
seq__35629_36225 = G__36252;
chunk__35631_36226 = G__36253;
count__35632_36227 = G__36254;
i__35633_36228 = G__36255;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36224);
}
}


var G__36257 = seq__35605_36217;
var G__36258 = chunk__35607_36218;
var G__36259 = count__35608_36219;
var G__36260 = (i__35609_36220 + (1));
seq__35605_36217 = G__36257;
chunk__35607_36218 = G__36258;
count__35608_36219 = G__36259;
i__35609_36220 = G__36260;
continue;
} else {
var G__36261 = seq__35605_36217;
var G__36262 = chunk__35607_36218;
var G__36263 = count__35608_36219;
var G__36264 = (i__35609_36220 + (1));
seq__35605_36217 = G__36261;
chunk__35607_36218 = G__36262;
count__35608_36219 = G__36263;
i__35609_36220 = G__36264;
continue;
}
} else {
var temp__5735__auto___36266 = cljs.core.seq(seq__35605_36217);
if(temp__5735__auto___36266){
var seq__35605_36268__$1 = temp__5735__auto___36266;
if(cljs.core.chunked_seq_QMARK_(seq__35605_36268__$1)){
var c__4550__auto___36269 = cljs.core.chunk_first(seq__35605_36268__$1);
var G__36270 = cljs.core.chunk_rest(seq__35605_36268__$1);
var G__36271 = c__4550__auto___36269;
var G__36272 = cljs.core.count(c__4550__auto___36269);
var G__36273 = (0);
seq__35605_36217 = G__36270;
chunk__35607_36218 = G__36271;
count__35608_36219 = G__36272;
i__35609_36220 = G__36273;
continue;
} else {
var child_struct_36274 = cljs.core.first(seq__35605_36268__$1);
if((!((child_struct_36274 == null)))){
if(typeof child_struct_36274 === 'string'){
var text_36276 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36276),child_struct_36274].join(''));
} else {
var children_36278 = shadow.dom.svg_node(child_struct_36274);
if(cljs.core.seq_QMARK_(children_36278)){
var seq__35635_36279 = cljs.core.seq(children_36278);
var chunk__35637_36280 = null;
var count__35638_36281 = (0);
var i__35639_36282 = (0);
while(true){
if((i__35639_36282 < count__35638_36281)){
var child_36284 = chunk__35637_36280.cljs$core$IIndexed$_nth$arity$2(null,i__35639_36282);
if(cljs.core.truth_(child_36284)){
node.appendChild(child_36284);


var G__36285 = seq__35635_36279;
var G__36286 = chunk__35637_36280;
var G__36287 = count__35638_36281;
var G__36288 = (i__35639_36282 + (1));
seq__35635_36279 = G__36285;
chunk__35637_36280 = G__36286;
count__35638_36281 = G__36287;
i__35639_36282 = G__36288;
continue;
} else {
var G__36290 = seq__35635_36279;
var G__36291 = chunk__35637_36280;
var G__36292 = count__35638_36281;
var G__36293 = (i__35639_36282 + (1));
seq__35635_36279 = G__36290;
chunk__35637_36280 = G__36291;
count__35638_36281 = G__36292;
i__35639_36282 = G__36293;
continue;
}
} else {
var temp__5735__auto___36294__$1 = cljs.core.seq(seq__35635_36279);
if(temp__5735__auto___36294__$1){
var seq__35635_36295__$1 = temp__5735__auto___36294__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35635_36295__$1)){
var c__4550__auto___36296 = cljs.core.chunk_first(seq__35635_36295__$1);
var G__36297 = cljs.core.chunk_rest(seq__35635_36295__$1);
var G__36298 = c__4550__auto___36296;
var G__36299 = cljs.core.count(c__4550__auto___36296);
var G__36300 = (0);
seq__35635_36279 = G__36297;
chunk__35637_36280 = G__36298;
count__35638_36281 = G__36299;
i__35639_36282 = G__36300;
continue;
} else {
var child_36301 = cljs.core.first(seq__35635_36295__$1);
if(cljs.core.truth_(child_36301)){
node.appendChild(child_36301);


var G__36303 = cljs.core.next(seq__35635_36295__$1);
var G__36304 = null;
var G__36305 = (0);
var G__36306 = (0);
seq__35635_36279 = G__36303;
chunk__35637_36280 = G__36304;
count__35638_36281 = G__36305;
i__35639_36282 = G__36306;
continue;
} else {
var G__36307 = cljs.core.next(seq__35635_36295__$1);
var G__36308 = null;
var G__36309 = (0);
var G__36310 = (0);
seq__35635_36279 = G__36307;
chunk__35637_36280 = G__36308;
count__35638_36281 = G__36309;
i__35639_36282 = G__36310;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36278);
}
}


var G__36312 = cljs.core.next(seq__35605_36268__$1);
var G__36313 = null;
var G__36314 = (0);
var G__36315 = (0);
seq__35605_36217 = G__36312;
chunk__35607_36218 = G__36313;
count__35608_36219 = G__36314;
i__35609_36220 = G__36315;
continue;
} else {
var G__36316 = cljs.core.next(seq__35605_36268__$1);
var G__36317 = null;
var G__36318 = (0);
var G__36319 = (0);
seq__35605_36217 = G__36316;
chunk__35607_36218 = G__36317;
count__35608_36219 = G__36318;
i__35609_36220 = G__36319;
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

var G__35641_36320 = shadow.dom._to_svg;
var G__35642_36321 = "string";
var G__35643_36322 = ((function (G__35641_36320,G__35642_36321){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35641_36320,G__35642_36321))
;
goog.object.set(G__35641_36320,G__35642_36321,G__35643_36322);

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

var G__35644_36325 = shadow.dom._to_svg;
var G__35645_36326 = "null";
var G__35646_36327 = ((function (G__35644_36325,G__35645_36326){
return (function (_){
return null;
});})(G__35644_36325,G__35645_36326))
;
goog.object.set(G__35644_36325,G__35645_36326,G__35646_36327);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36329 = arguments.length;
var i__4731__auto___36331 = (0);
while(true){
if((i__4731__auto___36331 < len__4730__auto___36329)){
args__4736__auto__.push((arguments[i__4731__auto___36331]));

var G__36332 = (i__4731__auto___36331 + (1));
i__4731__auto___36331 = G__36332;
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
shadow.dom.svg.cljs$lang$applyTo = (function (seq35647){
var G__35648 = cljs.core.first(seq35647);
var seq35647__$1 = cljs.core.next(seq35647);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35648,seq35647__$1);
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
var G__35651 = arguments.length;
switch (G__35651) {
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
var G__35655_36339 = shadow.dom.dom_node(el);
var G__35656_36340 = cljs.core.name(event);
var G__35657_36341 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35655_36339,G__35656_36340,G__35657_36341) : shadow.dom.dom_listen.call(null,G__35655_36339,G__35656_36340,G__35657_36341));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33527__auto___36347 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___36347,buf,chan,event_fn){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___36347,buf,chan,event_fn){
return (function (state_35667){
var state_val_35668 = (state_35667[(1)]);
if((state_val_35668 === (1))){
var state_35667__$1 = state_35667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35667__$1,(2),once_or_cleanup);
} else {
if((state_val_35668 === (2))){
var inst_35664 = (state_35667[(2)]);
var inst_35665 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35667__$1 = (function (){var statearr_35669 = state_35667;
(statearr_35669[(7)] = inst_35664);

return statearr_35669;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35667__$1,inst_35665);
} else {
return null;
}
}
});})(c__33527__auto___36347,buf,chan,event_fn))
;
return ((function (switch__33429__auto__,c__33527__auto___36347,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33430__auto__ = null;
var shadow$dom$state_machine__33430__auto____0 = (function (){
var statearr_35671 = [null,null,null,null,null,null,null,null];
(statearr_35671[(0)] = shadow$dom$state_machine__33430__auto__);

(statearr_35671[(1)] = (1));

return statearr_35671;
});
var shadow$dom$state_machine__33430__auto____1 = (function (state_35667){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_35667);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e35674){if((e35674 instanceof Object)){
var ex__33433__auto__ = e35674;
var statearr_35675_36349 = state_35667;
(statearr_35675_36349[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35667);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35674;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36350 = state_35667;
state_35667 = G__36350;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
shadow$dom$state_machine__33430__auto__ = function(state_35667){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33430__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33430__auto____1.call(this,state_35667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33430__auto____0;
shadow$dom$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33430__auto____1;
return shadow$dom$state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___36347,buf,chan,event_fn))
})();
var state__33529__auto__ = (function (){var statearr_35676 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_35676[(6)] = c__33527__auto___36347);

return statearr_35676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___36347,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
