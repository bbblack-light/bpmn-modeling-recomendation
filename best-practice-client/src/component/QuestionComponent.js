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
                    onAnswerClicked={(data) => {
                      nextQuestion(data)
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