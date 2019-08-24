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
var G__38988 = arguments.length;
switch (G__38988) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38989 = (function (f,blockable,meta38990){
this.f = f;
this.blockable = blockable;
this.meta38990 = meta38990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38991,meta38990__$1){
var self__ = this;
var _38991__$1 = this;
return (new cljs.core.async.t_cljs$core$async38989(self__.f,self__.blockable,meta38990__$1));
});

cljs.core.async.t_cljs$core$async38989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38991){
var self__ = this;
var _38991__$1 = this;
return self__.meta38990;
});

cljs.core.async.t_cljs$core$async38989.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38990","meta38990",-211240618,null)], null);
});

cljs.core.async.t_cljs$core$async38989.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38989";

cljs.core.async.t_cljs$core$async38989.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async38989");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38989.
 */
cljs.core.async.__GT_t_cljs$core$async38989 = (function cljs$core$async$__GT_t_cljs$core$async38989(f__$1,blockable__$1,meta38990){
return (new cljs.core.async.t_cljs$core$async38989(f__$1,blockable__$1,meta38990));
});

}

return (new cljs.core.async.t_cljs$core$async38989(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__38996 = arguments.length;
switch (G__38996) {
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
var G__38998 = arguments.length;
switch (G__38998) {
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
var G__39000 = arguments.length;
switch (G__39000) {
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
var val_40436 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40436) : fn1.call(null,val_40436));
} else {
cljs.core.async.impl.dispatch.run(((function (val_40436,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_40436) : fn1.call(null,val_40436));
});})(val_40436,ret))
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
var G__39002 = arguments.length;
switch (G__39002) {
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
var n__4607__auto___40449 = n;
var x_40450 = (0);
while(true){
if((x_40450 < n__4607__auto___40449)){
(a[x_40450] = x_40450);

var G__40452 = (x_40450 + (1));
x_40450 = G__40452;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39003 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39003 = (function (flag,meta39004){
this.flag = flag;
this.meta39004 = meta39004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39005,meta39004__$1){
var self__ = this;
var _39005__$1 = this;
return (new cljs.core.async.t_cljs$core$async39003(self__.flag,meta39004__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39005){
var self__ = this;
var _39005__$1 = this;
return self__.meta39004;
});})(flag))
;

cljs.core.async.t_cljs$core$async39003.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39003.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39003.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39004","meta39004",1853780362,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39003";

cljs.core.async.t_cljs$core$async39003.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39003");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39003.
 */
cljs.core.async.__GT_t_cljs$core$async39003 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39003(flag__$1,meta39004){
return (new cljs.core.async.t_cljs$core$async39003(flag__$1,meta39004));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39003(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39006 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39006 = (function (flag,cb,meta39007){
this.flag = flag;
this.cb = cb;
this.meta39007 = meta39007;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39008,meta39007__$1){
var self__ = this;
var _39008__$1 = this;
return (new cljs.core.async.t_cljs$core$async39006(self__.flag,self__.cb,meta39007__$1));
});

cljs.core.async.t_cljs$core$async39006.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39008){
var self__ = this;
var _39008__$1 = this;
return self__.meta39007;
});

cljs.core.async.t_cljs$core$async39006.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39006.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async39006.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39006.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39006.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39007","meta39007",2097048926,null)], null);
});

cljs.core.async.t_cljs$core$async39006.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39006.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39006";

cljs.core.async.t_cljs$core$async39006.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39006");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39006.
 */
cljs.core.async.__GT_t_cljs$core$async39006 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39006(flag__$1,cb__$1,meta39007){
return (new cljs.core.async.t_cljs$core$async39006(flag__$1,cb__$1,meta39007));
});

}

