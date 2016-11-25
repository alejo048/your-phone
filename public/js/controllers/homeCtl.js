angular.module('myControllers')
.controller('controllerHome', function($scope,phoneService,$rootScope){
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
				if ($.inArray(phone.brand, $scope.brandsIncludes) <0 ) 
					return;
			}

			return phone;
		}

	})

	$rootScope.compareList = []
	
	$rootScope.compare = function(phone){

		$rootScope.button=true;

		$rootScope.compareList.push(phone)
	}

})