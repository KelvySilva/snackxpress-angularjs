angular.module("snackxpress").factory("menuAPI",($http, url_config) => {
    var _listAll = () => {
        return $http.get(url_config.BASE_URL+"/protected/menus");
    };

    var _listOne = (id) => {
        return $http.get(url_config.BASE_URL+"/protected/menu/"+id);
    };
    return {
        listAll : _listAll,
        listOne : _listOne  
    };
});