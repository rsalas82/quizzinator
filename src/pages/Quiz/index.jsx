import { useEffect, useState, useContext } from 'react'
import { useLocation } from 'wouter'
import { getQuiz } from '../../services/getQuiz'
import Question from '../../components/Question'
import UserContext from '../../context/UserContext'
import Spinner from '../../components/Spinner'
import QuizProgress from '../../components/QuizProgress'
import Container from '../../components/Container'
import { NUMBER_OF_QUESTIONS } from '../../utilities/constants.utility'
import './Quiz.css'

const Quiz = () => {
    const {user, quiz, setQuiz} = useContext(UserContext)
    const [location, setLocation] = useLocation()
    const [question, setQuestion] = useState(null)
    const [answer, setAnswer] = useState()

    useEffect(() => {
        if (!quiz) {
            getQuiz(NUMBER_OF_QUESTIONS).then(response => {setQuiz(response)})
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
            <p>
                Hi <strong>{user}</strong>. 
                You must answer this <strong>{NUMBER_OF_QUESTIONS} questions</strong> in order.
                When you click the 'Save' button, I'll show you the correct answer and I'll mark in the progress bar.
                At the end of the quiz, I'll show your results. Good luck!
            </p>
            
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
                    
                    <div className='buttons'>
                        {(!question.isSaved || quiz.questions.length !== quiz.currentQuestion) && (
                            <>
                                {quiz.currentQuestion < quiz.questions.length && (
                                    <button className={!question.isSaved && (quiz.currentQuestion < quiz.questions.length) ? "disabled" : ""}
                                        disabled={!question.isSaved && (quiz.currentQuestion < quiz.questions.length)} 
                                        onClick={handleNext}>
                                            <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18 7V17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M6.97179 5.2672C6.57832 4.95657 6 5.23682 6 5.73813V18.2619C6 18.7632 6.57832 19.0434 6.97179 18.7328L14.9035 12.4709C15.2078 12.2307 15.2078 11.7693 14.9035 11.5291L6.97179 5.2672Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                            Next
                                    </button>
                                )}
                                <button className={question.isSaved ? "disabled" : ""} 
                                    disabled={question.isSaved} 
                                    onClick={handleSave}>
                                        <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3 19V5C3 3.89543 3.89543 3 5 3H16.1716C16.702 3 17.2107 3.21071 17.5858 3.58579L20.4142 6.41421C20.7893 6.78929 21 7.29799 21 7.82843V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19Z" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M8.6 9H15.4C15.7314 9 16 8.73137 16 8.4V3.6C16 3.26863 15.7314 3 15.4 3H8.6C8.26863 3 8 3.26863 8 3.6V8.4C8 8.73137 8.26863 9 8.6 9Z" stroke="currentColor" strokeWidth="1.5"/>
                                            <path d="M6 13.6V21H18V13.6C18 13.2686 17.7314 13 17.4 13H6.6C6.26863 13 6 13.2686 6 13.6Z" stroke="currentColor" strokeWidth="1.5"/>
                                        </svg>
                                        Save
                                </button>
                            </>
                        )}
                        {question.isSaved && (quiz.questions.length === quiz.currentQuestion) && (
                            <button onClick={handleSummary}>
                                <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path  d="M9 21H15M9 21V16M9 21H3.6C3.26863 21 3 20.7314 3 20.4V16.6C3 16.2686 3.26863 16 3.6 16H9M15 21V9M15 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H15.6C15.2686 3 15 3.26863 15 3.6V9M15 9H9.6C9.26863 9 9 9.26863 9 9.6V16" stroke="currentColor" strokeWidth="1.5"/>
                                </svg>
                                View Results
                            </button>
                        )}
                    </div>
                </>
                )}
        </Container>
    )
}

export default Quiz