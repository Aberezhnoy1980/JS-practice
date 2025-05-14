// Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,
// 2, 3, 4, 5, 6]
function mergeArrays(arr1, arr2) {
	return [...arr1, ...arr2];
}

// console.log(mergeArrays([1, 2, 3], [4, 5, 6]));

// Создайте функцию removeDuplicates, которая принимает
// любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в
// массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый
// результат: [1, 2, 3, 4, 5]
function removeDuplicates(...args) {
	return args.filter(
		(element, index, array) => index === array.indexOf(element)
	);
}

// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5, 3, 4, 7, 1));

// Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.
function getEventNumbers(arr) {
	return arr.filter((el) => el % 2 === 0);
}

// console.log(getEventNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение
// этих чисел.
function calculateAverage(arr) {
	return arr.reduce((acc, el) => acc + el, 0) / arr.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5, 6]));

// Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной.

function capitalizeFirstLetter(text) {
	return text
		.split(" ")
		.map((word) =>
			word.length > 1 ? word[0].toUpperCase() + word.slice(1) : word
		)
		.join(" ");
}

// console.log(capitalizeFirstLetter("привет как дела, а что"));

// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не
// напрямую.
const createCalculator = (initalValue) => {
	let value = initalValue;
	return {
		add(num) {
			value += num;
		},
		substract(num) {
			value -= num;
		},
		getValue() {
			return value;
		},
	};
};

const calculator = createCalculator(10);

// console.log(calculator.add(5));
// console.log(calculator.substract(2));
// console.log(calculator.getValue());

// Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
// Пример использования:
// const greeting = createGreeting('John');
// greeting(); // Ожидаемый результат: "Hello, John!"

const createGreeting = (userName) => {
	// return () => console.log(`Hello, ${userName}!`);
	return function () {
		console.log(`Hello, ${userName}!`);
	};
};

const greeting = createGreeting("John");

// greeting();

// Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.
// Пример использования:
// const isPasswordValid = createPasswordChecker(8);
// console.log(isPasswordValid('password')); // Ожидаемый результат: false
// console.log(isPasswordValid('secret')); // Ожидаемый результат: true
function createPasswordChecker(digitsNumber) {
	return function (password) {
		return password.length <= digitsNumber;
	};
}

const passCheck = createPasswordChecker(8);

// console.log(passCheck('123456789'));
// console.log(passCheck('12345678'));
// console.log(passCheck('12'));
// console.log(passCheck(''));

// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает
// сумму его цифр.
// Пример использования:
// console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
// console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
// + 7 + 8 + 9)
function sumDigits(number) {
    if (number < 10) {
        return number;
    }
	return (number % 10) + sumDigits(Math.floor(number / 10));
}

console.log(sumDigits(123));
console.log(sumDigits(456789));
