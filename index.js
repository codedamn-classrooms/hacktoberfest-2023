function fetchData() {
	// Simulates fetching data
	return Promise.resolve([10, 20, 30, 40, 50]);
}

function processItem(item) {
	// Simulates processing each item
	return new Promise((resolve) => resolve(item * 2));
}

async function scheduleLogging(data) {
	for (var i = 0; i < data.length; i++) {
		setTimeout(async function () {
			console.log(await processItem(data[i]));
		}, 100 * i);
	}
}

async function init() {
	const data = await fetchData();
	scheduleLogging(data);
}

// Start executing the code
init();
