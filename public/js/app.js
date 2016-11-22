angular.module('myApp',['ngRoute'])
	.config( function($routeProvider) {

		$routeProvider
		.when('/', {
			templateUrl: 'view/home.html',
			controller: 'controllerHome'
		})
		.when('/compare', {
			templateUrl: 'view/compare.html',
			controller: 'controllerCompare'
		})
		.when('/fav', {
			templateUrl: 'view/fav.html',
			controller: 'controllerFav'
		})
		.when('/search', {
			templateUrl: 'view/search.html',
			controller: 'controllerSearch'
		})
		.when('/add', {
			templateUrl: 'view/add.html',
			controller: 'controllerAdd'
		})
		.otherwise({redirectTo: '/'});

	})