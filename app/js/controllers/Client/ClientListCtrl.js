angular.module('snackxpress').controller("ClientListCtrl",  function($scope, clientAPI)  {
    $scope.app = "Snackxpress";   
    $scope.clients = []; 
    $scope.error =  '';
    
    var listClients = () => {
        clientAPI.listAll().then(res => {
            $scope.clients = res.data;
        }).catch(err => {            
            $scope.error = err.data.detail;
        });
    }

    $scope.clients = listClients();
   
    
});