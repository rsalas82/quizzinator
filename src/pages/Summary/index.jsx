import { useContext, useEffect } from 'react'
import { useLocation } from 'wouter'
import Container from '../../components/Container'
import UserContext from '../../context/UserContext'
import CorrectIcon from './../../assets/correct.svg?component'
import WrongIcon from './../../assets/wrong.svg?component'
import TrophyIcon from './../../assets/trophy.svg?component'
import './Summary.css'

const Summary = () => {
    const {user, quiz} = useContext(UserContext)
    const [location, setLocation] = useLocation()

    let percentage = 0;
    useEffect(() => {
        if (!quiz) {
            setLocation('/')
        }
    }, [])
    
    percentage = quiz.correctQuestions / quiz.questions.length * 100;
    const getStyleByPercentage = (percentage) => {
        if (percentage < 60)
            return "death"
        if (percentage >= 60 && percentage < 80)
            return "retry"
        return "live"
    }

    return (
        <>
        {quiz && (
            <Container className='Summary'>
                <h2>Summary</h2>
                <p>Let's see your results {user}... </p>
                <div className='Summary_grid'>
                    <div className='live'>
                        <CorrectIcon />
                        <strong>Correct answers</strong>
                    </div>
                    <div>{quiz.correctQuestions}</div>
                    <div className='death'>
                        <WrongIcon />
                        <strong>Wrong answers</strong>
                    </div>
                    <div>{quiz.errorQuestions}</div>
                    <div className='retry'>
                        <TrophyIcon />
                        <strong>Worthiness</strong>
                    </div>
                    <div className={getStyleByPercentage(percentage)}>{percentage}%</div>
                </div>
                <div className='summaryQuote'>
                    {percentage < 60 && (
                        <p>Ha Ha Ha! I'll destroy the whole planet because of you! </p>
                    )}
                    
                    {percentage >= 60 && percentage < 80 && (
                        <p>I have to think about this results. Maybe you have saved the world... or maybe not! </p>
                    )}

                    {percentage >=80 && (
                        <p>Well done! You have saved the world... by now! </p>
                    )}
                </div>
            </Container>
        )}
        </>
    )
}

export default Summary