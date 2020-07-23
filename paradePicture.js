const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  let paradePicture = [0, 0];
  for (const move of moves) {
    switch (move) {
    case 'north':
      paradePicture[1]++;
      break;
    case 'south':
      paradePicture[1]--;
      break;
    case 'east':
      paradePicture[0]++;
      break;
    case 'west':
      paradePicture[0]--;
      break;
    }
  }
  return paradePicture;
}

console.log(finalPosition(moves));