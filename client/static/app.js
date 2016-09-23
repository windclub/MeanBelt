var angApp = angular.module('ang', ['ngRoute'])

angApp.config(function($routeProvider){
    $routeProvider
        .when('/QnA', {
            templateUrl:'partials/QnA.html'
        })
        .when('/welcome', {
            templateUrl: 'partials/welcome.html'
        })
        .when('/like', {
            templateUrl: 'partials/like.html'
        })
        .when('/newqs', {
            templateUrl: 'partials/newqs.html'
        })
        .when('/answer', {
            templateUrl: 'partials/answer.html'
        })
        .otherwise({
            redirectTo:'/'
        })
})