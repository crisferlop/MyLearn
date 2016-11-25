'use strict';
angular.module('MyLearn').controller('loginCtrl', function ($scope, $http, $routeParams, $location,$timeout, AuthService) {

    $scope.login = function (provider) {
        AuthService.login(provider);

    }
    

}); 