/**
 * Created by jed on 6/23/2016.
 */

(function () {

    var lupus = angular.module('lupus', ['ngRoute', 'ngResource']);

    lupus.config(function ($routeProvider, $resourceProvider) {
        $routeProvider

            .when('/', {
                templateUrl: '/views/home.html'
            })

            .when('/home', {
                templateUrl: '/views/home.html'
            })

            .when('/register', {
                templateUrl: '/views/register.html'
            })

            .when('/teams', {
                templateUrl: '/views/teams.html'
            })

            .when('/skips', {
                templateUrl: '/views/skips.html'
            })

            .when('/donate', {
                templateUrl: '/views/donate.html'
            })

            .when('/directions', {
                templateUrl: '/views/directions.html'
            })
    })

        .controller('teamsController', function ($scope, $resource, teamsService) {
            teamsService.then(function (success) {
                $scope.teams = success.data;
            }, function (error) {

            });
        })
        .factory('teamsService', function ($http) {
            return $http.get('http://localhost:3000/teamsAPI/teams');
        });


})();
