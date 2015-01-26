/**
 * Created by dupenghui on 2014/12/4.
 */
define(function(require){
    require("angular")
    var webAppCtrl=angular.module("webApp.controllers",[]);

    var d3TestCtrl=require("controller/module_ctrls/d3Test")
    var objectAsDataCtrl=require("controller/module_ctrls/object-as-data")
    var html5Load1Ctrl=require("controller/module_ctrls/html5Load1Ctrl")
    webAppCtrl.controller({
        d3TestCtrl:d3TestCtrl,
        objectAsDataCtrl:objectAsDataCtrl,
        html5Load1Ctrl:html5Load1Ctrl

    })
    return webAppCtrl
})
