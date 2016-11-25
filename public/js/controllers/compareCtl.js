angular.module('myControllers')
.controller('controllerCompare', function($scope,$rootScope){
	$scope.phones = $rootScope.compareList;

})