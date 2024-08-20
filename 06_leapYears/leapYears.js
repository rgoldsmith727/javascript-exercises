const leapYears = function(year) {
  if (year % 400 === 0) { return true }
  if (year % 100 !== 0 && year % 4 === 0) { return true }
  return false
};

// Do not edit below this line
module.exports = leapYears;



/* 
Alternative Method

return (
  (year % 400 === 0) ||
  (year % 100 !== 0 &&
    year % 4 === 0)
) */





  

