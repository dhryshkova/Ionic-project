// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.controller('MinMaxCtrl', function($scope, $http){
  $scope.formModel = {};

  $scope.onSubmit = function(){

    /*
    console.log("Hey I'm submitted!");
    console.log($scope.formModel);

    $http.post('http://helenaboitsova.com/lifeadvisor2/public/contact', $scope.formModel)
      .success(function(data){
        console.log(":)", data)
    }).error(function(data){
        console.log(":(", data)
    });
    */

    $http({
      method: 'POST',
      data: $scope.formModel,
      url: 'http://helenaboitsova.com/lifeadvisor2/public/contact',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'multipart/form-data'
      }
    }).success(function(data){
      console.log(":)", data)
      //console.log($scope.formModel)
    }).error(function(data){
      console.log(":(", data)
    });
  };
})



/*
.controller ('registerController', function($scope, $http){

  $scope.registerController = function(){
    $http.post("http://helenaboitsova.com/lifeadvisor2/public/contact",{'name':$scope.name,'email':$scope.email,'text':$scope.text}).success(function(response) {$scope.userData = response.users;$scope.message = response.message;});
  };

});
*/


.controller('TodoCtrl', function($scope, $http){
  $scope.todos = [];
  $scope.new_todo = '';
  $http.get('http://helenaboitsova.com/lifeadvisor2/public/db').success(function(data){
    $scope.todos = data;
  });

});

