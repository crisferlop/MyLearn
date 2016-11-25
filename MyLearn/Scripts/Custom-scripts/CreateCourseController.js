angular.module('MyLearn').controller('CreateCourseController', function ($scope, $http, $routeParams) {
    console.log("Hola")
  $scope.course= new Course("",0)
  $scope.batchInProgress= new Batch("",0,"","");

  $scope.addBatch= function(){
    $scope.course.addBatch($scope.batchInProgress);
    $scope.batchInProgress= new Batch("",0,"","");
  }

  $scope.removeBatch= function(index){
    $scope.course.removeBatch(index);
  }


});
