export default function AnswerComponent({ answer, onAnswerClicked }) {
    return (
        <button class="btn"
            onClick={() => onAnswerClicked(answer)}>
            {answer.text}
        </button>
    )
}