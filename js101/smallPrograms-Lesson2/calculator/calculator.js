import messageObj from './calculatorMessages.json' assert { type: "json" };
import readline from "readline-sync";
const ask = readline.question;

function prompt(message) {
  console.log(`=> ${message}`);
}

const invalidNumber = (number) => number.trimStart() === '' || Number.isNaN(Number(number));

function checkForValidNumber(number, booleanValue) {
  const promptForNumber = booleanValue ? messageObj[language].askForSecondNum : messageObj[language].askForFirstNum;
  while (invalidNumber(number)) {
      console.clear();
      prompt(messageObj[language].invalidNum);
      prompt(promptForNumber);
      number = ask();
  }
  console.clear();
  return number;
}

function checkForValidOperation(string) {
  const validStrings = ['1', '2', '3', '4'];
  while (!validStrings.includes(string)) {
    prompt(messageObj[language].chooseValidNum);
    string = ask();
  }
  return string;
}

function performOperationAndEvaluate(operation, num1, num2) {
  let output;
  switch (operation) {
    case '1':
      output = num1 + num2;
      return `The results of ${num1} + ${num2} = ${output}`
    case '2':
      output = num1 - num2;
      return `The results of ${num1} - ${num2} = ${output}`
    case '3':
      output = num1 * num2;
      return `The results of ${num1} * ${num2} = ${output}`
    case '4':
      output = num1 / num2;
      return `The results of ${num1} / ${num2} = ${output}`
  }
  return output;
}

function promptForNumbersAndOperation() {
  prompt(messageObj[language].askForFirstNum);
  let firstNumber = ask();

  let isFirstNumValid = false;
  firstNumber = checkForValidNumber(firstNumber, isFirstNumValid);
  isFirstNumValid = true;
  firstNumber = Number(firstNumber);

  prompt(messageObj[language].askForSecondNum);
  let secondNumber = ask();

  secondNumber = checkForValidNumber(secondNumber, isFirstNumValid);
  secondNumber = Number(secondNumber);

  prompt(messageObj[language].operation);
  let operation = ask();
  operation = checkForValidOperation(operation);

  console.log(performOperationAndEvaluate(operation, firstNumber, secondNumber));
  return restartCalc();
}

function restartCalc() {
  prompt(messageObj[language].restart);
  const result = ask();
  console.clear();
  if (result.toUpperCase() === 'Y' || result.toUpperCase() === 'YES') return promptForNumbersAndOperation();
  return messageObj[language].finish;
}

function validLanguage() {
  prompt(messageObj.language)
  let language = ask();
  language = language.toLowerCase();

  const validStrings = ['en', 'es', 'fr', 'de', 'ja', 'ar']
  
  while (!validStrings.includes(language)) {
    prompt(messageObj.en.chooseValidLanguage);
    language = ask();
    language = language.toLowerCase();
  }
  return language;
};

prompt(messageObj.en.greet);
const language = validLanguage();
console.log(promptForNumbersAndOperation());