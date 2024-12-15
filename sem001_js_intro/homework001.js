/**
 1. Создайте переменную, в которой будет храниться температура в градусах
Цельсия.
2. Преобразуйте значение температуры из градусов Цельсия в градусы
Фаренгейта.
3. Выведите в консоль как температуру в градусах Цельсия, так и в градусах
Фаренгейта.
 */

let celsiusTemperature = 25;
let fahrenheitTemperature = celsiusTemperature * 9 / 5 + 32;

console.log(`Temperature in Celsius id ${celsiusTemperature},\nin Fahrenheit is ${fahrenheitTemperature}`);
document.getElementById("homework").innerHTML = `Temperature in Celsius id ${celsiusTemperature},\nin Fahrenheit is ${fahrenheitTemperature}`;

/**
1. Создайте переменную name и присвойте ей свое имя.
2. Создайте переменную admin и присвойте ей значение из переменной name.
3. Выведите значение переменной admin в консоль.
 */

let userName = 'Aleksandr';
let admin = userName;
console.log(`Admin is ${admin}`);
document.getElementById("admin").innerHTML = `Admin is ${admin}`;