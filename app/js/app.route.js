angular.module('snackxpress').config(($routeProvider) => {

    $routeProvider
    .when('/ingredients', {
        templateUrl:'view/ingredients.html',
        controller:'ingredientCtrl'
    }).when('/products', {
        templateUrl:'view/products.html',
        controller:'productCtrl'
    }).when('/', {
        
    }).when('/', {
        
    }).when('/', {
        
    }).when('/', {
        
    }).when('/', {
        
    }).when('/', {
        
    }).when('/', {
        
    }).otherwise('app/index.html',{
        templateUrl: 'notfound_404.html'
    });
})