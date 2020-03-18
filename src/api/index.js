/**
* This is an example request. Create your own using best practises for
* handling asynchronous data fetching
**/

export const getData = (cb) => {
	const vehicles = new XMLHttpRequest();
	vehicles.open('GET', 'http://localhost:9988/api/vehicle');

	vehicles.onreadystatechange = function () {
		if (vehicles.readyState === 4) {
			if (vehicles.status === 200) {
				cb(JSON.parse(vehicles.response));
			} else {
				console.log(`Something went wrong.`);
			}
		}
	};
	vehicles.send();
};

export const getVehicleDetails = (id, cb) => {
	fetch(`http://localhost:9988/api/vehicle/${id}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	})
	.then(response => {
		if (response.ok) {
			return response.json();
		} else {
			console.log(`${response.status}: ${response.statusText}`);
		}
	})
	.then(data => {
		if (data) {
			cb(data);
		} else {
			console.log(`Something went wrong.`);
		}
	})
	.catch(error => {
		console.log(`${error}`);
	});
};
