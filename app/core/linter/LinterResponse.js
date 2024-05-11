module.exports = class LinterResponse {
    isOk;
    message;

    constructor(isOk, message = null) {
        this.isOk = isOk;
        this.message = message;
    }
}