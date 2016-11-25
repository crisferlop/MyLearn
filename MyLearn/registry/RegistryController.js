angular.module('MyLearn').controller('RegistryController', function ($scope, $http, $routeParams, $rootScope, AuthService) {
    $scope.user = $rootScope.currentUser;
    $scope.student = new Student();
    $scope.student.Email = $scope.user.email;
    $scope.student.UserName = $scope.user.email;
    $scope.student.Nombre = $scope.user.fistname + ' ' + $scope.user.lastname;

    $scope.register = function () {

    }


});