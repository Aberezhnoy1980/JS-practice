// Создайте функцию delayedMessage(message, delay), которая
// принимает аргументы message (строка) и delay (число). Функция
// должна выводить заданное сообщение в консоль через указанную
// задержку.
function delayedMessage(message, delay) {
	setTimeout(() => console.log(message), delay);
}

// 2. Вызовите функцию delayedMessage() три раза с разными
// сообщениями и задержками. Например:
// delayedMessage("Сообщение 1", 2000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 3000);

// 3. После вызова всех функций delayedMessage(), добавьте сообщение
// вида "Конец программы" с помощью console.log().
// console.log('Конец программы');

// У вас есть список задач, которые необходимо выполнить в определенном порядке. Каждая
// задача должна быть выполнена через определенный промежуток времени, заданный в
// миллисекундах. Вам необходимо написать функцию, которая принимает список задач и
// интервал времени, а затем выполняет каждую задачу через определенный промежуток
// времени.
const tasks = [
	{ name: "task 1", time: 1000 },
	{ name: "task 2", time: 2000 },
	{ name: "task 3", time: 3000 },
	{ name: "task 4", time: 4000 },
	{ name: "task 5", time: 5000 },
];

function taskSheduler(tasks, timeInterval) {
	tasks.forEach((task) => {
		setTimeout(() => {
			console.log(task.name);
		}, task.time);
	});
}

// taskSheduler(tasks, 3000);

// Напишите программу, которая загружает данные с сервера с использованием
// объекта XMLHttpRequest
// 1. Создайте функцию loadData(url), которая принимает аргумент url (строка)
// - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с помощью
// new XMLHttpRequest().
// 3. Зарегистрируйте обработчик события onreadystatechange, который будет
// вызываться при изменении состояния запроса. Проверьте, если успешно
// выполнен запрос и успешный статус ответа сервера, то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).
// 4. Откройте запрос с помощью xhr.open("GET", url, true).
// 5. Отправьте запрос на сервер.
const url = "https://api.github.com/users/octocat";
function loadData(url) {
	const xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4 && xhr.status === 200) {
			console.log("Получено!\n", xhr.responseText);
		}
	};

	xhr.open("GET", url, true);
	xhr.send();
}

// loadData(url);

// Переписать код с XMLHttpRequest на fetch.
async function loadDataFetch(url) {
	const response = await fetch(url);
	const data = await response.json();

	console.log(data);
}

const listEl = document.querySelector("ul");
const sortBtn = document.createElement("button");
sortBtn.type = "button";
sortBtn.classList.add("button");
sortBtn.textContent = "Сортировать";
// sortBtn.style.backgroundColor = 'lightblue';
// sortBtn.style.color = 'blue';
sortBtn.style.borderRadius = "5px";
sortBtn.style.padding = "10px 30px";
sortBtn.style.fontSize = "1.2rem";
sortBtn.style.cursor = "pointer";

document.querySelector(".context").appendChild(sortBtn);

const renderUserList = (users) => {
	users.forEach((user) => {
		const listItemEl = document.createElement("li");
		listItemEl.textContent = user.name;
		listEl.appendChild(listItemEl);
	});
};

const clearUserList = () => {

    const userListItems = [...document.querySelector('ul').children];
    userListItems.forEach(item => item.remove());
}

const sortUsersByName = (users) => {
	const sortedUsers = users.sort((a, b) => {
		const nameA = a.name.toLowerCase();
		const nameB = b.name.toLowerCase();
		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	});
    clearUserList();
	renderUserList(sortedUsers);
};

fetch("https://jsonplaceholder.typicode.com/users")
	.then((result) => {
		if (result.ok) {
			return result.text();
		}
		throw new Error("Error smth bad");
	})
	.then((data) => {
		// console.log(typeof JSON.parse(data));
		const users = JSON.parse(data);
		renderUserList(users);
		sortBtn.addEventListener("click", (e) => sortUsersByName(users));
	})
	.catch((err) => {
		console.error(`To many errors ${err.message}`);
	});

// loadDataFetch(url);

// Вы разрабатываете простой веб-интерфейс для отображения списка
// пользователей с сервера и возможности сортировки этих пользователей по
// имени. У вас уже есть функциональность для получения списка пользователей
// с сервера и отображения их в виде списка на странице.
// Ваша задача - реализовать сортировку пользователей по имени и добавить
// кнопку, при нажатии на которую список пользователей будет автоматически
// сортироваться по имени.
const testData = [1, 2, 3];
testData.sort((a, b) => a - b);
