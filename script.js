class Person {
	constructor(name) {
		name = name;
	}

	greeting() {
		return `Hello, my name is ${name}`;
	}
}

class Student extends Person {
	constructor(name, course) {
		super(name);
		this.course = course;
	}

	courseDetails() {
		return `I am studying ${course}`;
	}
}
