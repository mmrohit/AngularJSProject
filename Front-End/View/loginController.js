
var myApp = angular.module('onlineShopping',['ngRoute']);

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
       templateUrl: 'home.html',
        resolve: {
                  check: function($rootScope,$location) {
                    if(!$rootScope.auth)
                        $location.path ('/');
                  }
                }
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);

myApp.controller('LoginController', ['$scope','$rootScope','$location','$http', function loginController($scope,$rootScope,$location,$http) {
        $scope.userName = "";
        $scope.password = "";
    
        $scope.loginSubmit = function (){
           // console.info("The loginSubmit() is called!");
            if( ($scope.userName.length > 0 && $scope.password.length > 0)){
                $http.get('http://');
                $rootScope.auth = true;
            }
            else
                $rootScope.auth = false;
                
            $location.path('/home');
        } 
        
   }]);
