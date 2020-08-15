/*
Define a function called concat
The function should, when given two arrays, concatenate the arrays together.

We've made a mistake, our researchers had already sorted the arrays for us, 
from least liked to most liked—but our concat function didn't take this into
account. We'll need to create a new function that keeps our data sorted.

We've made a mistake, our researchers had already sorted the arrays for us, 
from least liked to most liked—but our concat function didn't take this 
into account. We'll need to create a new function that keeps our data sorted.
*/

function merge(array1, array2) {
  let mergedArray = array1.concat(array2);
  return mergedArray.sort();
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);