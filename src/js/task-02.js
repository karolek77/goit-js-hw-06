const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsArr = ingredients.map((ingridient) => {
  const listItem = document.createElement("li");
  listItem.textContent = ingridient;
  listItem.classList.add("item");
  return listItem;
  //ingredientsList.appendChild(listItem);
});
const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...ingredientsArr);
