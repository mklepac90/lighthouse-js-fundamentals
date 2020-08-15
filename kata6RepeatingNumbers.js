/*
The input data for this exercise will be two dimensional array (an array of 
arrays), where each sub-array will have two numeric values. For example:

[[1, 2], [2, 3]]
The first will be the value to repeat, the second will be the amount of times 
to repeat that value.
*/


const repeatNumbers = function(data) {
  numberString = '';
  for (let d of data) {
    for (i = 0; i < d[1]; i++) {
      numberString += `${d[0]}`;
      if ((data.length > 1) && (i === d[1] - 1)) {
        numberString += ', ';
      }
    }
  }
  let stringLength = numberString.length;
  let lastCharacter = numberString[stringLength - 1];
  if (lastCharacter = ' ') {
    numberString = numberString.slice(0, numberString.length - 2);
  }
  return numberString
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));