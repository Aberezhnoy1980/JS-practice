// vra - global
// const - simple variable
// const - constanta

if (3 > 1) {
    let a = 5;
}

// console.log(a); ReferenceError: a is not defined

if (3 > 1) {
    var b = 5;
}

// console.log(b);

let result = 8;
// console.log(result);


let updatedResult = result + 2;
// console.log(updatedResult);


const GAP_SIZE = 5;
// GAP_SIZE = 3; TypeError: Assignment to constant variable.

result = 5;
let Result = 3; // not convention
// console.log(result);

/* types
трока (string) '', "", ``
число (number): -(2^53 - 1) - (2^53 - 1), NaN, Infinity, - Infifnity
булево значение (boolean): true, false
undefined
объект (object): objects, Array, Function
null
symbol
большое число (BigInt)
*/

console.log(typeof 2);
console.log(typeof "2");

let string = "Hello";
string = 'Hello';

result = 8;
let literal = `Результат ${result}`; // Результат 8
let emptyString = "";

console.log(literal);


let numberrGradeValue = 5;
let stringGradeValue = "A";
const res = numberrGradeValue - stringGradeValue; // NaN
console.log(res);


let isPassExam = true;
if (isPassExam) console.log('Поздравляю, вы сдвли экзамен!'); // Поздравляю, Вы сдали экзамен!

let isInit;
console.log(isInit); // undefined, так как переменной не задано значение

let student = {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 33,
    faculty: "Information technologies"
};

console.log(`${student.firstName} ${student['lastName']} is ${student.age} years old`)


let listOfBooks = ['Стив Макконел "Совершенный код"', 'Роберт Мартин "Чистый код"'];
console.log(listOfBooks[0])
console.log(listOfBooks.length)

const add2 = function(x) {
    return x + 2;
}

console.log(add2.toString()); // function(x)  {return x + 2;}
console.log(add2(10)); // 12

const uniqKey = Symbol();
console.log(uniqKey.toString()); // Symbol()
const uniqKey2 = Symbol('test');
const uniqKey3 = Symbol('test');
console.log(uniqKey2.toString()); // Symbol('test')
console.log(uniqKey3 == uniqKey2); // false - символы всегда создаются уникальными

let bigNumber = 63374851375010000n;
console.log(bigNumber) // 63374851375010000n