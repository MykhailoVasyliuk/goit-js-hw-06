const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
console.log(list);

ingredients.forEach(ingredient => {
  const item = document.createElement("li");
  item.textContent = `${ingredient}`;
  item.className = "item";
  list.append(item);
});
