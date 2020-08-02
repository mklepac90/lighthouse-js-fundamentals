
const sumLargestNumbers = function(data) {
  let x = Math.max(...data);
  let y = 0;
  for (let d of data) {
    if ((d > y) && (d !== x)) {
      y = d;
    }
  }
  return (x + y);
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));