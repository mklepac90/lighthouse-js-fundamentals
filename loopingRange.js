/*
Define a function called range
The function takes 3 integer parameters: start, end, and step.
The function should return an array of numbers from start to end counting by step.
*/

function range(start, end, step) {
  let count = [];
  let increment = start;
  if ((start > end) || (step <= 0) || (start === undefined) || (end === undefined) || (step === undefined)) {
    return [];
  } else {
    for (let i = start; i <= end; i += step) {
      count.push(increment);
      increment += step;
    }
    return count;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
