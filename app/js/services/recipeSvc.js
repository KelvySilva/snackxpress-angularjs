angular.module("snackxpress").factory("recipeAPI",($http, url_config) => {
    var _listAll = () => {
        return $http.get(url_config.BASE_URL+"/protected/recipes");
    };

    var _listOne = (id) => {
        return $http.get(url_config.BASE_URL+"/protected/recipe/"+id);
    };
    return {
        listAll : _listAll,
        listOne : _listOne  
    };
});