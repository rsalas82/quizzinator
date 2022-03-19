import { useEffect, useState, useContext } from 'react'
import { getQuiz } from '../../services/getQuiz'
import shuffleArray from '../../utilities/shuffleArray'
import Question from '../Question'
import UserContext from '../../context/UserContext'
import Spinner from '../Spinner'
import './Quiz.css'
import QuizProgress from '../QuizProgress'

const Quiz = () => {
    const [questionary, setQuestionary] = useState([])
    const {user, setUser, quiz, setQuiz} = useContext(UserContext)

    useEffect(() => {
        getQuiz(10).then(response => {console.log(response); setQuiz(response)})
        console.log({quiz})
    }, [])

    return (
        <div className='Quiz'>
            <div>
                Hi <strong>{user}</strong>
            </div>
            {!quiz && <Spinner />}
            {quiz && (
                <>
                    <QuizProgress questions={quiz.questions} currentQuestion={quiz.currentQuestion}/>
                    <Question key={`question_${quiz.questions[quiz.currentQuestion].id}`} 
                    question={quiz.questions[quiz.currentQuestion].question} 
                    correctAnswer={quiz.questions[quiz.currentQuestion].correctAnswer} 
                    options={quiz.questions[quiz.currentQuestion].options} />
                </>
                )}
        </div>
    )
}

export default Quiz