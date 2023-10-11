document.addEventListener("DOMContentLoaded", function () {
	const loginForm = document.getElementById("login-form");
	const productsDiv = document.getElementById("products");
	let accessToken = null;

	const backendURL = new URL(location.href);
	let subdomain = backendURL.hostname.split(".")[0];
	subdomain += "-1338";
	backendURL.hostname = subdomain + ".codedamn.app";

	loginForm.addEventListener("submit", async function (event) {
		event.preventDefault();
		const formData = new FormData(loginForm);
		const username = formData.get("username");
		const password = formData.get("password");

		try {
			const response = await fetch(`${backendURL.origin}/login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});

			if (response.status === 401) {
				alert("Unauthorized");
				return;
			}

			const data = await response.json();
			accessToken = data.accessToken;
			fetchProducts();
		} catch (error) {
			console.error("Error:", error);
		}
	});

	async function fetchProducts() {
		try {
			const response = await fetch(`${backendURL.origin}/products`, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});

			if (response.status === 401 || response.status === 403) {
				alert("Unauthorized or Forbidden");
				return;
			}

			const products = await response.json();
			displayProducts(products);
		} catch (error) {
			console.error("Error:", error);
		}
	}

	function displayProducts(products) {
		let htmlString = "<ul>";
		for (const product of products) {
			htmlString += `<li>${product.name} ${
				product.price ? `- $${product.price}` : ""
			}</li>`;
		}
		htmlString += "</ul>";
		productsDiv.innerHTML = htmlString;
	}
});
