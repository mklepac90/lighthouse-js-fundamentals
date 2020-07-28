/*
When this function is given an array and a value, it should return the 
index of the last time the value occurs in the array. If the value never 
occurs, the function should return -1.
*/

function lastIndexOf(array, value) {
  let position = (array.length - 1);
  for (let i = (array.length - 1); i > -1; i--) {
    if (array[position] === value) {
      position;
    } else {
      position--;
    }
  }
  if (position >= 0) {
    return position;
  } else {
    return -1;
  }
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));