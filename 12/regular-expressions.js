/* Regular Expressions */

/*

A regular expression or RegExp is a small programming language that helps to find pattern in data. A RegExp can be used to check if some
pattern exists in a different data types. To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern
using two forward slashes followed by a flag. We can create a pattern in two ways. 

To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an
optional flag. The flag could be g, i, m, s, u or y.

*/

//RexExp Parameters

//A regular expression takes two parameters. One required search pattern and an optional flag.

//Pattern

/* A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we
are interested to look for in an email or a phone number format number might be our interest to look for. */

//Flags

/* 
Flags are optional parameters in a regular expression which determine the type of searching. Let us see some of the flags:
• g: a global flag which means looking for a pattern in whole text
• i: case insensitive flag(it searches for both lowercase and uppercase)
• m: multiline 
*/

//Creating a pattern with RegExp constructor

let pattern = 'love';
let flag = 'gi';
let regExp = new RegExp(pattern,flag);

//Creation a pattern with forward slashes

let regExp2 = /love/gi;

//RegExp Object Methods

//Testing for match

/* The test() method is used to test for a match in a string. It returns true if it finds a match, otherwise it returns false. */

let comment = 'I love JavaScript';
let regExp3 = /love/;

let comment2 = 'I LOVE JavaScript';
let regExp4 = /love/i;

console.log(regExp3.test(comment)); //true
console.log(regExp3.test(comment2)); //false (case sensitive)
console.log(regExp4.test(comment2)); //true (case insensitive)

//Array Containing all of the match

/* The match() method is used to get all the matches in an array. */

let comment3 = 'I LOVE JavaScript and I love Python';
let regExp5 = /love/;
let regExp6 = /love/i;
let regExp7 = /love/gi;

console.log(comment3.match(regExp5)); //    [ 'love', index: 24, input: 'I LOVE JavaScript and I love Python', groups: undefined ]
console.log(comment3.match(regExp6)); //    [ 'LOVE', index: 2, input: 'I LOVE JavaScript and I love Python', groups: undefined ]
console.log(comment3.match(regExp7)); //    [ 'LOVE', 'love' ]

//Search() Method

/* The search() method is used to search for a match in a string. It returns the index of the match, if not found it returns -1. */

let comment4 = 'I LOVE JavaScript and I love Python';

console.log(comment4.search(regExp5)); //24
console.log(comment4.search(regExp6)); //2
console.log(comment4.search(regExp7)); //2

//Replacing a string

/* The replace() method is used to replace a string with another string. */

const txt = 'Python is the most beautiful language that a human begin has ever created. Python is the best language to learn';

let matchReplaced = txt.replace(/Python|python/,'JavaScript');
let matchReplaced2 = txt.replace(/(P|p)ython/g,'JavaScript');
let matchReplaced3 = txt.replace(/python/gi,'JavaScript');

console.log(matchReplaced); //JavaScript is the most beautiful language that a human begin has ever created . Python is the best language to learn
console.log(matchReplaced2); //JavaScript is the most beautiful language that a human begin has ever created . JavaScript is the best language to learn
console.log(matchReplaced3); //JavaScript is the most beautiful language that a human begin has ever created . JavaScript is the best language to learn

/* [] : A set of characters */
//It is used to find a range of characters.
//For example, [abc] will match any of the characters a, b, or c.
//You can also specify a range of characters using a hyphen.
//For example, [a-z] will match any lowercase letter.

let txt2 = 'Hello World';
let regExp8 = /[a-z]/g;

console.log(txt2.match(regExp8)); // [ 'e', 'l', 'l', 'o', 'o', 'r', 'l', 'd' ]

// (\) : Backslash
//It is used to escape a character.
//For example, \d will match any digit character.

let txt3 = 'The cost of the item is $5.99';
let regExp9 = /\d/g;

console.log(txt3.match(regExp9)); // [ '5', '9', '9' ]

