// Main module of app

angular.module('main', ['ui.router']);

angular.module('main').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider

        .state('home', {url: '/home', templateUrl: 'views/home.html'})
});

angular.module('main').controller('AppCtrl', function ($scope) {
    console.log('Activating main module controller');
});