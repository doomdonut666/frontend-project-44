import _ from 'lodash';
import {
  askQuestion, checkAnswer, checkCorrect, getAnswer, printCongratulations,
} from './engine.js';
import getName from './cli.js';

const getRandomNumber = () => _.random(2, 9);

const generateProgressionArray = (num) => {
  const result = [];
  let startNumber = _.random(1, 50);
  result.push(startNumber);

  for (let i = 1; i < 10; i += 1) {
    startNumber += num;
    result.push(startNumber);
  }

  return result;
};

const hideNumberInProgression = (progressionArray) => {
  const randomNumber = _.random(0, 9);
  const answer = progressionArray[randomNumber];
  progressionArray[randomNumber] = '..';
  return answer;
};

const launchBrainProgression = () => {
  const name = getName();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const progressionNumber = getRandomNumber();
    const progressionArray = generateProgressionArray(progressionNumber);
    const rightAnswer = hideNumberInProgression(progressionArray);
    askQuestion(progressionArray.join(' '));
    const answer = getAnswer('number');
    const checked = checkAnswer(answer, rightAnswer);
    const check = checkCorrect(checked, answer, rightAnswer, name);

    if (check === false) {
      return 0;
    }
  }

  printCongratulations(name);
  return 0;
};

export default launchBrainProgression;
