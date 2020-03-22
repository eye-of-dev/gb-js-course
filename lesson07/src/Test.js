class Test {
    constructor() {
        this.answers = [];
        this.true_answers = [];
        this.messageEl = document.getElementById('message');
    }

    /**
     * Метод получает объект вопросов для их проверки
     * @param {Questions} questions Вопросы.
     */
    init(questions) {
        this.questions = questions;
        this.true_answers_map();
    }

    /**
     * Запоминаем ответы пользователя
     *
     * @param      {integer}  question  Идентификатор вопроса
     * @param      {integer}  answer    Идентификатор ответа
     */
    answer(question, answer) {
        if (this.check_answer(question)) {
            this.remove_answer(question);
        }

        this.answers.push({
            question: question,
            answer: answer
        });
    }

    /**
     * Проверяем, если ответ на данный вопрос
     *
     * @param      {integer}  question  Идентификатор вопроса
     * @return     {boolean}  { description_of_the_return_value }
     */
    check_answer(question) {
        return this.answers.some(e => e.question === question)
    }

    /**
     * Удаляем ответ из массива на заданный вопрос
     *
     * @param      {integer}  question  The question
     */
    remove_answer(question) {
        this.answers = this.answers.filter(function(obj) {
            return obj.question !== question;
        });
    }

    /**
     * Карта правильных ответов
     */
    true_answers_map() {
        for (let i = 0; i < this.questions.length; i++) {
            for (let index in this.questions[i].answers) {
                if (this.questions[i].answers[index].corrent == 1) {
                    this.true_answers.push(this.questions[i].answers[index].id);
                }
            }
        }
    }

    /**
     * Вывод результата теста
     */
    result() {
        if (this.answers.length === this.questions.length) {
            let current = 0;
            for (let j = 0; j < this.answers.length; j++) {
                if (this.true_answers.includes(this.answers[j].answer)) {
                    current++;
                }
            }

            this.setMessage(`Вы ответили правильно на ${current} из ${this.questions.length} вопросов.`);
        } else {
            this.setMessage('Нужно ответить на все вопросы.');
        }
    }

    /**
     * Метод выводит сообщение на странице.
     * @param {string} text 
     */
    setMessage(text) {
        this.messageEl.innerText = text;
    }
}