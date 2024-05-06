export default class SchemeState {
    static #state = []

    static addState(newState) {
        this.#state.push(newState)
    }

    static removeState(old) {
        this.#state = this.#state.filter(e => e !== old)
    }

    static getState() {
        return { ...this.#state }
    }
}