
const instructorWithLongestName = function(instructors) {
  let nameLength = 0;
  let largestIntLength;
  for (let i of instructors) {
    if (i.name.length > nameLength) {
      nameLength = i.name.length;
    }
  } for (let i2 of instructors) {
    if (i2.name.length === nameLength) {
      largestIntLength = i2;
    }
  }
  return largestIntLength;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));