import { useState, useEffect } from 'react'
import { Route } from 'wouter'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Summary from './pages/Summary'
import Header from './components/Header'
import Footer from './components/Footer'
import QuizContext from './context/UserContext'
import './App.css'
import Error404 from './pages/Error404'

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
