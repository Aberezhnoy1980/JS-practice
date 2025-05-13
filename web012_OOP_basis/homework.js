class Book {
	title;
	author;
	pages;

	constructor(title, author, pages) {
		this.title = title;
		this.author = author;
		this.pages = pages;
	}

	displayInfo = () => {
		console.log(
			`Название книги: ${this.title}\nАвтор: ${this.author}\nКоличество страниц: ${this.pages}`
		);
	};
}

// const Book1 = new Book("Робинзон Крузо", "Даниель Дефо", 112);
// const Book2 = new Book("Чистая архитектура", "Роберт Мартин", 300);

// setTimeout(Book1.displayInfo, 1000);
// setTimeout(Book2.displayInfo, 2000);

class Student {
	name;
	age;
	grade;

	constructor(name, grade, age) {
		this.name = name;
		this.grade = grade;
		this.age = age;
	}

	displayInfo = () => {
		console.log(
			`Имя: ${this.name}\nГрейд: ${this.grade}\nВозраст: ${this.age}`
		);
	};
}

const ivan = new Student("Ivan", 5, 21);
const sergey = new Student("Sergey", 8, 24);
const artemiy = new Student("Art", 2, 19);

const students = [];
students.push(ivan);
students.push(sergey);
students.push(artemiy);

students.forEach((student) => {
	setTimeout(student.displayInfo, 1000);
});
