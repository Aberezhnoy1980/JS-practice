/** Задание 1 */
const condition1 = 'Написать функцию, которой передаем, имя, фамилия и возраст, \
и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, \
которые были переданы в функцию)';
const condition2 = 'Создайте функцию которая возводит переданное число в квадрат.'
const condition3 = "Сделайте функцию, которая параметром принимает число и проверяет, \
положительное это число или отрицательное. В первом случае пусть функция выводит в \
консоль текст '+++', а во втором '---'.";

document.getElementById("t1.header").innerHTML = 'Задание 1';
document.getElementById("t1.condition1").innerHTML = condition1;
document.getElementById("t1.condition2").innerHTML = condition2;
document.getElementById("t1.condition3").innerHTML = condition3;

// Task 1
const getGreetingMessage = (userInput) => {
    let tokens = userInput.split(' ');
    const answerMessage = `Hello, ${tokens[0]} ${tokens[1]} ${tokens[2]}, years old! How are you ${tokens[0]}?`;
    console.log(answerMessage);
    document.getElementById("t1.answer1").innerHTML = answerMessage;
}

function startCondition1() {
    const userInput = prompt('Please, enter your name, sursname and age through space');
    getGreetingMessage(userInput);
}

// Task 2
const getPow = (number, pow) => Math.pow(number, pow);

function startCondition2() {
    const userInput = prompt('Please, enter any integer and pow through space').trim();
    const tokens = userInput.split(' ');
    const answerMessage = `The number ${tokens[0]} to the power of ${tokens[1]} is ${getPow(tokens[0], tokens[1])}`
    console.log(answerMessage);
    document.getElementById("t1.answer2").innerHTML = answerMessage;
}

// Task 3
function checkNumber(number) {
    return number > 0 ? `The nubmer ${number} is positive` : `The number ${number} is negative`;
}

function execCondition3() {
    let userInput = Number.parseInt(prompt('Please, enter any integer'));
    let answerMessage = checkNumber(userInput);
    console.log(answerMessage);
    document.getElementById("t1.answer3").innerHTML = answerMessage;
}

/** Задание 2 */
const condition4 = 'Сделайте функцию, которая параметрами принимает 3 числа и выводит в консоль \
сумму этих чисел.';

const condition5 = 'С помощью созданной вами функции выведите в консоль сумму значений этих переменных. <br> \
let param1 = 1; <br> \
let param2 = 2; <br> \
let param3 = 3;';

const condition6 = 'Дана фукнция <br> \
function func(num = 5) <br> { \
    console.log(num * num); <br> \
} <br> \
Расскажите, каким будет результат каждого из вызовов функции. <br> \
func(2); <br> \
func(3); <br> \
func();'

document.getElementById("t2.header").innerHTML = 'Задание 2';
document.getElementById("t2.condition4").innerHTML = condition4;

function addNums(num1, num2, num3) {
    result = num1 + num2 + num3;
    console.log(result);
    return result;
}

const execCondition4 = () => {
    document.getElementById("t2.answer1").innerHTML = addNums;
}

document.getElementById("t2.condition5").innerHTML = condition5;

let param1 = 1;
let param2 = 2;
let param3 = 3;

function execCondition5() {
    document.getElementById("t2.answer2").innerHTML = addNums(param1, param2, param3);
}

document.getElementById("t2.condition6").innerHTML = condition6;


function func(num = 5) {
    return num * num;
}

const res1 = func(2);
const res2 = func(3);
const res3 = func();
const condition6_message = `func(2) = 4, func(3) = 9, func() = 25 <br> \
Вереные ответы: ${res1}, ${res2}, ${res3}`;

function execCondition6() {
    document.getElementById("t2.answer3").innerHTML = condition6_message;
}

/* Задание 3*/
document.getElementById("t3.header").innerHTML = 'Задание 3';

const condition7 = 'Сделайте функцию, которая параметром принимает число, <br> \
возвращает квадратный корень из этого числа. С помощью этой <br> \
функции найдите корень числа 3, затем найдите корень числа 4. <br> \
Просуммируйте полученные результаты и выведите их в консоль.'

const condition8 = 'Создайте функцию, которая находит минимальное число из 2х <br> \
передаваемых аргументов функции'

document.getElementById("t3.condition7").innerHTML = condition7;

function getSquareRootOfNum(num) {
    result = Math.sqrt(num);
    return result;
}

function execCondition7() {
    result = getSquareRootOfNum(3) + getSquareRootOfNum(4);
    document.getElementById("t3.answer1").innerHTML = result;
    console.log(result);
}

document.getElementById("t3.condition8").innerHTML = condition8;

function execCondition8() {
    const userNumbers = prompt('Enter two any integers through space').split(' ');
    const firstNumber = Number.parseInt(userNumbers[0]);
    const secondNumber = Number.parseInt(userNumbers[1]);
    document.getElementById("t3.answer2").innerHTML = Math.min(firstNumber, secondNumber);
}

/** Задание 4 */

const condition9 = 'Сделайте функцию, которая принимает параметром число от 1 до 7, <br> \
а возвращает день недели на русском языке.'
const condition10 = 'Написать функцию, которой передаем имя и она возвращает <br> \
приветствие в зависимости от времени суток (Доброеутро\\день\\вечер\\ночи Иван)'

document.getElementById("t4.header").innerHTML = 'Задание 4';
document.getElementById("t4.condition9").innerHTML = condition9;

const weekDays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const getWeekDay = (dayNumber) => { return weekDays[dayNumber - 1] }

function execCondition9() {
    const userInput = Number.parseInt(prompt('PLease, enter an integer from 1 to 7'));
    document.getElementById("t4.answer1").innerHTML = getWeekDay(userInput);
}

document.getElementById("t4.condition10").innerHTML = condition10;

function padTo2Digits(num) {
    return num.toString().padStart(2, '0'); // Преобразует 9 в 09, а 10 оставит без изменений
}

Date.prototype.timeNow = function () {
    return `${padTo2Digits(this.getHours())}:${padTo2Digits(this.getMinutes())}:${padTo2Digits(this.getSeconds())}`;
}

// Number.prototype.between = function (a, b) {
//     let min = Math.min(a, b),
//         max = Math.max(a, b);

//     return this > min && this < max;
// };

function execCondition10() {
    const username = prompt('Please, enter your name');

    let intervals = [
        '00:00:00',
        '05:00:00',
        '11:00:00',
        '17:00:00'
    ]

    let message = '';
    const now = new Date();
    if (now.timeNow() > intervals[0] && now.timeNow() < intervals[1])
        message = `Доброй ночи, ${username}`;
    else if (now.timeNow() > intervals[1] && now.timeNow() < intervals[2])
        message = `Доброе утро, ${username}!`;
    else if (now.timeNow() > intervals[2] && now.timeNow() < intervals[3])
        message = `Доброе день, ${username}!`;
    else
        message = `Доброе вечер, ${username}!`;

    console.log(message);
    document.getElementById("t4.answer2").innerHTML = message;
}