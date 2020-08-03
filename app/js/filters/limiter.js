angular.module("snackxpress").filter("limiter", () => {
    return (input, maxsize) => {
        if(input.length <= 2) return input;
        var out = input.substring(0,(maxsize || 2 ))+"...";
        return out;
    }
})