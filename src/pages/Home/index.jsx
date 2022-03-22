import { useState, useContext } from 'react'
import { useLocation } from "wouter"
import Container from '../../components/Container'
import QuizContext from '../../context/UserContext'
import { NUMBER_OF_QUESTIONS } from '../../utilities/constants.utility'
import './Home.css'

const Home = () => {
    const {user, setUser, quiz, setTotalQuestions} = useContext(QuizContext)
    const [location, setLocation] = useLocation()

    const handleChange = (evt) => {
        setUser(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (quiz) {
            setLocation(`/quiz/${quiz.currentQuestion}`)
        }
        setLocation("/quiz/1")
    }

    return (
        <Container className='Home'>
            <p>
                Welcome "human being", this is a test to save the world as you have known by now.
                You must to response <strong>{NUMBER_OF_QUESTIONS} questions</strong> about anything.
                You only will have <strong>ONE option</strong> to response correctly every question.
            </p>
            <div className='Home_form'>
                <form onSubmit={handleSubmit}>
                    <input placeholder="What's your name?" type="text" onChange={handleChange} />
                    <div className='buttons'>
                        <button type="submit">
                            <svg width="24" height="24" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2V6" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 18V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M22 12H18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 12H2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.92896 4.92896L7.75738 7.75738" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16.2427 16.2427L19.0711 19.0711" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M19.071 4.92896L16.2426 7.75738" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M7.75732 16.2427L4.9289 19.0711" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Start quiz!
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    )
}

export default Home