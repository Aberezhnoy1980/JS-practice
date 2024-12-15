/**Задание 1*/

const condition1 = 'Создайте функцию, которая возводит переданное число в куб. <br> \
Необходимо использовать эту функцию для вычисления и вывода в консоль <br> \
результата 2^3 + 3^3'

document.getElementById("t1.header").innerHTML = 'Задание 1';
document.getElementById("t1.condition1").innerHTML = condition1;

const getCube = (num) => { return Math.pow(num, 3) }

function execCondition1() {
    result = getCube(2) + getCube(3);
    document.getElementById("t1.answer").innerHTML = result;
}

const condition2 = 'Пользователь вводит с клавиатуры число. Если введён текст, необходимо <br> \
вывести сообщение о неверном значении.'

document.getElementById("t2.header").innerHTML = 'Задание 2';
document.getElementById("t2.condition2").innerHTML = condition2;

let getSalaryAfterTax = (salary) => { return salary * 0.87 };

function execCondition2() {
    const userInput = prompt('Please, enter an expression');
    const salary = parseFloat(userInput);
    let message = '';

    if (isNaN(salary))
        message = `Выражение "${userInput}" не число!`;
    else
        message = `Размер заработной платы за вычетом налогов ${getSalaryAfterTax(salary)}`;

    document.getElementById("t2.answer").innerHTML = message;
}

const condition3 = ' Пользователь вводит с клавиатуры 3 числа. Создайте функцию, <br> \
которая определяет максимальное значение среди этих чисел.';
document.getElementById("t3.header").innerHTML = 'Задание 3';
document.getElementById("t3.condition3").innerHTML = condition3;

function execCondition3() {
    let userInputs = prompt('Please, enter three integers through space').split(' ');
    let maxValue = Math.max(parseInt(userInputs));

    document.getElementById("t3.answer").innerHTML = `Максимальное значение из ${userInputs} ${maxValue}`;
}

const condition4 = 'Реализуйте четыре функции, каждая из которых выполняет одну из <br> \
следующих операций с двумя числами: <br> \
1. Сложение <br> \
2. Вычитание <br> \
3. Умножение <br> \
4. Деление <br> \
Функции должны возвращать результат операции.';

document.getElementById("t4.header").innerHTML = 'Задание 4';
document.getElementById("t4.condition4").innerHTML = condition4;

function execCondition4() {
    let userExpression = prompt('Please, enter a math expression. Use symbols below for operation: /, *, +, -').trim();
    let tokens = userExpression.split(' ', 3);
    let message = '';
    if (tokens.length != 3 || isNaN(parseInt(tokens[0])) || isNaN(parseInt(tokens[2])))
        message = 'Wrong expression! Please use space to separate numbers and operator.'

    let operator = tokens[1];
    let leftValue = parseInt(tokens[0]);
    let rightValue = parseInt(tokens[2]);

    switch (operator) {
        case '+':
            message = `Sum ${leftValue} and ${rightValue} is ${leftValue + rightValue}`
            break;
        case '-':
            message = `Subtracting ${leftValue} and ${rightValue} is ${leftValue - rightValue}`
            break;
        case '/':
            message = `Dividing ${leftValue} and ${rightValue} is ${leftValue / rightValue}`
            break;
        case '*':
            message = `Multiplication ${leftValue} and ${rightValue} is ${leftValue * rightValue}`
            break;
        default:
            break;
    }

    document.getElementById("t4.answer").innerHTML = message;
}