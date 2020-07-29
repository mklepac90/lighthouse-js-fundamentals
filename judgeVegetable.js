/*
For this challenge, we'll need to implement a function 
called judgeVegetable()that will decide which vegetable is best based on a 
given judging characteristic. Our function will receive two parameters: a list 
of veggies (as an array of objects), and a characteristic to judge the veggies 
by (in the case of a tomato, either redness or plumpness).

Our function must return the name of the person who submitted 
(vegetables.submitter) the vegetable with the highest ranking in the 
provided category.
*/

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
];

const metric = 'redness';

/*
const judgeVegetable = function (vegetables, metric) {
  let metricComparison = [];
  let highestValue;
  if (metric === 'redness') {
    for (let vegetable of vegetables) {
      metricComparison.push(vegetable.redness)
    }
    highestValue = Math.max(...metricComparison);
  } else if (metric === 'plumpness') {
    for (let vegetable of vegetables) {
      metricComparison.push(vegetable.plumpness)
    }
    highestValue = Math.max(...metricComparison);
  }
  for (let vegetable2 of vegetables) {
    if ((vegetable2.redness === highestValue) || (vegetable2.plumpness === highestValue)) {
      return vegetable2.submitter
    }
  } 
};
*/
const judgeVegetable = function (vegetables, metric) {
  let metricComparison = [];
  let highestValue;
  for (let vegetable of vegetables) {
    metricComparison.push(vegetable[metric])
  }
  highestValue = Math.max(...metricComparison);
  for (let vegetable2 of vegetables) {
    if (vegetable2[metric] === highestValue) {
      return vegetable2.submitter
    }
  }
}
console.log(judgeVegetable(vegetables, metric));