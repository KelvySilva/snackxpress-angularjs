angular.module("snackxpress").factory("clientAPI",($http, url_config) => {
    var _listAll = () => {
        return $http.get(url_config.BASE_URL+"/protected/clients");
    };
    return {
        listAll : _listAll  
    };
});