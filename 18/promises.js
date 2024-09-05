/* Promise */

/*

A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success
value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final
value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:
• pending: initial state, neither fulfilled nor rejected.
• fulfilled: meaning that the operation completed successfully.
• rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the
associated handlers queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a
corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing
and its handlers being attached.)

As the Promise.prototype.then() and Promise.prototype.catch) methods return promises, they can be chained.

*/

// Callbacks

/*

• call back Let us see a callback function which can take two parameters. The first parameter is err and the second is result. If the err
parameter is false, there will not be error other wise it will return an error.

In this case the err has a value and it will return the err block.

*/

const doSomething = (callback) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    callback("It did not go well", skills); // callback(true, skills);
    callback(false, skills); // callback(false, skills);
  }, 2000);
};

const callback = (err, result) => {
  if (err) {
    return console.log(err);
  }
  return console.log(result);
};

doSomething(callback);

// Promise constructor

/*

We can create a promise using the Promise constructor. We can create a new promise using the key word new followed by the word
Promise and followed by a parenthesis. Inside the parenthesis, it takes a callback function. The promise callback function has two
parameters which are the resolve and reject functions.

*/

const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = [];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something went wrong");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.warn(err);
  });


const url = "https://jsonplaceholder.typicode.com/posts";

const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

fetchData(url)
  .then((data) => console.log(data))
  .catch((error) => console.warn(error));

//async example

/* async -> async and await is an elegant way to handle promises. It is easy to understand and it clean to write 

The word async in front of a function means that function will return a promise. The above square function instead of a value it returns a
promise.

How do we access the value from the promise? To access the value from the promise, we will use the keyword await.

*/ 
const asyncFunction = async () => {
  try {
    const data = await fetch(url)
    const dataJson = await data.json()
    console.log(dataJson);
  } catch (error) {
    console.warn(error);
  }
}

asyncFunction();


