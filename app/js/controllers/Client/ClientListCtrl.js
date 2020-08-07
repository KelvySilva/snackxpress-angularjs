angular.module('snackxpress').controller("ClientListCtrl",  function($scope, clientAPI)  {
    $scope.clients = []; 
    $scope.error =  '';
    
    var listClients = () => {
        $scope.app = "Clientes";   
        clientAPI.listAll().then(res => {
            $scope.clients = res.data;
        }).catch(err => {            
            $scope.error = err.data.detail;
        });
    }

    $scope.clients = listClients();
   
    
});