
angular.module('MyLearn').controller('FreelanceProjectController', function ($scope, $http, $routeParams) {
    
    $scope.project = new FreelanceProject("Vuelven los patos A", "4", "Don CosmeFulanito", 0)
    $scope.project.addTechnology(new Technology(1, "Angular Js"));
    $scope.project.addTechnology(new Technology(1, "otro"));
    $scope.project.addTechnology(new Technology(1, "haha"));
    $scope.project.addTechnology(new Technology(1, "nadafsd"));
    console.log("Hola", $scope.project);
    $scope.projectResultList = [];
    $scope.projectResultList.push($scope.project);
    $scope.projectResultList.push(new FreelanceProject("Vuelven los patos B", "4", "Don CosmeFulanito", 0));
    $scope.projectResultList.push(new FreelanceProject("Vuelven los patos C", "4", "Don CosmeFulanito", 0));

});