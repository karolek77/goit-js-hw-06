const categoriesList = document.querySelector("#categories");
const categoryItem = categoriesList.querySelectorAll("li.item");

let categotyCount = 0;
categoryItem.forEach((item) => {
  categotyCount++;
});
console.log("Number of categories: ", categotyCount);

categoryItem.forEach((categoryItem) => {
  const categoryHeader = categoryItem.querySelector("h2");
  const categoryElements = categoryItem.querySelectorAll("li");

  console.log("Category: " + categoryHeader.textContent);
  console.log("Elements: ", categoryElements.length);
});
