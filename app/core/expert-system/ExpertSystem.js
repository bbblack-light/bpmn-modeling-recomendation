module.exports = class ExpertSystem {
    static #content = []

    static getContent() {
        return { ...this.#content }
    }
}