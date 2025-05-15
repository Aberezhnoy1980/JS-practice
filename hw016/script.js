// Задание 1: "Получение данных о пользователе"
// Реализуйте асинхронную функцию для получения данных о пользователе с удаленного
// сервера:
// Функция getUserData
// ● Описание:
// 1. Функция принимает идентификатор пользователя (ID) в качестве
// аргумента и использует fetch для получения данных с удаленного
// сервера.
// 2. Функция возвращает промис, который разрешается с объектом данных о
// пользователе, если запрос был успешным.
// 3. Если пользователь с указанным ID не найден, промис должен быть
// отклонен с соответствующим сообщением об ошибке.
// ● Последовательность действий:
// 1. Вызовите fetch, передав URL с нужным ID пользователя.
// 2. Если ответ успешен (код 200), извлеките данные с помощью
// response.json().
// 3. Верните объект с данными о пользователе.
// 4. Если ответ не успешен, отклоните промис с сообщением об ошибке.
// Пример использования функции
// getUserData(1)
// .then(user => console.log(user))
// .catch(error => console.error(error));
const jsonplaceholderApi = "https://jsonplaceholder.typicode.com/users";
const getUserData = async (userID) => {
	const uri = new URL(`${jsonplaceholderApi}/${userID}`);
	try {
		const response = await fetch(uri);
		if (!response.ok) {
			throw new Error("User not found");
		}
		const userData = await response.json();
		return userData;
	} catch (error) {
		return Promise.reject(error.message);
	}
};

const resultEl = document.querySelector(".user-search__result");
const formElement = document.querySelector(".user-search__form");

formElement.addEventListener("submit", (event) => {
	event.preventDefault();
	const formData = new FormData(formElement);

	getUserData(formData.get("userId"))
		.then((user) => (resultEl.textContent = `User found: ${user.name}`))
		.catch((error) => error.message);
});

// Задание 2: "Отправка данных на сервер"
// Реализуйте функцию для отправки данных о пользователе на сервер:
// Функция saveUserData
// ● Описание:
// ○ Функция принимает объект с данными о пользователе и использует
// fetch для отправки данных на удаленный сервер.
// ○ Функция возвращает промис, который разрешается, если данные
// успешно отправлены.
// ○ Если запрос неуспешен, промис должен быть отклонен с
// соответствующим сообщением об ошибке.
// ● Подсказка:
// ○ Используйте метод POST и задайте заголовок Content-Type как
// application/json.
// ○ Объект с данными о пользователе необходимо сериализовать в
// JSON-строку с помощью JSON.stringify().
// Пример использования функцииconst user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };
// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.error(error);
// });
const httpbinApi = "https://httpbin.org/post";
class User {
	constructor(name, age, email) {
		this.name = name;
		this.age = age;
		this.email = email;
	}
}

const saveUserData = async (user, serverURI) => {
	const headers = new Headers();
	headers.append("Content-Type", "application/json; charset=UTF-8");

	const reqInit = {
		method: "POST",
		headers: headers,
		body: JSON.stringify(user),
	};

	const request = new Request(serverURI, reqInit);

	try {
		const response = await fetch(request);

		if (!response.ok) {
			throw new Error("Failed to save data");
		}
		const userFromServer = await response.json();
		return userFromServer;
	} catch (error) {
		return Promise.reject(error.message);
	}
};

const saveFormEl = document.querySelector(".user-save__form");
saveFormEl.addEventListener("submit", (event) => {
	event.preventDefault();
	const saveFormData = new FormData(saveFormEl);

	const user = new User(
		saveFormData.get("userName"),
		saveFormData.get("userAge"),
		saveFormData.get("userEmail")
	);

	const liEls = document.querySelectorAll(".user-save__result-item");
	saveUserData(user, httpbinApi)
		.then((response) => {
			const user = JSON.parse(response.data);
			liEls[0].textContent = `Name: ${user.name}`;
			liEls[1].textContent = `Age: ${user.age}`;
			liEls[2].textContent = `Email address: ${user.email}`;
			//     liEls.forEach(li => li.textContent = )

			// 	for (let key in user) {
			// 		liEls[0].textContent = user[key];
			// 	}
		})
		.catch((error) => {
			console.error(error);
		});
});

// Задание 3: "Изменение стиля элемента через заданное время"
// Реализуйте функцию, которая изменяет стиль элемента с задержкой:
// Функция changeStyleDelayed
// ● Описание:
// ○ Функция принимает идентификатор элемента (id) и время задержки в
// миллисекундах (delay).
// ○ После истечения времени задержки, функция должна изменить стиль
// элемента.
// Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет
// стиль элемента с id 'myElement'
const changeStyleDelayed = (delay, elementId, colorHex) => {
	setTimeout(() => {
		const targetEl = document.getElementById(elementId);
		targetEl.style.color = "lightsteelblue";
		targetEl.style.backgroundColor = colorHex;
		console.log("Style changed");
	}, delay);
};

const changeStyleFormEl = document.querySelector(".change-style__form");
const changeStyleBtn = document.querySelector(".change-style__submit");

changeStyleFormEl.addEventListener("submit", (event) => {
	const changeStyleForm = new FormData(changeStyleFormEl);
	event.preventDefault();
	const delayTime = changeStyleForm.get("delayTime") * 1000;
	const elementId = changeStyleForm.get("elementId");
	const color = changeStyleForm.get("elementColor");
	console.log(color);
	changeStyleDelayed(delayTime, elementId, color);
});
