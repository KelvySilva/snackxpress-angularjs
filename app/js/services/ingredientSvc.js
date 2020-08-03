angular.module("snackxpress").factory("ingredientAPI",($http, url_config) => {
    var _listAll = () => {
        return $http.get(url_config.BASE_URL+"/protected/ingredients");
    };
    return {
        listAll : _listAll  
    };
});