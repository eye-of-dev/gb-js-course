"use strict"

/**
	1 Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
	мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
	- единицы (в свойстве units)
	- десятки (в свойстве tens)
	- сотни (в свойстве hundereds)
	Например, для числа 45 мы должны получить следующий объект:
	{
	units: 5, //это единицы
	tens: 4, //это десятки
	hundreds: 0, //это сотни
	}
	Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
	необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

/**
 * { Объект разрядов }
 *
 * @class      Discharges (name)
 * @param      {integer}  units     The units
 * @param      {integer}  tens      The tens
 * @param      {integer}  hundreds  The hundreds
 */
function Discharges(units, tens, hundreds) {
    this.units = units;
    this.tens = tens;
    this.hundreds = hundreds;
}

/**
 * { Пустой объек разрядов }
 *
 * @class      DischargesNull (name)
 */
function DischargesNull() {}

/**
 * { function_description }
 *
 * @param      {string||integer||}          number  The number
 * @return     {DischargesNull||Discharges}  Пустой объекл или 
 * 											объект содержащий информацию по числу
 */
function number_breakdown(number) {
    /**
     * { Проверка на тип }
     */
    if (!Number.isInteger(number)) {
        console.log('параметр не integer');
        return new DischargesNull();
    }

    /**
     * { Проверка на соответствие диапазону }
     */
    if (number < 0 || number > 999) {
        console.log('число передано вне [0, 999] диапазона');
        return new DischargesNull();
    }

    let hundreds = 0;
    if (number >= 100) {
        hundreds = Math.floor(number / 100);
        number = number % 100;
    }

    let tens = 0;
    if (number >= 10) {
        tens = Math.floor(number / 10);
    }
    let units = number % 10;

    return new Discharges(units, tens, hundreds);
}


console.log(number_breakdown(1)); // Object { units: 1, tens: 0, hundreds: 0 }
console.log(number_breakdown(25)); // Object { units: 5, tens: 2, hundreds: 0 }
console.log(number_breakdown(307)); // Object { units: 7, tens: 0, hundreds: 3 }
console.log(number_breakdown(642)); // Object { units: 2, tens: 4, hundreds: 6 }
console.log(number_breakdown(-307)); // число передано вне [0, 999] диапазона Object {  }
console.log(number_breakdown(1235)); // число передано вне [0, 999] диапазона Object {  }
console.log(number_breakdown('23')); // параметр не integer Object {  }
console.log(number_breakdown(1.5)); // параметр не integer Object {  }
console.log(number_breakdown('hohohoho')); // параметр не integer Object {  }