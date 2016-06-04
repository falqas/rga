(function () {
'use strict';

angular.module('myApp', [])
  .controller('exhibitsCtrl', ['$scope', function ($scope) {
    $scope.exhibits = ["Exhibit 1.png", "Exhibit 2.png", "Exhibit 3.png"]

}]);

})();
