// Операторы сравнения
console.log(2 == 2); // сравнение значений
console.log(2 === 2); // сравнения типов и значений - всегда используем этот оператор
console.log('2' == 2); // приводятся типы к числу (если в сравнении хотя бы одно число - приведение к числу)
console.log('2' === 2); // типы не равны - fasle
console.log(3 != 2); // неравенство

/**
false
- "" (пустая строка)
- 0, -0, NaN
- null, undefined
- false

Остальное true*
 */

// Унарные операторы инкремент/декримент - поддерживается префиксная и постфиксная формы
let age = 20;
age++; // age = age + 1
age--; // age = age - 1
++age;
--age;

// Конкатенация
console.log('Hi! Your age is ' + age);
console.log(`Hi! Your age is ${age++}`);
console.log(`Hi! Your age is ${--age}`);

console.log(~2);

// Взаимодействие
alert("Message");
let response = prompt("Enter smth", 'smth');
let conf = confirm();
console.log(response);
console.log(conf);

// if else
if (conf) {
    document.getElementById("response").innerHTML = response;
} else {
    document.getElementById("response").innerHTML = "Ничего не выбрано";
}

document.getElementById("ternar").innerHTML = conf ? 'accept' : 'denied';


let answers = ["елка", "ель", "елочка", "ёлка", "ёлочка"];
let userAnswer = prompt("Зимой и летом одним цветом").toLowerCase();
console.log(userAnswer);

if (!userAnswer) {
    alert("Вы ничего не ввели!");
}
function isWin(answer, answers) {
    for (let e of answers) {
        if (answer === e)
            return true;
    }
    return false;
}

alert(isWin(userAnswer, answers) ? "Ура! Угадали!" : "Не угадали!");