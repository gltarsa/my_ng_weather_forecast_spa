// Controllers
weatherSpa.controller('homeController', ['$scope', '$location', 'cityService', function ($scope, $location, cityService) {
  $scope.cityName = cityService.name;
  $scope.submit = () => { $location.path("/forecast") }

  $scope.$watch('cityName', function () {
    cityService.name = $scope.cityName;
  })
}])

weatherSpa.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'forecastService', function ($scope, $routeParams, cityService, forecastService) {
  $scope.cityName = cityService.name;
  $scope.days = $routeParams.days || "2"

  $scope.weatherResult = forecastService.getWeather($scope.cityName, $scope.days)

  $scope.kelvinToFahrenheit = (degK) => {
    return Math.round((1.8 * (degK - 273)) + 32)
  }
  $scope.prettyDate = (dt) => {
    return new Date(dt * 1000) // incoming date is in milliseconds; convert to seconds
  }
}])
