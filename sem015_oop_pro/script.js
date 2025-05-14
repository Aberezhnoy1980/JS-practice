// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.
const MusicSeries = {
	model: "music series",
	power: 200,
	batterySize: 2100,
	boxSize: 0.5,
	workTime: 45,
	startWipe() {
		console.log("A am the methid of MusicSeries");
		console.log("A am starting to wipe the floor");
	},
};

const Blues = {
	model: "Blue",
	power: 250,
	batterySize: 2500,
	workTime: 50,
};

Object.setPrototypeOf(Blues, MusicSeries);

function getPrototypeChain(obj) {
	const prototypeChain = [];
	let currentObj = obj;

	while (currentObj != null) {
		prototypeChain.push(currentObj);
		currentObj = Object.getPrototypeOf(currentObj);
	}
	return prototypeChain;
}

const prototypeChain = getPrototypeChain(Blues);
// console.log(prototypeChain);

// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример:
// const person1 = new Person("John", 25);
// person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.
const Human = {
	// name: "",
	// age: 0,

	introduce() {
		console.log(`Меня зовут ${this.name} и мне ${this.age} лет`);
	},
};

function Person(name, age) {
	this.name = name;
	this.age = age;

	this.__proto__ = Human;
}

const person1 = new Person("John", 25);
// person1.introduce();

// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".
class Animal {
	constructor(name) {
		this.name = name;
	}

	speak() {
		console.log(`${this.name} издает звук`);
	}
}

class Dog extends Animal {
	constructor(name, breed) {
		super(name);
		this.breed = breed;
	}

	fetch() {
		console.log(`Собака ${this.name} принесла мяч`);
	}
}

const animal1 = new Animal("Животное");
// animal1.speak();

// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak();
// console.log(dog1.breed);
// dog1.fetch();

// Создайте класс Product, который будет представлять товавр в магазине.
// У товара должны ыбыть следующие свойства:
// name (строка) - наименование товара;
// price (число) - цена товара за одну единицу
// Создайте класс ShoppingCart, представляющий корзину интернет-магазина.
// Конструктор класса ShoppingCart должен принимать два параметра:
// customerName (строка) - имя покупателя
// InitialTotalCost (число) - начальная общая стоимость заказа
// (может быть равна 0, если корзина пуста)
class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}

// У класса ShoppingCart должен быть метод addItem(product, quantity),
// который позволяет добавить товар в корзину. Метод принимает два параметра:
// product(объект класса Product) - товар, который добавляется в корзину .
// quantity (число, по умолчанию 1) - количество единиц товара, которе  нужно
// добавить в корзину. Если quantity не указано, считается что добавляется
// одна единица товара
// У класса ShoppingCart должен быть метод getCurrentTotalCost(), который
// возвращает текщую общую стоимость заказа
// У класса ShoppingCart должен быть метод checkout(), который оформляет заказ
// и выводит сообщение с общей стоимостью заказа и благодарностью за покупку
// Формат вывода сообщения:
// "Заказ оформлен для {имя покупателя}. Общая стоимость заказ:
// {общая стоимость} рублей.  Спасибо за покупку!"
class ShoppingCart {
	constructor(customerName, InitialTotalCost) {
		this.customerName = customerName;
		this.TotalCost = InitialTotalCost;
        this.items = [];
		this.order = new Map();
	}

	addItem(product, quantity) {
		if (!this.order.has(product)) {
			this.order.set(product, quantity ? quantity : 1);
		} else {
			this.order.set(
				product,
				this.order.get(product) + (quantity ? quantity : 1)
			);
		}
	}

	addItem2(product, quantity = 1) {
		this.TotalCost += product.price * quantity;
		this.items.push({ product, quantity });
	}

	getCurrentTotalCost() {
		return this.order
			.entries()
			.reduce((acc, [key, value]) => key.price * value + acc, 0);
	}

	checkout() {
		console.log(
			`Заказ оформлен для ${
				this.customerName
			}. Общая стоимость заказ: ${this.getCurrentTotalCost()} рублей. Спасибо за покупку`
		);
	}
}

const products = [];
for (let i = 0; i < 5; i++) {
	products.push(new Product(`Product_${i}`, i * 50 + 100));
}

// console.log(products);

const cart = new ShoppingCart("Alex", 0);
// console.log(cart);

products.forEach((product) => cart.addItem(product));
// console.log(cart);

products.forEach((product) => cart.addItem(product));
// console.log(cart);

const product_zero = new Product("Product_zero", 10000);
cart.addItem(product_zero);
cart.addItem(product_zero, 7);
// console.log(cart);

// console.log(cart.getCurrentTotalCost());

cart.checkout();

const fashionProduct = new Product('FashionFeature', 12000);
const luxaryProduct = new Product('LuxaryAccessories', 50000)
cart.addItem2(fashionProduct, 2);
cart.addItem2(fashionProduct);
cart.addItem2(luxaryProduct);
cart.addItem2(luxaryProduct);

console.log(cart.TotalCost);
console.log(cart.items);