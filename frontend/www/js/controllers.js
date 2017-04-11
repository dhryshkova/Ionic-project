angular.module('app.controllers', [])
        
.controller('homeCtrl', function($scope) {

})
   
.controller('blogCtrl', function($scope) {

})
   
.controller('recipesCtrl', function($scope) {

})
   
.controller('financesCtrl', function($scope) {

})
   
.controller('timeManagmentCtrl', function($scope) {

})
   
.controller('healthCtrl', function($scope) {

})
   
.controller('houseCtrl', function($scope) {

})
   
.controller('peopleCtrl', function($scope) {

})
   
.controller('homeAlternativeVersionCtrl', function($scope) {

})
   
.controller('findNearestCtrl', function($scope) {

})
   
.controller('contactUsCtrl', function($scope) {

})
    .service('LoginService', function($q) {
        return {
            loginUser: function(name, pw) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                if (name == 'user' && pw == 'secret') {
                    deferred.resolve('Welcome ' + name + '!');
                } else {
                    deferred.reject('Wrong credentials.');
                }
                promise.success = function(fn) {
                    promise.then(fn);
                    return promise;
                }
                promise.error = function(fn) {
                    promise.then(null, fn);
                    return promise;
                }
                return promise;
            }
        }
    })
    .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
        $scope.data = {};

        $scope.login = function() {
            LoginService.loginUser($scope.data.Username, $scope.data.Password).success(function(data) {
                $state.go('tabsController.home');
            }).error(function(data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Login failed!',
                    template: 'Please check your credentials!'
                });
            });
        }
    })
   
.controller('signupCtrl', function($scope) {

})
   
.controller('recipes2Ctrl', function($scope) {

})
   
.controller('spinachEnchiladasCtrl', function($scope, $http, $stateParams) {
    $scope.item = [];
    $scope.new_item = '';
    var id = $stateParams.id;
    $http.get('http://helenaboitsova.com/lifeadvisor2/public/db/'+id).success(function(data){
        $scope.item = data;
    });
})

.controller('askTheQuestionCtrl', function($scope) {

})
   
.controller('mapCtrl', function($scope) {

})
   
.controller('directionsCtrl', function($scope) {

})
   
.controller('mortgageCalculatorCtrl', function($scope) {

})
 