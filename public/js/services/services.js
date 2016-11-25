angular.module('myServices')
	.factory('phoneService', function($http) {

			function getLasted() {
				return $http.get("/data");
			}

			function getDevices(name) {
				return $http.get("/search?name="+name);
			}


			return {
				getLasted: getLasted,
				getDevices: getDevices
			}
	})