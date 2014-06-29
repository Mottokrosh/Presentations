'use strict';

/**
 * @ngdoc function
 * @name demo2App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the demo2App
 */
angular.module('demo2App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
