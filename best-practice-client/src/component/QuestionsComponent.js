
import { useState } from 'react';
import { questions } from './../remote';
import QuestionComponent from './QuestionComponent'

export default function QuestionsComponent({questionsEnded}) {
    const [ answers, setAnswers ] = useState([])
    const [ questionIndex, setQuestionIndex ] = useState(0)

    const nextQuestion = (answer) => {
        answers.push(answer)
        setAnswers(answers)
        if (questionIndex<questions.length-1)
        {
            setQuestionIndex(questionIndex+1)
        }
        else {
            questionsEnded(answers)
        }
    }

    return (
        <>
            <QuestionComponent 
                nextQuestion = {nextQuestion}
                question = {questions[questionIndex]}
            />
            <button onClick={questionsEnded}> end questionaire</button>
        </>
    )
  }