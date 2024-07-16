const add = function () {
    return Array.from(arguments).reduce((sum, current) => {
        return sum + current;
    }, 0);
};

const subtract = function () {
    return Array.from(arguments).reduce((difference, current) => {
        return difference - current;
    });
};

const sum = function (array) {
    return array.reduce((sum, current) => {
        return sum + current;
    }, 0);
};

const multiply = function (array) {
    return array.reduce((product, current) => {
        return product * current;
    }, 1);
};

const power = function (base, power) {
    let returnValue = 1;
    for (let i = 1; i <= power; i ++) {
        returnValue *= base;
    }    
    return returnValue;
};

const factorial = function (base) {
    let returnValue = 1;
    for (let i = 1; i <= base; i++) {
        returnValue *= i;
    }
    return returnValue;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
