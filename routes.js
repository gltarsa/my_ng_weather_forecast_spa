weatherSpa.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
}])
