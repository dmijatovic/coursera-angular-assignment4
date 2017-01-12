
(function(){
'use strict'
//load main app reference 
let dv4app = angular.module('dv4app');

//define components
dv4app
.component('dv4MainNav',{
    controller:mainNavCtrl,
    template:`
        <!--include only routes with label-->
        <span data-ng-repeat="item in $ctrl.menuItems | filter: item.label">
            <a ui-sref="{{item.sref}}"
                ui-sref-active="active-mnu-item" 
                >{{item.label}}</a>
        <span>     
    `
});
function mainNavCtrl(){
    let $ctrl = this;
    //add routes
    $ctrl.menuItems = mainRoutes;
}

//define controllers
dv4app
    .controller('homeTabCtrl',[
        //dependencies
        '$stateParams','tabData',
        //main function 
        homeTabCtrl
    ]);
function homeTabCtrl(stateParams,tabData){
    let tab = this;
    //inject data from ui-state resolve 
    tab.items = tabData;
    tab.data = tabData[stateParams.itemId];
}

})();