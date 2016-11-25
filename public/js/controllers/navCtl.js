angular.module('myControllers')
.controller('controllerNav', function($scope,$rootScope,phoneService, $location,$route){
	
	$scope.goSearch =function(){
		phoneService.getDevices($scope.search)
			.then(function(response){

				$rootScope.phonesResults=response.data;
				console.log($scope.phonesResults)
				$location.path('/search')
				$route.reload()
			})
	}
})
.controller('controllerViewSearch', function($rootScope,$scope,phoneService){
	$scope.phones = $rootScope.phonesResults;

})