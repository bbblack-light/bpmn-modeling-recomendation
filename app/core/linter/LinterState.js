module.exports = class LinterState {
    static #state = []

    static dropState() {
        this.#state = []
    }

    static addStates(states) {
        this.#state = this.#state.concat(states)
    }

    static getStates() {
        return { ...this.#state }
    }
}