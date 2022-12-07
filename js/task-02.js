const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
const ingredientsArray = [];

ingredients.forEach(ingredient => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.className = "item";
  ingredientsArray.push(ingredientEl);

  return ingredientsArray;
});

ingredientsEl.append(...ingredientsArray);
