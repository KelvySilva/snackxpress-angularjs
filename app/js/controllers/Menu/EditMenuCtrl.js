angular.module('snackxpress').controller("EditMenuCtrl",  function($scope,$location,$route,$filter, menuAPI, productAPI)  {
    
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

        $scope.item = {
            category: "",
            price: 0,
            discountAmount: 0,
            productList: []
        }
        
        $scope.menu = {
            id:0,
            name:"",
            listItem : [
                {
                    category:"",
                    total:0,
                    subtotal:0,
                    discountAmount: 0,
                    productList : [
                        {
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
                        }
                    ]
                }
            ]
        }; 

        

        $scope.listItem = [];

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

    
    $scope.handleAddProdToList = (productToSelect) => {
        // console.log( $scope.productList);
        $scope.item.productList.push(angular.copy(productToSelect));
        delete productToSelect;
    }

    $scope.handleRemoveProdToList = (index) => {
        $scope.item.productList.splice(index, 1);
    
    }
    
    $scope.handleRemoveItem = (index) => {
        $scope.listItem.splice(index, 1);
    
    }
    
    $scope.handleAddProdListToMenuItem = (item) => {      
        console.log(item);  

        item.price = item.price.replace("R$","").replace(",",".");
        item.discountAmount = item.discountAmount.replace("R$","").replace(",",".");

        $scope.listItem.push(angular.copy(item));
        item.price = "0,00";
        item.discountAmount = "0,00";
        item.category = "";
        item.productList = [];
        delete item;       
    }
    
    if(id != undefined) {
        $scope.menu = editMenu(id);
    }else {
        $scope.menu = addMenu();
    }
   
});