/*Napisz skrypt, który reaguje na zmianę wartości elementu 
input#font - size - control(zdarzenie input) i 

zmienia styl inline span#text aktualizując właściwość
font - size.W rezultacie, podczas zmiany wartości suwakiem,
    ma zmieniać się rozmiar tekstu w elemencie span*/

const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  const newSize = fontSizeControl.value + "px";
  textSpan.style.fontSize = newSize;
});
