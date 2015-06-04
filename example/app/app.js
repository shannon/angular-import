angular.module('app', ['app.component', 'ngImport', 'ngRoute'])
  .controller('AppCtrl', function($scope) {
      
  })
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
  })
;