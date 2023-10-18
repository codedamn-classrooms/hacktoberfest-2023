function calculateDiscount(price, discount) {
	return price - price * discount;
}

function formatCurrency(amount) {
	return `$${parseFloat(amount).toFixed(2)}`;
}
