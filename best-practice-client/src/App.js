import './App.css';
import { allowStates } from './domain/consts';
import { backend, saveSchemeState } from './remote';
import QuestionsComponent from './component/QuestionsComponent'
import CheckResultsComponent from './component/CheckResultsComponent'
import { useState } from 'react'
import QuestionaireInputscomponent from './component/QuestionaireInputsComponent';
import BaseInfoComponent from './component/BaseInfoComponent';

function App() {
  const [windowState, setWindowState] = useState(allowStates.BASE_INFO)
  const [results, setResults] = useState({})
  const [questionaireInputs, setQuestionaireInputs] = useState([])

  const endQuestionaire = async (questionaireInputs) =>  {
      await saveSchemeState()
      setQuestionaireInputs(questionaireInputs)
      let results = await backend.send(
        'questionaire-resolve',
        questionaireInputs.map(questionaireInput => questionaireInput.inputNodes).flat()
      )
      console.log(results)
      setResults(results)
      setWindowState(allowStates.CHECK_RESULTS)
  }

  const startQuestionaire = () =>  {
    setWindowState(allowStates.QUESTIONAIRE)
  }

  const toStart =() => {
    setWindowState(allowStates.BASE_INFO)
  }

  switch (windowState) {
    case allowStates.BASE_INFO:
      return <BaseInfoComponent
        startQuestionaire={startQuestionaire}
      />
    case allowStates.QUESTIONAIRE:
      return <QuestionsComponent
        questionsEnded = {endQuestionaire}
      />
    case allowStates.CHECK_RESULTS:
      return (
        <>
          <QuestionaireInputscomponent
            questionaireInputs = {questionaireInputs}
          />
          <CheckResultsComponent
            results = {results}
            startAgain = {toStart}
          />
        </>
      )
    default:
      return <div>i dont know what next</div>
  }
}

export default App;
