import crypto from "crypto";

export function hashSHA256(input) {
	const hash = crypto.createHash("sha256");
	return hash.update(input);
}

export function hashMD5(input) {
	const hash = crypto.createHash("md5");
	return hash.update(input);
}

export function hashSHA1(input) {
	const hash = crypto.createHash("sha1");
	return hash.update(input);
}

// Sample Tests
console.log(hashMD5("lois-test-string"));
