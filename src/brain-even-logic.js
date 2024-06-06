import _ from 'lodash';
import {
  checkAnswer, askQuestion, getAnswer, checkCorrect, printCongratulations,
} from './engine.js';
import getName from './cli.js';

const checkEvenOrNot = (number) => {
  const result = number % 2 === 0 ? 'yes' : 'no';
  return result;
};

const launchBrainEven = () => {
  const name = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = _.random(1, 50);
    askQuestion(randomNumber);
    const answer = getAnswer('string');
    const correctAnswer = checkEvenOrNot(randomNumber);

    const checkedAnswer = checkAnswer(answer, correctAnswer);

    const check = checkCorrect(checkedAnswer, answer, correctAnswer, name);
    if (check === false) {
      return 0;
    }
  }

  printCongratulations(name);
  return 0;
};

export default launchBrainEven;
