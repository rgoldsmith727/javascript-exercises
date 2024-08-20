function roundToOneDecimal(number) {
  return Math.round(number * 10) / 10
}

const convertToCelsius = function(tempInF) {
  return roundToOneDecimal((tempInF - 32) * (5 / 9))
};

const convertToFahrenheit = function(tempInC) {
  return roundToOneDecimal(((tempInC * 9) / 5) + 32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

