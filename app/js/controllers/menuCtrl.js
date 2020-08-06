angular.module('snackxpress').controller("menuCtrl",  function($scope, menuAPI)  {
    $scope.app = "Snackxpress";   
    $scope.menus = []; 
    $scope.error =  '';
    
    var listMenus = () => {
        menuAPI.listAll().then(res => {
            $scope.menus = res.data;
        }).catch(err => {
            $scope.error = "Houve um problema: "+err;
        });
    }

    $scope.menus = listMenus();
   
    
});