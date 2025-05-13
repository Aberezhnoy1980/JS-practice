const uri = "https://api.github.com/user";
const id = 583231;

const getUserData = async (uri, id) => {
	let url = new URL(`${uri}/${id}`);

	const response = await fetch(url);

	if (response.status != 200) {
		console.log(`Error: ${response.status}: ${response.statusText}`);
	} else {
		const user = await response.json();
		console.log(`User with id ${id} login is ${user.login}`);
	}
};

getUserData(uri, id);

const user = {
	name: "John Smith",
	age: 30,
	email: "john@example.com",
};

async function saveUserData(user) {
	const userData = JSON.stringify(user);
	var myHeaders = new Headers();
	myHeaders.append("Content-type", "application/json");
	var myInit = {
		method: "POST",
		headers: myHeaders,
	};

	var myRequest = new Request("https://httpbin.org/post");
	const respUser = fetch(myRequest, myInit)
		.then((resp) => {
            if (resp.status != 200) console.log('Error!');
			console.log("User data saved successfully");
			return resp.json();
		})
		.catch((error) => {
			console.log(error.mesage);
		});

	return respUser;
}

const respUser = await saveUserData(user);

console.log(respUser);
