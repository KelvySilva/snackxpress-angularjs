angular.module('snackxpress').controller("recipeCtrl",  function($scope, $location, recipeAPI)  {
    
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

    
    $scope.editRecipe = (id) => {
        
        recipeAPI.listOne(id).then(res => {
            $scope.recipe = res.data;
            $location.path("/recipe/"+id);
        }).catch(err => {
            $scope.error = "Houve um problema: "+err;
        });
        
    }
    
    if($location.$$path == "/recipes") {
        $scope.recipes = listRecipes();
    }
    
});