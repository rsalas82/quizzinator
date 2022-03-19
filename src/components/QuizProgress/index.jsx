import './QuizProgress.css'

const QuizProgress = ({questions, currentQuestion}) => {
    return (
        <div className="QuizProgress">
            {questions.map((question, index) => {
                let styleQuestion = currentQuestion === index + 1 ? "question_step active" : "question_step"
                styleQuestion += getStyleQuestion(question)
                return (
                    <div className={styleQuestion}>
                        <div className='question_counter'>{index+1}</div>
                    </div>
                )
            })}
        </div>
    )
}

const getStyleQuestion = (question) => {
    if (typeof(question.isCorrect) === "undefined") {
        return ""
    } 
    if (question.isCorrect) {
        return " correct"
    }
    
    return " not_correct";
}

export default QuizProgress