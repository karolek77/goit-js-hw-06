/*Utwórz funkcję createBoxes(amount), 
która przyjmuje jeden parametr
  - liczbę.
  Funkcja tworzy tyle elementów < div >,
    ile wybrano w amount i dodaje je do div#boxes.

Wymiary pierwszego <div> - 30px na 30px.
Każdy następny element powinien być szerszy 
i wyższy od poprzedniego o 10px.
Wszystkie elementy powinny mieć losowy kolor tła
 w formacie NEX.Użyj gotowej funkcji getRandomHexColor 
 aby otrzymać kolor.

Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes,
  tym samym usuwając wszystkie utworzone elementy.*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberCreate = document.querySelector('input[type="number"]');
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxElementColor = document.querySelector("#boxes");

function createBoxes(amount) {
  const createsDiv = [];
  let diveSize = 30;
  let div;

  for (let i = 0; i < amount; i++) {
    div = document.createElement("div");
    div.style.width = `${diveSize}px`;
    div.style.height = `${diveSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    diveSize += 10;
    //div.classList = "item";
    boxElementColor.appendChild(div);
    createsDiv.push(div);
  }
  return createsDiv.length;
}

buttonCreate.addEventListener("click", () => {
  const amount = numberCreate.value;
  const createdDivsCount = createBoxes(amount);

  console.log(`Created: ${createdDivsCount} divs`);
});

let destroyedDivsCount = 0;
function destroyBoxes() {
  while (boxElementColor.firstChild) {
    boxElementColor.removeChild(boxElementColor.firstChild);
    destroyedDivsCount++;
  }
}

buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
  numberCreate.value = "";

  console.log(`Destroy: ${destroyedDivsCount} divs`);
  destroyedDivsCount = 0;
});
