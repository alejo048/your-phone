angular.module('myControllers')
.controller('adminCtl', function($location,$scope,$rootScope,phoneService){
	$scope.phones = $rootScope.morePhone;
	$scope.updateInfo = function (){
		var phone = {
			deviceName:$scope.deviceName, 
			brand:$scope.brand, 
			img:$scope.img, 
			dimensions:$scope.dimensions, 
			size:$scope.size, 
			sim:$scope.sim, 
			screenType:$scope.screenType, 
			resolution:$scope.resolution, 
			card_slot:$scope.card_slot, 
			wlan:$scope.wlan, 
			bluetooth:$scope.bluetooth, 
			gps:$scope.gps, 
			radio:$scope.radio, 
			usb:$scope.usb, 
			batery:$scope.batery, 
			colors:$scope.colors, 
			sensors:$scope.sensors, 
			memory:$scope.memory, 
			os:$scope.os, 
			cam:$scope.cam, 
			c_secondary:$scope.c_secondary, 
			c_primary:$scope.c_primary, 
			video:$scope.video, 
			chipset:$scope.chipset, 
			conections:$scope.conections, 
		}
		var id =$scope.phones._id
		phoneService.updateDevice(id,phone)
		.then(response => {
			console.log( response.data.status )
			$location.path("/")
		})
	}

	$scope.deleteInfo = function (){
		var id =$scope.phones._id
		phoneService.deleteDevice(id)
		.then(response => {
			console.log( response.data.status )
			$location.path('/')
		})
	}


})