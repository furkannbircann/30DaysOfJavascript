/* Console Object Methods */
/* We use console object methods to show output on the browser console and we use document.write to show output on the browser
document (view port). Both methods used only for testing and debugging purposes. The console method is the most popular testing and
debugging tool on the browser. We use document.getElementByld() when we like to interact with DOM try using JavaScript. */

//console.log()

//The console.log() method is used to log output to the console. It can take any type of data as an argument and log it to the console.

console.log('Hello!');

console.log('%d %s of JavaScript', 30, 'Days');

console.log('%c 30 Days Of JavaScript', 'color: green; font-size: 30px; font-weight: bold'); //Styled console log

console.log(['30', 'Days', 'Of', 'JavaScript']);

console.log({ days: 30, topics: ['JavaScript', 'Node', 'React'] });

//console.warn()

//The console.warn() method is used to log warning message to the console. By default, the warning message will be highlighted with yellow color.

console.warn('This is a warning');

//console.error()

//The console.error() method is used to log error message to the console. By default, the error message will be highlighted with red color.

console.error('This is an error message');

//console.clear()

//The console.clear() method is used to clear the console. The console will be cleared, and a new, blank console will be displayed.

//console.clear();

//console.table()

//The console.table() method is used to log an array of objects as a table.

let names = ['Furkan', 'Osman', 'Filiz', 'Emre'];
console.table(names);

let users = [
    { name: 'Furkan', country: 'Finland', job: 'teacher' },
    { name: 'Osman', country: 'Sweden', job: 'developer' },
    { name: 'Filiz', country: 'Norway', job: 'designer' },
    { name: 'Emre', country: 'Denmark', job: 'programmer' }
    ];
console.table(users);

//console.time() and console.timeEnd()

//The console.time() method is used to start a timer, and console.timeEnd() method is used to stop the timer and log the elapsed time to the console.

console.time('Regular for loop');
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
console.timeEnd('Regular for loop');

console.time('for of loop');
for (const name of names) {
    console.log(name);
}
console.timeEnd('for of loop');

//console.info()

//The console.info() method is used to log information message to the console. By default, the information message will be highlighted with blue color.

console.info('30 Days Of JavaScript Challenge is trending on GitHub');

//console.assert()

//The console.assert() method is used to log a message to the console, only if an expression is false.

console.assert(4 > 3, '4 is greater than 3');
console.assert(3 > 4, '3 is not greater than 4');

//console.group() and console.groupEnd()

//The console.group() method is used to group log output. The console.groupEnd() method is used to end the group log.

console.group('Names');
console.log('Furkan');
console.log('Osman');
console.log('Filiz');
console.groupEnd();

//console.count()

//The console.count() method is used to count the number of times console.count() is called.

console.count('Furkan');
console.count('Osman');
console.count('Furkan');
