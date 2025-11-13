let ansEl = document.getElementById("answer-el");

function getValues() {
  let num1 = parseFloat(document.getElementById("first-el").value);
  let num2 = parseFloat(document.getElementById("sec-el").value);
  return { num1, num2 };
}

function add() {
  let { num1, num2 } = getValues();
  ansEl.textContent = "Ans: " + (num1 + num2);
}

function sub() {
  let { num1, num2 } = getValues();
  ansEl.textContent = "Ans: " + (num1 - num2);
}

function mul() {
  let { num1, num2 } = getValues();
  ansEl.textContent = "Ans: " + (num1 * num2);
}

function div() {
  let { num1, num2 } = getValues();
  if (num2 === 0) {
    ansEl.textContent = "Cannot divide by 0!";
    return;
  }
  ansEl.textContent = "Ans: " + (num1 / num2).toFixed(2);
}
