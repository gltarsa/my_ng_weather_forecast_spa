// Module
var weatherSpa = angular.module('weatherSpa', ['ngRoute', 'ngResource']);

// Controllers
weatherSpa.controller('cityController', ['$scope', function ($scope) {
}]);

weatherSpa.controller('forecastController', ['$scope', function ($scope) {
}]);

// Routes
weatherSpa.config(function($routeProvider, $locationProvider) {

  $locationProvider.hashPrefix('');

  $routeProvider

    .when('/', {
      templateUrl: 'pages/city_page.html',
      controller: 'cityController'
    })

    .when('/forecast', {
      templateUrl: 'pages/forecast_page.html',
      controller: 'forecastController'  //using the same controller for now
    })

});
