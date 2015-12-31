'use strict';

/* Service Worker Register */

var reg;
var swFileName = "service_worker.js";
var serviceWorkerURL = "/walgreens_lite/" + swFileName;
var scope = "/walgreens_lite/";

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(serviceWorkerURL, { scope: scope }).then(function() {
    return navigator.serviceWorker.ready;
  }).then(function(Registration) {
    reg = Registration;
    console.log('Service Worker is ready :', reg);
  }).catch(function(error) {
    console.log('Service Worker Error :', error);
  });
}

/* App Module */

var productApp = angular.module('wagApp', [
  'ngRoute',
  'productControllers'
]);

productApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/app-home.html',
        controller: 'AppHomeCtrl'
      }).
      when('/productList', {
        templateUrl: 'partials/product-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/product-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);

