export default function AnswerComponent({ answers }) {
    return (
    <div>
        {question.answers.map(answer => 
            <radio>{answer.text}</radio>
        )}
    </div>
    )
}