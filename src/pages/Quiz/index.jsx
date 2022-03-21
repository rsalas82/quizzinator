import { useEffect, useState, useContext } from 'react'
import { useLocation } from 'wouter'
import { getQuiz } from '../../services/getQuiz'
import Question from '../../components/Question'
import UserContext from '../../context/UserContext'
import Spinner from '../../components/Spinner'
import QuizProgress from '../../components/QuizProgress'
import Container from '../../components/Container'
import './Quiz.css'

const Quiz = () => {
    const {user, quiz, setQuiz} = useContext(UserContext)
    const [location, setLocation] = useLocation()
    const [question, setQuestion] = useState(null)
    const [answer, setAnswer] = useState()

    useEffect(() => {
        if (!quiz) {
            getQuiz(10).then(response => {setQuiz(response)})
        }
    }, [])

    useEffect(() => {
        if (quiz) {
            setQuestion(quiz.questions[quiz.currentQuestion-1])
        }
    }, [quiz])

    const handleNext = () => {
        const nextQuestion = quiz.currentQuestion + 1;
        setQuiz({
            ...quiz,
            currentQuestion: nextQuestion
        })
        setLocation(`/quiz/${nextQuestion}`)
    }

    const handleSummary = () => {
        setLocation("/summary")
    }

    const handleSave = () => {
        updateQuiz()
    }

    const handleChangeQuestion = (evt) => {
        setAnswer({
            id: (evt.target.name).split("_")[1],
            value: evt.target.value
        })
    }

    const updateQuiz = () => {
        let questions = quiz.questions;
        const isCorrect = answer.value === question.correctAnswer;
        questions[quiz.currentQuestion-1] = {
            ...question,
            isSaved: true,
            isCorrect: isCorrect
        };
        setQuiz({
            ...quiz,
            errorQuestions: !isCorrect ? quiz.errorQuestions+1 : quiz.errorQuestions,
            correctQuestions: isCorrect ? quiz.correctQuestions+1 : quiz.correctQuestions,
            questions: [...questions]
        })
    }

    return (
        <Container className='Quiz'>
            <div>
                Hi <strong>{user}</strong>
            </div>
            
            {(!quiz || !question) && <Spinner />}
            
            {quiz && question && (
                <>
                    <QuizProgress />
                    
                    <Question 
                        key={`question_${question.id}`} 
                        id={question.id} 
                        question={question.question} 
                        correctAnswer={question.correctAnswer} 
                        options={question.options}
                        disabled={question.isSaved}
                        checked={answer}
                        handleChange={handleChangeQuestion} />
                    
                    {!question.isSaved && (
                        <button onClick={handleSave}>Save</button>
                    )}
                    
                    {question.isSaved && (quiz.currentQuestion < quiz.questions.length) && (
                        <button onClick={handleNext}>Next</button>
                    )}

                    {question.isSaved && (quiz.questions.length === quiz.currentQuestion) && (
                        <button onClick={handleSummary}>View Results</button>
                    )}
                </>
                )}
        </Container>
    )
}

export default Quiz