const InputNode = require("../../domain/expert-system/InputNode")
const Answer = require("../../domain/questionaire/Answer")
const Question = require("../../domain/questionaire/Question")
const { inputCodes } = require('./../expert-system/consts')

module.exports = class Questionaire {
    static #content = [
        new Question(
            "Собираетесь обновляться на камунду 8?",
            [
                new Answer(
                    "Да", [
                        new InputNode(inputCodes.PREPARE_TO_CAMUNDA_8, 1),
                        new InputNode(inputCodes.NOT_PREPARE_TO_CAMUNDA_8, 0)
                    ]
                ),
                new Answer(
                    "Нет", [
                        new InputNode(inputCodes.PREPARE_TO_CAMUNDA_8, 0),
                        new InputNode(inputCodes.NOT_PREPARE_TO_CAMUNDA_8, 1)
                    ]
                )
            ]
        ),
        new Question(
            "Есть ли в процессе моменты, которые можно считать обработкой ошибок? Они сделаны с помощью gateway?",
            [
                new Answer("Да", [ new InputNode(inputCodes.HANDLE_ERROR, 1) ]),
                new Answer("Нет", [ new InputNode(inputCodes.HANDLE_ERROR, 0) ])
            ]
        ),
        new Question(
            "В процесс сложно внести новые изменения?",
            [
                new Answer("Да, очень!", [ 
                    new InputNode(inputCodes.HARD_TO_FEATURES, 1),
                ]),
                new Answer("Да", [ 
                    new InputNode(inputCodes.HARD_TO_FEATURES, 0.8),
                ]),
                new Answer("Нет", [ 
                    new InputNode(inputCodes.HARD_TO_FEATURES, 0),
                ])
            ]
        ),
        new Question(
            "Есть ли в процессе повторяющиеся моменты?",
            [
                new Answer("Да", [ new InputNode(inputCodes.REPEATABLE_MOMENTS, 1) ]),
                new Answer("Нет", [ new InputNode(inputCodes.REPEATABLE_MOMENTS, 0) ])
            ]
        ),
        new Question(
            "Собираетесь ли вы пользоваться своим решением для тасклиста на основе .forms?",
            [
                new Answer("Да", [ 
                    new InputNode(inputCodes.CUSTOM_TASKLIST, 1),
                    new InputNode(inputCodes.NO_CUSTOM_TASKLIST, 0) 
                ]),
                new Answer("Нет", [
                    new InputNode(inputCodes.CUSTOM_TASKLIST, 0),
                    new InputNode(inputCodes.NO_CUSTOM_TASKLIST, 1)
                ])
            ]
        ),
        new Question(
            "Процесс требуется срочно запустить на пользователях?",
            [
                new Answer("Да", [ 
                    new InputNode(inputCodes.QUICK_RELEASE, 1),
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
                    new InputNode(inputCodes.NOT_QUICK_RELEASE, 1),
                ])
            ]
        )
    ]
    static getContent() {
        return this.#content
    }
}