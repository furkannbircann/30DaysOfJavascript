/* Higher Order Function */

//Higher order functions which take other functions as a parameter or return a function as a value. The function passed as as parameter is called callback function.

//Callback

//a callback is a function, the name of the function could be any name

const callback = n => n ** 2;

function cube (callback, n){
    return callback(n) * n;
}

console.log("Cube ->",cube(callback, 3)); // 27

//Returning Function

const a = s1 => s2 => s3 => s1 + s2 + s3;

/* const a = s1 => {
    return s2 => {
        return s3 => {
            return s1 + s2 + s3;
        }
    }
} */

console.log("Returning Function ->",a(1)(2)(3)); // 6

//Setting Time

//In javascript we can execute some activities in a certain interval of time or we can schedule for some time to execute some activities.

//setInterval
//setTimeout

//Setting interval using a setInterval function

setInterval(() => {
    console.log("Hello World");
}
, 10000);

//Setting time using a setTimeout function

setTimeout(() => {
    console.log("Furkan");
}, 10000);

//clearInterval
//clearTimeout

//clearInterval is used to stop the execution of setInterval function
//clearTimeout is used to stop the execution of setTimeout function

const interval = setInterval(() => {
    console.log("Clear Interval");
}, 1000);

setTimeout(() => {
    clearInterval(interval);
    console.log("Interval Cleared");
}, 5000);
//5 seconds later the interval will be cleared

//Functional Programming

//Functional programming is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.
//forEach, map, filter, reduce, find, every, some and sort

//forEach

//forEach is used to iterate over an array and perform some operation on each element of the array.

const arr = [1, 2, 3, 4, 5];

arr.forEach((element, index) => {
    console.log(`Element ${element} at index ${index}`);
});

//map

//map is used to iterate over an array and perform some operation on each element of the array and return a new array.

const newArr = arr.map((element, index) => {
    return element * 2;
});

console.log("New Array ->",newArr); // [2, 4, 6, 8, 10]

let obj = [
    {
        firstName: 'Asabeneh',
        age: 250
    },
    {
        firstName: 'Mathias',
        age: 34
    },
    {
        firstName: 'Elias',
        age: 25
    },
    {
        firstName: 'Martha',
        age: 54
    },
    {
        firstName: 'John',
        age: 67
    }
];

let people = obj.map((person) => {
    if(person.age < 30){
        person.country = 'Finland';
    }
    return person.firstName.toUpperCase();
});

console.log("People ->",people);
console.log("Object ->",obj);

//filter

//filter is used to filter out the elements of an array based on a condition.

const filteredArr = arr.filter(element => element > 3);


console.log("Filtered Array ->",filteredArr); // [4, 5]

//reduce

//reduce is used to reduce the array to a single value based on some operation.

const sum = arr.reduce((oldValue, currentValue) => oldValue + currentValue, 0);

console.log("Sum ->",sum); // 15

//every

//every is used to check if all the elements of an array satisfy a condition.

const isAllPositive = arr.every(element => element > 0);

console.log("Is All Positive ->",isAllPositive); // true

//some

//some is used to check if some of the elements of an array satisfy a condition.

const isSomePositive = arr.some(element => element > 3);

console.log("Is Some Positive ->",isSomePositive); // true

//find

//find is used to find the first element of an array that satisfies a condition.

const found = arr.find(element => element > 3);

console.log("Found ->",found); // 4

//findIndex

//findIndex is used to find the index of the first element of an array that satisfies a condition.

const foundIndex = arr.findIndex(element => element > 3);

console.log("Found Index ->",foundIndex); // 3

//sort

//sort is used to sort the elements of an array.

const sortedArr = arr.sort((a, b) => a - b);

console.log("Sorted Array ->",sortedArr); // [1, 2, 3, 4, 5]

const stringArr = ['Asabeneh', 'Mathias', 'Elias', 'Martha', 'John'];

const sortedStringArr = stringArr.sort();

console.log("Sorted String Array ->",sortedStringArr); // ["Asabeneh", "Elias", "John", "Martha", "Mathias"]