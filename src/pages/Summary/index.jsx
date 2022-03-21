import { useContext } from 'react'
import { useLocation } from 'wouter'
import Container from '../../components/Container'
import UserContext from '../../context/UserContext'
import './Summary.css'

const Summary = () => {
    const {user, quiz} = useContext(UserContext)
    const [location, setLocation] = useLocation()

    if (!quiz) {
        setLocation('/')
        return
    }

    const percentage = quiz.correctQuestions / quiz.questions.length * 100;

    const getStyleByPercentage = (percentage) => {
        if (percentage < 60)
            return "death"
        if (percentage >= 60 && percentage < 80)
            return "retry"
        return "live"
    }

    return (
        <Container className='Summary'>
            <h2>Summary of {user}</h2>
            <div className='Summary_grid'>
                <strong>Total correct answers</strong>
                <div>{quiz.correctQuestions}</div>
                <strong>Total wrong answers</strong>
                <div>{quiz.errorQuestions}</div>
                <strong>Percentage correctness</strong>
                <div className={getStyleByPercentage(percentage)}>{percentage}%</div>
            </div>
        </Container>
    )
}

export default Summary