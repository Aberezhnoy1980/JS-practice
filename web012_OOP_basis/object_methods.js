// Объект робот пылесос
const Roomba = {
	// Есть негласное правило называть объекты в алгоритмах с большой буквы.
	// Обычно сначала объявляют свойства объекта.
	model: "Romba-1",
	power: 200,
	batterySize: 2100,
	boxSize: 0.5,
	workTime: 45,
	counterOfStarts: 0,
	isFull: false,
	isObstacle: false,
	isUVLampOn: false,

	// После свойств объявляют его методы
	startCleaning: () => {
		this.counterOfStarts++;
		console.log(
			"I am cleaning... I have started: ",
			this.counterOfStarts,
			"times."
		);
	},
	goCharge: function () {
		console.log("I am going to charge...");
	},
	switchUVLamp: function () {
		this.isUVLampOn = !this.isUVLampOn;
		console.log(
			`UV lamp is ${this.isUVLampOn ? "working" : "not wworking"}.`
		);
	},
};

// Взаимодействие с объектом
console.log(Roomba.model); // "Romba-1"
console.log(Roomba.isFull); // false

// Вызов методов объекта
Roomba.startCleaning(); // 'I am cleaning... ...times'

// Установим свойство объекта isUVLampOn в true,
// чтобы подемонстрировать результат равботы метода switchUVLamp
Roomba.isUVLampOn = true;

// Результат вызова следующего метода зависит от значения,
// хранящегося в свойстве объекта, а также от того как этот
// метод был вызван (об этом поговорим чуть ниже).
Roomba.switchUVLamp(); // 'UV lamp is not working'

Roomba.goCharge(); // 'I am going to charge...'

// Работа с this
const checkThis = function () {
	console.log(this);
};

// checkThis();

const checkThisInObject = {
	testProperty: true,
	checkThis: function () {
		console.log(this);
	},
};

checkThisInObject.checkThis(); // {testProperty: true, checkThis: ƒ}

// Одалживание метода
// Еще один объект робота пылесоса
const Tango = {
	model: "Tango-1",
	power: 300,
	batterySize: 3200,
	boxSize: 0.7,
	workTime: 60,
	counterOfStarts: 0,
	isFull: false,
	isObstacle: false,
	isUVLampOn: false,

	// После свойств объявляют его методы. А так как методы у
	// новой модели такие же как и у старой, давайте позаимствуем их у
	// объекта Roomba.
	startCleaning: Roomba.startCleaning,
	goCharge: Roomba.goCharge,
	switchUVLamp: Roomba.switchUVLamp,
};

console.log(Tango.model);
console.log(Tango.isFull);

Tango.startCleaning();
Tango.isUVLampOn = true;
Tango.switchUVLamp();
Tango.goCharge();

// Еще объект
const Samba = {
	model: "Samba",
	power: 250,
	batterySize: 2500,
	boxSize: 0.5,
	workTime: 50,
	counterOfStarts: 0,
	isFull: false,
	isObstacle: false,
	isUVLampOn: false,
	// На этот раз мы не будем создавать методы в объекте, мы
	// постараемся их заимствовать непосредственно перед использованием.
};

console.log(Samba.model);
console.log(Samba.isFull);

// Одолжим методы из объекта Roomba.
Samba.startCleaning = Roomba.startCleaning;
Samba.switchUVLamp = Roomba.switchUVLamp;
Samba.goCharge = Roomba.goCharge;

// Вызываю
Samba.startCleaning();

Samba.isUVLampOn = true;
Samba.switchUVLamp();
Samba.goCharge();

console.log(Roomba.model);
console.log(Roomba.isFull);

setTimeout(Roomba.startCleaning, 1000);
Roomba.isUVLampOn = true;

setTimeout(Roomba.switchUVLamp, 2000);
setTimeout(Roomba.goCharge, 3000);

setTimeout(function () {
	Roomba.startCleaning();
}, 1000);
setTimeout(function () {
	Roomba.switchUVLamp();
}, 2000);
setTimeout(function () {
	Roomba.goCharge();
}, 3000);

// Call, apply and bind
console.clear();

console.log(Roomba.model);
console.log(Roomba.isFull);

// Вызов метода объекта через call с явной передачей объекта
// робота-пылесоса в качестве контекста.
Roomba.startCleaning.call(Roomba);
// Тут этот пример не очень показателен, т.к. Мы и так имели
// доступ к объекту, а внутри setTimeout использовать call возможно
// только обернув все это в анонимную функцию, но тоже бессмысленно,
// потому что тогда мы снова имеем доступ к объекту, как видели в
// прошлом примере. Но мы можем передать в call другой объект и
// увидеть что функция вызывается в контексте другого объекта:
// Создадим фиктивный объект робота, который содержит только одно
// свойство, необходимое для работы функции и сразу же зададим ему
// первоначальное значение, отличное от того, которое задано у
// робота, для наглядности.
const NotARobot = {
	counterOfStarts: 10,
};

Roomba.startCleaning.call(NotARobot);
// Пример использования метода apply, для вызова функции с
// передачей в качестве контекста объекта notARobot и передачей в
// неё аргументов arg1, arg2, arg3.
// Roomba.startCleaning.apply(NotARobot, [arg1, arg2, arg3]); // I am cleaning... I have been started: 11 times.

setTimeout(console.clear, 3500);

console.log(Roomba.model);
console.log(Roomba.isFull);

// В setTimeout мы передаем не просто наш метод, а функцию,
// которая привязана к нашему объекту. Метод bind возвращает новую
// функцию, с уже привязанным контекстом, именно она вызывается по
// истечении времени.
setTimeout(Roomba.startCleaning.bind(Roomba), 3700);
Roomba.isUVLampOn = true;
setTimeout(Roomba.switchUVLamp.bind(Roomba), 4000);
setTimeout(Roomba.goCharge.bind(Roomba), 4200);
