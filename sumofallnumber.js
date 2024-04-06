// Sum of all numbers in a array
let sumArray = function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));

// IIFE
let sum = (function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
})([1, 2, 3, 4, 5]);

console.log(sum);
