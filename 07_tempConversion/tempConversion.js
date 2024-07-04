const convertToCelsius = function(FahrenheitTemp) {
  let celsciusTemp = ((FahrenheitTemp - 32) * (5/9)).toFixed(1);
  let roundedTemp = Math.round(celsciusTemp*10)/10;
  return roundedTemp;
};

const convertToFahrenheit = function(celsciusTemp) {
  let FahrenheitTemp = (celsciusTemp * (9/5) + 32).toFixed(1);
  let roundedTemp = Math.round(FahrenheitTemp*10)/10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