return (new cljs.core.async.t_cljs$core$async39006(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39009_SHARP_){
var G__39011 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39009_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39011) : fret.call(null,G__39011));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39010_SHARP_){
var G__39012 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39010_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__39012) : fret.call(null,G__39012));
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
var G__40472 = (i + (1));
i = G__40472;
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
var len__4730__auto___40475 = arguments.length;
var i__4731__auto___40476 = (0);
while(true){
if((i__4731__auto___40476 < len__4730__auto___40475)){
args__4736__auto__.push((arguments[i__4731__auto___40476]));

var G__40480 = (i__4731__auto___40476 + (1));
i__4731__auto___40476 = G__40480;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39015){
var map__39016 = p__39015;
var map__39016__$1 = (((((!((map__39016 == null))))?(((((map__39016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39016.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39016):map__39016);
var opts = map__39016__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39013){
var G__39014 = cljs.core.first(seq39013);
var seq39013__$1 = cljs.core.next(seq39013);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39014,seq39013__$1);
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
var G__39019 = arguments.length;
switch (G__39019) {
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
var c__38930__auto___40490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___40490){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___40490){
return (function (state_39043){
var state_val_39044 = (state_39043[(1)]);
if((state_val_39044 === (7))){
var inst_39039 = (state_39043[(2)]);
var state_39043__$1 = state_39043;
var statearr_39045_40492 = state_39043__$1;
(statearr_39045_40492[(2)] = inst_39039);

(statearr_39045_40492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (1))){
var state_39043__$1 = state_39043;
var statearr_39046_40493 = state_39043__$1;
(statearr_39046_40493[(2)] = null);

(statearr_39046_40493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (4))){
var inst_39022 = (state_39043[(7)]);
var inst_39022__$1 = (state_39043[(2)]);
var inst_39023 = (inst_39022__$1 == null);
var state_39043__$1 = (function (){var statearr_39047 = state_39043;
(statearr_39047[(7)] = inst_39022__$1);

return statearr_39047;
})();
if(cljs.core.truth_(inst_39023)){
var statearr_39048_40496 = state_39043__$1;
(statearr_39048_40496[(1)] = (5));

} else {
var statearr_39049_40497 = state_39043__$1;
(statearr_39049_40497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (13))){
var state_39043__$1 = state_39043;
var statearr_39050_40500 = state_39043__$1;
(statearr_39050_40500[(2)] = null);

(statearr_39050_40500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (6))){
var inst_39022 = (state_39043[(7)]);
var state_39043__$1 = state_39043;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39043__$1,(11),to,inst_39022);
} else {
if((state_val_39044 === (3))){
var inst_39041 = (state_39043[(2)]);
var state_39043__$1 = state_39043;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39043__$1,inst_39041);
} else {
if((state_val_39044 === (12))){
var state_39043__$1 = state_39043;
var statearr_39051_40501 = state_39043__$1;
(statearr_39051_40501[(2)] = null);

(statearr_39051_40501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (2))){
var state_39043__$1 = state_39043;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39043__$1,(4),from);
} else {
if((state_val_39044 === (11))){
var inst_39032 = (state_39043[(2)]);
var state_39043__$1 = state_39043;
if(cljs.core.truth_(inst_39032)){
var statearr_39052_40504 = state_39043__$1;
(statearr_39052_40504[(1)] = (12));

} else {
var statearr_39053_40505 = state_39043__$1;
(statearr_39053_40505[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (9))){
var state_39043__$1 = state_39043;
var statearr_39054_40506 = state_39043__$1;
(statearr_39054_40506[(2)] = null);

(statearr_39054_40506[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (5))){
var state_39043__$1 = state_39043;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39055_40511 = state_39043__$1;
(statearr_39055_40511[(1)] = (8));

} else {
var statearr_39056_40512 = state_39043__$1;
(statearr_39056_40512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (14))){
var inst_39037 = (state_39043[(2)]);
var state_39043__$1 = state_39043;
var statearr_39057_40514 = state_39043__$1;
(statearr_39057_40514[(2)] = inst_39037);

(statearr_39057_40514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (10))){
var inst_39029 = (state_39043[(2)]);
var state_39043__$1 = state_39043;
var statearr_39058_40516 = state_39043__$1;
(statearr_39058_40516[(2)] = inst_39029);

(statearr_39058_40516[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (8))){
var inst_39026 = cljs.core.async.close_BANG_(to);
var state_39043__$1 = state_39043;
var statearr_39059_40517 = state_39043__$1;
(statearr_39059_40517[(2)] = inst_39026);

(statearr_39059_40517[(1)] = (10));


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
});})(c__38930__auto___40490))
;
return ((function (switch__38829__auto__,c__38930__auto___40490){
return (function() {
var cljs$core$async$state_machine__38830__auto__ = null;
var cljs$core$async$state_machine__38830__auto____0 = (function (){
var statearr_39060 = [null,null,null,null,null,null,null,null];
(statearr_39060[(0)] = cljs$core$async$state_machine__38830__auto__);

(statearr_39060[(1)] = (1));

return statearr_39060;
});
var cljs$core$async$state_machine__38830__auto____1 = (function (state_39043){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39043);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39061){if((e39061 instanceof Object)){
var ex__38833__auto__ = e39061;
var statearr_39062_40522 = state_39043;
(statearr_39062_40522[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39061;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40523 = state_39043;
state_39043 = G__40523;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$state_machine__38830__auto__ = function(state_39043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38830__auto____1.call(this,state_39043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38830__auto____0;
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38830__auto____1;
return cljs$core$async$state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___40490))
})();
var state__38932__auto__ = (function (){var statearr_39063 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39063[(6)] = c__38930__auto___40490);

return statearr_39063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___40490))
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
return (function (p__39064){
var vec__39065 = p__39064;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39065,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39065,(1),null);
var job = vec__39065;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__38930__auto___40527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___40527,res,vec__39065,v,p,job,jobs,results){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___40527,res,vec__39065,v,p,job,jobs,results){
return (function (state_39072){
var state_val_39073 = (state_39072[(1)]);
if((state_val_39073 === (1))){
var state_39072__$1 = state_39072;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39072__$1,(2),res,v);
} else {
if((state_val_39073 === (2))){
var inst_39069 = (state_39072[(2)]);
var inst_39070 = cljs.core.async.close_BANG_(res);
var state_39072__$1 = (function (){var statearr_39074 = state_39072;
(statearr_39074[(7)] = inst_39069);

return statearr_39074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_39072__$1,inst_39070);
} else {
return null;
}
}
});})(c__38930__auto___40527,res,vec__39065,v,p,job,jobs,results))
;
return ((function (switch__38829__auto__,c__38930__auto___40527,res,vec__39065,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0 = (function (){
var statearr_39075 = [null,null,null,null,null,null,null,null];
(statearr_39075[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__);

(statearr_39075[(1)] = (1));

return statearr_39075;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1 = (function (state_39072){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39072);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39076){if((e39076 instanceof Object)){
var ex__38833__auto__ = e39076;
var statearr_39077_40542 = state_39072;
(statearr_39077_40542[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39076;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40544 = state_39072;
state_39072 = G__40544;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__ = function(state_39072){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1.call(this,state_39072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___40527,res,vec__39065,v,p,job,jobs,results))
})();
var state__38932__auto__ = (function (){var statearr_39078 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39078[(6)] = c__38930__auto___40527);

return statearr_39078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___40527,res,vec__39065,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39079){
var vec__39080 = p__39079;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39080,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39080,(1),null);
var job = vec__39080;
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
var n__4607__auto___40545 = n;
var __40546 = (0);
while(true){
if((__40546 < n__4607__auto___40545)){
var G__39083_40547 = type;
var G__39083_40548__$1 = (((G__39083_40547 instanceof cljs.core.Keyword))?G__39083_40547.fqn:null);
switch (G__39083_40548__$1) {
case "compute":
var c__38930__auto___40550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40546,c__38930__auto___40550,G__39083_40547,G__39083_40548__$1,n__4607__auto___40545,jobs,results,process,async){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (__40546,c__38930__auto___40550,G__39083_40547,G__39083_40548__$1,n__4607__auto___40545,jobs,results,process,async){
return (function (state_39096){
var state_val_39097 = (state_39096[(1)]);
if((state_val_39097 === (1))){
var state_39096__$1 = state_39096;
var statearr_39098_40551 = state_39096__$1;
(statearr_39098_40551[(2)] = null);

(statearr_39098_40551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39097 === (2))){
var state_39096__$1 = state_39096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39096__$1,(4),jobs);
} else {
if((state_val_39097 === (3))){
var inst_39094 = (state_39096[(2)]);
var state_39096__$1 = state_39096;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39096__$1,inst_39094);
} else {
if((state_val_39097 === (4))){
var inst_39086 = (state_39096[(2)]);
var inst_39087 = process(inst_39086);
var state_39096__$1 = state_39096;
if(cljs.core.truth_(inst_39087)){
var statearr_39099_40552 = state_39096__$1;
(statearr_39099_40552[(1)] = (5));

} else {
var statearr_39100_40553 = state_39096__$1;
(statearr_39100_40553[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39097 === (5))){
var state_39096__$1 = state_39096;
var statearr_39101_40554 = state_39096__$1;
(statearr_39101_40554[(2)] = null);

(statearr_39101_40554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39097 === (6))){
var state_39096__$1 = state_39096;
var statearr_39102_40555 = state_39096__$1;
(statearr_39102_40555[(2)] = null);

(statearr_39102_40555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39097 === (7))){
var inst_39092 = (state_39096[(2)]);
var state_39096__$1 = state_39096;
var statearr_39103_40556 = state_39096__$1;
(statearr_39103_40556[(2)] = inst_39092);

(statearr_39103_40556[(1)] = (3));


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
});})(__40546,c__38930__auto___40550,G__39083_40547,G__39083_40548__$1,n__4607__auto___40545,jobs,results,process,async))
;
return ((function (__40546,switch__38829__auto__,c__38930__auto___40550,G__39083_40547,G__39083_40548__$1,n__4607__auto___40545,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0 = (function (){
var statearr_39104 = [null,null,null,null,null,null,null];
(statearr_39104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__);

(statearr_39104[(1)] = (1));

return statearr_39104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1 = (function (state_39096){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39096);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39105){if((e39105 instanceof Object)){
var ex__38833__auto__ = e39105;
var statearr_39106_40559 = state_39096;
(statearr_39106_40559[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39105;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40560 = state_39096;
state_39096 = G__40560;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__ = function(state_39096){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1.call(this,state_39096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__;
})()
;})(__40546,switch__38829__auto__,c__38930__auto___40550,G__39083_40547,G__39083_40548__$1,n__4607__auto___40545,jobs,results,process,async))
})();
var state__38932__auto__ = (function (){var statearr_39107 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39107[(6)] = c__38930__auto___40550);

return statearr_39107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(__40546,c__38930__auto___40550,G__39083_40547,G__39083_40548__$1,n__4607__auto___40545,jobs,results,process,async))
);


break;
case "async":
var c__38930__auto___40561 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__40546,c__38930__auto___40561,G__39083_40547,G__39083_40548__$1,n__4607__auto___40545,jobs,results,process,async){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (__40546,c__38930__auto___40561,G__39083_40547,G__39083_40548__$1,n__4607__auto___40545,jobs,results,process,async){
return (function (state_39120){
var state_val_39121 = (state_39120[(1)]);
if((state_val_39121 === (1))){
var state_39120__$1 = state_39120;
var statearr_39122_40566 = state_39120__$1;
(statearr_39122_40566[(2)] = null);

(statearr_39122_40566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39121 === (2))){
var state_39120__$1 = state_39120;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39120__$1,(4),jobs);
} else {
if((state_val_39121 === (3))){
var inst_39118 = (state_39120[(2)]);
var state_39120__$1 = state_39120;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39120__$1,inst_39118);
} else {
if((state_val_39121 === (4))){
var inst_39110 = (state_39120[(2)]);
var inst_39111 = async(inst_39110);
var state_39120__$1 = state_39120;
if(cljs.core.truth_(inst_39111)){
var statearr_39123_40568 = state_39120__$1;
(statearr_39123_40568[(1)] = (5));

} else {
var statearr_39124_40569 = state_39120__$1;
(statearr_39124_40569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39121 === (5))){
var state_39120__$1 = state_39120;
var statearr_39125_40571 = state_39120__$1;
(statearr_39125_40571[(2)] = null);

(statearr_39125_40571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39121 === (6))){
var state_39120__$1 = state_39120;
var statearr_39126_40572 = state_39120__$1;
(statearr_39126_40572[(2)] = null);

(statearr_39126_40572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39121 === (7))){
var inst_39116 = (state_39120[(2)]);
var state_39120__$1 = state_39120;
var statearr_39127_40574 = state_39120__$1;
(statearr_39127_40574[(2)] = inst_39116);

(statearr_39127_40574[(1)] = (3));


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
});})(__40546,c__38930__auto___40561,G__39083_40547,G__39083_40548__$1,n__4607__auto___40545,jobs,results,process,async))
;
return ((function (__40546,switch__38829__auto__,c__38930__auto___40561,G__39083_40547,G__39083_40548__$1,n__4607__auto___40545,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0 = (function (){
var statearr_39128 = [null,null,null,null,null,null,null];
(statearr_39128[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__);

(statearr_39128[(1)] = (1));

return statearr_39128;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1 = (function (state_39120){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39120);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39129){if((e39129 instanceof Object)){
var ex__38833__auto__ = e39129;
var statearr_39130_40575 = state_39120;
(statearr_39130_40575[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39129;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40577 = state_39120;
state_39120 = G__40577;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__ = function(state_39120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1.call(this,state_39120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__;
})()
;})(__40546,switch__38829__auto__,c__38930__auto___40561,G__39083_40547,G__39083_40548__$1,n__4607__auto___40545,jobs,results,process,async))
})();
var state__38932__auto__ = (function (){var statearr_39131 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39131[(6)] = c__38930__auto___40561);

return statearr_39131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(__40546,c__38930__auto___40561,G__39083_40547,G__39083_40548__$1,n__4607__auto___40545,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39083_40548__$1)].join('')));

}

var G__40581 = (__40546 + (1));
__40546 = G__40581;
continue;
} else {
}
break;
}

var c__38930__auto___40582 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___40582,jobs,results,process,async){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___40582,jobs,results,process,async){
return (function (state_39153){
var state_val_39154 = (state_39153[(1)]);
if((state_val_39154 === (7))){
var inst_39149 = (state_39153[(2)]);
var state_39153__$1 = state_39153;
var statearr_39155_40591 = state_39153__$1;
(statearr_39155_40591[(2)] = inst_39149);

(statearr_39155_40591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39154 === (1))){
var state_39153__$1 = state_39153;
var statearr_39156_40593 = state_39153__$1;
(statearr_39156_40593[(2)] = null);

(statearr_39156_40593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39154 === (4))){
var inst_39134 = (state_39153[(7)]);
var inst_39134__$1 = (state_39153[(2)]);
var inst_39135 = (inst_39134__$1 == null);
var state_39153__$1 = (function (){var statearr_39157 = state_39153;
(statearr_39157[(7)] = inst_39134__$1);

return statearr_39157;
})();
if(cljs.core.truth_(inst_39135)){
var statearr_39158_40595 = state_39153__$1;
(statearr_39158_40595[(1)] = (5));

} else {
var statearr_39159_40596 = state_39153__$1;
(statearr_39159_40596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39154 === (6))){
var inst_39134 = (state_39153[(7)]);
var inst_39139 = (state_39153[(8)]);
var inst_39139__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_39140 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39141 = [inst_39134,inst_39139__$1];
var inst_39142 = (new cljs.core.PersistentVector(null,2,(5),inst_39140,inst_39141,null));
var state_39153__$1 = (function (){var statearr_39160 = state_39153;
(statearr_39160[(8)] = inst_39139__$1);

return statearr_39160;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39153__$1,(8),jobs,inst_39142);
} else {
if((state_val_39154 === (3))){
var inst_39151 = (state_39153[(2)]);
var state_39153__$1 = state_39153;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39153__$1,inst_39151);
} else {
if((state_val_39154 === (2))){
var state_39153__$1 = state_39153;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39153__$1,(4),from);
} else {
if((state_val_39154 === (9))){
var inst_39146 = (state_39153[(2)]);
var state_39153__$1 = (function (){var statearr_39161 = state_39153;
(statearr_39161[(9)] = inst_39146);

return statearr_39161;
})();
var statearr_39162_40598 = state_39153__$1;
(statearr_39162_40598[(2)] = null);

(statearr_39162_40598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39154 === (5))){
var inst_39137 = cljs.core.async.close_BANG_(jobs);
var state_39153__$1 = state_39153;
var statearr_39163_40600 = state_39153__$1;
(statearr_39163_40600[(2)] = inst_39137);

(statearr_39163_40600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39154 === (8))){
var inst_39139 = (state_39153[(8)]);
var inst_39144 = (state_39153[(2)]);
var state_39153__$1 = (function (){var statearr_39164 = state_39153;
(statearr_39164[(10)] = inst_39144);

return statearr_39164;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39153__$1,(9),results,inst_39139);
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
});})(c__38930__auto___40582,jobs,results,process,async))
;
return ((function (switch__38829__auto__,c__38930__auto___40582,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0 = (function (){
var statearr_39165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__);

(statearr_39165[(1)] = (1));

return statearr_39165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1 = (function (state_39153){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39153);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39166){if((e39166 instanceof Object)){
var ex__38833__auto__ = e39166;
var statearr_39167_40601 = state_39153;
(statearr_39167_40601[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39166;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40602 = state_39153;
state_39153 = G__40602;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__ = function(state_39153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1.call(this,state_39153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___40582,jobs,results,process,async))
})();
var state__38932__auto__ = (function (){var statearr_39168 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39168[(6)] = c__38930__auto___40582);

return statearr_39168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___40582,jobs,results,process,async))
);


var c__38930__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto__,jobs,results,process,async){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto__,jobs,results,process,async){
return (function (state_39206){
var state_val_39207 = (state_39206[(1)]);
if((state_val_39207 === (7))){
var inst_39202 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39208_40605 = state_39206__$1;
(statearr_39208_40605[(2)] = inst_39202);

(statearr_39208_40605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (20))){
var state_39206__$1 = state_39206;
var statearr_39209_40606 = state_39206__$1;
(statearr_39209_40606[(2)] = null);

(statearr_39209_40606[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (1))){
var state_39206__$1 = state_39206;
var statearr_39210_40607 = state_39206__$1;
(statearr_39210_40607[(2)] = null);

(statearr_39210_40607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (4))){
var inst_39171 = (state_39206[(7)]);
var inst_39171__$1 = (state_39206[(2)]);
var inst_39172 = (inst_39171__$1 == null);
var state_39206__$1 = (function (){var statearr_39211 = state_39206;
(statearr_39211[(7)] = inst_39171__$1);

return statearr_39211;
})();
if(cljs.core.truth_(inst_39172)){
var statearr_39212_40612 = state_39206__$1;
(statearr_39212_40612[(1)] = (5));

} else {
var statearr_39213_40613 = state_39206__$1;
(statearr_39213_40613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (15))){
var inst_39184 = (state_39206[(8)]);
var state_39206__$1 = state_39206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39206__$1,(18),to,inst_39184);
} else {
if((state_val_39207 === (21))){
var inst_39197 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39214_40614 = state_39206__$1;
(statearr_39214_40614[(2)] = inst_39197);

(statearr_39214_40614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (13))){
var inst_39199 = (state_39206[(2)]);
var state_39206__$1 = (function (){var statearr_39215 = state_39206;
(statearr_39215[(9)] = inst_39199);

return statearr_39215;
})();
var statearr_39216_40617 = state_39206__$1;
(statearr_39216_40617[(2)] = null);

(statearr_39216_40617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (6))){
var inst_39171 = (state_39206[(7)]);
var state_39206__$1 = state_39206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39206__$1,(11),inst_39171);
} else {
if((state_val_39207 === (17))){
var inst_39192 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
if(cljs.core.truth_(inst_39192)){
var statearr_39217_40620 = state_39206__$1;
(statearr_39217_40620[(1)] = (19));

} else {
var statearr_39218_40621 = state_39206__$1;
(statearr_39218_40621[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (3))){
var inst_39204 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39206__$1,inst_39204);
} else {
if((state_val_39207 === (12))){
var inst_39181 = (state_39206[(10)]);
var state_39206__$1 = state_39206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39206__$1,(14),inst_39181);
} else {
if((state_val_39207 === (2))){
var state_39206__$1 = state_39206;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39206__$1,(4),results);
} else {
if((state_val_39207 === (19))){
var state_39206__$1 = state_39206;
var statearr_39219_40624 = state_39206__$1;
(statearr_39219_40624[(2)] = null);

(statearr_39219_40624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (11))){
var inst_39181 = (state_39206[(2)]);
var state_39206__$1 = (function (){var statearr_39220 = state_39206;
(statearr_39220[(10)] = inst_39181);

return statearr_39220;
})();
var statearr_39221_40625 = state_39206__$1;
(statearr_39221_40625[(2)] = null);

(statearr_39221_40625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (9))){
var state_39206__$1 = state_39206;
var statearr_39222_40628 = state_39206__$1;
(statearr_39222_40628[(2)] = null);

(statearr_39222_40628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (5))){
var state_39206__$1 = state_39206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39223_40629 = state_39206__$1;
(statearr_39223_40629[(1)] = (8));

} else {
var statearr_39224_40630 = state_39206__$1;
(statearr_39224_40630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (14))){
var inst_39186 = (state_39206[(11)]);
var inst_39184 = (state_39206[(8)]);
var inst_39184__$1 = (state_39206[(2)]);
var inst_39185 = (inst_39184__$1 == null);
var inst_39186__$1 = cljs.core.not(inst_39185);
var state_39206__$1 = (function (){var statearr_39225 = state_39206;
(statearr_39225[(11)] = inst_39186__$1);

(statearr_39225[(8)] = inst_39184__$1);

return statearr_39225;
})();
if(inst_39186__$1){
var statearr_39226_40631 = state_39206__$1;
(statearr_39226_40631[(1)] = (15));

} else {
var statearr_39227_40632 = state_39206__$1;
(statearr_39227_40632[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (16))){
var inst_39186 = (state_39206[(11)]);
var state_39206__$1 = state_39206;
var statearr_39228_40633 = state_39206__$1;
(statearr_39228_40633[(2)] = inst_39186);

(statearr_39228_40633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (10))){
var inst_39178 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39229_40635 = state_39206__$1;
(statearr_39229_40635[(2)] = inst_39178);

(statearr_39229_40635[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (18))){
var inst_39189 = (state_39206[(2)]);
var state_39206__$1 = state_39206;
var statearr_39230_40636 = state_39206__$1;
(statearr_39230_40636[(2)] = inst_39189);

(statearr_39230_40636[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39207 === (8))){
var inst_39175 = cljs.core.async.close_BANG_(to);
var state_39206__$1 = state_39206;
var statearr_39231_40637 = state_39206__$1;
(statearr_39231_40637[(2)] = inst_39175);

(statearr_39231_40637[(1)] = (10));


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
});})(c__38930__auto__,jobs,results,process,async))
;
return ((function (switch__38829__auto__,c__38930__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0 = (function (){
var statearr_39232 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39232[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__);

(statearr_39232[(1)] = (1));

return statearr_39232;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1 = (function (state_39206){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39206);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39233){if((e39233 instanceof Object)){
var ex__38833__auto__ = e39233;
var statearr_39234_40662 = state_39206;
(statearr_39234_40662[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40670 = state_39206;
state_39206 = G__40670;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__ = function(state_39206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1.call(this,state_39206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto__,jobs,results,process,async))
})();
var state__38932__auto__ = (function (){var statearr_39235 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39235[(6)] = c__38930__auto__);

return statearr_39235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto__,jobs,results,process,async))
);

return c__38930__auto__;
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
var G__39237 = arguments.length;
switch (G__39237) {
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
var G__39239 = arguments.length;
switch (G__39239) {
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
var G__39241 = arguments.length;
switch (G__39241) {
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
var c__38930__auto___40696 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___40696,tc,fc){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___40696,tc,fc){
return (function (state_39267){
var state_val_39268 = (state_39267[(1)]);
if((state_val_39268 === (7))){
var inst_39263 = (state_39267[(2)]);
var state_39267__$1 = state_39267;
var statearr_39269_40700 = state_39267__$1;
(statearr_39269_40700[(2)] = inst_39263);

(statearr_39269_40700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (1))){
var state_39267__$1 = state_39267;
var statearr_39270_40707 = state_39267__$1;
(statearr_39270_40707[(2)] = null);

(statearr_39270_40707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (4))){
var inst_39244 = (state_39267[(7)]);
var inst_39244__$1 = (state_39267[(2)]);
var inst_39245 = (inst_39244__$1 == null);
var state_39267__$1 = (function (){var statearr_39271 = state_39267;
(statearr_39271[(7)] = inst_39244__$1);

return statearr_39271;
})();
if(cljs.core.truth_(inst_39245)){
var statearr_39272_40711 = state_39267__$1;
(statearr_39272_40711[(1)] = (5));

} else {
var statearr_39273_40715 = state_39267__$1;
(statearr_39273_40715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (13))){
var state_39267__$1 = state_39267;
var statearr_39274_40716 = state_39267__$1;
(statearr_39274_40716[(2)] = null);

(statearr_39274_40716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (6))){
var inst_39244 = (state_39267[(7)]);
var inst_39250 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_39244) : p.call(null,inst_39244));
var state_39267__$1 = state_39267;
if(cljs.core.truth_(inst_39250)){
var statearr_39275_40717 = state_39267__$1;
(statearr_39275_40717[(1)] = (9));

} else {
var statearr_39276_40718 = state_39267__$1;
(statearr_39276_40718[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (3))){
var inst_39265 = (state_39267[(2)]);
var state_39267__$1 = state_39267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39267__$1,inst_39265);
} else {
if((state_val_39268 === (12))){
var state_39267__$1 = state_39267;
var statearr_39277_40720 = state_39267__$1;
(statearr_39277_40720[(2)] = null);

(statearr_39277_40720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (2))){
var state_39267__$1 = state_39267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39267__$1,(4),ch);
} else {
if((state_val_39268 === (11))){
var inst_39244 = (state_39267[(7)]);
var inst_39254 = (state_39267[(2)]);
var state_39267__$1 = state_39267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39267__$1,(8),inst_39254,inst_39244);
} else {
if((state_val_39268 === (9))){
var state_39267__$1 = state_39267;
var statearr_39278_40721 = state_39267__$1;
(statearr_39278_40721[(2)] = tc);

(statearr_39278_40721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (5))){
var inst_39247 = cljs.core.async.close_BANG_(tc);
var inst_39248 = cljs.core.async.close_BANG_(fc);
var state_39267__$1 = (function (){var statearr_39279 = state_39267;
(statearr_39279[(8)] = inst_39247);

return statearr_39279;
})();
var statearr_39280_40722 = state_39267__$1;
(statearr_39280_40722[(2)] = inst_39248);

(statearr_39280_40722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (14))){
var inst_39261 = (state_39267[(2)]);
var state_39267__$1 = state_39267;
var statearr_39281_40723 = state_39267__$1;
(statearr_39281_40723[(2)] = inst_39261);

(statearr_39281_40723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (10))){
var state_39267__$1 = state_39267;
var statearr_39282_40724 = state_39267__$1;
(statearr_39282_40724[(2)] = fc);

(statearr_39282_40724[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39268 === (8))){
var inst_39256 = (state_39267[(2)]);
var state_39267__$1 = state_39267;
if(cljs.core.truth_(inst_39256)){
var statearr_39283_40725 = state_39267__$1;
(statearr_39283_40725[(1)] = (12));

} else {
var statearr_39284_40726 = state_39267__$1;
(statearr_39284_40726[(1)] = (13));

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
});})(c__38930__auto___40696,tc,fc))
;
return ((function (switch__38829__auto__,c__38930__auto___40696,tc,fc){
return (function() {
var cljs$core$async$state_machine__38830__auto__ = null;
var cljs$core$async$state_machine__38830__auto____0 = (function (){
var statearr_39285 = [null,null,null,null,null,null,null,null,null];
(statearr_39285[(0)] = cljs$core$async$state_machine__38830__auto__);

(statearr_39285[(1)] = (1));

return statearr_39285;
});
var cljs$core$async$state_machine__38830__auto____1 = (function (state_39267){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39267);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39286){if((e39286 instanceof Object)){
var ex__38833__auto__ = e39286;
var statearr_39287_40727 = state_39267;
(statearr_39287_40727[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39286;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40728 = state_39267;
state_39267 = G__40728;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$state_machine__38830__auto__ = function(state_39267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38830__auto____1.call(this,state_39267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38830__auto____0;
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38830__auto____1;
return cljs$core$async$state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___40696,tc,fc))
})();
var state__38932__auto__ = (function (){var statearr_39288 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39288[(6)] = c__38930__auto___40696);

return statearr_39288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___40696,tc,fc))
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
var c__38930__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto__){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto__){
return (function (state_39309){
var state_val_39310 = (state_39309[(1)]);
if((state_val_39310 === (7))){
var inst_39305 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39311_40731 = state_39309__$1;
(statearr_39311_40731[(2)] = inst_39305);

(statearr_39311_40731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (1))){
var inst_39289 = init;
var state_39309__$1 = (function (){var statearr_39312 = state_39309;
(statearr_39312[(7)] = inst_39289);

return statearr_39312;
})();
var statearr_39313_40732 = state_39309__$1;
(statearr_39313_40732[(2)] = null);

(statearr_39313_40732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (4))){
var inst_39292 = (state_39309[(8)]);
var inst_39292__$1 = (state_39309[(2)]);
var inst_39293 = (inst_39292__$1 == null);
var state_39309__$1 = (function (){var statearr_39314 = state_39309;
(statearr_39314[(8)] = inst_39292__$1);

return statearr_39314;
})();
if(cljs.core.truth_(inst_39293)){
var statearr_39315_40733 = state_39309__$1;
(statearr_39315_40733[(1)] = (5));

} else {
var statearr_39316_40734 = state_39309__$1;
(statearr_39316_40734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (6))){
var inst_39296 = (state_39309[(9)]);
var inst_39289 = (state_39309[(7)]);
var inst_39292 = (state_39309[(8)]);
var inst_39296__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_39289,inst_39292) : f.call(null,inst_39289,inst_39292));
var inst_39297 = cljs.core.reduced_QMARK_(inst_39296__$1);
var state_39309__$1 = (function (){var statearr_39317 = state_39309;
(statearr_39317[(9)] = inst_39296__$1);

return statearr_39317;
})();
if(inst_39297){
var statearr_39318_40735 = state_39309__$1;
(statearr_39318_40735[(1)] = (8));

} else {
var statearr_39319_40736 = state_39309__$1;
(statearr_39319_40736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (3))){
var inst_39307 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39309__$1,inst_39307);
} else {
if((state_val_39310 === (2))){
var state_39309__$1 = state_39309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39309__$1,(4),ch);
} else {
if((state_val_39310 === (9))){
var inst_39296 = (state_39309[(9)]);
var inst_39289 = inst_39296;
var state_39309__$1 = (function (){var statearr_39320 = state_39309;
(statearr_39320[(7)] = inst_39289);

return statearr_39320;
})();
var statearr_39321_40738 = state_39309__$1;
(statearr_39321_40738[(2)] = null);

(statearr_39321_40738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (5))){
var inst_39289 = (state_39309[(7)]);
var state_39309__$1 = state_39309;
var statearr_39322_40741 = state_39309__$1;
(statearr_39322_40741[(2)] = inst_39289);

(statearr_39322_40741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (10))){
var inst_39303 = (state_39309[(2)]);
var state_39309__$1 = state_39309;
var statearr_39323_40742 = state_39309__$1;
(statearr_39323_40742[(2)] = inst_39303);

(statearr_39323_40742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39310 === (8))){
var inst_39296 = (state_39309[(9)]);
var inst_39299 = cljs.core.deref(inst_39296);
var state_39309__$1 = state_39309;
var statearr_39324_40746 = state_39309__$1;
(statearr_39324_40746[(2)] = inst_39299);

(statearr_39324_40746[(1)] = (10));


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
});})(c__38930__auto__))
;
return ((function (switch__38829__auto__,c__38930__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38830__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38830__auto____0 = (function (){
var statearr_39325 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39325[(0)] = cljs$core$async$reduce_$_state_machine__38830__auto__);

(statearr_39325[(1)] = (1));

return statearr_39325;
});
var cljs$core$async$reduce_$_state_machine__38830__auto____1 = (function (state_39309){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39309);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39326){if((e39326 instanceof Object)){
var ex__38833__auto__ = e39326;
var statearr_39327_40748 = state_39309;
(statearr_39327_40748[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39326;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40751 = state_39309;
state_39309 = G__40751;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38830__auto__ = function(state_39309){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38830__auto____1.call(this,state_39309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38830__auto____0;
cljs$core$async$reduce_$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38830__auto____1;
return cljs$core$async$reduce_$_state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto__))
})();
var state__38932__auto__ = (function (){var statearr_39328 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39328[(6)] = c__38930__auto__);

return statearr_39328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto__))
);

return c__38930__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__38930__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto__,f__$1){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto__,f__$1){
return (function (state_39334){
var state_val_39335 = (state_39334[(1)]);
if((state_val_39335 === (1))){
var inst_39329 = cljs.core.async.reduce(f__$1,init,ch);
var state_39334__$1 = state_39334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39334__$1,(2),inst_39329);
} else {
if((state_val_39335 === (2))){
var inst_39331 = (state_39334[(2)]);
var inst_39332 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_39331) : f__$1.call(null,inst_39331));
var state_39334__$1 = state_39334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39334__$1,inst_39332);
} else {
return null;
}
}
});})(c__38930__auto__,f__$1))
;
return ((function (switch__38829__auto__,c__38930__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38830__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38830__auto____0 = (function (){
var statearr_39336 = [null,null,null,null,null,null,null];
(statearr_39336[(0)] = cljs$core$async$transduce_$_state_machine__38830__auto__);

(statearr_39336[(1)] = (1));

return statearr_39336;
});
var cljs$core$async$transduce_$_state_machine__38830__auto____1 = (function (state_39334){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39334);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39337){if((e39337 instanceof Object)){
var ex__38833__auto__ = e39337;
var statearr_39338_40753 = state_39334;
(statearr_39338_40753[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40757 = state_39334;
state_39334 = G__40757;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38830__auto__ = function(state_39334){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38830__auto____1.call(this,state_39334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38830__auto____0;
cljs$core$async$transduce_$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38830__auto____1;
return cljs$core$async$transduce_$_state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto__,f__$1))
})();
var state__38932__auto__ = (function (){var statearr_39339 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39339[(6)] = c__38930__auto__);

return statearr_39339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto__,f__$1))
);

return c__38930__auto__;
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
var G__39341 = arguments.length;
switch (G__39341) {
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
var c__38930__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto__){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto__){
return (function (state_39366){
var state_val_39367 = (state_39366[(1)]);
if((state_val_39367 === (7))){
var inst_39348 = (state_39366[(2)]);
var state_39366__$1 = state_39366;
var statearr_39368_40766 = state_39366__$1;
(statearr_39368_40766[(2)] = inst_39348);

(statearr_39368_40766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (1))){
var inst_39342 = cljs.core.seq(coll);
var inst_39343 = inst_39342;
var state_39366__$1 = (function (){var statearr_39369 = state_39366;
(statearr_39369[(7)] = inst_39343);

return statearr_39369;
})();
var statearr_39370_40771 = state_39366__$1;
(statearr_39370_40771[(2)] = null);

(statearr_39370_40771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (4))){
var inst_39343 = (state_39366[(7)]);
var inst_39346 = cljs.core.first(inst_39343);
var state_39366__$1 = state_39366;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39366__$1,(7),ch,inst_39346);
} else {
if((state_val_39367 === (13))){
var inst_39360 = (state_39366[(2)]);
var state_39366__$1 = state_39366;
var statearr_39371_40778 = state_39366__$1;
(statearr_39371_40778[(2)] = inst_39360);

(statearr_39371_40778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (6))){
var inst_39351 = (state_39366[(2)]);
var state_39366__$1 = state_39366;
if(cljs.core.truth_(inst_39351)){
var statearr_39372_40779 = state_39366__$1;
(statearr_39372_40779[(1)] = (8));

} else {
var statearr_39373_40780 = state_39366__$1;
(statearr_39373_40780[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (3))){
var inst_39364 = (state_39366[(2)]);
var state_39366__$1 = state_39366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39366__$1,inst_39364);
} else {
if((state_val_39367 === (12))){
var state_39366__$1 = state_39366;
var statearr_39374_40781 = state_39366__$1;
(statearr_39374_40781[(2)] = null);

(statearr_39374_40781[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (2))){
var inst_39343 = (state_39366[(7)]);
var state_39366__$1 = state_39366;
if(cljs.core.truth_(inst_39343)){
var statearr_39375_40782 = state_39366__$1;
(statearr_39375_40782[(1)] = (4));

} else {
var statearr_39376_40783 = state_39366__$1;
(statearr_39376_40783[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (11))){
var inst_39357 = cljs.core.async.close_BANG_(ch);
var state_39366__$1 = state_39366;
var statearr_39377_40784 = state_39366__$1;
(statearr_39377_40784[(2)] = inst_39357);

(statearr_39377_40784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (9))){
var state_39366__$1 = state_39366;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39378_40785 = state_39366__$1;
(statearr_39378_40785[(1)] = (11));

} else {
var statearr_39379_40786 = state_39366__$1;
(statearr_39379_40786[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (5))){
var inst_39343 = (state_39366[(7)]);
var state_39366__$1 = state_39366;
var statearr_39380_40787 = state_39366__$1;
(statearr_39380_40787[(2)] = inst_39343);

(statearr_39380_40787[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (10))){
var inst_39362 = (state_39366[(2)]);
var state_39366__$1 = state_39366;
var statearr_39381_40788 = state_39366__$1;
(statearr_39381_40788[(2)] = inst_39362);

(statearr_39381_40788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39367 === (8))){
var inst_39343 = (state_39366[(7)]);
var inst_39353 = cljs.core.next(inst_39343);
var inst_39343__$1 = inst_39353;
var state_39366__$1 = (function (){var statearr_39382 = state_39366;
(statearr_39382[(7)] = inst_39343__$1);

return statearr_39382;
})();
var statearr_39383_40789 = state_39366__$1;
(statearr_39383_40789[(2)] = null);

(statearr_39383_40789[(1)] = (2));


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
});})(c__38930__auto__))
;
return ((function (switch__38829__auto__,c__38930__auto__){
return (function() {
var cljs$core$async$state_machine__38830__auto__ = null;
var cljs$core$async$state_machine__38830__auto____0 = (function (){
var statearr_39384 = [null,null,null,null,null,null,null,null];
(statearr_39384[(0)] = cljs$core$async$state_machine__38830__auto__);

(statearr_39384[(1)] = (1));

return statearr_39384;
});
var cljs$core$async$state_machine__38830__auto____1 = (function (state_39366){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39366);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39385){if((e39385 instanceof Object)){
var ex__38833__auto__ = e39385;
var statearr_39386_40796 = state_39366;
(statearr_39386_40796[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39385;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40797 = state_39366;
state_39366 = G__40797;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$state_machine__38830__auto__ = function(state_39366){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38830__auto____1.call(this,state_39366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38830__auto____0;
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38830__auto____1;
return cljs$core$async$state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto__))
})();
var state__38932__auto__ = (function (){var statearr_39387 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39387[(6)] = c__38930__auto__);

return statearr_39387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto__))
);

return c__38930__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39388 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39388 = (function (ch,cs,meta39389){
this.ch = ch;
this.cs = cs;
this.meta39389 = meta39389;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39390,meta39389__$1){
var self__ = this;
var _39390__$1 = this;
return (new cljs.core.async.t_cljs$core$async39388(self__.ch,self__.cs,meta39389__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39390){
var self__ = this;
var _39390__$1 = this;
return self__.meta39389;
});})(cs))
;

cljs.core.async.t_cljs$core$async39388.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39388.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39388.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39388.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39388.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39388.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39388.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39389","meta39389",1305116798,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39388.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39388.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39388";

cljs.core.async.t_cljs$core$async39388.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39388");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39388.
 */
cljs.core.async.__GT_t_cljs$core$async39388 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39388(ch__$1,cs__$1,meta39389){
return (new cljs.core.async.t_cljs$core$async39388(ch__$1,cs__$1,meta39389));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39388(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38930__auto___40810 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___40810,cs,m,dchan,dctr,done){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___40810,cs,m,dchan,dctr,done){
return (function (state_39525){
var state_val_39526 = (state_39525[(1)]);
if((state_val_39526 === (7))){
var inst_39521 = (state_39525[(2)]);
var state_39525__$1 = state_39525;
var statearr_39527_40811 = state_39525__$1;
(statearr_39527_40811[(2)] = inst_39521);

(statearr_39527_40811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (20))){
var inst_39424 = (state_39525[(7)]);
var inst_39436 = cljs.core.first(inst_39424);
var inst_39437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39436,(0),null);
var inst_39438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39436,(1),null);
var state_39525__$1 = (function (){var statearr_39528 = state_39525;
(statearr_39528[(8)] = inst_39437);

return statearr_39528;
})();
if(cljs.core.truth_(inst_39438)){
var statearr_39529_40812 = state_39525__$1;
(statearr_39529_40812[(1)] = (22));

} else {
var statearr_39530_40813 = state_39525__$1;
(statearr_39530_40813[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (27))){
var inst_39393 = (state_39525[(9)]);
var inst_39466 = (state_39525[(10)]);
var inst_39473 = (state_39525[(11)]);
var inst_39468 = (state_39525[(12)]);
var inst_39473__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39466,inst_39468);
var inst_39474 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39473__$1,inst_39393,done);
var state_39525__$1 = (function (){var statearr_39531 = state_39525;
(statearr_39531[(11)] = inst_39473__$1);

return statearr_39531;
})();
if(cljs.core.truth_(inst_39474)){
var statearr_39532_40814 = state_39525__$1;
(statearr_39532_40814[(1)] = (30));

} else {
var statearr_39533_40815 = state_39525__$1;
(statearr_39533_40815[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (1))){
var state_39525__$1 = state_39525;
var statearr_39534_40816 = state_39525__$1;
(statearr_39534_40816[(2)] = null);

(statearr_39534_40816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (24))){
var inst_39424 = (state_39525[(7)]);
var inst_39443 = (state_39525[(2)]);
var inst_39444 = cljs.core.next(inst_39424);
var inst_39402 = inst_39444;
var inst_39403 = null;
var inst_39404 = (0);
var inst_39405 = (0);
var state_39525__$1 = (function (){var statearr_39535 = state_39525;
(statearr_39535[(13)] = inst_39402);

(statearr_39535[(14)] = inst_39443);

(statearr_39535[(15)] = inst_39404);

(statearr_39535[(16)] = inst_39403);

(statearr_39535[(17)] = inst_39405);

return statearr_39535;
})();
var statearr_39536_40817 = state_39525__$1;
(statearr_39536_40817[(2)] = null);

(statearr_39536_40817[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (39))){
var state_39525__$1 = state_39525;
var statearr_39540_40818 = state_39525__$1;
(statearr_39540_40818[(2)] = null);

(statearr_39540_40818[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (4))){
var inst_39393 = (state_39525[(9)]);
var inst_39393__$1 = (state_39525[(2)]);
var inst_39394 = (inst_39393__$1 == null);
var state_39525__$1 = (function (){var statearr_39541 = state_39525;
(statearr_39541[(9)] = inst_39393__$1);

return statearr_39541;
})();
if(cljs.core.truth_(inst_39394)){
var statearr_39542_40819 = state_39525__$1;
(statearr_39542_40819[(1)] = (5));

} else {
var statearr_39543_40820 = state_39525__$1;
(statearr_39543_40820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (15))){
var inst_39402 = (state_39525[(13)]);
var inst_39404 = (state_39525[(15)]);
var inst_39403 = (state_39525[(16)]);
var inst_39405 = (state_39525[(17)]);
var inst_39420 = (state_39525[(2)]);
var inst_39421 = (inst_39405 + (1));
var tmp39537 = inst_39402;
var tmp39538 = inst_39404;
var tmp39539 = inst_39403;
var inst_39402__$1 = tmp39537;
var inst_39403__$1 = tmp39539;
var inst_39404__$1 = tmp39538;
var inst_39405__$1 = inst_39421;
var state_39525__$1 = (function (){var statearr_39544 = state_39525;
(statearr_39544[(13)] = inst_39402__$1);

(statearr_39544[(18)] = inst_39420);

(statearr_39544[(15)] = inst_39404__$1);

(statearr_39544[(16)] = inst_39403__$1);

(statearr_39544[(17)] = inst_39405__$1);

return statearr_39544;
})();
var statearr_39545_40822 = state_39525__$1;
(statearr_39545_40822[(2)] = null);

(statearr_39545_40822[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (21))){
var inst_39447 = (state_39525[(2)]);
var state_39525__$1 = state_39525;
var statearr_39549_40823 = state_39525__$1;
(statearr_39549_40823[(2)] = inst_39447);

(statearr_39549_40823[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (31))){
var inst_39473 = (state_39525[(11)]);
var inst_39477 = done(null);
var inst_39478 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39473);
var state_39525__$1 = (function (){var statearr_39550 = state_39525;
(statearr_39550[(19)] = inst_39477);

return statearr_39550;
})();
var statearr_39551_40825 = state_39525__$1;
(statearr_39551_40825[(2)] = inst_39478);

(statearr_39551_40825[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (32))){
var inst_39465 = (state_39525[(20)]);
var inst_39467 = (state_39525[(21)]);
var inst_39466 = (state_39525[(10)]);
var inst_39468 = (state_39525[(12)]);
var inst_39480 = (state_39525[(2)]);
var inst_39481 = (inst_39468 + (1));
var tmp39546 = inst_39465;
var tmp39547 = inst_39467;
var tmp39548 = inst_39466;
var inst_39465__$1 = tmp39546;
var inst_39466__$1 = tmp39548;
var inst_39467__$1 = tmp39547;
var inst_39468__$1 = inst_39481;
var state_39525__$1 = (function (){var statearr_39552 = state_39525;
(statearr_39552[(22)] = inst_39480);

(statearr_39552[(20)] = inst_39465__$1);

(statearr_39552[(21)] = inst_39467__$1);

(statearr_39552[(10)] = inst_39466__$1);

(statearr_39552[(12)] = inst_39468__$1);

return statearr_39552;
})();
var statearr_39553_40830 = state_39525__$1;
(statearr_39553_40830[(2)] = null);

(statearr_39553_40830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (40))){
var inst_39493 = (state_39525[(23)]);
var inst_39497 = done(null);
var inst_39498 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_39493);
var state_39525__$1 = (function (){var statearr_39554 = state_39525;
(statearr_39554[(24)] = inst_39497);

return statearr_39554;
})();
var statearr_39555_40831 = state_39525__$1;
(statearr_39555_40831[(2)] = inst_39498);

(statearr_39555_40831[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (33))){
var inst_39484 = (state_39525[(25)]);
var inst_39486 = cljs.core.chunked_seq_QMARK_(inst_39484);
var state_39525__$1 = state_39525;
if(inst_39486){
var statearr_39556_40832 = state_39525__$1;
(statearr_39556_40832[(1)] = (36));

} else {
var statearr_39557_40833 = state_39525__$1;
(statearr_39557_40833[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (13))){
var inst_39414 = (state_39525[(26)]);
var inst_39417 = cljs.core.async.close_BANG_(inst_39414);
var state_39525__$1 = state_39525;
var statearr_39558_40834 = state_39525__$1;
(statearr_39558_40834[(2)] = inst_39417);

(statearr_39558_40834[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (22))){
var inst_39437 = (state_39525[(8)]);
var inst_39440 = cljs.core.async.close_BANG_(inst_39437);
var state_39525__$1 = state_39525;
var statearr_39559_40835 = state_39525__$1;
(statearr_39559_40835[(2)] = inst_39440);

(statearr_39559_40835[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (36))){
var inst_39484 = (state_39525[(25)]);
var inst_39488 = cljs.core.chunk_first(inst_39484);
var inst_39489 = cljs.core.chunk_rest(inst_39484);
var inst_39490 = cljs.core.count(inst_39488);
var inst_39465 = inst_39489;
var inst_39466 = inst_39488;
var inst_39467 = inst_39490;
var inst_39468 = (0);
var state_39525__$1 = (function (){var statearr_39560 = state_39525;
(statearr_39560[(20)] = inst_39465);

(statearr_39560[(21)] = inst_39467);

(statearr_39560[(10)] = inst_39466);

(statearr_39560[(12)] = inst_39468);

return statearr_39560;
})();
var statearr_39561_40839 = state_39525__$1;
(statearr_39561_40839[(2)] = null);

(statearr_39561_40839[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (41))){
var inst_39484 = (state_39525[(25)]);
var inst_39500 = (state_39525[(2)]);
var inst_39501 = cljs.core.next(inst_39484);
var inst_39465 = inst_39501;
var inst_39466 = null;
var inst_39467 = (0);
var inst_39468 = (0);
var state_39525__$1 = (function (){var statearr_39562 = state_39525;
(statearr_39562[(20)] = inst_39465);

(statearr_39562[(21)] = inst_39467);

(statearr_39562[(10)] = inst_39466);

(statearr_39562[(27)] = inst_39500);

(statearr_39562[(12)] = inst_39468);

return statearr_39562;
})();
var statearr_39563_40841 = state_39525__$1;
(statearr_39563_40841[(2)] = null);

(statearr_39563_40841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (43))){
var state_39525__$1 = state_39525;
var statearr_39564_40842 = state_39525__$1;
(statearr_39564_40842[(2)] = null);

(statearr_39564_40842[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (29))){
var inst_39509 = (state_39525[(2)]);
var state_39525__$1 = state_39525;
var statearr_39565_40843 = state_39525__$1;
(statearr_39565_40843[(2)] = inst_39509);

(statearr_39565_40843[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (44))){
var inst_39518 = (state_39525[(2)]);
var state_39525__$1 = (function (){var statearr_39566 = state_39525;
(statearr_39566[(28)] = inst_39518);

return statearr_39566;
})();
var statearr_39567_40844 = state_39525__$1;
(statearr_39567_40844[(2)] = null);

(statearr_39567_40844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (6))){
var inst_39457 = (state_39525[(29)]);
var inst_39456 = cljs.core.deref(cs);
var inst_39457__$1 = cljs.core.keys(inst_39456);
var inst_39458 = cljs.core.count(inst_39457__$1);
var inst_39459 = cljs.core.reset_BANG_(dctr,inst_39458);
var inst_39464 = cljs.core.seq(inst_39457__$1);
var inst_39465 = inst_39464;
var inst_39466 = null;
var inst_39467 = (0);
var inst_39468 = (0);
var state_39525__$1 = (function (){var statearr_39568 = state_39525;
(statearr_39568[(30)] = inst_39459);

(statearr_39568[(29)] = inst_39457__$1);

(statearr_39568[(20)] = inst_39465);

(statearr_39568[(21)] = inst_39467);

(statearr_39568[(10)] = inst_39466);

(statearr_39568[(12)] = inst_39468);

return statearr_39568;
})();
var statearr_39569_40847 = state_39525__$1;
(statearr_39569_40847[(2)] = null);

(statearr_39569_40847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (28))){
var inst_39484 = (state_39525[(25)]);
var inst_39465 = (state_39525[(20)]);
var inst_39484__$1 = cljs.core.seq(inst_39465);
var state_39525__$1 = (function (){var statearr_39570 = state_39525;
(statearr_39570[(25)] = inst_39484__$1);

return statearr_39570;
})();
if(inst_39484__$1){
var statearr_39571_40848 = state_39525__$1;
(statearr_39571_40848[(1)] = (33));

} else {
var statearr_39572_40849 = state_39525__$1;
(statearr_39572_40849[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (25))){
var inst_39467 = (state_39525[(21)]);
var inst_39468 = (state_39525[(12)]);
var inst_39470 = (inst_39468 < inst_39467);
var inst_39471 = inst_39470;
var state_39525__$1 = state_39525;
if(cljs.core.truth_(inst_39471)){
var statearr_39573_40850 = state_39525__$1;
(statearr_39573_40850[(1)] = (27));

} else {
var statearr_39574_40851 = state_39525__$1;
(statearr_39574_40851[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (34))){
var state_39525__$1 = state_39525;
var statearr_39575_40852 = state_39525__$1;
(statearr_39575_40852[(2)] = null);

(statearr_39575_40852[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (17))){
var state_39525__$1 = state_39525;
var statearr_39576_40853 = state_39525__$1;
(statearr_39576_40853[(2)] = null);

(statearr_39576_40853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (3))){
var inst_39523 = (state_39525[(2)]);
var state_39525__$1 = state_39525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39525__$1,inst_39523);
} else {
if((state_val_39526 === (12))){
var inst_39452 = (state_39525[(2)]);
var state_39525__$1 = state_39525;
var statearr_39577_40854 = state_39525__$1;
(statearr_39577_40854[(2)] = inst_39452);

(statearr_39577_40854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (2))){
var state_39525__$1 = state_39525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39525__$1,(4),ch);
} else {
if((state_val_39526 === (23))){
var state_39525__$1 = state_39525;
var statearr_39578_40855 = state_39525__$1;
(statearr_39578_40855[(2)] = null);

(statearr_39578_40855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (35))){
var inst_39507 = (state_39525[(2)]);
var state_39525__$1 = state_39525;
var statearr_39579_40858 = state_39525__$1;
(statearr_39579_40858[(2)] = inst_39507);

(statearr_39579_40858[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (19))){
var inst_39424 = (state_39525[(7)]);
var inst_39428 = cljs.core.chunk_first(inst_39424);
var inst_39429 = cljs.core.chunk_rest(inst_39424);
var inst_39430 = cljs.core.count(inst_39428);
var inst_39402 = inst_39429;
var inst_39403 = inst_39428;
var inst_39404 = inst_39430;
var inst_39405 = (0);
var state_39525__$1 = (function (){var statearr_39580 = state_39525;
(statearr_39580[(13)] = inst_39402);

(statearr_39580[(15)] = inst_39404);

(statearr_39580[(16)] = inst_39403);

(statearr_39580[(17)] = inst_39405);

return statearr_39580;
})();
var statearr_39581_40859 = state_39525__$1;
(statearr_39581_40859[(2)] = null);

(statearr_39581_40859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (11))){
var inst_39402 = (state_39525[(13)]);
var inst_39424 = (state_39525[(7)]);
var inst_39424__$1 = cljs.core.seq(inst_39402);
var state_39525__$1 = (function (){var statearr_39582 = state_39525;
(statearr_39582[(7)] = inst_39424__$1);

return statearr_39582;
})();
if(inst_39424__$1){
var statearr_39583_40860 = state_39525__$1;
(statearr_39583_40860[(1)] = (16));

} else {
var statearr_39584_40861 = state_39525__$1;
(statearr_39584_40861[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (9))){
var inst_39454 = (state_39525[(2)]);
var state_39525__$1 = state_39525;
var statearr_39585_40862 = state_39525__$1;
(statearr_39585_40862[(2)] = inst_39454);

(statearr_39585_40862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (5))){
var inst_39400 = cljs.core.deref(cs);
var inst_39401 = cljs.core.seq(inst_39400);
var inst_39402 = inst_39401;
var inst_39403 = null;
var inst_39404 = (0);
var inst_39405 = (0);
var state_39525__$1 = (function (){var statearr_39586 = state_39525;
(statearr_39586[(13)] = inst_39402);

(statearr_39586[(15)] = inst_39404);

(statearr_39586[(16)] = inst_39403);

(statearr_39586[(17)] = inst_39405);

return statearr_39586;
})();
var statearr_39587_40863 = state_39525__$1;
(statearr_39587_40863[(2)] = null);

(statearr_39587_40863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (14))){
var state_39525__$1 = state_39525;
var statearr_39588_40864 = state_39525__$1;
(statearr_39588_40864[(2)] = null);

(statearr_39588_40864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (45))){
var inst_39515 = (state_39525[(2)]);
var state_39525__$1 = state_39525;
var statearr_39589_40865 = state_39525__$1;
(statearr_39589_40865[(2)] = inst_39515);

(statearr_39589_40865[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (26))){
var inst_39457 = (state_39525[(29)]);
var inst_39511 = (state_39525[(2)]);
var inst_39512 = cljs.core.seq(inst_39457);
var state_39525__$1 = (function (){var statearr_39590 = state_39525;
(statearr_39590[(31)] = inst_39511);

return statearr_39590;
})();
if(inst_39512){
var statearr_39591_40866 = state_39525__$1;
(statearr_39591_40866[(1)] = (42));

} else {
var statearr_39592_40867 = state_39525__$1;
(statearr_39592_40867[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (16))){
var inst_39424 = (state_39525[(7)]);
var inst_39426 = cljs.core.chunked_seq_QMARK_(inst_39424);
var state_39525__$1 = state_39525;
if(inst_39426){
var statearr_39593_40868 = state_39525__$1;
(statearr_39593_40868[(1)] = (19));

} else {
var statearr_39594_40869 = state_39525__$1;
(statearr_39594_40869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (38))){
var inst_39504 = (state_39525[(2)]);
var state_39525__$1 = state_39525;
var statearr_39595_40870 = state_39525__$1;
(statearr_39595_40870[(2)] = inst_39504);

(statearr_39595_40870[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (30))){
var state_39525__$1 = state_39525;
var statearr_39596_40872 = state_39525__$1;
(statearr_39596_40872[(2)] = null);

(statearr_39596_40872[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (10))){
var inst_39403 = (state_39525[(16)]);
var inst_39405 = (state_39525[(17)]);
var inst_39413 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39403,inst_39405);
var inst_39414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39413,(0),null);
var inst_39415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39413,(1),null);
var state_39525__$1 = (function (){var statearr_39597 = state_39525;
(statearr_39597[(26)] = inst_39414);

return statearr_39597;
})();
if(cljs.core.truth_(inst_39415)){
var statearr_39598_40873 = state_39525__$1;
(statearr_39598_40873[(1)] = (13));

} else {
var statearr_39599_40874 = state_39525__$1;
(statearr_39599_40874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (18))){
var inst_39450 = (state_39525[(2)]);
var state_39525__$1 = state_39525;
var statearr_39600_40875 = state_39525__$1;
(statearr_39600_40875[(2)] = inst_39450);

(statearr_39600_40875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (42))){
var state_39525__$1 = state_39525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39525__$1,(45),dchan);
} else {
if((state_val_39526 === (37))){
var inst_39484 = (state_39525[(25)]);
var inst_39493 = (state_39525[(23)]);
var inst_39393 = (state_39525[(9)]);
var inst_39493__$1 = cljs.core.first(inst_39484);
var inst_39494 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_39493__$1,inst_39393,done);
var state_39525__$1 = (function (){var statearr_39601 = state_39525;
(statearr_39601[(23)] = inst_39493__$1);

return statearr_39601;
})();
if(cljs.core.truth_(inst_39494)){
var statearr_39602_40880 = state_39525__$1;
(statearr_39602_40880[(1)] = (39));

} else {
var statearr_39603_40881 = state_39525__$1;
(statearr_39603_40881[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39526 === (8))){
var inst_39404 = (state_39525[(15)]);
var inst_39405 = (state_39525[(17)]);
var inst_39407 = (inst_39405 < inst_39404);
var inst_39408 = inst_39407;
var state_39525__$1 = state_39525;
if(cljs.core.truth_(inst_39408)){
var statearr_39604_40882 = state_39525__$1;
(statearr_39604_40882[(1)] = (10));

} else {
var statearr_39605_40883 = state_39525__$1;
(statearr_39605_40883[(1)] = (11));

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
});})(c__38930__auto___40810,cs,m,dchan,dctr,done))
;
return ((function (switch__38829__auto__,c__38930__auto___40810,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38830__auto__ = null;
var cljs$core$async$mult_$_state_machine__38830__auto____0 = (function (){
var statearr_39606 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39606[(0)] = cljs$core$async$mult_$_state_machine__38830__auto__);

(statearr_39606[(1)] = (1));

return statearr_39606;
});
var cljs$core$async$mult_$_state_machine__38830__auto____1 = (function (state_39525){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39525);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39607){if((e39607 instanceof Object)){
var ex__38833__auto__ = e39607;
var statearr_39608_40884 = state_39525;
(statearr_39608_40884[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39607;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40885 = state_39525;
state_39525 = G__40885;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38830__auto__ = function(state_39525){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38830__auto____1.call(this,state_39525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38830__auto____0;
cljs$core$async$mult_$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38830__auto____1;
return cljs$core$async$mult_$_state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___40810,cs,m,dchan,dctr,done))
})();
var state__38932__auto__ = (function (){var statearr_39609 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39609[(6)] = c__38930__auto___40810);

return statearr_39609;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___40810,cs,m,dchan,dctr,done))
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
var G__39611 = arguments.length;
switch (G__39611) {
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
var len__4730__auto___40910 = arguments.length;
var i__4731__auto___40911 = (0);
while(true){
if((i__4731__auto___40911 < len__4730__auto___40910)){
args__4736__auto__.push((arguments[i__4731__auto___40911]));

var G__40912 = (i__4731__auto___40911 + (1));
i__4731__auto___40911 = G__40912;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39616){
var map__39617 = p__39616;
var map__39617__$1 = (((((!((map__39617 == null))))?(((((map__39617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39617):map__39617);
var opts = map__39617__$1;
var statearr_39619_40916 = state;
(statearr_39619_40916[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__39617,map__39617__$1,opts){
return (function (val){
var statearr_39620_40917 = state;
(statearr_39620_40917[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__39617,map__39617__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_39621_40921 = state;
(statearr_39621_40921[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39612){
var G__39613 = cljs.core.first(seq39612);
var seq39612__$1 = cljs.core.next(seq39612);
var G__39614 = cljs.core.first(seq39612__$1);
var seq39612__$2 = cljs.core.next(seq39612__$1);
var G__39615 = cljs.core.first(seq39612__$2);
var seq39612__$3 = cljs.core.next(seq39612__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39613,G__39614,G__39615,seq39612__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39622 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39623){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39623 = meta39623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39624,meta39623__$1){
var self__ = this;
var _39624__$1 = this;
return (new cljs.core.async.t_cljs$core$async39622(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39623__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39624){
var self__ = this;
var _39624__$1 = this;
return self__.meta39623;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39622.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39622.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39622.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39622.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39622.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39622.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39622.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async39622.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39623","meta39623",107419943,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39622.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39622";

cljs.core.async.t_cljs$core$async39622.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39622");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39622.
 */
cljs.core.async.__GT_t_cljs$core$async39622 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39622(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39623){
return (new cljs.core.async.t_cljs$core$async39622(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39623));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39622(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38930__auto___40939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___40939,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___40939,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39726){
var state_val_39727 = (state_39726[(1)]);
if((state_val_39727 === (7))){
var inst_39641 = (state_39726[(2)]);
var state_39726__$1 = state_39726;
var statearr_39728_40940 = state_39726__$1;
(statearr_39728_40940[(2)] = inst_39641);

(statearr_39728_40940[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (20))){
var inst_39653 = (state_39726[(7)]);
var state_39726__$1 = state_39726;
var statearr_39729_40941 = state_39726__$1;
(statearr_39729_40941[(2)] = inst_39653);

(statearr_39729_40941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (27))){
var state_39726__$1 = state_39726;
var statearr_39730_40942 = state_39726__$1;
(statearr_39730_40942[(2)] = null);

(statearr_39730_40942[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (1))){
var inst_39628 = (state_39726[(8)]);
var inst_39628__$1 = calc_state();
var inst_39630 = (inst_39628__$1 == null);
var inst_39631 = cljs.core.not(inst_39630);
var state_39726__$1 = (function (){var statearr_39731 = state_39726;
(statearr_39731[(8)] = inst_39628__$1);

return statearr_39731;
})();
if(inst_39631){
var statearr_39732_40943 = state_39726__$1;
(statearr_39732_40943[(1)] = (2));

} else {
var statearr_39733_40945 = state_39726__$1;
(statearr_39733_40945[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (24))){
var inst_39700 = (state_39726[(9)]);
var inst_39686 = (state_39726[(10)]);
var inst_39677 = (state_39726[(11)]);
var inst_39700__$1 = (inst_39677.cljs$core$IFn$_invoke$arity$1 ? inst_39677.cljs$core$IFn$_invoke$arity$1(inst_39686) : inst_39677.call(null,inst_39686));
var state_39726__$1 = (function (){var statearr_39734 = state_39726;
(statearr_39734[(9)] = inst_39700__$1);

return statearr_39734;
})();
if(cljs.core.truth_(inst_39700__$1)){
var statearr_39735_40946 = state_39726__$1;
(statearr_39735_40946[(1)] = (29));

} else {
var statearr_39736_40947 = state_39726__$1;
(statearr_39736_40947[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (4))){
var inst_39644 = (state_39726[(2)]);
var state_39726__$1 = state_39726;
if(cljs.core.truth_(inst_39644)){
var statearr_39737_40948 = state_39726__$1;
(statearr_39737_40948[(1)] = (8));

} else {
var statearr_39738_40949 = state_39726__$1;
(statearr_39738_40949[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (15))){
var inst_39671 = (state_39726[(2)]);
var state_39726__$1 = state_39726;
if(cljs.core.truth_(inst_39671)){
var statearr_39739_40950 = state_39726__$1;
(statearr_39739_40950[(1)] = (19));

} else {
var statearr_39740_40951 = state_39726__$1;
(statearr_39740_40951[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (21))){
var inst_39676 = (state_39726[(12)]);
var inst_39676__$1 = (state_39726[(2)]);
var inst_39677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39676__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39676__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39676__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39726__$1 = (function (){var statearr_39741 = state_39726;
(statearr_39741[(12)] = inst_39676__$1);

(statearr_39741[(13)] = inst_39678);

(statearr_39741[(11)] = inst_39677);

return statearr_39741;
})();
return cljs.core.async.ioc_alts_BANG_(state_39726__$1,(22),inst_39679);
} else {
if((state_val_39727 === (31))){
var inst_39708 = (state_39726[(2)]);
var state_39726__$1 = state_39726;
if(cljs.core.truth_(inst_39708)){
var statearr_39742_40957 = state_39726__$1;
(statearr_39742_40957[(1)] = (32));

} else {
var statearr_39743_40958 = state_39726__$1;
(statearr_39743_40958[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (32))){
var inst_39685 = (state_39726[(14)]);
var state_39726__$1 = state_39726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39726__$1,(35),out,inst_39685);
} else {
if((state_val_39727 === (33))){
var inst_39676 = (state_39726[(12)]);
var inst_39653 = inst_39676;
var state_39726__$1 = (function (){var statearr_39744 = state_39726;
(statearr_39744[(7)] = inst_39653);

return statearr_39744;
})();
var statearr_39745_40961 = state_39726__$1;
(statearr_39745_40961[(2)] = null);

(statearr_39745_40961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (13))){
var inst_39653 = (state_39726[(7)]);
var inst_39660 = inst_39653.cljs$lang$protocol_mask$partition0$;
var inst_39661 = (inst_39660 & (64));
var inst_39662 = inst_39653.cljs$core$ISeq$;
var inst_39663 = (cljs.core.PROTOCOL_SENTINEL === inst_39662);
var inst_39664 = ((inst_39661) || (inst_39663));
var state_39726__$1 = state_39726;
if(cljs.core.truth_(inst_39664)){
var statearr_39746_40962 = state_39726__$1;
(statearr_39746_40962[(1)] = (16));

} else {
var statearr_39747_40963 = state_39726__$1;
(statearr_39747_40963[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (22))){
var inst_39685 = (state_39726[(14)]);
var inst_39686 = (state_39726[(10)]);
var inst_39684 = (state_39726[(2)]);
var inst_39685__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39684,(0),null);
var inst_39686__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39684,(1),null);
var inst_39687 = (inst_39685__$1 == null);
var inst_39688 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_39686__$1,change);
var inst_39689 = ((inst_39687) || (inst_39688));
var state_39726__$1 = (function (){var statearr_39748 = state_39726;
(statearr_39748[(14)] = inst_39685__$1);

(statearr_39748[(10)] = inst_39686__$1);

return statearr_39748;
})();
if(cljs.core.truth_(inst_39689)){
var statearr_39749_40964 = state_39726__$1;
(statearr_39749_40964[(1)] = (23));

} else {
var statearr_39750_40965 = state_39726__$1;
(statearr_39750_40965[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (36))){
var inst_39676 = (state_39726[(12)]);
var inst_39653 = inst_39676;
var state_39726__$1 = (function (){var statearr_39751 = state_39726;
(statearr_39751[(7)] = inst_39653);

return statearr_39751;
})();
var statearr_39752_40966 = state_39726__$1;
(statearr_39752_40966[(2)] = null);

(statearr_39752_40966[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (29))){
var inst_39700 = (state_39726[(9)]);
var state_39726__$1 = state_39726;
var statearr_39753_40967 = state_39726__$1;
(statearr_39753_40967[(2)] = inst_39700);

(statearr_39753_40967[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (6))){
var state_39726__$1 = state_39726;
var statearr_39754_40968 = state_39726__$1;
(statearr_39754_40968[(2)] = false);

(statearr_39754_40968[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (28))){
var inst_39696 = (state_39726[(2)]);
var inst_39697 = calc_state();
var inst_39653 = inst_39697;
var state_39726__$1 = (function (){var statearr_39755 = state_39726;
(statearr_39755[(7)] = inst_39653);

(statearr_39755[(15)] = inst_39696);

return statearr_39755;
})();
var statearr_39756_40970 = state_39726__$1;
(statearr_39756_40970[(2)] = null);

(statearr_39756_40970[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (25))){
var inst_39722 = (state_39726[(2)]);
var state_39726__$1 = state_39726;
var statearr_39757_40971 = state_39726__$1;
(statearr_39757_40971[(2)] = inst_39722);

(statearr_39757_40971[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (34))){
var inst_39720 = (state_39726[(2)]);
var state_39726__$1 = state_39726;
var statearr_39758_40972 = state_39726__$1;
(statearr_39758_40972[(2)] = inst_39720);

(statearr_39758_40972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (17))){
var state_39726__$1 = state_39726;
var statearr_39759_40974 = state_39726__$1;
(statearr_39759_40974[(2)] = false);

(statearr_39759_40974[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (3))){
var state_39726__$1 = state_39726;
var statearr_39760_40975 = state_39726__$1;
(statearr_39760_40975[(2)] = false);

(statearr_39760_40975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (12))){
var inst_39724 = (state_39726[(2)]);
var state_39726__$1 = state_39726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39726__$1,inst_39724);
} else {
if((state_val_39727 === (2))){
var inst_39628 = (state_39726[(8)]);
var inst_39633 = inst_39628.cljs$lang$protocol_mask$partition0$;
var inst_39634 = (inst_39633 & (64));
var inst_39635 = inst_39628.cljs$core$ISeq$;
var inst_39636 = (cljs.core.PROTOCOL_SENTINEL === inst_39635);
var inst_39637 = ((inst_39634) || (inst_39636));
var state_39726__$1 = state_39726;
if(cljs.core.truth_(inst_39637)){
var statearr_39761_40977 = state_39726__$1;
(statearr_39761_40977[(1)] = (5));

} else {
var statearr_39762_40978 = state_39726__$1;
(statearr_39762_40978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (23))){
var inst_39685 = (state_39726[(14)]);
var inst_39691 = (inst_39685 == null);
var state_39726__$1 = state_39726;
if(cljs.core.truth_(inst_39691)){
var statearr_39763_40980 = state_39726__$1;
(statearr_39763_40980[(1)] = (26));

} else {
var statearr_39764_40981 = state_39726__$1;
(statearr_39764_40981[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (35))){
var inst_39711 = (state_39726[(2)]);
var state_39726__$1 = state_39726;
if(cljs.core.truth_(inst_39711)){
var statearr_39765_40982 = state_39726__$1;
(statearr_39765_40982[(1)] = (36));

} else {
var statearr_39766_40987 = state_39726__$1;
(statearr_39766_40987[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (19))){
var inst_39653 = (state_39726[(7)]);
var inst_39673 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39653);
var state_39726__$1 = state_39726;
var statearr_39767_40989 = state_39726__$1;
(statearr_39767_40989[(2)] = inst_39673);

(statearr_39767_40989[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (11))){
var inst_39653 = (state_39726[(7)]);
var inst_39657 = (inst_39653 == null);
var inst_39658 = cljs.core.not(inst_39657);
var state_39726__$1 = state_39726;
if(inst_39658){
var statearr_39768_40990 = state_39726__$1;
(statearr_39768_40990[(1)] = (13));

} else {
var statearr_39769_40991 = state_39726__$1;
(statearr_39769_40991[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (9))){
var inst_39628 = (state_39726[(8)]);
var state_39726__$1 = state_39726;
var statearr_39770_40992 = state_39726__$1;
(statearr_39770_40992[(2)] = inst_39628);

(statearr_39770_40992[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (5))){
var state_39726__$1 = state_39726;
var statearr_39771_40993 = state_39726__$1;
(statearr_39771_40993[(2)] = true);

(statearr_39771_40993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (14))){
var state_39726__$1 = state_39726;
var statearr_39772_40994 = state_39726__$1;
(statearr_39772_40994[(2)] = false);

(statearr_39772_40994[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (26))){
var inst_39686 = (state_39726[(10)]);
var inst_39693 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_39686);
var state_39726__$1 = state_39726;
var statearr_39773_40996 = state_39726__$1;
(statearr_39773_40996[(2)] = inst_39693);

(statearr_39773_40996[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (16))){
var state_39726__$1 = state_39726;
var statearr_39774_40997 = state_39726__$1;
(statearr_39774_40997[(2)] = true);

(statearr_39774_40997[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (38))){
var inst_39716 = (state_39726[(2)]);
var state_39726__$1 = state_39726;
var statearr_39775_40999 = state_39726__$1;
(statearr_39775_40999[(2)] = inst_39716);

(statearr_39775_40999[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (30))){
var inst_39686 = (state_39726[(10)]);
var inst_39678 = (state_39726[(13)]);
var inst_39677 = (state_39726[(11)]);
var inst_39703 = cljs.core.empty_QMARK_(inst_39677);
var inst_39704 = (inst_39678.cljs$core$IFn$_invoke$arity$1 ? inst_39678.cljs$core$IFn$_invoke$arity$1(inst_39686) : inst_39678.call(null,inst_39686));
var inst_39705 = cljs.core.not(inst_39704);
var inst_39706 = ((inst_39703) && (inst_39705));
var state_39726__$1 = state_39726;
var statearr_39776_41003 = state_39726__$1;
(statearr_39776_41003[(2)] = inst_39706);

(statearr_39776_41003[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (10))){
var inst_39628 = (state_39726[(8)]);
var inst_39649 = (state_39726[(2)]);
var inst_39650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39649,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39649,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39649,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39653 = inst_39628;
var state_39726__$1 = (function (){var statearr_39777 = state_39726;
(statearr_39777[(7)] = inst_39653);

(statearr_39777[(16)] = inst_39650);

(statearr_39777[(17)] = inst_39652);

(statearr_39777[(18)] = inst_39651);

return statearr_39777;
})();
var statearr_39778_41004 = state_39726__$1;
(statearr_39778_41004[(2)] = null);

(statearr_39778_41004[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (18))){
var inst_39668 = (state_39726[(2)]);
var state_39726__$1 = state_39726;
var statearr_39779_41005 = state_39726__$1;
(statearr_39779_41005[(2)] = inst_39668);

(statearr_39779_41005[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (37))){
var state_39726__$1 = state_39726;
var statearr_39780_41006 = state_39726__$1;
(statearr_39780_41006[(2)] = null);

(statearr_39780_41006[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39727 === (8))){
var inst_39628 = (state_39726[(8)]);
var inst_39646 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_39628);
var state_39726__$1 = state_39726;
var statearr_39781_41007 = state_39726__$1;
(statearr_39781_41007[(2)] = inst_39646);

(statearr_39781_41007[(1)] = (10));


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
});})(c__38930__auto___40939,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38829__auto__,c__38930__auto___40939,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38830__auto__ = null;
var cljs$core$async$mix_$_state_machine__38830__auto____0 = (function (){
var statearr_39782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39782[(0)] = cljs$core$async$mix_$_state_machine__38830__auto__);

(statearr_39782[(1)] = (1));

return statearr_39782;
});
var cljs$core$async$mix_$_state_machine__38830__auto____1 = (function (state_39726){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39726);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39783){if((e39783 instanceof Object)){
var ex__38833__auto__ = e39783;
var statearr_39784_41009 = state_39726;
(statearr_39784_41009[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39783;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41010 = state_39726;
state_39726 = G__41010;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38830__auto__ = function(state_39726){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38830__auto____1.call(this,state_39726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38830__auto____0;
cljs$core$async$mix_$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38830__auto____1;
return cljs$core$async$mix_$_state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___40939,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38932__auto__ = (function (){var statearr_39785 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39785[(6)] = c__38930__auto___40939);

return statearr_39785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___40939,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__39787 = arguments.length;
switch (G__39787) {
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
var G__39790 = arguments.length;
switch (G__39790) {
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
return (function (p1__39788_SHARP_){
if(cljs.core.truth_((p1__39788_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__39788_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__39788_SHARP_.call(null,topic)))){
return p1__39788_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__39788_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39791 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39792){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39792 = meta39792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39793,meta39792__$1){
var self__ = this;
var _39793__$1 = this;
return (new cljs.core.async.t_cljs$core$async39791(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39792__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39793){
var self__ = this;
var _39793__$1 = this;
return self__.meta39792;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39791.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39791.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39792","meta39792",-1866763133,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39791";

cljs.core.async.t_cljs$core$async39791.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async39791");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39791.
 */
cljs.core.async.__GT_t_cljs$core$async39791 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39791(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39792){
return (new cljs.core.async.t_cljs$core$async39791(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39792));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39791(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38930__auto___41027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___41027,mults,ensure_mult,p){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___41027,mults,ensure_mult,p){
return (function (state_39865){
var state_val_39866 = (state_39865[(1)]);
if((state_val_39866 === (7))){
var inst_39861 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
var statearr_39867_41031 = state_39865__$1;
(statearr_39867_41031[(2)] = inst_39861);

(statearr_39867_41031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (20))){
var state_39865__$1 = state_39865;
var statearr_39868_41033 = state_39865__$1;
(statearr_39868_41033[(2)] = null);

(statearr_39868_41033[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (1))){
var state_39865__$1 = state_39865;
var statearr_39869_41035 = state_39865__$1;
(statearr_39869_41035[(2)] = null);

(statearr_39869_41035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (24))){
var inst_39844 = (state_39865[(7)]);
var inst_39853 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_39844);
var state_39865__$1 = state_39865;
var statearr_39870_41036 = state_39865__$1;
(statearr_39870_41036[(2)] = inst_39853);

(statearr_39870_41036[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (4))){
var inst_39796 = (state_39865[(8)]);
var inst_39796__$1 = (state_39865[(2)]);
var inst_39797 = (inst_39796__$1 == null);
var state_39865__$1 = (function (){var statearr_39871 = state_39865;
(statearr_39871[(8)] = inst_39796__$1);

return statearr_39871;
})();
if(cljs.core.truth_(inst_39797)){
var statearr_39872_41037 = state_39865__$1;
(statearr_39872_41037[(1)] = (5));

} else {
var statearr_39873_41038 = state_39865__$1;
(statearr_39873_41038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (15))){
var inst_39838 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
var statearr_39874_41039 = state_39865__$1;
(statearr_39874_41039[(2)] = inst_39838);

(statearr_39874_41039[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (21))){
var inst_39858 = (state_39865[(2)]);
var state_39865__$1 = (function (){var statearr_39875 = state_39865;
(statearr_39875[(9)] = inst_39858);

return statearr_39875;
})();
var statearr_39876_41040 = state_39865__$1;
(statearr_39876_41040[(2)] = null);

(statearr_39876_41040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (13))){
var inst_39820 = (state_39865[(10)]);
var inst_39822 = cljs.core.chunked_seq_QMARK_(inst_39820);
var state_39865__$1 = state_39865;
if(inst_39822){
var statearr_39877_41041 = state_39865__$1;
(statearr_39877_41041[(1)] = (16));

} else {
var statearr_39878_41042 = state_39865__$1;
(statearr_39878_41042[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (22))){
var inst_39850 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
if(cljs.core.truth_(inst_39850)){
var statearr_39879_41045 = state_39865__$1;
(statearr_39879_41045[(1)] = (23));

} else {
var statearr_39880_41046 = state_39865__$1;
(statearr_39880_41046[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (6))){
var inst_39846 = (state_39865[(11)]);
var inst_39796 = (state_39865[(8)]);
var inst_39844 = (state_39865[(7)]);
var inst_39844__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_39796) : topic_fn.call(null,inst_39796));
var inst_39845 = cljs.core.deref(mults);
var inst_39846__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_39845,inst_39844__$1);
var state_39865__$1 = (function (){var statearr_39881 = state_39865;
(statearr_39881[(11)] = inst_39846__$1);

(statearr_39881[(7)] = inst_39844__$1);

return statearr_39881;
})();
if(cljs.core.truth_(inst_39846__$1)){
var statearr_39882_41049 = state_39865__$1;
(statearr_39882_41049[(1)] = (19));

} else {
var statearr_39883_41050 = state_39865__$1;
(statearr_39883_41050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (25))){
var inst_39855 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
var statearr_39884_41051 = state_39865__$1;
(statearr_39884_41051[(2)] = inst_39855);

(statearr_39884_41051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (17))){
var inst_39820 = (state_39865[(10)]);
var inst_39829 = cljs.core.first(inst_39820);
var inst_39830 = cljs.core.async.muxch_STAR_(inst_39829);
var inst_39831 = cljs.core.async.close_BANG_(inst_39830);
var inst_39832 = cljs.core.next(inst_39820);
var inst_39806 = inst_39832;
var inst_39807 = null;
var inst_39808 = (0);
var inst_39809 = (0);
var state_39865__$1 = (function (){var statearr_39885 = state_39865;
(statearr_39885[(12)] = inst_39809);

(statearr_39885[(13)] = inst_39808);

(statearr_39885[(14)] = inst_39806);

(statearr_39885[(15)] = inst_39831);

(statearr_39885[(16)] = inst_39807);

return statearr_39885;
})();
var statearr_39886_41053 = state_39865__$1;
(statearr_39886_41053[(2)] = null);

(statearr_39886_41053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (3))){
var inst_39863 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39865__$1,inst_39863);
} else {
if((state_val_39866 === (12))){
var inst_39840 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
var statearr_39887_41054 = state_39865__$1;
(statearr_39887_41054[(2)] = inst_39840);

(statearr_39887_41054[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (2))){
var state_39865__$1 = state_39865;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39865__$1,(4),ch);
} else {
if((state_val_39866 === (23))){
var state_39865__$1 = state_39865;
var statearr_39888_41055 = state_39865__$1;
(statearr_39888_41055[(2)] = null);

(statearr_39888_41055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (19))){
var inst_39846 = (state_39865[(11)]);
var inst_39796 = (state_39865[(8)]);
var inst_39848 = cljs.core.async.muxch_STAR_(inst_39846);
var state_39865__$1 = state_39865;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39865__$1,(22),inst_39848,inst_39796);
} else {
if((state_val_39866 === (11))){
var inst_39820 = (state_39865[(10)]);
var inst_39806 = (state_39865[(14)]);
var inst_39820__$1 = cljs.core.seq(inst_39806);
var state_39865__$1 = (function (){var statearr_39889 = state_39865;
(statearr_39889[(10)] = inst_39820__$1);

return statearr_39889;
})();
if(inst_39820__$1){
var statearr_39890_41057 = state_39865__$1;
(statearr_39890_41057[(1)] = (13));

} else {
var statearr_39891_41058 = state_39865__$1;
(statearr_39891_41058[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (9))){
var inst_39842 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
var statearr_39892_41060 = state_39865__$1;
(statearr_39892_41060[(2)] = inst_39842);

(statearr_39892_41060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (5))){
var inst_39803 = cljs.core.deref(mults);
var inst_39804 = cljs.core.vals(inst_39803);
var inst_39805 = cljs.core.seq(inst_39804);
var inst_39806 = inst_39805;
var inst_39807 = null;
var inst_39808 = (0);
var inst_39809 = (0);
var state_39865__$1 = (function (){var statearr_39893 = state_39865;
(statearr_39893[(12)] = inst_39809);

(statearr_39893[(13)] = inst_39808);

(statearr_39893[(14)] = inst_39806);

(statearr_39893[(16)] = inst_39807);

return statearr_39893;
})();
var statearr_39894_41061 = state_39865__$1;
(statearr_39894_41061[(2)] = null);

(statearr_39894_41061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (14))){
var state_39865__$1 = state_39865;
var statearr_39898_41065 = state_39865__$1;
(statearr_39898_41065[(2)] = null);

(statearr_39898_41065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (16))){
var inst_39820 = (state_39865[(10)]);
var inst_39824 = cljs.core.chunk_first(inst_39820);
var inst_39825 = cljs.core.chunk_rest(inst_39820);
var inst_39826 = cljs.core.count(inst_39824);
var inst_39806 = inst_39825;
var inst_39807 = inst_39824;
var inst_39808 = inst_39826;
var inst_39809 = (0);
var state_39865__$1 = (function (){var statearr_39899 = state_39865;
(statearr_39899[(12)] = inst_39809);

(statearr_39899[(13)] = inst_39808);

(statearr_39899[(14)] = inst_39806);

(statearr_39899[(16)] = inst_39807);

return statearr_39899;
})();
var statearr_39900_41073 = state_39865__$1;
(statearr_39900_41073[(2)] = null);

(statearr_39900_41073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (10))){
var inst_39809 = (state_39865[(12)]);
var inst_39808 = (state_39865[(13)]);
var inst_39806 = (state_39865[(14)]);
var inst_39807 = (state_39865[(16)]);
var inst_39814 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_39807,inst_39809);
var inst_39815 = cljs.core.async.muxch_STAR_(inst_39814);
var inst_39816 = cljs.core.async.close_BANG_(inst_39815);
var inst_39817 = (inst_39809 + (1));
var tmp39895 = inst_39808;
var tmp39896 = inst_39806;
var tmp39897 = inst_39807;
var inst_39806__$1 = tmp39896;
var inst_39807__$1 = tmp39897;
var inst_39808__$1 = tmp39895;
var inst_39809__$1 = inst_39817;
var state_39865__$1 = (function (){var statearr_39901 = state_39865;
(statearr_39901[(12)] = inst_39809__$1);

(statearr_39901[(13)] = inst_39808__$1);

(statearr_39901[(14)] = inst_39806__$1);

(statearr_39901[(16)] = inst_39807__$1);

(statearr_39901[(17)] = inst_39816);

return statearr_39901;
})();
var statearr_39902_41077 = state_39865__$1;
(statearr_39902_41077[(2)] = null);

(statearr_39902_41077[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (18))){
var inst_39835 = (state_39865[(2)]);
var state_39865__$1 = state_39865;
var statearr_39903_41078 = state_39865__$1;
(statearr_39903_41078[(2)] = inst_39835);

(statearr_39903_41078[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39866 === (8))){
var inst_39809 = (state_39865[(12)]);
var inst_39808 = (state_39865[(13)]);
var inst_39811 = (inst_39809 < inst_39808);
var inst_39812 = inst_39811;
var state_39865__$1 = state_39865;
if(cljs.core.truth_(inst_39812)){
var statearr_39904_41082 = state_39865__$1;
(statearr_39904_41082[(1)] = (10));

} else {
var statearr_39905_41083 = state_39865__$1;
(statearr_39905_41083[(1)] = (11));

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
});})(c__38930__auto___41027,mults,ensure_mult,p))
;
return ((function (switch__38829__auto__,c__38930__auto___41027,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38830__auto__ = null;
var cljs$core$async$state_machine__38830__auto____0 = (function (){
var statearr_39906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39906[(0)] = cljs$core$async$state_machine__38830__auto__);

(statearr_39906[(1)] = (1));

return statearr_39906;
});
var cljs$core$async$state_machine__38830__auto____1 = (function (state_39865){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39865);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39907){if((e39907 instanceof Object)){
var ex__38833__auto__ = e39907;
var statearr_39908_41087 = state_39865;
(statearr_39908_41087[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39865);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39907;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41088 = state_39865;
state_39865 = G__41088;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$state_machine__38830__auto__ = function(state_39865){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38830__auto____1.call(this,state_39865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38830__auto____0;
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38830__auto____1;
return cljs$core$async$state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___41027,mults,ensure_mult,p))
})();
var state__38932__auto__ = (function (){var statearr_39909 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39909[(6)] = c__38930__auto___41027);

return statearr_39909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___41027,mults,ensure_mult,p))
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
var G__39911 = arguments.length;
switch (G__39911) {
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
var G__39913 = arguments.length;
switch (G__39913) {
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
var G__39915 = arguments.length;
switch (G__39915) {
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
var c__38930__auto___41108 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___41108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___41108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39954){
var state_val_39955 = (state_39954[(1)]);
if((state_val_39955 === (7))){
var state_39954__$1 = state_39954;
var statearr_39956_41109 = state_39954__$1;
(statearr_39956_41109[(2)] = null);

(statearr_39956_41109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39955 === (1))){
var state_39954__$1 = state_39954;
var statearr_39957_41110 = state_39954__$1;
(statearr_39957_41110[(2)] = null);

(statearr_39957_41110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39955 === (4))){
var inst_39918 = (state_39954[(7)]);
var inst_39920 = (inst_39918 < cnt);
var state_39954__$1 = state_39954;
if(cljs.core.truth_(inst_39920)){
var statearr_39958_41111 = state_39954__$1;
(statearr_39958_41111[(1)] = (6));

} else {
var statearr_39959_41112 = state_39954__$1;
(statearr_39959_41112[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39955 === (15))){
var inst_39950 = (state_39954[(2)]);
var state_39954__$1 = state_39954;
var statearr_39960_41119 = state_39954__$1;
(statearr_39960_41119[(2)] = inst_39950);

(statearr_39960_41119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39955 === (13))){
var inst_39943 = cljs.core.async.close_BANG_(out);
var state_39954__$1 = state_39954;
var statearr_39961_41120 = state_39954__$1;
(statearr_39961_41120[(2)] = inst_39943);

(statearr_39961_41120[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39955 === (6))){
var state_39954__$1 = state_39954;
var statearr_39962_41121 = state_39954__$1;
(statearr_39962_41121[(2)] = null);

(statearr_39962_41121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39955 === (3))){
var inst_39952 = (state_39954[(2)]);
var state_39954__$1 = state_39954;
return cljs.core.async.impl.ioc_helpers.return_chan(state_39954__$1,inst_39952);
} else {
if((state_val_39955 === (12))){
var inst_39940 = (state_39954[(8)]);
var inst_39940__$1 = (state_39954[(2)]);
var inst_39941 = cljs.core.some(cljs.core.nil_QMARK_,inst_39940__$1);
var state_39954__$1 = (function (){var statearr_39963 = state_39954;
(statearr_39963[(8)] = inst_39940__$1);

return statearr_39963;
})();
if(cljs.core.truth_(inst_39941)){
var statearr_39964_41122 = state_39954__$1;
(statearr_39964_41122[(1)] = (13));

} else {
var statearr_39965_41123 = state_39954__$1;
(statearr_39965_41123[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39955 === (2))){
var inst_39917 = cljs.core.reset_BANG_(dctr,cnt);
var inst_39918 = (0);
var state_39954__$1 = (function (){var statearr_39966 = state_39954;
(statearr_39966[(9)] = inst_39917);

(statearr_39966[(7)] = inst_39918);

return statearr_39966;
})();
var statearr_39967_41124 = state_39954__$1;
(statearr_39967_41124[(2)] = null);

(statearr_39967_41124[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39955 === (11))){
var inst_39918 = (state_39954[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_39954,(10),Object,null,(9));
var inst_39927 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_39918) : chs__$1.call(null,inst_39918));
var inst_39928 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_39918) : done.call(null,inst_39918));
var inst_39929 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_39927,inst_39928);
var state_39954__$1 = state_39954;
var statearr_39968_41125 = state_39954__$1;
(statearr_39968_41125[(2)] = inst_39929);


cljs.core.async.impl.ioc_helpers.process_exception(state_39954__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39955 === (9))){
var inst_39918 = (state_39954[(7)]);
var inst_39931 = (state_39954[(2)]);
var inst_39932 = (inst_39918 + (1));
var inst_39918__$1 = inst_39932;
var state_39954__$1 = (function (){var statearr_39969 = state_39954;
(statearr_39969[(10)] = inst_39931);

(statearr_39969[(7)] = inst_39918__$1);

return statearr_39969;
})();
var statearr_39970_41132 = state_39954__$1;
(statearr_39970_41132[(2)] = null);

(statearr_39970_41132[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39955 === (5))){
var inst_39938 = (state_39954[(2)]);
var state_39954__$1 = (function (){var statearr_39971 = state_39954;
(statearr_39971[(11)] = inst_39938);

return statearr_39971;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_39954__$1,(12),dchan);
} else {
if((state_val_39955 === (14))){
var inst_39940 = (state_39954[(8)]);
var inst_39945 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_39940);
var state_39954__$1 = state_39954;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_39954__$1,(16),out,inst_39945);
} else {
if((state_val_39955 === (16))){
var inst_39947 = (state_39954[(2)]);
var state_39954__$1 = (function (){var statearr_39972 = state_39954;
(statearr_39972[(12)] = inst_39947);

return statearr_39972;
})();
var statearr_39973_41133 = state_39954__$1;
(statearr_39973_41133[(2)] = null);

(statearr_39973_41133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39955 === (10))){
var inst_39922 = (state_39954[(2)]);
var inst_39923 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_39954__$1 = (function (){var statearr_39974 = state_39954;
(statearr_39974[(13)] = inst_39922);

return statearr_39974;
})();
var statearr_39975_41134 = state_39954__$1;
(statearr_39975_41134[(2)] = inst_39923);


cljs.core.async.impl.ioc_helpers.process_exception(state_39954__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39955 === (8))){
var inst_39936 = (state_39954[(2)]);
var state_39954__$1 = state_39954;
var statearr_39976_41135 = state_39954__$1;
(statearr_39976_41135[(2)] = inst_39936);

(statearr_39976_41135[(1)] = (5));


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
});})(c__38930__auto___41108,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38829__auto__,c__38930__auto___41108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38830__auto__ = null;
var cljs$core$async$state_machine__38830__auto____0 = (function (){
var statearr_39977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39977[(0)] = cljs$core$async$state_machine__38830__auto__);

(statearr_39977[(1)] = (1));

return statearr_39977;
});
var cljs$core$async$state_machine__38830__auto____1 = (function (state_39954){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_39954);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e39978){if((e39978 instanceof Object)){
var ex__38833__auto__ = e39978;
var statearr_39979_41142 = state_39954;
(statearr_39979_41142[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_39954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39978;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41143 = state_39954;
state_39954 = G__41143;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$state_machine__38830__auto__ = function(state_39954){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38830__auto____1.call(this,state_39954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38830__auto____0;
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38830__auto____1;
return cljs$core$async$state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___41108,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38932__auto__ = (function (){var statearr_39980 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_39980[(6)] = c__38930__auto___41108);

return statearr_39980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___41108,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__39983 = arguments.length;
switch (G__39983) {
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
var c__38930__auto___41145 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___41145,out){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___41145,out){
return (function (state_40015){
var state_val_40016 = (state_40015[(1)]);
if((state_val_40016 === (7))){
var inst_39995 = (state_40015[(7)]);
var inst_39994 = (state_40015[(8)]);
var inst_39994__$1 = (state_40015[(2)]);
var inst_39995__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39994__$1,(0),null);
var inst_39996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_39994__$1,(1),null);
var inst_39997 = (inst_39995__$1 == null);
var state_40015__$1 = (function (){var statearr_40017 = state_40015;
(statearr_40017[(7)] = inst_39995__$1);

(statearr_40017[(9)] = inst_39996);

(statearr_40017[(8)] = inst_39994__$1);

return statearr_40017;
})();
if(cljs.core.truth_(inst_39997)){
var statearr_40018_41146 = state_40015__$1;
(statearr_40018_41146[(1)] = (8));

} else {
var statearr_40019_41147 = state_40015__$1;
(statearr_40019_41147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (1))){
var inst_39984 = cljs.core.vec(chs);
var inst_39985 = inst_39984;
var state_40015__$1 = (function (){var statearr_40020 = state_40015;
(statearr_40020[(10)] = inst_39985);

return statearr_40020;
})();
var statearr_40021_41151 = state_40015__$1;
(statearr_40021_41151[(2)] = null);

(statearr_40021_41151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (4))){
var inst_39985 = (state_40015[(10)]);
var state_40015__$1 = state_40015;
return cljs.core.async.ioc_alts_BANG_(state_40015__$1,(7),inst_39985);
} else {
if((state_val_40016 === (6))){
var inst_40011 = (state_40015[(2)]);
var state_40015__$1 = state_40015;
var statearr_40022_41169 = state_40015__$1;
(statearr_40022_41169[(2)] = inst_40011);

(statearr_40022_41169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (3))){
var inst_40013 = (state_40015[(2)]);
var state_40015__$1 = state_40015;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40015__$1,inst_40013);
} else {
if((state_val_40016 === (2))){
var inst_39985 = (state_40015[(10)]);
var inst_39987 = cljs.core.count(inst_39985);
var inst_39988 = (inst_39987 > (0));
var state_40015__$1 = state_40015;
if(cljs.core.truth_(inst_39988)){
var statearr_40024_41171 = state_40015__$1;
(statearr_40024_41171[(1)] = (4));

} else {
var statearr_40025_41173 = state_40015__$1;
(statearr_40025_41173[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (11))){
var inst_39985 = (state_40015[(10)]);
var inst_40004 = (state_40015[(2)]);
var tmp40023 = inst_39985;
var inst_39985__$1 = tmp40023;
var state_40015__$1 = (function (){var statearr_40026 = state_40015;
(statearr_40026[(11)] = inst_40004);

(statearr_40026[(10)] = inst_39985__$1);

return statearr_40026;
})();
var statearr_40027_41176 = state_40015__$1;
(statearr_40027_41176[(2)] = null);

(statearr_40027_41176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (9))){
var inst_39995 = (state_40015[(7)]);
var state_40015__$1 = state_40015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40015__$1,(11),out,inst_39995);
} else {
if((state_val_40016 === (5))){
var inst_40009 = cljs.core.async.close_BANG_(out);
var state_40015__$1 = state_40015;
var statearr_40028_41177 = state_40015__$1;
(statearr_40028_41177[(2)] = inst_40009);

(statearr_40028_41177[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (10))){
var inst_40007 = (state_40015[(2)]);
var state_40015__$1 = state_40015;
var statearr_40029_41178 = state_40015__$1;
(statearr_40029_41178[(2)] = inst_40007);

(statearr_40029_41178[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40016 === (8))){
var inst_39985 = (state_40015[(10)]);
var inst_39995 = (state_40015[(7)]);
var inst_39996 = (state_40015[(9)]);
var inst_39994 = (state_40015[(8)]);
var inst_39999 = (function (){var cs = inst_39985;
var vec__39990 = inst_39994;
var v = inst_39995;
var c = inst_39996;
return ((function (cs,vec__39990,v,c,inst_39985,inst_39995,inst_39996,inst_39994,state_val_40016,c__38930__auto___41145,out){
return (function (p1__39981_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__39981_SHARP_);
});
;})(cs,vec__39990,v,c,inst_39985,inst_39995,inst_39996,inst_39994,state_val_40016,c__38930__auto___41145,out))
})();
var inst_40000 = cljs.core.filterv(inst_39999,inst_39985);
var inst_39985__$1 = inst_40000;
var state_40015__$1 = (function (){var statearr_40030 = state_40015;
(statearr_40030[(10)] = inst_39985__$1);

return statearr_40030;
})();
var statearr_40031_41179 = state_40015__$1;
(statearr_40031_41179[(2)] = null);

(statearr_40031_41179[(1)] = (2));


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
});})(c__38930__auto___41145,out))
;
return ((function (switch__38829__auto__,c__38930__auto___41145,out){
return (function() {
var cljs$core$async$state_machine__38830__auto__ = null;
var cljs$core$async$state_machine__38830__auto____0 = (function (){
var statearr_40032 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40032[(0)] = cljs$core$async$state_machine__38830__auto__);

(statearr_40032[(1)] = (1));

return statearr_40032;
});
var cljs$core$async$state_machine__38830__auto____1 = (function (state_40015){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_40015);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e40033){if((e40033 instanceof Object)){
var ex__38833__auto__ = e40033;
var statearr_40034_41180 = state_40015;
(statearr_40034_41180[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40033;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41181 = state_40015;
state_40015 = G__41181;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$state_machine__38830__auto__ = function(state_40015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38830__auto____1.call(this,state_40015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38830__auto____0;
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38830__auto____1;
return cljs$core$async$state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___41145,out))
})();
var state__38932__auto__ = (function (){var statearr_40035 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_40035[(6)] = c__38930__auto___41145);

return statearr_40035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___41145,out))
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
var G__40037 = arguments.length;
switch (G__40037) {
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
var c__38930__auto___41183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___41183,out){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___41183,out){
return (function (state_40061){
var state_val_40062 = (state_40061[(1)]);
if((state_val_40062 === (7))){
var inst_40043 = (state_40061[(7)]);
var inst_40043__$1 = (state_40061[(2)]);
var inst_40044 = (inst_40043__$1 == null);
var inst_40045 = cljs.core.not(inst_40044);
var state_40061__$1 = (function (){var statearr_40063 = state_40061;
(statearr_40063[(7)] = inst_40043__$1);

return statearr_40063;
})();
if(inst_40045){
var statearr_40064_41185 = state_40061__$1;
(statearr_40064_41185[(1)] = (8));

} else {
var statearr_40065_41186 = state_40061__$1;
(statearr_40065_41186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (1))){
var inst_40038 = (0);
var state_40061__$1 = (function (){var statearr_40066 = state_40061;
(statearr_40066[(8)] = inst_40038);

return statearr_40066;
})();
var statearr_40067_41188 = state_40061__$1;
(statearr_40067_41188[(2)] = null);

(statearr_40067_41188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (4))){
var state_40061__$1 = state_40061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40061__$1,(7),ch);
} else {
if((state_val_40062 === (6))){
var inst_40056 = (state_40061[(2)]);
var state_40061__$1 = state_40061;
var statearr_40068_41189 = state_40061__$1;
(statearr_40068_41189[(2)] = inst_40056);

(statearr_40068_41189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (3))){
var inst_40058 = (state_40061[(2)]);
var inst_40059 = cljs.core.async.close_BANG_(out);
var state_40061__$1 = (function (){var statearr_40069 = state_40061;
(statearr_40069[(9)] = inst_40058);

return statearr_40069;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40061__$1,inst_40059);
} else {
if((state_val_40062 === (2))){
var inst_40038 = (state_40061[(8)]);
var inst_40040 = (inst_40038 < n);
var state_40061__$1 = state_40061;
if(cljs.core.truth_(inst_40040)){
var statearr_40070_41191 = state_40061__$1;
(statearr_40070_41191[(1)] = (4));

} else {
var statearr_40071_41193 = state_40061__$1;
(statearr_40071_41193[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (11))){
var inst_40038 = (state_40061[(8)]);
var inst_40048 = (state_40061[(2)]);
var inst_40049 = (inst_40038 + (1));
var inst_40038__$1 = inst_40049;
var state_40061__$1 = (function (){var statearr_40072 = state_40061;
(statearr_40072[(10)] = inst_40048);

(statearr_40072[(8)] = inst_40038__$1);

return statearr_40072;
})();
var statearr_40073_41194 = state_40061__$1;
(statearr_40073_41194[(2)] = null);

(statearr_40073_41194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (9))){
var state_40061__$1 = state_40061;
var statearr_40074_41195 = state_40061__$1;
(statearr_40074_41195[(2)] = null);

(statearr_40074_41195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (5))){
var state_40061__$1 = state_40061;
var statearr_40075_41196 = state_40061__$1;
(statearr_40075_41196[(2)] = null);

(statearr_40075_41196[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (10))){
var inst_40053 = (state_40061[(2)]);
var state_40061__$1 = state_40061;
var statearr_40076_41198 = state_40061__$1;
(statearr_40076_41198[(2)] = inst_40053);

(statearr_40076_41198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40062 === (8))){
var inst_40043 = (state_40061[(7)]);
var state_40061__$1 = state_40061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40061__$1,(11),out,inst_40043);
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
});})(c__38930__auto___41183,out))
;
return ((function (switch__38829__auto__,c__38930__auto___41183,out){
return (function() {
var cljs$core$async$state_machine__38830__auto__ = null;
var cljs$core$async$state_machine__38830__auto____0 = (function (){
var statearr_40077 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40077[(0)] = cljs$core$async$state_machine__38830__auto__);

(statearr_40077[(1)] = (1));

return statearr_40077;
});
var cljs$core$async$state_machine__38830__auto____1 = (function (state_40061){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_40061);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e40078){if((e40078 instanceof Object)){
var ex__38833__auto__ = e40078;
var statearr_40079_41199 = state_40061;
(statearr_40079_41199[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40078;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41201 = state_40061;
state_40061 = G__41201;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$state_machine__38830__auto__ = function(state_40061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38830__auto____1.call(this,state_40061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38830__auto____0;
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38830__auto____1;
return cljs$core$async$state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___41183,out))
})();
var state__38932__auto__ = (function (){var statearr_40080 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_40080[(6)] = c__38930__auto___41183);

return statearr_40080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___41183,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40082 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40082 = (function (f,ch,meta40083){
this.f = f;
this.ch = ch;
this.meta40083 = meta40083;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40084,meta40083__$1){
var self__ = this;
var _40084__$1 = this;
return (new cljs.core.async.t_cljs$core$async40082(self__.f,self__.ch,meta40083__$1));
});

cljs.core.async.t_cljs$core$async40082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40084){
var self__ = this;
var _40084__$1 = this;
return self__.meta40083;
});

cljs.core.async.t_cljs$core$async40082.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40082.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async40082.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async40082.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40082.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40085 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40085 = (function (f,ch,meta40083,_,fn1,meta40086){
this.f = f;
this.ch = ch;
this.meta40083 = meta40083;
this._ = _;
this.fn1 = fn1;
this.meta40086 = meta40086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40087,meta40086__$1){
var self__ = this;
var _40087__$1 = this;
return (new cljs.core.async.t_cljs$core$async40085(self__.f,self__.ch,self__.meta40083,self__._,self__.fn1,meta40086__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40085.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40087){
var self__ = this;
var _40087__$1 = this;
return self__.meta40086;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40085.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40085.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40085.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40085.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40081_SHARP_){
var G__40088 = (((p1__40081_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__40081_SHARP_) : self__.f.call(null,p1__40081_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__40088) : f1.call(null,G__40088));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40085.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40083","meta40083",-775575358,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40082","cljs.core.async/t_cljs$core$async40082",337465280,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40086","meta40086",1818559345,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40085";

cljs.core.async.t_cljs$core$async40085.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40085");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40085.
 */
cljs.core.async.__GT_t_cljs$core$async40085 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40085(f__$1,ch__$1,meta40083__$1,___$2,fn1__$1,meta40086){
return (new cljs.core.async.t_cljs$core$async40085(f__$1,ch__$1,meta40083__$1,___$2,fn1__$1,meta40086));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40085(self__.f,self__.ch,self__.meta40083,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__40089 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__40089) : self__.f.call(null,G__40089));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40082.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40082.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40082.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40083","meta40083",-775575358,null)], null);
});

cljs.core.async.t_cljs$core$async40082.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40082.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40082";

cljs.core.async.t_cljs$core$async40082.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40082");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40082.
 */
cljs.core.async.__GT_t_cljs$core$async40082 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40082(f__$1,ch__$1,meta40083){
return (new cljs.core.async.t_cljs$core$async40082(f__$1,ch__$1,meta40083));
});

}

return (new cljs.core.async.t_cljs$core$async40082(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40090 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40090 = (function (f,ch,meta40091){
this.f = f;
this.ch = ch;
this.meta40091 = meta40091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40092,meta40091__$1){
var self__ = this;
var _40092__$1 = this;
return (new cljs.core.async.t_cljs$core$async40090(self__.f,self__.ch,meta40091__$1));
});

cljs.core.async.t_cljs$core$async40090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40092){
var self__ = this;
var _40092__$1 = this;
return self__.meta40091;
});

cljs.core.async.t_cljs$core$async40090.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40090.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async40090.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40090.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40090.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40090.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async40090.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40091","meta40091",208066255,null)], null);
});

cljs.core.async.t_cljs$core$async40090.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40090.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40090";

cljs.core.async.t_cljs$core$async40090.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40090");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40090.
 */
cljs.core.async.__GT_t_cljs$core$async40090 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40090(f__$1,ch__$1,meta40091){
return (new cljs.core.async.t_cljs$core$async40090(f__$1,ch__$1,meta40091));
});

}

return (new cljs.core.async.t_cljs$core$async40090(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40093 = (function (p,ch,meta40094){
this.p = p;
this.ch = ch;
this.meta40094 = meta40094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40095,meta40094__$1){
var self__ = this;
var _40095__$1 = this;
return (new cljs.core.async.t_cljs$core$async40093(self__.p,self__.ch,meta40094__$1));
});

cljs.core.async.t_cljs$core$async40093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40095){
var self__ = this;
var _40095__$1 = this;
return self__.meta40094;
});

cljs.core.async.t_cljs$core$async40093.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async40093.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async40093.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40093.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40094","meta40094",2134151275,null)], null);
});

cljs.core.async.t_cljs$core$async40093.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40093";

cljs.core.async.t_cljs$core$async40093.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async40093");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40093.
 */
cljs.core.async.__GT_t_cljs$core$async40093 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40093(p__$1,ch__$1,meta40094){
return (new cljs.core.async.t_cljs$core$async40093(p__$1,ch__$1,meta40094));
});

}

return (new cljs.core.async.t_cljs$core$async40093(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40097 = arguments.length;
switch (G__40097) {
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
var c__38930__auto___41265 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___41265,out){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___41265,out){
return (function (state_40118){
var state_val_40119 = (state_40118[(1)]);
if((state_val_40119 === (7))){
var inst_40114 = (state_40118[(2)]);
var state_40118__$1 = state_40118;
var statearr_40120_41268 = state_40118__$1;
(statearr_40120_41268[(2)] = inst_40114);

(statearr_40120_41268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (1))){
var state_40118__$1 = state_40118;
var statearr_40121_41269 = state_40118__$1;
(statearr_40121_41269[(2)] = null);

(statearr_40121_41269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (4))){
var inst_40100 = (state_40118[(7)]);
var inst_40100__$1 = (state_40118[(2)]);
var inst_40101 = (inst_40100__$1 == null);
var state_40118__$1 = (function (){var statearr_40122 = state_40118;
(statearr_40122[(7)] = inst_40100__$1);

return statearr_40122;
})();
if(cljs.core.truth_(inst_40101)){
var statearr_40123_41270 = state_40118__$1;
(statearr_40123_41270[(1)] = (5));

} else {
var statearr_40124_41271 = state_40118__$1;
(statearr_40124_41271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (6))){
var inst_40100 = (state_40118[(7)]);
var inst_40105 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40100) : p.call(null,inst_40100));
var state_40118__$1 = state_40118;
if(cljs.core.truth_(inst_40105)){
var statearr_40125_41273 = state_40118__$1;
(statearr_40125_41273[(1)] = (8));

} else {
var statearr_40126_41274 = state_40118__$1;
(statearr_40126_41274[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (3))){
var inst_40116 = (state_40118[(2)]);
var state_40118__$1 = state_40118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40118__$1,inst_40116);
} else {
if((state_val_40119 === (2))){
var state_40118__$1 = state_40118;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40118__$1,(4),ch);
} else {
if((state_val_40119 === (11))){
var inst_40108 = (state_40118[(2)]);
var state_40118__$1 = state_40118;
var statearr_40127_41275 = state_40118__$1;
(statearr_40127_41275[(2)] = inst_40108);

(statearr_40127_41275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (9))){
var state_40118__$1 = state_40118;
var statearr_40128_41279 = state_40118__$1;
(statearr_40128_41279[(2)] = null);

(statearr_40128_41279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (5))){
var inst_40103 = cljs.core.async.close_BANG_(out);
var state_40118__$1 = state_40118;
var statearr_40129_41280 = state_40118__$1;
(statearr_40129_41280[(2)] = inst_40103);

(statearr_40129_41280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (10))){
var inst_40111 = (state_40118[(2)]);
var state_40118__$1 = (function (){var statearr_40130 = state_40118;
(statearr_40130[(8)] = inst_40111);

return statearr_40130;
})();
var statearr_40131_41282 = state_40118__$1;
(statearr_40131_41282[(2)] = null);

(statearr_40131_41282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40119 === (8))){
var inst_40100 = (state_40118[(7)]);
var state_40118__$1 = state_40118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40118__$1,(11),out,inst_40100);
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
});})(c__38930__auto___41265,out))
;
return ((function (switch__38829__auto__,c__38930__auto___41265,out){
return (function() {
var cljs$core$async$state_machine__38830__auto__ = null;
var cljs$core$async$state_machine__38830__auto____0 = (function (){
var statearr_40132 = [null,null,null,null,null,null,null,null,null];
(statearr_40132[(0)] = cljs$core$async$state_machine__38830__auto__);

(statearr_40132[(1)] = (1));

return statearr_40132;
});
var cljs$core$async$state_machine__38830__auto____1 = (function (state_40118){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_40118);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e40133){if((e40133 instanceof Object)){
var ex__38833__auto__ = e40133;
var statearr_40134_41286 = state_40118;
(statearr_40134_41286[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40133;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41287 = state_40118;
state_40118 = G__41287;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$state_machine__38830__auto__ = function(state_40118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38830__auto____1.call(this,state_40118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38830__auto____0;
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38830__auto____1;
return cljs$core$async$state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___41265,out))
})();
var state__38932__auto__ = (function (){var statearr_40135 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_40135[(6)] = c__38930__auto___41265);

return statearr_40135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___41265,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40137 = arguments.length;
switch (G__40137) {
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
var c__38930__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto__){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto__){
return (function (state_40199){
var state_val_40200 = (state_40199[(1)]);
if((state_val_40200 === (7))){
var inst_40195 = (state_40199[(2)]);
var state_40199__$1 = state_40199;
var statearr_40201_41335 = state_40199__$1;
(statearr_40201_41335[(2)] = inst_40195);

(statearr_40201_41335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (20))){
var inst_40165 = (state_40199[(7)]);
var inst_40176 = (state_40199[(2)]);
var inst_40177 = cljs.core.next(inst_40165);
var inst_40151 = inst_40177;
var inst_40152 = null;
var inst_40153 = (0);
var inst_40154 = (0);
var state_40199__$1 = (function (){var statearr_40202 = state_40199;
(statearr_40202[(8)] = inst_40152);

(statearr_40202[(9)] = inst_40151);

(statearr_40202[(10)] = inst_40176);

(statearr_40202[(11)] = inst_40154);

(statearr_40202[(12)] = inst_40153);

return statearr_40202;
})();
var statearr_40203_41349 = state_40199__$1;
(statearr_40203_41349[(2)] = null);

(statearr_40203_41349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (1))){
var state_40199__$1 = state_40199;
var statearr_40204_41351 = state_40199__$1;
(statearr_40204_41351[(2)] = null);

(statearr_40204_41351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (4))){
var inst_40140 = (state_40199[(13)]);
var inst_40140__$1 = (state_40199[(2)]);
var inst_40141 = (inst_40140__$1 == null);
var state_40199__$1 = (function (){var statearr_40205 = state_40199;
(statearr_40205[(13)] = inst_40140__$1);

return statearr_40205;
})();
if(cljs.core.truth_(inst_40141)){
var statearr_40206_41362 = state_40199__$1;
(statearr_40206_41362[(1)] = (5));

} else {
var statearr_40207_41364 = state_40199__$1;
(statearr_40207_41364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (15))){
var state_40199__$1 = state_40199;
var statearr_40211_41370 = state_40199__$1;
(statearr_40211_41370[(2)] = null);

(statearr_40211_41370[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (21))){
var state_40199__$1 = state_40199;
var statearr_40212_41375 = state_40199__$1;
(statearr_40212_41375[(2)] = null);

(statearr_40212_41375[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (13))){
var inst_40152 = (state_40199[(8)]);
var inst_40151 = (state_40199[(9)]);
var inst_40154 = (state_40199[(11)]);
var inst_40153 = (state_40199[(12)]);
var inst_40161 = (state_40199[(2)]);
var inst_40162 = (inst_40154 + (1));
var tmp40208 = inst_40152;
var tmp40209 = inst_40151;
var tmp40210 = inst_40153;
var inst_40151__$1 = tmp40209;
var inst_40152__$1 = tmp40208;
var inst_40153__$1 = tmp40210;
var inst_40154__$1 = inst_40162;
var state_40199__$1 = (function (){var statearr_40213 = state_40199;
(statearr_40213[(8)] = inst_40152__$1);

(statearr_40213[(14)] = inst_40161);

(statearr_40213[(9)] = inst_40151__$1);

(statearr_40213[(11)] = inst_40154__$1);

(statearr_40213[(12)] = inst_40153__$1);

return statearr_40213;
})();
var statearr_40214_41388 = state_40199__$1;
(statearr_40214_41388[(2)] = null);

(statearr_40214_41388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (22))){
var state_40199__$1 = state_40199;
var statearr_40215_41389 = state_40199__$1;
(statearr_40215_41389[(2)] = null);

(statearr_40215_41389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (6))){
var inst_40140 = (state_40199[(13)]);
var inst_40149 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40140) : f.call(null,inst_40140));
var inst_40150 = cljs.core.seq(inst_40149);
var inst_40151 = inst_40150;
var inst_40152 = null;
var inst_40153 = (0);
var inst_40154 = (0);
var state_40199__$1 = (function (){var statearr_40216 = state_40199;
(statearr_40216[(8)] = inst_40152);

(statearr_40216[(9)] = inst_40151);

(statearr_40216[(11)] = inst_40154);

(statearr_40216[(12)] = inst_40153);

return statearr_40216;
})();
var statearr_40217_41390 = state_40199__$1;
(statearr_40217_41390[(2)] = null);

(statearr_40217_41390[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (17))){
var inst_40165 = (state_40199[(7)]);
var inst_40169 = cljs.core.chunk_first(inst_40165);
var inst_40170 = cljs.core.chunk_rest(inst_40165);
var inst_40171 = cljs.core.count(inst_40169);
var inst_40151 = inst_40170;
var inst_40152 = inst_40169;
var inst_40153 = inst_40171;
var inst_40154 = (0);
var state_40199__$1 = (function (){var statearr_40218 = state_40199;
(statearr_40218[(8)] = inst_40152);

(statearr_40218[(9)] = inst_40151);

(statearr_40218[(11)] = inst_40154);

(statearr_40218[(12)] = inst_40153);

return statearr_40218;
})();
var statearr_40219_41402 = state_40199__$1;
(statearr_40219_41402[(2)] = null);

(statearr_40219_41402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (3))){
var inst_40197 = (state_40199[(2)]);
var state_40199__$1 = state_40199;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40199__$1,inst_40197);
} else {
if((state_val_40200 === (12))){
var inst_40185 = (state_40199[(2)]);
var state_40199__$1 = state_40199;
var statearr_40220_41407 = state_40199__$1;
(statearr_40220_41407[(2)] = inst_40185);

(statearr_40220_41407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (2))){
var state_40199__$1 = state_40199;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40199__$1,(4),in$);
} else {
if((state_val_40200 === (23))){
var inst_40193 = (state_40199[(2)]);
var state_40199__$1 = state_40199;
var statearr_40221_41408 = state_40199__$1;
(statearr_40221_41408[(2)] = inst_40193);

(statearr_40221_41408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (19))){
var inst_40180 = (state_40199[(2)]);
var state_40199__$1 = state_40199;
var statearr_40222_41410 = state_40199__$1;
(statearr_40222_41410[(2)] = inst_40180);

(statearr_40222_41410[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (11))){
var inst_40151 = (state_40199[(9)]);
var inst_40165 = (state_40199[(7)]);
var inst_40165__$1 = cljs.core.seq(inst_40151);
var state_40199__$1 = (function (){var statearr_40223 = state_40199;
(statearr_40223[(7)] = inst_40165__$1);

return statearr_40223;
})();
if(inst_40165__$1){
var statearr_40224_41412 = state_40199__$1;
(statearr_40224_41412[(1)] = (14));

} else {
var statearr_40225_41413 = state_40199__$1;
(statearr_40225_41413[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (9))){
var inst_40187 = (state_40199[(2)]);
var inst_40188 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_40199__$1 = (function (){var statearr_40226 = state_40199;
(statearr_40226[(15)] = inst_40187);

return statearr_40226;
})();
if(cljs.core.truth_(inst_40188)){
var statearr_40227_41417 = state_40199__$1;
(statearr_40227_41417[(1)] = (21));

} else {
var statearr_40228_41418 = state_40199__$1;
(statearr_40228_41418[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (5))){
var inst_40143 = cljs.core.async.close_BANG_(out);
var state_40199__$1 = state_40199;
var statearr_40229_41419 = state_40199__$1;
(statearr_40229_41419[(2)] = inst_40143);

(statearr_40229_41419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (14))){
var inst_40165 = (state_40199[(7)]);
var inst_40167 = cljs.core.chunked_seq_QMARK_(inst_40165);
var state_40199__$1 = state_40199;
if(inst_40167){
var statearr_40230_41421 = state_40199__$1;
(statearr_40230_41421[(1)] = (17));

} else {
var statearr_40231_41422 = state_40199__$1;
(statearr_40231_41422[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (16))){
var inst_40183 = (state_40199[(2)]);
var state_40199__$1 = state_40199;
var statearr_40232_41423 = state_40199__$1;
(statearr_40232_41423[(2)] = inst_40183);

(statearr_40232_41423[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40200 === (10))){
var inst_40152 = (state_40199[(8)]);
var inst_40154 = (state_40199[(11)]);
var inst_40159 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_40152,inst_40154);
var state_40199__$1 = state_40199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40199__$1,(13),out,inst_40159);
} else {
if((state_val_40200 === (18))){
var inst_40165 = (state_40199[(7)]);
var inst_40174 = cljs.core.first(inst_40165);
var state_40199__$1 = state_40199;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40199__$1,(20),out,inst_40174);
} else {
if((state_val_40200 === (8))){
var inst_40154 = (state_40199[(11)]);
var inst_40153 = (state_40199[(12)]);
var inst_40156 = (inst_40154 < inst_40153);
var inst_40157 = inst_40156;
var state_40199__$1 = state_40199;
if(cljs.core.truth_(inst_40157)){
var statearr_40233_41427 = state_40199__$1;
(statearr_40233_41427[(1)] = (10));

} else {
var statearr_40234_41429 = state_40199__$1;
(statearr_40234_41429[(1)] = (11));

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
});})(c__38930__auto__))
;
return ((function (switch__38829__auto__,c__38930__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38830__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38830__auto____0 = (function (){
var statearr_40235 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40235[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38830__auto__);

(statearr_40235[(1)] = (1));

return statearr_40235;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38830__auto____1 = (function (state_40199){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_40199);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e40236){if((e40236 instanceof Object)){
var ex__38833__auto__ = e40236;
var statearr_40237_41437 = state_40199;
(statearr_40237_41437[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41444 = state_40199;
state_40199 = G__41444;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38830__auto__ = function(state_40199){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38830__auto____1.call(this,state_40199);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38830__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38830__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto__))
})();
var state__38932__auto__ = (function (){var statearr_40238 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_40238[(6)] = c__38930__auto__);

return statearr_40238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto__))
);

return c__38930__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40240 = arguments.length;
switch (G__40240) {
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
var G__40242 = arguments.length;
switch (G__40242) {
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
var G__40244 = arguments.length;
switch (G__40244) {
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
var c__38930__auto___41483 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___41483,out){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___41483,out){
return (function (state_40268){
var state_val_40269 = (state_40268[(1)]);
if((state_val_40269 === (7))){
var inst_40263 = (state_40268[(2)]);
var state_40268__$1 = state_40268;
var statearr_40270_41486 = state_40268__$1;
(statearr_40270_41486[(2)] = inst_40263);

(statearr_40270_41486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (1))){
var inst_40245 = null;
var state_40268__$1 = (function (){var statearr_40271 = state_40268;
(statearr_40271[(7)] = inst_40245);

return statearr_40271;
})();
var statearr_40272_41488 = state_40268__$1;
(statearr_40272_41488[(2)] = null);

(statearr_40272_41488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (4))){
var inst_40248 = (state_40268[(8)]);
var inst_40248__$1 = (state_40268[(2)]);
var inst_40249 = (inst_40248__$1 == null);
var inst_40250 = cljs.core.not(inst_40249);
var state_40268__$1 = (function (){var statearr_40273 = state_40268;
(statearr_40273[(8)] = inst_40248__$1);

return statearr_40273;
})();
if(inst_40250){
var statearr_40274_41491 = state_40268__$1;
(statearr_40274_41491[(1)] = (5));

} else {
var statearr_40275_41492 = state_40268__$1;
(statearr_40275_41492[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (6))){
var state_40268__$1 = state_40268;
var statearr_40276_41493 = state_40268__$1;
(statearr_40276_41493[(2)] = null);

(statearr_40276_41493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (3))){
var inst_40265 = (state_40268[(2)]);
var inst_40266 = cljs.core.async.close_BANG_(out);
var state_40268__$1 = (function (){var statearr_40277 = state_40268;
(statearr_40277[(9)] = inst_40265);

return statearr_40277;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40268__$1,inst_40266);
} else {
if((state_val_40269 === (2))){
var state_40268__$1 = state_40268;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40268__$1,(4),ch);
} else {
if((state_val_40269 === (11))){
var inst_40248 = (state_40268[(8)]);
var inst_40257 = (state_40268[(2)]);
var inst_40245 = inst_40248;
var state_40268__$1 = (function (){var statearr_40278 = state_40268;
(statearr_40278[(7)] = inst_40245);

(statearr_40278[(10)] = inst_40257);

return statearr_40278;
})();
var statearr_40279_41494 = state_40268__$1;
(statearr_40279_41494[(2)] = null);

(statearr_40279_41494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (9))){
var inst_40248 = (state_40268[(8)]);
var state_40268__$1 = state_40268;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40268__$1,(11),out,inst_40248);
} else {
if((state_val_40269 === (5))){
var inst_40245 = (state_40268[(7)]);
var inst_40248 = (state_40268[(8)]);
var inst_40252 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40248,inst_40245);
var state_40268__$1 = state_40268;
if(inst_40252){
var statearr_40281_41506 = state_40268__$1;
(statearr_40281_41506[(1)] = (8));

} else {
var statearr_40282_41507 = state_40268__$1;
(statearr_40282_41507[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (10))){
var inst_40260 = (state_40268[(2)]);
var state_40268__$1 = state_40268;
var statearr_40283_41508 = state_40268__$1;
(statearr_40283_41508[(2)] = inst_40260);

(statearr_40283_41508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40269 === (8))){
var inst_40245 = (state_40268[(7)]);
var tmp40280 = inst_40245;
var inst_40245__$1 = tmp40280;
var state_40268__$1 = (function (){var statearr_40284 = state_40268;
(statearr_40284[(7)] = inst_40245__$1);

return statearr_40284;
})();
var statearr_40285_41517 = state_40268__$1;
(statearr_40285_41517[(2)] = null);

(statearr_40285_41517[(1)] = (2));


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
});})(c__38930__auto___41483,out))
;
return ((function (switch__38829__auto__,c__38930__auto___41483,out){
return (function() {
var cljs$core$async$state_machine__38830__auto__ = null;
var cljs$core$async$state_machine__38830__auto____0 = (function (){
var statearr_40286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40286[(0)] = cljs$core$async$state_machine__38830__auto__);

(statearr_40286[(1)] = (1));

return statearr_40286;
});
var cljs$core$async$state_machine__38830__auto____1 = (function (state_40268){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_40268);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e40287){if((e40287 instanceof Object)){
var ex__38833__auto__ = e40287;
var statearr_40288_41518 = state_40268;
(statearr_40288_41518[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40268);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41523 = state_40268;
state_40268 = G__41523;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$state_machine__38830__auto__ = function(state_40268){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38830__auto____1.call(this,state_40268);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38830__auto____0;
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38830__auto____1;
return cljs$core$async$state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___41483,out))
})();
var state__38932__auto__ = (function (){var statearr_40289 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_40289[(6)] = c__38930__auto___41483);

return statearr_40289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___41483,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40291 = arguments.length;
switch (G__40291) {
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
var c__38930__auto___41528 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___41528,out){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___41528,out){
return (function (state_40329){
var state_val_40330 = (state_40329[(1)]);
if((state_val_40330 === (7))){
var inst_40325 = (state_40329[(2)]);
var state_40329__$1 = state_40329;
var statearr_40331_41529 = state_40329__$1;
(statearr_40331_41529[(2)] = inst_40325);

(statearr_40331_41529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40330 === (1))){
var inst_40292 = (new Array(n));
var inst_40293 = inst_40292;
var inst_40294 = (0);
var state_40329__$1 = (function (){var statearr_40332 = state_40329;
(statearr_40332[(7)] = inst_40294);

(statearr_40332[(8)] = inst_40293);

return statearr_40332;
})();
var statearr_40333_41530 = state_40329__$1;
(statearr_40333_41530[(2)] = null);

(statearr_40333_41530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40330 === (4))){
var inst_40297 = (state_40329[(9)]);
var inst_40297__$1 = (state_40329[(2)]);
var inst_40298 = (inst_40297__$1 == null);
var inst_40299 = cljs.core.not(inst_40298);
var state_40329__$1 = (function (){var statearr_40334 = state_40329;
(statearr_40334[(9)] = inst_40297__$1);

return statearr_40334;
})();
if(inst_40299){
var statearr_40335_41534 = state_40329__$1;
(statearr_40335_41534[(1)] = (5));

} else {
var statearr_40336_41535 = state_40329__$1;
(statearr_40336_41535[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40330 === (15))){
var inst_40319 = (state_40329[(2)]);
var state_40329__$1 = state_40329;
var statearr_40337_41536 = state_40329__$1;
(statearr_40337_41536[(2)] = inst_40319);

(statearr_40337_41536[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40330 === (13))){
var state_40329__$1 = state_40329;
var statearr_40338_41537 = state_40329__$1;
(statearr_40338_41537[(2)] = null);

(statearr_40338_41537[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40330 === (6))){
var inst_40294 = (state_40329[(7)]);
var inst_40315 = (inst_40294 > (0));
var state_40329__$1 = state_40329;
if(cljs.core.truth_(inst_40315)){
var statearr_40339_41538 = state_40329__$1;
(statearr_40339_41538[(1)] = (12));

} else {
var statearr_40340_41539 = state_40329__$1;
(statearr_40340_41539[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40330 === (3))){
var inst_40327 = (state_40329[(2)]);
var state_40329__$1 = state_40329;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40329__$1,inst_40327);
} else {
if((state_val_40330 === (12))){
var inst_40293 = (state_40329[(8)]);
var inst_40317 = cljs.core.vec(inst_40293);
var state_40329__$1 = state_40329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40329__$1,(15),out,inst_40317);
} else {
if((state_val_40330 === (2))){
var state_40329__$1 = state_40329;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40329__$1,(4),ch);
} else {
if((state_val_40330 === (11))){
var inst_40309 = (state_40329[(2)]);
var inst_40310 = (new Array(n));
var inst_40293 = inst_40310;
var inst_40294 = (0);
var state_40329__$1 = (function (){var statearr_40341 = state_40329;
(statearr_40341[(7)] = inst_40294);

(statearr_40341[(10)] = inst_40309);

(statearr_40341[(8)] = inst_40293);

return statearr_40341;
})();
var statearr_40342_41544 = state_40329__$1;
(statearr_40342_41544[(2)] = null);

(statearr_40342_41544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40330 === (9))){
var inst_40293 = (state_40329[(8)]);
var inst_40307 = cljs.core.vec(inst_40293);
var state_40329__$1 = state_40329;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40329__$1,(11),out,inst_40307);
} else {
if((state_val_40330 === (5))){
var inst_40294 = (state_40329[(7)]);
var inst_40297 = (state_40329[(9)]);
var inst_40302 = (state_40329[(11)]);
var inst_40293 = (state_40329[(8)]);
var inst_40301 = (inst_40293[inst_40294] = inst_40297);
var inst_40302__$1 = (inst_40294 + (1));
var inst_40303 = (inst_40302__$1 < n);
var state_40329__$1 = (function (){var statearr_40343 = state_40329;
(statearr_40343[(11)] = inst_40302__$1);

(statearr_40343[(12)] = inst_40301);

return statearr_40343;
})();
if(cljs.core.truth_(inst_40303)){
var statearr_40344_41545 = state_40329__$1;
(statearr_40344_41545[(1)] = (8));

} else {
var statearr_40345_41546 = state_40329__$1;
(statearr_40345_41546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40330 === (14))){
var inst_40322 = (state_40329[(2)]);
var inst_40323 = cljs.core.async.close_BANG_(out);
var state_40329__$1 = (function (){var statearr_40347 = state_40329;
(statearr_40347[(13)] = inst_40322);

return statearr_40347;
})();
var statearr_40348_41547 = state_40329__$1;
(statearr_40348_41547[(2)] = inst_40323);

(statearr_40348_41547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40330 === (10))){
var inst_40313 = (state_40329[(2)]);
var state_40329__$1 = state_40329;
var statearr_40349_41548 = state_40329__$1;
(statearr_40349_41548[(2)] = inst_40313);

(statearr_40349_41548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40330 === (8))){
var inst_40302 = (state_40329[(11)]);
var inst_40293 = (state_40329[(8)]);
var tmp40346 = inst_40293;
var inst_40293__$1 = tmp40346;
var inst_40294 = inst_40302;
var state_40329__$1 = (function (){var statearr_40350 = state_40329;
(statearr_40350[(7)] = inst_40294);

(statearr_40350[(8)] = inst_40293__$1);

return statearr_40350;
})();
var statearr_40351_41549 = state_40329__$1;
(statearr_40351_41549[(2)] = null);

(statearr_40351_41549[(1)] = (2));


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
});})(c__38930__auto___41528,out))
;
return ((function (switch__38829__auto__,c__38930__auto___41528,out){
return (function() {
var cljs$core$async$state_machine__38830__auto__ = null;
var cljs$core$async$state_machine__38830__auto____0 = (function (){
var statearr_40352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40352[(0)] = cljs$core$async$state_machine__38830__auto__);

(statearr_40352[(1)] = (1));

return statearr_40352;
});
var cljs$core$async$state_machine__38830__auto____1 = (function (state_40329){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_40329);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e40353){if((e40353 instanceof Object)){
var ex__38833__auto__ = e40353;
var statearr_40354_41552 = state_40329;
(statearr_40354_41552[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40353;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41554 = state_40329;
state_40329 = G__41554;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$state_machine__38830__auto__ = function(state_40329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38830__auto____1.call(this,state_40329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38830__auto____0;
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38830__auto____1;
return cljs$core$async$state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___41528,out))
})();
var state__38932__auto__ = (function (){var statearr_40355 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_40355[(6)] = c__38930__auto___41528);

return statearr_40355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___41528,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40357 = arguments.length;
switch (G__40357) {
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
var c__38930__auto___41557 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__38930__auto___41557,out){
return (function (){
var f__38931__auto__ = (function (){var switch__38829__auto__ = ((function (c__38930__auto___41557,out){
return (function (state_40399){
var state_val_40400 = (state_40399[(1)]);
if((state_val_40400 === (7))){
var inst_40395 = (state_40399[(2)]);
var state_40399__$1 = state_40399;
var statearr_40401_41558 = state_40399__$1;
(statearr_40401_41558[(2)] = inst_40395);

(statearr_40401_41558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (1))){
var inst_40358 = [];
var inst_40359 = inst_40358;
var inst_40360 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40399__$1 = (function (){var statearr_40402 = state_40399;
(statearr_40402[(7)] = inst_40360);

(statearr_40402[(8)] = inst_40359);

return statearr_40402;
})();
var statearr_40403_41559 = state_40399__$1;
(statearr_40403_41559[(2)] = null);

(statearr_40403_41559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (4))){
var inst_40363 = (state_40399[(9)]);
var inst_40363__$1 = (state_40399[(2)]);
var inst_40364 = (inst_40363__$1 == null);
var inst_40365 = cljs.core.not(inst_40364);
var state_40399__$1 = (function (){var statearr_40404 = state_40399;
(statearr_40404[(9)] = inst_40363__$1);

return statearr_40404;
})();
if(inst_40365){
var statearr_40405_41560 = state_40399__$1;
(statearr_40405_41560[(1)] = (5));

} else {
var statearr_40406_41561 = state_40399__$1;
(statearr_40406_41561[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (15))){
var inst_40389 = (state_40399[(2)]);
var state_40399__$1 = state_40399;
var statearr_40407_41562 = state_40399__$1;
(statearr_40407_41562[(2)] = inst_40389);

(statearr_40407_41562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (13))){
var state_40399__$1 = state_40399;
var statearr_40408_41563 = state_40399__$1;
(statearr_40408_41563[(2)] = null);

(statearr_40408_41563[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (6))){
var inst_40359 = (state_40399[(8)]);
var inst_40384 = inst_40359.length;
var inst_40385 = (inst_40384 > (0));
var state_40399__$1 = state_40399;
if(cljs.core.truth_(inst_40385)){
var statearr_40409_41565 = state_40399__$1;
(statearr_40409_41565[(1)] = (12));

} else {
var statearr_40410_41567 = state_40399__$1;
(statearr_40410_41567[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (3))){
var inst_40397 = (state_40399[(2)]);
var state_40399__$1 = state_40399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40399__$1,inst_40397);
} else {
if((state_val_40400 === (12))){
var inst_40359 = (state_40399[(8)]);
var inst_40387 = cljs.core.vec(inst_40359);
var state_40399__$1 = state_40399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40399__$1,(15),out,inst_40387);
} else {
if((state_val_40400 === (2))){
var state_40399__$1 = state_40399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40399__$1,(4),ch);
} else {
if((state_val_40400 === (11))){
var inst_40367 = (state_40399[(10)]);
var inst_40363 = (state_40399[(9)]);
var inst_40377 = (state_40399[(2)]);
var inst_40378 = [];
var inst_40379 = inst_40378.push(inst_40363);
var inst_40359 = inst_40378;
var inst_40360 = inst_40367;
var state_40399__$1 = (function (){var statearr_40411 = state_40399;
(statearr_40411[(7)] = inst_40360);

(statearr_40411[(11)] = inst_40379);

(statearr_40411[(12)] = inst_40377);

(statearr_40411[(8)] = inst_40359);

return statearr_40411;
})();
var statearr_40412_41569 = state_40399__$1;
(statearr_40412_41569[(2)] = null);

(statearr_40412_41569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (9))){
var inst_40359 = (state_40399[(8)]);
var inst_40375 = cljs.core.vec(inst_40359);
var state_40399__$1 = state_40399;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40399__$1,(11),out,inst_40375);
} else {
if((state_val_40400 === (5))){
var inst_40360 = (state_40399[(7)]);
var inst_40367 = (state_40399[(10)]);
var inst_40363 = (state_40399[(9)]);
var inst_40367__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_40363) : f.call(null,inst_40363));
var inst_40368 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_40367__$1,inst_40360);
var inst_40369 = cljs.core.keyword_identical_QMARK_(inst_40360,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40370 = ((inst_40368) || (inst_40369));
var state_40399__$1 = (function (){var statearr_40413 = state_40399;
(statearr_40413[(10)] = inst_40367__$1);

return statearr_40413;
})();
if(cljs.core.truth_(inst_40370)){
var statearr_40414_41574 = state_40399__$1;
(statearr_40414_41574[(1)] = (8));

} else {
var statearr_40415_41576 = state_40399__$1;
(statearr_40415_41576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (14))){
var inst_40392 = (state_40399[(2)]);
var inst_40393 = cljs.core.async.close_BANG_(out);
var state_40399__$1 = (function (){var statearr_40417 = state_40399;
(statearr_40417[(13)] = inst_40392);

return statearr_40417;
})();
var statearr_40418_41577 = state_40399__$1;
(statearr_40418_41577[(2)] = inst_40393);

(statearr_40418_41577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (10))){
var inst_40382 = (state_40399[(2)]);
var state_40399__$1 = state_40399;
var statearr_40419_41578 = state_40399__$1;
(statearr_40419_41578[(2)] = inst_40382);

(statearr_40419_41578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40400 === (8))){
var inst_40367 = (state_40399[(10)]);
var inst_40363 = (state_40399[(9)]);
var inst_40359 = (state_40399[(8)]);
var inst_40372 = inst_40359.push(inst_40363);
var tmp40416 = inst_40359;
var inst_40359__$1 = tmp40416;
var inst_40360 = inst_40367;
var state_40399__$1 = (function (){var statearr_40420 = state_40399;
(statearr_40420[(7)] = inst_40360);

(statearr_40420[(14)] = inst_40372);

(statearr_40420[(8)] = inst_40359__$1);

return statearr_40420;
})();
var statearr_40421_41580 = state_40399__$1;
(statearr_40421_41580[(2)] = null);

(statearr_40421_41580[(1)] = (2));


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
});})(c__38930__auto___41557,out))
;
return ((function (switch__38829__auto__,c__38930__auto___41557,out){
return (function() {
var cljs$core$async$state_machine__38830__auto__ = null;
var cljs$core$async$state_machine__38830__auto____0 = (function (){
var statearr_40422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40422[(0)] = cljs$core$async$state_machine__38830__auto__);

(statearr_40422[(1)] = (1));

return statearr_40422;
});
var cljs$core$async$state_machine__38830__auto____1 = (function (state_40399){
while(true){
var ret_value__38831__auto__ = (function (){try{while(true){
var result__38832__auto__ = switch__38829__auto__(state_40399);
if(cljs.core.keyword_identical_QMARK_(result__38832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38832__auto__;
}
break;
}
}catch (e40423){if((e40423 instanceof Object)){
var ex__38833__auto__ = e40423;
var statearr_40424_41585 = state_40399;
(statearr_40424_41585[(5)] = ex__38833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40423;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__38831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41588 = state_40399;
state_40399 = G__41588;
continue;
} else {
return ret_value__38831__auto__;
}
break;
}
});
cljs$core$async$state_machine__38830__auto__ = function(state_40399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38830__auto____1.call(this,state_40399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38830__auto____0;
cljs$core$async$state_machine__38830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38830__auto____1;
return cljs$core$async$state_machine__38830__auto__;
})()
;})(switch__38829__auto__,c__38930__auto___41557,out))
})();
var state__38932__auto__ = (function (){var statearr_40425 = (f__38931__auto__.cljs$core$IFn$_invoke$arity$0 ? f__38931__auto__.cljs$core$IFn$_invoke$arity$0() : f__38931__auto__.call(null));
(statearr_40425[(6)] = c__38930__auto___41557);

return statearr_40425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__38932__auto__);
});})(c__38930__auto___41557,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
