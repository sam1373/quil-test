// Compiled by ClojureScript 1.9.293 {}
goog.provide('quil_test.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
quil_test.core.setup = (function quil_test$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"parts","parts",849007691),cljs.core.PersistentHashSet.EMPTY], null);
});
quil_test.core.timer = (function quil_test$core$timer(p){
return cljs.core.update_in.call(null,p,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),(function (p1__8460_SHARP_){
return (p1__8460_SHARP_ - (1));
}));
});
quil_test.core.old_QMARK_ = (function quil_test$core$old_QMARK_(p){
return ((0) > new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p));
});
quil_test.core.update_state = (function quil_test$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.mouse_x.call(null),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.mouse_y.call(null),new cljs.core.Keyword(null,"parts","parts",849007691),cljs.core.remove.call(null,quil_test.core.old_QMARK_,cljs.core.mapv.call(null,quil_test.core.timer,cljs.core.conj.call(null,new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.mouse_x.call(null),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.mouse_y.call(null),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"time","time",1385887882),(15)], null))))], null);
});
quil_test.core.draw_state = (function quil_test$core$draw_state(state){
quil.core.background.call(null,(240));

var ps = new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(state);
while(true){
var f = cljs.core.first.call(null,ps);
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(f);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(f);
var col = new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(f);
var s = cljs.core.second.call(null,ps);
var x0 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(s);
var y0 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(s);
if((cljs.core.count.call(null,ps) <= (1))){
return new cljs.core.Keyword(null,"nothing","nothing",-1022703296);
} else {
quil.core.stroke.call(null,col,(255),(255));

quil.core.line.call(null,x,y,x0,y0);

var G__8461 = cljs.core.rest.call(null,ps);
ps = G__8461;
continue;
}
break;
}
});
quil_test.core.quil_test = (function quil_test$core$quil_test(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"quil-test",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,quil_test.core.update_state))?(function() { 
var G__8462__delegate = function (args){
return cljs.core.apply.call(null,quil_test.core.update_state,args);
};
var G__8462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8463__i = 0, G__8463__a = new Array(arguments.length -  0);
while (G__8463__i < G__8463__a.length) {G__8463__a[G__8463__i] = arguments[G__8463__i + 0]; ++G__8463__i;}
  args = new cljs.core.IndexedSeq(G__8463__a,0);
} 
return G__8462__delegate.call(this,args);};
G__8462.cljs$lang$maxFixedArity = 0;
G__8462.cljs$lang$applyTo = (function (arglist__8464){
var args = cljs.core.seq(arglist__8464);
return G__8462__delegate(args);
});
G__8462.cljs$core$IFn$_invoke$arity$variadic = G__8462__delegate;
return G__8462;
})()
:quil_test.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,quil_test.core.setup))?(function() { 
var G__8465__delegate = function (args){
return cljs.core.apply.call(null,quil_test.core.setup,args);
};
var G__8465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8466__i = 0, G__8466__a = new Array(arguments.length -  0);
while (G__8466__i < G__8466__a.length) {G__8466__a[G__8466__i] = arguments[G__8466__i + 0]; ++G__8466__i;}
  args = new cljs.core.IndexedSeq(G__8466__a,0);
} 
return G__8465__delegate.call(this,args);};
G__8465.cljs$lang$maxFixedArity = 0;
G__8465.cljs$lang$applyTo = (function (arglist__8467){
var args = cljs.core.seq(arglist__8467);
return G__8465__delegate(args);
});
G__8465.cljs$core$IFn$_invoke$arity$variadic = G__8465__delegate;
return G__8465;
})()
:quil_test.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,quil_test.core.draw_state))?(function() { 
var G__8468__delegate = function (args){
return cljs.core.apply.call(null,quil_test.core.draw_state,args);
};
var G__8468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8469__i = 0, G__8469__a = new Array(arguments.length -  0);
while (G__8469__i < G__8469__a.length) {G__8469__a[G__8469__i] = arguments[G__8469__i + 0]; ++G__8469__i;}
  args = new cljs.core.IndexedSeq(G__8469__a,0);
} 
return G__8468__delegate.call(this,args);};
G__8468.cljs$lang$maxFixedArity = 0;
G__8468.cljs$lang$applyTo = (function (arglist__8470){
var args = cljs.core.seq(arglist__8470);
return G__8468__delegate(args);
});
G__8468.cljs$core$IFn$_invoke$arity$variadic = G__8468__delegate;
return G__8468;
})()
:quil_test.core.draw_state));
});
goog.exportSymbol('quil_test.core.quil_test', quil_test.core.quil_test);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7735__7736__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7735__7736__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),quil_test.core.quil_test,new cljs.core.Keyword(null,"host-id","host-id",742376279),"quil-test"], null));
}

//# sourceMappingURL=core.js.map