(function(){
'use strict'
//load main module reference 
let dv4app = angular.module('dv4app');

//UI-ROUTER configuration
dv4app.config(routerCfg);
//inject dependencies
routerCfg.$inject = ['$stateProvider','$urlRouterProvider'];
//define main routes function 
function routerCfg($stateProvider,$urlRouterProvider){
    //define default value 
    $urlRouterProvider.otherwise('/home');
    
    /*//setup ui states
    mainRoutes.map((item)=>{
        //add states 
        $stateProvider.state(item.sref,item);
            
    });*/
    
    $stateProvider
    .state('home',{
        url:'/home',
        templateUrl:'view/home.html',
        controller:'HomeCtrl as home',
        resolve:{
            //get categories from API
            categories:['MenuDataService',(dataService)=>{
                return dataService.getAllCategories();
            }]
        }
    })    
    .state('home.category',{
        url:'/category/{catId}',
        resolve:{
            items:['$stateParams','MenuDataService',(sp,data)=>{
                return data.getItemsForCategory(sp.catId);
            }]
        },
        controller:'ItemsCtrl as category',
        template:`            
            <h3>ShortName: {{category.title}}</h3>           
            <dv4-category-items-list
                items="category.items" 
            ></dv4-category-items-list>
        `
    });

}

//-------------------------------
// ROUTES SPECIFIC CONTROLLERS 
dv4app
.controller('HomeCtrl',[
    //dependencies 
    'categories',
    homeCtrl
]);
function homeCtrl(categories){
    let home = this;
    home.categories = categories;
}

dv4app.controller('ItemsCtrl',[
    //dependencies
    '$stateParams','items',
    ItemsCtrl
]);
function ItemsCtrl(sp,items){
    let category = this;
    //load title
    category.title = sp.catId;
    category.items = items;
}


})();