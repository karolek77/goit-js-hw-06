const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
ingredients.forEach((ingridient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingridient;
  listItem.classList.add("item");
  ingredientsList.appendChild(listItem);
});
