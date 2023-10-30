import fs from "fs";
import jwt from "jsonwebtoken";
console.log("JWT Lab");

const payload = { username: "codedamn" };
const secretKey = "some-secret-key";

const token = jwt.sign(secretKey, payload);
console.log("Token:", token);

const decodedPayload = jwt.decode(token);
console.log("Decoded Payload:", decodedPayload);

const verified = jwt.verify(secretKey, token);
console.log("Verified:", verified);

export { token, decodedPayload, verified };
