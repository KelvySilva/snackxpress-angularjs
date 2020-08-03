angular.module("snackxpress").directive("errorMessage", () => {
    return {
        templateUrl:"view/error_message.html",
        replace:true,
        restrict:"AE"
    };
});