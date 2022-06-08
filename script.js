const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".plus,.minus,.multiply,.divide");
const btn_bs = document.querySelector(".backspace");
const btn_c = document.querySelector(".clear");
const btn_e = document.querySelector(".equal");
const display1 = document.querySelector(".num1");
const display2 = document.querySelector(".num2");
const toggle_all = document.querySelectorAll(".toggle");
const body = document.querySelector("body");
let operator = "";
let result = "";
let num1 = "";
let num2 = "";

// Display the numbers on the screen
numbers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const getNumber = e.currentTarget.innerText;
    if (getNumber === "." && display2.innerText.includes(".")) return;
    display2.innerText += getNumber;
  });
});

// Display the operator
operators.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    operator = e.currentTarget.innerText;

    if (display1.innerText !== "" && display2.innerText !== "") {
      operator = display1.innerText.slice(-1);
      operations();
      display1.innerText = result + " " + btn.innerText;
      num1 = parseFloat(result);
      display2.innerText = "";
      operator = e.currentTarget.innerText;
    } else if (display1.innerText && !display2.innerText) {
      display1.innerText = num1 + " " + operator;
    } else if (!display1.innerText && !display2.innerText) {
      display2.innerText = "";
      display1.innerText = "";
    } else {
      num1 = parseFloat(display2.innerText);
      display1.innerText = num1 + " " + operator;
      display2.innerText = "";
      operations();
    }
  });
});

function operations() {
  if (operator === "+") {
    result = num1 + parseFloat(display2.innerText);
  } else if (operator === "-") {
    result = num1 - parseFloat(display2.innerText);
  } else if (operator === "x") {
    result = num1 * parseFloat(display2.innerText);
  } else if (operator === "/") {
    result = num1 / parseFloat(display2.innerText);
  }
}

btn_e.addEventListener("click", () => {
  operations();
  if (!display2.innerText) {
    display1.innerText = "";
    display2.innerText = "Error";
  } else {
    display1.innerText = "";
    display2.innerText = result;
  }
});

btn_bs.addEventListener("click", () => {
  display2.innerText = display2.innerText.slice(0, -1);
});

btn_c.addEventListener("click", () => {
  display1.innerText = "";
  display2.innerText = "";
});
