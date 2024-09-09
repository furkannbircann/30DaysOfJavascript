/* DOM (Document Object Model) 1 */

/* HTML document is structured as a JavaScript Object. Every HTML element has a different properties which can help to manipulate it. It is
possible to get, create, append or remove HTML elements using JavaScript. Check the examples below. Selecting HTML element using
JavaScript is similar to selecting using CSS. To select an HTML element, we use tag name, id, class name or other attributes. */

//Getting Element
/* We can access already created element or elements using JavaScript. To access or get elements we use different methods. The code below
has four h1 elements. Let us see the different methods to access the h1 elements. */

//<h1 class='title' id='first-title'>First </h1>
//<h1 class='title' id='second-title'>Second </h1>
//<h1 class='title' id='third-title'>Third </h1>

// Method 1: getElementByTagName

const h1 = document.getElementsByTagName("h1"); // Returns an array of all h1 elements

console.log("h1 tagName", h1);

/*
h1.forEach(element => {
    console.log(element); // h1 is html collection, so we can't use forEach method directly
});
*/

let len = h1.length;
for (let i = 0; i < len; i++) {
  console.log("H1 elements", h1[i]);
}

[...h1].forEach((element) => {
  console.log("H1 elements foreach", element);
});

// Method 2: getElementByClassName

const h1Class = document.getElementsByClassName("title"); // Returns an array of all elements with class title

console.log("h1 class", h1Class);

let lenClass = h1Class.length;
for (let i = 0; i < lenClass; i++) {
  console.log("H1 elements with class", h1Class[i]);
}

[...h1Class].forEach((element) => {
  console.log("H1 elements with class foreach", element);
});

// Method 3: getElementById

const h1Id = document.getElementById("first-title"); // Returns the element with id first-title

console.log("h1 id", h1Id);

// Method 4: querySelector (returns the first element that matches the query)

const h1Query = document.querySelector(".title + #title"); // Returns the first element that matches the query

console.log("h1 query", h1Query);

// Method 5: querySelectorAll (returns a NodeList)

const h1QueryAll = document.querySelectorAll(".title"); // Returns all elements that matches the query

console.log("h1 query all", h1QueryAll);

h1QueryAll.forEach((element) => {
  console.log("H1 elements query all", element);
});

// Adding Attributes
/* We can add attributes to the HTML elements using JavaScript. We can add class, id, style, etc. to the elements. */

//<h1 class='title' id='first-title'>First </h1>

const h1First = document.getElementById("first-title");
h1First.setAttribute("style", "color: red;"); // Adds style attribute to the h1 element
h1First.setAttribute("class", "title second-class"); // Adds class attribute to the h1 element

// Adding attributes using dot notation
h1First.style.fontSize = "60px"; // Adds style attribute to the h1 element
h1First.title = "First Title"; // Adds title attribute to the h1 element

h1First.classList.add("third-class"); // Adds class attribute to the h1 element

h1First.classList.toggle("fourth-class"); // Adds class attribute to the h1 element if it is not present, otherwise removes it

//Adding text to HTML element
/* We can add text to the HTML elements using JavaScript. We can add text to the elements. */

//<h1 class='title' id='second-title'>Second </h1>

const h1Second = document.getElementById("second-title");
h1Second.textContent = "Adding text to html element"; // Adds text to the h1 element

h1Second.innerHTML = "<u>Adding text to html element</u>"; // Adds text to the h1 element with html tags