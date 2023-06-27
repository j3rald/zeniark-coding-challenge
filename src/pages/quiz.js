import React ,{ memo }from 'react'
import { useQuestionContext } from '../contexts/questionContext';
import Question from './questions'
import { Navigate } from 'react-router-dom';


function QuizPage() {
    const { questions, questionIndex } = useQuestionContext();

    if(questionIndex === questions.length) {
        return <Navigate to="/result-page" replace />
    } 

    if(questions.length > 0) {
        return (
            <div className="quiz">
                <div className="quiz-header">
                    <div className="quiz-title">
                        <img src='img/logo.png' alt='zeniark-logo' width='50' height='50'/>
                        <span> Category : ( { questions[questionIndex].category } ) </span>
                    </div>
                    <div>
                        <p> {questionIndex + 1} / {questions.length} </p>
                    </div>
                    
                </div>
                <hr></hr> 
                <Question currentQuestion={questions[questionIndex]}/>
            </div>
        )
    } else {
        return (<div>
            <p> no questions </p>
        </div>)
    }

    
}

export default memo(QuizPage);
