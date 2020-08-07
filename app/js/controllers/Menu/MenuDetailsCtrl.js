angular.module('snackxpress').controller("MenuDetailsCtrl",  function($scope,$location,$route, menuAPI)  {
    $scope.menu = ''; 
    $scope.error =  '';
    const id = $route.current.params.menu_id;
    
    var menuDetails = (id) => {
        $scope.app = "Cardápios";   
        menuAPI.listOne(id).then(res => {
            $scope.menu = res.data;
            $scope.app = $scope.menu.name;
        }).catch(err => {
            $scope.error = err.data.detail;
        });
    }

    $scope.menu = menuDetails(id);
   
    
});