angular.module('snackxpress').controller("clientCtrl",  function($scope, clientAPI)  {
    $scope.app = "Snackxpress";   
    $scope.clients = []; 
    $scope.error =  '';
    
    var listClients = () => {
        clientAPI.listAll().then(res => {
            $scope.clients = res.data;
        }).catch(err => {
            $scope.error = "Houve um problema: "+err;
        });
    }

    $scope.clients = listClients();
   
    
});