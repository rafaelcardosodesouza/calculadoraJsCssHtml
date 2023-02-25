let runningTotal = 0;
let buffer = "0";
let previousOperator;

const screm = document.querySelector(".screm");

function buttonClick(value) {
  isNaN(value) ? handleSymbol(value) : handleSymbol(value);
  screen.innerText = buffer;
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      runnigTotal = 0;
      break;
    case "=":
      if (previusOperator === null) return;
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
  }
}
