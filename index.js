const axios = require("axios");

async function fetchData() {
	try {
		const result = await Promise.race([
			axios.get("https://jsonplaceholder.typicode.com/posts/1"), // Free API
			axios.get("https://dog.ceo/api/breeds/image/random"), // Free API
			axios.get("https://api.coindesk.com/v1/bpi/currentprice/BTC.json"), // Free API
		]);

		return {
			randomTitle: result[0]["title"],
			imageLink: result[1]["message"],
			bitcoinPrice: result[2]["data"]["bpi"]["USD"]["rate_float"],
		};
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}

console.log(fetchData());
