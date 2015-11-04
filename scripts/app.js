'use strict';

var app = angular
    .module('TaskNinjaApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'firebase'
    ])
    .constant('FURL', 'https://taskninjaorangepek0e.firebaseio.com/')
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html'
            })
            .when('/post', {
                templateUrl: 'views/post.html',
                controller: 'TaskController'
            })
            .when('/edit/:taskId', {
                templateUrl: 'views/edit.html'
            })
            .when('/browse', {
                templateUrl: 'views/browse.html',
                controller: 'TaskController'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
