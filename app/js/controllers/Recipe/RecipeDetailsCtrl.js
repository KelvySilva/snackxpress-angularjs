angular.module('snackxpress').controller("RecipeDetailsCtrl",  function($scope, $location,$route, recipeAPI)  {
    
    $scope.error =  '';
    $scope.recipe = ''; 
    
    const id = $route.current.params.recipe_id;
    
    var recipeDetail = (id) => {
        recipeAPI.listOne(id).then(res => {
            $scope.recipe = res.data;
        }).catch(err => {
            $scope.error = "Houve um problema: "+err;
        });
        
    }

    $scope.recipe = recipeDetail(id);
    
});