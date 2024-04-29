import BpmnShapeAnalizeService from "../service/BpmnShapeAnalizeService";

export default class ContextRegistrator {
static bpmnShapeAnalizeService;

    static register() {
        this.bpmnShapeAnalizeService = new BpmnShapeAnalizeService();
    }
}