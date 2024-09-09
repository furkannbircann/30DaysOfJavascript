// Creating HTML elements

const img = document.createElement("img"); // Creates an img element
img.src = "https://picsum.photos/seed/picsum/300/300"; // Adds src attribute to the img element
img.alt = "Placeholder"; // Adds alt attribute to the img element

const text = document.createElement("p"); // Creates a p element
text.textContent = "This is a placeholder image"; // Adds text to the p element

document.body.appendChild(img); // Appends the img element to the body
//document.body.append(img,text); // Appends the img element to the body more than one element
//document.body.insertBefore(img, document.body.firstChild); // Inserts the img element before the first child of the body
//document.body.removeChild(img); // Removes the img element from the body