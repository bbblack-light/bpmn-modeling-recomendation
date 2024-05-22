import lintElementsAndSaveToLocalStorage from "./../../linter/linter"

export default class SchemeState {
    static #state = []

    static addState(newState) {
        this.#state.push(newState)
        lintElementsAndSaveToLocalStorage(this.#state)
    }

    static removeState(old) {
        this.#state = this.#state.filter(e => e !== old)
        lintElementsAndSaveToLocalStorage(this.#state)
    }
}