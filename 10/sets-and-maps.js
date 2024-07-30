/* SET */

// Set is a collection of unique values.

// Creating a Set
const set = new Set();

console.log(set); // Set {}

//Creating set from an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9];

const setFromNumbers = new Set(numbers);

console.log(setFromNumbers); // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9 }

//Set is an iterable object and we can iterate through each elements using for of loop

for (const num of setFromNumbers) {
  console.log(`Element -> ${num}`);
}

/* setFromNumbers.forEach((num) => {
  console.log(`Element -> ${num}`);
} */

//filter, map, reduce can't be used directly on set. We need to convert set to array before using them.
let filtered = [...setFromNumbers].filter((num) => num > 5); // [6, 7, 8, 9]

console.log("Filtered ->", filtered);

//Adding an element to a set
setFromNumbers.add(10);
console.log(setFromNumbers); // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

//with loop
const numbersToAdd = [11, 12, 13, 14, 15];

for (const num of numbersToAdd) {
  setFromNumbers.add(num);
}

console.log("Added element with loop", setFromNumbers); // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 }

//Deleting an element from a set
setFromNumbers.delete(15);

console.log("Deleted element (15)", setFromNumbers); // Set { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 }

//Checking an element in a set
console.log(setFromNumbers.has(14)); // true

//Size of a set
console.log("Size of set", setFromNumbers.size); // 14

//Clearing a set
setFromNumbers.clear();

console.log("Cleared set", setFromNumbers); // Set {}

//Array to Set (unique values), other use case of set. For instance to count unique item in array.
const names = ["John", "Doe", "Jane", "Doe", "John"];

const uniqueNames = new Set(names);

console.log("Unique names", uniqueNames); // Set { 'John', 'Doe', 'Jane' }

//example
const languages = ["English", "French", "Spanish", "English", "French"];

const langSet = new Set(languages);

const counts = [];

for (const lang of langSet) {
  const filteredLang = languages.filter((l) => l === lang);
  counts.push({ lang, count: filteredLang.length });
}
console.log("Language count", counts); // [ { lang: 'English', count: 2 }, { lang: 'French', count: 2 }, { lang: 'Spanish', count: 1 } ]

//Intersection of sets
let a = [1, 2, 3, 4, 5];
let b = [4, 5, 6, 7, 8];

const B = new Set(b);

console.log(
  "Intersection of sets",
  a.filter((num) => B.has(num))
); // [4, 5]

//Difference of sets
console.log(
  "Difference of sets",
  a.filter((num) => !B.has(num))
); // [1, 2, 3]

/* MAP */

// Map is a collection of key-value pairs.

//Creating a Map
const map = new Map();

console.log(map); // Map {}

//Creating map from an array
const keyValuePairs = [
  ["name", "John"],
  ["age", 30],
];

const mapFromKeyValuePairs = new Map(keyValuePairs);

console.log(mapFromKeyValuePairs); // Map { 'name' => 'John', 'age' => 30 }

//Creating map from an object
const obj = {
  name: "John",
  age: 30,
};

const mapFromObj = new Map(Object.entries(obj));

console.log(mapFromObj); // Map { 'name' => 'John', 'age' => 30 }

//Adding an element to a map
map.set("name", "Furkan");

console.log(map); // Map { 'name' => 'Furkan' }

//chaining set method
map.set("age", 30).set("city", "New York");

console.log(map); // Map { 'name' => 'Furkan', 'age' => 30, 'city' => 'New York' }

//with loop
const keyValues = [
  ["age", 30],
  ["city", "New York"],
];

for (const [key, value] of keyValues) {
  map.set(key, value);
}

console.log("Added element with loop", map); // Map { 'name' => 'Furkan', 'age' => 30, 'city' => 'New York' }

//Deleting an element from a map
map.delete("city");

console.log("Deleted element (city)", map); // Map { 'name' => 'Furkan', 'age' => 30 }

//Checking an element in a map
console.log(map.has("age")); // true

//Size of a map
console.log("Size of map", map.size); // 2

//Clearing a map
map.clear();

console.log("Cleared map", map); // Map {}

//get value from map
const user = new Map();

user.set("name", "John");

console.log(user.get("name")); // John

//Iterating over a map

//map.keys()
console.log("Keys of map", mapFromObj.keys()); // MapIterator { 'name', 'age' }
for (const key of mapFromObj.keys()) {
  console.log(`Key -> ${key}`);
}

//map.values()
console.log("Values of map", mapFromObj.values()); // MapIterator { 'John', 30 }
for (const value of mapFromObj.values()) {
  console.log(`Value -> ${value}`);
}

//map.entries()
console.log("Entries of map", mapFromObj.entries()); // MapIterator { [ 'name', 'John' ], [ 'age', 30 ] }
for (const [key, value] of mapFromObj.entries()) {
  console.log(`Key -> ${key}, Value -> ${value}`);
}