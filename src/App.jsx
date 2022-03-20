import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Quiz from './components/Quiz'
import { Route } from 'wouter'
import Home from './pages/Home'
import QuizContext from './context/UserContext'
import './App.css'
import Summary from './pages/Summary'


function App() {

  const [user, setUser] = useState()
  const [quiz, setQuiz] = useState(null)
  const [totalQuestions, setTotalQuestions] = useState(5)

  return (
    <QuizContext.Provider value={{user, setUser, quiz, setQuiz, totalQuestions, setTotalQuestions}}>
      <div className='wrapper'>
        <header>
          <Header/>
        </header>
        <main>
          <Route path='/' component={Home}></Route>
          <Route path='/quiz/:question?' component={Quiz}></Route>
          <Route path='/summary' component={Summary}></Route>
        </main>
        <footer><Footer/></footer>
      </div>
    </QuizContext.Provider>
  )
}

export default App
