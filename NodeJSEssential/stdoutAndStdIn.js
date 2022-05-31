const questions = [
    'What is your name?',
    'What is your place of birth?',
    'What is your age?'
];
const ask = (i=0) =>{
   process.stdout.write(questions[i]);
}

ask();

const answers = [];

process.stdin.on('data',(answer) => {
    answers.push(answer.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length)      
    }else {
    const [name,place,age] = answers;
    process.stdout.write(`The person name ${name} is born at ${place} is of ${age} year old`);
    process.exit(0);
    }
})