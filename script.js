let cart = [];
let discountCode;

function addToCart(item, quantity, price) {
	const existingItem = cart.find((cartItem) => cartItem.item === item);
	if (existingItem) {
		existingItem.quantity += quantity;
	} else {
		cart.push({ item, quantity, price });
	}
	document.getElementById(`${item.toLowerCase()}-count`).textContent =
		existingItem ? existingItem.quantity : quantity;
	console.log(`${item} added to cart.`);
}

function applyDiscount(code) {
	// Bug: discountCode should be a number, but it's being stored as a string.
	discountCode = code === "FruitLover" ? "10" : "0";
	document.getElementById("discount-message").textContent =
		discountCode === "10"
			? `Discount Applied! ${discountCode}% OFF`
			: "Invalid Discount Code";
	console.log(`Discount code applied: ${code}`);
}

function calculateTotal() {
	let total = 0;
	for (let i = 0; i < cart.length; i++) {
		total += cart[i].quantity * cart[i].price;
	}
	if (discountCode) {
		total = calculateDiscount(total, discountCode);
	}
	document.getElementById(
		"total-price"
	).textContent = `Total: ${formatCurrency(total)}`;
	console.log(`Total: ${formatCurrency(total)}`);
}
