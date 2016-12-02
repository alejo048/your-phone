angular.module('myApp',['ngRoute','myDirectives','myControllers','ngStorage','ngDialog'])
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
			controller: 'controllerViewSearch'
		})
		.when('/add', {
			templateUrl: 'view/add.html',
			controller: 'controllerAdd'
		})
		.when('/signup', {
			templateUrl: 'view/signup.html',
			controller: 'controllerSign'
		})
		.when('/login', {
			templateUrl: 'view/login.html',
			controller: 'controllerLog'
		})
		.when('/admin', {
			templateUrl: 'view/admin.html',
			controller: 'adminCtl'
		})
		.otherwise({redirectTo: '/'});

	})
