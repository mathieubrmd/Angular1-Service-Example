// declare the app with no dependencies
var myApp = angular.module('myApp', []);

// creating the service that contains two methods :
// addUser that takes a new user and adds it to the users array
// getUsers that returns the user array
myApp.service('userService', function(){
  var users = [];

  this.addUser = function(newObj) {
    users.push(newObj);
  };

  this.getUsers = function(){
    return users;
  };
});

// Declaring the first controller
// This controller adds users to the userService array
// The name and mail properties are bound to the two inputs on the view
myApp.controller('FirstCtrl', function($scope, userService, $timeout){

  var name = "";
  var mail = "";
  var showSuccess = true;

  $scope.addUser = function() {
    if ($scope.name != "" && $scope.mail != "") {
      userService.addUser({name: $scope.name, mail: $scope.mail});
      $scope.name = "";
      $scope.mail = "";

      $scope.showSuccess = true;

      $timeout(function() {
        $scope.showSuccess = false;
      }, 3000);
    }
  };
});

// The second controller
// This one simply get the list of users from the userService
myApp.controller('SecondCtrl', function( $scope, userService ){     
 var users = [];

 $scope.getUsers = function() {
   $scope.users = userService.getUsers();
   console.log(users);
 };

 $scope.getUsers();
});