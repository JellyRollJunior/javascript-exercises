const sumAll = function (sumOne, sumTwo) {
  if (
    sumOne < 0 ||
    sumTwo < 0 ||
    typeof sumOne !== "number" ||
    typeof sumTwo !== "number"
  ) {
    return "ERROR";
  }
  let min = Math.min(sumOne, sumTwo);
  let max = Math.max(sumOne, sumTwo);
  let sum = 0;
  for (min; min <= max; min++) {
    sum += min;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
