angular.module('snackxpress').controller("ingredientCtrl",  function($scope, ingredientAPI)  {
    $scope.app = "Snackxpress";   
    $scope.ingredients = []; 
    $scope.error =  '';
    
    var listIngredients = () => {
        ingredientAPI.listAll().then(res => {
            $scope.ingredients = res.data;
        }).catch(err => {
            $scope.error = "Houve um problema: "+err;
        });
    }


    $scope.ingredients = listIngredients();
    
    
    
    
});