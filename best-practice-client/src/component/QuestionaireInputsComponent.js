export default function QuestionaireInputscomponent({ questionaireInputs }) {
    return (
        <>
            <div class="wrapper">
                <h3>Введенные данные</h3>
                {
                    questionaireInputs.map((questionaireInput, idx) => {
                        return (
                            <div key={idx} class="questionInput">
                                <div class="recomendationText">{questionaireInput.questionText}</div>
                                <button class="btn">
                                    {questionaireInput.answerText}
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}