import QuestionAndAnswer from '../domain/QuestionAndAnswer'
import AnswerComponent from './AnswerComponent'

export default function QuestionComponent({ question, nextQuestion }) {
      return (
        <>
        <div class="card-content">
            <div>{question.text}</div>
            <div>
              {question.answers.map((answer, index) => {
                return (
                  <AnswerComponent 
                    key={ index }
                    data-idx={ index }
                    onAnswerClicked={(answerClickedData) => {
                      nextQuestion(new QuestionAndAnswer(
                        question.text, answerClickedData.text, answerClickedData.inputNodes
                      ))
                    }}
                    answer = { answer }
                  />
                )
              })}
            </div>
          </div>
        </>
    )
  }