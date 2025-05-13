import { DancingSeries } from "./inherit_proto.js";

// Конструктор объекта робот-пылесос.
function Samba(serialNumber) {
	// Создаем свойства объекта, используя this
	this.serialNumber = serialNumber;
	this.model = "Samba-1";
	this.power = 250;
	this.batterySize = 2500;
	this.workTime = 50;

	// Ссылка на прототип
	this.__proto__ = DancingSeries;
}

// Создадим экземпляр нового объекта
const Samba1 = new Samba(1014778);

console.log(Samba1.serialNumber);
Samba1.startCleaning();

// Создадим 10 роботов пылесосов Samba, как на конвейере.
const robots = [];

for (let index = 0; index < 10; index++) {
	// Создадим экземпляр нового объекта и добавляем его в
	// массив наших роботов, каждый с уникальным серийным номером.
	robots.push(new Samba(index));
}

console.log(robots[3].serialNumber);
console.log(robots[7].serialNumber);

Samba = function (serialNumber) {
	// Создаем свойства объекта, используя this.
	this.serialNumber = serialNumber;
	this.model = "Samba-1";
	this.power = 250;
	this.batterySize = 2500;
	this.workTime = 50;
};

Samba.prototype = DancingSeries;

const Samba2 = new Samba(1014779);

console.log(Samba2.serialNumber);
Samba2.startCleaning();

export { Samba };
