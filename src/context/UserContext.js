import React from 'react'

const Context = React.createContext({
    user: '',
    quiz: null,
    totalQuestions: 5
})

export default Context