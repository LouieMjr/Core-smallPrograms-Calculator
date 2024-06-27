import readline from "readline-sync";
const ask = readline.question;

function prompt(message) {
  console.log(`=> ${message}`);
}

const invalidNumber = (number) => number.trimStart() === '' || Number.isNaN(Number(number));

function checkForValidNumber(number) {
  while (invalidNumber(number)) {
    prompt('This isnt a number. Enter a valid number!');
    number = ask();
  }
  return number;
}

function checkForValidOperation(string) {
  const validStrings = ['1', '2', '3', '4'];
  while (!validStrings.includes(string)) {
    prompt('Must choose 1, 2, 3, or 4');
    string = ask();
  }
  return string;
}


prompt("Welcome to Calculator!");

prompt("What's the first number?");
let number1 = ask();

number1 = checkForValidNumber(number1);
number1 = Number(number1);

prompt("What's the second number?");
let number2 = ask();

number2 = checkForValidNumber(number2);
number2 = Number(number2);

function pickOperation(operation) {
  let output;
  switch (operation) {
    case '1':
      output = number1 + number2;
      break;
    case '2':
      output = number1 - number2;
      break;
    case '3':
      output = number1 * number2;
      break;
    case '4':
      output = number1 / number2;
      break;
  }
  return output;
}

prompt("What operation would you like to perform on these numbers? \n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = ask();
operation = checkForValidOperation(operation);

console.log(pickOperation(operation));

