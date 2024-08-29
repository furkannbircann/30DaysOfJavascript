/* Loops */

// 1. for loop
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}

// break statement
// The break statement is used to exit a loop.
for (let l = 0; l < 5; l++) {
    if (l === 3) {
        break;
    }
    console.log(l); // 0 1 2
}

// continue statement
// The continue statement is used to skip the current iteration and continue with the next one.
for (let m = 0; m < 5; m++) {
    if (m === 3) {
        continue;
    }
    console.log(m); // 0 1 2 4
}

const names = ['Alice', 'Bob', 'Charlie'];
for (let h = 0; h < names.length; h++) {
    console.log(names[h]); // Alice Bob Charlie
}

// 2. while loop

let j = 0;
while (j < 5) {
    console.log(j); // 0 1 2 3 4
    j++;
}

// 3. do-while loop

let k = 0;
do {
    console.log(k); // 0 1 2 3 4
    k++;
}
while (k < 5);

// 4. for-of loop

const colors = ['red', 'green', 'blue'];
for (const color of colors) {
    console.log(color); // red green blue
}

// 5. for-in loop

const person = {
    name: 'Alice',
    age: 25
};
for (const key in person) {
    console.log(key, person[key]); // name Alice age 25
}

