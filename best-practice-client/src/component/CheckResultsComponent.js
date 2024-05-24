import { normilizeRecomendationStatus, outCodes } from '../domain/consts'
import alertIcon from './../alert.png'
import warningIcon from './../warning.png'
import messageIcon from './../message.png'
import checkmark from './../checkmark.png'

export default function CheckResultsComponent({ startAgain, results }) {
    function resolveIcon(result) {
        if (result.status === normilizeRecomendationStatus.HIGHT) return alertIcon
        else if (result.status === normilizeRecomendationStatus.MEDIUM) return warningIcon
        else if (result.status === normilizeRecomendationStatus.LOW) return messageIcon
        else return null
    }
    return (
        <>
            
            <div class="wrapper">
                <h3>Результат</h3>
                {
                    results.recomendations.length === 0 ?
                    <div class="recomendationCard">
                        <div class="recomendationCardMainInfo">
                            <img alt={""} src={checkmark} class="recomendationIcon" />
                            <div class="recomendationText">
                                Опрос показал, что у вас не найдено никаких критичных замечаний, по которым можно выдать рекомендации
                            </div>
                        </div>
                    </div>
                    :
                    results.recomendations.map((result, idx) => {
                        return (
                            <div key={idx} class="recomendationCard">
                                <div class="recomendationCardMainInfo">
                                    <img alt={""} src={resolveIcon(result)} class="recomendationIcon" />
                                    <div class="recomendationText" dangerouslySetInnerHTML={{ __html: result.text }} />
                                </div>
                                
                                {
                                    result.outputCode === outCodes.PREPARE_TO_CAMUNDA_8 && results.linterValue.length !== 0 ? 
                                    <ul class="lintedListData">
                                        {
                                            results.linterValue.map((linterValue, lintIdx) => {
                                                return <li key={lintIdx} class="lintedData" dangerouslySetInnerHTML={{ __html: linterValue.message }}/>
                                            })
                                        }
                                    </ul>
                                    :
                                    <></>
                                }
                            </div>
                        )
                    })
                }

                <button
                    class="btn downButton"
                    onClick={startAgain}
                >
                    Пройти тест повторно
                </button>
            </div>
        </>
    )
}