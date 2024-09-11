//PreventDefault

/*

The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

*/

// Example

const aTags = document.querySelectorAll("a");

aTags.forEach((a) => {
  a.addEventListener("click", (e) => {
    if (e.target.getAttribute("href").includes("https")) {
      if (!confirm("Are you sure you want to leave this page?")) {
        e.preventDefault();
      }
    }
  });
});

//stopPropagation

/*

The stopPropagation() method prevents further propagation of the current event in the capturing and bubbling phases.

stopImmediatePropagation() method also prevents other event listeners from being called.

*/

// Example

const test1 = document.querySelector(".test1");
const test2 = document.querySelector(".test2");
const test3 = document.querySelector(".test3");

//test3.addEventListener('click', e => console.log('test3 clicked'))
test1.addEventListener("click", (e) => console.log("test1 clicked"));
test2.addEventListener("click", (e) => console.log("test2 clicked"));

/* 

test3 clicked
test2 clicked
test1 clicked

In nested elements, when the event of the innermost element runs, the events of the other elements also run. stopPropagation is used to prevent this.

*/

test3.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("test3 clicked");
});

//CSSStyleDeclaration

/*

The CSSStyleDeclaration interface represents an object that is a CSS declaration block, and exposes style information and various style-related methods and properties.

*/

// SetProperty

const h1 = document.querySelectorAll("h1");

h1.forEach((h) => {
  h.style.setProperty("color", "red", "important");
});

//GetPropertyValue

/*

The getPropertyValue() method of the CSSStyleDeclaration interface returns the value of a specified CSS property.Only removes styles added with javascript. Does not remove styles defined in the CSS file.

*/
const h1Title = document.getElementById("title");

console.log("h1 title color value", h1Title.style.getPropertyValue("color"));

//getPropertyPriority

/*

The getPropertyPriority() method of the CSSStyleDeclaration interface returns the priority of a CSS property (e.g. the "important" qualifier) if the property has been explicitly set with this priority.

*/

console.log(
  "h1 title color priority",
  h1Title.style.getPropertyPriority("color")
);

//RemoveProperty

/*

The removeProperty() method of the CSSStyleDeclaration interface removes a property from a CSS style declaration object. Only removes styles added with javascript. Does not remove styles defined in the CSS file.

*/

//h1Title.style.removeProperty('color')

//If we want to access the styles specified with css we can use document.styleSheets.

//console.log(document.styleSheets[0].cssRules[0].style.getPropertyValue('color'))

//MediaqueryList

/*

The MediaQueryList interface provides the ability to listen to media query state changes.

*/

//window.matchMedia

const mediaQuery = window.matchMedia("(max-width: 600px)");
console.log(mediaQuery.matches);
console.log(mediaQuery.media);

const isMobile = window.matchMedia("(max-width: 600px)");

function mobileHandler() {
  if (isMobile.matches) {
    document.body.classList = "mobile";
  } else {
    document.body.classList.remove("mobile");
  }
}
mobileHandler();
isMobile.addEventListener("change", mobileHandler);

//window.designMode

/*

The designMode property sets or returns whether the document is editable or not.

*/

//document.designMode = 'on'

//selectionStart and selectionEnd

/*

The selectionStart property returns the starting position of the selected text in a text area or text field.

The selectionEnd property returns the end position of the selected text in a text area or text field.

*/

const input = document.getElementById("input");

input.addEventListener("select", (e) => {
  console.log(
    "selected text:",
    e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
  );
});

//setRangeText

/*

The setRangeText() method of the InputElement interface sets the text content of the element's value, optionally replacing a selection.

*/
const textarea = document.querySelector("textarea");
const actionButton = document.querySelectorAll(".action-btn");

actionButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let selectedText = textarea.value.substring(
      textarea.selectionStart,
      textarea.selectionEnd
    );
    switch (e.target.dataset.type) {
      case "bold":
        selectedText = `<b>${selectedText}</b>`;
        break;
      case "italic":
        selectedText = `<i>${selectedText}</i>`;
        break;
      case "uppercase":
        selectedText = selectedText.toLocaleUpperCase("TR");
        break;
    }
    textarea.setRangeText(
      selectedText,
      textarea.selectionStart,
      textarea.selectionEnd,
      "select"
    );
  });
});

//stepUp and stepDown

/*

The stepUp() method increments the value of the number field by the specified step.

The stepDown() method decrements the value of the number field by the specified step.

*/

const inputs = document.querySelectorAll('input.test')
	const incrementButton = document.getElementById('increment-button')
	const decrementButton = document.getElementById('decrement-button')

	incrementButton.addEventListener('click', () => {
		inputs.forEach(input => {
			input.stepUp()
		})
	})

	decrementButton.addEventListener('click', () => {
		inputs.forEach(input => {
			input.stepDown()
		})
	})

//showPicker

/*

The showPicker() method of the HTMLInputElement interface displays the color picker dialog.

*/