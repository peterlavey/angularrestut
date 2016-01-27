var app=angular.module('FenrirApp', ['ngRoute', 'FenrirCtrl']);
app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/animales',{
    templateUrl:'views/animales.html',
    controller:'AnimalesCtrl'
  }).
  when('/animales/:id',{
    templateUrl:'views/animales-imagen.html',
    controller:'AnimalesImagenCtrl'
  }).
  when('/colores/:id',{
    templateUrl:'views/colores.html',
    controller:'ColoresCtrl'
  }).
  otherwise({
    redirectTo:'/animales'
  });
}]);
