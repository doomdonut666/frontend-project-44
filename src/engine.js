import readlineSync from 'readline-sync';

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const getAnswer = (format) => {
  if (format === 'string') {
    return readlineSync.question('Your answer: ');
  }

  return readlineSync.questionInt('Your answer: ');
};

const checkAnswer = (userAnswer, rightAnswer) => userAnswer === rightAnswer;

const checkCorrect = (checked, userAnswer, rightAnswer, name) => {
  let win = true;
  if (checked === true) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}.'`);
    console.log(`Let's try again, ${name}!`);
    win = false;
  }

  return win;
};

const printCongratulations = () => {
  console.log('Congratulations!');
};

export {
  checkAnswer, askQuestion, getAnswer, checkCorrect, printCongratulations,
};
