export default function QuestionComponent({ question, nextQuestion }) {
      return (
        <>
          <div>{question.text}</div>
          <div>
            {question.answers.map((answer, index) => {
              return (
                <button 
                    key={ index }
                    data-idx={ index }
                    onClick={() => {
                        nextQuestion(answer)
                    }}>
                    {answer.text}
                </button>
              )
            })}
          </div>
        </>
    )
  }