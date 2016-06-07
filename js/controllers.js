(function() {
  'use strict';

  angular.module('myApp', [])
      .controller('exhibitsCtrl', ['$scope', function($scope) {


          $scope.currentVideo = "";
          $scope.showModal = !1;
          $scope.exhibits = [

              {
                  id: 1,
                  name: "Season 0: KTMA",
                  image: "Exhibit 1.png",
                  youtubeId: "wd5nFd3utLg"
              }, {
                  id: 2,
                  name: "Comedy Central - The Golden Years",
                  image: "Exhibit 2.png",
                  youtubeId: "wZn4Y0xPSPY"
              }, {
                  id: 3,
                  name: "Sci-Fi, Crow's Voice, & Ram Chips",
                  image: "Exhibit 3.png",
                  youtubeId: "DLzxrzFCyOs"
              }
          ];



        $scope.updateVideo = function(videoId){

          $scope.currentVideo = "https://www.youtube.com/embed/" + videoId;
          console.log('videoId:', videoId);
          var c = document.querySelectorAll(".video-container");
          angular.element(c).html("<iframe src='https://www.youtube.com/embed/" + videoId + "?autoplay=1' width='640' height='480' frameborder='0' ></iframe>")

        }

        $scope.removeVideo = function(videoId){
          $scope.currentVideo = "";
          console.log('removeVideo')
          var c = document.querySelectorAll(".video-container");

          angular.element(c).html("<iframe src='https://www.youtube.com/embed/" + videoId + "?autoplay=1' width='640' height='480' frameborder='0' ></iframe>")


          // function pauseVideo() {
          //   if (ytplayer) {
          //    ytplayer.pauseVideo();
          //  }
          // }

          // pauseVideo();

        }


      }]);

})();
