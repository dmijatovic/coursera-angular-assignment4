(function(){
'use strict'
//create refference to data module 
let data = angular.module('dv4data');

//define data service
data.service('MenuDataService',[
        '$http','$q',
        menuDataService
    ]);

function menuDataService($http,$q){
    let menu = this;
    //init category array for cache  
    menu.category=[];
    //get all categories 
    menu.getAllCategories = function(){
        let q = $q.defer()
        //check cache categories 
        if (!menu.categories){
            $http({
                type:"GET",
                url:'https://davids-restaurant.herokuapp.com/categories.json'
            })
            .then((resp)=>{
                //cache categories 
                menu.categories = resp.data;
                q.resolve(resp.data);
            })
            .catch((err)=>{
                //no categories 
                menu.categories = undefined;
                q.reject(err);
            });
        }else{
            //send categories from cache 
            q.resolve(menu.categories);
        }
        //return promise
        return q.promise;
    };    
    //get all items from category 
    menu.getItemsForCategory = function(categoryShortName){
        let q = $q.defer()
        //ignore if categoryShortName not provided
        if (!categoryShortName){
            return null;
        }
        //check if cached category
        if (!menu.category[categoryShortName]){
             $http({
                type:"GET",
                url:'https://davids-restaurant.herokuapp.com/menu_items.json',
                params:{
                    category: categoryShortName
                }
            })
            .then((resp)=>{
                //cache categories 
                menu.category[categoryShortName] = resp.data.menu_items;
                q.resolve(resp.data.menu_items);  
            })
            .catch((err)=>{
                //no categories 
                menu.category[categoryShortName] = undefined;
                q.reject(err);
            });
        }else{
            //resolve from cache
            q.resolve(menu.category[categoryShortName]);
        }
        //return promise 
        return q.promise;
    }
}


})();