angular.module("snackxpress").factory("recipeAPI",($http, url_config) => {
    const _listAll = () => {
        return $http.get(url_config.BASE_URL+"/protected/recipes");
    };

    const _listOne = (id) => {
        return $http.get(url_config.BASE_URL+"/protected/recipe/"+id);
    };

    const _saveOne = (recipe) => {
        return $http.post(url_config.BASE_URL+"/admin/recipe", recipe);
    };
    
    return {
        listAll : _listAll,
        listOne : _listOne,
        saveOne : _saveOne  
    };
});