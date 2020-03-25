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
window.addEventListener('load', () => {
    const questions = Questions;
    const board = new Board();
    const test = new Test();

    test.init(questions);

    board.init(questions, test);

    board.clearBoard();
    board.renderBoard();
    board.renderButtonRetult();
});
const Questions = [{
        'question': {
            'id': 1,
            'title': '1. Какая из перечисленных горных систем Евразии самая высокая?'
        },
        'answers': [{
            'id': 1,
            'title': 'Альпы',
            'corrent': 0
        }, {
            'id': 2,
            'title': 'Кавказ',
            'corrent': 1
        }, {
            'id': 3,
            'title': 'Тибет',
            'corrent': 0
        }, {
            'id': 4,
            'title': 'Алтай',
            'corrent': 0
        }]
    }, {
        'question': {
            'id': 2,
            'title': '2. Какой из перечисленных городов является наиболее крупным по численности населения?'
        },
        'answers': [{
            'id': 5,
            'title': 'Мадрид',
            'corrent': 0
        }, {
            'id': 6,
            'title': 'Киев',
            'corrent': 0
        }, {
            'id': 7,
            'title': 'Варшава',
            'corrent': 0
        }, {
            'id': 8,
            'title': 'Рио-де-Жанейро',
            'corrent': 1
        }]
    }, {
        'question': {
            'id': 3,
            'title': '3. С какой из перечисленных стран Россия имеет сухопутную границу?'
        },
        'answers': [{
            'id': 9,
            'title': 'Туркмения',
            'corrent': 0
        }, {
            'id': 10,
            'title': 'Монголия',
            'corrent': 1
        }, {
            'id': 11,
            'title': 'Иран',
            'corrent': 0
        }, {
            'id': 12,
            'title': 'Швеция',
            'corrent': 0
        }]
    },
    {
        'question': {
            'id': 4,
            'title': '4. Какой из перечисленных городов расположен на берегу Волги?'
        },
        'answers': [{
            'id': 13,
            'title': 'Самара',
            'corrent': 1
        }, {
            'id': 14,
            'title': 'Уфа',
            'corrent': 0
        }, {
            'id': 15,
            'title': 'Рязань',
            'corrent': 0
        }, {
            'id': 16,
            'title': 'Пермь',
            'corrent': 0
        }]
    }, {
        'question': {
            'id': 5,
            'title': '5. В каком из перечисленных регионов России ведется добыча железной руды?'
        },
        'answers': [{
            'id': 17,
            'title': 'Республика Калмыкия',
            'corrent': 0
        }, {
            'id': 18,
            'title': 'Чувашская Республика',
            'corrent': 0
        }, {
            'id': 19,
            'title': 'Курская область',
            'corrent': 1
        }, {
            'id': 20,
            'title': 'Брянская область',
            'corrent': 0
        }]
    }
];
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
            this.setMessage('Вы выиграли123');
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
//# sourceMappingURL=maps/app.js.map
