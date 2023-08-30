/*Funkcjonalność przesyłania formularza form.login-form powinno zostać obsłużona przy użycie wydarzenia submit
Podczas przesyłania formularza strona nie powinna się odświeżać.
Jeśli w formularzu są nieuzupełnione pola, wyświetl alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz,
pobierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, 
a wartość pola - wartością właściwości. 
Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości pól input metodą reset.*/

const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
    return;
  }
  const formData = {
    email,
    password,
  };
  console.log(formData);
  form.reset();
}
