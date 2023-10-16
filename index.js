const express = require("express");
const app = express();
const port = process.env.PUBLIC_PORT;

function getDataFromDatabase(callback) {
	// Sample Data Error from DB
	setTimeout(() => {
		const error = new Error("Database Error");
		callback(error, null);
	}, 1000);
}

app.get("/get-data", (req, res) => {
	getDataFromDatabase((error, data) => {
		if (!error) {
			res.json(data);
		} else {
			res.json({ error: error.message }).status(500);
		}
	});
});

app.get("/", (req, res) => {
	res.send("Express Server is up!");
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
