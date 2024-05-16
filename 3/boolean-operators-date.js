/* Booleans */
// Boolean values is either true or false
let isTrue = true;
let isFalse = false;

// Boolean values can be used in comparison
let a = 3;
let b = 4;

console.log(a > b); // false

// Truthy values
// All values are truthy unless they are defined as falsy (i.e., except for false, 0, "", null, undefined, and NaN)

/* Undefined */
// Undefined is the value of a variable that has not been assigned a value
let x;
console.log(x); // undefined

// Undefined is also the value of a function that does not return a value
function doNothing() {}
console.log(doNothing()); // undefined

/* Null */
// Null is the intentional absence of any value
let y = null;
console.log(y); // null

/* NaN */
// NaN is a property of the global object
// It represents "Not-a-Number" value
let z = 100 / "Apple";
console.log(z); // NaN

/* Operators */
// Operators are used to perform operations on variables and values
// JavaScript has several types of operators

// Assignment operators (=)
// Assign values to variables
let num = 5;
let num2 = 10;

num = num2; // num2 is stored in num
num += num2; // num = num + num2
num -= num2; // num = num - num2
num *= num2; // num = num * num2
num /= num2; // num = num / num2
num %= num2; // num = num % num2
num **= num2; // num = num ** num2

// Arithmetic operators (+, -, *, /, %, **)
// Perform arithmetic on numbers
num + num2; // addition
num - num2; // subtraction
num * num2; // multiplication
num / num2; // division
num % num2; // modulus
num ** num2; // exponentiation

// Comparison operators (==, ===, !=, !==, >, <, >=, <=)
// Compare values and return true or false
num == num2; // equal to
num === num2; // equal value and equal type (data type -> 5 == "5" is true, 5 === "5" is false )
num != num2; // not equal
num !== num2; // not equal value or not equal type (5 !== '5' is true because they are not the same type , 5 != '5' is false)
num > num2; // greater than
num < num2; // less than
num >= num2; // greater than or equal to
num <= num2; // less than or equal to

// Logical operators (&&, ||, !)
// Logical operators are used to determine the logic between variables or values
// && (and) returns true if both operands are true
const check = num > 3 && num2 < 15; // true && true -> true
const check2 = num > 3 && num2 > 15; // false && false -> false
const check3 = num < 3 && num2 < 15; // false && true -> false

// || (or) returns true if one of the operands is true
const check4 = num > 3 || num2 < 15; // true || true -> true
const check5 = num < 3 || num2 < 15; // false || true -> true
const check6 = num < 3 || num2 > 15; // false || false -> false

// (!) (not) returns true if the operand is false
const check7 = num > 3; // true
const check8 = !(num > 3); // false

//Increment (++) and Decrement (--)
// Increment (++) adds one to the variable
//Post increment
let i = 0;
console.log(i++); // 0
console.log(i); // 1

//Pre increment
let j = 0;
console.log(++j); // 1
console.log(j); // 1

// Decrement (--) subtracts one from the variable
//Post decrement
let k = 0;
console.log(k--); // 0
console.log(k); // -1

//Pre decrement
let l = 0;
console.log(--l); // -1
console.log(l); // -1

// Conditional (Ternary) operator
// The conditional operator assigns a value to a variable based on a condition
let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log(status); // adult

/* Window methods */
// Alert
// Display an alert box with a message and an OK button
window.alert("Hello World!");

// Prompt
// Display a dialog box that prompts the visitor for input
const name = prompt("What is your name?");
console.log(name);

// Confirm
// Display a dialog box with a message and an OK and a Cancel button
const result = confirm("Do you want to proceed?");
console.log(result); // true or false

/* Date Object */
// Date object is used to work with dates and times
const date = new Date();
console.log(date); // current date and time
console.log(date.getFullYear()); // current year
console.log(date.getMonth()); // current month (0-11)
console.log(date.getDate()); // current day (1-31)
console.log(date.getHours()); // current hour (0-23)
console.log(date.getMinutes()); // current minute (0-59)
console.log(date.getSeconds()); // current second (0-59)
console.log(date.getMilliseconds()); // current milliseconds (0-999)
console.log(date.getDay()); // current day of the week (0-6)