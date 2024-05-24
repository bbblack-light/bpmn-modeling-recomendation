module.exports = class NormilizeRecomendation {
    min;
    max;
    status;
    text;
    additionalAction;
    constructor(status, min, max, text, additionalAction = null) {
        this.status = status
        this.min = min
        this.max = max
        this.text = text
        this.additionalAction = additionalAction
    }
}