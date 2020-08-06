angular.module("snackxpress").factory("recipeAPI",($http, url_config) => {
    var _listAll = () => {
        return $http.get(url_config.BASE_URL+"/protected/recipes");
    };
    return {
        listAll : _listAll  
    };
});