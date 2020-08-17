angular.module('snackxpress').controller("EditRecipeCtrl",  function($scope, $route, $location, recipeAPI, ingredientAPI, toaster)  {
    $scope.ingredientsToSelect = []; 
    $scope.error =  '';
    $scope.composities = [];

    var ingredients = () => {
        ingredientAPI.listAll().then(res => {
            $scope.ingredientsToSelect = res.data
        }).catch(err => {
            $scope.error = res.data.detail;
        })
    }

    $scope.ingredientsToSelect = ingredients();

    $scope.handleAddComposite = (composite) => {
        let temp = $scope.composities.map(comp => {
            if(comp.ingredient.id == composite.ingredient.id) return composite.ingredient.id;            
        })
        
        if(temp.includes(composite.ingredient.id)) {
            return toaster.pop('warning', "Ops...", "Esse ingrediente já foi adicionado!");
        }
        
        $scope.composities.push(angular.copy(composite));
        delete composite;
    }

    $scope.handleRemoveComposite = (composite) => {
        $scope.composities = $scope.composities.map(comp => {
            if(comp.ingredient.id != composite.ingredient.id) {
                return comp;
            }
        });
    }

    // const id = $route.current.params.ingredient_id;

    // var editIngredientCtrl = (id) => {
    //     ingredientAPI.findOne(id).then(res => {
    //         $scope.ingredient = res.data;
    //         // $scope.ingredient.cost = Intl.NumberFormat("pt-br", {style:"currency", currency:"BRL"}).format($scope.ingredient.cost);
    //         $scope.ingredient.cost = String($scope.ingredient.cost);
    //         $scope.app = "Edição";   
    //     }).catch(err => {
    //         $scope.error = err.data.detail;
    //     });
    // }


    // $scope.saveIngredient = (ingredientToSave) => {
    //     ingredientToSave.cost = ingredientToSave.cost.replace("R$","").replace(",",".");
    //     if(ingredientToSave.id != undefined) {
    //         ingredientAPI.updateOne(ingredientToSave).then(res => {
    //             alert("Atualização realizada com sucesso!");
    //             $location.path("/ingredients")
    //         }).catch(err =>  {
    //             $scope.error = err.data.detail;
    //         });
    //     }else {
    //         ingredientAPI.saveOne(ingredientToSave).then(res => {
    //             alert("Salvo realizada com sucesso!");
    //             $location.path("/ingredients")
    //         }).catch(err =>  {
    //             $scope.error = err.data.detail;
    //         });
    //     }
        
    // }

    // var addIngredient = () => {
    //     $scope.ingredient = {
    //         id:0,
    //         name:"",
    //         description:"",
    //         cost:0,
    //         stock: {
    //             id:0,
    //             quantity:0
    //         },
    //         type: "COMPOSITE"
    //     }
    // }
    // console.log(id);
    // if(id != undefined) {
    //     $scope.ingredient = editIngredientCtrl(id);
    // }else {
    //     $scope.ingredient = addIngredient();
    // }
    
    
    
});