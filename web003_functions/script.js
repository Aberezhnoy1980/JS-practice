/* Декларативный подход к объявлению функций. Мы объявляем ключевое слово
function, за которым идёт имя функции (его может и не быть) и её тело.
*/

// Именованная функция.
function getMaximum1(numbers) {
    // Реализация алгоритма поиска максимального значения.
}
/* Анонимная функция. В данном случае эта функция будет бесполезной, так как
без имени мы не сможем её вызвать. Анонимные функции встречаются в местах, где
они передаются в качестве функции обратного вызова или возвращаются из другой
функции. Об этом поговорим позже.
*/
// function (result) {
// Какой-то код обработки результата.
// }
// Функциональное выражение.
const getMaximum2 = function (numbers) {
    // Реализация алгоритма поиска максимального значения.
}
// или в стиле ES6 с использованием толстой стрелки (fat arrow)
const getMaximum3 = (numbers) => {
    // Реализация алгоритма поиска максимального значения.
}

let f = number => number + 1;
console.log(f(12));

const f1 = (param = 5) => {
    console.log(param);
}

f1();
f1(20);

const sum1 = function (a, b) {
    return a + b;
}

console.log(sum1);
console.log(sum1(2, 3));

const sum2 = (a, b) => a + b;
console.log(sum2(5, 6));
console.log(sum2(2, 63));

function printHelloNameConsole(name) {
    console.log(name);
}

function getHelloName(name) {
    return `Привет, ${name}!`;
}

document.getElementById("hello.name.undefined").innerHTML = printHelloNameConsole('Sasha');
document.getElementById("hello.name").innerHTML = getHelloName('Sasha');


let count = 5;
function counter() {
    return count++;
}

counter();
document.getElementById("counter").innerHTML = count;
console.log(counter());

let age = Number(prompt("Сколько тебе лет?"));

function upAge() {
    return age + 5;
}

let upedAge = upAge();

document.getElementById("up.age").innerHTML = upedAge;
console.log(`Через 5 лет тебе будет ${upedAge}`);

const newAge = () => age + 5;

document.getElementById("up.age.arrow").innerHTML = newAge();
console.log(`Через 5 лет тебе будет ${newAge()}`);

function hello() {
    console.log('Hello function!');
}

hello();

const sum3 = (param1, param2) => {
    return param1 + param2;
}

// const result = sum3(2, 5);

document.getElementById("sum").innerHTML = sum3(2, 5);
console.log(sum3(2, 5));

const getSalary = (income) => {
    return income * 0.87 * 0.75;
}

const salary = getSalary(Number.parseInt(prompt("Please, enter your income in this month")))
document.getElementById("salary").innerHTML = salary;
console.log(salary);

console.log(`На еду желательно потратить не более ${salary * 0.3}`);

// Броузерные события
function buy() {
    alert('Поздравляем!');
    alert('Вы нажали на кнопку купить');
}
