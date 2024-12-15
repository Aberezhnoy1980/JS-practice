// Cycles
const condition1 = 'Пользователь вводит число и на экран выводится массив чисел, \
начиначая с 1 до введенного числа';

document.getElementById("while").innerHTML = 'Цикл While';
document.getElementById("condition1").innerHTML = condition1;

function execCondition1() {
    const number = Number(prompt('Введите значение N'));

    let i = 1;
    let whileArray = [];
    while (i <= number) {
        whileArray[i - 1] = i;
        i++;
    }

    let forArray = [];
    for (let i = 1; i <= number; i++) {
        forArray[i - 1] = i;
    }

    const whileMsg = `Array filed with cycle while: ${whileArray.toString()} <br>`
    const forMsg = `Array filed with cycle for: ${forArray.toString()}`
    console.log(whileArray);
    console.log(forArray);
    document.getElementById("while.answer").innerHTML = whileMsg + forMsg;
}

document.getElementById("for").innerHTML = 'Цикл for';

function execCondition2() {
    let pass = Number(prompt('Введите пароль в числовом формате'));
    while (pass != 123) {
        pass = Number(prompt('Введите пароль в числовом формате'));
    }

    do {
        pass = Number(prompt('Введите пароль в числовом формате'));
    } while (pass != 123);

    number = parseInt(prompt('Введите любое число'));
    for (let i = 1; i <= number; i++) {
        console.log(i);
    }
}

document.getElementById("t3").innerHTML = 'Задача 3';
const condition3 = 'Вывести приветствие указанное количество раз';
document.getElementById("condition3").innerHTML = condition3;

function execCondition3() {
    const limit = parseInt(prompt('Введите количество выводов приветствия'));
    let res = [];
    const msg = 'Hello';
    for (let i = 0; i < limit; i++) {
        console.log(msg + '\n');
        res[i] = msg;
    }

    document.getElementById("t3.answer").innerHTML = res;
}

document.getElementById("t4").innerHTML = 'Задача 4';
const condition4 = 'Подсчет количество нажатий на кнопочку';
document.getElementById("condition4").innerHTML = condition4;

let count = 0;
function execCondition4() {
    alert(`Вы нажали на кнопоску ${++count} разиков`);
    console.log(count);
}

// Arrays methods
// Method push()
document.getElementById("t5").innerHTML = 'Массивы';
const condition5 = 'Добавить фамилии студентов в массив';
document.getElementById("condition5").innerHTML = condition5;

function execCondition5() {
    const students = ['a', 'b', 'c'];
    const tokens = prompt('Введите фамили студентов через пробел').split(' ');
    for (let i = 0; i < tokens.length; i++) {
        students.push(tokens[i]);
    }

    console.log(students);
    document.getElementById("t5.answer").innerHTML = students;
}

document.getElementById("t6").innerHTML = 'Задача 6';
const condition6 = 'Добавление данных о пользователе в массив';
document.getElementById("condition6").innerHTML = condition6;

function addEl(arr, el) {
    arr.push(el);
    return arr;
}

function execCondition6() {
    const users = [];
    const funcArr = [];
    const username = prompt('Ваше имя');
    const userAge = prompt('Ваш возраст');

    users.push(username);
    users.push(parseInt(userAge));
    users.push(prompt('Ваш пол'));

    console.log(users);
    console.log(addEl(addEl(addEl(funcArr, username), parseInt(userAge)), prompt('Ваш пол')));
    document.getElementById("t6.answer").innerHTML = users;
}

// Method pop()
document.getElementById("t7").innerHTML = 'Задача 7';
const condition7 = 'Извлечение последнего элемента массива с его удалением';
document.getElementById("condition7").innerHTML = condition7;

function execCondition7() {
    const students = prompt('Введите фамилии студентов через пробел').split(' ');
    const resultMessage = `Исходный массив: ${students.toString()} <br> \
    извлеченный элемент: ${students.pop()} <br> \
    конечный массив: ${students.toString()}`;

    document.getElementById("t7.answer").innerHTML = resultMessage;
}

const pathFile = 'C:/projects/bestProgject/src/images/background-image.png';
const condition8 = `Разделить строку url и получить последний фрагмент (имя файла): <br> \
${pathFile}`;
document.getElementById("t8").innerHTML = 'Задача 8';
document.getElementById("condition8").innerHTML = condition8;

function execCondition8() {
    document.getElementById("t8.answer").innerHTML = `Имя файла: ${pathFile.split('/').pop()}`;
}

// Method shift()
const condition9 = `Разделить строку url и получить первый фрагмент (имя диска): <br> \
${pathFile}`;
document.getElementById("t9").innerHTML = 'Задача 9';
document.getElementById("condition9").innerHTML = condition9;

function execCondition9() {
    let pathFileTokens = pathFile.split('/');
    document.getElementById("t9.answer").innerHTML = `Имя диска: ${pathFileTokens.shift()}`;
    console.log(`Оставшиеся элементы после применения команды shift: ${pathFileTokens}`);
}

// Method slice()
const srcArr = ['Иванов', 'Петров', 'Сидоров', 'Белкин'];
const condition10 = `Создать копию фрагмента из исходного массива, с указанием индекса первого \
элемента включительно (1) и последнего исключительно (2), для нового массива: <br> исходный массив: ${srcArr}`;
document.getElementById("t10").innerHTML = 'Задача 10';
document.getElementById("condition10").innerHTML = condition10;

function execCondition10() {
    let dstArr = srcArr.slice(1, 3);
    document.getElementById("t10.answer").innerHTML = `Копия массива: ${dstArr}`;
    console.log(`Исходный массив, после применения команды slice: ${srcArr}`);
}

// Method indexOf()
const condition11 = `Найти индекс элемента массива по его значению: <br> исходный массив: ${srcArr}`;
document.getElementById("t11").innerHTML = 'Задача 11';
document.getElementById("condition11").innerHTML = condition11;

function execCondition11() {
    const userValue = prompt('Выбирете студента: Иванов, Петров, Сидоров, Белкин');
    const arrIdx = srcArr.indexOf(userValue);
    if (arrIdx !== -1) {
        document.getElementById("t11.answer").innerHTML = `Индекс массива для cтудента ${userValue}: ${arrIdx}`;
    }
    else
        document.getElementById("t11.answer").innerHTML = `Студент ${userValue} не найден`;
}