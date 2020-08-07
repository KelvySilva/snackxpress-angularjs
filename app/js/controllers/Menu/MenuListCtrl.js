angular.module('snackxpress').controller("MenuListCtrl",  function($scope, menuAPI)  {
    $scope.app = "Snackxpress";   
    $scope.menus = []; 
    $scope.error =  '';
    
    var listMenus = () => {
        menuAPI.listAll().then(res => {
            $scope.menus = res.data;
        }).catch(err => {
            $scope.error = err.data.detail;
        });
    }

    $scope.menus = listMenus();
   
    
});