angular.module('MyLearn').controller('RegistryController', function ($scope, $http, $routeParams, $rootScope, AuthService) {
    $scope.user = $rootScope.globals.currentUser;
    $scope.student = new Student();
    $scope.student.Email = $scope.user.email;
    $scope.student.UserName = $scope.user.email;
    $scope.registryType = 1
    

    $scope.register = function () {
        $scope.student.Nombre = $scope.user.fistname + ' ' + $scope.user.lastname;
        var req = {
            method: 'POST',
            url: 'mylearnwapi01.azurewebsites.net/api/Account/RegisterEstudiante?password=' + $scope.user.provider,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: $scope.student
        }

        $http(req)
            .then(function (response) {
                AuthService.getToken();
                window.location.reload();
            }, function (error) {
            });
    }


    $scope.getCountry = function () {
        var req = {
            method: 'GET',
            url: 'mylearnwapi01.azurewebsites.net/api/Pais',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        $http(req)
            .then(function successCallback(response) {
                console.log(response);
                $scope.countries = response;
            }, function errorCallback(error) {
            });
    }

    $scope.getUniversity = function () {
        var req = {
            method: 'GET',
            url: 'mylearnwapi01.azurewebsites.net/api/Universidad',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        $http(req)
            .then(function successCallback(response) {
                console.log(response);
                $scope.countries = response;
            }, function errorCallback(error) {
            });
    }


    $scope.getCountry();


});