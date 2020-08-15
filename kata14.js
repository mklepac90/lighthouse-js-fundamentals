const urlDecode = function(text) {
  let keyValueArray = text.split('&');
  let object = {};
  for (let k of keyValueArray) {
    let objectArray = k.split('=');
    let key = objectArray[0];
    let value = objectArray[1];
    let valueDecoded = '';
    for (let i = 0; i < value.length; ) {
      if (value[i] === '%' || value[i] === '2') {
        i++;
      } else if (value[i] === '0') {
        i++;
        valueDecoded += ' '
      } else {
        valueDecoded += value[i];
        i++;
      }
    } 
    object[key] = valueDecoded;
  }
  return object
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);