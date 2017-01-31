// Module
var weatherSpa = angular.module('weatherSpa', ['ngRoute', 'ngResource']);

// Routes
weatherSpa.config(function($routeProvider, $locationProvider, $sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://api.openweathermap.org/**'
  ]);

  $locationProvider.hashPrefix(''); // eliminate '!' from URL

  $routeProvider

    .when('/', {
      templateUrl: 'pages/home_page.html',
      controller: 'homeController'
    })

    .when('/forecast/', {
      templateUrl: 'pages/forecast_page.html',
      controller: 'forecastController'  //using the same controller for now
    })

    .when('/forecast/:days', {
      templateUrl: 'pages/forecast_page.html',
      controller: 'forecastController'  //using the same controller for now
    })
});

// Services
weatherSpa.service('cityService', function () {
  this.name = 'Boston,MA';
});

// Controllers
weatherSpa.controller('homeController', ['$scope', 'cityService', function ($scope, cityService) {
  $scope.cityName = cityService.name;

  $scope.$watch('cityName', function () {
    cityService.name = $scope.cityName;
  });
}]);

weatherSpa.controller('forecastController', ['$scope','$resource', '$routeParams', 'cityService', function ($scope, $resource, $routeParams, cityService) {
  $scope.cityName = cityService.name;
  $scope.days = $routeParams.days || "2"

  var AppId = "82ab2b6f15e451e4cef73f22b514c253";
  var forecastBase = "http://api.openweathermap.org/data/2.5/forecast"

  $scope.weatherAPI = $resource(`${forecastBase}/daily?APPID=${AppId}`)

  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.cityName, cnt: $scope.days});
  $scope.kelvinToFahrenheit = (degK) => {
    return Math.round((1.8 * (degK - 273)) + 32)
  }
  $scope.prettyDate = (dt) => {
    return new Date(dt * 1000) // incoming date is in milliseconds; convert to seconds
  }

}]);

weatherSpa.directive("weatherReport", function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/weatherReport.html',
    replace: false,
    scope: {
      weatherObject: "=",
      kelvinToStandard: "&",
      dateToStandard: "&",
      dateFormat: "@"
    },
    // link: function (scope, elems, attrs) {
    // },
    transclude: true
  }
})
