// Day 12: Error Handling
/*
// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
    throw new Error("This is an intentional error");
}

try {
    throwError()
} catch(e) {
    console.log("An error occured:",e.message);
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try- catch block to handle this error.
function divide(num, denom) {
    try {
        if(denom === 0) throw new Error("Cannot divide by Zero");
        let res = num/denom;
        console.log(res);
    } catch(e) {
        console.log("An error occured:",e.message);
    }
} 

divide(5,0);

// Activity 2: Finally Block
// Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

const demoFinally = () => {
    try {
        console.log("Inside try block");
        // Intentionally throw an error
        throw new Error("Something went wrong");
    } catch (err) {
        console.log("Uh Error!", err.message);
    } finally {
        console.log("Inside Finally, I'll run regardless try executes or catch");
    }
}

demoFinally();

// Activity 3: Custom Error Objects
// Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomErrorFunc() {
    throw new CustomError("This is a custom error.")
}

function handleCustomError() {
    try {
        divide(5,0);
        throwCustomErrorFunc();
    } catch (err) {
        if(err instanceof CustomError) {
            console.error("Caught a custom error: ", err.message);
        } else {
            console.error("Error: ", err)
        }
    }
}

handleCustomError();
*/
// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateUserDetails(name, password) {
    if(name.trim() === "") {
        throw new ValidationError("Name cannot be empty");
    } else if(password.trim() === "") {
        throw new ValidationError("Password cannot be empty");
    } else if(password.trim() !== "Afr@123") {
        throw new ValidationError("Password is wrong");
    } else {
        console.log("User details:\nName: Afran\nPassword: ******");
    }
}

function handleUserDetails(name, password) {
    try {
        validateUserDetails(name, password);
    } catch (err) {
        console.error("Error is: ", err.message);
    }
}


handleUserDetails("", "");
// handleUserDetails("Afran", "");
// handleUserDetails("Afran", "gscvdg");
// handleUserDetails("Afran", "Afr@123");

// Activity 4: Error Handling in Promises
// Task 6: Create a promise that randomly resolves or rejects. Use catch() to handle the rejection and log an appropriate message to the console.
const myPromise = new Promise((resolve, reject) => {
        let num = Math.random();
        if(num > 0.5) {
            resolve("Promise success");
        } else {
            reject("Promise rejected");
        }
});
myPromise.then((message) => {
    console.log(message);
}).catch( (err) => {
    console.log(err);
});

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function handlePromiseFunc() {
    try {
        const result = await myPromise;
        console.log("Async resolved: ", result);
    } catch(err) {
        console.log("Async reject:", err);
    }
}

handlePromiseFunc()

// Activity 5: Graceful Error Handling in Fetch
// Task 8: Use the fetch API to request data from an invalid URL and handle the error using.catch(). Log an appropriate error message to the console. 
const invalidUrl = "https://invalid-url.example.com";
//const invalidUrl = "https://api.thecatapi.com/v1/images/search";

fetch(invalidUrl)
.then(res => {
    if(!res.ok) {
        throw new Error("Network response was not OK");
    }
    return res.json();
}).then( data => {
    console.log("Data Received:", data[0].url);
}).catch( err => {
    console.error("Fetch Error:", err.message);
});

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchCat() {
    try {
        let res = await fetch(invalidUrl);
        console.log("Response:",res.statusText);
        if(!res.ok) {
            throw new Error("Network response was not OK");
        }
        
        let data = await res.json();

        return data;
    } catch(err) {
        console.error("Async Fetch Error:", err.message);
    }
}

fetchCat()

// -------- DONE --------