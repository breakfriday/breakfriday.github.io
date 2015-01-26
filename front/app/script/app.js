/**
 * Created by dupenghui on 2014/12/2.
 */
define(function(require){
    var angular= require("angular")
    var controllers=require("controller/controllers")
    /*var ngRoute=require("angularRoute")*/
    var ngSanitize=require("angularSanitize")
    var  uiRouter=require("angularUiRoute")
    var webApp=angular.module("webApp",["ui.router","ngSanitize",controllers.name])
    var template=require("text!view/template.html")
    webApp.config(["$stateProvider","$urlRouterProvider",function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/html5Load1");
        //
        // Now set up the states
        $stateProvider

    /*        .state('d3Test', {
                url: "/d3Test",
                templateUrl: "view/d3Test.html"
            })
            .state('objectAsData', {
                url: "/objectAsData",
                templateUrl: "view/objectAsData.html"
            })*/
            .state('css3_1', {
                url: "/css3_1",
                templateUrl: "view/css3_1.html"
            })
            .state('html5Load1', {
                url: "/html5Load1",
                templateUrl: "view/html5Loading1.html"
            })
    }])

    var putTpl=["$templateCache","tpl",function($templateCache,template){
        template=$(template)
        for(var i=0 ; i<template.length;i++){
            var id=template[i]["id"]
            var tpl=$(template[i]).html()
            if(id){
                $templateCache.put(id,tpl);
            }
        }
    }]

    webApp.run(["$templateCache","$injector",function($templateCache,$injector) {
        var template=require("text!view/template.html")
        $injector.invoke(putTpl,this,{tpl:template})

    }]);
    return webApp
})