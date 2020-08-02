/*
a e i o u
*/

const numberOfVowels = function(data) {
  let counter = 0;
  for (let d of data) {
    switch (d) {
    case 'a':
      counter++;
      break;
    case 'e':
      counter++;
      break;
    case 'i':
      counter++;
      break;
    case 'o':
      counter++;
      break;
    case 'u':
      counter++;
      break;
    }
  }
  return counter;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));