const arr = [1, 5, 7, 9];
// console.log(Math.min(...arr));

function createCounter() {
	let counter = 0;

	const cnt = {
		incr: function () {
			console.log(++counter);
		},
		decr: function () {
			console.log(--counter);
		},
	};

	return cnt;
}

let counter1 = createCounter();
let counter2 = createCounter();

counter1.incr();
counter1.incr();
counter1.incr();
counter1.decr();


counter2.decr();
counter2.incr();
counter2.incr();

// function findElementByClass(rootElement, className) {
//     targetElement = rootElement.querySelector(className);
// }