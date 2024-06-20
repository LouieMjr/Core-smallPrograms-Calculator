const readline = require("readline-sync");
const ask = readline.question

console.log("Welcome to Calculator!");

console.log("What's the first number?");
const number1 = Number(ask());

console.log("What's the second number?");
const number2 = Number(ask());

console.log("What operation would you like to perform on these numbers? \n1) Add 2) Subtract 3) Multiply 4) Divide");
const operation = ask()

let output;
switch (operation) {
  case '1':
    output = number1 + number2
    break;
  case '2':
    output = number1 - number2
    break;
  case '3':
    output = number1 * number2
    break;
  case '4':
    output = number1 / number2
    break;
}
console.log(output);