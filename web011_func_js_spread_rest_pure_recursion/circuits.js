const createCounter = () => {
	let counter = 0;
	return () => {
		return ++counter;
	};
};

// Создаем счетчик
const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2

const counter2 = createCounter();
console.log(counter1()); // 3
console.log(counter2()); // 1

// Кэширование результата
const closureFunction = () => {
	const cache = {};
	return (x) => {
		if (cache[x]) return cache[x];
		const result = x * x;
		cache[x] = result;
		return result;
	};
};


const cachePow = closureFunction();
console.log(cachePow(2)); // 4
console.log(cachePow(8)); // 64
console.log(cachePow(2)); // 4 — тут функция возьмёт значение из кеша
console.log(typeof(closureFunction));
console.log(`Это попытка взять кэш из функции, обращаясь к ней как объекту ${closureFunction.cache}`);

const closureFunction2 = () => {
	const cache = {};
	return (x) => {
		if (cache[x]) {
			console.log(`Cache value: ${cache[x]}`);
			return;
		}
		const res = x * x;
		cache[x] = res;
		console.log(`Value ${res}`);
	};
};

const cachePow2 = closureFunction2();
cachePow2(2);
cachePow2(4);
cachePow2(2);

(function () {
	const sliderTexts = ["Promo", "Brands", "Best"];
	function showSlider(texts) {
		console.log(...texts);
	}

	showSlider(sliderTexts);
})();

`Лексический контекст или лексическое окружение — это механизм в JavaScript,
который позволяет функции во время её вызова получать доступ к переменным,
константам и всему, что ей нужно. Каждый раз при вызове функции создаётся
что-то вроде объекта словаря, который записывает все значения переменных и
констант внутри функции, а также тех переменных и констант вне функции, к
которым она обращается. Посмотрим на примерах:`;
const lastName = "Petrov";
// lexical environment: { lastName: "Petrov" }
const getFullName = (firstName) => {
	// lexical environment: { lastName: "Petrov", firstName: <определяется в момент вызова функции> }
	const fullName = firstName + " " + lastName;
	// lexical environment: { lastName: "Petrov", firstName: <определяется в момент вызова функции>, fullName: <вычисляется в момент вызова функции> }
	console.log(fullName);
	// return energy;
};

getFullName("Ivan"); // Ivan Petrov
// lexical environment в момент вызова функции становится таким: { lastName: "Petrov", firstName: "Ivan", fullName: "Ivan Petrov" }

`Разберём пример, как работает лексическое окружение, чтобы лучше понять его
важность и проблематику его неправильного использования:
Напишем функцию, которая будет строить дома: создадим массив функций, при
вызове функции из каждого элемента массива должен выводиться номер дома.`;
const houses = [];

let i = 0;
while (i < 10) {
	let house = function () {
		console.log(i);
	};
	houses.push(house);
	i++;
}

houses[0]();
houses[7]();

`Для исправления такой ситуации необходимо хранить номер дома внутри блока
цикла с использованием let:`;
const houses2 = [];
i = 0;
while (i < 10) {
	let houseNumber = i; // Здесь мы создаём блочную переменную, которая сохранит значение i для конкретной итерации цикла, и именно её значение попадёт в лексическое окружение функции house.
	let house = function () {
		console.log(houseNumber);
	};
	houses2.push(house);
	i++;
}

houses2[0]();
houses2[7]();

`Или внутри функции house: - не работает пример!!!!!!`;
const houses3 = [];

i = 0;
while (i < 10) {
    let house = function () {
        let houseNumber = i;
		console.log(houseNumber);
	};
	houses3.push(house);
	i++;
}

houses3[1]();
houses3[4]();