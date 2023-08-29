const valueElement = document.querySelector("#value");
const buttons = document.querySelectorAll("[data-action]");

let counterValue = 0;

buttons.forEach((button) => {
  const action = button.getAttribute("data-action");
  button.addEventListener("click", () => {
    if (action === "decrement") {
      counterValue--;
    } else if (action === "increment") {
      counterValue++;
    }
    valueElement.textContent = counterValue;
  });
});
