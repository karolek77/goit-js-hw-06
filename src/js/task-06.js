/*Napisz skrypt, który przy utracie fokusu na polu input(zdarzenie blur) 
sprawdza czy wartość wprowadzona przez użytkownika 
spełnia warunek walidacji(ma odpowiednią długość)

Informacja o liczbie symboli, która powinna znajdować 
się w polu input, zawarta się w jego atrybucie data - length.
Jeśli wprowadzono odpowiednią liczbę symboli,
    to border pola input staje się zielony,
        a jeśli liczba jest nieprawidłowa - czerwony.*/

const inputValidation = document.querySelector("#validation-input");
const checkValidation = document.querySelector('[data-length="6"]');

const checkValidationLength = parseInt(checkValidation.dataset.length);

inputValidation.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === checkValidationLength) {
    inputValidation.classList.remove("invalid");
    inputValidation.classList.add("valid");
  } else {
    inputValidation.classList.add("invalid");
  }
});