// \D : Non-digit character
//It is used to match any non-digit character.
//For example, \D will match any non-digit character.

let txt4 = 'The cost of the item is $5.99';
let regExp10 = /\D/g;

console.log(txt4.match(regExp10)); // [ 'T', 'h', 'e', ' ', 'c', 'o', 's', 't', ' ', 'o', 'f', ' ', 't', 'h', 'e', ' ', 'i', 't', 'e', 'm', ' ', 'i', 's', ' ', '$', '.' ]

// . : any character except new line character(\n)
//It is used to match any character except a newline character.
//For example, /.n/ will match any character followed by n.

let txt5 = 'Hello World';
let regExp11 = /.l/g;

console.log(txt5.match(regExp11)); // [ 'el', 'ol' ]

// ^ : Starts with
//It is used to check if a string starts with a certain character.
//For example, /^H/ will check if a string starts with H.

let txt6 = 'Hello World';
let regExp12 = /^H/g;
let regExp13 = /^h/g;

let regExp14 = /[^a-z]/g;

console.log(txt6.match(regExp12)); // [ 'H' ]
console.log(regExp12.test(txt6)); // true

console.log(txt6.match(regExp13)); // null
console.log(regExp13.test(txt6)); // false

console.log(txt6.match(regExp14)); // [ 'H', ' ', 'W' ]
console.log(regExp14.test(txt6)); // true

// $ : Ends with
//It is used to check if a string ends with a certain character.
//For example, /d$/ will check if a string ends with d.

let txt7 = 'Hello World';
let regExp15 = /d$/g;
let regExp16 = /D$/g;

console.log(txt7.match(regExp15)); // [ 'd' ]
console.log(regExp14.test(txt7)); // true

console.log(txt7.match(regExp16)); // null
console.log(regExp15.test(txt7)); // false

// * : Zero or more
//It is used to match zero or more characters.
//For example, /go*d/ will match god, gd, god, good, goood, etc.

let txt8 = 'gooooooood';
let regExp17 = /go*d/g;

console.log(txt8.match(regExp17)); // [ 'gooooooood' ]

// + : One or more
//It is used to match one or more characters.
//For example, /go+d/ will match god, good, goood, etc.

let txt9 = 'gooooooood';
let regExp18 = /go+d/g;

console.log(txt9.match(regExp18)); // [ 'good' ]

// ? : Zero or one
//It is used to match zero or one character.
//For example, /go?d/ will match god and gd.

let txt10 = 'gooooooood';
let regExp19 = /go?d/g;

console.log(txt10.match(regExp19)); // [ 'gd' ]

 // \b : Word boundary
//It is used to match a word boundary.
//A word boundary is a place where a word starts or ends.
//For example, /\bno/ will match the no in the word nook.

let txt11 = 'nook';
let regExp20 = /\bno/g;

console.log(txt11.match(regExp20)); // [ 'no' ]

// {n} : Exactly n
//It is used to match exactly n number of characters.
//For example, /o{2}/ will match the oo in goood.

let txt12 = 'gooooooood';
let regExp21 = /o{2}/g;

console.log(txt12.match(regExp21)); // [ 'oo', 'oo', 'oo' ]

// {n,} : At least n
//It is used to match at least n number of characters.
//For example, /o{2,}/ will match all the o's in goood.

let regExp22 = /o{2,}/g;

console.log(txt12.match(regExp22)); // [ 'ooooooo' ]

// {n,m} : Between n and m
//It is used to match between n and m number of characters.
//For example, /o{2,4}/ will match gooo in goood.

let regExp23 = /o{2,4}/g;

console.log(txt12.match(regExp23)); // [ 'oooo' ]

// (x) : Capturing group
//It is used to capture a group of characters.
//For example, /(go)+/ will capture go in gogogo.

let txt13 = 'gogogo';
let regExp24 = /(go)+/g;

console.log(txt13.match(regExp24)); // [ 'gogogo' ]

