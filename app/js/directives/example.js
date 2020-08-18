angular.module('snackspress', []).directive('category', function () {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: '/Scripts/app/partials/CategoryComponent.html',
        controller: function ($scope, $http, $attrs) {
            // Achei aqui https://www.it-swarm.dev/pt/angularjs/componentes-reutilizaveis-no-angularjs/1070305900/
            // Provavelmente tem que trocar por then/catch
            $http({
                url: "api/FeaturedProducts/" + $attrs.catName,
                method: "get"
            }).success(function (data, status, headers, config) {
                $scope.Cat = data;
            }).error(function (data, status, headers, config) {
                $scope.data = data;
                $scope.status = status;
            });
    
        }
    }
});