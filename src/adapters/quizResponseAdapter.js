import shuffleArray from "../utilities/shuffleArray"

const quizResponseAdapter = (quiz) => {
    return {
        currentQuestion: 1,
        errorQuestions: 0,
        correctQuestions: 0,
        questions: 
            quiz.map((question, index) => {
                return {
                    id: index,
                    question: question.question,
                    options: shuffleArray([...question.incorrect_answers, question.correct_answer]),
                    isCorrect: undefined,
                    correctAnswer: question.correct_answer
                }
            })
        
    }
}

export default quizResponseAdapter