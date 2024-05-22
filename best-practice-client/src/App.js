import './App.css';
import { allowStates } from './domain/consts';
import { backend } from './remote';
import QuestionsComponent from './component/QuestionsComponent'
import CheckResultsComponent from './component/CheckResultsComponent'
import { useState } from 'react'

function App() {
  const [windowState, setWindowState] = useState(allowStates.QUESTIONAIRE)
  const [results, setResults] = useState({})

  const endQuestionaire = async (answers) =>  {
      console.log(answers)
      let results = await backend.send(
        'expert-system-resolve', 
        answers.map(answer => answer.inputNodes).flat()
      )
      console.log(results)
      setResults(results)
      setWindowState(allowStates.CHECK_RESULTS)


      let results2 = await backend.send(
        'questionaire-resolve', 
        answers.map(answer => answer.inputNodes).flat()
      )
      console.log(results2)
  }

  const startAgain = () =>  {
    console.log('called', windowState)
    setWindowState(allowStates.QUESTIONAIRE)
}

  switch (windowState) {
    case allowStates.QUESTIONAIRE:
      return <QuestionsComponent
        questionsEnded = {endQuestionaire}
      />
    case allowStates.CHECK_RESULTS:
      return <CheckResultsComponent
        results = {results}
        startAgain = {startAgain}
      />
    default:
      return <div>i dont know what next</div>
  }
}

export default App;
