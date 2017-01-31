// Controllers
weatherSpa.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
  $scope.cityName = cityService.name;
  $scope.submit = () => { $location.path("/forecast") }

  $scope.$watch('cityName', function () {
    cityService.name = $scope.cityName;
  })
}])

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
}])
