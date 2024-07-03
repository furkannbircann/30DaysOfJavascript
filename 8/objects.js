/* Scope */
// Variable is the fundamental part in programming. We declare variable to store different data types. To declare a variable we use the key word "var let and const". A variable can declared at different scope.

// Variables scopes can be:
// 1. Window Scope
// 2. Global Scope
// 3. Local Scope

// Window Scope: A variable declared without using "var let and const" keyword is called window scope variable. It is a global variable and can be accessed from anywhere in the program.

name = "John Doe";

window.name; // John Doe

// Global Scope: A variable declared outside of a function is called global scope variable. It can be accessed from anywhere in the program. (Block Scope)

let nameSurname = "John Doe";

function printName() {
    console.log(nameSurname);
    if (true) {
        console.log(nameSurname);
    }
}

printName(); // John Doe

// Local Scope: A variable declared inside a function is called local scope variable. It can be accessed only inside the function. (Function Scope)

function printName() {
    let nameSurname2 = "John Doe";
    console.log(nameSurname2);
    if (true) {
        console.log(nameSurname2); // John Doe
    }
}

console.log(nameSurname2); // ReferenceError: name is not defined

printName(); // John Doe

//Example

let a = 'Javascript';
let b = 'Python';

function print() {
    console.log(a); // Javascript
    console.log(b); // Python
    if (true) {
        console.log(b); // Python

        let a = 'Java';

        console.log(a); // Java
    }
    
    console.log(a); // Javascript

    if (true) {
        let c = 'Java';
        console.log(c); // Java
    }
    console.log(c); // ReferenceError: c is not defined
}

print();

//A variable declared with var only scoped to function but variable declared with let or const scoped to block.

//Example

let k = 'Javascript';
let j = 'Python';

function print() {
    console.log(k); // Javascript
    console.log(j); // Python
    if (true) {
        console.log(j); // Python

        var k = 'Java';

        console.log(k); // Java

        var l = 'C++';

        console.log(l); // C++
    }
    
    console.log(k); // Java

    console.log(l); // C++

    if (true) {
        let c = 'Java';
        console.log(c); // Java
    }
    console.log(c); // ReferenceError: c is not defined
}

console.log(k); // Javascript
console.log(j); // Python
console.log(l); // ReferenceError: l is not defined

//the scope let and const is the same. The difference is only reassigning. We can't change or reassign the value of const variable.


/* Object */
// An object is a collection of key-value pairs. It is used to store multiple values in a single variable. An object can be created using curly braces {}.

//Creating an empty object
const person = {};

//Creating an object with properties
const person2 = {
    name: 'John Doe',
    age: 25
};

const person3 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    country: 'USA',
    city: 'New York',
    skills: ['HTML', 'CSS', 'JS'],
    //arrow function does not have their own this keyword. They are not suitable for methods.
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`; //this keyword is used to access the properties of the object
    },
    'phone number': '+1234567890',
    isMarried: false,
};

console.log(person3); // {firstName: "John", lastName: "Doe", age: 25, country: "USA", city: "New York", …}

console.log(person3.getFullName()); // John Doe 

//Accessing Object Properties

//we can access values of object using two ways:
//1. Using followed by key name if the key-name is a one word
//2. Using square bracket and a quote

console.log(person3.firstName); // John

console.log(person3['firstName']); // John

console.log(person3['phone number']); // +1234567890

console.log(person3.age); // 25

console.log(person3['age']); // 25

//Setting new key for an object

person3.firstName = 'Mark';
person3['lastName'] = 'Smith';

person3.skills.push('Angular');

person3.getPersonInfo = function() {
    let skillsWithoutLastSkill = this.skills
        .splice(0, this.skills.length - 1)
        .join(', ');
    let lastSkill = this.skills[this.skills.length - 1];
    //let lastSkill = this.skills.at(-1);
    let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`;
    let fullName = this.getFullName();
    let statement = `${fullName} is a ${this.age} years old. He lives in ${this.city}, ${this.country}. He knows ${skills}.`;
    return statement;
}

console.log(person3.getPersonInfo());

//Object methods

//Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object.

const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.assign({}, object2);

console.log(object2); // {a: 1, b: 2, c: 3}

let newObj = {...object1};

console.log(newObj); // {a: 1, b: 2, c: 3}

//Object.keys() method is used to return an array of a given object's own enumerable property names, in the same order as we get with a normal loop.

console.log(Object.keys(person3)); // ["firstName", "lastName", "age", "country", "city", "skills", "getFullName", "phone number", "isMarried", "getPersonInfo"]

//Object.values() method is used to return an array of a given object's own enumerable property values.

console.log(Object.values(person3)); // ["Mark", "Smith", 25, "USA", "New York", Array(4), ƒ, "+1234567890", false, ƒ]

//Object.entries() method is used to return an array of a given object's own enumerable string-keyed property [key, value] pairs.

console.log(Object.entries(person3)); // [["firstName", "Mark"], ["lastName", "Smith"], ["age", 25], ["country", "USA"], ["city", "New York"], ["skills", Array(4)], ["getFullName", ƒ], ["phone number", "+1234567890"], ["isMarried", false], ["getPersonInfo", ƒ]]

//hasOwnProperty() method is used to return a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

console.log(person3.hasOwnProperty('name')); // false

console.log(person3.hasOwnProperty('firstName')); // true

//Object.freeze() method is used to freeze an object. A frozen object can no longer be changed. It will return the passed object.

const obj = {
    name: 'John'
};

Object.freeze(obj);

obj.name = 'Doe'; // Error: Cannot assign to read only property 'name' of object

console.log(obj); // {name: "John"}

//Object.seal() method is used to seal an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable. It will return the passed object.

const obj2 = {
    name: 'John'
};

Object.seal(obj2);

obj2.name = 'Doe'; // Doe

obj2.age = 25; // Error: Cannot add property age, object is not extensible

console.log(obj2); // {name: "Doe"}
