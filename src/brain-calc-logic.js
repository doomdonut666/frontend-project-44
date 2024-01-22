import _ from 'lodash';
import {
  askQuestion, checkAnswer, checkCorrect, getAnswer, printCongratulations,
} from './engine.js';
import getName from './cli.js';

const getResultOfExpression = (expression) => {
  let result;
  const [firstNumber, operator, secondNumber] = expression;

  if (operator === '+') {
    result = firstNumber + secondNumber;
  } else if (operator === '-') {
    result = firstNumber - secondNumber;
  } else {
    result = firstNumber * secondNumber;
  }

  return result;
};

const getRandomExpression = () => {
  const expression = [];
  const operators = ['+', '-', '*'];
  expression.push(_.random(0, 50));
  const chooseOperator = operators[_.random(0, 2)];
  expression.push(chooseOperator);
  expression.push(_.random(0, 20));

  return expression;
};

const launchBrainCalc = () => {
  const name = getName();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    const expression = getRandomExpression();
    const joinedExpression = expression.join(' ');
    const resultOfExpression = getResultOfExpression(expression);
    // console.log(resultOfExpression);
    askQuestion(joinedExpression);
    const answer = getAnswer('number');
    const checked = checkAnswer(answer, resultOfExpression);
    const check = checkCorrect(checked, answer, resultOfExpression, name);
    if (check === false) {
      return 0;
    }
  }

  printCongratulations();
  return 0;
};

export default launchBrainCalc;
