angular.module("snackxpress").factory("menuAPI",($http, url_config) => {
    const _listAll = () => {
        return $http.get(url_config.BASE_URL+"/protected/menus");
    };

    const _listOne = (id) => {
        return $http.get(url_config.BASE_URL+"/protected/menu/"+id);
    };

    const _saveOne = (menu) => {
        return $http.post(url_config.BASE_URL+"/admin/menu/",menu);
    };
    
    const _listMenuItem = (id) => {
        return $http.get(url_config.BASE_URL+"/protected/menu/item/"+id);
    };

    const _updateMenuItem = (menuItem) => {
        return $http.put(url_config.BASE_URL+"/admin/menu/item/"+menuItem.id,menuItem);
    };
    return {
        listAll : _listAll,
        listOne : _listOne,
        saveOne : _saveOne,
        listMenuItem : _listMenuItem,
        updateMenuItem : _updateMenuItem
    };
});