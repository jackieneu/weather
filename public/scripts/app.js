
angular.module('weatherApp',['angularMoment'])

.controller('mainCtrl', function($scope, dataService, moment) {
  //Put general weather in scope
  dataService.getWeather(function(response) {
      $scope.weather = response.data.list;
    });
    //Create time array and put hourly weather in scope for each city
    dataService.getHWeatherMil(function(response){
      var hWeather = response.data.list;
      var times = [];
      angular.forEach(hWeather, function(time){
        this.push(moment.tz(time.dt_txt,'Greenwich').clone().tz('America/Chicago').format('LT'));
      }, times);
      $scope.times = times;
      $scope.HourlyWeatherMil = response.data.list;
    });
    dataService.getHWeatherMinn(function(response){
      $scope.HourlyWeatherMinn = response.data.list;
    });
    dataService.getHWeatherChi(function(response){
      $scope.HourlyWeatherChi = response.data.list;
    });
    dataService.getHWeatherDal(function(response){
      $scope.HourlyWeatherDal = response.data.list;
    });
})

.service('dataService', function($http) {
  //Pull General Current Weather
  this.getWeather = function(callback){
    $http.get('https://api.openweathermap.org/data/2.5/group?id=5263045,5037649,4887398,4684888&units=imperial&APPID=8f85b0b140d857dee69d2c4e17d92148')
    .then(callback)
  };
  //Pull Hourly Weather for each city
  this.getHWeatherMil = function(callback){
    $http.get('https://api.openweathermap.org/data/2.5/forecast?id=5263045&units=imperial&APPID=8f85b0b140d857dee69d2c4e17d92148')
    .then(callback)
  };
  this.getHWeatherMinn = function(callback){
    $http.get('https://api.openweathermap.org/data/2.5/forecast?id=5037649&units=imperial&APPID=8f85b0b140d857dee69d2c4e17d92148')
    .then(callback)
  };
  this.getHWeatherChi = function(callback){
    $http.get('https://api.openweathermap.org/data/2.5/forecast?id=4887398&units=imperial&APPID=8f85b0b140d857dee69d2c4e17d92148')
    .then(callback)
  };
  this.getHWeatherDal = function(callback){
    $http.get('https://api.openweathermap.org/data/2.5/forecast?id=4684888&units=imperial&APPID=8f85b0b140d857dee69d2c4e17d92148')
    .then(callback)
  };
})

.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
