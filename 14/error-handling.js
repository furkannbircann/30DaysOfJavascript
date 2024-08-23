/* Error Handling */

/* 

Javascript is a loosely-typed language. Some times you will get a runtime error when you try to access an undefined variable or call undefined function etc.

JavaScript similar to python or Java provides an error-handling mechanism to catch runtime errors using try-catch-finally block.

*/

try {
    // code that may throw an error
} catch (error) {
    // code to handle the error
}
finally {
    // code that will always run
}

//try: wrap suspicious code that may throw an error in try block. The try statement allows us to define a block of code to be tested for errors while it is being executed.

//catch: If an error occurs in the try block, the catch block will catch an exception and execute the code to handle the error.

//finally: The finally block will always execute after the try and catch blocks, regardless of whether an error occurred.

try{
    let firstName = 'John';
    let lastName = 'Doe';
    
    let fullName = firstName + ' ' + surname;
}
catch(error){
    console.log('An error occurred')
    console.log('Name',error.name)
    console.log('Message',error.message)
}
finally{
    console.log('Try-catch block finished');
}

// throw : The throw statement allows you to create a custom error. You can throw an exception when a problem occurs in your code.

/*

throw 'Error'; // generates an exception with a string value'
throw 42; // generates an exception with a number value
throw true; // generates an exception with a boolean value
throw new Error('An error occurred'); // generates an exception with a specified error message

*/

