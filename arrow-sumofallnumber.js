//Sum of all numbers in an array
const sumArray = arr => {
    return arr.reduce((acc, num) => acc + num, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));
