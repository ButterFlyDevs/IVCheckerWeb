// Main module of app

angular.module('main', ['ui.router', 'admin','game', 'ranking', 'verbs']);

angular.module('main').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider

        .state('home', {url: '/home', templateUrl: 'views/home.html'})
        .state('admin', {url: '/admin', templateUrl: 'views/admin/admin.html'})
        .state('game', {url: '/game', templateUrl: 'views/game/game.html'})
        .state('ranking', {url: '/ranking', templateUrl: 'views/ranking/ranking.html'})
        .state('verbs', {url: '/verbs', templateUrl: 'views/verbs/verbs.html'})
});

angular.module('main').controller('AppCtrl', function ($scope) {
    console.log('Activating main module controller');
});