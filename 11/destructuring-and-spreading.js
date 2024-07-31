/* Destructuring and Spread */

//Destructuring
//Destructuring is a way to unpack values from arrays, or properties from objects, into distinct variables.

//Array Destructuring
const point = [10, 25, -34];

const [x, y, z] = point;
console.log("Array Destructuring -> ", x, y, z); // 10 25 -34

//------------------------------------------------------------

const stack = [
  ["HTML", "CSS", "JS", "ANGULAR"],
  ["C", "C++", "JAVA", "PYTHON"],
];

const [frontEnd, backEnd] = stack;
console.log("Array Destructuring -> ", frontEnd, backEnd); // ['HTML', 'CSS', 'JS', 'ANGULAR'] ['C', 'C++', 'JAVA', 'PYTHON']

const [[firstFrontEnd], [firstBackEnd]] = stack;
console.log("Array Destructuring -> ", firstFrontEnd, firstBackEnd); // HTML C

//if you want to skip an element, you can use commas to reach the desired position
const [[, secondFrontEnd], [, secondBackEnd]] = stack;
console.log("Array Destructuring -> ", secondFrontEnd, secondBackEnd); // CSS C++

//we can use default value in case the value of array for that index is undefined
const names = [undefined, "John", "Mary"];
let [firstPerson = "Furkan", secondPerson, thirdPerson] = names;

console.log("Array Destructuring -> ", firstPerson, secondPerson, thirdPerson); // Furkan John Mary

//we can not assign variable to all the elements in the array. we can destructure few of the first and we can get the remaining as array using spread (rest) operator
const [first, second, ...restOfItems] = [10, 20, 30, 40];
console.log("Array Destructuring -> ", first, second, restOfItems); // 10 20 [30, 40]

//------------------------------------------------------------
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
  ["Turkey", "Ankara"],
];

for (const [country, city] of countries) {
  console.log(`Country: ${country} and City: ${city}`);
}

//Object Destructuring
//object name should be same as the key of the object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const { firstName, lastName, age, eyeColor } = person;
console.log("Object Destructuring -> ", firstName, lastName, age, eyeColor); // John Doe 50 blue

//if you want to assign the value to a variable with different name, you can do it as below
const { firstName: name, lastName: surname } = person;
console.log("Object Destructuring -> ", name, surname); // John Doe

//if you want to assign default value to a variable, you can do it as below
const { city = "unknown" } = person;
console.log("Object Destructuring -> ", city); // unknown

//if you want to assign the value to a variable with different name and also assign default value, you can do it as below
const { city: cityName = "unknown" } = person;
console.log("Object Destructuring -> ", cityName); // unknown

//-------------------------------------------------------

function multiplyArray([a, b]) {
  return a * b;
}

const numbers = [2, 3];
console.log("Array Destructuring -> ", multiplyArray(numbers)); // 6

//-------------------------------------------------------

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  pets: {
    dogs: ["Tommy"],
    cats: ["Lucy"],
  },
  skills: ["HTML", "CSS", "JS"],
  hobbies: ["Reading", "Music"],
};

let { pets:{cats:cat,dogs:dog} } = user;

console.log("Object Destructuring Pets -> ", cat, dog);

function getInfo({ firstName, lastName, age, pets: { dogs, cats } ,...others}) {
  console.log("Others -> ", others);
  return `Hello, My name is ${firstName} ${lastName}, I am ${age} years old. I have ${dogs.length} dogs and ${cats.length} cats.`;
}

console.log("Object Destructuring -> ", getInfo(user)); // Hello, My name is John Doe, I am 50 years old. I have 1 dogs and 1 cats.

//-------------------------------------------------------

/* Spread or Rest Operator */
//Spread operator is used to split up array elements or object properties.
//Rest operator is used to merge a list of function arguments into an array.

//Array Spread
const oddNumbers = [1, 3, 5];
const evenNumbers = [2, 4, 6];

const allNumbers = [...oddNumbers, ...evenNumbers];
console.log("Array Spread -> ", allNumbers); // [1, 3, 5, 2, 4, 6]

//-------------------------------------------------------

//Copy an array
const numbersSpread1 = [1, 2, 3, 4, 5];

const numbersSpread2 = [...numbersSpread1];//copy of the array (not reference)

console.log("Array Spread -> ", numbersSpread2); // [1, 2, 3, 4, 5]

//Copy an object
const userSpread1 = {
  name: "John",
  age: 25,
};

const userSpread2 = { ...userSpread1,name:'Furkan' };//copy of the object (not reference)

console.log("Object Spread -> ", userSpread2); // {name: 'Furkan', age: 25}

//-------------------------------------------------------

const numbersSpread = [1, 2, 3, 4, 5];
const [firstNumber, secondNumber, ...rest] = numbersSpread;
console.log("Array Spread -> ", firstNumber, secondNumber, rest); // 1 2 [3, 4, 5]

//-------------------------------------------------------

//Spread in function arguments
function sumAll(...args) {
  let sum = 0;
  for (const arg of args) {
    sum += arg;
  }
  return sum;
}

console.log("Function Spread -> ", sumAll(1, 2, 3, 4, 5)); // 15