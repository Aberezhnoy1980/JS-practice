/**
1. Создать новый файл lesson2.html
2. Создать переменную и спросить у пользователя “Ваш
возраст”
3. Вывести на экран текст. Вам “возраст пользователя” лет
4. Спросить у пользователя его имя
5. Вывести на экран, Добро пожаловать на сайт “Имя
пользователя”
 */

let userName = prompt('Please, enter your name');
document.getElementById('name').innerHTML = userName;

let userAge = prompt('Please, enter your age');
document.getElementById('age').innerHTML = userAge;

alert(`Hello, ${userName}! Your age is ${userAge}`)
console.log(`Hello, ${userName}! Your age is ${userAge}`);

/**
1. Найти остаток от деления двух переменных
    a. let a = 13;
    b. let b = 5;
2. Что выведет на экран (Сначала проговорите, потом проверьте)
    a. let a;
    b. alert(a);
3. Что выведет на экран (Сначала проговорите, потом проверьте)
    a. alert('abc' * 3);
4. Что выведет на экран (Сначала проговорите, потом проверьте)
    a. alert( 1 / 0);
    b. alert(-1 / 0);
5. Что выведет на экран (Сначала проговорите, потом проверьте)
    a. alert('2' * '3');
 */

let a = 13;
let b = 5;
let divRem = 13 % 5;
document.getElementById("t1").innerHTML = divRem;

let c;
alert(c) // undefined
document.getElementById("t2").innerHTML = 'undefined';

// alert('abc' * 3) // err not number
document.getElementById("t3").innerHTML = 'abc' * 3;

// alert(1 / 0) // infinity
// alert(-1 / 0) // -infinity
document.getElementById("t4").innerHTML = 1 / 0;
document.getElementById("t5").innerHTML = -1 / 0;

// alert('2' * '3') // 6
document.getElementById("t6").innerHTML = '2' * '3';

/**
1. Сознательно допустите ошибку в вашем коде. Убедитесь, что
ошибка появляется в консоли. Определите, в какой строке кода
случилась ошибка.
2. Необходимо вывести в консоль результат суммы данных
переменных
    a. let a = '2';
    b. let b = '3';
3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль
вывести текст
    a. Сумма чисел равна “результат”
    b. Разность чисел равна “результат”
    c. Произведение чисел равно “результат”
    d. Частное чисел равно “результат”
    e. Остаток от деления чисел равен “результат”
 */

let errExpression = 'console.log(d);'
document.getElementById("err.expression").innerHTML = errExpression;
try {
    console.log(d);
} catch (err) {
    console.log(err);
    document.getElementById("err.name").innerHTML = err.name;
    document.getElementById("err.message").innerHTML = err.message;
}

let e = '2';
let f = '3';
console.log(e + f);
document.getElementById("t7").innerHTML = e + f;
let rigthResult = `Number.parseInt(e) + Number.parseInt(f) = ${Number.parseInt(e) + Number.parseInt(f)}`
document.getElementById("t7.1").innerHTML = rigthResult;

let firstNumber = Number.parseInt(prompt('Введите первое число из двух'));
let secondNumber = Number.parseInt(prompt('Введите второе число из двух'));

document.getElementById("first.number").innerHTML = firstNumber;
document.getElementById("second.number").innerHTML = secondNumber;

let addResult = firstNumber + secondNumber;
console.log(`Сумма чисел ${firstNumber} и ${secondNumber} равна ${addResult}`);
document.getElementById("t8").innerHTML = addResult;

let subResult = firstNumber - secondNumber;
console.log(`Разность чисел ${firstNumber} и ${secondNumber} равна ${subResult}`);
document.getElementById("t9").innerHTML = subResult;

let mulResult = firstNumber * secondNumber;
console.log(`Произведение чисел ${firstNumber} и ${secondNumber} равно ${mulResult}`);
document.getElementById("t10").innerHTML = mulResult;

let divResult = firstNumber / secondNumber;
console.log(`Частное чисед ${firstNumber} и ${secondNumber} равно ${divResult}`);
document.getElementById("t11").innerHTML = divResult;

let dimRemResult = firstNumber % secondNumber;
console.log(`Остаток от деления чисел ${firstNumber} и ${secondNumber} равно ${dimRemResult}`);
document.getElementById("t12").innerHTML = dimRemResult;

