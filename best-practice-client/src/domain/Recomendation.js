export default class Recomendation {
    outputCode;
    outputValue;
    status;
    text;
    constructor(outputCode, outputValue, status, text) {
        this.outputCode = outputCode
        this.outputValue = outputValue
        this.status = status
        this.text = text
    }
}