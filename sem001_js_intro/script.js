/**
1. Установить расширение форматирования кода
2. Установить расширение “JavaScript Snippet Pack”
3. Сделайте файл с вашей первой программой.
a. index.html
b. script.js
4. Подключите файл script.js к index.html
5. В файле index.html создайте скрипт который выводит в
консоль текст “Текст из index.html”
6. В файле script.js вывести в консоль текст “Текст из
script.js!”
 */
// console.log('Текст из script.js');
let scriptMessage = 'Текст из script.js';
document.getElementById("task2").innerHTML = scriptMessage;

/**
1. Создайте переменную num и присвойте ей значение 123. Выведите
значение этой переменной в консоль
2. Создайте переменную а и присвойте ей значение 5, переопределите
переменную а на значение 7, выведите переменную а в консоль
3. Создайте переменную b. Запишите в нее сумму чисел 1, 2 и 3. С
помощью функции console.log выведите в консоль содержимое
переменной b.
4. Создайте 2 вида комментариев в вашем коде, добавьте в них
произвольный текст
 */
let num = 123;
// console.log(num);
document.getElementById("num").innerHTML = num;

let a = 5;
a = 7;
// console.log(a);
document.getElementById("a").innerHTML = a;

let b;
b = 1 + 2 + 3;
// console.log(b);
document.getElementById("b").innerHTML = b;

// comment#1

/*
comment#2
*/

/**
1. Создайте переменную c со значением 10 и переменную d со
значением 2.
a. Все созданные переменные должны быть логично названы
b. Создайте переменную суммы и присвойте сумму чисел (c,d)
c. Создайте переменную разности и присвойте разность чисел
(c,d)
d. Создайте переменную прозведения и присвойте произведение
чисел (c,d)
e. Создайте переменную частного и присвойте деление чисел
(c,d)
f. Выведите в консоль все созданные переменные
g. Сложите все созданные переменные и выведите результат в
консоль
 */

let c = 10;
let d = 2;

let add = c + d;
let sub = c - d;
let mul = c * d;
let div = c / d;

let arr = [add, sub, mul, div]
function sum(arr) {
    let sum = 0;
    for (let e of arr) {
        // console.log(e);
        sum += e;
    }
    return sum;
}

// console.log(arr);
document.getElementById("arr").innerHTML = arr;

// console.log(sum(arr));
document.getElementById("sum").innerHTML = sum(arr);

/**
1. Не запуская код, определите, что выведется в консоль:
    a. let a = 5 + 5 * 3 + 3;
2. Не запуская код, определите, что выведется в консоль:
    a. let a = 8 / 2 + 2;
3. Не запуская код, определите, что выведется в консоль:
    a. let a = (2 + 3) * (2 + 3);
4. Не запуская код, определите, что выведется в консоль:
    a. let a = (2 + 3) * 2 + 3;
5. Не запуская код, определите, что выведется в консоль:
    a. let a = (2 * 8) / 4;
6. Не запуская код, определите, что выведется в консоль:
    a. let a = 2 * (8 / 4);
 */

let res = 5 + 5 * 3 + 3;
document.getElementById("p1").innerHTML = res;

res = 8 / 2 + 2;
document.getElementById("p2").innerHTML = res;

res = (2 + 3) * (2 + 3);
document.getElementById("p3").innerHTML = res;

res = (2 + 3) * 2 + 3;
document.getElementById("p4").innerHTML = res;

res = (2 * 8) / 4;
document.getElementById("p5").innerHTML = res;

res = 2 * (8 / 4);
document.getElementById("p6").innerHTML = res;

/**
1. Запишите в переменную a число 1.5, а в переменную b - число 0.75.
Найдите сумму значений этих переменных и выведите ее на экран.
2. Создайте переменную a, запишите в нее какое-нибудь
положительное или отрицательное число. Выведите на экран это
число с обратным знаком.
 */

let firstFloatNum = 1.5;
let secondFloatNum = 0.75;

document.getElementById("floatSum").innerHTML = firstFloatNum + secondFloatNum;
document.getElementById("reverseVar").innerHTML = - 1 * 5;

/**
1. Создайте строку с вашем именем и строку с вашей фамилией.
Выведите эти данные в консоль
2. Создайте переменную с текстом 'java' и переменную с текстом
'script'. С помощью этих переменных и операции сложения строк
выведите в консоль строку 'javascript'.
3. Создайте переменную с текстом 'hello' и переменную с текстом
'world'. С помощью этих переменных и операции сложения строк
выведите в консоль строку 'hello world'.
 */

let firstName = 'Aleksandr';
let lastName = 'Berezhnoy';
console.log(firstName, lastName);
document.getElementById("firstName").innerHTML = firstName;
document.getElementById("lastName").innerHTML = lastName;

let token1 = 'java';
let token2 = 'script';
console.log(token1 + token2);
document.getElementById("js").innerHTML = token1 + token2;

console.log('hello' + ' ' + 'world!');
document.getElementById("helloWorld").innerHTML = 'hello ' + 'world!';
