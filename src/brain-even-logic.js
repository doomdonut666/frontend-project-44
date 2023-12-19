import _ from 'lodash';
import readlineSync from 'readline-sync';
import evenCheckAnswer from './engine.js';

const launchBrainEven = () => {
  let exit = false;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (exit === false) {
    const randomNumber = _.random(1, 50);
    const answer = readlineSync.question(`Question: ${randomNumber} `);
    const correctAnswer = evenCheckAnswer(randomNumber);

    const checkAnswer = answer === correctAnswer;

    if (checkAnswer === false) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      exit = true;
    }
  }
};

export default launchBrainEven;
