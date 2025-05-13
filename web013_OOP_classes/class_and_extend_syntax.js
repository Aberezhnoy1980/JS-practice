// Класс робот-пылесос.
class VacuumCleaner {
	model = "vacuum cleaner";
	counterOfStarts = 0;
	isFull = false;
	isObstacle = false;

	// Для создания конструктора, нужно создать метод constructor.
	constructor() {}

	startCleaning() {
		this.counterOfStarts++;
		// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
		console.log("I am the method of VacuumCleaner");
		console.log(
			"I am cleaning... I have been started: ",
			this.counterOfStarts,
			"times."
		);
	}

	goCharge() {
		// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
		console.log("I am the method of VacuumCleaner");
		console.log("I am going to charge...");
	}
}

// Попробуем создать экземпляр класса и посмотреть как он работает.
const BaseRobot = new VacuumCleaner();
console.log(BaseRobot.constructor);

console.log(BaseRobot.model);
BaseRobot.startCleaning();

// Расширенный класс DancingSeries. C помощью extends мы
// указываем от какого класса будем наследоваться.
class DancingSeries extends VacuumCleaner {
	// Объявляем новые свойства и переопределяем свойство model.
	model = "dancing series";
	power = 200;
	batterySize = 2100;
	boxSize = 0.5;
	workTime = 45;
	isUVLampOn = false;

	// Добавляем новый метод.
	switchUVlamp() {
		// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
		console.log("I am the method of DancingSeries");
		this.isUVLampOn = !this.isUVLampOn;
		console.log(
			`UV lamp is ${this.isUVLampOn ? "working" : "not working"}.`
		);
	}
}

const DancingRobot = new DancingSeries();

console.log(DancingRobot.__proto__);
console.log(DancingRobot.model);
DancingRobot.switchUVlamp();

// Созданный конструктор является функцией, код которой взят из конструктора.
console.log(DancingSeries === DancingSeries.prototype.constructor);
// В созданном конструкторе есть свойство prototype и оно содержит все методы.
console.log(DancingSeries.prototype);