angular.module('snackxpress').controller("IngredientListCtrl",  function($scope, ingredientAPI)  {
    $scope.app = "Snackxpress";   
    $scope.ingredients = []; 
    $scope.error =  '';
    
    var listIngredients = () => {
        ingredientAPI.listAll().then(res => {
            $scope.ingredients = res.data;
        }).catch(err => {
            $scope.error = err.data.detail;
        });
    }


    $scope.ingredients = listIngredients();
    
    
    
    
});