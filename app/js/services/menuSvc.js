angular.module("snackxpress").factory("menuAPI",($http, url_config) => {
    var _listAll = () => {
        return $http.get(url_config.BASE_URL+"/protected/menus");
    };
    return {
        listAll : _listAll  
    };
});