/**
1. Не запуская код, определите, что выведется в консоль:
    a. console.log(String(true));
2. Не запуская код, определите, что выведется в консоль:
    a. console.log('a' + true);
3. Не запуская код, определите, что выведется в консоль:
    a. console.log(Number(true));
4. Не запуская код, определите, что выведется в консоль:
    a. console.log(true + 1);
5. Не запуская код, определите, что выведется в консоль:
    a. console.log(true + true)
6. Не запуская код, определите, что выведется в консоль:
    a. console.log(true - true)
7. Не запуская код, определите, что выведется в консоль:
    a. console.log( String(true) + Number(true) )
 */

console.log(String(true));
document.getElementById("t13").innerHTML = String(true);

console.log('a' + true);
document.getElementById("t14").innerHTML = 'a' + true;

console.log(Number(true));
document.getElementById("t15").innerHTML = Number(true);

console.log(true + 1);
document.getElementById("t16").innerHTML = true + 1;

console.log(true + true);
document.getElementById("t17").innerHTML = true + true;

console.log(true - true);
document.getElementById("t18").innerHTML = true - true;

console.log(String(true) + Number(true));
document.getElementById("t19").innerHTML = String(true) + Number(true);

/**
1. Пользователь с клавиатуры вводит число, Необходимо создать
условный оператор который
    a. Выводит в консоль “Число больше 5”
    b. Выводит в консоль “Число меньше 5”
    c. Выводит в консоль “Число равно 5”
2. Даны переменные test1 и test2. Проверьте, равны ли их значения и
выведите соответствующее сообщение.
3. Пользовать с клавиатуры вводит 2 числа
    a. Необходимо найти какое из двух чисел минимальное
4. Пользователь с клавиатуры вводит число, Проверьте, что данная
переменная больше нуля и меньше 15.
 */

// let input = Number.parseInt(prompt('Введите число'));
let input = firstNumber;
let message;
if (input > 5) {
    message = `Число ${input} больше 5`;
    console.log(message);
    document.getElementById("t20").innerHTML = message;
}
else if (input < 5) {
    message = `Число ${input} меньше 5`
    console.log(message)
    document.getElementById("t20").innerHTML = message;
}
else {
    message = `Число ${input} равно 5`
    console.log(message);
    document.getElementById("t20").innerHTML = message;
}

console.log(firstNumber === secondNumber
    ? `Числа ${firstNumber} и ${secondNumber} равны`
    : `Числа ${firstNumber} и ${secondNumber} не равны`);
document.getElementById("t21").innerHTML = firstNumber === secondNumber
    ? `Числа ${firstNumber} и ${secondNumber} равны`
    : `Числа ${firstNumber} и ${secondNumber} не равны`

console.log('Минимальное значение из ' + firstNumber + ' и ' + secondNumber + ' : ' + Math.min(firstNumber, secondNumber));
if (firstNumber < secondNumber)
    document.getElementById("t22").innerHTML = `Минимальным числом из ${firstNumber} и ${secondNumber} является ${firstNumber}`;
else if (firstNumber > secondNumber)
    document.getElementById("t22").innerHTML = `Минимальным числом из ${firstNumber} и ${secondNumber} является ${secondNumber}`;
else
    document.getElementById("t22").innerHTML = `Числа ${firstNumber} и ${secondNumber} равны`;

console.log((firstNumber > 0 && firstNumber < 15)
    ? `Число ${firstNumber} входит в диапазон от 0 от 15`
    : `Число ${firstNumber} не входит в диапазон от 0 от 15`);
document.getElementById("t23").innerHTML = firstNumber > 0 && firstNumber < 15
    ? `Число ${firstNumber} входит в диапазон от 0 от 15`
    : `Число ${firstNumber} не входит в диапазон от 0 от 15`;

console.log((secondNumber > 0 && secondNumber < 15)
    ? `Число ${secondNumber} входит в диапазон от 0 от 15`
    : `Число ${secondNumber} не входит в диапазон от 0 от 15`);
document.getElementById("t24").innerHTML = secondNumber > 0 && secondNumber < 15
    ? `Число ${secondNumber} входит в диапазон от 0 от 15`
    : `Число ${secondNumber} не входит в диапазон от 0 от 15`;