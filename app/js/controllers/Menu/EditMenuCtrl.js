angular.module('snackxpress').controller("EditMenuCtrl",  function($scope,$location,$route, menuAPI, productAPI)  {
    
    $scope.error =  '';
    const id = $route.current.params.menu_id;

    var products = () => {
        productAPI.listAll().then(res => {
            $scope.productsToSelect = res.data;
        }).catch(err => {
            $scope.error = err.data.detail;
        })
    }
    
    var editMenu = (id) => {
        $scope.menu = ''; 
        $scope.app = "Cardápios";   
        menuAPI.listOne(id).then(res => {
            $scope.menu = res.data;
            $scope.list = $scope.menu.list;
            $scope.app = "Edição:";
        }).catch(err => {
            $scope.error = err.data.detail;
        });
    }

    var addMenu = () => {

        
        $scope.menu = {
            id:0,
            name:""
        }; 
        $scope.listItem = {};

        $scope.productList = [];

        $scope.product = {
            cost: 0,
            description: "",
            discount: 0,
            id: 0,
            name: "",
            price: 0,
            stock: {
                id: 0, 
                quantity: 0
            },
            type: "FINAL",
        };
    }

    $scope.productsToSelect = products();

    if(id != undefined) {
        $scope.menu = editMenu(id);
    }else {
        $scope.menu = addMenu();
    }

    $scope.handleAddProdToList = (product) => {
        // console.log( $scope.productList);
        $scope.productList.push(angular.copy(product));
        delete product;
    }

    $scope.handleAddProdListToMenuItem = (productList) => {
        console.log(productList);
        $scope.listItem.productList.push(angular.copy(productList));
        delete listItem;
    }
   
   
});