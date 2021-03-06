"use strict"

/**
Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в
градусах по Фаренгейту. Подсказка: расчёт идёт по формуле:
Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
*/
const tСel = 36;
const tFah = (9 / 5) * tСel + 32;
alert("Температура по Фаренгейту: " + tFah);

/**
Объявить две переменные: admin и name. Записать в name строку "Василий". Скопировать
значение из name в admin. Вывести в консоль переменную admin (должно вывести "Василий").
*/
let admin;
const name = "Василий";
admin = name;
console.log(admin);

/**
Вывести в консоль значения выражений и объяснить почему получились такие значения
используя комментарии к каждому выражению:
10 + 10 + "10"
10 + "10" + 10
10 + 10 + +"10"
10 / -""
10 / +"2,5"
*/
console.log(10 + 10 + "10");
/**
Результат: 2010
первая часть выражения - сложение двух чисел
вторая часть - "сложение" числа и строки. В итоге получаем вместо сложения - конкатенацию, 
т.к. число(из первой части) приводится к типу string
*/
console.log(10 + "10" + 10);
/**
Результат: 101010
тут наоборот
первая часть выражения - "сложение" числа и строки. В итоге получаем вместо сложения - конкатенацию
вторая часть - "сложение" строки и числа. В итоге получаем вместо сложения - конкатенацию, 
т.к. строка(из первой части) присоединяет к себе число(приводиться к типу string)
*/
console.log(10 + 10 + +"10");
/**
Результат: 30
тут всю "магию" делает + перед строкой "10", который преобразует строку в число
по этому тут сложение 3-х чисел
*/
console.log(10 / -"");
/**
Результат: -Infinity
выражение -"" дает -0. Деление на 0 в js возращает Infinity, а знак "-" стоит изначално
*/
console.log(+"2/5");
console.log(10 / +"2,5");
/**
Результат: NaN
выражение +"2,5" дает NaN, тут похоже на попытку строку привести к типу float.
Но в js float числа целая часть от дробно отделяется ".", не ",". По этому NaN
Лббые операции с NaN возвращают NaN
*/

/**
Напишите, являются ли данные имена переменных корректными:
let mode = "normal"; - корректная 
let my_valu3 = 102; - корректная 
let 3my_value3 = "102"; - не может начинаться с цифры 
let __hello__ = "world"; - корректная 
let $$$ = "money"; - корректная 
let !0_world = true; - не может начинаться с ! 
*/ 