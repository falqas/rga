(function () {
  'use strict';
angular.module('myApp', [
  'ngRoute',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'index.html',
    controller: 'exhibitsCtrl'
  });
  $routeProvider.otherwise({redirectTo: '/'});
}]);

})();
