import { useContext, useEffect } from 'react'
import { useLocation } from 'wouter'
import Container from '../../components/Container'
import UserContext from '../../context/UserContext'
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
                        <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 12.5L10 15.5L17 8.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <strong>Correct answers</strong>
                    </div>
                    <div>{quiz.correctQuestions}</div>
                    <div className='death'>
                        <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <strong>Wrong answers</strong>
                    </div>
                    <div>{quiz.errorQuestions}</div>
                    <div className='retry'>
                        <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.74534 4H17.3132C17.3132 4 16.4326 17.2571 12.0293 17.2571C9.87826 17.2571 8.56786 14.0935 7.79011 10.8571C6.97574 7.46844 6.74534 4 6.74534 4Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17.3132 4C17.3132 4 18.2344 3.01733 19 2.99999C20.5 2.96603 20.7773 4 20.7773 4C21.0709 4.60953 21.3057 6.19429 19.8967 7.65715C18.4876 9.12 16.9103 10.4 16.2684 10.8571" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.74527 4.00001C6.74527 4.00001 5.78547 3.00614 4.99995 3.00001C3.49995 2.9883 3.22264 4.00001 3.22264 4.00001C2.92908 4.60953 2.69424 6.19429 4.1033 7.65715C5.51235 9.12001 7.14823 10.4 7.79004 10.8572" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M8.50662 20C8.50662 18.1714 12.0292 17.2571 12.0292 17.2571C12.0292 17.2571 15.5519 18.1714 15.5519 20H8.50662Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <strong>Percentage correctness</strong>
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