angular.module('myServices')
	.factory('phoneService', function($http) {

			function getLasted() {
				return $http.get("/data");
			}

			function getDevices(name) {
				return $http.get("/search?name="+name);
			}

			function updateDevice(id,data){
				return $http.put('/update/'+id,data)
			}
			function deleteDevice(id){
				return $http.delete('/delete/'+id)
			}


			return {
				getLasted: getLasted,
				getDevices: getDevices,
				updateDevice: updateDevice,
				deleteDevice: deleteDevice
			}
	})