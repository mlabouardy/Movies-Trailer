'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular'
  ])
  .config(function ($routeProvider, Restangular) {
    RestangularProvider.setBaseUrl('http://localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movies', {
        templateUrl: 'views/movies.html',
        controller: 'MoviesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('MovieRestAngular',function(Restangular){
    return Restangular.withConfig(function(RestangularProvider){
      RestangularConfigurer.setRestangularFields({
        id:'_id'
      });
    });
  })
  .factory('Movie',function(MovieRestAngular){
    new MovieRestAngular.service('movie');
  });
