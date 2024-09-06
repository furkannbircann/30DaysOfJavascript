/* Closure */

/*

JavaScript allows writing function inside an outer function. We can write as many inner functions as we want. If inner function access the
variables of outer function then it is called closure.

*/

function counter() {
    var count = 0;
    function increment() {
        count++;
        return count;
    }
    return increment;
}

let counterFunc = counter();
console.log(counterFunc()); // 1
console.log(counterFunc()); // 2
console.log(counterFunc()); // 3

//example

function outerFunction() {
    let count = 0;
    function plusOne() {
        count++;
        return count
    }

    function minusOne() {
        count--;
        return count
    }

    return {
        plusOne,
        minusOne
    }
}

let obj = outerFunction();
console.log(obj.plusOne()); // 1
console.log(obj.plusOne()); // 2

console.log(obj.minusOne()); // 1
console.log(obj.minusOne()); // 0