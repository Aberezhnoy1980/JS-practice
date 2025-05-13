// ... - spread operator
const studentGroup1PracticeTime = [
	{
		firstName: "Ivanov",
		practiceTime: 56,
	},
	{
		firstName: "Petrov",
		practiceTime: 120,
	},
	{
		firstName: "Sidorov",
		practiceTime: 148,
	},
	{
		firstName: "Belkin",
		practiceTime: 20,
	},
	{
		firstName: "Avdeev",
		practiceTime: 160,
	},
];

const studentGroup2PracticeTime = [
	{
		firstName: "Mankov",
		practiceTime: 87,
	},
	{
		firstName: "Kistin",
		practiceTime: 133,
	},
	{
		firstName: "Kotlyarov",
		practiceTime: 140,
	},
	{
		firstName: "Peskov",
		practiceTime: 10,
	},
];

const maximum = findMax(4, 7, 10);
function findMax() {
	const values = arguments;
	let maxValue = -Infinity;

	for (let index = 0; index < values.length; index++) {
		if (values[index] > maxValue) maxValue = values[index];
	}
	return maxValue;
}

const group1PracticeTime = studentGroup1PracticeTime.map(
	(student) => student.practiceTime
);
const group2PracticeTime = studentGroup2PracticeTime.map(
	(student) => student.practiceTime
);

console.log(`Максимум из первой группы полученный перебором псевдомассива: ${findMax(...group1PracticeTime)}`);
console.log(`Максимум из первой группы полученный перебором псевдомассива: ${findMax(...group2PracticeTime)}`);
console.log(`Максимум из обоих групп (без объединения псевдомассиивов): ${findMax(...group2PracticeTime, ...group1PracticeTime)}`);

const bothGroupTime = [...group2PracticeTime, ...group1PracticeTime];
console.log(`Максимум из обоих групп (объединение псевдомассиивов групп в один мссив): ${findMax(...bothGroupTime)}`);

// ...rest
function findMax2(...values) {
	return values.reduce((acc, value) => {
		return value > acc ? value : acc;
	}, -Infinity);
}

console.log(`Максимум из первой группы полученный путем обработки массива методом reduce: ${findMax2(...group1PracticeTime)}`);
console.log(`Максимум из первой группы полученный путем обработки массива методом reduce: ${findMax2(...group2PracticeTime)}`);

const saveFullNameInDB = (firstName, lastName, ...additionals) => {
	saveFirstName(firstName);
	saveLastName(lastName);
	saveAdditionals(additionals);
};
