import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home'
import QuizPage from './pages/quiz'
import ResultPage from './pages/result'

import './styles/main.scss'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<QuizPage  />} path="/quiz-page" />
          <Route element={<ResultPage  />} path="/result-page" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
