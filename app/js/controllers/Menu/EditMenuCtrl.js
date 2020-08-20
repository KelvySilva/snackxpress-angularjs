angular.module('snackxpress').controller("EditMenuCtrl",  
function($scope,$location,$route, menuAPI, $timeout, toaster, productAPI)  {
    
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
            $scope.menuItems = $scope.menu.menuItems;
            $scope.app = "Edição:";
            $scope.item = {
                category: "",
                total: 0,
                subtotal: 0,
                discountAmount: 0,
                productList: []
            }
    
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
        }).catch(err => {
            $scope.error = err.data.detail;
        });
    }

    var addMenu = () => {

        $scope.item = {
            category: "",
            total: 0,
            subtotal: 0,
            discountAmount: 0,
            productList: []
        }
        
        $scope.menu = {
            id:0,
            name:"",
            menuItems : [
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

        $scope.menuItems = [];

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
        $scope.menuItems.splice(index, 1);
    
    }
    
    $scope.handleAddProdListToMenuItem = (item) => {      
        console.log(item);  

        
        item.total = 0;
        item.subtotal = 0;
        item.discountAmount = item.discountAmount.replace("R$","").replace(",",".");

        $scope.menuItems.push(angular.copy(item));
        
        item.discountAmount = "0,00";
        item.category = "";
        item.productList = [];
        delete item;       
    }

    $scope.handleSaveMenu = () => {
        $scope.menuItems = $scope.menuItems.map(menuItem => {
            menuItem.total = 0;
            menuItem.subtotal = 0;
            return menuItem;
        })
        $scope.menu.menuItems = $scope.menuItems;
        menuAPI.saveOne($scope.menu).then(res => {
            toaster.pop('success', "Feito!", "Cardápio salvo com sucesso!");

            $timeout(() => {
                $location.path("/menus")
            }, 2000)

        }).catch(err => {
            $scope.error = err.data.detail;
        })
        
    }

    $scope.handleEditMenuItem = (item_id) => {
        let path = "/menu/edit/"+$scope.menu.id+"/item/"+item_id;
        console.log(path);
        $location.path(path);
    }
    
    if(id != undefined) {
        $scope.menu = editMenu(id);
    }else {
        $scope.menu = addMenu();
    }
   
});