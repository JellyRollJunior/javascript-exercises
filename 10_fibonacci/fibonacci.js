const fibonacci = function(n) {
    n = +n;
    if (n < 0) return "OOPS";
    if (n === 0) return 0;
    let fibonacciArray = [0, 1];
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = fibonacciArray[0] + fibonacciArray[1];
        fibonacciArray.shift();
        fibonacciArray.push(result);
    }
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
