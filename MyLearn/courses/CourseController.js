
angular.module('MyLearn').controller('CourseController', function ($scope, $http, $routeParams) {

    $scope.course = new Course("Especificacion y Disenio", 70, "L 7:00 M 8:00", "Daniel Huertas", 0)

    for (var x = 0; x < 4; x++) {
        $scope.batchInProgress = new Batch("algo " + x, 25, "nise", "tampoco", x);
        $scope.course.addBatch($scope.batchInProgress);
        console.log($scope.batchInProgress);

    }

    $scope.courseList = [];
    $scope.courseList.push(new Course("Especificacion y Disenio", 70, "L 7:00 M 8:00", "Daniel Huertas", 0));
    $scope.courseList.push(new Course("Bases de datos", 70, "L 7:00 M 8:00", "Daniel Huertas", 0));
    $scope.courseList.push(new Course("Compi", 70, "L 7:00 M 8:00", "Daniel Huertas", 0));

});