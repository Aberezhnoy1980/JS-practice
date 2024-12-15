// Seminar
// Task 1
/* 
1. Создайте массив с элементами 1, 2, 3. Выведите на экран
каждый из этих элементов.
2. Создайте массив с произвольными элементами.
Выведите на экран количество элементов в этом
массиве.
3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо
первого элемента число 1, вместо второго - 2, вместо
третьего - 3.
*/
const arr1 = [1, 2, 3];
for (let i = 0; i < arr1.length; i++) {
    // console.log(arr1[i]);
}

const arr2 = [1, 2, 4, 3, 5, 56, 7, 8, 98, 9, 12, 44];
// console.log(arr2.length);

const arr3 = ['a', 'b', 'c'];
for (let i = 0; i < arr3.length; i++) {
    // console.log(arr3[i] = i + 1);
}

/*
1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++
увеличьте каждый элемент массива на единицу.
2. Узнайте длину следующего массива:
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
1. Пусть дан такой массив:
const arr = [1, 2, 3];
Добавьте ему в конец элементы 4 и 5.
1. Создайте произвольный массив из 5 элементов, Удалите из него два
элемента. Проверьте, какое станет значение свойства length после
этого.
*/

const arr4 = [1, 2, 3];
for (let i = 0; i < arr4.length; i++) {
    arr4[i] = ++arr4[i];
    // console.log(arr4[i]);
}

const arr5 = [];
arr5[3] = 'a';
arr5[8] = 'b';

// console.log(arr5.length);
// console.log(arr5.toString());
for (let i = 0; i < arr5.length; i++) {
    // console.log(arr5[i]);
}

arr1.push(4, 5);
// console.log(arr1.toString());

let arr6 = [1, 3, 5, 7, 9, 12];
delete arr6[4]; // оставит undefined
delete arr6[1];
// console.log(arr6.toString(), '\n', arr6.length);
arr6.pop(); // удалит последний
arr6.pop();
// console.log(arr6.toString(), '\n', arr6.length);
arr6.splice(1, 1); // удалит любой по индексу (и количество можно задать) и ничего не оставит
// console.log(arr6.toString(), '\n', arr6.length);
arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 1);
arr6.splice(3, 1);
// console.log(arr6.length, arr6.toString());

/*
1. С помощью цикла for выведите в консоль числа от 11 до 33.
2. С помощью цикла for выведите в консоль нечетные числа в
промежутке от 1 до 99.
3. С помощью цикла for выведите в консоль числа от 100 до 0.
4. Дано число num с неким начальным значением. Умножайте его на 3
столько раз, пока результат умножения не станет больше 1000.
Какое число получится? Посчитайте количество итераций,
необходимых для этого.
*/

for (let i = 11; i < 34; i++) {
    // console.log(i);
}

for (let i = 1; i < 100; i++) {
    // if (i % 2 !== 0) console.log(i);
}

for (let i = 100; i >= 0; i--) {
    // console.log(i);
}

let num = 20;
let iterCount = 0;

while (num < 1000) {
    num *= 3;
    iterCount++;
}
// console.log(`Count of multi iteration is ${iterCount}`);

/*
Дан массив const arr = [2, 5, 9, 15, 1, 4];
Выведите в консоль те элементы массива, которые больше 3-х, но
меньше 10.
1. Найдите сумму четных чисел от 2 до 100.
2. Дан массив const = [2, 5, 9, 3, 1, 4];
Найдите сумму элементов этого массива.
1. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
2. Дан массив с числами. const = [2, 5, 9, 0, 3, 1, 4]; Запустите цикл,
который будет по очереди выводить элементы этого массива в
консоль до тех пор, пока не встретится элемент со значением 0.
После этого цикл должен завершить свою работу.
*/
const arr7 = [2, 5, 9, 15, 1, 4];
for (let i = 0; i < arr7.length; i++) {
    // if (arr7[i] > 3 && arr7[i] < 10) console.log(arr7[i]);
}

let sum = 0;
for (let i = 2; i <= 100; i++) {
    if (i % 2 === 0) sum += i;
}
// console.log(sum);

