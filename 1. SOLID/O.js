////////////////////////////////
////////// 1) BAD  /////////////
////////////////////////////////
const questions = [
  {
    type: 'boolean',
    description: 'This article is very useful',
  },
  {
    type: 'text',
    description: 'Tell me about yourself',
  },
  {
    type: 'multipleChoice',
    description: 'What is your favorite language',
    options: ['HTML', 'CSS', 'JS', 'Golang'],
  },
];

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
