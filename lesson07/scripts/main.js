"use strict"

/**
    6 задание из 2-го урока
    6**. (Сложное задание, требует времени и возможно гугления, делайте по желанию.)
    Программа должна спросить у пользователя число, это будет количество денег, которое он хочет
    положить на счет в банке. Затем программа должна выдать примерно такое сообщение:
    "Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101
    "Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020
    "Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104
    То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного
    числа.
 */

/**
 * { Спросить пользователя про ввндную сумму }
 *
 * @return     {integer}  { Возвращаем сумму введую пользователем }
 */
function ask_user() {
    return prompt('Введите сумму пополнения', 0);
}

/**
 * Возвращаем последнюю цифру чиста
 *
 * @param      {integer}  number  Число
 * @return     {integer}  Последнея цифра числа.
 */
function get_last_number(number) {
    return number % 10;
}

/**
 * Возвращает сообщение о введенной сумме
 *
 * @param      {integer}  number       Число, которое ввел пользователь
 * @param      {integer}  last_number  Последняя цифра из числа 
 * @return     {string}  Сообщение
 */
function get_message(number, last_number) {
    switch (true) {
        case number > 0 && last_number == 0:
            return `Ваша сумма в ${number} рублей успешно зачислена.`;
        case last_number == 1:
            return `Ваша сумма в ${number} рубль успешно зачислена.`;
        case last_number == 2:
        case last_number == 3:
        case last_number == 4:
            return `Ваша сумма в ${number} рубля успешно зачислена.`;
        case last_number == 5:
        case last_number == 6:
        case last_number == 7:
        case last_number == 8:
        case last_number == 9:
            return `Ваша сумма в ${number} рублей успешно зачислена.`;
        default:
            return `Ошибка. Повторите попытку позже.`;
    }
}


let number = ask_user();
let last_number = get_last_number(number);
alert(get_message(number, last_number));