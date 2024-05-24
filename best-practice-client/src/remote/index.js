import Answer from "../domain/Answer";
import PersonInputs from "../domain/PersonInputs";
import Question from "../domain/Question";


const {
    backend: appBackend
  } = window.getAppPreload();
  
  export const backend = appBackend;

  export const questions = await getQuestion()

  async function getQuestion() {
    let questions = await backend.send('get-questionaire')
    return questions.map(question => {
        return new Question(
            question.text, 
            question.answers.map(answer => new Answer(
                answer.text, 
                answer.inputNodes.map(inputNode => new PersonInputs(inputNode.name, inputNode.value))
            ))
        )
    })
  }


export async function saveSchemeState() {
    let state = JSON.parse(localStorage.getItem('linter-state'))
    if (state === null || state === undefined) state = []
    console.log(state)
    await backend.send('save-linter-state', state)
}