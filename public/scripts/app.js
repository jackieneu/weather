
angular.module('weatherApp',['angularMoment'])


//.constant("moment", moment);

.controller('mainCtrl', function($scope, dataService, moment) {
  dataService.getWeather(function(response) {
      //console.log(response.data.list);
      $scope.weather = response.data.list;
      //$scope.sunrise = moment.tz(response.data.list[0].sys.sunset, 'America/Chicago').format('LT');
    });
    dataService.getHWeather(function(response){
      var hWeather = response.data.list;
      var times = [];
      angular.forEach(hWeather, function(time){
        this.push(moment.tz(time.dt_txt,'Greenwich').clone().tz('America/Chicago').format('LT'));
      }, times);
      $scope.times = times;
      $scope.HourlyWeather = response.data.list;
      //$scope.time0=moment.tz(response.data.list[0].dt_txt, 'Greenwich').clone().tz('America/Chicago').format('LT');
    });
})


.service('dataService', function($http) {
  this.getWeather = function(callback){
    $http.get('https://api.openweathermap.org/data/2.5/group?id=5263045,5037649,4887398,4684888&units=imperial&APPID=8f85b0b140d857dee69d2c4e17d92148')
    .then(callback)
  };

  this.getHWeather = function(callback){
    $http.get('https://api.openweathermap.org/data/2.5/forecast?id=5263045&units=imperial&APPID=8f85b0b140d857dee69d2c4e17d92148')
    .then(callback)
  };
})

.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});





//http://api.openweathermap.org/data/2.5/group?id=5263045,5037649,4887398,4684888&units=imperial&APPID=8f85b0b140d857dee69d2c4e17d92148
