angular.module('snackxpress').controller("IngredientListCtrl",  function($scope, $location, ingredientAPI)  {
    $scope.ingredients = []; 
    $scope.error =  '';
    
    var listIngredients = () => {
        $scope.app = "Ingredientes";   
        ingredientAPI.listAll().then(res => {
            $scope.ingredients = res.data;
        }).catch(err => {
            $scope.error = err.data.detail;
        });
    }


    $scope.ingredients = listIngredients();
    
    $scope.handleEditIngredient = (id) => {
        $location.path("/ingredient/"+id)
    }
    
    $scope.handleAddIngredient = () => {
        $location.path("/ingredient/new");
    }
    
});