module.exports = class LinterState {
    static #state = []

    static setState(state) {
        this.#state = state
    }

    static getState() {
        return this.#state
    }
}