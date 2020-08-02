const conditionalSum = function(values, condition) {
  let sum = 0;
  if (condition === 'even') {
    for (let v of values) {
      if (v % 2 === 0) {
        sum += v;
      }
    }
  } else if (condition === 'odd') {
    for (let v of values) {
      if (v % 2 !== 0) {
        sum += v;
      }
    }
  }
  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));