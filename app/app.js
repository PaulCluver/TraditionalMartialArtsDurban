(function() {

    'use strict';

    var traditionalMartialArtsApp = angular.module('traditionalMartialArtsApp', ['ui.router']);

    traditionalMartialArtsApp.constant('VERSION', '0.1');

    traditionalMartialArtsApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home/home.html'
            })
            .state('error', {
                url: '/error',
                templateUrl: 'partials/error/error.html'
            })
             .state('BaguaKungFu', {
                url: '/BaguaKungFu',
                templateUrl: 'partials/bagua/bagua.html'
            })
            .state('XingYiKungFu', {
                url: '/XingYiKungFu',
                templateUrl: 'partials/xingyi/xingyi.html'
            })
            .state('TaiJiKungFu', {
                url: '/TaiJiKungFu',
                templateUrl: 'partials/taiji/taiji.html'
            })
            .state('MuayBoran', {
                url: '/MuayBoran',                
                templateUrl: 'partials/muayboran/muayboran.html'
            })
            .state('classes', {
                url: '/classes',
                templateUrl: 'partials/classes/classes.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact/contact.html'
            });
    });

    traditionalMartialArtsApp.controller('appCtrl', ['$scope', function($scope) {

    }]);

    

}());
