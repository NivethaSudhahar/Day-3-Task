// Return all the prime numbers in an array
let findPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};

console.log(findPrimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// IIFE
let primeNumbers = (function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(primeNumbers);