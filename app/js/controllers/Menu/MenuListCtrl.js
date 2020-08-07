angular.module('snackxpress').controller("MenuListCtrl",  function($scope,$location ,menuAPI)  {
    $scope.menus = []; 
    $scope.error =  '';
    
    var listMenus = () => {
        $scope.app = "Cardápios";   
        menuAPI.listAll().then(res => {
            $scope.menus = res.data;
        }).catch(err => {
            $scope.error = err.data.detail;
        });
    }

    $scope.menus = listMenus();
   
    $scope.menuDetail = function(id) {
        $location.path(`/menu/${id}`)
    }
    
});