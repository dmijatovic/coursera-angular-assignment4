(function(){
'use strict'

angular.module('data')
    .service('MenuDataService',[
        '$http','$q',
        menuDataService
    ]);

function menuDataService($http,$q){
    let menu = this;
    //init categories 
    menu.category=[];
    //get all categories 
    menu.getAllCategories = function(){
        //check cache categories 
        if (!menu.categories){
            $http({
                type:"GET",
                url:'https://davids-restaurant.herokuapp.com/categories.json'
            })
            .then((resp)=>{
                //cache categories 
                menu.categories = resp.data;
            })
            .catch((err)=>{
                //no categories 
                menu.categories = undefined;
                throw err;
            });
        }
    };    
    //get all items from category 
    menu.getItemsForCategory = function(categoryShortName){
        //ignore if categoryShortName not provided
        if (!categoryShortName){
            return null;
        }
        //check if cached category
        if (!menu.category[categoryShortName]){
             $http({
                type:"GET",
                url:'https://davids-restaurant.herokuapp.com/menu_items.json',
                parameters:{
                    category: categoryShortName
                }
            })
            .then((resp)=>{
                //cache categories 
                menu.category[categoryShortName] = resp.data;
            })
            .catch((err)=>{
                //no categories 
                menu.category[categoryShortName] = undefined;
                throw err;
            });
        }
    }
}


})();