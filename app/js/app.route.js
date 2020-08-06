angular.module('snackxpress').config(($routeProvider) => {
    
    $routeProvider
    .when('/', {
        templateUrl:'view/home.html',
        controller:'homeCtrl'        
    }).when('/ingredients', {
        templateUrl:'view/ingredients.html',
        controller:'ingredientCtrl'
    }).when('/products', {
        templateUrl:'view/products.html',
        controller:'productCtrl'
    }).when('/recipes', {
        templateUrl:'view/recipes.html',
        controller:'recipeCtrl'
    }).otherwise('/not_found',{
        templateUrl: 'notfound_404.html'
    });
})