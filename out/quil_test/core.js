// Compiled by ClojureScript 1.9.293 {}
goog.provide('quil_test.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
quil_test.core.setup = (function quil_test$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"angle","angle",1622094254),(0)], null);
});
quil_test.core.update_state = (function quil_test$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + ((cljs.core._EQ_.call(null,quil.core.key_as_keyword.call(null),new cljs.core.Keyword(null,"right","right",-452581833)))?0.1:(0)))], null);
});
quil_test.core.draw_state = (function quil_test$core$draw_state(state){
quil.core.background.call(null,(240));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

var angle = new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state);
var x = ((150) * quil.core.cos.call(null,angle));
var y = ((150) * quil.core.sin.call(null,angle));
var tr__8130__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(quil.core.width.call(null) / (2)),(quil.core.height.call(null) / (2))], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__8130__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
quil_test.core.quil_test = (function quil_test$core$quil_test(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"quil-test",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,quil_test.core.update_state))?(function() { 
var G__8207__delegate = function (args){
return cljs.core.apply.call(null,quil_test.core.update_state,args);
};
var G__8207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8208__i = 0, G__8208__a = new Array(arguments.length -  0);
while (G__8208__i < G__8208__a.length) {G__8208__a[G__8208__i] = arguments[G__8208__i + 0]; ++G__8208__i;}
  args = new cljs.core.IndexedSeq(G__8208__a,0);
} 
return G__8207__delegate.call(this,args);};
G__8207.cljs$lang$maxFixedArity = 0;
G__8207.cljs$lang$applyTo = (function (arglist__8209){
var args = cljs.core.seq(arglist__8209);
return G__8207__delegate(args);
});
G__8207.cljs$core$IFn$_invoke$arity$variadic = G__8207__delegate;
return G__8207;
})()
:quil_test.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,quil_test.core.setup))?(function() { 
var G__8210__delegate = function (args){
return cljs.core.apply.call(null,quil_test.core.setup,args);
};
var G__8210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8211__i = 0, G__8211__a = new Array(arguments.length -  0);
while (G__8211__i < G__8211__a.length) {G__8211__a[G__8211__i] = arguments[G__8211__i + 0]; ++G__8211__i;}
  args = new cljs.core.IndexedSeq(G__8211__a,0);
} 
return G__8210__delegate.call(this,args);};
G__8210.cljs$lang$maxFixedArity = 0;
G__8210.cljs$lang$applyTo = (function (arglist__8212){
var args = cljs.core.seq(arglist__8212);
return G__8210__delegate(args);
});
G__8210.cljs$core$IFn$_invoke$arity$variadic = G__8210__delegate;
return G__8210;
})()
:quil_test.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,quil_test.core.draw_state))?(function() { 
var G__8213__delegate = function (args){
return cljs.core.apply.call(null,quil_test.core.draw_state,args);
};
var G__8213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__8214__i = 0, G__8214__a = new Array(arguments.length -  0);
while (G__8214__i < G__8214__a.length) {G__8214__a[G__8214__i] = arguments[G__8214__i + 0]; ++G__8214__i;}
  args = new cljs.core.IndexedSeq(G__8214__a,0);
} 
return G__8213__delegate.call(this,args);};
G__8213.cljs$lang$maxFixedArity = 0;
G__8213.cljs$lang$applyTo = (function (arglist__8215){
var args = cljs.core.seq(arglist__8215);
return G__8213__delegate(args);
});
G__8213.cljs$core$IFn$_invoke$arity$variadic = G__8213__delegate;
return G__8213;
})()
:quil_test.core.draw_state));
});
goog.exportSymbol('quil_test.core.quil_test', quil_test.core.quil_test);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__7745__7746__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__7745__7746__auto__);
}),null))){
} else {
quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),quil_test.core.quil_test,new cljs.core.Keyword(null,"host-id","host-id",742376279),"quil-test"], null));
}

//# sourceMappingURL=core.js.map