export default class LinterResponse {
    bpmnElementId;
    isOk;
    message;

    constructor(bpmnElementId, isOk, message = null) {
        this.bpmnElementId = bpmnElementId;
        this.isOk = isOk;
        this.message = message;
    }
}