'use strict';
angular.module('MyLearn')
        .factory('AuthService', AuthenticationService);

AuthenticationService.$inject = ['$cookieStore', '$rootScope', '$location','$http'];
function AuthenticationService($cookieStore, $rootScope, $location, $http) {
    var service = {};

    service.login = login;
    service.setCookies = setCookies;
    service.clearCookies = clearCookies;
    service.logout = logout;
    service.getToken = getToken;

    return service;
    function getToken(email,provider) {
        //the code which needs to run after dom rendering
        var req = {
            method: 'GET',
            url: 'mylearnwapi01.azurewebsites.net/token',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                username: email,
                password: provider,
                grant_type: provider
            }
        }
        var toReturn = null;
        $http(req).then(function successCallback(response) {
            console.log(response);
            if (response.error != null) {
                toReturn = null;
            }
            else {
                toReturn = response;
            }            
        }, function errorCallback(response) {
            console.log(response);
            toReturn = null;
        });
        return toReturn;
    }
    



    function login(provider) {
        var globals = {
            currentUser: {
                aouthClient: 'result',
                token: null,
                email: 'email',
                firstname: 'firstname',
                lastname: 'lastname',
                provider: 'provider',
                user_type: 'user_type'
            }

        }


        OAuth.popup(provider)
        .done(function (result) {
            globals.currentUser.aouthClient = result;

            result.me().done(function (response) {
                //this will display "John Doe" in the console
                //obtener correo e email, preguntar si existe y si no pues alv
                //luego pedir un token si hubo success
                //si no existe correo en la base de datos entonces ir a registry
                globals.currentUser.firstname = response.firstname;
                globals.currentUser.lastname = response.lastname;
                globals.currentUser.email = response.email;
                globals.currentUser.token = getToken(response.email, provider);
                $rootScope.globals = globals;
                $cookieStore.put('globals', $rootScope.globals);
                console.log("llevando a la pagina principal");
                if (globals.currentUser.token == null) {
                    $location.path('/registry');
                }
                else {
                    window.location.reload();
                }
            })
            .fail(function (err) {
                //handle error with err
            });
            //use result.access_token in your API request
            //or use result.get|post|put|del|patch|me methods (see below)
        })
        .fail(function (err) {
            //handle error with err
        });
    }

    function logout() {
        console.log("we logout!");
        clearCookies();
    }

    function setCookies(token) {

        $rootScope.globals.currentUser.token = token;
        $cookieStore.put('globals', $rootScope.globals);
    }

    function clearCookies() {
        $rootScope.globals = {};
        $cookieStore.remove('globals');
    }
}

