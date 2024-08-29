/* Functions */
// a function is a reusable block of code or programming statement designed to perform a certain task. A function is declared by a function key word followed by a name, followed by parentheses

// a function can take parameters, which are values you supply to the function so that the function can perform its task. When you call a function that takes parameters, you specify the values to pass in the parentheses that follow the function name.

//a function can be declared or created in couple of ways
//1. Declaration function
//2. expression function
//3. anonymous function
//4. arrow function

//1. Function Declaration

//declaring a function without a parameter
function functionName(parameters) {
    // code to be executed
}

functionName(); //calling the function

//Function without a parameter and return

//function without parameter, a function which make a number square
function square() {
    let num = 5;
    let result = num * num;
    console.log(result);
}

//Function returning a value

//function can also return values, if a function does not return value of the function is undefined. Let us write the above functions with return. From now on, we return value to a function instead of printing it.

function printFullName() {
    let firstName = "John";
    let lastName = "Doe";
    let fullName = `${firstName} ${lastName}`;
    return fullName;
}

let output = printFullName();
console.log(output);

//Function with parameter

//In a function we can pass different data types(number, string, boolean, object, array, function) as a parameter. Let us write a function which takes a number as a parameter and return the square of the number.

//function with one parameter
function functionWithParameter(param1,param2) {
    //code to be executed
}

//functionWithParameter(param1,param2);

//function with many parameters

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let arr = [1, 2, 3, 4, 5];

let output2 = sumArray(arr);

console.log('Total',output2);

function sumParameters(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i]; //arguments is an array like object
    }
    return sum;
}

let output3 = sumParameters(1, 2, 3, 4, 5);

console.log('Total',output3);

/* Anonymous Function */

//An anonymous function is a function without a name. An anonymous function is often not accessible after its initial creation. Let us write the above function as an anonymous function.

let squareOfNumber = function (num) {
    return num * num;
}

let output4 = squareOfNumber(5);

console.log('Square of number',output4);

/* Expression Function */

// expression functions are anonymous functions that are assigned to a variable. The variable can be used to call the function.

let squareOfNumber2 = function (num) {
    return num * num;
}

let output5 = squareOfNumber2(5); //calling the function (25) 

console.log('Square of number',output5);

/* Self Invoking Function */

//A self-invoking function is a function that runs as soon as it is defined. Let us write the above function as a self-invoking function.

(function (num) {
    console.log(num * num);
})(2); //4, but instead of just printing if we want to return and store the data, we do as shown below

//Option 2
let output6 = (function (num) {
    return num * num;
})(2); //4


/* Arrow Function */

//Arrow functions allow us to write shorter function syntax. Let us write the above function as an arrow function.

//regular function
function squareOfNumberRegular(num) {
    return num * num;
}

let output7 = squareOfNumberRegular(5); //25

console.log('Square of number',output7);



//arrow function
//let squareOfNumberArrow = (num) => num * num; //if the function has only one line of code, we can remove the curly braces and return keyword
let squareOfNumberArrow = (num) => {
    return num * num;
}

let output8 = squareOfNumberArrow(5); //25

console.log('Square of number',output7);

//rest parameter

//The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

//regular function
function sumParameters2(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

let output9 = sumParameters2(1, 2, 3, 4, 5);

console.log('Total',output9);

//arrow function
let sumParameters3 = (...args) => {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

let output10 = sumParameters3(1, 2, 3, 4, 5);

console.log('Total',output10);

//default parameter

//default parameter allows you to initialize a function with default values if no value is passed to the function. Let us write the above function with default parameter.

//regular function
function sumParameters4(num1 = 0, num2 = 0) {
    return num1 + num2;
}

let output11 = sumParameters4(1, 2);

console.log('Total',output11);

//arrow function
let sumParameters5 = (num1 = 0, num2 = 0) => num1 + num2;

let output12 = sumParameters5(1, 2);

console.log('Total',output12);

//call vs invoke

function test(){

}

//call
test();

//invoke

function invoker(func){
    func();
}

invoker(test);
