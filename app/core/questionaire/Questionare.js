const InputNode = require("../../domain/expert-system/InputNode")
const Answer = require("../../domain/questionaire/Answer")
const Question = require("../../domain/questionaire/Question")
const { inputCodes } = require('../../domain/consts')

module.exports = class Questionaire {
    static #content = [
        new Question(
            "Вы готовитесь к обновлению на Camunda 8?",
            [
                new Answer(
                    "Да", [
                        new InputNode(inputCodes.PREPARE_TO_CAMUNDA_8, 0.9),
                        new InputNode(inputCodes.NOT_PREPARE_TO_CAMUNDA_8, 0)
                    ]
                ),
                new Answer(
                    "Нет", [
                        new InputNode(inputCodes.PREPARE_TO_CAMUNDA_8, 0),
                        new InputNode(inputCodes.NOT_PREPARE_TO_CAMUNDA_8, 0.9)
                    ]
                )
            ]
        ),
        new Question(
            "Процесс имеет места, которые можно считать обработкой бизнес ошибок, и они сделаны с помощью gateway?",
            [
                new Answer("Да", [ new InputNode(inputCodes.HANDLE_ERROR, 0.9) ]),
                new Answer("Нет", [ new InputNode(inputCodes.HANDLE_ERROR, 0) ])
            ]
        ),
        new Question(
            "Внесение изменений в процесс и его тесты занимает больше 1 дня?",
            [
                new Answer("Да, часто", [ 
                    new InputNode(inputCodes.HARD_TO_FEATURES, 0.9),
                ]),
                new Answer("Да, редко", [ 
                    new InputNode(inputCodes.HARD_TO_FEATURES, 0.7),
                ]),
                new Answer("Нет", [ 
                    new InputNode(inputCodes.HARD_TO_FEATURES, 0),
                ])
            ]
        ),
        new Question(
            "Процесс имеет повторяющиеся моменты?",
            [
                new Answer("Да", [ new InputNode(inputCodes.REPEATABLE_MOMENTS, 0.9) ]),
                new Answer("Нет", [ new InputNode(inputCodes.REPEATABLE_MOMENTS, 0) ])
            ]
        ),
        new Question(
            "В вашей компании пользуются внутренним решением для Tasklist на основе Camunda Forms?",
            [
                new Answer("Да", [ 
                    new InputNode(inputCodes.CUSTOM_TASKLIST, 0.9),
                    new InputNode(inputCodes.NO_CUSTOM_TASKLIST, 0) 
                ]),
                new Answer("Нет", [
                    new InputNode(inputCodes.CUSTOM_TASKLIST, 0),
                    new InputNode(inputCodes.NO_CUSTOM_TASKLIST, 0.9)
                ])
            ]
        ),
        new Question(
            "Заказчик требует срочно запустить процесс на пользователях?",
            [
                new Answer("Да", [
                    new InputNode(inputCodes.QUICK_RELEASE, 0.9),
                    new InputNode(inputCodes.NOT_QUICK_RELEASE, 0),
                ]),
                new Answer("Скорее да", [ 
                    new InputNode(inputCodes.QUICK_RELEASE, 0.5),
                    new InputNode(inputCodes.NOT_QUICK_RELEASE, 0),
                ]),
                new Answer("Скорее нет", [ 
                    new InputNode(inputCodes.QUICK_RELEASE, 0),
                    new InputNode(inputCodes.NOT_QUICK_RELEASE, 0.5),
                ]),
                new Answer("Нет", [ 
                    new InputNode(inputCodes.QUICK_RELEASE, 0),
                    new InputNode(inputCodes.NOT_QUICK_RELEASE, 0.9),
                ])
            ]
        )
    ]

    static getContent() {
        return this.#content
    }
}