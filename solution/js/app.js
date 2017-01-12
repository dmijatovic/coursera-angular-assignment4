//import 
//import { mainRoutes } from './routes';

//hoezo iffie?
(function(){
'use strict';

//create app
let dv4app = angular.module("dv4app",[
    //dependecies
    'ui.router'
]);

//UI-ROUTER configuration
dv4app.config(routerCfg);
//inject dependencies
routerCfg.$inject = ['$stateProvider','$urlRouterProvider'];
//define main routes function 
function routerCfg($stateProvider,$urlRouterProvider){
    //define default value 
    $urlRouterProvider.otherwise('/home');
    //setup ui states
    mainRoutes.map((item)=>{
        //add states 
        $stateProvider.state(item.sref,item);
            
    });
    /*
    $stateProvider
    .state('home',{
        url:'/home',
        templateUrl:'view/home.html'
    })
    .state('about',{
        url:'/about',
        templateUrl:'view/about.html'
    });*/
}

})();