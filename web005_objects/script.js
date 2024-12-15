// document.getElementById("header").innerHTML = 'Вебинар объекты';

// Создание объекта
const car = {
    make: 'Audi',
    model: 'A5',
    year: 2023,
    color: 'red',
    passengers: 2,
    power: 249
};
// console.log(car.model);
car.power = 350;

const product = {
    name: 'Стол',
    productPrice: 2000
};
// console.log(product);

const productNew = {
    productImg: 'photo.png',
    productText: 'Очень крутой стол'
};

// Записали в перменнуую (внешнюю глобальную) значение свойства объекта
let text = productNew.productText;
// console.log(text);

// Добавили поле (свойство)
productNew.link = 'product/linkname.html';
// console.log(productNew);

// Удалили поле
delete productNew.productText;
// console.log(productNew);

// Меняем значение поля объекта
productNew.link = 'catalog/linkname.html';
// console.log(productNew);

for (let p in product) {
    // console.log(p);
    // console.log(product[p]);
}

// const arr = [1, 2, 3];
// arr[0] = 10;
// console.log(arr);
// console.log(Object.keys(product));
// console.log(Object.entries(product)[0][1]);
// console.log(Object.keys(product).indexOf('productPrice'))
// console.log(Object.keys(product)[1]);
// Object.keys(product)[1] = 'price';
// Object.defineProperty(product, 'productPrice', price)
// console.log(Object.keys(product));
// console.log(product);

delete product.productPrice;
product.price = 2000;

let productSale = product;
// console.log(productSale);

productSale.price = 1500;
// console.log(`Это скидка ${productSale}`);

let newProduct = product;
newProduct.text = 'Description';
// console.log(product);
// console.log(productSale);
// console.log(newProduct);

// Изменение объектов функциями
function haveRoadTrip(myCar, distance) {
    // myCar.odometer = 1000;
    myCar.odometer += distance;
}
haveRoadTrip(car, 150);
// console.log(typeof(car.odometer));
// console.log(car.odometer);
haveRoadTrip(car, 200);
// console.log(car.odometer);
haveRoadTrip(car, 600);
// console.log(car.odometer);

const newCar = {
    name: 'BMW',
    color: 'Black'
};

haveRoadTrip(newCar, 1500);
// console.log(newCar);

// console.log(car);
car.odometer = 0;

// Добавим метод в объект
car.startEngine = function() {
    console.log('Engine started');
};

// console.log(car);

// car.startEngine();

product.count = 10;
product.buy = function(amount) {
    if ((this.count - amount) > 0) {
        console.log(`Вы купили ${amount} единиц данного товара. Остаток товара в наличии: ${this.count - amount}`);
    } else {
        console.log('Товара недостаточно или нет в наличии');
    };
}

// product.buy(14);


// Усложним объект car
car.isEngineStarted = false;
car.startEngine = function() {
    if (!this.isEngineStarted) {
        console.log('Start engine!');
        this.isEngineStarted = true;
    } else {
        console.log('Engine is already started');
    }
}

car.stopEngine = function() {
    if (this.isEngineStarted) {
        this.isEngineStarted = false;
        console.log('Engine is stopped!');
    } else {
        console.log('Engine is already stopped');
    }
}

car.haveRoadTrip = function(distance) {
    if (this.isEngineStarted) {
        this.odometer += distance;
        console.log(`Your trip is ${this.odometer} km.`);
        this.stopEngine();
    } else {
        this.startEngine();
        this.haveRoadTrip(distance);
    }
}

// console.log(car);
// car.haveRoadTrip(12);
// car.haveRoadTrip(1200);

delete product.buy;

const user = {
    name: 'Alex',
    isRegistered: false,
    reg: function() {
        if (this.isRegistered) {
            console.log('User is s already registered!');
        } else {
            this.isRegistered = true;
            console.log('User is registered now!');

        }
    }
}

product.isUserRegistered = true;
product.buyProduct = function(user) {
    if (user.isRegistered) {
        console.log('Товар в корзине');
    } else {
        console.log('Вам необходимо зарегистрироваться');
    }
}

// product.buyProduct(user);
// user.reg();
// product.buyProduct(user);


// Перебор значений объекта

for (const p in product) {
    // console.log(`The key ${p}, value ${product[p]}`);
}

const productTest =  {
    text: 'Hello',
    price: 1000
};
for (const key in productTest) {
    // console.log(`key: ${productTest[key]}`);
};



// Функции высшего порядка и обратного вызова (callbacak)Ж: map
const obj = {
    1: 'Ivanov',
    2: 'Petrov'
}

// Uncaught TypeError: obj.map is not a function
// const students = obj.map((student) => `student: ${student}`); 

