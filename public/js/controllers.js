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

	$scope.Myobject = {}

	Myobject.deviceName = $scope.deviceName;
	Myobject.brand = $scope.brand;
	Myobject.img = $scope.img;
	Myobject.dimensions = $scope.dimensions;
	Myobject.size = $scope.size;
	Myobject.sim = $scope.sim;
	Myobject.scrrenType = $scope.scrrenType;
	Myobject.resolution = $scope.resolution;
	Myobject.card_slot = $scope.card_slot;
	Myobject.wlan = $scope.wlan;
	Myobject.blutooth = $scope.blutooth;
	Myobject.gps = $scope.gps;
	Myobject.radio = $scope.radio;
	Myobject.usb = $scope.usb;
	Myobject.batery = $scope.batery;
	Myobject.colors= $scope.colors
	Myobject.sensors = $scope.sensors;
	Myobject.memory = $scope.memory;
	Myobject.os = $scope.os;
	Myobject.cam = $scope.cam;
	Myobject.c_secondary = $scope.c_secondary;
	Myobject.c_primary = $scope.c_primary;
	Myobject.video = $scope.video;
	Myobject.chipset = $scope.chipset;
	Myobject.conections = $scope.conections;


})