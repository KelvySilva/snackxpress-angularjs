angular.module('snackxpress').config(($routeProvider) => {
    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });
    $routeProvider
    .when('/', {
        templateUrl:'view/home/home.html'
    })
    .when('/ingredients', {
        templateUrl:'view/ingredients/ingredients.html'
    })
    .when('/ingredient/new', {
        templateUrl:'view/ingredients/formEditIngredient.html'
    })
    .when('/ingredient/:ingredient_id', {
        templateUrl:'view/ingredients/formEditIngredient.html'
    })
    .when('/products', {
        templateUrl:'view/products/products.html'
    })
    .when('/recipes', {
        templateUrl:'view/recipes/recipes.html'
    })
    .when('/recipe/:recipe_id', {
        templateUrl:'view/recipes/recipe.html'
    })
    .when('/menus', {
        templateUrl:'view/menus/menus.html'
    })
    .when('/menu/:menu_id', {
        templateUrl:'view/menus/menuDetails.html'
    })
    .when('/clients', {
        templateUrl:'view/clients/clients.html'
    })
    .otherwise('/not_found',{
        templateUrl: 'notfound_404.html'
    });
})