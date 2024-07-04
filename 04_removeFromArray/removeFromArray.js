const removeFromArray = function (array, unwanted) {
  for (let i = 1; i < arguments.length; i++) {
    unwanted = arguments[i];
    let unwantedIndex = array.indexOf(unwanted);
    while (unwantedIndex > -1) {
      array.splice(unwantedIndex, 1);
      unwantedIndex = array.indexOf(unwanted, unwantedIndex);
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
