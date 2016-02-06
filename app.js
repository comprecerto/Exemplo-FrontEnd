define(['mainController'], function() {
  'use strict';

  var app = angular.module('app', [
    'appRoute', /* rotas */
    /* diretivas */
    /* services */
    'mainController'/* controllers */
  ]);
  app.config(function($controllerProvider,
                  $compileProvider, $filterProvider, $provide) {

                    app.register =
                              {
                                  controller: $controllerProvider.register,
                                  directive: $compileProvider.directive,
                                  filter: $filterProvider.register,
                                  factory: $provide.factory,
                                  service: $provide.service
                              };
                            });


  return app;
});
