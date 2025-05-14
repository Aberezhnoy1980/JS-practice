// Задание No1
// Нахождение минимального числа в массиве
// Дан массив const arr = [1, 5, 7, 9]. Используя метод Math.min и оператор
// распространения (spread operator), найдите минимальное число в массиве. Решение
// должно быть написано в одной строке.
// Подсказка: Используйте оператор распространения Spread (...) для преобразования
// массива в аргументы функции

const arr = [1, 5, 7, 9, -12];
console.log(`Min is ${Math.min(...arr)}`);

// Задание No2
// Создание счетчика
// Напишите функцию createCounter, которая создает счетчик и возвращает объект с
// тремя методами: increment, decrement и getValue. Метод increment должен
// увеличивать значение счетчика на 1, метод decrement должен уменьшать значение
// счетчика на 1, а метод getValue должен возвращать текущее значение счетчика.
// Значение счетчика должно быть доступно только через методы объекта, а не
// напрямую.
// Подсказка: Функция createCounter возвращает объект с методами для увеличения
// и уменьшения счетчика. Приватная переменная count доступна только через методы
// объекта, что обеспечивает инкапсуляцию данных.
function createCounter() {
	let counter = 0;
	return {
		increment() {
			++counter;
		},
		decrement() {
			--counter;
		},
		getValue() {
			return counter;
		},
	};
}

const cntr = createCounter();
for (let i = 0; i < 10; i++) {
    cntr.increment()
}

console.log(cntr.getValue());

for (let j = 0; j < 5; j++) {
    cntr.decrement();
}

// console.log(cntr.getValue());

// Задание No3
// Рекурсивный поиск элемента по классу
// Напишите рекурсивную функцию findElementByClass, которая принимает корневой
// элемент дерева DOM и название класса в качестве аргументов и возвращает первый
// найденный элемент с указанным классом в этом дереве.
// Подсказка: Функция findElementByClass рекурсивно обходит дерево DOM, начиная
// с корневого элемента. Она проверяет каждый элемент на наличие указанного класса
// и, если находит совпадение, возвращает его. Если элемент с нужным классом не
// найден, функция возвращает null.

function findElementByClass(rootElement, className) {
    
    if (rootElement.classList.contains(className)) return rootElement;
    
    for (let i = 0; i < rootElement.children.length; i++) {
        const found = findElementByClass(rootElement.children[i], className)
        if (found) return found;
    }
    return null;
}

const rootEl = document.querySelector('.root');
const targetEl = findElementByClass(rootEl, 'inner__li-item-link');
console.log(targetEl.textContent = 'Найден');

