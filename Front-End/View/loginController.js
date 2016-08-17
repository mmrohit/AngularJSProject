
var myApp = angular.module('thesisMate',['ngRoute']);

myApp .config(['$routeProvider',
  function($routeProvider,$rootScope) {
    $routeProvider.
      when('/register', {
        templateUrl: 'registration.html'
      }).
      when('/', {
        templateUrl: 'login.html'
      }).
      when('/home', {
        templateUrl: 'home.html'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

myApp.controller('LoginController', ['$scope','$rootScope','$location', function loginController($scope,$rootScope,$location) {
        $scope.userName = "";
        $scope.password = "";
    
        $scope.loginSubmit = function (){
            console.info("The loginSubmit() is called!");
            if( ($scope.userName.length > 0 && $scope.password.length > 0) &&  ($scope.userName == $scope.password) ){
                $rootScope.auth = true;
            }
            else
                $rootScope.auth = false;
                
            $location.path('/home');
        } 
        
   }]);