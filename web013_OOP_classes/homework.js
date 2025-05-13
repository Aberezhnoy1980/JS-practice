class Employee {
	name;
	constructor(name) {
		this.name = name;
	}

	displayInfo() {
		console.log(`Должность: employee\nИмя: ${this.name}`);
	}
}

class Manager extends Employee {
	departament;

	constructor(name, departament) {
		super(name);
		this.departament = departament;
	}
	displayInfo() {
		console.log(
			`Должность: manager\nИмя: ${this.name}\nОтдел: ${this.departament}`
		);
	}
}

const employee = new Employee("John Smith");
employee.displayInfo();

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();

class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}

	getPrice() {
		return this.price;
	}
}

class Order {
	orderNumber;
	products;

	constructor(orderNumber) {
		this.orderNumber = orderNumber;
		this.products = [];
	}

	addProduct(product) {
		this.products.push(product);
	}

	getTotalPrice() {
		const totalPrice = this.products.reduce(
			(acc, product) => acc + product.getPrice(),
			0
		);
		console.log(`Общая стоимость заказа: ${totalPrice}`);
	}
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

order.getTotalPrice();

order.addProduct(new Product("Airplane", 18000));
order.getTotalPrice();
