//We will be given a number as our input data. This number is the highest value of our 
//multiplication table. Our job is to generate a multiplication table for the values from 
//1 to the provided number.

const multiplicationTable = function(maxValue) {
  let tableString = '';
  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      tableString += (i * j) + ' ';
    }
    tableString += '\n';
  }
  return tableString
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));