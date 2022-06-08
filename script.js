const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".tc");
const btn_bs = document.querySelector(".backspace");
const btn_c = document.querySelector(".clear");
const btn_e = document.querySelector(".equal");
const display1 = document.querySelector(".num1");
const display2 = document.querySelector(".num2");
const toggle_all = document.querySelectorAll(".toggle_input");
const body = document.querySelector("body");
let operator = "";
let result = "";
let num1 = "";
let num2 = "";

// Toggle Change Theme
toggle_all.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const check = e.currentTarget.innerText;
    if (check === "2" || e.currentTarget.id === "two") {
      body.classList.add("theme2");
      body.classList.remove("theme3");
    } else if (check === "3" || e.currentTarget.id === "tree") {
      body.classList.add("theme3");
      body.classList.remove("theme2");
    } else {
      body.classList.remove("theme2");
      body.classList.remove("theme3");
    }
  });
});

// Display the numbers on the screen
numbers.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const getNumber = e.currentTarget.innerText;
    if (getNumber === "." && display2.innerText.includes(".")) return;
    display2.innerText += getNumber;
  });
});

// Display & Function the operator
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
  } else if (operator === "*") {
    result = num1 * parseFloat(display2.innerText);
  } else if (operator === "/") {
    result = num1 / parseFloat(display2.innerText);
  }
}

// Button =
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

// Button BackSpace
btn_bs.addEventListener("click", () => {
  display2.innerText = display2.innerText.slice(0, -1);
});

// Button Clear
btn_c.addEventListener("click", () => {
  display1.innerText = "";
  display2.innerText = "";
});
