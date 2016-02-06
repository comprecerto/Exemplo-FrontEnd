define(['ngRoute', 'routeResolver'], function() {
  'use strict';

  var appRoute = angular.module('appRoute', ['ngRoute', 'routeResolverServices']);

  appRoute.config(function($routeProvider, $locationProvider, routeResolverProvider, $controllerProvider,
                  $compileProvider, $filterProvider, $provide, $httpProvider) {

                    appRoute.register =
                              {
                                  controller: $controllerProvider.register,
                                  directive: $compileProvider.directive,
                                  filter: $filterProvider.register,
                                  factory: $provide.factory,
                                  service: $provide.service
                              };
    //Define routes - controllers will be loaded dynamically
    var route = routeResolverProvider.route;

    $locationProvider.html5Mode({
      enabled: true
    });

    $routeProvider
      .when('/dashboard', route.resolve('dashboard'))
      /*.when('/', {
        templateUrl: 'views/dashboard/dashboard.html'
      })*/
      .otherwise({
        redirectTo: '/dashboard'
      });
  });
});
