const reverseString = function(string) {
    // go backwards and construct a string from char
    let reversedString = "";
    for (let i = string.length; i > 0; i--) {
        let index = i - 1 ;
        reversedString += string.charAt(index);
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
