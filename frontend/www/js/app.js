// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.services', 'app.directives'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


    .controller('BlogCtrl', function($scope, $http){
      $scope.blogs = [];
      $scope.new_blog = '';

      $http.get('http://helenaboitsova.com/lifeadvisor2/public/db').success(function(data){
        $scope.blogs = data;
      });



    })

    .controller('MinMaxCtrl', function($scope, $http){
        $scope.formModel = {};

        $scope.email = {
            text: 'me@example.com'
        };

        $scope.onSubmit = function(){

            $http({
                method: 'POST',
                data: $scope.formModel,
                url: 'http://helenaboitsova.com/lifeadvisor2/public/sign',
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
    .controller('RegisterCtrl', function($scope, $http){
        $scope.formModel = {};


        $scope.onSubmit = function(){

            $http({
                method: 'POST',
                data: $scope.formModel,
                url: 'http://helenaboitsova.com/lifeadvisor2/public/user',
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
.controller('ImageCtrl', function($scope, $http){
  $scope.images = [];
  $scope.new_image = '';

  $http.get('http://helenaboitsova.com/lifeadvisor2/public/img/').success(function(data){
    $scope.images = data;
  })



})

    .controller('mainCtrl',['$scope', function($scope){
      $scope.mortgage = {
        loanAmount: 100000,
        interestRate: 5,
        aprMonthlyRate: 0,
        numberOfPayments: 0,
        interestPayments: 0,
        mortgagePeriod: 15,
        monthlyPayment: 0
      }

      //Calculate monthly APR Rate
      var aprMonthly = function(){
        $scope.mortgage.aprMonthlyRate = (($scope.mortgage.interestRate / 100) / 12);
      };
      $scope.$watch('mortgage.interestRate', aprMonthly);

      //Calculate Total Number of Mortgage Payments
      var numOfPayments = function(){
        $scope.mortgage.numberOfPayments = ($scope.mortgage.mortgagePeriod * 12);
      };
      $scope.$watch('mortgage.mortgagePeriod', numOfPayments);

      //Calculate term (1+i)^n or interestPayments^numberOfPayments
      var interestPayments = function(){
        $scope.mortgage.interestPayments = Math.pow(1 + $scope.mortgage.aprMonthlyRate, $scope.mortgage.numberOfPayments);
      };
      $scope.$watch('mortgage.mortgagePeriod + mortgage.interestRate', interestPayments);

      //calculate monthly mortgage payment
      var monthlyPayment = function(){
        $scope.mortgage.monthlyPayment = ($scope.mortgage.loanAmount * ($scope.mortgage.aprMonthlyRate *      $scope.mortgage.interestPayments) / ($scope.mortgage.interestPayments - 1));
      };
      $scope.$watch('mortgage.loanAmount + mortgage.aprMonthlyRate + mortgage.interestPayments', monthlyPayment);

    }])

        .controller('ContactUsGet', function($scope, $http){
            $scope.todos = [];
            $scope.new_todo = '';
            $http.get('http://helenaboitsova.com/lifeadvisor2/public/contact').success(function(data){
                $scope.todos = data;
            });

        })


        .controller('ContactUsPost', function($scope, $http){
            $scope.formModel = {};

            $scope.onSubmit = function(){

                $http({
                    method: 'POST',
                    data: $scope.formModel,
                    url: 'http://helenaboitsova.com/lifeadvisor2/public/contact',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Content-Type': 'multipart/form-data'
                    }
                }).success(function(data){

                    console.log($scope.formModel)
                }).error(function(data){
                    console.log(":(", data)
                });
            };
        })


        .controller('PromotionGet', function($scope, $http){
            $scope.todos = [];
            $scope.new_todo = '';
            $http.get('http://helenaboitsova.com/lifeadvisor2/public/prom').success(function(data){
                $scope.todos = data;
            });

        });




