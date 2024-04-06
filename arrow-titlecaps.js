//Convert all the strings to title caps in a string array
const convertToTitleCaps = arr => {
    return arr.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

console.log(convertToTitleCaps(["hello", "world", "javascript"]));
