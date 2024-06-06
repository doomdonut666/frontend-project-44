import _ from 'lodash';
import {
  askQuestion, checkAnswer, checkCorrect, getAnswer, printCongratulations,
} from './engine.js';
import getName from './cli.js';

const isPrime = (number) => {
  const decimalList = [2, 3, 5, 7];
  const answer = decimalList
    .map((num) => {
      if (number === num) {
        return true;
      }

      if ((number % num === 0)) {
        return false;
      }

      return true;
    });

  const check = answer.every((result) => result === true);
  const yesOrNo = (bool) => (bool === true ? 'yes' : 'no');
  return yesOrNo(check);
};

const launchBrainPrime = () => {
  const name = getName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = _.random(0, 100);
    const rightAnswer = isPrime(randomNumber);

    askQuestion(randomNumber);
    const answer = getAnswer('string');
    const checked = checkAnswer(answer, rightAnswer);
    const check = checkCorrect(checked, answer, rightAnswer, name);

    if (check === false) {
      return 0;
    }
  }

  printCongratulations(name);
  return 0;
};

export default launchBrainPrime;
