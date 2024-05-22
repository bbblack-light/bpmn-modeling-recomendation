const RecomendationsSet = require("../../domain/expert-system/RecomendationsSet")
const NormilizeRecomendation = require("./../../domain/expert-system/NormilizeRecomendation")
const Recomendation = require("./../../domain/expert-system/Recomendation")
const { outCodes, normilizeRecomendationStatus: status} = require('./consts')

module.exports = class RecomendationMapper {
    static #expertSystemNormilizeRecomendations = [
        new RecomendationsSet(
            outCodes.PREPARE_TO_CAMUNDA_8,
            [
                new NormilizeRecomendation(
                    status.HIGHT,
                    0.5, 1, 
                    "Необходимо подготовить процесс к обновлению на Camunda 8. Предлагаем ознакомиться с <a href=\"https://docs.camunda.io/docs/guides/migrating-from-camunda-7/\">документацией по миграции на Camunda 8</a>. А так же ознакомиться со списком уязвимых для обновления мест найденных на данный момент: "
                ),
                new NormilizeRecomendation(
                    status.LOW,
                    0, 0.5, 
                    "Были обнаружены уязвимые места, которые могут помешать обновлению на Camunda 8. Если решитесь обновляться, обратите внимание на эти места: "
                )
            ]
        ),
        new RecomendationsSet(
            outCodes.CHECK_INSTRUMENTS,
            [
                new NormilizeRecomendation(
                    status.HIGHT,0.5, 1, 
                    "Предлагаем ознакомиться со списком доступных элементов процесса.<br/>Ознакомиться можете в<a href=\"https://docs.camunda.io/docs/components/modeler/bpmn/\">документации</a>. <br/><br/>Возможно вы найдете недостающих инструмент который улучшит читаемость процесса, его оптимизацию и спасет вас от лишних неоптимальных решений"
                )
            ]
        ),
        new RecomendationsSet(
            outCodes.DECOMPOSE_PROCESS,
            [
                new NormilizeRecomendation(status.HIGHT,
                    0.5, 1, 
                    "Предлагаем вам декомпозировать процесс.<br/>Это улучшит переиспользуемость частей процесса и облегчит внесение в изменений. Например, можно убрать повторяющиеся моменты в один процесс и использовать его как подпроцесс в дальнейшем."
                )
            ]
        ),
        new RecomendationsSet(
            outCodes.IMPROVE_PROCESS_READABILITY,
            [
                new NormilizeRecomendation(status.HIGHT,
                    0.5, 1, 
                    "Предлагаем улучшить читаемость процесса.<br/>Про то, как проектировать читаемые процессы, можно ознакомиться в данной <a href=\"https://docs.camunda.io/docs/components/best-practices/modeling/creating-readable-process-models/\">статье</a>"
                )
            ]
        ),
        ,
        new RecomendationsSet(
            outCodes.LEAVE_ALONE,
            [
                new NormilizeRecomendation(status.HIGHT,
                    0.7, 1, 
                    "Очень предлагаем оставить процесс в текущем состоянии. В угоду срокам поставки бизнеса процесса можно жертвовать качеством, но помните, что вероятно настигнет момент, когда этим качеством не получится пожертвовать"
                ),
                new NormilizeRecomendation(status.MEDIUM,
                    0.5, 0.7, 
                    "Предлагаем оставить процесс в текущем состоянии. Но если есть возможность поправить недостатки процесса, то предлагаем некоторые из них исправить на данном этапе"
                )
            ]
        )
    ]

    static mapToRecomendation(outputs) {
        return outputs.map(output => {
            let recSet = this.#expertSystemNormilizeRecomendations.filter(recSet => recSet.output == output.name)[0]
            if (recSet !== undefined) {
                let rec = recSet.recomendations.filter(rec => rec.min < output.outputValue && rec.max >= output.outputValue)[0]
                if (rec !== undefined) {
                    return new Recomendation(output.name, output.outputValue, rec.status, rec.text)
                }
            }

            return null
        }).filter(rec => rec !== null)
    }
}