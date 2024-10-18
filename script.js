let currentInput = '';
let previousInput = '';
let operation = null;

const display = document.getElementById('display');

function appendNumber(number) {
  if (currentInput === '0' && number === '0') return;
  currentInput = currentInput.toString() + number.toString();
  updateDisplay();
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay();
}

function chooseOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);
  
  if (isNaN(prev) || isNaN(current)) return;
  
  switch (operation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }
  
  currentInput = result;
  operation = undefined;
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  display.innerText = currentInput || '0';
}
