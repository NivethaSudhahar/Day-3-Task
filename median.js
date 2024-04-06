// Return median of two sorted arrays of the same size.
let findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2);
    merged.sort((a, b) => a - b);
    let length = merged.length;
    let mid = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

console.log(findMedianSortedArrays([1, 3, 5], [2, 4, 6]));

// IIFE
let median = (function(nums1, nums2) {
    let merged = nums1.concat(nums2);
    merged.sort((a, b) => a - b);
    let length = merged.length;
    let mid = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})([1, 3, 5], [2, 4, 6]);

console.log(median);
