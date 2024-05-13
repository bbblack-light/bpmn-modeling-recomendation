module.exports = class OutputNode {
    name;
    inputs;
    constructor(name, inputs) {
        this.name = name;
        this.inputs = inputs;
    }
}