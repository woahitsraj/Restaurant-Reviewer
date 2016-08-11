
var restaurantReviewer = angular.module('restaurantReviewer', ['ngRoute', 'ngResource']);

restaurantReviewer.config(['$routeProvider',function($routeProvider) {
	$routeProvider
	.$.when('/',{
		templateUrl: 'main.html',
		controller: 'mainController'
	})
	.$.when('/restaurant',{
		templateUrl: 'restaurant.html',
		controller: 'restaurantController'
	});
	
}]);


restaurantReviewer.controller('mainController', ['$scope', function($scope){
	
}]);

restaurantReviewer.controller('restaurantController', ['$scope', function($scope){
	
}]);