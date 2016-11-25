


var app = angular.module('App',[]);


app.controller('ProfileController', function($scope,$http){
  $scope.profile = new Profile("Crisrivlop","Cristian Rivera Lopez", "Crisrivlop@gmail.com",7777777, "Dir", "Costa Rica", "ITCR");
  $scope.coursesStatistics = new CoursesStatistics(80,4,1);
  $scope.projectStatistics = new ProjectStatistics(5,4,1);
  $scope.coursesProject = [
    new Task("Especificacion y disenio de software","Daniel Madriz Huertas","Trabajo actual"),
    new Task("Bases de Datos","Marco ","Ver historial"),
    new Task("Lenguajes de programacion","Jenny","Ver historial"),
    new Task("Algoritmos y Estructuras de datos II","Nereo Campos","Ver historial"),
    new Task("Algoritmos y Estructuras de datos I","Nereo Campos","Ver historial")
  ];
  $scope.freelanceProjects = [
    new Task("Pagina para niños","Daniel Madriz Huertas","Trabajo actual"),
    new Task("Videojuego simple","Marco Segura","Ver historial"),
    new Task("Don juanito, el juego que cambiara la historia","Jenny Cosmefulanita","Ver historial"),
  ];

});
