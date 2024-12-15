/**
 * 1. Создайте объект с ключами от 1 до 7, в качестве
значений содержащий имена дней недели. Выведите на
экран “Вторник”
 */
const weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const week = {};
for (let i = 1; i <= 7; i++) {
    // i = i.toString()
    // console.log(i)
    week[i] = weekdays[i - 1];
}
// let a = 34;
// console.log(typeof(a.toString()));
// console.log(week);
/**
 * 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
Выведите на экран фамилию, имя и возраст через дефис.
 */
const user = {
    'name': 'Alex',
    'surname': 'Belkin',
    'age': 21
}
let u = '';
for (const key in user) {
    if (key != 'age')
        u += `${user[key]}-`;
    else
        u += `${user[key]}`;
}
// console.log(u);
// console.log(`${Object.values(user)[0]}-${Object.values(user)[1]}-${Object.values(user)[2]}`);
/**
 * 3. Добавьте в объект user свойство отчество, которое
пользователь должен ввести с клавиатуры
 */
// user['Отчество'] = prompt('Введите отчество');
/**
 * 4. Удалите свойство surname
 */

delete user.surname;
// console.log(user);

/**
 * 1. Даны два массива: первый с названиями дней недели, а второй - с
их порядковыми номерами:
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
С помощью цикла создайте объект, ключами которого будут
названия дней, а значениями - их номера.
1. const obj = {x: 1, y: 2, z: 3};
Переберите этот объект циклом и возведите каждый элемент
этого объекта в квадрат.
 */
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const anotherWeek = {};
for (let i = 0; i < arr1.length; i++) {
    anotherWeek[arr1[i]] = arr2[i];
}
// console.log(anotherWeek);
const obj = { x: 1, y: 2, z: 3 };
for (const k in obj) {
    // console.log(k);
    obj[k] = Math.pow(obj[k], 2)
}
// console.log(obj);


/**
 * const obj = {
        key1: {
            key1: 1,
            key2: 2,
            key3: 3,
        },
        key2: {
            key1: 4,
            key2: 5,
            key3: 6,
        },
        key3: {
            key1: 7,
            key2: 8,
            key3: 9,
        },
}
Найдите сумму элементов приведенного объекта.
 */
const anotherObj = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
let summa = 0;
// console.log(Object.values(Object.values(anotherObj)[0]));
for (const key in anotherObj) {
    console.log(Object.values(anotherObj[key]).reduce((acc, item) => acc + item, 0));
    summa += Object.values(anotherObj[key]).reduce((acc, item) => acc + item, 0)
    // summa += Object.values(anotherObj[key])[0] + Object.values(anotherObj[key])[1] + Object.values(anotherObj[key])[2];
}
console.log(summa);

// Через массивизацию
const objArray = Object.values(anotherObj).map(item => Object.values(item));
console.log(objArray);
summa = objArray.reduce((acc, key) => {
    acc + key.reduce((innerAcc, innerKey) => innerAcc + innerKey)
});

/**
 * 1. Создайте объект riddles
2. Добавьте свойства question, answer
3. создайте метод askQuestion который спрашивает у пользователя
вопрос question и сравнивает ответ с answer
4. Если ответил неверно, то в консоль выводится текст: “вы
проиграли”
5. * По желанию, создать 2 подсказки, если пользователь ответил
неверно
 */
const riddles = {
    question: 'Зимой и летом одним цветом?',
    answer: [
        'елка',
        'ель',
        'елочка',
        'ёлка',
        'ёлочка'
    ],
    askQuestion: function () {
        const userAnswer = prompt(`Отгадай загадку: ${this.question}`);
        const loseMessage = 'Вы проиграли!';
        const winMessage = 'Вы не проиграли! Гы-гы!';
        if (this.answer.indexOf(userAnswer.toLowerCase().trim()) === -1) {
            alert(loseMessage);
            console.log(loseMessage);
        } else {
            alert(winMessage);
            console.log(winMessage);
        }
    }
}

const r = riddles;
r.askQuestion();