module.exports = class LinterState {
    static #state = []

    static dropState() {
        this.#state = []
    }

    static setStates(states) {
        this.#state = states
    }

    static getStates() {
        return { ...this.#state }
    }
}