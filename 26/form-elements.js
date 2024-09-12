// Elements

/*

Form elements are used to collect user input. They are the most important elements in a form. The following form elements are available in HTML:
    
        <input> - defines an input field where the user can enter data
        <textarea> - defines a multi-line input field (a text area)
        <button> - defines a clickable button
        <select> - defines a drop-down list
        <optgroup> - groups related options in a drop-down list
        <option> - defines an option in a drop-down list
        <label> - defines a label for an <input> element
        <fieldset> - groups related elements in a form
        <legend> - defines a caption for a <fieldset> element
        <datalist> - specifies a list of pre-defined options for an <input> element
        <output> - defines the result of a calculation

*/

const form = document.getElementById("form");

console.log("Form elements", form.elements);

//document.forms

/*

The document.forms property returns a collection of all <form> elements in the document.

*/

console.log("Form elements", document.forms);
console.log("Form", document.forms.form);

//submit() Method

/*

The submit() method submits the form (same as clicking the Submit button).

*/

const submitBtn = document.getElementById("submit-btn");

/* 
submitBtn.addEventListener("click", () => {
  form.submit();
});
*/

//reset() Method

/*

The reset() method resets the values of all elements in a form (same as clicking the Reset button).

*/

const resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", () => {
  form.reset();
});

//Validation

/*

HTML5 introduced some new attributes that can be added to form elements to help with form validation:

    required - Specifies that the input field must be filled out
    pattern - Specifies a regular expression that the input field's value is checked against
    min and max - Specifies the minimum and maximum values for an input field
    minlength and maxlength - Specifies the minimum and maximum number of characters for an input field
    step - Specifies the legal number intervals for an input field

*/

//validity Property

/*

The validity property returns a ValidityState object that contains the validity state of an element.

-badInput - The value is not a valid number
-patternMismatch - The value does not match the specified pattern
-rangeOverflow - The value is greater than the maximum value
-rangeUnderflow - The value is less than the minimum value
-stepMismatch - The value does not fit the rules determined by the step attribute
-tooLong - The value is too long
-tooShort - The value is too short
-typeMismatch - The value is not in the correct syntax
-valid - The value is valid
-valueMissing - The value is missing

*/

const email = document.getElementById("email");

console.log("Validity", email.validity);

//validationMessage Property

/*

The validationMessage property returns the error message that would be displayed if the user submits the form, but the input value is not valid.

*/

console.log("Validation message", email.validationMessage);

//setCustomValidity() Method, reportValidity() Method, checkValidity() Method

/*

The setCustomValidity() method sets the validationMessage property of an input element.

The reportValidity() method checks if an input element meets its validation criteria. If it does not, it displays the error message.

The checkValidity() method checks if an input element meets its validation criteria. If it does not, it returns false.

*/

document.forms.form.addEventListener("submit", (e) => {
  [...document.forms.form.elements].forEach((element) => {
    if (element.validity.valueMissing) {
      element.setCustomValidity('Required field');
      element.reportValidity();
    }
  });
  if (e.target.checkValidity()) {
    form.submit();
  }
});

//event() and dispatchEvent() Method

/*

The event() method creates a new event.

The dispatchEvent() method dispatches the event to a target.

*/

const clickBtn = document.getElementById("click-btn");

clickBtn.addEventListener("click", (e) => {
  if (e.isTrusted) { // isTrusted property returns a Boolean value that indicates whether or not the event was initiated by the user
    console.log("Button clicked");
  }
  else {
    console.log("Button not clicked");
  }
} );

const event = new Event("click");
  clickBtn.dispatchEvent(event);

//customEvent() Method

/*

The CustomEvent() method creates a new custom event.

*/

// example

const tab = document.querySelector(".tab");
const buttons = tab.querySelectorAll("nav button");
const contents = tab.querySelectorAll(".contents section");

buttons[0].classList.add("active");

[...contents].slice(1).forEach((element) => {
  element.style.display = "none";
} );

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
    contents.forEach((element) => {
      element.style.display = "none";
    });
    contents[index].style.display = "block";

    const event = new CustomEvent("tabChange", {
      detail: {
        index: index,
        content: contents[index],
      },
    });

    tab.dispatchEvent(event);
  });
} );

tab.addEventListener("tabChange", (e) => {
  console.log("Tab change", e.detail);
} );