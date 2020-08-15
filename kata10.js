const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let aBakeryRecipes = [];
  let bBakeryRecipes = [];
  let chosenRecipe;
  for (let recipe of recipes) {
    for (let ingredient of recipe.ingredients) {
      if (bakeryA.includes(ingredient)) {
        aBakeryRecipes.push(recipe.name);
      } else if (bakeryB.includes(ingredient)) {
        bBakeryRecipes.push(recipe.name);
      }
    }
  } for (let a of aBakeryRecipes) {
    if (bBakeryRecipes.includes(a)) {
      chosenRecipe = a;
    }
  }
  return chosenRecipe
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
