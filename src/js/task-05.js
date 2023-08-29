//Napisz skrypt, który przy wpisywaniu tekstu
//w polu input input#name - input(zdarzenie input) wstawia
//jego aktualną wartość do span#name - output.
//Jeśli pole input jest puste,
//w spanie powinien wyświetlić się tekst "Anonymous".

const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value) {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "Anonymus";
  }
});
