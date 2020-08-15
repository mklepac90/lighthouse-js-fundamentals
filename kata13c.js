const makeCase = function(input, casing) {
  let stringArray = input.split(' ');
  let casedArray = [];
  switch (casing) {
  case 'camel':
    for (let string of stringArray) {
      if (stringArray.length > 1) {
        casedArray.push(string.charAt(string[0]).toUpperCase() + string.substring(1));  
      } else {
        casedArray.push(string);
      }
    }
    casedArray = casedArray.join('');
    casedArray = casedArray.charAt(0).toLowerCase() + casedArray.substring(1);
    break;
  case 'pascal':
    for (let string of stringArray) {
      if (stringArray.length > 1) {
        casedArray.push(string.charAt(string[0]).toUpperCase() + string.substring(1));  
      } else {
        casedArray.push(string);
      }
    }
    casedArray = casedArray.join('');
    break;
  case 'snake':
    casedArray = stringArray.join('_');
    break;
  case 'kebab':
    casedArray = stringArray.join('-');
    break;
  case 'title':
    for (let string of stringArray) {
      if (stringArray.length > 1) {
        casedArray.push(string.charAt(string[0]).toUpperCase() + string.substring(1));  
      } else {
        casedArray.push(string);
      }
    }
    casedArray = casedArray.join(' ');
    break;
  case 'vowel':
    for (let string of stringArray) {
      for (let s of string) {
        if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
          x = string.indexOf(s);
          casedArray.push(string.substring(0, x) + s.toUpperCase() + string.slice(x+1));
        }
      }
    }
    casedArray = casedArray.join(' ');
    break;
  case 'consonant':
    for (let string of stringArray) {
      for (let s of string) {
        if (s === 'a' || s === 'e' || s === 'i' || s === 'o' || s === 'u') {
          x = string.indexOf(s);
          casedArray.push(string.substring(0, x).toUpperCase() + s.toLowerCase() + string.slice(x+1).toUpperCase());
        }
      }
    }
    casedArray = casedArray.join(' ');
    break;
  case 'upper':
    casedArray = stringArray.join(' ');
    casedArray = casedArray.toUpperCase();
    break;
  case 'lower':
    casedArray = stringArray.join(' ');
    casedArray = casedArray.toLowerCase();
    break;
  }
return casedArray
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/*
1. camel, pascal, snake, kebab, title
2. vowel, consonant
3. upper, lower
*/