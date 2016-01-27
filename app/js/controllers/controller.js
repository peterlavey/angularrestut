angular.module('FenrirCtrl', [])
.controller('AnimalesCtrl', ['$scope', function($scope) {
	$scope.animales=[
		{"nombre": "gato", "tipo":"Tierra"},
		{"nombre":"perro", "tipo":"Tierra"},
		{"nombre":"calamar", "tipo":"Agua"},
		{"nombre":"golondrina", "tipo":"Aire"}
	];
	$scope.animalesArray=["gato","perro"];
	//$scope.query="";
	$scope.order="nombre";
}])
.directive('animal',function() {
	return{
		template: '<ul><li ng-repeat="animal in animales | filter:query | orderBy:order">{{animal.nombre}}<p>{{animal.tipo}}</p></li></ul>'
	}
})
.controller('AnimalesImagenCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
		$scope.imageSrc=$routeParams.id;
}])
.controller('ColoresCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {
	$scope.color=$routeParams.id;
}])
