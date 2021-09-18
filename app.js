const textInput = document.querySelector(".txt-input");
const buttonTranslate = document.querySelector(".btn");
const outputText = document.querySelector(".output");

const url = "https://api.funtranslations.com/translate/yoda.json";

function getURL(input) {
  return `${url}?text=${input}`;
}

function errorHandler(error) {
  console.log("error occured ", error);
  alert("something worong with your server");
}

function clickHandler() {
  let inputText = textInput.value;
  console.log(textInput);
  fetch(getURL(inputText))
    .then((response) => response.json())
    .then((data) => {
      outputText.innerText = data.contents.translated;
    })
    .catch(errorHandler(error));
}

buttonTranslate.addEventListener("click", clickHandler);
