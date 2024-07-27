// DAY 15 -- Closures
// Activity 1: Understanding Closures
// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerScope() {
    let outerVar = "Hi I am from outer scope";

    function innerFunc() {
        return outerVar;   
    }

    return innerFunc;
}

const myFunction = outerScope();
console.log(myFunction());

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function createCounter() {
    counter = 0;

    return {
        countInc: function() {
            return counter++;
        },
    
        countDec: function() {
            return counter--;
        },

        getValue: () => {
            return counter;
        }
    
    }
}

const myCounter = createCounter();
myCounter.countInc();
myCounter.countInc();
console.log(`Counter: ${myCounter.getValue()}`);
myCounter.countDec();
console.log(`Counter: ${myCounter.getValue()}`);
// Activity 2: Practical Closures
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

const createUniqueIdGenerator = () => {
    let lastId = 0;

    const inner = () => {
        lastId++;
        return lastId;
    }
    
    return inner;
}

const generateId = createUniqueIdGenerator();

console.log(generateId());
console.log(generateId());
console.log(generateId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function greetClosure(name) {
    return function() {
        return `Hii ${name}, You are welcome to Javascript!`;
    }
}
const greetAfran = greetClosure("Afran");
console.log(greetAfran());

// console.log(greetClosure("Afran")());

// Activity 3: Closures in Loops
// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function createFunctionArray() {
    const functions = [];

    for (let i = 0; i < 5; i++) {
        functions.push( ((index) => {
            return () => {
                console.log(index);
            };
        })(i))      
    }
    return functions;
}

const functionArray = createFunctionArray();
for (let i = 0; i < functionArray.length; i++) {
    functionArray[i]();   
}

// Activity 4: Module Pattern
// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

const createItemManager = () => {
    const items = [];

    function addItem(item) {
        items.push(item);
    }

    function removeItem(item) {
        const index = items.indexOf(item);

        if(index > -1) {
            items.splice(index, 1);
        }
    }
    
    function listItems() {
        return items.slice();
    }

    return {
        addItem, removeItem, listItems
    }
}

const itemManager = createItemManager();

itemManager.addItem("Apple");
itemManager.addItem("Banana");
itemManager.addItem("Mango");
itemManager.addItem("Apple");
console.log(itemManager.listItems());

itemManager.removeItem("Banana");

console.log(itemManager.listItems());

// Activity 5: Memoization
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache = new Map(); // Cache to store results

    return function(...args) {
        const key = JSON.stringify(args); // Create a unique key based on the function arguments
        if (cache.has(key)) {
            return cache.get(key); // Return the cached result if it exists
        }
        const result = fn(...args); // Compute the result if not cached
        cache.set(key, result); // Store the result in the cache
        return result; // Return the computed result
    };
}

// Example usage
function expensiveComputation(x, y) {
    console.log('Computing result...');
    return x + y; // Just a simple example
}

function fact(num) {
    let prod =1;
    console.log("Calculating Factorial...");
    
    for(i = num; i>0; i--) {
        prod *= i;
    }

    return prod;
}

const memoizedComputation = memoize(expensiveComputation);

console.log(memoizedComputation(1, 2)); // Output: Computing result... 3
console.log(memoizedComputation(1, 2)); // Output: 3 (cached result, no computation)
console.log(memoizedComputation(3, 4)); // Output: Computing result... 7


// Task 8: Create a memoized version of a function that calculates the factorial of a number

const memoizedFact= memoize(fact);

console.log(memoizedFact(5));
console.log(memoizedFact(3)); 
console.log(memoizedFact(5)); 