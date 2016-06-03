(function () {
'use strict';

angular.module('myApp', [])
  .controller('exhibitsCtrl', ['$scope', function ($scope) {
    $scope.exhibits = ["Exhibit 1.jpg", "Exhibit 2.jpg", "Exhibit 3.jpg"]

}]);

})();
