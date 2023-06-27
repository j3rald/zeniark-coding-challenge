import React, { memo, useEffect } from 'react'
import { useQuestionContext } from '../contexts/questionContext';
import { Link } from 'react-router-dom';

function Result() {
    const { loadResult, results, setQuestionsIndex } = useQuestionContext();

    useEffect(() => {
        loadResult();
    }, [loadResult]);

    const totalScore = results.reduce((p,c) => {
        if(c.correct_answer === c.answer){
            p = p + 1
        }
        return p;
    },0);

    return (
        <div className="result">
            <div className="result-header">
                    <div className="result-logo">
                        <img src='img/logo.png' alt='zeniark-logo' width='50' height='50'/>
                    </div>
                    <div className="result-title"> 
                        <p> Final Results </p>
                    </div>
                    <div></div>
            </div>
                <hr></hr> 
                <div className="result-score"> 
                    <h2> {totalScore} / {results.length} </h2>
                    <h4> Your Score </h4>
                </div>
                <hr></hr>

                <div className='result-question'>
                    {results && (results.map((items, index) => {
                        return (
                        <div key={items.id}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px'}}>
                                <span style={{color: '#8c8c8c'}}> {index+1}. </span>
                                <p style={{ margin: '10px',width: '100%', float: 'left'}}> {items.question} </p>

                                <div>  
                                    {(items.correct_answer === items.answer) ? 
                                        <img src='img/check.png' width={25} height={25}/>
                                     : <img src='img/close.png' width={20} height={20}/> }
                                </div>
                            </div>

                            <div style={{display: 'flex'}}>
                                <p className='result-correctAns'> The Correct Answer is 
                                    {(items.correct_answer === 'True') ? 
                                        <span style={{color: 'green', fontWeight: '600'}}> {items.correct_answer} </span> 
                                     : <span style={{color: 'red', fontWeight: '600'}}> {items.correct_answer} </span> }
                                </p>

                                <p className='result-correctAns'> You answered
                                    {(items.answer === 'True') ? 
                                        <span style={{color: 'green'}}> {items.answer} </span> 
                                     : <span style={{color: 'red'}}> {items.answer} </span> }
                                </p>
                            </div>
                        </div>
                        )
                    }))}
                </div>

            <div style={{display: 'flex', justifyContent:'center'}}>
                <Link
                    to="/"
                    className="result-playAgain"
                    onClick={() => setQuestionsIndex(0)}> 
                    PLAY AGAIN 
                </Link>
            </div>

        </div>
    )
}

export default memo(Result);
