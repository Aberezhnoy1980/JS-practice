// Если вы обратили внимание, то все примеры были даны с функциями (object_methods.js)
// определенными через ключевое слово function, и нигде не использовалась жирная
// стрелка (fat arrow) из ES2015, давайте попробуем создать объект, у которого методы
// будут определены таким образом, и посмотрим что получится:
const Roomba = {
	model: "Romba-1",
	power: 200,
	batterySize: 2100,
	boxSize: 0.5,
	workTime: 45,
	counterOfStarts: 0,
	isFull: false,
	isObstacle: false,
	isUVLampOn: false,

	startCleaning: () => {
		this.counterOfStarts++;
		console.log(
			"I am cleaning... I have started: ",
			this.counterOfStarts,
			"times."
		);
	},
	goCharge: () => {
		console.log("I am going to charge...");
	},
	switchUVLamp: () => {
		this.isUVLampOn = !this.isUVLampOn;
		console.log(
			`UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`
		);
	},
};

console.clear();

// Roomba.startCleaning();
// Roomba.startCleaning.call(Roomba);
// Roomba.startCleaning.apply(Roomba);
// const bindedMethod = Roomba.startCleaning.bind(Roomba);
// bindedMethod();
// setTimeout(Roomba.startCleaning.bind(Roomba), 1000);

//
const Stand = {
	model: "Stand-1",
	robots: ["Romba-1", "Tango-1", "Samba-1", "Roomba-2"],
	// Метод, с использованием стрелочной функции в качестве функции обратного вызова.
	startTestingArrow: function () {
		console.log("Start testing...");
		this.robots.forEach((robot) => {
			console.log("stand: ", this.model, "is testing robot: ", robot);
		});
	},
	// Метод, с использованием классической функции в качестве функции обратного вызова.
	startTestingClassic: function () {
		console.log("Start testing...");
		this.robots.forEach(function (robot) {
			console.log("stand: ", this.model, "is testing robot", robot);
		});
	},
};
// Stand.startTestingArrow();
// Start testing...
// stand: Stand-1 is testing robot: Roomba-1
// stand: Stand-1 is testing robot: Tango-1
// stand: Stand-1 is testing robot: Samba-1
// stand: Stand-1 is testing robot: Roomba-2
// Stand.startTestingClassic();
// Start testing...
// stand: undefined is testing robot: Roomba-1
// stand: undefined is testing robot: Tango-1
// stand: undefined is testing robot: Samba-1
// stand: undefined is testing robot: Roomba-2

// Создадим класс с методами без привязки к контексту
class RobotVacuumCleaner {
	//Свойства класса
	model = "Romba-1";
	power = 200;
	batterySize = 2100;
	boxSize = 0.5;
	workTime = 45;
	counterOfStarts = 0;
	isFull = false;
	isObstacle = false;
	isUVlampOn = false;

	// Конструктор
	constructor() {}

	// Методы
	startCleaning() {
		this.counterOfStarts++;
		console.log(
			"I am cleaning... I have been started: ",
			this.counterOfStarts,
			"times."
		);
	}

	goCharge() {
		console.log("I am going to charge...");
	}

	switchUVLamp() {
		this.isUVLampOn = !this.isUVLampOn;
		console.log(
			`UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`
		);
	}
}

const RoombaFromClass = new RobotVacuumCleaner();
console.log(RoombaFromClass.model);
console.log(RoombaFromClass.isFull);

// Отложенный вызов методов объекта.
setTimeout(RoombaFromClass.startCleaning, 1000);

RoombaFromClass.isUVLampOn = true;
setTimeout(RoombaFromClass.switchUVLamp, 2000);
setTimeout(RoombaFromClass.goCharge, 3000);

// Привязываю контекст на этапе создания класса

class TangoFromClass {
	model = "Tango-1";
	power = 300;
	batterySize = 3000;
	boxSize = 0.7;
	workTime = 60;
	counterOfStarts = 0;
	isFull = false;
	isObstacle = false;
	isUVLampOn = false;

	// Используем конструктор, чтобы привязать все методы класса к
	// контексту - текущему объекту (this).
	// Так как лень переписывать в сотый раз методы попробую их позаимствовать и привязять
	constructor() {
		this.startCleaning = this.startCleaning.bind(this);
		this.goCharge = this.goCharge.bind(this);
		this.switchUVLamp = this.switchUVLamp.bind(this);
	}

	// Методы
	startCleaning = RoombaFromClass.startCleaning;
	goCharge = RoombaFromClass.goCharge;
	switchUVLamp = RoombaFromClass.switchUVLamp;
}

const Tango = new TangoFromClass();

console.log(Tango.model);
console.log(Tango.isFull);

setTimeout(Tango.startCleaning, 4000);
setTimeout(Tango.switchUVLamp, 5000);
setTimeout(Tango.goCharge, 6000);

class Samba {
	model = "Samba-1";
	power = 200;
	batterySize = 2100;
	boxSize = 0.5;
	workTime = 45;
	counterOfStarts = 0;
	isFull = false;
	isObstacle = false;
	isUVLampOn = false;

	// Конструктор
	constructor() {}

	// Методы
	startCleaning = () => {
		this.counterOfStarts++;
		console.log(
			"I am cleaning... I have been started: ",
			this.counterOfStarts,
			"times."
		);
	};

	goCharge = () => {
		console.log("I am going to charge...");
	};

	switchUVLamp = () => {
		this.isUVLampOn = !this.isUVLampOn;
		console.log(
			`UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`
		);
	};
}

const SambaFromClass = new Samba();

console.log(SambaFromClass.model);
console.log(SambaFromClass.isFull);

setTimeout(SambaFromClass.startCleaning, 7000)
setTimeout(SambaFromClass.goCharge, 8000)
setTimeout(SambaFromClass.switchUVLamp, 9000)