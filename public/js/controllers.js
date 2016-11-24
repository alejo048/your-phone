angular.module("myApp")

.controller('controllerHome', function($scope,phoneService){
	phoneService.getLasted()
	.then(function(response){
		console.log(response.data)
		$scope.brands = response.data[response.data.length-1]
		response.data.pop()
		$scope.phones = response.data

		$scope.brandsIncludes = [];

		$scope.includeBrand = function(brand) {
			var i = $.inArray(brand, $scope.brandsIncludes);
			if (i > -1) {
				$scope.brandsIncludes.splice(i, 1);
			} else {
				$scope.brandsIncludes.push(brand);
			}
		}

		$scope.brandFilter = function(phone){
			if ($scope.brandsIncludes.length > 0) {
				if ($.inArray(phone.Brand, $scope.brandsIncludes) <0 ) 
					return;
			}

			return phone;
		}

	})
})

.controller('controllerSearch', function($scope,$rootScope,phoneService, $location,$route){
	
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



/*.controller('controllerAdd', function($scope,phoneService){

})
.controller('controllerCompare', function($scope,phoneService){

})
.controller('controllerFav', function($scope,phoneService){

})*/