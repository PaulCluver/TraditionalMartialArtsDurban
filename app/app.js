(function() {

    'use strict';

    var muktiMovementApp = angular.module('muktiMovementApp', ['ui.router']);

    muktiMovementApp.constant('VERSION', '0.1');

    muktiMovementApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home/home.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Home',
                    description: 'Bagua Zhang Kung Fu in Durban South Africa'
                }
            })
            .state('error', {
                url: '/error',
                templateUrl: 'partials/error/error.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - History',
                    description: 'This page provides history on the martial art of Bagua Zhang Kung Fu.'
                }
            })
            .state('yoga', {
                url: '/yoga',
                templateUrl: 'partials/yoga/yoga.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Theory',
                    description: 'This page describes the theories contained within the martial art of Bagua Zhang Kung Fu.',
                }
            })
            .state('bagua', {
                url: '/bagua',
                templateUrl: 'partials/bagua/bagua.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Method',
                    description: 'This page provides nformation on the training methods of Durban Bagua Zhang Kung Fu.'
                }
            })
            .state('classes', {
                url: '/classes',
                templateUrl: 'partials/classes/classes.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Method',
                    description: 'This page provides nformation on the training methods of Durban Bagua Zhang Kung Fu.'
                }
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact/contact.html',
                data: {
                    pageTitle : 'Bagua Kung Fu Durban - Method',
                    description: 'This page provides nformation on the training methods of Durban Bagua Zhang Kung Fu.'
                }
            });

        // $locationProvider.html5Mode({
        //   enabled: true,
        //   requireBase: false
        // });
    });

    muktiMovementApp.controller('appCtrl', ['$scope', function($scope) {

    }]);

    

}());