const arr8 = [2, 5, 9, 3, 1, 4];
let arrSum = 0;
for (let i = 0; i < arr8.length; i++) {
    arrSum += arr8[i];
}
// console.log(arrSum);

let str = '-';
for (let i = 1; i <= 9; i++) {
    str += i + '-';
}
// console.log(str);

let arr9 = [];
for (let i = 0; i < 9; i++) {
    arr9[i] = i + 1;
}
// console.log(arr9.toString(), '\n', '-' + arr9.join('-') + '-');

// console.log(arr8.join('-'));

const arr10 = [2, 5, 9, 0, 3, 1, 4];
// for (let i = 0; i < arr10.length; i++) {
// if (arr10[i] !== 0)
//     console.log(arr10[i]);
// else
//     break;

// let flag = false;
// arr10[i] !== 0 ? console.log(arr10[i]) : flag = true;
// if (flag) break;
// }

/*
1. Пусть у нас дан массив состоящий из 10 элементов с
произвольными числами. Давайте переберем его циклом и числа,
которые делятся на 2, возведем в квадрат и выведем в консоль, а
числа, которые делятся на 3, возведем в куб и выведем в консоль.
2. С помощью двух вложенных циклов выведите на экран следующую
строку:
3. Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
Подсчитайте количество цифр 3 в этом массиве.
1. Дан следующий массив:
[1, 2, 3, 4, 5]
С помощью метода splice преобразуйте массив в следующий:
[1, 4, 5]
*/

// const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i <  arr11.length; i++) {
//     if (arr11[i] % 2 === 0) console.log(Math.pow(arr11[i], 2));
//     if (arr11[i] % 3 === 0) console.log(Math.pow(arr11[i], 3));
// }

//
const arr12 = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let threeCount = 0;
for (let i = 0; i < arr12.length; i++) {
    if (arr12[i] === 3) threeCount++;
}
// console.log(threeCount);

const arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 2);
// console.log(arr13);

// Homework
/*
Задание 1
Описание задачи: Используя цикл for, выведите в консоль 11 строк, где каждая
строка содержит индекс и описание числа (0 - это ноль, 1 - нечетное число, 2 - четное
число и т.д.).
*/

// for (let i = 0; i < 11; i++) {
//     if (i === 0) console.log(`${i} - this is zero`);
//     else if (i % 2 ===  0) console.log(`${i} - this is even number`);
//     else console.log(`${i} - this is odd number`);
// }

/*
Задание 2
Описание задачи: Имеется массив [1, 2, 3, 4, 5, 6, 7]. Необходимо удалить
элементы 4 и 5, чтобы получить массив [1, 2, 3, 6, 7].
*/

const arr14 = [1, 2, 3, 4, 5, 6, 7];
arr14.splice(3, 2);
// console.log(arr14.toString());

/*
Задание 3
Описание задачи:
1. Сгенерируйте массив из 5 случайных цифр от 0 до 9.
2. Рассчитайте сумму элементов массива.
3. Найдите минимальное число в массиве.
4. Определите, есть ли в массиве число 3.
*/

const arrRand = [];
let isThree = false;
sum = 0;
let min = Infinity;
for (let i = 0; i < 5; i++) {
    arrRand[i] = Math.round(Math.random() * 10);
    if (arrRand[i] === 3) isThree = true;
    if (arrRand[i] < min) min = arrRand[i];
    sum += arrRand[i];
}
let resMsg = `Array ${arrRand.toString()} contains number "3" - ${isThree}, minimum is ${min}, sum of elements is ${sum}`;
// console.log(resMsg);

/*
Задание 4 Необязательное задание
Описание задачи: Используя цикл for, выведите в консоль "горку" из символов x с 20
рядами.
*/
let ndarr = [];
for (let i = 0; i < 20; i++) {
    ndarr[i] = [];
    for (let j = 0; j <= i; j++) {
        ndarr[i][j] = 'x';
    }
    console.log(ndarr[i].join(' '));
}

// Alt
for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
}