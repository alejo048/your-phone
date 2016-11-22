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

.controller('controllerCompare', function($scope,phoneService){

})
.controller('controllerFav', function($scope,phoneService){

})
.controller('controllerSearch', function($scope,phoneService){

})
.controller('controllerAdd', function($scope,phoneService){

	/*$scope.createObject = function(){
		$scope.myObject = {};

		$scope.myobject.deviceName = $scope.deviceName;
		$scope.myobject.brand = $scope.brand;
		$scope.myobject.img = $scope.img;
		$scope.myobject.dimensions = $scope.dimensions;
		$scope.myobject.size = $scope.size;
		$scope.myobject.sim = $scope.sim;
		$scope.myobject.scrrenType = $scope.scrrenType;
		$scope.myobject.resolution = $scope.resolution;
		$scope.myobject.card_slot = $scope.card_slot;
		$scope.myobject.wlan = $scope.wlan;
		$scope.myobject.blutooth = $scope.blutooth;
		$scope.myobject.gps = $scope.gps;
		$scope.myobject.radio = $scope.radio;
		$scope.myobject.usb = $scope.usb;
		$scope.myobject.batery = $scope.batery;
		$scope.myobject.colors= $scope.colors
		$scope.myobject.sensors = $scope.sensors;
		$scope.myobject.memory = $scope.memory;
		$scope.myobject.os = $scope.os;
		$scope.myobject.cam = $scope.cam;
		$scope.myobject.c_secondary = $scope.c_secondary;
		$scope.myobject.c_primary = $scope.c_primary;
		$scope.myobject.video = $scope.video;
		$scope.myobject.chipset = $scope.chipset;
		$scope.myobject.conections = $scope.conections;

		console.log($scope.myObject)
	}*/


})