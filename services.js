weatherSpa.service('cityService', function () {
  this.name = 'Cary, NC';
});

weatherSpa.service('forecastService', ['$resource', function($resource) {
  var AppId = "82ab2b6f15e451e4cef73f22b514c253";
  var forecastBase = "http://api.openweathermap.org/data/2.5/forecast"

  this.getWeather = (city, days) => {
    var weatherAPI = $resource(`${forecastBase}/daily?APPID=${AppId}`);
    return weatherAPI.get({ q: city, cnt: days});
  }
}])

