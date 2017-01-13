(function(){
'use strict'

//create categories component 
angular.module('dv4app')
.component('dv4MenuCategories',{
    controller:dv4MenuCategories,
    controllerAs:'cat',
    bindings:{
        categories:'<'
    },
    template:`
        <div data-ng-repeat='item in cat.categories'>
            <a ui-sref="category.items({catId:item.short_name})">{{item.name}}</a>
        </div>
     `
});
function dv4MenuCategories(){
    let cat = this;
    //loaded through bindings
    //cat.categories = categories;
};

})()