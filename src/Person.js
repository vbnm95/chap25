class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	
	speak() {
		console.log(`Hello ${this.name}, you are ${this.age} years old`);
	}
	
	get age() {
		return this._age;
	}
	
	set age(value) {
		if(value < 0) {
			throw new Error(`Invalid age: ${this.age}`);
		}
		this._age = value;
	}
}

const p1 = new Person("Lee", 26);
p1.speak();

const p2 = new Person("Kim", 12);
p2.speak();
console.log(p2.age);
console.log(p2._age);