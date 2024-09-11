/* Attributes */

/*

The element.attributes property returns the attributes of the element. The returned value is not an array but a NamedNodeMap object. Therefore array methods
cannot be used, the names of the returned values may differ from browser to browser.

*/

const colorPicker = document.getElementById("color-picker");

for (let attr of colorPicker.attributes) {
  console.log(attr.name, attr.value);
}

//ChildElementCount

/*

The childElementCount property returns the number of child elements an element has.

*/

const list = document.querySelector("ul");
const deleteButton = document.querySelectorAll(".delete-btn");

deleteButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.target.remove();

    if (list.childElementCount === 0) {
      const p = document.createElement("p");
      p.textContent = "There are no items in the list";
      list.appendChild(p);
    }
  });
});

//Children

/*

The children property returns a live HTMLCollection of child elements of an element. The HTMLCollection object is similar to an array but it is not an array.

*/

const children = list.children;

console.log("children", children);

//ClientHeight and ClientWidth

/*

The clientHeight and clientWidth properties return the height and width of an element, including padding but not the border, scrollbar, or margin.

*/

const height = list.clientHeight;
const width = list.clientWidth;

console.log("height", height);
console.log("width", width);

//FirstElementChild and LastElementChild

/*

The firstElementChild and lastElementChild properties return the first and last child element of an element.

*/

const firstChild = list.firstElementChild;
const lastChild = list.lastElementChild;

console.log("firstChild", firstChild);
console.log("lastChild", lastChild);

//NextElementSibling and PreviousElementSibling

/*

The nextElementSibling and previousElementSibling properties return the next and previous sibling element of an element.

*/

const firstItem = list.firstElementChild;
const secondItem = firstItem.nextElementSibling.nextElementSibling;
const previous = secondItem.previousElementSibling.previousElementSibling;

console.log("firstItem", firstItem);
console.log("secondItem", secondItem);
console.log("previous", previous);

//ScrollHeight and ScrollWidth

/*

The scrollHeight and scrollWidth properties return the height and width of an element, including the content which is not visible due to overflow.

*/

const scrollHeight = list.scrollHeight;
const scrollWidth = list.scrollWidth;

console.log("scrollHeight", scrollHeight);
console.log("scrollWidth", scrollWidth);

//ScrollTop and ScrollLeft

/*

The scrollTop and scrollLeft properties set or return the number of pixels an element's content is scrolled vertically or horizontally.

*/

//TagName

/*

The tagName property returns the tag name of an element in uppercase.

*/

const tagName = list.tagName;

console.log("tagName", tagName);

//Methods

//After()

/*

The after() method inserts content after the selected element.

*/

const p = document.createElement("p");

p.textContent = "This is a paragraph";

list.after(p);

//Before()

/*

The before() method inserts content before the selected element.

*/

const h1 = document.createElement("h1");

h1.textContent = "This is a heading";

list.before(h1);

//Append()

/*

The append() method appends an element or a text node as the last child of the selected element.

*/

//Prepend()

/*

The prepend() method appends an element or a text node as the first child of the selected element.

*/

const p1 = document.createElement("p");
const p2 = document.createElement("p");

p1.textContent = "This is the first paragraph";
p2.textContent = "This is the second paragraph";

list.append(p1, p2);
//list.prepend(p1, p2);

//Closest()

/*

The closest() method returns the closest ancestor of the selected element that matches the specified selector.

*/

const item = document.querySelector("li");

const closest = item.closest("ul");

console.log("closest", closest);

//getBoundingClientRect()

/*

The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.

*/

const rect = list.getBoundingClientRect();

console.log("rect", rect);

//hasAttribute()

/*

The hasAttribute() method returns true if an element has the specified attribute, otherwise it returns false.

*/

const li = document.querySelectorAll("li");

li.forEach((item) => {
  if (item.hasAttribute("data-id")) {
    console.log("DATA ID -> LI ->", item.getAttribute("data-id"));
  }
});

//matches()

/*

The matches() method checks if an element matches a specified selector.

*/

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  if (button.matches('button[type="submit"][disabled]')) {
    button.style.backgroundColor = "gray";
    button.style.color = "white";
    button.style.cursor = "not-allowed";
  }
});

//toggleAttribute()

/*

The toggleAttribute() method adds the specified attribute to an element if it is not present, otherwise it removes the attribute.

*/

/* 

const button = document.querySelector("button");

button.addEventListener("click", () => {
  button.toggleAttribute("disabled");
}); 

*/
