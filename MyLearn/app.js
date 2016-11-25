'use strict';

angular.module('MyLearn', ['ngRoute', 'ngCookies', 'myLearn.version'])
    .config(config)
    .run(run);

config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {
    $routeProvider.when('/login', {
        templateUrl: 'login/signin.html',
        controller: 'loginCtrl',
        controllerAs: 'vm'
    })
        .when('/profile', {
            templateUrl: 'profile/profile.html',
            controller: 'profileCtrl',
            controllerAs: 'profileC'
        })
        .when('/auctionarea', {
            templateUrl: 'auction/auction-area.html',
            controller: 'AuctionController',
            controllerAs: 'AuctionC'
        })
        .when('/admin', {
            templateUrl: 'administrate/administrate.html',
            controller: 'AdminController',
            controllerAs: 'AdminC'
        })
        .when('/course', {
            templateUrl: 'courses/course.html',
            controller: 'CourseController',
            controllerAs: 'CourseC'
        })
        .when('/searchcourse', {
            templateUrl: 'courses/university-course-list.html',
            controller: 'CourseController',
            controllerAs: 'CourseC'
        })
        .when('/project', {
            templateUrl: 'freelance-projects/freelance-project.html',
            controller: 'FreelanceProjectController',
            controllerAs: 'FreelanceProjectC'
        })
        .when('/searchproject', {
            templateUrl: 'freelance-projects/freelance-project-search.html',
            controller: 'FreelanceProjectController',
            controllerAs: 'FreelanceProjectC'
        })
        .when('/registry', {
            templateUrl: 'registry/registry.html',
            controller: 'RegistryController',
            controllerAs: 'RegistryC'
        })
        .when('/createcourse', {
        templateUrl: 'courses/create-course.html',
        controller: 'CreateCourseController',
        controllerAs: 'otherController'
    })
        .otherwise({ redirectTo: '/login' });
    // use the HTML5 History API
    //$locationProvider.html5Mode(true);
    OAuth.initialize('79KM0puiRQVWhEdzexTAxqrLxYA');
}


angular.module('MyLearn').controller('MainController', function ($scope, $location, $http, AuthService, $rootScope) {

    $scope.logoutButton = $rootScope.globals.currentUser;
    $scope.logout = function () {

        AuthService.logout();
        $location.path('/login');
        $scope.logoutButton = $rootScope.globals.currentUser;

    }

});

run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];
function run($rootScope, $location, $cookieStore, $http) {

    $rootScope.globals = $cookieStore.get('globals') || {};

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page

        var loggedIn = $rootScope.globals.currentUser;
        //console.log($location.path());
        //console.log($.inArray($location.path(), ['/login']));
        if (loggedIn) {
            console.log("Esta logeado, por lo que login o registry son paginas prohibidas");
            var restrictedPage = $.inArray($location.path(), ['/login', '/registry']) === 0;
            if (loggedIn.token == null && $.inArray($location.path(), ['/registry']) === 0) {
                restrictedPage = false;
            }
        }
        else {
            console.log("No esta logeado, por lo que una pagina diferente de login es una pagina prohibida");
            var restrictedPage = $.inArray($location.path(), ['/login']) != 0;
        }

        if (restrictedPage) {
            console.log('Esta en una pagina restringida');
            if (!loggedIn) {
                console.log('Entonces lo mandamos a login');
                $location.path('/login');
            }
            else {
                console.log('Entonces lo mandamos a profile');
                $location.path('/profile');
            }
        }
        else{
            console.log('por que cae aqui?');
        }
    });
    
}