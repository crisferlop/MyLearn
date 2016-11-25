'use strict';

angular.module('myLearn.version.version-directive', [])

.directive('appVersion', ['version', function (version) {
    return function (scope, elm, attrs) {
        elm.text(version);
    };
}]);