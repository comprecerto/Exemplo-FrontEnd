'use strict';

define(['angular'], function(angular) {
  var mainController = angular.module('mainController', []);

  mainController.controller('MainController', ['$scope',
    function($scope) {
      $scope.load = true;
    }
  ]);
});
