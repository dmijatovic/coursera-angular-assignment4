//all routes defined?!?
const mainRoutes=[
    {label:'Home',
        sref:'home',url:'/home',
        templateUrl:'view/home.html',
        //controller:'HomeCtrl as home'
        resolve:{
            //tab routings
            tabData:()=>{
                return [
                    {label:'Tab 1',title:'This is tab title 1',body:'This is tab body 1'},
                    {label:'Tab 2',title:'This is tab title 2',body:'This is tab body 2'},
                    {label:'Tab 3',title:'This is tab title 3',body:'This is tab body 3'}
                ]
            }
        }       
    },{//home tab routing 
        //label:'Tab',
        sref:'home.tab',url:'/home/tab/{itemId}',
        templateUrl:'view/home-tab.html',
        controller:'homeTabCtrl as tab'
    },
    {sref:'about',url:'/about',templateUrl:'view/about.html',label:'About'},
    {sref:'portfolio',url:'/portfolio',templateUrl:'view/portfolio.html',label:'Portfolio'}
];