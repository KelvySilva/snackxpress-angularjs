angular.module('snackxpress').controller("recipeCtrl",  function($scope, recipeAPI)  {
    $scope.app = "Snackxpress";   
    $scope.recipes = []; 
    $scope.error =  '';
    
    var listRecipes = () => {
        recipeAPI.listAll().then(res => {
            $scope.recipes = res.data;
        }).catch(err => {
            $scope.error = "Houve um problema: "+err;
        });
    }

    $scope.recipes = listRecipes();
   
    
});