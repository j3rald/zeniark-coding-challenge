import React, { memo } from 'react'
import { useQuestionContext } from '../contexts/questionContext'

function Question({currentQuestion}) {
    const { updateIndex } = useQuestionContext();

    return (
        <div className="questions">
            <p> {currentQuestion.question} </p>
            
            <div className='questions-button'>
                <button type="button" onClick={() => updateIndex(currentQuestion, 'True')}>
                    ✔ True
                </button>

                <button type="button" onClick={() => updateIndex(currentQuestion, 'False')}>
                    ✖ False
                </button>
            </div>
            
        </div>
    )
}

export default memo(Question);
