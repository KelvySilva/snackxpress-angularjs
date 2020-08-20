angular.module('snackxpress').controller("EditMenuItemCtrl",  
function($scope,$location,$route, menuAPI, $timeout, toaster)  {
    
    $scope.error =  '';
    const { menu_id, menu_item_id } = $route.current.params;

    var editMenuItem = (id) => {
        menuAPI.listMenuItem(id).then(res => {
            $scope.menuItem = res.data;
        }).catch(err => {
            $scope.error = err.data.detail;
        })
    }


    $scope.menuItem = editMenuItem(menu_item_id);

    $scope.handleSaveMenuItem = () => {
        
        $scope.menuItem.discountAmount = parseFloat($scope.menuItem.discountAmount.toString().replace("R$","").replace(",", ".")).toFixed(2);
        $scope.menuItem.total = 0;
        $scope.menuItem.subtotal = 0;
        menuAPI.updateMenuItem($scope.menuItem).then(res => {
            toaster.pop('success', "Feito!", "Item atualizado com sucesso!");
            $timeout(() => {
                $location.path("/menu/edit/"+menu_id);
            }, 1000);
        }).catch(err => {
            $scope.error = err.data.detail;
        })
    }
   
});