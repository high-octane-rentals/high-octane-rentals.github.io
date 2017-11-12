angular.module('rental', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

    $stateProvider

      .state('home', {
        url: '/',
        controller: 'landingCtrl',
        templateUrl: 'views/landing.html'
      })
      .state('snow', {
        url: '/snow',
        controller: 'snowCtrl',
        templateUrl: 'views/snow.html'
      })
      .state('dirt', {
        url: '/dirt',
        controller: 'dirtCtrl',
        templateUrl: 'views/dirt.html'
      })
      .state('info', {
        url: '/info',
        controller: 'infoCtrl',
        templateUrl: 'views/info.html'
      })
})
