class Board {
    constructor() {
        this.boardEl = document.getElementById('questions');
        this.buttonEl = document.getElementById('button');
    }

    /**
     * Метод получает объект вопросов для их "отрисовки"
     * и объект теста для привязки событий
     * 
     * @param {Questions} questions Вопросы.
     * @param {Test} test Объект игры.
     */
    init(questions, test) {
        this.questions = questions;
        this.test = test;
    }

    clearBoard() {
        this.boardEl.innerHTML = '';
    }

    /**
     * Метод выводит список вопросов
     */
    renderBoard() {
        let table = document.createElement('table');
        for (let i = 0; i < this.questions.length; i++) {
            let tr = document.createElement('tr');
            let td = document.createElement('td');
            td.className = 'question';
            td.innerHTML = '<span>' + this.questions[i].question.title + '</span>';
            td.setAttribute('colspan', Object.keys(this.questions[i].answers).length);
            tr.appendChild(td);
            table.appendChild(tr);

            tr = document.createElement('tr');
            for (let index in this.questions[i].answers) {
                td = document.createElement('td');

                let input = document.createElement('input');
                input.setAttribute('type', 'radio');
                input.setAttribute('name', 'answer[' + i + ']');
                input.setAttribute('value', index);
                input.addEventListener('change', () => {
                    this.test.answer(this.questions[i].question.id, this.questions[i].answers[index].id);
                });

                td.appendChild(input);

                let span = document.createElement('span');
                span.innerHTML = '<span>' + this.questions[i].answers[index].title + '</span>';
                td.appendChild(span);
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        this.boardEl.appendChild(table);
    }

    /**
     * Метод кнопку для проверки ответов "Результат"
     */
    renderButtonRetult() {
        let button = document.createElement('button');
        button.innerText = 'Результат';
        button.addEventListener('click', () => {
            this.test.result();
        });
        this.buttonEl.appendChild(button);
    }

}