const express = require("express");
const app = express();
const port = process.env.PUBLIC_PORT;

// Assume a simple data store
const dataStore = [
	{ id: 1, name: "Item 1" },
	{ id: 2, name: "Item 2" },
	// ...
];

app.get("/get-data", (req, res) => {
	res.json({ data: dataStore });
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
