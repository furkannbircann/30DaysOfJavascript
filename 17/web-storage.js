/* WEB STORAGE */

/*

Web Storage(sessionStorage and localStorage) is a new HTML5 API offering important benefits over traditional cookies. Before HTML5,
application data had to be stored in cookies, included in every server request. Web storage is more secure, and large amounts of data cal
be stored locally, without affecting website performance. The data storage limit of cookies in many web browsers is about 4 KB per cookie.
We Storages can store far larger data (at least 5MB) and never transferred to the server. All sites from the same or one origin can store and
access the same data.
The data being stored can be accessed using JavaScript, which gives you the ability to leverage client-side scripting to do many things that
have traditionally involved server-side programming and relational databases. There are two Web Storage objects:


1. sessionStorage
2. localStorage

localStorage is similar to sessionStorage, except that while data stored in localStorage has no expiration time, data stored in sessionStorage
gets cleared when the page session ends - that is, when the page is closed.

It should be noted that data stored in either localStorage or sessionStorage is specific to the protocol of the page.

The keys and the values are always strings (note that, as with objects, integer keys will be automatically converted to strings).


sessionStorage -> sessionStorage is only available within the browser tab or window session. It's designed to store data in a single web page session. That
means if the window is closed the session data will be removed. Since sessionStorage and localStorage has similar methods, we will focus
only on localStorage.

localStorage -> The HTML5 localStorage is the para of the web storage AP| which is used to store data on the browser with no expiration data. The data will
be available on the browser even after the browser is closed. localStorage is kept even between browser sessions. This means data is still
available when the browser is closed and reopened, and also instantly between tabs and windows.

Web Storage data is, in both cases, not available between different browsers. For example, storage objects created in Firefox cannot be
accessed in Internet Explorer, exactly like cookies. There are five methods to work on local storage: setitem (), get/tem (), remove/tem,
clear (, key)


Use case of web storage
- Store data temporarily
- saving products that the user places in the shopping cart
- data can be made available between page requests, multiple browser tabs, and also between browser sessions using localStorage
- can be used offline completely using localStorage
- Web Storage can be a great performance win when some static data is stored on the client to minimize the number of subsequent
  requests. Even images can be stored in strings using Base64 encoding.
- can be used for user authentication method


• localStorage - to display the localStorage object
• localStorage.clear()) - to remove everything in the local storage
• localStorage setItem() - to store data in the localStorage. It takes a key and a value parameters.
• localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
• localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
• localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.

*/  

//Setting item to the local storage
localStorage.setItem('name', 'Furkan')
console.log(localStorage)

let user = {
    name: 'Furkan',
    age: 25
}

localStorage.setItem('user', JSON.stringify(user))

let data = ["apple", "banana", "orange"]

localStorage.setItem('fruits', JSON.stringify(data))

//Getting item from the local storage
console.log(localStorage.getItem('name'))
//console.log(localStorage.removeItem('name'))
//console.log(localStorage.clear())
console.log(localStorage.key(0))
console.log(localStorage.length)