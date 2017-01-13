(function(){
'use strict'

//create item component 
angular.module('dv4app')
.component('dv4CategoryItemsList',{
    bindings:{
        items:'<'
    },
    template:`
        <h4>Category items</h4>
        <div data-ng-repeat='item in $ctrl.items'>
            {{item.name}}
        </div>
    `
});

})();