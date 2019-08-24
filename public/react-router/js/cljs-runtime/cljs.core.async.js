goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33588 = arguments.length;
switch (G__33588) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33589 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33589 = (function (f,blockable,meta33590){
this.f = f;
this.blockable = blockable;
this.meta33590 = meta33590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33591,meta33590__$1){
var self__ = this;
var _33591__$1 = this;
return (new cljs.core.async.t_cljs$core$async33589(self__.f,self__.blockable,meta33590__$1));
});

cljs.core.async.t_cljs$core$async33589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33591){
var self__ = this;
var _33591__$1 = this;
return self__.meta33590;
});

cljs.core.async.t_cljs$core$async33589.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33589.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33589.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33589.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33589.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33590","meta33590",1944207256,null)], null);
});

cljs.core.async.t_cljs$core$async33589.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33589.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33589";

cljs.core.async.t_cljs$core$async33589.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33589");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33589.
 */
cljs.core.async.__GT_t_cljs$core$async33589 = (function cljs$core$async$__GT_t_cljs$core$async33589(f__$1,blockable__$1,meta33590){
return (new cljs.core.async.t_cljs$core$async33589(f__$1,blockable__$1,meta33590));
});

}

return (new cljs.core.async.t_cljs$core$async33589(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33594 = arguments.length;
switch (G__33594) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33596 = arguments.length;
switch (G__33596) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33598 = arguments.length;
switch (G__33598) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35039 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35039) : fn1.call(null,val_35039));
} else {
cljs.core.async.impl.dispatch.run(((function (val_35039,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35039) : fn1.call(null,val_35039));
});})(val_35039,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33600 = arguments.length;
switch (G__33600) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___35057 = n;
var x_35059 = (0);
while(true){
if((x_35059 < n__4607__auto___35057)){
(a[x_35059] = x_35059);

var G__35060 = (x_35059 + (1));
x_35059 = G__35060;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33601 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33601 = (function (flag,meta33602){
this.flag = flag;
this.meta33602 = meta33602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33603,meta33602__$1){
var self__ = this;
var _33603__$1 = this;
return (new cljs.core.async.t_cljs$core$async33601(self__.flag,meta33602__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33603){
var self__ = this;
var _33603__$1 = this;
return self__.meta33602;
});})(flag))
;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33601.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33601.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33602","meta33602",830243087,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33601";

cljs.core.async.t_cljs$core$async33601.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33601");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33601.
 */
cljs.core.async.__GT_t_cljs$core$async33601 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33601(flag__$1,meta33602){
return (new cljs.core.async.t_cljs$core$async33601(flag__$1,meta33602));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33601(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33604 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33604 = (function (flag,cb,meta33605){
this.flag = flag;
this.cb = cb;
this.meta33605 = meta33605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33606,meta33605__$1){
var self__ = this;
var _33606__$1 = this;
return (new cljs.core.async.t_cljs$core$async33604(self__.flag,self__.cb,meta33605__$1));
});

cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33606){
var self__ = this;
var _33606__$1 = this;
return self__.meta33605;
});

cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33605","meta33605",-1329362264,null)], null);
});

cljs.core.async.t_cljs$core$async33604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33604";

cljs.core.async.t_cljs$core$async33604.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33604");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33604.
 */
cljs.core.async.__GT_t_cljs$core$async33604 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33604(flag__$1,cb__$1,meta33605){
return (new cljs.core.async.t_cljs$core$async33604(flag__$1,cb__$1,meta33605));
});

}

