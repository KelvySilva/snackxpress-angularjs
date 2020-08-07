angular.module('snackxpress').controller("ProductListCtrl",  function($scope, productAPI)  {
    $scope.app = "Snackxpress";   
    $scope.products = []; 
    $scope.error =  '';
    
    var listProducts = () => {
        productAPI.listAll().then(res => {
            $scope.products = res.data;
        }).catch(err => {
            $scope.error = "Houve um problema: "+err;
        });
    }

    $scope.products = listProducts();
   
    
});