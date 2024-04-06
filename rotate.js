// Rotate an array K times
let rotateArray = function(arr, k) {
    // Normalize rotations to handle k > arr.length
    k = k % arr.length;
    
    // Rotate the array
    let rotated = arr.slice(k).concat(arr.slice(0, k));
    
    return rotated;
};

console.log(rotateArray([1, 2, 3, 4, 5], 3));

// IIFE
let rotatedArray = (function(arr, k) {
    // Normalize rotations to handle k > arr.length
    k = k % arr.length;
    
    // Rotate the array
    let rotated = arr.slice(k).concat(arr.slice(0, k));
    
    return rotated;
})([1, 2, 3, 4, 5], 3);

console.log(rotatedArray);



