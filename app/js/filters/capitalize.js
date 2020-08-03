angular.module("snackxpress").filter("capitalize", () => {
    return (input) => {
        var parts = input.split(" ");
        
        var newParts = parts.map(part => {
            if(/(da|de|do)/.test(part)) return part;
            return part.charAt(0).toUpperCase() + part.substring(1).toLowerCase();
        });
        return newParts.join(" ");
    }
})