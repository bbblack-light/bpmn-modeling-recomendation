const OutputNode = require('../../domain/expert-system/OutputNode')
const InputNode = require('../../domain/expert-system/InputNode')
const ExpertSystemResolvedNodeOutput = require('../../domain/expert-system/ExpertSystemResolvedNodeOutput')
const { outCodes, inputCodes } = require('./consts')

module.exports = class ExpertSystem {

    static content = [
        new OutputNode(
            outCodes.PREPARE_TO_CAMUNDA_8,
            [
                new InputNode(inputCodes.PREPARE_TO_CAMUNDA_8, 1),
                new InputNode(inputCodes.CUSTOM_TASKLIST, 1),
                new InputNode(inputCodes.NOT_QUICK_RELEASE, 1),
            ]
        ),

        new OutputNode(
            outCodes.CHECK_INSTRUMENTS,
            [
                new InputNode(inputCodes.HANDLE_ERROR, 1),
                new InputNode(inputCodes.NOT_QUICK_RELEASE, 1),
            ]
        ),

        new OutputNode(
            outCodes.IMPROVE_PROCESS_READABILITY,
            [
                new InputNode(inputCodes.HANDLE_ERROR, 0.8),
                new InputNode(inputCodes.TOO_HARD_TO_FEATURES, 1),
                new InputNode(inputCodes.HARD_TO_FEATURES, 0.5),
                new InputNode(inputCodes.NOT_QUICK_RELEASE, 1),
            ]
        ),

        new OutputNode(
            outCodes.DECOMPOSE_PROCESS,
            [
                new InputNode(inputCodes.TOO_HARD_TO_FEATURES, 1),
                new InputNode(inputCodes.HARD_TO_FEATURES, 0.5),
                new InputNode(inputCodes.REPEATABLE_MOMENTS, 1),
                new InputNode(inputCodes.NOT_QUICK_RELEASE, 1),
            ]
        ),

        new OutputNode(
            outCodes.LIVE_ALONE,
            [
                new InputNode(inputCodes.QUICK_RELEASE, 1),
                new InputNode(inputCodes.NO_CUSTOM_TASKLIST, 1),
                new InputNode(inputCodes.NOT_PREPARE_TO_CAMUNDA_8, 0.3),
            ]
        )
    ]

    static getContent() {
        return { ...this.content }
    }

    static resolveWithInputs(inputs) {
        return this.content.map(contentOutput => {
            let finalValue = 0;
            contentOutput.inputs.forEach(contentInput => {
                let input = inputs.filter((input) => contentInput.name === input.name)[0]
                if (input === undefined) throw new Error('Input not found!!!!')
                finalValue = input.value * contentInput.value + finalValue - input.value * contentInput.value * finalValue
            })
            return new ExpertSystemResolvedNodeOutput(contentOutput.name, finalValue)
        })
    }
}