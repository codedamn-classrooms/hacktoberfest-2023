/**
 * Stack function that performs common stack operations: push, pop, peek, and a custom swap operation.
 *
 * @param {string} stackOperation - The stack operation to perform. Valid parameters are 'push', 'pop', 'peek', 'swap'.
 * @param {any} stackValue - The value to push onto the stack when the operation is 'push'.
 * @returns {Array} - The resulting stack as an array after performing the operation. Returns the top element in array format for 'peek' operation, full stack (after swap) for 'swap', and full stack (after push or pop) for 'push' and 'pop'.
 */
export function stack(stackOperation, stackValue) {
	const stackHolder = {
		count: 3,
		storage: [1, '{id: 1,value: "obj"}', "stringHolder", 46],
	};

	const push = function (value) {
		stackHolder.storage[stackHolder.count] = value;
		return stackHolder.storage;
	};

	const pop = function () {
		if (stackHolder.count === 0) {
			return [];
		}

		const poppedItem = stackHolder.storage[stackHolder.count];
		delete stackHolder.storage[stackHolder.count];
		stackHolder.count--;
		return poppedItem;
	};

	const peek = function () {
		return [stackHolder.storage[0]];
	};

	const swap = function () {
		return stackHolder.storage;
	};

	switch (stackOperation) {
		case "push":
			push(stackValue);
			break;
		case "pop":
			pop();
			break;
		case "swap":
			swap();
			break;
		case "peek":
			peek();
			break;
		default:
			return stackHolder.storage;
	}
}

// Sample Tests

// Push operation: Adding 'test' to the top of the stack
console.log("Push operation: ", stack("push", "test")); // should show [1, '{id: 1,value: "obj"}', "stringHolder", 46, "test"]

// Pop operation: Removing the topmost item from the stack
console.log("Pop operation: ", stack("pop")); // should show [1, '{id: 1,value: "obj"}', "stringHolder", 46]

// Peek operation: Showing the item at the top of the stack
console.log("Peek operation: ", stack("peek")); // should show [46]

// Swap operation: Swapping the top two items on the stack
console.log("Swap operation: ", stack("swap")); // should show [1, '{id: 1,value: "obj"}', 46, "stringHolder"]

// Invalid operation: Trying an operation that is not defined
console.log("Invalid operation: ", stack("invalidOp")); // should show [1, '{id: 1,value: "obj"}', 46, "stringHolder"]
