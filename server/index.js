import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());

const SECRET_KEY = "mysecretkey";

let users = [
	{ id: 1, username: "alice", password: "password", role: "admin" },
	{ id: 2, username: "bob", password: "password", role: "user" },
];

let products = [
	{ id: 1, name: "Laptop", price: 1000 },
	{ id: 2, name: "Phone", price: 500 },
];

function authenticateToken(req, res, next) {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1];

	if (!token) return res.sendStatus(401);

	jwt.verify(token, SECRET_KEY, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
}

app.post("/login", (req, res) => {
	const { username, password } = req.body;
	const user = users.find(
		(u) => u.username === username && u.password === password
	);

	if (user) {
		const accessToken = jwt.sign(
			{ id: user.id, role: user.role },
			SECRET_KEY
		);
		return res.json({ accessToken });
	} else {
		return res.sendStatus(401);
	}
});

app.get("/products", authenticateToken, (req, res) => {
	const role = req.user.role;
	if (role === "admin") {
		res.json(products);
	} else {
		const publicProducts = products.map((p) => ({
			id: p.id,
			name: p.name,
		}));
		res.json(publicProducts);
	}
});

app.listen(process.env.SECONDARY_PUBLIC_PORT, () => {
	console.log(`Server running on ${process.env.SECONDARY_PUBLIC_PORT}`);
});
