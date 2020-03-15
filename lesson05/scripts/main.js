"use strict"
/**
    3 a. Сделайте модальное (появляющееся и исчезающее) окно
    b. (не обязательное задание) Сделайте анимацию при появлении и исчезании. Анимации можно взять здесь:
    1 https://github.com/miniMAC/magic (демо https://www.minimamente.com/project/magic/ )
    2 https://github.com/daneden/animate.css (демо https://daneden.github.io/animate.css/ )
    3 http://animista.net/
 */
var buttons = document.getElementsByClassName('show-modal-window');
for (var button of buttons) {
    button.addEventListener('click', function() {
        let modal_id = this.dataset.modalId;
        let modal_window = document.getElementById(modal_id);
        modal_window.style.display = 'block';
    });
}

let close_links = document.getElementsByClassName('close');
for (let close_link of close_links) {
    close_link.addEventListener('click', function() {
        let parent_element = this.parentElement;
        parent_element.style.display = 'none';
    });
}
/**
    Типа выподы:
    сделал универсальный обработчик открытия и закрытия модального окна, 
    чтобы работал когда на странице одно или много модальных окон.
 */





/**
    4 Сделайте несколько карточек товара, примерно такого вида:
 */
var buttons = document.getElementsByClassName('show-desc');
for (var button of buttons) {
    button.addEventListener('click', function() {
        var parent_element = this.parentElement;
        let desc_block = parent_element.querySelector('.desc');
        let img_block = parent_element.querySelector('img');

        if (this.innerText == 'Подробнее') {
            desc_block.style.display = 'block';
            img_block.style.display = 'none';
            this.innerText = 'Отменить';
        } else {
            desc_block.style.display = 'none';
            img_block.style.display = 'block';
            this.innerText = 'Подробнее';
        }
    });
}





/**
    5 Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему
    желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
    Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
 */
function draw_chess_board() {

    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    let html = '<table>';
    for (let i = 0; i < 9; i++) {
        html += '<tr>';
        for (let j = 0; j < 9; j++) {
            if (j == 0 && i > 0) {
                /**
                 * { Пишем цифры по вертикали в первой колонке}
                 */
                html += '<td>' + i + '</td>';
            } else if (j > 0 && i == 0) {
                /**
                 * { Пишем буквы по горизонтали в первой строке}
                 */
                html += '<td>' + letters[j - 1] + '</td>';
            } else {
                let tb_class = 'white';
                if ((i % 2) == 0) {
                    if ((j % 2) !== 0) {
                        tb_class = 'black';
                    }
                } else {
                    if ((j % 2) == 0) {
                        tb_class = 'black';
                    }
                }

                html += '<td class="' + tb_class + '">' + draw_chess_element(i, j) + '</td>';
            }
        }
        html += '</tr>';
    }

    html += '</table>';
    return html;
}
/**
    Пример вызова функции ниже
 */




/**
    6 (усложненное задание, делайте по желанию) Заполнить созданную таблицу фигурами, фигуры должны выглядеть
    как картинки, либо можно использовать символы (существуют символы шахматных фигур) причем все фигуры
    должны стоять на своих местах и быть соответственно черными и белыми.
 */
function draw_chess_element(i, j) {
    let elements = {
        i1: {
            j1: '<img src="images/icons8-rook-26-black.png"/>',
            j2: '<img src="images/icons8-knight-26-black.png"/>',
            j3: '<img src="images/icons8-bishop-26-black.png"/>',
            j4: '<img src="images/icons8-queen-26-black.png"/>',
            j5: '<img src="images/icons8-king-26-black.png"/>',
            j6: '<img src="images/icons8-bishop-26-black.png"/>',
            j7: '<img src="images/icons8-knight-26-black.png"/>',
            j8: '<img src="images/icons8-rook-26-black.png"/>',
        },
        i2: {
            j1: '<img src="images/icons8-pawn-26-black.png"/>',
            j2: '<img src="images/icons8-pawn-26-black.png"/>',
            j3: '<img src="images/icons8-pawn-26-black.png"/>',
            j4: '<img src="images/icons8-pawn-26-black.png"/>',
            j5: '<img src="images/icons8-pawn-26-black.png"/>',
            j6: '<img src="images/icons8-pawn-26-black.png"/>',
            j7: '<img src="images/icons8-pawn-26-black.png"/>',
            j8: '<img src="images/icons8-pawn-26-black.png"/>',
        },
        i7: {
            j1: '<img src="images/icons8-pawn-26.png"/>',
            j2: '<img src="images/icons8-pawn-26.png"/>',
            j3: '<img src="images/icons8-pawn-26.png"/>',
            j4: '<img src="images/icons8-pawn-26.png"/>',
            j5: '<img src="images/icons8-pawn-26.png"/>',
            j6: '<img src="images/icons8-pawn-26.png"/>',
            j7: '<img src="images/icons8-pawn-26.png"/>',
            j8: '<img src="images/icons8-pawn-26.png"/>',
        },
        i8: {
            j1: '<img src="images/icons8-rook-26.png"/>',
            j2: '<img src="images/icons8-knight-26.png"/>',
            j3: '<img src="images/icons8-bishop-26.png"/>',
            j4: '<img src="images/icons8-queen-26.png"/>',
            j5: '<img src="images/icons8-king-26.png"/>',
            j6: '<img src="images/icons8-bishop-26.png"/>',
            j7: '<img src="images/icons8-knight-26.png"/>',
            j8: '<img src="images/icons8-rook-26.png"/>',
        },
    };

    if (elements.hasOwnProperty('i' + i)) {
        return eval('elements.i' + i + '.j' + j);
    }

    return '';
}

let chess_board = document.getElementById('сhess-board');
chess_board.innerHTML += draw_chess_board();
/**
    Примечание:
    можно(возможно нужно) было сделать через .appendChild(), но 
    выбран этот вариант
 */