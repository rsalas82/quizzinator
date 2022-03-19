import { useState, useContext } from 'react'
import { useLocation } from "wouter"
import QuizContext from '../../context/UserContext'
import { getQuiz } from '../../services/getQuiz'
import './Home.css'

const Home = () => {
    const {user, setUser, quiz, setQuiz, totalQuestions, setTotalQuestions} = useContext(QuizContext)
    const [location, setLocation] = useLocation()

    const handleChange = (evt) => {
        setUser(evt.target.value)
    }

    const handleChangeSelect = (evt) => {
        console.log(evt.target.value)
        setTotalQuestions(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        setLocation('/quiz')
    }

    return (
        <div className='Home'>
            <p>
                Welcome "human being", this is a test to save the world as you have known by now.
                You must to response <strong>TEN questions</strong> about anything.
                You only will have <strong>ONE option</strong> to response correctly every question.
                If you fail <strong>TWO questions</strong>, the whole world would be destroyed.
            </p>
            <div className='Home_form'>
                <form onSubmit={handleSubmit}>
                    <input placeholder="What's your name, meatbag?" type="text" onChange={handleChange} />
                    <select onChange={handleChangeSelect}>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                    <input type="submit" value="Start quiz!" />
                </form>
            </div>
        </div>
    )
}

export default Home