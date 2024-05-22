module.exports = class NormilizeRecomendation {
    min;
    max;
    status;
    text;
    constructor(status, min, max, text) {
        this.status = status
        this.min = min
        this.max = max
        this.text = text
    }
}