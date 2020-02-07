angular.module('myApps', []).controller('myCtrl', function ($scope) {

}).config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/scope', {
      templateUrl: './src/scope/scope.html',
      controller: 'scopeCtrl',
      resolve: ['./src/scope/scopeCtrl.js']
    })
    .otherwise({
      redirectTo: '/scope'
    });
  /* $routeProvider.when(url,{
    template:string, //在ng-view中插入简单的html内容
    templateUrl:string, //在ng-view中插入html模版文件
    controller:string,function / array, //在当前模版上执行的controller函数
    controllerAs:string, //为controller指定别名
    redirectTo:string,function, //重定向的地址
    resolve:object<key,function> //指定当前controller所依赖的其他模块
  }); */
});
return angular.module('myApps', [])