const calculator = {
  //Creates an object to keep track of values
  displayValue: '0',
  //This will display 0 on the calculator screen
  firstOperand: null,
  //This will hold the first operand for any expressions, we set it to null for now.
  waitingForSecondOperand: false,
  //This will hold the operator, we set it to null for now.
  operator: null,
};

//This modifies values each time a button is clicked on.
function inputDigit(digit) {
  const { displayValue, waitingForSecondOperand } = calculator;
  //checks if the Wait_Second_Operand variable is true and sets

  if (waitingForSecondOperand === true) {
    calculator.displayValue = digit;
    calculator.waitingForSecondOperand = false;
  } else {
     //This overwrites Display_value if the current value is 0.
    //otherwise it adds onto it.
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
  }
}
//This section handles decimal points
function inputDecimal(dot) {
    //This ensures that accidental clicking of the decimal point doesn't
    //cause bugs in the operation
  if (calculator.waitingForSecondOperand === true) {
  	calculator.displayValue = "0."
    calculator.waitingForSecondOperand = false;
    return
  }

  if (!calculator.displayValue.includes(dot)) {
    //if the Display_Value does not contain a decimal point
    calculator.displayValue += dot;
  }
}

//This section handles operators
function handleOperator(nextOperator) {
  const { firstOperand, displayValue, operator } = calculator
   //When an operator key is pressed we convert the current number
    //displayed on the screen to a number and then store the result in
    //calculator.First_Operand if it it doesn't already exist.
  const inputValue = parseFloat(displayValue);
   //checks if an operator already exist and if Wait_Second_Operand is true
    //then updates the operator an exist from the function.
  
  if (operator && calculator.waitingForSecondOperand)  {
    calculator.operator = nextOperator;
    return;
  }

  if (firstOperand == null && !isNaN(inputValue)) {
    calculator.firstOperand = inputValue;

  } else if (operator) { //checks if an operator already exists
    const result = calculate(firstOperand, inputValue, operator);
//Here we add a fixed amount of numbers after the decimal.
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`;
    calculator.firstOperand = result;
  }

  calculator.waitingForSecondOperand = true;
  calculator.operator = nextOperator;
}


//Handles the actual calculations
function calculate(firstOperand, secondOperand, operator) {
  if (operator === '+') {
    return firstOperand + secondOperand;
  } else if (operator === '-') {
    return firstOperand - secondOperand;
  } else if (operator === '*') {
    return firstOperand * secondOperand;
  } else if (operator === '/') {
    return firstOperand / secondOperand;
  }

  return secondOperand;
}

function resetCalculator() {
  calculator.displayValue = '0';
  calculator.firstOperand = null;
  calculator.waitingForSecondOperand = false;
  calculator.operator = null;
}

//This function updates the calculator screen with the contents of Display_Value
function updateDisplay() {
  //Makes use of the calculator-screen class to target the
  const display = document.querySelector('.calculator-screen');
  display.value = calculator.displayValue;
}

updateDisplay();
//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', event => {
   //The target variable is an object that represents the element
  //that was clicked.
  const { target } = event;
  const { value } = target;
  //if the element that was clicked on is not a button, exit the function.
  if (!target.matches('button')) {
    return;
  }

  switch (value) {
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
      handleOperator(value);
      break;
    case '.':
      inputDecimal(value);
      break;
    case 'all-clear':
      resetCalculator();
      break;
    default:
      // check if the key is an integer
      if (Number.isInteger(parseFloat(value))) {
        inputDigit(value);
      }
  }

  updateDisplay();
});