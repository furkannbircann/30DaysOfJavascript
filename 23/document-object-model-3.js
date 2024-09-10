/* DOM (Document Object Model) 3 */

/*

Event Listeners

Common HTML events:onclick, onchange, onmouseover, onmouseout, onkeydown, onkeyup, onload. We can add event listener method to
any DOM object. We use addEventListener () method to listen different event types on HTML elements. The addEventListener () method
takes two arguments, an event listener and a callback function.

*/

// Click

//To attach an event listener to an element, first we select the element then we attach the addEventListener () method to the element.
//The event listener takes event type and callback functions as argument.

/*
document.getElementById('btn').addEventListener('click', e => {
    console.log('e', e)
});


document.getElementById('btn').addEventListener('dblclick', e => {
    console.log('e', e)
});

document.getElementById('btn').addEventListener('mouseenter', e => {
    console.log('e', e)
});

document.getElementById('btn').addEventListener('mousemove', e => {
    console.log('e', e)
});

• click - when the element clicked
• dblclick - when the element double clicked
• mouseenter - when the mouse point enter to the element
• mouseleave - when the mouse pointer leave the element
• mousemove - when the mouse pointer move on the element
• mouseover - when the mouse pointer move on the element
• mouseout -when the mouse pointer out from the element
• input -when value enter to input field
• change -when value change on input field
• blur -when the element is not focused
• keydown - when a key is down
• keyup - when a key is up
• keypress - when we press any key
• onload - when the browser has finished loading a page

*/
let color;
document.getElementById('color-picker').addEventListener('input', e => {   
    color = e.target.value;
} );

document.getElementById('btn').addEventListener('click', e => { 
    document.body.style.backgroundColor = color;
});

document.body.addEventListener('keyup', e => {
    console.log(e.code, e.key);
} );