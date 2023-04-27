
//Functions & arrow functions
const multiply = (number) => {
	return number * 2;
};
console.log(multiply(5));


const add = number => number + 10;
console.log(add(8));


const names = (nameOne, nameTwo) => {
	return nameOne + " " + nameTwo;
}
console.log(names("Liam", "Ronan"));

const cars = (carOne, carTwo) => carOne + " " + carTwo;
console.log(cars("Audi", "BMW"));


//Classes - ES6
class Human {
	constructor() {
		this.gender = "Male";
	}

	printGender() {
		console.log(this.gender);
	}
}

//Inheritance
class Person extends Human{
	constructor(_name) {
		//Use keyword super to inherit properties of parent
		super();
		this.name = _name;
	}

	printName() {
		console.log(this.name)
	}
}

let person = new Person("Liam", "Male")
person.printName();
person.printGender();



//Classes ES7 
class Animal {
	name = "Lion";
	age = 12;
	weight = "200 pounds"

	printAnimal = () => {
		console.log(this.name, this.age, this.weight);
	}
}

class Cat extends Animal {
	kitten = "cat"
	years = 16;

	printCat = () => {
		console.log(this.kitten, this.years, this.weight);
	}
}

const animal = new Cat();
animal.printAnimal()
animal.printCat();
console.log(animal.weight)


//Spread operators - Used to split up array elements or obj properties
const numbers = [1,2,3,4,5,6]

const newNumbers = [...numbers, 8, 9, 10]
console.log(newNumbers);

const car = {
	manufacturer: "audi"
};

const newCar = {
	...car,
	year: "2021"
}
console.log(newCar);


//Rest operator
let filterArray = (...args) => {
	return args.filter(item => item > 2);
}

console.log(filterArray(1,2,3));

const addArray = (...items) => {
	let total = 0;
	for(const item of items) {
		total += item;
	}
	return total;
}

console.log(addArray(6,6,4));
console.log(addArray(1,2,4,5));

//Destructuring - Arrays
[a,b,c] = ["Liam", "Amy", "ellie"]
console.log(a);
console.log(c);

const items = [1,2,3,4,5,6];
[numOne, ,numThree, , ,numSix] = items;
console.log(numOne, numThree, numSix);


let number = 1; //Primitive - copying the value
let num2 = number
console.log(num2);

//Not actually copying - computer object stored in memory, storing pointer to that place in memory
const computer = { 
	gpu: "RTX 3080"
};

const secondComputer = computer; //That pointer will be copied

computer.gpu = "GTX 1070";

console.log(secondComputer);

//Or we can do this
const phone = {
	brand: "Apple"
};

const secondPhone = { //Adding the obj properties from phone to secondPhone - created a real copy
	...phone
};

phone.brand = "Samsung"
console.log(secondPhone);

//Array methods
const nums = [1,2,3,4,5,6,7,8];

//Take arrow/regular function as an input, which is executed on each element of array
const doubleNums = nums.map((num) => {
	return num * 2; //Returns a new array
})

console.log(doubleNums);

