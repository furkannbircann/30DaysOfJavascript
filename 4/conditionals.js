/* Conditionals */
// if
// In JavaScript, the if statement is used to perform different actions based on different conditions.
if (true) {
  console.log("Hello, World!");
}

//example
let hour = 10;
if (hour < 18) {
  console.log("Good day");
}

// if else
// In JavaScript, the if...else statement is used to perform different actions based on different conditions.
if (false) {
  console.log("Hello, World!");
} else {
  console.log("Goodbye, World!");
}

//example
if (hour < 18) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

// else if
// In JavaScript, the else if statement is used to specify a new condition if the first condition is false.
if (false) {
  console.log("Hello, World!");
} else if (true) {
  console.log("Goodbye, World!");
}

//example
if (hour < 10) {
  console.log("Good morning");
} else if (hour < 20) {
  console.log("Good day");
} else {
  console.log("Good evening");
}

// switch
// In JavaScript, the switch statement is used to perform different actions based on different conditions.
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log("Today is " + day);

//ternary operator
// In JavaScript, the ternary operator is used to perform different actions based on different conditions.
let isNight = false;
let greeting = isNight ? "Good evening" : "Good day";
console.log(greeting);

