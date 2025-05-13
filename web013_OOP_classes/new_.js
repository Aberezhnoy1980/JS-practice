import { Samba } from "./constructors.js";
import { DancingSeries } from "./inherit_proto.js";

// Наша реализация оператора new через функцию createObject.
function createObject(constructor) {
	// Создаем новый объект
	const obj = {};

	// Установим новому объекту прототипом прототип функции-конструктора
	Object.setPrototypeOf(obj, constructor.prototype);

	// Вызовем функцию-конструктор, передав ей как this
	// созданный на шаге 1 объект, и передадим остальные аргументы,
	// если они были переданы в createObject
	const argsArray = Array.prototype.slice.apply(arguments);
	const result = constructor.apply(obj, argsArray.slice(1));

	// Вернем новый объект, если конструктор вернул примитивное
	// значение или undefined, иначе вернем то, что вернул
	// конструктор.
	if (
		!result ||
		typeof result === "string" ||
		typeof result === "number" ||
		typeof result === "boolean"
	) {
		return obj;
	} else {
		return result;
	}
}

// Создадим экземпляр нового объекта
const Samba3 = createObject(Samba, 1014780);

// Проверим установку свойств в конструкторе.
console.log(Samba3.serialNumber);

// Проверим, что прототип установился корректно, и мы можем 
// вызывать методы из родительских объектов.
console.log(Samba3.__proto__);
Samba3.startCleaning();

// Проверим присвоение конструктора.
console.log(Samba3.constructor);

// Свойство __proto__ объекта и свойство prototype у функции
// конструктора это не одно и то же. Свойство __proto__ есть у
// экземпляра объекта, и оно позволяет находить родителей объекта,
// свойство prototype выполняет служебную функцию при создании
// экземпляра объекта через оператор new.
// Посмотрите на пример кода, который расставит точки на «i»
console.log(Samba3.__proto__);
console.log(Samba3.prototype);
console.log(Samba3.__proto__ === Samba.prototype);

// Проверить, что мы подаем в параметры new
// const Samba5 = {
//     // Обновляем свойства под конкретную модель.
//     model: "Samba-1",
//     power: 200,
//     batterySize: 2500,
//     workTime: 50,

//     // Ссылка на прототип родителя
//     __proto__: DancingSeries,
// };

// const Samba4 = createObject(Samba5, 1014781);

// console.log(Samba4.model);
// Samba4.startCleaning();

// console.log(Samba4.__proto__);
// console.log(Samba4.constructor);
// console.log(Samba4.prototype);