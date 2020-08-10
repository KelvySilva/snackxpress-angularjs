angular.module("snackxpress").factory("ingredientAPI",($http, url_config) => {
    const _listAll = () => {
        return $http.get(url_config.BASE_URL+"/protected/ingredients");
    };

    const _findOne = (id) => {
        return $http.get(url_config.BASE_URL+"/protected/ingredient/"+id);
    };

    const _updateOne = (ingredient) => {
        return $http.put(url_config.BASE_URL+"/admin/ingredient/"+ingredient.id, ingredient);
    };
    
    const _saveOne = (ingredient) => {
        return $http.post(url_config.BASE_URL+"/admin/ingredient/", ingredient);        
    }

    return {
        listAll : _listAll,
        findOne : _findOne,
        updateOne : _updateOne,
        saveOne : _saveOne  
    };
});