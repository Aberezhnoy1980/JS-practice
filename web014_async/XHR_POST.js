// XHR POST запрос
// Создадим объект FormData.
const formData = new FormData();

// Добавим в него два наших поля.
formData.append("name", "Slava");
formData.append("surname", "Belkin");
// Для создания запроса сначала нужно создать объект
// XMLHttpRequest, конструктор вызывается без аргументов.
const xhr_post = new XMLHttpRequest();
// Открываем запрос. Первый аргумент это метод (GET, POST ...),
// второй адрес, куда нужно отправить запрос. У данного метода есть
// еще аргументы, которые мы рассмотрим позже. В данном случае мы
// создаем POST запрос на тестовый сервер https://httpbin.org/post.
xhr_post.open("POST", "https://httpbin.org/post");

// Set type
xhr_post.responseType = 'json';
// Отправляем запрос на сервер. Метод send() может принимать
// один аргумент - это тело запроса, если оно есть. Отправляем POST
// запрос, поэтому передаем в качестве аргумента объект FormData.
xhr_post.send(formData);

// После отправки запроса нам нужно использовать методы
// слушатели, которые будут асинхронно выполнены при наступлении
// соответствующего события. Это методы onload, onerror и
// onprogress - мы сами определяем их функции.
// onload - будет вызван, когда сервер вернет ответ. Это может
// быть положительный ответ сервера с кодом 200 (все хорошо), так и
// ошибка, например страница не найдена, тогда код будет 404. Мы
// должны обрабатывать такие ситуации сами.
xhr_post.onload = function () {
	if (xhr_post.status != 200) {
		console.log(`Error: ${xhr_post.status}: ${xhr_post.statusText}`);
	} else {
        const post_resp = xhr_post.response;
        const user = post_resp.form;
		console.log(`User\nname: ${user.name}\nsurname: ${user.surname}`);
		document.querySelector(".post_resp").innerHTML = `User<br>name: ${user.name}<br>surname: ${user.surname}`;
	}
};

// onprogress - функция будет вызываться пока запрос находится в
// процессе, и позволяет отслеживать ход процесса отправки запроса
// и получения ответа от сервера. Бывает полезна при отладке
// сложных запросов.
xhr_post.onprogress = function (event) {
	console.log(`Get from server: ${event.loaded} bytes`);
};

// onerror - функция будет вызываться если в запросе пошло
// что-то не так. НАпример нет соединения с сервером или ошибка в
// адресе запроса.
xhr_post.onerror = function () {
	console.log("Request error");
};
