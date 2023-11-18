////////////////////////////////
////////// 1) BAD  /////////////
////////////////////////////////
// const questions = [
//   {
//     type: 'boolean',
//     description: 'This article is very useful',
//   },
//   {
//     type: 'text',
//     description: 'Tell me about yourself',
//   },
//   {
//     type: 'multipleChoice',
//     description: 'What is your favorite language',
//     options: ['HTML', 'CSS', 'JS', 'Golang'],
//   },
//   {
//     type: 'range',
//     description: 'Describe your favorite JS feature',
//   },
// ];

function printQuestions(questions) {
  questions.forEach((question) => {
    console.log(question.description);

    switch (question.type) {
      case 'boolean':
        console.log('1. True');
        console.log('1. False');
        break;
      case 'text':
        console.log('Answer: ___________________');
        break;
      case 'multipleChoide':
        question.options.forEach((option, idx) => {
          console.log(`${idx + 1}: ${option}`);
        });
        break;
    }
  });
}

////////////////////////////////
////////// 2) GOOD  /////////////
////////////////////////////////

class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('1. True');
    console.log('1. False');
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, idx) => {
      console.log(`${idx + 1}: ${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('Answer: ___________________');
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log('Minimum: ____________');
    console.log('Maximum: ____________');
  }
}

const questions = [
  new BooleanQuestion('This article is awesome'),
  new MultipleChoiceQuestion('What is your favorite movie?', [
    'The walking dead',
    'spiderman',
    'avenger',
  ]),
  new TextQuestion('Tell me about yourself?'),
  new RangeQuestion('Your min and max pushup?'),
];

function printQuestions(questions) {
  questions.forEach((question, idx) => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log('');
  });
}
