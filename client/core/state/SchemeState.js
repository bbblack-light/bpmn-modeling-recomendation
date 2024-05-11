export default class SchemeState {
    static #state = []

    static addState(newState) {
        this.#state.push(newState)
        localStorage.setItem('scheme-state', JSON.stringify(this.#state))
    }

    static removeState(old) {
        this.#state = this.#state.filter(e => e !== old)
        localStorage.setItem('scheme-state', JSON.stringify(this.#state))
    }

    static getState() {
        return { ...this.#state }
    }
}