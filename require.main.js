require.config({
  baseUrl: '/',

  paths: {
    bootstrap: 'bower_components/bootstrap/dist/js/bootstrap.min',
    jquery: 'bower_components/jquery/dist/jquery.min',

    angular: 'bower_components/angular/angular',
    ngRoute: 'bower_components/angular-route/angular-route',

    adminLte: 'bower_components/AdminLTE/dist/js/app.min',

    home: 'assests/js/home',

    app: 'app',
    route: 'app.router',
    routeResolver: 'services/routeResolver',
    mainController: './controllers/mainController'
  },

  shim: {
    'jquery': {
      exports: 'jquery'
    },
    'bootstrap': {
      deps: ['jquery']
    },

    'angular': {
      exports: 'angular'
    },
    'ngRoute': {
      deps: ['angular']
    },
    'app': {
      deps: ['angular', 'route']
    },
    'route': {
      deps: ['angular']
    }
  }
});
require(['app'], function() {
  angular.bootstrap(document, ['app']);
});



/*require.config({baseUrl: '/', urlArg: 'v=1.0'});
require([
  'app',
  'app.router',
  'services/routeResolver',
  'controllers/mainController'
], function() {
  angular.bootstrap(document, ['exemplo']);
});*/
