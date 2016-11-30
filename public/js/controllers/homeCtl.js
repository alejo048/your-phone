angular.module('myControllers')
.controller('controllerHome', function($scope,phoneService,$rootScope,ngDialog){
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
	$scope.clickToOpen = function (phone) {
		ngDialog.open({ template: '<img src="'+ phone.img +'" alt="" style="margin-left:25% ; width: 50%; height: 250px"><h3 style= "text-align: center;">'+phone.deviceName+'</h3>' , plain: true});
	};

	$rootScope.compareList = []
	$rootScope.compare = function(phone){
		$rootScope.compareList.push(phone)

		if($rootScope.compareList.length !==0){
			$scope.button=true;
		}else{
			$scope.button=false;
		}
		

	}

})