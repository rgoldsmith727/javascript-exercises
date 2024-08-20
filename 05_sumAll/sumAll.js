function isPositiveInteger(value) {
  return Number.isInteger(value) && value > 0
}

const sumAll = function(num1, num2) {
  if (!isPositiveInteger(num1) || (!isPositiveInteger(num2))) {
    return 'ERROR'
  }

  [num1, num2] = num1 > num2 ? [num2, num1] : [num1, num2]

  let sum = 0
  for (i = num1; i <= num2; i++) {
    sum += i
  }

  return sum
};

// Do not edit below this line
module.exports = sumAll;


// check if isNumber?
// sort smallest to largest
