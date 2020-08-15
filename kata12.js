const organizeInstructors = function(instructors) {
  let instructorsOrganized = {};
  for (let i of instructors) {
    instructorsOrganized[i.course] = [];
  }
  for (let i of instructors) {
    if (i.course in instructorsOrganized) {
      instructorsOrganized[i.course].push(i.name);
    }
  }
  return instructorsOrganized
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

