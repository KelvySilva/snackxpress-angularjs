angular.module("snackxpress").factory("productAPI",($http, url_config) => {
    var _listAll = () => {
        return $http.get(url_config.BASE_URL+"/protected/products");
    };
    return {
        listAll : _listAll  
    };
});