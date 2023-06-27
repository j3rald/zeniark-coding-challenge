import React, { useContext, useState, useMemo, createContext, useCallback, useEffect} from 'react';  
export const QuestionContext = createContext();
export function QuestionProvider({ children }) {
    
    const [questions, setQuestions] = useState([]);
    const [results, setResults] = useState([]);
    const [questionIndex, setQuestionsIndex] = useState(0);

    const loadQuestions = useCallback(async () => {
        try {
            const res = await fetch('http://localhost:3000/questions', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            });
    
            const json = await res.json();

            if (!res.ok) {
                throw new Error(json);
            }
            const shuffledQuestion = json.sort(() => Math.random() - 0.5);
            setQuestions(shuffledQuestion);
        } catch (error) {
            console.log(error);
        }
    },[setQuestions]);

    useEffect(() => {
        loadQuestions();
    }, [loadQuestions]);

    const updateIndex = useCallback(async (currentQuestion, answer) => {
        try {

            const res = await fetch(`http://localhost:3000/results/${currentQuestion.id}`, {
                method: 'PUT',
                body: JSON.stringify({ ...currentQuestion, answer }),
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
    
            const json = await res.json();

            if (!res.ok) {
                throw new Error(json);
            }
            setQuestionsIndex(prevState => prevState + 1);
        } catch (error) {
            console.log(error);
        }
    },[setQuestionsIndex]);

    const loadResult = useCallback(async () => {
        try {
            const res = await fetch('http://localhost:3000/results', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
    
            const json = await res.json();

            if (!res.ok) {
                throw new Error(json);
            }
            
            setResults(json);
        } catch (error) {
            console.log(error);
        }
    },[setResults]);
  
    const value = useMemo(
      () => ({
        loadQuestions,
        questions,
        questionIndex,
        updateIndex,
        loadResult,
        results,
        setQuestionsIndex
      }),
      [loadQuestions,questions,questionIndex,updateIndex,loadResult,results,setQuestionsIndex]
    );
  
    return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>;
  }
  
export const useQuestionContext = () => useContext(QuestionContext);
  