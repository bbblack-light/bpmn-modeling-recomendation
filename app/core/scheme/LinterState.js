const { constDevState } = require("../../domain/consts")

module.exports = class LinterState {
    static #state = []

    static setState(state) {
        this.#state = state
    }

    static getState() {
        if (process.env.NODE_ENV === 'development') return constDevState
        return this.#state
    }
}