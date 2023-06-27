import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuestionContext } from '../contexts/questionContext';

export default function HomePage() {
  
  const { loadQuestions } = useQuestionContext();

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);  

  return (
    <div className="page page-home">
      <div className='page-logo'>
        <img src='img/zeniark-logo.png' alt='zeniark-logo' width='200' height='70'/>
      </div>
      <div className="page-title">
        <h1>Welcome to the Trivia Challenge!</h1>
      </div>
      <div className="page-body">
        <p>You will be presented with 10 True or False questions.</p>
        
        <div className="page-desc">
          <p>Can you score 10/10?</p>
        </div>
      </div>
      <div className="page-control">
        <button>
          <Link to="quiz-page" style={{color: '#006699', textDecoration: 'none'}} 
          >LET’S START!</Link>
          <hr style={{ backgroundColor: '#006699', height: '1px', marginTop: '2.5px'}}></hr>
        </button>
      </div>
    </div>
  )
}
