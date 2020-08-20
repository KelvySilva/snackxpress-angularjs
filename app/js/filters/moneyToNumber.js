angular.module('snackxpress').filter('moneyToNumber', [function () {

    return function (input) {
      
      if(input === undefined) {
        return;
      }

      return parseFloat(input.toString().replace("R$","").replace(",", ".")).toFixed(2);
       
    };


}]);