// Return all the palindromes in an array

let findPalindromes = function(arr) {
    return arr.filter(function(str) {
        // Convert string to lowercase and remove non-alphanumeric characters
        let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Check if the string is a palindrome
        return cleanStr === cleanStr.split('').reverse().join('');
    });
};

console.log(findPalindromes(["level", "noon", "hello", "racecar", "world"]));

// IIFE
let palindromes = (function(arr) {
    return arr.filter(function(str) {
        // Convert string to lowercase and remove non-alphanumeric characters
        let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Check if the string is a palindrome
        return cleanStr === cleanStr.split('').reverse().join('');
    });
})(["level", "noon", "hello", "racecar", "world"]);

console.log(palindromes);
