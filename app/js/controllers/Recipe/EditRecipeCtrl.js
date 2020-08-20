angular.module('snackxpress').controller("EditRecipeCtrl",  
function($scope, $route, $location, recipeAPI, ingredientAPI, toaster)  {
    $scope.ingredientsToSelect = []; 
    $scope.error =  '';

    const id = $route.current.params.recipe_id;

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

    $scope.handleRemoveComposite = (index) => {
        $scope.composities.splice(index, 1);
    
    }

    $scope.handleAddRecipe = () => {
        $scope.recipe.composities       = $scope.composities;
        $scope.productFinal.origin      = "MANUFACTURED"
        $scope.productFinal.cost        = $scope.productFinal.cost.replace("R$","").replace(",",".");
        $scope.productFinal.price       = $scope.productFinal.price.replace("R$","").replace(",",".");
        $scope.productFinal.discount    = $scope.productFinal.discount.replace("R$","").replace(",",".");
        $scope.recipe.productFinal      = $scope.productFinal;
        recipeAPI.saveOne($scope.recipe).then(res => {
            toaster.pop('success', "Feito!", "Receita salva com sucesso!");
            $location.path( "/recipes");
        }).catch(err => {
            toaster.pop('error', "Ops...", "Houve algo de errado!"+err.data.detail);
        })
    }


    

    var editRecipe = (id) => {
        $scope.composities = [];
        $scope.recipe = {
            id:0,
            name:""
        };
        $scope.productFinal = {
            id:0,
            name:"",
            price:0,
            cost:0,
            discount:0,
            description:"",
            type:"FINAL"
        };
        recipeAPI.listOne(id).then(res => {
            $scope.recipe = res.data;
            $scope.productFinal.id = $scope.recipe.productFinal.id;           
            $scope.productFinal.name = $scope.recipe.productFinal.name;           
            $scope.productFinal.description = $scope.recipe.productFinal.description;           
            $scope.productFinal.price = $scope.recipe.productFinal.price.toFixed(2);           
            $scope.productFinal.cost = $scope.recipe.productFinal.cost.toFixed(2);           
            $scope.productFinal.discount = $scope.recipe.productFinal.discount.toFixed(2);           
            $scope.composities = $scope.recipe.composities;
            $scope.app = "Edição";   
        }).catch(err => {
            $scope.error = err.data.detail;
        });
    }


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

    var addRecipe = () => {
        $scope.composities = [];
        $scope.recipe = {
            name:""
        };
        $scope.productFinal = {
            name:"",
            price:0,
            cost:0,
            discount:0,
            description:"",
            type:"FINAL"
        };
    }
    if(id != undefined) {
        $scope.recipe = editRecipe(id);
    }else {
        $scope.recipe = addRecipe();
    }
    
    
    
});