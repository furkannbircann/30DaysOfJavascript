/* How to create an empty array */
const arr = [];
const arr2 = Array();
const arr3 = new Array();

console.log(arr, arr2, arr3); // [] [] []

/* How to create an array with values */
const arr4 = [1, 2, 3];
const arr5 = Array(1, 2, 3);
const arr6 = new Array(1, 2, 3);

console.log(arr4, arr5, arr6); // [1, 2, 3] [1, 2, 3] [1, 2, 3]

/* How to create an array with a single value */
const arr7 = Array(3);
const arr8 = new Array(3);
const arr9 = [3];

console.log(arr7, arr8, arr9); // [undefined, undefined, undefined] [undefined, undefined, undefined] [3]

/* Length of Arrays */

console.log("Length of arrays");

console.log(arr.length,arr2.length,arr3.length,arr4.length,arr5.length,arr6.length,arr7.length,arr8.length,arr9.length); // 0 0 0 3 3 3 3 3 1

/* Creating an array using split */
let str = "1,2,3,4,5";
const arr11 = str.split(",");

console.log(arr11); // [ '1', '2', '3', '4', '5' ]

/* Accessing array elements */
// Accessing array elements using index
const arr10 = [1, 2, 3, 4, 5];
console.log(arr10[0]); // 1
console.log(arr10[1]); // 2

/* Accessing array elements using for loop */
// Using for loop
for (let i = 0; i < arr10.length; i++) {
  console.log(arr10[i]); // 1 2 3 4 5
}

/* Modifying an array */
// Changing the value of an element
const arr12 = [1, 2, 3, 4, 5];
arr12[0] = 10;
arr12[1] = 20;

console.log(arr12); // [ 10, 20, 3, 4, 5 ]

/* Methods to manipulate array */
// Array, length, push, pop, shift, unshift, splice, slice, concat, indexOf, lastIndexOf, includes, join, reverse, sort, fill, copyWithin, find, findIndex, filter, map, reduce, some, every, forEach

// Array
const arr13 = Array(3);

console.log(arr13); // [ <3 empty items> ]

// length
// Returns the number of elements in an array
const arr14 = [1, 2, 3, 4, 5];

console.log(arr14.length); // 5

// push
// Adds one or more elements to the end of an array and returns the new length of the array
const arr15 = [1, 2, 3, 4, 5];

arr15.push(6);

console.log(arr15); // [ 1, 2, 3, 4, 5, 6 ]

// pop
// Removes the last element from an array and returns it
const arr16 = [1, 2, 3, 4, 5];

arr16.pop();

console.log(arr16); // [ 1, 2, 3, 4 ]

// shift
// Removes the first element from an array and returns it
const arr17 = [1, 2, 3, 4, 5];

arr17.shift();

console.log(arr17); // [ 2, 3, 4, 5 ]

// unshift
// Adds one or more elements to the beginning of an array and returns the new length of the array
const arr18 = [1, 2, 3, 4, 5];

arr18.unshift(0);

console.log(arr18); // [ 0, 1, 2, 3, 4, 5 ]

// splice
// Adds or removes elements from an array
const arr19 = [1, 2, 3, 4, 5];

arr19.splice(2, 0, 6);

console.log(arr19); // [ 1, 2, 6, 3, 4, 5 ]

// slice
// Returns a shallow copy of a portion of an array into a new array object
const arr20 = [1, 2, 3, 4, 5];

const arr21 = arr20.slice(2, 4);

console.log(arr21); // [ 3, 4 ]

// concat
// Combines two or more arrays into a new array
const arr22 = [1, 2, 3];
const arr23 = [4, 5, 6];

const arr24 = arr22.concat(arr23);

console.log(arr24); // [ 1, 2, 3, 4, 5, 6 ]

// indexOf
// Returns the first index at which a given element can be found in the array, or -1 if it is not present
const arr25 = [1, 2, 3, 4, 5];

console.log(arr25.indexOf(3)); // 2

// lastIndexOf
// Returns the last index at which a given element can be found in the array, or -1 if it is not present
const arr26 = [1, 2, 3, 4, 5, 3];

console.log(arr26.lastIndexOf(3)); // 5

// includes
// Determines whether an array includes a certain element, returning true or false as appropriate
const arr27 = [1, 2, 3, 4, 5];

console.log(arr27.includes(3)); // true

// join
// Joins all elements of an array into a string
const arr28 = [1, 2, 3, 4, 5];

console.log(arr28.join()); // 1,2,3,4,5

// reverse
// Reverses the elements in an array in place
const arr29 = [1, 2, 3, 4, 5];

arr29.reverse();

console.log(arr29); // [ 5, 4, 3, 2, 1 ]

// sort
// Sorts the elements of an array in place and returns the sorted array
const arr30 = [3, 5, 1, 4, 2];

arr30.sort();

console.log(arr30); // [ 1, 2, 3, 4, 5 ]

// fill
// Fills all the elements of an array from a start index to an end index with a static value
const arr31 = [1, 2, 3, 4, 5];

arr31.fill(0, 2, 4);

console.log(arr31); // [ 1, 2, 0, 0, 5 ]

// copyWithin
// Copies a sequence of array elements within the array
const arr32 = [1, 2, 3, 4, 5];

arr32.copyWithin(0, 3, 5);

console.log(arr32); // [ 4, 5, 3, 4, 5 ]

// find
// Returns the value of the first element in the array that satisfies the provided testing function
const arr33 = [1, 2, 3, 4, 5];

const result = arr33.find((element) => element > 3);

console.log(result); // 4

// findIndex
// Returns the index of the first element in the array that satisfies the provided testing function
const arr34 = [1, 2, 3, 4, 5];

const result2 = arr34.findIndex((element) => element > 3);

console.log(result2); // 3

// filter
// Creates a new array with all elements that pass the test implemented by the provided function
const arr35 = [1, 2, 3, 4, 5];

const result3 = arr35.filter((element) => element > 3);

console.log(result3); // [ 4, 5 ]

// map
// Creates a new array with the results of calling a provided function on every element in the array
const arr36 = [1, 2, 3, 4, 5];

const result4 = arr36.map((element) => element * 2);

console.log(result4); // [ 2, 4, 6, 8, 10 ]

// reduce
// Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value
const arr37 = [1, 2, 3, 4, 5];

const result5 = arr37.reduce((accumulator, element) => accumulator + element, 0);

console.log(result5); // 15

// some
// Tests whether at least one element in the array passes the test implemented by the provided function
const arr38 = [1, 2, 3, 4, 5];

const result6 = arr38.some((element) => element > 3);

console.log(result6); // true

// every
// Tests whether all elements in the array pass the test implemented by the provided function
const arr39 = [1, 2, 3, 4, 5];

const result7 = arr39.every((element) => element > 3);

console.log(result7); // false

// forEach
// Calls a function for each element in the array
const arr40 = [1, 2, 3, 4, 5];

arr40.forEach((element) => console.log(element)); // 1 2 3 4 5


