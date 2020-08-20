angular.module('snackxpress').config(($routeProvider) => {
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });
    $routeProvider
    //Home
    .when('/', {
        templateUrl:'view/home/home.html'
    })
    //Ingredients
    .when('/ingredients', {
        templateUrl:'view/ingredients/ingredients.html'
    })
    .when('/ingredient/new', {
        templateUrl:'view/ingredients/formEditIngredient.html'
    })
    .when('/ingredient/:ingredient_id', {
        templateUrl:'view/ingredients/formEditIngredient.html'
    })
    //Products
    .when('/products', {
        templateUrl:'view/products/products.html'
    })
    .when('/product/edit/:product_id', {
        templateUrl:'view/products/formEditProduct.html'
    })
    //Recipes
    .when('/recipes', {
        templateUrl:'view/recipes/recipes.html'
    })
    .when('/recipe/new', {
        templateUrl:'view/recipes/formEditRecipe.html'
    })
    .when('/recipe/edit/:recipe_id', {
        templateUrl:'view/recipes/formEditRecipe.html'
    })
    .when('/recipe/:recipe_id', {
        templateUrl:'view/recipes/recipe.html'
    })
    // Menus
    .when('/menus', {
        templateUrl:'view/menus/menus.html'
    })
    .when('/menu/new', {
        templateUrl:'view/menus/formEditMenu.html'
    })
    .when('/menu/edit/:menu_id', {
        templateUrl:'view/menus/formEditMenu.html'
    })
    .when('/menu/edit/:menu_id/item/:menu_item_id', {
        templateUrl:'view/menus/formEditMenuItem.html'
    })
    .when('/menu/:menu_id', {
        templateUrl:'view/menus/menuDetails.html'
    })
    // Clients
    .when('/clients', {
        templateUrl:'view/clients/clients.html'
    })
    .otherwise('/not_found',{
        templateUrl: 'notfound_404.html'
    });
})