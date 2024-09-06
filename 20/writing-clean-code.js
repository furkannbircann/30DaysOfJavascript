/* Writing Clean Code */

/*

A JavaScript style guide is a set of standards that tells how JavaScript code should be written and organized. In this section, we will talk
about JavaScript guides and how to write a clean code.

JavaScript is a programming language and like human language it has syntax. The syntax of JavaScript has to be written following a certain
style guideline for sake of convince and simplicity.


Why we need style guide


You have been coding alone for so long but now it seems to work in a team. It does not matter in anyway you write you code as long as it
running, however when you work in team of 10 or 20 or more developer on one project and on the same code base, the code will be messy
and hard to manage if there is no any guidelines to follow.

You can develop your own guidelines and conventions or you can also adapt well developed guidelines. Let us the most common know
guidelines. Most common JavaScript Style Guides

1. Airbnb JavaScript Style Guide
2. Google JavaScript Style Guide
3. Javascript Standard Style

Airbnb JavaScript Style Guide

Airbnb has one of the most popular JavaScript style guides on the internet. It covers nearly every aspect of JavaScript as well and it is
adopted by many developer and companies. I would also recommend to try it. Their style is very
easy to use and simple to understand.

Standard JavaScript Style Guide
This is guideline is not as popular as Airbnb but it worth to look at it. They removed the semicolon in their style guide.

Google JavaScript Style Guide
I do not say much about Googles guideline and I did not use rather I would suggest you to have a look from this link.

*/


/*

JavaScript Coding Conventions

In this challenge also we used the general JavaScript coding writing conventions and guides. Coding conventions are style guidelines for
programming which are developed by an individual, a team or a company.

Coding conventions helps:

• to write clean code
• to improve code readability
• to improve code re-useability and maintainability

Coding conventions includes
• Naming and declaration rules for variables
• Naming and declaration rules for functions
• Rules for the use of white space, indentation, and comments
• Programming practices and principles

------------------------------------------------------------------------------------------

• We used camelCase for variables and functions.

• All variable names [tart with a letter.

• We chose to use const for constants, arrays, objects and functions. In stead of double quote, we chose to use single quote or backtick.
Single quote is becoming trendy.

• We also removed semicolons from our code but it is a matter of personal preference.

• Space around arithmetic operators, assignment operators and after comma

• Arrow function instead of function declaration

• Explicit return instead of implicit return if the function is one liner

• No trailing comma in the last value of an object

• We prefer this +=, -=, *= /=, **= instead of the longer version

• When we use console.log) it is good to print with a tag string to identify from where the console is coming

*/


//Variables
let firstName = 'John';
let lastName = 'Doe';
let country = 'Finland';

const PI = Math.PI;
const gravity = 9.81;

//Arrays
const numbers = [0, 3.14, 9.81, 37, 100];
const countries = ['Finland', 'Sweden', 'Norway'];
const constants = [2.72, 3.14, 1.618];

//Functions
/* 

By now you are very familiar function declaration, expression function, arrow function and anonymous function. In this challenge we tend to
use arrow function instead of other functions. Arrow function is not a replacement for other functions. In addition, arrow functions and
function declarations are not exactly the same. So you should know when to use and when not. I will cover the difference in detail in other
sections. We will use explicit return instead of implicit return if the function is one liner

*/

const printFullName = (firstName, lastName) => `${firstName} ${lastName}`;

const areaOfCircle = (r) => PI * r ** 2;

const hexaColor = () => {
    const str = '0123456789abcdef';
    let hexa = '#';
    for (let i = 0; i < 6; i++) {
        hexa += str[Math.floor(Math.random() * str.length)];
    }
    return hexa;
}

//Loops

/*

We coverer many types of loops in this challenges. The regular for loop, while loop, do while loop, for of loop, forEach loop and for in loop.
Lets see how we use them:

*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const names = ['Furkan','Ahmet','Ali','Veli','Ayse','Fatma'];

for (const name of names) {
    console.log(name);
}

names.forEach(name =>  console.log(name));

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    country: 'Finland',
    skills: ['HTML', 'CSS', 'JS'],
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

for (const key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key, person[key]);
    }
}

//Objects

//We declare object literal with const keyword. We use single quote or backtick for the key and value of the object. We do not use trailing comma in the last value of an object.

const student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    skills: ['HTML', 'CSS', 'JS'],
    country: 'Finland',
    enrolled: true
}

//Classes

//We declare class with class keyword. We use PascalCase for class name. We use constructor to initialize the object. We use this keyword to access the properties of the object.

class Person {
    constructor(firstName, lastName, age, country) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


