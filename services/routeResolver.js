'use strict';

define(['angular'], function(angular) {

  String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  var routeResolver = function() {

    this.$get = function() {
      return this;
    };

    this.routeConfig = function() {
      var viewsDirectory = '/views/',
        controllersDirectory = '/views/',

        setBaseDirectories = function(viewsDir, controllersDir) {
          viewsDirectory = viewsDir;
          controllersDirectory = controllersDir;
        },

        getViewsDirectory = function() {
          return viewsDirectory;
        },

        getControllersDirectory = function() {
          return controllersDirectory;
        };

      return {
        setBaseDirectories: setBaseDirectories,
        getControllersDirectory: getControllersDirectory,
        getViewsDirectory: getViewsDirectory
      };
    }();

    this.route = function(routeConfig) {
      var resolve = function(baseName, path, secure) {
          console.log('OK');
          if (!path) path = '';

          var routeDef = {};
          routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + '/' + baseName + '.html';
          routeDef.controller = baseName.capitalizeFirstLetter() + 'Controller';
          routeDef.secure = (secure) ? secure : false;
          routeDef.resolve = {
            load: ['$q', '$rootScope', function($q, $rootScope) {
              var dependencies = [routeConfig.getControllersDirectory() + path + baseName + '/' + baseName + 'Controller.js'];
              return resolveDependencies($q, $rootScope, dependencies);
            }]
          };
          console.log(routeDef);
          return routeDef;
        },

        resolveDependencies = function($q, $rootScope, dependencies) {
          var defer = $q.defer();
          console.log(dependencies);
          require(dependencies, function() {
            defer.resolve();
            $rootScope.$apply()
          });

          return defer.promise;
        };

      return {
        resolve: resolve
      }
    }(this.routeConfig);

  };

  var servicesApp = angular.module('routeResolverServices', []);

  //Must be a provider since it will be injected into module.config()
  servicesApp.provider('routeResolver', routeResolver);
});
