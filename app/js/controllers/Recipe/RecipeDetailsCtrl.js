angular.module('snackxpress').controller("RecipeDetailsCtrl",  function($scope, $location,$route, recipeAPI)  {
    
    $scope.error =  '';
    $scope.recipe = ''; 
    
    const id = $route.current.params.recipe_id;
    
    var recipeDetail = (id) => {
        recipeAPI.listOne(id).then(res => {
            $scope.recipe = res.data;
            $scope.app = res.data.name;
            $scope.costTotal = $scope.recipe.composities
            .reduce((key, value) => key + (value.ingredient.cost * value.quantity), 0);
            console.log($scope.costTotal);
        }).catch(err => {
            $scope.error = "Houve um problema: "+err;
        });
        
    }

    $scope.recipe = recipeDetail(id);
    
});