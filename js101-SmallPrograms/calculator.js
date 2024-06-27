import messageObj from './calculatorMessages.json' assert {type: 'json'};
import readline from "readline-sync";
const ask = readline.question;

function prompt(message) {
  console.log(`=> ${message}`);
}

const invalidNumber = (number) => number.trimStart() === '' || Number.isNaN(Number(number));

function checkForValidNumber(number) {
  while (invalidNumber(number)) {
    prompt(messageObj.notValidNum);
    number = ask();
  }
  return number;
}

function checkForValidOperation(string) {
  const validStrings = ['1', '2', '3', '4'];
  while (!validStrings.includes(string)) {
    prompt(messageObj.chooseValidString);
    string = ask();
  }
  return string;
}

function performOperationAndEvaluate(operation, num1, num2) {
  let output;
  switch (operation) {
    case '1':
      output = num1 + num2;
      break;
    case '2':
      output = num1 - num2;
      break;
    case '3':
      output = num1 * num2;
      break;
    case '4':
      output = num1 / num2;
      break;
  }
  return output;
}

function promptForNumbersAndOperation() {
  prompt(messageObj.firstNum);
  let number1 = ask();

  number1 = checkForValidNumber(number1);
  number1 = Number(number1);

  prompt(messageObj.secondNum);
  let number2 = ask();

  number2 = checkForValidNumber(number2);
  number2 = Number(number2);

  prompt(messageObj.operation);
  let operation = ask();
  operation = checkForValidOperation(operation);

  console.log(performOperationAndEvaluate(operation, number1, number2));
  return restartCal();
}

function restartCal() {
  prompt(messageObj.restart);
  const result = ask();
  if (result[0].toUpperCase() === 'Y') return promptForNumbersAndOperation();
  return messageObj.finish;
}

prompt(messageObj.greet);
console.log(promptForNumbersAndOperation());