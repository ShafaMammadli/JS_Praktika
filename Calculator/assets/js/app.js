let operator = document.getElementById("operator").value,
  num1 = parseInt(document.getElementById("num1").value),
  num2 = parseInt(document.getElementById("num2").value),
  result;

function calculate() {
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;

    default:
      "Invalid operator";
  }

  document.getElementById("result").innerHTML = result;
}
