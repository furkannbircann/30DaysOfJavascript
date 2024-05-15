/* Primitive Data Types  (number, string, boolean, null, undefined) !not modifiable */
let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)

let js = 'JavaScript'
let py = 'Python'

console.log(js == py)

let lightOn = true
let lightOff = false

console.log(lightOn == lightOff)

let empty = null
let undef = undefined

console.log(empty == undef)

/* Non-Primitive Data Types  (object, array, function) !modifiable */
let nums = [1, 2, 3]

//arrays can contain both primitive and non-primitive data types
let array = [nums, 'Furkan', 3, true, null, undefined, {name: 'Furkan'}, [11, 12]]

console.log(array, array[0], array[2])

array[2] = 4

console.log(array)

let numsTwo = [1, 2, 3]

console.log(nums == numsTwo) //false because they are different objects (reference types)

let user1 = {
    name: 'Furkan',
    age: 24
}

let user2 = {
    name: 'Furkan',
    age: 24
}

console.log(user1 == user2) //false because they are different objects (reference types)

let user3 = user1

console.log(user1 == user3) //true because reference value is assigned to user3


/* Numbers */
let age = 24
const gravity = 9.81

/* Math Object */

console.log(Math) //all math functions are stored in this object

const PI = Math.PI

console.log(PI)
console.log(Math.round(PI)); // 3 to round values to the nearest number
console.log(Math.floor(PI)); // 3 to round values down
console.log(Math.ceil(PI)); // 4 to round values up
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5 returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20 returns the maximum value
const randNum = Math.random(); // creates random number between 0 and 1
console.log(randNum);
console.log(Math.round(randNum * 10)); // random number between 0 and 10
console.log(Math.round(randNum * 100)); // random number between 0 and 100
console.log(Math.abs(-10)); // 10 returns the absolute value
console.log(Math.sqrt(100)); // 10 returns the square root
console.log(Math.pow(3, 2)); // 9 returns the power
console.log(Math.E); // 2.718

/* Strings */
let space = ' ';
let singleQuote = 'Single Quote';
let doubleQuote = "Double Quote";
let backTick = `Back Tick`;

console.log(space, singleQuote, doubleQuote, backTick);

/* String Concatenation */
let firstName = 'Furkan';
let lastName = 'Bircan';

let fullName = firstName + space + lastName; //concatenation, merging two string together
console.log(fullName);

/* Long Literal Strings */
// A string could be a single character or paragraph or a page. If the string length is too long, we can use the backslash character (\) to continue it on the next line.
let paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit\
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'; 

console.log(paragraph);

/* Escape Sequences in Strings */
// \n: new line
// \t: new tab
// \\: backslash
// \': single quote
// \": double quote
let escape = 'This is a string with single quote (\') and double quote (\") and backslash (\\)';
console.log(escape);

/* Template Literals */
let tempLiteral
tempLiteral = `This is a template literal`;
console.log(tempLiteral);

let tempLiteralTwo = `Hello ${firstName} ${lastName}`;

let tempLiteralThree = `${numOne} is equal to ${numTwo} is ${numOne == numTwo}`;

/* Strings Methods */
//Everything in JavaScript is an object, and strings have useful methods

//length
let jsStr = 'JavaScript';

console.log(jsStr.length); //10 returns the length of the string

//lastindex
let lastIndex = jsStr.length - 1;
console.log(jsStr[lastIndex]); //t returns the last character

//lowercase and uppercase
console.log(jsStr.toLowerCase()); //javascript
console.log(jsStr.toUpperCase()); //JAVASCRIPT

//substring
console.log('substring ->',jsStr.substring(0, 4)); //Java returns the first 4 characters
console.log('substring ->',jsStr.substring(4)); //Script returns the rest of the characters

console.log('substr ->',jsStr.substr(4)); //Script returns the rest of the characters

//split
console.log(jsStr.split('')); //['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'] returns an array of characters

let sentence = 'I love JavaScript';
console.log(sentence.split(' ')); //['I', 'love', 'JavaScript'] returns an array of words

//trim
let jsStrTwo = ' JavaScript ';
console.log(jsStrTwo.trim()); //JavaScript removes whitespace from both ends

//includes (its case sensitive)
console.log(jsStr.includes('Java')); //true checks if a substring is in the string

//replace, replaceAll
console.log(jsStr.replace('Java', 'Python')); //PythonScript replaces a substring with another substring


//indexOf, lastIndexOf (if doesn't exist returns -1)
console.log(jsStr.indexOf('a')); //1 returns the first index of a character
console.log(jsStr.lastIndexOf('a')); //3 returns the last index of a character

//startsWith, endsWith
console.log(jsStr.startsWith('Java')); //true checks if the string starts with a substring
console.log(jsStr.endsWith('Script')); //true checks if the string ends with a substring

//search
console.log(jsStr.search('a')); //1 returns the first index of a character

//match
let string = 'I love JavaScript';
let patternOne = /love/; //without any flag (regex)
let patternTwo = /love/gi; //g-means to search in the whole text, i - case insensitive (regex)

console.log(string.match(patternOne)); //['love'] returns an array of the matched string
console.log(string.match(patternTwo)); //['love'] returns an array of the matched string

//example
let txt = 'In 2019, I run 30 days of Python. Now, in 2021, I super exited to start this challenge';
let regEx = /\d+/; //d-means digits, + - one or more digits (regex)
let patternG = /\d+/g; //d-means digits, + - one or more digits (regex)

console.log(txt.match(regEx)); //['2019'] returns an array of the matched string

//repeat
console.log(jsStr.repeat(2)); //JavaScriptJavaScript repeats the string

/* Casting (changing data type) */
//Casting is the process of changing the data type of a value to another data type

//String to Number
//parseInt, parseFloat, Number, plus sign (+)
let number = '10';
console.log(parseInt(number)); //10 converts string to integer
console.log(parseFloat(number)); //10.0 converts string to float
console.log(Number(number)); //10 converts string to number
console.log(+number); //10 converts string to number