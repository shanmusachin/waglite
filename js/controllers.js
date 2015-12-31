'use strict';

/* Controllers */

var productControllers = angular.module('productControllers', []);

productControllers.controller('AppHomeCtrl', ['$scope', '$http','$rootScope',
   function($scope, $http,$rootScope) {
$scope.findValue = function(enteredValue){
    console.info("Searching for:", enteredValue);
    $http.get('phones/category.json').
      success(function(data) {
        angular.forEach(data.categories, function(value, key){
          if(value.name == enteredValue){
            $scope.data = data.categories;
          }else{
            angular.forEach(value.subCategories, function(value,key){
              if(value.name == enteredValue){
                $rootScope.phones= value.products;
                $rootScope.phone = {};
                console.info("categories",value);
              }
              else{
              angular.forEach(value.products, function(value,key){
              if(value.name == enteredValue){
                console.info("products",value);
                $rootScope.phones= [];
                $rootScope.phone = value;
               
              }
            })
          }
            })
          }
           window.location = "#/productList";
        });
      }).
      error(function(data) {
       
      });
  }
  }]);

productControllers.controller('PhoneListCtrl', ['$scope', '$http','$rootScope',
  function($scope, $http, $rootScope) {
    $http.get('phones/category.json').success(function(data) {
    

    });
    /*$scope.$on("update_parent_controller", function(event, message) {
        console.log("*****************"+message)
        $scope.message = message;
});*/


    $scope.orderProp = 'age';
  }]);

productControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      $scope.phone = data;
    });
  }]);
