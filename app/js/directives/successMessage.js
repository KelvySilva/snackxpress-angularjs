angular.module("snackxpress").directive("successMessage", () => {
    return {
        templateUrl:"view/success_message.html",
        replace:true,
        restrict:"AE"
    };
});