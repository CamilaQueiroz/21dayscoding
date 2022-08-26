const numbersButtons = document.getElementsByClassName("number");
const displayInput = document.querySelector("#number");
let currentOperation;
let values = [];

let numbers = [];

for (let index = 0; index < numbersButtons.length; index++) {
  numbers.push(numbersButtons[index]);
}

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    const numberValue = e.target.textContent;

    const zero = displayInput.value.substring(0, 1);

    if (zero === "0") {
      displayInput.value = numberValue;
    } else {
      displayInput.value += numberValue;
    }
  });
});

let displayInputDefaultValue = 0;
displayInput.value = displayInputDefaultValue;

displayInput.addEventListener("input", (e) => {
  const newValue = e.target.value;
  const zero = newValue.substring(0, 1);

  if (zero === "0") {
    displayInput.value = newValue.substring(1, newValue.length);
  } else {
    displayInput.value = newValue;
  }
});

const buttonsOperators = document.getElementsByClassName("operator");
let operators = [];

for (let index = 0; index < buttonsOperators.length; index++) {
  operators.push(buttonsOperators[index]);
}

let operation = "";

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    const op = e.target.textContent;

    if (op === "=") {
      operation += displayInput.value;
      displayInput.value = eval(operation);
      displayInput.focus();
      operation = "";
    } else {
      operation += displayInput.value + op;
      displayInput.value = "";
      displayInput.focus();
    }
  });
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", (e) => {
  displayInput.value = 0;
  operation = "";
});

const clearOneButton = document.querySelector(".clearOne");

clearOneButton.addEventListener("click", (e) => {
  displayInput.value = displayInput.value.substring(
    0,
    displayInput.value.length - 1
  );
});
