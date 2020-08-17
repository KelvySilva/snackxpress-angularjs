angular.module('snackxpress').controller("IngredientListCtrl",  
function($scope, $location, $timeout, ingredientAPI, toaster)  {
    $scope.ingredients = []; 
    $scope.error =  '';
    $scope.success = '';
    
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

    $scope.handleDeleteIngredient = (id) => {
        const isConfirmed = confirm("Tem certeza que quer excluir esse item?")
        if(isConfirmed) {
            
            ingredientAPI.removeOne(id).then(res => {
                $scope.ingredients = $scope.ingredients.filter(ing => {
                    if( ing.id != id ) return ing;
                });
                toaster.pop('success', "Está feito", "Deletado com sucesso");
                // $scope.success = "Deletado com sucesso!";
                // $timeout( function(){
                //     $scope.success = "";
                // }, 5000 );
            }).catch(err => {
                toaster.pop('error', "Ops...", err.data.detail);
                // $scope.error = err.data.detail;
                // $timeout( function(){
                //     $scope.error = "";
                // }, 5000 );
            });
        }

       
        
    }
    
});