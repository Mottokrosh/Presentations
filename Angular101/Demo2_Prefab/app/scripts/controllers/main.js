'use strict';

/**
 * @ngdoc function
 * @name demo2App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the demo2App
 */
angular.module('demo2App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
