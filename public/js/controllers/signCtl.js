angular.module('myControllers')
.controller('controllerSign', function($rootScope, $scope, $location, $localStorage, authService) {
$scope.signup = function() {
        var formData = {
            name: $scope.name,
            email: $scope.email,
            password: $scope.password
        }

        authService.save(formData, function(res) {
            if (res.type == false) {
                alert(res.data)
            } else {
                console.log(res.token)
                $localStorage.token = res.token;
               $location.path("/")
            }
        }, function() {
            $rootScope.error = 'Failed to signup';
        })
    };
})