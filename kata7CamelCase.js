//We will receive a normal string of words separated with spaces as the input. 
//Our job is to convert these strings into camel cased strings.

const camelCase = function(input) {
  let stringArray = input.split(' ');
  let capitalizedArray = [];
  for (let string of stringArray) {
    if (stringArray.length > 1) {
      capitalizedArray.push(string.charAt(string[0]).toUpperCase() + string.substring(1));  
    } else {
      capitalizedArray.push(string);
    }
  }
  capitalizedArray = capitalizedArray.join('');
  capitalizedArray = capitalizedArray.charAt(0).toLowerCase() + capitalizedArray.substring(1);
  return capitalizedArray
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));