// Перегруппировка значений свойств в массив
const students = Object.values(obj).map((value) => `student: ${value}`);
// console.log(students);
// console.table(obj);

// Несколькоуровневая структура объекта (способность объекта содержать объекты)
const group1 = {
    'Ivanov': {
        practicePlace: 'ldu-1',
        practiceTime: 56
    },
    'Petrov': {
        practicePlace: 'kamaz',
        practiceTime: 120
    },
    'Sidorov': {
        practicePlace: 'ldu-1',
        practiceTime: 148
    },
    'Belkin': {
        practicePlace: 'GosDZU',
        practiceTime: 20
    },
    'Avdeev': {
        practicePlace: 'LPK',
        practiceTime: 160
    }
}

const group1Students = Object.keys(group1);
// console.table(group1Students);

// console.log(Object.entries(car));
// console.log(Object.entries(group1)[0][1].practiceTime)

// Соберем массив объектов "на лету"
// Массив назнаяения
const studentsPracticeTime = [];
// Для удобства обращения переменная
const objs = Object.entries(group1);
// Цикл до конца исходного массива ентрисов
for (let i = 0; i < Object.entries(group1).length; i++) {
    // В конец массива помещаем беезымянный объект по порядку прохода
    studentsPracticeTime.push(
        {
            // Вытягиваем из ентрисов имя
            firstName: objs[i][0], 
            // Вытягиваем значение поля
            practiceTime: objs[i][1].practiceTime
        }
    )
}
// console.log(studentPracticeTime);

// Попробуем сделаать функцию с использованием функции высшего порядка для обработки сложных 
// (со вложенными элементами) объектов
function rebuildArray(srcArr) {
    const ents = Object.entries(srcArr);
    const dstArr = ents.map((e) => {
        return {
            firstname: e[0],
            practiceTime: e[1].practiceTime
        }
    })
    return dstArr;
}

const arrFromFunc = rebuildArray(group1);
console.log(arrFromFunc);

// Создаем новый массив объектов с метками прохождения практики
const dataForTable = studentsPracticeTime.map((student) => {
    if (student.practiceTime < 120) {
        return {
            Student: student.firstName,
            Practice: "Not passed"
        }
    } else {
        return {
            Student: student.firstName,
            Practice: "Passed"
        }
    }
});
console.table(dataForTable);



/* Filter
Мы хотим отфильтровать массив студентов, оставив в новом массиве только
тех, кто уже прошел практику. Практика будет считаться пройденной, если
студент отработал 120 часов или больше.
*/
const studentsPassedPractice = arrFromFunc.filter((student) => {
    return student.practiceTime >= 120;
});
// console.log(studentsPassedPractice);



// Reduce
// Посчитаем сколько всего часов практики отработали студенты.
// Без reduce:
let totalTime = 0;
for (let index = 0; index < studentsPracticeTime.length; index++) {
    totalTime += studentsPracticeTime[index].practiceTime;
}
// console.log(totalTime);

// С использованием reduce:
const redTotalTime = studentsPracticeTime.reduce((acc, student) => {
    /*
    Первое значение - это функция обратного вызова, которая будет получать
    значение аккумулятора (acc) при каждой итерации; и текущий элемент массива
    (student).*/
    return acc + student.practiceTime;
}, 0) // Второй аргумент - это первоначальное значение аккумулятора - 0.
// console.log(redTotalTime);



// some
const isSmbdyPassedPractice = studentsPracticeTime.some((student) => {
    console.log(student.firstName); // Добавим вывод студента, чтобы 
    // посмотреть сколько элементов массива будет проитерированно.
    return student.practiceTime >= 120;
});
// console.log(isSmbdyPassedPractice);


// Some practice
const array = [1, 2, 3, 10, 15];
const arrayUp = array.map(item => item * 2);
// console.log(arrayUp);

// console.log(array.filter(item => item >= 10));
// console.log(array.some(item => item >= 10));
// console.log(array.some(item => item >= 20));
// console.log(array.reduce((acc, item) => acc + item));
// console.log(array.reduce((acc, item) => acc + item/array.length));



// Деструктуризация
const student = {
    firstname: 'Ivan',
    lastname: 'Petrov',
    age: 21
}

// const firstname = student.firstname;
// const lastname = student.lastname;
// const age = student.age;

const studs = ['Ivanov', 'Petrov', 'Belkin'];
// const student1 = studs[0];
// const student2 = studs[1];
// const student3 = studs[2];

// Сбор данных из объекта
const { firstname: studentName, lastname, age = 20 } = student;
const [student1, student2, student3] = studs;

// console.log(studentName, lastname, age);
// console.log(student1, student2, student3);
const testArr = ['a', 'b', 'c'];
console.log('a' in testArr);