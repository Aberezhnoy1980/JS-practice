// Task 1
let task1Header1 = 'Задание 1'
let task1Condition1 = 'Создайте переменные num1 и num2, значения которых пользователь вводит с клавиатуры.'
let task1Condition2 = 'Проверьте, что переменная num1 меньше или равна 1, а переменная num2 больше или равна 3.'

document.getElementById("t1.header").innerHTML = task1Header1;
document.getElementById("t1.condition1").innerHTML = task1Condition1;
document.getElementById("t1.condition2").innerHTML = task1Condition2;

let firstNumber = Number.parseInt(prompt('Введите первое число из двух'))
let secondNumber = Number.parseInt(prompt('Введите второе число из двух'))

console.log(firstNumber <= 1
    ? `Условия выполнены: число ${firstNumber} меньше или равно 1`
    : `Условия не выполнены: число ${firstNumber} больше 1`
);
document.getElementById("t1.first").innerHTML = firstNumber <= 1
    ? `Условия выполнены: число ${firstNumber} меньше или равно 1`
    : `Условия не выполнены: число ${firstNumber} больше 1`;

console.log(secondNumber >= 3
    ? `Условия выполнены: число ${secondNumber} больше или равно 3`
    : `Условия не выполнены: число ${secondNumber} меньше 3`
);
document.getElementById("t1.second").innerHTML = secondNumber >= 3
    ? `Условия выполнены: число ${secondNumber} больше или равно 3`
    : `Условия не выполнены: число ${secondNumber} меньше 3`;

//  Task 2
let task2Header = 'Задание 2'
let task2Condition = 'Перепишите следующий код с использованием тернарного оператора:';
let task2Expression = "let test = true; if (test === true) {tconsole.log('+++');} else {console.log('---');}";
let task2Answer = "let test = true; console.log(test ? '+++' : '---')"

document.getElementById("t2.header").innerHTML = task2Header;
document.getElementById("t2.condition").innerHTML = task2Condition;
document.getElementById("t2.expression").innerHTML = task2Expression;
document.getElementById("t2.answer").innerHTML = task2Answer;
console.log("let test = true; console.log(test ? '+++' : '---')");

// Task 3
let dayInput = Number.parseInt(prompt('Please, enter an integer f rom 1 to 31').trim());
let task3Header = 'Задание 3';
let task3Condition = 'В переменной day хранится число от 1 до 31. \
Определите, в какую декаду месяца попадает это число (первая, вторая или третья декада).'
let answerMessage;
if (dayInput >=1 && dayInput <= 31) {
    if (dayInput >= 1 && dayInput <= 10) {
        answerMessage = `Число ${dayInput} входит в первую декаду`;
        console.log(answerMessage);
    } else if (dayInput > 10 && dayInput <= 20) {
        answerMessage = `Число ${dayInput} входит во вторую декаду`;
        console.log(answerMessage);
    } else
        answerMessage = `Число ${dayInput} входит в третью декаду`;
        console.log(answerMessage);
} else {
    answerMessage = `Число ${dayInput} выходит за пределы диапазона!`;
    console.log('Out of range!');
}

document.getElementById("t3.header").innerHTML = task3Header;
document.getElementById("t3.condition").innerHTML = task3Condition;
document.getElementById("t3.answer").innerHTML = answerMessage;

// Task 4
let numInput = Number.parseInt(prompt('Please, enter an any integer').trim());
let task4Header = 'Задание 4';
let task4Condition1 = 'Получите от пользователя число.'
let task4Condition2 = 'Выведите разряды числа: количество сотен, десятков и единиц.'

let units = numInput % 10;
let decades = Math.floor(numInput % 100 / 10);
let hundreds = Math.floor(numInput / 100);

answerMessage = `В числе ${numInput} единиц: ${units}, десятков: ${decades}, сотен: ${hundreds}`;
console.log(answerMessage);
document.getElementById("t4.answer").innerHTML = answerMessage;
