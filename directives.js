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
