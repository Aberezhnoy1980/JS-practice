// Объект робот-пылесос.
const VacuumCleaner = {
	model: "vacuum cleaner",
	counterOfStarts: 0,
	isFull: false,
	isObstacle: false,

	startCleaning: function () {
		this.counterOfStarts++;
		// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
		console.log("I am the method of VacuumCleaner");
		console.log(
			"I am cleaning... I have been started: ",
			this.counterOfStarts,
			"times."
		);
	},

	goCharge: function () {
		console.log("I am the method of VacuumCleaner");
		console.log("I am going to charge...");
	},
};

// Объект робот-пылесос.
const DancingSeries = {
	// Объявляем новые свойства и переопределяем свойство model.
	model: "dancing series",
	power: 200,
	batterySize: 2100,
	boxSize: 0.5,
	workTime: 45,
	isUVLampOn: false,

	// Добавляем новый метод
	switchUVLamp: function () {
		// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
		console.log("I am the method of DancingSeries");
		this.isUVLampOn = !this.isUVLampOn;
		console.log(
			`UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`
		);
	},

	// Делаем ссылку на прототип от родителя
	__proto__: VacuumCleaner,
};

// Объект робот-пылесос.
const Samba = {
	// Обновляем свойства под конкретную модель.
	model: "Samba-1",
	power: 200,
	batterySize: 2500,
	workTime: 50,

	// Ссылка на прототип родителя
	__proto__: DancingSeries,
};

// Обращение к свойствам объекта.
console.log(Samba.model);
console.log(Samba.isFull);

Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'

Samba.isUVLampOn = true;
Samba.switchUVLamp();
// I am the method of DancingSeries
// 'UV lamp is not working.'

Samba.goCharge();
// I am the method of VacuumCleaner
// 'I am going to charge...'

const Djaiv = {
	model: "Djaiv-1",
	power: 250,
	batterySize: 2500,
	workTime: 50,

	// Переопределим метод startCleaning:
	startCleaning: function () {
		this.counterOfStarts++;
		console.log("I am the method of Djaiv");
		console.log(
			"I am Djaiv, and I am cleaning... I have been started: ",
			this.counterOfStarts,
			"times."
		);
	},
	// Ссылка на родителя
	__proto__: DancingSeries,
};

Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'

Djaiv.startCleaning();
// I am the method of Djaiv
// I am Djaiv, and I am cleaning... I have been started: 1 times.

// Получим прототип для объекта Djaiv.
const DjaivProto = Object.getPrototypeOf(Djaiv);
console.log(DjaivProto.model); // dancing series

const DjaivProtoProto = Object.getPrototypeOf(DjaivProto);
console.log(DjaivProtoProto.model); // vacuum cleaner

const DjaivProtoProtoProto = Object.getPrototypeOf(DjaivProtoProto);
console.log(DjaivProtoProtoProto); // [object Object] [Object: null prototype] {}

const MusicSeries = {
	model: "music series",
	power: 200,
	batterySize: 2100,
	boxSize: 0.5,
	workTime: 45,

	// Добавляем новый метод
	startWipe: function () {
		console.log("I am the method of MusicSeries");
		console.log("I am starting to wipe the floor...");
	},

	// Ссылка на родителя
	__proto__: VacuumCleaner,
};

const Blues = {
	model: "Blues-1",
	power: 250,
	batterySize: 2500,
	workTime: 50,
};

// Установим прототип для робота
Object.setPrototypeOf(Blues, MusicSeries);

function callMethod(obj) {
	if (Object.getPrototypeOf(obj).model === "dancing series") {
		obj.startCleaning();
	} else if (Object.getPrototypeOf(obj).model === "music series") {
		obj.startWipe();
	} else console.log("Робот не имеет функций или это не робот");
}

callMethod(Djaiv);
callMethod(Blues);


export { DancingSeries };