return (new cljs.core.async.t_cljs$core$async33604(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33607_SHARP_){
var G__33610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33607_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33610) : fret.call(null,G__33610));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33608_SHARP_){
var G__33612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33608_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33612) : fret.call(null,G__33612));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35114 = (i + (1));
i = G__35114;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35128 = arguments.length;
var i__4731__auto___35129 = (0);
while(true){
if((i__4731__auto___35129 < len__4730__auto___35128)){
args__4736__auto__.push((arguments[i__4731__auto___35129]));

var G__35131 = (i__4731__auto___35129 + (1));
i__4731__auto___35129 = G__35131;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33615){
var map__33616 = p__33615;
var map__33616__$1 = (((((!((map__33616 == null))))?(((((map__33616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33616):map__33616);
var opts = map__33616__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33613){
var G__33614 = cljs.core.first(seq33613);
var seq33613__$1 = cljs.core.next(seq33613);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33614,seq33613__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33619 = arguments.length;
switch (G__33619) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33527__auto___35152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___35152){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___35152){
return (function (state_33643){
var state_val_33644 = (state_33643[(1)]);
if((state_val_33644 === (7))){
var inst_33639 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
var statearr_33645_35187 = state_33643__$1;
(statearr_33645_35187[(2)] = inst_33639);

(statearr_33645_35187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (1))){
var state_33643__$1 = state_33643;
var statearr_33646_35191 = state_33643__$1;
(statearr_33646_35191[(2)] = null);

(statearr_33646_35191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (4))){
var inst_33622 = (state_33643[(7)]);
var inst_33622__$1 = (state_33643[(2)]);
var inst_33623 = (inst_33622__$1 == null);
var state_33643__$1 = (function (){var statearr_33647 = state_33643;
(statearr_33647[(7)] = inst_33622__$1);

return statearr_33647;
})();
if(cljs.core.truth_(inst_33623)){
var statearr_33648_35192 = state_33643__$1;
(statearr_33648_35192[(1)] = (5));

} else {
var statearr_33649_35195 = state_33643__$1;
(statearr_33649_35195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (13))){
var state_33643__$1 = state_33643;
var statearr_33650_35198 = state_33643__$1;
(statearr_33650_35198[(2)] = null);

(statearr_33650_35198[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (6))){
var inst_33622 = (state_33643[(7)]);
var state_33643__$1 = state_33643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33643__$1,(11),to,inst_33622);
} else {
if((state_val_33644 === (3))){
var inst_33641 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33643__$1,inst_33641);
} else {
if((state_val_33644 === (12))){
var state_33643__$1 = state_33643;
var statearr_33651_35202 = state_33643__$1;
(statearr_33651_35202[(2)] = null);

(statearr_33651_35202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (2))){
var state_33643__$1 = state_33643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33643__$1,(4),from);
} else {
if((state_val_33644 === (11))){
var inst_33632 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
if(cljs.core.truth_(inst_33632)){
var statearr_33652_35206 = state_33643__$1;
(statearr_33652_35206[(1)] = (12));

} else {
var statearr_33653_35207 = state_33643__$1;
(statearr_33653_35207[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (9))){
var state_33643__$1 = state_33643;
var statearr_33654_35211 = state_33643__$1;
(statearr_33654_35211[(2)] = null);

(statearr_33654_35211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (5))){
var state_33643__$1 = state_33643;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33655_35225 = state_33643__$1;
(statearr_33655_35225[(1)] = (8));

} else {
var statearr_33656_35229 = state_33643__$1;
(statearr_33656_35229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (14))){
var inst_33637 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
var statearr_33657_35233 = state_33643__$1;
(statearr_33657_35233[(2)] = inst_33637);

(statearr_33657_35233[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (10))){
var inst_33629 = (state_33643[(2)]);
var state_33643__$1 = state_33643;
var statearr_33658_35234 = state_33643__$1;
(statearr_33658_35234[(2)] = inst_33629);

(statearr_33658_35234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33644 === (8))){
var inst_33626 = cljs.core.async.close_BANG_(to);
var state_33643__$1 = state_33643;
var statearr_33659_35247 = state_33643__$1;
(statearr_33659_35247[(2)] = inst_33626);

(statearr_33659_35247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___35152))
;
return ((function (switch__33429__auto__,c__33527__auto___35152){
return (function() {
var cljs$core$async$state_machine__33430__auto__ = null;
var cljs$core$async$state_machine__33430__auto____0 = (function (){
var statearr_33660 = [null,null,null,null,null,null,null,null];
(statearr_33660[(0)] = cljs$core$async$state_machine__33430__auto__);

(statearr_33660[(1)] = (1));

return statearr_33660;
});
var cljs$core$async$state_machine__33430__auto____1 = (function (state_33643){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_33643);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e33661){if((e33661 instanceof Object)){
var ex__33433__auto__ = e33661;
var statearr_33662_35249 = state_33643;
(statearr_33662_35249[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33661;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35250 = state_33643;
state_33643 = G__35250;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$state_machine__33430__auto__ = function(state_33643){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33430__auto____1.call(this,state_33643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33430__auto____0;
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33430__auto____1;
return cljs$core$async$state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___35152))
})();
var state__33529__auto__ = (function (){var statearr_33663 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_33663[(6)] = c__33527__auto___35152);

return statearr_33663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___35152))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33664){
var vec__33665 = p__33664;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33665,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33665,(1),null);
var job = vec__33665;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33527__auto___35251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___35251,res,vec__33665,v,p,job,jobs,results){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___35251,res,vec__33665,v,p,job,jobs,results){
return (function (state_33672){
var state_val_33673 = (state_33672[(1)]);
if((state_val_33673 === (1))){
var state_33672__$1 = state_33672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33672__$1,(2),res,v);
} else {
if((state_val_33673 === (2))){
var inst_33669 = (state_33672[(2)]);
var inst_33670 = cljs.core.async.close_BANG_(res);
var state_33672__$1 = (function (){var statearr_33674 = state_33672;
(statearr_33674[(7)] = inst_33669);

return statearr_33674;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33672__$1,inst_33670);
} else {
return null;
}
}
});})(c__33527__auto___35251,res,vec__33665,v,p,job,jobs,results))
;
return ((function (switch__33429__auto__,c__33527__auto___35251,res,vec__33665,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0 = (function (){
var statearr_33675 = [null,null,null,null,null,null,null,null];
(statearr_33675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__);

(statearr_33675[(1)] = (1));

return statearr_33675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1 = (function (state_33672){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_33672);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e33676){if((e33676 instanceof Object)){
var ex__33433__auto__ = e33676;
var statearr_33677_35311 = state_33672;
(statearr_33677_35311[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33672);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33676;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35312 = state_33672;
state_33672 = G__35312;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__ = function(state_33672){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1.call(this,state_33672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___35251,res,vec__33665,v,p,job,jobs,results))
})();
var state__33529__auto__ = (function (){var statearr_33678 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_33678[(6)] = c__33527__auto___35251);

return statearr_33678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___35251,res,vec__33665,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33679){
var vec__33680 = p__33679;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33680,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33680,(1),null);
var job = vec__33680;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___35313 = n;
var __35314 = (0);
while(true){
if((__35314 < n__4607__auto___35313)){
var G__33683_35315 = type;
var G__33683_35316__$1 = (((G__33683_35315 instanceof cljs.core.Keyword))?G__33683_35315.fqn:null);
switch (G__33683_35316__$1) {
case "compute":
var c__33527__auto___35318 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35314,c__33527__auto___35318,G__33683_35315,G__33683_35316__$1,n__4607__auto___35313,jobs,results,process,async){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (__35314,c__33527__auto___35318,G__33683_35315,G__33683_35316__$1,n__4607__auto___35313,jobs,results,process,async){
return (function (state_33696){
var state_val_33697 = (state_33696[(1)]);
if((state_val_33697 === (1))){
var state_33696__$1 = state_33696;
var statearr_33698_35319 = state_33696__$1;
(statearr_33698_35319[(2)] = null);

(statearr_33698_35319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (2))){
var state_33696__$1 = state_33696;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33696__$1,(4),jobs);
} else {
if((state_val_33697 === (3))){
var inst_33694 = (state_33696[(2)]);
var state_33696__$1 = state_33696;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33696__$1,inst_33694);
} else {
if((state_val_33697 === (4))){
var inst_33686 = (state_33696[(2)]);
var inst_33687 = process(inst_33686);
var state_33696__$1 = state_33696;
if(cljs.core.truth_(inst_33687)){
var statearr_33699_35320 = state_33696__$1;
(statearr_33699_35320[(1)] = (5));

} else {
var statearr_33700_35321 = state_33696__$1;
(statearr_33700_35321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (5))){
var state_33696__$1 = state_33696;
var statearr_33701_35322 = state_33696__$1;
(statearr_33701_35322[(2)] = null);

(statearr_33701_35322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (6))){
var state_33696__$1 = state_33696;
var statearr_33702_35323 = state_33696__$1;
(statearr_33702_35323[(2)] = null);

(statearr_33702_35323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33697 === (7))){
var inst_33692 = (state_33696[(2)]);
var state_33696__$1 = state_33696;
var statearr_33703_35324 = state_33696__$1;
(statearr_33703_35324[(2)] = inst_33692);

(statearr_33703_35324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35314,c__33527__auto___35318,G__33683_35315,G__33683_35316__$1,n__4607__auto___35313,jobs,results,process,async))
;
return ((function (__35314,switch__33429__auto__,c__33527__auto___35318,G__33683_35315,G__33683_35316__$1,n__4607__auto___35313,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0 = (function (){
var statearr_33704 = [null,null,null,null,null,null,null];
(statearr_33704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__);

(statearr_33704[(1)] = (1));

return statearr_33704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1 = (function (state_33696){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_33696);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e33705){if((e33705 instanceof Object)){
var ex__33433__auto__ = e33705;
var statearr_33706_35325 = state_33696;
(statearr_33706_35325[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33696);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35326 = state_33696;
state_33696 = G__35326;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__ = function(state_33696){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1.call(this,state_33696);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__;
})()
;})(__35314,switch__33429__auto__,c__33527__auto___35318,G__33683_35315,G__33683_35316__$1,n__4607__auto___35313,jobs,results,process,async))
})();
var state__33529__auto__ = (function (){var statearr_33707 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_33707[(6)] = c__33527__auto___35318);

return statearr_33707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(__35314,c__33527__auto___35318,G__33683_35315,G__33683_35316__$1,n__4607__auto___35313,jobs,results,process,async))
);


break;
case "async":
var c__33527__auto___35327 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35314,c__33527__auto___35327,G__33683_35315,G__33683_35316__$1,n__4607__auto___35313,jobs,results,process,async){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (__35314,c__33527__auto___35327,G__33683_35315,G__33683_35316__$1,n__4607__auto___35313,jobs,results,process,async){
return (function (state_33720){
var state_val_33721 = (state_33720[(1)]);
if((state_val_33721 === (1))){
var state_33720__$1 = state_33720;
var statearr_33722_35328 = state_33720__$1;
(statearr_33722_35328[(2)] = null);

(statearr_33722_35328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (2))){
var state_33720__$1 = state_33720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33720__$1,(4),jobs);
} else {
if((state_val_33721 === (3))){
var inst_33718 = (state_33720[(2)]);
var state_33720__$1 = state_33720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33720__$1,inst_33718);
} else {
if((state_val_33721 === (4))){
var inst_33710 = (state_33720[(2)]);
var inst_33711 = async(inst_33710);
var state_33720__$1 = state_33720;
if(cljs.core.truth_(inst_33711)){
var statearr_33723_35329 = state_33720__$1;
(statearr_33723_35329[(1)] = (5));

} else {
var statearr_33724_35330 = state_33720__$1;
(statearr_33724_35330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (5))){
var state_33720__$1 = state_33720;
var statearr_33725_35331 = state_33720__$1;
(statearr_33725_35331[(2)] = null);

(statearr_33725_35331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (6))){
var state_33720__$1 = state_33720;
var statearr_33726_35332 = state_33720__$1;
(statearr_33726_35332[(2)] = null);

(statearr_33726_35332[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33721 === (7))){
var inst_33716 = (state_33720[(2)]);
var state_33720__$1 = state_33720;
var statearr_33727_35333 = state_33720__$1;
(statearr_33727_35333[(2)] = inst_33716);

(statearr_33727_35333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35314,c__33527__auto___35327,G__33683_35315,G__33683_35316__$1,n__4607__auto___35313,jobs,results,process,async))
;
return ((function (__35314,switch__33429__auto__,c__33527__auto___35327,G__33683_35315,G__33683_35316__$1,n__4607__auto___35313,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0 = (function (){
var statearr_33728 = [null,null,null,null,null,null,null];
(statearr_33728[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__);

(statearr_33728[(1)] = (1));

return statearr_33728;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1 = (function (state_33720){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_33720);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e33729){if((e33729 instanceof Object)){
var ex__33433__auto__ = e33729;
var statearr_33730_35335 = state_33720;
(statearr_33730_35335[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33729;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35336 = state_33720;
state_33720 = G__35336;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__ = function(state_33720){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1.call(this,state_33720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__;
})()
;})(__35314,switch__33429__auto__,c__33527__auto___35327,G__33683_35315,G__33683_35316__$1,n__4607__auto___35313,jobs,results,process,async))
})();
var state__33529__auto__ = (function (){var statearr_33731 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_33731[(6)] = c__33527__auto___35327);

return statearr_33731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(__35314,c__33527__auto___35327,G__33683_35315,G__33683_35316__$1,n__4607__auto___35313,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33683_35316__$1)].join('')));

}

var G__35338 = (__35314 + (1));
__35314 = G__35338;
continue;
} else {
}
break;
}

var c__33527__auto___35339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___35339,jobs,results,process,async){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___35339,jobs,results,process,async){
return (function (state_33753){
var state_val_33754 = (state_33753[(1)]);
if((state_val_33754 === (7))){
var inst_33749 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
var statearr_33755_35340 = state_33753__$1;
(statearr_33755_35340[(2)] = inst_33749);

(statearr_33755_35340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (1))){
var state_33753__$1 = state_33753;
var statearr_33756_35341 = state_33753__$1;
(statearr_33756_35341[(2)] = null);

(statearr_33756_35341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (4))){
var inst_33734 = (state_33753[(7)]);
var inst_33734__$1 = (state_33753[(2)]);
var inst_33735 = (inst_33734__$1 == null);
var state_33753__$1 = (function (){var statearr_33757 = state_33753;
(statearr_33757[(7)] = inst_33734__$1);

return statearr_33757;
})();
if(cljs.core.truth_(inst_33735)){
var statearr_33758_35342 = state_33753__$1;
(statearr_33758_35342[(1)] = (5));

} else {
var statearr_33759_35343 = state_33753__$1;
(statearr_33759_35343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (6))){
var inst_33734 = (state_33753[(7)]);
var inst_33739 = (state_33753[(8)]);
var inst_33739__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33740 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33741 = [inst_33734,inst_33739__$1];
var inst_33742 = (new cljs.core.PersistentVector(null,2,(5),inst_33740,inst_33741,null));
var state_33753__$1 = (function (){var statearr_33760 = state_33753;
(statearr_33760[(8)] = inst_33739__$1);

return statearr_33760;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33753__$1,(8),jobs,inst_33742);
} else {
if((state_val_33754 === (3))){
var inst_33751 = (state_33753[(2)]);
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33753__$1,inst_33751);
} else {
if((state_val_33754 === (2))){
var state_33753__$1 = state_33753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33753__$1,(4),from);
} else {
if((state_val_33754 === (9))){
var inst_33746 = (state_33753[(2)]);
var state_33753__$1 = (function (){var statearr_33761 = state_33753;
(statearr_33761[(9)] = inst_33746);

return statearr_33761;
})();
var statearr_33762_35344 = state_33753__$1;
(statearr_33762_35344[(2)] = null);

(statearr_33762_35344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (5))){
var inst_33737 = cljs.core.async.close_BANG_(jobs);
var state_33753__$1 = state_33753;
var statearr_33763_35345 = state_33753__$1;
(statearr_33763_35345[(2)] = inst_33737);

(statearr_33763_35345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33754 === (8))){
var inst_33739 = (state_33753[(8)]);
var inst_33744 = (state_33753[(2)]);
var state_33753__$1 = (function (){var statearr_33764 = state_33753;
(statearr_33764[(10)] = inst_33744);

return statearr_33764;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33753__$1,(9),results,inst_33739);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___35339,jobs,results,process,async))
;
return ((function (switch__33429__auto__,c__33527__auto___35339,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0 = (function (){
var statearr_33765 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__);

(statearr_33765[(1)] = (1));

return statearr_33765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1 = (function (state_33753){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_33753);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e33766){if((e33766 instanceof Object)){
var ex__33433__auto__ = e33766;
var statearr_33767_35347 = state_33753;
(statearr_33767_35347[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35351 = state_33753;
state_33753 = G__35351;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__ = function(state_33753){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1.call(this,state_33753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___35339,jobs,results,process,async))
})();
var state__33529__auto__ = (function (){var statearr_33768 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_33768[(6)] = c__33527__auto___35339);

return statearr_33768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___35339,jobs,results,process,async))
);


var c__33527__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto__,jobs,results,process,async){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto__,jobs,results,process,async){
return (function (state_33806){
var state_val_33807 = (state_33806[(1)]);
if((state_val_33807 === (7))){
var inst_33802 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
var statearr_33808_35352 = state_33806__$1;
(statearr_33808_35352[(2)] = inst_33802);

(statearr_33808_35352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (20))){
var state_33806__$1 = state_33806;
var statearr_33809_35353 = state_33806__$1;
(statearr_33809_35353[(2)] = null);

(statearr_33809_35353[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (1))){
var state_33806__$1 = state_33806;
var statearr_33810_35354 = state_33806__$1;
(statearr_33810_35354[(2)] = null);

(statearr_33810_35354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (4))){
var inst_33771 = (state_33806[(7)]);
var inst_33771__$1 = (state_33806[(2)]);
var inst_33772 = (inst_33771__$1 == null);
var state_33806__$1 = (function (){var statearr_33811 = state_33806;
(statearr_33811[(7)] = inst_33771__$1);

return statearr_33811;
})();
if(cljs.core.truth_(inst_33772)){
var statearr_33812_35355 = state_33806__$1;
(statearr_33812_35355[(1)] = (5));

} else {
var statearr_33813_35356 = state_33806__$1;
(statearr_33813_35356[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (15))){
var inst_33784 = (state_33806[(8)]);
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33806__$1,(18),to,inst_33784);
} else {
if((state_val_33807 === (21))){
var inst_33797 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
var statearr_33814_35357 = state_33806__$1;
(statearr_33814_35357[(2)] = inst_33797);

(statearr_33814_35357[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (13))){
var inst_33799 = (state_33806[(2)]);
var state_33806__$1 = (function (){var statearr_33815 = state_33806;
(statearr_33815[(9)] = inst_33799);

return statearr_33815;
})();
var statearr_33816_35358 = state_33806__$1;
(statearr_33816_35358[(2)] = null);

(statearr_33816_35358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (6))){
var inst_33771 = (state_33806[(7)]);
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33806__$1,(11),inst_33771);
} else {
if((state_val_33807 === (17))){
var inst_33792 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
if(cljs.core.truth_(inst_33792)){
var statearr_33817_35359 = state_33806__$1;
(statearr_33817_35359[(1)] = (19));

} else {
var statearr_33818_35360 = state_33806__$1;
(statearr_33818_35360[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (3))){
var inst_33804 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33806__$1,inst_33804);
} else {
if((state_val_33807 === (12))){
var inst_33781 = (state_33806[(10)]);
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33806__$1,(14),inst_33781);
} else {
if((state_val_33807 === (2))){
var state_33806__$1 = state_33806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33806__$1,(4),results);
} else {
if((state_val_33807 === (19))){
var state_33806__$1 = state_33806;
var statearr_33819_35361 = state_33806__$1;
(statearr_33819_35361[(2)] = null);

(statearr_33819_35361[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (11))){
var inst_33781 = (state_33806[(2)]);
var state_33806__$1 = (function (){var statearr_33820 = state_33806;
(statearr_33820[(10)] = inst_33781);

return statearr_33820;
})();
var statearr_33821_35362 = state_33806__$1;
(statearr_33821_35362[(2)] = null);

(statearr_33821_35362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (9))){
var state_33806__$1 = state_33806;
var statearr_33822_35363 = state_33806__$1;
(statearr_33822_35363[(2)] = null);

(statearr_33822_35363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (5))){
var state_33806__$1 = state_33806;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33823_35364 = state_33806__$1;
(statearr_33823_35364[(1)] = (8));

} else {
var statearr_33824_35365 = state_33806__$1;
(statearr_33824_35365[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (14))){
var inst_33784 = (state_33806[(8)]);
var inst_33786 = (state_33806[(11)]);
var inst_33784__$1 = (state_33806[(2)]);
var inst_33785 = (inst_33784__$1 == null);
var inst_33786__$1 = cljs.core.not(inst_33785);
var state_33806__$1 = (function (){var statearr_33825 = state_33806;
(statearr_33825[(8)] = inst_33784__$1);

(statearr_33825[(11)] = inst_33786__$1);

return statearr_33825;
})();
if(inst_33786__$1){
var statearr_33826_35383 = state_33806__$1;
(statearr_33826_35383[(1)] = (15));

} else {
var statearr_33827_35384 = state_33806__$1;
(statearr_33827_35384[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (16))){
var inst_33786 = (state_33806[(11)]);
var state_33806__$1 = state_33806;
var statearr_33828_35385 = state_33806__$1;
(statearr_33828_35385[(2)] = inst_33786);

(statearr_33828_35385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (10))){
var inst_33778 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
var statearr_33829_35389 = state_33806__$1;
(statearr_33829_35389[(2)] = inst_33778);

(statearr_33829_35389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (18))){
var inst_33789 = (state_33806[(2)]);
var state_33806__$1 = state_33806;
var statearr_33830_35391 = state_33806__$1;
(statearr_33830_35391[(2)] = inst_33789);

(statearr_33830_35391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33807 === (8))){
var inst_33775 = cljs.core.async.close_BANG_(to);
var state_33806__$1 = state_33806;
var statearr_33831_35395 = state_33806__$1;
(statearr_33831_35395[(2)] = inst_33775);

(statearr_33831_35395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto__,jobs,results,process,async))
;
return ((function (switch__33429__auto__,c__33527__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0 = (function (){
var statearr_33832 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33832[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__);

(statearr_33832[(1)] = (1));

return statearr_33832;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1 = (function (state_33806){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_33806);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e33833){if((e33833 instanceof Object)){
var ex__33433__auto__ = e33833;
var statearr_33834_35396 = state_33806;
(statearr_33834_35396[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35397 = state_33806;
state_33806 = G__35397;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__ = function(state_33806){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1.call(this,state_33806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33430__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto__,jobs,results,process,async))
})();
var state__33529__auto__ = (function (){var statearr_33835 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_33835[(6)] = c__33527__auto__);

return statearr_33835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto__,jobs,results,process,async))
);

return c__33527__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33837 = arguments.length;
switch (G__33837) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33839 = arguments.length;
switch (G__33839) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33841 = arguments.length;
switch (G__33841) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33527__auto___35413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___35413,tc,fc){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___35413,tc,fc){
return (function (state_33867){
var state_val_33868 = (state_33867[(1)]);
if((state_val_33868 === (7))){
var inst_33863 = (state_33867[(2)]);
var state_33867__$1 = state_33867;
var statearr_33869_35414 = state_33867__$1;
(statearr_33869_35414[(2)] = inst_33863);

(statearr_33869_35414[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33868 === (1))){
var state_33867__$1 = state_33867;
var statearr_33870_35419 = state_33867__$1;
(statearr_33870_35419[(2)] = null);

(statearr_33870_35419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33868 === (4))){
var inst_33844 = (state_33867[(7)]);
var inst_33844__$1 = (state_33867[(2)]);
var inst_33845 = (inst_33844__$1 == null);
var state_33867__$1 = (function (){var statearr_33871 = state_33867;
(statearr_33871[(7)] = inst_33844__$1);

return statearr_33871;
})();
if(cljs.core.truth_(inst_33845)){
var statearr_33872_35420 = state_33867__$1;
(statearr_33872_35420[(1)] = (5));

} else {
var statearr_33873_35421 = state_33867__$1;
(statearr_33873_35421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33868 === (13))){
var state_33867__$1 = state_33867;
var statearr_33874_35422 = state_33867__$1;
(statearr_33874_35422[(2)] = null);

(statearr_33874_35422[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33868 === (6))){
var inst_33844 = (state_33867[(7)]);
var inst_33850 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33844) : p.call(null,inst_33844));
var state_33867__$1 = state_33867;
if(cljs.core.truth_(inst_33850)){
var statearr_33875_35423 = state_33867__$1;
(statearr_33875_35423[(1)] = (9));

} else {
var statearr_33876_35424 = state_33867__$1;
(statearr_33876_35424[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33868 === (3))){
var inst_33865 = (state_33867[(2)]);
var state_33867__$1 = state_33867;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33867__$1,inst_33865);
} else {
if((state_val_33868 === (12))){
var state_33867__$1 = state_33867;
var statearr_33877_35425 = state_33867__$1;
(statearr_33877_35425[(2)] = null);

(statearr_33877_35425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33868 === (2))){
var state_33867__$1 = state_33867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33867__$1,(4),ch);
} else {
if((state_val_33868 === (11))){
var inst_33844 = (state_33867[(7)]);
var inst_33854 = (state_33867[(2)]);
var state_33867__$1 = state_33867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33867__$1,(8),inst_33854,inst_33844);
} else {
if((state_val_33868 === (9))){
var state_33867__$1 = state_33867;
var statearr_33878_35426 = state_33867__$1;
(statearr_33878_35426[(2)] = tc);

(statearr_33878_35426[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33868 === (5))){
var inst_33847 = cljs.core.async.close_BANG_(tc);
var inst_33848 = cljs.core.async.close_BANG_(fc);
var state_33867__$1 = (function (){var statearr_33879 = state_33867;
(statearr_33879[(8)] = inst_33847);

return statearr_33879;
})();
var statearr_33880_35427 = state_33867__$1;
(statearr_33880_35427[(2)] = inst_33848);

(statearr_33880_35427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33868 === (14))){
var inst_33861 = (state_33867[(2)]);
var state_33867__$1 = state_33867;
var statearr_33881_35432 = state_33867__$1;
(statearr_33881_35432[(2)] = inst_33861);

(statearr_33881_35432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33868 === (10))){
var state_33867__$1 = state_33867;
var statearr_33882_35434 = state_33867__$1;
(statearr_33882_35434[(2)] = fc);

(statearr_33882_35434[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33868 === (8))){
var inst_33856 = (state_33867[(2)]);
var state_33867__$1 = state_33867;
if(cljs.core.truth_(inst_33856)){
var statearr_33883_35435 = state_33867__$1;
(statearr_33883_35435[(1)] = (12));

} else {
var statearr_33884_35436 = state_33867__$1;
(statearr_33884_35436[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___35413,tc,fc))
;
return ((function (switch__33429__auto__,c__33527__auto___35413,tc,fc){
return (function() {
var cljs$core$async$state_machine__33430__auto__ = null;
var cljs$core$async$state_machine__33430__auto____0 = (function (){
var statearr_33885 = [null,null,null,null,null,null,null,null,null];
(statearr_33885[(0)] = cljs$core$async$state_machine__33430__auto__);

(statearr_33885[(1)] = (1));

return statearr_33885;
});
var cljs$core$async$state_machine__33430__auto____1 = (function (state_33867){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_33867);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e33886){if((e33886 instanceof Object)){
var ex__33433__auto__ = e33886;
var statearr_33887_35438 = state_33867;
(statearr_33887_35438[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35443 = state_33867;
state_33867 = G__35443;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$state_machine__33430__auto__ = function(state_33867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33430__auto____1.call(this,state_33867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33430__auto____0;
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33430__auto____1;
return cljs$core$async$state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___35413,tc,fc))
})();
var state__33529__auto__ = (function (){var statearr_33888 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_33888[(6)] = c__33527__auto___35413);

return statearr_33888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___35413,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33527__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto__){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto__){
return (function (state_33909){
var state_val_33910 = (state_33909[(1)]);
if((state_val_33910 === (7))){
var inst_33905 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
var statearr_33911_35444 = state_33909__$1;
(statearr_33911_35444[(2)] = inst_33905);

(statearr_33911_35444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (1))){
var inst_33889 = init;
var state_33909__$1 = (function (){var statearr_33912 = state_33909;
(statearr_33912[(7)] = inst_33889);

return statearr_33912;
})();
var statearr_33913_35445 = state_33909__$1;
(statearr_33913_35445[(2)] = null);

(statearr_33913_35445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (4))){
var inst_33892 = (state_33909[(8)]);
var inst_33892__$1 = (state_33909[(2)]);
var inst_33893 = (inst_33892__$1 == null);
var state_33909__$1 = (function (){var statearr_33914 = state_33909;
(statearr_33914[(8)] = inst_33892__$1);

return statearr_33914;
})();
if(cljs.core.truth_(inst_33893)){
var statearr_33915_35446 = state_33909__$1;
(statearr_33915_35446[(1)] = (5));

} else {
var statearr_33916_35447 = state_33909__$1;
(statearr_33916_35447[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (6))){
var inst_33892 = (state_33909[(8)]);
var inst_33889 = (state_33909[(7)]);
var inst_33896 = (state_33909[(9)]);
var inst_33896__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33889,inst_33892) : f.call(null,inst_33889,inst_33892));
var inst_33897 = cljs.core.reduced_QMARK_(inst_33896__$1);
var state_33909__$1 = (function (){var statearr_33917 = state_33909;
(statearr_33917[(9)] = inst_33896__$1);

return statearr_33917;
})();
if(inst_33897){
var statearr_33918_35449 = state_33909__$1;
(statearr_33918_35449[(1)] = (8));

} else {
var statearr_33919_35450 = state_33909__$1;
(statearr_33919_35450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (3))){
var inst_33907 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33909__$1,inst_33907);
} else {
if((state_val_33910 === (2))){
var state_33909__$1 = state_33909;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33909__$1,(4),ch);
} else {
if((state_val_33910 === (9))){
var inst_33896 = (state_33909[(9)]);
var inst_33889 = inst_33896;
var state_33909__$1 = (function (){var statearr_33920 = state_33909;
(statearr_33920[(7)] = inst_33889);

return statearr_33920;
})();
var statearr_33921_35451 = state_33909__$1;
(statearr_33921_35451[(2)] = null);

(statearr_33921_35451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (5))){
var inst_33889 = (state_33909[(7)]);
var state_33909__$1 = state_33909;
var statearr_33922_35452 = state_33909__$1;
(statearr_33922_35452[(2)] = inst_33889);

(statearr_33922_35452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (10))){
var inst_33903 = (state_33909[(2)]);
var state_33909__$1 = state_33909;
var statearr_33923_35453 = state_33909__$1;
(statearr_33923_35453[(2)] = inst_33903);

(statearr_33923_35453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33910 === (8))){
var inst_33896 = (state_33909[(9)]);
var inst_33899 = cljs.core.deref(inst_33896);
var state_33909__$1 = state_33909;
var statearr_33924_35454 = state_33909__$1;
(statearr_33924_35454[(2)] = inst_33899);

(statearr_33924_35454[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto__))
;
return ((function (switch__33429__auto__,c__33527__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33430__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33430__auto____0 = (function (){
var statearr_33925 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33925[(0)] = cljs$core$async$reduce_$_state_machine__33430__auto__);

(statearr_33925[(1)] = (1));

return statearr_33925;
});
var cljs$core$async$reduce_$_state_machine__33430__auto____1 = (function (state_33909){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_33909);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e33926){if((e33926 instanceof Object)){
var ex__33433__auto__ = e33926;
var statearr_33927_35455 = state_33909;
(statearr_33927_35455[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33909);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33926;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35456 = state_33909;
state_33909 = G__35456;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33430__auto__ = function(state_33909){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33430__auto____1.call(this,state_33909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33430__auto____0;
cljs$core$async$reduce_$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33430__auto____1;
return cljs$core$async$reduce_$_state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto__))
})();
var state__33529__auto__ = (function (){var statearr_33928 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_33928[(6)] = c__33527__auto__);

return statearr_33928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto__))
);

return c__33527__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33527__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto__,f__$1){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto__,f__$1){
return (function (state_33934){
var state_val_33935 = (state_33934[(1)]);
if((state_val_33935 === (1))){
var inst_33929 = cljs.core.async.reduce(f__$1,init,ch);
var state_33934__$1 = state_33934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33934__$1,(2),inst_33929);
} else {
if((state_val_33935 === (2))){
var inst_33931 = (state_33934[(2)]);
var inst_33932 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33931) : f__$1.call(null,inst_33931));
var state_33934__$1 = state_33934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33934__$1,inst_33932);
} else {
return null;
}
}
});})(c__33527__auto__,f__$1))
;
return ((function (switch__33429__auto__,c__33527__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33430__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33430__auto____0 = (function (){
var statearr_33936 = [null,null,null,null,null,null,null];
(statearr_33936[(0)] = cljs$core$async$transduce_$_state_machine__33430__auto__);

(statearr_33936[(1)] = (1));

return statearr_33936;
});
var cljs$core$async$transduce_$_state_machine__33430__auto____1 = (function (state_33934){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_33934);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e33937){if((e33937 instanceof Object)){
var ex__33433__auto__ = e33937;
var statearr_33938_35457 = state_33934;
(statearr_33938_35457[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33937;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35458 = state_33934;
state_33934 = G__35458;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33430__auto__ = function(state_33934){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33430__auto____1.call(this,state_33934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33430__auto____0;
cljs$core$async$transduce_$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33430__auto____1;
return cljs$core$async$transduce_$_state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto__,f__$1))
})();
var state__33529__auto__ = (function (){var statearr_33939 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_33939[(6)] = c__33527__auto__);

return statearr_33939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto__,f__$1))
);

return c__33527__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33941 = arguments.length;
switch (G__33941) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33527__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto__){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto__){
return (function (state_33966){
var state_val_33967 = (state_33966[(1)]);
if((state_val_33967 === (7))){
var inst_33948 = (state_33966[(2)]);
var state_33966__$1 = state_33966;
var statearr_33968_35470 = state_33966__$1;
(statearr_33968_35470[(2)] = inst_33948);

(statearr_33968_35470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (1))){
var inst_33942 = cljs.core.seq(coll);
var inst_33943 = inst_33942;
var state_33966__$1 = (function (){var statearr_33969 = state_33966;
(statearr_33969[(7)] = inst_33943);

return statearr_33969;
})();
var statearr_33970_35471 = state_33966__$1;
(statearr_33970_35471[(2)] = null);

(statearr_33970_35471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (4))){
var inst_33943 = (state_33966[(7)]);
var inst_33946 = cljs.core.first(inst_33943);
var state_33966__$1 = state_33966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33966__$1,(7),ch,inst_33946);
} else {
if((state_val_33967 === (13))){
var inst_33960 = (state_33966[(2)]);
var state_33966__$1 = state_33966;
var statearr_33971_35472 = state_33966__$1;
(statearr_33971_35472[(2)] = inst_33960);

(statearr_33971_35472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (6))){
var inst_33951 = (state_33966[(2)]);
var state_33966__$1 = state_33966;
if(cljs.core.truth_(inst_33951)){
var statearr_33972_35473 = state_33966__$1;
(statearr_33972_35473[(1)] = (8));

} else {
var statearr_33973_35474 = state_33966__$1;
(statearr_33973_35474[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (3))){
var inst_33964 = (state_33966[(2)]);
var state_33966__$1 = state_33966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33966__$1,inst_33964);
} else {
if((state_val_33967 === (12))){
var state_33966__$1 = state_33966;
var statearr_33974_35475 = state_33966__$1;
(statearr_33974_35475[(2)] = null);

(statearr_33974_35475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (2))){
var inst_33943 = (state_33966[(7)]);
var state_33966__$1 = state_33966;
if(cljs.core.truth_(inst_33943)){
var statearr_33975_35476 = state_33966__$1;
(statearr_33975_35476[(1)] = (4));

} else {
var statearr_33976_35477 = state_33966__$1;
(statearr_33976_35477[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (11))){
var inst_33957 = cljs.core.async.close_BANG_(ch);
var state_33966__$1 = state_33966;
var statearr_33977_35478 = state_33966__$1;
(statearr_33977_35478[(2)] = inst_33957);

(statearr_33977_35478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (9))){
var state_33966__$1 = state_33966;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33978_35479 = state_33966__$1;
(statearr_33978_35479[(1)] = (11));

} else {
var statearr_33979_35480 = state_33966__$1;
(statearr_33979_35480[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (5))){
var inst_33943 = (state_33966[(7)]);
var state_33966__$1 = state_33966;
var statearr_33980_35481 = state_33966__$1;
(statearr_33980_35481[(2)] = inst_33943);

(statearr_33980_35481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (10))){
var inst_33962 = (state_33966[(2)]);
var state_33966__$1 = state_33966;
var statearr_33981_35482 = state_33966__$1;
(statearr_33981_35482[(2)] = inst_33962);

(statearr_33981_35482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33967 === (8))){
var inst_33943 = (state_33966[(7)]);
var inst_33953 = cljs.core.next(inst_33943);
var inst_33943__$1 = inst_33953;
var state_33966__$1 = (function (){var statearr_33982 = state_33966;
(statearr_33982[(7)] = inst_33943__$1);

return statearr_33982;
})();
var statearr_33983_35483 = state_33966__$1;
(statearr_33983_35483[(2)] = null);

(statearr_33983_35483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto__))
;
return ((function (switch__33429__auto__,c__33527__auto__){
return (function() {
var cljs$core$async$state_machine__33430__auto__ = null;
var cljs$core$async$state_machine__33430__auto____0 = (function (){
var statearr_33984 = [null,null,null,null,null,null,null,null];
(statearr_33984[(0)] = cljs$core$async$state_machine__33430__auto__);

(statearr_33984[(1)] = (1));

return statearr_33984;
});
var cljs$core$async$state_machine__33430__auto____1 = (function (state_33966){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_33966);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e33985){if((e33985 instanceof Object)){
var ex__33433__auto__ = e33985;
var statearr_33986_35490 = state_33966;
(statearr_33986_35490[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35491 = state_33966;
state_33966 = G__35491;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$state_machine__33430__auto__ = function(state_33966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33430__auto____1.call(this,state_33966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33430__auto____0;
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33430__auto____1;
return cljs$core$async$state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto__))
})();
var state__33529__auto__ = (function (){var statearr_33987 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_33987[(6)] = c__33527__auto__);

return statearr_33987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto__))
);

return c__33527__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33988 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33988 = (function (ch,cs,meta33989){
this.ch = ch;
this.cs = cs;
this.meta33989 = meta33989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33990,meta33989__$1){
var self__ = this;
var _33990__$1 = this;
return (new cljs.core.async.t_cljs$core$async33988(self__.ch,self__.cs,meta33989__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33990){
var self__ = this;
var _33990__$1 = this;
return self__.meta33989;
});})(cs))
;

cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33988.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33988.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33989","meta33989",-174389502,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33988";

cljs.core.async.t_cljs$core$async33988.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33988");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33988.
 */
cljs.core.async.__GT_t_cljs$core$async33988 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33988(ch__$1,cs__$1,meta33989){
return (new cljs.core.async.t_cljs$core$async33988(ch__$1,cs__$1,meta33989));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33988(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33527__auto___35503 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___35503,cs,m,dchan,dctr,done){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___35503,cs,m,dchan,dctr,done){
return (function (state_34125){
var state_val_34126 = (state_34125[(1)]);
if((state_val_34126 === (7))){
var inst_34121 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34127_35504 = state_34125__$1;
(statearr_34127_35504[(2)] = inst_34121);

(statearr_34127_35504[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (20))){
var inst_34024 = (state_34125[(7)]);
var inst_34036 = cljs.core.first(inst_34024);
var inst_34037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34036,(0),null);
var inst_34038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34036,(1),null);
var state_34125__$1 = (function (){var statearr_34128 = state_34125;
(statearr_34128[(8)] = inst_34037);

return statearr_34128;
})();
if(cljs.core.truth_(inst_34038)){
var statearr_34129_35505 = state_34125__$1;
(statearr_34129_35505[(1)] = (22));

} else {
var statearr_34130_35506 = state_34125__$1;
(statearr_34130_35506[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (27))){
var inst_34068 = (state_34125[(9)]);
var inst_34066 = (state_34125[(10)]);
var inst_33993 = (state_34125[(11)]);
var inst_34073 = (state_34125[(12)]);
var inst_34073__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34066,inst_34068);
var inst_34074 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34073__$1,inst_33993,done);
var state_34125__$1 = (function (){var statearr_34131 = state_34125;
(statearr_34131[(12)] = inst_34073__$1);

return statearr_34131;
})();
if(cljs.core.truth_(inst_34074)){
var statearr_34132_35507 = state_34125__$1;
(statearr_34132_35507[(1)] = (30));

} else {
var statearr_34133_35508 = state_34125__$1;
(statearr_34133_35508[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (1))){
var state_34125__$1 = state_34125;
var statearr_34134_35509 = state_34125__$1;
(statearr_34134_35509[(2)] = null);

(statearr_34134_35509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (24))){
var inst_34024 = (state_34125[(7)]);
var inst_34043 = (state_34125[(2)]);
var inst_34044 = cljs.core.next(inst_34024);
var inst_34002 = inst_34044;
var inst_34003 = null;
var inst_34004 = (0);
var inst_34005 = (0);
var state_34125__$1 = (function (){var statearr_34135 = state_34125;
(statearr_34135[(13)] = inst_34043);

(statearr_34135[(14)] = inst_34004);

(statearr_34135[(15)] = inst_34003);

(statearr_34135[(16)] = inst_34005);

(statearr_34135[(17)] = inst_34002);

return statearr_34135;
})();
var statearr_34136_35510 = state_34125__$1;
(statearr_34136_35510[(2)] = null);

(statearr_34136_35510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (39))){
var state_34125__$1 = state_34125;
var statearr_34140_35511 = state_34125__$1;
(statearr_34140_35511[(2)] = null);

(statearr_34140_35511[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (4))){
var inst_33993 = (state_34125[(11)]);
var inst_33993__$1 = (state_34125[(2)]);
var inst_33994 = (inst_33993__$1 == null);
var state_34125__$1 = (function (){var statearr_34141 = state_34125;
(statearr_34141[(11)] = inst_33993__$1);

return statearr_34141;
})();
if(cljs.core.truth_(inst_33994)){
var statearr_34142_35512 = state_34125__$1;
(statearr_34142_35512[(1)] = (5));

} else {
var statearr_34143_35513 = state_34125__$1;
(statearr_34143_35513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (15))){
var inst_34004 = (state_34125[(14)]);
var inst_34003 = (state_34125[(15)]);
var inst_34005 = (state_34125[(16)]);
var inst_34002 = (state_34125[(17)]);
var inst_34020 = (state_34125[(2)]);
var inst_34021 = (inst_34005 + (1));
var tmp34137 = inst_34004;
var tmp34138 = inst_34003;
var tmp34139 = inst_34002;
var inst_34002__$1 = tmp34139;
var inst_34003__$1 = tmp34138;
var inst_34004__$1 = tmp34137;
var inst_34005__$1 = inst_34021;
var state_34125__$1 = (function (){var statearr_34144 = state_34125;
(statearr_34144[(18)] = inst_34020);

(statearr_34144[(14)] = inst_34004__$1);

(statearr_34144[(15)] = inst_34003__$1);

(statearr_34144[(16)] = inst_34005__$1);

(statearr_34144[(17)] = inst_34002__$1);

return statearr_34144;
})();
var statearr_34145_35514 = state_34125__$1;
(statearr_34145_35514[(2)] = null);

(statearr_34145_35514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (21))){
var inst_34047 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34149_35515 = state_34125__$1;
(statearr_34149_35515[(2)] = inst_34047);

(statearr_34149_35515[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (31))){
var inst_34073 = (state_34125[(12)]);
var inst_34077 = done(null);
var inst_34078 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34073);
var state_34125__$1 = (function (){var statearr_34150 = state_34125;
(statearr_34150[(19)] = inst_34077);

return statearr_34150;
})();
var statearr_34151_35516 = state_34125__$1;
(statearr_34151_35516[(2)] = inst_34078);

(statearr_34151_35516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (32))){
var inst_34068 = (state_34125[(9)]);
var inst_34066 = (state_34125[(10)]);
var inst_34065 = (state_34125[(20)]);
var inst_34067 = (state_34125[(21)]);
var inst_34080 = (state_34125[(2)]);
var inst_34081 = (inst_34068 + (1));
var tmp34146 = inst_34066;
var tmp34147 = inst_34065;
var tmp34148 = inst_34067;
var inst_34065__$1 = tmp34147;
var inst_34066__$1 = tmp34146;
var inst_34067__$1 = tmp34148;
var inst_34068__$1 = inst_34081;
var state_34125__$1 = (function (){var statearr_34152 = state_34125;
(statearr_34152[(9)] = inst_34068__$1);

(statearr_34152[(22)] = inst_34080);

(statearr_34152[(10)] = inst_34066__$1);

(statearr_34152[(20)] = inst_34065__$1);

(statearr_34152[(21)] = inst_34067__$1);

return statearr_34152;
})();
var statearr_34153_35519 = state_34125__$1;
(statearr_34153_35519[(2)] = null);

(statearr_34153_35519[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (40))){
var inst_34093 = (state_34125[(23)]);
var inst_34097 = done(null);
var inst_34098 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34093);
var state_34125__$1 = (function (){var statearr_34154 = state_34125;
(statearr_34154[(24)] = inst_34097);

return statearr_34154;
})();
var statearr_34155_35520 = state_34125__$1;
(statearr_34155_35520[(2)] = inst_34098);

(statearr_34155_35520[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (33))){
var inst_34084 = (state_34125[(25)]);
var inst_34086 = cljs.core.chunked_seq_QMARK_(inst_34084);
var state_34125__$1 = state_34125;
if(inst_34086){
var statearr_34156_35521 = state_34125__$1;
(statearr_34156_35521[(1)] = (36));

} else {
var statearr_34157_35522 = state_34125__$1;
(statearr_34157_35522[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (13))){
var inst_34014 = (state_34125[(26)]);
var inst_34017 = cljs.core.async.close_BANG_(inst_34014);
var state_34125__$1 = state_34125;
var statearr_34158_35523 = state_34125__$1;
(statearr_34158_35523[(2)] = inst_34017);

(statearr_34158_35523[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (22))){
var inst_34037 = (state_34125[(8)]);
var inst_34040 = cljs.core.async.close_BANG_(inst_34037);
var state_34125__$1 = state_34125;
var statearr_34159_35524 = state_34125__$1;
(statearr_34159_35524[(2)] = inst_34040);

(statearr_34159_35524[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (36))){
var inst_34084 = (state_34125[(25)]);
var inst_34088 = cljs.core.chunk_first(inst_34084);
var inst_34089 = cljs.core.chunk_rest(inst_34084);
var inst_34090 = cljs.core.count(inst_34088);
var inst_34065 = inst_34089;
var inst_34066 = inst_34088;
var inst_34067 = inst_34090;
var inst_34068 = (0);
var state_34125__$1 = (function (){var statearr_34160 = state_34125;
(statearr_34160[(9)] = inst_34068);

(statearr_34160[(10)] = inst_34066);

(statearr_34160[(20)] = inst_34065);

(statearr_34160[(21)] = inst_34067);

return statearr_34160;
})();
var statearr_34161_35525 = state_34125__$1;
(statearr_34161_35525[(2)] = null);

(statearr_34161_35525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (41))){
var inst_34084 = (state_34125[(25)]);
var inst_34100 = (state_34125[(2)]);
var inst_34101 = cljs.core.next(inst_34084);
var inst_34065 = inst_34101;
var inst_34066 = null;
var inst_34067 = (0);
var inst_34068 = (0);
var state_34125__$1 = (function (){var statearr_34162 = state_34125;
(statearr_34162[(9)] = inst_34068);

(statearr_34162[(10)] = inst_34066);

(statearr_34162[(27)] = inst_34100);

(statearr_34162[(20)] = inst_34065);

(statearr_34162[(21)] = inst_34067);

return statearr_34162;
})();
var statearr_34163_35526 = state_34125__$1;
(statearr_34163_35526[(2)] = null);

(statearr_34163_35526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (43))){
var state_34125__$1 = state_34125;
var statearr_34164_35527 = state_34125__$1;
(statearr_34164_35527[(2)] = null);

(statearr_34164_35527[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (29))){
var inst_34109 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34165_35528 = state_34125__$1;
(statearr_34165_35528[(2)] = inst_34109);

(statearr_34165_35528[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (44))){
var inst_34118 = (state_34125[(2)]);
var state_34125__$1 = (function (){var statearr_34166 = state_34125;
(statearr_34166[(28)] = inst_34118);

return statearr_34166;
})();
var statearr_34167_35529 = state_34125__$1;
(statearr_34167_35529[(2)] = null);

(statearr_34167_35529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (6))){
var inst_34057 = (state_34125[(29)]);
var inst_34056 = cljs.core.deref(cs);
var inst_34057__$1 = cljs.core.keys(inst_34056);
var inst_34058 = cljs.core.count(inst_34057__$1);
var inst_34059 = cljs.core.reset_BANG_(dctr,inst_34058);
var inst_34064 = cljs.core.seq(inst_34057__$1);
var inst_34065 = inst_34064;
var inst_34066 = null;
var inst_34067 = (0);
var inst_34068 = (0);
var state_34125__$1 = (function (){var statearr_34168 = state_34125;
(statearr_34168[(9)] = inst_34068);

(statearr_34168[(30)] = inst_34059);

(statearr_34168[(10)] = inst_34066);

(statearr_34168[(29)] = inst_34057__$1);

(statearr_34168[(20)] = inst_34065);

(statearr_34168[(21)] = inst_34067);

return statearr_34168;
})();
var statearr_34169_35531 = state_34125__$1;
(statearr_34169_35531[(2)] = null);

(statearr_34169_35531[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (28))){
var inst_34084 = (state_34125[(25)]);
var inst_34065 = (state_34125[(20)]);
var inst_34084__$1 = cljs.core.seq(inst_34065);
var state_34125__$1 = (function (){var statearr_34170 = state_34125;
(statearr_34170[(25)] = inst_34084__$1);

return statearr_34170;
})();
if(inst_34084__$1){
var statearr_34171_35532 = state_34125__$1;
(statearr_34171_35532[(1)] = (33));

} else {
var statearr_34172_35533 = state_34125__$1;
(statearr_34172_35533[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (25))){
var inst_34068 = (state_34125[(9)]);
var inst_34067 = (state_34125[(21)]);
var inst_34070 = (inst_34068 < inst_34067);
var inst_34071 = inst_34070;
var state_34125__$1 = state_34125;
if(cljs.core.truth_(inst_34071)){
var statearr_34173_35535 = state_34125__$1;
(statearr_34173_35535[(1)] = (27));

} else {
var statearr_34174_35536 = state_34125__$1;
(statearr_34174_35536[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (34))){
var state_34125__$1 = state_34125;
var statearr_34175_35537 = state_34125__$1;
(statearr_34175_35537[(2)] = null);

(statearr_34175_35537[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (17))){
var state_34125__$1 = state_34125;
var statearr_34176_35538 = state_34125__$1;
(statearr_34176_35538[(2)] = null);

(statearr_34176_35538[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (3))){
var inst_34123 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34125__$1,inst_34123);
} else {
if((state_val_34126 === (12))){
var inst_34052 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34177_35539 = state_34125__$1;
(statearr_34177_35539[(2)] = inst_34052);

(statearr_34177_35539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (2))){
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34125__$1,(4),ch);
} else {
if((state_val_34126 === (23))){
var state_34125__$1 = state_34125;
var statearr_34178_35540 = state_34125__$1;
(statearr_34178_35540[(2)] = null);

(statearr_34178_35540[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (35))){
var inst_34107 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34179_35541 = state_34125__$1;
(statearr_34179_35541[(2)] = inst_34107);

(statearr_34179_35541[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (19))){
var inst_34024 = (state_34125[(7)]);
var inst_34028 = cljs.core.chunk_first(inst_34024);
var inst_34029 = cljs.core.chunk_rest(inst_34024);
var inst_34030 = cljs.core.count(inst_34028);
var inst_34002 = inst_34029;
var inst_34003 = inst_34028;
var inst_34004 = inst_34030;
var inst_34005 = (0);
var state_34125__$1 = (function (){var statearr_34180 = state_34125;
(statearr_34180[(14)] = inst_34004);

(statearr_34180[(15)] = inst_34003);

(statearr_34180[(16)] = inst_34005);

(statearr_34180[(17)] = inst_34002);

return statearr_34180;
})();
var statearr_34181_35542 = state_34125__$1;
(statearr_34181_35542[(2)] = null);

(statearr_34181_35542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (11))){
var inst_34024 = (state_34125[(7)]);
var inst_34002 = (state_34125[(17)]);
var inst_34024__$1 = cljs.core.seq(inst_34002);
var state_34125__$1 = (function (){var statearr_34182 = state_34125;
(statearr_34182[(7)] = inst_34024__$1);

return statearr_34182;
})();
if(inst_34024__$1){
var statearr_34183_35547 = state_34125__$1;
(statearr_34183_35547[(1)] = (16));

} else {
var statearr_34184_35548 = state_34125__$1;
(statearr_34184_35548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (9))){
var inst_34054 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34185_35559 = state_34125__$1;
(statearr_34185_35559[(2)] = inst_34054);

(statearr_34185_35559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (5))){
var inst_34000 = cljs.core.deref(cs);
var inst_34001 = cljs.core.seq(inst_34000);
var inst_34002 = inst_34001;
var inst_34003 = null;
var inst_34004 = (0);
var inst_34005 = (0);
var state_34125__$1 = (function (){var statearr_34186 = state_34125;
(statearr_34186[(14)] = inst_34004);

(statearr_34186[(15)] = inst_34003);

(statearr_34186[(16)] = inst_34005);

(statearr_34186[(17)] = inst_34002);

return statearr_34186;
})();
var statearr_34187_35560 = state_34125__$1;
(statearr_34187_35560[(2)] = null);

(statearr_34187_35560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (14))){
var state_34125__$1 = state_34125;
var statearr_34188_35562 = state_34125__$1;
(statearr_34188_35562[(2)] = null);

(statearr_34188_35562[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (45))){
var inst_34115 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34189_35563 = state_34125__$1;
(statearr_34189_35563[(2)] = inst_34115);

(statearr_34189_35563[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (26))){
var inst_34057 = (state_34125[(29)]);
var inst_34111 = (state_34125[(2)]);
var inst_34112 = cljs.core.seq(inst_34057);
var state_34125__$1 = (function (){var statearr_34190 = state_34125;
(statearr_34190[(31)] = inst_34111);

return statearr_34190;
})();
if(inst_34112){
var statearr_34191_35564 = state_34125__$1;
(statearr_34191_35564[(1)] = (42));

} else {
var statearr_34192_35565 = state_34125__$1;
(statearr_34192_35565[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (16))){
var inst_34024 = (state_34125[(7)]);
var inst_34026 = cljs.core.chunked_seq_QMARK_(inst_34024);
var state_34125__$1 = state_34125;
if(inst_34026){
var statearr_34193_35566 = state_34125__$1;
(statearr_34193_35566[(1)] = (19));

} else {
var statearr_34194_35567 = state_34125__$1;
(statearr_34194_35567[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (38))){
var inst_34104 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34195_35569 = state_34125__$1;
(statearr_34195_35569[(2)] = inst_34104);

(statearr_34195_35569[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (30))){
var state_34125__$1 = state_34125;
var statearr_34196_35570 = state_34125__$1;
(statearr_34196_35570[(2)] = null);

(statearr_34196_35570[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (10))){
var inst_34003 = (state_34125[(15)]);
var inst_34005 = (state_34125[(16)]);
var inst_34013 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34003,inst_34005);
var inst_34014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34013,(0),null);
var inst_34015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34013,(1),null);
var state_34125__$1 = (function (){var statearr_34197 = state_34125;
(statearr_34197[(26)] = inst_34014);

return statearr_34197;
})();
if(cljs.core.truth_(inst_34015)){
var statearr_34198_35572 = state_34125__$1;
(statearr_34198_35572[(1)] = (13));

} else {
var statearr_34199_35573 = state_34125__$1;
(statearr_34199_35573[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (18))){
var inst_34050 = (state_34125[(2)]);
var state_34125__$1 = state_34125;
var statearr_34200_35574 = state_34125__$1;
(statearr_34200_35574[(2)] = inst_34050);

(statearr_34200_35574[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (42))){
var state_34125__$1 = state_34125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34125__$1,(45),dchan);
} else {
if((state_val_34126 === (37))){
var inst_34084 = (state_34125[(25)]);
var inst_34093 = (state_34125[(23)]);
var inst_33993 = (state_34125[(11)]);
var inst_34093__$1 = cljs.core.first(inst_34084);
var inst_34094 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34093__$1,inst_33993,done);
var state_34125__$1 = (function (){var statearr_34201 = state_34125;
(statearr_34201[(23)] = inst_34093__$1);

return statearr_34201;
})();
if(cljs.core.truth_(inst_34094)){
var statearr_34202_35582 = state_34125__$1;
(statearr_34202_35582[(1)] = (39));

} else {
var statearr_34203_35583 = state_34125__$1;
(statearr_34203_35583[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34126 === (8))){
var inst_34004 = (state_34125[(14)]);
var inst_34005 = (state_34125[(16)]);
var inst_34007 = (inst_34005 < inst_34004);
var inst_34008 = inst_34007;
var state_34125__$1 = state_34125;
if(cljs.core.truth_(inst_34008)){
var statearr_34204_35587 = state_34125__$1;
(statearr_34204_35587[(1)] = (10));

} else {
var statearr_34205_35588 = state_34125__$1;
(statearr_34205_35588[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___35503,cs,m,dchan,dctr,done))
;
return ((function (switch__33429__auto__,c__33527__auto___35503,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33430__auto__ = null;
var cljs$core$async$mult_$_state_machine__33430__auto____0 = (function (){
var statearr_34206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34206[(0)] = cljs$core$async$mult_$_state_machine__33430__auto__);

(statearr_34206[(1)] = (1));

return statearr_34206;
});
var cljs$core$async$mult_$_state_machine__33430__auto____1 = (function (state_34125){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_34125);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e34207){if((e34207 instanceof Object)){
var ex__33433__auto__ = e34207;
var statearr_34208_35598 = state_34125;
(statearr_34208_35598[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34207;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35599 = state_34125;
state_34125 = G__35599;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33430__auto__ = function(state_34125){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33430__auto____1.call(this,state_34125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33430__auto____0;
cljs$core$async$mult_$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33430__auto____1;
return cljs$core$async$mult_$_state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___35503,cs,m,dchan,dctr,done))
})();
var state__33529__auto__ = (function (){var statearr_34209 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_34209[(6)] = c__33527__auto___35503);

return statearr_34209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___35503,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34211 = arguments.length;
switch (G__34211) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35623 = arguments.length;
var i__4731__auto___35624 = (0);
while(true){
if((i__4731__auto___35624 < len__4730__auto___35623)){
args__4736__auto__.push((arguments[i__4731__auto___35624]));

var G__35625 = (i__4731__auto___35624 + (1));
i__4731__auto___35624 = G__35625;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34216){
var map__34217 = p__34216;
var map__34217__$1 = (((((!((map__34217 == null))))?(((((map__34217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34217):map__34217);
var opts = map__34217__$1;
var statearr_34219_35626 = state;
(statearr_34219_35626[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__34217,map__34217__$1,opts){
return (function (val){
var statearr_34220_35627 = state;
(statearr_34220_35627[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34217,map__34217__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34221_35628 = state;
(statearr_34221_35628[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34212){
var G__34213 = cljs.core.first(seq34212);
var seq34212__$1 = cljs.core.next(seq34212);
var G__34214 = cljs.core.first(seq34212__$1);
var seq34212__$2 = cljs.core.next(seq34212__$1);
var G__34215 = cljs.core.first(seq34212__$2);
var seq34212__$3 = cljs.core.next(seq34212__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34213,G__34214,G__34215,seq34212__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34222 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34222 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34223){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34223 = meta34223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34224,meta34223__$1){
var self__ = this;
var _34224__$1 = this;
return (new cljs.core.async.t_cljs$core$async34222(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34223__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34224){
var self__ = this;
var _34224__$1 = this;
return self__.meta34223;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34222.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34222.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34223","meta34223",1091900119,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34222";

cljs.core.async.t_cljs$core$async34222.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34222");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34222.
 */
cljs.core.async.__GT_t_cljs$core$async34222 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34222(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34223){
return (new cljs.core.async.t_cljs$core$async34222(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34223));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34222(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33527__auto___35649 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___35649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___35649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34326){
var state_val_34327 = (state_34326[(1)]);
if((state_val_34327 === (7))){
var inst_34241 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34328_35652 = state_34326__$1;
(statearr_34328_35652[(2)] = inst_34241);

(statearr_34328_35652[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (20))){
var inst_34253 = (state_34326[(7)]);
var state_34326__$1 = state_34326;
var statearr_34329_35653 = state_34326__$1;
(statearr_34329_35653[(2)] = inst_34253);

(statearr_34329_35653[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (27))){
var state_34326__$1 = state_34326;
var statearr_34330_35654 = state_34326__$1;
(statearr_34330_35654[(2)] = null);

(statearr_34330_35654[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (1))){
var inst_34228 = (state_34326[(8)]);
var inst_34228__$1 = calc_state();
var inst_34230 = (inst_34228__$1 == null);
var inst_34231 = cljs.core.not(inst_34230);
var state_34326__$1 = (function (){var statearr_34331 = state_34326;
(statearr_34331[(8)] = inst_34228__$1);

return statearr_34331;
})();
if(inst_34231){
var statearr_34332_35658 = state_34326__$1;
(statearr_34332_35658[(1)] = (2));

} else {
var statearr_34333_35659 = state_34326__$1;
(statearr_34333_35659[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (24))){
var inst_34286 = (state_34326[(9)]);
var inst_34277 = (state_34326[(10)]);
var inst_34300 = (state_34326[(11)]);
var inst_34300__$1 = (inst_34277.cljs$core$IFn$_invoke$arity$1 ? inst_34277.cljs$core$IFn$_invoke$arity$1(inst_34286) : inst_34277.call(null,inst_34286));
var state_34326__$1 = (function (){var statearr_34334 = state_34326;
(statearr_34334[(11)] = inst_34300__$1);

return statearr_34334;
})();
if(cljs.core.truth_(inst_34300__$1)){
var statearr_34335_35660 = state_34326__$1;
(statearr_34335_35660[(1)] = (29));

} else {
var statearr_34336_35661 = state_34326__$1;
(statearr_34336_35661[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (4))){
var inst_34244 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
if(cljs.core.truth_(inst_34244)){
var statearr_34337_35662 = state_34326__$1;
(statearr_34337_35662[(1)] = (8));

} else {
var statearr_34338_35670 = state_34326__$1;
(statearr_34338_35670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (15))){
var inst_34271 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
if(cljs.core.truth_(inst_34271)){
var statearr_34339_35672 = state_34326__$1;
(statearr_34339_35672[(1)] = (19));

} else {
var statearr_34340_35673 = state_34326__$1;
(statearr_34340_35673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (21))){
var inst_34276 = (state_34326[(12)]);
var inst_34276__$1 = (state_34326[(2)]);
var inst_34277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34276__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34276__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34276__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34326__$1 = (function (){var statearr_34341 = state_34326;
(statearr_34341[(13)] = inst_34278);

(statearr_34341[(10)] = inst_34277);

(statearr_34341[(12)] = inst_34276__$1);

return statearr_34341;
})();
return cljs.core.async.ioc_alts_BANG_(state_34326__$1,(22),inst_34279);
} else {
if((state_val_34327 === (31))){
var inst_34308 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
if(cljs.core.truth_(inst_34308)){
var statearr_34342_35677 = state_34326__$1;
(statearr_34342_35677[(1)] = (32));

} else {
var statearr_34343_35678 = state_34326__$1;
(statearr_34343_35678[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (32))){
var inst_34285 = (state_34326[(14)]);
var state_34326__$1 = state_34326;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34326__$1,(35),out,inst_34285);
} else {
if((state_val_34327 === (33))){
var inst_34276 = (state_34326[(12)]);
var inst_34253 = inst_34276;
var state_34326__$1 = (function (){var statearr_34344 = state_34326;
(statearr_34344[(7)] = inst_34253);

return statearr_34344;
})();
var statearr_34345_35679 = state_34326__$1;
(statearr_34345_35679[(2)] = null);

(statearr_34345_35679[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (13))){
var inst_34253 = (state_34326[(7)]);
var inst_34260 = inst_34253.cljs$lang$protocol_mask$partition0$;
var inst_34261 = (inst_34260 & (64));
var inst_34262 = inst_34253.cljs$core$ISeq$;
var inst_34263 = (cljs.core.PROTOCOL_SENTINEL === inst_34262);
var inst_34264 = ((inst_34261) || (inst_34263));
var state_34326__$1 = state_34326;
if(cljs.core.truth_(inst_34264)){
var statearr_34346_35680 = state_34326__$1;
(statearr_34346_35680[(1)] = (16));

} else {
var statearr_34347_35681 = state_34326__$1;
(statearr_34347_35681[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (22))){
var inst_34286 = (state_34326[(9)]);
var inst_34285 = (state_34326[(14)]);
var inst_34284 = (state_34326[(2)]);
var inst_34285__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34284,(0),null);
var inst_34286__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34284,(1),null);
var inst_34287 = (inst_34285__$1 == null);
var inst_34288 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34286__$1,change);
var inst_34289 = ((inst_34287) || (inst_34288));
var state_34326__$1 = (function (){var statearr_34348 = state_34326;
(statearr_34348[(9)] = inst_34286__$1);

(statearr_34348[(14)] = inst_34285__$1);

return statearr_34348;
})();
if(cljs.core.truth_(inst_34289)){
var statearr_34349_35682 = state_34326__$1;
(statearr_34349_35682[(1)] = (23));

} else {
var statearr_34350_35683 = state_34326__$1;
(statearr_34350_35683[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (36))){
var inst_34276 = (state_34326[(12)]);
var inst_34253 = inst_34276;
var state_34326__$1 = (function (){var statearr_34351 = state_34326;
(statearr_34351[(7)] = inst_34253);

return statearr_34351;
})();
var statearr_34352_35684 = state_34326__$1;
(statearr_34352_35684[(2)] = null);

(statearr_34352_35684[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (29))){
var inst_34300 = (state_34326[(11)]);
var state_34326__$1 = state_34326;
var statearr_34353_35685 = state_34326__$1;
(statearr_34353_35685[(2)] = inst_34300);

(statearr_34353_35685[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (6))){
var state_34326__$1 = state_34326;
var statearr_34354_35686 = state_34326__$1;
(statearr_34354_35686[(2)] = false);

(statearr_34354_35686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (28))){
var inst_34296 = (state_34326[(2)]);
var inst_34297 = calc_state();
var inst_34253 = inst_34297;
var state_34326__$1 = (function (){var statearr_34355 = state_34326;
(statearr_34355[(7)] = inst_34253);

(statearr_34355[(15)] = inst_34296);

return statearr_34355;
})();
var statearr_34356_35687 = state_34326__$1;
(statearr_34356_35687[(2)] = null);

(statearr_34356_35687[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (25))){
var inst_34322 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34357_35688 = state_34326__$1;
(statearr_34357_35688[(2)] = inst_34322);

(statearr_34357_35688[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (34))){
var inst_34320 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34358_35690 = state_34326__$1;
(statearr_34358_35690[(2)] = inst_34320);

(statearr_34358_35690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (17))){
var state_34326__$1 = state_34326;
var statearr_34359_35693 = state_34326__$1;
(statearr_34359_35693[(2)] = false);

(statearr_34359_35693[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (3))){
var state_34326__$1 = state_34326;
var statearr_34360_35694 = state_34326__$1;
(statearr_34360_35694[(2)] = false);

(statearr_34360_35694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (12))){
var inst_34324 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34326__$1,inst_34324);
} else {
if((state_val_34327 === (2))){
var inst_34228 = (state_34326[(8)]);
var inst_34233 = inst_34228.cljs$lang$protocol_mask$partition0$;
var inst_34234 = (inst_34233 & (64));
var inst_34235 = inst_34228.cljs$core$ISeq$;
var inst_34236 = (cljs.core.PROTOCOL_SENTINEL === inst_34235);
var inst_34237 = ((inst_34234) || (inst_34236));
var state_34326__$1 = state_34326;
if(cljs.core.truth_(inst_34237)){
var statearr_34361_35695 = state_34326__$1;
(statearr_34361_35695[(1)] = (5));

} else {
var statearr_34362_35696 = state_34326__$1;
(statearr_34362_35696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (23))){
var inst_34285 = (state_34326[(14)]);
var inst_34291 = (inst_34285 == null);
var state_34326__$1 = state_34326;
if(cljs.core.truth_(inst_34291)){
var statearr_34363_35697 = state_34326__$1;
(statearr_34363_35697[(1)] = (26));

} else {
var statearr_34364_35698 = state_34326__$1;
(statearr_34364_35698[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (35))){
var inst_34311 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
if(cljs.core.truth_(inst_34311)){
var statearr_34365_35699 = state_34326__$1;
(statearr_34365_35699[(1)] = (36));

} else {
var statearr_34366_35700 = state_34326__$1;
(statearr_34366_35700[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (19))){
var inst_34253 = (state_34326[(7)]);
var inst_34273 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34253);
var state_34326__$1 = state_34326;
var statearr_34367_35701 = state_34326__$1;
(statearr_34367_35701[(2)] = inst_34273);

(statearr_34367_35701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (11))){
var inst_34253 = (state_34326[(7)]);
var inst_34257 = (inst_34253 == null);
var inst_34258 = cljs.core.not(inst_34257);
var state_34326__$1 = state_34326;
if(inst_34258){
var statearr_34368_35702 = state_34326__$1;
(statearr_34368_35702[(1)] = (13));

} else {
var statearr_34369_35703 = state_34326__$1;
(statearr_34369_35703[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (9))){
var inst_34228 = (state_34326[(8)]);
var state_34326__$1 = state_34326;
var statearr_34370_35704 = state_34326__$1;
(statearr_34370_35704[(2)] = inst_34228);

(statearr_34370_35704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (5))){
var state_34326__$1 = state_34326;
var statearr_34371_35705 = state_34326__$1;
(statearr_34371_35705[(2)] = true);

(statearr_34371_35705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (14))){
var state_34326__$1 = state_34326;
var statearr_34372_35706 = state_34326__$1;
(statearr_34372_35706[(2)] = false);

(statearr_34372_35706[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (26))){
var inst_34286 = (state_34326[(9)]);
var inst_34293 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34286);
var state_34326__$1 = state_34326;
var statearr_34373_35707 = state_34326__$1;
(statearr_34373_35707[(2)] = inst_34293);

(statearr_34373_35707[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (16))){
var state_34326__$1 = state_34326;
var statearr_34374_35708 = state_34326__$1;
(statearr_34374_35708[(2)] = true);

(statearr_34374_35708[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (38))){
var inst_34316 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34375_35709 = state_34326__$1;
(statearr_34375_35709[(2)] = inst_34316);

(statearr_34375_35709[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (30))){
var inst_34286 = (state_34326[(9)]);
var inst_34278 = (state_34326[(13)]);
var inst_34277 = (state_34326[(10)]);
var inst_34303 = cljs.core.empty_QMARK_(inst_34277);
var inst_34304 = (inst_34278.cljs$core$IFn$_invoke$arity$1 ? inst_34278.cljs$core$IFn$_invoke$arity$1(inst_34286) : inst_34278.call(null,inst_34286));
var inst_34305 = cljs.core.not(inst_34304);
var inst_34306 = ((inst_34303) && (inst_34305));
var state_34326__$1 = state_34326;
var statearr_34376_35710 = state_34326__$1;
(statearr_34376_35710[(2)] = inst_34306);

(statearr_34376_35710[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (10))){
var inst_34228 = (state_34326[(8)]);
var inst_34249 = (state_34326[(2)]);
var inst_34250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34249,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34249,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34252 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34249,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34253 = inst_34228;
var state_34326__$1 = (function (){var statearr_34377 = state_34326;
(statearr_34377[(16)] = inst_34250);

(statearr_34377[(7)] = inst_34253);

(statearr_34377[(17)] = inst_34251);

(statearr_34377[(18)] = inst_34252);

return statearr_34377;
})();
var statearr_34378_35711 = state_34326__$1;
(statearr_34378_35711[(2)] = null);

(statearr_34378_35711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (18))){
var inst_34268 = (state_34326[(2)]);
var state_34326__$1 = state_34326;
var statearr_34379_35712 = state_34326__$1;
(statearr_34379_35712[(2)] = inst_34268);

(statearr_34379_35712[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (37))){
var state_34326__$1 = state_34326;
var statearr_34380_35714 = state_34326__$1;
(statearr_34380_35714[(2)] = null);

(statearr_34380_35714[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34327 === (8))){
var inst_34228 = (state_34326[(8)]);
var inst_34246 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34228);
var state_34326__$1 = state_34326;
var statearr_34381_35716 = state_34326__$1;
(statearr_34381_35716[(2)] = inst_34246);

(statearr_34381_35716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___35649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33429__auto__,c__33527__auto___35649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33430__auto__ = null;
var cljs$core$async$mix_$_state_machine__33430__auto____0 = (function (){
var statearr_34382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34382[(0)] = cljs$core$async$mix_$_state_machine__33430__auto__);

(statearr_34382[(1)] = (1));

return statearr_34382;
});
var cljs$core$async$mix_$_state_machine__33430__auto____1 = (function (state_34326){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_34326);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e34383){if((e34383 instanceof Object)){
var ex__33433__auto__ = e34383;
var statearr_34384_35717 = state_34326;
(statearr_34384_35717[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34383;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35719 = state_34326;
state_34326 = G__35719;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33430__auto__ = function(state_34326){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33430__auto____1.call(this,state_34326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33430__auto____0;
cljs$core$async$mix_$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33430__auto____1;
return cljs$core$async$mix_$_state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___35649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33529__auto__ = (function (){var statearr_34385 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_34385[(6)] = c__33527__auto___35649);

return statearr_34385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___35649,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34387 = arguments.length;
switch (G__34387) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34390 = arguments.length;
switch (G__34390) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__34388_SHARP_){
if(cljs.core.truth_((p1__34388_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34388_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34388_SHARP_.call(null,topic)))){
return p1__34388_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34388_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34391 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34391 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34392){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34392 = meta34392;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34393,meta34392__$1){
var self__ = this;
var _34393__$1 = this;
return (new cljs.core.async.t_cljs$core$async34391(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34392__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34393){
var self__ = this;
var _34393__$1 = this;
return self__.meta34392;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34391.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34391.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34392","meta34392",-175801403,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34391.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34391.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34391";

cljs.core.async.t_cljs$core$async34391.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34391");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34391.
 */
cljs.core.async.__GT_t_cljs$core$async34391 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34391(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34392){
return (new cljs.core.async.t_cljs$core$async34391(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34392));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34391(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33527__auto___35763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___35763,mults,ensure_mult,p){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___35763,mults,ensure_mult,p){
return (function (state_34465){
var state_val_34466 = (state_34465[(1)]);
if((state_val_34466 === (7))){
var inst_34461 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
var statearr_34467_35768 = state_34465__$1;
(statearr_34467_35768[(2)] = inst_34461);

(statearr_34467_35768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (20))){
var state_34465__$1 = state_34465;
var statearr_34468_35769 = state_34465__$1;
(statearr_34468_35769[(2)] = null);

(statearr_34468_35769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (1))){
var state_34465__$1 = state_34465;
var statearr_34469_35770 = state_34465__$1;
(statearr_34469_35770[(2)] = null);

(statearr_34469_35770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (24))){
var inst_34444 = (state_34465[(7)]);
var inst_34453 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34444);
var state_34465__$1 = state_34465;
var statearr_34470_35771 = state_34465__$1;
(statearr_34470_35771[(2)] = inst_34453);

(statearr_34470_35771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (4))){
var inst_34396 = (state_34465[(8)]);
var inst_34396__$1 = (state_34465[(2)]);
var inst_34397 = (inst_34396__$1 == null);
var state_34465__$1 = (function (){var statearr_34471 = state_34465;
(statearr_34471[(8)] = inst_34396__$1);

return statearr_34471;
})();
if(cljs.core.truth_(inst_34397)){
var statearr_34472_35775 = state_34465__$1;
(statearr_34472_35775[(1)] = (5));

} else {
var statearr_34473_35776 = state_34465__$1;
(statearr_34473_35776[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (15))){
var inst_34438 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
var statearr_34474_35777 = state_34465__$1;
(statearr_34474_35777[(2)] = inst_34438);

(statearr_34474_35777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (21))){
var inst_34458 = (state_34465[(2)]);
var state_34465__$1 = (function (){var statearr_34475 = state_34465;
(statearr_34475[(9)] = inst_34458);

return statearr_34475;
})();
var statearr_34476_35778 = state_34465__$1;
(statearr_34476_35778[(2)] = null);

(statearr_34476_35778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (13))){
var inst_34420 = (state_34465[(10)]);
var inst_34422 = cljs.core.chunked_seq_QMARK_(inst_34420);
var state_34465__$1 = state_34465;
if(inst_34422){
var statearr_34477_35779 = state_34465__$1;
(statearr_34477_35779[(1)] = (16));

} else {
var statearr_34478_35780 = state_34465__$1;
(statearr_34478_35780[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (22))){
var inst_34450 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
if(cljs.core.truth_(inst_34450)){
var statearr_34479_35785 = state_34465__$1;
(statearr_34479_35785[(1)] = (23));

} else {
var statearr_34480_35790 = state_34465__$1;
(statearr_34480_35790[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (6))){
var inst_34396 = (state_34465[(8)]);
var inst_34444 = (state_34465[(7)]);
var inst_34446 = (state_34465[(11)]);
var inst_34444__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34396) : topic_fn.call(null,inst_34396));
var inst_34445 = cljs.core.deref(mults);
var inst_34446__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34445,inst_34444__$1);
var state_34465__$1 = (function (){var statearr_34481 = state_34465;
(statearr_34481[(7)] = inst_34444__$1);

(statearr_34481[(11)] = inst_34446__$1);

return statearr_34481;
})();
if(cljs.core.truth_(inst_34446__$1)){
var statearr_34482_35794 = state_34465__$1;
(statearr_34482_35794[(1)] = (19));

} else {
var statearr_34483_35795 = state_34465__$1;
(statearr_34483_35795[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (25))){
var inst_34455 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
var statearr_34484_35800 = state_34465__$1;
(statearr_34484_35800[(2)] = inst_34455);

(statearr_34484_35800[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (17))){
var inst_34420 = (state_34465[(10)]);
var inst_34429 = cljs.core.first(inst_34420);
var inst_34430 = cljs.core.async.muxch_STAR_(inst_34429);
var inst_34431 = cljs.core.async.close_BANG_(inst_34430);
var inst_34432 = cljs.core.next(inst_34420);
var inst_34406 = inst_34432;
var inst_34407 = null;
var inst_34408 = (0);
var inst_34409 = (0);
var state_34465__$1 = (function (){var statearr_34485 = state_34465;
(statearr_34485[(12)] = inst_34407);

(statearr_34485[(13)] = inst_34431);

(statearr_34485[(14)] = inst_34409);

(statearr_34485[(15)] = inst_34408);

(statearr_34485[(16)] = inst_34406);

return statearr_34485;
})();
var statearr_34486_35819 = state_34465__$1;
(statearr_34486_35819[(2)] = null);

(statearr_34486_35819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (3))){
var inst_34463 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34465__$1,inst_34463);
} else {
if((state_val_34466 === (12))){
var inst_34440 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
var statearr_34487_35821 = state_34465__$1;
(statearr_34487_35821[(2)] = inst_34440);

(statearr_34487_35821[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (2))){
var state_34465__$1 = state_34465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34465__$1,(4),ch);
} else {
if((state_val_34466 === (23))){
var state_34465__$1 = state_34465;
var statearr_34488_35822 = state_34465__$1;
(statearr_34488_35822[(2)] = null);

(statearr_34488_35822[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (19))){
var inst_34396 = (state_34465[(8)]);
var inst_34446 = (state_34465[(11)]);
var inst_34448 = cljs.core.async.muxch_STAR_(inst_34446);
var state_34465__$1 = state_34465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34465__$1,(22),inst_34448,inst_34396);
} else {
if((state_val_34466 === (11))){
var inst_34420 = (state_34465[(10)]);
var inst_34406 = (state_34465[(16)]);
var inst_34420__$1 = cljs.core.seq(inst_34406);
var state_34465__$1 = (function (){var statearr_34489 = state_34465;
(statearr_34489[(10)] = inst_34420__$1);

return statearr_34489;
})();
if(inst_34420__$1){
var statearr_34490_35823 = state_34465__$1;
(statearr_34490_35823[(1)] = (13));

} else {
var statearr_34491_35824 = state_34465__$1;
(statearr_34491_35824[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (9))){
var inst_34442 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
var statearr_34492_35825 = state_34465__$1;
(statearr_34492_35825[(2)] = inst_34442);

(statearr_34492_35825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (5))){
var inst_34403 = cljs.core.deref(mults);
var inst_34404 = cljs.core.vals(inst_34403);
var inst_34405 = cljs.core.seq(inst_34404);
var inst_34406 = inst_34405;
var inst_34407 = null;
var inst_34408 = (0);
var inst_34409 = (0);
var state_34465__$1 = (function (){var statearr_34493 = state_34465;
(statearr_34493[(12)] = inst_34407);

(statearr_34493[(14)] = inst_34409);

(statearr_34493[(15)] = inst_34408);

(statearr_34493[(16)] = inst_34406);

return statearr_34493;
})();
var statearr_34494_35829 = state_34465__$1;
(statearr_34494_35829[(2)] = null);

(statearr_34494_35829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (14))){
var state_34465__$1 = state_34465;
var statearr_34498_35837 = state_34465__$1;
(statearr_34498_35837[(2)] = null);

(statearr_34498_35837[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (16))){
var inst_34420 = (state_34465[(10)]);
var inst_34424 = cljs.core.chunk_first(inst_34420);
var inst_34425 = cljs.core.chunk_rest(inst_34420);
var inst_34426 = cljs.core.count(inst_34424);
var inst_34406 = inst_34425;
var inst_34407 = inst_34424;
var inst_34408 = inst_34426;
var inst_34409 = (0);
var state_34465__$1 = (function (){var statearr_34499 = state_34465;
(statearr_34499[(12)] = inst_34407);

(statearr_34499[(14)] = inst_34409);

(statearr_34499[(15)] = inst_34408);

(statearr_34499[(16)] = inst_34406);

return statearr_34499;
})();
var statearr_34500_35838 = state_34465__$1;
(statearr_34500_35838[(2)] = null);

(statearr_34500_35838[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (10))){
var inst_34407 = (state_34465[(12)]);
var inst_34409 = (state_34465[(14)]);
var inst_34408 = (state_34465[(15)]);
var inst_34406 = (state_34465[(16)]);
var inst_34414 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34407,inst_34409);
var inst_34415 = cljs.core.async.muxch_STAR_(inst_34414);
var inst_34416 = cljs.core.async.close_BANG_(inst_34415);
var inst_34417 = (inst_34409 + (1));
var tmp34495 = inst_34407;
var tmp34496 = inst_34408;
var tmp34497 = inst_34406;
var inst_34406__$1 = tmp34497;
var inst_34407__$1 = tmp34495;
var inst_34408__$1 = tmp34496;
var inst_34409__$1 = inst_34417;
var state_34465__$1 = (function (){var statearr_34501 = state_34465;
(statearr_34501[(12)] = inst_34407__$1);

(statearr_34501[(14)] = inst_34409__$1);

(statearr_34501[(15)] = inst_34408__$1);

(statearr_34501[(17)] = inst_34416);

(statearr_34501[(16)] = inst_34406__$1);

return statearr_34501;
})();
var statearr_34502_35839 = state_34465__$1;
(statearr_34502_35839[(2)] = null);

(statearr_34502_35839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (18))){
var inst_34435 = (state_34465[(2)]);
var state_34465__$1 = state_34465;
var statearr_34503_35840 = state_34465__$1;
(statearr_34503_35840[(2)] = inst_34435);

(statearr_34503_35840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34466 === (8))){
var inst_34409 = (state_34465[(14)]);
var inst_34408 = (state_34465[(15)]);
var inst_34411 = (inst_34409 < inst_34408);
var inst_34412 = inst_34411;
var state_34465__$1 = state_34465;
if(cljs.core.truth_(inst_34412)){
var statearr_34504_35841 = state_34465__$1;
(statearr_34504_35841[(1)] = (10));

} else {
var statearr_34505_35842 = state_34465__$1;
(statearr_34505_35842[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___35763,mults,ensure_mult,p))
;
return ((function (switch__33429__auto__,c__33527__auto___35763,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33430__auto__ = null;
var cljs$core$async$state_machine__33430__auto____0 = (function (){
var statearr_34506 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34506[(0)] = cljs$core$async$state_machine__33430__auto__);

(statearr_34506[(1)] = (1));

return statearr_34506;
});
var cljs$core$async$state_machine__33430__auto____1 = (function (state_34465){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_34465);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e34507){if((e34507 instanceof Object)){
var ex__33433__auto__ = e34507;
var statearr_34508_35843 = state_34465;
(statearr_34508_35843[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35844 = state_34465;
state_34465 = G__35844;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$state_machine__33430__auto__ = function(state_34465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33430__auto____1.call(this,state_34465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33430__auto____0;
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33430__auto____1;
return cljs$core$async$state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___35763,mults,ensure_mult,p))
})();
var state__33529__auto__ = (function (){var statearr_34509 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_34509[(6)] = c__33527__auto___35763);

return statearr_34509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___35763,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34511 = arguments.length;
switch (G__34511) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34513 = arguments.length;
switch (G__34513) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34515 = arguments.length;
switch (G__34515) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33527__auto___35859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___35859,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___35859,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34554){
var state_val_34555 = (state_34554[(1)]);
if((state_val_34555 === (7))){
var state_34554__$1 = state_34554;
var statearr_34556_35863 = state_34554__$1;
(statearr_34556_35863[(2)] = null);

(statearr_34556_35863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (1))){
var state_34554__$1 = state_34554;
var statearr_34557_35864 = state_34554__$1;
(statearr_34557_35864[(2)] = null);

(statearr_34557_35864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (4))){
var inst_34518 = (state_34554[(7)]);
var inst_34520 = (inst_34518 < cnt);
var state_34554__$1 = state_34554;
if(cljs.core.truth_(inst_34520)){
var statearr_34558_35865 = state_34554__$1;
(statearr_34558_35865[(1)] = (6));

} else {
var statearr_34559_35866 = state_34554__$1;
(statearr_34559_35866[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (15))){
var inst_34550 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34560_35867 = state_34554__$1;
(statearr_34560_35867[(2)] = inst_34550);

(statearr_34560_35867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (13))){
var inst_34543 = cljs.core.async.close_BANG_(out);
var state_34554__$1 = state_34554;
var statearr_34561_35998 = state_34554__$1;
(statearr_34561_35998[(2)] = inst_34543);

(statearr_34561_35998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (6))){
var state_34554__$1 = state_34554;
var statearr_34562_35999 = state_34554__$1;
(statearr_34562_35999[(2)] = null);

(statearr_34562_35999[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (3))){
var inst_34552 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34554__$1,inst_34552);
} else {
if((state_val_34555 === (12))){
var inst_34540 = (state_34554[(8)]);
var inst_34540__$1 = (state_34554[(2)]);
var inst_34541 = cljs.core.some(cljs.core.nil_QMARK_,inst_34540__$1);
var state_34554__$1 = (function (){var statearr_34563 = state_34554;
(statearr_34563[(8)] = inst_34540__$1);

return statearr_34563;
})();
if(cljs.core.truth_(inst_34541)){
var statearr_34564_36000 = state_34554__$1;
(statearr_34564_36000[(1)] = (13));

} else {
var statearr_34565_36001 = state_34554__$1;
(statearr_34565_36001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (2))){
var inst_34517 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34518 = (0);
var state_34554__$1 = (function (){var statearr_34566 = state_34554;
(statearr_34566[(9)] = inst_34517);

(statearr_34566[(7)] = inst_34518);

return statearr_34566;
})();
var statearr_34567_36003 = state_34554__$1;
(statearr_34567_36003[(2)] = null);

(statearr_34567_36003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (11))){
var inst_34518 = (state_34554[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34554,(10),Object,null,(9));
var inst_34527 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34518) : chs__$1.call(null,inst_34518));
var inst_34528 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34518) : done.call(null,inst_34518));
var inst_34529 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34527,inst_34528);
var state_34554__$1 = state_34554;
var statearr_34568_36004 = state_34554__$1;
(statearr_34568_36004[(2)] = inst_34529);


cljs.core.async.impl.ioc_helpers.process_exception(state_34554__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (9))){
var inst_34518 = (state_34554[(7)]);
var inst_34531 = (state_34554[(2)]);
var inst_34532 = (inst_34518 + (1));
var inst_34518__$1 = inst_34532;
var state_34554__$1 = (function (){var statearr_34569 = state_34554;
(statearr_34569[(7)] = inst_34518__$1);

(statearr_34569[(10)] = inst_34531);

return statearr_34569;
})();
var statearr_34570_36005 = state_34554__$1;
(statearr_34570_36005[(2)] = null);

(statearr_34570_36005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (5))){
var inst_34538 = (state_34554[(2)]);
var state_34554__$1 = (function (){var statearr_34571 = state_34554;
(statearr_34571[(11)] = inst_34538);

return statearr_34571;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34554__$1,(12),dchan);
} else {
if((state_val_34555 === (14))){
var inst_34540 = (state_34554[(8)]);
var inst_34545 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34540);
var state_34554__$1 = state_34554;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34554__$1,(16),out,inst_34545);
} else {
if((state_val_34555 === (16))){
var inst_34547 = (state_34554[(2)]);
var state_34554__$1 = (function (){var statearr_34572 = state_34554;
(statearr_34572[(12)] = inst_34547);

return statearr_34572;
})();
var statearr_34573_36006 = state_34554__$1;
(statearr_34573_36006[(2)] = null);

(statearr_34573_36006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (10))){
var inst_34522 = (state_34554[(2)]);
var inst_34523 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34554__$1 = (function (){var statearr_34574 = state_34554;
(statearr_34574[(13)] = inst_34522);

return statearr_34574;
})();
var statearr_34575_36007 = state_34554__$1;
(statearr_34575_36007[(2)] = inst_34523);


cljs.core.async.impl.ioc_helpers.process_exception(state_34554__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34555 === (8))){
var inst_34536 = (state_34554[(2)]);
var state_34554__$1 = state_34554;
var statearr_34576_36008 = state_34554__$1;
(statearr_34576_36008[(2)] = inst_34536);

(statearr_34576_36008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___35859,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33429__auto__,c__33527__auto___35859,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33430__auto__ = null;
var cljs$core$async$state_machine__33430__auto____0 = (function (){
var statearr_34577 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34577[(0)] = cljs$core$async$state_machine__33430__auto__);

(statearr_34577[(1)] = (1));

return statearr_34577;
});
var cljs$core$async$state_machine__33430__auto____1 = (function (state_34554){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_34554);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e34578){if((e34578 instanceof Object)){
var ex__33433__auto__ = e34578;
var statearr_34579_36022 = state_34554;
(statearr_34579_36022[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34578;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36025 = state_34554;
state_34554 = G__36025;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$state_machine__33430__auto__ = function(state_34554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33430__auto____1.call(this,state_34554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33430__auto____0;
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33430__auto____1;
return cljs$core$async$state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___35859,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33529__auto__ = (function (){var statearr_34580 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_34580[(6)] = c__33527__auto___35859);

return statearr_34580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___35859,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34583 = arguments.length;
switch (G__34583) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33527__auto___36044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___36044,out){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___36044,out){
return (function (state_34615){
var state_val_34616 = (state_34615[(1)]);
if((state_val_34616 === (7))){
var inst_34595 = (state_34615[(7)]);
var inst_34594 = (state_34615[(8)]);
var inst_34594__$1 = (state_34615[(2)]);
var inst_34595__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34594__$1,(0),null);
var inst_34596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34594__$1,(1),null);
var inst_34597 = (inst_34595__$1 == null);
var state_34615__$1 = (function (){var statearr_34617 = state_34615;
(statearr_34617[(7)] = inst_34595__$1);

(statearr_34617[(8)] = inst_34594__$1);

(statearr_34617[(9)] = inst_34596);

return statearr_34617;
})();
if(cljs.core.truth_(inst_34597)){
var statearr_34618_36059 = state_34615__$1;
(statearr_34618_36059[(1)] = (8));

} else {
var statearr_34619_36064 = state_34615__$1;
(statearr_34619_36064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (1))){
var inst_34584 = cljs.core.vec(chs);
var inst_34585 = inst_34584;
var state_34615__$1 = (function (){var statearr_34620 = state_34615;
(statearr_34620[(10)] = inst_34585);

return statearr_34620;
})();
var statearr_34621_36065 = state_34615__$1;
(statearr_34621_36065[(2)] = null);

(statearr_34621_36065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (4))){
var inst_34585 = (state_34615[(10)]);
var state_34615__$1 = state_34615;
return cljs.core.async.ioc_alts_BANG_(state_34615__$1,(7),inst_34585);
} else {
if((state_val_34616 === (6))){
var inst_34611 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34622_36066 = state_34615__$1;
(statearr_34622_36066[(2)] = inst_34611);

(statearr_34622_36066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (3))){
var inst_34613 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34615__$1,inst_34613);
} else {
if((state_val_34616 === (2))){
var inst_34585 = (state_34615[(10)]);
var inst_34587 = cljs.core.count(inst_34585);
var inst_34588 = (inst_34587 > (0));
var state_34615__$1 = state_34615;
if(cljs.core.truth_(inst_34588)){
var statearr_34624_36067 = state_34615__$1;
(statearr_34624_36067[(1)] = (4));

} else {
var statearr_34625_36068 = state_34615__$1;
(statearr_34625_36068[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (11))){
var inst_34585 = (state_34615[(10)]);
var inst_34604 = (state_34615[(2)]);
var tmp34623 = inst_34585;
var inst_34585__$1 = tmp34623;
var state_34615__$1 = (function (){var statearr_34626 = state_34615;
(statearr_34626[(11)] = inst_34604);

(statearr_34626[(10)] = inst_34585__$1);

return statearr_34626;
})();
var statearr_34627_36070 = state_34615__$1;
(statearr_34627_36070[(2)] = null);

(statearr_34627_36070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (9))){
var inst_34595 = (state_34615[(7)]);
var state_34615__$1 = state_34615;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34615__$1,(11),out,inst_34595);
} else {
if((state_val_34616 === (5))){
var inst_34609 = cljs.core.async.close_BANG_(out);
var state_34615__$1 = state_34615;
var statearr_34628_36076 = state_34615__$1;
(statearr_34628_36076[(2)] = inst_34609);

(statearr_34628_36076[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (10))){
var inst_34607 = (state_34615[(2)]);
var state_34615__$1 = state_34615;
var statearr_34629_36082 = state_34615__$1;
(statearr_34629_36082[(2)] = inst_34607);

(statearr_34629_36082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34616 === (8))){
var inst_34595 = (state_34615[(7)]);
var inst_34594 = (state_34615[(8)]);
var inst_34585 = (state_34615[(10)]);
var inst_34596 = (state_34615[(9)]);
var inst_34599 = (function (){var cs = inst_34585;
var vec__34590 = inst_34594;
var v = inst_34595;
var c = inst_34596;
return ((function (cs,vec__34590,v,c,inst_34595,inst_34594,inst_34585,inst_34596,state_val_34616,c__33527__auto___36044,out){
return (function (p1__34581_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34581_SHARP_);
});
;})(cs,vec__34590,v,c,inst_34595,inst_34594,inst_34585,inst_34596,state_val_34616,c__33527__auto___36044,out))
})();
var inst_34600 = cljs.core.filterv(inst_34599,inst_34585);
var inst_34585__$1 = inst_34600;
var state_34615__$1 = (function (){var statearr_34630 = state_34615;
(statearr_34630[(10)] = inst_34585__$1);

return statearr_34630;
})();
var statearr_34631_36094 = state_34615__$1;
(statearr_34631_36094[(2)] = null);

(statearr_34631_36094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___36044,out))
;
return ((function (switch__33429__auto__,c__33527__auto___36044,out){
return (function() {
var cljs$core$async$state_machine__33430__auto__ = null;
var cljs$core$async$state_machine__33430__auto____0 = (function (){
var statearr_34632 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34632[(0)] = cljs$core$async$state_machine__33430__auto__);

(statearr_34632[(1)] = (1));

return statearr_34632;
});
var cljs$core$async$state_machine__33430__auto____1 = (function (state_34615){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_34615);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e34633){if((e34633 instanceof Object)){
var ex__33433__auto__ = e34633;
var statearr_34634_36097 = state_34615;
(statearr_34634_36097[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34633;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36098 = state_34615;
state_34615 = G__36098;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$state_machine__33430__auto__ = function(state_34615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33430__auto____1.call(this,state_34615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33430__auto____0;
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33430__auto____1;
return cljs$core$async$state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___36044,out))
})();
var state__33529__auto__ = (function (){var statearr_34635 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_34635[(6)] = c__33527__auto___36044);

return statearr_34635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___36044,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34637 = arguments.length;
switch (G__34637) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33527__auto___36108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___36108,out){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___36108,out){
return (function (state_34661){
var state_val_34662 = (state_34661[(1)]);
if((state_val_34662 === (7))){
var inst_34643 = (state_34661[(7)]);
var inst_34643__$1 = (state_34661[(2)]);
var inst_34644 = (inst_34643__$1 == null);
var inst_34645 = cljs.core.not(inst_34644);
var state_34661__$1 = (function (){var statearr_34663 = state_34661;
(statearr_34663[(7)] = inst_34643__$1);

return statearr_34663;
})();
if(inst_34645){
var statearr_34664_36109 = state_34661__$1;
(statearr_34664_36109[(1)] = (8));

} else {
var statearr_34665_36110 = state_34661__$1;
(statearr_34665_36110[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34662 === (1))){
var inst_34638 = (0);
var state_34661__$1 = (function (){var statearr_34666 = state_34661;
(statearr_34666[(8)] = inst_34638);

return statearr_34666;
})();
var statearr_34667_36111 = state_34661__$1;
(statearr_34667_36111[(2)] = null);

(statearr_34667_36111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34662 === (4))){
var state_34661__$1 = state_34661;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34661__$1,(7),ch);
} else {
if((state_val_34662 === (6))){
var inst_34656 = (state_34661[(2)]);
var state_34661__$1 = state_34661;
var statearr_34668_36112 = state_34661__$1;
(statearr_34668_36112[(2)] = inst_34656);

(statearr_34668_36112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34662 === (3))){
var inst_34658 = (state_34661[(2)]);
var inst_34659 = cljs.core.async.close_BANG_(out);
var state_34661__$1 = (function (){var statearr_34669 = state_34661;
(statearr_34669[(9)] = inst_34658);

return statearr_34669;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34661__$1,inst_34659);
} else {
if((state_val_34662 === (2))){
var inst_34638 = (state_34661[(8)]);
var inst_34640 = (inst_34638 < n);
var state_34661__$1 = state_34661;
if(cljs.core.truth_(inst_34640)){
var statearr_34670_36113 = state_34661__$1;
(statearr_34670_36113[(1)] = (4));

} else {
var statearr_34671_36114 = state_34661__$1;
(statearr_34671_36114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34662 === (11))){
var inst_34638 = (state_34661[(8)]);
var inst_34648 = (state_34661[(2)]);
var inst_34649 = (inst_34638 + (1));
var inst_34638__$1 = inst_34649;
var state_34661__$1 = (function (){var statearr_34672 = state_34661;
(statearr_34672[(8)] = inst_34638__$1);

(statearr_34672[(10)] = inst_34648);

return statearr_34672;
})();
var statearr_34673_36115 = state_34661__$1;
(statearr_34673_36115[(2)] = null);

(statearr_34673_36115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34662 === (9))){
var state_34661__$1 = state_34661;
var statearr_34674_36116 = state_34661__$1;
(statearr_34674_36116[(2)] = null);

(statearr_34674_36116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34662 === (5))){
var state_34661__$1 = state_34661;
var statearr_34675_36117 = state_34661__$1;
(statearr_34675_36117[(2)] = null);

(statearr_34675_36117[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34662 === (10))){
var inst_34653 = (state_34661[(2)]);
var state_34661__$1 = state_34661;
var statearr_34676_36118 = state_34661__$1;
(statearr_34676_36118[(2)] = inst_34653);

(statearr_34676_36118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34662 === (8))){
var inst_34643 = (state_34661[(7)]);
var state_34661__$1 = state_34661;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34661__$1,(11),out,inst_34643);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___36108,out))
;
return ((function (switch__33429__auto__,c__33527__auto___36108,out){
return (function() {
var cljs$core$async$state_machine__33430__auto__ = null;
var cljs$core$async$state_machine__33430__auto____0 = (function (){
var statearr_34677 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34677[(0)] = cljs$core$async$state_machine__33430__auto__);

(statearr_34677[(1)] = (1));

return statearr_34677;
});
var cljs$core$async$state_machine__33430__auto____1 = (function (state_34661){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_34661);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e34678){if((e34678 instanceof Object)){
var ex__33433__auto__ = e34678;
var statearr_34679_36119 = state_34661;
(statearr_34679_36119[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34678;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36120 = state_34661;
state_34661 = G__36120;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$state_machine__33430__auto__ = function(state_34661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33430__auto____1.call(this,state_34661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33430__auto____0;
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33430__auto____1;
return cljs$core$async$state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___36108,out))
})();
var state__33529__auto__ = (function (){var statearr_34680 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_34680[(6)] = c__33527__auto___36108);

return statearr_34680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___36108,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34682 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34682 = (function (f,ch,meta34683){
this.f = f;
this.ch = ch;
this.meta34683 = meta34683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34684,meta34683__$1){
var self__ = this;
var _34684__$1 = this;
return (new cljs.core.async.t_cljs$core$async34682(self__.f,self__.ch,meta34683__$1));
});

cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34684){
var self__ = this;
var _34684__$1 = this;
return self__.meta34683;
});

cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34685 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34685 = (function (f,ch,meta34683,_,fn1,meta34686){
this.f = f;
this.ch = ch;
this.meta34683 = meta34683;
this._ = _;
this.fn1 = fn1;
this.meta34686 = meta34686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34687,meta34686__$1){
var self__ = this;
var _34687__$1 = this;
return (new cljs.core.async.t_cljs$core$async34685(self__.f,self__.ch,self__.meta34683,self__._,self__.fn1,meta34686__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34685.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34687){
var self__ = this;
var _34687__$1 = this;
return self__.meta34686;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34685.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34685.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34685.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34685.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34681_SHARP_){
var G__34688 = (((p1__34681_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34681_SHARP_) : self__.f.call(null,p1__34681_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34688) : f1.call(null,G__34688));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34685.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34683","meta34683",-1224194409,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34682","cljs.core.async/t_cljs$core$async34682",1200363684,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34686","meta34686",-1577406186,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34685.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34685";

cljs.core.async.t_cljs$core$async34685.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34685");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34685.
 */
cljs.core.async.__GT_t_cljs$core$async34685 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34685(f__$1,ch__$1,meta34683__$1,___$2,fn1__$1,meta34686){
return (new cljs.core.async.t_cljs$core$async34685(f__$1,ch__$1,meta34683__$1,___$2,fn1__$1,meta34686));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34685(self__.f,self__.ch,self__.meta34683,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34689 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34689) : self__.f.call(null,G__34689));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34682.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34683","meta34683",-1224194409,null)], null);
});

cljs.core.async.t_cljs$core$async34682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34682";

cljs.core.async.t_cljs$core$async34682.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34682");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34682.
 */
cljs.core.async.__GT_t_cljs$core$async34682 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34682(f__$1,ch__$1,meta34683){
return (new cljs.core.async.t_cljs$core$async34682(f__$1,ch__$1,meta34683));
});

}

return (new cljs.core.async.t_cljs$core$async34682(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34690 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34690 = (function (f,ch,meta34691){
this.f = f;
this.ch = ch;
this.meta34691 = meta34691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34692,meta34691__$1){
var self__ = this;
var _34692__$1 = this;
return (new cljs.core.async.t_cljs$core$async34690(self__.f,self__.ch,meta34691__$1));
});

cljs.core.async.t_cljs$core$async34690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34692){
var self__ = this;
var _34692__$1 = this;
return self__.meta34691;
});

cljs.core.async.t_cljs$core$async34690.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34690.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34690.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34690.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34691","meta34691",1237846814,null)], null);
});

cljs.core.async.t_cljs$core$async34690.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34690";

cljs.core.async.t_cljs$core$async34690.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34690");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34690.
 */
cljs.core.async.__GT_t_cljs$core$async34690 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34690(f__$1,ch__$1,meta34691){
return (new cljs.core.async.t_cljs$core$async34690(f__$1,ch__$1,meta34691));
});

}

return (new cljs.core.async.t_cljs$core$async34690(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34693 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34693 = (function (p,ch,meta34694){
this.p = p;
this.ch = ch;
this.meta34694 = meta34694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34695,meta34694__$1){
var self__ = this;
var _34695__$1 = this;
return (new cljs.core.async.t_cljs$core$async34693(self__.p,self__.ch,meta34694__$1));
});

cljs.core.async.t_cljs$core$async34693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34695){
var self__ = this;
var _34695__$1 = this;
return self__.meta34694;
});

cljs.core.async.t_cljs$core$async34693.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34693.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34693.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34693.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34693.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34693.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34693.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34694","meta34694",-1628830324,null)], null);
});

cljs.core.async.t_cljs$core$async34693.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34693.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34693";

cljs.core.async.t_cljs$core$async34693.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34693");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34693.
 */
cljs.core.async.__GT_t_cljs$core$async34693 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34693(p__$1,ch__$1,meta34694){
return (new cljs.core.async.t_cljs$core$async34693(p__$1,ch__$1,meta34694));
});

}

return (new cljs.core.async.t_cljs$core$async34693(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34697 = arguments.length;
switch (G__34697) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33527__auto___36137 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___36137,out){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___36137,out){
return (function (state_34718){
var state_val_34719 = (state_34718[(1)]);
if((state_val_34719 === (7))){
var inst_34714 = (state_34718[(2)]);
var state_34718__$1 = state_34718;
var statearr_34720_36138 = state_34718__$1;
(statearr_34720_36138[(2)] = inst_34714);

(statearr_34720_36138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (1))){
var state_34718__$1 = state_34718;
var statearr_34721_36139 = state_34718__$1;
(statearr_34721_36139[(2)] = null);

(statearr_34721_36139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (4))){
var inst_34700 = (state_34718[(7)]);
var inst_34700__$1 = (state_34718[(2)]);
var inst_34701 = (inst_34700__$1 == null);
var state_34718__$1 = (function (){var statearr_34722 = state_34718;
(statearr_34722[(7)] = inst_34700__$1);

return statearr_34722;
})();
if(cljs.core.truth_(inst_34701)){
var statearr_34723_36146 = state_34718__$1;
(statearr_34723_36146[(1)] = (5));

} else {
var statearr_34724_36147 = state_34718__$1;
(statearr_34724_36147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (6))){
var inst_34700 = (state_34718[(7)]);
var inst_34705 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34700) : p.call(null,inst_34700));
var state_34718__$1 = state_34718;
if(cljs.core.truth_(inst_34705)){
var statearr_34725_36151 = state_34718__$1;
(statearr_34725_36151[(1)] = (8));

} else {
var statearr_34726_36152 = state_34718__$1;
(statearr_34726_36152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (3))){
var inst_34716 = (state_34718[(2)]);
var state_34718__$1 = state_34718;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34718__$1,inst_34716);
} else {
if((state_val_34719 === (2))){
var state_34718__$1 = state_34718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34718__$1,(4),ch);
} else {
if((state_val_34719 === (11))){
var inst_34708 = (state_34718[(2)]);
var state_34718__$1 = state_34718;
var statearr_34727_36153 = state_34718__$1;
(statearr_34727_36153[(2)] = inst_34708);

(statearr_34727_36153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (9))){
var state_34718__$1 = state_34718;
var statearr_34728_36154 = state_34718__$1;
(statearr_34728_36154[(2)] = null);

(statearr_34728_36154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (5))){
var inst_34703 = cljs.core.async.close_BANG_(out);
var state_34718__$1 = state_34718;
var statearr_34729_36156 = state_34718__$1;
(statearr_34729_36156[(2)] = inst_34703);

(statearr_34729_36156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (10))){
var inst_34711 = (state_34718[(2)]);
var state_34718__$1 = (function (){var statearr_34730 = state_34718;
(statearr_34730[(8)] = inst_34711);

return statearr_34730;
})();
var statearr_34731_36159 = state_34718__$1;
(statearr_34731_36159[(2)] = null);

(statearr_34731_36159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (8))){
var inst_34700 = (state_34718[(7)]);
var state_34718__$1 = state_34718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34718__$1,(11),out,inst_34700);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___36137,out))
;
return ((function (switch__33429__auto__,c__33527__auto___36137,out){
return (function() {
var cljs$core$async$state_machine__33430__auto__ = null;
var cljs$core$async$state_machine__33430__auto____0 = (function (){
var statearr_34732 = [null,null,null,null,null,null,null,null,null];
(statearr_34732[(0)] = cljs$core$async$state_machine__33430__auto__);

(statearr_34732[(1)] = (1));

return statearr_34732;
});
var cljs$core$async$state_machine__33430__auto____1 = (function (state_34718){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_34718);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e34733){if((e34733 instanceof Object)){
var ex__33433__auto__ = e34733;
var statearr_34734_36160 = state_34718;
(statearr_34734_36160[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34733;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36162 = state_34718;
state_34718 = G__36162;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$state_machine__33430__auto__ = function(state_34718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33430__auto____1.call(this,state_34718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33430__auto____0;
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33430__auto____1;
return cljs$core$async$state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___36137,out))
})();
var state__33529__auto__ = (function (){var statearr_34735 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_34735[(6)] = c__33527__auto___36137);

return statearr_34735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___36137,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34737 = arguments.length;
switch (G__34737) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33527__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto__){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto__){
return (function (state_34799){
var state_val_34800 = (state_34799[(1)]);
if((state_val_34800 === (7))){
var inst_34795 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34801_36173 = state_34799__$1;
(statearr_34801_36173[(2)] = inst_34795);

(statearr_34801_36173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (20))){
var inst_34765 = (state_34799[(7)]);
var inst_34776 = (state_34799[(2)]);
var inst_34777 = cljs.core.next(inst_34765);
var inst_34751 = inst_34777;
var inst_34752 = null;
var inst_34753 = (0);
var inst_34754 = (0);
var state_34799__$1 = (function (){var statearr_34802 = state_34799;
(statearr_34802[(8)] = inst_34751);

(statearr_34802[(9)] = inst_34753);

(statearr_34802[(10)] = inst_34776);

(statearr_34802[(11)] = inst_34752);

(statearr_34802[(12)] = inst_34754);

return statearr_34802;
})();
var statearr_34803_36180 = state_34799__$1;
(statearr_34803_36180[(2)] = null);

(statearr_34803_36180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (1))){
var state_34799__$1 = state_34799;
var statearr_34804_36181 = state_34799__$1;
(statearr_34804_36181[(2)] = null);

(statearr_34804_36181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (4))){
var inst_34740 = (state_34799[(13)]);
var inst_34740__$1 = (state_34799[(2)]);
var inst_34741 = (inst_34740__$1 == null);
var state_34799__$1 = (function (){var statearr_34805 = state_34799;
(statearr_34805[(13)] = inst_34740__$1);

return statearr_34805;
})();
if(cljs.core.truth_(inst_34741)){
var statearr_34806_36182 = state_34799__$1;
(statearr_34806_36182[(1)] = (5));

} else {
var statearr_34807_36183 = state_34799__$1;
(statearr_34807_36183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (15))){
var state_34799__$1 = state_34799;
var statearr_34811_36184 = state_34799__$1;
(statearr_34811_36184[(2)] = null);

(statearr_34811_36184[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (21))){
var state_34799__$1 = state_34799;
var statearr_34812_36189 = state_34799__$1;
(statearr_34812_36189[(2)] = null);

(statearr_34812_36189[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (13))){
var inst_34751 = (state_34799[(8)]);
var inst_34753 = (state_34799[(9)]);
var inst_34752 = (state_34799[(11)]);
var inst_34754 = (state_34799[(12)]);
var inst_34761 = (state_34799[(2)]);
var inst_34762 = (inst_34754 + (1));
var tmp34808 = inst_34751;
var tmp34809 = inst_34753;
var tmp34810 = inst_34752;
var inst_34751__$1 = tmp34808;
var inst_34752__$1 = tmp34810;
var inst_34753__$1 = tmp34809;
var inst_34754__$1 = inst_34762;
var state_34799__$1 = (function (){var statearr_34813 = state_34799;
(statearr_34813[(8)] = inst_34751__$1);

(statearr_34813[(14)] = inst_34761);

(statearr_34813[(9)] = inst_34753__$1);

(statearr_34813[(11)] = inst_34752__$1);

(statearr_34813[(12)] = inst_34754__$1);

return statearr_34813;
})();
var statearr_34814_36201 = state_34799__$1;
(statearr_34814_36201[(2)] = null);

(statearr_34814_36201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (22))){
var state_34799__$1 = state_34799;
var statearr_34815_36209 = state_34799__$1;
(statearr_34815_36209[(2)] = null);

(statearr_34815_36209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (6))){
var inst_34740 = (state_34799[(13)]);
var inst_34749 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34740) : f.call(null,inst_34740));
var inst_34750 = cljs.core.seq(inst_34749);
var inst_34751 = inst_34750;
var inst_34752 = null;
var inst_34753 = (0);
var inst_34754 = (0);
var state_34799__$1 = (function (){var statearr_34816 = state_34799;
(statearr_34816[(8)] = inst_34751);

(statearr_34816[(9)] = inst_34753);

(statearr_34816[(11)] = inst_34752);

(statearr_34816[(12)] = inst_34754);

return statearr_34816;
})();
var statearr_34817_36216 = state_34799__$1;
(statearr_34817_36216[(2)] = null);

(statearr_34817_36216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (17))){
var inst_34765 = (state_34799[(7)]);
var inst_34769 = cljs.core.chunk_first(inst_34765);
var inst_34770 = cljs.core.chunk_rest(inst_34765);
var inst_34771 = cljs.core.count(inst_34769);
var inst_34751 = inst_34770;
var inst_34752 = inst_34769;
var inst_34753 = inst_34771;
var inst_34754 = (0);
var state_34799__$1 = (function (){var statearr_34818 = state_34799;
(statearr_34818[(8)] = inst_34751);

(statearr_34818[(9)] = inst_34753);

(statearr_34818[(11)] = inst_34752);

(statearr_34818[(12)] = inst_34754);

return statearr_34818;
})();
var statearr_34819_36222 = state_34799__$1;
(statearr_34819_36222[(2)] = null);

(statearr_34819_36222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (3))){
var inst_34797 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34799__$1,inst_34797);
} else {
if((state_val_34800 === (12))){
var inst_34785 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34820_36229 = state_34799__$1;
(statearr_34820_36229[(2)] = inst_34785);

(statearr_34820_36229[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (2))){
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34799__$1,(4),in$);
} else {
if((state_val_34800 === (23))){
var inst_34793 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34821_36239 = state_34799__$1;
(statearr_34821_36239[(2)] = inst_34793);

(statearr_34821_36239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (19))){
var inst_34780 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34822_36256 = state_34799__$1;
(statearr_34822_36256[(2)] = inst_34780);

(statearr_34822_36256[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (11))){
var inst_34751 = (state_34799[(8)]);
var inst_34765 = (state_34799[(7)]);
var inst_34765__$1 = cljs.core.seq(inst_34751);
var state_34799__$1 = (function (){var statearr_34823 = state_34799;
(statearr_34823[(7)] = inst_34765__$1);

return statearr_34823;
})();
if(inst_34765__$1){
var statearr_34824_36265 = state_34799__$1;
(statearr_34824_36265[(1)] = (14));

} else {
var statearr_34825_36267 = state_34799__$1;
(statearr_34825_36267[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (9))){
var inst_34787 = (state_34799[(2)]);
var inst_34788 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34799__$1 = (function (){var statearr_34826 = state_34799;
(statearr_34826[(15)] = inst_34787);

return statearr_34826;
})();
if(cljs.core.truth_(inst_34788)){
var statearr_34827_36275 = state_34799__$1;
(statearr_34827_36275[(1)] = (21));

} else {
var statearr_34828_36277 = state_34799__$1;
(statearr_34828_36277[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (5))){
var inst_34743 = cljs.core.async.close_BANG_(out);
var state_34799__$1 = state_34799;
var statearr_34829_36283 = state_34799__$1;
(statearr_34829_36283[(2)] = inst_34743);

(statearr_34829_36283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (14))){
var inst_34765 = (state_34799[(7)]);
var inst_34767 = cljs.core.chunked_seq_QMARK_(inst_34765);
var state_34799__$1 = state_34799;
if(inst_34767){
var statearr_34830_36289 = state_34799__$1;
(statearr_34830_36289[(1)] = (17));

} else {
var statearr_34831_36302 = state_34799__$1;
(statearr_34831_36302[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (16))){
var inst_34783 = (state_34799[(2)]);
var state_34799__$1 = state_34799;
var statearr_34832_36311 = state_34799__$1;
(statearr_34832_36311[(2)] = inst_34783);

(statearr_34832_36311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34800 === (10))){
var inst_34752 = (state_34799[(11)]);
var inst_34754 = (state_34799[(12)]);
var inst_34759 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34752,inst_34754);
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34799__$1,(13),out,inst_34759);
} else {
if((state_val_34800 === (18))){
var inst_34765 = (state_34799[(7)]);
var inst_34774 = cljs.core.first(inst_34765);
var state_34799__$1 = state_34799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34799__$1,(20),out,inst_34774);
} else {
if((state_val_34800 === (8))){
var inst_34753 = (state_34799[(9)]);
var inst_34754 = (state_34799[(12)]);
var inst_34756 = (inst_34754 < inst_34753);
var inst_34757 = inst_34756;
var state_34799__$1 = state_34799;
if(cljs.core.truth_(inst_34757)){
var statearr_34833_36323 = state_34799__$1;
(statearr_34833_36323[(1)] = (10));

} else {
var statearr_34834_36324 = state_34799__$1;
(statearr_34834_36324[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto__))
;
return ((function (switch__33429__auto__,c__33527__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33430__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33430__auto____0 = (function (){
var statearr_34835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34835[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33430__auto__);

(statearr_34835[(1)] = (1));

return statearr_34835;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33430__auto____1 = (function (state_34799){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_34799);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e34836){if((e34836 instanceof Object)){
var ex__33433__auto__ = e34836;
var statearr_34837_36328 = state_34799;
(statearr_34837_36328[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36330 = state_34799;
state_34799 = G__36330;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33430__auto__ = function(state_34799){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33430__auto____1.call(this,state_34799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33430__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33430__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto__))
})();
var state__33529__auto__ = (function (){var statearr_34838 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_34838[(6)] = c__33527__auto__);

return statearr_34838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto__))
);

return c__33527__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34840 = arguments.length;
switch (G__34840) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34842 = arguments.length;
switch (G__34842) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34844 = arguments.length;
switch (G__34844) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33527__auto___36360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___36360,out){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___36360,out){
return (function (state_34868){
var state_val_34869 = (state_34868[(1)]);
if((state_val_34869 === (7))){
var inst_34863 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34870_36361 = state_34868__$1;
(statearr_34870_36361[(2)] = inst_34863);

(statearr_34870_36361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (1))){
var inst_34845 = null;
var state_34868__$1 = (function (){var statearr_34871 = state_34868;
(statearr_34871[(7)] = inst_34845);

return statearr_34871;
})();
var statearr_34872_36362 = state_34868__$1;
(statearr_34872_36362[(2)] = null);

(statearr_34872_36362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (4))){
var inst_34848 = (state_34868[(8)]);
var inst_34848__$1 = (state_34868[(2)]);
var inst_34849 = (inst_34848__$1 == null);
var inst_34850 = cljs.core.not(inst_34849);
var state_34868__$1 = (function (){var statearr_34873 = state_34868;
(statearr_34873[(8)] = inst_34848__$1);

return statearr_34873;
})();
if(inst_34850){
var statearr_34874_36363 = state_34868__$1;
(statearr_34874_36363[(1)] = (5));

} else {
var statearr_34875_36364 = state_34868__$1;
(statearr_34875_36364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (6))){
var state_34868__$1 = state_34868;
var statearr_34876_36365 = state_34868__$1;
(statearr_34876_36365[(2)] = null);

(statearr_34876_36365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (3))){
var inst_34865 = (state_34868[(2)]);
var inst_34866 = cljs.core.async.close_BANG_(out);
var state_34868__$1 = (function (){var statearr_34877 = state_34868;
(statearr_34877[(9)] = inst_34865);

return statearr_34877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34868__$1,inst_34866);
} else {
if((state_val_34869 === (2))){
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34868__$1,(4),ch);
} else {
if((state_val_34869 === (11))){
var inst_34848 = (state_34868[(8)]);
var inst_34857 = (state_34868[(2)]);
var inst_34845 = inst_34848;
var state_34868__$1 = (function (){var statearr_34878 = state_34868;
(statearr_34878[(10)] = inst_34857);

(statearr_34878[(7)] = inst_34845);

return statearr_34878;
})();
var statearr_34879_36374 = state_34868__$1;
(statearr_34879_36374[(2)] = null);

(statearr_34879_36374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (9))){
var inst_34848 = (state_34868[(8)]);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34868__$1,(11),out,inst_34848);
} else {
if((state_val_34869 === (5))){
var inst_34848 = (state_34868[(8)]);
var inst_34845 = (state_34868[(7)]);
var inst_34852 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34848,inst_34845);
var state_34868__$1 = state_34868;
if(inst_34852){
var statearr_34881_36382 = state_34868__$1;
(statearr_34881_36382[(1)] = (8));

} else {
var statearr_34882_36383 = state_34868__$1;
(statearr_34882_36383[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (10))){
var inst_34860 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34883_36384 = state_34868__$1;
(statearr_34883_36384[(2)] = inst_34860);

(statearr_34883_36384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (8))){
var inst_34845 = (state_34868[(7)]);
var tmp34880 = inst_34845;
var inst_34845__$1 = tmp34880;
var state_34868__$1 = (function (){var statearr_34884 = state_34868;
(statearr_34884[(7)] = inst_34845__$1);

return statearr_34884;
})();
var statearr_34885_36392 = state_34868__$1;
(statearr_34885_36392[(2)] = null);

(statearr_34885_36392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___36360,out))
;
return ((function (switch__33429__auto__,c__33527__auto___36360,out){
return (function() {
var cljs$core$async$state_machine__33430__auto__ = null;
var cljs$core$async$state_machine__33430__auto____0 = (function (){
var statearr_34886 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34886[(0)] = cljs$core$async$state_machine__33430__auto__);

(statearr_34886[(1)] = (1));

return statearr_34886;
});
var cljs$core$async$state_machine__33430__auto____1 = (function (state_34868){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_34868);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e34887){if((e34887 instanceof Object)){
var ex__33433__auto__ = e34887;
var statearr_34888_36393 = state_34868;
(statearr_34888_36393[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34887;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36397 = state_34868;
state_34868 = G__36397;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$state_machine__33430__auto__ = function(state_34868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33430__auto____1.call(this,state_34868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33430__auto____0;
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33430__auto____1;
return cljs$core$async$state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___36360,out))
})();
var state__33529__auto__ = (function (){var statearr_34889 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_34889[(6)] = c__33527__auto___36360);

return statearr_34889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___36360,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34891 = arguments.length;
switch (G__34891) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33527__auto___36410 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___36410,out){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___36410,out){
return (function (state_34929){
var state_val_34930 = (state_34929[(1)]);
if((state_val_34930 === (7))){
var inst_34925 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34931_36411 = state_34929__$1;
(statearr_34931_36411[(2)] = inst_34925);

(statearr_34931_36411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (1))){
var inst_34892 = (new Array(n));
var inst_34893 = inst_34892;
var inst_34894 = (0);
var state_34929__$1 = (function (){var statearr_34932 = state_34929;
(statearr_34932[(7)] = inst_34893);

(statearr_34932[(8)] = inst_34894);

return statearr_34932;
})();
var statearr_34933_36412 = state_34929__$1;
(statearr_34933_36412[(2)] = null);

(statearr_34933_36412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (4))){
var inst_34897 = (state_34929[(9)]);
var inst_34897__$1 = (state_34929[(2)]);
var inst_34898 = (inst_34897__$1 == null);
var inst_34899 = cljs.core.not(inst_34898);
var state_34929__$1 = (function (){var statearr_34934 = state_34929;
(statearr_34934[(9)] = inst_34897__$1);

return statearr_34934;
})();
if(inst_34899){
var statearr_34935_36413 = state_34929__$1;
(statearr_34935_36413[(1)] = (5));

} else {
var statearr_34936_36414 = state_34929__$1;
(statearr_34936_36414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (15))){
var inst_34919 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34937_36416 = state_34929__$1;
(statearr_34937_36416[(2)] = inst_34919);

(statearr_34937_36416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (13))){
var state_34929__$1 = state_34929;
var statearr_34938_36417 = state_34929__$1;
(statearr_34938_36417[(2)] = null);

(statearr_34938_36417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (6))){
var inst_34894 = (state_34929[(8)]);
var inst_34915 = (inst_34894 > (0));
var state_34929__$1 = state_34929;
if(cljs.core.truth_(inst_34915)){
var statearr_34939_36418 = state_34929__$1;
(statearr_34939_36418[(1)] = (12));

} else {
var statearr_34940_36419 = state_34929__$1;
(statearr_34940_36419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (3))){
var inst_34927 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34929__$1,inst_34927);
} else {
if((state_val_34930 === (12))){
var inst_34893 = (state_34929[(7)]);
var inst_34917 = cljs.core.vec(inst_34893);
var state_34929__$1 = state_34929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34929__$1,(15),out,inst_34917);
} else {
if((state_val_34930 === (2))){
var state_34929__$1 = state_34929;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34929__$1,(4),ch);
} else {
if((state_val_34930 === (11))){
var inst_34909 = (state_34929[(2)]);
var inst_34910 = (new Array(n));
var inst_34893 = inst_34910;
var inst_34894 = (0);
var state_34929__$1 = (function (){var statearr_34941 = state_34929;
(statearr_34941[(10)] = inst_34909);

(statearr_34941[(7)] = inst_34893);

(statearr_34941[(8)] = inst_34894);

return statearr_34941;
})();
var statearr_34942_36420 = state_34929__$1;
(statearr_34942_36420[(2)] = null);

(statearr_34942_36420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (9))){
var inst_34893 = (state_34929[(7)]);
var inst_34907 = cljs.core.vec(inst_34893);
var state_34929__$1 = state_34929;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34929__$1,(11),out,inst_34907);
} else {
if((state_val_34930 === (5))){
var inst_34897 = (state_34929[(9)]);
var inst_34893 = (state_34929[(7)]);
var inst_34902 = (state_34929[(11)]);
var inst_34894 = (state_34929[(8)]);
var inst_34901 = (inst_34893[inst_34894] = inst_34897);
var inst_34902__$1 = (inst_34894 + (1));
var inst_34903 = (inst_34902__$1 < n);
var state_34929__$1 = (function (){var statearr_34943 = state_34929;
(statearr_34943[(12)] = inst_34901);

(statearr_34943[(11)] = inst_34902__$1);

return statearr_34943;
})();
if(cljs.core.truth_(inst_34903)){
var statearr_34944_36422 = state_34929__$1;
(statearr_34944_36422[(1)] = (8));

} else {
var statearr_34945_36423 = state_34929__$1;
(statearr_34945_36423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (14))){
var inst_34922 = (state_34929[(2)]);
var inst_34923 = cljs.core.async.close_BANG_(out);
var state_34929__$1 = (function (){var statearr_34947 = state_34929;
(statearr_34947[(13)] = inst_34922);

return statearr_34947;
})();
var statearr_34948_36424 = state_34929__$1;
(statearr_34948_36424[(2)] = inst_34923);

(statearr_34948_36424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (10))){
var inst_34913 = (state_34929[(2)]);
var state_34929__$1 = state_34929;
var statearr_34949_36437 = state_34929__$1;
(statearr_34949_36437[(2)] = inst_34913);

(statearr_34949_36437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34930 === (8))){
var inst_34893 = (state_34929[(7)]);
var inst_34902 = (state_34929[(11)]);
var tmp34946 = inst_34893;
var inst_34893__$1 = tmp34946;
var inst_34894 = inst_34902;
var state_34929__$1 = (function (){var statearr_34950 = state_34929;
(statearr_34950[(7)] = inst_34893__$1);

(statearr_34950[(8)] = inst_34894);

return statearr_34950;
})();
var statearr_34951_36453 = state_34929__$1;
(statearr_34951_36453[(2)] = null);

(statearr_34951_36453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___36410,out))
;
return ((function (switch__33429__auto__,c__33527__auto___36410,out){
return (function() {
var cljs$core$async$state_machine__33430__auto__ = null;
var cljs$core$async$state_machine__33430__auto____0 = (function (){
var statearr_34952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34952[(0)] = cljs$core$async$state_machine__33430__auto__);

(statearr_34952[(1)] = (1));

return statearr_34952;
});
var cljs$core$async$state_machine__33430__auto____1 = (function (state_34929){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_34929);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e34953){if((e34953 instanceof Object)){
var ex__33433__auto__ = e34953;
var statearr_34954_36454 = state_34929;
(statearr_34954_36454[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34953;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36455 = state_34929;
state_34929 = G__36455;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$state_machine__33430__auto__ = function(state_34929){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33430__auto____1.call(this,state_34929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33430__auto____0;
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33430__auto____1;
return cljs$core$async$state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___36410,out))
})();
var state__33529__auto__ = (function (){var statearr_34955 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_34955[(6)] = c__33527__auto___36410);

return statearr_34955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___36410,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34957 = arguments.length;
switch (G__34957) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33527__auto___36458 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33527__auto___36458,out){
return (function (){
var f__33528__auto__ = (function (){var switch__33429__auto__ = ((function (c__33527__auto___36458,out){
return (function (state_34999){
var state_val_35000 = (state_34999[(1)]);
if((state_val_35000 === (7))){
var inst_34995 = (state_34999[(2)]);
var state_34999__$1 = state_34999;
var statearr_35001_36460 = state_34999__$1;
(statearr_35001_36460[(2)] = inst_34995);

(statearr_35001_36460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (1))){
var inst_34958 = [];
var inst_34959 = inst_34958;
var inst_34960 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34999__$1 = (function (){var statearr_35002 = state_34999;
(statearr_35002[(7)] = inst_34959);

(statearr_35002[(8)] = inst_34960);

return statearr_35002;
})();
var statearr_35003_36464 = state_34999__$1;
(statearr_35003_36464[(2)] = null);

(statearr_35003_36464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (4))){
var inst_34963 = (state_34999[(9)]);
var inst_34963__$1 = (state_34999[(2)]);
var inst_34964 = (inst_34963__$1 == null);
var inst_34965 = cljs.core.not(inst_34964);
var state_34999__$1 = (function (){var statearr_35004 = state_34999;
(statearr_35004[(9)] = inst_34963__$1);

return statearr_35004;
})();
if(inst_34965){
var statearr_35005_36468 = state_34999__$1;
(statearr_35005_36468[(1)] = (5));

} else {
var statearr_35006_36469 = state_34999__$1;
(statearr_35006_36469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (15))){
var inst_34989 = (state_34999[(2)]);
var state_34999__$1 = state_34999;
var statearr_35007_36470 = state_34999__$1;
(statearr_35007_36470[(2)] = inst_34989);

(statearr_35007_36470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (13))){
var state_34999__$1 = state_34999;
var statearr_35008_36471 = state_34999__$1;
(statearr_35008_36471[(2)] = null);

(statearr_35008_36471[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (6))){
var inst_34959 = (state_34999[(7)]);
var inst_34984 = inst_34959.length;
var inst_34985 = (inst_34984 > (0));
var state_34999__$1 = state_34999;
if(cljs.core.truth_(inst_34985)){
var statearr_35009_36472 = state_34999__$1;
(statearr_35009_36472[(1)] = (12));

} else {
var statearr_35010_36473 = state_34999__$1;
(statearr_35010_36473[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (3))){
var inst_34997 = (state_34999[(2)]);
var state_34999__$1 = state_34999;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34999__$1,inst_34997);
} else {
if((state_val_35000 === (12))){
var inst_34959 = (state_34999[(7)]);
var inst_34987 = cljs.core.vec(inst_34959);
var state_34999__$1 = state_34999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34999__$1,(15),out,inst_34987);
} else {
if((state_val_35000 === (2))){
var state_34999__$1 = state_34999;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34999__$1,(4),ch);
} else {
if((state_val_35000 === (11))){
var inst_34967 = (state_34999[(10)]);
var inst_34963 = (state_34999[(9)]);
var inst_34977 = (state_34999[(2)]);
var inst_34978 = [];
var inst_34979 = inst_34978.push(inst_34963);
var inst_34959 = inst_34978;
var inst_34960 = inst_34967;
var state_34999__$1 = (function (){var statearr_35011 = state_34999;
(statearr_35011[(7)] = inst_34959);

(statearr_35011[(8)] = inst_34960);

(statearr_35011[(11)] = inst_34979);

(statearr_35011[(12)] = inst_34977);

return statearr_35011;
})();
var statearr_35012_36476 = state_34999__$1;
(statearr_35012_36476[(2)] = null);

(statearr_35012_36476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (9))){
var inst_34959 = (state_34999[(7)]);
var inst_34975 = cljs.core.vec(inst_34959);
var state_34999__$1 = state_34999;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34999__$1,(11),out,inst_34975);
} else {
if((state_val_35000 === (5))){
var inst_34960 = (state_34999[(8)]);
var inst_34967 = (state_34999[(10)]);
var inst_34963 = (state_34999[(9)]);
var inst_34967__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34963) : f.call(null,inst_34963));
var inst_34968 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34967__$1,inst_34960);
var inst_34969 = cljs.core.keyword_identical_QMARK_(inst_34960,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34970 = ((inst_34968) || (inst_34969));
var state_34999__$1 = (function (){var statearr_35013 = state_34999;
(statearr_35013[(10)] = inst_34967__$1);

return statearr_35013;
})();
if(cljs.core.truth_(inst_34970)){
var statearr_35014_36478 = state_34999__$1;
(statearr_35014_36478[(1)] = (8));

} else {
var statearr_35015_36479 = state_34999__$1;
(statearr_35015_36479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (14))){
var inst_34992 = (state_34999[(2)]);
var inst_34993 = cljs.core.async.close_BANG_(out);
var state_34999__$1 = (function (){var statearr_35017 = state_34999;
(statearr_35017[(13)] = inst_34992);

return statearr_35017;
})();
var statearr_35018_36481 = state_34999__$1;
(statearr_35018_36481[(2)] = inst_34993);

(statearr_35018_36481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (10))){
var inst_34982 = (state_34999[(2)]);
var state_34999__$1 = state_34999;
var statearr_35019_36482 = state_34999__$1;
(statearr_35019_36482[(2)] = inst_34982);

(statearr_35019_36482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35000 === (8))){
var inst_34959 = (state_34999[(7)]);
var inst_34967 = (state_34999[(10)]);
var inst_34963 = (state_34999[(9)]);
var inst_34972 = inst_34959.push(inst_34963);
var tmp35016 = inst_34959;
var inst_34959__$1 = tmp35016;
var inst_34960 = inst_34967;
var state_34999__$1 = (function (){var statearr_35020 = state_34999;
(statearr_35020[(14)] = inst_34972);

(statearr_35020[(7)] = inst_34959__$1);

(statearr_35020[(8)] = inst_34960);

return statearr_35020;
})();
var statearr_35021_36483 = state_34999__$1;
(statearr_35021_36483[(2)] = null);

(statearr_35021_36483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33527__auto___36458,out))
;
return ((function (switch__33429__auto__,c__33527__auto___36458,out){
return (function() {
var cljs$core$async$state_machine__33430__auto__ = null;
var cljs$core$async$state_machine__33430__auto____0 = (function (){
var statearr_35022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35022[(0)] = cljs$core$async$state_machine__33430__auto__);

(statearr_35022[(1)] = (1));

return statearr_35022;
});
var cljs$core$async$state_machine__33430__auto____1 = (function (state_34999){
while(true){
var ret_value__33431__auto__ = (function (){try{while(true){
var result__33432__auto__ = switch__33429__auto__(state_34999);
if(cljs.core.keyword_identical_QMARK_(result__33432__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33432__auto__;
}
break;
}
}catch (e35023){if((e35023 instanceof Object)){
var ex__33433__auto__ = e35023;
var statearr_35024_36542 = state_34999;
(statearr_35024_36542[(5)] = ex__33433__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35023;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36544 = state_34999;
state_34999 = G__36544;
continue;
} else {
return ret_value__33431__auto__;
}
break;
}
});
cljs$core$async$state_machine__33430__auto__ = function(state_34999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33430__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33430__auto____1.call(this,state_34999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33430__auto____0;
cljs$core$async$state_machine__33430__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33430__auto____1;
return cljs$core$async$state_machine__33430__auto__;
})()
;})(switch__33429__auto__,c__33527__auto___36458,out))
})();
var state__33529__auto__ = (function (){var statearr_35025 = (f__33528__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33528__auto__.cljs$core$IFn$_invoke$arity$0() : f__33528__auto__.call(null));
(statearr_35025[(6)] = c__33527__auto___36458);

return statearr_35025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33529__auto__);
});})(c__33527__auto___36458,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
