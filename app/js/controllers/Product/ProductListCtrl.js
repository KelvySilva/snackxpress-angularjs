angular.module('snackxpress').controller("ProductListCtrl",  function($scope, productAPI)  {
    $scope.products = []; 
    $scope.error =  '';
    
    var listProducts = () => {
        $scope.app = "Produtos";   
        productAPI.listAll().then(res => {
            $scope.products = res.data;
        }).catch(err => {
            $scope.error = "Houve um problema: "+err;
        });
    }

    $scope.products = listProducts();
   
    
});