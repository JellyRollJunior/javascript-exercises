const palindromes = function (string) {
    string = string.toLowerCase().split("").filter((item) => {
        return (item >= "a" && item <= "z") 
        || (item >= "0" && item <= "9");
    }).join("");
    let j = string.length - 1;
    for (let i = 0; i < string.length; i++) {
        let left = string.charAt(i);
        let right = string.charAt(j);
        if (i >= j) break;
        if (left != right) return false;
        j--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
