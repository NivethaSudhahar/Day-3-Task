//Return all the palindromes in an array
const findPalindromes = arr => {
    return arr.filter(str => {
        let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanStr === cleanStr.split('').reverse().join('');
    });
};

console.log(findPalindromes(["level", "noon", "hello", "racecar", "world"]));
