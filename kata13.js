const makeCase = function(input, casing) {
  caseString = '';
  for (let i = 0; i < input.length; i++) {
    if (casing.includes('camel')) {
      if (input[i] === ' ') {
        i++;
        caseString += input[i].toUpperCase();
      } else {
        caseString+= input[i];
      }
    } else if (casing.includes('pascal')) {
      if (input[i] === ' ') {
        i++;
        caseString += input[i].toUpperCase();
      } else if (i === 0) {
        caseString += input[i].toUpperCase();
      } else {
        caseString += input[i];
      }
    } else if (casing.includes('snake')) {
      if (input[i] === ' ') {
        caseString += '_';
      } else {
        caseString += input[i];
      }
    } else if (casing.includes('kebab')) {
      if (input[i] === ' ') {
        caseString += '-';
      } else {
        caseString += input[i];
      }
    } else if (casing.includes('title')) {
      if (input[i] === ' ') {
        i++;
        caseString += ' ' + input[i].toUpperCase();
      } else if (i === 0) {
        caseString += input[i].toUpperCase();
      } else {
        caseString += input[i];
      }
    } else if (casing.includes('vowel')) {
      if ('aeiou'.includes(input[i])) {
        caseString += input[i].toUpperCase();
      } else {
        caseString += input[i]
      }
    } else if (casing.includes('consonant')) {
      if ('aeiou'.includes(input[i])) {
        caseString += input[i].toLowerCase();
      } else {
        caseString += input[i].toUpperCase();
      }
    }
  } 
  if (casing.includes('upper')) {
    caseString = caseString.toUpperCase();
  } else if (casing.includes('lower')) {
    caseString = caseString.toLowerCase();
  }
  return caseString;
};



console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["vowel", "snake"]));

/*
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/

/*
1. camel, pascal, snake, kebab, title
2. vowel, consonant
3. upper, lower
*/