const RecomendationsSet = require("../../domain/expert-system/RecomendationsSet")
const NormilizeRecomendation = require("./../../domain/expert-system/NormilizeRecomendation")
const Recomendation = require("./../../domain/expert-system/Recomendation")
const { outCodes, normilizeRecomendationStatus: status} = require('../../domain/consts')

module.exports = class RecomendationMapper {
    static #expertSystemNormilizeRecomendations = [
        new RecomendationsSet(
            outCodes.PREPARE_TO_CAMUNDA_8,
            [
                new NormilizeRecomendation(
                    status.HIGHT,
                    0.9, 1, 
                    "Необходимо подготовить процесс к обновлению на Camunda 8. Предлагаем ознакомиться с <a href=\"https://docs.camunda.io/docs/guides/migrating-from-camunda-7/\">документацией по миграции на Camunda 8</a>.",
                    ((value) => {
                        console.log('value', value)
                        if(value.linter.length > 0) {
                            return " А так же ознакомиться со списком уязвимых для обновления мест найденных на данный момент: "
                        }
                        return ""
                    })
                ),
                new NormilizeRecomendation(
                    status.MEDIUM,
                    0.5, 0.9, 
                    "Если решитесь обновляться на Camunda 8, предлагаем ознакомиться c процессом обновления по <a href=\"https://docs.camunda.io/docs/guides/migrating-from-camunda-7/\">ссылке</a>.",
                    ((value) => {
                        console.log('value', value)
                        if(value.linter.length > 0) {
                            return " Были обнаружены уязвимые места, которые могут помешать обновлению на Camunda 8. Если решитесь обновляться, обратите внимание на эти места: "
                        }
                        return ""
                    })
                ),
                new NormilizeRecomendation(
                    status.LOW,
                    -5, 0.5, 
                    "",
                    ((value) => {
                        console.log('value', value)
                        if(value.linter.length > 0) {
                            return "Были обнаружены уязвимые места, которые могут помешать обновлению на Camunda 8. Если решитесь обновляться, обратите внимание на эти места: "
                        }
                        return ""
                    })
                )
            ]
        ),
        new RecomendationsSet(
            outCodes.CHECK_INSTRUMENTS,
            [
                new NormilizeRecomendation(
                    status.HIGHT,0.9, 1, 
                    "Предлагаем ознакомиться со списком доступных элементов процесса.<br/>Ознакомиться можете в <a href=\"https://docs.camunda.io/docs/components/modeler/bpmn/\">документации</a>. <br/>Возможно вы найдете недостающих инструмент который улучшит читаемость процесса, его оптимизацию и спасет вас от лишних неоптимальных решений"
                ),
                new NormilizeRecomendation(
                    status.MEDIUM,0.69, 0.9, 
                    "Предлагаем ознакомиться со списком доступных элементов процесса.<br/>Ознакомиться можете в <a href=\"https://docs.camunda.io/docs/components/modeler/bpmn/\">документации</a>. <br/>Возможно вы найдете недостающих инструмент который улучшит читаемость процесса, его оптимизацию и спасет вас от лишних неоптимальных решений"
                )
            ]
        ),
        new RecomendationsSet(
            outCodes.DECOMPOSE_PROCESS,
            [
                new NormilizeRecomendation(status.HIGHT,
                    0.9, 1, 
                    "Предлагаем вам декомпозировать процесс.<br/>Это улучшит переиспользуемость частей процесса и облегчит внесение в изменений. Например, можно убрать повторяющиеся моменты в один процесс и использовать его как подпроцесс в дальнейшем."
                ),
                new NormilizeRecomendation(status.MEDIUM,
                    0.69, 0.9, 
                    "Предлагаем вам декомпозировать процесс.<br/>Это улучшит переиспользуемость частей процесса и облегчит внесение в изменений. Например, можно убрать повторяющиеся моменты в один процесс и использовать его как подпроцесс в дальнейшем."
                ),
                new NormilizeRecomendation(status.LOW,
                    0.2, 0.69, 
                    "Предлагаем вам декомпозировать процесс.<br/>Это улучшит переиспользуемость частей процесса и облегчит внесение в изменений. Например, можно убрать повторяющиеся моменты в один процесс и использовать его как подпроцесс в дальнейшем."
                )
            ]
        ),
        new RecomendationsSet(
            outCodes.IMPROVE_PROCESS_READABILITY,
            [
                new NormilizeRecomendation(status.HIGHT,
                    0.9, 1, 
                    "Предлагаем улучшить читаемость процесса.<br/>Про то, как проектировать читаемые процессы, можно ознакомиться в данной <a href=\"https://docs.camunda.io/docs/components/best-practices/modeling/creating-readable-process-models/\">статье</a>"
                )
            ]
        ),
        ,
        new RecomendationsSet(
            outCodes.LEAVE_ALONE,
            [
                new NormilizeRecomendation(status.HIGHT,
                    0.8, 1, 
                    "Очень предлагаем оставить процесс в текущем состоянии. В угоду срокам поставки бизнеса процесса можно жертвовать качеством, но помните, что вероятно настигнет момент, когда этим качеством не получится пожертвовать"
                ),
                new NormilizeRecomendation(status.MEDIUM,
                    0.5, 0.8, 
                    "Предлагаем оставить процесс в текущем состоянии. Но если есть возможность поправить недостатки процесса, то предлагаем некоторые из них исправить на данном этапе"
                )
            ]
        )
    ]

    static mapToRecomendation(outputs, additionalInput) {
        return outputs.map(output => {
            let recSet = this.#expertSystemNormilizeRecomendations.filter(recSet => recSet.output == output.name)[0]
            if (recSet !== undefined) {
                let rec = recSet.recomendations.filter(rec => rec.min < output.outputValue && rec.max >= output.outputValue)[0]
                if (rec !== undefined) {
                    let text = rec.text
                    if (rec.additionalAction !== null && rec.additionalAction !== undefined) {
                        console.log('additioanlAction', rec.additionalAction(additionalInput))
                        text = text + rec.additionalAction(additionalInput)
                    }
                    return new Recomendation(output.name, output.outputValue, rec.status, text)
                }
            }

            return null
        }).filter(rec => rec !== null && rec.text!="")
    }
}