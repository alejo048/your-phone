angular.module('myControllers')
.controller('controllerLog', function($rootScope, $scope, $location, $localStorage, authService) {

    $scope.signin = function() {
        var formData = {
            email: $scope.email,
            password: $scope.password
        }

        authService.signin(formData, function(res) {
            if (res.type == false) {
                alert(res.data)    
            } else {
                $localStorage.token = res.data.token;
                window.location = "/";    
            }
        }, function() {
            $rootScope.error = 'Failed to signin';
        })
    };

  /*  $scope.me = function() {
        authService.me(function(res) {
            $scope.myDetails = res;
        }, function() {
            $rootScope.error = 'Failed to fetch details';
        })
    };
*/
    $scope.logout = function() {
        authService.logout(function() {
            window.location = "/"
        }, function() {
            alert("Failed to logout!");
        });
    };
    $scope.token = $localStorage.token;
})