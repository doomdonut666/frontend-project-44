import _ from 'lodash';
import {
  askQuestion, checkAnswer, checkCorrect, getAnswer, printCongratulations,
} from './engine.js';
import getName from './cli.js';

// Отвечает за поиск НОД, реализовано с помощью алгоритма Евклида
const findGcd = (number1, number2) => {
  if ((number1 === 0) || (number2 === 0)) {
    return 1;
  }

  if (number1 % number2 === 0) {
    return number2;
  }

  if (number1 === number2) {
    return number1;
  }

  const num1 = Math.max(number1, number2);

  // num2 - для того чтобы не менять значение number2
  let num2 = Math.min(number1, number2);

  // Тут будет храниться остаток
  let remainder = num1 % num2;

  // Переменная для сохранения предыдущего остатка
  let temp = remainder;

  while (temp !== 0) {
    remainder = num2 % temp;
    num2 = temp;
    temp = remainder;
  }

  return num2;
};

const launchBrainGcd = () => {
  const name = getName();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const number1 = _.random(1, 300);
    const number2 = _.random(1, 300);

    const rightAnswer = findGcd(number1, number2);
    askQuestion([number1, number2]);
    const answer = getAnswer('number');
    const checkedAnswer = checkAnswer(answer, rightAnswer);
    checkCorrect(checkedAnswer, answer, rightAnswer, name);

    if (checkedAnswer === false) {
      return 0;
    }
  }

  printCongratulations(name);
  return 0;
};

export default launchBrainGcd;
