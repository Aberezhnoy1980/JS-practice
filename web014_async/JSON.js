// Объект -> JSON
const student = {
	name: "Slava",
	surname: "Belkin",
	age: 20,
	practice: {
		place: "IKTG",
		hours: 47,
	},
};

const objInJSONString = JSON.stringify(student, null, 4);
console.log(objInJSONString, '\n', `Type of object is ${typeof objInJSONString}`);

// JSON -> Объект.
const JSONStringInObj = JSON.parse(objInJSONString);
console.log(JSONStringInObj, '\n', `Type of object is ${typeof JSONStringInObj}`);

const stringWarray = '["Belkin", "Ivanov", "Petrov"]';
const stringArrayInArray = JSON.parse(stringWarray);
console.log(stringArrayInArray, '\n', `Type of object is ${typeof stringArrayInArray}`);