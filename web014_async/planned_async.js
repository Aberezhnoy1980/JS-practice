console.log('Start long calculations');
for (let i = 0; i < 100000000; i++) {
const newDate = new Date(i);
}
console.log('End long calculations');
// Start long calculations
// End long calculations


let counter = 0;
const amount = 10_0000;
const timerId = setInterval(() => {
	if (counter > amount) {
		// После того как наш счетчик достигнет нужного
		// количества итераций, мы должны очистить таймер, чтобы итерации
		// больше не выполнялись.
		clearInterval(timerId);
		console.log("End long calculations");
	}

	// Добавим вывод нашего счетчика через каждые 10000 итераций,
	// чтобы видеть что наш код работает.
	if (counter % 1000 === 0) {
		console.log("working: ", counter);
	}

	const newDate = new Date(counter);
    counter++;
}, 0);

console.log('Next code');