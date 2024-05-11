module.exports = class SchemeState {
    static #state = []

    static setState(state) {
        this.#state = state
    }

    static getState() {
        return { ...this.#state }
    }
}