angular.module("snackxpress").factory("menuAPI",($http, url_config) => {
    const _listAll = () => {
        return $http.get(url_config.BASE_URL+"/protected/menus");
    };

    const _listOne = (id) => {
        return $http.get(url_config.BASE_URL+"/protected/menu/"+id);
    };
    return {
        listAll : _listAll,
        listOne : _listOne  
    };
});