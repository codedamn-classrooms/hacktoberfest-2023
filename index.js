/**
 *
 * @param {String} str
 * @param {number} len
 * @param {String} char
 * @returns {String}
 */
export function leftPad(str, len, char) {
	if (len < str.length) {
		return str;
	}
	var padLength = len;
	for (var i = 0; i < padLength; i++) {
		str = char + str;
	}
	return str;
}

// Sample Tests
console.log(leftPad("hello", 10, " ")); // Output: '     hello'
console.log(leftPad("world", 5, "x")); // Output: 'world'
