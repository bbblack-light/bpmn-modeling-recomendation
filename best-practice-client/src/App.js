import './App.css';
import PersonInputs from './domain/PersonInputs';
import { inputCodes } from './domain/consts';

const {
  backend
} = window.getAppPreload();

console.log(backend)
console.log(await backend.send(
  'expert-system-resolve',
  [
    new PersonInputs(inputCodes.PREPARE_TO_CAMUNDA_8, 1), //e1
    new PersonInputs(inputCodes.HANDLE_ERROR, 0), //e2
    new PersonInputs(inputCodes.HARD_TO_FEATURES, 0), //e4
    new PersonInputs(inputCodes.REPEATABLE_MOMENTS, 1), //e5
    new PersonInputs(inputCodes.CUSTOM_TASKLIST, 1), //e6
    new PersonInputs(inputCodes.NOT_QUICK_RELEASE, 1), //e7
    new PersonInputs(inputCodes.QUICK_RELEASE, 0), //e10
    new PersonInputs(inputCodes.NO_CUSTOM_TASKLIST, 0), //e11
    new PersonInputs(inputCodes.NOT_PREPARE_TO_CAMUNDA_8, 0), //e12
  ])
)

console.log(await backend.send(
  'expert-system-resolve',
  [
    new PersonInputs(inputCodes.PREPARE_TO_CAMUNDA_8, 1), //e1
    new PersonInputs(inputCodes.HANDLE_ERROR, 0), //e2
    new PersonInputs(inputCodes.TOO_HARD_TO_FEATURES, 1), //e3
    new PersonInputs(inputCodes.HARD_TO_FEATURES, 0), //e4
    new PersonInputs(inputCodes.REPEATABLE_MOMENTS, 1), //e5
    new PersonInputs(inputCodes.CUSTOM_TASKLIST, 1), //e6
    new PersonInputs(inputCodes.NOT_QUICK_RELEASE, 0), //e7
    new PersonInputs(inputCodes.AVAILABLE_NOT_QUICK_RELEASE, 0), //e8
    new PersonInputs(inputCodes.AVAILABLE_QUICK_RELEASE, 0), //e9
    new PersonInputs(inputCodes.QUICK_RELEASE, 1), //e10
    new PersonInputs(inputCodes.NO_CUSTOM_TASKLIST, 0), //e11
    new PersonInputs(inputCodes.NOT_PREPARE_TO_CAMUNDA_8, 0), //e12
  ])
)

function App() {
  return (
    <div className="App">
      hello worldwefwefihih
    </div>
  );
}

export default App;
