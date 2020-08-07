angular.module('snackxpress').controller("RecipeListCtrl",  function($scope, $location, recipeAPI)  {
    
    $scope.error =  '';
    $scope.recipe = '';
    
    var listRecipes = () => {
        $scope.app = "Receitas";   
        recipeAPI.listAll().then(res => {
            $scope.recipes = res.data;
        }).catch(err => {
            $scope.error = "Houve um problema: "+err;
        });
    }      
   
    $scope.recipeDetails = function(id) {
        $location.path( `/recipe/${id}`);
    }

    $scope.recipes = listRecipes();
   
    
});