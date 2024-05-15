module.exports = class Question {
    text;
    answers;
    constructor(text, answers) {
        this.text = text
        this.answers = answers
    }
}