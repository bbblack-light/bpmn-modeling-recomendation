import alertIcon from './../alert.png'
import warningIcon from './../warning.png'
import messageIcon from './../message.png'
import checkmarkIcon from './../checkmark.png'

export default function BaseInfoComponent({ startQuestionaire }) {
      return (
        <>
        <div class="wrapper">
            <h3>Описание</h3>
            <div class="recomendationCard">
                <div class="card-content">
                    <div class="card-center-content-text">
                        Для того, чтобы получить рекомендации, пройдите опрос, в котором уточняются нюансы бизнес процесса, открытого в основном окне <b>Camunda Modeler</b>. На основе открытого бизнес процесса так же будут представлены автоматические рекомендации
                        <br/><br/>
                        <b>По результатам опроса, вы получите рекомендации, которые будут представлены с разным уровнем приоритетности или отметку, что вы уже соблюли все рекомендации:</b>
                        
                    </div>
                    <div class="margin-10px-auto display-flex  fit-content">
                        <img alt={""} src={alertIcon} class="recomendationIcon"></img>
                        <div><b>Рекомендация высоко приоритета.</b> Из всех представленных рекомендаций на нее важно обратить самое большое внимание и выполнять ее.</div>
                    </div>
                    <div class="margin-10px-auto display-flex  fit-content">
                        <img alt={""} src={warningIcon} class="recomendationIcon"></img>
                        <div><b>Рекомендация среднего приоритета.</b> На такую рекомендацию важно обратить внимание и по возможности выполнить.</div>
                    </div>
                    <div class="margin-10px-auto display-flex  fit-content">
                        <img alt={""} src={messageIcon} class="recomendationIcon"></img>
                        <div><b>Рекомендация низкого приоритета.</b> Такая рекомендация несет уведомительный характер. Ее можно игнорировать</div>
                    </div>
                    <div class="margin-10px-auto display-flex  fit-content">
                        <img alt={""} src={checkmarkIcon} class="recomendationIcon"></img>
                        <div><b>Все рекомендации соблюдены.</b> Опрос и автоматическая проверка процесса показали, что вы успешно придерживаетесь лучших практик в платформе Camunda</div>
                    </div>
                    <div>
                        <button class="btn downButton"
                            onClick={startQuestionaire}>
                            Начать опрос
                        </button>
                    </div>
                </div>
            </div>
          </div>
        </>
    )
  }