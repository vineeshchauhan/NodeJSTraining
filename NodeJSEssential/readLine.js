
const askQuestion = require('./lib/askQuestion')

const questions = ["What is your name?",
    "What is your place of birth?",
    "What is your age?"]

askQuestion(questions,(answers) => {
    console.log("Here are your answers")
    console.log(answers)
    process.exit(0)
});