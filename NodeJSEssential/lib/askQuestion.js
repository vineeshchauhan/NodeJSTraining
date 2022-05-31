const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})


module.exports = (questions,done) => {
    const answers = [];
    /*   const firstAnswer = (answer) => {
            answers.push(answer)
            const anotherQuestion = () => {
                if (answers.length < questions.length) {
                    rl.question(questions[answers.length], (answer) => {
                        answers.push(answer)
                        anotherQuestion()
                    })
                } else {
                    console.log(answers)
                    process.exit(0)
                }
            }
            anotherQuestion()
        } */
    
        const firstAnswer = (answer) => {
            answers.push(answer)
          
                if (answers.length < questions.length) {
                    rl.question(questions[answers.length], firstAnswer)
                } else {
                    done(answers)
                }
            
            //anotherQuestion()
        }
    
        rl.question(questions[0], firstAnswer);
    }
