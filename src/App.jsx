import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Quiz from './components/Quiz'
import Welcome from './components/Welcome'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [questions, setQuestions] = useState([])
  const [user, setUser] = useState()

  const handleWelcomeSubmit = (username) => {
    console.log(username)
  }
  
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    const questions = sessionStorage.getItem("quiz");
    setUser(user);
    setQuestions(questions);
  }, [])


  return (
    <div className="wrapper">
      <header>
        <Header />
      </header>
      <nav>
        {questions && (
          <ul>
            {questions.map((question, index) => {
              return index
            })}
          </ul>
        )}
        
      </nav>
      <main>
        {!user ? <Welcome handleWelcomeSubmit={handleWelcomeSubmit} /> : <Quiz />}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
