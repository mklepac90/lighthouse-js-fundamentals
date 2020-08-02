const urlEncode = function(text) {
  let encodedString = '';
  for (let t of text.trim()) {
    if (t === ' ') {
      encodedString += '%20';
    } else {
      encodedString += t;
    }
  }
  return encodedString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));