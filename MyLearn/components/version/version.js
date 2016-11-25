'use strict';

angular.module('myLearn.version', [

  'myLearn.version.interpolate-filter',

  'myLearn.version.version-directive'

])



.value('version', '0.1');