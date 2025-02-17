// Remove duplicate in a array
let removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
};

console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 6, 6]));

// IIFE
let uniqueArray = (function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
})([1, 2, 3, 4, 4, 5, 6, 6]);

console.log(uniqueArray);