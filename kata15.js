const squareCode = function(message) {
  let spacesRemoved = '';
  for (i = 0; i < message.length; i++) {
    if (message[i] === ' ') {
      i++;
      spacesRemoved += message[i];
    } else {
      spacesRemoved += message[i];
    }
  }
  let stringLength = spacesRemoved.length;
  let charPerLine = Math.ceil(Math.sqrt(stringLength));
  let numOfLines = Math.ceil(stringLength / charPerLine);
  let squareCodeString = '';
  let y = 0;
  let x = 0;
  let z = charPerLine;
  while (y < numOfLines) {
    for ( ; x < z; x++) {
      if (spacesRemoved[x] !== undefined) {
        squareCodeString += spacesRemoved[x];
      }
    }
    z += charPerLine;
    if (y !== numOfLines - 1) {
      squareCodeString += '\n';
    }
    y++;
  }
  squareCodeString = squareCodeString.split('\n');
  let encodedString = '';
  for (j = 0; j < (squareCodeString.length + 1); j++) {
    for (k = 0; k < squareCodeString.length; k++) {
      if (squareCodeString[k][j] !== undefined) {
        encodedString += squareCodeString[k][j];
      }
    }
    encodedString += ' ';
  }
  return encodedString
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));