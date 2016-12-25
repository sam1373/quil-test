// Compiled by ClojureScript 1.9.293 {}
goog.provide('quil_test.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
quil_test.core.setup = (function quil_test$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(100),new cljs.core.Keyword(null,"parts","parts",849007691),cljs.core.PersistentHashSet.EMPTY], null);
});
quil_test.core.update_state = (function quil_test$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"x","x",2099068185),quil.core.mouse_x.call(null),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.mouse_y.call(null),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(state)], null);
});
quil_test.core.draw_state = (function quil_test$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var mult = (1);
var x = (mult * new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(state));
var y = (mult * new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(state));
return quil.core.ellipse.call(null,x,y,(10),(10));
});
quil_test.core.quil_test = (function quil_test$core$quil_test(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"quil-test",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,quil_test.core.update_state))?(function() { 
var G__8835__delegate = function (args){
return cljs.core.apply.call(null,quil_test.core.update_state,args);
};
var G__8835 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8836__i = 0, G__8836__a = new Array(arguments.length -  0);
while (G__8836__i < G__8836__a.length) {G__8836__a[G__8836__i] = arguments[G__8836__i + 0]; ++G__8836__i;}
  args = new cljs.core.IndexedSeq(G__8836__a,0);
} 
return G__8835__delegate.call(this,args);};
G__8835.cljs$lang$maxFixedArity = 0;
G__8835.cljs$lang$applyTo = (function (arglist__8837){
var args = cljs.core.seq(arglist__8837);
return G__8835__delegate(args);
});
G__8835.cljs$core$IFn$_invoke$arity$variadic = G__8835__delegate;
return G__8835;
})()
:quil_test.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,quil_test.core.setup))?(function() { 
var G__8838__delegate = function (args){
return cljs.core.apply.call(null,quil_test.core.setup,args);
};
var G__8838 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8839__i = 0, G__8839__a = new Array(arguments.length -  0);
while (G__8839__i < G__8839__a.length) {G__8839__a[G__8839__i] = arguments[G__8839__i + 0]; ++G__8839__i;}
  args = new cljs.core.IndexedSeq(G__8839__a,0);
} 
return G__8838__delegate.call(this,args);};
G__8838.cljs$lang$maxFixedArity = 0;
G__8838.cljs$lang$applyTo = (function (arglist__8840){
var args = cljs.core.seq(arglist__8840);
return G__8838__delegate(args);
});
G__8838.cljs$core$IFn$_invoke$arity$variadic = G__8838__delegate;
return G__8838;
})()
:quil_test.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,quil_test.core.draw_state))?(function() { 
var G__8841__delegate = function (args){
return cljs.core.apply.call(null,quil_test.core.draw_state,args);
};
var G__8841 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8842__i = 0, G__8842__a = new Array(arguments.length -  0);
while (G__8842__i < G__8842__a.length) {G__8842__a[G__8842__i] = arguments[G__8842__i + 0]; ++G__8842__i;}
  args = new cljs.core.IndexedSeq(G__8842__a,0);
} 
return G__8841__delegate.call(this,args);};
G__8841.cljs$lang$maxFixedArity = 0;
G__8841.cljs$lang$applyTo = (function (arglist__8843){
var args = cljs.core.seq(arglist__8843);
return G__8841__delegate(args);
});
G__8841.cljs$core$IFn$_invoke$arity$variadic = G__8841__delegate;
return G__8841;
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